import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { Scene3D } from "./three/Scene3D";
const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const {
    scrollYProgress
  } = useScroll();
  const [loaded, setLoaded] = useState(false);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const headerY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  // Animate on load
  useEffect(() => {
    setLoaded(true);
  }, []);

  // Subtle mouse movement effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const container = containerRef.current;
      const rect = container.getBoundingClientRect();

      // Get mouse position relative to container (normalized values between -1 and 1)
      const x = (e.clientX - rect.left) / rect.width * 2 - 1;
      const y = (e.clientY - rect.top) / rect.height * 2 - 1;
      setMousePosition({
        x,
        y
      });
    };
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  return <section id="home" ref={containerRef} className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16 transition-colors duration-300">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-background opacity-80"></div>
      
      {/* Floating elements with glass effect */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-secondary/10 backdrop-blur-sm glass-effect" animate={{
        y: [0, -20, 0]
      }} transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }} />
        
        <motion.div className="absolute bottom-1/4 right-1/3 w-20 h-20 rounded-full bg-primary/10 backdrop-blur-sm glass-effect" animate={{
        y: [0, -15, 0]
      }} transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1
      }} />
      </div>
      
      {/* Main content */}
      <div className="relative container mx-auto px-6 z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        {/* Text content */}
        <motion.div className="w-full lg:w-1/2 z-10" style={{
        opacity: headerOpacity,
        y: headerY
      }}>
          <div className="relative">
            <motion.div className="text-xs font-mono tracking-wider text-muted-foreground uppercase mb-4" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }}>
              <div className="flex items-center">
                <div className="w-8 h-[1px] bg-muted-foreground mr-3"></div>
                Data Artisan
              </div>
            </motion.div>
            
            <motion.h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.4
          }}>
              <div className="overflow-hidden">
                <motion.div initial={{
                y: 100
              }} animate={{
                y: 0
              }} transition={{
                duration: 1,
                ease: [0.25, 0.1, 0, 1],
                delay: 0.4
              }} className="pb-2">
                  Mohammed Elshrief
                </motion.div>
              </div>
              <div className="overflow-hidden">
                <motion.div initial={{
                y: 100
              }} animate={{
                y: 0
              }} transition={{
                duration: 1,
                ease: [0.25, 0.1, 0, 1],
                delay: 0.5
              }} className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text pb-2">
                  Transforming Data
                </motion.div>
              </div>
              <div className="overflow-hidden">
                <motion.div initial={{
                y: 100
              }} animate={{
                y: 0
              }} transition={{
                duration: 1,
                ease: [0.25, 0.1, 0, 1],
                delay: 0.6
              }} className="pb-2">
                  Into Insights
                </motion.div>
              </div>
            </motion.h1>
            
            <motion.p className="text-lg text-muted-foreground max-w-xl mb-8" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.8
          }}>
              Crafting elegant data solutions that transform business challenges into 
              opportunities through strategic analysis and technical expertise.
            </motion.p>
            
            <motion.div className="flex flex-col sm:flex-row items-start gap-4" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 1
          }}>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-sm font-medium tracking-wide" onClick={() => document.getElementById('projects')?.scrollIntoView({
              behavior: 'smooth'
            })}>
                View Projects
              </Button>
              
              <Button variant="outline" className="rounded-full px-8 py-6 border-primary/20 text-sm font-medium tracking-wide hover:bg-primary/10" onClick={() => document.getElementById('contact')?.scrollIntoView({
              behavior: 'smooth'
            })}>
                Get In Touch
              </Button>
            </motion.div>
          </div>
        </motion.div>
        
        {/* 3D visualization with profile photo */}
        <motion.div className="w-full lg:w-1/2 aspect-square max-w-[500px] relative z-10" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 1.5,
        delay: 0.5
      }} style={{
        transform: `perspective(1000px) rotateY(${mousePosition.x * 5}deg) rotateX(${-mousePosition.y * 5}deg)`,
        transition: 'transform 0.5s cubic-bezier(0.19, 1, 0.22, 1)'
      }}>
          <div className="relative w-full h-full rounded-lg overflow-hidden glass-card">
            {/* Use Scene3D instead of HeroScene3D */}
            
            
            {/* Overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-background/40 to-transparent pointer-events-none"></div>
          </div>
        </motion.div>
      </div>
      
      {/* Simple scrolling indicator */}
      <motion.div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center" initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      duration: 1,
      delay: 1.5
    }}>
        <motion.div className="w-[1px] h-10 bg-foreground/20" animate={{
        scaleY: [0, 1, 0]
      }} transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }} />
        <div className="mt-2 text-xs font-light text-foreground/40">SCROLL</div>
      </motion.div>
    </section>;
};
export default HeroSection;