import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener("scroll", toggleVisibility);
    
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  
  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-24 right-2 z-50 p-3 rounded-full backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_8px_32px_rgba(155,135,245,0.4)]"
          aria-label="Back to top"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="relative w-10 h-10">
            {/* Arrow Icon */}
            <motion.div 
              className="absolute inset-0 flex items-center justify-center"
              animate={{
                y: [0, -2, 0],
                filter: [
                  "drop-shadow(0 0 5px rgba(255,255,255,0.5))",
                  "drop-shadow(0 0 15px rgba(255,255,255,0.8))",
                  "drop-shadow(0 0 5px rgba(255,255,255,0.5))"
                ]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 text-white" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                style={{
                  filter: "drop-shadow(0 0 8px rgba(255,255,255,0.5))"
                }}
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2.5} 
                  d="M5 10l7-7m0 0l7 7m-7-7v18" 
                />
              </svg>
            </motion.div>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
