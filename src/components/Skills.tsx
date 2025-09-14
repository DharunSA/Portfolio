
import { motion } from 'framer-motion';
import { Code, Database, Globe, Cpu, Paintbrush, Users, Sparkles } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Skills = () => {
  const { ref, isInView } = useScrollAnimation();
  
  const skillCategories = [
    {
      category: "Programming Languages",
      icon: <Code size={24} />,
      skills: ["React", "JavaScript", "C", "C++", "Python", "HTML", "CSS"],
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-500/10 to-pink-500/10"
    },
    {
      category: "Developer Tools", 
      icon: <Cpu size={24} />,
      skills: ["VS Code", "NodeJS", "Git", "MATLAB", "Unity", "Arduino IDE", "Raspberry Pi Toolchain"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-500/10 to-cyan-500/10"
    },
    {
      category: "Electronics & Hardware",
      icon: <Database size={24} />,
      skills: ["Arduino", "Raspberry Pi", "Embedded Systems", "IoT", "Circuit Design", "Microcontrollers"],
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-500/10 to-emerald-500/10"
    },
    {
      category: "Software Development",
      icon: <Globe size={24} />,
      skills: ["Full-Stack Development", "MERN Stack", "REST APIs", "Database Management", "Authentication"],
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-500/10 to-red-500/10"
    },
    {
      category: "Game Development",
      icon: <Paintbrush size={24} />,
      skills: ["Unity3D", "C#", "Game Design", "Prototyping", "Global Game Jam"],
      color: "from-indigo-500 to-blue-500",
      bgColor: "from-indigo-500/10 to-blue-500/10"
    },
    {
      category: "Soft Skills",
      icon: <Users size={24} />,
      skills: ["Leadership", "Analytical Thinking", "Articulate Speaker", "Cooperative", "Critical Thinker", "Innovative"],
      color: "from-teal-500 to-green-500",
      bgColor: "from-teal-500/10 to-green-500/10"
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 relative">
      {/* Section Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-50/30 to-transparent dark:via-slate-900/30" />
      
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
              <Sparkles className="text-purple-500 dark:text-purple-400" size={32} />
            </motion.div>
          </div>
          
          <h2 
            className="text-4xl md:text-5xl font-bold mb-4 text-elegant"
            style={{ fontWeight: '600', fontStyle: 'italic' }}
          >
            <span className="text-gradient">Skills & Expertise</span>
          </h2>
          
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "100%" } : { width: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="h-1 bg-gradient-primary mx-auto mb-6"
            style={{ maxWidth: '200px' }}
          />
          
          <p className="text-lg text-white/80 max-w-2xl mx-auto text-body">
            A diverse toolkit of technical skills and technologies that power innovative solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative"
            >
              <div className="glass-card rounded-2xl p-6 h-full hover:scale-105 transition-all duration-300 group relative overflow-hidden">
                {/* Background gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      className={`p-4 glass rounded-xl bg-gradient-to-r ${category.color} text-white group-hover:shadow-lg transition-all duration-300`}
                    >
                      {category.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold text-white group-hover:text-gradient transition-colors duration-300 text-elegant" style={{ fontStyle: 'italic' }}>
                      {category.category}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                        transition={{ delay: (index * 0.1) + (skillIndex * 0.05) }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-3 py-2 glass rounded-full text-sm text-white/90 hover:bg-gradient-primary hover:text-black transition-all duration-300 cursor-default group/skill text-body"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                  <Sparkles size={20} className="text-purple-400" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Additional decorative elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 glass rounded-full">
            <Sparkles className="text-yellow-500" size={20} />
            <span className="text-white/80 font-medium text-body">
              Continuously learning and expanding my skill set
            </span>
            <Sparkles className="text-yellow-500" size={20} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;