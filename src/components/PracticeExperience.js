"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container } from "./Container";
import { DisplayText, Heading, BodyText, MetaText } from "./Typography";
import { MotionWrapper } from "./MotionWrapper";
import { practiceData } from "../data/practiceData";

export function PracticeHero() {
  const { hero } = practiceData;
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 border-b border-[#262624] relative overflow-hidden">
      <Container>
        <MotionWrapper animation="fadeUp" delay={0.1}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 md:mb-10 text-xs tracking-[0.2em] font-mono text-[#8e8e8a] uppercase">
            <span>{hero.kicker}</span>
            <span>{hero.meta}</span>
          </div>

          <DisplayText
            as="h1"
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-[#f5f5f2] tracking-tight leading-[1.08] mb-6 max-w-4xl"
          >
            {hero.title}
          </DisplayText>

          <p className="text-base sm:text-lg md:text-xl text-[#8e8e8a] font-light max-w-2xl leading-relaxed mb-10">
            {hero.subtitle}
          </p>

          <div className="pt-6 border-t border-[#262624]/60 flex flex-wrap items-center gap-y-2 gap-x-8 text-xs font-mono tracking-widest text-[#8e8e8a] uppercase">
            <span className="text-[#f5f5f2]/60">PRIMARY ATELIER LOCATION:</span>
            <span className="flex items-center gap-2 text-[#f5f5f2]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f5f5f2]" />
              {hero.location}
            </span>
          </div>
        </MotionWrapper>
      </Container>
    </section>
  );
}

export function PracticeStatement() {
  const { statement } = practiceData;
  return (
    <section className="py-20 md:py-32 border-b border-[#262624] bg-[#0a0a0a]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <MotionWrapper animation="fadeUp" delay={0.1}>
              <span className="text-xs font-mono tracking-widest uppercase text-[#8e8e8a] mb-4 block">
                STATEMENT & MANIFESTO
              </span>
              <Heading
                level={2}
                className="text-2xl sm:text-3xl md:text-4xl font-light text-[#f5f5f2] leading-tight"
              >
                {statement.heading}
              </Heading>
            </MotionWrapper>
          </div>

          <div className="lg:col-span-7 space-y-6 text-sm sm:text-base md:text-lg text-[#8e8e8a] font-light leading-relaxed">
            <MotionWrapper animation="fadeUp" delay={0.2}>
              <p className="text-[#f5f5f2] font-normal text-base sm:text-lg md:text-xl leading-relaxed border-l-2 border-[#f5f5f2]/30 pl-4 sm:pl-6">
                {statement.leadParagraph}
              </p>
            </MotionWrapper>
            {statement.paragraphs.map((para, idx) => (
              <MotionWrapper key={idx} animation="fadeUp" delay={0.3 + idx * 0.1}>
                <p>{para}</p>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export function PhilosophySection() {
  const { philosophy } = practiceData;
  return (
    <section className="py-20 md:py-32 border-b border-[#262624]">
      <Container>
        <MotionWrapper animation="fadeUp" delay={0.1}>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 md:mb-20 pb-6 border-b border-[#262624]">
            <div>
              <span className="text-xs font-mono tracking-widest uppercase text-[#8e8e8a] mb-2 block">
                02 / ARCHITECTURAL PHILOSOPHY
              </span>
              <Heading level={2} className="text-2xl sm:text-4xl font-light text-[#f5f5f2]">
                Principles of Spatial & Climatic Restraint
              </Heading>
            </div>
            <span className="text-xs font-mono text-[#8e8e8a] mt-2 sm:mt-0">
              6 CORE PILLARS
            </span>
          </div>
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {philosophy.map((item, idx) => (
            <MotionWrapper key={item.id} animation="fadeUp" delay={0.1 * (idx + 1)}>
              <div className="p-6 sm:p-8 bg-[#141414] border border-[#262624] h-full flex flex-col justify-between group hover:border-[#f5f5f2]/40 transition-colors duration-300">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono text-[#8e8e8a]">{item.number}</span>
                    <span className="w-2 h-2 rounded-full bg-[#262624] group-hover:bg-[#f5f5f2] transition-colors duration-300" />
                  </div>
                  <Heading
                    level={3}
                    className="text-lg sm:text-xl font-normal text-[#f5f5f2] mb-3"
                  >
                    {item.title}
                  </Heading>
                  <p className="text-xs sm:text-sm font-mono text-[#f5f5f2]/80 mb-4 leading-relaxed">
                    &ldquo;{item.summary}&rdquo;
                  </p>
                </div>
                <p className="text-xs sm:text-sm text-[#8e8e8a] font-light leading-relaxed pt-4 border-t border-[#262624]/60">
                  {item.description}
                </p>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function MethodSection() {
  const { methodology } = practiceData;
  return (
    <section className="py-20 md:py-32 border-b border-[#262624] bg-[#0a0a0a]">
      <Container>
        <MotionWrapper animation="fadeUp" delay={0.1}>
          <div className="mb-12 md:mb-20 pb-6 border-b border-[#262624]">
            <span className="text-xs font-mono tracking-widest uppercase text-[#8e8e8a] mb-2 block">
              03 / ARCHITECTURAL METHOD
            </span>
            <Heading level={2} className="text-2xl sm:text-4xl font-light text-[#f5f5f2]">
              How the Practice Works
            </Heading>
          </div>
        </MotionWrapper>

        <div className="space-y-6 md:space-y-8">
          {methodology.map((m, idx) => (
            <MotionWrapper key={m.step} animation="fadeUp" delay={0.1 * (idx + 1)}>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start p-6 sm:p-8 bg-[#141414]/50 border border-[#262624]">
                <div className="md:col-span-2 flex items-center gap-4">
                  <span className="text-lg sm:text-xl font-mono text-[#8e8e8a]">{m.step}</span>
                  <span className="h-px bg-[#262624] flex-1 md:hidden" />
                </div>

                <div className="md:col-span-4">
                  <Heading
                    level={3}
                    className="text-base sm:text-lg font-normal text-[#f5f5f2]"
                  >
                    {m.name}
                  </Heading>
                </div>

                <div className="md:col-span-6">
                  <p className="text-xs sm:text-sm text-[#8e8e8a] font-light leading-relaxed">
                    {m.focus}
                  </p>
                </div>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function CapabilitiesSection() {
  const { capabilities } = practiceData;
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-20 md:py-32 border-b border-[#262624]">
      <Container>
        <MotionWrapper animation="fadeUp" delay={0.1}>
          <div className="mb-12 md:mb-16 pb-6 border-b border-[#262624]">
            <span className="text-xs font-mono tracking-widest uppercase text-[#8e8e8a] mb-2 block">
              04 / CAPABILITIES & DISCIPLINE
            </span>
            <Heading level={2} className="text-2xl sm:text-4xl font-light text-[#f5f5f2]">
              Spatial Capabilities Matrix
            </Heading>
          </div>
        </MotionWrapper>

        {/* Tab selection for mobile & desktop */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-[#262624] pb-4">
          {capabilities.map((cap, idx) => (
            <button
              key={cap.category}
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-2 text-xs font-mono uppercase transition-colors min-h-[44px] flex items-center ${
                activeTab === idx
                  ? "bg-[#f5f5f2] text-[#0a0a0a] font-semibold"
                  : "bg-[#141414] text-[#8e8e8a] hover:text-[#f5f5f2] border border-[#262624]"
              }`}
            >
              {cap.category}
            </button>
          ))}
        </div>

        {/* Selected Capability Details */}
        <MotionWrapper animation="fadeUp" delay={0.2}>
          <div className="p-8 sm:p-12 bg-[#141414] border border-[#262624]">
            <Heading
              level={3}
              className="text-xl sm:text-2xl font-light text-[#f5f5f2] mb-6"
            >
              {capabilities[activeTab].category}
            </Heading>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {capabilities[activeTab].items.map((item, itemIdx) => (
                <li
                  key={itemIdx}
                  className="flex items-start gap-3 p-4 bg-[#0a0a0a] border border-[#262624]/80"
                >
                  <span className="text-xs font-mono text-[#8e8e8a] mt-0.5">
                    0{itemIdx + 1}
                  </span>
                  <span className="text-xs sm:text-sm text-[#f5f5f2] font-light">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </MotionWrapper>
      </Container>
    </section>
  );
}

export function PeoplePracticeSection() {
  const { people, atelier } = practiceData;

  return (
    <section className="py-20 md:py-32 border-b border-[#262624] bg-[#0a0a0a]">
      <Container>
        <MotionWrapper animation="fadeUp" delay={0.1}>
          <div className="mb-12 md:mb-16 pb-6 border-b border-[#262624]">
            <span className="text-xs font-mono tracking-widest uppercase text-[#8e8e8a] mb-2 block">
              05 / PRACTICE STRUCTURE & ATELIER
            </span>
            <Heading level={2} className="text-2xl sm:text-4xl font-light text-[#f5f5f2]">
              Port Harcourt Atelier & Leadership
            </Heading>
            <p className="text-xs sm:text-sm text-[#8e8e8a] font-mono mt-3">
              {people.overview}
            </p>
          </div>
        </MotionWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Leadership Roles */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono tracking-widest uppercase text-[#8e8e8a] block mb-4">
              PRACTICE DIRECTORS
            </span>
            {people.directors.map((dir, idx) => (
              <MotionWrapper key={idx} animation="fadeUp" delay={0.1 * (idx + 1)}>
                <div className="p-6 bg-[#141414] border border-[#262624] space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <Heading level={3} className="text-base sm:text-lg font-medium text-[#f5f5f2]">
                      {dir.role}
                    </Heading>
                    <span className="text-xs font-mono text-[#8e8e8a]">{dir.studio}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#8e8e8a] font-light pt-2 border-t border-[#262624]/60">
                    FOCUS: {dir.focus}
                  </p>
                </div>
              </MotionWrapper>
            ))}
          </div>

          {/* Studio Atelier Address */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-mono tracking-widest uppercase text-[#8e8e8a] block mb-4">
              PRIMARY STUDIO LOCATION
            </span>
            <MotionWrapper animation="fadeUp" delay={0.2}>
              <div className="p-6 bg-[#141414] border border-[#262624] space-y-3">
                <div className="flex items-center justify-between">
                    <Heading level={3} className="text-base sm:text-lg font-light text-[#f5f5f2]">
                    {atelier.name}
                    </Heading>
                  <span className="w-2 h-2 rounded-full bg-[#f5f5f2]" />
                </div>
                <p className="text-xs font-mono text-[#8e8e8a] leading-relaxed">{atelier.address}</p>
                <p className="text-xs text-[#8e8e8a] font-light pt-3 border-t border-[#262624]/60">
                  {atelier.description}
                </p>
                <div className="pt-2">
                  <a href={`mailto:${atelier.email}`} className="text-xs font-mono text-[#f5f5f2] hover:text-[#8e8e8a] transition-colors uppercase">
                    {atelier.email}
                  </a>
                </div>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function PracticeContinuation() {
  return (
    <section className="py-24 md:py-36 bg-[#0a0a0a]">
      <Container>
        <MotionWrapper animation="fadeUp" delay={0.1}>
          <div className="p-8 sm:p-16 border border-[#262624] bg-[#141414] text-center max-w-4xl mx-auto space-y-6">
            <span className="text-xs font-mono tracking-widest text-[#8e8e8a] uppercase">
              06 / CONTINUATION
            </span>

            <Heading
              level={2}
              className="text-2xl sm:text-4xl font-light text-[#f5f5f2] leading-tight"
            >
              Explore our spatial monographs & architectural studies
            </Heading>

            <p className="text-xs sm:text-sm text-[#8e8e8a] font-light max-w-xl mx-auto">
              Examine our conceptual monographs across civic, cultural, residential, and research typologies.
            </p>

            <div className="pt-4">
              <Link
                href="/works"
                className="inline-flex items-center justify-center min-h-[48px] px-8 bg-[#f5f5f2] text-[#0a0a0a] text-xs font-mono uppercase font-semibold tracking-wider hover:bg-[#8e8e8a] transition-colors"
              >
                VIEW MONOGRAPH INDEX &rarr;
              </Link>
            </div>
          </div>
        </MotionWrapper>
      </Container>
    </section>
  );
}
