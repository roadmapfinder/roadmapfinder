// components/PromptProjects.jsx
import React from "react";

const projects = [
  // ---------- PHASE 1 — FOUNDATIONAL PROJECTS ----------
  {
    id: "phase1-prompt-lab",
    level: "Phase 1 — Beginner",
    title: "Interactive Prompt Testing Lab",
    description:
      "Build a web app using OpenAI API where users can test and compare prompts (zero-shot, few-shot, chain-of-thought). Include temperature & token sliders, and real-time output comparison.",
    url: "https://youtu.be/h-8BpGswhIM?si=LXdzDcqmNB_95zmj",
  },
  {
    id: "phase1-template-library",
    level: "Phase 1 — Beginner",
    title: "Prompt Template Library",
    description:
      "Design a personal library of prompt templates (content creation, summarization, translation, idea generation). Add categories, metadata, and copy-to-clipboard UX.",
    url: "https://youtu.be/Zv_tUYPG2NA?si=-vg4w3LEijo8jSKp",
  },

  // ---------- PHASE 2 — INTERMEDIATE PROJECTS ----------
  {
    id: "phase2-rag-chatbot",
    level: "Phase 2 — Intermediate",
    title: "Retrieval-Augmented Chatbot",
    description:
      "Create a chatbot that uses LangChain and OpenAI to retrieve context from PDFs or web docs before answering. Learn embeddings, Pinecone/ChromaDB integration, and context injection.",
    url: "https://youtu.be/N_OOfkEWcOk?si=m2TyqN6Qo8rThmqN",
  },
  {
    id: "phase2-agent-assistant",
    level: "Phase 2 — Intermediate",
    title: "Multi-Agent AI Assistant",
    description:
      "Build a system with multiple LLM agents (Researcher, Writer, Reviewer) using the ReAct or AutoGPT approach. Each agent performs specialized reasoning to complete a shared goal.",
    url: "Multi-Agent AI Assistant",
  },
  {
    id: "phase2-prompt-evaluator",
    level: "Phase 2 — Intermediate",
    title: "Prompt Evaluator Dashboard",
    description:
      "Develop a dashboard that tests multiple prompt variants, logs outputs, and ranks them via GPT-based scoring. Integrate evaluation metrics like BLEU or GPT Eval.",
    url: "https://youtu.be/2E8iTvGo9Hs?si=VsJc5qCqiNAZcrvZ",
  },

  // ---------- PHASE 3 — ADVANCED PROJECTS ----------
  {
    id: "phase3-ai-workflow-builder",
    level: "Phase 3 — Advanced",
    title: "AI Workflow Builder (Prompt Chaining App)",
    description:
      "Build a drag-and-drop visual interface for creating chained prompts. Each node represents a reasoning step (Summarize → Analyze → Generate). Store flows in JSON and execute dynamically.",
    url: "https://youtu.be/DL6cGf7ZTlE?si=nttQ1hEtcLcw4FLu",
  },
  {
    id: "phase3-domain-copilot",
    level: "Phase 3 — Advanced",
    title: "Domain-Specific Copilot",
    description:
      "Develop a specialized assistant (e.g., Legal, Marketing, Data Science Copilot) using tuned prompts, context injection, and persona design. Add voice input and document upload support.",
    url: "https://youtu.be/3fkUbes1D8E?si=uWoU4ZNEXviuNSQs",
  },
  {
    id: "phase3-autonomous-agent-system",
    level: "Phase 3 — Advanced",
    title: "Autonomous Task Agent System",
    description:
      "Implement a self-directed AI agent that plans, executes, and reviews tasks using memory and tool use. Use CrewAI or LangGraph for multi-agent orchestration.",
    url: "https://youtu.be/OZ_NgoFDiHI?si=31S1Y4GZu3U2DVTV",
  },

  // ---------- PHASE 4 — CAPSTONE ----------
  {
    id: "phase4-promptops-saas",
    level: "Phase 4 — Capstone",
    title: "PromptOps SaaS Platform",
    description:
      "Create a SaaS product that manages, versions, tests, and deploys prompts across teams. Include user auth, analytics, A/B testing, and cost tracking via OpenAI usage API.",
    url: "https://youtu.be/aNGJfR7EubA?si=yQH2NAnTyS08wDrv",
  },
];

export default function PromptProjects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            🧠 Prompt Engineering Project Roadmap
          </h2>
          <p className="mt-2 text-gray-600">
            Hands-on projects to become industry-ready in Prompt Engineering. Build, test, and deploy real-world AI/LLM applications.
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
                Explore Project ▶
              </a>
            </article>
          ))}
        </div>

        <footer className="mt-10 text-sm text-gray-500 text-center">
          Follow the roadmap to implement each project step-by-step and showcase your expertise in Prompt Engineering.
        </footer>
      </div>
    </section>
  );
}
