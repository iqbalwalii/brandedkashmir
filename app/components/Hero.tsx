"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setSize();

    const particles: { x: number; y: number; radius: number; speedY: number; opacity: number; fadeSpeed: number }[] = [];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.3,
        speedY: -(Math.random() * 0.4 + 0.1),
        opacity: Math.random() * 0.6 + 0.1,
        fadeSpeed: Math.random() * 0.003 + 0.001,
      });
    }

    let animId: number;
    const animate = () => {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(184,148,78,${p.opacity})`;
        ctx.fill();
        p.y += p.speedY;
        p.opacity -= p.fadeSpeed;
        if (p.y < -10 || p.opacity <= 0) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
          p.opacity = Math.random() * 0.6 + 0.1;
        }
      }
      animId = requestAnimationFrame(animate);
    };
    animate();

    window.addEventListener("resize", setSize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", setSize);
    };
  }, []);

  const prevent = (e: React.MouseEvent) => e.preventDefault();

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 sm:px-6">
      {/* Backgrounds */}
      <div className="absolute inset-0 bg-[#0a0804]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(184,148,78,0.12),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_50%_50%,rgba(184,148,78,0.04),transparent)]" />

      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#b8944e]/60 to-transparent" />
      <div className="absolute top-20 left-4 h-10 w-10 border-l border-t border-[#b8944e]/20 sm:top-24 sm:left-8 sm:h-14 sm:w-14" />
      <div className="absolute top-20 right-4 h-10 w-10 border-r border-t border-[#b8944e]/20 sm:top-24 sm:right-8 sm:h-14 sm:w-14" />
      <div className="absolute bottom-14 left-4 h-10 w-10 border-l border-b border-[#b8944e]/20 sm:left-8 sm:h-14 sm:w-14" />
      <div className="absolute bottom-14 right-4 h-10 w-10 border-r border-b border-[#b8944e]/20 sm:right-8 sm:h-14 sm:w-14" />

      {/* Content */}
      <div className="relative z-10 flex w-full max-w-4xl flex-col items-center text-center">

        {/* Brand identity block */}
        <div className="hero-badge mb-5 flex flex-col items-center gap-2">
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#b8944e]/60 sm:w-12" />
            <span className="text-[8px] tracking-[0.5em] uppercase text-[#b8944e]/70 sm:text-[9px]">
              Est. Kashmir · Since 2020
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#b8944e]/60 sm:w-12" />
          </div>
          <h2 className="font-serif text-3xl tracking-[0.06em] text-[#f5ede0] sm:text-4xl lg:text-5xl">
            Branded<span className="text-[#b8944e]">Kashmir</span>
          </h2>
        </div>

        {/* Divider */}
        <div className="mb-6 flex items-center gap-3">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#b8944e]/40" />
          <svg className="text-[#b8944e]/55" width="10" height="10" viewBox="0 0 14 14" fill="currentColor">
            <path d="M7 0 L8.5 5.5 L14 7 L8.5 8.5 L7 14 L5.5 8.5 L0 7 L5.5 5.5 Z" />
          </svg>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#b8944e]/40" />
        </div>

        {/* Main headline */}
        <h1 className="hero-title font-serif mb-5 text-4xl leading-[1.1] tracking-tight text-[#f5ede0] sm:text-5xl lg:text-7xl">
          Discover Your
          <span className="block italic text-[#b8944e]">Signature</span>
          Scent
        </h1>

        {/* Description */}
        <p className="hero-subtitle mb-8 max-w-sm text-sm leading-7 text-[#c4aa8a]/55 sm:max-w-lg sm:text-base">
          From the valleys of Kashmir to the world — handcrafted fragrances that
          tell stories of saffron fields, chinar forests, and timeless elegance.
        </p>

        {/* CTAs */}
        <div className="hero-cta flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
          <Link href="#" onClick={prevent}
            className="w-full border border-[#b8944e] bg-[#b8944e] px-10 py-3.5 text-xs font-medium tracking-[0.25em] uppercase text-[#0a0804] transition-all duration-500 hover:bg-transparent hover:text-[#b8944e] sm:w-auto">
            Shop Collection
          </Link>
          <Link href="#" onClick={prevent}
            className="w-full border border-[#b8944e]/35 bg-transparent px-10 py-3.5 text-xs tracking-[0.25em] uppercase text-[#c4aa8a]/65 transition-all duration-500 hover:border-[#b8944e] hover:text-[#b8944e] sm:w-auto">
            Our Story
          </Link>
        </div>

        {/* Stats */}
        <div className="hero-stats mt-14 flex gap-8 border-t border-[#b8944e]/10 pt-7 sm:gap-12">
          {[
            { value: "50+", label: "Fragrances" },
            { value: "100%", label: "Natural Oils" },
            { value: "10K+", label: "Happy Souls" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <span className="font-serif text-xl text-[#b8944e] sm:text-2xl">{stat.value}</span>
              <span className="text-[9px] tracking-[0.2em] uppercase text-[#c4aa8a]/45">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 sm:bottom-8">
        <span className="text-[8px] tracking-[0.35em] uppercase text-[#b8944e]/40">Scroll</span>
        <div className="scroll-line h-8 w-px bg-gradient-to-b from-[#b8944e]/50 to-transparent sm:h-10" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#b8944e]/20 to-transparent" />
    </section>
  );
}
