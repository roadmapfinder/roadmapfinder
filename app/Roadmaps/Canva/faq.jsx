// components/CanvaFAQ.jsx
"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is Canva and why should I learn it?",
    answer:
      "Canva is a cloud-based graphic design platform that allows users to create professional-quality designs quickly using templates, tools, and AI features. Learning Canva enables you to design for social media, branding, presentations, and marketing materials without deep technical skills.",
  },
  {
    question: "Do I need prior design experience to use Canva?",
    answer:
      "No. Canva is beginner-friendly and comes with pre-built templates and intuitive tools. However, understanding design principles like typography, color theory, and layout will make your designs more professional.",
  },
  {
    question: "What are the key skills a Canva designer must master?",
    answer:
      "Branding, social media content creation, presentations & pitch decks, marketing assets, thumbnails, and motion/animated designs. Additionally, mastering Canva’s Brand Kit, AI tools, animation features, and template systems is crucial.",
  },
  {
    question: "Can Canva designers work professionally or freelance?",
    answer:
      "Yes. Canva designers can work in agencies, startups, content teams, or freelance for clients. High-demand projects include social media content, marketing campaigns, YouTube thumbnails, brand kits, and animated posts.",
  },
  {
    question: "Which Canva features should I focus on as a beginner?",
    answer:
      "Start with the Canva interface, grids, frames, layers, text & photo editing, templates, color palettes, and basic export options. Gradually move to Brand Kits, social media templates, presentations, and animations.",
  },
  {
    question: "How can I showcase my Canva projects professionally?",
    answer:
      "Create a portfolio website or use platforms like Behance, Dribbble, or Notion. Include your Brand Kits, social media campaigns, presentations, thumbnails, and animated posts. Explain your design decisions and highlight consistency and branding.",
  },
];

export default function CanvaFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            💡 Canva Designer FAQ
          </h2>
          <p className="mt-2 text-gray-600">
            Answers to common questions every Canva designer should know.
          </p>
        </header>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left text-gray-900 font-medium hover:bg-gray-50 transition"
              >
                <span>{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-indigo-600" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                )}
              </button>
              <div
                className={`px-6 pb-4 text-gray-600 text-sm transition-all duration-300 ${
                  openIndex === index ? "block" : "hidden"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>

        <footer className="mt-10 text-sm text-gray-500 text-center">
          These FAQs cover Canva basics, career guidance, and portfolio tips to help you become an industry-ready designer.
        </footer>
      </div>
    </section>
  );
}
