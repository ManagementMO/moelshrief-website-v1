
import { useEffect, useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsMarquee from "@/components/SkillsMarquee";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ThemeToggle from "@/components/ThemeToggle";
import { motion } from "framer-motion";

const Index = () => {
  // Scroll reveal functionality
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal, .reveal-sequential');
    
    const reveal = () => {
      revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', reveal);
    // Initial check on load
    reveal();
    
    return () => window.removeEventListener('scroll', reveal);
  }, []);
  
  // Background floating data elements effect (simplified)
  const generateDataParticles = () => {
    const particles = [];
    const numParticles = 8; // Reduced for better performance
    
    for (let i = 0; i < numParticles; i++) {
      const delay = Math.random() * 20;
      const duration = 15 + Math.random() * 30;
      const top = Math.random() * 100;
      
      particles.push(
        <motion.div 
          key={i}
          className="absolute left-0 text-primary/5 dark:text-primary/10 pointer-events-none"
          initial={{
            top: `${top}vh`,
            opacity: 0
          }}
          animate={{
            left: ['0vw', '100vw'],
            opacity: [0, 0.2, 0]
          }}
          transition={{
            duration: duration,
            delay: delay,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            fontSize: `${20 + Math.random() * 30}px`,
          }}
        >
          {Math.random() > 0.5 ? '01' : Math.random() > 0.5 ? '10' : '{}'} 
        </motion.div>
      );
    }
    
    return particles;
  };
  
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden transition-colors duration-300">
      {/* Theme toggle */}
      <ThemeToggle />
      
      {/* Background elements */}
      <div className="fixed inset-0 z-0 opacity-50 pointer-events-none">
        {/* Reduced number of background elements */}
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
          <SkillsMarquee />
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
