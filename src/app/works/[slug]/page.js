import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "../../../components/Header";
import { Container } from "../../../components/Container";
import { DisplayText, Heading, BodyText, MetaText } from "../../../components/Typography";
import { MotionWrapper } from "../../../components/MotionWrapper";
import { projectsData } from "../../../data/projectsData";

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[var(--color-void)] text-[var(--color-paper)] flex flex-col justify-between selection:bg-[var(--color-paper)] selection:text-[var(--color-void)]">
      <Header />

      <main className="flex-grow py-[var(--space-lg)] md:py-[var(--space-2xl)]">
        <Container size="2xl">
          {/* Navigation Back Link */}
          <div className="mb-[var(--space-md)]">
            <Link
              href="/#works"
              className="inline-flex items-center gap-2 text-xs font-mono text-[var(--color-muted)] hover:text-[var(--color-paper)] transition-colors min-h-[44px] focus:outline-none focus:ring-1 focus:ring-[var(--color-paper)]"
            >
              <span>&larr;</span>
              <span>RETURN TO MONOGRAPH INDEX</span>
            </Link>
          </div>

          {/* Project Title Block */}
          <section className="pb-[var(--space-lg)] border-b border-[var(--color-border)] mb-[var(--space-lg)]">
            <MotionWrapper delay={100}>
              <div className="flex items-center gap-3 mb-[var(--space-xs)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-paper)] inline-block"></span>
                <MetaText>{project.typology.toUpperCase()} &bull; {project.location.toUpperCase()}</MetaText>
              </div>
            </MotionWrapper>

            <MotionWrapper delay={200}>
              <DisplayText className="mb-[var(--space-xs)] max-w-4xl">
                {project.title}
              </DisplayText>
            </MotionWrapper>

            <MotionWrapper delay={300}>
              <BodyText size="lg" className="text-[var(--color-paper-muted)] max-w-2xl">
                {project.subtitle}
              </BodyText>
            </MotionWrapper>
          </section>

          {/* Project Hero Canvas */}
          <section className="mb-[var(--space-xl)]">
            <div className={`w-full ${project.aspectRatio} relative overflow-hidden bg-[var(--color-surface)] border border-[var(--color-border)]`}>
              <div className={`absolute inset-0 bg-gradient-to-br ${project.heroGradient} opacity-95`} />
              <div className="absolute inset-0 p-6 flex flex-col justify-between pointer-events-none">
                <MetaText className="text-[var(--color-paper-muted)] font-mono text-xs">
                  MONOGRAPH ARCHIVE &bull; REF {project.year}
                </MetaText>
                <div className="flex justify-between items-end text-xs font-mono text-[var(--color-muted)]">
                  <span>LOCATION: {project.location}</span>
                  <span>AREA: {project.area}</span>
                </div>
              </div>
            </div>
          </section>

          {/* Project Narrative and Specifications Grid */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-[var(--space-lg)] pb-[var(--space-2xl)] border-b border-[var(--color-border)]">
            <div className="md:col-span-7 space-y-[var(--space-md)]">
              <Heading level={2}>Architectural Narrative</Heading>
              <BodyText className="leading-relaxed text-sm sm:text-base">
                {project.longNarrative}
              </BodyText>
            </div>

            <div className="md:col-span-5 bg-[var(--color-surface)] border border-[var(--color-border)] p-[var(--space-md)] space-y-[var(--space-sm)]">
              <Heading level={3} className="text-sm font-mono uppercase tracking-wider text-[var(--color-paper-muted)] border-b border-[var(--color-border)] pb-3">
                Technical Tectonics
              </Heading>
              <div className="space-y-4">
                {project.specifications.map((spec) => (
                  <div key={spec.label} className="border-b border-[var(--color-border)]/50 pb-2 text-xs font-mono">
                    <div className="text-[var(--color-muted)] uppercase mb-1">{spec.label}</div>
                    <div className="text-[var(--color-paper)]">{spec.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </Container>
      </main>

      {/* Footer Element */}
      <footer className="border-t border-[var(--color-border)] py-[var(--space-md)] bg-[var(--color-void)]">
        <Container size="2xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-[var(--space-xs)] text-xs text-[var(--color-muted)] font-mono">
            <div>&copy; {new Date().getFullYear()} Arthurtect Associates. All rights reserved.</div>
            <div className="flex gap-4 tracking-wider uppercase">
              <span>London</span>
              <span>&bull;</span>
              <span>Zurich</span>
              <span>&bull;</span>
              <span>Tokyo</span>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}
