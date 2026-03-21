import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AVIGOR — Agentic-Driven Data & AI Consulting",
  description:
    "Berlin-based Data & AI consultancy that replaces expensive consultant teams with agentic solutions. You pay for value delivered — not headcount.",
  openGraph: {
    title: "AVIGOR — We deploy agents, not armies.",
    description:
      "Data & AI consulting powered by agentic solutions. Pay for value, not FTEs.",
    url: "https://avigor.de",
    siteName: "AVIGOR",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
