import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "AVIGOR — Agentic-Driven Data & AI Consulting | Berlin",
    template: "%s | AVIGOR",
  },
  description:
    "Berlin-based Data & AI consultancy that replaces expensive consultant teams with agentic AI solutions. Strategy, Governance, Data Platforms, GenAI — pay for value delivered, not headcount. Founded by Lars, Sven & Ralph Willrich.",
  metadataBase: new URL("https://avigor.de"),
  alternates: {
    canonical: "https://avigor.de",
  },
  keywords: [
    "AI consulting",
    "agentic AI",
    "data consulting",
    "AI agents",
    "data strategy",
    "data governance",
    "GenAI consulting",
    "AI implementation",
    "data platform",
    "data mesh",
    "AI advisory",
    "Berlin AI consulting",
    "data architecture",
    "machine learning consulting",
    "RAG implementation",
    "enterprise AI",
    "AI transformation",
    "Willrich",
    "AVIGOR",
  ],
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "AVIGOR — We deploy agents, not armies.",
    description:
      "Data & AI consulting powered by agentic solutions. Strategy, Governance, Platforms, GenAI — pay for value, not FTEs. Founded by three brothers with 30+ years combined experience.",
    url: "https://avigor.de",
    siteName: "AVIGOR",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AVIGOR — We deploy agents, not armies.",
    description:
      "Data & AI consulting powered by agentic solutions. Pay for value, not FTEs.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add Google Search Console verification when available
    // google: "your-verification-code",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://avigor.de/#organization",
      name: "AVIGOR",
      legalName: "AVIGOR UG (haftungsbeschränkt)",
      url: "https://avigor.de",
      logo: "https://avigor.de/logo.svg",
      description:
        "Agentic-driven Data & AI consultancy. We deploy AI agents instead of large consultant teams — delivering strategy, governance, and implementation at a fraction of the cost.",
      foundingDate: "2024",
      founders: [
        {
          "@type": "Person",
          name: "Lars Willrich",
          jobTitle: "Co-Founder & Principal Consultant — Data & AI",
          url: "https://larswillrich.com",
          alumniOf: [
            { "@type": "Organization", name: "Capgemini" },
            { "@type": "Organization", name: "Deloitte" },
            { "@type": "Organization", name: "Capco" },
          ],
          knowsAbout: [
            "Data & AI Strategy",
            "Cloud Architecture",
            "AI Agents",
            "Data Mesh",
          ],
        },
        {
          "@type": "Person",
          name: "Dr. Sven-Erik Willrich",
          jobTitle: "Co-Founder & Principal Consultant — Data Strategy",
          alumniOf: [
            { "@type": "Organization", name: "Accenture" },
            { "@type": "Organization", name: "MHP — A Porsche Company" },
            {
              "@type": "EducationalOrganization",
              name: "Karlsruhe Institute of Technology",
            },
          ],
          knowsAbout: [
            "Data Strategy",
            "Data Governance",
            "Business Information Systems",
          ],
        },
        {
          "@type": "Person",
          name: "Ralph Willrich",
          jobTitle: "Co-Founder & Research Engineer",
          affiliation: {
            "@type": "EducationalOrganization",
            name: "TH Köln",
          },
          knowsAbout: [
            "Information Retrieval",
            "RAG Architecture",
            "Search Systems",
          ],
        },
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "Goeckestr. 32A",
        postalCode: "13055",
        addressLocality: "Berlin",
        addressCountry: "DE",
      },
      contactPoint: {
        "@type": "ContactPoint",
        email: "hello@avigor.de",
        contactType: "sales",
        availableLanguage: ["English", "German"],
      },
      areaServed: ["DE", "CH", "AT", "EU"],
      knowsAbout: [
        "Artificial Intelligence",
        "Data Strategy",
        "Data Governance",
        "Data Architecture",
        "GenAI",
        "AI Agents",
        "Machine Learning",
        "Data Mesh",
        "Cloud Architecture",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://avigor.de/#service",
      name: "AVIGOR — Agentic-Driven Consulting",
      url: "https://avigor.de",
      provider: { "@id": "https://avigor.de/#organization" },
      serviceType: "Data & AI Consulting",
      description:
        "End-to-end Data & AI consulting: Strategy & Advisory, Data Governance, Data Platform Architecture, AI & GenAI Implementation, and Training & Enablement — all powered by agentic AI delivery.",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Consulting Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Strategy & Advisory",
              description:
                "Data & AI maturity assessment, AI readiness evaluation, use case prioritization, and digital transformation roadmaps.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Data & AI Governance",
              description:
                "Governance frameworks, data catalog implementation, automated data quality, EU AI Act and GDPR compliance.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Data Platform & Architecture",
              description:
                "Data Mesh, lakehouse, cloud-native architecture on AWS/Azure/GCP, real-time streaming, and legacy migrations.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI & GenAI Implementation",
              description:
                "Custom AI agent development, RAG deployment, GenAI applications, MLOps pipelines, and agentic workflow design.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Training & Enablement",
              description:
                "Executive AI literacy programs, prompt engineering workshops, hackathons, and data governance training.",
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://avigor.de/#website",
      url: "https://avigor.de",
      name: "AVIGOR",
      publisher: { "@id": "https://avigor.de/#organization" },
      inLanguage: "en-US",
    },
    {
      "@type": "WebPage",
      "@id": "https://avigor.de/#webpage",
      url: "https://avigor.de",
      name: "AVIGOR — Agentic-Driven Data & AI Consulting",
      isPartOf: { "@id": "https://avigor.de/#website" },
      about: { "@id": "https://avigor.de/#organization" },
      description:
        "Berlin-based Data & AI consultancy replacing expensive consultant teams with agentic AI solutions.",
      inLanguage: "en-US",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="afterInteractive"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
