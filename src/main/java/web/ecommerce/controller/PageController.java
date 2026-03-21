package web.ecommerce.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import web.ecommerce.model.Product;
import web.ecommerce.service.ComboService;
import web.ecommerce.service.ProductService;

import java.util.List;
import java.util.Optional;

@Controller
public class PageController {

    private final ProductService productService;
    private final ComboService comboService;

    public PageController(ProductService productService, ComboService comboService) {
        this.productService = productService;
        this.comboService = comboService;
    }

    @GetMapping("/")
    public String home(Model model) {
        model.addAttribute("products", productService.getAll());
        model.addAttribute("activePage", "home");
        return "index";
    }

    @GetMapping("/san-pham")
    public String sanPham(Model model) {
        model.addAttribute("products", productService.getAll());
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

    @GetMapping("/ve-chung-toi")
    public String veChungToi(Model model) {
        model.addAttribute("activePage", "ve-chung-toi");
        return "ve-chung-toi";
    }

    @GetMapping("/search")
    public String search(@RequestParam(required = false) String q, Model model) {
        model.addAttribute("products", productService.search(q));
        model.addAttribute("query", q != null ? q : "");
        model.addAttribute("activePage", "san-pham");
        return "search";
    }

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
