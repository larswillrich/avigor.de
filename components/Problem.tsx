"use client";

import AnimateOnScroll from "./AnimateOnScroll";

const painPoints = [
  {
    title: "Expensive teams, slow results.",
    description:
      "Large teams bill by the hour. The meter runs whether value is created or not. A typical engagement: 6 consultants, 12 weeks, one strategy deck.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32" stroke="currentColor" strokeWidth={1.5}>
        <circle cx="16" cy="16" r="12" />
        <path d="M16 10v6l4 4" strokeLinecap="round" />
      </svg>
    ),
    number: "01",
  },
  {
    title: "Slide decks over solutions.",
    description:
      'Weeks of analysis produce polished presentations. Implementation is always "phase two." The deck gets praised, the problem stays unsolved.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32" stroke="currentColor" strokeWidth={1.5}>
        <rect x="4" y="6" width="24" height="18" rx="2" />
        <path d="M4 12h24M12 12v12" />
      </svg>
    ),
    number: "02",
  },
  {
    title: "Knowledge walks out the door.",
    description:
      "When the engagement ends, the consultants leave — and so does the expertise. You are back to square one, with a bill and a binder.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32" stroke="currentColor" strokeWidth={1.5}>
        <path d="M20 4v24M8 8h12a4 4 0 010 8H8V8z" />
        <path d="M24 16l4-4m-4 4l4 4" strokeLinecap="round" />
      </svg>
    ),
    number: "03",
  },
  {
    title: "One-size-fits-all frameworks.",
    description:
      "Proprietary methodologies recycled across clients. You pay premium rates for customization, but you get last quarter's template with your logo.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32" stroke="currentColor" strokeWidth={1.5}>
        <rect x="6" y="6" width="8" height="8" rx="1" />
        <rect x="18" y="6" width="8" height="8" rx="1" />
        <rect x="6" y="18" width="8" height="8" rx="1" />
        <rect x="18" y="18" width="8" height="8" rx="1" />
      </svg>
    ),
    number: "04",
  },
];

export default function Problem() {
  return (
    <section id="why" className="relative bg-white py-24 md:py-32">
      <div className="absolute inset-0 dot-pattern" />
      <div className="relative max-w-6xl mx-auto px-6">
        <AnimateOnScroll>
          <div className="inline-flex items-center gap-2 bg-indigo/5 rounded-full px-4 py-1.5 mb-4">
            <span className="text-indigo font-semibold text-sm tracking-widest uppercase">
              The Problem
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 max-w-3xl text-slate">
            Traditional consulting is{" "}
            <span className="bg-gradient-to-r from-indigo to-indigo-light bg-clip-text text-transparent">
              broken.
            </span>
          </h2>
          <p className="text-slate-light text-lg max-w-2xl mb-16">
            The model was built for a world before AI. Clients pay for time and
            bodies, not for results. That era is over.
          </p>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-6">
          {painPoints.map((point, i) => (
            <AnimateOnScroll key={i} delay={i * 0.1}>
              <div className="group bg-white rounded-2xl p-8 border border-slate/5 hover:border-indigo/20 hover:shadow-xl hover:shadow-indigo/5 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 bg-lavender rounded-xl flex items-center justify-center text-indigo group-hover:bg-indigo group-hover:text-white transition-colors">
                    {point.icon}
                  </div>
                  <span className="text-3xl font-bold text-slate/5 group-hover:text-indigo/10 transition-colors">
                    {point.number}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate">
                  {point.title}
                </h3>
                <p className="text-slate-light leading-relaxed">
                  {point.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
