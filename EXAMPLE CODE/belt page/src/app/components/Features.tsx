import { Shield, Truck, RefreshCw, Headphones } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "DA BÒ THẬT 100%",
    desc: "Cam kết chất liệu da bò thật, bền đẹp theo thời gian",
  },
  {
    icon: Truck,
    title: "GIAO HÀNG MIỄN PHÍ",
    desc: "Miễn phí vận chuyển toàn quốc cho đơn từ 500K",
  },
  {
    icon: RefreshCw,
    title: "ĐỔI TRẢ 60 NGÀY",
    desc: "Đổi trả miễn phí trong vòng 60 ngày nếu lỗi sản phẩm",
  },
  {
    icon: Headphones,
    title: "HỖ TRỢ 24/7",
    desc: "Đội ngũ tư vấn luôn sẵn sàng hỗ trợ mọi lúc",
  },
];

export function Features() {
  return (
    <section style={{ backgroundColor: "#ffffff", padding: "64px 0" }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f) => (
            <div key={f.title} className="text-center">
              <div
                className="mx-auto mb-4 flex items-center justify-center"
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "12px",
                  backgroundColor: "rgba(233, 69, 96, 0.08)",
                }}
              >
                <f.icon
                  className="w-[24px] h-[24px]"
                  style={{ color: "#e94560" }}
                  strokeWidth={1.8}
                />
              </div>
              <h4
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 800,
                  fontSize: "13px",
                  color: "#1a1a2e",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  marginBottom: "8px",
                }}
              >
                {f.title}
              </h4>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "13px",
                  fontWeight: 400,
                  lineHeight: 1.6,
                  color: "#737373",
                }}
              >
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
