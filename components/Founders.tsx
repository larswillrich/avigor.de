"use client";

import AnimateOnScroll from "./AnimateOnScroll";

const founders = [
  {
    name: "Lars Willrich",
    title: "Co-Founder & Principal Consultant — Data & AI",
    initials: "LW",
    bio: "Over 10 years of hands-on Data & AI consulting across Capgemini, Deloitte, Capco, and Senacor. Lars has led multimillion-dollar data platform initiatives, built AI accelerators for global banking institutions, and designed cloud-native architectures across AWS and Azure.",
    credentials: [
      "MBA & MSc Computer Science",
      "Co-author, Your GenAI Starter Guide (2024)",
      "Data Mesh, AI Accelerators, Cloud Architecture",
    ],
    location: "Zurich, Switzerland",
  },
  {
    name: "Dr. Sven-Erik Willrich",
    title: "Co-Founder & Principal Consultant — Data Strategy",
    initials: "SW",
    bio: "14+ years in data strategy and governance across Accenture, MHP — A Porsche Company, PowerCo, and valantic. PhD from KIT in Business Information Systems. Lecturer on Data Management at HTW Berlin. Bridges academic rigor with enterprise-scale execution.",
    credentials: [
      "PhD, Karlsruhe Institute of Technology",
      "Author, Data-Driven Company (Springer, 2025)",
      "Upcoming: Democratizing Analytics (Apress, 2026)",
    ],
    location: "Berlin, Germany",
  },
  {
    name: "Ralph Willrich",
    title: "Co-Founder & Research Engineer",
    initials: "RW",
    bio: "Ralph brings a research-first perspective to Avigor's technical foundation. Working at TH Köln's Information Retrieval research group, he operates at the intersection of search systems, information extraction, and applied AI — ensuring Avigor's technology stays ahead of the curve.",
    credentials: [
      "TH Köln, Information Retrieval Research",
      "Search Systems & Information Extraction",
      "RAG Architecture & Knowledge Systems",
    ],
    location: "Cologne, Germany",
  },
];

export default function Founders() {
  return (
    <section id="team" className="bg-charcoal py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <AnimateOnScroll>
          <p className="text-amber-brand font-semibold text-sm tracking-widest uppercase mb-4">
            The Team
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 max-w-3xl">
            Built by practitioners, not theorists.
          </h2>
          <p className="text-ivory/40 text-lg italic mb-16">
            Three brothers. One shared conviction: consulting should deliver
            value, not invoices.
          </p>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-8">
          {founders.map((founder, i) => (
            <AnimateOnScroll key={i} delay={i * 0.12}>
              <div className="bg-ivory/5 rounded-xl border border-ivory/10 p-8 hover:border-amber-brand/30 transition-colors h-full flex flex-col">
                {/* Avatar placeholder */}
                <div className="w-16 h-16 rounded-full bg-amber-brand/20 flex items-center justify-center mb-6">
                  <span className="text-amber-brand font-bold text-lg">
                    {founder.initials}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-1">{founder.name}</h3>
                <p className="text-amber-brand text-sm font-medium mb-4">
                  {founder.title}
                </p>
                <p className="text-ivory/50 text-sm leading-relaxed mb-6 flex-grow">
                  {founder.bio}
                </p>

                <ul className="space-y-2 mb-4">
                  {founder.credentials.map((cred, j) => (
                    <li
                      key={j}
                      className="text-xs text-ivory/40 flex items-start gap-2"
                    >
                      <span className="text-amber-brand mt-0.5">&#x25AA;</span>
                      {cred}
                    </li>
                  ))}
                </ul>

                <p className="text-xs text-ivory/30 mt-auto pt-4 border-t border-ivory/5">
                  {founder.location}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
