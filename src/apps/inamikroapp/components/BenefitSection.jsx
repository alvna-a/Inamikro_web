import React from "react";
import { Check } from "lucide-react";

const features = [
  "Kasir Pintar",
  "Kasir Cepat",
  "Manajemen Pengeluaran",
  "Aktivasi QRIS Instan",
  "Artikel Edukasi",
  "Catatan Transaksi dan Pembukuan",
  "Kontrol Stok Otomatis",
  "Kelola Karyawan",
  "Daftar Pelanggan",
  "Cetak Struk Otomatis",
];

export default function BenefitSection() {
  return (
    <section className="relative bg-gradient-to-b from-white to-[#ffe6e6] py-32 lg:py-20 overflow-visible min-h-[1000px]">
      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center lg:items-start justify-between relative">
        
        {/* KIRI — TEKS DAN FITUR */}
        <div className="flex-1 relative z-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10 leading-snug">
            Semua yang Kamu Butuhkan, Ada di Sini
          </h2>

          <div className="flex flex-wrap gap-4">
            {features.map((item, index) => (
              <div
                key={index}
                className="flex items-center bg-white rounded-full px-4 py-2 shadow-md w-fit hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-black mr-5">
                  <Check size={14} strokeWidth={3} color="white" />
                </div>
                <span className="text-gray-800 text-base font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* KANAN — GAMBAR HP BESAR */}
        <div className="flex-[1.3] flex justify-center relative mt-16 lg:mt-0">
          <img
            src="/inamikroapp/product5.png"
            alt="Inamikro App"
            className="absolute right-[-100px] top-[-200px] scale-[0.9] drop-shadow-2xl z-10 max-w-none"
          />
        </div>
      </div>

      {/* GRADIENT HALUS DI BAGIAN BAWAH — DIPERLEBAR */}
      <div className="absolute bottom-0 left-0 right-0 h-[450px] bg-gradient-to-t from-[#ffe6e6]/60 to-transparent z-0" />
    </section>
  );
}
