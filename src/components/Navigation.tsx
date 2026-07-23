import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { siteConfig } from '@/data/siteConfig';

const Navigation = () => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = siteConfig.navigation.main;

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`sticky top-0 z-50 flex justify-center w-full transition-shadow duration-300 ${
        scrolled ? 'shadow-[0_1px_0_0_var(--color-border-primary)]' : ''
      }`}
    >
      <nav
        className="bg-bg-nav backdrop-blur-md w-full max-w-2xl flex justify-between items-center px-3 md:px-0 py-2"
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
          className="group relative flex items-center shrink-0"
        >
          <div className="w-10 h-10 rounded overflow-hidden bg-amber-300 dark:bg-blue-700 shrink-0">
            <img
              src="/WhatsApp Image 2025-09-14 at 23.20.07_86f2897e.jpg"
              alt={siteConfig.name}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Tooltip */}
          <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-0.5 bg-white dark:bg-zinc-800 text-slate-800 dark:text-white text-xs rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-slate-200 dark:border-zinc-700 z-50 font-instrumentsans font-semibold">
            Hi! 👋
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-1">
          {navLinks.map((link) => (
            <li key={link.name}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="px-2 py-1 text-sm font-medium text-text-secondary hover:text-text-primary rounded-md hover:bg-hover-tint transition-colors duration-200 font-instrumentsans cursor-pointer"
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>

        {/* Controls */}
        <div className="flex items-center gap-1">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-md text-text-secondary hover:text-text-primary hover:bg-hover-tint transition-colors duration-200"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-md text-text-secondary hover:text-text-primary hover:bg-hover-tint transition-colors duration-200"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-bg-nav backdrop-blur-md border-b border-border-primary z-40">
          <ul className="flex flex-col px-4 py-3 gap-1 max-w-2xl mx-auto">
            {navLinks.map((link) => (
              <li key={link.name}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left px-3 py-2 text-sm font-medium text-text-secondary hover:text-text-primary rounded-md hover:bg-hover-tint transition-colors duration-200 font-instrumentsans cursor-pointer"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navigation;