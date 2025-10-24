import React from "react";

const SectionHeader: React.FC = () => {
  return (
    <section className="bg-white shadow-[0_4px_25px_rgba(0,0,0,0.1)] w-full mt-0">
      <div className="max-w-5xl mx-auto p-6 md:p-10">
        {/* Gambar Header */}
        <img
          src="/artikel/pic1.jpg"
          alt="Artikel Header"
          className="w-full rounded-2xl object-cover mb-6"
        />

        {/* Judul Artikel */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug mb-3">
          6 Langkah Sederhana Agar Omzet Bisnismu Terus Naik Tiap Bulan
        </h2>
        <p className="text-gray-400 text-base font-medium">
          December 18th, 2023
        </p>
      </div>
    </section>
  );
};

export default SectionHeader;
