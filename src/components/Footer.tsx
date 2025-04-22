const Footer = () => {
  return (
    <footer className="relative py-10 overflow-hidden bg-futuristic-dark">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-futuristic-purple/30 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8">
          {/* Logo and description */}
          <div>
            <a href="#home" className="text-2xl font-bold text-glow">
              Mo<span className="text-futuristic-purple">.</span>Elshrief
            </a>
            <p className="mt-4 text-muted-foreground text-sm">
              Transforming data into actionable insights through modern engineering and analytics solutions.
            </p>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Mo Elshrief. All rights reserved.
          </p>
          
          <p className="text-sm text-muted-foreground mt-2 md:mt-0">
            Built with <span className="text-futuristic-purple">❤</span> using modern web technologies
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
