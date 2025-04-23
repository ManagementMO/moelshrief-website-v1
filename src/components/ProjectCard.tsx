import { motion } from 'framer-motion';
import { TechIcon } from './TechIcon';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  stats?: string[];
}

export const ProjectCard = ({ 
  title, 
  description, 
  technologies, 
  githubUrl,
  liveUrl,
  image = "/images/projects/placeholder.jpg",
  stats
}: ProjectCardProps) => {
  return (
    <motion.div 
      className="group relative overflow-hidden rounded-xl glass-effect h-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -5 }}
    >
      {/* Project image */}
      <div className="relative h-52 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-60"></div>
        
        {/* Links */}
        <div className="absolute top-3 right-3 z-10 flex gap-2">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-md transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-md transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6 relative z-10">
        <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-white/70 mb-4 line-clamp-3">
          {description}
        </p>

        {/* Stats */}
        {stats && stats.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {stats.map((stat, index) => (
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
          {technologies.map((tech, index) => (
            <TechIcon 
              key={index}
              technology={tech}
              className="transform group-hover:scale-110 transition-transform duration-300"
            />
          ))}
        </div>
      </div>

      {/* RTX Effects */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-50" />
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 z-10 blur-xl" />
      </div>
    </motion.div>
  );
}; 