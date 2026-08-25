import { notFound } from "next/navigation";
import { Header } from "../../../components/Header";
import {
  ProjectHero,
  ProjectContextBar,
  ProjectNarrative,
  MaterialGallery,
  NextProjectNav,
} from "../../../components/ProjectStorytelling";
import { Container } from "../../../components/Container";
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

  const nextProject = projectsData.find((p) => p.slug === project.nextSlug) || projectsData[0];

  return (
    <div className="min-h-screen bg-[var(--color-void)] text-[var(--color-paper)] flex flex-col justify-between selection:bg-[var(--color-paper)] selection:text-[var(--color-void)]">
      <Header />

      <main className="flex-grow">
        {/* Project Arrival Hero */}
        <ProjectHero project={project} />

        {/* Spatial Context Bar */}
        <ProjectContextBar project={project} />

        {/* Architectural Narrative & Tectonic Specs */}
        <ProjectNarrative project={project} />

        {/* Material & Spatial Gallery */}
        <MaterialGallery project={project} />

        {/* Next Project Transition */}
        <NextProjectNav nextProject={nextProject} />
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
