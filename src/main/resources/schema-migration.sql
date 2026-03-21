-- Run on every startup; IF NOT EXISTS guards make it idempotent
ALTER TABLE orders ADD COLUMN IF NOT EXISTS coupon_code     VARCHAR(255);
ALTER TABLE orders ADD COLUMN IF NOT EXISTS coupon_discount BIGINT DEFAULT 0;
