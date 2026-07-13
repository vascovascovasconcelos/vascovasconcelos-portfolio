import HomeExperience from "@/components/HomeExperience";
import IntroSection from "@/components/sections/IntroSection";
import WorksSection from "@/components/sections/WorksSection";
import AboutSection from "@/components/sections/AboutSection";

export default function Home() {
  return (
    <main className="bg-paper">
      <HomeExperience>
        <IntroSection />
        <WorksSection />
        <AboutSection />
      </HomeExperience>
    </main>
  );
}
