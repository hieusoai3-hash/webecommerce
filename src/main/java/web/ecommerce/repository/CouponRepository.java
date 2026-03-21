package web.ecommerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import web.ecommerce.model.Coupon;

import java.util.Optional;

public interface CouponRepository extends JpaRepository<Coupon, Long> {
    Optional<Coupon> findByCodeIgnoreCase(String code);
}
