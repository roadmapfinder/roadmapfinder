"use client";
import React, { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "Who is this Python Web Developer roadmap for?",
    answer:
      "This roadmap is designed for beginners, students, and working professionals who want to become industry-ready Python web developers. It starts from fundamentals and gradually moves to real-world backend systems, APIs, and deployment."
  },
  {
    id: 2,
    question: "Do I need prior programming experience?",
    answer:
      "No prior experience is required. However, basic familiarity with programming concepts will help you move faster. The roadmap clearly marks beginner-friendly phases so you can start confidently."
  },
  {
    id: 3,
    question: "Which frameworks will I learn?",
    answer:
      "You’ll work with Flask for fundamentals, Django for full-stack backend systems, and FastAPI for modern, high-performance APIs. This combination matches current industry expectations."
  },
  {
    id: 4,
    question: "Is FastAPI really necessary in 2026?",
    answer:
      "Yes. FastAPI has become a standard for building scalable, async APIs in production. Many startups and companies prefer it for performance, developer experience, and built-in API documentation."
  },
  {
    id: 5,
    question: "Will I learn database design and optimization?",
    answer:
      "Absolutely. You’ll work with PostgreSQL, ORMs, indexing, transactions, and query optimization. Database design is treated as a core backend skill, not an afterthought."
  },
  {
    id: 6,
    question: "Does this roadmap include real-world projects?",
    answer:
      "Yes. The roadmap includes multiple portfolio-grade projects like authentication systems, SaaS backends, real-time chat apps, and deployment pipelines—exactly what recruiters look for."
  },
  {
    id: 7,
    question: "Will I learn deployment and DevOps basics?",
    answer:
      "Yes. You’ll learn Docker, Nginx, CI/CD pipelines, environment management, and cloud deployment. This ensures you can ship and maintain production applications."
  },
  {
    id: 8,
    question: "Is this roadmap enough to get a job?",
    answer:
      "If you complete the roadmap honestly—building, deploying, and explaining projects—you’ll be well-prepared for backend Python roles. Success still depends on consistency and practice."
  },
  {
    id: 9,
    question: "How long does it take to complete?",
    answer:
      "On average, 6–9 months with consistent effort. Beginners may take longer, while developers with prior experience can move faster by focusing on advanced phases."
  }
];

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-slate-50 py-14">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <header className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            ❓ Frequently Asked Questions
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            Common questions learners ask before starting their Python Web
            Developer journey.
          </p>
        </header>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white border border-slate-200 rounded-2xl shadow-sm"
            >
              <button
                onClick={() => toggle(faq.id)}
                className="w-full flex items-center justify-between text-left px-6 py-5 focus:outline-none"
                aria-expanded={openId === faq.id}
              >
                <span className="text-base sm:text-lg font-semibold text-slate-900">
                  {faq.question}
                </span>
                <span
                  className={`ml-4 text-xl font-bold text-blue-600 transition-transform ${
                    openId === faq.id ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>

              {/* Answer */}
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  openId === faq.id ? "max-h-40 pb-5" : "max-h-0"
                }`}
              >
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <footer className="mt-10 text-center text-sm text-slate-500">
          Still have questions? Start building projects — clarity comes from
          practice 🚀
        </footer>
      </div>
    </section>
  );
}
