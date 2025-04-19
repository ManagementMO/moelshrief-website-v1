
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import GlowingOrb from "@/components/GlowingOrb";

const Index = () => {
  // Set dark mode for modern look
  useEffect(() => {
    document.documentElement.classList.add('dark');
    
    return () => {
      document.documentElement.classList.remove('dark');
    };
  }, []);
  
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      {/* Background element */}
      <div className="fixed inset-0 z-0 opacity-40 pointer-events-none">
        <GlowingOrb />
      </div>
      
      {/* Noise texture overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-noise opacity-5"></div>
      
      {/* Main content */}
      <div className="relative z-10">
        <Navbar />
        
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <ContactSection />
        </main>
        
        <Footer />
        <BackToTop />
      </div>
    </div>
  );
};

export default Index;
