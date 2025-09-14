import React from 'react';
import { motion } from 'framer-motion';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Reflections from './components/Reflections';
import Portfolio from './components/Portfolio';
import Extracurricular from './components/Extracurricular';
import Resume from './components/Resume';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-white relative">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-black/90 via-gray-900/50 to-white/90 animate-pulse" />
      
      {/* Main Content */}
      <div className="relative z-10">
        <Navigation />
        
        <main>
          <Hero />
          <Education />
          <Skills />
          <Experience />
          <Achievements />
          <Reflections />
          <Portfolio />
          <Extracurricular />
          <Resume />
          <Contact />
        </main>
      </div>
      
      {/* Floating Elements */}
      <motion.div
        className="fixed top-1/4 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="fixed bottom-1/4 right-10 w-24 h-24 bg-gray-300/20 rounded-full blur-xl"
        animate={{
          y: [0, 20, 0],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

export default App;