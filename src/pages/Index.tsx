
import { useEffect, useState, useRef } from "react";
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
  
  // Mouse follower effect
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const [cursorVisible, setCursorVisible] = useState(false);
  const [cursorEnlarged, setCursorEnlarged] = useState(false);
  
  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      if (cursorRef.current && cursorDotRef.current) {
        // Main cursor follows with slight delay for smooth feel
        cursorRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0) translate(-50%, -50%)`;
        
        // Dot cursor follows immediately
        cursorDotRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0) translate(-50%, -50%)`;
      }
    };
    
    const handleMouseEnter = () => {
      setCursorVisible(true);
    };
    
    const handleMouseLeave = () => {
      setCursorVisible(false);
    };
    
    // Handle interactive elements
    const handleLinkHoverEvents = () => {
      const links = document.querySelectorAll('a, button, [role="button"], input, textarea, select, [data-cursor]');
      
      links.forEach(link => {
        link.addEventListener('mouseenter', () => setCursorEnlarged(true));
        link.addEventListener('mouseleave', () => setCursorEnlarged(false));
      });
    };
    
    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    handleLinkHoverEvents();
    
    // Cleanup
    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      
      const links = document.querySelectorAll('a, button, [role="button"], input, textarea, select, [data-cursor]');
      links.forEach(link => {
        link.removeEventListener('mouseenter', () => setCursorEnlarged(true));
        link.removeEventListener('mouseleave', () => setCursorEnlarged(false));
      });
    };
  }, []);
  
  // Background floating data elements effect
  const generateDataParticles = () => {
    const particles = [];
    const numParticles = 15;
    
    for (let i = 0; i < numParticles; i++) {
      const delay = Math.random() * 20;
      const duration = 15 + Math.random() * 30;
      const size = 20 + Math.random() * 40;
      const top = Math.random() * 100;
      
      particles.push(
        <div 
          key={i}
          className="absolute left-0 text-futuristic-purple/10 pointer-events-none"
          style={{
            top: `${top}vh`,
            fontSize: `${size}px`,
            animation: `dataStream ${duration}s linear ${delay}s infinite`,
            opacity: 0
          }}
        >
          {Math.random() > 0.5 ? '01' : Math.random() > 0.5 ? '10' : '{}'} 
        </div>
      );
    }
    
    return particles;
  };
  
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      {/* RTX-style custom cursor */}
      <div 
        ref={cursorRef} 
        className={`fixed w-8 h-8 rounded-full pointer-events-none z-[9999] mix-blend-difference transition-transform duration-150 ease-out ${
          cursorVisible ? 'opacity-100' : 'opacity-0'
        } ${
          cursorEnlarged ? 'scale-[2.5]' : 'scale-100'
        }`}
        style={{
          background: 'rgba(155, 135, 245, 0.2)',
          backdropFilter: 'blur(4px)',
          border: '1px solid rgba(155, 135, 245, 0.3)'
        }}
      />
      <div 
        ref={cursorDotRef} 
        className={`fixed w-2 h-2 bg-futuristic-purple rounded-full pointer-events-none z-[9999] ${
          cursorVisible ? 'opacity-100' : 'opacity-0'
        }`}
      />
      
      {/* Background elements */}
      <div className="fixed inset-0 z-0 opacity-50 pointer-events-none">
        <GlowingOrb />
      </div>
      
      {/* Floating data background elements */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {generateDataParticles()}
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
