import HeroSection from "./HeroSection";
import VideoSection from "./VideoSection";
import DescriptionSection from "./DescriptionSection";
import ProgramSection from "./ProgramSection";
import JoinSection from "./JoinSection";
import TutorialSection from "./TutorialSection";

function Thunderbird() {
  return (
    <div className="w-full overflow-hidden font-sans">
      <HeroSection />
      <VideoSection />
      <DescriptionSection />
      <ProgramSection />
      <JoinSection />
      <TutorialSection />
    </div>
  );
}

export default Thunderbird;
