"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is Power BI?",
    answer:
      "Power BI is a business intelligence tool by Microsoft used to connect, transform, model, visualize, and share data through interactive dashboards and reports.",
  },
  {
    question: "Is Power BI free or paid?",
    answer:
      "Power BI Desktop is free. Power BI Service requires Pro or Premium licenses for sharing and enterprise collaboration.",
  },
  {
    question: "Do I need coding for Power BI?",
    answer:
      "Basic Power BI can be done without coding. However, DAX and Power Query (M) are essential for professional-level reporting.",
  },
  {
    question: "What is DAX in Power BI?",
    answer:
      "DAX (Data Analysis Expressions) is a formula language used to create measures, calculated columns, KPIs, and advanced analytics logic.",
  },
  {
    question: "What is Power Query?",
    answer:
      "Power Query is the data transformation engine used to clean, shape, merge, and prepare data before modeling in Power BI.",
  },
  {
    question: "Can Power BI connect to SQL and APIs?",
    answer:
      "Yes. Power BI supports SQL Server, MySQL, PostgreSQL, Oracle, REST APIs, Excel, CSV, SharePoint, Azure, and many more sources.",
  },
  {
    question: "Is Power BI good for career growth?",
    answer:
      "Yes. Power BI roles include Data Analyst, BI Developer, Analytics Engineer, and BI Architect with strong industry demand.",
  },
  {
    question: "How long does it take to learn Power BI?",
    answer:
      "Basic Power BI can be learned in 2–3 weeks. Industry-ready skills usually take 2–3 months with projects.",
  },
  {
    question: "Is Power BI better than Tableau?",
    answer:
      "Power BI integrates deeply with Microsoft ecosystem and is more affordable, while Tableau is strong in advanced visual analytics. Both are industry tools.",
  },
  {
    question: "Can I get a job with Power BI only?",
    answer:
      "Yes, but adding SQL, Excel, and business understanding increases job opportunities significantly.",
  },
];

export default function PowerBIFAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-14 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">

        {/* Header */}
        <header className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900">
            📊 Power BI — Frequently Asked Questions
          </h2>
          <p className="mt-2 text-gray-600">
            Clear answers to common Power BI learning, career, and technical questions.
          </p>
        </header>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-5 text-left hover:bg-gray-50 transition"
                >
                  <span className="font-medium text-gray-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`px-5 text-gray-600 text-sm leading-relaxed transition-all duration-300 ${
                    isOpen ? "max-h-96 pb-5" : "max-h-0 overflow-hidden"
                  }`}
                >
                  {faq.answer}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        <footer className="mt-10 text-center text-sm text-gray-500">
          Still have questions? Power BI mastery comes from practice + projects 🚀
        </footer>

      </div>
    </section>
  );
}
