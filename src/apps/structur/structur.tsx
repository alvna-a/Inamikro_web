// src/apps/struktur/page.tsx
import React from "react";
import StrukturHeroSection from "./components/StrukturHeroSection";
import StrukturOrgChart from "./components/StrukturOrgChart";
import StrukturTeamGrid from "./components/StrukturTeamGrid";
import { strukturData } from "./data/strukturData";

const StrukturPage = () => {
  return (
    <div className="font-poppins">
      <StrukturHeroSection/>
      <StrukturOrgChart />
      <StrukturTeamGrid members={strukturData.teamMembers} />
    </div>
  );
};

export default StrukturPage;
