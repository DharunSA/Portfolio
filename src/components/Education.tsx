import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology in Computer Science and Engineering",
      institution: "Sreenidhi Institute of Science and Technology",
      location: "Hyderabad, India",
      year: "2020-2024",
      gpa: "8.5/10.0",
      description: "Comprehensive study in Computer Science with focus on Software Development, Data Structures, and Web Technologies",
      highlights: ["Strong Academic Performance", "Active in Technical Projects", "Web Development Specialization"]
    },
    {
      degree: "Intermediate (12th Grade) - MPC",
      institution: "Narayana Junior College",
      location: "Hyderabad, India",
      year: "2018-2020",
      gpa: "9.2/10.0",
      description: "Mathematics, Physics, and Chemistry with strong foundation in analytical thinking",
      highlights: ["Excellent Academic Performance", "Strong Mathematical Foundation", "Science Stream Excellence"]
    }
  ];

  return (
    <section id="education" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 
            className="text-5xl md:text-6xl font-bold text-white mb-4"
            style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}
          >
            Education
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Academic journey that shaped my technical foundation and critical thinking skills
          </p>
        </motion.div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 backdrop-blur-xl bg-white/10 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="flex items-start gap-4 mb-4 lg:mb-0">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="p-3 bg-white/20 rounded-full"
                    >
                      <GraduationCap className="text-white" size={24} />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors">
                        {edu.degree}
                      </h3>
                      <p className="text-lg text-white/80 font-medium mb-1">{edu.institution}</p>
                      <div className="flex flex-col sm:flex-row gap-4 text-white/60">
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          <span>{edu.year}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="px-4 py-2 bg-white/20 rounded-full text-white font-semibold">
                      GPA: {edu.gpa}
                    </div>
                  </div>
                </div>
                
                <p className="text-white/70 mb-6 leading-relaxed">{edu.description}</p>
                
                <div className="flex flex-wrap gap-3">
                  {edu.highlights.map((highlight, idx) => (
                    <motion.span
                      key={idx}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/30 rounded-full text-sm text-white/80"
                    >
                      {highlight}
                    </motion.span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;