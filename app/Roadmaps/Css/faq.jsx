"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Do I need JavaScript to learn CSS?",
    answer:
      "No. CSS can be learned independently. However, understanding basic HTML is required. JavaScript becomes useful later when CSS is applied in frameworks like React or Next.js."
  },
  {
    question: "Is CSS still relevant in 2026 with Tailwind and frameworks?",
    answer:
      "Absolutely. Tailwind, CSS Modules, and styled-components are all built on top of CSS. Strong CSS fundamentals are mandatory for debugging, performance, and scalable UI systems."
  },
  {
    question: "How long does it take to master CSS?",
    answer:
      "You can learn CSS basics in 2–3 weeks. True mastery—layouts, responsiveness, architecture, and accessibility—usually takes 3–6 months of real project work."
  },
  {
    question: "Should I learn Flexbox or Grid first?",
    answer:
      "Start with Flexbox for one-dimensional layouts, then move to CSS Grid for complex two-dimensional layouts. In real projects, both are used together."
  },
  {
    question: "Is Tailwind CSS enough to get a job?",
    answer:
      "Tailwind helps you work fast, but interviews test CSS fundamentals like box model, positioning, specificity, and responsiveness. Tailwind without CSS knowledge is risky."
  },
  {
    question: "What projects prove strong CSS skills?",
    answer:
      "Responsive landing pages, dashboards, component libraries, theme systems, and animated UI interactions are the strongest proof of real CSS expertise."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <header className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">
            ❓ Frequently Asked Questions
          </h2>
          <p className="mt-3 text-gray-600">
            Common questions every CSS learner has before becoming
            industry-ready.
          </p>
        </header>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className="border border-gray-200 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none focus-visible:ring focus-visible:ring-indigo-500"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-indigo-600" : ""
                    }`}
                  />
                </button>

                {/* Answer */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden px-6 pb-5 text-sm text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer note */}
        <p className="mt-10 text-center text-sm text-gray-500">
          Still confused? Build projects — CSS clarity comes from practice, not
          theory.
        </p>
      </div>
    </section>
  );
}
