export default function TutorialSection() {
  const videos = [
    {
      title: "Cara Mendaftar",
      id: "DzKEpPDiTyE",
      url: "https://youtu.be/DzKEpPDiTyE",
    },
    {
      title: "Tutorial – Bootcamp",
      id: "RYqqMaIwqp8",
      url: "https://youtu.be/RYqqMaIwqp8",
    },
    {
      title: "Tutorial – Penyelesaian Kursus",
      id: "SNMI5hUXt0U",
      url: "https://youtu.be/SNMI5hUXt0U",
    },
  ];

  return (
    <section className="py-16 bg-white text-center">
      <div className="flex flex-wrap justify-center gap-8">
        {videos.map((vid, i) => (
          <div key={i} className="w-[300px] relative group">
            {/* Embed YouTube Video */}
            <iframe
              className="w-full aspect-video rounded-xl shadow-md"
              src={`https://www.youtube.com/embed/${vid.id}`}
              title={vid.title}
              allowFullScreen
            ></iframe>

            {/* Overlay Link */}
            <a
              href={vid.url}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 rounded-xl z-10"
              title={`Tonton ${vid.title} di YouTube`}
            ></a>

            <p className="mt-3 font-semibold text-gray-800">{vid.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
