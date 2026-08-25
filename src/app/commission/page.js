import React from "react";
import Header from "../../components/Header";
import {
  CommissionHero,
  CommissionForm,
  TrustExpectation,
  StudioContactInfo,
  CinematicClosing,
} from "../../components/CommissionExperience";

export const metadata = {
  title: "Commission & Inquiry — Arthurtect Associates",
  description:
    "Initiate a project dialogue with Arthurtect Associates. Our design principals review inquiries across civic, residential, interior, and adaptive reuse typologies.",
};

export default function CommissionPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#f5f5f2] selection:bg-[#f5f5f2] selection:text-[#0a0a0a]">
      <Header />
      <article>
        <CommissionHero />
        <CommissionForm />
        <TrustExpectation />
        <StudioContactInfo />
        <CinematicClosing />
      </article>

      {/* Minimal Footer */}
      <footer className="py-12 border-t border-[#262624] text-xs font-mono text-[#8e8e8a] text-center">
        <p>© {new Date().getFullYear()} ARTHURTECT ASSOCIATES. ALL RIGHTS RESERVED.</p>
      </footer>
    </main>
  );
}
