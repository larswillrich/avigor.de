"use client";

import AnimateOnScroll from "./AnimateOnScroll";

export default function Contact() {
  return (
    <section id="contact" className="bg-amber-brand py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <AnimateOnScroll>
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
            Let&apos;s talk value.
          </h2>
          <p className="text-charcoal/70 text-lg mb-12 max-w-2xl mx-auto">
            Whether you&apos;re exploring your first AI use case or
            restructuring your data organization — start with a conversation. No
            pitch decks. No NDAs required. Just a direct talk about what you
            need.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.15}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="mailto:hello@avigor.de"
              className="bg-charcoal text-ivory font-semibold px-8 py-4 rounded text-lg hover:bg-charcoal/90 transition-colors"
            >
              hello@avigor.de
            </a>
            <a
              href="https://avigor.de"
              className="border-2 border-charcoal text-charcoal font-semibold px-8 py-4 rounded text-lg hover:bg-charcoal/10 transition-colors"
            >
              avigor.de
            </a>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.25}>
          <p className="text-charcoal/50 text-sm">Berlin, Germany</p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
