import React from "react";

interface TeamCardProps {
  name: string;
  position: string;
  image: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ name, position, image }) => (
  <div
    className="
      flex flex-col items-center 
      bg-white 
      rounded-2xl 
      shadow-[0_4px_12px_rgba(0,0,0,0.08)] 
      p-4 
      w-[160px] sm:w-[180px] md:w-[200px] lg:w-[240px] xl:w-[260px]
      transition-transform hover:scale-105 duration-300
    "
  >
    <div className="bg-[#F43F5E] w-full aspect-[3/3.5] rounded-xl overflow-hidden mb-4">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover object-top"
      />
    </div>
    <h3 className="text-sm md:text-base lg:text-lg font-semibold text-center">
      {name}
    </h3>
    <p className="text-[11px] md:text-xs lg:text-sm text-gray-600 text-center leading-tight">
      {position}
    </p>
  </div>
);

export default TeamCard;
