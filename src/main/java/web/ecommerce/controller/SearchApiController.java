package web.ecommerce.controller;

import org.springframework.web.bind.annotation.*;
import web.ecommerce.model.Product;
import web.ecommerce.service.ProductService;

import java.util.*;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api")
public class SearchApiController {

    private final ProductService productService;

    public SearchApiController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping("/suggest")
    public Map<String, Object> suggest(@RequestParam(required = false) String q) {
        Map<String, Object> result = new LinkedHashMap<>();
        if (q == null || q.trim().length() < 2) {
            result.put("products", List.of());
            result.put("categories", List.of());
            result.put("total", 0);
            return result;
        }

        List<Product> products = productService.search(q.trim());

        List<Map<String, Object>> productDtos = products.stream().limit(6).map(p -> {
            Map<String, Object> dto = new LinkedHashMap<>();
            dto.put("id", p.getId());
            dto.put("name", p.getName());
            dto.put("price", p.getFormattedPrice());
            dto.put("discount", p.getDiscount());
            dto.put("imageUrl", (p.getColors() != null && !p.getColors().isEmpty())
                    ? p.getColors().get(0).getImageUrl() : null);
            dto.put("category", p.getCategory());
            return dto;
        }).collect(Collectors.toList());

        Map<String, Long> catCounts = products.stream()
                .collect(Collectors.groupingBy(
                        p -> p.getCategory() != null ? p.getCategory() : "other",
                        Collectors.counting()));

        List<Map<String, Object>> categories = catCounts.entrySet().stream()
                .map(e -> {
                    Map<String, Object> cat = new LinkedHashMap<>();
                    cat.put("slug", e.getKey());
                    cat.put("label", categoryLabel(e.getKey()));
                    cat.put("count", e.getValue());
                    return cat;
                }).collect(Collectors.toList());

        result.put("products", productDtos);
        result.put("categories", categories);
        result.put("total", products.size());
        return result;
    }

    private String categoryLabel(String slug) {
        return switch (slug) {
            case "quan-sip"  -> "Quần sịp";
            case "vi-da"     -> "Ví da";
            case "that-lung" -> "Thắt lưng";
            default          -> slug;
        };
    }
}
