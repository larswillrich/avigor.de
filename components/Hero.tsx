"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background elements */}
      <div className="absolute inset-0 dot-pattern" />
      <div className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-indigo/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 left-1/4 w-[400px] h-[400px] bg-lime/10 rounded-full blur-[100px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-lavender/50 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-lime/10 border border-lime/20 rounded-full px-4 py-1.5 mb-8"
        >
          <span className="w-2 h-2 bg-lime rounded-full animate-pulse" />
          <span className="text-sm font-medium text-lime-dark">
            Agentic-Driven Consulting
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-8 text-slate"
        >
          We deploy agents,
          <br />
          <span className="bg-gradient-to-r from-indigo to-indigo-light bg-clip-text text-transparent">
            not armies.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-lg md:text-xl text-slate-light max-w-2xl mx-auto mb-12"
        >
          Berlin-based Data & AI consultancy that replaces expensive consultant
          teams with agentic solutions. You pay for value delivered — not
          headcount.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="bg-indigo text-white font-semibold px-8 py-4 rounded-xl text-lg hover:bg-indigo-light hover:shadow-lg hover:shadow-indigo/25 transition-all"
          >
            Book a Call
          </a>
          <a
            href="#why"
            className="border-2 border-slate/10 text-slate font-semibold px-8 py-4 rounded-xl text-lg hover:border-indigo hover:text-indigo transition-all"
          >
            See How It Works
          </a>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-light/50"
        >
          <span>Previously at</span>
          <span className="font-semibold text-slate-light/70">Capgemini</span>
          <span className="text-slate/10">|</span>
          <span className="font-semibold text-slate-light/70">Deloitte</span>
          <span className="text-slate/10">|</span>
          <span className="font-semibold text-slate-light/70">Accenture</span>
          <span className="text-slate/10">|</span>
          <span className="font-semibold text-slate-light/70">Capco</span>
          <span className="text-slate/10">|</span>
          <span className="font-semibold text-slate-light/70">MHP Porsche</span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-5 h-8 border-2 border-indigo/20 rounded-full flex justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-indigo rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
