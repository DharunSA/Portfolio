// =============================================================
// SITE CONFIGURATION — single source of truth for all personal data
// =============================================================

export const siteConfig = {
  name: "Dharun SA",
  title: "DharunSA",
  url: "https://dharun-se.netlify.app/",
  role: "Full-Stack Developer & ECE Student",
  tagline: "21 | Full-Stack & ECE | IND",
  description:
    "Dharun Saravanakumar — B.Tech ECE student at IIIT Sri City. Full-Stack Developer building AI-powered systems, embedded platforms, and enterprise web applications.",
  location: "Chittoor, AP, India",
  timezone: "Asia/Kolkata",
  email: "dharun887@gmail.com",
  phone: "+91 6381814730",

  bio: {
    short:
      "Full-Stack Developer & ECE Student at IIIT Sri City — bridging AI/ML, modern web, and IoT/Embedded systems. Turning complex challenges into elegant solutions with curiosity and precision",
    long: `Full-Stack Developer & ECE Student at IIIT Sri City — bridging AI/ML, modern web, and IoT/Embedded systems. Turning complex challenges into elegant solutions with curiosity and precision`,
    about: `I'm Dharun Saravanakumar, a B.Tech Electronics & Communication Engineering student at IIIT Sri City (GPA 8.4). I build full-stack applications, deploy ML pipelines on edge hardware, and lead technical teams. I love turning ambitious ideas into real, working products—fast.`,
  },

  titles: [
    "Full-Stack Developer",
    "ECE Student",
    "AI/ML Engineer",
    "Web Dev Lead @ GDG",
    "Hackathon Winner",
  ],

  socials: {
    github: {
      url: "https://github.com/DharunSA",
      username: "DharunSA",
      display: "DharunSA",
    },
    linkedin: {
      url: "https://www.linkedin.com/in/dharun-sa-550648204/",
      username: "dharun-sa-550648204",
      display: "dharun-sa",
    },
    twitter: {
      url: "https://x.com/DevSocrates",
      username: "DevSocrates",
      display: "@DevSocrates",
    },
    discord: {
      url: "https://discord.com/users/1463091630033604721",
      username: "dharun.exe",
      display: "dharun.exe",
      lanyardId: "1463091630033604721",
    },
    email: "dharun887@gmail.com",
  },

  navigation: {
    main: [
      { name: "Home", href: "#home" },
      { name: "Skills", href: "#skills" },
      { name: "Experience", href: "#experience" },
      { name: "Projects", href: "#projects" },
      { name: "Certifications", href: "#certificates" },
      { name: "Contact", href: "#contact" },
    ],
  },

  sections: {
    github: { id: "github-activity", title: "GitHub Activity" },
    skills: { id: "skills", number: "01", title: "Tech Stack" },
    experience: { id: "experience", number: "02", title: "Experience" },
    projects: { id: "projects", number: "03", title: "Projects" },
    education: { id: "education", number: "04", title: "Education" },
    achievements: { id: "achievements", number: "05", title: "Leadership & Achievements" },
    certificates: { id: "certificates", number: "06", title: "Certifications" },
    gallery: { id: "gallery", number: "07", title: "Gallery" },
    contact: { id: "contact", number: "08", title: "Contact" },
  },

  resume: {
    path: "/Dharun_Saravanakumar Resume.pdf",
    filename: "Dharun_Saravanakumar_Resume.pdf",
  },
} as const;

export type SiteConfig = typeof siteConfig;
