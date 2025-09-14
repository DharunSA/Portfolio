import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Cpu, Paintbrush, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      icon: <Globe size={24} />,
      skills: ["React.js", "HTML5", "CSS3", "JavaScript", "Bootstrap", "Responsive Design", "UI/UX"],
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      category: "Backend Development", 
      icon: <Database size={24} />,
      skills: ["Node.js", "Express.js", "Python", "Java", "MongoDB", "MySQL", "REST APIs"],
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      category: "Programming Languages",
      icon: <Code size={24} />,
      skills: ["JavaScript", "Python", "Java", "C", "C++", "SQL", "R"],
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      category: "Tools & Technologies",
      icon: <Cpu size={24} />,
      skills: ["Git", "GitHub", "VS Code", "Postman", "Firebase", "Netlify", "Linux"],
      color: "from-orange-500/20 to-red-500/20"
    },
    {
      category: "Databases & Cloud",
      icon: <Paintbrush size={24} />,
      skills: ["MongoDB", "MySQL", "Firebase", "Cloud Storage", "Database Design", "Data Management"],
      color: "from-indigo-500/20 to-blue-500/20"
    },
    {
      category: "Soft Skills",
      icon: <Users size={24} />,
      skills: ["Problem Solving", "Team Collaboration", "Communication", "Adaptability", "Critical Thinking"],
      color: "from-teal-500/20 to-green-500/20"
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
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
            Skills & Expertise
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            A diverse toolkit of technical skills and technologies that power innovative solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full p-6 backdrop-blur-xl bg-white/10 border border-white/20 hover:bg-white/15 hover:scale-105 transition-all duration-300 group">
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    className={`p-3 bg-gradient-to-r ${category.color} border border-white/30 rounded-full text-white`}
                  >
                    {category.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-200 transition-colors">
                    {category.category}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: (index * 0.1) + (skillIndex * 0.05) }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-3 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-sm text-white/90 hover:bg-white/30 transition-all duration-200 cursor-default"
                    >
                      {skill}
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

export default Skills;