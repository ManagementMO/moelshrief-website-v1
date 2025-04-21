
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

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
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Contact", href: "#contact", id: "contact" },
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
        <a href="#home" className="text-xl font-medium">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Mo.</span>Elshrief
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8 mr-8">
            {navLinks.map((link) => (
              <li key={link.name} className="relative">
                <a
                  href={link.href}
                  className={cn(
                    "text-sm font-light tracking-wide transition-colors",
                    activeSection === link.id ? "text-white" : "text-white/50 hover:text-white/80"
                  )}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {link.name}
                  {activeSection === link.id && (
                    <motion.div
                      className="absolute -bottom-1 left-0 w-full h-[1px] bg-white"
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
            className="rounded-full text-xs border-white/20 hover:bg-white/10 px-5"
            onClick={() => window.open('/resume.pdf', '_blank')}
          >
            Resume
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white w-8 h-8 relative focus:outline-none"
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
                "block absolute h-0.5 bg-white transform transition duration-300 ease-in-out",
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
            className="md:hidden fixed inset-0 bg-black/95 backdrop-blur-md z-40 flex flex-col justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-8 py-12 flex flex-col items-center">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="text-3xl font-light my-4 text-white/70 hover:text-white transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {link.name}
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
                  className="rounded-full border-white/20 hover:bg-white/10 px-8 py-6"
                  onClick={() => {
                    window.open('/resume.pdf', '_blank');
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
