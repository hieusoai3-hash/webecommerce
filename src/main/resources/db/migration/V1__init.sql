-- V1: Initial schema
-- Uses IF NOT EXISTS so this is safe to run against an existing database.

-- ── Products ──────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS products (
    id               VARCHAR(255) PRIMARY KEY,
    name             VARCHAR(255),
    category         VARCHAR(255),
    material         VARCHAR(255),
    price            BIGINT,
    original_price   BIGINT,
    discount         INTEGER,
    rating           INTEGER,
    reviews          INTEGER,
    description      VARCHAR(2000),
    hot              BOOLEAN DEFAULT FALSE,
    stock            INTEGER DEFAULT 0
);

CREATE TABLE IF NOT EXISTS product_features (
    product_id VARCHAR(255) REFERENCES products(id) ON DELETE CASCADE,
    feature    VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS product_colors (
    product_id VARCHAR(255) REFERENCES products(id) ON DELETE CASCADE,
    name       VARCHAR(255),
    hex        VARCHAR(255),
    image_url  VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS product_sizes (
    product_id VARCHAR(255) REFERENCES products(id) ON DELETE CASCADE,
    size       VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS product_variant_stocks (
    product_id VARCHAR(255) REFERENCES products(id) ON DELETE CASCADE,
    color_name VARCHAR(255),
    size_name  VARCHAR(255),
    qty        INTEGER DEFAULT 0
);

-- ── Orders ────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS orders (
    id               VARCHAR(255) PRIMARY KEY,
    customer_name    VARCHAR(255),
    customer_phone   VARCHAR(255),
    customer_address VARCHAR(255),
    total            BIGINT,
    payment_method   VARCHAR(255),
    status           VARCHAR(255),
    created_at       TIMESTAMP,
    coupon_code      VARCHAR(255),
    coupon_discount  BIGINT DEFAULT 0,
    customer_note    VARCHAR(1000),
    shipping_carrier VARCHAR(255),
    tracking_code    VARCHAR(255),
    cancel_reason    VARCHAR(500)
);

CREATE INDEX IF NOT EXISTS idx_orders_phone ON orders(customer_phone);

CREATE TABLE IF NOT EXISTS order_items (
    order_id     VARCHAR(255) REFERENCES orders(id) ON DELETE CASCADE,
    product_id   VARCHAR(255),
    product_name VARCHAR(255),
    size         VARCHAR(255),
    quantity     INTEGER,
    price        BIGINT
);

-- ── Coupons ───────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS coupons (
    id              BIGSERIAL PRIMARY KEY,
    code            VARCHAR(255) UNIQUE NOT NULL,
    discount_type   VARCHAR(255),
    discount_value  BIGINT  DEFAULT 0,
    min_order_value BIGINT  DEFAULT 0,
    max_uses        INTEGER DEFAULT 0,
    used_count      INTEGER DEFAULT 0,
    active          BOOLEAN DEFAULT TRUE,
    expires_at      DATE
);

-- ── Combos ────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS combos (
    id             BIGSERIAL PRIMARY KEY,
    name           VARCHAR(255),
    buy_quantity   INTEGER DEFAULT 0,
    free_quantity  INTEGER DEFAULT 0,
    price          BIGINT  DEFAULT 0,
    original_price BIGINT  DEFAULT 0,
    description    VARCHAR(500),
    details        VARCHAR(255),
    combo_items    VARCHAR(500),
    badge_text     VARCHAR(255),
    image_url      VARCHAR(255),
    active         BOOLEAN DEFAULT TRUE,
    sort_order     INTEGER DEFAULT 0
);

-- ── Page views ────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS page_views (
    id         BIGSERIAL PRIMARY KEY,
    viewed_at  TIMESTAMP    NOT NULL,
    product_id VARCHAR(100)
);

CREATE INDEX IF NOT EXISTS idx_pv_viewed_at  ON page_views(viewed_at);
CREATE INDEX IF NOT EXISTS idx_pv_product_id ON page_views(product_id);

-- ── Site settings (singleton row, id = 1) ─────────────────────────────────
CREATE TABLE IF NOT EXISTS site_settings (
    id              BIGINT PRIMARY KEY,
    banner_text     VARCHAR(500),
    banner_enabled  BOOLEAN DEFAULT TRUE,
    sale_end_epoch  BIGINT  DEFAULT 0,
    shop_phone      VARCHAR(255),
    shop_email      VARCHAR(255),
    shop_address    VARCHAR(500),
    facebook_url    VARCHAR(255),
    zalo_phone      VARCHAR(255),
    tiktok_url      VARCHAR(255)
);
