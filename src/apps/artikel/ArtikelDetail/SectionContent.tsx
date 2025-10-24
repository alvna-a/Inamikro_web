import React from "react";

const SectionContent: React.FC = () => {
  return (
    <section className="relative py-16 px-4 md:px-0 bg-gradient-to-l from-[#fff3f3] via-[#ffecec] to-[#fbe4e4]">
      <div className="absolute top-0 left-0 w-full h-6 bg-gradient-to-b from-black/10 to-transparent z-10"></div>

      {/* Card putih di tengah */}
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-[0_8px_25px_rgba(0,0,0,0.08)] overflow-hidden relative">
        {/* Konten utama */}
        <div className="relative z-20 px-6 md:px-10 py-10 md:py-14">
          <p className="text-gray-700 mb-8 text-base md:text-lg leading-relaxed">
            Setiap bisnis ingin omzet terus naik, namun kuncinya adalah strategi
            yang tepat dan konsisten. Berikut adalah cara sederhana untuk
            mewujudkannya:
          </p>

          <ol className="list-decimal ml-5 text-gray-800 space-y-6 text-base md:text-lg leading-relaxed">
            <li>
              <strong>Perkuat Pelanggan Setia (Retention)</strong>
              <br />
              Fokus pada pelanggan yang sudah ada (existing customers) karena
              mereka lebih murah dipertahankan daripada mencari yang baru.
              Berikan program loyalitas atau diskon eksklusif untuk mendorong
              repeat order dan upselling (average order value).
            </li>

            <li>
              <strong>Digitalisasi Total Titik Penjualan</strong>
              <br />
              Pastikan proses transaksi secepat dan semudah mungkin. Gunakan
              aplikasi POS untuk pencatatan akurat dan sediakan berbagai metode
              pembayaran digital (QRIS, virtual account) untuk mengurangi
              pembatalan transaksi (cart abandonment).
            </li>

            <li>
              <strong>Eksplorasi Saluran Penjualan Baru</strong>
              <br />
              Jangan hanya mengandalkan satu channel. Terapkan strategi
              omnichannel dengan berjualan di e-commerce, social commerce
              (seperti TikTok Shop), dan optimalkan toko fisik melalui Google My
              Business untuk memperluas jangkauan.
            </li>

            <li>
              <strong>Tingkatkan Nilai Transaksi Rata-Rata (AOV)</strong>
              <br />
              Buat pelanggan membelanjakan lebih banyak dalam sekali beli.
              Caranya: tawarkan bundling produk (paket hemat) atau berikan diskon
              bersyarat (misalnya, gratis ongkir di atas nominal tertentu).
            </li>

            <li>
              <strong>Analisis Data dan Ulangi Keberhasilan</strong>
              <br />
              Ukur apa yang Anda lakukan. Lakukan evaluasi bulanan pada produk
              terlaris dan sumber traffic terbaik. Gunakan data untuk
              menggandakan strategi promosi atau produk yang terbukti paling
              efektif di bulan sebelumnya.
            </li>

            <li>
              <strong>Naikkan Harga Berbasis Nilai (Value-Based Pricing)</strong>
              <br />
              Jika kualitas produk, branding, atau layanan purna jual Anda sudah
              meningkat, jangan takut menaikkan harga. Fokus pada nilai yang
              dirasakan pelanggan (misalnya, “lebih premium” atau “lebih cepat”)
              agar mereka merasa kenaikan harga tetap layak.
            </li>
          </ol>

          {/* Gambar di bagian bawah artikel */}
          <div className="mt-10">
            <img
              src="/artikel/pic1.jpg"
              alt="Analisis Bisnis"
              className="w-full rounded-2xl object-cover shadow-[0_4px_15px_rgba(0,0,0,0.05)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionContent;
