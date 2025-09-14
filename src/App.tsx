import { motion } from 'framer-motion';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import SectionDivider from './components/SectionDivider';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Reflections from './components/Reflections';

import Resume from './components/Resume';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden dark">
        {/* Dynamic Gradient Background */}
        <div className="fixed inset-0 transition-all duration-1000 ease-in-out">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 via-black to-gray-800" />
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-bl from-black/50 via-transparent to-black/50" />
        </div>
        
        {/* Animated Gradient Orbs */}
        <motion.div
          className="fixed top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-white/10 to-gray-300/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="fixed bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-gray-200/10 to-white/10 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="fixed top-3/4 left-1/3 w-64 h-64 bg-gradient-to-r from-white/15 to-gray-400/15 rounded-full blur-3xl"
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Main Content */}
        <div className="relative z-10">
          <Navigation />
          
          <main className="relative">
            <Hero />
            <SectionDivider />
            <Education />
            <SectionDivider />
            <Skills />
            <SectionDivider />
            <Experience />
            <SectionDivider />
            <Achievements />
            <SectionDivider />
            <Reflections />
            
            <SectionDivider />
            
            <Resume />
            <SectionDivider />
            <Contact />
          </main>
        </div>
      </div>
  );
}

export default App;