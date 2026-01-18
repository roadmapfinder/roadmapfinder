// components/FAQ.jsx
"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is Flask and why should I learn it?",
    answer:
      "Flask is a lightweight Python web framework used to build APIs, backend services, and web applications. It is popular because of its simplicity, flexibility, and production readiness.",
  },
  {
    question: "Is Flask good for large-scale applications?",
    answer:
      "Yes. Flask is used in large production systems by applying clean architecture, Blueprints, background workers, caching, and microservices patterns.",
  },
  {
    question: "Should I learn Flask or FastAPI in 2026?",
    answer:
      "Flask is ideal for learning backend fundamentals and building flexible systems. FastAPI is excellent for async-first APIs. Many companies still rely heavily on Flask.",
  },
  {
    question: "Do I need to know frontend to use Flask?",
    answer:
      "No. Flask is commonly used as a backend API only. You can connect it with React, Next.js, mobile apps, or any frontend client.",
  },
  {
    question: "Which database works best with Flask?",
    answer:
      "PostgreSQL is the most recommended for production. SQLite is good for learning. MySQL and MongoDB are also commonly used.",
  },
  {
    question: "Is Flask suitable for job opportunities?",
    answer:
      "Yes. Flask is widely used in startups, SaaS companies, AI products, and backend systems.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">
            ❓ Flask Developer FAQ
          </h2>
          <p className="mt-3 text-gray-600">
            Common questions every Flask learner asks before becoming
            industry-ready.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden transition"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between px-6 py-4 text-left focus:outline-none"
                aria-expanded={openIndex === index}
              >
                <span className="text-gray-900 font-semibold text-base">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-gray-500 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-40 pb-5" : "max-h-0"
                }`}
              >
                <p className="text-gray-600 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center text-sm text-gray-500">
          💡 Still confused? Build projects — clarity comes from practice.
        </div>
      </div>
    </section>
  );
}
