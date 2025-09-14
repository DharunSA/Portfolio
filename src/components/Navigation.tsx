import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X,} from 'lucide-react';
import { useScrollSpy } from '@/hooks/useScrollSpy';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: 'hero', label: 'Home' },
    { href: 'education', label: 'Education' },
    { href: 'skills', label: 'Skills' },
    { href: 'experience', label: 'Experience' },
    { href: 'contact', label: 'Contact' },
  ];

  const activeSection = useScrollSpy(navItems.map(item => item.href), 100);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'glass backdrop-blur-xl border-b border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            className="text-2xl font-bold cursor-pointer group text-elegant"
            style={{ 
              fontWeight: '600',
              fontStyle: 'italic'
            }}
            onClick={() => scrollToSection('hero')}
          >
            <span className="text-gradient group-hover:animate-pulse">
              Portfolio
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.href}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.href)}
                className={`relative px-4 py-2 rounded-full transition-all duration-300 group text-elegant ${
                  activeSection === item.href
                    ? 'text-black bg-gradient-primary shadow-lg'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
                style={{ fontStyle: 'italic' }}
              >
                <span className="relative z-10">{item.label}</span>
                
                {/* Active indicator */}
                {activeSection === item.href && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0 bg-gradient-primary rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                
                {/* Hover effect */}
                <motion.div
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
                  }}
                />
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="glass p-2 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden glass rounded-2xl mt-4"
            >
              <div className="py-4 space-y-1">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.href}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10, scale: 1.02 }}
                    onClick={() => scrollToSection(item.href)}
                    className={`block w-full text-left px-6 py-3 rounded-xl transition-all duration-200 text-elegant ${
                      activeSection === item.href
                        ? 'text-black bg-gradient-primary'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                    }`}
                    style={{ fontStyle: 'italic' }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;