import React from 'react';

export default function Footer({ labels }) {
  return (
    <footer className="bg-[#0b0b0b] text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#D4AF37] via-[#7c5cff] to-[#007BFF]" />
          <div>
            <div className="font-semibold">JR AICADEMY</div>
            <div className="text-xs text-white/60">{labels.footer.tagline}</div>
          </div>
        </div>
        <div className="text-sm text-white/60">© {new Date().getFullYear()} JR AICADEMY. {labels.footer.rights}</div>
      </div>
    </footer>
  );
}
