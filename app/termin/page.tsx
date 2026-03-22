import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

export const metadata = {
  title: "Termin buchen — Kostenloses 15-Minuten-Gespräch",
  description: "Buchen Sie ein kostenloses 15-Minuten-Gespräch mit AVIGOR. Keine Verkaufsgespräche — eine Einordnung Ihrer Ergebnisse.",
};

const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/avigor/15min";

export default function TerminPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />

      <section className="pt-32 pb-8 px-6 text-center">
        <h1 className="text-4xl font-bold text-slate mb-4">Kostenloses 15-Minuten-Gespräch</h1>
        <p className="text-lg text-slate-light max-w-2xl mx-auto mb-4">
          Keine Verkaufsgespräche. Keine NDAs. Einfach eine ehrliche Einordnung — wo steht Ihr Unternehmen und was wären die nächsten Schritte?
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-12">
        <div
          className="calendly-inline-widget rounded-2xl overflow-hidden border border-slate/10"
          data-url={CALENDLY_URL}
          style={{ minWidth: "320px", height: "700px" }}
        />
      </section>

      <section className="bg-lavender py-16 px-6">
        <div className="max-w-3xl mx-auto grid md:grid-cols-3 gap-6 text-center">
          {[
            { icon: "💬", title: "Kein Pitch", desc: "Wir hören zu und ordnen ein." },
            { icon: "⏱️", title: "15 Minuten", desc: "Kurz, knapp, auf den Punkt." },
            { icon: "🔒", title: "Vertraulich", desc: "Alles bleibt unter uns." },
          ].map((item) => (
            <div key={item.title}>
              <span className="text-3xl block mb-2">{item.icon}</span>
              <h3 className="font-bold text-slate mb-1">{item.title}</h3>
              <p className="text-sm text-slate-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
