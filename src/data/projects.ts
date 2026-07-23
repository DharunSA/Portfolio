// =============================================================
// PROJECTS DATA — sourced from LaTeX résumé
// Replace [YOUR_...] links when ready.
// =============================================================

export interface Project {
  id: string;
  numberId: string;
  title: string;
  completedDate: string | null;
  description: string;
  features: string[];
  tags: string[];
  status: "completed" | "in-progress" | "maintained";
  featured: boolean;
  links: {
    github?: string;
    live?: string;
  };
}

export const projects: Project[] = [
  {
    id: "trinetra-rover",
    numberId: "01",
    title: "Trinetra Rover",
    completedDate: null,
    description:
      "Multi-Modal AI Surveillance Platform — a semi-autonomous rover that secured external research funding. Combines edge AI on Raspberry Pi 5 with ESP32 sensor fusion, YOLO visual pipeline, and a real-time React dashboard achieving sub-200ms latency.",
    features: [
      "Acoustic Classification model + YOLO Visual AI pipeline — 92% classification accuracy",
      "Semi-autonomous navigation with ESP32 sensor fusion",
      "Real-time React.js + Firebase dashboard with sub-200ms UDP latency",
      "Secured external research funding from IIIT Sri City",
      "Edge AI inference on Raspberry Pi 5",
    ],
    tags: ["Raspberry Pi 5", "ESP32", "YOLO", "React.js", "Firebase", "Python", "Edge AI", "IoT"],
    status: "in-progress",
    featured: true,
    links: {
      github: "[YOUR_TRINETRA_GITHUB]",
      live: undefined,
    },
  },
  {
    id: "ml-vlsi-gnn",
    numberId: "02",
    title: "ML in VLSI — GNN Netlist Reverse Engineering",
    completedDate: "2025-05",
    description:
      "Applied Graph Neural Networks (GNNs) to gate-level netlists to identify circuit sub-blocks and logic functionality. Built a pipeline converting netlists into graph structures, leveraging node features for high-accuracy structural recognition.",
    features: [
      "GNN-based gate-level netlist analysis and reverse engineering",
      "Netlist → graph structure conversion pipeline",
      "High-accuracy sub-block and logic functionality identification",
      "Node feature engineering for structural pattern recognition",
    ],
    tags: ["Graph Neural Networks", "VLSI", "Python", "PyTorch", "Machine Learning", "Verilog"],
    status: "completed",
    featured: true,
    links: {
      github: "[YOUR_VLSI_GITHUB]",
    },
  },
  {
    id: "digital-it-helpdesk",
    numberId: "03",
    title: "Digital IT Helpdesk & Service System",
    completedDate: "2024-12",
    description:
      "Centralized IT platform that digitized technical support workflows, achieving a 35% reduction in ticket resolution turnaround time. Features workflow-driven tracking for technician assignments and real-time performance analytics.",
    features: [
      "35% reduction in ticket resolution turnaround time",
      "Workflow-driven technician assignment tracking",
      "Real-time performance analytics for administrative oversight",
      "Centralized digital ticketing replacing manual support processes",
    ],
    tags: ["React.js", "Node.js", "MongoDB", "REST APIs", "Dashboard", "Full-Stack"],
    status: "completed",
    featured: false,
    links: {
      github: "[YOUR_HELPDESK_GITHUB]",
    },
  },
  {
    id: "freshaudit",
    numberId: "04",
    title: "FreshAudit — Farming Supply Chain & IoT Platform",
    completedDate: "2024-11",
    description:
      "Platform connecting farmers directly to customers, integrating IoT sensors for real-time monitoring of agricultural produce quality. AI/ML model predicts crop shelf-life from sensor data, targeting a 15% reduction in supply chain waste.",
    features: [
      "IoT sensor integration for real-time produce quality monitoring",
      "AI/ML model predicting crop shelf-life from sensor statistics",
      "15% targeted reduction in supply chain waste",
      "Direct farmer-to-customer marketplace platform",
      "Hackathon winner — Electroforge 2024 (1st place, 50+ teams)",
    ],
    tags: ["IoT", "React.js", "Python", "Machine Learning", "Node.js", "Firebase", "Sensors"],
    status: "completed",
    featured: false,
    links: {
      github: "[YOUR_FRESHAUDIT_GITHUB]",
    },
  },
];

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}
