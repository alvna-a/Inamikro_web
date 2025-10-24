import React from "react";
import "../artikel.css";

const HeroFrame: React.FC = () => {
  return (
    <section
      className="hero-frame"
      style={{
        backgroundImage:
          "url('/assets/artikel/hero-banner.jpg')",
      }}
    >
      <div className="hero-text">
        <h1>
          Bukan Sekadar Jualan: 5 Rahasia Mengembangkan Bisnis Agar Terus Untung
        </h1>
        <p>
          Membangun bisnis bukan hanya soal menjual produk atau jasa. Di balik setiap
          usaha yang sukses, ada strategi, mentalitas, dan arah yang jelas. Nah, kalau
          kamu sedang berjuang menumbuhkan bisnis dan ingin profitnya terus meningkat...
        </p>
      </div>
    </section>
  );
};

export default HeroFrame;
