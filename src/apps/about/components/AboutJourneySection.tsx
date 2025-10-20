import React from "react";

const AboutJourneySection = () => {
  return (
    <section className="py-20 bg-white text-center">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          Cerita Perjalanan Kami
        </h2>
        <p className="text-gray-600 mb-8">
          Dari 2017 hingga kini, langkah kecil kami bersama UMKM jadi dampak
          besar untuk Indonesia.
        </p>
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <iframe
            className="w-full aspect-video"
            src="https://www.youtube.com/embed/8u-2bEigNBA"
            title="Profil INAmikro"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default AboutJourneySection;
