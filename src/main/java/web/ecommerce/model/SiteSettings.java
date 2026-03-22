package web.ecommerce.model;

import jakarta.persistence.*;

@Entity
@Table(name = "site_settings")
public class SiteSettings {

    @Id
    private Long id = 1L;

    @Column(length = 500)
    private String bannerText = "\uD83D\uDD25 FLASH SALE - Giảm đến 40% tất cả quần lót | Mua 3 tặng 1 | Miễn phí vận chuyển đơn từ 299K \uD83D\uDD25";

    private boolean bannerEnabled = true;

    // Sale countdown end time (epoch millis). 0 = not set (client handles via localStorage)
    private long saleEndEpoch = 0L;

    public SiteSettings() {}

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getBannerText() { return bannerText; }
    public void setBannerText(String bannerText) { this.bannerText = bannerText; }

    public boolean isBannerEnabled() { return bannerEnabled; }
    public void setBannerEnabled(boolean bannerEnabled) { this.bannerEnabled = bannerEnabled; }

    public long getSaleEndEpoch() { return saleEndEpoch; }
    public void setSaleEndEpoch(long saleEndEpoch) { this.saleEndEpoch = saleEndEpoch; }
}
