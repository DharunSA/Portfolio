import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, Eye, Star, CheckCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Resume = () => {
  const references = [
    {
      name: "Dr. Sarah Johnson",
      position: "Professor of Computer Science",
      organization: "University Name",
      email: "sarah.johnson@university.edu",
      phone: "+1 (555) 123-4567",
      relationship: "Academic Supervisor & Research Mentor"
    },
    {
      name: "Michael Chen",
      position: "Senior Engineering Manager",
      organization: "Tech Company Name",
      email: "michael.chen@techcompany.com",
      phone: "+1 (555) 987-6543",
      relationship: "Direct Manager & Team Lead"
    },
    {
      name: "Emily Rodriguez",
      position: "Product Manager",
      organization: "Previous Company",
      email: "emily.rodriguez@prevcompany.com",
      phone: "+1 (555) 456-7890",
      relationship: "Cross-functional Collaborator"
    }
  ];

  const resumeHighlights = [
    "B.Tech in Computer Science and Engineering (8.5 CGPA)",
    "Full-stack web development expertise",
    "Proficient in React.js, Node.js, and MongoDB",
    "Experience with multiple programming languages",
    "Strong problem-solving and analytical skills"
  ];

  return (
    <section id="resume" className="py-20 px-6">
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
            Resume & References
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Download my complete resume and connect with professional references
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto mb-16">
          {/* Resume Download Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 backdrop-blur-xl bg-white/10 border border-white/20 hover:bg-white/15 transition-all duration-300 h-full">
              <div className="text-center mb-6">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="w-20 h-20 mx-auto mb-4 p-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/30 rounded-full"
                >
                  <FileText size={48} className="text-white w-full h-full" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Complete Resume
                </h3>
                <p className="text-white/70">
                  Detailed overview of my experience, skills, and achievements
                </p>
              </div>

              <div className="space-y-3 mb-8">
                {resumeHighlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle size={20} className="text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white/80">{highlight}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="https://drive.google.com/file/d/1R9cIjIkEWbsGNWEDDbLnxY-gK3MM4mnF/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-xl border border-white/30 rounded-full text-white hover:bg-white/30 transition-all duration-300 flex-1"
                >
                  <Eye size={20} />
                  View Online
                </motion.a>
                <motion.a
                  href="https://drive.google.com/file/d/1R9cIjIkEWbsGNWEDDbLnxY-gK3MM4mnF/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-white/50 rounded-full text-white hover:bg-white/10 transition-all duration-300"
                >
                  <Download size={20} />
                  Download
                </motion.a>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;