"use client";

import React from "react";
import Link from "next/link";
import { Container } from "../components/Container";

export function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#262624] py-4 transition-colors">
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo Brand Title */}
          <Link
            href="/"
            className="group flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 focus:outline-none focus:ring-1 focus:ring-[#f5f5f2] p-1 rounded-sm"
          >
            <span className="text-base sm:text-lg font-light tracking-[0.25em] uppercase text-[#f5f5f2] group-hover:text-[#8e8e8a] transition-colors">
              Arthurtect
            </span>
            <span className="text-xs font-mono tracking-[0.15em] text-[#8e8e8a] uppercase">
              Associates &bull; Port Harcourt
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/works"
              className="text-xs uppercase font-mono tracking-[0.2em] text-[#8e8e8a] hover:text-[#f5f5f2] transition-colors py-2 focus:outline-none focus:ring-1 focus:ring-[#f5f5f2]"
            >
              Works
            </Link>
            <Link
              href="/practice"
              className="text-xs uppercase font-mono tracking-[0.2em] text-[#8e8e8a] hover:text-[#f5f5f2] transition-colors py-2 focus:outline-none focus:ring-1 focus:ring-[#f5f5f2]"
            >
              Practice
            </Link>
            <Link
              href="/practice#capabilities"
              className="text-xs uppercase font-mono tracking-[0.2em] text-[#8e8e8a] hover:text-[#f5f5f2] transition-colors py-2 focus:outline-none focus:ring-1 focus:ring-[#f5f5f2]"
            >
              Capabilities
            </Link>
            <Link
              href="/commission"
              className="text-xs uppercase font-mono tracking-[0.2em] text-[#8e8e8a] hover:text-[#f5f5f2] transition-colors py-2 focus:outline-none focus:ring-1 focus:ring-[#f5f5f2]"
            >
              Commission
            </Link>
          </nav>

          {/* Mobile Menu Trigger Button (Min 44px Touch Target) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="Toggle Navigation Menu"
            className="md:hidden flex items-center justify-center min-w-[44px] min-h-[44px] p-2 text-[#f5f5f2] focus:outline-none focus:ring-1 focus:ring-[#f5f5f2]"
          >
            <span className="text-xs font-mono uppercase tracking-widest">
              {menuOpen ? "Close" : "Menu"}
            </span>
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {menuOpen && (
          <nav className="md:hidden pt-6 pb-4 border-t border-[#262624] mt-4 flex flex-col gap-4">
            <Link
              href="/works"
              onClick={() => setMenuOpen(false)}
              className="py-2 text-sm font-mono uppercase tracking-[0.2em] text-[#f5f5f2] hover:text-[#8e8e8a] focus:outline-none min-h-[44px] flex items-center"
            >
              01 — Works
            </Link>
            <Link
              href="/practice"
              onClick={() => setMenuOpen(false)}
              className="py-2 text-sm font-mono uppercase tracking-[0.2em] text-[#f5f5f2] hover:text-[#8e8e8a] focus:outline-none min-h-[44px] flex items-center"
            >
              02 — Practice
            </Link>
            <Link
              href="/practice#capabilities"
              onClick={() => setMenuOpen(false)}
              className="py-2 text-sm font-mono uppercase tracking-[0.2em] text-[#f5f5f2] hover:text-[#8e8e8a] focus:outline-none min-h-[44px] flex items-center"
            >
              03 — Capabilities
            </Link>
            <Link
              href="/commission"
              onClick={() => setMenuOpen(false)}
              className="py-2 text-sm font-mono uppercase tracking-[0.2em] text-[#f5f5f2] hover:text-[#8e8e8a] focus:outline-none min-h-[44px] flex items-center"
            >
              04 — Commission
            </Link>
          </nav>
        )}
      </Container>
    </header>
  );
}

export default Header;
