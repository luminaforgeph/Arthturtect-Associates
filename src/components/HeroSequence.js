import { Container } from "./Container";
import { DisplayText, BodyText, MetaText } from "./Typography";
import { MotionWrapper } from "./MotionWrapper";

export function HeroSequence() {
  return (
    <section className="relative pt-[var(--space-md)] pb-[var(--space-xl)] md:pt-[var(--space-xl)] md:pb-[var(--space-2xl)] border-b border-[var(--color-border)] overflow-hidden">
      <Container size="2xl">
        {/* Entry Signal */}
        <MotionWrapper delay={100}>
          <div className="flex items-center gap-3 mb-[var(--space-xs)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-paper)] inline-block animate-pulse"></span>
            <MetaText>ENTRY &mdash; ARCHITECTURAL PRACTICE MONOGRAPH</MetaText>
          </div>
        </MotionWrapper>

        {/* Primary Typographic Display */}
        <MotionWrapper delay={200}>
          <DisplayText className="max-w-5xl my-[var(--space-xs)]">
            Crafting architectural space with cinematic pacing and material intent.
          </DisplayText>
        </MotionWrapper>

        {/* Architectural Image Canvas Focal Point */}
        <MotionWrapper delay={350}>
          <div className="relative w-full my-[var(--space-md)] aspect-[16/10] sm:aspect-[21/9] bg-[var(--color-surface)] border border-[var(--color-border)] overflow-hidden group">
            {/* Tectonic Architectural Render Simulation / Canvas Frame */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#080808] via-[#121212] to-[#1a1a18] opacity-90 transition-transform duration-1000 ease-out group-hover:scale-105" />

            {/* Subdued Geometric Wireframe Elements */}
            <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#8e8e8a_1px,transparent_1px)] [background-size:24px_24px]" />

            {/* Overlay Architectural Metadata */}
            <div className="absolute inset-0 p-4 sm:p-8 flex flex-col justify-between pointer-events-none">
              <div className="flex justify-between items-start">
                <MetaText className="bg-[var(--color-void)]/80 backdrop-blur-xs px-2 py-1 border border-[var(--color-border)]">
                  FIG 01.0 &mdash; TECTONIC ASSEMBLY
                </MetaText>
                <MetaText className="text-[var(--color-muted)]">
                  51.5074° N, 0.1278° W
                </MetaText>
              </div>

              <div className="border-t border-[var(--color-border)]/50 pt-3 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2">
                <div>
                  <MetaText className="block text-[var(--color-paper)]">
                    ALPS CULMINATION MONOLITH
                  </MetaText>
                  <span className="text-[10px] font-mono text-[var(--color-muted)]">
                    MATERIAL: CAST BASALT & CONCRETE
                  </span>
                </div>
                <MetaText className="text-[var(--color-paper-muted)] font-mono">
                  MONOGRAPH 2026-A
                </MetaText>
              </div>
            </div>
          </div>
        </MotionWrapper>

        {/* Orientation Statement Grid */}
        <MotionWrapper delay={500}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-[var(--space-md)] pt-[var(--space-xs)] items-baseline">
            <div className="md:col-span-8">
              <BodyText size="lg" className="max-w-2xl leading-relaxed">
                Arthurtect Associates operates at the intersection of architectural discipline, structural honesty, and spatial storytelling. We build environments that respond to geographic context and human presence.
              </BodyText>
            </div>
            <div className="md:col-span-4 flex flex-col gap-2 font-mono text-xs text-[var(--color-muted)] border-t md:border-t-0 md:border-l border-[var(--color-border)] pt-4 md:pt-0 md:pl-6">
              <div className="flex justify-between">
                <span>PRACTICE EST.</span>
                <span className="text-[var(--color-paper)]">2018</span>
              </div>
              <div className="flex justify-between">
                <span>LOCATIONS</span>
                <span className="text-[var(--color-paper)]">LDN / ZRH / TYO</span>
              </div>
              <div className="flex justify-between">
                <span>TYPOLOGIES</span>
                <span className="text-[var(--color-paper)]">CIVIC & RESIDENTIAL</span>
              </div>
            </div>
          </div>
        </MotionWrapper>
      </Container>
    </section>
  );
}
