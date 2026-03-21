package web.ecommerce.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import web.ecommerce.model.Product;
import web.ecommerce.model.ProductColor;
import web.ecommerce.service.OrderService;
import web.ecommerce.service.ProductService;

import java.io.IOException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.*;
import java.util.stream.Collectors;

@Controller
@RequestMapping("/admin")
public class AdminController {

    private final ProductService productService;
    private final OrderService orderService;

    @Value("${upload.dir:src/main/resources/static}")
    private String uploadDir;

    public AdminController(ProductService productService, OrderService orderService) {
        this.productService = productService;
        this.orderService = orderService;
    }

    // ── Login ────────────────────────────────────────────────────────────

    @GetMapping("/login")
    public String loginPage() {
        return "admin/login";
    }

    // ── Dashboard ────────────────────────────────────────────────────────

    @GetMapping({"", "/", "/dashboard"})
    public String dashboard(Model model) {
        List<web.ecommerce.model.Order> orders = orderService.getAll();
        List<Product> products = productService.getAll();

        // ── Order stats ───────────────────────────────────────────────────
        long totalRevenue   = orders.stream().mapToLong(web.ecommerce.model.Order::getTotal).sum();
        long completedRev   = orders.stream().filter(o -> "COMPLETED".equals(o.getStatus()))
                                    .mapToLong(web.ecommerce.model.Order::getTotal).sum();
        long pendingCount   = orders.stream().filter(o -> "PENDING".equals(o.getStatus())).count();
        long shippedCount   = orders.stream().filter(o -> "SHIPPED".equals(o.getStatus())).count();
        long completedCount = orders.stream().filter(o -> "COMPLETED".equals(o.getStatus())).count();

        // ── Product stats ─────────────────────────────────────────────────
        long hotCount    = products.stream().filter(Product::isHot).count();
        long onSaleCount = products.stream().filter(p -> p.getDiscount() > 0).count();
        long quanSip     = products.stream().filter(p -> "quan-sip".equals(p.getCategory())).count();
        long viDa        = products.stream().filter(p -> "vi-da".equals(p.getCategory())).count();
        long thatLung    = products.stream().filter(p -> "that-lung".equals(p.getCategory())).count();

        // ── Payment breakdown ─────────────────────────────────────────────
        Map<String, Long> paymentBreakdown = orders.stream()
                .collect(Collectors.groupingBy(
                        o -> o.getPaymentMethod() != null ? o.getPaymentMethod() : "cod",
                        Collectors.counting()));

        // ── Last 7 days orders ────────────────────────────────────────────
        DateTimeFormatter fmt = DateTimeFormatter.ofPattern("dd/MM");
        Map<String, Long> last7Days = new LinkedHashMap<>();
        for (int i = 6; i >= 0; i--) {
            LocalDate day = LocalDate.now().minusDays(i);
            long count = orders.stream()
                    .filter(o -> o.getCreatedAt() != null && o.getCreatedAt().toLocalDate().equals(day))
                    .count();
            last7Days.put(day.format(fmt), count);
        }

        // ── Per-product sales → top products ─────────────────────────────
        Map<String, Long> dashSales = new HashMap<>();
        Map<String, Long> dashRev   = new HashMap<>();
        for (web.ecommerce.model.Order o : orders) {
            if (o.getItems() == null) continue;
            for (web.ecommerce.model.OrderItem item : o.getItems()) {
                String pid = item.getProductId();
                if (pid == null || pid.isBlank()) continue;
                dashSales.merge(pid, (long) item.getQuantity(), Long::sum);
                dashRev.merge(pid,   item.getPrice() * item.getQuantity(), Long::sum);
            }
        }

        long maxSoldVal = 1L;
        List<Map<String, Object>> topProducts = new ArrayList<>();
        for (Map.Entry<String, Long> e : dashSales.entrySet().stream()
                .sorted(Map.Entry.<String, Long>comparingByValue().reversed())
                .limit(5).collect(Collectors.toList())) {
            Product p = products.stream().filter(x -> x.getId().equals(e.getKey())).findFirst().orElse(null);
            if (p == null) continue;
            long rev = dashRev.getOrDefault(e.getKey(), 0L);
            Map<String, Object> row = new LinkedHashMap<>();
            row.put("product", p);
            row.put("sold", e.getValue());
            row.put("revenueFormatted", String.format("%,d", rev).replace(",", ".") + "₫");
            topProducts.add(row);
            if (e.getValue() > maxSoldVal) maxSoldVal = e.getValue();
        }
        final long maxSoldFinal = maxSoldVal;
        topProducts.forEach(row -> row.put("soldPct", (int)((Long) row.get("sold") * 100 / maxSoldFinal)));

        // ── Avg order value ───────────────────────────────────────────────
        long avgOrderValue = orders.isEmpty() ? 0L : totalRevenue / orders.size();

        // ── Revenue by category ───────────────────────────────────────────
        Map<String, String> prodCatMap = products.stream()
                .collect(Collectors.toMap(Product::getId, Product::getCategory, (a, b) -> a));
        Map<String, Long> revByCategory = new LinkedHashMap<>();
        revByCategory.put("quan-sip", 0L);
        revByCategory.put("vi-da", 0L);
        revByCategory.put("that-lung", 0L);
        for (web.ecommerce.model.Order o : orders) {
            if (o.getItems() == null) continue;
            for (web.ecommerce.model.OrderItem item : o.getItems()) {
                String pid = item.getProductId();
                if (pid == null) continue;
                String cat = prodCatMap.get(pid);
                if (cat != null && revByCategory.containsKey(cat))
                    revByCategory.merge(cat, item.getPrice() * item.getQuantity(), Long::sum);
            }
        }

        model.addAttribute("totalProducts",   products.size());
        model.addAttribute("totalOrders",     orders.size());
        model.addAttribute("totalRevenue",    String.format("%,d", totalRevenue).replace(",", ".") + "₫");
        model.addAttribute("completedRev",    String.format("%,d", completedRev).replace(",", ".") + "₫");
        model.addAttribute("pendingOrders",   pendingCount);
        model.addAttribute("shippedOrders",   shippedCount);
        model.addAttribute("completedOrders", completedCount);
        model.addAttribute("hotCount",        hotCount);
        model.addAttribute("onSaleCount",     onSaleCount);
        model.addAttribute("quanSip",         quanSip);
        model.addAttribute("viDa",            viDa);
        model.addAttribute("thatLung",        thatLung);
        model.addAttribute("paymentBreakdown", paymentBreakdown);
        model.addAttribute("last7Days",       last7Days);
        model.addAttribute("recentOrders",    orders.stream().limit(8).toList());
        long incompleteCount = products.stream().filter(p -> p.getCompletenessPct() < 100).count();
        model.addAttribute("topProducts",      topProducts);
        model.addAttribute("avgOrderValue",    String.format("%,d", avgOrderValue).replace(",", ".") + "₫");
        model.addAttribute("revByCategory",    revByCategory);
        model.addAttribute("incompleteCount",  incompleteCount);
        return "admin/dashboard";
    }

    // ── Products ─────────────────────────────────────────────────────────

    @GetMapping("/products")
    public String productList(Model model) {
        List<Product> products = productService.getAll();
        List<web.ecommerce.model.Order> orders = orderService.getAll();

        // Per-product: units sold + revenue
        Map<String, Long> salesByProduct = new HashMap<>();
        Map<String, Long> revByProduct   = new HashMap<>();
        for (web.ecommerce.model.Order o : orders) {
            if (o.getItems() == null) continue;
            for (web.ecommerce.model.OrderItem item : o.getItems()) {
                String pid = item.getProductId();
                if (pid == null || pid.isBlank()) continue;
                salesByProduct.merge(pid, (long) item.getQuantity(), Long::sum);
                revByProduct.merge(pid, item.getPrice() * item.getQuantity(), Long::sum);
            }
        }

        // Per-category stats (avg price, total colors) – avoids SpEL lambda in template
        Map<String, String>  avgPriceByCat   = new HashMap<>();
        Map<String, Integer> totalColorsByCat = new HashMap<>();
        for (String cat : List.of("quan-sip", "vi-da", "that-lung")) {
            List<Product> cp = products.stream().filter(p -> cat.equals(p.getCategory())).collect(Collectors.toList());
            OptionalDouble avg = cp.stream().mapToLong(Product::getPrice).average();
            avgPriceByCat.put(cat, avg.isPresent() ? (int)(avg.getAsDouble() / 1000) + "K₫" : "—");
            totalColorsByCat.put(cat, cp.stream().mapToInt(p -> p.getColors() != null ? p.getColors().size() : 0).sum());
        }

        model.addAttribute("products",           products);
        model.addAttribute("salesByProduct",     salesByProduct);
        model.addAttribute("revByProduct",       revByProduct);
        model.addAttribute("avgPriceByCat",      avgPriceByCat);
        model.addAttribute("totalColorsByCat",   totalColorsByCat);
        return "admin/products";
    }

    @GetMapping("/products/new")
    public String newProductForm(Model model) {
        model.addAttribute("product", new Product());
        model.addAttribute("isNew", true);
        return "admin/product-form";
    }

    @GetMapping("/products/{id}/edit")
    public String editProductForm(@PathVariable String id, Model model) {
        Product product = productService.getById(id)
                .orElseThrow(() -> new IllegalArgumentException("Product not found: " + id));
        model.addAttribute("product", product);
        model.addAttribute("isNew", false);
        // Flatten lists to comma-separated strings for form input
        model.addAttribute("featuresStr", product.getFeatures() == null ? "" :
                String.join("\n", product.getFeatures()));
        model.addAttribute("sizesStr", product.getSizes() == null ? "" :
                String.join(", ", product.getSizes()));
        return "admin/product-form";
    }

    @PostMapping("/products/save")
    public String saveProduct(
            @RequestParam String id,
            @RequestParam String name,
            @RequestParam String category,
            @RequestParam String material,
            @RequestParam long price,
            @RequestParam(defaultValue = "0") long originalPrice,
            @RequestParam(defaultValue = "0") int discount,
            @RequestParam(defaultValue = "5") int rating,
            @RequestParam(defaultValue = "0") int reviews,
            @RequestParam(required = false) String description,
            @RequestParam(required = false) String featuresStr,
            @RequestParam(required = false) String sizesStr,
            @RequestParam(defaultValue = "false") boolean hot,
            @RequestParam(required = false) List<String> colorName,
            @RequestParam(required = false) List<String> colorHex,
            @RequestParam(required = false) List<MultipartFile> colorImage,
            @RequestParam(required = false) List<String> colorExistingUrl,
            RedirectAttributes redirectAttributes) {

        Product product = productService.getById(id).orElse(new Product());
        product.setId(id);
        product.setName(name);
        product.setCategory(category);
        product.setMaterial(material);
        product.setPrice(price);
        product.setOriginalPrice(originalPrice);
        product.setDiscount(discount);
        product.setRating(rating);
        product.setReviews(reviews);
        product.setDescription(description);
        product.setHot(hot);

        if (featuresStr != null && !featuresStr.isBlank()) {
            product.setFeatures(Arrays.stream(featuresStr.split("\n"))
                    .map(String::trim).filter(s -> !s.isEmpty())
                    .collect(Collectors.toList()));
        }

        if (sizesStr != null && !sizesStr.isBlank()) {
            product.setSizes(Arrays.stream(sizesStr.split(","))
                    .map(String::trim).filter(s -> !s.isEmpty())
                    .collect(Collectors.toList()));
        }

        // Build color list from per-color inputs
        if (colorName != null && !colorName.isEmpty()) {
            List<ProductColor> colors = new ArrayList<>();
            for (int i = 0; i < colorName.size(); i++) {
                String cName = colorName.get(i).trim();
                if (cName.isEmpty()) continue;
                String cHex = (colorHex != null && i < colorHex.size()) ? colorHex.get(i) : "#000000";
                String cUrl = (colorExistingUrl != null && i < colorExistingUrl.size()) ? colorExistingUrl.get(i) : "";
                // Upload new image if provided for this color
                if (colorImage != null && i < colorImage.size()) {
                    MultipartFile file = colorImage.get(i);
                    if (file != null && !file.isEmpty()) {
                        try {
                            cUrl = productService.saveImage(file, uploadDir);
                        } catch (IOException e) {
                            redirectAttributes.addFlashAttribute("error", "Lỗi upload ảnh màu \"" + cName + "\": " + e.getMessage());
                            return "redirect:/admin/products";
                        }
                    }
                }
                colors.add(new ProductColor(cName, cHex, cUrl));
            }
            product.setColors(colors);
        }

        productService.save(product);
        redirectAttributes.addFlashAttribute("success", "Đã lưu sản phẩm: " + name);
        return "redirect:/admin/products";
    }

    @PostMapping("/products/{id}/delete")
    public String deleteProduct(@PathVariable String id, RedirectAttributes redirectAttributes) {
        productService.delete(id);
        redirectAttributes.addFlashAttribute("success", "Đã xóa sản phẩm.");
        return "redirect:/admin/products";
    }

    // ── Orders ───────────────────────────────────────────────────────────

    @GetMapping("/orders")
    public String orderList(Model model) {
        model.addAttribute("orders", orderService.getAll());
        return "admin/orders";
    }

    @PostMapping("/orders/{id}/status")
    public String updateOrderStatus(@PathVariable String id,
                                    @RequestParam String status,
                                    RedirectAttributes redirectAttributes) {
        orderService.updateStatus(id, status);
        redirectAttributes.addFlashAttribute("success", "Đã cập nhật trạng thái đơn hàng.");
        return "redirect:/admin/orders";
    }
}
