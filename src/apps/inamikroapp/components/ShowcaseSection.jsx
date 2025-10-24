

export default function ShowcaseSection() {
  return (
    <section className="py-18 bg-white text-center relative overflow-hidden mb-24 md:mb-32">
      <div className="max-w-8xl mx-auto px-6">
        {/* Judul dan Deskripsi */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight max-w-4xl mx-auto text-center mb-8">
          Urus Bisnis Jadi Lebih Mudah, Cepat, dan Aman
        </h2>
        <p className="text-gray-600 text-base md:text-lg mb-16 max-w-2xl mx-auto leading-relaxed">
          INAmikro Apps hadir untuk mendukung pelaku usaha mikro mengelola transaksi, stok,
          dan karyawan dengan cara yang lebih cerdas.
        </p>

        {/* Showcase Gambar HP */}
        <div className="flex justify-center relative items-end">
          {/* Kiri */}
          <img
            src="/inamikroapp/product3.png"
            alt="Kasir Cepat"
            className="w-[395px] md:w-[460px] transform translate-x-10 md:translate-x-20 scale-95 z-0"
          />

          {/* Tengah */}
          <img
            src="/inamikroapp/product2.png"
            alt="Dashboard Utama"
            className="w-[430px] md:w-[490px] relative z-10 -mx-8 md:-mx-12"
          />

          {/* Kanan */}
          <img
            src="/inamikroapp/product4.png"
            alt="Kasir Pintar"
            className="w-[345px] md:w-[435px] transform -translate-x-10 md:-translate-x-20 scale-95 z-0"
          />
        </div>
      </div>
    </section>
  );
}
