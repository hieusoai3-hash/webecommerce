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
    const newsletterForm = document.getElementById('newsletter-form');

    // ===== Cart State =====
    let cart = [];

    // ===== Announcement Bar =====
    if (announcementClose) {
        announcementClose.addEventListener('click', () => {
            announcementBar.classList.add('hidden');
        });
    }

    // ===== Sticky Header =====
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        // Header shadow
        if (scrollY > 10) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Back to top visibility
        if (scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }

        lastScroll = scrollY;
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

    // ===== Search Bar =====
    if (searchToggle) {
        searchToggle.addEventListener('click', () => {
            searchBar.classList.toggle('expanded');
            if (searchBar.classList.contains('expanded')) {
                searchInput.focus();
            }
        });
    }

    // Close search on click outside
    document.addEventListener('click', (e) => {
        if (searchBar && !searchBar.contains(e.target)) {
            searchBar.classList.remove('expanded');
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
    function addToCart(productCard, size) {
        const name = productCard.querySelector('.product-name').textContent;
        const priceText = productCard.querySelector('.price-current').textContent;
        const price = parseInt(priceText.replace(/[^\d]/g, ''));
        const image = productCard.querySelector('.img-primary').src;
        const activeColor = productCard.querySelector('.color-swatch.active');
        const color = activeColor ? activeColor.getAttribute('data-color') : 'Mặc định';

        const existingItem = cart.find(item => item.name === name && item.size === size && item.color === color);

        if (existingItem) {
            existingItem.qty += 1;
        } else {
            cart.push({ name, price, image, size, color, qty: 1 });
        }

        updateCartUI();

        // Open the cart sidebar to show items
        openCart();

        // Bump animation on the cart icon
        cartCount.classList.add('bump');
        setTimeout(() => cartCount.classList.remove('bump'), 400);
    }

    function removeFromCart(index) {
        cart.splice(index, 1);
        updateCartUI();
    }

    function updateCartUI() {
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
            cartBody.innerHTML = cart.map((item, idx) => `
                <div class="cart-item">
                    <div class="cart-item-img">
                        <img src="${item.image}" alt="${item.name}">
                    </div>
                    <div class="cart-item-info">
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-variant">${item.color} | Size ${item.size} | SL: ${item.qty}</div>
                        <div class="cart-item-price">${item.price.toLocaleString('vi-VN')}₫</div>
                    </div>
                    <button class="cart-item-remove" data-index="${idx}" aria-label="Xóa">✕</button>
                </div>
            `).join('');
            cartFooter.style.display = 'block';
            cartTotalPrice.textContent = totalPrice.toLocaleString('vi-VN') + '₫';

            // Attach remove listeners
            cartBody.querySelectorAll('.cart-item-remove').forEach(btn => {
                btn.addEventListener('click', () => {
                    removeFromCart(parseInt(btn.dataset.index));
                });
            });
        }
    }

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

    // ===== Product Filters =====
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.dataset.filter;

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

    // ===== Newsletter Form =====
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = document.getElementById('newsletter-input');
            if (input.value) {
                showToast('🎉 Đăng ký thành công! Kiểm tra email để nhận mã giảm 10%');
                input.value = '';
            }
        });
    }

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

        document.getElementById('summary-total').textContent = total.toLocaleString('vi-VN') + '₫';
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
            { id: 'checkout-district', error: 'error-district', msg: 'Vui lòng nhập quận/huyện' },
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

    // Place order
    if (placeOrderBtn) {
        placeOrderBtn.addEventListener('click', () => {
            if (!validateCheckoutForm()) return;

            const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
            const isFreeShip = subtotal >= FREE_SHIP_THRESHOLD;
            const total = isFreeShip ? subtotal : subtotal + SHIPPING_FEE;

            // Generate order ID
            const orderId = '#CF' + Math.random().toString(36).substr(2, 6).toUpperCase();

            // Get payment method name
            const paymentMethodNames = {
                'cod': 'Thanh toán khi nhận hàng (COD)',
                'momo': 'Ví MoMo',
                'card': 'Thẻ VISA / Mastercard',
                'bank': 'Chuyển khoản ngân hàng'
            };
            const selectedPayment = document.querySelector('input[name="payment"]:checked').value;

            // Show success
            document.getElementById('success-order-id').textContent = orderId;
            document.getElementById('success-payment-method').textContent = paymentMethodNames[selectedPayment] || 'COD';
            document.getElementById('success-total').textContent = total.toLocaleString('vi-VN') + '₫';

            checkoutContent.style.display = 'none';
            checkoutSuccess.style.display = 'block';

            // Scroll modal to top
            checkoutModal.scrollTop = 0;

            // Clear cart
            cart = [];
            updateCartUI();

            // Reset form
            document.getElementById('checkout-form').reset();
            // Reset payment to COD
            paymentOptions.forEach(o => o.classList.remove('active'));
            document.querySelector('.payment-option[data-method="cod"]').classList.add('active');
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

    // ===== Product Description Drawer =====
    const productDescDrawer = document.getElementById('product-desc-drawer');
    const productDescOverlay = document.getElementById('product-desc-overlay');
    const productDescCloseBtn = document.getElementById('product-desc-close');

    function openProductDesc(e) {
        if (e) e.preventDefault();
        productDescDrawer.classList.add('active');
        productDescOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeProductDesc() {
        productDescDrawer.classList.remove('active');
        productDescOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (productDescCloseBtn) productDescCloseBtn.addEventListener('click', closeProductDesc);
    if (productDescOverlay) productDescOverlay.addEventListener('click', closeProductDesc);

    // Bind the new buttons inside Checkout Modal
    const checkoutSizeGuideBtn = document.getElementById('checkout-size-guide-btn');
    const checkoutDescBtn = document.getElementById('checkout-desc-btn');

    if (checkoutSizeGuideBtn) {
        checkoutSizeGuideBtn.addEventListener('click', () => {
            // Close checkout first to prevent stacking issues (optional, but cleaner)
            closeCheckout();
            setTimeout(openSizeGuide, 300); // Wait for transition
        });
    }

    if (checkoutDescBtn) {
        checkoutDescBtn.addEventListener('click', () => {
            closeCheckout();
            setTimeout(openProductDesc, 300);
        });
    }

    // Make product cards clickable — clicking image or name navigates to detail page
    const productCards2 = document.querySelectorAll('.product-card');
    productCards2.forEach(card => {
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
});
