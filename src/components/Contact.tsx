import { useEffect, useState } from 'react';
import { siteConfig } from '@/data/siteConfig';

const Contact = () => {
  const { email, socials } = siteConfig;
  const [localTime, setLocalTime] = useState('');
  const currentYear = new Date().getFullYear();

  // Live IST clock
  useEffect(() => {
    const updateTime = () =>
      setLocalTime(
        new Date().toLocaleTimeString('en-US', {
          timeZone: siteConfig.timezone,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        })
      );
    updateTime();
    const id = setInterval(updateTime, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {/* ── Contact CTA ───────────────────────────────────── */}
      <section
        id="contact"
        className="w-full max-w-2xl mx-auto flex flex-col justify-center items-center text-center px-4 py-16"
      >
        <div className="max-w-2xl w-full flex flex-col items-center justify-center gap-4">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-instrumentserif font-light text-text-primary">
            Let&apos;s work together.
          </h2>

          <p className="text-text-secondary font-instrumentsans text-[15px] max-w-md leading-relaxed opacity-70">
            I&apos;m always open to interesting collaborations, full-stack projects, or just a good conversation about tech. Reach out!
          </p>

          {/* Primary CTA */}
          <a
            href={`mailto:${email}`}
            className="mt-2 px-6 py-2.5 rounded-md border-2 border-border-primary bg-bg-elevated/30 text-sm font-medium text-text-secondary hover:text-text-primary hover:bg-hover-tint hover:border-border-accent card-inset-shadow transition-all duration-200 font-instrumentsans"
          >
            {email}
          </a>

          {/* Social icons */}
          <div className="flex items-center gap-4 mt-2 text-text-muted">
            <a
              href={socials.github.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-text-primary transition-colors duration-200"
            >
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>
            <a
              href={socials.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-text-primary transition-colors duration-200"
            >
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a
              href={`mailto:${email}`}
              aria-label="Email"
              className="hover:text-text-primary transition-colors duration-200"
            >
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>
          </div>

          {/* Quote */}
          <p className="text-center text-xl font-instrumentserif font-medium text-text-secondary/70 mt-6">
            &ldquo;Never stop building&rdquo;
          </p>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────── */}
      <footer className="w-full flex justify-center items-center pb-12 pt-4 px-2 lg:px-0">
        <div className="relative z-10 w-full max-w-2xl pt-4 pb-2 px-0">
          <div className="flex flex-col md:flex-row justify-between items-center gap-1 md:gap-2 text-sm text-text-primary border-t border-border-primary pt-4 font-instrumentsans">
            <span>
              Crafted with <span className="text-red-500">❤️</span> by{' '}
              <span className="text-text-secondary">{siteConfig.name}</span>
            </span>
            <span className="hidden md:inline text-border-primary">·</span>
            <span className="text-text-secondary">{localTime} IST</span>
            <span className="hidden md:inline text-border-primary">·</span>
            <span>&copy; {currentYear} All rights reserved</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contact;