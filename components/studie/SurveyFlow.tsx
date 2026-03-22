"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import ProgressBar from "./ProgressBar";
import QuestionCard from "./QuestionCard";
import OptInScreen from "./OptInScreen";
import { BRANCHEN, GENAI_OPTIONS, SENTIMENT_OPTIONS, KUNDENKANAL_OPTIONS, HERAUSFORDERUNG_OPTIONS, INVESTITION_OPTIONS } from "@/lib/constants";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://avigor.de/api";

const questions = [
  { key: "q1", question: "Branche?", options: BRANCHEN, type: "single" as const },
  { key: "q2", question: "Wie digital ist Ihr Unternehmen insgesamt?", options: [], type: "rating" as const },
  { key: "q3", question: "Nutzen Sie bereits GenAI-Tools (z.B. ChatGPT, Copilot)?", options: GENAI_OPTIONS, type: "single" as const },
  { key: "q4", question: "Empfinden Sie GenAI für Ihre Branche eher als…", options: SENTIMENT_OPTIONS, type: "single" as const },
  { key: "q5", question: "Wie gewinnen Sie hauptsächlich neue Kunden?", options: KUNDENKANAL_OPTIONS, type: "single" as const },
  { key: "q6", question: "Wie zufrieden sind Sie mit Ihrem Online-Auftritt?", options: [], type: "rating" as const },
  { key: "q7", question: "Größte Herausforderung bei der Digitalisierung?", options: HERAUSFORDERUNG_OPTIONS, type: "single" as const },
  { key: "q8", question: "Investieren Sie in den nächsten 12 Monaten in Ihren digitalen Auftritt?", options: INVESTITION_OPTIONS, type: "single" as const },
];

export default function SurveyFlow() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const totalQuestions = questions.length;
  const isOptIn = step === totalQuestions;
  const isSuccess = status === "success";

  const handleSelect = (value: string) => {
    const key = questions[step].key;
    setAnswers((prev) => ({ ...prev, [key]: value }));
    // Auto-advance after short delay
    setTimeout(() => setStep((s) => s + 1), 300);
  };

  const handleSubmit = async (email: string, websiteUrl: string) => {
    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch(`${API_URL}/survey`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...answers,
          email,
          website_url: websiteUrl || undefined,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Fehler beim Senden");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Bitte versuchen Sie es erneut.");
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 bg-lime/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-lime" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-slate mb-4">Fast geschafft!</h2>
          <p className="text-slate-light text-lg mb-2">
            Wir haben Ihnen eine Bestätigungs-E-Mail gesendet.
          </p>
          <p className="text-slate-light">
            Bitte klicken Sie auf den Link in der E-Mail, um Ihre Teilnahme zu bestätigen.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[60vh] flex flex-col justify-center px-6 py-12">
      <div className="mb-12">
        <ProgressBar current={step} total={totalQuestions} />
      </div>

      <AnimatePresence mode="wait">
        {isOptIn ? (
          <OptInScreen
            key="optin"
            onSubmit={handleSubmit}
            isSubmitting={status === "submitting"}
          />
        ) : (
          <QuestionCard
            key={step}
            question={questions[step].question}
            options={questions[step].options}
            selected={answers[questions[step].key] || ""}
            onSelect={handleSelect}
            type={questions[step].type}
          />
        )}
      </AnimatePresence>

      {status === "error" && (
        <p className="text-red-500 text-center mt-6">{errorMsg}</p>
      )}

      {/* Back button */}
      {step > 0 && !isSuccess && (
        <button
          onClick={() => setStep((s) => s - 1)}
          className="mx-auto mt-8 text-slate-light hover:text-indigo transition-colors text-sm"
        >
          ← Zurück
        </button>
      )}
    </div>
  );
}
