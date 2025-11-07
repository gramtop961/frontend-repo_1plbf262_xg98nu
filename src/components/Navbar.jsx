import React from 'react';

const LANG_NAMES = {
  id: 'ID',
  en: 'EN',
  zh: '中文',
};

export default function Navbar({ currentLang, onChangeLang, labels }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#D4AF37] via-[#7c5cff] to-[#007BFF] shadow-lg" />
          <span className="text-white font-semibold tracking-wide group-hover:opacity-90 transition-opacity">JR AICADEMY</span>
        </a>

        {/* Nav links (can expand later) */}
        <div className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#promise" className="hover:text-white transition-colors">{labels.nav.promise}</a>
          <a href="#path" className="hover:text-white transition-colors">{labels.nav.path}</a>
          <a href="#testimonials" className="hover:text-white transition-colors">{labels.nav.testimonials}</a>
          <a href="#portfolio" className="hover:text-white transition-colors">{labels.nav.portfolio}</a>
        </div>

        {/* Language Switcher */}
        <div className="flex items-center gap-2">
          {Object.keys(LANG_NAMES).map((lng) => (
            <button
              key={lng}
              onClick={() => onChangeLang(lng)}
              className={`px-3 py-1 rounded-md text-xs font-medium transition-colors border ${
                currentLang === lng
                  ? 'bg-white text-black border-white'
                  : 'bg-transparent text-white border-white/30 hover:border-white/60'
              }`}
              aria-pressed={currentLang === lng}
            >
              {LANG_NAMES[lng]}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}
