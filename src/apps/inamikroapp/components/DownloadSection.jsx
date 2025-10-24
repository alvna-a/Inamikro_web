import React from "react";
// @ts-ignore
import { Download, User, Star } from "lucide-react";

const DownloadSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-8 lg:px-16 gap-12">
        
        {/* BAGIAN KIRI — TEKS & TOMBOL */}
        <div className="lg:w-1/2 text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Dapatkan Sekarang
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            Tingkatkan efisiensi usahamu dengan INAmikro App — solusi kasir digital
            yang mudah digunakan untuk pelaku UMKM Indonesia.
            <br />
            Unduh sekarang dan rasakan kemudahan mengatur bisnis dengan cara modern.
          </p>

          {/* TOMBOL DOWNLOAD */}
          <div className="flex gap-4 mb-14">
            <img
              src="/inamikroapp/googleplay.png"
              alt="Google Play"
              className="w-40 cursor-pointer hover:scale-105 transition-transform duration-300"
            />
            <img
              src="/inamikroapp/appstore.png"
              alt="App Store"
              className="w-40 cursor-pointer hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* STATISTIK — TIGA BADGE SEJAJAR */}
          <div className="flex justify-between items-center gap-2">
            {[
              { icon: <Download size={28} />, value: "100+", label: "DOWNLOAD" },
              { icon: <User size={28} />, value: "100+", label: "USER" },
              {
                icon: <Star size={28} fill="white" color="white" />,
                value: "4.9",
                label: "ULASAN",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#E53935] text-white w-[110px] sm:w-[130px] md:w-[150px] h-[120px] rounded-xl shadow-md flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300"
              >
                <div className="mb-1">{item.icon}</div>
                <span className="text-xl font-bold leading-none">{item.value}</span>
                <span className="text-xs tracking-wide mt-1">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* BAGIAN KANAN — GAMBAR HP */}
        <div className="lg:w-1/2 relative flex justify-center items-center">
          {/* HP BELAKANG */}
          <img
            src="/inamikroapp/product7.png"
            alt="INAmikro App Back"
            className="w-[360px] md:w-[420px] lg:w-[480px]  translate-x-28 translate-y-24 opacity-90 z-0"
          />
          {/* HP DEPAN */}
          <img
            src="/inamikroapp/product6.png"
            alt="INAmikro App Front"
            className="w-[360px] md:w-[420px] lg:w-[480px] -translate-x-14 drop-shadow-2xl z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
