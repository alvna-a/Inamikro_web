import React from "react";

const AboutVisionMissionSection = () => {
  return (
    <section className="bg-[#FDE8E8] py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
        {/* VISI */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Visi Kami</h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-base md:text-lg">
            Menjadi mitra terpercaya dalam mendukung transformasi digital dan finansial pelaku usaha mikro di Indonesia, untuk mewujudkan UMKM yang mandiri, berdaya saing, dan berkontribusi pada Indonesia Emas 2045.
          </p>
          <div className="flex flex-col gap-4">
            <img
              src="/about/visimisi1.jpg"
              alt="Visi INAmikro"
              className="rounded-xl shadow-md object-cover w-full h-48 md:h-52"
            />
            <img
              src="/about/visimisi3.jpg"
              alt="Visi INAmikro"
              className="rounded-xl shadow-md object-cover w-full h-48 md:h-52"
            />
            <img
              src="/about/visimisi4.jpg"
              alt="Visi INAmikro"
              className="rounded-xl shadow-md object-cover w-full h-48 md:h-52"
            />
          </div>
        </div>
        {/* MISI */}
        <div>
          <img
            src="/about/visimisi2.jpg"
            alt="Misi INAmikro"
            className="rounded-xl shadow-md object-cover w-full h-52 mb-8 md:mb-10"
          />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Misi Kami</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-4 text-base md:text-lg">
            <li>
              <span className="font-bold">Meningkatkan Literasi Digital &amp; Finansial</span> <br />
              Membekali pelaku usaha mikro dengan keterampilan digital, pemasaran online, dan manajemen keuangan modern.
            </li>
            <li>
              <span className="font-bold">Memperluas Legalitas Usaha</span> <br />
              Mendampingi pelaku usaha dalam pengurusan legalitas, dan perizinan usaha.
            </li>
            <li>
              <span className="font-bold">Membangun Jejaring &amp; Kolaborasi</span> <br />
              Menghubungkan pelaku UMKM dengan pemerintah, universitas, swasta, dan komunitas untuk memperkuat ekosistem usaha.
            </li>
            <li>
              <span className="font-bold">Mendorong Pertumbuhan &amp; Kemandirian</span> <br />
              Membantu pelaku usaha mikro naik kelas menjadi usaha kecil, menengah, bahkan besar melalui pelatihan, mentoring, dan inovasi.
            </li>
            <li>
              <span className="font-bold">Menghadirkan Dampak Nyata</span> <br />
              Menyediakan program pelayanan yang berdampak langsung, inklusif, dan berkelanjutan bagi kesejahteraan pelaku UMKM.
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default AboutVisionMissionSection;
