import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Star, Medal, Target, Zap } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Achievements = () => {
  const achievements = [
    {
      title: "Academic Excellence",
      organization: "Sreenidhi Institute of Science and Technology",
      description: "Maintained consistent academic performance with 8.5 CGPA throughout the B.Tech program",
      year: "2024",
      icon: <Trophy size={24} />,
      color: "from-yellow-500/20 to-orange-500/20"
    },
    {
      title: "Project Excellence",
      organization: "College Projects",
      description: "Successfully completed multiple technical projects including full-stack web applications and database systems",
      year: "2023-2024",
      icon: <Medal size={24} />,
      color: "from-blue-500/20 to-indigo-500/20"
    },
    {
      title: "Technical Skills Certification",
      organization: "Online Learning Platforms",
      description: "Completed various certifications in web development, programming languages, and database management",
      year: "2023",
      icon: <Star size={24} />,
      color: "from-green-500/20 to-teal-500/20"
    },
    {
      title: "Full-Stack Development",
      organization: "Personal Projects",
      description: "Developed and deployed multiple full-stack applications demonstrating proficiency in modern web technologies",
      year: "2023-2024",
      icon: <Award size={24} />,
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "Problem Solving Skills",
      organization: "Coding Challenges",
      description: "Consistently solved complex programming problems and participated in coding challenges to enhance skills",
      year: "2022-2024",
      icon: <Target size={24} />,
      color: "from-red-500/20 to-orange-500/20"
    },
    {
      title: "Continuous Learning",
      organization: "Self-Development",
      description: "Actively pursued learning new technologies and frameworks to stay updated with industry trends",
      year: "2020-2024",
      icon: <Zap size={24} />,
      color: "from-cyan-500/20 to-blue-500/20"
    }
  ];

  return (
    <section id="achievements" className="py-20 px-6">
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
            Achievements & Awards
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Recognition for excellence in technology, innovation, and leadership
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full p-6 backdrop-blur-xl bg-white/10 border border-white/20 hover:bg-white/15 hover:scale-105 transition-all duration-300 group relative overflow-hidden">
                {/* Background Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      className={`p-3 bg-gradient-to-r ${achievement.color} border border-white/30 rounded-full text-white`}
                    >
                      {achievement.icon}
                    </motion.div>
                    <span className="px-3 py-1 bg-white/20 border border-white/30 rounded-full text-sm text-white/80">
                      {achievement.year}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors">
                    {achievement.title}
                  </h3>
                  
                  <p className="text-white/60 font-medium mb-4">
                    {achievement.organization}
                  </p>
                  
                  <p className="text-white/70 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>

                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0 rounded-lg border-2 border-transparent"
                  whileHover={{
                    background: "linear-gradient(45deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(255,255,255,0.1) 100%)",
                  }}
                  transition={{ duration: 0.3 }}
                />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;