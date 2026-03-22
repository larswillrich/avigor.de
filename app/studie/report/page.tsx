"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://avigor.de/api";

interface ReportData {
  total_responses: number;
  branche_distribution: { label: string; count: string }[];
  genai_usage: { label: string; count: string }[];
  genai_sentiment: { label: string; count: string }[];
  kundenkanal: { label: string; count: string }[];
  avg_zufriedenheit: number;
  herausforderung: { label: string; count: string }[];
  investition: { label: string; count: string }[];
}

function BarChart({ data, color = "indigo" }: { data: { label: string; count: string }[]; color?: string }) {
  const max = Math.max(...data.map((d) => parseInt(d.count)));
  return (
    <div className="space-y-3">
      {data.map((d) => (
        <div key={d.label}>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-slate">{d.label}</span>
            <span className="text-slate-light font-medium">{d.count}</span>
          </div>
          <div className="h-3 bg-slate/5 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full ${color === "lime" ? "bg-lime" : "bg-indigo"}`}
              style={{ width: `${(parseInt(d.count) / max) * 100}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function ReportPage() {
  const [data, setData] = useState<ReportData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/report`)
      .then((r) => r.json())
      .then(setData)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <section className="pt-32 pb-24 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-indigo/5 rounded-full px-4 py-1.5 mb-4">
            <span className="text-indigo font-semibold text-sm">Studienbericht 2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate mb-4">KMU Digital 2026</h1>
          <p className="text-lg text-slate-light max-w-2xl mx-auto">
            Wie der deutsche Mittelstand mit GenAI, Digitalisierung und Online-Sichtbarkeit umgeht.
          </p>
        </div>

        {loading ? (
          <div className="text-center py-20 text-slate-light">Daten werden geladen...</div>
        ) : !data || data.total_responses === 0 ? (
          <div className="text-center py-20">
            <p className="text-slate-light text-lg">Der Studienbericht wird aktuell erstellt.</p>
            <p className="text-slate-light">Bitte schauen Sie in Kürze wieder vorbei.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-lavender rounded-2xl p-8">
              <h3 className="font-bold text-slate text-lg mb-4">Teilnehmer nach Branche</h3>
              <BarChart data={data.branche_distribution} />
            </div>
            <div className="bg-lavender rounded-2xl p-8">
              <h3 className="font-bold text-slate text-lg mb-4">GenAI-Nutzung</h3>
              <BarChart data={data.genai_usage} color="lime" />
            </div>
            <div className="bg-lavender rounded-2xl p-8">
              <h3 className="font-bold text-slate text-lg mb-4">GenAI-Sentiment</h3>
              <BarChart data={data.genai_sentiment} />
            </div>
            <div className="bg-lavender rounded-2xl p-8">
              <h3 className="font-bold text-slate text-lg mb-4">Kundenkanal</h3>
              <BarChart data={data.kundenkanal} color="lime" />
            </div>
            <div className="bg-lavender rounded-2xl p-8">
              <h3 className="font-bold text-slate text-lg mb-4">Größte Herausforderung</h3>
              <BarChart data={data.herausforderung} />
            </div>
            <div className="bg-lavender rounded-2xl p-8">
              <h3 className="font-bold text-slate text-lg mb-4">Investitionsbereitschaft</h3>
              <BarChart data={data.investition} color="lime" />
            </div>
            <div className="md:col-span-2 bg-indigo text-white rounded-2xl p-8 text-center">
              <p className="text-5xl font-bold mb-2">{data.total_responses}</p>
              <p className="text-white/70">Teilnehmer insgesamt</p>
              <p className="text-white/50 text-sm mt-4">
                Durchschnittliche Online-Zufriedenheit: {data.avg_zufriedenheit}/5
              </p>
            </div>
          </div>
        )}
      </section>
      <Footer />
    </main>
  );
}
