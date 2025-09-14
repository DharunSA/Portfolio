import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Reflections = () => {
  return (
    <section id="reflections" className="py-20 px-6 relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto max-w-4xl relative z-10">
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
            Personal Reflections
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Thoughts on technology, growth, and the journey of continuous learning
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="p-12 backdrop-blur-xl bg-white/10 border border-white/20 hover:bg-white/15 transition-all duration-300 relative">
            {/* Quote Icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute top-6 left-6 p-3 bg-white/20 rounded-full"
            >
              <Quote size={24} className="text-white/60" />
            </motion.div>

            <div className="mt-8">
              <motion.blockquote
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="text-2xl md:text-3xl leading-relaxed text-white mb-8"
                style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}
              >
                "For me, technology is about bridging hardware, software, and the web to transform ideas into reality. 
                With experience in CSE, ECE, and web development, I see every project as an opportunity to solve 
                real-world problems while creating meaningful impact."
              </motion.blockquote>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="space-y-6 text-lg text-white/80 leading-relaxed"
              >
                <p>
                  Adaptability, curiosity, and continuous learning guide me as I navigate the fast-changing 
                  world of technology. My journey has taught me that the most valuable skill is not mastery 
                  of any particular technology, but the ability to evolve and grow with the industry.
                </p>
                
                <p>
                  I believe the best solutions emerge when circuits meet code, logic meets creativity, 
                  and innovation aligns with user needs. Looking ahead, I'm excited to work at the 
                  intersection of AI, IoT, and web technologies—building solutions that are inclusive, 
                  impactful, and sustainable for the future.
                </p>
              </motion.div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Reflections;