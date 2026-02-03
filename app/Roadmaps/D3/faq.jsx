"use client";
// components/FAQ.jsx
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is D3.js and why is it different from chart libraries?",
    answer:
      "D3.js (Data-Driven Documents) is a low-level visualization library that gives you full control over how data maps to visuals. Unlike chart libraries, D3 does not provide pre-built charts — it provides primitives to build any visualization imaginable.",
  },
  {
    question: "Is D3.js hard to learn?",
    answer:
      "D3.js has a steep learning curve because it requires solid JavaScript, SVG, and data thinking skills. However, once the core concepts (scales, selections, data joins) click, you gain unmatched flexibility and power.",
  },
  {
    question: "Do I need to learn SVG before D3.js?",
    answer:
      "Yes. SVG is fundamental to D3. Understanding SVG elements, coordinate systems, transforms, and paths will dramatically improve your D3 learning speed and code quality.",
  },
  {
    question: "Should I use D3.js with React or vanilla JavaScript?",
    answer:
      "In industry, D3 is commonly used with React or Next.js. Best practice is to let D3 handle calculations (scales, layouts) and let React handle rendering and state management.",
  },
  {
    question: "Can D3.js handle large datasets?",
    answer:
      "Yes, but with care. For large datasets (10k+ points), professionals use Canvas rendering or hybrid SVG + Canvas approaches instead of pure SVG to maintain performance.",
  },
  {
    question: "Is D3.js still relevant in 2026?",
    answer:
      "Absolutely. D3.js powers many modern visualization tools and is the foundation for libraries like Vega and Observable. Its concepts are timeless and highly valued in data-driven teams.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="bg-white py-14">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <header className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900">
            ❓ D3.js Frequently Asked Questions
          </h2>
          <p className="mt-3 text-gray-600">
            Clear answers to the most common questions learners have when
            starting their journey with D3.js and data visualization.
          </p>
        </header>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = index === openIndex;
            return (
              <div
                key={index}
                className="border border-gray-200 rounded-2xl overflow-hidden transition"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none focus-visible:ring focus-visible:ring-indigo-500"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-500 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        <footer className="mt-12 text-center text-sm text-gray-500">
          💡 Still confused? Build projects. D3.js makes the most sense when you
          visualize real data, not when you just read docs.
        </footer>
      </div>
    </section>
  );
}
