"use client";

import Link from "next/link";

const footerLinks = {
  Collections: [
    { label: "New Arrivals", href: "#" },
    { label: "Bestsellers", href: "#" },
    { label: "Oud & Musk", href: "#" },
    { label: "Florals", href: "#" },
    { label: "Limited Edition", href: "#" },
  ],
  Company: [
    { label: "Our Story", href: "#" },
    { label: "Craftsmanship", href: "#" },
    { label: "Sustainability", href: "#" },
    { label: "Press", href: "#" },
    { label: "Careers", href: "#" },
  ],
  Support: [
    { label: "Contact Us", href: "#" },
    { label: "Shipping & Returns", href: "#" },
    { label: "FAQ", href: "#" },
    { label: "Track Order", href: "#" },
    { label: "Gift Cards", href: "#" },
  ],
};

const socialIcons = [
  {
    label: "Instagram",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Pinterest",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.09-.78-.17-1.98.04-2.83.18-.77 1.22-5.17 1.22-5.17s-.31-.62-.31-1.54c0-1.45.84-2.53 1.88-2.53.89 0 1.32.67 1.32 1.47 0 .9-.57 2.24-.87 3.48-.25 1.04.52 1.89 1.54 1.89 1.85 0 3.09-2.37 3.09-5.17 0-2.14-1.44-3.64-3.5-3.64-2.38 0-3.78 1.79-3.78 3.63 0 .72.28 1.49.62 1.91.07.08.08.15.06.23-.06.26-.2.83-.23.94-.04.15-.13.18-.3.11-1.12-.52-1.82-2.17-1.82-3.49 0-2.84 2.06-5.44 5.94-5.44 3.12 0 5.55 2.22 5.55 5.19 0 3.1-1.95 5.59-4.66 5.59-.91 0-1.77-.47-2.06-1.03l-.56 2.09c-.2.78-.75 1.75-1.12 2.34.85.26 1.75.4 2.67.4 5.52 0 10-4.48 10-10S17.52 2 12 2z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
];

const prevent = (e: React.MouseEvent) => e.preventDefault();

export default function Footer() {
  return (
    <footer className="relative bg-[#07060a] text-[#c4aa8a]">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#b8944e]/50 to-transparent" />

      {/* Newsletter strip */}
      <div className="border-b border-[#b8944e]/10 bg-[#0d0b0f]">
        <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-12 lg:py-10">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="mb-1 text-[10px] tracking-[0.3em] uppercase text-[#b8944e]">
                Join the Inner Circle
              </p>
              <h3 className="font-serif text-xl text-[#f5ede0] sm:text-2xl">
                Get early access to new arrivals
              </h3>
            </div>
            <form className="flex w-full max-w-md flex-col gap-3 sm:flex-row sm:gap-0"
              onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your email address"
                className="flex-1 border border-[#b8944e]/20 bg-[#0a0804] px-5 py-3 text-sm text-[#f5ede0] placeholder-[#c4aa8a]/30 outline-none transition focus:border-[#b8944e]/50 sm:border-r-0" />
              <button type="submit"
                className="border border-[#b8944e] bg-[#b8944e] px-7 py-3 text-xs font-medium tracking-[0.2em] uppercase text-[#0a0804] transition-all hover:bg-transparent hover:text-[#b8944e]">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main body */}
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] lg:gap-12">

          {/* Brand column — full width on mobile */}
          <div className="col-span-2 flex flex-col gap-5 lg:col-span-1">
            <div>
              <div className="mb-1 flex items-center gap-2">
                <div className="h-px w-5 bg-[#b8944e]" />
                <span className="text-[9px] tracking-[0.4em] uppercase text-[#b8944e]">Since 2020</span>
              </div>
              <h2 className="font-serif text-2xl tracking-wide text-[#f5ede0] sm:text-3xl">
                Branded<span className="text-[#b8944e]">Kashmir</span>
              </h2>
            </div>

            <p className="max-w-xs text-sm leading-7 text-[#c4aa8a]/55">
              We curate the finest fragrances inspired by the enchanting landscapes
              of Kashmir — where ancient traditions meet modern luxury.
            </p>

            <div className="flex gap-2.5">
              {socialIcons.map((s) => (
                <button key={s.label} aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center border border-[#b8944e]/20 text-[#c4aa8a]/45 transition-all hover:border-[#b8944e]/60 hover:text-[#b8944e]">
                  {s.icon}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {["100% Natural", "Cruelty Free", "Vegan"].map((cert) => (
                <div key={cert} className="flex items-center gap-1.5">
                  <div className="h-1 w-1 rounded-full bg-[#b8944e]" />
                  <span className="text-[9px] tracking-[0.15em] uppercase text-[#c4aa8a]/45">{cert}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="mb-4 text-[10px] tracking-[0.3em] uppercase text-[#b8944e]">
                {heading}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} onClick={prevent}
                      className="group flex items-center gap-2 text-sm text-[#c4aa8a]/45 transition-colors hover:text-[#c4aa8a]">
                      <span className="h-px w-0 bg-[#b8944e] transition-all duration-300 group-hover:w-3" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#b8944e]/10">
        <div className="mx-auto max-w-7xl px-5 py-5 sm:px-8 lg:px-12">
          <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
            <p className="text-[11px] text-[#c4aa8a]/30">
              © {new Date().getFullYear()} BrandedKashmir. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:justify-end">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
                <Link key={item} href="#" onClick={prevent}
                  className="text-[11px] text-[#c4aa8a]/30 transition-colors hover:text-[#c4aa8a]/60">
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
