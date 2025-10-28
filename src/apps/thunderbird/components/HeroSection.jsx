export default function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-center h-[480px] flex items-center px-10"
      style={{ backgroundImage: "url('/thunderbird/image1.png')" }}
    >
      <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px]"></div>
      <div className="relative z-10 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight">
          Thunderbird – Tempat Inovasi <br /> Berkembang dengan Cepat
        </h1>
        <p className="text-gray-700 mt-3 text-lg">
          Kekuatan, gerak, dan kecerdasan menyatu menjadi platform premium yang
          dirancang untuk transformasi cepat.
        </p>
        <button className="mt-6 px-6 py-3 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition">
          Program Kami
        </button>
      </div>
    </section>
  );
}
