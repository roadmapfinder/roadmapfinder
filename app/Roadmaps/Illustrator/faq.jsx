"use client";
// components/FAQ.jsx
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is Adobe Illustrator mainly used for?",
    answer:
      "Adobe Illustrator is used for creating vector-based designs such as logos, icons, illustrations, brand assets, infographics, typography, and print-ready graphics. Vector designs are scalable without losing quality, making Illustrator industry-standard for professional design work.",
  },
  {
    question: "Do I need drawing skills to learn Illustrator?",
    answer:
      "No drawing background is required. Illustrator is more about precision, shapes, paths, and design thinking than freehand drawing. Many professionals rely on grids, guides, and the Pen Tool rather than sketching skills.",
  },
  {
    question: "How important is the Pen Tool in Illustrator?",
    answer:
      "The Pen Tool is the most important skill in Illustrator. Mastering anchor points, curves, and handles allows you to create clean logos, icons, and illustrations. Most professional Illustrator work depends heavily on Pen Tool precision.",
  },
  {
    question: "What is the difference between Illustrator and Photoshop?",
    answer:
      "Illustrator is vector-based and best for logos, icons, illustrations, and branding. Photoshop is raster-based and used mainly for photo editing and image manipulation. Industry workflows often use both together.",
  },
  {
    question: "Can Illustrator designs be used for web and apps?",
    answer:
      "Yes. Illustrator is widely used to create SVG icons, UI assets, illustrations, and marketing graphics for websites and apps. Files can be exported in SVG, PNG, or PDF formats optimized for web usage.",
  },
  {
    question: "Is Illustrator required for logo and brand design jobs?",
    answer:
      "Yes. Illustrator is considered the industry standard for logo and brand identity design. Most agencies, freelancers, and clients expect source files to be delivered in AI or vector formats created in Illustrator.",
  },
  {
    question: "How long does it take to become good at Illustrator?",
    answer:
      "With consistent practice, beginners can become comfortable in 4–6 weeks. Reaching professional, industry-ready level typically takes 3–6 months of focused practice on real projects like logos, branding, and illustrations.",
  },
  {
    question: "Is Illustrator still relevant with AI tools available?",
    answer:
      "Absolutely. AI tools assist creativity, but Illustrator remains essential for precision, control, scalability, and production-ready design. Professionals use AI features inside Illustrator, not as replacements.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">
            ❓ Adobe Illustrator – Frequently Asked Questions
          </h2>
          <p className="mt-3 text-gray-600">
            Clear answers to the most common questions learners have while
            starting and mastering Adobe Illustrator.
          </p>
        </header>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl p-5 transition hover:shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left"
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-gray-500 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <footer className="mt-12 text-center text-sm text-gray-500">
          💡 Tip: Focus on fundamentals like Pen Tool mastery, typography, and
          color systems before advanced effects and AI features.
        </footer>
      </div>
    </section>
  );
}
