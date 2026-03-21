"use client";

import AnimateOnScroll from "./AnimateOnScroll";

const comparisons = [
  { traditional: "Bill by FTE and hour", avigor: "Pay for value delivered" },
  { traditional: "Large teams, long timelines", avigor: "Lean team + AI agents" },
  { traditional: "Slide decks as deliverables", avigor: "Working solutions as deliverables" },
  { traditional: "Knowledge leaves with the team", avigor: "Knowledge stays in your systems" },
  { traditional: "Periodic manual analysis", avigor: "Continuous agentic monitoring" },
  { traditional: "Weeks to first insight", avigor: "Days to first insight" },
];

export default function AvigorWay() {
  return (
    <section className="bg-indigo-deep py-24 md:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-lime/5 rounded-full blur-[100px]" />

      <div className="relative max-w-6xl mx-auto px-6">
        <AnimateOnScroll>
          <div className="inline-flex items-center gap-2 bg-lime/10 border border-lime/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-lime font-semibold text-sm tracking-widest uppercase">
              The Avigor Way
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-16 max-w-4xl leading-tight text-white">
            What if your consultants never slept, never billed by the hour, and{" "}
            <span className="text-lime">never left?</span>
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.15}>
          <p className="text-white/60 text-lg max-w-3xl mb-12">
            Avigor was founded on a simple premise: AI agents handle the
            repetitive, scalable, and data-intensive work. Experienced humans
            provide judgment, strategy, and oversight. The result — faster
            delivery, lower cost, and outcomes you can measure.
          </p>
        </AnimateOnScroll>

        {/* Comparison table */}
        <AnimateOnScroll delay={0.2}>
          <div className="rounded-2xl overflow-hidden border border-white/10 backdrop-blur-sm">
            <div className="grid grid-cols-2">
              <div className="bg-white/5 px-6 py-4 text-sm font-semibold text-white/30 uppercase tracking-wider">
                Traditional Consulting
              </div>
              <div className="bg-lime/10 px-6 py-4 text-sm font-semibold text-lime uppercase tracking-wider">
                The Avigor Way
              </div>
            </div>
            {comparisons.map((row, i) => (
              <div key={i} className="grid grid-cols-2 border-t border-white/5">
                <div className="px-6 py-4 text-white/30 line-through decoration-white/10">
                  {row.traditional}
                </div>
                <div className="px-6 py-4 text-white font-medium bg-lime/5 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-lime rounded-full shrink-0" />
                  {row.avigor}
                </div>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.3}>
          <div className="mt-12 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-lime/10">
            <h3 className="text-lg font-bold text-lime mb-3">
              What &ldquo;agentic&rdquo; actually means
            </h3>
            <p className="text-white/60 leading-relaxed">
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
