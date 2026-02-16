"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Who should learn Laravel?",
    answer:
      "Laravel is ideal for PHP developers, backend engineers, and full-stack developers who want to build secure, scalable, and production-ready web applications using modern development practices.",
  },
  {
    question: "Do I need PHP knowledge before learning Laravel?",
    answer:
      "Yes. You should understand PHP basics such as variables, functions, arrays, OOP concepts, and basic SQL. Laravel builds on top of PHP and assumes these fundamentals.",
  },
  {
    question: "How long does it take to become job-ready in Laravel?",
    answer:
      "With consistent practice, most learners become job-ready in 4–6 months by building real projects, learning authentication, APIs, databases, and deployment workflows.",
  },
  {
    question: "Is Laravel good for large-scale applications?",
    answer:
      "Absolutely. Laravel is used in large-scale SaaS products and enterprise systems. With tools like queues, caching, Horizon, Octane, and proper architecture, it scales very well.",
  },
  {
    question: "Should I learn Laravel or another backend framework?",
    answer:
      "Laravel is one of the best backend frameworks if you work with PHP. It emphasizes developer productivity, clean architecture, security, and long-term maintainability.",
  },
  {
    question: "What kind of projects should I build to get hired?",
    answer:
      "You should build authentication systems, REST APIs, admin dashboards, SaaS-style applications, and at least one production-level project demonstrating real-world problem solving.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <header className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-gray-600">
            Everything you need to know before starting your Laravel journey.
          </p>
        </header>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-5 text-left focus:outline-none focus-visible:ring focus-visible:ring-indigo-500"
                aria-expanded={openIndex === index}
              >
                <span className="text-base font-medium text-gray-900">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>

              <div
                className={`px-5 overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? "max-h-40 pb-5 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-sm text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center text-sm text-gray-500">
          Still have questions? Build projects and learn by doing — that’s the
          fastest way to master Laravel.
        </footer>
      </div>
    </section>
  );
}
