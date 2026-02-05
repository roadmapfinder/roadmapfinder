"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is Supabase and why should I learn it?",
    answer:
      "Supabase is an open-source backend platform built on PostgreSQL. It provides authentication, database, storage, realtime, and edge functions out of the box. Learning Supabase teaches you real backend engineering skills instead of hiding complexity like many BaaS tools."
  },
  {
    question: "Do I need to know PostgreSQL before learning Supabase?",
    answer:
      "Basic SQL knowledge is enough to start. However, to become industry-ready, you must understand PostgreSQL concepts like joins, indexes, constraints, and Row Level Security (RLS). Supabase is Postgres-first, not a black box."
  },
  {
    question: "What makes Supabase different from Firebase?",
    answer:
      "Supabase uses PostgreSQL with SQL and strong relational modeling, while Firebase uses NoSQL. Supabase enforces security at the database level with RLS, making it more suitable for scalable, enterprise-grade, and SaaS applications."
  },
  {
    question: "Is Row Level Security (RLS) really that important?",
    answer:
      "Yes. RLS is one of the most critical Supabase skills. It ensures users can only access the data they are authorized to see. Companies expect Supabase developers to write correct RLS policies — this is a key industry requirement."
  },
  {
    question: "Can I build production SaaS apps using Supabase?",
    answer:
      "Absolutely. Supabase is used in real production systems for SaaS products, internal tools, dashboards, and mobile apps. When combined with Edge Functions, Stripe, and proper RLS, it supports enterprise-grade architectures."
  },
  {
    question: "Is Supabase backend-only or full stack?",
    answer:
      "Supabase focuses on the backend, but it integrates seamlessly with frontend frameworks like React, Next.js, Svelte, Flutter, and mobile apps. You still control your frontend architecture."
  },
  {
    question: "How long does it take to become industry-ready with Supabase?",
    answer:
      "With consistent practice, most learners become job-ready in 2–3 months. The key is building real projects that use authentication, RLS, multi-tenancy, storage, and edge functions — not just CRUD apps."
  },
  {
    question: "Is Supabase suitable for large-scale applications?",
    answer:
      "Yes, when used correctly. Proper indexing, optimized queries, controlled realtime usage, and solid database design are essential. Supabase scales well because it is built on proven PostgreSQL infrastructure."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-slate-50 py-14">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <header className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            ❓ Supabase — Frequently Asked Questions
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            Clear answers to the most common questions learners have when moving
            from beginner to industry-ready Supabase developer.
          </p>
        </header>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden transition"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none focus:ring-2 focus:ring-emerald-300"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-semibold text-slate-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-slate-500 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-sm sm:text-base text-slate-600 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer Tip */}
        <footer className="mt-10 text-center text-sm text-slate-500">
          Tip: If you can confidently explain authentication, RLS, multi-tenancy,
          and Edge Functions — you are already ahead of most Supabase learners.
        </footer>
      </div>
    </section>
  );
}
