import React from "react";
import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const testimonials = [
  {
    name: "Viezrh Robert",
    location: "Jawa Barat",
    rating: 4.9,
    text: "Dulu ribet banget nyatat penjualan manual. Sekarang semua transaksi langsung ke sistem INAmikro. Praktis banget, laporan juga tinggal lihat aja!",
    image: "https://i.pravatar.cc/80?img=3",
  },
  {
    name: "Yessica Christy",
    location: "Semarang",
    rating: 4.5,
    text: "Fitur kasir dan QRIS-nya ngebantu banget. Pelanggan bisa bayar cepat, dan saya bisa pantau hasil penjualan tiap hari tanpa pusing.",
    image: "https://i.pravatar.cc/80?img=5",
  },
  {
    name: "Kim Young Jou",
    location: "Jakarta",
    rating: 5.0,
    text: "Paling suka bagian catatan pengeluaran dan laporan bulanan. Jadi tahu untung-ruginya, dan bisa atur strategi jualan lebih gampang.",
    image: "https://i.pravatar.cc/80?img=8",
  },
  {
    name: "Alicia Tania",
    location: "Bandung",
    rating: 4.8,
    text: "Sekarang gak perlu ribet lagi buat laporan harian. Semua sudah otomatis dan rapi. Sangat membantu bisnis kecil seperti saya!",
    image: "https://i.pravatar.cc/80?img=9",
  },
  {
    name: "Budi Santoso",
    location: "Surabaya",
    rating: 4.7,
    text: "Dengan INAmikro, saya bisa kontrol stok dan keuangan lebih mudah. Benar-benar membantu UMKM seperti saya berkembang!",
    image: "https://i.pravatar.cc/80?img=12",
  },
];

export default function TestimonialSection() {
  return (
    <section className="bg-gradient-to-b from-[#ffe6e6] to-white py-24 px-6 md:px-12 overflow-hidden">
      {/* HEADLINE */}
      <div className="text-center max-w-5xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug mb-6">
          Bagaimana INAmikro App Membantu <br /> Bisnis Mereka Bertumbuh?
        </h2>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
          Cerita nyata pelaku UMKM yang kini lebih mudah mengelola usaha, mencatat transaksi, 
          dan memantau keuangan berkat INAmikro.
        </p>
      </div>

      {/* SLIDER OTOMATIS */}
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={900}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-6xl mx-auto"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white border border-[#ffb3b3] rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 h-full">
              {/* Header Card */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{item.name}</h4>
                    <p className="text-sm text-gray-500">{item.location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  <span className="font-semibold text-gray-900">{item.rating}</span>
                  <Star size={16} fill="#FBBF24" stroke="none" />
                </div>
              </div>

              {/* Isi Card */}
              <p className="text-gray-700 text-base leading-relaxed">“{item.text}”</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
