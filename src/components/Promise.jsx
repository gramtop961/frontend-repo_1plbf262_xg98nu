import React from 'react';

export default function Promise({ labels }) {
  return (
    <section id="promise" className="relative bg-white text-[#101010]">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              {labels.promise.title}
            </h2>
            <p className="mt-4 text-lg text-black/70">
              {labels.promise.subtitle}
            </p>
            <ul className="mt-8 space-y-4 text-black/80">
              {labels.promise.points.map((pt, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#007BFF]" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-black/10 p-8 bg-gradient-to-br from-white to-[#f8fafc] shadow-sm">
            <blockquote className="text-xl leading-relaxed text-black/80">
              “{labels.promise.quote}”
            </blockquote>
            <div className="mt-6 text-sm text-black/60">— Javier Regan, Founder</div>
          </div>
        </div>
      </div>
    </section>
  );
}
