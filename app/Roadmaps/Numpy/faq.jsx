// components/FAQ.jsx
"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is NumPy and why should I learn it?",
    answer:
      "NumPy is the foundation of numerical computing in Python. It powers data science, machine learning, image processing, and scientific computing. If you skip NumPy, you’ll struggle to understand performance, math, and real ML systems.",
  },
  {
    question: "Do I need strong math skills to learn NumPy?",
    answer:
      "Basic math is enough to start. Linear algebra and statistics become important later. The key skill is learning to think in arrays and vectors, not writing formulas.",
  },
  {
    question: "Can I use Python loops with NumPy?",
    answer:
      "You can, but you shouldn’t. NumPy is designed for vectorized operations. If you rely on loops, you lose performance and miss the point of NumPy.",
  },
  {
    question: "Is NumPy enough for machine learning?",
    answer:
      "NumPy is the foundation, not the final tool. You should be able to implement ML algorithms using NumPy first. Libraries like PyTorch and TensorFlow come after.",
  },
  {
    question: "How long does it take to master NumPy?",
    answer:
      "You can learn the basics in a week. Real mastery—performance, broadcasting, numerical stability—takes projects and practice over a few weeks.",
  },
  {
    question: "Should I learn Pandas before or after NumPy?",
    answer:
      "After. Pandas is built on NumPy. If your NumPy fundamentals are weak, Pandas will feel like magic you don’t understand.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-14">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <header className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900">
            ❓ Frequently Asked Questions
          </h2>
          <p className="mt-3 text-gray-600">
            Straight answers to common questions. No buzzwords. No confusion.
          </p>
        </header>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden px-5 pb-5 text-sm text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        <footer className="mt-10 text-center text-sm text-gray-500">
          Still confused? Build projects. Confusion dies when execution starts.
        </footer>
      </div>
    </section>
  );
}
