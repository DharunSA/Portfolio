import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Lightbulb, Globe, BookOpen, Music } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Extracurricular = () => {
  const activities = [
    {
      title: "Tech Volunteer Program",
      organization: "Local Non-Profit Organization",
      role: "Web Development Volunteer",
      period: "2022 - Present",
      description: "Developing websites and digital tools for local charities, helping them reach more people and increase their impact in the community.",
      impact: "Built websites for 5+ organizations, increasing their online donations by 200%",
      icon: <Heart size={24} />,
      color: "from-red-500/20 to-pink-500/20"
    },
    {
      title: "University Tech Society",
      organization: "Computer Science Department",
      role: "President & Technical Lead",
      period: "2021 - 2022",
      description: "Led a team of 30+ students organizing hackathons, tech talks, and coding workshops to promote programming skills and innovation.",
      impact: "Organized 8 events with 500+ participants, mentored 20+ junior students",
      icon: <Users size={24} />,
      color: "from-blue-500/20 to-indigo-500/20"
    },
    {
      title: "Coding Bootcamp Mentor",
      organization: "CodePath & FreeCodeCamp",
      role: "Volunteer Instructor",
      period: "2021 - Present",
      description: "Teaching web development fundamentals to underrepresented communities, focusing on hands-on projects and career guidance.",
      impact: "Mentored 50+ students, 80% secured internships or job placements",
      icon: <Lightbulb size={24} />,
      color: "from-yellow-500/20 to-orange-500/20"
    },
    {
      title: "Open Source Contributor",
      organization: "Various GitHub Projects",
      role: "Active Contributor",
      period: "2020 - Present",
      description: "Contributing to popular open-source projects in React, Node.js ecosystem, focusing on accessibility and performance improvements.",
      impact: "100+ merged PRs across 15+ repositories, maintainer of 2 projects",
      icon: <Globe size={24} />,
      color: "from-green-500/20 to-teal-500/20"
    },
    {
      title: "Technical Writing",
      organization: "Medium & Dev.to",
      role: "Content Creator",
      period: "2020 - Present",
      description: "Writing technical articles about web development, best practices, and emerging technologies to help other developers learn and grow.",
      impact: "50+ articles published, 100k+ total views, featured in publications",
      icon: <BookOpen size={24} />,
      color: "from-purple-500/20 to-violet-500/20"
    },
    {
      title: "Digital Arts & Music",
      organization: "Personal Projects",
      role: "Creative Hobbyist",
      period: "2018 - Present",
      description: "Creating digital art and music as a creative outlet, combining technical skills with artistic expression through various digital mediums.",
      impact: "20+ digital art pieces, composed music for indie games and projects",
      icon: <Music size={24} />,
      color: "from-cyan-500/20 to-blue-500/20"
    }
  ];

  return (
    <section id="extracurricular" className="py-20 px-6">
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
            Beyond the Code
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Community involvement, mentorship, and creative pursuits that shape my perspective
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full p-6 backdrop-blur-xl bg-white/10 border border-white/20 hover:bg-white/15 hover:scale-[1.02] transition-all duration-300 group relative overflow-hidden">
                {/* Background Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${activity.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      className={`p-3 bg-gradient-to-r ${activity.color} border border-white/30 rounded-full text-white flex-shrink-0`}
                    >
                      {activity.icon}
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-200 transition-colors">
                        {activity.title}
                      </h3>
                      <p className="text-white/60 font-medium text-sm mb-1">{activity.organization}</p>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-white/50 text-sm">
                        <span className="font-medium">{activity.role}</span>
                        <span className="hidden sm:block">•</span>
                        <span>{activity.period}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-white/70 mb-4 leading-relaxed">
                    {activity.description}
                  </p>
                  
                  <div className="p-4 bg-white/10 border border-white/20 rounded-lg">
                    <p className="text-sm text-white/60 mb-1 font-medium">Impact:</p>
                    <p className="text-white/80 text-sm">
                      {activity.impact}
                    </p>
                  </div>
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

export default Extracurricular;