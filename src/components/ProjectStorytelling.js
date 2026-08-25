import Link from "next/link";
import Image from "next/image";
import { Container } from "./Container";
import { DisplayText, Heading, BodyText, MetaText } from "./Typography";
import { MotionWrapper } from "./MotionWrapper";

export function ProjectHero({ project }) {
  return (
    <section className="relative pt-[var(--space-md)] pb-[var(--space-lg)] md:pt-[var(--space-xl)] md:pb-[var(--space-xl)] border-b border-[var(--color-border)]">
      <Container size="2xl">
        {/* Navigation Breadcrumb Back Button */}
        <div className="mb-[var(--space-sm)]">
          <Link
            href="/works"
            className="inline-flex items-center gap-2 text-xs font-mono text-[var(--color-muted)] hover:text-[var(--color-paper)] transition-colors min-h-[44px] focus:outline-none focus:ring-1 focus:ring-[var(--color-paper)]"
          >
            <span>&larr;</span>
            <span>RETURN TO MONOGRAPH INDEX</span>
          </Link>
        </div>

        {/* Project Header Typographic Block */}
        <MotionWrapper delay={100}>
          <div className="flex items-center gap-3 mb-[var(--space-xs)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-paper)] inline-block"></span>
            <MetaText>{project.typology?.toUpperCase()} &bull; {project.location?.toUpperCase()}</MetaText>
          </div>
        </MotionWrapper>

        <MotionWrapper delay={200}>
          <DisplayText className="mb-[var(--space-xs)] max-w-4xl">
            {project.title}
          </DisplayText>
        </MotionWrapper>

        <MotionWrapper delay={300}>
          <BodyText size="lg" className="text-[var(--color-paper-muted)] max-w-2xl mb-[var(--space-md)]">
            {project.subtitle}
          </BodyText>
        </MotionWrapper>

        {/* Primary Hero Photography Frame */}
        <MotionWrapper delay={400}>
          <div className="w-full aspect-[16/9] relative overflow-hidden bg-[var(--color-surface)] border border-[var(--color-border)] shadow-2xl">
            <Image
              src={project.heroImage}
              alt={project.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1376px"
              className="object-cover object-center grayscale contrast-110 opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />

            <div className="absolute inset-0 p-4 sm:p-8 flex flex-col justify-between pointer-events-none">
              <div className="flex justify-between items-start">
                <MetaText className="bg-[var(--color-void)]/80 backdrop-blur-xs px-2 py-1 border border-[var(--color-border)] text-[10px]">
                  PRIMARY VISUAL MONOGRAPH &bull; REF {project.year}
                </MetaText>
                <MetaText className="text-[var(--color-paper)] text-[10px] bg-[var(--color-void)]/80 px-2 py-1 border border-[var(--color-border)]">
                  STATUS: {project.status?.toUpperCase()}
                </MetaText>
              </div>

              <div className="border-t border-[var(--color-border)]/60 pt-3 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2 text-xs font-mono text-[var(--color-muted)]">
                <div>
                  <span className="text-[var(--color-paper)] block font-medium">{project.location}</span>
                  <span className="text-[10px]">GROSS AREA: {project.area}</span>
                </div>
                <MetaText className="text-[var(--color-paper-muted)]">
                  LEAD: {project.leadArchitect}
                </MetaText>
              </div>
            </div>
          </div>
          {project.disclaimer && (
            <p className="text-[10px] font-mono text-[#8e8e8a] mt-2 italic">
              {project.disclaimer}
            </p>
          )}
        </MotionWrapper>
      </Container>
    </section>
  );
}

export function ProjectContextBar({ project }) {
  return (
    <section className="py-[var(--space-md)] border-b border-[var(--color-border)] bg-[var(--color-surface)]">
      <Container size="2xl">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-[var(--space-sm)] font-mono text-xs">
          <div className="border-l border-[var(--color-border)] pl-3">
            <MetaText className="block text-[var(--color-muted)] text-[10px] mb-1">LOCATION</MetaText>
            <div className="text-[var(--color-paper)]">{project.location}</div>
          </div>
          <div className="border-l border-[var(--color-border)] pl-3">
            <MetaText className="block text-[var(--color-muted)] text-[10px] mb-1">TYPOLOGY</MetaText>
            <div className="text-[var(--color-paper)]">{project.typology}</div>
          </div>
          <div className="border-l border-[var(--color-border)] pl-3">
            <MetaText className="block text-[var(--color-muted)] text-[10px] mb-1">YEAR / SCALE</MetaText>
            <div className="text-[var(--color-paper)]">{project.year} &bull; {project.area}</div>
          </div>
          <div className="border-l border-[var(--color-border)] pl-3">
            <MetaText className="block text-[var(--color-muted)] text-[10px] mb-1">STATUS</MetaText>
            <div className="text-[var(--color-paper)]">{project.status}</div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function ProjectNarrative({ project }) {
  return (
    <section className="py-[var(--space-xl)] md:py-[var(--space-2xl)] border-b border-[var(--color-border)]">
      <Container size="2xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-[var(--space-lg)] md:gap-[var(--space-xl)] items-start">
          {/* Left Architectural Idea Statement */}
          <div className="md:col-span-5 space-y-[var(--space-sm)]">
            <MetaText className="block">ARCHITECTURAL CONCEPT & INTENT</MetaText>
            <Heading level={2} className="leading-tight">
              {project.architecturalIdea}
            </Heading>

            {/* Editorial Insight Callout Block */}
            <div className="p-[var(--space-md)] bg-[var(--color-surface)] border-l-2 border-[var(--color-paper)] text-xs sm:text-sm font-mono leading-relaxed text-[var(--color-paper-muted)] mt-[var(--space-md)]">
              &ldquo;{project.editorialInsight}&rdquo;
            </div>
          </div>

          {/* Right Narrative & Technical Specs */}
          <div className="md:col-span-7 space-y-[var(--space-md)]">
            <div>
              <MetaText className="block mb-2 text-[var(--color-muted)]">DESIGN OVERVIEW</MetaText>
              <BodyText size="lg" className="leading-relaxed text-sm sm:text-base text-[var(--color-paper-muted)]">
                {project.overview}
              </BodyText>
            </div>

            {/* Specifications Matrix */}
            {project.specs && (
              <div className="pt-[var(--space-sm)] border-t border-[var(--color-border)]">
                <MetaText className="block mb-4">TECTONIC SPECIFICATIONS</MetaText>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
                  {Object.entries(project.specs).map(([key, val]) => (
                    <div key={key} className="p-3 bg-[var(--color-surface)] border border-[var(--color-border)]">
                      <span className="text-[10px] text-[var(--color-muted)] block uppercase mb-1">{key}</span>
                      <span className="text-[var(--color-paper)]">{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

export function MaterialGallery({ project }) {
  if (!project.galleryImages || project.galleryImages.length === 0) return null;

  return (
    <section className="py-[var(--space-xl)] md:py-[var(--space-2xl)] border-b border-[var(--color-border)] bg-[var(--color-surface)]/50">
      <Container size="2xl">
        <div className="mb-[var(--space-lg)] pb-[var(--space-xs)] border-b border-[var(--color-border)] flex justify-between items-end">
          <div>
            <MetaText className="block mb-1">SPATIAL GALLERY & MATERIAL MOMENTS</MetaText>
            <Heading level={2}>Tectonic Documentation</Heading>
          </div>
          <MetaText className="hidden sm:block text-[var(--color-muted)]">
            {project.galleryImages.length} MONOGRAPH PLATES
          </MetaText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--space-md)]">
          {project.galleryImages.map((img, idx) => (
            <MotionWrapper key={idx} delay={150 + idx * 100}>
              <div className="group border border-[var(--color-border)] hover:border-[var(--color-border-light)] transition-colors bg-[var(--color-void)] p-3">
                <div className="w-full aspect-[4/3] relative overflow-hidden bg-[var(--color-surface)] border border-[var(--color-border)]">
                  <Image
                    src={img.url}
                    alt={img.caption}
                    fill
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="object-cover grayscale contrast-105 group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="pt-3 px-1 flex justify-between items-center text-[10px] font-mono text-[var(--color-muted)]">
                  <span>{img.caption}</span>
                  <span>PLATE 0{idx + 1}</span>
                </div>
                <div className="text-[10px] font-mono text-[var(--color-paper-muted)] mt-1">
                  MATERIAL: {img.material}
                </div>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function NextProjectNav({ nextProject }) {
  if (!nextProject) return null;

  return (
    <section className="py-[var(--space-xl)] md:py-[var(--space-2xl)] bg-[var(--color-void)]">
      <Container size="2xl">
        <div className="pt-[var(--space-md)] border-t border-[var(--color-border)]">
          <MetaText className="block mb-[var(--space-2xs)]">CONTINUE ARCHITECTURAL EXPLORATION</MetaText>
          <Link
            href={`/works/${nextProject.slug}`}
            className="group block p-[var(--space-md)] bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-paper-muted)] transition-colors focus:outline-none focus:ring-1 focus:ring-[var(--color-paper)]"
          >
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <MetaText className="text-[var(--color-muted)] text-[10px] block mb-1">
                  NEXT MONOGRAPH &bull; {nextProject.typology?.toUpperCase()}
                </MetaText>
                <Heading level={2} className="group-hover:text-[var(--color-paper-muted)] transition-colors">
                  {nextProject.title}
                </Heading>
                <BodyText className="text-xs text-[var(--color-muted)] mt-1">
                  {nextProject.location} &mdash; {nextProject.year}
                </BodyText>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-[var(--color-paper)] group-hover:translate-x-2 transition-transform">
                <span>VIEW MONOGRAPH</span>
                <span>&rarr;</span>
              </div>
            </div>
          </Link>
        </div>
      </Container>
    </section>
  );
}
