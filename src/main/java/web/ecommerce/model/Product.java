package web.ecommerce.model;

import jakarta.persistence.CollectionTable;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Table;
import java.util.List;

@Entity
@Table(name = "products")
public class Product {

    @Id
    private String id;
    private String name;
    private String category;
    private String material;
    private long price;
    private long originalPrice;
    private int discount;
    private int rating;
    private int reviews;

    @Column(length = 2000)
    private String description;

    @ElementCollection
    @CollectionTable(name = "product_features", joinColumns = @JoinColumn(name = "product_id"))
    @Column(name = "feature")
    private List<String> features;

    @ElementCollection
    @CollectionTable(name = "product_colors", joinColumns = @JoinColumn(name = "product_id"))
    private List<ProductColor> colors;

    @ElementCollection
    @CollectionTable(name = "product_sizes", joinColumns = @JoinColumn(name = "product_id"))
    @Column(name = "size")
    private List<String> sizes;

    private boolean hot;
    private int stock;

    @ElementCollection
    @CollectionTable(name = "product_variant_stocks", joinColumns = @JoinColumn(name = "product_id"))
    private List<ProductVariantStock> variantStocks;

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
        int r = Math.max(0, Math.min(5, rating));
        return "★".repeat(r) + "☆".repeat(5 - r);
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

    public int getStock() { return stock; }
    public void setStock(int stock) { this.stock = stock; }

    public List<ProductVariantStock> getVariantStocks() { return variantStocks; }
    public void setVariantStocks(List<ProductVariantStock> variantStocks) { this.variantStocks = variantStocks; }

    /** Returns 0–100 representing how complete this product's data is. */
    public int getCompletenessPct() {
        int score = 0;
        if (colors    != null && !colors.isEmpty())                    score += 20;
        if (description != null && !description.isBlank())             score += 20;
        if (features  != null && !features.isEmpty())                  score += 20;
        if (sizes     != null && !sizes.isEmpty())                     score += 20;
        if (reviews   > 0)                                             score += 20;
        return score;
    }
}
