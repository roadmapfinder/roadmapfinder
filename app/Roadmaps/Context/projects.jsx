"use client"

// components/Projects.jsx
import React from "react";

const projects = [
  {
    id: "phase1-mini-rag",
    level: "Phase 1 — Beginner",
    title: "Mini RAG System (Local Vector Search)",
    description:
      "Build your first retrieval-augmented generation project using FAISS, embeddings, and a simple context template. Learn chunking, semantic search, and context injection.",
    url: "https://youtu.be/sVcwVQRHIc8?si=CeDHu2wZPeK0Nkyq"
  },
  {
    id: "phase1-context-builder",
    level: "Phase 1 — Beginner",
    title: "Context Builder + Summarizer Pipeline",
    description:
      "Create a tool that takes PDFs or articles, chunks them, summarizes each chunk, and stores them for retrieval. Learn preprocessing and hierarchical summarization.",
    url: "https://youtu.be/Y6UsgLmU4UM?si=8jYW8zbPPrSVA_Ix"
  },
  {
    id: "phase2-production-rag",
    level: "Phase 2 — Intermediate",
    title: "Production RAG API (Node.js/Next.js Backend)",
    description:
      "Build ingestion, search, and answer APIs. Use Pinecone/Qdrant as vector DB, implement metadata filters, logging, and retrieval pipelines like a real production system.",
    url: "https://youtu.be/AUQJ9eeP-Ls?si=dDr7hhWQKpivoG6z"
  },
  {
    id: "phase2-reranked-rag",
    level: "Phase 2 — Intermediate",
    title: "Reranked RAG with Context Optimizer",
    description:
      "Add a second-pass re-ranking model (Cohere, bge-reranker, or OpenAI ReRank). Implement deduplication, compression, and relevance scoring to improve output accuracy.",
    url: "https://youtu.be/tmiBae2goJM?si=uzVqluRflc1z2v5m"
  },
  {
    id: "phase3-agent-rag",
    level: "Phase 3 — Advanced",
    title: "Agentic RAG (Tools + Retrieval + Reasoning)",
    description:
      "Build an AI agent that routes queries: tool use for live data, RAG for documents, reasoning for multi-step questions. Uses LangGraph or LangChain Agents.",
    url: "https://youtu.be/PeTmOidqHM8?si=iFmRCCmn-E72OeSO"
  },
  {
    id: "phase4-enterprise-rag",
    level: "Phase 4 — Expert",
    title: "Enterprise RAG System with Security & LLMOps",
    description:
      "Implement user-specific namespaces, PII redaction, audit logs, automated evaluation (hallucination score, retrieval accuracy), and performance dashboards.",
    url: "https://youtu.be/rqU2pPGK6jM?si=EGOb-iHVMb0jbiMR"
  }
];

export default function Projects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            🧠 Context Engineering Project Roadmap
          </h2>
          <p className="mt-2 text-gray-600">
            Master context engineering from beginner to expert with real, production-grade projects.
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
                Learn More ▶
              </a>
            </article>
          ))}
        </div>

        <footer className="mt-10 text-sm text-gray-500 text-center">
          Follow the sequence, build each project fully, write case studies, and you will become a production-ready Context Engineer.
        </footer>
      </div>
    </section>
  );
}