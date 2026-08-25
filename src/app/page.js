import { Header } from "../components/Header";
import { Container } from "../components/Container";
import { DisplayText, Heading, BodyText, MetaText } from "../components/Typography";
import { MotionWrapper } from "../components/MotionWrapper";
import { experienceArchitecture } from "../config/experienceArchitecture";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-void)] text-[var(--color-paper)] flex flex-col justify-between overflow-x-hidden selection:bg-[var(--color-paper)] selection:text-[var(--color-void)]">
      <Header />

      <main className="flex-grow py-[var(--space-lg)] md:py-[var(--space-2xl)]">
        <Container size="2xl">
          {/* Section 1: Hero & Manifesto Statement */}
          <section className="py-[var(--space-md)] md:py-[var(--space-xl)] border-b border-[var(--color-border)]">
            <MotionWrapper delay={100}>
              <div className="flex items-center gap-3 mb-[var(--space-xs)]">
                <span className="w-2 h-2 rounded-full bg-[var(--color-paper)] inline-block"></span>
                <MetaText>Design DNA & Architecture Foundation</MetaText>
              </div>
            </MotionWrapper>

            <MotionWrapper delay={250}>
              <DisplayText className="max-w-5xl mt-[var(--space-xs)] mb-[var(--space-md)]">
                Crafting architectural space with cinematic pacing and material intent.
              </DisplayText>
            </MotionWrapper>

            <MotionWrapper delay={400}>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-[var(--space-md)] pt-[var(--space-sm)]">
                <div className="md:col-span-8">
                  <BodyText size="lg" className="max-w-2xl">
                    Arthurtect Associates operates at the intersection of architectural discipline, tectonic honesty, and digital experience design. Mobile-first by design, restrained by principle.
                  </BodyText>
                </div>
                <div className="md:col-span-4 flex flex-col gap-[var(--space-2xs)] justify-end text-xs font-mono text-[var(--color-muted)]">
                  <div>STUDIOS: London &mdash; Zurich &mdash; Tokyo</div>
                  <div>SYSTEM VERSION: 2.0.0-FOUNDATION</div>
                  <div>MOBILE VERIFICATION: PASS (320px+)</div>
                </div>
              </div>
            </MotionWrapper>
          </section>

          {/* Section 2: Experience Architecture Breakdown */}
          <section id="works" className="py-[var(--space-lg)] md:py-[var(--space-2xl)] border-b border-[var(--color-border)]">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-[var(--space-sm)] mb-[var(--space-lg)]">
              <div>
                <MetaText className="block mb-[var(--space-3xs)]">Experience Framework</MetaText>
                <Heading level={2}>Information Architecture</Heading>
              </div>
              <BodyText className="max-w-md">
                Structure conceived around spatial narrative rather than generic corporate sections.
              </BodyText>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--space-md)]">
              {experienceArchitecture.pages.map((page, index) => (
                <div
                  key={page.id}
                  className="p-[var(--space-md)] bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-border-light)] transition-colors flex flex-col justify-between min-h-[260px]"
                >
                  <div>
                    <div className="flex justify-between items-center mb-[var(--space-xs)]">
                      <MetaText className="text-[var(--color-muted-dark)] font-mono">0{index + 1}</MetaText>
                      <MetaText className="text-[var(--color-muted)]">{page.id.toUpperCase()}</MetaText>
                    </div>
                    <Heading level={3} className="mb-[var(--space-2xs)]">
                      {page.title}
                    </Heading>
                    <BodyText size="base" className="text-xs leading-relaxed text-[var(--color-muted)]">
                      {page.purpose}
                    </BodyText>
                  </div>

                  <div className="pt-[var(--space-xs)] mt-[var(--space-xs)] border-t border-[var(--color-border)] flex flex-wrap gap-2">
                    {page.sections.map((sec) => (
                      <span
                        key={sec}
                        className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 bg-[var(--color-surface-elevated)] border border-[var(--color-border)] text-[var(--color-paper-muted)]"
                      >
                        {sec}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: Design System Token Verification Matrix */}
          <section id="disciplines" className="py-[var(--space-lg)] md:py-[var(--space-2xl)] border-b border-[var(--color-border)]">
            <MetaText className="block mb-[var(--space-3xs)]">Design System Specifications</MetaText>
            <Heading level={2} className="mb-[var(--space-lg)]">
              Tectonic Design Tokens
            </Heading>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-[var(--space-lg)]">
              {/* Color Palette Display */}
              <div className="md:col-span-6 space-y-[var(--space-sm)]">
                <Heading level={3}>Monochromatic Palette</Heading>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <div className="p-3 bg-[var(--color-void)] border border-[var(--color-border)] text-xs font-mono">
                    <div className="text-[var(--color-paper)]">Void</div>
                    <div className="text-[var(--color-muted)]">#0a0a0a</div>
                  </div>
                  <div className="p-3 bg-[var(--color-surface)] border border-[var(--color-border)] text-xs font-mono">
                    <div className="text-[var(--color-paper)]">Surface</div>
                    <div className="text-[var(--color-muted)]">#141414</div>
                  </div>
                  <div className="p-3 bg-[var(--color-surface-elevated)] border border-[var(--color-border)] text-xs font-mono">
                    <div className="text-[var(--color-paper)]">Elevated</div>
                    <div className="text-[var(--color-muted)]">#1a1a1a</div>
                  </div>
                  <div className="p-3 bg-[var(--color-paper)] text-[var(--color-void)] border border-[var(--color-border)] text-xs font-mono">
                    <div>Paper</div>
                    <div className="text-neutral-600">#f5f5f2</div>
                  </div>
                  <div className="p-3 bg-[var(--color-muted)] text-[var(--color-void)] border border-[var(--color-border)] text-xs font-mono">
                    <div>Muted</div>
                    <div className="text-neutral-700">#8e8e8a</div>
                  </div>
                  <div className="p-3 bg-[var(--color-border)] text-[var(--color-paper)] border border-[var(--color-border-light)] text-xs font-mono">
                    <div>Border</div>
                    <div className="text-[var(--color-muted)]">#262624</div>
                  </div>
                </div>
              </div>

              {/* Typography Scale Demonstration */}
              <div className="md:col-span-6 space-y-[var(--space-xs)]">
                <Heading level={3}>Typography Hierarchy</Heading>
                <div className="p-[var(--space-md)] bg-[var(--color-surface)] border border-[var(--color-border)] space-y-[var(--space-xs)]">
                  <div>
                    <MetaText className="block mb-1">Display Clamp</MetaText>
                    <div className="font-light tracking-tight text-xl sm:text-2xl">
                      Arthurtect Monograph
                    </div>
                  </div>
                  <div>
                    <MetaText className="block mb-1">Heading 1 & 2</MetaText>
                    <div className="text-lg font-light text-[var(--color-paper-muted)]">
                      Spatial & Tectonic Principles
                    </div>
                  </div>
                  <div>
                    <MetaText className="block mb-1">Body Text & Metadata</MetaText>
                    <p className="text-xs text-[var(--color-muted)] leading-relaxed">
                      Fluid typography clamp strategies eliminate breakpoint pixel jumps while ensuring optimal readability on small viewports.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Contact & Studio Signals */}
          <section id="contact" className="py-[var(--space-lg)] md:py-[var(--space-2xl)]">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-[var(--space-md)] items-start">
              <div className="md:col-span-6">
                <MetaText className="block mb-[var(--space-3xs)]">Inquiries & Commissions</MetaText>
                <Heading level={2} className="mb-[var(--space-xs)]">
                  Initiate a Spatial Monograph
                </Heading>
                <BodyText className="max-w-md">
                  For prospective architectural commissions, research collaborations, or monograph inquiries.
                </BodyText>
              </div>

              <div className="md:col-span-6 flex flex-col gap-4">
                <a
                  href="mailto:inquiries@arthurtect.com"
                  className="p-4 bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-paper-muted)] transition-colors flex justify-between items-center min-h-[44px] group focus:outline-none focus:ring-1 focus:ring-[var(--color-paper)]"
                >
                  <span className="text-sm font-mono text-[var(--color-paper)] group-hover:text-[var(--color-paper-muted)]">
                    inquiries@arthurtect.com
                  </span>
                  <MetaText className="text-[var(--color-muted)]">&rarr;</MetaText>
                </a>
                <div className="p-4 bg-[var(--color-surface)] border border-[var(--color-border)] flex justify-between items-center text-xs text-[var(--color-muted)] font-mono">
                  <span>PRESS & MEDIA</span>
                  <span>press@arthurtect.com</span>
                </div>
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
