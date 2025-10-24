import HeroSection from "./HeroSection";
import ShowcaseSection from "./ShowcaseSection";
import BenefitSection from "./BenefitSection";
import TestimonialSection from "./TestimonialSection";
import DownloadSection from "./DownloadSection";

export default function InamikroApp() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ShowcaseSection />
      <BenefitSection />
      <TestimonialSection />
      <DownloadSection />
    </div>
  );
}
