// components/Faq.jsx
"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is RoadmapFinder?",
    answer:
      "RoadmapFinder is a learning platform that provides structured, step-by-step roadmaps, projects, and official resources to help learners become industry-ready in tech skills.",
  },
  {
    question: "Are the roadmaps beginner-friendly?",
    answer:
      "Yes. Each roadmap starts from fundamentals and gradually moves toward advanced and real-world concepts. No prior expertise is assumed unless explicitly mentioned.",
  },
  {
    question: "Do I need to follow the roadmap in order?",
    answer:
      "Absolutely. The order is intentional. Skipping steps usually creates gaps that slow you down later when concepts become complex.",
  },
  {
    question: "Are these roadmaps better than random courses?",
    answer:
      "Yes. Courses teach tools. Roadmaps teach decision-making, sequencing, and real-world skill progression — which is what companies actually care about.",
  },
  {
    question: "Is this suitable for self-taught developers?",
    answer:
      "This is built specifically for self-taught learners, students, and career switchers who want clarity instead of confusion.",
  },
  {
    question: "How should I use RoadmapFinder daily?",
    answer:
      "Pick one roadmap, work through it step by step, build the suggested projects, read official docs, and track your progress weekly.",
  },
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-gray-600">
            Clear answers to common questions. No fluff. No confusion.
          </p>
        </header>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {/* Answer */}
                <div
                  className={`px-6 transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "max-h-40 pb-5 opacity-100"
                      : "max-h-0 pb-0 opacity-0"
                  } overflow-hidden`}
                >
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer CTA */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            Still confused? Stop guessing and start following a roadmap.
          </p>
        </div>
      </div>
    </section>
  );
}
