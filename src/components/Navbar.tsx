import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Lock scroll on mobile menu open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Track active section for menu highlighting
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;
      let found = false;
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            // Treat both 'about' and 'skills' as 'about' for navbar highlight
            if (section === 'about' || section === 'skills') {
              setActiveSection('about');
            } else {
              setActiveSection(section);
            }
            found = true;
            break;
          }
        }
      }
      // Optionally, if no section is found, fallback to home
      if (!found) setActiveSection('home');
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Use section IDs for both label and logic
  const navLinks = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <motion.nav 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500",
        isScrolled 
          ? "backdrop-blur-md bg-black/40 border-b border-white/5 py-4" 
          : "bg-transparent py-6"
      )}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container mx-auto px-8 flex justify-between items-center">
        <a 
          href="/" 
          className="text-xl font-medium"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = '/';
            window.scrollTo(0, 0);
          }}
        >
          <span className="text-white font-medium tracking-wide [text-shadow:_0_0_10px_rgb(255_255_255_/_70%)]">Mohammed</span>
          <span className="neon-dot text-white [text-shadow:_0_0_10px_rgb(255_255_255_/_100%),_0_0_20px_rgb(255_255_255_/_100%),_0_0_30px_rgb(255_255_255_/_100%)]">.</span>
          <span className="text-white font-medium tracking-wide [text-shadow:_0_0_10px_rgb(255_255_255_/_70%)]">Elshrief</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          <ul className="flex space-x-8 mr-6">
            {navLinks.map((link) => (
              <li key={link.id} className="relative">
                <a
                  href={`#${link.id}`}
                  className={cn(
                    "text-sm font-light tracking-wide transition-all duration-300",
                    activeSection === link.id 
                      ? "text-white" 
                      : "text-white/50 hover:text-white/80 hover:scale-105"
                  )}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <motion.div
                      className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full"
                      layoutId="navIndicator"
                      transition={{ type: "spring", duration: 0.5 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
          <Button
            variant="outline"
            size="sm"
            className="rounded-full text-xs border-white/20 hover:bg-white/10 px-5 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/50 hover:text-white"
            onClick={() => window.open('https://www.overleaf.com/read/ttjwbtkcfmmd#a64414', '_blank')}
          >
            Resume
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white w-12 h-12 relative focus:outline-none z-50 active:scale-95"
          style={{ touchAction: 'manipulation' }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="block w-8 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <span
              aria-hidden="true"
              className={cn(
                "block absolute h-0.5 w-8 bg-white transform transition duration-300 ease-in-out",
                mobileMenuOpen ? "rotate-45" : "-translate-y-1.5"
              )}
            />
            <span
              aria-hidden="true"
              className={cn(
                "block absolute h-0.5 w-8 bg-white transform transition duration-300 ease-in-out",
                mobileMenuOpen ? "opacity-0" : "w-8"
              )}
            />
            <span
              aria-hidden="true"
              className={cn(
                "block absolute h-0.5 w-8 bg-white transform transition duration-300 ease-in-out",
                mobileMenuOpen ? "-rotate-45" : "translate-y-1.5"
              )}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex flex-col items-center justify-center w-full h-full overflow-y-auto p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center w-full">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.id}
                  href={`#${link.id}`}
                  className="text-3xl font-light my-6 text-white/70 hover:text-white transition-all duration-300 hover:scale-105 px-6 py-4 block rounded-lg"
                  style={{ minHeight: 56, minWidth: 120, textAlign: 'center' }}
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    setTimeout(() => {
                      document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3, delay: navLinks.length * 0.1 }}
                className="mt-8"
              >
                <Button 
                  variant="outline"
                  className="rounded-full border-white/20 hover:bg-white/10 px-8 py-6 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/50 hover:text-white"
                  onClick={() => {
                    window.open('https://www.overleaf.com/read/ttjwbtkcfmmd#a64414', '_blank');
                    setMobileMenuOpen(false);
                  }}
                >
                  Resume
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
