"use client";

import AnimateOnScroll from "./AnimateOnScroll";

const rows = [
  {
    label: "Team",
    traditional: "6 consultants",
    avigor: "2 consultants + AI agents",
  },
  { label: "Duration", traditional: "12 weeks", avigor: "4 weeks" },
  {
    label: "Deliverable",
    traditional: "Strategy deck + recommendations",
    avigor: "Working solution + embedded agents",
  },
  {
    label: "You pay for",
    traditional: "Time spent",
    avigor: "Value delivered",
  },
];

const benefits = [
  {
    title: "Compressed timelines",
    description: "AI agents work 24/7 — no waiting for the next sprint.",
  },
  {
    title: "Lower cost",
    description: "Fewer humans, more automation. The savings go to you.",
  },
  {
    title: "Skin in the game",
    description: "We tie our fees to outcomes. No value, no invoice.",
  },
];

export default function Pricing() {
  return (
    <section aria-label="Pricing model comparison" className="relative bg-white py-24 md:py-32">
      <div className="absolute inset-0 dot-pattern" />
      <div className="relative max-w-6xl mx-auto px-6">
        <AnimateOnScroll>
          <div className="inline-flex items-center gap-2 bg-indigo/5 rounded-full px-4 py-1.5 mb-4">
            <span className="text-indigo font-semibold text-sm tracking-widest uppercase">
              Pricing Philosophy
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 max-w-3xl text-slate">
            You pay for outcomes.{" "}
            <span className="bg-gradient-to-r from-indigo to-indigo-light bg-clip-text text-transparent">
              Not for hours.
            </span>
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1}>
          <div className="max-w-3xl space-y-4 text-slate-light text-lg mb-12">
            <p>
              Traditional consulting ties fees to time and headcount. More
              consultants, more weeks, bigger invoice — regardless of impact.
            </p>
            <p>
              Avigor ties pricing to measurable outcomes: a governance framework
              delivered, a data platform deployed, an AI agent in production.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Comparison table */}
        <AnimateOnScroll delay={0.2}>
          <div className="rounded-2xl overflow-hidden border border-slate/10 mb-12">
            <div className="grid grid-cols-3">
              <div className="px-6 py-4 bg-slate/5" />
              <div className="px-6 py-4 bg-slate/5 text-sm font-semibold text-slate-light/50 uppercase tracking-wider">
                Traditional
              </div>
              <div className="px-6 py-4 bg-indigo/5 text-sm font-semibold text-indigo uppercase tracking-wider">
                Avigor
              </div>
            </div>
            {rows.map((row, i) => (
              <div key={i} className="grid grid-cols-3 border-t border-slate/5">
                <div className="px-6 py-4 text-slate font-medium text-sm">
                  {row.label}
                </div>
                <div className="px-6 py-4 text-slate-light/40 text-sm">
                  {row.traditional}
                </div>
                <div className="px-6 py-4 text-slate font-medium bg-indigo/[0.03] text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-lime rounded-full shrink-0" />
                  {row.avigor}
                </div>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Why this works */}
        <AnimateOnScroll delay={0.3}>
          <h3 className="text-xl font-bold text-slate mb-6">
            Why this works
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <div
                key={i}
                className="bg-lavender rounded-2xl p-6 border border-indigo/5"
              >
                <div className="w-8 h-8 bg-indigo/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-indigo font-bold text-sm">
                    0{i + 1}
                  </span>
                </div>
                <h4 className="font-bold text-slate mb-2">{benefit.title}</h4>
                <p className="text-sm text-slate-light">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
