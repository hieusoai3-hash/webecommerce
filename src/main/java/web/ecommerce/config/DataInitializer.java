package web.ecommerce.config;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import web.ecommerce.model.Combo;
import web.ecommerce.model.Product;
import web.ecommerce.model.ProductColor;
import web.ecommerce.repository.ComboRepository;
import web.ecommerce.repository.ProductRepository;

import java.util.List;

@Configuration
public class DataInitializer {

    @Bean
    CommandLineRunner seedCombos(ComboRepository comboRepo) {
        return args -> {
            if (comboRepo.count() > 0) return;

            // ── Quantity combos (Ưu đãi cực sốc) ────────────────────────────
            Combo q1 = new Combo();
            q1.setName("Mua 3 Tặng 1 - Quần Sịp Siêu Tiết Kiệm");
            q1.setBuyQuantity(3); q1.setFreeQuantity(1);
            q1.setPrice(199000); q1.setOriginalPrice(259000);
            q1.setBadgeText("HOT"); q1.setSortOrder(1); q1.setActive(true);
            comboRepo.save(q1);

            Combo q2 = new Combo();
            q2.setName("Mua 5 Tặng 2 - Bộ Sưu Tập Đầy Đủ");
            q2.setBuyQuantity(5); q2.setFreeQuantity(2);
            q2.setPrice(299000); q2.setOriginalPrice(449000);
            q2.setBadgeText("SIÊU HOT"); q2.setSortOrder(2); q2.setActive(true);
            comboRepo.save(q2);

            // ── Mix combos (Combo bán hàng) ───────────────────────────────────
            Combo m1 = new Combo();
            m1.setName("Combo Đàn Ông Gọn Gàng");
            m1.setDescription("Tiết kiệm hơn khi mua kết hợp");
            m1.setComboItems("3 quần sịp, 1 ví da");
            m1.setPrice(799000); m1.setOriginalPrice(1000000);
            m1.setBadgeText("HOT"); m1.setSortOrder(10); m1.setActive(true);
            comboRepo.save(m1);

            Combo m2 = new Combo();
            m2.setName("Combo Đi Làm Chuẩn Chỉnh");
            m2.setDescription("Phong cách công sở hoàn chỉnh");
            m2.setComboItems("3 quần sịp, 1 thắt lưng");
            m2.setPrice(849000); m2.setOriginalPrice(1050000);
            m2.setBadgeText("NEW"); m2.setSortOrder(11); m2.setActive(true);
            comboRepo.save(m2);

            Combo m3 = new Combo();
            m3.setName("Combo Nam Tính Toàn Diện");
            m3.setDescription("Bộ combo hoàn hảo nhất cho nam giới");
            m3.setComboItems("5 quần sịp, 1 ví da, 1 thắt lưng");
            m3.setPrice(1299000); m3.setOriginalPrice(1750000);
            m3.setBadgeText("BEST"); m3.setSortOrder(12); m3.setActive(true);
            comboRepo.save(m3);
        };
    }

    @Bean
    CommandLineRunner seedProducts(ProductRepository repo) {
        return args -> {
            if (repo.count() >= 16) return; // already fully seeded
            repo.deleteAll(); // wipe partial/corrupt data before re-seeding

            // ── Quần sịp ──────────────────────────────────────────────────
            save(repo, "trunk-bamboo", "Quần Lót Nam Trunk Bamboo", "quan-sip", "Bamboo",
                    189000, 259000, 27, 5, 2300, true,
                    "Quần lót nam Trunk Bamboo cao cấp với chất liệu sợi tre tự nhiên, mềm mại và thoáng khí. Thiết kế ôm vừa vặn, đường may phẳng không gây khó chịu.",
                    List.of("Chất liệu sợi Bamboo tự nhiên", "Kháng khuẩn & khử mùi", "Co giãn 4 chiều", "Đường may phẳng"),
                    List.of("XL", "2XL", "3XL", "4XL", "5XL", "6XL"),
                    List.of(
                            new ProductColor("Đen",       "#1a1a1a", "images/products/underwear/product_trunk_navy.png"),
                            new ProductColor("Xám",       "#555555", "images/products/underwear/product_boxer_gray.png"),
                            new ProductColor("Xanh đậm",  "#1e3a5f", "images/products/underwear/product_trunk_navy.png"),
                            new ProductColor("Xanh nhạt", "#87ceeb", "images/products/underwear/product_trunk_green.png")));

            save(repo, "brief-modal", "Quần Lót Nam Brief Lenzing Modal", "quan-sip", "Lenzing Modal",
                    159000, 0, 0, 5, 1800, false,
                    "Brief Lenzing Modal với chất liệu Modal nhập khẩu từ Áo, siêu mềm mịn và co giãn tốt. Phù hợp mặc hàng ngày.",
                    List.of("Lenzing Modal nhập khẩu Áo", "Siêu mềm mịn", "Thấm hút mồ hôi tốt", "Giữ form sau nhiều lần giặt"),
                    List.of("XL", "2XL", "3XL", "4XL", "5XL", "6XL"),
                    List.of(
                            new ProductColor("Đen",      "#1a1a1a", "images/products/underwear/product_brief_black.png"),
                            new ProductColor("Xám",      "#555555", "images/products/underwear/product_brief_black.png"),
                            new ProductColor("Xanh đậm", "#1e3a5f", "images/products/underwear/product_brief_black.png")));

            save(repo, "combo-trunk-cotton", "Combo 3 Quần Lót Nam Trunk Cotton", "quan-sip", "Cotton Compact",
                    359000, 599000, 40, 5, 4100, true,
                    "Combo 3 quần lót Trunk Cotton Compact siêu tiết kiệm. Chất liệu cotton compact cao cấp, bền đẹp và thoáng mát.",
                    List.of("95% Cotton Compact, 5% Spandex", "Combo tiết kiệm 40%", "Bền màu sau nhiều lần giặt", "Thấm hút mồ hôi vượt trội"),
                    List.of("XL", "2XL", "3XL", "4XL", "5XL", "6XL"),
                    List.of(
                            new ProductColor("Đen",      "#1a1a1a", "images/products/underwear/product_boxer_gray.png"),
                            new ProductColor("Xám",      "#555555", "images/products/underwear/product_boxer_gray.png"),
                            new ProductColor("Xanh đậm", "#1e3a5f", "images/products/underwear/product_trunk_navy.png")));

            save(repo, "trunk-excool", "Quần Lót Nam Trunk Excool", "quan-sip", "Excool",
                    169000, 0, 0, 4, 956, false,
                    "Trunk Excool với công nghệ thoát ẩm nhanh gấp 3 lần, lý tưởng cho người vận động nhiều và khí hậu nóng ẩm.",
                    List.of("Công nghệ Excool độc quyền", "Thoát ẩm nhanh gấp 3 lần", "Siêu nhẹ, thoáng mát", "Phù hợp thể thao"),
                    List.of("XL", "2XL", "3XL", "4XL", "5XL", "6XL"),
                    List.of(
                            new ProductColor("Đen",       "#1a1a1a", "images/products/underwear/product_trunk_green.png"),
                            new ProductColor("Xám",       "#555555", "images/products/underwear/product_boxer_gray.png"),
                            new ProductColor("Xanh nhạt", "#87ceeb", "images/products/underwear/product_trunk_green.png")));

            save(repo, "brief-bamboo", "Quần Lót Nam Brief Bamboo", "quan-sip", "Bamboo",
                    139000, 199000, 30, 5, 1200, false,
                    "Brief Bamboo với thiết kế tam giác truyền thống, chất liệu sợi tre kháng khuẩn tự nhiên.",
                    List.of("Sợi Bamboo kháng khuẩn", "Thiết kế Brief truyền thống", "Mềm mại, thoáng khí", "Co giãn thoải mái"),
                    List.of("XL", "2XL", "3XL", "4XL", "5XL", "6XL"),
                    List.of(
                            new ProductColor("Đen", "#1a1a1a", "images/products/underwear/product_brief_wine.png"),
                            new ProductColor("Xám", "#555555", "images/products/underwear/product_brief_black.png")));

            save(repo, "boxer-brief-modal", "Quần Lót Nam Boxer Brief Modal II", "quan-sip", "Lenzing Modal",
                    199000, 0, 0, 5, 678, false,
                    "Boxer Brief Modal II phiên bản nâng cấp, ống dài hơn giúp chống cọ xát đùi hiệu quả.",
                    List.of("Lenzing Modal cao cấp", "Ống dài chống cọ xát", "Lưng thun dệt êm ái", "Đường may phẳng tuyệt đối"),
                    List.of("XL", "2XL", "3XL", "4XL", "5XL", "6XL"),
                    List.of(
                            new ProductColor("Đen",      "#1a1a1a", "images/products/underwear/product_trunk_navy.png"),
                            new ProductColor("Xanh đậm", "#1e3a5f", "images/products/underwear/product_trunk_navy.png")));

            save(repo, "combo-brief-cotton", "Combo 3 Quần Lót Nam Brief Cotton Stretch", "quan-sip", "Cotton Stretch",
                    299000, 459000, 35, 5, 3500, false,
                    "Combo 3 Brief Cotton Stretch với độ co giãn cao, ôm sát thoải mái suốt cả ngày.",
                    List.of("Cotton Stretch co giãn cao", "Combo tiết kiệm 35%", "Ôm sát nhưng không bó", "Bền đẹp lâu dài"),
                    List.of("XL", "2XL", "3XL", "4XL", "5XL", "6XL"),
                    List.of(
                            new ProductColor("Đen", "#1a1a1a", "images/products/underwear/product_brief_black.png"),
                            new ProductColor("Xám", "#555555", "images/products/underwear/product_brief_wine.png")));

            save(repo, "trunk-ergofit", "Quần Lót Nam Trunk Ergofit", "quan-sip", "Cotton Compact",
                    179000, 0, 0, 4, 845, false,
                    "Trunk Ergofit với thiết kế công thái học, ôm theo cơ thể mang lại sự thoải mái tối đa.",
                    List.of("Thiết kế Ergofit công thái học", "Cotton Compact cao cấp", "Lưng thun không cuốn", "Thoáng khí cả ngày"),
                    List.of("XL", "2XL", "3XL", "4XL", "5XL", "6XL"),
                    List.of(
                            new ProductColor("Đen",       "#1a1a1a", "images/products/underwear/product_boxer_gray.png"),
                            new ProductColor("Xanh nhạt", "#87ceeb", "images/products/underwear/product_trunk_green.png")));

            // ── Ví da ─────────────────────────────────────────────────────
            save(repo, "vi-card-mini", "Ví Card Mini Monogram Neo", "vi-da", "Da cao cấp & Microfiber",
                    450000, 0, 0, 5, 320, false,
                    "Ví card mini với thiết kế nhỏ gọn, đựng vừa thẻ và tiền mặt. Chất liệu da Microfiber bền đẹp.",
                    List.of("Da Microfiber cao cấp", "Thiết kế nhỏ gọn", "Nhiều ngăn thẻ", "Không bong tróc"),
                    List.of("Free Size"),
                    List.of(
                            new ProductColor("Nâu", "#8B4513", "images/products/wallets/wallet_premium_brown.png"),
                            new ProductColor("Đen", "#1a1a1a", "images/products/wallets/wallet_premium_black.png")));

            save(repo, "vi-monogram-rfid", "Ví Mini Monogram Neo RFID", "vi-da", "Da cao cấp & Microfiber",
                    550000, 0, 0, 5, 215, false,
                    "Ví Mini Monogram Neo tích hợp công nghệ chặn RFID bảo vệ thông tin thẻ ngân hàng.",
                    List.of("Công nghệ chặn RFID", "Da Microfiber bền đẹp", "Ngăn thẻ thông minh", "Bảo vệ thông tin cá nhân"),
                    List.of("Free Size"),
                    List.of(
                            new ProductColor("Xanh navy", "#1e3a5f", "images/products/wallets/wallet_premium_navy.png"),
                            new ProductColor("Đen",       "#1a1a1a", "images/products/wallets/wallet_premium_black.png")));

            save(repo, "vi-mercury", "Ví Khắc Tên Mercury", "vi-da", "Da cao cấp & Microfiber",
                    600000, 0, 0, 5, 410, true,
                    "Ví Mercury cao cấp với dịch vụ khắc tên miễn phí, món quà ý nghĩa cho người thân.",
                    List.of("Khắc tên miễn phí", "Da Microfiber cao cấp", "Thiết kế sang trọng", "Quà tặng ý nghĩa"),
                    List.of("Free Size"),
                    List.of(
                            new ProductColor("Xanh rêu", "#556B2F", "images/products/wallets/wallet_premium_green.png"),
                            new ProductColor("Nâu",       "#8B4513", "images/products/wallets/wallet_premium_brown.png")));

            save(repo, "vi-hayden-rfid", "Ví Da Hayden RFID", "vi-da", "Da cao cấp & Microfiber",
                    620000, 0, 0, 5, 180, false,
                    "Ví Hayden RFID với thiết kế ngang cổ điển, tích hợp công nghệ chặn RFID hiện đại.",
                    List.of("Chặn RFID bảo mật", "Thiết kế ngang cổ điển", "Nhiều ngăn tiện dụng", "Da bền không bong tróc"),
                    List.of("Free Size"),
                    List.of(
                            new ProductColor("Đen",       "#1a1a1a", "images/products/wallets/wallet_premium_black.png"),
                            new ProductColor("Xanh navy", "#1e3a5f", "images/products/wallets/wallet_premium_navy.png")));

            // ── Thắt lưng ─────────────────────────────────────────────────
            save(repo, "that-lung-tu-dong", "Thắt Lưng Nam Tự Động Neo", "that-lung", "Da bò thật 100%",
                    550000, 650000, 15, 5, 420, true,
                    "Thắt lưng nam tự động với khóa hợp kim cao cấp không gỉ. Thiết kế tối giản, nam tính, phù hợp cho dân công sở.",
                    List.of("Da bò nguyên tấm", "Khóa tự động hợp kim", "Bảo hành da 12 tháng", "Thiết kế tinh tế"),
                    List.of("Free Size"),
                    List.of(
                            new ProductColor("Đen", "#1a1a1a", "images/products/belts/belt_black_auto.png"),
                            new ProductColor("Nâu", "#8B4513", "images/products/belts/belt_brown_classic.png")));

            save(repo, "that-lung-xoay-chieu", "Thắt Lưng Xoay Chiều Reversible", "that-lung", "Da bò Saffiano",
                    650000, 0, 0, 5, 315, false,
                    "Thắt lưng xoay chiều 2 mặt Đen - Nâu linh hoạt, mua 1 được 2. Phù hợp thay đổi trang phục dễ dàng.",
                    List.of("Khóa đúc nguyên khối", "Sử dụng 2 mặt Đen/Nâu", "Chất da Saffiano chống xước", "Tiện lợi, tiết kiệm"),
                    List.of("Free Size"),
                    List.of(
                            new ProductColor("Đen/Nâu", "#333333", "images/products/belts/belt_black_auto.png")));

            save(repo, "that-lung-duc-lo", "Thắt Lưng Đục Lỗ Cổ Điển", "that-lung", "Da bò Mill",
                    450000, 0, 0, 4, 150, false,
                    "Thiết kế đục lỗ cổ điển dập vân tự nhiên, mang đậm phong cách vintage và phóng khoáng.",
                    List.of("Da bò dập vân", "Phong cách Vintage", "Khóa kim đồng thau", "Bền bỉ vượt thời gian"),
                    List.of("Free Size"),
                    List.of(
                            new ProductColor("Nâu sáp", "#A0522D", "images/products/belts/belt_brown_classic.png")));

            save(repo, "that-lung-khoa-kim", "Thắt Lưng Khóa Kim Loại", "that-lung", "Da bò Nappa",
                    700000, 0, 0, 5, 512, false,
                    "Dòng thắt lưng cực kì sang trọng với khóa kim đúc nguyên khối xước mờ. Hoàn hảo khi kết hợp suit dự tiệc.",
                    List.of("Khóa kim loại xước mờ", "Chất da Nappa mềm", "Thiết kế đẳng cấp", "Tạo điểm nhấn mạnh mẽ"),
                    List.of("Free Size"),
                    List.of(
                            new ProductColor("Đen bóng", "#000000", "images/products/belts/belt_black_auto.png")));
        };
    }

    private static void save(ProductRepository repo,
                              String id, String name, String category, String material,
                              long price, long originalPrice, int discount,
                              int rating, int reviews, boolean hot,
                              String description, List<String> features,
                              List<String> sizes, List<ProductColor> colors) {
        Product p = new Product();
        p.setId(id); p.setName(name); p.setCategory(category); p.setMaterial(material);
        p.setPrice(price); p.setOriginalPrice(originalPrice); p.setDiscount(discount);
        p.setRating(rating); p.setReviews(reviews); p.setHot(hot);
        p.setDescription(description); p.setFeatures(features);
        p.setSizes(sizes); p.setColors(colors);
        repo.save(p);
    }
}
