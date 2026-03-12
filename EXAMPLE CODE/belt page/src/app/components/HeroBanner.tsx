export function HeroBanner() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "clamp(420px, 60vh, 620px)" }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1680229891957-92f1ff5bff1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwY2luZW1hdGljJTIwbGVhdGhlciUyMGJlbHQlMjBtZW4lMjBjbG9zZS11cHxlbnwxfHx8fDE3NzMzMDUwNTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(26,26,46,0.82) 0%, rgba(26,26,46,0.55) 50%, rgba(26,26,46,0.3) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-8 h-full flex flex-col justify-center">
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "13px",
            fontWeight: 600,
            letterSpacing: "3px",
            color: "#e94560",
            textTransform: "uppercase",
            marginBottom: "16px",
          }}
        >
          BỘ SƯU TẬP 2026
        </p>
        <h1
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 900,
            fontSize: "clamp(40px, 6vw, 72px)",
            lineHeight: 1.05,
            color: "#ffffff",
            textTransform: "uppercase",
            letterSpacing: "2px",
            textShadow: "0 4px 20px rgba(0,0,0,0.4)",
            marginBottom: "20px",
          }}
        >
          THẮT LƯNG
          <br />
          <span style={{ color: "#e94560" }}>NAM</span>
        </h1>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: 1.6,
            color: "rgba(255,255,255,0.75)",
            maxWidth: "440px",
            marginBottom: "32px",
          }}
        >
          Được chế tác từ da bò thật cao cấp. Khẳng định phong cách đàn ông
          hiện đại với từng chi tiết tinh tế.
        </p>
        <div className="flex items-center gap-4 flex-wrap">
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
              padding: "14px 32px",
              cursor: "pointer",
              boxShadow: "0 4px 14px rgba(233, 69, 96, 0.35)",
              transition: "all 0.25s ease",
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
            MUA NGAY
          </button>
          <button
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "0.5px",
              textTransform: "uppercase",
              color: "#ffffff",
              backgroundColor: "transparent",
              border: "2px solid rgba(255,255,255,0.5)",
              borderRadius: "6px",
              padding: "12px 32px",
              cursor: "pointer",
              transition: "all 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#ffffff";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            XEM BỘ SƯU TẬP
          </button>
        </div>
      </div>
    </section>
  );
}
