import { Header } from "../components/Header";
import { HeroSequence } from "../components/HeroSequence";
import { WorksGallery } from "../components/WorksGallery";
import { Container } from "../components/Container";
import { Heading, BodyText, MetaText } from "../components/Typography";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-void)] text-[var(--color-paper)] flex flex-col justify-between overflow-x-hidden selection:bg-[var(--color-paper)] selection:text-[var(--color-void)]">
      <Header />

      <main className="flex-grow">
        {/* Entry Sequence */}
        <HeroSequence />

        {/* Full Architectural Works Monograph Experience */}
        <WorksGallery />

        {/* Practice Signal & Studio Inquiries */}
        <section id="contact" className="py-[var(--space-xl)] md:py-[var(--space-2xl)]">
          <Container size="2xl">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-[var(--space-md)] items-start">
              <div className="md:col-span-6">
                <MetaText className="block mb-[var(--space-3xs)]">COMMISSION & INQUIRIES</MetaText>
                <Heading level={2} className="mb-[var(--space-xs)]">
                  Initiate a Spatial Monograph
                </Heading>
                <BodyText className="max-w-md text-xs sm:text-sm">
                  Arthurtect Associates accepts a limited number of civic, cultural, and private commissions annually to maintain tectonic quality and curatorial focus.
                </BodyText>
              </div>

              <div className="md:col-span-6 flex flex-col gap-4">
                <a
                  href="mailto:commissions@arthurtect.com"
                  className="p-5 bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-paper-muted)] transition-colors flex justify-between items-center min-h-[44px] group focus:outline-none focus:ring-1 focus:ring-[var(--color-paper)]"
                >
                  <span className="text-sm font-mono text-[var(--color-paper)] group-hover:text-[var(--color-paper-muted)]">
                    commissions@arthurtect.com
                  </span>
                  <MetaText className="text-[var(--color-muted)]">&rarr;</MetaText>
                </a>
                <div className="p-4 bg-[var(--color-surface)] border border-[var(--color-border)] flex justify-between items-center text-xs text-[var(--color-muted)] font-mono">
                  <span>PRESS & ARCHIVE</span>
                  <span>press@arthurtect.com</span>
                </div>
              </div>
            </div>
          </Container>
        </section>
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
