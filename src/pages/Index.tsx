
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
import GlowingOrb from "@/components/GlowingOrb";
import { motion } from "framer-motion";

const Index = () => {
  // Set dark mode for modern look
  useEffect(() => {
    document.documentElement.classList.add('dark');
    
    return () => {
      document.documentElement.classList.remove('dark');
    };
  }, []);
  
  // Mouse follower effect with enhanced animations
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const [cursorVisible, setCursorVisible] = useState(false);
  const [cursorEnlarged, setCursorEnlarged] = useState(false);
  const [cursorText, setCursorText] = useState("");
  
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
    
    // Handle interactive elements with enhanced text
    const handleLinkHoverEvents = () => {
      const links = document.querySelectorAll('a, button, [role="button"], input, textarea, select, [data-cursor]');
      
      links.forEach(link => {
        link.addEventListener('mouseenter', () => {
          setCursorEnlarged(true);
          
          // Add text based on element type
          if (link.tagName === 'BUTTON' || link.getAttribute('role') === 'button') {
            setCursorText("Click");
          } else if (link.tagName === 'A') {
            setCursorText(link.getAttribute('href')?.startsWith('#') ? "Scroll" : "Visit");
          } else if (link.tagName === 'INPUT' || link.tagName === 'TEXTAREA') {
            setCursorText("Type");
          } else if (link.hasAttribute('data-cursor')) {
            setCursorText(link.getAttribute('data-cursor') || "");
          }
        });
        
        link.addEventListener('mouseleave', () => {
          setCursorEnlarged(false);
          setCursorText("");
        });
      });
    };
    
    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    handleLinkHoverEvents();
    
    // Listen for secret key combination
    const secretCode = ['j', 'o', 'k', 'e'];
    let position = 0;
    
    const handleKeydown = (e: KeyboardEvent) => {
      // Get the key that was pressed
      const key = e.key.toLowerCase();
      
      // Check if the key matches the secret code at the current position
      if (key === secretCode[position]) {
        position++;
        
        // If we reached the end of the secret code
        if (position === secretCode.length) {
          // Secret code completed, navigate to joke page
          window.location.href = '/joke';
          position = 0;
        }
      } else {
        // Reset if wrong key
        position = 0;
      }
    };
    
    window.addEventListener('keydown', handleKeydown);
    
    // Cleanup
    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('keydown', handleKeydown);
      
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
        <motion.div 
          key={i}
          className="absolute left-0 text-futuristic-purple/10 pointer-events-none"
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
            fontSize: `${size}px`,
          }}
        >
          {Math.random() > 0.5 ? '01' : Math.random() > 0.5 ? '10' : '{}'} 
        </motion.div>
      );
    }
    
    return particles;
  };
  
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      {/* Enhanced RTX-style custom cursor */}
      <motion.div 
        ref={cursorRef} 
        className={`fixed w-8 h-8 rounded-full pointer-events-none z-[9999] mix-blend-difference transition-transform duration-150 ease-out flex items-center justify-center ${
          cursorVisible ? 'opacity-100' : 'opacity-0'
        } ${
          cursorEnlarged ? 'scale-[2.5]' : 'scale-100'
        }`}
        style={{
          background: 'rgba(155, 135, 245, 0.2)',
          backdropFilter: 'blur(4px)',
          border: '1px solid rgba(155, 135, 245, 0.3)'
        }}
      >
        {cursorText && (
          <span className="text-[8px] font-medium text-white">{cursorText}</span>
        )}
      </motion.div>
      <motion.div 
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
      
      {/* Hint for secret page */}
      <motion.div 
        className="fixed bottom-4 left-4 z-20 text-xs text-white/30 font-mono"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.3, 0] }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          repeatDelay: 20
        }}
      >
        Type "joke" for a surprise...
      </motion.div>
      
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
