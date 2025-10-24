export default function HeroSection() {
  return (
    <section className="w-full bg-gradient-to-b from-rose-100 to-white">
      {/* Hilangkan pembatas width di elemen background */}
      <div className="w-full flex justify-center">
        {/* Bungkus isi utama agar max-width tetap terjaga di tengah */}
        <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-18 gap-10 md:gap-6">
          
          {/* Kiri - Teks dan Tombol */}
          <div className="flex-[1.2] text-center md:text-left space-y-5 md:space-y-6 md:pr-4">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-gray-900 leading-snug sm:leading-tight max-w-full">
              INAmikro App – <br className="hidden md:block" /> 
              <span className="text-gray-900">Solusi Kasir Pintar untuk UMKM</span>
            </h1>

            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto md:mx-0">
              Didesain khusus untuk membantu pelaku usaha mikro dan menengah mengelola transaksi,
              inventaris, dan laporan keuangan dengan lebih mudah. Bagian dari ekosistem INAmikro
              untuk mendukung pertumbuhan bisnismu.
            </p>

            {/* Tombol Play Store */}
            <div className="flex justify-center md:justify-start">
              <a
                href="#"
                className="inline-flex items-center gap-2 sm:gap-3 bg-red-600 hover:bg-red-700 text-white font-semibold py-2.5 sm:py-3 px-5 sm:px-6 rounded-2xl shadow-md transition-all duration-300 text-sm sm:text-base"
              >
                <img
                  src="/inamikroapp/gp1.png"
                  alt="Tampilan Aplikasi INAmikro"
                  className="w-5 h-5 sm:w-6 sm:h-6"
                />
                <span>Dapatkan di Google Play</span>
              </a>
            </div>
          </div>

          {/* Kanan - Gambar HP */}
          <div className="flex-[0.8] flex justify-center md:justify-end">
            <img 
              src="/inamikroapp/product1.png" 
              alt="Tampilan Aplikasi INAmikro" 
              className="w-64 sm:w-80 md:w-[620px] drop-shadow-2xl transition-all duration-300 object-contain"
            /> 
          </div> 
        </div>
      </div>
    </section>
  );
}
