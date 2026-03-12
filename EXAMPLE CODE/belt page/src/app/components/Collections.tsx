import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const collections = [
  {
    title: "CLASSIC COLLECTION",
    subtitle: "Dòng thắt lưng truyền thống với khóa kim loại sang trọng, phù hợp vest & công sở.",
    image:
      "https://images.unsplash.com/photo-1649860359778-0bb95cb88ea9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc2ljJTIwbGVhdGhlciUyMGJlbHQlMjBicm93biUyMGVsZWdhbnR8ZW58MXx8fHwxNzczMzA1MDU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    count: "12 sản phẩm",
  },
  {
    title: "MODERN SLIM",
    subtitle: "Dáng mỏng hiện đại, thiết kế tối giản cho phong cách casual & streetwear.",
    image:
      "https://images.unsplash.com/photo-1662280805295-acfa24cf6d3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbGltJTIwbW9kZXJuJTIwYmVsdCUyMG1pbmltYWxpc3QlMjBibGFja3xlbnwxfHx8fDE3NzMzMDUwNTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    count: "8 sản phẩm",
  },
];

export function Collections() {
  return (
    <section style={{ backgroundColor: "#ffffff", padding: "80px 0" }}>
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
            KHÁM PHÁ
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
            BỘ SƯU TẬP NỔI BẬT
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "15px",
              fontWeight: 400,
              lineHeight: 1.6,
              color: "#737373",
              maxWidth: "500px",
              margin: "0 auto",
            }}
          >
            Lựa chọn phong cách phù hợp với cá tính của bạn
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {collections.map((col) => (
            <div
              key={col.title}
              className="group cursor-pointer"
              style={{
                backgroundColor: "#f9f9f9",
                borderRadius: "12px",
                padding: "30px",
                transition: "all 0.3s ease",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 10px 15px -3px rgba(0, 0, 0, 0.1)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                {/* Image */}
                <div
                  className="w-full sm:w-[180px] h-[180px] shrink-0 overflow-hidden"
                  style={{ borderRadius: "10px", backgroundColor: "#f5f5f5" }}
                >
                  <ImageWithFallback
                    src={col.image}
                    alt={col.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Text */}
                <div className="flex flex-col justify-between flex-1 min-h-[160px]">
                  <div>
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "11px",
                        fontWeight: 600,
                        letterSpacing: "2px",
                        color: "#a3a3a3",
                        textTransform: "uppercase",
                      }}
                    >
                      {col.count}
                    </span>
                    <h3
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 800,
                        fontSize: "22px",
                        color: "#1a1a2e",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                        marginTop: "8px",
                        marginBottom: "10px",
                      }}
                    >
                      {col.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "14px",
                        fontWeight: 400,
                        lineHeight: 1.6,
                        color: "#737373",
                      }}
                    >
                      {col.subtitle}
                    </p>
                  </div>

                  <div
                    className="flex items-center gap-2 mt-4 group-hover:gap-3 transition-all"
                    style={{ color: "#e94560" }}
                  >
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "14px",
                        fontWeight: 600,
                        letterSpacing: "0.5px",
                        textTransform: "uppercase",
                      }}
                    >
                      XEM NGAY
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
