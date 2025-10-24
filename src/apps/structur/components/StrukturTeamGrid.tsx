import React from "react";
import TeamCard from "./TeamCard";

interface Member {
  name: string;
  position: string;
  image: string;
}

interface Props {
  members: Member[];
}

const StrukturTeamGrid: React.FC<Props> = ({ members }) => {
  return (
    <section className="py-16 px-6 md:px-20 bg-gradient-to-b from-[#FDE8E8] to-pinkBrand/10">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
        Tim Kami
      </h2>

      <div
        className="
          grid 
          grid-cols-2 
          sm:grid-cols-3 
          md:grid-cols-4 
          lg:grid-cols-4 
          xl:grid-cols-4
          gap-x-4 md:gap-x-6 lg:gap-x-8 
          gap-y-8 md:gap-y-10 
          justify-items-center
          max-w-[1300px] 
          mx-auto
        "
      >
        {members.map((m, i) => (
          <TeamCard key={i} {...m} />
        ))}
      </div>
    </section>
  );
};

export default StrukturTeamGrid;
