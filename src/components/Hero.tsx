import { useState } from 'react';
import { siteConfig } from '@/data/siteConfig';
import SpotifyNowPlaying from './SpotifyNowPlaying';

const Hero = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="home" className="w-full flex justify-center items-center px-4 pt-5 pb-6 mb-6">
      <div className="max-w-2xl w-full flex flex-col items-start text-start">

        {/* ── Banner ──────────────────────────────────────────── */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[2/1] overflow-hidden rounded-md card-inset-shadow mb-6">
          <img
            src="/Bright.jpeg"
            alt="Banner bright"
            className="absolute inset-0 w-full h-full object-cover dark:opacity-0 transition-opacity duration-300"
          />
          <img
            src="/dark.jpeg"
            alt="Banner dark"
            className="absolute inset-0 w-full h-full object-cover opacity-0 dark:opacity-100 transition-opacity duration-300"
          />
        </div>

        <div className="w-full">
          {/* ── Profile row ─────────────────────────────────── */}
          <div className="flex flex-row items-center gap-5 mb-3 w-full">
            <div className="relative overflow-hidden rounded-md shrink-0 card-inset-shadow">
              <img
                src="/WhatsApp Image 2025-09-14 at 23.20.07_86f2897e.jpg"
                alt={siteConfig.name}
                className="h-[88px] w-[88px] aspect-square object-cover bg-amber-300 dark:bg-blue-700"
              />
            </div>
            <div className="flex flex-col items-start justify-end gap-0.5 min-w-0 w-full mt-auto">
              <h1 className="text-3xl sm:text-4xl font-light tracking-tight text-text-primary font-instrumentserif truncate w-full">
                {siteConfig.name}
              </h1>
              <p className="text-[14px] text-text-secondary opacity-70 font-light font-instrumentsans tracking-tight">
                {siteConfig.tagline}
              </p>
            </div>
          </div>

          {/* ── Social icons row ────────────────────────────── */}
          <div className="flex flex-wrap items-center gap-2.5 mt-3 mb-6 text-text-secondary opacity-80">

            {/* Email copy */}
            <button
              onClick={handleCopyEmail}
              className="group relative inline-flex items-center gap-1 text-[14px] font-normal text-text-secondary opacity-70 hover:opacity-100 hover:text-text-primary transition-all duration-200 cursor-pointer"
            >
              <span className="underline decoration-text-secondary/30 underline-offset-4 font-instrumentsans">
                {siteConfig.email}
              </span>
              {copied ? (
                <span className="text-[10px] text-green-500 font-medium ml-1">done</span>
              ) : (
                <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="opacity-40 group-hover:opacity-100 transition-opacity shrink-0">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
              )}
              <Tooltip>Copy Email</Tooltip>
            </button>

            <span className="opacity-20 select-none">|</span>

            {/* GitHub */}
            <SocialIcon href={siteConfig.socials.github.url} label="GitHub" tooltip="GitHub">
              <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </SocialIcon>

            {/* Mail */}
            <SocialIcon href={`mailto:${siteConfig.email}`} label="Email" tooltip="Email">
              <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </SocialIcon>

            {/* X / Twitter */}
            <SocialIcon href={siteConfig.socials.twitter.url} label="X" tooltip="X (@DevSocrates)">
              <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </SocialIcon>

            {/* Discord */}
            <SocialIcon href={siteConfig.socials.discord.url} label="Discord" tooltip="Discord (dharun.exe)">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.033.055a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.026 14.09 14.09 0 0 0 1.226-1.994.075.075 0 0 0-.041-.104 13.2 13.2 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
            </SocialIcon>

            {/* LinkedIn */}
            <SocialIcon href={siteConfig.socials.linkedin.url} label="LinkedIn" tooltip="LinkedIn">
              <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </SocialIcon>
          </div>

          {/* ── Bio paragraph 1 ───────────────────────────────── */}
          <p className="text-text-secondary opacity-70 leading-relaxed text-[16px] font-instrumentsans tracking-tight max-w-2xl font-light">
            <a
              href="#projects"
              className="underline text-text-primary hover:text-blue-500 transition-colors font-light tracking-tight decoration-text-primary/30 underline-offset-4 font-instrumentsans"
            >
              Full-Stack Developer
            </a>{" "}
            & ECE Student at IIIT Sri City — bridging AI/ML, modern web, and IoT/Embedded systems. Turning complex challenges into elegant solutions with curiosity and precision.
          </p>

          {/* ── Bio paragraph 2 ───────────────────────────────── */}
          <p className="text-text-primary opacity-70 leading-relaxed text-[16px] font-instrumentsans tracking-tight max-w-2xl font-regular mt-4">
            Wanna know more ? Get my{" "}
            <a
              href={siteConfig.resume.path}
              download={siteConfig.resume.filename}
              className="underline text-text-primary hover:text-blue-500 transition-colors font-light decoration-text-primary/30 underline-offset-4"
            >
              resume
            </a>{" "}
            or{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="underline text-text-primary hover:text-blue-500 transition-colors font-light decoration-text-primary/30 underline-offset-4"
            >
              reach out via email
            </a>{" "}
            with me..
          </p>

          {/* ── Spotify Status Row ──────────────────────────── */}
          <div className="w-full mt-6 pt-3 pb-3 border-t border-border-primary/40">
            <SpotifyNowPlaying />
          </div>
        </div>
      </div>
    </section>
  );
};

/* ── Helpers ──────────────────────────────────────────────── */
function Tooltip({ children }: { children: React.ReactNode }) {
  return (
    <span className="absolute font-semibold top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-0.5 bg-white dark:bg-zinc-800 text-slate-800 dark:text-white text-xs rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-slate-200 dark:border-zinc-700 z-50">
      {children}
    </span>
  );
}

function SocialIcon({ href, label, tooltip, children }: { href: string; label: string; tooltip: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group relative text-text-secondary opacity-60 hover:opacity-100 hover:text-text-primary transition-all duration-200"
    >
      {children}
      <Tooltip>{tooltip}</Tooltip>
    </a>
  );
}

export default Hero;