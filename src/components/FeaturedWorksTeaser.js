import { Container } from "./Container";
import { Heading, BodyText, MetaText } from "./Typography";
import { MotionWrapper } from "./MotionWrapper";

const featuredWorks = [
  {
    id: "work-01",
    num: "01",
    title: "Vervain Alpine Pavilion",
    typology: "Civic & Cultural",
    location: "Vals, Switzerland",
    year: "2025",
    material: "Granite, Larch, Weathering Steel",
    description: "A subterranean cultural hall carved directly into the Valais granite cliffside, utilizing natural thermal mass and acoustic reverberation.",
    aspectRatio: "aspect-[16/10]",
    gradient: "from-[#171715] via-[#101010] to-[#0a0a09]",
  },
  {
    id: "work-02",
    num: "02",
    title: "Kyoto Timber Research Lab",
    typology: "Educational & Research",
    location: "Kyoto, Japan",
    year: "2024",
    material: "Cedar Joinery, Recycled Glass, Zinc",
    description: "A glue-laminated cedar structural frame assembled entirely without metal fasteners, showcasing traditional interlocking joint joinery.",
    aspectRatio: "aspect-[4/3] md:aspect-[16/10]",
    gradient: "from-[#1a1917] via-[#111110] to-[#080808]",
  },
  {
    id: "work-03",
    num: "03",
    title: "Thames Reach Monograph Studio",
    typology: "Private Residential",
    location: "London, UK",
    year: "2026",
    material: "Cast Basalt, Fluted Bronze, Oak",
    description: "A riparian live-work studio for an art archivist featuring floating cantilevered concrete decks and light-diffusing bronze louver screens.",
    aspectRatio: "aspect-[16/10]",
    gradient: "from-[#141416] via-[#0d0d0f] to-[#08080a]",
  },
];

export function FeaturedWorksTeaser() {
  return (
    <section id="works" className="py-[var(--space-xl)] md:py-[var(--space-2xl)] border-b border-[var(--color-border)] relative">
      <Container size="2xl">
        {/* Transition Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-[var(--space-sm)] mb-[var(--space-xl)] pb-[var(--space-sm)] border-b border-[var(--color-border)]">
          <div>
            <MotionWrapper delay={100}>
              <MetaText className="block mb-[var(--space-3xs)]">SPATIAL TRANSITION &mdash; MONOGRAPH EXHIBITION</MetaText>
            </MotionWrapper>
            <MotionWrapper delay={200}>
              <Heading level={2}>Curated Tectonic Works</Heading>
            </MotionWrapper>
          </div>
          <MotionWrapper delay={300}>
            <BodyText className="max-w-md text-xs sm:text-sm">
              Selected architectural commissions demonstrating material discipline, site specificities, and structural clarity.
            </BodyText>
          </MotionWrapper>
        </div>

        {/* Project Monograph Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-[var(--space-lg)] md:gap-[var(--space-xl)]">
          {featuredWorks.map((work, idx) => (
            <div
              key={work.id}
              className={`md:col-span-12 ${
                idx % 2 === 1 ? "lg:col-span-10 lg:col-start-2" : ""
              }`}
            >
              <MotionWrapper delay={200 + idx * 150}>
                <article className="group cursor-pointer border border-[var(--color-border)] hover:border-[var(--color-border-light)] transition-colors p-4 sm:p-6 md:p-8 bg-[var(--color-surface)] flex flex-col md:flex-row gap-[var(--space-md)] items-stretch">
                  {/* Visual Presentation Frame */}
                  <div className={`w-full md:w-3/5 ${work.aspectRatio} relative overflow-hidden bg-[var(--color-void)] border border-[var(--color-border)]`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${work.gradient} opacity-90 transition-transform duration-700 ease-out group-hover:scale-105`} />
                    <div className="absolute inset-0 p-4 flex flex-col justify-between pointer-events-none">
                      <MetaText className="text-[var(--color-paper-muted)] font-mono text-[10px]">
                        FIG 0{idx + 1} &bull; {work.typology.toUpperCase()}
                      </MetaText>
                      <div className="flex justify-between items-end">
                        <span className="text-[10px] font-mono text-[var(--color-muted)]">{work.location}</span>
                        <span className="text-[10px] font-mono text-[var(--color-paper-muted)]">{work.year}</span>
                      </div>
                    </div>
                  </div>

                  {/* Project Metadata & Editorial Copy */}
                  <div className="w-full md:w-2/5 flex flex-col justify-between pt-2 md:pt-0">
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <MetaText className="text-[var(--color-muted-dark)] font-mono text-sm">{work.num}</MetaText>
                        <MetaText className="text-[var(--color-muted)] text-[10px]">{work.typology}</MetaText>
                      </div>
                      <Heading level={3} className="group-hover:text-[var(--color-paper-muted)] transition-colors mb-3">
                        {work.title}
                      </Heading>
                      <BodyText size="base" className="text-xs leading-relaxed text-[var(--color-muted)] mb-4">
                        {work.description}
                      </BodyText>
                    </div>

                    <div className="pt-4 border-t border-[var(--color-border)] flex flex-col gap-2">
                      <div className="text-[10px] font-mono text-[var(--color-muted)]">
                        <span className="text-[var(--color-paper-muted)]">MATERIAL: </span>
                        {work.material}
                      </div>
                      <div className="flex items-center gap-2 pt-2 text-xs font-mono text-[var(--color-paper)] group-hover:translate-x-1 transition-transform">
                        <span>VIEW MONOGRAPH SPECIFICATION</span>
                        <span>&rarr;</span>
                      </div>
                    </div>
                  </div>
                </article>
              </MotionWrapper>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
