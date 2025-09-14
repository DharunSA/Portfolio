import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Education = () => {
  const { ref, isInView } = useScrollAnimation();
  
  const educationData = [
    {
      degree: "Bachelor of Technology in Electronics and Communication Engineering",
      institution: "Indian Institute of Information Technology, Sri City",
      location: "Sri City, Andhra Pradesh",
      year: "Aug 2023 – Present",
      gpa: "8.3/10.0",
      description: "Comprehensive study in Electronics and Communication Engineering with focus on embedded systems, IoT, and full-stack development",
      highlights: ["Data Structures and Algorithms", "Computer Architecture", "Database Management", "Embedded Systems", "Internet of Things (IoT)"]
    }
  ];

  return (
    <section id="education" className="py-20 px-6 relative">
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
              <GraduationCap className="text-blue-500 dark:text-blue-400" size={32} />
            </motion.div>
          </div>
          
          <h2 
            className="text-4xl md:text-5xl font-bold mb-4 text-elegant"
            style={{ fontWeight: '600', fontStyle: 'italic' }}
          >
            <span className="text-gradient">Education</span>
          </h2>
          
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "100%" } : { width: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="h-1 bg-gradient-primary mx-auto mb-6"
            style={{ maxWidth: '150px' }}
          />
          
          <p className="text-lg text-white/80 max-w-2xl mx-auto text-body">
            Academic journey that shaped my technical foundation and critical thinking skills
          </p>
        </motion.div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              <div className="glass-card rounded-2xl p-8 hover:scale-[1.02] transition-all duration-300 group">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex items-start gap-6 mb-6 lg:mb-0 flex-1">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="p-4 glass rounded-xl group-hover:bg-gradient-primary transition-all duration-300"
                    >
                      <GraduationCap className="text-blue-500 dark:text-blue-400 group-hover:text-white transition-colors duration-300" size={28} />
                    </motion.div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-gradient transition-colors duration-300 text-elegant" style={{ fontStyle: 'italic' }}>
                        {edu.degree}
                      </h3>
                      <p className="text-lg text-white/80 font-medium mb-3 text-body">{edu.institution}</p>
                      
                      <div className="flex flex-col sm:flex-row gap-4 text-white/70">
                        <div className="flex items-center gap-2">
                          <MapPin size={16} />
                          <span className="text-body">{edu.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          <span className="text-body">{edu.year}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-end gap-2">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 px-4 py-2 glass rounded-full"
                    >
                      <Award size={16} className="text-yellow-500" />
                      <span className="text-white font-semibold text-body">
                        GPA: {edu.gpa}
                      </span>
                    </motion.div>
                  </div>
                </div>
                
                <p className="text-white/80 mb-6 leading-relaxed text-lg text-body">
                  {edu.description}
                </p>
                
                <div className="flex flex-wrap gap-3">
                  {edu.highlights.map((highlight, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ delay: (index * 0.2) + (idx * 0.1) }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-4 py-2 glass rounded-full text-sm text-white/90 hover:bg-gradient-primary hover:text-black transition-all duration-300 cursor-default text-body"
                    >
                      {highlight}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;