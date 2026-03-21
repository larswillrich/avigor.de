"use client";

import AnimateOnScroll from "./AnimateOnScroll";

const publications = [
  {
    title: "Your GenAI Starter Guide",
    subtitle: "30 Practical Use Cases to Unlock Business Potential",
    authors: "Lars Willrich & Dr. Sven-Erik Willrich",
    year: "2024",
    publisher: "Amazon",
    description:
      "A practical entry point for organizations beginning their Generative AI journey.",
  },
  {
    title: "Data-Driven Company",
    subtitle: "Moderne und integrierte Ansätze, um datengetrieben zu werden",
    authors: "Dr. Sven-Erik Willrich",
    year: "2025",
    publisher: "Springer",
    description:
      "A comprehensive framework for building data-driven organizations, covering strategy, governance, and operating models.",
  },
  {
    title: "Democratizing Analytics",
    subtitle: "From Self-Service to Embedded Intelligence",
    authors: "Dr. Sven-Erik Willrich",
    year: "2026",
    publisher: "Apress",
    description:
      "On making analytics accessible across the enterprise. Forthcoming.",
    forthcoming: true,
  },
];

export default function Publications() {
  return (
    <section
      id="publications"
      className="bg-indigo-deep py-24 md:py-32 relative overflow-hidden"
    >
      <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-indigo/10 rounded-full blur-[120px]" />

      <div className="relative max-w-6xl mx-auto px-6">
        <AnimateOnScroll>
          <div className="inline-flex items-center gap-2 bg-lime/10 border border-lime/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-lime font-semibold text-sm tracking-widest uppercase">
              Thought Leadership
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 max-w-3xl text-white">
            Our thinking, in print.
          </h2>
        </AnimateOnScroll>

        <div className="space-y-6">
          {publications.map((pub, i) => (
            <AnimateOnScroll key={i} delay={i * 0.1}>
              <div className="flex flex-col md:flex-row gap-6 md:gap-10 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:border-lime/20 hover:bg-white/[0.07] transition-all duration-300">
                {/* Year badge */}
                <div className="shrink-0 flex items-start">
                  <span className="text-5xl font-bold bg-gradient-to-b from-white/20 to-white/5 bg-clip-text text-transparent">
                    {pub.year}
                  </span>
                </div>

                <div className="flex-grow">
                  <div className="flex items-start gap-3 mb-2">
                    <h3 className="text-xl font-bold text-white">
                      {pub.title}
                    </h3>
                    {pub.forthcoming && (
                      <span className="text-xs font-semibold bg-lime/20 text-lime px-2.5 py-0.5 rounded-full shrink-0 mt-1">
                        Forthcoming
                      </span>
                    )}
                  </div>
                  {pub.subtitle && (
                    <p className="text-sm text-white/30 italic mb-2">
                      {pub.subtitle}
                    </p>
                  )}
                  <p className="text-white/50 text-sm mb-3">
                    {pub.description}
                  </p>
                  <p className="text-xs text-white/30">
                    {pub.authors} &middot;{" "}
                    <span className="text-lime/60">{pub.publisher}</span>
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
