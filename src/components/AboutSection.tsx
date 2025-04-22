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
                      <div className="w-12 h-12 rounded-full backdrop-blur-sm bg-gradient-to-br from-blue-500/30 to-purple-500/30 flex items-center justify-center border border-blue-500/20 group-hover:bg-blue-500/20 transition-all duration-300 shadow-lg rtx-glow">
                        {/* Enhanced Python Logo with RTX effect */}
                        <svg width="24" height="24" viewBox="0 0 256 255" className="text-blue-400 transform group-hover:scale-110 transition-transform duration-300">
                          <path d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072zM92.802 19.66a11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13 11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.13z" fill="currentColor" className="glow-stroke"/>
                          <path d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 62.518 33.897zm34.114-19.586a11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.131 11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13z" fill="currentColor" className="glow-stroke"/>
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold">Data Science</h3>
                    </div>
                    <p className="text-muted-foreground">Python wizard in training. Building ML models and analyzing data to solve real-world problems.</p>
                  </div>

                  <div className="glass-effect p-6 rounded-xl">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full backdrop-blur-sm bg-gradient-to-br from-purple-500/30 to-pink-500/30 flex items-center justify-center border border-purple-500/20 group-hover:bg-purple-500/20 transition-all duration-300 shadow-lg rtx-glow">
                        {/* Dumbbell Logo with RTX effect */}
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-purple-400 transform group-hover:scale-110 transition-transform duration-300">
                          <path d="M6 7V17M18 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="glow-stroke"/>
                          <path d="M8 7H4V17H8M16 7H20V17H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="glow-stroke"/>
                          <path d="M8 9V15M16 9V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="glow-stroke"/>
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
                      <div className="w-12 h-12 rounded-full backdrop-blur-sm bg-gradient-to-br from-amber-500/30 to-orange-500/30 flex items-center justify-center border border-amber-500/20 group-hover:bg-amber-500/20 transition-all duration-300 shadow-lg rtx-glow">
                        {/* Boba Cup Logo with RTX effect */}
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-amber-400 transform group-hover:scale-110 transition-transform duration-300">
                          <path d="M7 4h10l1 16H6L7 4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="glow-stroke"/>
                          <path d="M10 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2M14 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2" fill="currentColor" className="glow-stroke"/>
                          <path d="M8 14c2.5 1.5 5.5 1.5 8 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="glow-stroke"/>
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold">Boba Life</h3>
                    </div>
                    <p className="text-muted-foreground">Brown sugar milk tea addict. My best code comes from boba shop coding sessions.</p>
                  </div>

                  <div className="glass-effect p-6 rounded-xl">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full backdrop-blur-sm bg-gradient-to-br from-green-500/30 to-emerald-500/30 flex items-center justify-center border border-green-500/20 group-hover:bg-green-500/20 transition-all duration-300 shadow-lg rtx-glow">
                        {/* Gaming Controller Logo with RTX effect */}
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-400 transform group-hover:scale-110 transition-transform duration-300">
                          <path d="M6 12h4m-2-2v4M15 11h.01M18 13h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="glow-stroke"/>
                          <path d="M17.5 7h-11A3.5 3.5 0 0 0 3 10.5v3A3.5 3.5 0 0 0 6.5 17h11a3.5 3.5 0 0 0 3.5-3.5v-3A3.5 3.5 0 0 0 17.5 7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="glow-stroke"/>
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
