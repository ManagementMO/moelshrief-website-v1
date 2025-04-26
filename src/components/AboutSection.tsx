import { Button } from "./ui/button";
import { motion, useScroll, useTransform, useSpring, useMotionValue, useVelocity, useAnimationControls, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import type { CSSProperties } from "react";

const ROTATING_WORDS = ["work", "matter", "inspire", "impact", "help"];
const WORD_DURATION = 2; // seconds per word

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isZapping, setIsZapping] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);
  const [clickCount, setClickCount] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  
  const controls = useAnimationControls();
  const velocity = useMotionValue(0);
  const springConfig = { stiffness: 300, damping: 30 };
  
  useEffect(() => {
    const zapTimer = setTimeout(() => {
      setIsZapping(true);
    }, 1500);

    return () => clearTimeout(zapTimer);
  }, []);

  useEffect(() => {
    if (clickCount >= 5) {
      setShowEasterEgg(true);
      // Reset after 3 seconds
      const timer = setTimeout(() => {
        setShowEasterEgg(false);
        setClickCount(0);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [clickCount]);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const imageOpacity = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 1]);
  const imageScale = useTransform(scrollYProgress, [0, 0.2, 1], [0.8, 1, 1]);
  const contentOpacity = useTransform(scrollYProgress, [0.1, 0.3, 1], [0, 1, 1]);
  const contentY = useTransform(scrollYProgress, [0.1, 0.3, 1], [50, 0, 0]);

  // Word rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, WORD_DURATION * 1000);

    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) {
      const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
      const x = ((event.clientX - left) / width - 0.5) * 2;  // -1 to 1
      const y = ((event.clientY - top) / height - 0.5) * 2;  // -1 to 1
      setMousePosition({ x, y });
      
      // Update rotation based on mouse position
      setRotation({
        x: y * 20, // Rotate up to 20 degrees on X axis
        y: x * 20  // Rotate up to 20 degrees on Y axis
      });
    }
  };

  const handleMouseLeave = () => {
    // Smoothly return to original position
    controls.start({
      rotateX: 0,
      rotateY: 0,
      transition: { type: "spring", ...springConfig }
    });
  };

  const handleClick = () => {
    setClickCount(prev => prev + 1);
    // Add a push-in effect
    controls.start({
      scale: 0.95,
      transition: { duration: 0.1 }
    }).then(() => {
      controls.start({
        scale: 1,
        transition: { type: "spring", ...springConfig }
      });
    });
  };

  const imageStyle = {
    opacity: imageOpacity as unknown as number,
    scale: imageScale as unknown as number,
  } as CSSProperties;

  const transformStyle = {
    transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
    transition: "transform 0.1s ease-out",
  } as CSSProperties;

  const contentStyle = {
    opacity: contentOpacity as unknown as number,
    y: contentY as unknown as number,
  } as CSSProperties;

  return (
    <section id="about" ref={sectionRef} className="relative py-28 lg:py-36 overflow-hidden bg-black text-white">
      {/* Subtle grain texture */}
      <div className="absolute inset-0 opacity-20 bg-noise pointer-events-none"></div>
      
      <div className="container mx-auto px-8 relative z-10">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left column - image with 3D effect */}
            <motion.div 
              className="lg:col-span-5 relative w-full max-w-md mx-auto"
              style={imageStyle}
            >
              {/* Easter Egg Text Box */}
              <AnimatePresence>
                {showEasterEgg && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.8 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    className="absolute -top-16 left-0 right-0 z-50 flex items-center justify-center"
                  >
                    <div className="bg-black/30 backdrop-blur-md px-8 py-3 rounded-full border border-white/20 shadow-lg inline-flex items-center justify-center">
                      <p className="text-white text-lg font-medium whitespace-nowrap flex items-center gap-2">
                        STOP <span className="text-2xl">😭</span>
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.div 
                className="relative rounded-lg overflow-hidden aspect-[4/5] cursor-pointer"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={transformStyle}
                onClick={handleClick}
                animate={controls}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30
                }}
              >
                {/* Profile image with premium aesthetic */}
                <div className="relative w-full h-full glass-card">
                  <img 
                    alt="Mohammed Elshrief" 
                    className="w-full h-full object-cover transition-transform duration-200"
                    src="/images/profile.jpg" 
                  />
                  
                  {/* Glass overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent pointer-events-none" />
                  
                  {/* Interactive border glow */}
                  <div className="absolute inset-0 border border-white/10 rounded-lg" 
                       style={{
                         boxShadow: `0 0 20px rgba(255,255,255,${0.1 + (Math.abs(mousePosition.x) + Math.abs(mousePosition.y)) * 0.1})`
                       }} 
                  />

                  {/* Edge lighting effect */}
                  <div className="absolute inset-0 rounded-lg overflow-hidden pointer-events-none">
                    <div className="absolute inset-0 border border-white/20 rounded-lg" 
                         style={{
                           boxShadow: `
                             inset 0 0 15px rgba(255,255,255,0.1),
                             inset 0 0 30px rgba(255,255,255,0.05),
                             0 0 15px rgba(255,255,255,0.1),
                             0 0 30px rgba(255,255,255,0.05)
                           `
                         }}
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          
            {/* Right column - content */}
            <motion.div className="lg:col-span-7" style={contentStyle}>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 tracking-tight w-full">
                <div className="rtx-text-container w-full flex flex-col items-center justify-center space-y-4 relative">
                  <div className="w-full text-center">
                    <span className="inline-block rtx-text text-white">Hi, I'm Mohammed.</span>
                  </div>
                  <div className="w-full text-center">
                    <span className="inline-block rtx-text text-white">I try to make things that</span>
                  </div>
                  <div className="w-full text-center overflow-hidden h-[1.5em] relative flex items-center justify-center">
                    <AnimatePresence mode="popLayout" initial={false}>
                      <motion.span
                        key={currentWordIndex}
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -50, opacity: 0 }}
                        transition={{
                          y: { type: "spring", stiffness: 300, damping: 30 },
                          opacity: { duration: 0.2 },
                        }}
                        className="absolute rtx-text text-white inline-block whitespace-nowrap"
                      >
                        {ROTATING_WORDS[currentWordIndex]}.
                      </motion.span>
                    </AnimatePresence>
                  </div>
                </div>
              </h2>
              
              <p className="text-lg text-white/70 mb-10 leading-relaxed">
                Hey, I'm Mohammed, I'm a data scientist and Management Engineering student at the University of Waterloo (yes, that's a real program). I spend most of my time going to the gym and pretending Python doesn't scare me.
              </p>
              
              <h3 className="text-2xl font-semibold mb-6 text-center">My Interests:</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="glass-effect p-6 rounded-xl">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full backdrop-blur-sm bg-gradient-to-br from-blue-500/30 to-purple-500/30 flex items-center justify-center border border-blue-500/20 group-hover:bg-blue-500/20 transition-all duration-300 shadow-lg rtx-glow">
                        {/* Enhanced Python Logo with RTX effect */}
                        <svg width="24" height="24" viewBox="0 0 256 255" className="text-blue-400 transform group-hover:scale-110 transition-transform duration-300">
                          <path d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072zM92.802 19.66a11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13 11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.13z" fill="currentColor" className="glow-stroke"/>
                          <path d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 62.518 33.897zm34.114-19.586a11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.131 11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13z" fill="currentColor" className="glow-stroke"/>
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold">Data Science</h3>
                    </div>
                  </div>

                  <div className="glass-effect p-6 rounded-xl">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full backdrop-blur-sm bg-gradient-to-br from-purple-500/30 to-pink-500/30 flex items-center justify-center border border-purple-500/20 group-hover:bg-purple-500/20 transition-all duration-300 shadow-lg rtx-glow">
                        {/* Dumbbell Logo with RTX effect */}
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-purple-400 transform group-hover:scale-110 transition-transform duration-300">
                          <path d="M6 7V17M18 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="glow-stroke"/>
                          <path d="M8 7H4V17H8M16 7H20V17H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="glow-stroke"/>
                          <path d="M8 9V15M16 9V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="glow-stroke"/>
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold">Gym</h3>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="glass-effect p-6 rounded-xl">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full backdrop-blur-sm bg-gradient-to-br from-amber-500/30 to-orange-500/30 flex items-center justify-center border border-amber-500/20 group-hover:bg-amber-500/20 transition-all duration-300 shadow-lg rtx-glow">
                        {/* Boba Cup Logo with RTX effect */}
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-amber-400 transform group-hover:scale-110 transition-transform duration-300">
                          <path d="M7 4h10l1 16H6L7 4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="glow-stroke"/>
                          <path d="M10 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2M14 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2" fill="currentColor" className="glow-stroke"/>
                          <path d="M8 14c2.5 1.5 5.5 1.5 8 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="glow-stroke"/>
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold">Boba</h3>
                    </div>
                  </div>

                  <div className="glass-effect p-6 rounded-xl">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full backdrop-blur-sm bg-gradient-to-br from-green-500/30 to-emerald-500/30 flex items-center justify-center border border-green-500/20 group-hover:bg-green-500/20 transition-all duration-300 shadow-lg rtx-glow">
                        {/* Book Logo with RTX effect */}
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-400 transform group-hover:scale-110 transition-transform duration-300">
                          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="glow-stroke"/>
                          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="glow-stroke"/>
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold">Reading</h3>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
