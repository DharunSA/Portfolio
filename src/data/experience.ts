// =============================================================
// EXPERIENCE DATA — sourced from résumé
// =============================================================

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  startDate: string;
  endDate?: string;
  location?: string;
  type: "full-time" | "part-time" | "internship" | "freelance" | "contract";
  logo?: string;
  logoInitial: string; // First letter for placeholder logo
  logoColor: string;
  description: string;
  responsibilities: string[];
  techStack: string[];
  links?: { company?: string; };
}

export const experiences: Experience[] = [
  {
    id: "titan-intern",
    company: "Titan Company Limited",
    role: "Software Engineer Intern",
    period: "June 2025 – July 2025",
    startDate: "2025-06-01",
    endDate: "2025-07-31",
    location: "Bengaluru, Karnataka",
    type: "internship",
    logo: "/companies/titan.svg",
    logoInitial: "T",
    logoColor: "#1a1a2e",
    description:
      "Architected and deployed a scalable enterprise HR system for Titan's internal operations, increasing data processing efficiency and reducing administrative overhead significantly.",
    responsibilities: [
      "Architected a scalable full-stack system for enterprise HR operations using the MERN stack, enhancing internal data processing efficiency by 25%.",
      "Secured sensitive infrastructure by implementing JWT-based authentication and robust RESTful APIs for 500+ active directory users.",
      "Optimized frontend performance by 30% through React-based dashboards featuring advanced state management and data-driven server-side filtering.",
      "Engineered integrated attendance and project management modules with secure file handling, reducing manual administrative overhead by 40%.",
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "REST APIs", "JavaScript"],
    links: { company: "https://www.titancompany.in/" },
  },
  {
    id: "titan-frontend",
    company: "Titan Company Limited",
    role: "Frontend Developer",
    period: "June 2024",
    startDate: "2024-06-01",
    endDate: "2024-06-30",
    location: "Bengaluru, Karnataka",
    type: "internship",
    logo: "/companies/titan.svg",
    logoInitial: "T",
    logoColor: "#1a1a2e",
    description:
      "Developed a responsive vendor partnership landing page for the MBR Digital Transformation initiative, collaborating with the backend team for seamless integration.",
    responsibilities: [
      "Developed a responsive vendor partnership landing page using HTML, CSS, and ES6+ JavaScript, collaborating with the Python/Django backend team for integration.",
      "Implemented interactive UI components and ensured cross-browser compatibility, supporting the MBR Digital Transformation initiative.",
    ],
    techStack: ["HTML", "CSS", "JavaScript (ES6+)", "Python/Django"],
    links: { company: "https://www.titancompany.in/" },
  },
];

export function getExperiencesSorted(): Experience[] {
  return [...experiences].sort(
    (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
  );
}
