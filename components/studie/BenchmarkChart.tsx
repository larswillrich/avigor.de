"use client";

import { motion } from "framer-motion";

interface BenchmarkChartProps {
  label: string;
  yourValue: number;
  avgValue: number;
  maxValue: number;
  yourLabel: string;
  avgLabel: string;
  unit?: string;
}

export default function BenchmarkChart({ label, yourValue, avgValue, maxValue, yourLabel, avgLabel, unit = "" }: BenchmarkChartProps) {
  const yourPct = Math.min((yourValue / maxValue) * 100, 100);
  const avgPct = Math.min((avgValue / maxValue) * 100, 100);
  const isBelowAvg = yourValue < avgValue;

  return (
    <div className="bg-white rounded-xl border border-slate/5 p-6">
      <div className="flex justify-between items-center mb-4">
        <h4 className="font-semibold text-slate">{label}</h4>
        <span className={`text-xs font-bold px-2 py-1 rounded-full ${
          isBelowAvg ? "bg-red-50 text-red-600" : "bg-lime/10 text-lime-dark"
        }`}>
          {isBelowAvg ? "⚠️ Unter Durchschnitt" : "✅ Gut"}
        </span>
      </div>

      {/* Your value */}
      <div className="mb-3">
        <div className="flex justify-between text-sm mb-1">
          <span className="text-indigo font-medium">Sie</span>
          <span className="text-indigo font-bold">{yourLabel}{unit}</span>
        </div>
        <div className="h-3 bg-slate/5 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-indigo rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${yourPct}%` }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </div>
      </div>

      {/* Average */}
      <div>
        <div className="flex justify-between text-sm mb-1">
          <span className="text-slate-light">Branche</span>
          <span className="text-slate-light font-bold">{avgLabel}{unit}</span>
        </div>
        <div className="h-3 bg-slate/5 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-slate/30 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${avgPct}%` }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </div>
      </div>
    </div>
  );
}
