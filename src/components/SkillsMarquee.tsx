import React, { useMemo } from "react";

interface Skill {
  name: string;
  icon: string;
  color: string;
}

// FIRST ROW SKILLS (data engineering/infrastructure focus)
const firstRowSkills: Skill[] = [
  { name: "Python", icon: "python", color: "#3776AB" },
  { name: "SQL", icon: "mysql", color: "#4479A1" },
  { name: "Pandas", icon: "pandas", color: "#150458" },
  { name: "Spark", icon: "apachespark", color: "#E25A1C" },
  { name: "Kafka", icon: "apachekafka", color: "#231F20" },
  { name: "AWS", icon: "amazonaws", color: "#FF9900" },
  { name: "Docker", icon: "docker", color: "#2496ED" },
  { name: "Kubernetes", icon: "kubernetes", color: "#326CE5" },
  { name: "Airflow", icon: "apacheairflow", color: "#017A9B" },
  { name: "Hadoop", icon: "apachehadoop", color: "#D22128" },
  { name: "Redis", icon: "redis", color: "#DC382D" },
  { name: "PostgreSQL", icon: "postgresql", color: "#336791" },
];

// SECOND ROW SKILLS (analytics/visualization/ML focus)
const secondRowSkills: Skill[] = [
  { name: "TensorFlow", icon: "tensorflow", color: "#FF6F00" },
  { name: "PyTorch", icon: "pytorch", color: "#EE4C2C" },
  { name: "NumPy", icon: "numpy", color: "#013243" },
  { name: "Power BI", icon: "powerbi", color: "#F2C811" },
  { name: "Tableau", icon: "tableau", color: "#E97627" },
  { name: "Excel", icon: "microsoftexcel", color: "#217346" },
  { name: "R", icon: "r", color: "#276DC3" },
  { name: "SciKit Learn", icon: "scikitlearn", color: "#F7931E" },
  { name: "Azure", icon: "microsoftazure", color: "#0078D4" },
  { name: "Analytics", icon: "googleanalytics", color: "#E37400" },
  { name: "Git", icon: "git", color: "#F05032" },
  { name: "VS Code", icon: "visualstudiocode", color: "#007ACC" },
];

// Component for a single skill item with RTX-style glass effect
const NeomorphicSkillItem: React.FC<{ skill: Skill; index: number }> = ({ skill, index }) => {
  // Use SimpleIcons which has great reliability
  const iconUrl = `https://cdn.simpleicons.org/${skill.icon}/${skill.color.replace('#', '')}`;
  
  // Calculate offsets for staggered hover animations
  const hoverDelayMs = (index % 5) * 50;
  
  // Generate a lighter variant of the skill color for gradients
  const lighterColor = useMemo(() => {
    // Convert hex to RGB for color manipulation
    const hex = skill.color.replace('#', '');
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);
    
    // Lighten color for gradient effect
    r = Math.min(255, r + 40);
    g = Math.min(255, g + 40);
    b = Math.min(255, b + 40);
    
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
  }, [skill.color]);

  return (
    <div 
      className="flex flex-col items-center gap-3 min-w-[150px] group" 
      style={{ perspective: "1500px" }}
    >
      <div 
        className="relative h-32 w-32 rounded-2xl flex items-center justify-center p-6 overflow-hidden transition-all duration-500 ease-out transform hover:scale-110 hover:-translate-y-2 group-hover:shadow-2xl"
        style={{
          background: `linear-gradient(135deg, rgba(20,20,20,0.8), rgba(10,10,10,0.9))`,
          backdropFilter: 'blur(20px) saturate(180%)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          boxShadow: `0 15px 35px rgba(0,0,0,0.5), inset 0 1px 1px rgba(255,255,255,0.1), 0 0 15px rgba(${parseInt(skill.color.slice(1, 3), 16)}, ${parseInt(skill.color.slice(3, 5), 16)}, ${parseInt(skill.color.slice(5, 7), 16)}, 0.15)`,
          transition: `all 0.6s cubic-bezier(0.19, 1, 0.22, 1) ${hoverDelayMs}ms`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Subtle color accent ring in skill color */}
        <div 
          className="absolute inset-0 rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"
          style={{
            background: `radial-gradient(circle at center, ${skill.color}33 0%, transparent 70%)`,
            border: `1px solid ${skill.color}22`,
          }}
        ></div>

        {/* Top glossy highlight */}
        <div 
          className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity rounded-t-2xl"
          style={{ 
            transformStyle: 'preserve-3d',
            transform: 'translateZ(2px)' 
          }}
        ></div>
        
        {/* Icon with floating 3D effect */}
        <div 
          className="w-20 h-20 relative z-10 transition-all duration-700 ease-out group-hover:scale-110 group-hover:rotate-6"
          style={{ 
            transformStyle: 'preserve-3d',
            transform: 'translateZ(40px)', // Stronger 3D pop out
            filter: `drop-shadow(0 10px 15px rgba(0,0,0,0.6)) drop-shadow(0 0 10px ${skill.color}55)`
          }}
        >
          <div className="w-full h-full rounded-full flex items-center justify-center">
            <img
              src={iconUrl}
              alt={`${skill.name} logo`}
              className="w-16 h-16 object-contain"
              loading="lazy"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                
                // First fallback: try colorized SVG
                target.src = `https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/${skill.icon}.svg`;
                target.style.filter = `brightness(0) invert(1) drop-shadow(0 0 3px ${skill.color}77)`;
                
                // Second fallback: generate rich canvas with icon initials
                target.onerror = () => {
                  const canvas = document.createElement('canvas');
                  canvas.width = 160;
                  canvas.height = 160;
                  const ctx = canvas.getContext('2d');
                  if (ctx) {
                    // Create glossy button with text
                    const gradient = ctx.createLinearGradient(0, 0, 0, 160);
                    gradient.addColorStop(0, lighterColor);
                    gradient.addColorStop(1, skill.color);
                    
                    // Fill background with gradient
                    ctx.fillStyle = gradient;
                    ctx.beginPath();
                    ctx.arc(80, 80, 70, 0, Math.PI * 2);
                    ctx.fill();
                    
                    // Add glass highlight
                    const highlight = ctx.createLinearGradient(0, 0, 0, 80);
                    highlight.addColorStop(0, 'rgba(255, 255, 255, 0.7)');
                    highlight.addColorStop(1, 'rgba(255, 255, 255, 0)');
                    ctx.fillStyle = highlight;
                    ctx.beginPath();
                    ctx.arc(80, 60, 60, 0, Math.PI, true);
                    ctx.fill();
                    
                    // Add text
                    ctx.fillStyle = '#ffffff';
                    ctx.font = 'bold 50px Arial';
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    ctx.fillText(skill.name.substring(0, 2).toUpperCase(), 80, 85);
                    
                    // Add shadow
                    ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
                    ctx.shadowBlur = 15;
                    ctx.shadowOffsetY = 8;
                    ctx.beginPath();
                    ctx.arc(80, 80, 68, 0, Math.PI * 2);
                    ctx.stroke();
                    
                    target.src = canvas.toDataURL('image/png');
                  }
                };
              }}
            />
          </div>
        </div>
          
        {/* Bottom reflection - more pronounced */}
        <div 
          className="absolute bottom-0 left-1/4 right-1/4 h-1/3 opacity-50 group-hover:opacity-70 transition-all duration-700"
          style={{ 
            background: `linear-gradient(to top, ${skill.color}33, transparent)`,
            borderRadius: '50%',
            filter: 'blur(5px)',
            transform: 'scaleY(0.5) translateY(15px)' 
          }}
        ></div>
      </div>
      <span 
        className="text-base font-semibold text-gray-200 tracking-wide transition-all duration-500 group-hover:text-white"
        style={{ 
          textShadow: `0 2px 8px rgba(0,0,0,0.7), 0 0 10px rgba(${parseInt(skill.color.slice(1, 3), 16)}, ${parseInt(skill.color.slice(3, 5), 16)}, ${parseInt(skill.color.slice(5, 7), 16)}, 0.3)`
        }}
      >
        {skill.name}
      </span>
    </div>
  );
};

export default function SkillsMarquee() {
  // We match animation duration to the number of items to maintain consistent speed
  const firstRowDuration = `${firstRowSkills.length * 4}s`;
  const secondRowDuration = `${secondRowSkills.length * 4}s`;
  
  // Define CSS keyframes for perfect smooth animations
  const keyframes = `
    @keyframes marquee-rtl {
      0% { transform: translateX(0); }
      100% { transform: translateX(calc(-150px * ${secondRowSkills.length})); }
    }
    @keyframes marquee-ltr {
      0% { transform: translateX(calc(-150px * ${firstRowSkills.length})); }
      100% { transform: translateX(0); }
    }
    .animate-marquee-rtl {
      animation: marquee-rtl linear infinite;
    }
    .animate-marquee-ltr {
      animation: marquee-ltr linear infinite;
    }
    .group:hover .pause-on-hover {
      animation-play-state: paused;
    }
    .text-shadow-glow {
      text-shadow: 0 0 10px rgba(255, 255, 255, 0.8), 0 0 30px rgba(255, 255, 255, 0.4);
    }
  `;

  return (
    <section className="py-24 bg-cyber-bg overflow-hidden">
      {/* Add the CSS keyframes */}
      <style>{keyframes}</style>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-5 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
            Technical Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Leveraging cutting-edge tools and technologies to transform complex data into actionable insights
          </p>
        </div>
        
        {/* Row 1: Data Engineering Tools - Left to Right */}
        <div className="relative mb-14 overflow-hidden group">
          {/* Gradient Masks */}
          <div className="absolute top-0 bottom-0 left-0 w-40 z-10 bg-gradient-to-r from-cyber-bg via-cyber-bg/90 to-transparent pointer-events-none"></div>
          <div className="absolute top-0 bottom-0 right-0 w-40 z-10 bg-gradient-to-l from-cyber-bg via-cyber-bg/90 to-transparent pointer-events-none"></div>
          
          {/* Infinite Scroll Container */}
          <div className="flex py-6 w-min animate-marquee-ltr pause-on-hover" style={{ animationDuration: firstRowDuration }}>
            {/* Double the array for seamless looping */}
            {[...firstRowSkills, ...firstRowSkills].map((skill, i) => (
              <NeomorphicSkillItem key={`ltr-${i}`} skill={skill} index={i} />
            ))}
          </div>
        </div>
        
        {/* Row 2: Analytics & ML Tools - Right to Left */}
        <div className="relative overflow-hidden group">
          {/* Gradient Masks */}
          <div className="absolute top-0 bottom-0 left-0 w-40 z-10 bg-gradient-to-r from-cyber-bg via-cyber-bg/90 to-transparent pointer-events-none"></div>
          <div className="absolute top-0 bottom-0 right-0 w-40 z-10 bg-gradient-to-l from-cyber-bg via-cyber-bg/90 to-transparent pointer-events-none"></div>
          
          {/* Infinite Scroll Container */}
          <div className="flex py-6 w-min animate-marquee-rtl pause-on-hover" style={{ animationDuration: secondRowDuration }}>
            {/* Double the array for seamless looping */}
            {[...secondRowSkills, ...secondRowSkills].map((skill, i) => (
              <NeomorphicSkillItem key={`rtl-${i}`} skill={skill} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
