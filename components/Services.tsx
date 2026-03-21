"use client";

import AnimateOnScroll from "./AnimateOnScroll";

const services = [
  {
    title: "Strategy & Advisory",
    description:
      "Data strategy, AI strategy, and digital transformation roadmaps. We help leadership teams define where data and AI create the most value — and build the plan to get there.",
    bullets: [
      "Data strategy development and maturity assessments",
      "AI readiness evaluation and business case modeling",
      "Digital transformation roadmaps with agentic implementation paths",
      "Competitive landscape and benchmark analysis",
    ],
    agenticEdge:
      "AI agents accelerate competitive analysis, benchmark data collection, and scenario modeling — delivering in days what traditionally takes weeks.",
    color: "amber-brand",
  },
  {
    title: "Data & AI Governance",
    description:
      "Governance frameworks that are enforceable, not just documented. We design governance that scales with your data landscape and satisfies regulators.",
    bullets: [
      "Data governance framework design and implementation",
      "Data quality management and monitoring",
      "Metadata management and data cataloging",
      "Regulatory compliance — EU AI Act, GDPR, DORA",
      "Data ownership and stewardship models",
    ],
    agenticEdge:
      "Agents continuously monitor data quality, flag policy violations, and auto-generate compliance reports — governance that runs itself.",
    color: "teal-brand",
  },
  {
    title: "Data Platform & Architecture",
    description:
      "Modern data platforms built on Data Mesh, lakehouse, and cloud-native principles. Designed for self-service, not bottlenecks.",
    bullets: [
      "Data Mesh design and implementation",
      "Cloud architecture on AWS, Azure, and GCP",
      "Data lakehouse and data product development",
      "Integration patterns and ETL/ELT pipeline design",
      "Event-driven and streaming architectures",
    ],
    agenticEdge:
      "Agents automate pipeline orchestration, schema evolution, anomaly detection, and infrastructure monitoring.",
    color: "copper",
  },
  {
    title: "AI & GenAI Implementation",
    description:
      "From proof of concept to production. We build AI solutions that work in the real world — including agentic systems that operate autonomously.",
    bullets: [
      "GenAI application development and deployment",
      "Agentic workflow design — multi-agent systems",
      "RAG systems and knowledge retrieval",
      "LLM evaluation, fine-tuning, and prompt engineering",
      "ML model development and MLOps",
    ],
    agenticEdge:
      "This is our core. We build the agents that power our own delivery model — and deploy them for you.",
    color: "amber-brand",
  },
  {
    title: "Training & Enablement",
    description:
      "Upskill your teams so they don't need consultants forever. Hands-on training in data literacy, AI tools, and agentic workflows.",
    bullets: [
      "Executive AI literacy programs",
      "Technical GenAI and prompt engineering workshops",
      "Data governance and stewardship training",
      "Agentic workflow design masterclasses",
      "Custom curriculum for your organization",
    ],
    agenticEdge:
      "Training materials and assessments are generated and personalized by AI agents — no two programs are identical.",
    color: "teal-brand",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-ivory text-charcoal py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <AnimateOnScroll>
          <p className="text-amber-brand font-semibold text-sm tracking-widest uppercase mb-4">
            What We Do
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 max-w-3xl">
            Five capabilities. One agentic engine.
          </h2>
        </AnimateOnScroll>

        <div className="space-y-8">
          {services.map((service, i) => (
            <AnimateOnScroll key={i} delay={i * 0.08}>
              <div className="bg-white rounded-xl border border-charcoal/5 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-8 md:p-10">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                    <span className="text-xs font-semibold bg-charcoal/5 text-charcoal/40 px-3 py-1 rounded-full">
                      0{i + 1}
                    </span>
                  </div>
                  <p className="text-charcoal/60 leading-relaxed mb-6 max-w-3xl">
                    {service.description}
                  </p>
                  <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2 mb-6">
                    {service.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="text-sm text-charcoal/50 flex items-start gap-2"
                      >
                        <span className="text-amber-brand mt-1 shrink-0">
                          &#x2022;
                        </span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <div className="bg-amber-brand/5 border border-amber-brand/10 rounded-lg px-5 py-3">
                    <p className="text-sm">
                      <span className="font-semibold text-amber-brand">
                        Agentic edge:
                      </span>{" "}
                      <span className="text-charcoal/60">
                        {service.agenticEdge}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
