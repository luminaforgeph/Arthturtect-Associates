import React from "react";
import Header from "../../components/Header";
import {
  PracticeHero,
  PracticeStatement,
  PhilosophySection,
  MethodSection,
  CapabilitiesSection,
  PeoplePracticeSection,
  PracticeContinuation,
} from "../../components/PracticeExperience";

export const metadata = {
  title: "Practice & Ethos — Arthurtect Associates",
  description:
    "Explore Arthurtect Associates' architectural philosophy, volumetric restraint, material research lab, and strategic spatial capabilities.",
};

export default function PracticePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#f5f5f2] selection:bg-[#f5f5f2] selection:text-[#0a0a0a]">
      <Header />
      <article>
        <PracticeHero />
        <PracticeStatement />
        <PhilosophySection />
        <MethodSection />
        <div id="capabilities">
          <CapabilitiesSection />
        </div>
        <PeoplePracticeSection />
        <PracticeContinuation />
      </article>

      {/* Footer minimal signature */}
      <footer className="py-12 border-t border-[#262624] text-xs font-mono text-[#8e8e8a] text-center">
        <p>© {new Date().getFullYear()} ARTHURTECT ASSOCIATES. ALL RIGHTS RESERVED.</p>
      </footer>
    </main>
  );
}
