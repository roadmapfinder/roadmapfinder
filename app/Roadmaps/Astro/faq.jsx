// components/Faq.jsx
"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is Astro and why should I learn it?",
    answer:
      "Astro is a modern web framework focused on performance. It ships zero JavaScript by default and uses Islands Architecture, making it ideal for content-heavy sites, blogs, documentation, and high-performance marketing pages."
  },
  {
    question: "Do I need to know React or other frameworks before Astro?",
    answer:
      "No. Astro works with plain HTML, CSS, and JavaScript. You can optionally use React, Vue, Svelte, or Solid only where interactivity is needed."
  },
  {
    question: "Is Astro suitable for production and real companies?",
    answer:
      "Yes. Astro is used in production by companies for blogs, docs, SaaS marketing sites, and even hybrid applications with SSR and authentication."
  },
  {
    question: "How is Astro different from Next.js?",
    answer:
      "Astro is content-first and server-first. Unlike Next.js, Astro avoids shipping JavaScript unless required, resulting in faster load times and better SEO by default."
  },
  {
    question: "Can Astro be used for full-stack applications?",
    answer:
      "Yes. Astro supports SSR, API routes, server actions, authentication, and database integrations, making it capable of building full-stack applications."
  },
  {
    question: "What projects should I build to become industry-ready?",
    answer:
      "You should build a portfolio + blog, documentation platform, SaaS marketing site, interactive blog with islands, authenticated dashboard, and one open-source quality product."
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <header className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">
            ❓ Frequently Asked Questions
          </h2>
          <p className="mt-3 text-gray-600">
            Common questions learners ask before and while learning Astro.
          </p>
        </header>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-gray-200 rounded-2xl bg-gray-50 overflow-hidden"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none focus-visible:ring focus-visible:ring-indigo-500"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-indigo-600" : ""
                    }`}
                  />
                </button>

                <div
                  className={`px-6 pb-5 text-gray-600 text-sm leading-relaxed transition-all duration-300 ${
                    isOpen ? "block" : "hidden"
                  }`}
                >
                  {faq.answer}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        <footer className="mt-12 text-center text-sm text-gray-500">
          Still confused? Build projects — clarity comes from execution 🚀
        </footer>
      </div>
    </section>
  );
}
