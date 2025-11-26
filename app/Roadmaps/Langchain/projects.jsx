// components/LangchainProjects.jsx
"use client"
import React from "react";

const projects = [
  // Phase 1 — Beginner
  {
    id: "phase1-rag-basic",
    level: "Phase 1 — Beginner",
    title: "Beginner RAG Question-Answering System",
    description:
      "Build a simple Retrieval-Augmented Generation app using PDFs/text files. Learn loaders, embeddings, vector stores, and basic retrieval.",
    url: "https://youtu.be/7Ixt9y-TAIc?si=T-jYIemXPSjVnD4Q", // replace with repo or tutorial
  },
  {
    id: "phase1-llm-chatbot",
    level: "Phase 1 — Beginner",
    title: "LLM Chatbot with Memory",
    description:
      "Create a simple chatbot with conversation memory. Learn prompts, chains, and basic state management.",
    url: "https://youtu.be/jw67V_gBzR0?si=RXwaYT9GXzK7s4OF",
  },

  // Phase 2 — Intermediate
  {
    id: "phase2-sql-agent",
    level: "Phase 2 — Intermediate",
    title: "AI SQL Data Analyst",
    description:
      "Connect an LLM to a real database and generate insights using natural language → SQL queries. Learn agents, tools, SQL chains, and validation.",
    url: "https://docs.langchain.com/docs/integrations/tools/sql/",
  },
  {
    id: "phase2-api-automation",
    level: "Phase 2 — Intermediate",
    title: "API Automation AI Worker",
    description:
      "Build an event-driven automation system using LangChain tools and webhooks. Learn tool calling, REST APIs, and workflow chaining.",
    url: "https://youtu.be/E4l91XKQSgw?si=5QLiZY2LcQrIuBAQ",
  },

  // Phase 3 — Advanced / Industry-Ready
  {
    id: "phase3-multi-agent-langgraph",
    level: "Phase 3 — Advanced",
    title: "Multi-Agent Workflow using LangGraph",
    description:
      "Create a multi-agent system with defined states, transitions, and memory. Learn LangGraph, async workflows, and advanced orchestration.",
    url: "https://youtu.be/gqvFmK7LpDo?si=RMG4Y2HFNn0U5_Y3",
  },
  {
    id: "phase3-rag-enterprise",
    level: "Phase 3 — Advanced",
    title: "Enterprise-Grade RAG Pipeline (RAG 2.0)",
    description:
      "Build a production-level RAG system with contextual compression, hybrid search, LangSmith evaluation, and scalable vector DB architecture.",
    url: "https://youtu.be/o126p1QN_RI?si=pbQ3JFsFQdebZKKo",
  },
];

export default function LangchainProjects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            ⚡ LangChain Project Roadmap
          </h2>
          <p className="mt-2 text-gray-600">
            Step from beginner to industry-ready projects. Build, deploy, and strengthen your AI engineering portfolio.
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
          Follow the sequence, master real-world workflows, and build a portfolio that showcases true AI engineering skills.
        </footer>
      </div>
    </section>
  );
}