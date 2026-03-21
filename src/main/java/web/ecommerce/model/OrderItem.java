package web.ecommerce.model;

public class OrderItem {

    private String productId;
    private String productName;
    private String size;
    private int quantity;
    private long price;

    public OrderItem() {}

    public String getProductId() { return productId; }
    public void setProductId(String productId) { this.productId = productId; }

    public String getProductName() { return productName; }
    public void setProductName(String productName) { this.productName = productName; }

    public String getSize() { return size; }
    public void setSize(String size) { this.size = size; }

    public int getQuantity() { return quantity; }
    public void setQuantity(int quantity) { this.quantity = quantity; }

    public long getPrice() { return price; }
    public void setPrice(long price) { this.price = price; }
}
