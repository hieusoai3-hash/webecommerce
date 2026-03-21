package web.ecommerce.model;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "coupons")
public class Coupon {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String code;

    /** PERCENT or FIXED */
    private String discountType;

    /** % value or fixed VND amount */
    private long discountValue;

    /** Minimum order subtotal required (0 = no minimum) */
    private long minOrderValue;

    /** 0 = unlimited */
    private int maxUses;

    private int usedCount;

    private boolean active;

    /** null = never expires */
    @Column(nullable = true)
    private LocalDate expiresAt;

    public Coupon() {}

    public long computeDiscount(long subtotal) {
        if ("PERCENT".equals(discountType)) {
            return subtotal * discountValue / 100;
        }
        return Math.min(discountValue, subtotal);
    }

    public String getFormattedDiscount() {
        if ("PERCENT".equals(discountType)) return discountValue + "%";
        return String.format("%,d", discountValue).replace(",", ".") + "₫";
    }

    public String getFormattedMinOrder() {
        if (minOrderValue <= 0) return "Không giới hạn";
        return String.format("%,d", minOrderValue).replace(",", ".") + "₫";
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getCode() { return code; }
    public void setCode(String code) { this.code = code; }

    public String getDiscountType() { return discountType; }
    public void setDiscountType(String discountType) { this.discountType = discountType; }

    public long getDiscountValue() { return discountValue; }
    public void setDiscountValue(long discountValue) { this.discountValue = discountValue; }

    public long getMinOrderValue() { return minOrderValue; }
    public void setMinOrderValue(long minOrderValue) { this.minOrderValue = minOrderValue; }

    public int getMaxUses() { return maxUses; }
    public void setMaxUses(int maxUses) { this.maxUses = maxUses; }

    public int getUsedCount() { return usedCount; }
    public void setUsedCount(int usedCount) { this.usedCount = usedCount; }

    public boolean isActive() { return active; }
    public void setActive(boolean active) { this.active = active; }

    public LocalDate getExpiresAt() { return expiresAt; }
    public void setExpiresAt(LocalDate expiresAt) { this.expiresAt = expiresAt; }
}
