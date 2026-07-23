// =============================================================
// SKILLS / TECH STACK — sourced from LaTeX résumé
// Icons use CDN URLs from devicon / simple-icons
// =============================================================

export interface TechItem {
  name: string;
  category: "languages" | "frameworks" | "cloud" | "tools";
  icon: string; // CDN URL
}

const devicon = (name: string, style = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-${style}.svg`;

export const techRegistry: TechItem[] = [
  // Languages
  { name: "C/C++", category: "languages", icon: devicon("cplusplus") },
  { name: "Python", category: "languages", icon: devicon("python") },
  { name: "JavaScript", category: "languages", icon: devicon("javascript") },
  { name: "TypeScript", category: "languages", icon: devicon("typescript") },
  { name: "SQL", category: "languages", icon: devicon("azuresqldatabase") },
  { name: "MATLAB", category: "languages", icon: devicon("matlab") },
  { name: "Verilog", category: "languages", icon: "https://img.shields.io/badge/Verilog-B22222?style=flat&logo=v&logoColor=white" },

  // Frameworks & Libraries
  { name: "React.js", category: "frameworks", icon: devicon("react") },
  { name: "Node.js", category: "frameworks", icon: devicon("nodejs") },
  { name: "Express.js", category: "frameworks", icon: devicon("express") },
  { name: "Flask", category: "frameworks", icon: devicon("flask") },
  { name: "Streamlit", category: "frameworks", icon: devicon("streamlit") },
  { name: "TensorFlow", category: "frameworks", icon: devicon("tensorflow") },
  { name: "Keras", category: "frameworks", icon: devicon("keras") },
  { name: "Scikit-learn", category: "frameworks", icon: devicon("scikitlearn") },
  { name: "OpenCV", category: "frameworks", icon: devicon("opencv") },
  { name: "Tailwind CSS", category: "frameworks", icon: devicon("tailwindcss") },

  // Cloud & Database
  { name: "MongoDB", category: "cloud", icon: devicon("mongodb") },
  { name: "Firebase", category: "cloud", icon: devicon("firebase") },
  { name: "GCP", category: "cloud", icon: devicon("googlecloud") },
  { name: "REST APIs", category: "cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },

  // Tools & Hardware
  { name: "Git", category: "tools", icon: devicon("git") },
  { name: "Docker", category: "tools", icon: devicon("docker") },
  { name: "Linux", category: "tools", icon: devicon("linux") },
  { name: "VS Code", category: "tools", icon: devicon("vscode") },
  { name: "Arduino", category: "tools", icon: devicon("arduino") },
  { name: "Unity3D", category: "tools", icon: devicon("unity") },
  { name: "Raspberry Pi", category: "tools", icon: devicon("raspberrypi") },
];
