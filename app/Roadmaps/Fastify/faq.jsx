// components/Faq.jsx
"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Why should I choose Fastify over Express?",
    answer:
      "Fastify is built for performance and scalability. It uses schema-based validation, highly optimized serialization, and a powerful plugin system with encapsulation. Express is flexible, but Fastify is designed for production systems that need speed, structure, and maintainability."
  },
  {
    question: "Is Fastify suitable for large-scale production apps?",
    answer:
      "Yes. Fastify is used in high-traffic production systems. Its plugin encapsulation, structured logging (Pino), and schema-first approach make it ideal for scalable and maintainable enterprise-grade APIs."
  },
  {
    question: "Do I need to know JSON Schema to use Fastify?",
    answer:
      "If you want to use Fastify correctly—yes. JSON Schema is core to Fastify’s validation and performance model. Learning it is not optional if your goal is production readiness."
  },
  {
    question: "Can Fastify handle authentication and authorization?",
    answer:
      "Absolutely. Fastify supports JWT, cookies, OAuth flows, and role-based access control through official plugins like @fastify/jwt and @fastify/cookie, typically enforced via hooks."
  },
  {
    question: "Is Fastify good for REST only, or also real-time apps?",
    answer:
      "Fastify works well for REST APIs and also supports real-time features via WebSockets, Server-Sent Events, and streaming. It integrates cleanly without compromising performance."
  },
  {
    question: "How long does it take to become industry-ready with Fastify?",
    answer:
      "If you already know JavaScript and Node.js fundamentals, focused practice with real projects can make you production-ready in 2–3 months. Tutorials alone won’t get you there—projects will."
  }
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-14">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <header className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">
            ❓ Frequently Asked Questions
          </h2>
          <p className="mt-2 text-gray-600">
            Clear answers to common questions about Fastify and backend
            development.
          </p>
        </header>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  aria-expanded={isOpen}
                >
                  <span className="text-gray-900 font-medium">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-500 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
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
      </div>
    </section>
  );
}
