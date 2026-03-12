import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#1a1a2e" }}>
      <div
        className="max-w-[1280px] mx-auto px-6 lg:px-8"
        style={{ paddingTop: "64px", paddingBottom: "32px" }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div
                className="w-[12px] h-[12px] bg-[#e94560]"
                style={{ transform: "rotate(45deg)" }}
              />
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 800,
                  fontSize: "16px",
                  color: "#ffffff",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                }}
              >
                NB2 Boxer Men
              </span>
            </div>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "13px",
                fontWeight: 400,
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.55)",
              }}
            >
              Khẳng định phong cách đàn ông hiện đại với sản phẩm da cao cấp, được chế tác tỉ mỉ từ chất liệu hàng đầu.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 700,
                fontSize: "13px",
                color: "#ffffff",
                textTransform: "uppercase",
                letterSpacing: "1px",
                marginBottom: "20px",
              }}
            >
              Sản phẩm
            </h4>
            <ul className="space-y-3">
              {[
                "Thắt lưng Classic",
                "Thắt lưng Modern Slim",
                "Ví da nam",
                "Phụ kiện da",
                "Sale",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "13px",
                      fontWeight: 400,
                      color: "rgba(255,255,255,0.55)",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#e94560")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color =
                        "rgba(255,255,255,0.55)")
                    }
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 700,
                fontSize: "13px",
                color: "#ffffff",
                textTransform: "uppercase",
                letterSpacing: "1px",
                marginBottom: "20px",
              }}
            >
              Hỗ trợ
            </h4>
            <ul className="space-y-3">
              {[
                "Hướng dẫn mua hàng",
                "Chính sách đổi trả",
                "Chính sách bảo mật",
                "Câu hỏi thường gặp",
                "Điều khoản sử dụng",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "13px",
                      fontWeight: 400,
                      color: "rgba(255,255,255,0.55)",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#e94560")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color =
                        "rgba(255,255,255,0.55)")
                    }
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 700,
                fontSize: "13px",
                color: "#ffffff",
                textTransform: "uppercase",
                letterSpacing: "1px",
                marginBottom: "20px",
              }}
            >
              Liên hệ
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin
                  className="w-4 h-4 mt-0.5 shrink-0"
                  style={{ color: "#e94560" }}
                  strokeWidth={1.8}
                />
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "13px",
                    fontWeight: 400,
                    color: "rgba(255,255,255,0.55)",
                    lineHeight: 1.5,
                  }}
                >
                  123 Nguyễn Huệ, Quận 1
                  <br />
                  TP. Hồ Chí Minh
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone
                  className="w-4 h-4 shrink-0"
                  style={{ color: "#e94560" }}
                  strokeWidth={1.8}
                />
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "13px",
                    fontWeight: 400,
                    color: "rgba(255,255,255,0.55)",
                  }}
                >
                  0123 456 789
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail
                  className="w-4 h-4 shrink-0"
                  style={{ color: "#e94560" }}
                  strokeWidth={1.8}
                />
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "13px",
                    fontWeight: 400,
                    color: "rgba(255,255,255,0.55)",
                  }}
                >
                  info@nb2boxermen.vn
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: "24px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "12px",
              fontWeight: 400,
              color: "rgba(255,255,255,0.35)",
            }}
          >
            &copy; 2026 NB2 Boxer Men. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
