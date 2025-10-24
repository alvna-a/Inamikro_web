import React from "react";

export default function Kebijakan() {
  return (
    <div className="bg-white min-h-screen">
      <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between py-12 px-4 sm:px-6 md:px-8 text-center md:text-left">
        
        <div className="order-1 md:order-2 md:w-1/3 flex justify-center md:justify-end mb-6 md:mb-0">
          <img
            src="/kebijakan/icon.png"
            alt="Logo"
            className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 object-contain"
          />
        </div>

        <div className="order-2 md:order-1 md:w-2/3 space-y-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug">
            Kebijakan PT Mikrobisnis <br className="hidden md:block" /> Digital Sejahtera
          </h1>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            Kami menghargai kepercayaan Anda. Berikut cara kami melindungi dan mengelola informasi Anda dengan transparan dan bertanggung jawab.
          </p>
        </div>
      </section>

      <section className="w-full bg-[#F8F9FA] py-10 sm:py-14">
        <div className="max-w-6xl mx-auto flex flex-col items-start gap-y-4 px-4 sm:px-6 md:px-8 text-sm sm:text-base leading-relaxed text-gray-700">
          <p>
            PT. Mikrobisnis Digital Sejahtera mengoperasikan situs web <strong>inamikro.id</strong>, yang menyediakan LAYANAN.
          </p>
          <p>
            Halaman ini digunakan untuk memberi tahu pengunjung situs web mengenai kebijakan kami tentang pengumpulan, penggunaan, dan pengungkapan informasi pribadi jika ada yang memutuskan untuk menggunakan layanan kami.
          </p>
          <p>
            Dengan menggunakan layanan kami, Anda setuju dengan pengumpulan dan penggunaan informasi sesuai kebijakan ini. Informasi pribadi yang kami kumpulkan digunakan untuk menyediakan dan meningkatkan layanan. Kami tidak akan membagikan informasi Anda kepada siapa pun kecuali sebagaimana dijelaskan dalam Kebijakan Privasi ini.
          </p>
          <p>
            Istilah-istilah dalam Kebijakan Privasi ini memiliki arti yang sama seperti dalam Syarat dan Ketentuan kami, yang dapat diakses di <strong>inamikro.id</strong>, kecuali jika didefinisikan lain di sini.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 mt-10 sm:mt-12 pb-16 space-y-6 sm:space-y-8">
        {[
          {
            title: "Pengumpulan dan Penggunaan Informasi",
            text: `Untuk pengalaman yang lebih baik saat menggunakan layanan kami, kami mungkin meminta Anda untuk memberikan informasi pribadi seperti nama, nomor telepon, dan alamat. Informasi ini digunakan untuk menghubungi atau mengidentifikasi Anda.`,
          },
          {
            title: "Data Log",
            text: `Setiap kali Anda mengunjungi layanan kami, kami mengumpulkan informasi yang dikirimkan browser Anda, seperti alamat IP, versi browser, halaman yang dikunjungi, waktu dan tanggal kunjungan, serta statistik lainnya.`,
          },
          {
            title: "Cookie",
            text: `Cookie adalah file kecil berisi data anonim yang dikirim ke browser Anda dari situs yang dikunjungi. Kami menggunakan cookie untuk meningkatkan layanan kami. Anda dapat memilih untuk menolak cookie, tetapi beberapa bagian situs mungkin tidak berfungsi sepenuhnya.`,
          },
          {
            title: "Penyedia Layanan",
            text: `Kami dapat mempekerjakan pihak ketiga untuk membantu memfasilitasi layanan kami. Mereka memiliki akses ke informasi pribadi Anda hanya untuk melaksanakan tugas atas nama kami dan wajib tidak menggunakannya untuk tujuan lain.`,
          },
          {
            title: "Keamanan",
            text: `Kami menggunakan cara yang wajar secara komersial untuk melindungi informasi pribadi Anda, namun perlu diingat tidak ada sistem yang 100% aman.`,
          },
          {
            title: "Tautan ke Situs Lain",
            text: `Layanan kami mungkin berisi tautan ke situs lain. Kami tidak bertanggung jawab atas kebijakan privasi situs pihak ketiga tersebut dan menyarankan Anda meninjau kebijakan mereka.`,
          },
          {
            title: "Privasi Anak-Anak",
            text: `Kami tidak mengumpulkan informasi pribadi dari anak di bawah 13 tahun. Jika diketahui, kami akan segera menghapusnya. Jika Anda adalah orang tua dan mengetahui hal ini, silakan hubungi kami.`,
          },
          {
            title: "Perubahan Kebijakan Privasi",
            text: `Kami dapat memperbarui kebijakan ini dari waktu ke waktu. Perubahan akan diberitahukan dengan memposting versi baru di halaman ini.`,
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-500 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 border-b border-gray-200 pb-2">
              {item.title}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed whitespace-pre-line">
              {item.text}
            </p>
          </div>
        ))}
      </section>

      <section className="max-w-6xl mx-auto flex flex-col items-start gap-y-3 sm:gap-y-4 px-4 sm:px-6 md:px-8 mb-16 text-sm sm:text-base text-gray-700 leading-relaxed">
        <p>
          Kebijakan Privasi kami dibuat dengan bantuan Template Kebijakan Privasi.
        </p>
        <p>
          Jika Anda memiliki pertanyaan atau saran tentang Kebijakan Privasi kami, jangan ragu untuk menghubungi kami.
        </p>
      </section>
    </div>
  );
}
