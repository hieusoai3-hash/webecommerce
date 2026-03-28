package web.ecommerce.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import web.ecommerce.model.Order;
import web.ecommerce.repository.OrderRepository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@Transactional
public class OrderService {

    private final OrderRepository repo;

    public OrderService(OrderRepository repo) {
        this.repo = repo;
    }

    public Order create(Order order) {
        String id;
        int attempts = 0;
        do {
            id = "#CF" + UUID.randomUUID().toString().replace("-", "").substring(0, 6).toUpperCase();
            attempts++;
        } while (repo.existsById(id) && attempts < 10);
        order.setId(id);
        order.setStatus("PENDING");
        return repo.save(order);
    }

    @Transactional(readOnly = true)
    public List<Order> getAll() {
        return repo.findAllByOrderByCreatedAtDesc();
    }

    @Transactional(readOnly = true)
    public Optional<Order> getById(String id) {
        return repo.findById(id);
    }

    @Transactional(readOnly = true)
    public List<Order> findByPhone(String phone) {
        return repo.findByCustomerPhoneOrderByCreatedAtDesc(phone);
    }

    public Optional<Order> updateStatus(String id, String status) {
        return repo.findById(id).map(o -> {
            o.setStatus(status);
            return repo.save(o);
        });
    }

    public Optional<Order> updateShipping(String id, String carrier, String trackingCode) {
        return repo.findById(id).map(o -> {
            o.setShippingCarrier(carrier);
            o.setTrackingCode(trackingCode);
            return repo.save(o);
        });
    }

    public Optional<Order> cancelOrder(String id, String reason) {
        return repo.findById(id).map(o -> {
            o.setStatus("CANCELLED");
            o.setCancelReason(reason != null ? reason.trim() : null);
            return repo.save(o);
        });
    }

    public long countPending() {
        return repo.countByStatus("PENDING");
    }
}
