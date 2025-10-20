import React from "react";

const AboutHeroSection = () => {
  return (
    <section className="bg-[#FDE8E8] py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 items-center gap-10">
        {/* Foto */}
        <div className="flex justify-center">
          <div className="bg-white rounded-3xl shadow-lg p-4 w-72 text-center">
            <img
              src="/public/about/founder-debbie.jpg"
              alt="Debbie R. Sianturi"
              className="rounded-xl w-full h-auto mb-3"
            />
            <p className="font-semibold">Debbie R. Sianturi</p>
            <p className="text-sm text-gray-500">Founder & CEO</p>
          </div>
        </div>

        {/* Teks */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Tentang INAmikro</h2>
          <p className="text-gray-700 leading-relaxed mb-4 text-justify">
            INAmikro merupakan singkatan dari Indonesia Mikro, di bawah naungan
            PT. Mikrobinis Digital Sejahtera. Sejak berdiri pada 2017, INAmikro
            tumbuh sebagai impact startup yang berkomitmen mendukung transformasi
            pelaku usaha mikro melalui literasi digital, peningkatan kapasitas
            usaha, pendampingan legalitas, serta akses pembiayaan yang inklusif.
          </p>
          <p className="text-gray-700 leading-relaxed text-justify">
            Bersama mitra strategis dari pemerintah, universitas, dan sektor
            swasta, INAmikro terus mendorong UMKM agar naik kelas, berdaya
            saing, dan mandiri di era digital, sekaligus memperkuat fondasi
            ekonomi Indonesia menuju masa depan yang berkelanjutan.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
