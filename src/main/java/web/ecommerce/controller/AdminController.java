package web.ecommerce.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import web.ecommerce.model.Combo;
import web.ecommerce.model.Coupon;
import web.ecommerce.model.Order;
import web.ecommerce.model.Product;
import web.ecommerce.model.ProductColor;
import web.ecommerce.model.ProductVariantStock;
import web.ecommerce.model.SiteSettings;
import web.ecommerce.repository.PageViewRepository;
import web.ecommerce.service.ComboService;
import web.ecommerce.service.CouponService;
import web.ecommerce.service.OrderService;
import web.ecommerce.service.ProductService;
import web.ecommerce.service.SiteSettingsService;

import java.io.IOException;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;
import java.util.stream.Collectors;

@Controller
@RequestMapping("/admin")
public class AdminController {

    private final ProductService productService;
    private final OrderService orderService;
    private final ComboService comboService;
    private final CouponService couponService;
    private final SiteSettingsService siteSettingsService;
    private final PageViewRepository pageViewRepository;
    private final InMemoryUserDetailsManager userDetailsManager;
    private final PasswordEncoder passwordEncoder;

    @Value("${upload.dir:src/main/resources/static}")
    private String uploadDir;

    @Value("${admin.username:admin}")
    private String adminUsername;

    public AdminController(ProductService productService, OrderService orderService,
                           ComboService comboService, CouponService couponService,
                           SiteSettingsService siteSettingsService,
                           PageViewRepository pageViewRepository,
                           InMemoryUserDetailsManager userDetailsManager,
                           PasswordEncoder passwordEncoder) {
        this.productService = productService;
        this.orderService = orderService;
        this.comboService = comboService;
        this.couponService = couponService;
        this.siteSettingsService = siteSettingsService;
        this.pageViewRepository = pageViewRepository;
        this.userDetailsManager = userDetailsManager;
        this.passwordEncoder = passwordEncoder;
    }

    // ── Global model attribute for sidebar badge ──────────────────────────

    @ModelAttribute("newOrderBadge")
    public long newOrderBadge() {
        return orderService.countPending();
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
        long totalRevenue   = orders.stream().filter(o -> "COMPLETED".equals(o.getStatus()))
                                    .mapToLong(web.ecommerce.model.Order::getTotal).sum();
        long pendingCount   = orders.stream().filter(o -> "PENDING".equals(o.getStatus())).count();
        long paidCount      = orders.stream().filter(o -> "PAID".equals(o.getStatus())).count();
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
        List<String> last7DaysLabels = new ArrayList<>(last7Days.keySet());
        List<Long>   last7DaysData   = new ArrayList<>(last7Days.values());

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
        long allOrdersTotal = orders.stream().mapToLong(web.ecommerce.model.Order::getTotal).sum();
        long avgOrderValue = orders.isEmpty() ? 0L : allOrdersTotal / orders.size();

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

        // ── Traffic stats ─────────────────────────────────────────────────
        long todayVisits = 0, yesterdayVisits = 0, weekVisits = 0;
        List<String> trafficLabels = new ArrayList<>();
        List<Long>   trafficData   = new ArrayList<>();
        List<Map<String, Object>> topViewedProducts = new ArrayList<>();
        long maxProductViews = 1L;
        try {
            LocalDateTime todayStart = LocalDate.now().atStartOfDay();
            todayVisits     = pageViewRepository.countByViewedAtBetween(todayStart, todayStart.plusDays(1));
            yesterdayVisits = pageViewRepository.countByViewedAtBetween(todayStart.minusDays(1), todayStart);
            weekVisits      = pageViewRepository.countByViewedAtBetween(todayStart.minusDays(7), LocalDateTime.now());

            for (int i = 6; i >= 0; i--) {
                LocalDate day = LocalDate.now().minusDays(i);
                trafficLabels.add(day.format(fmt));
                trafficData.add(pageViewRepository.countByViewedAtBetween(day.atStartOfDay(), day.plusDays(1).atStartOfDay()));
            }

            List<Object[]> topProductViewsRaw = pageViewRepository.findTopProductViewsFrom(LocalDate.now().minusDays(7).atStartOfDay());
            for (Object[] row : topProductViewsRaw.stream().limit(5).toList()) {
                String pid = (String) row[0];
                long views = ((Number) row[1]).longValue();
                Product p = products.stream().filter(x -> x.getId().equals(pid)).findFirst().orElse(null);
                if (p == null) continue;
                Map<String, Object> entry = new LinkedHashMap<>();
                entry.put("product", p);
                entry.put("views", views);
                topViewedProducts.add(entry);
                if (views > maxProductViews) maxProductViews = views;
            }
            final long maxPV = maxProductViews;
            topViewedProducts.forEach(e -> e.put("viewsPct", (int)((Long) e.get("views") * 100 / maxPV)));
        } catch (Exception ignored) {
            // traffic table may not exist yet on first boot
        }

        model.addAttribute("totalProducts",    products.size());
        model.addAttribute("totalOrders",      orders.size());
        model.addAttribute("totalRevenue",     String.format("%,d", totalRevenue).replace(",", ".") + "₫");
        model.addAttribute("pendingOrders",    pendingCount);
        model.addAttribute("paidOrders",       paidCount);
        model.addAttribute("shippedOrders",    shippedCount);
        model.addAttribute("completedOrders",  completedCount);
        model.addAttribute("hotCount",         hotCount);
        model.addAttribute("onSaleCount",      onSaleCount);
        model.addAttribute("quanSip",          quanSip);
        model.addAttribute("viDa",             viDa);
        model.addAttribute("thatLung",         thatLung);
        model.addAttribute("paymentBreakdown", paymentBreakdown);
        model.addAttribute("last7DaysLabels",  last7DaysLabels);
        model.addAttribute("last7DaysData",    last7DaysData);
        model.addAttribute("recentOrders",     orders.stream().limit(8).toList());
        long incompleteCount = products.stream().filter(p -> p.getCompletenessPct() < 100).count();
        model.addAttribute("topProducts",      topProducts);
        model.addAttribute("avgOrderValue",    String.format("%,d", avgOrderValue).replace(",", ".") + "₫");
        model.addAttribute("revByCategory",    revByCategory);
        model.addAttribute("revByCategoryData", new ArrayList<>(revByCategory.values()));
        model.addAttribute("incompleteCount",  incompleteCount);
        model.addAttribute("todayVisits",         todayVisits);
        model.addAttribute("yesterdayVisits",    yesterdayVisits);
        model.addAttribute("weekVisits",         weekVisits);
        model.addAttribute("trafficLabels",      trafficLabels);
        model.addAttribute("trafficData",        trafficData);
        model.addAttribute("topViewedProducts",  topViewedProducts);
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
        model.addAttribute("featuresStr", "");
        model.addAttribute("sizesStr", "");
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
            @RequestParam(defaultValue = "0") int stock,
            @RequestParam(defaultValue = "false") boolean hot,
            @RequestParam(required = false) List<String> variantColor,
            @RequestParam(required = false) List<String> variantSize,
            @RequestParam(required = false) List<String> variantQty,
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
        product.setStock(stock);
        product.setHot(hot);

        product.setFeatures(featuresStr == null || featuresStr.isBlank()
                ? new ArrayList<>()
                : Arrays.stream(featuresStr.split("\n"))
                        .map(String::trim).filter(s -> !s.isEmpty())
                        .collect(Collectors.toList()));

        product.setSizes(sizesStr == null || sizesStr.isBlank()
                ? new ArrayList<>()
                : Arrays.stream(sizesStr.split(","))
                        .map(String::trim).filter(s -> !s.isEmpty())
                        .collect(Collectors.toList()));

        // Build color list from per-color inputs
        List<ProductColor> colors = new ArrayList<>();
        if (colorName != null) {
            for (int i = 0; i < colorName.size(); i++) {
                String cName = colorName.get(i).trim();
                if (cName.isEmpty()) continue;
                String cHex = (colorHex != null && i < colorHex.size()) ? colorHex.get(i) : "#000000";
                String cUrl = (colorExistingUrl != null && i < colorExistingUrl.size()) ? colorExistingUrl.get(i) : "";
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
        }
        product.setColors(colors);

        // Build variant stock list and auto-sum total stock
        if (variantColor != null && !variantColor.isEmpty()) {
            List<ProductVariantStock> variants = new ArrayList<>();
            int total = 0;
            for (int i = 0; i < variantColor.size(); i++) {
                String cName = variantColor.get(i);
                String sName = (variantSize != null && i < variantSize.size()) ? variantSize.get(i) : "";
                int qty = 0;
                if (variantQty != null && i < variantQty.size()) {
                    try { qty = Integer.parseInt(variantQty.get(i).trim()); } catch (Exception ignored) {}
                }
                variants.add(new ProductVariantStock(cName, sName, qty));
                total += qty;
            }
            product.setVariantStocks(variants);
            product.setStock(total);
        } else {
            product.setVariantStocks(new ArrayList<>());
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

    @PostMapping("/products/{id}/duplicate")
    public String duplicateProduct(@PathVariable String id, RedirectAttributes redirectAttributes) {
        productService.getById(id).ifPresent(p -> {
            Product copy = new Product();
            copy.setId("P" + System.currentTimeMillis());
            copy.setName(p.getName() + " (Copy)");
            copy.setCategory(p.getCategory());
            copy.setMaterial(p.getMaterial());
            copy.setPrice(p.getPrice());
            copy.setOriginalPrice(p.getOriginalPrice());
            copy.setDiscount(p.getDiscount());
            copy.setRating(p.getRating());
            copy.setReviews(p.getReviews());
            copy.setDescription(p.getDescription());
            copy.setFeatures(p.getFeatures() != null ? new ArrayList<>(p.getFeatures()) : new ArrayList<>());
            copy.setSizes(p.getSizes() != null ? new ArrayList<>(p.getSizes()) : new ArrayList<>());
            copy.setColors(p.getColors() != null ? new ArrayList<>(p.getColors()) : new ArrayList<>());
            copy.setVariantStocks(p.getVariantStocks() != null ? new ArrayList<>(p.getVariantStocks()) : new ArrayList<>());
            copy.setHot(false);
            copy.setStock(p.getStock());
            productService.save(copy);
            redirectAttributes.addFlashAttribute("success", "Đã nhân bản: " + p.getName());
        });
        return "redirect:/admin/products";
    }

    // ── Orders ───────────────────────────────────────────────────────────

    @GetMapping("/orders")
    public String orderList(Model model) {
        model.addAttribute("orders", orderService.getAll());
        return "admin/orders";
    }

    @GetMapping("/orders/detail")
    public String orderDetail(@RequestParam String id, Model model) {
        orderService.getById(id).ifPresent(order -> model.addAttribute("order", order));
        return "admin/order-detail";
    }

    @PostMapping("/orders/update-status")
    public String updateOrderStatus(@RequestParam String id,
                                    @RequestParam String status,
                                    @RequestParam(required = false) String from,
                                    RedirectAttributes redirectAttributes) {
        orderService.updateStatus(id, status);
        redirectAttributes.addFlashAttribute("success", "Đã cập nhật trạng thái đơn hàng.");
        if ("detail".equals(from)) {
            return "redirect:/admin/orders/detail?id=" + URLEncoder.encode(id, StandardCharsets.UTF_8);
        }
        return "redirect:/admin/orders";
    }

    @PostMapping("/orders/update-shipping")
    public String updateOrderShipping(@RequestParam String id,
                                      @RequestParam(required = false) String shippingCarrier,
                                      @RequestParam(required = false) String trackingCode,
                                      RedirectAttributes redirectAttributes) {
        orderService.updateShipping(id,
                shippingCarrier != null ? shippingCarrier.trim() : null,
                trackingCode    != null ? trackingCode.trim()    : null);
        redirectAttributes.addFlashAttribute("success", "Đã cập nhật thông tin vận chuyển.");
        return "redirect:/admin/orders/detail?id=" + URLEncoder.encode(id, StandardCharsets.UTF_8);
    }

    @PostMapping("/orders/cancel")
    public String cancelOrder(@RequestParam String id,
                              @RequestParam(required = false) String cancelReason,
                              @RequestParam(defaultValue = "list") String from,
                              RedirectAttributes redirectAttributes) {
        orderService.cancelOrder(id, cancelReason);
        redirectAttributes.addFlashAttribute("success", "Đã huỷ đơn hàng.");
        if ("detail".equals(from)) {
            return "redirect:/admin/orders/detail?id=" + URLEncoder.encode(id, StandardCharsets.UTF_8);
        }
        return "redirect:/admin/orders";
    }

    @GetMapping("/orders/export.csv")
    @ResponseBody
    public ResponseEntity<byte[]> exportOrdersCsv() throws IOException {
        List<Order> orders = orderService.getAll();
        DateTimeFormatter fmt = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm");
        StringBuilder sb = new StringBuilder("\uFEFF"); // BOM for Excel UTF-8
        sb.append("Mã đơn,Khách hàng,SĐT,Địa chỉ,Sản phẩm,Tổng tiền,Thanh toán,Trạng thái,Thời gian\n");
        for (Order o : orders) {
            String items = o.getItems() == null ? "" :
                o.getItems().stream()
                    .map(i -> i.getProductName() + " x" + i.getQuantity())
                    .collect(Collectors.joining("; "));
            sb.append(String.join(",",
                escCsv(o.getId()),
                escCsv(o.getCustomerName()),
                escCsv(o.getCustomerPhone()),
                escCsv(o.getCustomerAddress()),
                escCsv(items),
                String.valueOf(o.getTotal()),
                escCsv(o.getPaymentMethod()),
                escCsv(o.getStatus()),
                o.getCreatedAt() != null ? o.getCreatedAt().format(fmt) : ""
            )).append("\n");
        }
        byte[] bytes = sb.toString().getBytes(StandardCharsets.UTF_8);
        return ResponseEntity.ok()
            .header("Content-Disposition", "attachment; filename=\"orders.csv\"")
            .header("Content-Type", "text/csv; charset=UTF-8")
            .body(bytes);
    }

    private String escCsv(String s) {
        if (s == null) return "";
        // Neutralise formula injection: prefix cells starting with formula chars
        if (!s.isEmpty() && "=+-@\t\r".indexOf(s.charAt(0)) >= 0) {
            s = "'" + s;
        }
        if (s.contains(",") || s.contains("\"") || s.contains("\n"))
            return "\"" + s.replace("\"", "\"\"") + "\"";
        return s;
    }

    // ── Customers ────────────────────────────────────────────────────────

    @GetMapping("/customers")
    public String customers(Model model) {
        List<Order> orders = orderService.getAll();
        Map<String, List<Order>> byPhone = orders.stream()
            .collect(Collectors.groupingBy(
                o -> o.getCustomerPhone() != null ? o.getCustomerPhone() : "unknown"));
        List<Map<String, Object>> customers = new ArrayList<>();
        for (Map.Entry<String, List<Order>> e : byPhone.entrySet()) {
            List<Order> cOrders = e.getValue().stream()
                .sorted(Comparator.comparing(Order::getCreatedAt).reversed())
                .collect(Collectors.toList());
            Order last = cOrders.get(0);
            long totalSpent = cOrders.stream().mapToLong(Order::getTotal).sum();
            long completedCount = cOrders.stream().filter(o -> "COMPLETED".equals(o.getStatus())).count();
            Map<String, Object> row = new LinkedHashMap<>();
            row.put("phone", e.getKey());
            row.put("name", last.getCustomerName());
            row.put("orderCount", cOrders.size());
            row.put("completedCount", completedCount);
            row.put("totalSpentRaw", totalSpent);
            row.put("totalSpent", String.format("%,d", totalSpent).replace(",", ".") + "₫");
            row.put("lastOrderAt", last.getCreatedAt());
            row.put("lastOrderId", last.getId());
            row.put("address", last.getCustomerAddress());
            customers.add(row);
        }
        customers.sort((a, b) -> Long.compare((long) b.get("totalSpentRaw"), (long) a.get("totalSpentRaw")));
        model.addAttribute("customers", customers);
        model.addAttribute("totalCustomers", customers.size());
        long repeatCount = customers.stream().filter(c -> (int) c.get("orderCount") > 1).count();
        model.addAttribute("repeatCustomers", repeatCount);
        model.addAttribute("activePage", "customers");
        return "admin/customers";
    }

    // ── Combos ───────────────────────────────────────────────────────────

    @GetMapping("/combos")
    public String comboList(Model model) {
        model.addAttribute("combos", comboService.getAll());
        return "admin/combos";
    }

    @GetMapping("/combos/new")
    public String newComboForm(Model model) {
        model.addAttribute("combo", new Combo());
        model.addAttribute("isNew", true);
        model.addAttribute("allProducts", productService.getAll());
        return "admin/combo-form";
    }

    @GetMapping("/combos/{id}/edit")
    public String editComboForm(@PathVariable Long id, Model model) {
        Combo combo = comboService.getById(id)
                .orElseThrow(() -> new IllegalArgumentException("Combo not found: " + id));
        model.addAttribute("combo", combo);
        model.addAttribute("isNew", false);
        model.addAttribute("allProducts", productService.getAll());
        return "admin/combo-form";
    }

    @PostMapping("/combos/save")
    public String saveCombo(
            @RequestParam(required = false) Long id,
            @RequestParam String name,
            @RequestParam int buyQuantity,
            @RequestParam int freeQuantity,
            @RequestParam long price,
            @RequestParam(defaultValue = "0") long originalPrice,
            @RequestParam(required = false) String description,
            @RequestParam(required = false) String details,
            @RequestParam(required = false) String comboItems,
            @RequestParam(required = false) String badgeText,
            @RequestParam(required = false) String imageUrl,
            @RequestParam(defaultValue = "true") boolean active,
            @RequestParam(defaultValue = "0") int sortOrder,
            RedirectAttributes redirectAttributes) {

        Combo combo = (id != null) ? comboService.getById(id).orElse(new Combo()) : new Combo();
        combo.setName(name);
        combo.setBuyQuantity(buyQuantity);
        combo.setFreeQuantity(freeQuantity);
        combo.setPrice(price);
        combo.setOriginalPrice(originalPrice);
        combo.setDescription(description);
        combo.setDetails(details);
        combo.setComboItems(comboItems != null && !comboItems.isBlank() ? comboItems : null);
        combo.setBadgeText(badgeText != null && !badgeText.isBlank() ? badgeText : null);
        combo.setImageUrl(imageUrl != null && !imageUrl.isBlank() ? imageUrl : null);
        combo.setActive(active);
        combo.setSortOrder(sortOrder);
        comboService.save(combo);
        redirectAttributes.addFlashAttribute("success", "Đã lưu combo: " + name);
        return "redirect:/admin/combos";
    }

    @PostMapping("/combos/{id}/delete")
    public String deleteCombo(@PathVariable Long id, RedirectAttributes redirectAttributes) {
        comboService.delete(id);
        redirectAttributes.addFlashAttribute("success", "Đã xóa combo.");
        return "redirect:/admin/combos";
    }

    @PostMapping("/combos/{id}/toggle")
    public String toggleCombo(@PathVariable Long id, RedirectAttributes redirectAttributes) {
        comboService.getById(id).ifPresent(c -> {
            c.setActive(!c.isActive());
            comboService.save(c);
        });
        return "redirect:/admin/combos";
    }

    // ── Coupons ──────────────────────────────────────────────────────────

    @GetMapping("/coupons")
    public String coupons(Model model) {
        model.addAttribute("coupons", couponService.getAll());
        model.addAttribute("activePage", "coupons");
        return "admin/coupons";
    }

    @GetMapping("/coupons/new")
    public String couponNew(Model model) {
        model.addAttribute("coupon", new Coupon());
        model.addAttribute("isNew", true);
        model.addAttribute("activePage", "coupons");
        return "admin/coupon-form";
    }

    @GetMapping("/coupons/edit")
    public String couponEdit(@RequestParam Long id, Model model) {
        couponService.findById(id).ifPresent(c -> model.addAttribute("coupon", c));
        model.addAttribute("isNew", false);
        model.addAttribute("activePage", "coupons");
        return "admin/coupon-form";
    }

    @PostMapping("/coupons/save")
    public String couponSave(@RequestParam(required = false) Long id,
                             @RequestParam String code,
                             @RequestParam String discountType,
                             @RequestParam long discountValue,
                             @RequestParam(defaultValue = "0") long minOrderValue,
                             @RequestParam(defaultValue = "0") int maxUses,
                             @RequestParam(defaultValue = "false") boolean active,
                             @RequestParam(required = false) String expiresAt,
                             RedirectAttributes ra) {
        Coupon c = id != null ? couponService.findById(id).orElse(new Coupon()) : new Coupon();
        c.setCode(code.trim().toUpperCase());
        c.setDiscountType(discountType);
        c.setDiscountValue(discountValue);
        c.setMinOrderValue(minOrderValue);
        c.setMaxUses(maxUses);
        c.setActive(active);
        c.setExpiresAt(expiresAt != null && !expiresAt.isBlank()
                ? java.time.LocalDate.parse(expiresAt) : null);
        couponService.save(c);
        ra.addFlashAttribute("success", "Đã lưu mã: " + c.getCode());
        return "redirect:/admin/coupons";
    }

    @PostMapping("/coupons/delete")
    public String couponDelete(@RequestParam Long id, RedirectAttributes ra) {
        couponService.delete(id);
        ra.addFlashAttribute("success", "Đã xóa mã giảm giá.");
        return "redirect:/admin/coupons";
    }

    @PostMapping("/coupons/toggle")
    public String couponToggle(@RequestParam Long id, RedirectAttributes ra) {
        couponService.findById(id).ifPresent(c -> {
            c.setActive(!c.isActive());
            couponService.save(c);
        });
        return "redirect:/admin/coupons";
    }

    // ── Site Settings ────────────────────────────────────────────────────

    @GetMapping("/settings")
    public String settingsPage(Model model) {
        model.addAttribute("settings", siteSettingsService.getSettings());
        model.addAttribute("activePage", "settings");
        return "admin/settings";
    }

    @PostMapping("/settings")
    public String saveSettings(
            @RequestParam(defaultValue = "") String bannerText,
            @RequestParam(defaultValue = "false") boolean bannerEnabled,
            @RequestParam(defaultValue = "0") long saleEndEpoch,
            @RequestParam(required = false) String shopPhone,
            @RequestParam(required = false) String shopEmail,
            @RequestParam(required = false) String shopAddress,
            @RequestParam(required = false) String facebookUrl,
            @RequestParam(required = false) String zaloPhone,
            @RequestParam(required = false) String tiktokUrl,
            RedirectAttributes ra) {
        SiteSettings s = siteSettingsService.getSettings();
        s.setBannerText(bannerText);
        s.setBannerEnabled(bannerEnabled);
        s.setSaleEndEpoch(saleEndEpoch);
        s.setShopPhone(shopPhone != null ? shopPhone.trim() : null);
        s.setShopEmail(shopEmail != null ? shopEmail.trim() : null);
        s.setShopAddress(shopAddress != null ? shopAddress.trim() : null);
        s.setFacebookUrl(facebookUrl != null ? facebookUrl.trim() : null);
        s.setZaloPhone(zaloPhone != null ? zaloPhone.trim() : null);
        s.setTiktokUrl(tiktokUrl != null ? tiktokUrl.trim() : null);
        siteSettingsService.save(s);
        ra.addFlashAttribute("success", "Đã lưu cài đặt.");
        return "redirect:/admin/settings";
    }

    @PostMapping("/settings/change-password")
    public String changePassword(
            @RequestParam String currentPassword,
            @RequestParam String newPassword,
            @RequestParam String confirmPassword,
            RedirectAttributes ra) {
        if (newPassword == null || newPassword.length() < 6) {
            ra.addFlashAttribute("pwError", "Mật khẩu mới phải có ít nhất 6 ký tự.");
            return "redirect:/admin/settings";
        }
        if (!newPassword.equals(confirmPassword)) {
            ra.addFlashAttribute("pwError", "Mật khẩu xác nhận không khớp.");
            return "redirect:/admin/settings";
        }
        UserDetails current = userDetailsManager.loadUserByUsername(adminUsername);
        if (!passwordEncoder.matches(currentPassword, current.getPassword())) {
            ra.addFlashAttribute("pwError", "Mật khẩu hiện tại không đúng.");
            return "redirect:/admin/settings";
        }
        UserDetails updated = User.builder()
            .username(adminUsername)
            .password(passwordEncoder.encode(newPassword))
            .roles("ADMIN")
            .build();
        userDetailsManager.updateUser(updated);
        ra.addFlashAttribute("success", "Đã đổi mật khẩu thành công. Để giữ mật khẩu sau khi restart, hãy cập nhật biến môi trường ADMIN_PASSWORD.");
        return "redirect:/admin/settings";
    }

    // ── Order notification polling ────────────────────────────────────────

    @GetMapping("/orders/poll")
    @ResponseBody
    public Map<String, Object> pollOrders() {
        List<Order> orders = orderService.getAll();
        Map<String, Object> result = new HashMap<>();
        result.put("pending", orderService.countPending());
        result.put("latestId", orders.isEmpty() ? null : orders.get(0).getId());
        if (!orders.isEmpty()) {
            Order latest = orders.get(0);
            result.put("latestName", latest.getCustomerName());
            result.put("latestTotal", latest.getTotal());
        }
        return result;
    }

}
