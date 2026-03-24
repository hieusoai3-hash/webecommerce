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

    // Contact info
    private String shopPhone;
    private String shopEmail;
    @Column(length = 500)
    private String shopAddress;

    // Social media
    private String facebookUrl;
    private String zaloPhone;
    private String tiktokUrl;

    public SiteSettings() {}

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getBannerText() { return bannerText; }
    public void setBannerText(String bannerText) { this.bannerText = bannerText; }

    public boolean isBannerEnabled() { return bannerEnabled; }
    public void setBannerEnabled(boolean bannerEnabled) { this.bannerEnabled = bannerEnabled; }

    public long getSaleEndEpoch() { return saleEndEpoch; }
    public void setSaleEndEpoch(long saleEndEpoch) { this.saleEndEpoch = saleEndEpoch; }

    public String getShopPhone() { return shopPhone; }
    public void setShopPhone(String shopPhone) { this.shopPhone = shopPhone; }

    public String getShopEmail() { return shopEmail; }
    public void setShopEmail(String shopEmail) { this.shopEmail = shopEmail; }

    public String getShopAddress() { return shopAddress; }
    public void setShopAddress(String shopAddress) { this.shopAddress = shopAddress; }

    public String getFacebookUrl() { return facebookUrl; }
    public void setFacebookUrl(String facebookUrl) { this.facebookUrl = facebookUrl; }

    public String getZaloPhone() { return zaloPhone; }
    public void setZaloPhone(String zaloPhone) { this.zaloPhone = zaloPhone; }

    public String getTiktokUrl() { return tiktokUrl; }
    public void setTiktokUrl(String tiktokUrl) { this.tiktokUrl = tiktokUrl; }
}
