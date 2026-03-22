import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "KMU Webdesign — Moderne Websites für den Mittelstand",
  description: "Professionelle Websites für KMUs. In 7 Tagen live. Von der Konzeption bis zum Go-Live — powered by AI.",
};

const packages = [
  {
    name: "Starter",
    price: "ab 990 €",
    description: "Perfekt für den Einstieg",
    features: [
      "Responsive One-Page Website",
      "Kontaktformular",
      "SEO-Grundoptimierung",
      "SSL-Zertifikat",
      "Hosting-Setup (1 Jahr)",
      "Lieferzeit: 5 Tage",
    ],
    accent: false,
  },
  {
    name: "Professional",
    price: "ab 2.490 €",
    description: "Für wachsende Unternehmen",
    features: [
      "Alles aus Starter, plus:",
      "Bis zu 5 Unterseiten",
      "Blog / News-Bereich",
      "Google Analytics Setup",
      "Cookie-Banner (DSGVO)",
      "Kalenderbuchung (Calendly)",
      "Lieferzeit: 7 Tage",
    ],
    accent: true,
  },
  {
    name: "Premium",
    price: "ab 4.990 €",
    description: "Maximale Wirkung",
    features: [
      "Alles aus Professional, plus:",
      "Individuelle Animationen",
      "CRM-Integration",
      "E-Mail-Marketing Setup",
      "A/B-Test Landing Pages",
      "3 Monate Support inkl.",
      "Lieferzeit: 10 Tage",
    ],
    accent: false,
  },
];

export default function KmuWebdesignPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-lime/10 rounded-full px-4 py-1.5 mb-6">
          <span className="text-lime-dark font-semibold text-sm">Websites für KMUs</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-slate mb-6 max-w-3xl mx-auto">
          Ihr neuer Online-Auftritt.{" "}
          <span className="bg-gradient-to-r from-indigo to-indigo-light bg-clip-text text-transparent">
            In 7 Tagen live.
          </span>
        </h1>
        <p className="text-lg text-slate-light max-w-2xl mx-auto">
          Professionell. Modern. DSGVO-konform. Powered by AI — zu einem Bruchteil der üblichen Kosten.
        </p>
      </section>

      {/* Packages */}
      <section className="pb-24 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`rounded-2xl p-8 ${
                pkg.accent
                  ? "bg-indigo text-white border-2 border-indigo shadow-xl shadow-indigo/20 relative"
                  : "bg-white border-2 border-slate/5"
              }`}
            >
              {pkg.accent && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-lime text-indigo-deep text-xs font-bold px-3 py-1 rounded-full">
                  Beliebteste Wahl
                </span>
              )}
              <h3 className={`text-xl font-bold mb-1 ${pkg.accent ? "text-white" : "text-slate"}`}>{pkg.name}</h3>
              <p className={`text-sm mb-4 ${pkg.accent ? "text-white/70" : "text-slate-light"}`}>{pkg.description}</p>
              <p className={`text-3xl font-bold mb-6 ${pkg.accent ? "text-lime" : "text-indigo"}`}>{pkg.price}</p>
              <ul className="space-y-2 mb-8">
                {pkg.features.map((f) => (
                  <li key={f} className={`text-sm flex items-start gap-2 ${pkg.accent ? "text-white/80" : "text-slate-light"}`}>
                    <span className={`mt-0.5 ${pkg.accent ? "text-lime" : "text-lime"}`}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="/termin"
                className={`block text-center font-semibold py-3 rounded-xl transition-all ${
                  pkg.accent
                    ? "bg-lime text-indigo-deep hover:bg-lime-light"
                    : "bg-indigo text-white hover:bg-indigo-light"
                }`}
              >
                Gespräch buchen →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-lavender py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate mb-12">So funktioniert&apos;s</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Gespräch", desc: "15 Min. Wir verstehen Ihr Business." },
              { step: "02", title: "Konzept", desc: "Design-Mockup in 24 Stunden." },
              { step: "03", title: "Build", desc: "KI-gestützte Umsetzung in 5–7 Tagen." },
              { step: "04", title: "Go-Live", desc: "Launch, Analytics, Übergabe." },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <span className="text-4xl font-bold text-indigo/20">{s.step}</span>
                <h4 className="font-bold text-slate mt-2 mb-1">{s.title}</h4>
                <p className="text-sm text-slate-light">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
