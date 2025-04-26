import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="relative py-10 overflow-hidden bg-futuristic-dark">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-futuristic-purple/30 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8">
          {/* Logo and description */}
          <div>
            <a 
              href="/" 
              className="text-2xl font-bold text-glow"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = '/';
                window.scrollTo(0, 0);
              }}
            >
              Mohammed<span className="text-futuristic-purple">.</span>Elshrief
            </a>
            <p className="mt-4 text-muted-foreground text-sm">
              Forming insights from data through over-engineering and analysis paralysis.
            </p>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Mohammed Elshrief. All rights reserved.
          </p>
          
          <p className="text-sm text-muted-foreground mt-2 md:mt-0 flex items-center">
            Built with{' '}
            <motion.span 
              className="inline-block mx-1"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 5, 0],
                filter: [
                  'drop-shadow(0 0 5px rgba(255,255,255,0.5))',
                  'drop-shadow(0 0 15px rgba(255,255,255,0.8))',
                  'drop-shadow(0 0 5px rgba(255,255,255,0.5))'
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <span className="relative inline-block">
                <span className="absolute inset-0 bg-gradient-to-r from-red-500 via-pink-500 to-red-500 rounded-full blur-sm opacity-50"></span>
                <span className="relative text-red-500">❤</span>
              </span>
            </motion.span>
            {'  '} using: {'    '}
            <span className="inline-flex items-center space-x-1">
              <span className="text-[#3178C6]">TypeScript</span>
              <span className="text-white/50">•</span>
              <span className="text-[#61DAFB]">React</span>
              <span className="text-white/50">•</span>
              <span className="text-[#06B6D4]">Tailwind</span>
              <span className="text-white/50">•</span>
              <span className="text-[#646CFF]">Vite</span>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
