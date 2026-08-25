import React from "react";
import Header from "../../components/Header";
import { WorksGallery } from "../../components/WorksGallery";

export const metadata = {
  title: "Works & Monograph Archive — Arthurtect Associates",
  description:
    "Explore Arthurtect Associates' architectural monograph portfolio organized by spatial typology, geographical location, and material research.",
};

export default function WorksPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#f5f5f2] selection:bg-[#f5f5f2] selection:text-[#0a0a0a]">
      <Header />
      <article className="pt-20">
        <WorksGallery />
      </article>

      {/* Minimal Footer */}
      <footer className="py-12 border-t border-[#262624] text-xs font-mono text-[#8e8e8a] text-center">
        <p>© {new Date().getFullYear()} ARTHURTECT ASSOCIATES. ALL RIGHTS RESERVED.</p>
      </footer>
    </main>
  );
}
