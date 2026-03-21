package web.ecommerce.service;

import org.springframework.stereotype.Service;
import web.ecommerce.model.Order;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class OrderService {

    // In-memory store — swap with a JPA repository when a database is added
    private final List<Order> orders = new ArrayList<>();

    public Order create(Order order) {
        order.setId("#CF" + UUID.randomUUID().toString().substring(0, 6).toUpperCase());
        order.setStatus("PENDING");
        orders.add(order);
        return order;
    }

    public List<Order> getAll() {
        return List.copyOf(orders);
    }

    public Optional<Order> getById(String id) {
        return orders.stream().filter(o -> o.getId().equals(id)).findFirst();
    }

    public Optional<Order> updateStatus(String id, String status) {
        return getById(id).map(o -> {
            o.setStatus(status);
            return o;
        });
    }
}
