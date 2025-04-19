
import { FuturisticButton } from "./ui/futuristic-button";

const AboutSection = () => {
  return (
    <section 
      id="about" 
      className="relative py-20 overflow-hidden bg-background"
    >
      {/* Background effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-futuristic-purple/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-futuristic-blue/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
          {/* Left column - image */}
          <div className="md:col-span-2 relative">
            <div className="relative">
              {/* Image border effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-futuristic-purple via-futuristic-blue to-futuristic-purple rounded-2xl blur-sm animate-pulse-glow" style={{ animationDuration: '6s' }}></div>
              
              {/* Profile image */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 h-[480px]">
                <img 
                  src="https://placehold.co/600x800/111111/FFFFFF/png?text=Mo+Elshrief" 
                  alt="Mo Elshrief" 
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay with data visualization pattern */}
                <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm">
                  <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.2\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'1\'/%3E%3Ccircle cx=\'13\' cy=\'13\' r=\'1\'/%3E%3C/g%3E%3C/svg%3E")' }}></div>
                </div>
              </div>
            </div>
            
            {/* Floating stats box */}
            <div className="glass-effect absolute -bottom-6 -right-6 p-4 rounded-xl md:block hidden">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-3xl font-bold text-futuristic-purple">5+</p>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-futuristic-blue">50+</p>
                  <p className="text-sm text-muted-foreground">Projects</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right column - content */}
          <div className="md:col-span-3">
            <span className="inline-block px-3 py-1 rounded-full text-sm bg-futuristic-purple/10 text-futuristic-purple mb-4">
              About Me
            </span>
            
            <h2 className="text-4xl font-bold mb-6">
              Data Artisan with an Engineering <span className="text-futuristic-purple">Mindset</span>
            </h2>
            
            <p className="text-muted-foreground mb-4">
              I'm a Data Engineer and Analyst with expertise in designing and implementing end-to-end data solutions. 
              My journey in data began with a deep curiosity about how information can be transformed into actionable insights.
            </p>
            
            <p className="text-muted-foreground mb-6">
              With experience spanning multiple industries including finance, healthcare, and e-commerce, 
              I've developed a comprehensive understanding of data architectures, ETL processes, and analytics. 
              I'm passionate about creating robust data pipelines that drive business intelligence and enable data-driven decision making.
            </p>
            
            {/* Key values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-futuristic-purple/10 flex items-center justify-center mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-futuristic-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Efficient Solutions</h3>
                  <p className="text-muted-foreground text-sm">Building optimized, scalable data pipelines</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-futuristic-blue/10 flex items-center justify-center mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-futuristic-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Insightful Analysis</h3>
                  <p className="text-muted-foreground text-sm">Extracting meaningful patterns from complex data</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-futuristic-purple/10 flex items-center justify-center mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-futuristic-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Continuous Learning</h3>
                  <p className="text-muted-foreground text-sm">Always expanding my technical toolkit</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-futuristic-blue/10 flex items-center justify-center mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-futuristic-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Collaborative Approach</h3>
                  <p className="text-muted-foreground text-sm">Working effectively with cross-functional teams</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <FuturisticButton
                variant="primary"
                onClick={() => document.getElementById('experience')?.scrollIntoView()}
              >
                My Experience
              </FuturisticButton>
              
              <FuturisticButton
                variant="outline"
                onClick={() => window.open('/resume.pdf', '_blank')}
              >
                Download Resume
              </FuturisticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
