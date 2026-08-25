"use client";

import { useState } from "react";
import { Container } from "./Container";
import { Heading, BodyText, MetaText } from "./Typography";
import { MotionWrapper } from "./MotionWrapper";
import { ProjectCard } from "./ProjectCard";
import { projectsData } from "../data/projectsData";

const typologies = ["ALL", "Civic & Cultural", "Educational & Research", "Private Residential", "Scientific & Civic"];

export function WorksGallery() {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filteredProjects = activeFilter === "ALL"
    ? projectsData
    : projectsData.filter((p) => p.typology.toLowerCase() === activeFilter.toLowerCase());

  return (
    <section id="works" className="py-[var(--space-xl)] md:py-[var(--space-2xl)] border-b border-[var(--color-border)] relative">
      <Container size="2xl">
        {/* Gallery Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-[var(--space-sm)] mb-[var(--space-md)] pb-[var(--space-sm)] border-b border-[var(--color-border)]">
          <div>
            <MotionWrapper delay={100}>
              <MetaText className="block mb-[var(--space-3xs)]">SPATIAL INDEX &mdash; ARCHITECTURAL MONOGRAPHS</MetaText>
            </MotionWrapper>
            <MotionWrapper delay={200}>
              <Heading level={2}>Architectural Portfolio</Heading>
            </MotionWrapper>
          </div>
          <MotionWrapper delay={300}>
            <BodyText className="max-w-md text-xs sm:text-sm">
              Comprehensive index of civic, research, and residential spatial works designed with tectonic discipline.
            </BodyText>
          </MotionWrapper>
        </div>

        {/* Taxonomy Filter Bar */}
        <div className="flex flex-wrap gap-2 mb-[var(--space-lg)] pb-[var(--space-xs)] border-b border-[var(--color-border)]/50">
          {typologies.map((typ) => (
            <button
              key={typ}
              onClick={() => setActiveFilter(typ)}
              className={`px-3 py-2 text-xs font-mono uppercase tracking-wider min-h-[44px] transition-colors focus:outline-none focus:ring-1 focus:ring-[var(--color-paper)] ${
                activeFilter === typ
                  ? "bg-[var(--color-paper)] text-[var(--color-void)] font-semibold"
                  : "bg-[var(--color-surface)] text-[var(--color-muted)] hover:text-[var(--color-paper)] border border-[var(--color-border)]"
              }`}
            >
              {typ}
            </button>
          ))}
        </div>

        {/* Editorial Project List */}
        <div className="grid grid-cols-1 gap-[var(--space-lg)] md:gap-[var(--space-xl)]">
          {filteredProjects.map((project, idx) => (
            <MotionWrapper key={project.slug} delay={150 + idx * 100}>
              <ProjectCard project={project} index={idx} />
            </MotionWrapper>
          ))}
        </div>
      </Container>
    </section>
  );
}
