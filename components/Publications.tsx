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
      className="bg-ivory text-charcoal py-24 md:py-32"
    >
      <div className="max-w-6xl mx-auto px-6">
        <AnimateOnScroll>
          <p className="text-amber-brand font-semibold text-sm tracking-widest uppercase mb-4">
            Thought Leadership
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 max-w-3xl">
            Our thinking, in print.
          </h2>
        </AnimateOnScroll>

        <div className="space-y-6">
          {publications.map((pub, i) => (
            <AnimateOnScroll key={i} delay={i * 0.1}>
              <div className="flex flex-col md:flex-row gap-6 md:gap-10 bg-white rounded-xl border border-charcoal/5 p-8 hover:shadow-lg transition-shadow">
                {/* Year badge */}
                <div className="shrink-0 flex items-start">
                  <span className="text-4xl font-bold text-charcoal/10">
                    {pub.year}
                  </span>
                </div>

                <div className="flex-grow">
                  <div className="flex items-start gap-3 mb-2">
                    <h3 className="text-xl font-bold">{pub.title}</h3>
                    {pub.forthcoming && (
                      <span className="text-xs font-semibold bg-amber-brand/10 text-amber-brand px-2 py-0.5 rounded-full shrink-0 mt-1">
                        Forthcoming
                      </span>
                    )}
                  </div>
                  {pub.subtitle && (
                    <p className="text-sm text-charcoal/40 italic mb-2">
                      {pub.subtitle}
                    </p>
                  )}
                  <p className="text-charcoal/60 text-sm mb-3">
                    {pub.description}
                  </p>
                  <p className="text-xs text-charcoal/40">
                    {pub.authors} &middot; {pub.publisher}
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
