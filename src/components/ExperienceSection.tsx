
import { useEffect, useRef } from "react";

const ExperienceSection = () => {
  const timelineRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  // Experience data
  const experiences = [
    {
      id: 1,
      role: "Senior Data Engineer",
      company: "TechCorp Inc.",
      period: "2022 - Present",
      description: "Leading the design and implementation of data pipelines for real-time analytics. Migrated legacy systems to modern cloud architecture, reducing costs by 40% and improving performance.",
      achievements: [
        "Architected a distributed data processing system handling 5TB+ daily",
        "Led a team of 5 engineers in building data quality frameworks",
        "Reduced ETL processing time by 65% through optimized workflows"
      ]
    },
    {
      id: 2,
      role: "Data Analyst",
      company: "AnalyticsFirm",
      period: "2020 - 2022",
      description: "Developed analytical solutions for financial services clients. Created dashboards and reports that drove business decision-making and strategy development.",
      achievements: [
        "Built predictive models with 92% accuracy for customer churn",
        "Implemented A/B testing framework that increased conversion by 28%",
        "Developed automated reporting system saving 20+ hours weekly"
      ]
    },
    {
      id: 3,
      role: "Data Science Intern",
      company: "InnovateAI",
      period: "2019 - 2020",
      description: "Collaborated with data scientists to build machine learning models for consumer behavior prediction. Participated in the full ML lifecycle from data preparation to deployment.",
      achievements: [
        "Created NLP pipeline for sentiment analysis on customer feedback",
        "Improved recommendation engine accuracy by 15%",
        "Developed data visualization tools for non-technical stakeholders"
      ]
    },
    {
      id: 4,
      role: "Database Administrator",
      company: "DataSolutions Ltd.",
      period: "2018 - 2019",
      description: "Managed and optimized database systems for enterprise clients. Ensured data integrity, security, and availability through proactive monitoring and maintenance.",
      achievements: [
        "Reduced database query response time by 40% through optimization",
        "Implemented automated backup and recovery procedures",
        "Migrated on-premise databases to cloud platforms"
      ]
    }
  ];
  
  // Animate timeline items when they come into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    timelineRefs.current.forEach((ref) => {
      if (ref) {
        ref.classList.add('opacity-0');
        observer.observe(ref);
      }
    });
    
    return () => {
      timelineRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);
  
  return (
    <section 
      id="experience" 
      className="relative py-20 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-futuristic-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-futuristic-purple/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-sm bg-futuristic-purple/10 text-futuristic-purple mb-4">
            Experience
          </span>
          
          <h2 className="text-4xl font-bold mb-6">
            Professional <span className="text-futuristic-blue">Journey</span>
          </h2>
          
          <p className="text-muted-foreground">
            My career path in data engineering and analytics, showcasing the projects
            I've worked on and the skills I've developed along the way.
          </p>
        </div>
        
        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute top-0 bottom-0 left-[15px] md:left-1/2 md:-ml-[1px] w-[2px] bg-gradient-to-b from-futuristic-purple via-futuristic-blue to-futuristic-purple/50"></div>
          
          {/* Timeline items */}
          {experiences.map((exp, index) => (
            <div 
              key={exp.id}
              ref={el => timelineRefs.current[index] = el}
              className={`relative mb-12 opacity-0 transition-opacity duration-700 ${
                index % 2 === 0 ? 'md:ml-auto md:pl-12 pl-12' : 'md:mr-auto md:pr-0 pl-12'
              }`}
              style={{ 
                transitionDelay: `${index * 200}ms`,
                width: '100%',
                maxWidth: '550px' 
              }}
            >
              {/* Timeline dot */}
              <div className={`absolute top-2 w-8 h-8 rounded-full bg-futuristic-dark border-2 border-futuristic-purple flex items-center justify-center ${
                index % 2 === 0 ? 'md:-left-4 -left-4' : 'md:-left-4 -left-4'
              }`}>
                <div className="w-3 h-3 rounded-full bg-futuristic-purple"></div>
              </div>
              
              {/* Timeline content */}
              <div className="relative glass-effect p-6 rounded-xl">
                {/* Decorative corner */}
                <div className={`absolute top-3 w-4 h-4 rotate-45 glass-effect ${
                  index % 2 === 0 ? 'md:-left-2 -left-2' : 'md:-left-2 -left-2'
                }`}></div>
                
                <span className="inline-block px-3 py-1 rounded-full text-xs bg-futuristic-purple/10 text-futuristic-purple mb-2">
                  {exp.period}
                </span>
                
                <h3 className="text-xl font-bold">{exp.role}</h3>
                <h4 className="text-futuristic-blue mb-3">{exp.company}</h4>
                
                <p className="text-muted-foreground mb-4">
                  {exp.description}
                </p>
                
                <h5 className="font-semibold mb-2">Key Achievements:</h5>
                <ul className="space-y-1">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <div className="mr-2 mt-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-futuristic-purple"></div>
                      </div>
                      <span className="text-sm text-muted-foreground">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        {/* Education section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-center">Education & Certifications</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Education */}
            <div className="glass-effect p-6 rounded-xl hover:shadow-glow-sm transition-all">
              <h4 className="text-lg font-semibold mb-1">MSc in Data Science</h4>
              <h5 className="text-futuristic-blue mb-3">University of Technology</h5>
              <p className="text-sm text-muted-foreground">
                Focused on advanced machine learning techniques, distributed systems, and statistical analysis. 
                Graduated with honors.
              </p>
            </div>
            
            <div className="glass-effect p-6 rounded-xl hover:shadow-glow-sm transition-all">
              <h4 className="text-lg font-semibold mb-1">BSc in Computer Science</h4>
              <h5 className="text-futuristic-blue mb-3">State University</h5>
              <p className="text-sm text-muted-foreground">
                Specialized in database systems and algorithm design. 
                Completed undergraduate research in data mining techniques.
              </p>
            </div>
            
            {/* Certifications */}
            <div className="glass-effect p-6 rounded-xl hover:shadow-glow-sm transition-all">
              <h4 className="text-lg font-semibold mb-1">Professional Certifications</h4>
              <ul className="space-y-2 mt-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-futuristic-purple mr-2"></div>
                  <span className="text-sm">AWS Certified Data Analytics Specialist</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-futuristic-purple mr-2"></div>
                  <span className="text-sm">Google Professional Data Engineer</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-futuristic-purple mr-2"></div>
                  <span className="text-sm">Microsoft Certified: Azure Data Scientist Associate</span>
                </li>
              </ul>
            </div>
            
            <div className="glass-effect p-6 rounded-xl hover:shadow-glow-sm transition-all">
              <h4 className="text-lg font-semibold mb-1">Specialized Training</h4>
              <ul className="space-y-2 mt-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-futuristic-purple mr-2"></div>
                  <span className="text-sm">Advanced Deep Learning with TensorFlow</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-futuristic-purple mr-2"></div>
                  <span className="text-sm">Data Engineering on Google Cloud Platform</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-futuristic-purple mr-2"></div>
                  <span className="text-sm">Apache Kafka for Stream Processing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
