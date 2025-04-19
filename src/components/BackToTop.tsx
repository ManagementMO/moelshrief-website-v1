
import { useEffect, useState } from "react";

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
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 p-3 rounded-full transition-all duration-500 backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_8px_32px_rgba(155,135,245,0.4)] ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      }`}
      aria-label="Back to top"
    >
      <div className="relative overflow-hidden w-8 h-8 flex items-center justify-center group">
        <div className="absolute inset-0 bg-gradient-to-tr from-futuristic-purple/20 to-futuristic-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6 text-futuristic-purple relative z-10 transition-transform duration-300 group-hover:-translate-y-1" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M5 10l7-7m0 0l7 7m-7-7v18" 
          />
        </svg>
      </div>
    </button>
  );
};

export default BackToTop;
