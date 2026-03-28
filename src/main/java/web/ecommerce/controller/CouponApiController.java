package web.ecommerce.controller;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import web.ecommerce.config.IpRateLimiter;
import web.ecommerce.config.LoginAttemptService;
import web.ecommerce.service.CouponService;

import java.util.Map;

@RestController
@RequestMapping("/api/coupon")
public class CouponApiController {

    private final CouponService couponService;
    private final IpRateLimiter rateLimiter;

    public CouponApiController(CouponService couponService, IpRateLimiter rateLimiter) {
        this.couponService = couponService;
        this.rateLimiter = rateLimiter;
    }

    @PostMapping("/validate")
    public ResponseEntity<Map<String, Object>> validate(@RequestBody Map<String, Object> body,
                                                        HttpServletRequest request) {
        if (!rateLimiter.allowCoupon(LoginAttemptService.getClientIp(request))) {
            return ResponseEntity.status(HttpStatus.TOO_MANY_REQUESTS)
                    .body(Map.of("valid", false, "discount", 0, "message", "Quá nhiều yêu cầu. Vui lòng thử lại sau."));
        }
        String code = (String) body.get("code");
        long subtotal = ((Number) body.get("subtotal")).longValue();
        if (code == null || code.isBlank()) {
            return ResponseEntity.ok(Map.of("valid", false, "discount", 0, "message", "Vui lòng nhập mã giảm giá"));
        }
        try {
            long discount = couponService.validate(code.trim(), subtotal);
            return ResponseEntity.ok(Map.of("valid", true, "discount", discount, "message", "Áp dụng thành công!"));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.ok(Map.of("valid", false, "discount", 0, "message", e.getMessage()));
        }
    }
}
