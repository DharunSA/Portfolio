import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface SectionDividerProps {
  className?: string;
}

const SectionDivider: React.FC<SectionDividerProps> = ({ className = "" }) => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <div ref={ref} className={`relative py-8 ${className}`}>
      <div className="flex items-center justify-center">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-600 to-transparent flex-1"
        />
        
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
          transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 200 }}
          className="mx-8 p-3 glass rounded-full"
        >
          <div className="w-2 h-2 bg-gradient-primary rounded-full" />
        </motion.div>
        
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
          className="h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-600 to-transparent flex-1"
        />
      </div>
    </div>
  );
};

export default SectionDivider;
