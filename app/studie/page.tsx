import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SurveyFlow from "@/components/studie/SurveyFlow";

export const metadata = {
  title: "KMU Digital 2026 — Studie",
  description: "8 Fragen, unter 1 Minute. Wie digital ist der deutsche Mittelstand? Nehmen Sie teil und erhalten Sie den Studienbericht + Branchenvergleich.",
};

export default function StudiePage({
  searchParams,
}: {
  searchParams: { confirmed?: string };
}) {
  const isConfirmed = searchParams.confirmed === "true";

  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {isConfirmed ? (
        <section className="min-h-[80vh] flex items-center justify-center px-6">
          <div className="text-center max-w-md">
            <div className="w-20 h-20 bg-lime/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-lime" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-slate mb-4">Teilnahme bestätigt!</h1>
            <p className="text-slate-light text-lg">
              Vielen Dank! Sie erhalten Ihre Ergebnisse in ca. 2 Wochen per E-Mail.
            </p>
          </div>
        </section>
      ) : (
        <>
          {/* Hero */}
          <section className="pt-32 pb-8 text-center px-6">
            <div className="inline-flex items-center gap-2 bg-indigo/5 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-lime rounded-full animate-pulse" />
              <span className="text-sm font-medium text-indigo">500 KMUs. 8 Fragen. Unter 1 Minute.</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate leading-tight mb-6 max-w-3xl mx-auto">
              KMU Digital 2026
            </h1>
            <p className="text-lg text-slate-light max-w-2xl mx-auto">
              Wie geht der deutsche Mittelstand mit GenAI, Digitalisierung und Online-Sichtbarkeit um?
              Eine Studie von AVIGOR.
            </p>
          </section>

          {/* Survey */}
          <section className="max-w-2xl mx-auto pb-24">
            <SurveyFlow />
          </section>

          {/* Benefits */}
          <section className="bg-lavender py-20 px-6">
            <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
              {[
                { icon: "📄", title: "Studienbericht", desc: "Alle Ergebnisse kompakt aufbereitet — kostenlos als PDF." },
                { icon: "📊", title: "Branchenvergleich", desc: "Wo steht Ihr Unternehmen im Vergleich zu Ihrer Branche?" },
                { icon: "🔍", title: "Digital-Quick-Check", desc: "Automatische Analyse Ihres Online-Auftritts mit konkreten Handlungsempfehlungen." },
              ].map((b) => (
                <div key={b.title} className="bg-white rounded-2xl p-8 text-center shadow-sm">
                  <span className="text-4xl block mb-4">{b.icon}</span>
                  <h3 className="font-bold text-slate text-lg mb-2">{b.title}</h3>
                  <p className="text-slate-light text-sm">{b.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Authors */}
          <section className="py-20 px-6 text-center">
            <h2 className="text-2xl font-bold text-slate mb-2">Über die Autoren</h2>
            <p className="text-slate-light max-w-xl mx-auto mb-8">
              Dr. Sven-Erik Willrich (Autor, &bdquo;Data-Driven Company&ldquo;, Springer 2025) &amp; Lars Willrich — Co-Founder von AVIGOR, Berlin.
            </p>
          </section>
        </>
      )}

      <Footer />
    </main>
  );
}
