import { useState } from 'react';
import { ChevronDown, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { experiences } from '@/data/experience';
import type { Experience } from '@/data/experience';

function formatDate(iso: string): string {
  const d = new Date(iso + 'T00:00:00');
  return d.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
}

function formatRange(startDate: string, endDate?: string): string {
  const start = formatDate(startDate);
  if (!endDate) return `${start} — Present`;
  const end = formatDate(endDate);
  if (start === end) return start;
  return `${start} — ${end}`;
}

function RoleEntry({ exp, defaultExpanded = false }: { exp: Experience; defaultExpanded?: boolean }) {
  const [open, setOpen] = useState(defaultExpanded);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="group w-full flex items-center justify-between gap-2 text-left cursor-pointer"
        aria-expanded={open}
      >
        <span className="flex items-center gap-2 min-w-0">
          <span className="w-6 h-6 rounded bg-bg-elevated border-2 border-border-primary card-inset-shadow flex items-center justify-center shrink-0">
            <Code2 size={12} className="text-text-primary" />
          </span>
          <span className="text-base font-medium text-text-primary truncate font-instrumentsans">
            {exp.role}
          </span>
        </span>
        <span className="flex items-center gap-2 shrink-0">
          <span className="text-xs text-text-muted font-instrumentsans font-light whitespace-nowrap">
            {formatRange(exp.startDate, exp.endDate)}
          </span>
          <motion.div
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.3, ease: 'power2.out' as any }}
            className="shrink-0 p-1 rounded-lg hover:bg-hover-tint"
          >
            <ChevronDown size={15} className="text-text-muted" />
          </motion.div>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pt-3 space-y-2">
              <ul className="text-sm text-text-secondary leading-relaxed space-y-1 list-[square] list-outside pl-5 font-instrumentsans">
                {exp.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 pt-1">
                {exp.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-mono rounded-md bg-bg-badge/10 border border-border-primary text-text-secondary card-inset-shadow"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function CompanyGroup({ exps, defaultOpen = false }: { exps: Experience[]; defaultOpen?: boolean }) {
  const [{ company, location, logo, logoInitial, logoColor }] = exps;

  return (
    <div className="pt-6 first:pt-0">
      <div className="relative">
        <div className="flex items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-3 min-w-0">
            {logo ? (
              <div className="w-10 h-10 rounded-xl bg-white border border-border-primary/60 card-inset-shadow flex items-center justify-center overflow-hidden shrink-0 p-1">
                <img src={logo} alt={`${company} logo`} className="w-full h-full object-contain" />
              </div>
            ) : (
              <div
                className="w-10 h-10 rounded-xl bg-bg-elevated border border-border-primary card-inset-shadow flex items-center justify-center overflow-hidden shrink-0 text-white text-base font-bold"
                style={{ backgroundColor: logoColor }}
              >
                {logoInitial}
              </div>
            )}
            <h3 className="text-base font-medium text-text-primary tracking-tight truncate font-instrumentsans">
              {company}
            </h3>
          </div>
          {location && (
            <span className="text-sm text-text-muted whitespace-nowrap font-instrumentsans">{location}</span>
          )}
        </div>

        <div className="pt-2 flex flex-col border-b border-border-primary/50">
          {exps.map((exp, i) => {
            const isLast = i === exps.length - 1;
            return (
              <div key={exp.id} className="relative pl-6 pb-6 last:pb-2">
                <div className={`absolute left-[11px] w-[1px] bg-border-primary/60 top-[-16px] ${isLast ? 'h-[28px]' : 'bottom-0'}`} />
                <div className="absolute left-[11px] top-[4px] w-2.5 h-[8px] border-l border-b border-border-primary/60 rounded-bl-[4px]" />
                <RoleEntry exp={exp} defaultExpanded={defaultOpen} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const Experience = () => {
  // Group by company
  const grouped = new Map<string, Experience[]>();
  for (const exp of experiences) {
    if (!grouped.has(exp.company)) grouped.set(exp.company, []);
    grouped.get(exp.company)!.push(exp);
  }
  const groups = Array.from(grouped.values());

  return (
    <section id="experience" className="w-full flex justify-center items-center px-4 lg:px-0 mb-12">
      <div className="max-w-2xl w-full flex flex-col h-full">
        <div className="mb-6">
          <h2 className="text-4xl font-light text-text-primary text-start font-instrumentserif">
            Experience.
          </h2>
        </div>
        <div className="flex flex-col">
          {groups.map((group, index) => (
            <CompanyGroup key={group[0].id} exps={group} defaultOpen={index === 0} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;