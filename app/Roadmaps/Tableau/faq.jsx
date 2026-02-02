"use client";
// components/Faq.jsx

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is Tableau and why is it used in industry?",
    answer:
      "Tableau is a leading Business Intelligence (BI) and data visualization tool used to analyze data and create interactive dashboards. Companies use Tableau to track KPIs, understand trends, support decision-making, and communicate insights clearly to stakeholders.",
  },
  {
    question: "Do I need coding skills to learn Tableau?",
    answer:
      "No coding is required to get started with Tableau. Most analysis is done using drag-and-drop features. However, knowing SQL and basic data concepts will significantly improve your ability to work with real-world datasets and enterprise dashboards.",
  },
  {
    question: "What skills should I learn before starting Tableau?",
    answer:
      "Basic understanding of data concepts like rows, columns, measures, dimensions, and KPIs is helpful. Familiarity with Excel and simple business metrics (sales, profit, growth) will make learning Tableau much easier.",
  },
  {
    question: "What is the difference between Tableau Desktop, Server, and Cloud?",
    answer:
      "Tableau Desktop is used to build dashboards. Tableau Server and Tableau Cloud are used to publish, share, secure, and manage dashboards across teams. Cloud is hosted by Tableau, while Server is self-hosted by organizations.",
  },
  {
    question: "Is Tableau still relevant in 2026 compared to Power BI?",
    answer:
      "Yes. Tableau is widely used in large enterprises, analytics teams, and data-driven organizations. It is especially strong in visual analytics, storytelling, and complex data modeling. Many companies use both Tableau and Power BI depending on use cases.",
  },
  {
    question: "What kind of projects should I build to get a Tableau job?",
    answer:
      "You should build KPI dashboards, executive overview dashboards, customer analysis, financial reporting, and role-based dashboards. Employers look for business thinking, clean design, performance optimization, and clear storytelling — not just charts.",
  },
  {
    question: "Is Tableau certification mandatory to get hired?",
    answer:
      "Certifications are helpful but not mandatory. Recruiters care more about your portfolio, real-world projects, and ability to explain insights. Certifications can boost credibility, especially for entry-level roles.",
  },
  {
    question: "Can Tableau handle large datasets?",
    answer:
      "Yes. Tableau can handle large datasets using extracts, optimized data models, and proper filtering. Performance depends on data structure, calculations used, and whether best practices are followed.",
  },
  {
    question: "What roles can I apply for after learning Tableau?",
    answer:
      "Common roles include Tableau Developer, BI Analyst, Data Analyst, Business Analyst, and Junior Analytics Engineer. With experience, you can grow into Lead BI Engineer or Analytics Consultant roles.",
  },
  {
    question: "How long does it take to become industry-ready in Tableau?",
    answer:
      "With consistent practice, most learners become job-ready in 3–6 months. This includes learning Tableau fundamentals, building real projects, understanding business metrics, and creating a strong portfolio.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <header className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">
            ❓ Tableau Learning FAQs
          </h2>
          <p className="mt-3 text-gray-600">
            Common questions learners ask before and during their Tableau
            journey — answered clearly and honestly.
          </p>
        </header>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border border-gray-200 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="w-full flex items-center justify-between p-5 text-left bg-gray-50 hover:bg-gray-100 transition"
                  aria-expanded={isOpen}
                >
                  <span className="font-medium text-gray-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-500 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="p-5 bg-white text-gray-600 text-sm leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center text-sm text-gray-500">
          Still confused? Build projects, explore official Tableau docs,
          and practice explaining insights — clarity comes with usage.
        </footer>
      </div>
    </section>
  );
}
