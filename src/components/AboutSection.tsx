import { Button } from "./ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const {
    scrollYProgress
  } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const imageOpacity = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 1]);
  const imageScale = useTransform(scrollYProgress, [0, 0.2, 1], [0.8, 1, 1]);
  const contentOpacity = useTransform(scrollYProgress, [0.1, 0.3, 1], [0, 1, 1]);
  const contentY = useTransform(scrollYProgress, [0.1, 0.3, 1], [50, 0, 0]);
  return <section id="about" ref={sectionRef} className="relative py-36 lg:py-44 overflow-hidden bg-black text-white">
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
            {/* Left column - image */}
            <motion.div className="lg:col-span-5 relative" style={{
            opacity: imageOpacity,
            scale: imageScale
          }}>
              <div className="relative rounded-lg overflow-hidden aspect-[5/6]">
                {/* Profile image with premium aesthetic */}
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10"></div>
                  <img src="/lovable-uploads/a169c866-c182-4c19-bc29-e9c7c0d3877b.png" alt="Mohammed Elshrief" className="w-full h-full object-cover" />
                  
                  {/* Elegant overlay gradient */}
                  
                  
                  {/* Subtle grid pattern */}
                  
                </div>
                
                {/* Accent border */}
                <div className="absolute inset-0 border border-white/10 rounded-lg pointer-events-none"></div>
              </div>
            </motion.div>
          
            {/* Right column - content */}
            <motion.div className="lg:col-span-7" style={{
            opacity: contentOpacity,
            y: contentY
          }}>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                <span className="block">Turning Complex Data</span>
                <span className="block bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Into Strategic Advantage</span>
              </h2>
              
              <p className="text-lg text-white/70 max-w-xl mb-10 leading-relaxed">
                As a Data Engineer and Management Consultant, I bridge the gap between technical 
                implementation and business strategy. I design data systems that transform raw information 
                into actionable intelligence, enabling organizations to make confident, data-driven decisions.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-14">
                <div className="group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full backdrop-blur-sm bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors duration-300">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-400">
                        <path d="M9 19V13C9 11.8954 8.10457 11 7 11H5C3.89543 11 3 11.8954 3 13V19C3 20.1046 3.89543 21 5 21H7C8.10457 21 9 20.1046 9 19Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M15 19V8C15 6.89543 14.1046 6 13 6H11C9.89543 6 9 6.89543 9 8V19C9 20.1046 9.89543 21 11 21H13C14.1046 21 15 20.1046 15 19Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M21 19V5C21 3.89543 20.1046 3 19 3H17C15.8954 3 15 3.89543 15 5V19C15 20.1046 15.8954 21 17 21H19C20.1046 21 21 20.1046 21 19Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-medium group-hover:text-blue-400 transition-colors duration-300">Data Architecture</h3>
                  </div>
                  <p className="text-white/60 pl-16">Designing scalable data ecosystems that grow with your business needs.</p>
                </div>
                
                <div className="group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full backdrop-blur-sm bg-purple-500/10 flex items-center justify-center border border-purple-500/20 group-hover:bg-purple-500/20 transition-colors duration-300">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-purple-400">
                        <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 20V20.01M18.5 12H18.51M5.5 12H5.51M7.5 7.5L7.51 7.49M16.5 7.5L16.49 7.49M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-medium group-hover:text-purple-400 transition-colors duration-300">Insight Generation</h3>
                  </div>
                  <p className="text-white/60 pl-16">Extracting meaningful patterns that reveal new business opportunities.</p>
                </div>
                
                <div className="group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full backdrop-blur-sm bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors duration-300">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-400">
                        <path d="M15 5L12 2M12 2L9 5M12 2V8M4 9H2M2 9V17M2 9H8M4 15H8M22 9H20M20 9V17M20 9H14M20 15H16M12 22V16M12 16H16M12 16H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-medium group-hover:text-blue-400 transition-colors duration-300">Process Automation</h3>
                  </div>
                  <p className="text-white/60 pl-16">Streamlining workflows to enhance efficiency and reduce manual intervention.</p>
                </div>
                
                <div className="group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full backdrop-blur-sm bg-purple-500/10 flex items-center justify-center border border-purple-500/20 group-hover:bg-purple-500/20 transition-colors duration-300">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-purple-400">
                        <path d="M17 9L13.9558 13.5662C13.5299 14.1591 12.5728 14.1844 12.1094 13.6148L11.8906 13.3467C11.4272 12.7771 10.4701 12.8024 10.0442 13.3953L7 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M22 12C22 16.4183 18.4183 20 14 20C11.9318 20 10.0409 19.1599 8.65099 17.7957C7.20183 16.3687 6.31551 14.38 6.10801 12.2321M14 4C15.6569 4 17.1911 4.52255 18.4138 5.41685M2 12C2 10.113 2.57111 8.36292 3.56164 6.94427C4.45996 5.65869 5.79765 4.68145 7.36132 4.22587" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-medium group-hover:text-purple-400 transition-colors duration-300">Visual Analytics</h3>
                  </div>
                  <p className="text-white/60 pl-16">Creating intuitive dashboards that make data accessible to all stakeholders.</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Button className="rounded-full bg-white text-black hover:bg-white/90 px-8 py-6 font-medium tracking-wide text-sm" onClick={() => document.getElementById('experience')?.scrollIntoView({
                behavior: 'smooth'
              })}>
                  View Experience
                </Button>
                
                <Button variant="outline" className="rounded-full border-white/20 hover:bg-white/10 px-8 py-6 font-medium tracking-wide text-sm" onClick={() => window.open('/resume.pdf', '_blank')}>
                  Download Resume
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;