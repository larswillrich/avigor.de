"use client";

import AnimateOnScroll from "./AnimateOnScroll";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-gradient-to-br from-indigo via-indigo to-indigo-deep py-24 md:py-32 overflow-hidden"
    >
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-lime/10 rounded-full blur-[150px]" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <AnimateOnScroll>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let&apos;s talk{" "}
            <span className="text-lime">value.</span>
          </h2>
          <p className="text-white/70 text-lg mb-12 max-w-2xl mx-auto">
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
              className="bg-lime text-indigo-deep font-semibold px-8 py-4 rounded-xl text-lg hover:bg-lime-light hover:shadow-lg hover:shadow-lime/25 transition-all"
            >
              hello@avigor.de
            </a>
            <a
              href="https://avigor.de"
              className="border-2 border-white/20 text-white font-semibold px-8 py-4 rounded-xl text-lg hover:bg-white/10 transition-all"
            >
              avigor.de
            </a>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.25}>
          <p className="text-white/40 text-sm flex items-center justify-center gap-1.5">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth={1.5}>
              <path d="M8 2a5 5 0 00-5 5c0 4 5 7 5 7s5-3 5-7a5 5 0 00-5-5z" />
              <circle cx="8" cy="7" r="1.5" />
            </svg>
            Berlin, Germany
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
