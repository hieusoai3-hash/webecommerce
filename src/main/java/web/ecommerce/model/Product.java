package web.ecommerce.model;

import java.util.List;

public class Product {
    private String id;
    private String name;
    private String category;
    private String material;
    private long price;
    private long originalPrice;
    private int discount;
    private int rating;
    private int reviews;
    private String description;
    private List<String> features;
    private List<ProductColor> colors;
    private List<String> sizes;
    private boolean hot;

    public Product() {}

    // ── Formatted helpers for Thymeleaf ──────────────────────────────────
    public String getFormattedPrice() {
        return String.format("%,d", price).replace(",", ".") + "₫";
    }

    public String getFormattedOriginalPrice() {
        if (originalPrice <= 0) return "";
        return String.format("%,d", originalPrice).replace(",", ".") + "₫";
    }

    public String getFormattedReviews() {
        return reviews >= 1000
                ? String.format("%.1fk", reviews / 1000.0)
                : String.valueOf(reviews);
    }

    public boolean isOnSale() {
        return discount > 0;
    }

    public String getStars() {
        return "★".repeat(rating) + "☆".repeat(5 - rating);
    }

    // ── Getters / Setters ────────────────────────────────────────────────
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }

    public String getMaterial() { return material; }
    public void setMaterial(String material) { this.material = material; }

    public long getPrice() { return price; }
    public void setPrice(long price) { this.price = price; }

    public long getOriginalPrice() { return originalPrice; }
    public void setOriginalPrice(long originalPrice) { this.originalPrice = originalPrice; }

    public int getDiscount() { return discount; }
    public void setDiscount(int discount) { this.discount = discount; }

    public int getRating() { return rating; }
    public void setRating(int rating) { this.rating = rating; }

    public int getReviews() { return reviews; }
    public void setReviews(int reviews) { this.reviews = reviews; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public List<String> getFeatures() { return features; }
    public void setFeatures(List<String> features) { this.features = features; }

    public List<ProductColor> getColors() { return colors; }
    public void setColors(List<ProductColor> colors) { this.colors = colors; }

    public List<String> getSizes() { return sizes; }
    public void setSizes(List<String> sizes) { this.sizes = sizes; }

    public boolean isHot() { return hot; }
    public void setHot(boolean hot) { this.hot = hot; }
}
