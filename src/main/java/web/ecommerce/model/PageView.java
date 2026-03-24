package web.ecommerce.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "page_views", indexes = {
    @Index(name = "idx_pv_viewed_at",  columnList = "viewed_at"),
    @Index(name = "idx_pv_product_id", columnList = "product_id")
})
public class PageView {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "viewed_at", nullable = false)
    private LocalDateTime viewedAt;

    /** null for general pages; set to product id for /product-detail visits */
    @Column(name = "product_id", length = 100)
    private String productId;

    public PageView() {}

    public PageView(LocalDateTime viewedAt, String productId) {
        this.viewedAt  = viewedAt;
        this.productId = productId;
    }

    public Long getId()                       { return id; }
    public LocalDateTime getViewedAt()        { return viewedAt; }
    public void setViewedAt(LocalDateTime t)  { this.viewedAt = t; }
    public String getProductId()              { return productId; }
    public void setProductId(String pid)      { this.productId = pid; }
}
