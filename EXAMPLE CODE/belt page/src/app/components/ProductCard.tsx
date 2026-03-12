import { useState } from "react";
import { Heart, ShoppingBag } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export interface Product {
  id: number;
  name: string;
  material: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: string;
  isHot?: boolean;
}

export function ProductCard({ product }: { product: Product }) {
  const [liked, setLiked] = useState(false);
  const [hovered, setHovered] = useState(false);

  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )
    : 0;

  return (
    <div
      className="flex flex-col"
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "0",
        transition: "all 0.3s ease",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
          : "none",
        cursor: "pointer",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image wrapper */}
      <div
        className="relative overflow-hidden"
        style={{
          backgroundColor: "#f5f5f5",
          borderRadius: "10px",
          aspectRatio: "1 / 1",
        }}
      >
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          style={{
            transition: "transform 0.5s ease",
            transform: hovered ? "scale(1.05)" : "scale(1)",
          }}
        />

        {/* Badges */}
        <div
          className="absolute top-3 left-3 flex flex-col gap-1.5"
          style={{ zIndex: 2 }}
        >
          {product.isHot && (
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "12px",
                fontWeight: 700,
                color: "#ffffff",
                backgroundColor: "#e94560",
                borderRadius: "50px",
                padding: "4px 12px",
                display: "inline-block",
              }}
            >
              Hot
            </span>
          )}
          {discount > 0 && (
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "12px",
                fontWeight: 700,
                color: "#ffffff",
                backgroundColor: "#e94560",
                borderRadius: "50px",
                padding: "4px 12px",
                display: "inline-block",
              }}
            >
              -{discount}%
            </span>
          )}
        </div>

        {/* Quick actions */}
        <div
          className="absolute top-3 right-3 flex flex-col gap-2"
          style={{
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateX(0)" : "translateX(8px)",
            transition: "all 0.3s ease",
            zIndex: 2,
          }}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLiked(!liked);
            }}
            className="flex items-center justify-center"
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              backgroundColor: liked ? "#e94560" : "#ffffff",
              color: liked ? "#ffffff" : "#1a1a2e",
              border: "none",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
          >
            <Heart
              className="w-4 h-4"
              fill={liked ? "currentColor" : "none"}
              strokeWidth={1.8}
            />
          </button>
          <button
            onClick={(e) => e.stopPropagation()}
            className="flex items-center justify-center"
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              backgroundColor: "#ffffff",
              color: "#1a1a2e",
              border: "none",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
          >
            <ShoppingBag className="w-4 h-4" strokeWidth={1.8} />
          </button>
        </div>
      </div>

      {/* Info */}
      <div style={{ padding: "16px 4px 8px" }}>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "12px",
            fontWeight: 500,
            color: "#a3a3a3",
            marginBottom: "6px",
            letterSpacing: "0.3px",
          }}
        >
          {product.material}
        </p>
        <h3
          className="line-clamp-2"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 600,
            fontSize: "15px",
            color: "#171717",
            lineHeight: 1.4,
            marginBottom: "10px",
            minHeight: "42px",
          }}
        >
          {product.name}
        </h3>

        {/* Price */}
        <div className="flex items-center gap-2.5">
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "17px",
              fontWeight: 800,
              color: "#e94560",
            }}
          >
            {product.price.toLocaleString("vi-VN")}đ
          </span>
          {product.originalPrice && (
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "14px",
                fontWeight: 400,
                color: "#a3a3a3",
                textDecoration: "line-through",
              }}
            >
              {product.originalPrice.toLocaleString("vi-VN")}đ
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
