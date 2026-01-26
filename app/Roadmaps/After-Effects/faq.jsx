"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is After Effects for video editing?",
    answer:
      "No. After Effects is primarily used for motion graphics, visual effects, and compositing. For cutting and editing videos, Adobe Premiere Pro is the right tool. Most professionals use both together.",
  },
  {
    question: "How long does it take to learn After Effects?",
    answer:
      "You can learn the basics in 3–4 weeks. Becoming confident with motion design takes around 3–6 months, and industry-level skills usually take 6–12 months with consistent practice and real projects.",
  },
  {
    question: "Do I need to learn Premiere Pro before After Effects?",
    answer:
      "Not mandatory. You can start directly with After Effects. However, knowing basic Premiere Pro helps when working on client projects, reels, or long videos.",
  },
  {
    question: "Are plugins required to become professional?",
    answer:
      "No. Strong motion designers rely on fundamentals like timing, easing, and composition. Plugins only speed up workflows. Many studios prefer artists who can work plugin-free.",
  },
  {
    question: "What PC or laptop specs are recommended?",
    answer:
      "Minimum: 16GB RAM (32GB recommended), SSD storage, modern multi-core CPU, and a dedicated GPU. After Effects performance depends heavily on RAM and CPU.",
  },
  {
    question: "What kind of jobs can I get after learning After Effects?",
    answer:
      "Motion Graphics Designer, Video Editor, Social Media Content Creator, VFX Artist, Brand Animator, and Freelance Motion Designer are common roles.",
  },
  {
    question: "Is After Effects good for freelancing?",
    answer:
      "Yes. After Effects skills are in high demand for ads, reels, explainers, YouTube channels, and branding. Many freelancers earn consistently with just motion graphics work.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <header className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">
            ❓ After Effects – Frequently Asked Questions
          </h2>
          <p className="mt-3 text-gray-600">
            Common questions every After Effects learner asks before starting
            and while progressing.
          </p>
        </header>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border border-gray-200 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition"
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
          Still confused? Focus on fundamentals, build projects, and your
          clarity will grow with practice.
        </footer>
      </div>
    </section>
  );
}
