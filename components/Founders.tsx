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
    <section id="team" className="relative bg-lavender py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <AnimateOnScroll>
          <div className="inline-flex items-center gap-2 bg-indigo/5 rounded-full px-4 py-1.5 mb-4">
            <span className="text-indigo font-semibold text-sm tracking-widest uppercase">
              The Team
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 max-w-3xl text-slate">
            Built by practitioners,{" "}
            <span className="bg-gradient-to-r from-indigo to-indigo-light bg-clip-text text-transparent">
              not theorists.
            </span>
          </h2>
          <p className="text-slate-light text-lg italic mb-16">
            Three brothers. One shared conviction: consulting should deliver
            value, not invoices.
          </p>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-6">
          {founders.map((founder, i) => (
            <AnimateOnScroll key={i} delay={i * 0.12}>
              <div className="bg-white rounded-2xl border border-slate/5 p-8 hover:shadow-xl hover:shadow-indigo/5 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                {/* Avatar */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo to-indigo-light flex items-center justify-center mb-6">
                  <span className="text-white font-bold text-lg">
                    {founder.initials}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-1 text-slate">
                  {founder.name}
                </h3>
                <p className="text-indigo text-sm font-medium mb-4">
                  {founder.title}
                </p>
                <p className="text-slate-light text-sm leading-relaxed mb-6 flex-grow">
                  {founder.bio}
                </p>

                <ul className="space-y-2 mb-4">
                  {founder.credentials.map((cred, j) => (
                    <li
                      key={j}
                      className="text-xs text-slate-light/70 flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-lime rounded-full mt-1 shrink-0" />
                      {cred}
                    </li>
                  ))}
                </ul>

                <p className="text-xs text-slate-light/40 mt-auto pt-4 border-t border-slate/5 flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth={1.5}>
                    <path d="M8 2a5 5 0 00-5 5c0 4 5 7 5 7s5-3 5-7a5 5 0 00-5-5z" />
                    <circle cx="8" cy="7" r="1.5" />
                  </svg>
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
