
import React, { useMemo } from "react";
import { useTheme } from "@/hooks/use-theme";

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

// Component for a single skill item with glass effect
const GlassSkillItem: React.FC<{ skill: Skill; index: number }> = ({ skill, index }) => {
  const theme = useTheme();
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

  const isDark = theme.mode === 'dark';

  return (
    <div 
      className="flex flex-col items-center gap-3 min-w-[130px] group" 
      style={{ perspective: "1500px" }}
    >
      <div 
        className="relative h-24 w-24 rounded-xl flex items-center justify-center p-5 overflow-hidden transition-all duration-500 ease-out transform hover:scale-110 hover:-translate-y-2 group-hover:shadow-lg glass-card"
        style={{
          transition: `all 0.6s cubic-bezier(0.19, 1, 0.22, 1) ${hoverDelayMs}ms`,
        }}
      >
        {/* Subtle color accent ring in skill color */}
        <div 
          className="absolute inset-0 rounded-xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"
          style={{
            background: `radial-gradient(circle at center, ${skill.color}33 0%, transparent 70%)`,
            border: `1px solid ${skill.color}22`,
          }}
        ></div>

        {/* Top glossy highlight */}
        <div 
          className={`absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity rounded-t-xl ${isDark ? 'from-white/15' : 'from-white/30'}`}
        ></div>
        
        {/* Icon */}
        <div 
          className="w-14 h-14 relative z-10 transition-all duration-700 ease-out group-hover:scale-110 group-hover:rotate-3"
          style={{ 
            filter: `drop-shadow(0 5px 10px rgba(0,0,0,${isDark ? '0.5' : '0.3'})) drop-shadow(0 0 5px ${skill.color}55)`
          }}
        >
          <div className="w-full h-full rounded-full flex items-center justify-center">
            <img
              src={iconUrl}
              alt={`${skill.name} logo`}
              className="w-12 h-12 object-contain"
              loading="lazy"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                
                // First fallback: try colorized SVG
                target.src = `https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/${skill.icon}.svg`;
                target.style.filter = `brightness(0) invert(1) drop-shadow(0 0 3px ${skill.color}77)`;
                
                // Second fallback: generate text initials
                target.onerror = () => {
                  target.src = '';
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    const textEl = document.createElement('div');
                    textEl.innerText = skill.name.substring(0, 2).toUpperCase();
                    textEl.style.fontSize = '20px';
                    textEl.style.fontWeight = 'bold';
                    textEl.style.color = skill.color;
                    textEl.style.filter = `drop-shadow(0 0 5px ${skill.color}44)`;
                    parent.appendChild(textEl);
                  }
                };
              }}
            />
          </div>
        </div>
      </div>
      <span 
        className="text-sm font-medium transition-all duration-500 group-hover:text-primary"
      >
        {skill.name}
      </span>
    </div>
  );
};

export default function SkillsMarquee() {
  const theme = useTheme();
  // We match animation duration to the number of items to maintain consistent speed
  const firstRowDuration = `${firstRowSkills.length * 10}s`;
  const secondRowDuration = `${secondRowSkills.length * 10}s`;
  
  // Define CSS keyframes for animations
  const keyframes = `
    @keyframes marquee-rtl {
      0% { transform: translateX(0); }
      100% { transform: translateX(calc(-130px * ${secondRowSkills.length})); }
    }
    @keyframes marquee-ltr {
      0% { transform: translateX(calc(-130px * ${firstRowSkills.length})); }
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
  `;

  return (
    <section className="py-16 overflow-hidden relative reveal" id="skills">
      {/* Add the CSS keyframes */}
      <style>{keyframes}</style>

      {/* Gradient background with proper blending */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Technical Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Leveraging cutting-edge tools and technologies to transform complex data into actionable insights
          </p>
        </div>
        
        {/* Row 1: Data Engineering Tools - Left to Right */}
        <div className="relative mb-8 overflow-hidden group">
          {/* Gradient Masks */}
          <div className="absolute top-0 bottom-0 left-0 w-20 z-10 bg-gradient-to-r from-background via-background/90 to-transparent pointer-events-none"></div>
          <div className="absolute top-0 bottom-0 right-0 w-20 z-10 bg-gradient-to-l from-background via-background/90 to-transparent pointer-events-none"></div>
          
          {/* Infinite Scroll Container */}
          <div className="flex py-4 w-min animate-marquee-ltr pause-on-hover" style={{ animationDuration: firstRowDuration }}>
            {/* Double the array for seamless looping */}
            {[...firstRowSkills, ...firstRowSkills].map((skill, i) => (
              <GlassSkillItem key={`ltr-${i}`} skill={skill} index={i} />
            ))}
          </div>
        </div>
        
        {/* Row 2: Analytics & ML Tools - Right to Left */}
        <div className="relative overflow-hidden group">
          {/* Gradient Masks */}
          <div className="absolute top-0 bottom-0 left-0 w-20 z-10 bg-gradient-to-r from-background via-background/90 to-transparent pointer-events-none"></div>
          <div className="absolute top-0 bottom-0 right-0 w-20 z-10 bg-gradient-to-l from-background via-background/90 to-transparent pointer-events-none"></div>
          
          {/* Infinite Scroll Container */}
          <div className="flex py-4 w-min animate-marquee-rtl pause-on-hover" style={{ animationDuration: secondRowDuration }}>
            {/* Double the array for seamless looping */}
            {[...secondRowSkills, ...secondRowSkills].map((skill, i) => (
              <GlassSkillItem key={`rtl-${i}`} skill={skill} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
