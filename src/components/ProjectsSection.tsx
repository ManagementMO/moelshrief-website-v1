import { useState } from "react";
import { motion } from "framer-motion";
import { FuturisticButton } from "./ui/futuristic-button";
import { ExternalLink, Github } from "lucide-react";
import { TechIcon } from "./TechIcon";

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [visibleProjects, setVisibleProjects] = useState(4);
  
  // Project data
  const projects = [
    {
      id: 1,
      title: "MO-Planner",
      description: "Developed a financial planning tool that utilizes Excel/VBA Formula to forecast student budgets with 90% accuracy to provide consistent and accessible insights. Incorporating features such as automated expense categorization, interactive visualization of spending patterns, and savings calculator.",
      image: "/images/projects/vba-finance-tool.jpg",
      category: "finance",
      technologies: ["Microsoft Excel", "VBA", "Python"],
      githubUrl: "https://github.com/ManagementMO/VBA-Financial-Planning-Tool",
      liveUrl: "https://github.com/ManagementMO/VBA-Financial-Planning-Tool",
      stats: ["90% accuracy", "100+ students"]
    },
    {
      id: 2,
      title: "FocusForge",
      description: "Engineered a comprehensive Time Management DSS in Excel/VBA, integrating assignment management with deadline conflict resolution, a dynamic calendar, study tracker, journaling, Kanban board, and automated GPA calculator.",
      image: "/images/projects/focusforge.jpg",
      category: "productivity",
      technologies: ["Microsoft Excel", "VBA", "Gemini API"],
      githubUrl: "https://github.com/ManagementMO/focus-forge",
      liveUrl: "https://jasooh.github.io/mse-100-launch-page/",
      stats: ["Dynamic Calendar", "AI Integration"]
    },
    {
      id: 3,
      title: "Scam-Mah",
      description: "Engineered an AI-powered spam detection system using StandardScaler and IsolationForest ML algorithms to analyze call patterns and identify potential scams, achieving 90% accuracy in flagging suspicious calls during testing.",
      image: "/images/projects/scam-mah.jpg",
      category: "ai",
      technologies: ["Python", "Flask", "Machine Learning", "HTML/CSS/JS", "Gemini API"],
      githubUrl: "https://github.com/nicholasching/Scam-Mah",
      liveUrl: "https://devpost.com/software/scam-mah",
      stats: ["90% accuracy", "3rd Place NewHacks 2023"]
    },
    {
      id: 4,
      title: "Paybridge Technologies",
      description: "Developed a full-stack web application using Python, React.js, and PostgreSQL to streamline money transfers between various financial institutions, focusing on simplifying cross-border transactions.",
      image: "/images/projects/pay-bridge.jpg",
      category: "web",
      technologies: ["Python", "React.js", "PostgreSQL", "MongoDB", "Docker"],
      githubUrl: "https://github.com/ManagementMO/paybridge",
      liveUrl: "https://paybridgetech.com/",
      stats: ["50+ beta users", "$1,000+ transactions"]
    }
  ];
  
  // Filter projects based on active category
  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
  
  // Get visible projects
  const projectsToShow = filteredProjects.slice(0, visibleProjects);
  
  // Function to show more projects
  const showMoreProjects = () => {
    setVisibleProjects(prev => Math.min(prev + 4, filteredProjects.length));
  };
  
  // Categories for filter
  const categories = [
    { id: "all", name: "All Projects" },
    { id: "finance", name: "Finance" },
    { id: "productivity", name: "Productivity" },
    { id: "ai", name: "AI/ML" },
    { id: "web", name: "Web Development" },
  ];
  
  return (
    <section 
      id="projects" 
      className="relative py-20 overflow-hidden bg-gradient-to-b from-background to-futuristic-dark/40"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Featured <span className="text-futuristic-blue">Projects</span>
          </h2>
          
          <p className="text-muted-foreground">
            Explore my portfolio of innovative projects that demonstrate
            my technical skills and problem-solving approach.
          </p>
        </div>
        
        {/* Project filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full transition-all ${
                activeCategory === category.id
                  ? "bg-futuristic-purple text-white shadow-glow-sm"
                  : "bg-white/5 hover:bg-white/10"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projectsToShow.map(project => (
            <motion.div 
              key={project.id} 
              className="group relative overflow-hidden rounded-2xl glass-effect transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:scale-[1.02]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* Project image */}
              <div className="h-56 overflow-hidden bg-black">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-futuristic-dark to-transparent opacity-60"></div>
                
                {/* Links */}
                <div className="absolute top-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {project.githubUrl && project.title !== 'Paybridge Technologies' && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
              
              {/* Project info */}
              <div className="p-6 relative">
                <h3 className="text-xl font-bold mb-2 group-hover:text-white group-hover:text-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                {/* Stats */}
                {project.stats && project.stats.length > 0 && (
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.stats.map((stat, index) => (
                      <span
                        key={index}
                        className="text-sm px-3 py-1 rounded-full bg-white/10 text-white shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                      >
                        {stat}
                      </span>
                    ))}
                  </div>
                )}
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-3 mt-6">
                  {project.technologies.map((tech, index) => (
                    <TechIcon 
                      key={index}
                      technology={tech}
                      className="transform group-hover:scale-110 transition-transform duration-300"
                    />
                  ))}
                </div>
              </div>
              
              {/* RTX Effects */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent opacity-50" />
                <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-white/15 to-transparent z-10 blur-xl" />
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center mt-12">
          <FuturisticButton 
            variant="outline" 
            size="lg"
            onClick={() => window.open('https://github.com/ManagementMO', '_blank')}
            className="border-white/30 text-white hover:bg-white/10 hover:border-white/70 hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] focus:shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all"
          >
            View All Projects
          </FuturisticButton>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
