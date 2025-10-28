import React from "react";
import { Users, Lightbulb, TrendingUp, Handshake } from "lucide-react";

const TentangKemitraan = () => {
  const features = [
    {
      icon: <Handshake className="w-8 h-8 text-[#F43F5E]" />,
      title: "Kolaborasi",
      desc: "Membangun hubungan kemitraan yang saling menguntungkan antara pelaku usaha dan INAmikro.",
    },
    {
      icon: <Users className="w-8 h-8 text-[#F43F5E]" />,
      title: "Pemberdayaan",
      desc: "Memberikan dukungan nyata bagi UMKM untuk berkembang melalui pendampingan dan inovasi digital.",
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-[#F43F5E]" />,
      title: "Inovasi",
      desc: "Menghadirkan solusi kreatif berbasis teknologi untuk mempercepat pertumbuhan dunia usaha.",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-[#F43F5E]" />,
      title: "Pertumbuhan",
      desc: "Menumbuhkan ekosistem bisnis yang berkelanjutan dengan dampak positif bagi masyarakat.",
    },
  ];

  return (
    <section className="py-20 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Tentang Kemitraan
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-14 max-w-3xl mx-auto">
          INAmikro berkomitmen membangun sinergi dengan berbagai pihak untuk
          memperkuat sektor mikro dan kecil. Melalui kolaborasi lintas sektor,
          kami percaya kemajuan ekonomi dapat tercapai secara inklusif.
        </p>

        {/* Card Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TentangKemitraan;
