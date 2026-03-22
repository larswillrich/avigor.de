"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BenchmarkChart from "@/components/studie/BenchmarkChart";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://avigor.de/api";

interface BenchmarkData {
  lead: Record<string, string | number>;
  averages: Record<string, number>;
}

export default function BenchmarkPage() {
  const params = useParams();
  const [data, setData] = useState<BenchmarkData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/benchmark/${params.id}`)
      .then((r) => r.json())
      .then(setData)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [params.id]);

  return (
    <main className="bg-lavender min-h-screen">
      <Navbar />
      <section className="pt-32 pb-24 px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-slate mb-2">Ihr Branchenvergleich</h1>
        <p className="text-slate-light text-lg mb-12">KMU Digital 2026 — Personalisierte Auswertung</p>

        {loading ? (
          <div className="text-center py-20 text-slate-light">Daten werden geladen...</div>
        ) : !data ? (
          <div className="text-center py-20 text-slate-light">Keine Daten gefunden.</div>
        ) : (
          <>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <BenchmarkChart
                label="Digitalisierungsgrad"
                yourValue={data.lead.q2_digital as number}
                avgValue={data.averages.avg_digital}
                maxValue={5}
                yourLabel={String(data.lead.q2_digital)}
                avgLabel={String(data.averages.avg_digital)}
                unit="/5"
              />
              <BenchmarkChart
                label="Online-Zufriedenheit"
                yourValue={data.lead.q6_zufriedenheit as number}
                avgValue={data.averages.avg_zufriedenheit}
                maxValue={5}
                yourLabel={String(data.lead.q6_zufriedenheit)}
                avgLabel={String(data.averages.avg_zufriedenheit)}
                unit="/5"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-12">
              <div className="bg-white rounded-xl p-6 border border-slate/5">
                <p className="text-sm text-slate-light mb-1">GenAI-Nutzung</p>
                <p className="font-bold text-slate">{data.lead.q3_genai}</p>
                <p className="text-xs text-slate-light mt-2">{data.averages.pct_genai_nutzer}% Ihrer Branche nutzen GenAI</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate/5">
                <p className="text-sm text-slate-light mb-1">Kundenkanal</p>
                <p className="font-bold text-slate">{data.lead.q5_kundenkanal}</p>
                <p className="text-xs text-slate-light mt-2">{data.averages.pct_website_kanal}% setzen auf Website</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate/5">
                <p className="text-sm text-slate-light mb-1">Investitionsplan</p>
                <p className="font-bold text-slate">{data.lead.q8_investition}</p>
                <p className="text-xs text-slate-light mt-2">{data.averages.pct_investition}% planen Investition</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`/webpages/audit/${params.id}`} className="bg-indigo text-white font-semibold px-8 py-4 rounded-xl text-center hover:bg-indigo-light transition-all">
                Digital-Quick-Check →
              </a>
              <a href="/termin" className="border-2 border-indigo text-indigo font-semibold px-8 py-4 rounded-xl text-center hover:bg-indigo hover:text-white transition-all">
                15-Min-Gespräch buchen
              </a>
            </div>
          </>
        )}
      </section>
      <Footer />
    </main>
  );
}
