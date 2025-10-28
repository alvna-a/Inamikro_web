export default function JoinSection() {
  return (
    <section className="text-center bg-gray-50 py-12 px-6">
      <div className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
        <p>
          Pendaftar akan mendapatkan badge untuk setiap kursus digital yang mereka selesaikan dengan memuaskan dan sertifikat jika mereka berhasil menyelesaikan semuanya kursus dalam suatu program. Pendaftar baru yang berhasil menyelesaikan program menengah atau lanjutan dengan memuaskan dapat mengajukan kredit akademik, yang dapat digunakan untuk menyelesaikan gelar di Thunderbird/ASU, dan hampir semua universitas di seluruh dunia.
          Bergabunglah dengan Najafi 100 Million Learners Global Initiative bersama INAmikro dan jadilah bagian dari gerakan global untuk meningkatkan akses pendidikan bagi jutaan orang!
        </p>
      </div>

      <div className="flex justify-center gap-6 mt-10 flex-wrap">
        {["Daftar Disini", "Press Release", "Akses Course"].map((btn, i) => (
          <button
            key={i}
            className="px-8 py-3 bg-red-500 text-white rounded-full font-semibold hover:bg-red-600 transition"
          >
            {btn}
          </button>
        ))}
      </div>
    </section>
  );
}
