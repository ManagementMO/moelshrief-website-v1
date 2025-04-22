import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Building, Calendar, MapPin, Award, ExternalLink } from 'lucide-react';

const ExperiencePage: React.FC = () => {
  const experiences = [
    {
      title: "Data Analyst & Automation Engineer (Incoming)",
      company: "LifeWerx",
      period: "May 2025 - August 2025",
      location: "Cambridge, ON",
      description: "Python-based automation for data analysis and system improvement, leveraging advanced programming for data-driven solutions.",
      achievements: [
        "Implementing Python-based automation for data analysis",
        "Enhancing system improvement workflows",
        "Leveraging advanced programming techniques",
        "Creating data-driven solutions"
      ],
      companyUrl: "https://lifewerx.com"
    },
    {
      title: "Technology Consultant",
      company: "Outlier AI",
      period: "January 2023 - May 2023",
      location: "Remote",
      description: "Spearheaded the integration of cloud-based CRM software and cybersecurity solutions for 10 small to medium businesses. Enhanced business performance by implementing analytical models that improved decision accuracy by 35%, leading to a 20% increase in operational efficiency.",
      achievements: [
        "Integrated cloud-based CRM software for 10+ SMBs",
        "Implemented cybersecurity solutions",
        "Created analytical models improving decision accuracy by 35%",
        "Increased operational efficiency by 20%"
      ],
      companyUrl: "https://outlier.ai"
    },
    {
      title: "AI Trainer",
      company: "Outlier AI",
      period: "Sept 2021 - Present",
      location: "Remote",
      description: "Supervised data annotation and training, ensuring quality training datasets that enhanced model accuracy by 15-20%. Identified and corrected model errors by analyzing outputs/logs, leading to a 15% reduction in error rates.",
      achievements: [
        "Supervised data annotation processes",
        "Enhanced model accuracy by 15-20%",
        "Identified and corrected model errors",
        "Reduced error rates by 15%"
      ],
      companyUrl: "https://outlier.ai"
    },
    {
      title: "Student Trustee",
      company: "Limestone District School Board",
      period: "August 2022 - August 2023",
      location: "Kingston, ON",
      description: "Elected as Prime Student Trustee, representing 20,000 students at monthly meetings of the Board of Trustees. Advocated for student needs and perspectives on mental health, pandemic education, and athletics funding.",
      achievements: [
        "Represented 20,000 students as Prime Student Trustee",
        "Advocated for student needs to the Board of Trustees",
        "Led initiatives on mental health awareness",
        "Helped secure additional athletics funding"
      ],
      companyUrl: "https://www.limestone.on.ca"
    }
  ];

  return (
    <div className="min-h-screen bg-cyber-bg text-cyber-text">
      <Navbar />
      
      <main className="pt-24 pb-32">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 rounded-full text-sm bg-primary/10 text-primary mb-4">
              My Journey
            </span>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional <span className="text-secondary">Experience</span>
            </h1>
            
            <p className="text-lg max-w-2xl mx-auto text-muted-foreground">
              My career path in data science, technology consulting, and leadership roles
              that have shaped my professional identity.
            </p>
          </motion.div>
          
          {/* Timeline */}
          <div className="relative flex flex-col space-y-16 mt-20">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-cyber-border transform md:-translate-x-0.5" />
            
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 -ml-2 md:-ml-3.5 w-5 h-5 rounded-full border-4 border-primary bg-cyber-bg" />
                
                {/* Content */}
                <div className="ml-8 md:ml-0 md:w-1/2 md:px-8">
                  <div className="p-6 rounded-xl bg-cyber-card/30 backdrop-blur-sm border border-cyber-border hover:border-primary/30 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-cyber-text mb-2 sm:mb-0">{exp.title}</h3>
                      
                      <a 
                        href={exp.companyUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary hover:underline"
                      >
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Visit
                      </a>
                    </div>
                    
                    <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center">
                        <Building className="mr-1 h-4 w-4 text-primary" />
                        {exp.company}
                      </div>
                      
                      <div className="flex items-center">
                        <Calendar className="mr-1 h-4 w-4 text-secondary" />
                        {exp.period}
                      </div>
                      
                      <div className="flex items-center">
                        <MapPin className="mr-1 h-4 w-4 text-cyber-accent" />
                        {exp.location}
                      </div>
                    </div>
                    
                    <p className="mb-4 text-muted-foreground">
                      {exp.description}
                    </p>
                    
                    <div className="mt-4">
                      <h4 className="text-sm font-medium mb-2 flex items-center">
                        <Award className="mr-2 h-4 w-4 text-primary" />
                        Key Achievements
                      </h4>
                      
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li 
                            key={i}
                            className="flex items-start gap-2"
                          >
                            <div className="rounded-full bg-primary/10 p-1 mt-1.5 flex-shrink-0">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-sm text-muted-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Skills and Tools Radar Chart */}
          <motion.div
            className="mt-24 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-8">
              Skills & <span className="text-primary">Expertise</span>
            </h2>
            
            <div className="max-w-3xl mx-auto p-8 rounded-xl bg-cyber-card/30 backdrop-blur-sm border border-cyber-border">
              {/* Animated data visualization placeholder */}
              <div className="h-64 relative">
                {/* Circular background */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full border border-primary/20 animate-pulse-slow"></div>
                  <div className="absolute w-36 h-36 rounded-full border border-secondary/20 animate-pulse-slow animation-delay-500"></div>
                  <div className="absolute w-24 h-24 rounded-full border border-cyber-accent/20 animate-pulse-slow animation-delay-1000"></div>
                </div>
                
                {/* Skill nodes */}
                <div className="absolute inset-0">
                  {[
                    { name: "Python", position: "top-1/4 left-1/4", color: "bg-primary" },
                    { name: "Data Analysis", position: "top-1/6 right-1/3", color: "bg-secondary" },
                    { name: "SQL", position: "bottom-1/4 right-1/4", color: "bg-primary" },
                    { name: "Machine Learning", position: "bottom-1/5 left-1/3", color: "bg-secondary" },
                    { name: "Excel/VBA", position: "top-1/2 right-1/6", color: "bg-cyber-accent" },
                    { name: "Cloud Solutions", position: "bottom-1/2 left-1/6", color: "bg-cyber-accent" },
                  ].map((skill, i) => (
                    <motion.div 
                      key={i}
                      className={`absolute ${skill.position}`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.8 + (i * 0.1) }}
                    >
                      <div className={`px-3 py-1 rounded-full text-sm ${skill.color}/10 text-${skill.color.replace('bg-', '')}`}>
                        {skill.name}
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Center */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    className="p-4 rounded-full bg-primary/10"
                    animate={{ 
                      boxShadow: [
                        "0 0 10px hsl(var(--primary) / 0.3)",
                        "0 0 20px hsl(var(--primary) / 0.6)",
                        "0 0 10px hsl(var(--primary) / 0.3)"
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <span className="text-primary font-bold">Core Skills</span>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ExperiencePage;
