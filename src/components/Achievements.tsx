import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Star, Medal, Target, Zap } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Achievements = () => {
  const { ref, isInView } = useScrollAnimation();
  
  const achievements = [
    {
      title: "Winner - Electroforge Hackathon",
      organization: "IIIT Sricity",
      description: "Built an IoT-based Water Quality Monitoring System with a web dashboard to measure and track pH, turbidity, and temperature in real time. Demonstrated expertise in embedded systems, IoT, and web development.",
      year: "Nov 2024",
      icon: <Trophy size={24} />,
      color: "from-yellow-500 to-orange-500",
      bgColor: "from-yellow-500/10 to-orange-500/10",
      isWinner: true
    },
    {
      title: "Global Game Jam Participant",
      organization: "Global Game Jam 2024",
      description: "Built a prototype game 'Catch the Emojoys' within 48 hours during Global Game Jam 2024. Showcased rapid prototyping skills and game development expertise using C# and Unity3D.",
      year: "Jan 2024",
      icon: <Medal size={24} />,
      color: "from-blue-500 to-indigo-500",
      bgColor: "from-blue-500/10 to-indigo-500/10"
    },
    {
      title: "Fest Sponsorship Team Member",
      organization: "IIIT Sricity - Abhisarga '25",
      description: "Secured sponsors for Abhisarga '25 and coordinated with team to organize the event. Demonstrated leadership, communication, and organizational skills in managing large-scale events.",
      year: "Spring 2025",
      icon: <Star size={24} />,
      color: "from-green-500 to-teal-500",
      bgColor: "from-green-500/10 to-teal-500/10"
    }
  ];

  return (
    <section id="achievements" className="py-20 px-6 relative">
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
              <Award className="text-yellow-500 dark:text-yellow-400" size={32} />
            </motion.div>
          </div>
          
          <h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: 'Playfair Display, serif', fontWeight: '600' }}
          >
            <span className="text-gradient">Achievements & Awards</span>
          </h2>
          
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "100%" } : { width: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="h-1 bg-gradient-primary mx-auto mb-6"
            style={{ maxWidth: '200px' }}
          />
          
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Recognition for excellence in technology, innovation, and leadership
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative"
            >
              <div className={`glass-card rounded-2xl p-6 h-full hover:scale-105 transition-all duration-300 group relative overflow-hidden ${achievement.isWinner ? 'ring-2 ring-yellow-400/50' : ''}`}>
                {/* Background gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${achievement.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      className={`p-4 glass rounded-xl bg-gradient-to-r ${achievement.color} text-white group-hover:shadow-lg transition-all duration-300`}
                    >
                      {achievement.icon}
                    </motion.div>
                    <div className="flex flex-col items-end gap-2">
                      <span className="px-3 py-1 glass rounded-full text-sm text-slate-700 dark:text-white font-medium">
                        {achievement.year}
                      </span>
                      {achievement.isWinner && (
                        <span className="px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-full">
                          WINNER
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3 group-hover:text-gradient transition-colors duration-300">
                    {achievement.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-300 font-medium mb-4">
                    {achievement.organization}
                  </p>
                  
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                  <Star size={20} className="text-yellow-400" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;