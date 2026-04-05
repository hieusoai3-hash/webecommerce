package web.ecommerce.config;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

@Component
public class TrafficInterceptor implements HandlerInterceptor {

    private final AsyncPageViewService asyncPageViewService;

    public TrafficInterceptor(AsyncPageViewService asyncPageViewService) {
        this.asyncPageViewService = asyncPageViewService;
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
            asyncPageViewService.record(productId);
        }
        return true;
    }
}
