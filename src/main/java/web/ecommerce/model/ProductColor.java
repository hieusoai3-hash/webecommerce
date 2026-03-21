package web.ecommerce.model;

import jakarta.persistence.Embeddable;

@Embeddable
public class ProductColor {
    private String name;
    private String hex;
    private String imageUrl;

    public ProductColor() {}

    public ProductColor(String name, String hex, String imageUrl) {
        this.name = name;
        this.hex = hex;
        this.imageUrl = imageUrl;
    }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getHex() { return hex; }
    public void setHex(String hex) { this.hex = hex; }

    public String getImageUrl() { return imageUrl; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }
}
