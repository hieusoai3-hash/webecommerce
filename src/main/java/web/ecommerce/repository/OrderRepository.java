package web.ecommerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import web.ecommerce.model.Order;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order, String> {
    List<Order> findAllByOrderByCreatedAtDesc();
    List<Order> findByCustomerPhoneOrderByCreatedAtDesc(String phone);
    long countByStatus(String status);
}
