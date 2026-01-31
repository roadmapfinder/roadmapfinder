"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What does an AI Automation Engineer actually do?",
    answer:
      "An AI Automation Engineer designs and builds systems that automate real-world workflows using AI models, APIs, agents, and tools. This includes automating customer support, data processing, decision-making, research, and business operations using LLMs and automation platforms.",
  },
  {
    question: "Do I need deep math or machine learning knowledge?",
    answer:
      "No. This role is not math-heavy. You need a practical understanding of how AI models work, prompt engineering, APIs, and system design. Most real-world AI automation focuses on orchestration, reliability, and integration rather than training models from scratch.",
  },
  {
    question: "Which programming language should I learn first?",
    answer:
      "Python is the best starting point for AI Automation Engineers due to its strong ecosystem for AI, automation, APIs, and backend development. JavaScript is also useful, especially for frontend and workflow tools.",
  },
  {
    question: "Is this roadmap beginner-friendly?",
    answer:
      "Yes. The roadmap starts from fundamentals like programming and APIs, then gradually moves into AI, automation tools, agents, and production systems. Even beginners can follow it step by step with consistent practice.",
  },
  {
    question: "What tools are most important to master?",
    answer:
      "Key tools include OpenAI or Gemini APIs, LangChain or LlamaIndex, automation platforms like n8n or Zapier, vector databases like Pinecone, and backend frameworks such as FastAPI. Cloud deployment tools are also essential.",
  },
  {
    question: "Will I be industry-ready after completing the projects?",
    answer:
      "Yes. The projects are designed to mirror real-world systems used by startups and enterprises. Completing them with proper documentation and deployment makes you job-ready for AI Automation and LLM-focused roles.",
  },
  {
    question: "Can I get a job without building all projects?",
    answer:
      "You don’t need all projects, but you should build at least 3–5 strong, well-documented projects. Quality, real-world relevance, and clarity matter more than quantity.",
  },
  {
    question: "What job roles can I apply for after this roadmap?",
    answer:
      "You can apply for roles like AI Automation Engineer, LLM Engineer, AI Workflow Engineer, Solutions Engineer, Automation Consultant, or AI Product Engineer.",
  },
  {
    question: "Is AI Automation a long-term career?",
    answer:
      "Yes. AI automation is becoming core to how companies operate. Engineers who can combine AI, software, and business workflows will remain in high demand across industries.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-6 py-16 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            ❓ Frequently Asked Questions
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Everything you need to know before starting your journey as an
            AI Automation Engineer.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border border-gray-200 rounded-2xl bg-gray-50 overflow-hidden transition"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-gray-500 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
