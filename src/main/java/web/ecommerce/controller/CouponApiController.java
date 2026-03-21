package web.ecommerce.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import web.ecommerce.service.CouponService;

import java.util.Map;

@RestController
@RequestMapping("/api/coupon")
public class CouponApiController {

    private final CouponService couponService;

    public CouponApiController(CouponService couponService) {
        this.couponService = couponService;
    }

    @PostMapping("/validate")
    public ResponseEntity<Map<String, Object>> validate(@RequestBody Map<String, Object> body) {
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
