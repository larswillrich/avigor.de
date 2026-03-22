"use client";

import { motion } from "framer-motion";

export default function ProgressBar({ current, total }: { current: number; total: number }) {
  const pct = Math.round((current / total) * 100);
  const isComplete = current >= total;

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex justify-between text-xs mb-2">
        <span className="text-slate-light">Frage {Math.min(current + 1, total)} von {total}</span>
        <span className={isComplete ? "text-lime-dark font-semibold" : "text-slate-light"}>{pct}%</span>
      </div>
      <div className="h-2 bg-slate/10 rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full ${isComplete ? "bg-lime" : "bg-indigo"}`}
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
