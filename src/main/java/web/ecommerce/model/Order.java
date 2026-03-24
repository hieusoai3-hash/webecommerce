package web.ecommerce.model;

import jakarta.persistence.CollectionTable;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Table;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "orders")
public class Order {

    @Id
    private String id;
    private String customerName;
    private String customerPhone;
    private String customerAddress;

    @ElementCollection
    @CollectionTable(name = "order_items", joinColumns = @JoinColumn(name = "order_id"))
    private List<OrderItem> items;

    private long total;
    private String paymentMethod;
    private String status;
    private LocalDateTime createdAt;
    private String couponCode;
    private long couponDiscount;
    @Column(length = 1000)
    private String customerNote;
    private String shippingCarrier;
    private String trackingCode;

    public Order() {
        this.createdAt = LocalDateTime.now();
        this.status = "PENDING";
    }

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getCustomerName() { return customerName; }
    public void setCustomerName(String customerName) { this.customerName = customerName; }

    public String getCustomerPhone() { return customerPhone; }
    public void setCustomerPhone(String customerPhone) { this.customerPhone = customerPhone; }

    public String getCustomerAddress() { return customerAddress; }
    public void setCustomerAddress(String customerAddress) { this.customerAddress = customerAddress; }

    public List<OrderItem> getItems() { return items; }
    public void setItems(List<OrderItem> items) { this.items = items; }

    public long getTotal() { return total; }
    public void setTotal(long total) { this.total = total; }

    public String getPaymentMethod() { return paymentMethod; }
    public void setPaymentMethod(String paymentMethod) { this.paymentMethod = paymentMethod; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }

    public String getCouponCode() { return couponCode; }
    public void setCouponCode(String couponCode) { this.couponCode = couponCode; }

    public long getCouponDiscount() { return couponDiscount; }
    public void setCouponDiscount(long couponDiscount) { this.couponDiscount = couponDiscount; }

    public String getCustomerNote() { return customerNote; }
    public void setCustomerNote(String customerNote) { this.customerNote = customerNote; }

    public String getShippingCarrier() { return shippingCarrier; }
    public void setShippingCarrier(String shippingCarrier) { this.shippingCarrier = shippingCarrier; }

    public String getTrackingCode() { return trackingCode; }
    public void setTrackingCode(String trackingCode) { this.trackingCode = trackingCode; }

    public String getFormattedTotal() {
        return String.format("%,d", total).replace(",", ".") + "₫";
    }
}
