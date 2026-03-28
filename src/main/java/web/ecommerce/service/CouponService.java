package web.ecommerce.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import web.ecommerce.model.Coupon;
import web.ecommerce.repository.CouponRepository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class CouponService {

    private final CouponRepository repo;

    public CouponService(CouponRepository repo) {
        this.repo = repo;
    }

    @Transactional(readOnly = true)
    public List<Coupon> getAll() {
        return repo.findAll();
    }

    @Transactional(readOnly = true)
    public Optional<Coupon> findById(Long id) {
        return repo.findById(id);
    }

    public Coupon save(Coupon c) {
        return repo.save(c);
    }

    public void delete(Long id) {
        repo.deleteById(id);
    }

    /**
     * Validates the coupon and returns the discount amount.
     * Does NOT increment usedCount — call markUsed() when order is confirmed.
     */
    @Transactional(readOnly = true)
    public long validate(String code, long subtotal) {
        Coupon c = repo.findByCodeIgnoreCase(code)
                .orElseThrow(() -> new IllegalArgumentException("Mã giảm giá không tồn tại"));
        if (!c.isActive())
            throw new IllegalArgumentException("Mã đã bị vô hiệu hóa");
        if (c.getExpiresAt() != null && LocalDate.now().isAfter(c.getExpiresAt()))
            throw new IllegalArgumentException("Mã đã hết hạn sử dụng");
        if (c.getMaxUses() > 0 && c.getUsedCount() >= c.getMaxUses())
            throw new IllegalArgumentException("Mã đã được sử dụng hết lượt");
        if (subtotal < c.getMinOrderValue()) {
            String minFmt = String.format("%,d", c.getMinOrderValue()).replace(",", ".") + "₫";
            throw new IllegalArgumentException("Đơn hàng tối thiểu " + minFmt + " mới áp dụng được mã này");
        }
        return c.computeDiscount(subtotal);
    }

    /**
     * Atomically re-validates and increments usedCount in a single transaction
     * with a pessimistic write lock to prevent concurrent overuse.
     * Throws IllegalArgumentException if the coupon is no longer valid.
     */
    public void validateAndMark(String code, long subtotal) {
        Coupon c = repo.findByCodeIgnoreCaseWithLock(code)
                .orElseThrow(() -> new IllegalArgumentException("Mã giảm giá không tồn tại"));
        if (!c.isActive())
            throw new IllegalArgumentException("Mã đã bị vô hiệu hóa");
        if (c.getExpiresAt() != null && java.time.LocalDate.now().isAfter(c.getExpiresAt()))
            throw new IllegalArgumentException("Mã đã hết hạn sử dụng");
        if (c.getMaxUses() > 0 && c.getUsedCount() >= c.getMaxUses())
            throw new IllegalArgumentException("Mã đã được sử dụng hết lượt");
        if (subtotal < c.getMinOrderValue()) {
            String minFmt = String.format("%,d", c.getMinOrderValue()).replace(",", ".") + "₫";
            throw new IllegalArgumentException("Đơn hàng tối thiểu " + minFmt + " mới áp dụng được mã này");
        }
        c.setUsedCount(c.getUsedCount() + 1);
        repo.save(c);
    }
}
