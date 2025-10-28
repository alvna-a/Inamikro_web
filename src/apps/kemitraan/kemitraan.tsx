import React from "react";
import {
  HeroSection,
  TentangKemitraan,
  KemitraanKami,
} from "./components";

const KemitraanPage = () => {
  return (
    <main className="flex flex-col w-full min-h-screen bg-white">
      <HeroSection />
      <TentangKemitraan />
      <KemitraanKami />
    </main>
  );
};

export default KemitraanPage;
