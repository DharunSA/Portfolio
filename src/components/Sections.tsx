import { ExternalLink } from 'lucide-react';
import { certificates, achievements, education } from '@/data/achievements';

/* ── Certifications ──────────────────────────────────────── */
export function Certifications() {
  return (
    <section id="certificates" className="w-full flex justify-center items-center px-4 lg:px-0 mb-12">
      <div className="max-w-2xl w-full flex flex-col h-full">
        <div className="mb-6">
          <h2 className="text-4xl font-light text-text-primary text-start font-instrumentserif">
            Certifications.
          </h2>
        </div>

        <div className="divide-y divide-border-primary">
          {certificates.map((cert) => {
            const isPlaceholder = cert.credential.startsWith('[');
            return (
              <div key={cert.id} className="flex items-center justify-between gap-3 py-5 first:pt-0">
                <div className="flex items-center flex-wrap gap-x-1.5 gap-y-0.5 min-w-0">
                  <span className="text-base font-medium text-text-primary font-instrumentsans">
                    {cert.title} by
                  </span>
                  <img
                    src={cert.issuerLogo}
                    alt={cert.issuer}
                    className="w-5 h-5 rounded-sm object-contain shrink-0"
                  />
                  <span className="text-base font-medium text-text-primary font-instrumentsans">
                    {cert.issuer}
                  </span>
                  {cert.date && (
                    <span className="text-sm text-text-muted font-instrumentsans ml-2">· {cert.date}</span>
                  )}
                </div>

                {!isPlaceholder ? (
                  <a
                    href={cert.credential}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg transition hover:bg-hover-tint shrink-0"
                    aria-label={`View ${cert.title} credential`}
                  >
                    <ExternalLink size={15} className="text-text-muted" />
                  </a>
                ) : (
                  <span className="text-xs text-text-muted italic font-instrumentsans shrink-0">
                    link pending
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── Education ───────────────────────────────────────────── */
export function Education() {
  return (
    <section id="education" className="w-full flex justify-center items-center px-4 lg:px-0 mb-12">
      <div className="max-w-2xl w-full flex flex-col h-full">
        <div className="mb-6">
          <h2 className="text-4xl font-light text-text-primary text-start font-instrumentserif">
            Education.
          </h2>
        </div>

        <div className="space-y-4">
          {education.map((edu) => (
            <div key={edu.id} className="p-4 rounded-md border-2 border-border-primary card-inset-shadow bg-bg-primary">
              <div className="flex items-start justify-between gap-2 mb-1">
                <h3 className="text-base font-medium text-text-primary font-instrumentsans leading-snug">
                  {edu.degree}
                </h3>
                <span className="text-sm text-text-muted whitespace-nowrap font-instrumentsans shrink-0">
                  {edu.period}
                </span>
              </div>
              <p className="text-sm text-text-secondary font-instrumentsans mb-1">{edu.institution}</p>
              <p className="text-sm text-text-muted font-instrumentsans mb-3">{edu.location} · GPA: <span className="text-text-primary font-medium">{edu.gpa}</span></p>

              <div className="flex flex-wrap gap-1.5">
                {edu.coursework.map((c) => (
                  <span key={c} className="text-[11px] px-2 py-0.5 rounded-md bg-bg-badge/10 border border-border-primary text-text-muted font-mono">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Achievements ────────────────────────────────────────── */
const iconMap = {
  trophy: '🏆',
  star:   '⭐',
  users:  '👥',
  award:  '🎖️',
};

export function Achievements() {
  return (
    <section id="achievements" className="w-full flex justify-center items-center px-4 lg:px-0 mb-12">
      <div className="max-w-2xl w-full flex flex-col h-full">
        <div className="mb-6">
          <h2 className="text-4xl font-light text-text-primary text-start font-instrumentserif">
            Leadership & Achievements.
          </h2>
        </div>

        <div className="divide-y divide-border-primary">
          {achievements.map((item) => (
            <div key={item.id} className="flex items-start gap-4 py-5 first:pt-0">
              <span className="text-2xl shrink-0 mt-0.5">{iconMap[item.icon]}</span>
              <div className="min-w-0">
                <div className="flex items-baseline justify-between gap-2 mb-0.5 flex-wrap">
                  <h3 className="text-base font-medium text-text-primary font-instrumentsans">{item.title}</h3>
                  <span className="text-xs text-text-muted font-instrumentsans shrink-0">{item.date}</span>
                </div>
                <p className="text-sm text-text-muted font-instrumentsans mb-1">{item.subtitle}</p>
                <p className="text-sm text-text-secondary font-instrumentsans leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
