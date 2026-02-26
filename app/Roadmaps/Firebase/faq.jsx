// components/Faq.jsx
"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is Firebase and why should I learn it?",
    answer:
      "Firebase is a Backend-as-a-Service (BaaS) platform that helps you build apps faster without managing servers. Learning Firebase teaches authentication, databases, serverless backends, security rules, hosting, and production-ready architecture — all highly valuable industry skills.",
  },
  {
    question: "Do I need backend knowledge before learning Firebase?",
    answer:
      "Basic backend concepts are recommended. You should understand HTTP, REST APIs, authentication, async programming, and JSON. Firebase simplifies backend infrastructure, but you still need architectural thinking.",
  },
  {
    question: "Is Firebase good for large-scale production apps?",
    answer:
      "Yes. Firebase powers apps with millions of users. The key is correct Firestore data modeling, strict security rules, Cloud Functions for sensitive logic, and cost-aware query design.",
  },
  {
    question: "What is the difference between Firebase Auth and Firestore users?",
    answer:
      "Firebase Authentication only manages identity (email, provider, UID). User profiles, roles, and app-specific data should always be stored in Firestore using the Auth UID as the document ID.",
  },
  {
    question: "When should I use Cloud Functions?",
    answer:
      "Use Cloud Functions for any trusted backend logic: payments, notifications, role assignment, data validation, scheduled jobs, and integrations. Never trust the client for sensitive operations.",
  },
  {
    question: "Is Firebase expensive?",
    answer:
      "Firebase is cost-effective if used correctly. Costs mainly come from Firestore reads/writes, storage, and function invocations. Poor data modeling causes high costs — good architecture keeps Firebase affordable.",
  },
  {
    question: "Can I use Firebase with Next.js or React?",
    answer:
      "Yes. Firebase works very well with React, Next.js, and other frontend frameworks. Many production apps use Firebase for auth, database, and hosting alongside modern frontend stacks.",
  },
  {
    question: "What makes someone a senior Firebase developer?",
    answer:
      "A senior Firebase developer can design scalable Firestore schemas, write secure rules without leaks, control costs, build serverless backends, debug performance issues, and architect production-grade systems.",
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
        {/* Header */}
        <header className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">
            ❓ Frequently Asked Questions
          </h2>
          <p className="mt-3 text-gray-600">
            Everything you need to know before and while learning Firebase —
            explained clearly and practically.
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
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 px-6 pb-6" : "max-h-0 px-6"
                }`}
              >
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <footer className="mt-12 text-center text-sm text-gray-500">
          💡 Still have questions? Build projects — Firebase makes the most
          sense when you learn by doing.
        </footer>
      </div>
    </section>
  );
}