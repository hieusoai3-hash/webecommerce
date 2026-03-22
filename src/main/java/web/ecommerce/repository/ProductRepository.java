package web.ecommerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import web.ecommerce.model.Product;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, String> {
    List<Product> findByCategory(String category);
    List<Product> findByDiscountGreaterThan(int discount);
    List<Product> findByHotTrue();

    @Query("SELECT p FROM Product p WHERE " +
           "LOWER(p.name) LIKE LOWER(CONCAT('%', :q, '%')) OR " +
           "LOWER(p.material) LIKE LOWER(CONCAT('%', :q, '%')) OR " +
           "LOWER(p.category) LIKE LOWER(CONCAT('%', :q, '%'))")
    List<Product> searchByKeyword(@Param("q") String q);
}
