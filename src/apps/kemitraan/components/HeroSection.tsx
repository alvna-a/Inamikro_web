import React from "react";

const HeroSection = () => {
  return (
    <section
      className="relative h-[80vh] w-full bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('/public/Kemitraan/pic1.jpg')", // pastikan path sesuai di public/images/
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Text Content */}
      <div className="relative text-center text-white max-w-3xl px-6">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
          Pemberdayaan Dunia Usaha Bersama Mitra INAmikro
        </h1>
        <p className="text-lg md:text-xl font-medium">
          Menjalin kolaborasi strategis untuk memperkuat ekosistem usaha mikro
          dan memperluas dampak ekonomi nasional.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
