
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
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_8px_32px_rgba(155,135,245,0.4)]"
          aria-label="Back to top"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="relative overflow-hidden w-8 h-8 flex items-center justify-center group">
            <motion.div 
              className="absolute inset-0 bg-gradient-to-tr from-futuristic-purple/20 to-futuristic-blue/20"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            ></motion.div>
            <motion.svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 text-futuristic-purple relative z-10" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.3 }}
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M5 10l7-7m0 0l7 7m-7-7v18" 
              />
            </motion.svg>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
