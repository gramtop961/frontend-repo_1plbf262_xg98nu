import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero({ labels, onPrimaryClick }) {
  return (
    <section id="home" className="relative min-h-[100dvh] w-full overflow-hidden bg-[#101010]">
      {/* Spline Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Dark gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,16,16,0.35),rgba(16,16,16,0.85))]" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-24 flex flex-col items-center text-center text-white">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-wider text-white/70 mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
          <span>Founder-led • Premium • Cinematic</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
          {labels.hero.title}
        </h1>
        <p className="mt-6 text-base sm:text-lg md:text-xl text-white/80 max-w-3xl">
          {labels.hero.subtitle}
        </p>

        <div className="mt-10">
          <a
            href="#promise"
            onClick={onPrimaryClick}
            className="inline-flex items-center gap-2 rounded-lg bg-[#D4AF37] text-black px-6 py-3 font-medium shadow-[0_8px_30px_rgba(212,175,55,0.35)] hover:shadow-[0_12px_40px_rgba(212,175,55,0.45)] transition-shadow"
          >
            {labels.hero.cta}
          </a>
        </div>
      </div>

      {/* Soft edge gradient bottom to transition to next section */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#101010] to-transparent" />
    </section>
  );
}
