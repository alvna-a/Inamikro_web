// src/app/about/page.tsx
import React from "react";
import AboutHeroSection from "./components/AboutHeroSection";
import AboutJourneySection from "./components/AboutJourneySection";
import AboutVisionMissionSection from "./components/AboutVisionMissionSection";
import AboutImpactSection from "./components/AboutImpactSection";

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <AboutJourneySection />
      <AboutVisionMissionSection />
      <AboutImpactSection />
    </>
  );
}