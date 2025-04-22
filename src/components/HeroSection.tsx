import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { Scene3D } from "./three/Scene3D";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const floatingElementsRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const textControls = useAnimation();
  const { scrollYProgress } = useScroll();
  const [loaded, setLoaded] = useState(false);
  
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const headerY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  // Animate text on load
  useEffect(() => {
    const animateText = async () => {
      await textControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1.2, ease: [0.25, 0.1, 0, 1] }
      });
    };
    
    setLoaded(true);
    animateText();
  }, [textControls]);

  // Subtle mouse movement effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      
      // Get mouse position relative to container (normalized values between -1 and 1)
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      
      setMousePosition({ x, y });
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
          className="absolute top-1/2 left-0 w-full h-[1px] shadow-secondary" />
        
        <motion.div 
          className="absolute inset-0 pointer-events-none overflow-hidden"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(25, 25, 35, 0.3), rgba(10, 10, 20, 1))',
            transform: loaded ? `translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px)` : 'none',
            transition: 'transform 4s cubic-bezier(0.19, 1, 0.22, 1)',
          }}
        >
          {/* Subtle animated lines */}
          <div className="absolute inset-0">
            <svg width="100%" height="100%" className="opacity-5">
              <motion.line 
                x1="0%" 
                y1="30%" 
                x2="100%" 
                y2="30%" 
                stroke="white" 
                strokeWidth="0.3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 4, ease: "easeInOut", delay: 0.5 }}
              />
              <motion.line 
                x1="0%" 
                y1="70%" 
                x2="100%" 
                y2="70%" 
                stroke="white" 
                strokeWidth="0.3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 4, ease: "easeInOut", delay: 0.8 }}
              />
              <motion.line 
                x1="30%" 
                y1="0%" 
                x2="30%" 
                y2="100%" 
                stroke="white" 
                strokeWidth="0.3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 4, ease: "easeInOut", delay: 1.1 }}
              />
              <motion.line 
                x1="70%" 
                y1="0%" 
                x2="70%" 
                y2="100%" 
                stroke="white" 
                strokeWidth="0.3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 4, ease: "easeInOut", delay: 1.4 }}
              />
            </svg>
          </div>
        </motion.div>
      </div>
      
      {/* Main content */}
      <div className="relative container mx-auto px-8 z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
        {/* Left side - Text content */}
        <motion.div 
          className="w-full lg:w-1/2 z-10"
          style={{ opacity: headerOpacity, y: headerY }}
        >
          <div className="relative">
            <motion.div 
              className="text-xs font-mono tracking-wider text-slate-400 uppercase mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center">
                <div className="w-8 h-[1px] bg-slate-600 mr-3"></div>
                Data Artisan
              </div>
            </motion.div>
            
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold leading-tight tracking-tight mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="overflow-hidden">
                <motion.div
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, ease: [0.25, 0.1, 0, 1], delay: 0.4 }}
                  className="pb-2"
                >
                  Transforming
                </motion.div>
              </div>
              <div className="overflow-hidden">
                <motion.div
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, ease: [0.25, 0.1, 0, 1], delay: 0.5 }}
                  className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text pb-2"
                >
                  Complex Data
                </motion.div>
              </div>
              <div className="overflow-hidden">
                <motion.div
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, ease: [0.25, 0.1, 0, 1], delay: 0.6 }}
                  className="pb-2"
                >
                  Into Clear Insights
                </motion.div>
              </div>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-slate-400 max-w-xl mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Crafting elegant data solutions that transform business challenges into 
              opportunities through strategic analysis and technical expertise.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row items-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <Button 
                className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-6 text-sm font-medium tracking-wide"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
              </Button>
              
              <Button 
                variant="outline" 
                className="rounded-full px-8 py-6 border-white/20 text-sm font-medium tracking-wide hover:bg-white/10"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
            </motion.div>
            
            {/* Stats section */}
            <motion.div 
              className="mt-16 md:mt-20 grid grid-cols-2 sm:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <div>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">5+</div>
                <div className="text-sm text-slate-500 mt-1">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">25+</div>
                <div className="text-sm text-slate-500 mt-1">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">100%</div>
                <div className="text-sm text-slate-500 mt-1">Client Satisfaction</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Right side - 3D visualization */}
        <motion.div 
          className="w-full lg:w-1/2 aspect-square max-w-[600px] relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          style={{
            transform: `perspective(1000px) rotateY(${mousePosition.x * 5}deg) rotateX(${-mousePosition.y * 5}deg)`,
            transition: 'transform 0.5s cubic-bezier(0.19, 1, 0.22, 1)',
          }}
        >
          <div className="relative w-full h-full rounded-lg overflow-hidden border border-white/10">
            {/* 3D visualization using three.js */}
            <Scene3D />
            
            {/* Overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent pointer-events-none"></div>
            
            {/* Floating elements */}
            <motion.div 
              className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-blue-500/50" 
              animate={{ y: [-10, 10, -10], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute bottom-1/3 right-1/4 w-3 h-3 rounded-full bg-purple-500/50" 
              animate={{ y: [-8, 8, -8], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
            <motion.div 
              className="absolute top-1/2 right-1/3 w-5 h-5 rounded-full bg-teal-500/50" 
              animate={{ y: [-12, 12, -12], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />
          </div>
        </motion.div>
      </div>
      
      {/* Simple scrolling indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <motion.div 
          className="w-[1px] h-10 bg-white/20"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
        <div className="mt-2 text-xs font-light text-white/40">SCROLL</div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
