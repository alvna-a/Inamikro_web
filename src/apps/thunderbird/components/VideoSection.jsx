export default function VideoSection() {
  return (
    <section className="flex justify-center py-12">
      <div className="w-[90%] max-w-4xl rounded-xl overflow-hidden shadow-lg">
        <iframe
          className="w-full aspect-video rounded-xl"
          src="https://www.youtube.com/embed/MH8QzuJ025o"
          title="Sekolah Bisnis Online Thunderbird"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}
