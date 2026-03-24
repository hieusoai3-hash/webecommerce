package web.ecommerce.config;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;
import web.ecommerce.model.PageView;
import web.ecommerce.repository.PageViewRepository;

import java.time.LocalDateTime;

@Component
public class TrafficInterceptor implements HandlerInterceptor {

    private final PageViewRepository pageViewRepository;

    public TrafficInterceptor(PageViewRepository pageViewRepository) {
        this.pageViewRepository = pageViewRepository;
    }

    @Override
    public boolean preHandle(HttpServletRequest request,
                             HttpServletResponse response,
                             Object handler) {
        String path = request.getRequestURI();

        // Only track storefront GET page requests
        if (!path.startsWith("/admin")
                && !path.startsWith("/css")
                && !path.startsWith("/js")
                && !path.startsWith("/images")
                && !path.startsWith("/uploads")
                && !path.startsWith("/api")
                && !path.startsWith("/actuator")
                && !path.startsWith("/h2-console")
                && !path.contains(".")
                && !"POST".equalsIgnoreCase(request.getMethod())) {

            String productId = null;
            if ("/product-detail".equals(path)) {
                productId = request.getParameter("id");
            }
            pageViewRepository.save(new PageView(LocalDateTime.now(), productId));
        }
        return true;
    }
}
