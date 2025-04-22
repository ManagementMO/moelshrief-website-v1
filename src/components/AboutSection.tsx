import { Button } from "./ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const imageOpacity = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 1]);
  const imageScale = useTransform(scrollYProgress, [0, 0.2, 1], [0.8, 1, 1]);
  const contentOpacity = useTransform(scrollYProgress, [0.1, 0.3, 1], [0, 1, 1]);
  const contentY = useTransform(scrollYProgress, [0.1, 0.3, 1], [50, 0, 0]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - left) / width - 0.5) * 2;  // -1 to 1
    const y = ((event.clientY - top) / height - 0.5) * 2;  // -1 to 1
    setMousePosition({ x, y });
  };

  return (
    <section id="about" ref={sectionRef} className="relative py-28 lg:py-36 overflow-hidden bg-black text-white">
      {/* Subtle grain texture */}
      <div className="absolute inset-0 opacity-20 bg-noise pointer-events-none"></div>
      
      <div className="container mx-auto px-8 relative z-10">
        <div className="max-w-screen-xl mx-auto">
          {/* Section label */}
          <div className="flex items-center mb-16">
            <div className="w-12 h-[1px] bg-white/20 mr-4"></div>
            <span className="text-xs uppercase tracking-widest text-white/60 font-mono">About</span>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left column - image with 3D effect */}
            <motion.div 
              className="lg:col-span-5 relative w-full max-w-md mx-auto"
              style={{
                opacity: imageOpacity,
                scale: imageScale,
              }}
            >
              <motion.div 
                className="relative rounded-lg overflow-hidden aspect-[4/5]"
                onMouseMove={handleMouseMove}
                style={{
                  transform: `perspective(1000px) rotateY(${mousePosition.x * 5}deg) rotateX(${-mousePosition.y * 5}deg)`,
                  transition: 'transform 0.1s ease-out',
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
                </div>
              </motion.div>

              <div className="mt-8 flex justify-center">
                <Button variant="outline" className="rounded-full border-white/20 hover:bg-white/10 px-8 py-6 font-medium tracking-wide text-sm" onClick={() => window.open('https://drive.google.com/file/d/1JWCbEcb8gWO-xP2872_9gouoIEv6W-GF/view?usp=sharing', '_blank')}>
                  Download Resume
                </Button>
              </div>
            </motion.div>
          
            {/* Right column - content */}
            <motion.div className="lg:col-span-7" style={{
              opacity: contentOpacity,
              y: contentY
            }}>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 tracking-tight">
                <div className="rtx-text-container max-w-4xl">
                  <span className="block typing-effect rtx-text text-left" data-text="Hi, I'm Mohammed">Hi, I'm Mohammed</span>
                  <span className="block typing-effect-2 rtx-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500" data-text="I try to make things that wor-">I try to make things that wor-</span>
                </div>
              </h2>
              
              <p className="text-lg text-white/70 mb-10 leading-relaxed">
                Hey, I'm Mohammed, I'm a data scientist and Management Engineering student at the University of Waterloo (yes, that's a real program). I spend most of my time going to the gym and pretending Python doesn't scare me.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="glass-effect p-6 rounded-xl">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold">Data Science</h3>
                    </div>
                    <p className="text-muted-foreground">Python wizard in training. Building ML models and analyzing data to solve real-world problems.</p>
                  </div>

                  <div className="glass-effect p-6 rounded-xl">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                        <svg className="w-6 h-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold">Gym Life</h3>
                    </div>
                    <p className="text-muted-foreground">Daily gym enthusiast. The iron paradise is where I recharge and push my limits.</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="glass-effect p-6 rounded-xl">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                        <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold">Boba Life</h3>
                    </div>
                    <p className="text-muted-foreground">Brown sugar milk tea addict. My best code comes from boba shop coding sessions.</p>
                  </div>

                  <div className="glass-effect p-6 rounded-xl">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold">Gaming</h3>
                    </div>
                    <p className="text-muted-foreground">Casual gamer exploring RTX-enabled worlds. Perfect break from coding sessions.</p>
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
