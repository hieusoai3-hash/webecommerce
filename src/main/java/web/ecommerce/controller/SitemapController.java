package web.ecommerce.controller;

import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import web.ecommerce.service.ProductService;

import jakarta.servlet.http.HttpServletRequest;
import java.time.LocalDate;
import java.util.List;

@Controller
public class SitemapController {

    private final ProductService productService;

    public SitemapController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping(value = "/sitemap.xml", produces = MediaType.APPLICATION_XML_VALUE)
    @ResponseBody
    public String sitemap(HttpServletRequest request) {
        String base = request.getScheme() + "://" + request.getServerName()
                + (request.getServerPort() == 80 || request.getServerPort() == 443
                        ? "" : ":" + request.getServerPort());
        String today = LocalDate.now().toString();

        List<String> staticUrls = List.of(
            "/", "/san-pham", "/quan-sip", "/vi-da", "/that-lung",
            "/sale", "/combo-hot", "/tra-don-hang",
            "/chinh-sach-doi-tra", "/chinh-sach-bao-mat",
            "/chinh-sach-giao-hang", "/chinh-sach-khuyen-mai",
            "/huong-dan-chon-size", "/hoi-dap", "/huong-dan-mua-hang",
            "/trai-nghiem-mua-sam", "/cau-chuyen-thuong-hieu",
            "/nha-may-san-xuat", "/tuyen-dung", "/lien-he-hop-tac"
        );

        StringBuilder xml = new StringBuilder();
        xml.append("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n");
        xml.append("<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n");

        for (String url : staticUrls) {
            xml.append("  <url><loc>").append(base).append(url)
               .append("</loc><lastmod>").append(today)
               .append("</lastmod><changefreq>weekly</changefreq></url>\n");
        }

        productService.getAll().forEach(p -> xml.append("  <url><loc>")
                .append(base).append("/product-detail?id=").append(p.getId())
                .append("</loc><lastmod>").append(today)
                .append("</lastmod><changefreq>monthly</changefreq></url>\n"));

        xml.append("</urlset>");
        return xml.toString();
    }
}
