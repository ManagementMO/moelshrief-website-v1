
import { useEffect, useRef } from "react";
import { FuturisticButton } from "./ui/futuristic-button";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const floatingElementsRef = useRef<HTMLDivElement>(null);

  // Parallax effect for floating elements
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!floatingElementsRef.current || !containerRef.current) return;
      
      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      
      // Get mouse position relative to container
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Calculate movement based on mouse position
      const moveX = (x - rect.width / 2) / 25;
      const moveY = (y - rect.height / 2) / 25;
      
      // Apply the transform to floating elements
      Array.from(floatingElementsRef.current.children).forEach((elem, index) => {
        const htmlElem = elem as HTMLElement;
        const depth = Number(htmlElem.getAttribute('data-depth')) || 1;
        htmlElem.style.transform = `translate(${moveX * depth}px, ${moveY * depth}px)`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-background"></div>
      
      {/* Floating elements */}
      <div ref={floatingElementsRef} className="absolute inset-0 pointer-events-none">
        {/* Data visualization elements that float and glow */}
        <div data-depth="2" className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-futuristic-purple/10 backdrop-blur-sm animate-float"></div>
        <div data-depth="1.5" className="absolute top-1/3 right-1/4 w-20 h-20 rounded-full bg-futuristic-blue/10 backdrop-blur-sm animate-float" style={{ animationDelay: '-2s' }}></div>
        <div data-depth="1" className="absolute bottom-1/4 left-1/3 w-16 h-16 rounded-full bg-futuristic-purple/20 backdrop-blur-sm animate-float" style={{ animationDelay: '-4s' }}></div>
        <div data-depth="2.5" className="absolute top-2/3 right-1/3 w-24 h-24 rounded-full bg-futuristic-blue/20 backdrop-blur-sm animate-pulse-glow" style={{ animationDelay: '-1s' }}></div>
        
        {/* Data visualization lines */}
        <div data-depth="1.8" className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-futuristic-purple/30 to-transparent"></div>
        <div data-depth="1.2" className="absolute top-[45%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-futuristic-blue/20 to-transparent"></div>
        <div data-depth="1.5" className="absolute top-[55%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-futuristic-purple/20 to-transparent"></div>
      </div>
      
      {/* Hero content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1 glass-effect rounded-full mb-6 text-sm">
            Data Engineer & Analyst
          </span>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-glow">
            Transforming <span className="text-futuristic-purple">Data</span> Into Actionable <span className="text-futuristic-blue">Insights</span>
          </h1>
          
          <p className="text-xl opacity-80 mb-8">
            I design and build data pipelines that empower businesses to make data-driven decisions. 
            Specialized in modern data engineering, analytics, and machine learning.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <FuturisticButton 
              variant="primary" 
              size="lg" 
              glowEffect
              onClick={() => document.getElementById('projects')?.scrollIntoView()}
            >
              View Projects
            </FuturisticButton>
            
            <FuturisticButton 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView()}
            >
              Get In Touch
            </FuturisticButton>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm mb-2">Scroll Down</span>
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
