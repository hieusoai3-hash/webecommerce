import { useState } from "react";
import { Search, User, ShoppingBag, Menu, X } from "lucide-react";

const navLinks = [
  { label: "TRANG CHỦ", href: "#" },
  { label: "THẮT LƯNG", href: "#", active: true },
  { label: "VÍ DA", href: "#" },
  { label: "BÁN CHẠY", href: "#" },
  { label: "SALE", href: "#", sale: true },
  { label: "LIÊN HỆ", href: "#" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="bg-white sticky top-0 z-50"
      style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-[68px]">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 shrink-0">
            <div
              className="w-[14px] h-[14px] bg-[#e94560]"
              style={{ transform: "rotate(45deg)" }}
            />
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 800,
                fontSize: "18px",
                color: "#1a1a2e",
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}
            >
              NB2 Boxer Men
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-9">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "13px",
                  fontWeight: 600,
                  letterSpacing: "0.8px",
                  color: link.sale
                    ? "#e94560"
                    : link.active
                    ? "#e94560"
                    : "#1a1a2e",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#e94560")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = link.sale || link.active ? "#e94560" : "#1a1a2e")
                }
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right icons */}
          <div className="flex items-center gap-5">
            <button
              className="text-[#1a1a2e] hover:text-[#e94560] transition-colors"
              aria-label="Search"
            >
              <Search className="w-[20px] h-[20px]" strokeWidth={1.8} />
            </button>
            <button
              className="text-[#1a1a2e] hover:text-[#e94560] transition-colors hidden sm:block"
              aria-label="Account"
            >
              <User className="w-[20px] h-[20px]" strokeWidth={1.8} />
            </button>
            <button
              className="text-[#1a1a2e] hover:text-[#e94560] transition-colors relative"
              aria-label="Cart"
            >
              <ShoppingBag className="w-[20px] h-[20px]" strokeWidth={1.8} />
              <span
                className="absolute -top-1.5 -right-1.5 bg-[#e94560] text-white rounded-full w-[16px] h-[16px] flex items-center justify-center"
                style={{ fontSize: "9px", fontWeight: 700 }}
              >
                2
              </span>
            </button>
            <button
              className="lg:hidden text-[#1a1a2e]"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="lg:hidden bg-white px-6 pb-6"
          style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block py-3"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "14px",
                fontWeight: 600,
                letterSpacing: "0.5px",
                color: link.sale || link.active ? "#e94560" : "#1a1a2e",
                borderBottom: "1px solid rgba(0,0,0,0.04)",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
