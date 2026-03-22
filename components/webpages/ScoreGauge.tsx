"use client";

import { motion } from "framer-motion";

interface ScoreGaugeProps {
  score: number;
  label: string;
  size?: number;
}

export default function ScoreGauge({ score, label, size = 140 }: ScoreGaugeProps) {
  const radius = (size - 12) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  const color = score >= 90 ? "#84CC16" : score >= 50 ? "#F59E0B" : "#EF4444";
  const bgColor = score >= 90 ? "bg-lime/10" : score >= 50 ? "bg-amber-50" : "bg-red-50";

  return (
    <div className={`flex flex-col items-center ${bgColor} rounded-2xl p-6`}>
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#e5e7eb"
          strokeWidth="8"
          fill="none"
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </svg>
      <span className="text-3xl font-bold text-slate -mt-[calc(50%+20px)] mb-[calc(50%-20px)]">
        {score}
      </span>
      <p className="text-sm font-medium text-slate-light mt-2">{label}</p>
    </div>
  );
}
