import { useEffect, useRef } from "react";
import { FuturisticButton } from "./ui/futuristic-button";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const floatingElementsRef = useRef<HTMLDivElement>(null);
  const textControls = useAnimation();
  const { scrollYProgress } = useScroll();
  
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const headerY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  // Animate text on load
  useEffect(() => {
    const animateText = async () => {
      await textControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" }
      });
    };
    
    animateText();
  }, [textControls]);

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-cyber-bg text-cyber-text"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-background opacity-80"></div>
      
      {/* Floating elements with enhanced 3D effects */}
      <div ref={floatingElementsRef} className="absolute inset-0 pointer-events-none">
        {/* Data visualization elements that float and glow */}
        <motion.div 
          data-depth="2" 
          className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-secondary/10 backdrop-blur-sm animate-pulse-glow-secondary"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        
        <motion.div 
          data-depth="1.5" 
          className="absolute top-1/3 right-1/4 w-20 h-20 rounded-full bg-primary/10 backdrop-blur-sm animate-pulse-glow-primary"
          animate={{
            y: [0, -15, 0],
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        <motion.div 
          data-depth="1" 
          className="absolute bottom-1/4 left-1/3 w-16 h-16 rounded-full bg-secondary/20 backdrop-blur-sm animate-pulse-glow-secondary"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2 
          }}
        />
        
        <motion.div 
          data-depth="2.5" 
          className="absolute top-2/3 right-1/3 w-24 h-24 rounded-full bg-primary/20 backdrop-blur-sm animate-pulse-glow-primary"
          animate={{
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1 
          }}
        />
        
        {/* 3D Data visualization lines */}
        <motion.div 
          data-depth="1.8" 
          className="absolute top-1/2 left-0 w-full h-[1px] shadow-secondary"
          style={{
            background: "linear-gradient(to right, transparent, hsl(var(--secondary) / 0.5), transparent)"
          }}
          animate={{
            opacity: [0.3, 0.7, 0.3],
            boxShadow: [
              "0 0 2px hsl(var(--secondary) / 0.3)",
              "0 0 8px hsl(var(--secondary) / 0.6)",
              "0 0 2px hsl(var(--secondary) / 0.3)"
            ]
          }}
          transition={{ 
            duration: 7, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        
        <motion.div 
          data-depth="1.2" 
          className="absolute top-[45%] left-0 w-full h-[1px] shadow-primary"
          style={{
            background: "linear-gradient(to right, transparent, hsl(var(--primary) / 0.5), transparent)"
          }}
          animate={{
            opacity: [0.2, 0.6, 0.2],
            boxShadow: [
              "0 0 2px hsl(var(--primary) / 0.3)",
              "0 0 8px hsl(var(--primary) / 0.6)",
              "0 0 2px hsl(var(--primary) / 0.3)"
            ]
          }}
          transition={{ 
            duration: 9, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        <motion.div 
          data-depth="1.5" 
          className="absolute top-[55%] left-0 w-full h-[1px] shadow-secondary"
          style={{
            background: "linear-gradient(to right, transparent, hsl(var(--secondary) / 0.5), transparent)"
          }}
          animate={{
            opacity: [0.2, 0.5, 0.2],
            boxShadow: [
              "0 0 2px hsl(var(--secondary) / 0.3)",
              "0 0 8px hsl(var(--secondary) / 0.6)",
              "0 0 2px hsl(var(--secondary) / 0.3)"
            ]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>
      
      {/* Hero content with animated text */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          style={{ opacity: headerOpacity, y: headerY }}
        >
          <motion.span 
            className="inline-block px-4 py-1 glass-effect rounded-full mb-6 text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={textControls}
            transition={{ duration: 0.5 }}
          >
            Data Engineer & Analyst
          </motion.span>
          
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-glow"
            initial={{ opacity: 0, y: 20 }}
            animate={textControls}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <motion.span
              initial={{ display: "inline-block" }}
              animate={{ 
                rotate: [0, 1, 0, -1, 0],
                y: [0, -3, 0, -3, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1]
              }}
            >
              Transforming 
            </motion.span>{" "}
            <motion.span 
              className="text-futuristic-purple inline-block"
              animate={{ 
                textShadow: [
                  "0 0 8px hsl(var(--secondary) / 0.4)",
                  "0 0 16px hsl(var(--secondary) / 0.6)",
                  "0 0 8px hsl(var(--secondary) / 0.4)"
                ]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            >
              Data
            </motion.span>{" "}
            Into Actionable{" "}
            <motion.span 
              className="text-futuristic-blue inline-block"
              animate={{ 
                textShadow: [
                  "0 0 8px hsl(var(--primary) / 0.4)",
                  "0 0 16px hsl(var(--primary) / 0.6)",
                  "0 0 8px hsl(var(--primary) / 0.4)"
                ]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5 
              }}
            >
              Insights
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-xl opacity-80 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={textControls}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I design and build data pipelines that empower businesses to make data-driven decisions. 
            Specialized in modern data engineering, analytics, and machine learning.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={textControls}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <FuturisticButton 
              variant="primary" 
              size="lg" 
              glowEffect
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </FuturisticButton>
            
            <FuturisticButton 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </FuturisticButton>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Animated scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ 
          duration: 2, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      >
        <span className="text-sm mb-2">Scroll Down</span>
        <motion.svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
          animate={{ y: [0, 5, 0] }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </motion.svg>
      </motion.div>
    </section>
  );
};

export default HeroSection;
