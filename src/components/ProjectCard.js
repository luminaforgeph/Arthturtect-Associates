import Link from "next/link";
import { Heading, BodyText, MetaText } from "./Typography";

export function ProjectCard({ project, index }) {
  return (
    <article className="group border border-[var(--color-border)] hover:border-[var(--color-border-light)] transition-colors p-4 sm:p-6 md:p-8 bg-[var(--color-surface)] flex flex-col md:flex-row gap-[var(--space-md)] items-stretch">
      {/* Visual Canvas Frame */}
      <div className={`w-full md:w-3/5 ${project.aspectRatio} relative overflow-hidden bg-[var(--color-void)] border border-[var(--color-border)]`}>
        <div className={`absolute inset-0 bg-gradient-to-br ${project.heroGradient} opacity-90 transition-transform duration-700 ease-out group-hover:scale-105`} />

        {/* Architectural Annotation Canvas Elements */}
        <div className="absolute inset-0 p-4 flex flex-col justify-between pointer-events-none">
          <div className="flex justify-between items-start">
            <MetaText className="bg-[var(--color-void)]/80 backdrop-blur-xs px-2 py-1 border border-[var(--color-border)] text-[10px]">
              FIG 0{index + 1} &bull; {project.typology.toUpperCase()}
            </MetaText>
            <MetaText className="text-[var(--color-muted)] text-[10px]">
              {project.status.toUpperCase()}
            </MetaText>
          </div>

          <div className="flex justify-between items-end">
            <span className="text-[10px] font-mono text-[var(--color-muted)]">{project.location}</span>
            <span className="text-[10px] font-mono text-[var(--color-paper-muted)]">{project.year}</span>
          </div>
        </div>
      </div>

      {/* Editorial Content Frame */}
      <div className="w-full md:w-2/5 flex flex-col justify-between pt-2 md:pt-0">
        <div>
          <div className="flex justify-between items-center mb-2">
            <MetaText className="text-[var(--color-muted-dark)] font-mono text-xs sm:text-sm">
              0{index + 1}
            </MetaText>
            <MetaText className="text-[var(--color-muted)] text-[10px]">
              {project.area}
            </MetaText>
          </div>

          <Heading level={3} className="group-hover:text-[var(--color-paper-muted)] transition-colors mb-2">
            {project.title}
          </Heading>

          <BodyText size="base" className="text-xs leading-relaxed text-[var(--color-muted)] mb-4">
            {project.description}
          </BodyText>
        </div>

        <div className="pt-4 border-t border-[var(--color-border)] flex flex-col gap-3">
          <div className="text-[10px] font-mono text-[var(--color-muted)]">
            <span className="text-[var(--color-paper-muted)]">TECTONICS: </span>
            {project.materials}
          </div>

          <Link
            href={`/works/${project.slug}`}
            className="inline-flex items-center gap-2 text-xs font-mono text-[var(--color-paper)] group-hover:translate-x-1 transition-transform min-h-[44px] focus:outline-none focus:ring-1 focus:ring-[var(--color-paper)]"
          >
            <span>EXPLORE MONOGRAPH SPECIFICATION</span>
            <span>&rarr;</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
