"use client";

import { useState } from "react";

export default function ComingSoonBanner() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div className="relative z-[60] flex items-center justify-center bg-[#b8944e] px-8 py-2.5">
      {/* Left ornament */}
      <div className="absolute left-6 hidden items-center gap-2 sm:flex">
        <div className="h-px w-6 bg-[#0a0804]/30" />
        <svg className="text-[#0a0804]/40" width="8" height="8" viewBox="0 0 14 14" fill="currentColor">
          <path d="M7 0 L8.5 5.5 L14 7 L8.5 8.5 L7 14 L5.5 8.5 L0 7 L5.5 5.5 Z" />
        </svg>
      </div>

      {/* Message */}
      <p className="text-center text-[11px] font-medium tracking-[0.35em] uppercase text-[#0a0804]">
        <span className="mr-3 inline-block border border-[#0a0804]/25 px-2 py-0.5 text-[9px] tracking-[0.3em]">
          Coming Soon
        </span>
        Something extraordinary is on its way — Stay tuned
      </p>

      {/* Right ornament */}
      <div className="absolute right-6 hidden items-center gap-2 sm:flex">
        <svg className="text-[#0a0804]/40" width="8" height="8" viewBox="0 0 14 14" fill="currentColor">
          <path d="M7 0 L8.5 5.5 L14 7 L8.5 8.5 L7 14 L5.5 8.5 L0 7 L5.5 5.5 Z" />
        </svg>
        <div className="h-px w-6 bg-[#0a0804]/30" />
      </div>

      {/* Dismiss */}
      <button
        onClick={() => setVisible(false)}
        aria-label="Dismiss banner"
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[#0a0804]/50 transition-colors hover:text-[#0a0804] sm:right-4"
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </div>
  );
}
