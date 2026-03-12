import sys

with open('vi-da.html', 'r', encoding='utf-8') as f:
    content = f.read()
    
# We will just replace all product cards in vi-da.html to match the formatting required by script.js
# Specially: adding <div class="quick-add"> with <button class="size-btn" data-size="Free">Thêm vào giỏ</button>
# And wrapping <h3 class="product-name"> in <a href="#" class="product-name-link">
# And the product colors.

products = [
    {
        'id': 'v1',
        'title': 'Ví Card Mini Monogram Neo',
        'price': '450.000₫',
        'img1': 'images/product_boxer_gray.png',
        'img2': 'images/product_trunk_navy.png',
        'colorName': 'Xám',
        'colorHex': '#555555'
    },
    {
        'id': 'v2',
        'title': 'Ví Mini Monogram Neo RFID',
        'price': '550.000₫',
        'img1': 'images/product_trunk_navy.png',
        'img2': 'images/product_boxer_gray.png',
        'colorName': 'Xanh đậm',
        'colorHex': '#1e3a5f'
    },
    {
        'id': 'v3',
        'title': 'Ví Card Monogram Neo',
        'price': '350.000₫',
        'img1': 'images/product_brief_wine.png',
        'img2': 'images/product_brief_black.png',
        'colorName': 'Đỏ đô',
        'colorHex': '#8b0000'
    },
    {
        'id': 'v4',
        'title': 'Ví Khắc Tên Mercury',
        'price': '600.000₫',
        'img1': 'images/product_trunk_green.png',
        'img2': 'images/product_trunk_navy.png',
        'colorName': 'Xanh lá',
        'colorHex': '#006400',
        'badge': 'Hot'
    },
    {
        'id': 'v5',
        'title': 'Ví Bifold Monogram Carlos',
        'price': '490.000₫',
        'img1': 'images/product_trunk_navy.png',
        'img2': 'images/product_boxer_gray.png',
        'colorName': 'Xanh đậm',
        'colorHex': '#1e3a5f'
    },
    {
        'id': 'v6',
        'title': 'Ví Henry Đứng Cao Cấp',
        'price': '580.000₫',
        'img1': 'images/product_boxer_gray.png',
        'img2': 'images/product_trunk_navy.png',
        'colorName': 'Xám',
        'colorHex': '#555555'
    },
    {
        'id': 'v7',
        'title': 'Ví Da Đeo Chéo Trey',
        'price': '850.000₫',
        'img1': 'images/product_brief_wine.png',
        'img2': 'images/product_brief_black.png',
        'colorName': 'Đỏ đô',
        'colorHex': '#8b0000'
    },
    {
        'id': 'v8',
        'title': 'Ví Da Hayden RFID',
        'price': '620.000₫',
        'img1': 'images/product_brief_black.png',
        'img2': 'images/product_brief_wine.png',
        'colorName': 'Đen',
        'colorHex': '#1a1a1a'
    }
]

def render_product(p):
    badge_html = f'<div class="product-badges"><span class="badge badge-hot">{p["badge"]}</span></div>' if 'badge' in p else ''
    return f'''                <div class="product-card reveal" id="product-{p['id']}">
                    {badge_html}
                    <div class="product-image">
                        <img src="{p['img1']}" alt="{p['title']}" class="img-primary">
                        <img src="{p['img2']}" alt="{p['title']} - Hover" class="img-hover">
                        <div class="quick-add" id="quick-add-{p['id']}">
                            <div class="size-options" style="gap:0">
                                <button class="size-btn" data-size="Free" style="width:100%; height:40px; border-radius:4px">Thêm vào giỏ</button>
                            </div>
                        </div>
                    </div>
                    <div class="product-info">
                        <div class="product-colors" style="margin-bottom: 8px;">
                            <button class="color-swatch active" style="background:{p['colorHex']}" title="{p['colorName']}" data-color="{p['colorName']}"></button>
                        </div>
                        <a href="#" class="product-name-link">
                            <h3 class="product-name" style="font-size: 1.1rem; margin-bottom: 5px;">{p['title']}</h3>
                        </a>
                        <p class="product-material" style="font-size: 13px; color: #777; margin-bottom: 8px;">Chất liệu: Da Bò & Microfiber</p>
                        <div class="product-price">
                            <span class="price-current">{p['price']}</span>
                        </div>
                    </div>
                </div>'''

# We need to replace the two <div class="product-grid"> blocks in vi-da.html
import re

grids = re.findall(r'<div class="product-grid".*?>.*?</div>\s*</div>\s*</section>', content, re.DOTALL)
if len(grids) == 2:
    grid1 = '<div class="product-grid" style="margin-top: 30px;">\n' + '\n'.join([render_product(p) for p in products[0:4]]) + '\n            </div>\n        </div>\n    </section>'
    content = content.replace(grids[0], grid1)
    
    grid2 = '<div class="product-grid">\n' + '\n'.join([render_product(p) for p in products[4:8]]) + '\n            </div>\n        </div>\n    </section>'
    content = content.replace(grids[1], grid2)
    
    with open('vi-da.html', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Rewrote product cards in vi-da.html successfully.")
else:
    print(f"Failed to find right grids, found {len(grids)}")
