// =============================================================
// ACHIEVEMENTS & LEADERSHIP DATA — sourced from LaTeX résumé
// =============================================================

export interface Achievement {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  description: string;
  icon: "trophy" | "star" | "users" | "award";
}

export const achievements: Achievement[] = [
  {
    id: "gdg-web-lead",
    title: "Web Development Lead",
    subtitle: "GDG (Google Developer Group) — IIIT Sri City",
    date: "2025 — Present",
    description:
      "Directing technical mentorship for 750+ students in modern web stacks and AI-driven application deployment through workshops and bootcamps.",
    icon: "users",
  },
  {
    id: "electroforge-winner",
    title: "Electroforge Hackathon — 1st Place",
    subtitle: "50+ competing teams",
    date: "November 2024",
    description:
      "Secured 1st place among 50+ teams for a real-time IoT water-quality monitoring system with a React-based analytics dashboard.",
    icon: "trophy",
  },
  {
    id: "abhisarga-sponsorship",
    title: "Core Sponsorship Team",
    subtitle: "Abhisarga '25 — Annual Cultural Fest",
    date: "2025",
    description:
      "Negotiated corporate partnerships, contributing to a 20% increase in the flagship event's operational budget.",
    icon: "star",
  },
];

export interface EducationEntry {
  id: string;
  institution: string;
  degree: string;
  period: string;
  startDate: string;
  location: string;
  gpa: string;
  coursework: string[];
}

export const education: EducationEntry[] = [
  {
    id: "iiit-sricty",
    institution: "Indian Institute of Information Technology, Sri City",
    degree: "B.Tech in Electronics and Communication Engineering",
    period: "August 2023 – Present",
    startDate: "2023-08-01",
    location: "Chittoor, AP",
    gpa: "8.4 / 10.0",
    coursework: [
      "Data Structures & Algorithms",
      "Machine Learning",
      "Embedded Systems",
      "IoT",
      "OOP",
      "Computer Networks",
    ],
  },
];

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issuerLogo: string;
  credential: string;
  date?: string;
}

export const certificates: Certificate[] = [
  {
    id: "gcp-cert",
    title: "Google Cloud Certification",
    issuer: "Google Cloud",
    issuerLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg",
    // TODO: Replace with your actual LinkedIn certificate link
    credential: "[YOUR_GCP_LINKEDIN_CERTIFICATE_LINK]",
    date: "2024",
  },
];
