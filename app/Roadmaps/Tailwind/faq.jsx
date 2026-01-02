"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is Tailwind CSS and why should I learn it?",
    answer:
      "Tailwind CSS is a utility-first CSS framework that lets you build modern, responsive UIs faster without writing custom CSS. It’s widely used in startups and companies for scalable design systems.",
  },
  {
    question: "Do I need to know CSS before learning Tailwind?",
    answer:
      "Yes. You should understand basic CSS concepts like Flexbox, Grid, spacing, and responsive design. Tailwind is built on top of CSS, not a replacement for it.",
  },
  {
    question: "Is Tailwind CSS good for large production apps?",
    answer:
      "Absolutely. Tailwind is designed for large-scale applications. It supports design systems, theme customization, performance optimization, and works perfectly with React and Next.js.",
  },
  {
    question: "How is Tailwind different from Bootstrap?",
    answer:
      "Bootstrap provides pre-designed components, while Tailwind provides low-level utility classes. Tailwind gives more control, better customization, and avoids overriding styles.",
  },
  {
    question: "Can I use Tailwind with Next.js App Router?",
    answer:
      "Yes. Tailwind works seamlessly with Next.js App Router and Server Components. It’s the most common styling choice for modern Next.js projects.",
  },
  {
    question: "Will Tailwind CSS slow down my website?",
    answer:
      "No. Tailwind generates only the CSS you actually use. In production, the final CSS bundle is extremely small and optimized for performance.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">
            ❓ Frequently Asked Questions
          </h2>
          <p className="mt-3 text-gray-600">
            Everything you need to know before starting your Tailwind CSS journey.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl shadow-sm"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-2xl"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-gray-900">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-indigo-600" : ""
                    }`}
                    aria-hidden="true"
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
                  <div className="overflow-hidden px-6 pb-5 text-gray-600 text-sm leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        <p className="mt-10 text-center text-sm text-gray-500">
          Still have questions? Start building projects — Tailwind is best learned by doing.
        </p>
      </div>
    </section>
  );
}
