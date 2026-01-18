// components/FAQ.jsx
"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is FastAPI and why should I learn it?",
    answer:
      "FastAPI is a modern, high-performance Python web framework for building APIs. It is fast, easy to learn, supports async programming, automatic documentation, and is widely used for AI, SaaS, and microservices backends."
  },
  {
    question: "Is FastAPI better than Flask and Django?",
    answer:
      "FastAPI is not a replacement but a modern alternative focused on APIs. It offers better performance, automatic OpenAPI docs, async support, and strict data validation compared to Flask and Django REST."
  },
  {
    question: "Do I need to know async programming before learning FastAPI?",
    answer:
      "No. You can start with normal synchronous functions. FastAPI allows you to gradually learn async once you are comfortable with basic API development."
  },
  {
    question: "Which database is best with FastAPI?",
    answer:
      "PostgreSQL is the most commonly used database with FastAPI. You can also use MySQL, SQLite, MongoDB, and Redis depending on your project requirements."
  },
  {
    question: "Does FastAPI support authentication?",
    answer:
      "Yes. FastAPI provides built-in security utilities for JWT, OAuth2, API keys, and role-based authentication systems."
  },
  {
    question: "Is FastAPI suitable for large production systems?",
    answer:
      "Yes. FastAPI is used in production by many companies for microservices, SaaS backends, AI APIs, and high-performance systems."
  },
  {
    question: "Can I build AI backends with FastAPI?",
    answer:
      "FastAPI is one of the best frameworks for AI backends. It supports async streaming, WebSockets, and integrates perfectly with LLMs and vector databases."
  },
  {
    question: "How long does it take to learn FastAPI?",
    answer:
      "Basic FastAPI can be learned in 1–2 weeks. Industry-ready backend development usually takes 2–3 months with projects."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">
            ❓ FastAPI Learner FAQ
          </h2>
          <p className="mt-3 text-gray-600">
            Answers to the most common questions about learning FastAPI and
            becoming an industry-ready backend developer.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-6 py-5 text-left focus:outline-none focus-visible:ring focus-visible:ring-indigo-300"
                aria-expanded={openIndex === index}
              >
                <span className="text-gray-900 font-semibold">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`px-6 pb-5 text-gray-600 text-sm leading-relaxed transition-all duration-300 ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-12 text-center text-sm text-gray-500">
          🚀 Still confused? Build projects from the roadmap and everything will
          become clear step by step.
        </div>
      </div>
    </section>
  );
}
