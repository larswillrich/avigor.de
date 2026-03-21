"use client";

import AnimateOnScroll from "./AnimateOnScroll";

const painPoints = [
  {
    title: "Expensive teams, slow results.",
    description:
      "Large teams bill by the hour. The meter runs whether value is created or not.",
    icon: "💸",
  },
  {
    title: "Slide decks over solutions.",
    description:
      'Weeks of analysis produce polished presentations that sit in SharePoint. Implementation is always "phase two."',
    icon: "📊",
  },
  {
    title: "Knowledge walks out the door.",
    description:
      "When the engagement ends, the consultants leave — and so does the expertise.",
    icon: "🚪",
  },
  {
    title: "One-size-fits-all frameworks.",
    description:
      "Proprietary methodologies recycled across clients. You pay for customization, you get templates.",
    icon: "📋",
  },
];

export default function Problem() {
  return (
    <section id="why" className="bg-ivory text-charcoal py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <AnimateOnScroll>
          <p className="text-amber-brand font-semibold text-sm tracking-widest uppercase mb-4">
            The Problem
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 max-w-3xl">
            Traditional consulting is broken.
          </h2>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-8">
          {painPoints.map((point, i) => (
            <AnimateOnScroll key={i} delay={i * 0.1}>
              <div className="bg-white rounded-xl p-8 border border-charcoal/5 hover:shadow-lg transition-shadow">
                <span className="text-3xl mb-4 block">{point.icon}</span>
                <h3 className="text-xl font-bold mb-3">{point.title}</h3>
                <p className="text-charcoal/60 leading-relaxed">
                  {point.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={0.4}>
          <p className="mt-12 text-lg text-charcoal/60 max-w-2xl">
            The traditional model is misaligned. Clients pay for time and
            bodies, not for results. This worked before AI. It doesn&apos;t work
            anymore.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
