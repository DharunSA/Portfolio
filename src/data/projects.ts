// =============================================================
// PROJECTS DATA
// featured: true  → shown on home page (exactly 4 cards, 2×2 grid)
// featured: false → shown only on /projects page (future multi-page upgrade)
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
  mockupImage?: string;
  links: {
    github?: string;
    live?: string;
  };
}

export const projects: Project[] = [
  // ── HOME PAGE (featured = true, exactly 4) ─────────────────
  {
    id: "formix",
    numberId: "01",
    title: "Formix",
    completedDate: "2026-06",
    description:
      "Full-stack SaaS platform with drag-and-drop form building, AI-powered schema generation (Gemini 2.0 Flash / Groq / OpenAI), and an event-driven Automations Engine with CRM integration.",
    features: [
      "Drag-and-drop form builder with keyboard-driven animated respondent flows",
      "Ask Formix AI (Gemini 2.0 Flash / Groq / OpenAI) for schema generation & sentiment analysis",
      "Atomic debounced autosave engine with TanStack Query v5 ID reconciliation",
      "Event-driven Automations Engine: live webhooks, conditional action routing, aggregate CSV analytics",
      "Auto-syncing CRM Contacts Hub",
    ],
    tags: ["Next.js 16", "React 19", "TypeScript", "FastAPI", "SQLAlchemy", "PostgreSQL", "TanStack Query", "AI"],
    status: "in-progress",
    featured: true,
    mockupImage: "/projects/formix.png",
    links: {
      github: "https://github.com/DharunSA/Formix",
    },
  },
  {
    id: "trinetra-rover",
    numberId: "02",
    title: "Trinetra Rover",
    completedDate: "2025-12",
    description:
      "Semi-autonomous AI surveillance rover securing external research funding. Combines edge AI on Raspberry Pi 5 with ESP32 sensor fusion and a YOLO visual pipeline achieving 92% classification accuracy.",
    features: [
      "Acoustic Classification model + YOLO Visual AI pipeline — 92% classification accuracy",
      "Semi-autonomous navigation with ESP32 sensor fusion",
      "Real-time React.js + Firebase dashboard with sub-200ms UDP latency",
      "Secured external research funding from IIIT Sri City",
      "Edge AI inference on Raspberry Pi 5",
    ],
    tags: ["Raspberry Pi 5", "ESP32", "YOLO", "React.js", "Firebase", "Python", "Edge AI", "IoT"],
    status: "completed",
    featured: true,
    mockupImage: "/projects/trinetra.png",
    links: {
      github: "https://github.com/DharunSA/Trinetra-Rover",
    },
  },
  {
    id: "freshaudit",
    numberId: "03",
    title: "FreshAudit",
    completedDate: "2026-03",
    description:
      "B2B produce supply chain & cold-chain SaaS with an Arrhenius kinetic decay physics engine over IoT sensor telemetry for shelf-life prediction and Leaflet.js live GPS transit mapping.",
    features: [
      "Arrhenius kinetic decay physics engine for IoT-based shelf-life prediction",
      "Leaflet.js live GPS transit mapping with dynamic pricing engine",
      "JWT authentication with role-based access control and chain-of-custody tracking",
      "Firebase Realtime DB with Node.js/Express backend",
      "Hackathon winner — Electroforge 2024 (1st place, 50+ teams)",
    ],
    tags: ["React 19", "Vite", "Node.js", "Express", "Firebase", "Leaflet.js", "IoT", "JWT"],
    status: "completed",
    featured: true,
    mockupImage: "/projects/freshaudit.png",
    links: {
      github: "https://github.com/DharunSA/FreshAudit",
    },
  },
  {
    id: "titan-hr-helpdesk",
    numberId: "04",
    title: "Titan HR Helpdesk",
    completedDate: "2025-07",
    description:
      "Enterprise-grade IT helpdesk & HR management platform built for Titan Company Limited. Centralized ticketing system achieving 35% faster ticket resolution with real-time analytics on the MERN stack.",
    features: [
      "35% reduction in ticket resolution turnaround time",
      "JWT-based authentication for 500+ active directory users",
      "Workflow-driven technician assignment tracking",
      "Real-time performance analytics for administrative oversight",
      "Integrated attendance and project management modules",
    ],
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "REST APIs", "Full-Stack"],
    status: "completed",
    featured: true,
    mockupImage: "/projects/titan-helpdesk.png",
    links: {
      github: "https://github.com/DharunSA/Titan-HR-Helpdesk",
    },
  },

  // ── ADDITIONAL PROJECTS (/projects page, future) ───────────
  {
    id: "ml-vlsi-gnn",
    numberId: "05",
    title: "ML in VLSI — GNN Netlist Reverse Engineering",
    completedDate: "2025-05",
    description:
      "Applied Graph Neural Networks (GNNs) to gate-level netlists to identify circuit sub-blocks and logic functionality. Built a pipeline converting netlists into graph structures for high-accuracy structural recognition.",
    features: [
      "GNN-based gate-level netlist analysis and reverse engineering",
      "Netlist → graph structure conversion pipeline",
      "High-accuracy sub-block and logic functionality identification",
      "Node feature engineering for structural pattern recognition",
    ],
    tags: ["Graph Neural Networks", "VLSI", "Python", "PyTorch", "Machine Learning", "Verilog"],
    status: "completed",
    featured: false,
    links: {
      github: "[YOUR_VLSI_GITHUB]",
    },
  },
];

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}
