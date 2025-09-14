import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, MapPin } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Hero = () => {
  const scrollToNext = () => {
    const element = document.querySelector('#education');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8"
          >
            <Card className="w-48 h-48 mx-auto p-1 backdrop-blur-xl bg-white/10 border border-white/20 rounded-full overflow-hidden">
              <img
                src="/WhatsApp Image 2025-09-14 at 23.20.07_86f2897e.jpg"
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
            </Card>
          </motion.div>

          {/* Name and Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-6xl md:text-8xl font-bold text-white mb-4"
            style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}
          >
            Sai Kiran Reddy Mekala
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-2xl md:text-3xl text-white/80 mb-2"
          >
            Computer Science Graduate | Full-Stack Developer
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex items-center justify-center gap-2 text-white/60 mb-8"
          >
            <MapPin size={20} />
            <span>Hyderabad, India</span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-12"
            style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}
          >
            "Bridging hardware, software, and web technologies to transform innovative ideas into impactful reality. 
            Passionate about solving real-world problems through technology."
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <motion.a
              href="https://drive.google.com/file/d/1R9cIjIkEWbsGNWEDDbLnxY-gK3MM4mnF/view"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/20 backdrop-blur-xl border border-white/30 rounded-full text-white hover:bg-white/30 transition-all duration-300"
            >
              <Download size={20} />
              View Resume
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border-2 border-white/50 rounded-full text-white hover:bg-white/10 transition-all duration-300"
            >
              Get In Touch
            </motion.button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.button
            onClick={scrollToNext}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white/60 hover:text-white transition-colors duration-300"
          >
            <ChevronDown size={32} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;