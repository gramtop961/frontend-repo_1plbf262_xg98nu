import React from 'react';

export default function Testimonials({ labels }) {
  return (
    <section id="testimonials" className="relative bg-white text-[#101010]">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{labels.testimonials.title}</h2>
          <p className="mt-3 text-black/70 max-w-2xl">{labels.testimonials.subtitle}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {labels.testimonials.items.map((t, idx) => (
            <figure key={idx} className="rounded-2xl border border-black/10 p-6 bg-gradient-to-br from-white to-[#f8fafc] shadow-sm">
              <blockquote className="text-black/80">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-black/60">— {t.author}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
