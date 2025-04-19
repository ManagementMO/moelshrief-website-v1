
import { useState } from "react";
import { FuturisticButton } from "./ui/futuristic-button";

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  
  // Project data
  const projects = [
    {
      id: 1,
      title: "Data Warehouse Architecture",
      description: "Designed and implemented a cloud-based data warehouse solution using Snowflake, reducing query times by 75% and enabling real-time analytics.",
      image: "https://placehold.co/600x400/222222/FFFFFF/png?text=Data+Warehouse",
      category: "engineering",
      technologies: ["Snowflake", "Airflow", "dbt", "Python"],
      link: "#",
    },
    {
      id: 2,
      title: "Customer Segmentation Analysis",
      description: "Developed a machine learning model to segment customers based on behavior and preferences, increasing marketing ROI by 30%.",
      image: "https://placehold.co/600x400/222222/FFFFFF/png?text=Customer+Segmentation",
      category: "analysis",
      technologies: ["Python", "scikit-learn", "Jupyter", "Tableau"],
      link: "#",
    },
    {
      id: 3,
      title: "Real-time Analytics Pipeline",
      description: "Created a streaming data pipeline using Kafka and Spark Streaming for real-time monitoring of user activity and system performance.",
      image: "https://placehold.co/600x400/222222/FFFFFF/png?text=Streaming+Pipeline",
      category: "engineering",
      technologies: ["Kafka", "Spark", "Elasticsearch", "Grafana"],
      link: "#",
    },
    {
      id: 4,
      title: "Predictive Maintenance Model",
      description: "Built a predictive model to forecast equipment failures, reducing unplanned downtime by 35% and maintenance costs by 25%.",
      image: "https://placehold.co/600x400/222222/FFFFFF/png?text=Predictive+Model",
      category: "machine-learning",
      technologies: ["Python", "TensorFlow", "Time Series", "IoT"],
      link: "#",
    },
    {
      id: 5,
      title: "Financial Data Dashboard",
      description: "Designed interactive dashboards for financial performance monitoring, providing actionable insights on revenue, expenses, and KPIs.",
      image: "https://placehold.co/600x400/222222/FFFFFF/png?text=Finance+Dashboard",
      category: "visualization",
      technologies: ["PowerBI", "DAX", "SQL", "Financial Modeling"],
      link: "#",
    },
    {
      id: 6,
      title: "ETL Process Optimization",
      description: "Optimized existing ETL processes, reducing processing time by 60% and improving data quality through automated validation.",
      image: "https://placehold.co/600x400/222222/FFFFFF/png?text=ETL+Optimization",
      category: "engineering",
      technologies: ["Python", "Airflow", "SQL", "Docker"],
      link: "#",
    },
  ];
  
  // Filter projects based on active category
  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
  
  // Categories for filter
  const categories = [
    { id: "all", name: "All Projects" },
    { id: "engineering", name: "Data Engineering" },
    { id: "analysis", name: "Data Analysis" },
    { id: "machine-learning", name: "Machine Learning" },
    { id: "visualization", name: "Visualization" },
  ];
  
  return (
    <section 
      id="projects" 
      className="relative py-20 overflow-hidden bg-gradient-to-b from-background to-futuristic-dark/40"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-sm bg-futuristic-purple/10 text-futuristic-purple mb-4">
            Projects
          </span>
          
          <h2 className="text-4xl font-bold mb-6">
            Featured <span className="text-futuristic-blue">Data Projects</span>
          </h2>
          
          <p className="text-muted-foreground">
            Explore my portfolio of data engineering and analytics projects that demonstrate
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              className="group relative overflow-hidden rounded-2xl glass-effect transition-all duration-300 hover:shadow-glow-md hover:scale-[1.02]"
            >
              {/* Project image */}
              <div className="h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-futuristic-dark to-transparent opacity-60"></div>
              </div>
              
              {/* Project info */}
              <div className="p-6 relative">
                <h3 className="text-xl font-bold mb-2 group-hover:text-futuristic-purple transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                {/* Technologies used */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map(tech => (
                    <span 
                      key={tech} 
                      className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.link} 
                  className="inline-flex items-center text-futuristic-purple hover:underline"
                >
                  View Project
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 ml-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7" 
                    />
                  </svg>
                </a>
                
                {/* Decorative element */}
                <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-futuristic-purple/10 rounded-full blur-xl group-hover:bg-futuristic-purple/20 transition-all"></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center mt-16">
          <FuturisticButton 
            variant="outline" 
            size="lg"
            onClick={() => window.open('https://github.com/yourusername', '_blank')}
          >
            View All Projects
          </FuturisticButton>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
