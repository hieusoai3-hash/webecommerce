export function Newsletter() {
  return (
    <section style={{ backgroundColor: "#ffffff", padding: "80px 0" }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div
          className="text-center"
          style={{
            backgroundColor: "#f5f5f5",
            borderRadius: "16px",
            padding: "clamp(40px, 6vw, 64px) clamp(24px, 4vw, 64px)",
          }}
        >
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "3px",
              color: "#e94560",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            ƯU ĐÃI ĐỘC QUYỀN
          </p>
          <h2
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(24px, 3.5vw, 32px)",
              color: "#1a1a2e",
              textTransform: "uppercase",
              letterSpacing: "1px",
              marginBottom: "12px",
            }}
          >
            ĐĂNG KÝ NHẬN VOUCHER GIẢM 10%
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "15px",
              fontWeight: 400,
              lineHeight: 1.6,
              color: "#737373",
              maxWidth: "460px",
              margin: "0 auto 32px",
            }}
          >
            Nhập email để nhận voucher giảm giá cho đơn hàng đầu tiên và cập nhật bộ sưu tập mới nhất.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-[460px] mx-auto">
            <input
              type="email"
              placeholder="Nhập email của bạn..."
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "14px",
                fontWeight: 400,
                flex: 1,
                padding: "14px 20px",
                borderRadius: "6px",
                border: "1.5px solid #e5e5e5",
                backgroundColor: "#ffffff",
                color: "#171717",
                outline: "none",
                transition: "border-color 0.2s ease",
              }}
              onFocus={(e) =>
                (e.currentTarget.style.borderColor = "#e94560")
              }
              onBlur={(e) =>
                (e.currentTarget.style.borderColor = "#e5e5e5")
              }
            />
            <button
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "14px",
                fontWeight: 600,
                letterSpacing: "0.5px",
                textTransform: "uppercase",
                color: "#ffffff",
                backgroundColor: "#e94560",
                border: "none",
                borderRadius: "6px",
                padding: "14px 28px",
                cursor: "pointer",
                boxShadow: "0 4px 14px rgba(233, 69, 96, 0.35)",
                transition: "all 0.25s ease",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 6px 20px rgba(233, 69, 96, 0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 4px 14px rgba(233, 69, 96, 0.35)";
              }}
            >
              ĐĂNG KÝ
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
