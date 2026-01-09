// components/Faq.jsx
"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Do I need prior DevOps experience to learn Kubernetes?",
    answer:
      "No, but you must understand Linux, Docker, and basic networking. Kubernetes is not beginner-friendly by default, so skipping fundamentals will slow you down hard.",
  },
  {
    question: "How long does it take to become production-ready in Kubernetes?",
    answer:
      "With focused practice and real projects, 3–4 months is realistic. Watching tutorials without building anything will not get you there.",
  },
  {
    question: "Is Kubernetes still relevant in 2026?",
    answer:
      "Yes. Kubernetes is the backbone of modern cloud infrastructure. Serverless and PaaS still run on Kubernetes under the hood.",
  },
  {
    question: "Should I learn Kubernetes before Docker?",
    answer:
      "Absolutely not. Kubernetes assumes you already understand containers. Docker comes first, no exceptions.",
  },
  {
    question: "Do I need certifications like CKA or CKS?",
    answer:
      "Certifications help with interviews, not skills. Projects and debugging experience matter more. Do certs only after hands-on practice.",
  },
  {
    question: "Can I use Kubernetes for small projects?",
    answer:
      "You can, but you shouldn’t. Kubernetes shines at scale. For small apps, it’s overkill unless your goal is learning.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-6">
        <header className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900">
            ❓ Frequently Asked Questions
          </h2>
          <p className="mt-2 text-gray-600">
            Straight answers to common doubts. No fluff.
          </p>
        </header>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between px-6 py-4 text-left focus:outline-none"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-gray-900">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-gray-500 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
