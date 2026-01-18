"use client";
// components/FAQ.jsx
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Is Vue.js good for getting a job in 2026?",
    a: "Yes. Vue.js is widely used in startups, SaaS companies, dashboards, admin panels, and enterprise applications. Vue 3 + Pinia + Nuxt is a highly in-demand stack.",
  },
  {
    q: "Should I learn Vue or React first?",
    a: "If you prefer simplicity, clean syntax, and faster learning, Vue is ideal. React is also popular, but Vue gives quicker productivity for beginners.",
  },
  {
    q: "Do companies use Vue.js in production?",
    a: "Yes. Companies like Alibaba, Xiaomi, GitLab, Laravel, Behance, and many SaaS startups use Vue.js in production systems.",
  },
  {
    q: "Is Vue.js easier than React?",
    a: "For most beginners, yes. Vue has clearer structure, better template readability, and less boilerplate compared to React.",
  },
  {
    q: "Should I learn Vue 2 or Vue 3?",
    a: "Always learn Vue 3. Vue 2 is legacy. Vue 3 uses Composition API, better performance, and is future-proof.",
  },
  {
    q: "Is Nuxt mandatory with Vue?",
    a: "Not mandatory, but highly recommended for SEO, SSR, and production SaaS or blog platforms.",
  },
  {
    q: "Can I build mobile apps with Vue?",
    a: "Yes. You can use Vue with Ionic, Capacitor, or NativeScript to build mobile applications.",
  },
  {
    q: "How long does it take to learn Vue.js?",
    a: "Basic Vue: 1–2 weeks. Intermediate: 1–2 months. Industry ready: 3–4 months with projects.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">
            ❓ Vue.js Learning FAQ
          </h2>
          <p className="mt-3 text-gray-600">
            Common questions every Vue.js learner asks before becoming industry-ready.
          </p>
        </header>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-gray-900">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-500 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden px-5 pb-5 text-gray-600 text-sm leading-relaxed">
                    {item.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer note */}
        <p className="mt-10 text-center text-sm text-gray-500">
          Still confused? Vue.js becomes easy when you follow a proper roadmap and build real projects.
        </p>
      </div>
    </section>
  );
}
