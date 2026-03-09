"use client";

import { useEffect, useState } from "react";

const LAUNCH_DATE = new Date("2026-03-19T00:00:00");

function useCountdown(target: Date) {
  const calc = () => {
    const diff = Math.max(0, target.getTime() - Date.now());
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };
  const [time, setTime] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
  });
  return time;
}

export default function ComingSoon() {
  const { days, hours, minutes, seconds } = useCountdown(LAUNCH_DATE);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#07060a] px-4 py-24 sm:px-6 lg:px-12">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_60%,rgba(184,148,78,0.08),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_30%_30%_at_50%_20%,rgba(184,148,78,0.05),transparent)]" />

      {/* Top rule */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#b8944e]/40 to-transparent" />

      {/* Corner ornaments */}
      <div className="absolute top-8 left-6 h-10 w-10 border-l border-t border-[#b8944e]/20 sm:h-14 sm:w-14" />
      <div className="absolute top-8 right-6 h-10 w-10 border-r border-t border-[#b8944e]/20 sm:h-14 sm:w-14" />
      <div className="absolute bottom-8 left-6 h-10 w-10 border-l border-b border-[#b8944e]/20 sm:h-14 sm:w-14" />
      <div className="absolute bottom-8 right-6 h-10 w-10 border-r border-b border-[#b8944e]/20 sm:h-14 sm:w-14" />

      <div className="relative z-10 flex w-full max-w-3xl flex-col items-center text-center">
        {/* Label */}
        <div className="mb-6 flex items-center gap-3">
          <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#b8944e]/60 sm:w-12" />
          <span className="text-[9px] tracking-[0.45em] uppercase text-[#b8944e]">
            BrandedKashmir
          </span>
          <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#b8944e]/60 sm:w-12" />
        </div>

        {/* Headline */}
        <h2 className="font-serif mb-3 text-4xl leading-tight tracking-tight text-[#f5ede0] sm:text-5xl lg:text-6xl">
          Something
          <span className="block italic text-[#b8944e]">Extraordinary</span>
          Is Coming
        </h2>

        {/* Ornament */}
        <div className="my-6 flex items-center gap-3">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#b8944e]/35" />
          <svg
            className="text-[#b8944e]/50"
            width="10"
            height="10"
            viewBox="0 0 14 14"
            fill="currentColor"
          >
            <path d="M7 0 L8.5 5.5 L14 7 L8.5 8.5 L7 14 L5.5 8.5 L0 7 L5.5 5.5 Z" />
          </svg>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#b8944e]/35" />
        </div>

        <p className="mb-12 max-w-md text-sm leading-7 text-[#c4aa8a]/55 sm:text-base">
          We&apos;re hand-bottling the finest Kashmir fragrances for you. Be the
          first to know when we open our doors.
        </p>

        {/* Countdown */}
        <div className="mb-12 grid w-full max-w-sm grid-cols-4 gap-2 sm:max-w-md sm:gap-4">
          {[
            { value: days, label: "Days" },
            { value: hours, label: "Hours" },
            { value: minutes, label: "Mins" },
            { value: seconds, label: "Secs" },
          ].map(({ value, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-1 border border-[#b8944e]/15 bg-[#0d0b0f] py-4 px-2"
            >
              <span className="font-serif text-3xl tabular-nums text-[#b8944e] sm:text-4xl">
                {String(value).padStart(2, "0")}
              </span>
              <span className="text-[9px] tracking-[0.3em] uppercase text-[#c4aa8a]/40">
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Email form */}
        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="flex w-full max-w-md flex-col gap-3 sm:flex-row sm:gap-0"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 border border-[#b8944e]/20 bg-[#0a0804] px-5 py-3.5 text-sm text-[#f5ede0] placeholder-[#c4aa8a]/30 outline-none transition focus:border-[#b8944e]/50 sm:border-r-0"
            />
            <button
              type="submit"
              className="border border-[#b8944e] bg-[#b8944e] px-7 py-3.5 text-xs font-medium tracking-[0.25em] uppercase text-[#0a0804] transition-all hover:bg-transparent hover:text-[#b8944e]"
            >
              Notify Me
            </button>
          </form>
        ) : (
          <div className="flex items-center gap-3 border border-[#b8944e]/20 bg-[#0d0b0f] px-8 py-4">
            <svg
              className="text-[#b8944e]"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span className="text-xs tracking-[0.2em] uppercase text-[#c4aa8a]/70">
              You&apos;re on the list — we&apos;ll be in touch
            </span>
          </div>
        )}

        {/* Bottom note */}
        <p className="mt-6 text-[11px] text-[#c4aa8a]/30">
          No spam. Unsubscribe anytime.
        </p>
      </div>

      {/* Bottom rule */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#b8944e]/20 to-transparent" />
    </section>
  );
}
