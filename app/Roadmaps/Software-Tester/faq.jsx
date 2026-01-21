"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is the role of a Software Tester?",
    a: "A software tester ensures product quality by finding defects, validating requirements, and ensuring the software meets user expectations."
  },
  {
    q: "Is manual testing still relevant in 2026?",
    a: "Yes. Manual testing is essential for exploratory, usability, and business logic validation even in automation-driven teams."
  },
  {
    q: "Which automation tool should I learn first?",
    a: "Playwright or Selenium are best for beginners depending on language preference."
  },
  {
    q: "Do testers need coding skills?",
    a: "Basic programming knowledge is mandatory for automation, API testing, and CI/CD integration."
  },
  {
    q: "What is the difference between regression and retesting?",
    a: "Retesting checks fixed defects, regression ensures existing features still work after changes."
  },
  {
    q: "Is API testing mandatory for QA jobs?",
    a: "Yes. Most modern applications rely heavily on APIs."
  },
  {
    q: "How long does it take to become job ready?",
    a: "With proper roadmap and projects, 4–6 months is enough to become industry ready."
  },
  {
    q: "What projects should I add to my resume?",
    a: "Manual testing, automation framework, API automation, performance testing, and CI/CD projects."
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="min-h-screen bg-slate-50 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
          ❓ Software Testing FAQ
        </h2>
        <p className="text-slate-600 mb-10">
          Common questions every QA learner asks before entering the industry.
        </p>

        <div className="space-y-4">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
              >
                <span className="font-semibold text-slate-900">
                  {item.q}
                </span>
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              {open === i && (
                <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="mt-10 text-sm text-slate-500">
          Tip: Bookmark this FAQ before interviews — most questions come from here.
        </p>
      </div>
    </section>
  );
}
