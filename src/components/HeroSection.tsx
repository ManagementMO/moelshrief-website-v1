import { useEffect, useRef, useState } from "react";
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
      className="relative min-h-screen flex items-center overflow-hidden pt-16 bg-cyber-bg text-cyber-text"
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
      <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <motion.div 
          className="max-w-2xl text-center md:text-left"
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
        
        {/* 3D Rotating Data Visualization */}
        <motion.div
          className="relative w-full md:w-2/5 h-96 hidden md:flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative w-80 h-80">
            {/* Core visualization sphere */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 backdrop-blur-lg border border-white/10"
              style={{ boxShadow: "0 0 40px rgba(0, 0, 0, 0.2), inset 0 0 20px rgba(255, 255, 255, 0.1)" }}
              animate={{ 
                boxShadow: [
                  "0 0 40px rgba(0, 0, 0, 0.2), inset 0 0 20px rgba(255, 255, 255, 0.1)", 
                  "0 0 60px rgba(0, 0, 0, 0.3), inset 0 0 30px rgba(255, 255, 255, 0.15)",
                  "0 0 40px rgba(0, 0, 0, 0.2), inset 0 0 20px rgba(255, 255, 255, 0.1)"
                ] 
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Orbiting rings */}
            <motion.div 
              className="absolute top-1/2 left-1/2 w-[120%] h-[120%] -translate-x-1/2 -translate-y-1/2 border-2 border-primary/20 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              {/* Data node 1 */}
              <motion.div 
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary shadow-lg shadow-primary/30"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
            
            {/* Second orbit ring */}
            <motion.div 
              className="absolute top-1/2 left-1/2 w-[150%] h-[90%] -translate-x-1/2 -translate-y-1/2 border-2 border-secondary/20 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              style={{ transform: "rotateX(65deg) rotateY(0deg) rotateZ(0deg)" }}
            >
              {/* Data node 2 */}
              <motion.div 
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-secondary shadow-lg shadow-secondary/30"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
            </motion.div>
            
            {/* Third orbit ring */}
            <motion.div 
              className="absolute top-1/2 left-1/2 w-[180%] h-[70%] -translate-x-1/2 -translate-y-1/2 border-2 border-blue-400/20 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              style={{ transform: "rotateX(35deg) rotateY(40deg) rotateZ(0deg)" }}
            >
              {/* Data node 3 */}
              <motion.div 
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-blue-400 shadow-lg shadow-blue-400/30"
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              />
            </motion.div>
            
            {/* Inner data points */}
            <motion.div
              className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-white/80"
              animate={{
                opacity: [0.4, 0.8, 0.4],
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-2.5 h-2.5 rounded-full bg-white/80"
              animate={{
                opacity: [0.3, 0.7, 0.3],
                scale: [1, 1.3, 1],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
            
            <motion.div
              className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-white/80"
              animate={{
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.4, 1],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />
            
            {/* Floating data points */}
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 rounded-full bg-white/50"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  y: [0, Math.random() * 10 - 5, 0],
                  x: [0, Math.random() * 10 - 5, 0],
                }}
                transition={{ 
                  duration: 3 + Math.random() * 5, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: Math.random() * 2
                }}
              />
            ))}
            
            {/* Core glow effect */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/5 to-secondary/5 blur-xl"
              animate={{ 
                opacity: [0.3, 0.6, 0.3],
                scale: [0.8, 1.1, 0.8]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
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
