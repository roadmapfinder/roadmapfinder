"use client";
import React, { useState } from "react";

const faqs = [
  {
    question: "What is LangChain and why should I learn it?",
    answer:
      "LangChain is a framework for building advanced LLM-powered applications such as RAG, agents, workflows, and automation systems. It simplifies orchestration, memory, tools, and model interaction.",
  },
  {
    question: "Do I need prior machine learning knowledge to start?",
    answer:
      "No. You can begin with basic JavaScript or Python skills. LangChain handles the complex ML operations under the hood.",
  },
  {
    question: "What tools and libraries are essential with LangChain?",
    answer:
      "Key tools include vector databases (like Pinecone, MongoDB Atlas Vector Search, Chroma), OpenAI or other LLM providers, and frameworks like LangGraph for workflows.",
  },
  {
    question: "How long does it take to become job-ready in LangChain?",
    answer:
      "With consistent practice and building real projects, most learners become job-ready in 2-3 months.",
  },
  {
    question: "Is LangChain suitable for production applications?",
    answer:
      "Yes. LangChain offers production-ready tools such as LangSmith, tracing, evaluation, and LangGraph for complex multi-agent systems.",
  },
  {
    question: "What type of projects can I build to get hired?",
    answer:
      "RAG pipelines, AI agents, automation workers, data analyst bots, and enterprise-grade document search systems are highly in demand.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-16 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <header className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">❓ FAQ</h2>
          <p className="text-gray-600 mt-2 text-lg">
            Frequently asked questions to help you understand the LangChain roadmap and journey.
          </p>
        </header>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white shadow-sm border border-gray-200 rounded-2xl p-5 transition hover:shadow-md"
            >
              <button
                className="w-full flex justify-between items-center text-left"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-semibold text-gray-800">{faq.question}</span>
                <span className="text-gray-500 text-2xl">
                  {openIndex === index ? "-" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <p className="mt-3 text-gray-600 text-base leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>

        <footer className="mt-12 text-center text-gray-500 text-sm">
          Have more questions? We continuously update this FAQ to support your AI engineering journey.
        </footer>
      </div>
    </section>
  );
}
