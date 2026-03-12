import { ProductCard, Product } from "./ProductCard";

const products: Product[] = [
  {
    id: 1,
    name: "Thắt Lưng Da Bò Classic — Khóa Kim Tự Động",
    material: "Da bò thật 100%",
    price: 390000,
    originalPrice: 520000,
    image:
      "https://images.unsplash.com/photo-1772521247829-dc38f3b4cb85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBsZWF0aGVyJTIwYmVsdCUyMGJ1Y2tsZSUyMHNpbHZlcnxlbnwxfHx8fDE3NzMzMDUwNjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isHot: true,
  },
  {
    id: 2,
    name: "Thắt Lưng Da Bò Ý — Mặt Khóa Sang Trọng",
    material: "Da bò Ý nhập khẩu",
    price: 550000,
    image:
      "https://images.unsplash.com/photo-1765446904756-9c5655710885?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicm93biUyMGxlYXRoZXIlMjBiZWx0JTIwY29pbGVkJTIwcHJlbWl1bXxlbnwxfHx8fDE3NzMzMDUwNjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 3,
    name: "Thắt Lưng Da PU Slim — Phong Cách Tối Giản",
    material: "Da PU cao cấp",
    price: 250000,
    originalPrice: 350000,
    image:
      "https://images.unsplash.com/photo-1734383524180-3c6f9b21e8e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXZlcnNpYmxlJTIwbGVhdGhlciUyMGJlbHQlMjBtZW58ZW58MXx8fHwxNzczMzA1MDYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 4,
    name: "Thắt Lưng Da Bò Executive — Khóa Vàng Hồng",
    material: "Da bò thật cao cấp",
    price: 680000,
    originalPrice: 850000,
    image:
      "https://images.unsplash.com/photo-1732139637218-ef33b3339dfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWx0JTIwZ29sZCUyMGJ1Y2tsZSUyMGRhcmt8ZW58MXx8fHwxNzczMzA1MDYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isHot: true,
  },
];

export function ProductGrid() {
  return (
    <section style={{ backgroundColor: "#f9f9f9", padding: "80px 0" }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
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
            SẢN PHẨM
          </p>
          <h2
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(28px, 4vw, 36px)",
              color: "#1a1a2e",
              textTransform: "uppercase",
              letterSpacing: "1px",
              marginBottom: "12px",
            }}
          >
            THẮT LƯNG BÁN CHẠY
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "15px",
              fontWeight: 400,
              lineHeight: 1.6,
              color: "#737373",
              maxWidth: "480px",
              margin: "0 auto",
            }}
          >
            Những mẫu thắt lưng được khách hàng yêu thích nhất
          </p>
        </div>

        {/* Grid */}
        <div
          className="grid gap-6"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          }}
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "0.5px",
              textTransform: "uppercase",
              color: "#1a1a2e",
              backgroundColor: "transparent",
              border: "2px solid #1a1a2e",
              borderRadius: "6px",
              padding: "14px 40px",
              cursor: "pointer",
              transition: "all 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#1a1a2e";
              e.currentTarget.style.color = "#ffffff";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#1a1a2e";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            XEM TẤT CẢ SẢN PHẨM
          </button>
        </div>
      </div>
    </section>
  );
}
