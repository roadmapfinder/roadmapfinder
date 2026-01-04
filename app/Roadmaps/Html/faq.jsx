"use client";

import React from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is HTML and why is it important?",
    answer:
      "HTML (HyperText Markup Language) is the foundation of the web. It defines the structure and meaning of content on web pages, enabling browsers, search engines, and assistive technologies to understand and render information correctly.",
  },
  {
    question: "Is HTML enough to build real websites?",
    answer:
      "HTML alone can create fully structured, accessible, and SEO-friendly websites. However, CSS is used for styling and JavaScript for interactivity. Professional development always starts with strong HTML foundations.",
  },
  {
    question: "What is semantic HTML?",
    answer:
      "Semantic HTML uses meaningful elements like <header>, <article>, <section>, and <footer> instead of generic <div>. This improves accessibility, SEO, readability, and long-term maintainability.",
  },
  {
    question: "Why is accessibility important in HTML?",
    answer:
      "Accessible HTML ensures that websites can be used by everyone, including people using screen readers or keyboards. Proper semantics, labels, and structure are essential for inclusive web experiences.",
  },
  {
    question: "Does HTML affect SEO?",
    answer:
      "Yes. Search engines rely heavily on HTML structure. Proper headings, semantic elements, metadata, and content hierarchy directly impact search rankings and discoverability.",
  },
  {
    question: "Should I learn HTML deeply before CSS and JavaScript?",
    answer:
      "Absolutely. HTML is the backbone of every web application. Strong HTML skills make CSS easier, JavaScript cleaner, and frameworks more intuitive to work with.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <header className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Clear answers to common questions about HTML, web fundamentals, and
            best practices every developer should know.
          </p>
        </header>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm open:shadow-md transition"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-gray-900 focus:outline-none">
                <span>{faq.question}</span>
                <ChevronDown
                  className="h-5 w-5 text-gray-500 transition-transform duration-300 group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>

              <div className="mt-4 text-gray-600 leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
