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

export default function Pricing() {
  return (
    <section className="bg-charcoal py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <AnimateOnScroll>
          <p className="text-amber-brand font-semibold text-sm tracking-widest uppercase mb-4">
            Pricing Philosophy
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 max-w-3xl">
            You pay for outcomes. Not for hours.
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1}>
          <div className="max-w-3xl space-y-4 text-ivory/60 text-lg mb-12">
            <p>
              Traditional consulting ties fees to time and headcount. More
              consultants, more weeks, bigger invoice — regardless of impact.
            </p>
            <p>
              Avigor ties pricing to measurable outcomes: a governance framework
              delivered, a data platform deployed, an AI agent in production. We
              scope engagements around results, not resource plans.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.2}>
          <p className="text-lg font-semibold mb-6">The math is simple:</p>
          <div className="rounded-xl overflow-hidden border border-ivory/10">
            {/* Header */}
            <div className="grid grid-cols-3">
              <div className="px-6 py-4" />
              <div className="px-6 py-4 bg-ivory/5 text-sm font-semibold text-ivory/40 uppercase tracking-wider">
                Traditional
              </div>
              <div className="px-6 py-4 bg-amber-brand/10 text-sm font-semibold text-amber-brand uppercase tracking-wider">
                Avigor
              </div>
            </div>
            {/* Rows */}
            {rows.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-3 border-t border-ivory/5"
              >
                <div className="px-6 py-4 text-ivory/70 font-medium text-sm">
                  {row.label}
                </div>
                <div className="px-6 py-4 text-ivory/30 bg-ivory/[0.02] text-sm">
                  {row.traditional}
                </div>
                <div className="px-6 py-4 text-ivory font-medium bg-amber-brand/5 text-sm">
                  {row.avigor}
                </div>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.3}>
          <p className="mt-10 text-ivory/50 text-lg max-w-2xl">
            We have skin in the game. If value isn&apos;t delivered, you
            shouldn&apos;t pay for it.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
