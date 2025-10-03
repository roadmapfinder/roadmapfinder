"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Do I need strong math skills to become a data analyst?",
    answer:
      "Not at the start. Basic statistics (mean, median, correlation, probability, hypothesis testing) are enough. Most industry work uses SQL, Excel, and BI tools rather than heavy math.",
  },
  {
    question: "Which tool should I learn first: Excel, SQL, or Python?",
    answer:
      "Start with Excel (for data cleaning & pivot tables), then SQL (for querying databases). Python comes after, for automation and advanced analysis. This order mirrors real industry workflows.",
  },
  {
    question: "What kind of datasets should I practice on?",
    answer:
      "Work with messy, real-world datasets (sales, e-commerce, HR, finance) instead of only clean ones. Kaggle and open government portals provide great practice data.",
  },
  {
    question: "Is learning Tableau/Power BI mandatory?",
    answer:
      "Yes, at least one BI tool is essential. Power BI is more common in enterprises, while Tableau is popular in startups and analytics teams. Both focus on dashboards and storytelling.",
  },
  {
    question: "How do I showcase data analyst projects in my portfolio?",
    answer:
      "Don’t just upload code. Instead, create clean dashboards, reports, or case studies with insights and business recommendations. Recruiters want to see your storytelling ability.",
  },
  {
    question: "What is the difference between a data analyst and a data scientist?",
    answer:
      "A data analyst focuses on cleaning, analyzing, and visualizing data to support business decisions. A data scientist goes further, building predictive models and using advanced statistics/ML.",
  },
  {
    question: "Do companies expect analysts to know machine learning?",
    answer:
      "Not always. Analysts should focus on SQL, Excel, BI tools, and Python for EDA. Knowing basics of clustering/forecasting helps, but machine learning is more of a data scientist skill.",
  },
  {
    question: "How much SQL should I know for interviews?",
    answer:
      "You should master SELECT, JOIN, GROUP BY, HAVING, subqueries, CTEs, and window functions. These cover 80% of real interview questions for analyst roles.",
  },
  {
    question: "What soft skills matter for data analysts?",
    answer:
      "Critical thinking, business acumen, and communication. It's not enough to show numbers—you must explain what they mean for the business and recommend actions.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-12 border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">❓ FAQ</h2>
          <p className="mt-2 text-gray-600">
            Common questions learners ask while becoming industry-ready data
            analysts.
          </p>
        </header>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl shadow-sm"
            >
              <button
                className="flex items-center justify-between w-full px-4 py-3 text-left"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-medium text-gray-900">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4 text-gray-600 text-sm">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
