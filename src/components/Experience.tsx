
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Experience = () => {
  const { ref, isInView } = useScrollAnimation();
  
  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "Titan Company LTD",
      location: "Bengaluru, Karnataka",
      period: "Jun 2025 – Jul 2025",
      type: "Internship",
      description: "Built a comprehensive full-stack employee management system using modern web technologies. Gained hands-on experience in enterprise-level software development and system architecture.",
      achievements: [
        "Built a full-stack employee management system using MongoDB, Express.js, React.js, and Node.js (MERN)",
        "Implemented secure authentication and authorization systems",
        "Developed RESTful APIs for seamless data management",
        "Created real-time dashboards with advanced search and filter functionality",
        "Integrated project management and attendance tracking features",
        "Implemented file upload capabilities for end-to-end functionality"
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JavaScript", "REST APIs", "Authentication"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 relative">
      {/* Section Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-50/50 to-transparent dark:via-slate-900/50" />
      
      <div className="container mx-auto max-w-6xl relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="p-3 glass-card rounded-full"
            >
              <Briefcase className="text-blue-500 dark:text-blue-400" size={32} />
            </motion.div>
          </div>
          
          <h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: 'Playfair Display, serif', fontWeight: '600' }}
          >
            <span className="text-gradient">Work Experience</span>
          </h2>
          
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "100%" } : { width: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="h-1 bg-gradient-primary mx-auto mb-6"
            style={{ maxWidth: '200px' }}
          />
          
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Professional journey building innovative solutions and gaining hands-on industry experience
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/50 to-purple-500/50 hidden lg:block" />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative mb-8"
              >
                <div className="glass-card rounded-2xl p-8 hover:scale-[1.02] transition-all duration-300 group">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex items-start gap-6 mb-6 lg:mb-0 flex-1">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="p-4 glass rounded-xl group-hover:bg-gradient-primary transition-all duration-300"
                      >
                        <Briefcase className="text-blue-500 dark:text-blue-400 group-hover:text-white transition-colors duration-300" size={28} />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white mb-2 group-hover:text-gradient transition-colors duration-300">
                          {exp.title}
                        </h3>
                        <p className="text-lg text-slate-600 dark:text-slate-300 font-medium mb-3">{exp.company}</p>
                        <div className="flex flex-col sm:flex-row gap-4 text-slate-500 dark:text-slate-400">
                          <div className="flex items-center gap-2">
                            <MapPin size={16} />
                            <span>{exp.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <span className="px-4 py-2 glass rounded-full text-sm text-slate-700 dark:text-white font-medium">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed text-lg">{exp.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-slate-800 dark:text-white font-semibold mb-3">Key Achievements:</h4>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-slate-600 dark:text-slate-300 flex items-start gap-3">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    {exp.technologies.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="px-3 py-2 glass rounded-full text-sm text-slate-700 dark:text-slate-300 hover:bg-gradient-primary hover:text-white transition-all duration-300 cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;