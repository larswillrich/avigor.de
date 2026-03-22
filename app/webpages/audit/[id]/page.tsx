"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScoreGauge from "@/components/webpages/ScoreGauge";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://avigor.de/api";

interface AuditData {
  audit: {
    url: string;
    performance: number;
    mobile: number;
    ssl: boolean;
    load_time_ms: number;
    seo_score: number;
    audited_at: string;
  };
  firma: string;
  branche: string;
  averages: Record<string, number>;
  status?: string;
}

export default function AuditPage() {
  const params = useParams();
  const [data, setData] = useState<AuditData | null>(null);
  const [loading, setLoading] = useState(true);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    fetch(`${API_URL}/webpages/audit/${params.id}`)
      .then((r) => r.json())
      .then((d) => {
        if (d.status === "pending") {
          setPending(true);
        } else {
          setData(d);
        }
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [params.id]);

  return (
    <main className="bg-lavender min-h-screen">
      <Navbar />
      <section className="pt-32 pb-24 px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-slate mb-2">Digital-Quick-Check</h1>
        <p className="text-slate-light text-lg mb-12">
          {data ? `Ergebnisse für ${data.firma}` : "Automatische Analyse Ihres Online-Auftritts"}
        </p>

        {loading ? (
          <div className="text-center py-20 text-slate-light">Wird geladen...</div>
        ) : pending ? (
          <div className="text-center py-20">
            <div className="w-16 h-16 bg-indigo/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-indigo animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-slate mb-2">Audit wird erstellt...</h2>
            <p className="text-slate-light">Ihre Website wird analysiert. Bitte schauen Sie in Kürze wieder vorbei.</p>
          </div>
        ) : !data ? (
          <div className="text-center py-20 text-slate-light">Keine Daten gefunden.</div>
        ) : (
          <>
            <p className="text-sm text-slate-light mb-8">
              URL: <a href={data.audit.url} className="text-indigo underline" target="_blank" rel="noopener">{data.audit.url}</a>
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <ScoreGauge score={data.audit.performance} label="Performance" />
              <ScoreGauge score={data.audit.mobile} label="Mobil" />
              <ScoreGauge score={data.audit.seo_score} label="SEO" />
              <div className={`flex flex-col items-center justify-center rounded-2xl p-6 ${data.audit.ssl ? "bg-lime/10" : "bg-red-50"}`}>
                <span className="text-4xl mb-2">{data.audit.ssl ? "🔒" : "⚠️"}</span>
                <p className="font-bold text-slate">{data.audit.ssl ? "SSL aktiv" : "Kein SSL"}</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate/5 p-8 mb-8">
              <h3 className="font-bold text-slate mb-4">Ladezeit</h3>
              <p className="text-3xl font-bold text-indigo">{(data.audit.load_time_ms / 1000).toFixed(1)}s</p>
              <p className="text-sm text-slate-light mt-1">
                Branchendurchschnitt: {data.averages?.avg_load_time ? `${(data.averages.avg_load_time / 1000).toFixed(1)}s` : "n/a"}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/termin" className="bg-indigo text-white font-semibold px-8 py-4 rounded-xl text-center hover:bg-indigo-light transition-all">
                Termin buchen →
              </a>
              <a href="/webpages/kmu-webdesign" className="border-2 border-indigo text-indigo font-semibold px-8 py-4 rounded-xl text-center hover:bg-indigo hover:text-white transition-all">
                Angebot anfordern
              </a>
            </div>
          </>
        )}
      </section>
      <Footer />
    </main>
  );
}
