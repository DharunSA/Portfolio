import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      title: "Full-Stack Developer Intern",
      company: "Tech Startup",
      location: "Remote",
      period: "Jun 2023 - Aug 2023",
      type: "Internship",
      description: "Developed and maintained web applications using modern technologies. Worked on both frontend and backend development, contributing to multiple client projects.",
      achievements: [
        "Built responsive web applications using React.js and Node.js",
        "Implemented RESTful APIs and database integration",
        "Collaborated with team members on version control using Git"
      ],
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "JavaScript"]
    },
    {
      title: "Web Development Trainee",
      company: "Local IT Company",
      location: "Hyderabad, India",
      period: "Jan 2023 - May 2023",
      type: "Training",
      description: "Intensive training program focused on modern web development technologies and best practices. Worked on real-world projects to gain practical experience.",
      achievements: [
        "Completed comprehensive training in MERN stack development",
        "Developed multiple projects showcasing frontend and backend skills",
        "Gained experience in database design and API development"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "React.js", "Node.js", "MongoDB"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6">
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
            Work Experience
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Professional journey building innovative solutions and leading technical teams
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/50 to-purple-500/50 hidden lg:block" />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 top-8 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white/20 hidden lg:block" />
                
                <Card className="lg:ml-20 p-8 backdrop-blur-xl bg-white/10 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex items-start gap-4 mb-4 lg:mb-0">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full flex-shrink-0"
                      >
                        <Briefcase className="text-white" size={24} />
                      </motion.div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-lg text-white/80 font-medium mb-2">{exp.company}</p>
                        <div className="flex flex-col sm:flex-row gap-4 text-white/60 mb-4">
                          <div className="flex items-center gap-1">
                            <MapPin size={16} />
                            <span>{exp.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar size={16} />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <span className="px-4 py-2 bg-white/20 border border-white/30 rounded-full text-sm text-white font-medium">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-white/70 mb-6 leading-relaxed">{exp.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-white/70 flex items-start gap-2">
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
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/30 rounded-full text-sm text-white/80"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;