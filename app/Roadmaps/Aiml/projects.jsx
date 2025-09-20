// components/Projects.jsx
import React from "react";

const projects = [
  {
    id: "phase1-ai-miniapps",
    level: "Phase 1 — Beginner",
    title: "3 Python AI Mini-Apps",
    description:
      "Build beginner-friendly Python AI apps: image classifier, resume critique tool, and a simple AI agent. Great way to start hands-on with ML.",
    url: "https://www.youtube.com/watch?v=XZdY15sHUa8" // Tech With Tim
  },
  {
    id: "phase2-ml-pipeline",
    level: "Phase 2 — Intermediate",
    title: "End-to-End ML Pipeline (Hindi)",
    description:
      "Complete machine learning project in Hindi: data preprocessing, feature engineering, model training, and evaluation.",
    url: "https://www.youtube.com/watch?v=iIkJrwVUl1c"
  },
  {
    id: "phase3-dl-nlp",
    level: "Phase 3 — Intermediate",
    title: "Deep Learning & NLP Models",
    description:
      "Implement CNNs, RNNs, LSTMs, and intro to transformers. Covers computer vision and natural language processing fundamentals.",
    url: "https://www.youtube.com/watch?v=N8svLoC2eNA" // edureka AI & ML full course
  },
  {
    id: "phase4-ai-agents",
    level: "Phase 4 — Advanced",
    title: "Generative AI Agents & Pipelines",
    description:
      "Hands-on projects with LangChain, RAG systems, multimodal AI, and agentic workflows using LLaMA & Hugging Face.",
    url: "https://www.youtube.com/watch?v=kWPqRaF5erQ" // Simplilearn AI Agents
  },
  {
    id: "phase5-genai-projects",
    level: "Phase 5 — Advanced",
    title: "Full Generative AI Projects",
    description:
      "End-to-end GenAI applications: image generation, chatbot development, LLM fine-tuning, and evaluation workflows.",
    url: "https://www.youtube.com/watch?v=veqPPfBGtmA" // Simplilearn GenAI full course
  }
];

export default function Projects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            🤖 AI/ML Project Roadmap
          </h2>
          <p className="mt-2 text-gray-600">
            Step through beginner to advanced AI/ML projects, with Hindi & English tutorials (latest 2025).
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.id}
              className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform"
              aria-labelledby={`${p.id}-title`}
            >
              <span className="inline-block text-xs font-medium bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full">
                {p.level}
              </span>
              <h3
                id={`${p.id}-title`}
                className="mt-4 text-lg font-semibold text-gray-900 group-hover:text-indigo-600"
              >
                {p.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">{p.description}</p>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-indigo-600 font-medium hover:underline"
              >
                Watch Tutorial ▶
              </a>
            </article>
          ))}
        </div>

        <footer className="mt-10 text-sm text-gray-500 text-center">
          Follow the sequence, code along, customize, and deploy projects. 
          Document them well and polish top 2–3 into portfolio-ready case studies.
        </footer>
      </div>
    </section>
  );
}
