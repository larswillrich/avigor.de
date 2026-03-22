"use client";

import { motion } from "framer-motion";

interface QuestionCardProps {
  question: string;
  options: string[];
  selected: string;
  onSelect: (value: string) => void;
  type?: "single" | "rating";
}

export default function QuestionCard({ question, options, selected, onSelect, type = "single" }: QuestionCardProps) {
  if (type === "rating") {
    const stars = [1, 2, 3, 4, 5];
    return (
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -40 }}
        className="text-center"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-slate mb-8">{question}</h2>
        <div className="flex justify-center gap-4">
          {stars.map((star) => (
            <button
              key={star}
              onClick={() => onSelect(String(star))}
              className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl text-2xl font-bold transition-all ${
                selected === String(star)
                  ? "bg-indigo text-white scale-110 shadow-lg shadow-indigo/30"
                  : "bg-lavender text-slate hover:bg-indigo/10 hover:scale-105"
              }`}
            >
              {star}
            </button>
          ))}
        </div>
        <div className="flex justify-between text-xs text-slate-light mt-3 max-w-xs mx-auto">
          <span>kaum digital</span>
          <span>voll digitalisiert</span>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-slate mb-8 text-center">{question}</h2>
      <div className="grid gap-3 max-w-lg mx-auto">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => onSelect(opt)}
            className={`w-full text-left px-6 py-4 rounded-xl border-2 transition-all font-medium ${
              selected === opt
                ? "border-indigo bg-indigo/5 text-indigo"
                : "border-slate/10 text-slate hover:border-indigo/30 hover:bg-lavender"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </motion.div>
  );
}
