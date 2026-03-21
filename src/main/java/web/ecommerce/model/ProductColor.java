package web.ecommerce.model;

public class ProductColor {
    private String name;
    private String hex;
    private String imageUrl;

    public ProductColor(String name, String hex, String imageUrl) {
        this.name = name;
        this.hex = hex;
        this.imageUrl = imageUrl;
    }

    public String getName() { return name; }
    public String getHex() { return hex; }
    public String getImageUrl() { return imageUrl; }
}
