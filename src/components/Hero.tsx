
import { motion } from 'framer-motion';
import { ChevronDown, Download, MapPin, Sparkles } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Hero = () => {
  const { ref, isInView } = useScrollAnimation();
  
  const scrollToNext = () => {
    const element = document.getElementById('education');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.4, 0.9, 0.4],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8 relative"
          >
            <div className="relative">
              <div className="w-48 h-48 mx-auto glass-card rounded-full overflow-hidden p-1 animate-float">
                <img
                  src="/WhatsApp Image 2025-09-14 at 23.20.07_86f2897e.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              
              {/* Floating sparkles */}
              <motion.div
                className="absolute -top-2 -right-2"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="text-yellow-400" size={24} />
              </motion.div>
              
              <motion.div
                className="absolute -bottom-2 -left-2"
                animate={{ rotate: -360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="text-blue-400" size={20} />
              </motion.div>
            </div>
          </motion.div>

          {/* Name and Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-6"
          >
            <h1 
              className="text-5xl md:text-7xl font-bold mb-4 text-elegant"
              style={{ fontWeight: '700', fontStyle: 'italic' }}
            >
              <span className="text-gradient">Dharun</span>
              <br />
              <span className="text-gradient">Saravanakumar</span>
            </h1>

            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "100%" } : { width: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="h-1 bg-gradient-primary mx-auto mb-4"
              style={{ maxWidth: '200px' }}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-white/90 mb-2 font-medium text-elegant"
            style={{ fontStyle: 'italic' }}
          >
            Electronics & Communication Engineering Student | Full-Stack Developer
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex items-center justify-center gap-2 text-white/70 mb-8"
          >
            <MapPin size={20} />
            <span className="text-body">Hosur, Tamil Nadu</span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed mb-12 text-body"
            style={{ fontStyle: 'italic' }}
          >
            "Passionate about electronics, communication systems, and full-stack development. 
            Building innovative solutions that bridge hardware and software technologies."
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <motion.a
              href="#resume"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 px-8 py-4 glass-card rounded-full text-white hover:bg-gradient-primary hover:text-black transition-all duration-300 group text-elegant"
              style={{ fontStyle: 'italic' }}
            >
              <Download size={20} className="group-hover:animate-bounce" />
              View Resume
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 glass border-2 border-white/20 rounded-full text-white hover:border-white/50 hover:bg-white/10 transition-all duration-300 text-elegant"
              style={{ fontStyle: 'italic' }}
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