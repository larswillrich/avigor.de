"use client";

import AnimateOnScroll from "./AnimateOnScroll";

const comparisons = [
  {
    traditional: "Bill by FTE and hour",
    avigor: "Pay for value delivered",
  },
  {
    traditional: "Large teams, long timelines",
    avigor: "Lean team + AI agents",
  },
  {
    traditional: "Slide decks as deliverables",
    avigor: "Working solutions as deliverables",
  },
  {
    traditional: "Knowledge leaves with the team",
    avigor: "Knowledge stays in your systems",
  },
  {
    traditional: "Periodic manual analysis",
    avigor: "Continuous agentic monitoring",
  },
  {
    traditional: "Weeks to first insight",
    avigor: "Days to first insight",
  },
];

export default function AvigorWay() {
  return (
    <section className="bg-charcoal py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <AnimateOnScroll>
          <p className="text-amber-brand font-semibold text-sm tracking-widest uppercase mb-4">
            The Avigor Way
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-16 max-w-4xl leading-tight">
            What if your consultants never slept, never billed by the hour, and
            never left?
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.15}>
          <p className="text-ivory/60 text-lg max-w-3xl mb-12">
            Avigor was founded on a simple premise: AI agents handle the
            repetitive, scalable, and data-intensive work. Experienced humans
            provide judgment, strategy, and oversight. The result — faster
            delivery, lower cost, and outcomes you can measure.
          </p>
        </AnimateOnScroll>

        {/* Comparison table */}
        <AnimateOnScroll delay={0.2}>
          <div className="rounded-xl overflow-hidden border border-ivory/10">
            <div className="grid grid-cols-2">
              <div className="bg-ivory/5 px-6 py-4 text-sm font-semibold text-ivory/40 uppercase tracking-wider">
                Traditional Consulting
              </div>
              <div className="bg-amber-brand/10 px-6 py-4 text-sm font-semibold text-amber-brand uppercase tracking-wider">
                The Avigor Way
              </div>
            </div>
            {comparisons.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-2 border-t border-ivory/5"
              >
                <div className="px-6 py-4 text-ivory/40 line-through decoration-ivory/20">
                  {row.traditional}
                </div>
                <div className="px-6 py-4 text-ivory font-medium bg-amber-brand/5">
                  {row.avigor}
                </div>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.3}>
          <div className="mt-12 bg-ivory/5 rounded-xl p-8 border border-ivory/10">
            <h3 className="text-lg font-bold text-amber-brand mb-3">
              What &ldquo;agentic&rdquo; actually means
            </h3>
            <p className="text-ivory/60 leading-relaxed">
              AI agents that autonomously execute data pipelines, generate
              governance reports, monitor data quality, draft strategy documents,
              and surface insights — 24/7, without coffee breaks. Avigor&apos;s
              human consultants design the system, set the guardrails, and ensure
              quality. The agents do the rest.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
