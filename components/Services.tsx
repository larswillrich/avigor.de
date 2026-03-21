"use client";

import AnimateOnScroll from "./AnimateOnScroll";

const services = [
  {
    title: "Strategy & Advisory",
    description:
      "We help leadership teams define where data and AI create the most value — and build the roadmap to get there. From maturity assessment to boardroom-ready business cases.",
    bullets: [
      "Data & AI maturity model assessment (5-level framework)",
      "AI readiness evaluation and business case modeling",
      "Use case identification, scoring, and prioritization",
      "Digital transformation roadmaps with agentic implementation paths",
      "Executive AI workshop facilitation",
      "ROI modeling and investment justification for AI initiatives",
      "Competitive landscape and benchmark analysis",
    ],
    technologies: ["Miro", "Notion", "Custom Assessment Frameworks"],
    agenticEdge:
      "AI agents accelerate competitive analysis, benchmark data collection, and scenario modeling — delivering in days what traditionally takes weeks.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28" stroke="currentColor" strokeWidth={1.5}>
        <path d="M14 4l10 6v8l-10 6L4 18V10l10-6z" />
        <path d="M14 4v20M4 10l10 6 10-6" />
      </svg>
    ),
    accent: "indigo",
  },
  {
    title: "Data & AI Governance",
    description:
      "Governance frameworks that are enforceable, not just documented. We design governance that scales with your data landscape, satisfies regulators, and runs itself through agentic automation.",
    bullets: [
      "Data governance framework design and implementation",
      "Data catalog implementation (Collibra, Atlan, DataHub)",
      "Automated data quality scoring and dashboards",
      "AI model governance and risk assessment frameworks",
      "EU AI Act compliance readiness assessment",
      "GDPR and DORA regulatory compliance",
      "Data ownership, stewardship, and operating models",
      "Metadata management and lineage tracking",
    ],
    technologies: ["Collibra", "Atlan", "Great Expectations", "Monte Carlo"],
    agenticEdge:
      "Agents continuously monitor data quality, flag policy violations, and auto-generate compliance reports — governance that runs itself.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28" stroke="currentColor" strokeWidth={1.5}>
        <path d="M14 4a10 10 0 100 20 10 10 0 000-20z" />
        <path d="M14 10v4l3 3" strokeLinecap="round" />
        <path d="M4 14h3M21 14h3M14 4v3M14 21v3" />
      </svg>
    ),
    accent: "lime",
  },
  {
    title: "Data Platform & Architecture",
    description:
      "Modern data platforms built on Data Mesh, lakehouse, and cloud-native principles. Designed for self-service and scale — not bottlenecks. From greenfield builds to legacy migrations.",
    bullets: [
      "Data Mesh design and domain-oriented implementation",
      "Cloud architecture on AWS, Azure, and GCP",
      "Data lakehouse and data product development",
      "Data product design and lifecycle management",
      "Real-time streaming architectures (Kafka, Kinesis)",
      "Integration patterns and ETL/ELT pipeline design",
      "Cost optimization and FinOps for data platforms",
      "Migration from legacy to modern stack",
    ],
    technologies: ["Databricks", "Snowflake", "dbt", "Terraform", "Kafka", "Spark"],
    agenticEdge:
      "Agents automate pipeline orchestration, schema evolution, anomaly detection, and infrastructure monitoring — your platform manages itself.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28" stroke="currentColor" strokeWidth={1.5}>
        <ellipse cx="14" cy="8" rx="10" ry="4" />
        <path d="M4 8v6c0 2.2 4.5 4 10 4s10-1.8 10-4V8" />
        <path d="M4 14v6c0 2.2 4.5 4 10 4s10-1.8 10-4v-6" />
      </svg>
    ),
    accent: "indigo",
  },
  {
    title: "AI & GenAI Implementation",
    description:
      "From proof of concept to production. We build AI solutions that work in the real world — including autonomous agentic systems. This is our core: we build the agents that power our own delivery model.",
    bullets: [
      "Custom AI agent development (tool-use, multi-agent orchestration)",
      "Enterprise knowledge base and RAG deployment",
      "GenAI application development and deployment",
      "AI-powered process automation",
      "Responsible AI evaluation and red-teaming",
      "LLM evaluation, fine-tuning, and prompt engineering",
      "ML model development and MLOps pipelines",
      "Agentic workflow design for complex business processes",
    ],
    technologies: ["LangChain", "Claude API", "OpenAI", "Hugging Face", "MLflow"],
    agenticEdge:
      "This is our core. We build the agents that power our own delivery model — and deploy them for you. Every engagement benefits from our production-tested agent framework.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28" stroke="currentColor" strokeWidth={1.5}>
        <path d="M14 4l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6l2-6z" />
      </svg>
    ),
    accent: "lime",
  },
  {
    title: "Training & Enablement",
    description:
      "Upskill your teams so they don't need consultants forever. Hands-on training in data literacy, AI tools, and agentic workflows — from 1-day workshops to multi-week bootcamps.",
    bullets: [
      "Executive AI literacy and strategy programs",
      "Technical GenAI and prompt engineering workshops",
      "Hands-on hackathon facilitation",
      "Prompt engineering certification programs",
      "Data governance and stewardship training",
      "Data literacy for non-technical teams",
      "Agentic workflow design masterclasses",
      "Custom LMS content creation with AI",
    ],
    technologies: ["Workshops (1-2 days)", "Bootcamps (1 week)", "Ongoing Coaching"],
    agenticEdge:
      "Training materials and assessments are generated and personalized by AI agents — no two programs are identical. Your team gets exactly the content they need.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28" stroke="currentColor" strokeWidth={1.5}>
        <path d="M4 20l10-6 10 6M4 14l10-6 10 6" />
        <path d="M14 14v10M24 14v6" strokeLinecap="round" />
      </svg>
    ),
    accent: "indigo",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-white py-24 md:py-32">
      <div className="absolute inset-0 dot-pattern" />
      <div className="relative max-w-6xl mx-auto px-6">
        <AnimateOnScroll>
          <div className="inline-flex items-center gap-2 bg-indigo/5 rounded-full px-4 py-1.5 mb-4">
            <span className="text-indigo font-semibold text-sm tracking-widest uppercase">
              What We Do
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 max-w-3xl text-slate">
            Five capabilities.{" "}
            <span className="bg-gradient-to-r from-indigo to-indigo-light bg-clip-text text-transparent">
              One agentic engine.
            </span>
          </h2>
          <p className="text-slate-light text-lg max-w-2xl mb-16">
            Every offering is powered by our agentic delivery model — AI agents
            handle the heavy lifting while our consultants provide the judgment.
          </p>
        </AnimateOnScroll>

        <div className="space-y-6">
          {services.map((service, i) => (
            <AnimateOnScroll key={i} delay={i * 0.08}>
              <div
                className={`group bg-white rounded-2xl border border-slate/5 overflow-hidden hover:shadow-xl hover:shadow-indigo/5 transition-all duration-300 hover:-translate-y-0.5 ${
                  service.accent === "lime"
                    ? "border-l-4 border-l-lime"
                    : "border-l-4 border-l-indigo"
                }`}
              >
                <div className="p-8 md:p-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                          service.accent === "lime"
                            ? "bg-lime/10 text-lime-dark group-hover:bg-lime group-hover:text-white"
                            : "bg-lavender text-indigo group-hover:bg-indigo group-hover:text-white"
                        }`}
                      >
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-slate">
                        {service.title}
                      </h3>
                    </div>
                    <span className="text-xs font-bold bg-slate/5 text-slate/30 px-3 py-1.5 rounded-full">
                      0{i + 1}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-slate-light leading-relaxed mb-6 max-w-3xl">
                    {service.description}
                  </p>

                  {/* Bullets in two columns */}
                  <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2.5 mb-6">
                    {service.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="text-sm text-slate-light/80 flex items-start gap-2.5"
                      >
                        <span
                          className={`mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full ${
                            service.accent === "lime" ? "bg-lime" : "bg-indigo"
                          }`}
                        />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.technologies.map((tech, j) => (
                      <span
                        key={j}
                        className="text-xs font-medium bg-slate/5 text-slate-light px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Agentic edge */}
                  <div
                    className={`rounded-xl px-5 py-4 ${
                      service.accent === "lime"
                        ? "bg-lime/5 border border-lime/10"
                        : "bg-indigo/5 border border-indigo/10"
                    }`}
                  >
                    <p className="text-sm">
                      <span
                        className={`font-semibold ${
                          service.accent === "lime"
                            ? "text-lime-dark"
                            : "text-indigo"
                        }`}
                      >
                        Agentic edge:
                      </span>{" "}
                      <span className="text-slate-light">
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
