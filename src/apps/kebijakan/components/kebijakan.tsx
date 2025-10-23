import React from "react";

export default function Kebijakan() {
  return (
    <div className="bg-white min-h-screen">
      <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between py-16 px-6 md:px-8">
        <div className="md:w-2/3 space-y-4">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug">
            Kebijakan PT Mikrobisnis <br /> Digital Sejahtera
          </h1>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-xl">
            Kami menghargai kepercayaan Anda. Berikut cara kami melindungi dan mengelola informasi Anda dengan transparan dan bertanggung jawab.
          </p>
        </div>

        <div className="md:w-1/3 flex justify-center md:justify-end mt-10 md:mt-0">
            <img
              src="/kebijakan/icon.png"
              alt="Logo"
              className="w-36 h-36 md:w-40 md:h-40 object-contain"
            />
        </div>
      </section>

      <section className="w-full bg-[#F8F9FA] py-16">
        <div className="max-w-6xl mx-auto flex flex-col items-start gap-y-4 px-6 md:px-8">    
            <p>
                PT. Mikrobisnis Digital Sejahtera mengoperasikan situs web inamikro.id,yang menyediakan LAYANAN.
            </p>
            <p>
                Halaman ini digunakan untuk memberi tahu pengunjung situs web mengenai 
                kebijakan kami tentang pengumpulan, penggunaan, dan pengungkapan informasi 
                Pribadi jika ada yang memutuskan untuk menggunakan Layanan kami di situs web INAmikro.
            </p>
            <p>
                Jika Anda memilih untuk menggunakan Layanan kami, maka Anda setuju dengan pengumpulan 
                dan penggunaan informasi terkait kebijakan ini. Informasi Pribadi yang kami kumpulkan 
                digunakan untuk menyediakan dan meningkatkan Layanan. Kami tidak akan menggunakan atau 
                membagikan informasi Anda kepada siapa pun kecuali sebagaimana dijelaskan dalam Kebijakan Privasi ini.
            </p>
            <p>
                Istilah-istilah yang digunakan dalam Kebijakan Privasi ini memiliki arti yang sama seperti dalam Syarat dan Ketentuan kami, 
                yang dapat diakses di inamikro.id, kecuali jika didefinisikan lain dalam Kebijakan Privasi ini.
            </p>
        </div>
      </section>

      {/* Section Cards */}
        <section className="max-w-6xl mx-auto px-6 md:px-8 mt-12 pb-20 space-y-8">
        {[
            {
            title: "Pengumpulan dan Penggunaan Informasi",
            text: `Untuk pengalaman yang lebih baik saat menggunakan Layanan kami, kami mungkin meminta Anda untuk memberikan kami informasi pribadi tertentu, termasuk tetapi tidak terbatas pada nama, nomor telepon, dan alamat pos Anda. Informasi yang kami kumpulkan akan digunakan untuk menghubungi atau mengidentifikasi Anda.`,
            },
            {
            title: "Data Log",
            text: `Kami ingin memberi tahu Anda bahwa setiap kali Anda mengunjungi Layanan kami, kami mengumpulkan informasi yang dikirimkan browser Anda kepada kami yang disebut Data Log. Data Log ini mungkin termasuk informasi seperti alamat Protokol Internet (IP) komputer Anda, versi browser, halaman Layanan kami yang Anda kunjungi, waktu dan tanggal kunjungan Anda, waktu yang dihabiskan di halaman-halaman tersebut, dan statistik lainnya.`,
            },
            {
            title: "Cookie",
            text: `Cookie adalah file dengan sejumlah kecil data yang biasanya digunakan sebagai pengenal unik anonim. Ini dikirimkan ke browser Anda dari situs web yang Anda kunjungi dan disimpan di hard drive komputer Anda.
            Situs web kami menggunakan “cookie” ini untuk mengumpulkan informasi dan untuk meningkatkan Layanan kami. Anda memiliki opsi untuk menerima atau menolak cookie ini, dan mengetahui kapan cookie dikirimkan ke komputer Anda. Jika Anda memilih untuk menolak cookie kami, Anda mungkin tidak dapat menggunakan beberapa bagian dari Layanan kami.`,
            },
            {
            title: "Penyedia Layanan",
            text: `Kami dapat mempekerjakan perusahaan dan individu pihak ketiga karena alasan berikut:
            Untuk memfasilitasi Layanan kami;
            Untuk menyediakan Layanan atas nama kami;
            Untuk melakukan layanan terkait Layanan; atau
            Untuk membantu kami dalam menganalisis bagaimana Layanan kami digunakan.

            Kami ingin memberi tahu pengguna Layanan kami bahwa pihak ketiga ini memiliki akses ke Informasi Pribadi Anda. Alasan utamanya adalah untuk melakukan tugas-tugas yang diberikan kepada mereka atas nama kami. Namun, mereka berkewajiban untuk tidak mengungkapkan atau menggunakan informasi tersebut untuk tujuan lain apa pun.`,
            },
            {
            title: "Keamanan",
            text: `Kami menghargai kepercayaan Anda dalam memberikan kami Informasi Pribadi Anda, sehingga kami berusaha menggunakan cara yang dapat diterima secara komersial untuk melindunginya. Tetapi ingatlah bahwa tidak ada metode transmisi melalui internet, atau metode penyimpanan elektronik yang 100% aman dan andal, dan kami tidak dapat menjamin keamanan mutlaknya.`,
            },
            {
            title: "Tautan ke Situs Lain",
            text: `Layanan kami mungkin berisi tautan ke situs lain. Jika Anda mengklik tautan pihak ketiga, Anda akan diarahkan ke situs tersebut. Perlu diketahui bahwa situs eksternal ini tidak dioperasikan oleh kami. Oleh karena itu, kami sangat menyarankan Anda untuk meninjau Kebijakan Privasi dari situs web ini. Kami tidak memiliki kendali atas, dan tidak bertanggung jawab atas konten, kebijakan privasi, atau praktik situs atau layanan pihak ketiga mana pun.`,
            },
            {
            title: "Privasi Anak-Anak",
            text: `Layanan kami tidak menangani siapa pun yang berusia di bawah 13 tahun. Kami tidak dengan sengaja mengumpulkan informasi pribadi yang dapat diidentifikasi dari anak-anak di bawah 13 tahun. Jika kami menemukan bahwa seorang anak di bawah 13 tahun telah memberikan kami informasi pribadi, kami segera menghapusnya dari server kami. Jika Anda adalah orang tua atau wali dan Anda menyadari bahwa anak Anda telah memberikan kami informasi pribadi, silakan hubungi kami sehingga kami dapat melakukan tindakan yang diperlukan.`,
            },
            {
            title: "Perubahan Kebijakan Privasi",
            text: `Kami dapat memperbarui Kebijakan Privasi kami dari waktu ke waktu. Oleh karena itu, kami menyarankan Anda untuk meninjau halaman ini secara berkala untuk setiap perubahan. Kami akan memberi tahu Anda tentang perubahan apa pun dengan memposting Kebijakan Privasi baru di halaman ini. Perubahan ini berlaku segera setelah diposting di halaman ini.`,
            },
        ].map((item, index) => (
            <div
            key={index}
            className="bg-white border-2 border-gray-500 rounded-2xl p-6 shadow-sm"
            >
            <h2 className="text-xl font-semibold text-gray-800 mb-2 pb-2 border-b border-gray-200">
                {item.title}
            </h2>
            <p className="text-gray-600 leading-relaxed">{item.text}</p>
            </div>
        ))}
        </section>

      <section className="max-w-6xl mx-auto flex flex-col items-start gap-y-4 px-6 md:px-8 mb-16">    
            <p>
                Kebijakan Privasi kami dibuat dengan bantuan Template Kebijakan Privasi.
            </p>
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
