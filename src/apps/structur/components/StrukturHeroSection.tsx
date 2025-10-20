// src/apps/struktur/components/StrukturHeroSection.tsx
import React from "react";

interface HeroProps {
  title: string;
  description: string;
  image: string;
  name: string;
  position: string;
}

const StrukturHeroSection: React.FC<HeroProps> = ({
  title,
  description,
  image,
  name,
  position,
}) => {
  return (
    <section className="bg-pinkBrand/20 py-16 px-6 flex flex-col md:flex-row items-center justify-center text-center md:text-left">
      <img
        src={image}
        alt={name}
        className="rounded-2xl w-64 h-80 object-cover shadow-lg mb-6 md:mb-0 md:mr-10"
      />
      <div className="max-w-xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
        <p className="text-gray-700 mb-4">{description}</p>
        <p className="font-semibold text-lg">{name}</p>
        <p className="text-sm text-gray-600">{position}</p>
      </div>
    </section>
  );
};

export default StrukturHeroSection;
