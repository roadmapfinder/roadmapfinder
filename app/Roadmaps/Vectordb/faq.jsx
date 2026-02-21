"use client";
// components/FAQ.jsx
import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What is a Vector Database and why should I learn it?",
    answer:
      "A vector database stores and searches high-dimensional embeddings efficiently. It powers modern AI use cases like semantic search, recommendation systems, image search, and Retrieval-Augmented Generation (RAG). Learning vector databases is essential for building scalable, production-ready AI applications.",
  },
  {
    question: "Do I need strong math skills to work with vector databases?",
    answer:
      "You need basic understanding of vectors, cosine similarity, and distance metrics. Deep math is not required initially. Most production systems rely on libraries and databases that abstract complex math, while engineers focus on architecture and performance tuning.",
  },
  {
    question: "Which programming language is best for vector databases?",
    answer:
      "Python is the most common and recommended language because of its strong ecosystem for embeddings, ML models, and vector databases. For performance-critical systems, familiarity with Go or Rust is a plus but not mandatory.",
  },
  {
    question: "What should I learn first: embeddings or vector databases?",
    answer:
      "Start with embeddings. Understand how text, images, or data are converted into vectors. Once that is clear, learning vector databases becomes much easier because you know what kind of data they store and retrieve.",
  },
  {
    question: "Are vector databases only useful with LLMs?",
    answer:
      "No. Vector databases existed before LLMs and are used in recommendation systems, anomaly detection, image similarity, and clustering. LLMs made them more popular due to RAG and semantic search use cases.",
  },
  {
    question: "How many projects are enough to be job-ready?",
    answer:
      "Building 5–6 solid projects covering semantic search, RAG, recommendations, hybrid search, and production deployment is usually enough to demonstrate industry readiness for vector database or AI infrastructure roles.",
  },
  {
    question: "What is the difference between FAISS and a vector database?",
    answer:
      "FAISS is a similarity search library, not a full database. Vector databases add persistence, metadata filtering, APIs, scaling, replication, and security on top of similarity search engines like FAISS or HNSW.",
  },
  {
    question: "Can I use PostgreSQL instead of a vector database?",
    answer:
      "Yes, using pgvector with PostgreSQL is great for small to medium workloads. For large-scale, low-latency, or distributed workloads, dedicated vector databases are usually a better choice.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-14">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <header className="text-center mb-10">
          <div className="flex justify-center items-center gap-2 mb-3">
            <HelpCircle className="text-indigo-600" />
            <h2 className="text-3xl font-extrabold text-gray-900">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Clear answers to common questions about learning vector databases,
            embeddings, and becoming industry-ready.
          </p>
        </header>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl shadow-sm transition"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between text-left px-6 py-5 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-500 transition-transform ${
                      isOpen ? "rotate-180 text-indigo-600" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 text-sm text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        <p className="mt-10 text-center text-sm text-gray-500">
          Still have questions? Build projects, experiment, and learn by doing —
          that’s the fastest way to master vector databases.
        </p>
      </div>
    </section>
  );
}