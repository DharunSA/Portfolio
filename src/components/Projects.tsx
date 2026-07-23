import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '@/data/projects';
import type { Project } from '@/data/projects';

const statusColors: Record<string, string> = {
  'in-progress': 'text-amber-500 bg-amber-500/10 border-amber-500/30',
  completed:     'text-green-500 bg-green-500/10 border-green-500/30',
  maintained:    'text-blue-500 bg-blue-500/10 border-blue-500/30',
};

const itemVariants = {
  hidden:  { opacity: 0, scale: 0.96, y: 30, filter: 'blur(8px)' },
  visible: (i: number) => ({
    opacity: 1, scale: 1, y: 0, filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 90, damping: 14, mass: 0.8, delay: (i % 2) * 0.1 },
  }),
};

function PlainProjectCard({ project, index }: { project: Project; index: number }) {
  const isGhPlaceholder = project.links.github?.startsWith('[');

  return (
    <motion.div
      custom={index}
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      className="h-full"
    >
      <div className="max-w-2xl p-3 pb-4 border-2 card-inset-shadow border-border-primary rounded-md bg-bg-primary hover:bg-hover-tint transition-all duration-200 flex flex-col h-full group">

        {/* Thumbnail placeholder */}
        <div className="aspect-[4/2.5] rounded-md mb-4 bg-bg-badge/10 relative overflow-hidden border border-border-primary">
          {/* Replace with actual project screenshot when available */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4">
              <span className="text-3xl font-instrumentserif text-text-muted/30 font-light select-none">
                {project.numberId}
              </span>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-text-primary/[0.03] to-transparent" />
        </div>

        {/* Title row */}
        <div className="flex items-start justify-between gap-2 px-1 mb-1">
          <h3 className="text-base font-medium text-text-primary font-instrumentsans group-hover:text-text-primary transition-colors leading-tight">
            {project.title}
          </h3>
          <div className="flex items-center gap-1.5 shrink-0">
            {!isGhPlaceholder && project.links.github && (
              <a href={project.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-1.5 rounded-md hover:bg-hover-tint text-text-muted hover:text-text-primary transition-colors">
                <Github size={14} />
              </a>
            )}
            {project.links.live && (
              <a href={project.links.live} target="_blank" rel="noopener noreferrer" aria-label="Live" className="p-1.5 rounded-md hover:bg-hover-tint text-text-muted hover:text-text-primary transition-colors">
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>

        {/* Date + status */}
        <div className="flex items-center justify-between px-1 mb-3">
          <span className="text-xs text-text-muted font-instrumentsans">
            {project.completedDate ? new Date(project.completedDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : 'Ongoing'}
          </span>
          <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full border font-instrumentsans ${statusColors[project.status]}`}>
            {project.status.replace('-', ' ')}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-text-secondary font-instrumentsans leading-relaxed px-1 mb-3 flex-1">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 px-1">
          {project.tags.slice(0, 5).map((tag) => (
            <span key={tag} className="text-[11px] px-2 py-0.5 rounded-md bg-bg-badge/10 border border-border-primary text-text-muted font-mono">
              {tag}
            </span>
          ))}
          {project.tags.length > 5 && (
            <span className="text-[11px] px-2 py-0.5 rounded-md bg-bg-badge/10 border border-border-primary text-text-muted font-mono">
              +{project.tags.length - 5}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

const Projects = () => (
  <section id="projects" className="w-full flex justify-center items-center px-4 lg:px-0 mb-12">
    <div className="max-w-2xl w-full flex flex-col h-full">
      <div className="mb-6">
        <h2 className="text-4xl font-light tracking-tight text-text-primary text-start font-instrumentserif">
          Projects.
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 p-4 -mx-4">
        {projects.map((project, index) => (
          <PlainProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
