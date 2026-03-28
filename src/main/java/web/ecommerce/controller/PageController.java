package web.ecommerce.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import web.ecommerce.model.Product;
import web.ecommerce.service.ComboService;
import web.ecommerce.service.OrderService;
import web.ecommerce.service.ProductService;

import java.util.List;
import java.util.Optional;

@Controller
public class PageController {

    private final ProductService productService;
    private final ComboService comboService;
    private final OrderService orderService;

    public PageController(ProductService productService, ComboService comboService, OrderService orderService) {
        this.productService = productService;
        this.comboService = comboService;
        this.orderService = orderService;
    }

    @GetMapping("/")
    public String home(Model model) {
        model.addAttribute("products", productService.getAll());
        model.addAttribute("combos", comboService.getActive());
        model.addAttribute("activePage", "home");
        return "index";
    }

    @GetMapping("/san-pham")
    public String sanPham(@RequestParam(required = false) String filter, Model model) {
        if ("hot".equals(filter)) {
            model.addAttribute("products", productService.getHot());
            model.addAttribute("pageTitle", "Bán Chạy Nhất");
            model.addAttribute("pageDesc", "Những sản phẩm được yêu thích và bán chạy nhất tại NB2 Boxer Men.");
        } else {
            model.addAttribute("products", productService.getAll());
            model.addAttribute("pageTitle", "Tất Cả Sản Phẩm");
            model.addAttribute("pageDesc", "Khám phá toàn bộ sản phẩm NB2 Boxer Men.");
        }
        model.addAttribute("activePage", "san-pham");
        return "san-pham";
    }

    @GetMapping("/quan-sip")
    public String quanSip(Model model) {
        model.addAttribute("products", productService.getByCategory("quan-sip"));
        model.addAttribute("activePage", "quan-sip");
        return "quan-sip";
    }

    @GetMapping("/vi-da")
    public String viDa(Model model) {
        model.addAttribute("products", productService.getByCategory("vi-da"));
        model.addAttribute("activePage", "vi-da");
        return "vi-da";
    }

    @GetMapping("/that-lung")
    public String thatLung(Model model) {
        model.addAttribute("products", productService.getByCategory("that-lung"));
        model.addAttribute("activePage", "that-lung");
        return "that-lung";
    }

    @GetMapping("/sale")
    public String sale(Model model) {
        model.addAttribute("products", productService.getOnSale());
        model.addAttribute("activePage", "sale");
        return "sale";
    }

    @GetMapping("/combo-hot")
    public String comboHot(Model model) {
        model.addAttribute("combos", comboService.getActive());
        model.addAttribute("activePage", "combo-hot");
        return "combo-hot";
    }

@GetMapping("/tra-don-hang")
    public String traDonHang(
            @RequestParam(required = false) String id,
            @RequestParam(required = false) String phone,
            Model model) {
        if (id != null && !id.isBlank()) {
            String normalized = id.trim().toUpperCase().startsWith("#") ? id.trim() : "#" + id.trim();
            orderService.getById(normalized).ifPresentOrElse(
                order -> model.addAttribute("order", order),
                () -> model.addAttribute("notFound", true)
            );
            model.addAttribute("query", id.trim());
            model.addAttribute("searchType", "id");
        } else if (phone != null && !phone.isBlank()) {
            List<web.ecommerce.model.Order> orders = orderService.findByPhone(phone.trim());
            if (orders.isEmpty()) {
                model.addAttribute("notFound", true);
            } else {
                model.addAttribute("orders", orders);
            }
            model.addAttribute("query", phone.trim());
            model.addAttribute("searchType", "phone");
        }
        model.addAttribute("activePage", "tra-don-hang");
        return "tra-don-hang";
    }

    @GetMapping("/search")
    public String search(@RequestParam(required = false) String q, Model model) {
        model.addAttribute("products", productService.search(q));
        model.addAttribute("query", q != null ? q : "");
        model.addAttribute("activePage", "san-pham");
        return "search";
    }

    // ── Static info pages ──────────────────────────────────────────────────
    @GetMapping("/chinh-sach-doi-tra")   public String csDoiTra()    { return "chinh-sach-doi-tra"; }
    @GetMapping("/chinh-sach-bao-mat")   public String csBaoMat()    { return "chinh-sach-bao-mat"; }
    @GetMapping("/chinh-sach-giao-hang") public String csGiaoHang()  { return "chinh-sach-giao-hang"; }
    @GetMapping("/chinh-sach-khuyen-mai")public String csKhuyenMai() { return "chinh-sach-khuyen-mai"; }
    @GetMapping("/huong-dan-chon-size")  public String hdChonSize()  { return "huong-dan-chon-size"; }
    @GetMapping("/hoi-dap")              public String hoiDap()      { return "hoi-dap"; }
    @GetMapping("/huong-dan-mua-hang")   public String hdMuaHang()   { return "huong-dan-mua-hang"; }
    @GetMapping("/trai-nghiem-mua-sam")  public String traiNghiem()  { return "trai-nghiem-mua-sam"; }
    @GetMapping("/cau-chuyen-thuong-hieu")public String cauChuyen()  { return "cau-chuyen-thuong-hieu"; }
    @GetMapping("/nha-may-san-xuat")     public String nhaMay()      { return "nha-may-san-xuat"; }
    @GetMapping("/tuyen-dung")           public String tuyenDung()   { return "tuyen-dung"; }
    @GetMapping("/lien-he-hop-tac")      public String lienHeHopTac(){ return "lien-he-hop-tac"; }

    @GetMapping("/product-detail")
    public String productDetail(@RequestParam String id, Model model) {
        Optional<Product> productOpt = productService.getById(id);
        if (productOpt.isEmpty()) {
            return "redirect:/san-pham";
        }
        Product product = productOpt.get();
        List<Product> related = productService.getByCategory(product.getCategory())
                .stream().filter(p -> !p.getId().equals(id)).limit(4).toList();
        model.addAttribute("product", product);
        model.addAttribute("related", related);
        model.addAttribute("activePage", "san-pham");
        return "product-detail";
    }
}
