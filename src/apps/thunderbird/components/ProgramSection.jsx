export default function ProgramSection() {
  const programs = [
    {
      number: "1",
      title: "Foundational Program",
      desc: "Program untuk pendaftar dengan tingkat pendidikan apa pun",
    },
    {
      number: "2",
      title: "Intermediate Program",
      desc: "Program untuk pendaftar di sekolah menengah atau tingkat pendidikan sarjana",
    },
    {
      number: "3",
      title: "Advanced Program",
      desc: "Program untuk pendaftar lulusan suatu tingkat pendidikan",
    },
  ];

  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-2xl font-bold text-gray-900 mb-10 max-w-3xl mx-auto leading-snug">
        100 Million Learners Global Initiative menawarkan kepada pendaftar tiga
        jalur untuk meningkatkan kemampuan pribadi dan pengembangan profesional
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {programs.map((item, i) => (
          <div
            key={i}
            className="relative bg-white rounded-3xl border border-[#ffc5c5] shadow-[0_8px_20px_-5px_rgba(255,100,100,0.25)] hover:shadow-[0_10px_25px_-5px_rgba(255,80,80,0.35)] transition-all duration-300 w-72 py-10 px-6"
          >
            {/* Ikon Angka */}
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-red-400 to-red-600 mb-4">
              {item.number}
            </div>

            {/* Judul */}
            <h4 className="font-bold text-gray-900 text-lg mb-2">
              {item.title}
            </h4>

            {/* Deskripsi */}
            <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
