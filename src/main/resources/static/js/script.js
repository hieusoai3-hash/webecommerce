/* ============================================================
   COMFY - Premium Underwear E-Commerce
   JavaScript Interactivity
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
    // ===== DOM Elements =====
    const header = document.getElementById('header');
    const announcementBar = document.getElementById('announcement-bar');
    const announcementClose = document.getElementById('announcement-close');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mainNav = document.getElementById('main-nav');
    const searchToggle = document.getElementById('search-toggle');
    const searchBar = document.getElementById('search-bar');
    const searchInput = document.getElementById('search-input');
    const searchDropdown = document.getElementById('search-dropdown');
    const cartBtn = document.getElementById('cart-btn');
    const cartOverlay = document.getElementById('cart-overlay');
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartClose = document.getElementById('cart-close');
    const cartCount = document.getElementById('cart-count');
    const cartSidebarCount = document.getElementById('cart-sidebar-count');
    const cartBody = document.getElementById('cart-body');
    const cartFooter = document.getElementById('cart-footer');
    const cartTotalPrice = document.getElementById('cart-total-price');
    const cartShopNow = document.getElementById('cart-shop-now');
    const backToTop = document.getElementById('back-to-top');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');
    const sizeBtns = document.querySelectorAll('.size-btn');
    const colorSwatches = document.querySelectorAll('.color-swatch');

    // ===== Cart State =====
    let cart = [];
    try { cart = JSON.parse(localStorage.getItem('nb2_cart') || '[]'); } catch (e) { cart = []; }

    // ===== Announcement Bar =====
    if (announcementClose) {
        announcementClose.addEventListener('click', () => {
            announcementBar.classList.add('hidden');
        });
    }

    // ===== Sticky Header =====
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        // Header shadow
        if (scrollY > 10) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Back to top visibility
        if (backToTop) {
            if (scrollY > 500) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        }
    });

    // ===== Back to Top =====
    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ===== Mobile Menu =====
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            mainNav.classList.toggle('active');
            document.body.style.overflow = mainNav.classList.contains('active') ? 'hidden' : '';
        });
    }

    // Close button inside mobile nav
    const navCloseBtn = document.getElementById('nav-close-btn');
    if (navCloseBtn) {
        navCloseBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            mainNav.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    // Close mobile menu on nav link click
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (mainNav.classList.contains('active')) {
                mobileMenuBtn.classList.remove('active');
                mainNav.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });

    // ===== Footer dead links → friendly toast =====
    document.querySelectorAll('a[href="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            showToast('Tính năng này đang được cập nhật!');
        });
    });

    // ===== Search Autocomplete =====
    let _suggestTimer = null;
    let _highlightIdx = -1;

    function closeDropdown() {
        if (searchDropdown) {
            searchDropdown.innerHTML = '';
            searchDropdown.classList.remove('open');
        }
        _highlightIdx = -1;
    }

    function highlightItem(idx) {
        if (!searchDropdown) return;
        const items = searchDropdown.querySelectorAll('.sd-item');
        items.forEach((el, i) => el.classList.toggle('sd-highlighted', i === idx));
        _highlightIdx = idx;
    }

    function renderDropdown(q, data) {
        if (!searchDropdown) return;
        const { products = [], categories = [], total = 0 } = data;
        if (!products.length && !categories.length) { closeDropdown(); return; }

        const escapeRe = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        let html = '';

        if (categories.length) {
            html += '<div class="sd-section-label">Danh mục</div>';
            categories.forEach(cat => {
                html += `<a href="/${cat.slug}" class="sd-item">
                    <span class="sd-cat-icon">📂</span>
                    <span class="sd-cat-label">${cat.label}</span>
                    <span class="sd-cat-count">${cat.count} sản phẩm</span>
                </a>`;
            });
        }

        if (products.length) {
            html += '<div class="sd-section-label">Sản phẩm</div>';
            products.forEach(p => {
                const imgHtml = p.imageUrl
                    ? `<img src="/${p.imageUrl}" alt="" onerror="this.style.display='none'">`
                    : `<span class="sd-img-placeholder">?</span>`;
                const highlighted = p.name.replace(
                    new RegExp('(' + escapeRe(q) + ')', 'gi'),
                    '<mark>$1</mark>'
                );
                const disc = p.discount > 0
                    ? `<span class="sd-disc">-${p.discount}%</span>` : '';
                html += `<a href="/product-detail?id=${p.id}" class="sd-item">
                    <div class="sd-img">${imgHtml}</div>
                    <div class="sd-info">
                        <div class="sd-name">${highlighted}</div>
                        <div class="sd-price">${p.price}${disc}</div>
                    </div>
                </a>`;
            });
        }

        if (total > products.length) {
            html += `<a href="/search?q=${encodeURIComponent(q)}" class="sd-view-all">
                Xem tất cả ${total} kết quả →
            </a>`;
        }

        searchDropdown.innerHTML = html;
        searchDropdown.classList.add('open');
        _highlightIdx = -1;
    }

    async function fetchSuggestions(q) {
        try {
            const res = await fetch('/api/suggest?q=' + encodeURIComponent(q));
            const data = await res.json();
            renderDropdown(q, data);
        } catch (_) { closeDropdown(); }
    }

    if (searchToggle) {
        searchToggle.addEventListener('click', () => {
            searchBar.classList.toggle('expanded');
            if (searchBar.classList.contains('expanded')) {
                searchInput.focus();
            } else {
                closeDropdown();
            }
        });
    }

    if (searchInput) {
        searchInput.addEventListener('input', () => {
            clearTimeout(_suggestTimer);
            const q = searchInput.value.trim();
            if (q.length < 2) { closeDropdown(); return; }
            _suggestTimer = setTimeout(() => fetchSuggestions(q), 280);
        });

        searchInput.addEventListener('keydown', (e) => {
            if (!searchDropdown) return;
            const items = searchDropdown.querySelectorAll('.sd-item');
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                highlightItem(Math.min(_highlightIdx + 1, items.length - 1));
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                highlightItem(Math.max(_highlightIdx - 1, 0));
            } else if (e.key === 'Enter') {
                if (_highlightIdx >= 0 && items[_highlightIdx]) {
                    items[_highlightIdx].click();
                } else {
                    const q = searchInput.value.trim();
                    if (q) window.location.href = '/search?q=' + encodeURIComponent(q);
                }
            } else if (e.key === 'Escape') {
                closeDropdown();
                searchBar.classList.remove('expanded');
            }
        });
    }

    // Close on outside click
    document.addEventListener('click', (e) => {
        if (searchBar && !searchBar.contains(e.target)) {
            searchBar.classList.remove('expanded');
            closeDropdown();
        }
    });

    // ===== Cart Sidebar =====
    function openCart() {
        cartSidebar.classList.add('active');
        cartOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeCart() {
        cartSidebar.classList.remove('active');
        cartOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (cartBtn) cartBtn.addEventListener('click', openCart);
    if (cartClose) cartClose.addEventListener('click', closeCart);
    if (cartOverlay) cartOverlay.addEventListener('click', closeCart);
    if (cartShopNow) {
        cartShopNow.addEventListener('click', (e) => {
            e.preventDefault();
            closeCart();
            document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // ===== Add to Cart =====
    function addToCart(productCard, size, silent = false) {
        const name = productCard.querySelector('.product-name').textContent;
        const priceText = productCard.querySelector('.price-current').textContent;
        const price = parseInt(priceText.replace(/[^\d]/g, ''));
        const image = productCard.querySelector('.img-primary').src;
        const activeColor = productCard.querySelector('.color-swatch.active');
        const color = activeColor ? activeColor.getAttribute('data-color') : 'Mặc định';
        const productId = productCard.dataset.productId || '';

        // Store available options for in-cart editing
        const sizes = Array.from(productCard.querySelectorAll('.size-btn')).map(b => b.dataset.size);
        const colors = Array.from(productCard.querySelectorAll('.color-swatch')).map(b => ({
            name: b.dataset.color, hex: b.style.background, img: b.dataset.img || ''
        }));

        const existingItem = cart.find(item => item.name === name && item.size === size && item.color === color);

        if (existingItem) {
            existingItem.qty += 1;
        } else {
            cart.push({ productId, name, price, image, size, color, qty: 1, sizes, colors });
        }

        updateCartUI();

        if (!silent) {
            openCart();
            cartCount.classList.add('bump');
            setTimeout(() => cartCount.classList.remove('bump'), 400);
        }
    }

    function removeFromCart(index) {
        cart.splice(index, 1);
        updateCartUI();
    }

    function changeQty(index, delta) {
        cart[index].qty = Math.max(1, cart[index].qty + delta);
        updateCartUI();
    }

    function toggleCartEdit(index) {
        const panel = document.getElementById(`cart-edit-${index}`);
        if (!panel) return;
        const isOpen = panel.classList.contains('open');
        document.querySelectorAll('.cart-edit-panel').forEach(p => p.classList.remove('open'));
        document.querySelectorAll('.cart-item-edit').forEach(b => b.classList.remove('active'));
        if (!isOpen) {
            panel.classList.add('open');
            document.querySelector(`.cart-item-edit[data-index="${index}"]`).classList.add('active');
        }
    }

    function setCartItemSize(index, size) {
        // Merge with existing item of same name+color+newSize if any
        const item = cart[index];
        const existing = cart.find((it, i) => i !== index && it.name === item.name && it.color === item.color && it.size === size);
        if (existing) {
            existing.qty += item.qty;
            cart.splice(index, 1);
        } else {
            item.size = size;
        }
        updateCartUI();
    }

    function setCartItemColor(index, colorName, img) {
        const item = cart[index];
        const existing = cart.find((it, i) => i !== index && it.name === item.name && it.size === item.size && it.color === colorName);
        if (existing) {
            existing.qty += item.qty;
            cart.splice(index, 1);
        } else {
            item.color = colorName;
            if (img) item.image = img;
        }
        updateCartUI();
    }

    function updateCartUI() {
        try { localStorage.setItem('nb2_cart', JSON.stringify(cart)); } catch (e) {}
        const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
        const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

        cartCount.textContent = totalItems;
        cartSidebarCount.textContent = totalItems;

        if (cart.length === 0) {
            cartBody.innerHTML = `
                <div class="cart-empty">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
                        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <path d="M16 10a4 4 0 0 1-8 0"></path>
                    </svg>
                    <p>Giỏ hàng của bạn đang trống</p>
                    <a href="#products" class="btn btn-primary" onclick="document.getElementById('cart-sidebar').classList.remove('active');document.getElementById('cart-overlay').classList.remove('active');document.body.style.overflow=''">Mua sắm ngay</a>
                </div>`;
            cartFooter.style.display = 'none';
        } else {
            cartBody.innerHTML = cart.map((item, idx) => {
                const sizesHtml = (item.sizes || []).map(s =>
                    `<button class="cart-edit-size-btn${s === item.size ? ' active' : ''}" data-action="set-size" data-index="${idx}" data-size="${s}">${s}</button>`
                ).join('');
                const colorsHtml = (item.colors || []).map(c =>
                    `<button class="cart-edit-color-btn${c.name === item.color ? ' active' : ''}" data-action="set-color" data-index="${idx}" data-color="${c.name}" data-img="${c.img}" style="background:${c.hex}" title="${c.name}"></button>`
                ).join('');
                const hasOptions = sizesHtml || colorsHtml;
                return `
                <div class="cart-item">
                    <div class="cart-item-img">
                        <img src="${item.image}" alt="${item.name}">
                    </div>
                    <div class="cart-item-info">
                        <div class="cart-item-top">
                            <div class="cart-item-name">${item.name}</div>
                            <div class="cart-item-top-btns">
                                ${hasOptions ? `<button class="cart-item-edit" data-action="toggle-edit" data-index="${idx}" title="Chỉnh sửa">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                                </button>` : ''}
                                <button class="cart-item-remove" data-action="remove" data-index="${idx}" aria-label="Xóa">✕</button>
                            </div>
                        </div>
                        <div class="cart-item-variant">${item.color} | Size ${item.size}</div>
                        <div class="cart-item-bottom">
                            <div class="cart-item-price">${item.price.toLocaleString('vi-VN')}₫</div>
                            <div class="qty-control">
                                <button class="qty-btn" data-action="qty-dec" data-index="${idx}">−</button>
                                <span class="qty-val">${item.qty}</span>
                                <button class="qty-btn" data-action="qty-inc" data-index="${idx}">+</button>
                            </div>
                        </div>
                        ${hasOptions ? `
                        <div class="cart-edit-panel" id="cart-edit-${idx}">
                            ${sizesHtml ? `<div class="cart-edit-label">SIZE:</div><div class="cart-edit-sizes">${sizesHtml}</div>` : ''}
                            ${colorsHtml ? `<div class="cart-edit-label">MÀU:</div><div class="cart-edit-colors">${colorsHtml}</div>` : ''}
                            <button class="cart-edit-confirm-btn" data-action="confirm-edit" data-index="${idx}">Xác nhận</button>
                        </div>` : ''}
                    </div>
                </div>`;
            }).join('');
            cartFooter.style.display = 'block';
            cartTotalPrice.textContent = totalPrice.toLocaleString('vi-VN') + '₫';
        }
    }

    // Cart body event delegation — handles qty, edit, remove, set-size, set-color
    cartBody.addEventListener('click', e => {
        const btn = e.target.closest('[data-action]');
        if (!btn) return;
        const idx = parseInt(btn.dataset.index);
        switch (btn.dataset.action) {
            case 'remove':      removeFromCart(idx); break;
            case 'qty-dec':     changeQty(idx, -1); break;
            case 'qty-inc':     changeQty(idx, 1); break;
            case 'toggle-edit': toggleCartEdit(idx); break;
            case 'set-size':    setCartItemSize(idx, btn.dataset.size); break;
            case 'set-color':   setCartItemColor(idx, btn.dataset.color, btn.dataset.img); break;
            case 'confirm-edit': toggleCartEdit(idx); break;
        }
    });

    // Size button clicks
    sizeBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const productCard = btn.closest('.product-card');
            const size = btn.dataset.size;
            addToCart(productCard, size);
        });
    });

    // ===== Color Swatches =====
    colorSwatches.forEach(swatch => {
        swatch.addEventListener('click', (e) => {
            e.stopPropagation();
            const card = swatch.closest('.product-card');
            card.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('active'));
            swatch.classList.add('active');
        });
    });

    // ===== Product Filters (.filter-btn on homepage, .category-pill on san-pham) =====
    const allFilterBtns = document.querySelectorAll('.filter-btn, .category-pill');
    allFilterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            allFilterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.dataset.filter;

            // Show/hide product cards
            productCards.forEach(card => {
                if (filterValue === 'all' || card.dataset.category === filterValue) {
                    card.style.display = '';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => { card.style.display = 'none'; }, 300);
                }
            });

            // Show/hide section dividers + their sibling grids (san-pham page)
            document.querySelectorAll('.section-divider').forEach(divider => {
                const category = (divider.id || '').replace('section-', '');
                const visible = filterValue === 'all' || category === filterValue;
                divider.style.display = visible ? '' : 'none';
                const grid = divider.nextElementSibling;
                if (grid) grid.style.display = visible ? '' : 'none';
            });
        });
    });

    // ===== Toast Notification =====
    function showToast(message) {
        // Remove existing toast
        const existing = document.querySelector('.toast');
        if (existing) existing.remove();

        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerHTML = `<span class="toast-icon">✓</span> ${message}`;
        document.body.appendChild(toast);

        requestAnimationFrame(() => {
            toast.classList.add('show');
        });

        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 500);
        }, 2500);
    }

    // ===== Scroll Reveal Animation =====
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // ===== Checkout Button =====
    const checkoutBtn = document.getElementById('checkout-btn');
    const checkoutOverlay = document.getElementById('checkout-overlay');
    const checkoutModal = document.getElementById('checkout-modal');
    const checkoutCloseBtn = document.getElementById('checkout-close');
    const checkoutBackBtn = document.getElementById('checkout-back');
    const checkoutContent = document.getElementById('checkout-content');
    const checkoutSuccess = document.getElementById('checkout-success');
    const placeOrderBtn = document.getElementById('place-order-btn');
    const successContinueBtn = document.getElementById('success-continue-btn');

    const SHIPPING_FEE = 30000;
    const FREE_SHIP_THRESHOLD = 299000;


    function initAddressForm() {
        const citySelect = document.getElementById('checkout-city');
        const districtSelect = document.getElementById('checkout-district');
        const oldProvCheckbox = document.getElementById('use-old-provinces');
        if (!citySelect || !districtSelect || !oldProvCheckbox) return;

        function populateCities() {
            const data = oldProvCheckbox.checked ? PROVINCES_OLD : PROVINCES_NEW;
            citySelect.innerHTML = '<option value="">Chọn tỉnh/thành phố</option>';
            Object.keys(data).sort((a, b) => a.localeCompare(b, 'vi')).forEach(prov => {
                const opt = document.createElement('option');
                opt.value = prov;
                opt.textContent = prov;
                citySelect.appendChild(opt);
            });
            districtSelect.innerHTML = '<option value="">Chọn quận/huyện</option>';
            districtSelect.disabled = true;
        }

        function populateDistricts(prov) {
            const data = oldProvCheckbox.checked ? PROVINCES_OLD : PROVINCES_NEW;
            districtSelect.innerHTML = '<option value="">Chọn quận/huyện</option>';
            if (prov && data[prov]) {
                data[prov].forEach(d => {
                    const opt = document.createElement('option');
                    opt.value = d;
                    opt.textContent = d;
                    districtSelect.appendChild(opt);
                });
                districtSelect.disabled = false;
            } else {
                districtSelect.disabled = true;
            }
        }

        citySelect.addEventListener('change', () => populateDistricts(citySelect.value));
        oldProvCheckbox.addEventListener('change', () => {
            citySelect.value = '';
            populateCities();
        });

        populateCities();
    }

    initAddressForm();

    function openCheckout() {
        if (cart.length === 0) {
            showToast('Giỏ hàng của bạn đang trống!');
            return;
        }
        closeCart();
        setTimeout(() => {
            populateCheckoutSummary();
            checkoutContent.style.display = '';
            checkoutSuccess.style.display = 'none';
            checkoutOverlay.classList.add('active');
            checkoutModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }, 300);
    }

    function closeCheckout() {
        checkoutModal.classList.remove('active');
        checkoutOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    function populateCheckoutSummary() {
        const summaryItems = document.getElementById('summary-items');
        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
        const isFreeShip = subtotal >= FREE_SHIP_THRESHOLD;
        const total = isFreeShip ? subtotal : subtotal + SHIPPING_FEE;

        summaryItems.innerHTML = cart.map(item => `
            <div class="summary-item">
                <div class="summary-item-img">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="summary-item-info">
                    <div class="summary-item-name">${item.name}</div>
                    <div class="summary-item-variant">${item.color} | Size ${item.size} | SL: ${item.qty}</div>
                </div>
                <div class="summary-item-price">${(item.price * item.qty).toLocaleString('vi-VN')}₫</div>
            </div>
        `).join('');

        document.getElementById('summary-subtotal').textContent = subtotal.toLocaleString('vi-VN') + '₫';

        const shippingEl = document.getElementById('summary-shipping');
        const discountRow = document.getElementById('summary-discount-row');
        const freeShipNotice = document.getElementById('free-ship-notice');

        if (isFreeShip) {
            shippingEl.textContent = '30.000₫';
            shippingEl.style.textDecoration = 'line-through';
            discountRow.style.display = 'flex';
            freeShipNotice.classList.add('show');
        } else {
            shippingEl.textContent = '30.000₫';
            shippingEl.style.textDecoration = 'none';
            discountRow.style.display = 'none';
            freeShipNotice.classList.remove('show');
        }

        const couponDisc = (typeof appliedCoupon !== 'undefined') ? appliedCoupon.discount : 0;
        const finalTotal = Math.max(0, total - couponDisc);
        document.getElementById('summary-total').textContent = finalTotal.toLocaleString('vi-VN') + '₫';
    }

    // Checkout button click
    if (checkoutBtn) checkoutBtn.addEventListener('click', openCheckout);
    if (checkoutCloseBtn) checkoutCloseBtn.addEventListener('click', closeCheckout);
    if (checkoutOverlay) checkoutOverlay.addEventListener('click', closeCheckout);
    if (checkoutBackBtn) {
        checkoutBackBtn.addEventListener('click', () => {
            closeCheckout();
            setTimeout(openCart, 300);
        });
    }

    // Payment method selection
    const paymentOptions = document.querySelectorAll('.payment-option');
    paymentOptions.forEach(option => {
        option.addEventListener('click', () => {
            paymentOptions.forEach(o => o.classList.remove('active'));
            option.classList.add('active');
            option.querySelector('input[type="radio"]').checked = true;
        });
    });

    // Form validation
    function validateCheckoutForm() {
        let isValid = true;
        const fields = [
            { id: 'checkout-name', error: 'error-name', msg: 'Vui lòng nhập họ tên' },
            { id: 'checkout-phone', error: 'error-phone', msg: 'Vui lòng nhập số điện thoại', regex: /^(0[3|5|7|8|9])+([0-9]{8})$/ },
            { id: 'checkout-address', error: 'error-address', msg: 'Vui lòng nhập địa chỉ' },
            { id: 'checkout-city', error: 'error-city', msg: 'Vui lòng chọn tỉnh/thành phố' },
            { id: 'checkout-district', error: 'error-district', msg: 'Vui lòng chọn quận/huyện' },
        ];

        // Clear previous errors
        document.querySelectorAll('.form-field input, .form-field select').forEach(el => {
            el.classList.remove('error');
        });
        document.querySelectorAll('.field-error').forEach(el => {
            el.textContent = '';
        });

        fields.forEach(field => {
            const input = document.getElementById(field.id);
            const errorEl = document.getElementById(field.error);
            const value = input.value.trim();

            if (!value) {
                input.classList.add('error');
                errorEl.textContent = field.msg;
                isValid = false;
            } else if (field.regex && !field.regex.test(value)) {
                input.classList.add('error');
                errorEl.textContent = 'Số điện thoại không hợp lệ (VD: 0912345678)';
                isValid = false;
            }
        });

        // Validate email if provided
        const emailInput = document.getElementById('checkout-email');
        const emailError = document.getElementById('error-email');
        if (emailInput.value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim())) {
            emailInput.classList.add('error');
            emailError.textContent = 'Email không hợp lệ';
            isValid = false;
        }

        if (!isValid) {
            const firstError = document.querySelector('.form-field input.error, .form-field select.error');
            if (firstError) {
                firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                firstError.focus();
            }
        }

        return isValid;
    }

    // ── Coupon logic ────────────────────────────────────────────────────────
    let appliedCoupon = { code: null, discount: 0 };

    window.applyCoupon = async function() {
        const code = document.getElementById('coupon-input').value.trim();
        const msg  = document.getElementById('coupon-msg');
        if (!code) { msg.textContent = ''; return; }

        const subtotal = cart.reduce((sum, i) => sum + (i.price * i.qty), 0);
        msg.style.color = '#6b7280';
        msg.textContent = 'Đang kiểm tra...';

        const res = await fetch('/api/coupon/validate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ code, subtotal })
        });
        const data = await res.json();

        if (data.valid) {
            appliedCoupon = { code, discount: data.discount };
            msg.style.color = '#10b981';
            msg.textContent = '✓ ' + data.message;
            document.getElementById('coupon-discount-row').style.display = '';
            document.getElementById('coupon-discount-display').textContent =
                '-' + data.discount.toLocaleString('vi-VN') + '₫';
            populateCheckoutSummary();
        } else {
            appliedCoupon = { code: null, discount: 0 };
            msg.style.color = '#ef4444';
            msg.textContent = '✗ ' + data.message;
            document.getElementById('coupon-discount-row').style.display = 'none';
            populateCheckoutSummary();
        }
    };

    // Place order
    if (placeOrderBtn) {
        placeOrderBtn.addEventListener('click', async () => {
            if (!validateCheckoutForm()) return;

            const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
            const isFreeShip = subtotal >= FREE_SHIP_THRESHOLD;
            const shipping = isFreeShip ? 0 : SHIPPING_FEE;
            const total = subtotal + shipping - appliedCoupon.discount;

            const paymentMethodNames = {
                'cod': 'Thanh toán khi nhận hàng (COD)',
                'momo': 'Ví MoMo',
                'card': 'Thẻ VISA / Mastercard',
                'bank': 'Chuyển khoản ngân hàng'
            };
            const selectedPayment = document.querySelector('input[name="payment"]:checked').value;

            const address = [
                document.getElementById('checkout-address').value.trim(),
                document.getElementById('checkout-district').value.trim(),
                document.getElementById('checkout-city').value.trim()
            ].filter(Boolean).join(', ');

            const orderPayload = {
                customerName:    document.getElementById('checkout-name').value.trim(),
                customerPhone:   document.getElementById('checkout-phone').value.trim(),
                customerAddress: address,
                customerNote:    (document.getElementById('checkout-note') || {value:''}).value.trim(),
                paymentMethod:   selectedPayment,
                total:           Math.max(0, total),
                couponCode:      appliedCoupon.code,
                couponDiscount:  appliedCoupon.discount,
                items: cart.map(item => ({
                    productId:   item.productId || '',
                    productName: item.name,
                    size:        item.size,
                    quantity:    item.qty,
                    price:       item.price
                }))
            };

            // Disable button while submitting
            placeOrderBtn.disabled = true;
            placeOrderBtn.textContent = 'Đang xử lý...';

            try {
                const res = await fetch('/api/orders', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(orderPayload)
                });

                if (!res.ok) throw new Error('Server error ' + res.status);
                const savedOrder = await res.json();

                // Show success with real order ID from server
                document.getElementById('success-order-id').textContent = savedOrder.id;
                const trackLink = document.getElementById('track-order-link');
                if (trackLink) trackLink.href = '/tra-don-hang?id=' + encodeURIComponent(savedOrder.id);
                document.getElementById('success-payment-method').textContent = paymentMethodNames[selectedPayment] || 'COD';
                document.getElementById('success-total').textContent = total.toLocaleString('vi-VN') + '₫';

                checkoutContent.style.display = 'none';
                checkoutSuccess.style.display = 'block';
                checkoutModal.scrollTop = 0;

                // Clear cart & reset form
                cart = [];
                try { localStorage.removeItem('nb2_cart'); } catch (e) {}
                appliedCoupon = { code: null, discount: 0 };
                const cinput = document.getElementById('coupon-input');
                if (cinput) { cinput.value = ''; document.getElementById('coupon-msg').textContent = ''; }
                document.getElementById('coupon-discount-row').style.display = 'none';
                updateCartUI();
                document.getElementById('checkout-form').reset();
                paymentOptions.forEach(o => o.classList.remove('active'));
                document.querySelector('.payment-option[data-method="cod"]').classList.add('active');

            } catch (err) {
                showToast('Đặt hàng thất bại, vui lòng thử lại!');
            } finally {
                placeOrderBtn.disabled = false;
                placeOrderBtn.textContent = 'Đặt hàng ngay';
            }
        });
    }

    // Success continue button
    if (successContinueBtn) {
        successContinueBtn.addEventListener('click', () => {
            closeCheckout();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ===== Smooth scroll for anchor links =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetEl = document.querySelector(targetId);
            if (targetEl) {
                e.preventDefault();
                const offset = 80;
                const targetPosition = targetEl.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
            }
        });
    });

    // ===== Parallax Effect on Hero =====
    const heroBg = document.querySelector('.hero-bg img');
    if (heroBg) {
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            if (scrollY < 900) {
                heroBg.style.transform = `scale(1.1) translateY(${scrollY * 0.15}px)`;
            }
        });
    }

    // ===== Size Guide Drawer =====
    const sizeGuideDrawer = document.getElementById('size-guide-drawer');
    const sizeGuideOverlay = document.getElementById('size-guide-overlay');
    const sizeGuideCloseBtn = document.getElementById('size-guide-close');

    function openSizeGuide(e) {
        if (e) e.preventDefault();
        sizeGuideDrawer.classList.add('active');
        sizeGuideOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeSizeGuide() {
        sizeGuideDrawer.classList.remove('active');
        sizeGuideOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (sizeGuideCloseBtn) sizeGuideCloseBtn.addEventListener('click', closeSizeGuide);
    if (sizeGuideOverlay) sizeGuideOverlay.addEventListener('click', closeSizeGuide);
    window.openSizeGuide = openSizeGuide;

    // Drawer "Đặt hàng ngay" button — add combo+size to cart then open checkout
    const drawerOrderBtn = document.getElementById('drawer-order-btn');
    if (drawerOrderBtn) {
        drawerOrderBtn.addEventListener('click', () => {
            const comboInput = document.querySelector('input[name="order_combo"]:checked');
            const sizeInput  = document.querySelector('input[name="order_size"]:checked');
            if (!comboInput) { showToast('Vui lòng chọn combo!'); return; }
            if (!sizeInput)  { showToast('Vui lòng chọn size!'); return; }

            const chosen = {
                name: comboInput.dataset.name || comboInput.value,
                price: parseInt(comboInput.dataset.price || '0', 10)
            };
            const existing = cart.find(i => i.name === chosen.name && i.size === sizeInput.value);
            if (existing) { existing.qty += 1; }
            else { cart.push({ productId: '', name: chosen.name, price: chosen.price, image: '', size: sizeInput.value, color: '', qty: 1 }); }
            updateCartUI();
            closeSizeGuide();
            setTimeout(openCheckout, 200);
        });
    }

    // ===== Product Detail Page =====
    const pdMainImg = document.getElementById('pd-main-img');
    const pdColorBtns = document.querySelectorAll('#pd-colors .pd-color-btn');
    const pdSizeBtns = document.querySelectorAll('#pd-sizes .pd-size-btn');
    const pdAddCartBtn = document.getElementById('pd-add-cart');
    const pdBuyNowBtn = document.getElementById('pd-buy-now');

    // Color swatch → update main image
    pdColorBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            pdColorBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            if (pdMainImg && btn.dataset.img) {
                pdMainImg.src = btn.dataset.img;
            }
            // Sync thumbnail highlight
            document.querySelectorAll('#pd-thumbs .pd-thumb').forEach(thumb => {
                thumb.classList.toggle('active', thumb.dataset.img === btn.dataset.img);
            });
        });
    });

    // Thumbnail click → update main image
    document.querySelectorAll('#pd-thumbs .pd-thumb').forEach(thumb => {
        thumb.addEventListener('click', () => {
            if (pdMainImg && thumb.dataset.img) {
                pdMainImg.src = thumb.dataset.img;
            }
            document.querySelectorAll('#pd-thumbs .pd-thumb').forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
        });
    });

    // Size selection on detail page
    pdSizeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            pdSizeBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // Add to cart from detail page
    if (pdAddCartBtn) {
        pdAddCartBtn.addEventListener('click', () => {
            const selectedSize = document.querySelector('#pd-sizes .pd-size-btn.active');
            if (!selectedSize) {
                showToast('Vui lòng chọn size trước!');
                return;
            }
            const name = document.querySelector('.pd-title')?.textContent || '';
            const priceRaw = parseInt(pdAddCartBtn.dataset.productPrice || '0');
            const activeColorBtn = document.querySelector('#pd-colors .pd-color-btn.active');
            const color = activeColorBtn ? activeColorBtn.title : 'Mặc định';
            const image = pdMainImg ? pdMainImg.src : '';

            const productId = pdAddCartBtn.dataset.productId || '';
            const existingItem = cart.find(item => item.name === name && item.size === selectedSize.dataset.size && item.color === color);
            if (existingItem) {
                existingItem.qty += 1;
            } else {
                cart.push({ productId, name, price: priceRaw, image, size: selectedSize.dataset.size, color, qty: 1 });
            }
            updateCartUI();
            openCart();
            if (cartCount) {
                cartCount.classList.add('bump');
                setTimeout(() => cartCount.classList.remove('bump'), 400);
            }
            showToast('✓ Đã thêm vào giỏ hàng!');
        });
    }

    // Buy now from detail page — add to cart then go straight to checkout
    if (pdBuyNowBtn) {
        pdBuyNowBtn.addEventListener('click', () => {
            const selectedSize = document.querySelector('#pd-sizes .pd-size-btn.active');
            if (!selectedSize) {
                showToast('Vui lòng chọn size trước!');
                return;
            }
            const selectedColor = document.querySelector('#pd-colors .pd-color-btn.active');
            const name      = pdAddCartBtn.dataset.productName || document.querySelector('.pd-title')?.textContent?.trim() || '';
            const priceRaw  = parseInt(pdAddCartBtn.dataset.productPrice, 10) || 0;
            const productId = pdAddCartBtn.dataset.productId || '';
            const image     = pdMainImg ? pdMainImg.src : '';
            const size      = selectedSize.dataset.size;
            const color     = selectedColor ? selectedColor.dataset.color : '';

            const existing = cart.find(i => i.productId === productId && i.size === size && i.color === color);
            if (existing) {
                existing.qty += 1;
            } else {
                cart.push({ productId, name, price: priceRaw, image, size, color, qty: 1 });
            }
            updateCartUI();
            openCheckout();
        });
    }

    // Make product cards clickable — clicking image or name navigates to detail page
    const clickableCards = document.querySelectorAll('.product-card');
    clickableCards.forEach(card => {
        const link = card.querySelector('.product-name-link');
        if (link && link.href && !link.href.endsWith('#')) {
            // Make the product image area clickable
            const imgArea = card.querySelector('.product-image');
            if (imgArea) {
                imgArea.style.cursor = 'pointer';
                imgArea.addEventListener('click', (e) => {
                    // Don't navigate if clicking a size button or color swatch
                    if (e.target.closest('.size-btn') || e.target.closest('.color-swatch')) return;
                    window.location.href = link.href;
                });
            }
            // Also make the whole card clickable (except buttons)
            card.addEventListener('click', (e) => {
                if (e.target.closest('.size-btn') || e.target.closest('.color-swatch') || e.target.closest('button') || e.target.closest('.product-name-link')) return;
                window.location.href = link.href;
            });
        }
    });

    // ===== Quick Buy (card Mua ngay) =====
    document.querySelectorAll('.card-buy-btn').forEach(btn => {
        btn.addEventListener('click', e => {
            e.stopPropagation();
            const card   = btn.closest('.product-card');
            const picker = card.querySelector('.card-size-picker');
            const sizes  = (btn.dataset.sizes || '').split(',').filter(Boolean);

            if (sizes.length === 1) {
                addToCart(card, sizes[0], true);
                openCheckout();
            } else {
                const isOpen = picker.classList.contains('open');
                // Close all pickers
                document.querySelectorAll('.card-size-picker').forEach(p => p.classList.remove('open'));
                document.querySelectorAll('.card-buy-btn').forEach(b => b.classList.remove('active'));
                if (!isOpen) {
                    picker.classList.add('open');
                    btn.classList.add('active');
                }
            }
        });
    });

    document.querySelectorAll('.card-size-opt').forEach(opt => {
        opt.addEventListener('click', e => {
            e.stopPropagation();
            const card = opt.closest('.product-card');
            card.querySelector('.card-size-picker').classList.remove('open');
            card.querySelector('.card-buy-btn').classList.remove('active');
            addToCart(card, opt.dataset.size, true);
            openCheckout();
        });
    });

    // Close pickers when clicking elsewhere
    document.addEventListener('click', () => {
        document.querySelectorAll('.card-size-picker').forEach(p => p.classList.remove('open'));
        document.querySelectorAll('.card-buy-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.card-cart-size-picker').forEach(p => p.classList.remove('open'));
        document.querySelectorAll('.card-cart-btn').forEach(b => b.classList.remove('active'));
    });

    // ===== Add to Cart icon button =====
    document.querySelectorAll('.card-cart-btn').forEach(btn => {
        btn.addEventListener('click', e => {
            e.stopPropagation();
            const card   = btn.closest('.product-card');
            const picker = card.querySelector('.card-cart-size-picker');
            const sizes  = (btn.dataset.sizes || '').split(',').filter(Boolean);

            if (sizes.length === 1) {
                addToCart(card, sizes[0], false);
            } else {
                const isOpen = picker.classList.contains('open');
                document.querySelectorAll('.card-cart-size-picker').forEach(p => p.classList.remove('open'));
                document.querySelectorAll('.card-cart-btn').forEach(b => b.classList.remove('active'));
                if (!isOpen) {
                    picker.classList.add('open');
                    btn.classList.add('active');
                }
            }
        });
    });

    document.querySelectorAll('.card-cart-size-opt').forEach(opt => {
        opt.addEventListener('click', e => {
            e.stopPropagation();
            const card = opt.closest('.product-card');
            card.querySelector('.card-cart-size-picker').classList.remove('open');
            card.querySelector('.card-cart-btn').classList.remove('active');
            addToCart(card, opt.dataset.size, false);
        });
    });

    // ===== Sort Dropdown =====
    const sortDropdown = document.getElementById('sort-dropdown');
    if (sortDropdown) {
        const sortBtn = sortDropdown.querySelector('.sort-btn');
        const sortLabel = sortDropdown.querySelector('#sort-label');

        sortBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            sortDropdown.classList.toggle('open');
        });

        document.addEventListener('click', () => sortDropdown.classList.remove('open'));

        sortDropdown.querySelectorAll('.sort-option').forEach(opt => {
            opt.addEventListener('click', () => {
                sortDropdown.querySelectorAll('.sort-option').forEach(o => o.classList.remove('active'));
                opt.classList.add('active');
                sortLabel.textContent = opt.textContent.trim();
                sortDropdown.classList.remove('open');
                applySort(opt.dataset.value);
            });
        });
    }

    function applySort(val) {
        // Support single #product-grid or multiple .product-grid (san-pham page)
        const grids = document.getElementById('product-grid')
            ? [document.getElementById('product-grid')]
            : Array.from(document.querySelectorAll('.product-grid'));
        grids.forEach(grid => {
            const cards = Array.from(grid.querySelectorAll('.product-card'));
            cards.sort((a, b) => {
                if (val === 'price-asc')     return Number(a.dataset.price) - Number(b.dataset.price);
                if (val === 'price-desc')    return Number(b.dataset.price) - Number(a.dataset.price);
                if (val === 'discount-desc') return Number(b.dataset.discount) - Number(a.dataset.discount);
                if (val === 'name')          return (a.dataset.name || '').localeCompare(b.dataset.name || '', 'vi');
                return 0;
            });
            cards.forEach(c => grid.appendChild(c));
        });
    }
});
