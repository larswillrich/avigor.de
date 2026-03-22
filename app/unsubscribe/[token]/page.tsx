import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Abgemeldet — AVIGOR",
};

export default function UnsubscribePage({
  searchParams,
}: {
  searchParams: { done?: string };
}) {
  const isDone = searchParams.done === "true";

  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <section className="pt-32 pb-24 px-6 max-w-md mx-auto text-center">
        {isDone ? (
          <>
            <div className="w-16 h-16 bg-slate/5 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-slate-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-slate mb-4">Erfolgreich abgemeldet</h1>
            <p className="text-slate-light">
              Sie erhalten keine weiteren E-Mails von uns zu diesem Thema. Schade, dass Sie gehen!
            </p>
            <a href="/" className="inline-block mt-8 text-indigo font-medium hover:underline">
              ← Zurück zu avigor.de
            </a>
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold text-slate mb-4">Abmeldung</h1>
            <p className="text-slate-light">
              Sie werden abgemeldet...
            </p>
          </>
        )}
      </section>
      <Footer />
    </main>
  );
}
