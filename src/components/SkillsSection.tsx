
import { useEffect, useRef } from "react";

const SkillsSection = () => {
  const progressRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  // Skills data
  const skills = [
    { name: "Data Engineering", level: 95, color: "bg-futuristic-purple" },
    { name: "Data Analysis", level: 90, color: "bg-futuristic-blue" },
    { name: "Machine Learning", level: 85, color: "bg-futuristic-purple-light" },
    { name: "Data Visualization", level: 92, color: "bg-futuristic-blue-dark" },
    { name: "Cloud Platforms", level: 88, color: "bg-futuristic-purple" },
    { name: "SQL & NoSQL", level: 95, color: "bg-futuristic-blue" },
  ];
  
  // Technical skills data
  const technicalSkills = [
    { name: "Python", icon: "🐍" },
    { name: "SQL", icon: "📊" },
    { name: "Spark", icon: "⚡" },
    { name: "Airflow", icon: "🔄" },
    { name: "Kafka", icon: "📨" },
    { name: "AWS", icon: "☁️" },
    { name: "Azure", icon: "☁️" },
    { name: "Tableau", icon: "📈" },
    { name: "PowerBI", icon: "📊" },
    { name: "Docker", icon: "🐳" },
    { name: "Kubernetes", icon: "⎈" },
    { name: "TensorFlow", icon: "🧠" },
  ];
  
  // Animate progress bars when they come into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = progressRefs.current.findIndex(ref => ref === entry.target);
            if (index !== -1) {
              const progressBar = entry.target.querySelector('div:last-child > div') as HTMLElement;
              if (progressBar) {
                progressBar.style.width = `${skills[index].level}%`;
                progressBar.style.opacity = '1';
              }
            }
          }
        });
      },
      { threshold: 0.1 }
    );
    
    progressRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    
    return () => {
      progressRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [skills]);
  
  return (
    <section 
      id="skills" 
      className="relative py-20 overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5" style={{ 
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(155, 135, 245, 0.15) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-sm bg-futuristic-purple/10 text-futuristic-purple mb-4">
            My Skills
          </span>
          
          <h2 className="text-4xl font-bold mb-6">
            Technical <span className="text-futuristic-purple">Expertise</span>
          </h2>
          
          <p className="text-muted-foreground">
            With a strong foundation in data engineering and analysis, I've developed a versatile skill set
            that enables me to tackle complex data challenges and deliver valuable insights.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Skills with progress bars */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">Core Competencies</h3>
            
            <div className="space-y-8">
              {skills.map((skill, index) => (
                <div 
                  key={skill.name}
                  ref={el => progressRefs.current[index] = el}
                  className="space-y-2"
                >
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-futuristic-purple">{skill.level}%</span>
                  </div>
                  
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${skill.color} opacity-0 rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Technical skills grid */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">Technologies & Tools</h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {technicalSkills.map((skill) => (
                <div 
                  key={skill.name}
                  className="glass-effect p-4 rounded-xl flex items-center gap-3 hover:border-futuristic-purple/30 hover:shadow-glow-sm transition-all group"
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-futuristic-purple/10 rounded-lg text-xl group-hover:bg-futuristic-purple/20 transition-colors">
                    {skill.icon}
                  </div>
                  <span className="font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Data flow visualization */}
        <div className="mt-20 relative h-32 overflow-hidden rounded-xl">
          <div className="absolute inset-0 bg-gradient-to-r from-futuristic-purple/20 via-futuristic-blue/20 to-futuristic-purple/20 backdrop-blur-sm"></div>
          
          {/* Animated data streams */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div 
                key={i}
                className="absolute h-1 bg-futuristic-purple/40 rounded-full animate-[dataStream_5s_linear_infinite]"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: '-100px',
                  width: `${30 + Math.random() * 100}px`,
                  opacity: 0.3 + Math.random() * 0.7,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${3 + Math.random() * 4}s`
                }}
              ></div>
            ))}
          </div>
          
          <div className="absolute inset-0 flex items-center justify-center text-center p-4">
            <p className="text-xl font-medium text-glow">
              Transforming raw data into actionable intelligence
            </p>
          </div>
        </div>
      </div>
      
      {/* Keyframes for data stream animation are defined in index.css */}
    </section>
  );
};

export default SkillsSection;
