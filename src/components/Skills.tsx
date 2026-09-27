import { techRegistry, type TechItem } from '@/data/skills';
import { useState } from 'react';

function TechIconCard({ item, isNeighbor }: { item: TechItem; isNeighbor: boolean }) {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className="
        w-9 h-9 rounded-[9px] overflow-hidden cursor-pointer shrink-0
        flex items-center justify-center
        transition-transform duration-300
        group-hover:-translate-y-3 group-hover:scale-125
      "
      style={{
        transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        transform: isNeighbor ? 'translateY(-4px) scale(1.08)' : undefined,
        background: hasError ? 'var(--color-bg-elevated)' : undefined,
        border: hasError ? '1px solid var(--color-border-primary)' : undefined,
      }}
    >
      {hasError ? (
        <span className="text-[10px] font-bold text-text-secondary">
          {item.name.slice(0, 2)}
        </span>
      ) : (
        <img
          src={item.icon}
          alt={item.name}
          className="w-full h-full object-contain"
          loading="lazy"
          onError={() => setHasError(true)}
        />
      )}
    </div>
  );
}

const Skills = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <section id="skills" className="w-full flex justify-center items-center px-4 lg:px-0 mb-8">
      <div className="max-w-2xl w-full flex flex-col">

        <h2 className="text-4xl font-light text-text-primary mb-5 font-instrumentserif">
          Tech Stack — That helps me get the stuff done.
        </h2>

        {/* Extra top space so the popped icon + tooltip don't get cut */}
        <div className="pt-10">
          <div className="flex items-end flex-wrap gap-[6px] px-3 py-3 rounded-xl border border-border-primary bg-bg-card card-inset-shadow w-full">
            {techRegistry.map((item, index) => {
              const isNeighbor = activeIdx !== null && Math.abs(activeIdx - index) === 1;

              return (
                <div
                  key={item.name}
                  className="group relative flex flex-col items-center"
                  onMouseEnter={() => setActiveIdx(index)}
                  onMouseLeave={() => setActiveIdx(null)}
                >
                  {/* ── Tooltip ─────────────────────────────── */}
                  <span
                    className="
                      pointer-events-none select-none absolute
                      left-1/2 -translate-x-1/2 whitespace-nowrap
                      text-[11px] font-semibold text-white font-instrumentsans
                      bg-[#111] dark:bg-[#1f1f1f]
                      px-2.5 py-[5px] rounded-lg shadow-xl border border-white/10
                      opacity-0 scale-90 translate-y-1
                      group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0
                      transition-all duration-150 ease-out
                    "
                    style={{ bottom: 'calc(100% + 14px)', zIndex: 9999 }}
                  >
                    {item.name}
                    <span
                      className="absolute left-1/2 -translate-x-1/2 -bottom-[5px] w-0 h-0
                                 border-l-[5px] border-l-transparent
                                 border-r-[5px] border-r-transparent
                                 border-t-[5px] border-t-[#111] dark:border-t-[#1f1f1f]"
                    />
                  </span>

                  {/* ── Icon ──────────────────────────────────── */}
                  <TechIconCard item={item} isNeighbor={isNeighbor} />
                </div>
              );
            })}
          </div>
        </div>

        {/* Category counts */}
        <div className="flex flex-wrap gap-3 mt-3">
          {(['languages', 'frameworks', 'cloud', 'tools'] as const).map((cat) => (
            <div key={cat} className="flex items-center gap-1.5 text-xs text-text-muted font-instrumentsans">
              <span className="w-1.5 h-1.5 rounded-full bg-border-accent" />
              <span className="capitalize">{cat}</span>
              <span className="opacity-50">({techRegistry.filter((t) => t.category === cat).length})</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;