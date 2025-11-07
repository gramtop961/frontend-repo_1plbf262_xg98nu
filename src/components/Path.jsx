import React from 'react';

export default function Path({ labels }) {
  return (
    <section id="path" className="relative bg-[#0b0b0b] text-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{labels.path.title}</h2>
          <p className="mt-3 text-white/70 max-w-2xl">{labels.path.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {labels.path.stages.map((stage, idx) => (
            <div key={idx} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm text-white/60">{stage.kicker}</div>
              <h3 className="mt-1 text-xl font-semibold">{stage.title}</h3>
              <p className="mt-3 text-white/70">{stage.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
