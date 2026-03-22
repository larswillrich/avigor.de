import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Referenzen — AVIGOR",
  description: "Vorher/Nachher: Wie KMUs mit AVIGOR ihren Online-Auftritt transformiert haben.",
};

const cases = [
  {
    firma: "Handwerksbetrieb Berlin",
    branche: "Handwerk & Bau",
    before: { score: 23, description: "Veraltete HTML-Seite von 2014. Keine mobile Optimierung. Ladezeit > 8s." },
    after: { score: 94, description: "Moderne responsive Website. Kontaktformular, SEO-optimiert. Ladezeit < 2s." },
    impact: "+62% Website-Anfragen im ersten Monat",
    timeline: "7 Tage",
  },
  {
    firma: "Praxis am Park",
    branche: "Gesundheit & Praxis",
    before: { score: 41, description: "WordPress-Seite mit veralteten Plugins. Kein SSL. Schlechte Mobile-Darstellung." },
    after: { score: 97, description: "Schnelle JAMstack-Website. Online-Terminbuchung. DSGVO-konform." },
    impact: "+45% Online-Terminbuchungen",
    timeline: "5 Tage",
  },
  {
    firma: "Restaurant Südstern",
    branche: "Gastronomie & Hotellerie",
    before: { score: 18, description: "Nur Facebook-Seite als Online-Präsenz. Keine eigene Website." },
    after: { score: 91, description: "Eigene Website mit Speisekarte, Reservierung, Google Maps Integration." },
    impact: "Erstmals direkte Online-Reservierungen",
    timeline: "4 Tage",
  },
];

export default function ReferenzenPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      <section className="pt-32 pb-12 px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-lime/10 rounded-full px-4 py-1.5 mb-6">
          <span className="text-lime-dark font-semibold text-sm">Fallstudien</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-slate mb-4">
          Vorher / Nachher
        </h1>
        <p className="text-lg text-slate-light max-w-2xl mx-auto">
          Echte KMU-Projekte. Messbare Ergebnisse. In unter 10 Tagen.
        </p>
      </section>

      <section className="pb-24 px-6 max-w-4xl mx-auto space-y-8">
        {cases.map((c) => (
          <div key={c.firma} className="bg-lavender rounded-2xl overflow-hidden">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-slate">{c.firma}</h3>
                  <p className="text-sm text-slate-light">{c.branche}</p>
                </div>
                <span className="text-xs bg-indigo/10 text-indigo font-bold px-3 py-1 rounded-full">{c.timeline}</span>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Before */}
                <div className="bg-red-50 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-red-500 font-bold text-sm">VORHER</span>
                    <span className="text-2xl font-bold text-red-500">{c.before.score}/100</span>
                  </div>
                  <p className="text-sm text-slate-light">{c.before.description}</p>
                </div>

                {/* After */}
                <div className="bg-lime/10 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lime-dark font-bold text-sm">NACHHER</span>
                    <span className="text-2xl font-bold text-lime-dark">{c.after.score}/100</span>
                  </div>
                  <p className="text-sm text-slate-light">{c.after.description}</p>
                </div>
              </div>

              <div className="mt-6 bg-white rounded-xl p-4 text-center">
                <p className="text-indigo font-bold text-lg">{c.impact}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="bg-indigo py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Bereit für Ihren neuen Auftritt?</h2>
        <p className="text-white/70 mb-8">Kostenloser Mockup. Kein Risiko.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/webpages/mockup" className="bg-lime text-indigo-deep font-bold px-8 py-4 rounded-xl hover:bg-lime-light transition-all">
            Mockup anfordern →
          </a>
          <a href="/termin" className="border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-all">
            Gespräch buchen
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
