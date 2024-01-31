import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectSection from "@/components/ProjectSection";
import SkillsSection from "@/components/SkillsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] scroll-smooth">
      <Navbar />
      <div className="container mx-auto px-12 py-10 mt-24">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectSection />
      </div>
    </main>
  );
}
