"use client";

import { useState, FormEvent } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function MockupPage() {
  const [form, setForm] = useState({ firma: "", email: "", website_url: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formsubmit.co/ajax/hello@avigor.de", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...form,
          _subject: `Mockup-Anfrage von ${form.firma}`,
          _template: "table",
        }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <section className="pt-32 pb-24 px-6 max-w-xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate mb-4">Kostenloser Mockup</h1>
          <p className="text-slate-light text-lg">
            Wir erstellen unverbindlich einen Design-Entwurf für Ihren neuen Online-Auftritt. Gefällt er nicht — kostet nichts.
          </p>
        </div>

        {status === "success" ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-lime/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-lime" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-slate mb-2">Anfrage erhalten!</h2>
            <p className="text-slate-light">Wir melden uns innerhalb von 24 Stunden.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate mb-1.5">Firma *</label>
              <input type="text" required value={form.firma} onChange={(e) => setForm({ ...form, firma: e.target.value })}
                className="w-full border-2 border-slate/10 rounded-xl px-4 py-3 focus:border-indigo focus:outline-none" placeholder="Ihre Firma" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate mb-1.5">E-Mail *</label>
              <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full border-2 border-slate/10 rounded-xl px-4 py-3 focus:border-indigo focus:outline-none" placeholder="ihre@email.de" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate mb-1.5">Aktuelle Website-URL</label>
              <input type="url" value={form.website_url} onChange={(e) => setForm({ ...form, website_url: e.target.value })}
                className="w-full border-2 border-slate/10 rounded-xl px-4 py-3 focus:border-indigo focus:outline-none" placeholder="https://ihre-firma.de" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate mb-1.5">Anmerkungen</label>
              <textarea rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full border-2 border-slate/10 rounded-xl px-4 py-3 focus:border-indigo focus:outline-none resize-none"
                placeholder="Wünsche, Vorstellungen, Beispiele..." />
            </div>
            <button type="submit" disabled={status === "sending"}
              className="w-full bg-lime text-indigo-deep font-bold py-4 rounded-xl text-lg hover:bg-lime-light transition-all disabled:opacity-50">
              {status === "sending" ? "Wird gesendet..." : "Mockup anfordern →"}
            </button>
            {status === "error" && <p className="text-red-500 text-center text-sm">Fehler. Bitte versuchen Sie es erneut.</p>}
          </form>
        )}
      </section>
      <Footer />
    </main>
  );
}
