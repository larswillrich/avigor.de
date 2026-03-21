"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal to-amber-brand/10" />
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-amber-brand/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-teal-brand/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-amber-brand tracking-[0.3em] uppercase text-sm font-semibold mb-6"
        >
          Avid IT Guidance Advisor
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-8"
        >
          We deploy agents,
          <br />
          <span className="text-amber-brand">not armies.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-lg md:text-xl text-ivory/60 max-w-2xl mx-auto mb-12"
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
            className="bg-amber-brand text-charcoal font-semibold px-8 py-4 rounded text-lg hover:bg-amber-light transition-colors"
          >
            Book a Call
          </a>
          <a
            href="#why"
            className="border border-ivory/20 text-ivory font-semibold px-8 py-4 rounded text-lg hover:border-amber-brand hover:text-amber-brand transition-colors"
          >
            See How It Works
          </a>
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
          className="w-5 h-8 border-2 border-ivory/20 rounded-full flex justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-amber-brand rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
