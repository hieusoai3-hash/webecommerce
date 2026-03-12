import re

# Update nav in all files
nav_replace_str = '''<div class="mega-col">
                                    <h4>Danh Mục</h4>
                                    <a href="quan-sip.html">Quần sịp</a>
                                    <a href="vi-da.html">Ví da</a>'''

files = ['index.html', 'quan-sip.html']
for fn in files:
    with open(fn, 'r', encoding='utf-8') as f:
        content = f.read()
    content = re.sub(r'<div class="mega-col">\s*<h4>Danh Mục</h4>\s*<a href="quan-sip.html"(.*?)>Quần sịp</a>\s*<a href="#">Ví da</a>', 
                     r'<div class="mega-col">\n                                    <h4>Danh Mục</h4>\n                                    <a href="quan-sip.html"\1>Quần sịp</a>\n                                    <a href="vi-da.html">Ví da</a>',
                     content)
    # also update category link if present
    content = re.sub(r'<a href="#" class="category-card reveal" id="cat-vi-da">', r'<a href="vi-da.html" class="category-card reveal" id="cat-vi-da">', content)
    with open(fn, 'w', encoding='utf-8') as f:
        f.write(content)

# Start creating vi-da.html from index.html as a base
with open('index.html', 'r', encoding='utf-8') as f:
    vida = f.read()

vida = vida.replace('NB2 Boxer Men - Đồ Lót Nam Cao Cấp', 'Ví Da Nam Cao Cấp - NB2 Boxer Men')

# Set nav active state for vi-da
vida = re.sub(r'<li class="nav-item"><a href="index.html" class="nav-link active">TRANG CHỦ</a></li>\s*<li class="nav-item">\s*<a href="#products" class="nav-link">SẢN PHẨM</a>',
              r'<li class="nav-item"><a href="index.html" class="nav-link">TRANG CHỦ</a></li>\n                    <li class="nav-item">\n                        <a href="#products" class="nav-link active">SẢN PHẨM</a>', vida)
vida = re.sub(r'<a href="vi-da.html">Ví da</a>', '<a href="vi-da.html" class="active">Ví da</a>', vida)


hero_old = re.search(r'<!-- Hero Section -->.*?<!-- Categories Section -->', vida, re.DOTALL).group(0)
hero_new = '''<!-- Hero Section -->
    <section class="vida-header" style="background:#f5f5f5; padding: 60px 0; text-align: center; margin-top: 70px;">
        <div class="container">
            <h1 style="font-size: 3rem; font-weight: 800; margin-bottom: 20px;">VÍ DA NAM</h1>
            <p style="max-width: 800px; margin: 0 auto; color: #555; line-height: 1.6;">Tất cả các dòng ví của NB2 đều được sử dụng bằng da với nhiều mẫu mã và chất liệu da khác nhau từ da bò thật, đến da microfiber bảo vệ môi trường. Ví lớn, ví card, ví dài, ví dài khóa kéo sẽ giúp bạn vừa có một chiếc ví đầy đủ công năng, vừa phù hợp với mọi phong cách.</p>
        </div>
    </section>
    <!-- Categories Section -->'''
vida = vida.replace(hero_old, hero_new)

cat_old = re.search(r'<section class="categories" id="categories">.*?</section>', vida, re.DOTALL).group(0)
cat_new = '''<!-- Best Seller Section -->
    <section class="categories" id="bestseller" style="padding-top: 60px;">
        <div class="container">
            <div class="section-header" style="text-align: left;">
                <h2 class="section-title" style="font-size: 2rem;">BEST SELLER</h2>
                <div style="width: 60px; height: 3px; background: #000; margin-top: 10px;"></div>
            </div>
            <div class="product-grid" style="margin-top: 30px;">
                <div class="product-card reveal">
                    <div class="product-image">
                        <img src="images/product_boxer_gray.png" alt="Ví Card Mini Monogram" class="img-primary">
                    </div>
                    <div class="product-info">
                        <h3 class="product-name" style="font-size: 1.1rem; margin-bottom: 5px;">Ví Card Mini Monogram Neo</h3>
                        <div class="product-price">
                            <span class="price-current">450.000₫</span>
                        </div>
                    </div>
                </div>
                <div class="product-card reveal">
                    <div class="product-image">
                        <img src="images/product_trunk_navy.png" alt="Ví Mini Monogram Neo RFID" class="img-primary">
                    </div>
                    <div class="product-info">
                        <h3 class="product-name" style="font-size: 1.1rem; margin-bottom: 5px;">Ví Mini Monogram Neo RFID</h3>
                        <div class="product-price">
                            <span class="price-current">550.000₫</span>
                        </div>
                    </div>
                </div>
                <div class="product-card reveal">
                    <div class="product-image">
                        <img src="images/product_brief_wine.png" alt="Ví Card Monogram Neo" class="img-primary">
                    </div>
                    <div class="product-info">
                        <h3 class="product-name" style="font-size: 1.1rem; margin-bottom: 5px;">Ví Card Monogram Neo</h3>
                        <div class="product-price">
                            <span class="price-current">350.000₫</span>
                        </div>
                    </div>
                </div>
                <div class="product-card reveal">
                    <div class="product-badges"><span class="badge badge-hot">Hot</span></div>
                    <div class="product-image">
                        <img src="images/product_trunk_green.png" alt="Ví Mini Mercury" class="img-primary">
                    </div>
                    <div class="product-info">
                        <h3 class="product-name" style="font-size: 1.1rem; margin-bottom: 5px;">Ví Mini Mercury</h3>
                        <div class="product-price">
                            <span class="price-current">600.000₫</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>'''
vida = vida.replace(cat_old, cat_new)

prod_old = re.search(r'<section class="products" id="products">.*?</section>', vida, re.DOTALL).group(0)
prod_new = '''<!-- Collection Hot Section -->
    <section class="products" id="collection-hot" style="padding-top: 60px; padding-bottom: 80px;">
        <div class="container">
            <div class="section-header" style="text-align: left;">
                <h2 class="section-title" style="font-size: 2rem;">COLLECTION HOT</h2>
                <div style="width: 60px; height: 3px; background: #000; margin-top: 10px;"></div>
            </div>
            
            <div style="margin-top: 30px; display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: center; margin-bottom: 40px;">
                <div>
                    <h3 style="font-size: 1.5rem; margin-bottom: 15px;">ALVIN COLLECTION</h3>
                    <p style="color: #555; line-height: 1.6;">Sự cuốn hút còn thể hiện qua sắc đen huyền bí, là biểu tượng của thời trang tối giản và hiện đại, không phai mờ cùng thời gian.</p>
                </div>
                <div>
                    <h3 style="font-size: 1.5rem; margin-bottom: 15px;">FRANKIE COLLECTION</h3>
                    <p style="color: #555; line-height: 1.6;">Sản phẩm được làm từ da Microfiber cao cấp nên có độ bền cao, các chi tiết sọc phối màu giúp túi đeo chéo thể hiện điểm nhấn đặc biệt và có thể phối với đa dạng outfit đời thường.</p>
                </div>
            </div>

            <div class="product-grid">
                <div class="product-card reveal">
                    <div class="product-image">
                        <img src="images/product_trunk_navy.png" alt="Ví Bifold Monogram Carlos" class="img-primary">
                    </div>
                    <div class="product-info">
                        <h3 class="product-name" style="font-size: 1.1rem; margin-bottom: 5px;">Ví Bifold Monogram Carlos</h3>
                        <div class="product-price">
                            <span class="price-current">490.000₫</span>
                        </div>
                    </div>
                </div>
                <div class="product-card reveal">
                    <div class="product-image">
                        <img src="images/product_boxer_gray.png" alt="Ví Henry Đứng" class="img-primary">
                    </div>
                    <div class="product-info">
                        <h3 class="product-name" style="font-size: 1.1rem; margin-bottom: 5px;">Ví Henry Đứng</h3>
                        <div class="product-price">
                            <span class="price-current">580.000₫</span>
                        </div>
                    </div>
                </div>
                <div class="product-card reveal">
                    <div class="product-image">
                        <img src="images/product_brief_wine.png" alt="Ví Da Đeo Chéo Trey Leonardo" class="img-primary">
                    </div>
                    <div class="product-info">
                        <h3 class="product-name" style="font-size: 1.1rem; margin-bottom: 5px;">Ví Da Đeo Chéo Trey Leonardo</h3>
                        <div class="product-price">
                            <span class="price-current">850.000₫</span>
                        </div>
                    </div>
                </div>
                <div class="product-card reveal">
                    <div class="product-image">
                        <img src="images/product_brief_black.png" alt="Ví Da Hayden RFID" class="img-primary">
                    </div>
                    <div class="product-info">
                        <h3 class="product-name" style="font-size: 1.1rem; margin-bottom: 5px;">Ví Da Hayden RFID</h3>
                        <div class="product-price">
                            <span class="price-current">620.000₫</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>'''
vida = vida.replace(prod_old, prod_new)

with open('vi-da.html', 'w', encoding='utf-8') as f:
    f.write(vida)

print("Done updating vi-da.html and navigation")
