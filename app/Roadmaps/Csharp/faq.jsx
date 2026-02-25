// components/FAQ.jsx
import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Who is this C# / .NET roadmap for?",
    answer:
      "This roadmap is designed for beginners, students, and developers who want to become industry-ready C# / .NET backend engineers. It starts from fundamentals and goes up to enterprise-level backend development.",
  },
  {
    question: "Do I need prior programming experience to start?",
    answer:
      "No prior experience is required. If you are new to programming, start with C# basics and console applications. However, having basic programming logic will help you progress faster.",
  },
  {
    question: "How long does it take to become job-ready with C#?",
    answer:
      "On average, it takes 6–12 months with consistent practice. The timeline depends on your learning speed, consistency, and how deeply you build and understand projects.",
  },
  {
    question: "Are these projects enough to get a job?",
    answer:
      "Yes, if you build the projects properly with clean code, documentation, testing, and deployment. Recruiters care more about real-world projects and problem-solving ability than certificates.",
  },
  {
    question: "Should I focus more on C# or ASP.NET Core?",
    answer:
      "Start with strong C# fundamentals first. Once comfortable, move to ASP.NET Core. A good backend developer is strong in both language fundamentals and frameworks.",
  },
  {
    question: "Do I need to learn frontend to become a C# backend developer?",
    answer:
      "Frontend knowledge is optional. You should understand basic HTML, CSS, and HTTP concepts, but deep frontend expertise is not required for backend-focused roles.",
  },
  {
    question: "What should my portfolio look like?",
    answer:
      "Your portfolio should include 4–6 solid projects, clean GitHub repositories, a clear README explaining architecture decisions, and at least one deployed project.",
  },
  {
    question: "Is C# still relevant in 2025 and beyond?",
    answer:
      "Absolutely. C# and .NET are widely used in enterprise software, cloud systems, SaaS products, finance, healthcare, and large-scale backend systems.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-14 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <HelpCircle className="text-indigo-600" />
            <h2 className="text-3xl font-extrabold text-gray-900">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="text-gray-600">
            Clear answers to common questions about learning C# and becoming an
            industry-ready .NET developer.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm transition hover:shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none"
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
                <div className="px-6 pb-5 text-sm text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center text-sm text-gray-500">
          Still have questions? Focus on building projects and revisiting this
          roadmap as you grow — clarity comes with practice.
        </div>
      </div>
    </section>
  );
}