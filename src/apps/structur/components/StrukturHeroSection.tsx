import React from "react";

export default function FounderSection() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 bg-gradient-to-b from-pinkBrand/10 to-[#FDE8E8]">
      {/* Foto Box */}
      <div className="bg-white shadow-lg rounded-2xl p-5 flex flex-col items-center max-w-xs">
        <img
          src="/structur/founder-debbie.jpg" // ganti dengan path gambar kamu
          alt="Debbie R. Sianturi"
          className="rounded-xl w-64 h-auto object-cover"
        />
        <div className="text-center mt-4">
          <h2 className="font-semibold text-lg">Debbie R. Sianturi</h2>
          <p className="text-sm text-gray-500">Founder & CEO</p>
        </div>
      </div>

      {/* Deskripsi */}
      <div className="max-w-2xl text-justify text-gray-700 leading-relaxed">
        <p>
          INAmikro (PT. Mikrobisnis Digital Sejahtera) telah melayani dan memberi
          dampak kepada pelaku UMKM di Indonesia sejak tahun 2017 dan sudah
          mempunyai anggota binaan sekitar 18.000 pelaku mikro di Jakarta, Jawa
          Tengah, Jawa Barat dan Sumatera Utara.
        </p>
        <p className="mt-4">
          Mari kita bersama-sama dukung dan majukan pelaku UMKM Indonesia! Kalau
          bukan saya, siapa lagi? Kalau bukan kita, mereka mau menunggu siapa?
          Kalau bukan sekarang, sampai kapan mereka harus menunggu?
        </p>
        <p className="mt-4">
          Sekitar 60–100 juta pelaku usaha mikro di Indonesia masih perlu
          mengalami “digital dan financial inclusion”. Mereka akan mengalami
          transformasi dalam berusaha dan bisa scale up usaha mereka menjadi
          usaha kecil, menengah bahkan besar. Nothing is impossible.
        </p>
        <p className="mt-4">
          Mari dukung dan bergabung dengan program pelayanan INAmikro. Menuju
          Indonesia Emas 2045.
        </p>
      </div>
    </div>
  );
}
