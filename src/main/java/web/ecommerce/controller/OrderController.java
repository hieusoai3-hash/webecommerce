package web.ecommerce.controller;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import web.ecommerce.config.IpRateLimiter;
import web.ecommerce.config.LoginAttemptService;
import web.ecommerce.model.Order;
import web.ecommerce.service.CouponService;
import web.ecommerce.service.OrderService;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
public class OrderController {

    private final OrderService orderService;
    private final CouponService couponService;
    private final IpRateLimiter rateLimiter;

    public OrderController(OrderService orderService, CouponService couponService, IpRateLimiter rateLimiter) {
        this.orderService = orderService;
        this.couponService = couponService;
        this.rateLimiter = rateLimiter;
    }

    @PostMapping
    public ResponseEntity<?> create(@Valid @RequestBody Order order, HttpServletRequest request) {
        // Honeypot: bots often fill hidden fields — reject if present
        if (order.getHoneypot() != null && !order.getHoneypot().isBlank()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(java.util.Map.of("error", "Yêu cầu không hợp lệ."));
        }
        if (!rateLimiter.allowOrder(LoginAttemptService.getClientIp(request))) {
            return ResponseEntity.status(HttpStatus.TOO_MANY_REQUESTS)
                    .body(java.util.Map.of("error", "Quá nhiều đơn hàng. Vui lòng thử lại sau."));
        }
        if (order.getCouponCode() != null && !order.getCouponCode().isBlank()) {
            try {
                couponService.validateAndMark(order.getCouponCode().trim(), order.getTotal());
            } catch (IllegalArgumentException e) {
                return ResponseEntity.badRequest().body(java.util.Map.of("error", e.getMessage()));
            }
        }
        return ResponseEntity.ok(orderService.create(order));
    }

    @GetMapping
    public List<Order> getAll() {
        return orderService.getAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Order> getById(@PathVariable String id) {
        return orderService.getById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PatchMapping("/{id}/status")
    public ResponseEntity<Order> updateStatus(@PathVariable String id,
                                              @RequestParam String status) {
        return orderService.updateStatus(id, status)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}
