"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface OptInScreenProps {
  onSubmit: (email: string, websiteUrl: string) => void;
  isSubmitting: boolean;
}

export default function OptInScreen({ onSubmit, isSubmitting }: OptInScreenProps) {
  const [email, setEmail] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [consent, setConsent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent || !email) return;
    onSubmit(email, websiteUrl);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center max-w-lg mx-auto"
    >
      <div className="w-16 h-16 bg-lime/20 rounded-full flex items-center justify-center mx-auto mb-6">
        <span className="text-3xl">🎉</span>
      </div>
      <h2 className="text-3xl font-bold text-slate mb-3">Geschafft! Vielen Dank.</h2>
      <p className="text-slate-light mb-8">Sie erhalten exklusiv:</p>

      <div className="grid gap-3 mb-8 text-left">
        {[
          { icon: "🏆", text: "Den Studienbericht" },
          { icon: "📊", text: "Ihren Branchenvergleich" },
          { icon: "🔍", text: "Einen Digital-Quick-Check Ihrer Website" },
        ].map((item) => (
          <div key={item.text} className="flex items-center gap-3 bg-lavender rounded-xl px-5 py-3">
            <span className="text-xl">{item.icon}</span>
            <span className="text-slate font-medium">{item.text}</span>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 text-left">
        <div>
          <label className="block text-sm font-medium text-slate mb-1.5">
            E-Mail <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border-2 border-slate/10 rounded-xl px-4 py-3 text-slate focus:border-indigo focus:outline-none"
            placeholder="ihre@email.de"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate mb-1.5">
            Website-URL <span className="text-slate-light">(optional)</span>
          </label>
          <input
            type="url"
            value={websiteUrl}
            onChange={(e) => setWebsiteUrl(e.target.value)}
            className="w-full border-2 border-slate/10 rounded-xl px-4 py-3 text-slate focus:border-indigo focus:outline-none"
            placeholder="https://ihre-firma.de"
          />
        </div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="mt-1 w-5 h-5 rounded border-slate/20 text-indigo focus:ring-indigo"
          />
          <span className="text-sm text-slate-light">
            Ja, ich möchte die Ergebnisse per E-Mail erhalten. Abmeldung jederzeit möglich.
          </span>
        </label>
        <button
          type="submit"
          disabled={!consent || !email || isSubmitting}
          className="w-full bg-indigo text-white font-bold py-4 rounded-xl text-lg hover:bg-indigo-light transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Wird gesendet..." : "→ Ergebnisse anfordern"}
        </button>
      </form>
    </motion.div>
  );
}
