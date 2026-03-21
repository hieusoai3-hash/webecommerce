package web.ecommerce.model;

import jakarta.persistence.*;

@Entity
@Table(name = "combos")
public class Combo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private int buyQuantity;
    private int freeQuantity;
    private long price;
    private long originalPrice;

    @Column(length = 500)
    private String description;

    @Column(length = 1000)
    private String details;

    /** Comma-separated product items, e.g. "3 quần sịp,1 ví da,1 thắt lưng" */
    @Column(length = 500)
    private String comboItems;

    private String badgeText;
    private String imageUrl;
    private boolean active = true;
    private int sortOrder = 0;

    public Combo() {}

    // ── Helpers ──────────────────────────────────────────────────────────
    public String getFormattedPrice() {
        return String.format("%,d", price).replace(",", ".") + "₫";
    }
    public String getFormattedOriginalPrice() {
        if (originalPrice <= 0) return "";
        return String.format("%,d", originalPrice).replace(",", ".") + "₫";
    }
    public int getSavingPct() {
        if (originalPrice <= 0 || price >= originalPrice) return 0;
        return (int) ((originalPrice - price) * 100 / originalPrice);
    }
    public String getLabel() {
        return "Mua " + buyQuantity + " Tặng " + freeQuantity;
    }

    // ── Getters / Setters ─────────────────────────────────────────────────
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public int getBuyQuantity() { return buyQuantity; }
    public void setBuyQuantity(int buyQuantity) { this.buyQuantity = buyQuantity; }

    public int getFreeQuantity() { return freeQuantity; }
    public void setFreeQuantity(int freeQuantity) { this.freeQuantity = freeQuantity; }

    public long getPrice() { return price; }
    public void setPrice(long price) { this.price = price; }

    public long getOriginalPrice() { return originalPrice; }
    public void setOriginalPrice(long originalPrice) { this.originalPrice = originalPrice; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getDetails() { return details; }
    public void setDetails(String details) { this.details = details; }

    public String getComboItems() { return comboItems; }
    public void setComboItems(String comboItems) { this.comboItems = comboItems; }

    /** Returns comboItems split into a list for Thymeleaf th:each */
    public java.util.List<String> getComboItemList() {
        if (comboItems == null || comboItems.isBlank()) return java.util.List.of();
        return java.util.Arrays.stream(comboItems.split(","))
                .map(String::trim).filter(s -> !s.isEmpty())
                .collect(java.util.stream.Collectors.toList());
    }

    /** True if this is a pure quantity combo (buy N get N free) */
    public boolean isQuantityCombo() { return buyQuantity > 0 && freeQuantity > 0; }

    /** True if this is a mixed product combo */
    public boolean isMixCombo() { return comboItems != null && !comboItems.isBlank(); }

    public String getBadgeText() { return badgeText; }
    public void setBadgeText(String badgeText) { this.badgeText = badgeText; }

    public String getImageUrl() { return imageUrl; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }

    public boolean isActive() { return active; }
    public void setActive(boolean active) { this.active = active; }

    public int getSortOrder() { return sortOrder; }
    public void setSortOrder(int sortOrder) { this.sortOrder = sortOrder; }
}
