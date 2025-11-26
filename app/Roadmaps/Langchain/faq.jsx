// components/FAQ.jsx
"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    q: "What is LangChain and why is it used?",
    a: "LangChain is a framework for building applications powered by LLMs using tools, memory, agents, and retrieval systems. It helps developers quickly build production-grade AI apps like chatbots, RAG systems, and agents.",
  },
  {
    q: "Do I need Python or JavaScript to learn LangChain?",
    a: "Yes. LangChain provides full SDKs for both Python and JavaScript. You should know one language well before building complex AI workflows.",
  },
  {
    q: "Is LangChain good for production apps?",
    a: "Yes. When combined with LangGraph and LangSmith, LangChain is production-ready and used by companies for agents, pipelines, observability, and evaluation.",
  },
  {
    q: "What projects should I build to master LangChain?",
    a: "RAG pipeline, multi-tool agent, web scraper agent, PDF chatbot, document ingestion pipeline, and an AI automation workflow.",
  },
  {
    q: "Does LangChain support RAG?",
    a: "LangChain is one of the most popular frameworks for building RAG systems. It supports embeddings, vector stores, retrievers, rerankers, and full pipelines.",
  },
  {
    q: "Do I need LangSmith?",
    a: "If you want to debug, evaluate, or optimize LLM applications, LangSmith provides observability, tracing, dataset eval, and versioning — essential for industry apps.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-6">
        <header className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">❓ Frequently Asked Questions</h2>
          <p className="mt-3 text-gray-600">Clear answers to common questions every LangChain learner has.</p>
        </header>

        <div className="space-y-4">
          {faqs.map((item, index) => (
            <article
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center text-left"
              >
                <span className="text-lg font-medium text-gray-900">{item.q}</span>
                {open === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                )}
              </button>

              {open === index && (
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">{item.a}</p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}