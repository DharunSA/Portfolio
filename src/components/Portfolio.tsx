import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye, Code } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Web Apps', 'Mobile Apps', 'UI/UX Design', 'Open Source'];

  const projects = [
    {
      title: "Netflix Clone",
      category: "Web Apps",
      description: "A full-stack Netflix clone built with React.js and Node.js. Features include user authentication, movie browsing, search functionality, and responsive design.",
      image: "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "CSS3"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "E-Commerce Website",
      category: "Web Apps",
      description: "Complete e-commerce solution with product catalog, shopping cart, user authentication, and payment integration. Built with modern web technologies.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "JavaScript"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Restaurant Management System",
      category: "Web Apps",
      description: "Comprehensive restaurant management system with menu management, order processing, and customer management features. Built with full-stack technologies.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Personal Portfolio Website",
      category: "Web Apps",
      description: "Responsive personal portfolio website showcasing projects, skills, and experience. Features modern design, smooth animations, and glassmorphism effects.",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React.js", "Tailwind CSS", "Framer Motion", "JavaScript"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Task Management App",
      category: "Web Apps",
      description: "Simple and efficient task management application with CRUD operations, user authentication, and responsive design for productivity enhancement.",
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Weather App",
      category: "Web Apps",
      description: "Real-time weather application with location-based forecasts, search functionality, and clean user interface. Integrates with weather APIs for accurate data.",
      image: "https://images.pexels.com/photos/669996/pexels-photo-669996.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["HTML5", "CSS3", "JavaScript", "Weather API"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
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
            Featured Work
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            A selection of projects that showcase my technical skills and creative problem-solving
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full border transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-white/20 border-white/50 text-white backdrop-blur-xl'
                  : 'bg-white/5 border-white/20 text-white/70 hover:bg-white/10 hover:text-white'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={`${project.title}-${selectedCategory}`}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden backdrop-blur-xl bg-white/10 border border-white/20 hover:bg-white/15 transition-all duration-300 h-full">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 border border-yellow-400/50 rounded-full text-sm text-yellow-200 font-medium backdrop-blur-sm">
                      Featured
                    </div>
                  )}
                  
                  {/* Hover Buttons */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white/20 backdrop-blur-xl border border-white/30 rounded-full text-white hover:bg-white/30 transition-colors"
                    >
                      <Eye size={20} />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white/20 backdrop-blur-xl border border-white/30 rounded-full text-white hover:bg-white/30 transition-colors"
                    >
                      <Github size={20} />
                    </motion.a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-3 py-1 bg-white/20 border border-white/30 rounded-full text-sm text-white/80">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-white/70 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/30 rounded text-xs text-white/80"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-xs text-white/60">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex gap-3">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 px-4 py-2 bg-white/20 border border-white/30 rounded-full text-sm text-white hover:bg-white/30 transition-colors flex-1 justify-center"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 px-4 py-2 border-2 border-white/50 rounded-full text-sm text-white hover:bg-white/10 transition-colors"
                    >
                      <Code size={16} />
                    </motion.a>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;