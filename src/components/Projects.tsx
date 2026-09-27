import { useState } from 'react';
import { ExternalLink, GitBranch } from 'lucide-react';
import { getFeaturedProjects } from '@/data/projects';
import type { Project } from '@/data/projects';
import { getTechIcon } from '@/data/techIcons';

function formatProjectDate(dateStr?: string | null): string {
  if (!dateStr) return 'Present';
  const d = new Date(dateStr + '-01');
  if (isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
}

// ── Overlapping circular tech badges with tooltips ──────────────────────────
function TechAccordion({ tags, projectId }: { tags: string[]; projectId: string }) {
  const [hoveredTag, setHoveredTag] = useState<string | null>(null);
  const validTags = tags.filter((tag) => getTechIcon(tag)).slice(0, 6);
  if (validTags.length === 0) return null;

  return (
    <div className="relative flex items-center">
      <div className="group/tech flex items-center">
        {validTags.map((tag, index) => {
          const iconUrl = getTechIcon(tag);
          if (!iconUrl) return null;
          return (
            <div
              key={`${projectId}-${tag}`}
              onMouseEnter={() => setHoveredTag(tag)}
              onMouseLeave={() => setHoveredTag(null)}
              className="relative w-6 h-6 rounded-full border border-border-primary bg-bg-elevated
                         transition-all duration-300 ease-out
                         hover:scale-125 hover:z-30 hover:-translate-y-1
                         cursor-help shrink-0 -ml-2 first:ml-0
                         group-hover/tech:ml-1 group-hover/tech:first:ml-0
                         shadow-sm overflow-hidden"
              style={{ zIndex: 10 + index, transitionDelay: `${index * 15}ms` }}
            >
              <img
                src={iconUrl}
                alt={tag}
                className="w-full h-full object-cover rounded-full pointer-events-none"
              />
              {hoveredTag === tag && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1
                                bg-black/90 border border-white/15 text-white text-[10px] font-medium
                                rounded-md shadow-xl whitespace-nowrap z-50 pointer-events-none">
                  {tag}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-black/90" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Single project card (no framer motion — plain HTML) ──────────────────────
function ProjectCard({ project }: { project: Project }) {
  const isGhPlaceholder = !project.links.github || project.links.github.startsWith('[');
  const cardImage = project.mockupImage;

  return (
    <div
      className="group/card flex flex-col p-2 pb-3.5
                 border-2 border-border-primary rounded-xl bg-bg-primary
                 hover:bg-bg-elevated/50 transition-colors duration-200
                 shadow-[inset_0px_0px_2px_2px_rgba(0,0,0,0.08)]
                 dark:shadow-[inset_0px_0px_4px_4px_rgba(255,255,255,0.04)]"
    >
      {/* Image / banner */}
      <div className="aspect-[4/3] w-full rounded-lg overflow-hidden relative mb-3 bg-bg-elevated border border-border-primary/30">
        {cardImage ? (
          <img
            src={cardImage}
            alt={project.title}
            className="w-full h-full object-cover group-hover/card:scale-[1.02] transition-transform duration-500 ease-out"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-bg-elevated to-bg-badge/20">
            <span className="text-text-muted text-sm font-instrumentsans">No preview</span>
          </div>
        )}
      </div>

      {/* Card body */}
      <div className="flex flex-col gap-1.5 px-1">
        {/* Title + Links */}
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-xl font-light text-text-primary group-hover/card:text-text-secondary transition-colors font-instrumentsans">
            {project.title}
          </h3>
          <div className="flex items-center gap-2">
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live Demo"
                className="relative group/tip text-text-muted hover:text-text-primary transition-colors p-1"
              >
                <ExternalLink size={16} />
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-0.5
                                 bg-white text-slate-800 text-[10px] font-semibold rounded shadow-md
                                 opacity-0 group-hover/tip:opacity-100 transition-opacity duration-200
                                 pointer-events-none whitespace-nowrap border border-slate-200 z-50">
                  Live Demo
                  <span className="absolute top-full left-1/2 -translate-x-1/2 -mt-px border-4 border-transparent border-t-white" />
                </span>
              </a>
            )}
            {!isGhPlaceholder && project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Repository"
                className="relative group/tip text-text-muted hover:text-text-primary transition-colors p-1"
              >
                <GitBranch size={16} />
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-0.5
                                 bg-white text-slate-800 text-[10px] font-semibold rounded shadow-md
                                 opacity-0 group-hover/tip:opacity-100 transition-opacity duration-200
                                 pointer-events-none whitespace-nowrap border border-slate-200 z-50">
                  GitHub
                  <span className="absolute top-full left-1/2 -translate-x-1/2 -mt-px border-4 border-transparent border-t-white" />
                </span>
              </a>
            )}
          </div>
        </div>

        {/* Date + Tech icons */}
        <div className="flex items-center justify-between gap-4 pt-0.5">
          <p className="text-sm text-text-muted font-instrumentsans font-light">
            {formatProjectDate(project.completedDate)}
          </p>
          <TechAccordion tags={project.tags} projectId={project.id} />
        </div>
      </div>
    </div>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────
const Projects = () => {
  const featured = getFeaturedProjects();

  return (
    <section id="projects" className="w-full flex justify-center items-center px-4 lg:px-0 mb-12">
      <div className="max-w-2xl w-full flex flex-col">
        <div className="mb-6">
          <h2 className="text-4xl font-light tracking-tight text-text-primary text-start font-instrumentserif">
            Projects.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
