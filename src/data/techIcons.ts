export const techIconMap: Record<string, string> = {
  // Frontend
  "React 19": "/icons/react.png",
  "React.js": "/icons/react.png",
  "React": "/icons/react.png",
  "Next.js 16": "/icons/nextjs.jpeg",
  "Next.js": "/icons/nextjs.jpeg",
  "TypeScript": "/icons/typescript.png",
  "JavaScript": "/icons/js.png",
  "Tailwind CSS": "/icons/tailwindcss.jpeg",
  "Vite": "/icons/vite.svg",

  // Backend & Databases
  "Node.js": "/icons/nodejs.png",
  "FastAPI": "/icons/fastapi.webp",
  "Python": "/icons/python.png",
  "PostgreSQL": "/icons/postgresql.png",
  "MongoDB": "/icons/mongodb.png",
  "Firebase": "/icons/database.png",
  "SQLAlchemy": "/icons/database.png",
  "SQLite": "/icons/sqlite.jpeg",
  "Express": "/icons/js.png",
  "Express.js": "/icons/js.png",
  "REST APIs": "/icons/nodejs.png",
  "JWT": "/icons/js.png",

  // AI & Hardware / IoT
  "AI": "/icons/cursor.webp",
  "Edge AI": "/icons/python.png",
  "YOLO": "/icons/python.png",
  "Raspberry Pi 5": "/icons/docker.jpeg",
  "ESP32": "/icons/database.png",
  "IoT": "/icons/docker.jpeg",
  "Leaflet.js": "/icons/js.png",
  "TanStack Query": "/icons/react.png",
  "Full-Stack": "/icons/github.png",
};

const normalizedMap = new Map<string, string>();
for (const [key, value] of Object.entries(techIconMap)) {
  normalizedMap.set(key.toLowerCase().replace(/[\s.\-_]/g, ""), value);
}

export function getTechIcon(tag: string): string | undefined {
  if (techIconMap[tag]) return techIconMap[tag];
  const normalized = tag.toLowerCase().replace(/[\s.\-_]/g, "");
  return normalizedMap.get(normalized) || "/icons/code.png";
}
