import { Header } from "./components/Header";
import { HeroBanner } from "./components/HeroBanner";
import { Features } from "./components/Features";
import { Collections } from "./components/Collections";
import { ProductGrid } from "./components/ProductGrid";
import { Newsletter } from "./components/Newsletter";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        fontFamily: "'Inter', sans-serif",
        backgroundColor: "#ffffff",
        color: "#171717",
      }}
    >
      <Header />
      <HeroBanner />
      <Features />
      <Collections />
      <ProductGrid />
      <Newsletter />
      <Footer />
    </div>
  );
}
