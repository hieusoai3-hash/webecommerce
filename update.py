import re

# Update quan-sip.html
with open('quan-sip.html', 'r', encoding='utf-8') as f:
    quan_sip = f.read()

quan_sip = quan_sip.replace('<title>NB2 Boxer Men - Đồ Lót Nam Cao Cấp</title>', '<title>Quần Sịp Nam - NB2 Boxer Men</title>')

nav_old = '''<li class="nav-item"><a href="#" class="nav-link active">TRANG CHỦ</a></li>
                    <li class="nav-item">
                        <a href="#products" class="nav-link">SẢN PHẨM</a>
                        <div class="mega-menu">
                            <div class="mega-menu-inner">
                                <div class="mega-col">
                                    <h4>Danh Mục</h4>
                                    <a href="#">Quần sịp</a>'''

nav_new = '''<li class="nav-item"><a href="index.html" class="nav-link">TRANG CHỦ</a></li>
                    <li class="nav-item">
                        <a href="#products" class="nav-link active">SẢN PHẨM</a>
                        <div class="mega-menu">
                            <div class="mega-menu-inner">
                                <div class="mega-col">
                                    <h4>Danh Mục</h4>
                                    <a href="quan-sip.html" class="active">Quần sịp</a>'''

quan_sip = quan_sip.replace(nav_old, nav_new, 1)

with open('quan-sip.html', 'w', encoding='utf-8') as f:
    f.write(quan_sip)

# Update index.html
with open('index.html', 'r', encoding='utf-8') as f:
    idx = f.read()

nav_old2 = '''<li class="nav-item"><a href="#" class="nav-link active">TRANG CHỦ</a></li>
                    <li class="nav-item">
                        <a href="#products" class="nav-link">SẢN PHẨM</a>
                        <div class="mega-menu">
                            <div class="mega-menu-inner">
                                <div class="mega-col">
                                    <h4>Danh Mục</h4>
                                    <a href="#">Quần sịp</a>'''

nav_new2 = '''<li class="nav-item"><a href="index.html" class="nav-link active">TRANG CHỦ</a></li>
                    <li class="nav-item">
                        <a href="#products" class="nav-link">SẢN PHẨM</a>
                        <div class="mega-menu">
                            <div class="mega-menu-inner">
                                <div class="mega-col">
                                    <h4>Danh Mục</h4>
                                    <a href="quan-sip.html">Quần sịp</a>'''

idx = idx.replace(nav_old2, nav_new2, 1)

hero_old = '''<span class="hero-tag animate-fade-up">BỘ SƯU TẬP MỚI 2026</span>
            <h1 class="hero-title animate-fade-up delay-1">Thoải Mái<br><span class="text-accent">Mỗi Ngày</span></h1>
            <p class="hero-description animate-fade-up delay-2">Quần lót nam cao cấp với chất liệu Bamboo &
                Modal<br>Thoáng mát, kháng khuẩn, bền đẹp theo thời gian</p>'''

hero_new = '''<span class="hero-tag animate-fade-up">THƯƠNG HIỆU PHÁI MẠNH</span>
            <h1 class="hero-title animate-fade-up delay-1">NB2<br><span class="text-accent">Boxer Men</span></h1>
            <p class="hero-description animate-fade-up delay-2">Khẳng định phong cách đàn ông<br>Quần sịp, Ví da & Thắt lưng cao cấp</p>'''

idx = idx.replace(hero_old, hero_new, 1)

cat_old = '''<span class="section-tag">DANH MỤC</span>
                <h2 class="section-title">Khám Phá Theo Kiểu Dáng</h2>
                <p class="section-desc">Chọn kiểu dáng phù hợp nhất với phong cách của bạn</p>
            </div>
            <div class="category-grid">
                <a href="#" class="category-card reveal" id="cat-brief">
                    <div class="category-img">
                        <img src="images/category_brief.png" alt="Brief - Tam giác" loading="lazy">
                    </div>
                    <div class="category-info">
                        <h3>Brief</h3>
                        <span class="category-subtitle">Tam Giác Cổ Điển</span>
                        <span class="category-cta">Khám phá →</span>
                    </div>
                </a>
                <a href="#" class="category-card reveal" id="cat-trunk">
                    <div class="category-img">
                        <img src="images/category_trunk.png" alt="Trunk - Boxer" loading="lazy">
                    </div>
                    <div class="category-info">
                        <h3>Trunk</h3>
                        <span class="category-subtitle">Boxer Ngắn</span>
                        <span class="category-cta">Khám phá →</span>
                    </div>
                </a>
                <a href="#" class="category-card reveal" id="cat-boxerbrief">
                    <div class="category-img">
                        <img src="images/product_boxer_gray.png" alt="Boxer Brief" loading="lazy">
                    </div>
                    <div class="category-info">
                        <h3>Boxer Brief</h3>
                        <span class="category-subtitle">Boxer Dài</span>
                        <span class="category-cta">Khám phá →</span>
                    </div>
                </a>
                <a href="#" class="category-card reveal" id="cat-longleg">
                    <div class="category-img">
                        <img src="images/product_trunk_green.png" alt="Long Leg" loading="lazy">
                    </div>
                    <div class="category-info">
                        <h3>Long Leg</h3>
                        <span class="category-subtitle">Ống Dài</span>
                        <span class="category-cta">Khám phá →</span>
                    </div>
                </a>'''

cat_new = '''<span class="section-tag">DANH MỤC SẢN PHẨM</span>
                <h2 class="section-title">Khám Phá Thế Giới Đồ Nam</h2>
                <p class="section-desc">Lựa chọn các sản phẩm phù hợp nhất với phong cách của bạn</p>
            </div>
            <div class="category-grid">
                <a href="quan-sip.html" class="category-card reveal" id="cat-quan-sip">
                    <div class="category-img">
                        <img src="images/product_trunk_navy.png" alt="Quần Sịp Nam" loading="lazy">
                    </div>
                    <div class="category-info">
                        <h3>Quần Sịp Nam</h3>
                        <span class="category-subtitle">Thoải Mái Tối Đa</span>
                        <span class="category-cta">Khám phá →</span>
                    </div>
                </a>
                <a href="#" class="category-card reveal" id="cat-vi-da">
                    <div class="category-img">
                        <img src="images/category_trunk.png" alt="Ví Da Cao Cấp" loading="lazy">
                    </div>
                    <div class="category-info">
                        <h3>Ví Da Cao Cấp</h3>
                        <span class="category-subtitle">Sang Trọng, Lịch Lãm</span>
                        <span class="category-cta">Khám phá →</span>
                    </div>
                </a>
                <a href="#" class="category-card reveal" id="cat-that-lung">
                    <div class="category-img">
                        <img src="images/category_brief.png" alt="Thắt Lưng Da" loading="lazy">
                    </div>
                    <div class="category-info">
                        <h3>Thắt Lưng Da</h3>
                        <span class="category-subtitle">Bền Bỉ, Nam Tính</span>
                        <span class="category-cta">Khám phá →</span>
                    </div>
                </a>
                <a href="#" class="category-card reveal" id="cat-phu-kien">
                    <div class="category-img">
                        <img src="images/product_boxer_gray.png" alt="Phụ Kiện" loading="lazy">
                    </div>
                    <div class="category-info">
                        <h3>Phụ Kiện Khác</h3>
                        <span class="category-subtitle">Hoàn Thiện Phong Cách</span>
                        <span class="category-cta">Khám phá →</span>
                    </div>
                </a>'''

idx = idx.replace(cat_old, cat_new, 1)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(idx)

print('Done applying changes')
