// components/CapcutFAQ.jsx
"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is CapCut enough to become a professional video editor?",
    answer:
      "Yes. CapCut is widely used for Reels, Shorts, ads, and creator content. Many professional editors and agencies use CapCut for short-form content, social media marketing, and fast turnaround projects. Mastery of storytelling, timing, captions, and motion matters more than the tool itself.",
  },
  {
    question: "Do I need a powerful PC or laptop for CapCut?",
    answer:
      "No. CapCut runs well on mobile devices and mid-range laptops. For advanced edits (long videos, heavy effects), a laptop with at least 8GB RAM is recommended, but beginners can start comfortably on mobile.",
  },
  {
    question: "How long does it take to learn CapCut properly?",
    answer:
      "You can learn the basics in 1–2 weeks. Becoming confident with short-form edits takes about 1–2 months. Industry-ready skills like motion editing, ads, and long-form YouTube editing usually take 4–6 months with consistent practice.",
  },
  {
    question: "What type of videos can I create using CapCut?",
    answer:
      "CapCut is ideal for Instagram Reels, YouTube Shorts, TikTok videos, brand promos, product ads, talking-head videos, cinematic montages, and even long-form YouTube content.",
  },
  {
    question: "Is CapCut better on mobile or desktop?",
    answer:
      "Both are powerful. Mobile is perfect for quick edits and creators on the go. Desktop offers better timeline control, precision editing, and is preferred for long-form videos and professional workflows.",
  },
  {
    question: "Do I need to learn After Effects or Premiere Pro after CapCut?",
    answer:
      "Not immediately. CapCut can help you start earning and building a portfolio. Once you outgrow CapCut or want advanced VFX and cinematic workflows, learning Premiere Pro or After Effects is a natural next step — but not mandatory.",
  },
  {
    question: "Can I earn money as a CapCut editor?",
    answer:
      "Yes. Many editors earn through freelancing, editing Reels and Shorts for creators, working with brands, agencies, or managing content for YouTube channels. Strong portfolios matter more than software choice.",
  },
  {
    question: "What skills matter most besides CapCut tools?",
    answer:
      "Storytelling, pacing, retention editing, captions, sound design, branding consistency, and understanding platform algorithms are more important than effects or transitions.",
  },
];

export default function CapcutFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <header className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            ❓ CapCut Editor – Frequently Asked Questions
          </h2>
          <p className="mt-3 text-gray-600">
            Clear answers to the most common questions beginners and aspiring
            professional CapCut editors ask.
          </p>
        </header>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left"
                aria-expanded={openIndex === index}
              >
                <span className="text-base font-semibold text-gray-900">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-gray-500 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 text-sm text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <footer className="mt-10 text-center text-sm text-gray-500">
          Still confused? Focus on building projects — skills become clear
          through practice.
        </footer>
      </div>
    </section>
  );
}
