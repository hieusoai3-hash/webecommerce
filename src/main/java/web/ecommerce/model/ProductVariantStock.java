package web.ecommerce.model;

import jakarta.persistence.Embeddable;

@Embeddable
public class ProductVariantStock {
    private String colorName;
    private String sizeName;
    private int qty;

    public ProductVariantStock() {}

    public ProductVariantStock(String colorName, String sizeName, int qty) {
        this.colorName = colorName;
        this.sizeName = sizeName;
        this.qty = qty;
    }

    public String getColorName() { return colorName; }
    public void setColorName(String colorName) { this.colorName = colorName; }

    public String getSizeName() { return sizeName; }
    public void setSizeName(String sizeName) { this.sizeName = sizeName; }

    public int getQty() { return qty; }
    public void setQty(int qty) { this.qty = qty; }
}
