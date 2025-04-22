import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { DownloadIcon, LinkedinIcon, GithubIcon, ExternalLinkIcon, Building, Calendar, MapPin } from 'lucide-react';
import { FuturisticButton } from '@/components/ui/futuristic-button';

const AboutPage: React.FC = () => {
  const experience = [
    {
      title: "Data Analyst & Automation Engineer (Incoming)",
      company: "LifeWerx",
      period: "May 2025 - August 2025",
      location: "Cambridge, ON",
      description: "Python-based automation for data analysis and system improvement, leveraging advanced programming for data-driven solutions.",
      tags: ["Python", "Automation", "Data Analysis", "System Optimization"]
    },
    {
      title: "Technology Consultant",
      company: "Outlier AI",
      period: "January 2023 - May 2023",
      location: "Remote",
      description: "Spearheaded the integration of cloud-based CRM software and cybersecurity solutions for 10 small to medium businesses. Enhanced business performance by implementing analytical models that improved decision accuracy by 35%, leading to a 20% increase in operational efficiency.",
      tags: ["Cloud Integration", "CRM", "Cybersecurity", "Analytical Modeling"]
    },
    {
      title: "AI Trainer",
      company: "Outlier AI",
      period: "Sept 2021 - Present",
      location: "Remote",
      description: "Supervised data annotation and training, ensuring quality training datasets that enhanced model accuracy by 15-20%. Identified and corrected model errors by analyzing outputs/logs, leading to a 15% reduction in error rates.",
      tags: ["Data Annotation", "Model Training", "Error Analysis", "Quality Assurance"]
    },
    {
      title: "Student Trustee",
      company: "Limestone District School Board",
      period: "August 2022 - August 2023",
      location: "Kingston, ON",
      description: "Elected as Prime Student Trustee, representing 20,000 students at monthly meetings of the Board of Trustees. Advocated for student needs and perspectives on mental health, pandemic education, and athletics funding.",
      tags: ["Leadership", "Advocacy", "Public Speaking", "Policy Development"]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Applied Science in Management Engineering",
      specialization: "Option in Artificial Intelligence",
      institution: "University of Waterloo",
      period: "Sep. 2024 - Present",
      location: "Waterloo, ON"
    }
  ];

  const skills = {
    languages: ["Python", "R", "SQL", "Excel", "VBA", "Power BI", "Tableau"],
    libraries: ["Numpy", "Pandas", "Matplotlib", "PyTorch", "Keras"],
    tools: ["Git", "Docker", "Kubernetes", "JupyterLab", "SAP", "AWS", "VS Code"]
  };

  return (
    <div className="min-h-screen bg-cyber-bg text-cyber-text">
      <Navbar />
      
      <main className="pt-20 pb-32">
        {/* Hero Section */}
        <section className="mb-20">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div 
              className="flex-1"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Mohammed <span className="text-primary">Elshrief</span>
              </h1>
              
              <div className="mb-8 text-xl font-light">
                <span className="text-primary">Data Engineer | Automation Specialist | AI Enthusiast</span>
              </div>
              
              <p className="text-lg text-muted-foreground mb-8">
                I'm a data-driven professional specializing in transforming complex data into actionable insights. With expertise in Python, SQL, and various automation tools, I create efficient, scalable solutions that drive business value through data engineering and AI applications.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <FuturisticButton onClick={() => window.open('/resume.pdf', '_blank')}>
                  <DownloadIcon className="mr-2 h-4 w-4" />
                  Download Resume
                </FuturisticButton>
                
                <FuturisticButton 
                  variant="outline" 
                  onClick={() => window.open('https://linkedin.com/in/mohammed-elshrief', '_blank')}
                >
                  <LinkedinIcon className="mr-2 h-4 w-4" />
                  LinkedIn
                </FuturisticButton>
                
                <FuturisticButton 
                  variant="outline" 
                  onClick={() => window.open('https://github.com/ManagementMO', '_blank')}
                >
                  <GithubIcon className="mr-2 h-4 w-4" />
                  GitHub
                </FuturisticButton>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative flex-1 aspect-square max-w-md"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-primary/20">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20"></div>
                <img 
                  src="/images/profile.jpg" 
                  alt="Mohammed Elshrief" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-8 -left-8 w-16 h-16 border-2 border-dashed border-primary/30 rounded-lg"></div>
              <div className="absolute -bottom-5 -right-5 w-24 h-24 border-2 border-dashed border-secondary/30 rounded-lg"></div>
              <div className="absolute bottom-10 -left-10 w-20 h-20 bg-primary/10 blur-3xl rounded-full"></div>
            </motion.div>
          </div>
        </section>
        
        {/* Experience Section */}
        <section className="mb-20">
          <motion.h2 
            className="text-3xl font-bold mb-8 flex items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="w-10 h-px bg-primary mr-3"></span>
            Professional Experience
          </motion.h2>
          
          <div className="space-y-12">
            {experience.map((exp, index) => (
              <motion.div 
                key={index} 
                className="relative pl-8 border-l-2 border-cyber-border"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-cyber-bg border-2 border-primary"></div>
                
                <div className="mb-2 flex items-center gap-2">
                  <h3 className="text-xl font-bold text-cyber-text">{exp.title}</h3>
                </div>
                
                <div className="mb-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
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
                
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        
        {/* Education Section */}
        <section className="mb-20">
          <motion.h2 
            className="text-3xl font-bold mb-8 flex items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="w-10 h-px bg-secondary mr-3"></span>
            Education
          </motion.h2>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div 
                key={index}
                className="bg-cyber-card/30 backdrop-blur-sm border border-cyber-border rounded-xl p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h3 className="text-xl font-bold mb-1 text-cyber-text">{edu.degree}</h3>
                <p className="mb-4 text-secondary">{edu.specialization}</p>
                
                <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground mb-2">
                  <div className="flex items-center">
                    <Building className="mr-1 h-4 w-4 text-primary" />
                    {edu.institution}
                  </div>
                  
                  <div className="flex items-center">
                    <Calendar className="mr-1 h-4 w-4 text-secondary" />
                    {edu.period}
                  </div>
                  
                  <div className="flex items-center">
                    <MapPin className="mr-1 h-4 w-4 text-cyber-accent" />
                    {edu.location}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        
        {/* Skills Section */}
        <section>
          <motion.h2 
            className="text-3xl font-bold mb-8 flex items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="w-10 h-px bg-cyber-accent mr-3"></span>
            Technical Skills
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-cyber-card/30 backdrop-blur-sm border border-cyber-border rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-4 text-primary">Languages & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-cyber-card/30 backdrop-blur-sm border border-cyber-border rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold mb-4 text-secondary">Libraries & Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                {skills.libraries.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 text-sm rounded-full bg-secondary/10 text-secondary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-cyber-card/30 backdrop-blur-sm border border-cyber-border rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-lg font-semibold mb-4 text-cyber-accent">Developer Tools</h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 text-sm rounded-full bg-cyber-accent/10 text-cyber-accent"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
