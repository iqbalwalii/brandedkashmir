"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Collections", href: "/products" },
  { label: "Oud & Musk", href: "/products" },
  { label: "Florals", href: "/products" },
  { label: "Our Story", href: "#" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a0804]/95 backdrop-blur-md border-b border-[#b8944e]/15 py-3"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        {/* Left nav — desktop only */}
        <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
          {navLinks.slice(0, 2).map((link) => (
            <Link key={link.label} href={link.href}
              className="group relative text-[11px] tracking-[0.2em] uppercase text-[#c4aa8a]/60 transition-colors hover:text-[#b8944e]">
              {link.label}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#b8944e] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Brand name — centered on all screens */}
        <Link href="/"
          className="absolute left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center leading-none">
            <span className="font-serif text-lg tracking-[0.1em] text-[#f5ede0] sm:text-xl lg:text-2xl">
              Branded<span className="text-[#b8944e]">Kashmir</span>
            </span>
            <span className="mt-0.5 text-[7px] tracking-[0.4em] uppercase text-[#b8944e]/55 sm:text-[8px]">
              Luxury Perfumes
            </span>
          </div>
        </Link>

        {/* Right side */}
        <div className="ml-auto flex items-center gap-4 sm:gap-5">
          {/* Right nav — desktop only */}
          <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
            {navLinks.slice(2).map((link) => (
              <Link key={link.label} href={link.href}
                className="group relative text-[11px] tracking-[0.2em] uppercase text-[#c4aa8a]/60 transition-colors hover:text-[#b8944e]">
                {link.label}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#b8944e] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Search */}
          <button aria-label="Search"
            className="text-[#c4aa8a]/50 transition-colors hover:text-[#b8944e]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
            </svg>
          </button>

          {/* Cart */}
          <button aria-label="Cart"
            className="relative text-[#c4aa8a]/50 transition-colors hover:text-[#b8944e]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            <span className="absolute -top-1.5 -right-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#b8944e] text-[8px] font-medium text-[#0a0804]">
              0
            </span>
          </button>

          {/* Hamburger — mobile & tablet */}
          <button aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="text-[#c4aa8a]/60 transition-colors hover:text-[#b8944e] lg:hidden"
            onClick={() => setMenuOpen((o) => !o)}>
            {menuOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`overflow-hidden transition-all duration-300 lg:hidden ${menuOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"}`}>
        <nav className="flex flex-col border-t border-[#b8944e]/10 bg-[#0a0804] px-5 py-2 sm:px-8">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href}
              className="border-b border-[#b8944e]/10 py-3.5 text-[11px] tracking-[0.3em] uppercase text-[#c4aa8a]/55 transition-colors hover:text-[#b8944e] last:border-0">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
