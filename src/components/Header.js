"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "./Container";
import { MetaText } from "./Typography";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[var(--color-void)]/90 backdrop-blur-md border-b border-[var(--color-border)] py-4 transition-colors">
      <Container size="2xl">
        <div className="flex items-center justify-between">
          {/* Logo Brand Title */}
          <Link
            href="/"
            className="group flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 focus:outline-none focus:ring-1 focus:ring-[var(--color-paper)] p-1 rounded-sm"
          >
            <span className="text-base sm:text-lg font-light tracking-[0.25em] uppercase text-[var(--color-paper)] group-hover:text-[var(--color-paper-muted)] transition-colors">
              Arthurtect
            </span>
            <span className="text-xs font-mono tracking-[0.15em] text-[var(--color-muted)] uppercase">
              Associates
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#works"
              className="text-xs uppercase tracking-[0.2em] text-[var(--color-paper-muted)] hover:text-[var(--color-paper)] transition-colors py-2 focus:outline-none focus:ring-1 focus:ring-[var(--color-paper)]"
            >
              Works
            </a>
            <a
              href="#practice"
              className="text-xs uppercase tracking-[0.2em] text-[var(--color-paper-muted)] hover:text-[var(--color-paper)] transition-colors py-2 focus:outline-none focus:ring-1 focus:ring-[var(--color-paper)]"
            >
              Practice
            </a>
            <a
              href="#disciplines"
              className="text-xs uppercase tracking-[0.2em] text-[var(--color-paper-muted)] hover:text-[var(--color-paper)] transition-colors py-2 focus:outline-none focus:ring-1 focus:ring-[var(--color-paper)]"
            >
              Capabilities
            </a>
            <a
              href="#contact"
              className="text-xs uppercase tracking-[0.2em] text-[var(--color-paper-muted)] hover:text-[var(--color-paper)] transition-colors py-2 focus:outline-none focus:ring-1 focus:ring-[var(--color-paper)]"
            >
              Contact
            </a>
          </nav>

          {/* Mobile Menu Trigger Button (Min 44px Touch Target) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="Toggle Navigation Menu"
            className="md:hidden flex items-center justify-center min-w-[44px] min-h-[44px] p-2 text-[var(--color-paper)] focus:outline-none focus:ring-1 focus:ring-[var(--color-paper)]"
          >
            <MetaText className="text-xs">
              {menuOpen ? "Close" : "Menu"}
            </MetaText>
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {menuOpen && (
          <nav className="md:hidden pt-6 pb-4 border-t border-[var(--color-border)] mt-4 flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-300">
            <a
              href="#works"
              onClick={() => setMenuOpen(false)}
              className="py-2 text-sm uppercase tracking-[0.2em] text-[var(--color-paper)] hover:text-[var(--color-paper-muted)] focus:outline-none"
            >
              01 — Works
            </a>
            <a
              href="#practice"
              onClick={() => setMenuOpen(false)}
              className="py-2 text-sm uppercase tracking-[0.2em] text-[var(--color-paper)] hover:text-[var(--color-paper-muted)] focus:outline-none"
            >
              02 — Practice
            </a>
            <a
              href="#disciplines"
              onClick={() => setMenuOpen(false)}
              className="py-2 text-sm uppercase tracking-[0.2em] text-[var(--color-paper)] hover:text-[var(--color-paper-muted)] focus:outline-none"
            >
              03 — Capabilities
            </a>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="py-2 text-sm uppercase tracking-[0.2em] text-[var(--color-paper)] hover:text-[var(--color-paper-muted)] focus:outline-none"
            >
              04 — Contact
            </a>
          </nav>
        )}
      </Container>
    </header>
  );
}
