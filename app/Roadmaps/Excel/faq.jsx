"use client";
import { useState } from "react";

const faqs = [
  {
    question: "What is Microsoft Excel used for?",
    answer:
      "Excel is used for data analysis, reporting, visualization, automation, and managing large information using formulas, charts, and pivot tables."
  },
  {
    question: "What is the difference between a Workbook and a Worksheet?",
    answer:
      "A workbook is the entire Excel file that contains one or more sheets, while a worksheet is a single tab inside the workbook."
  },
  {
    question: "How do formulas work in Excel?",
    answer:
      "Formulas perform calculations using references, operators, and functions. Every formula starts with an equals sign (=)."
  },
  {
    question: "What are Excel Functions?",
    answer:
      "Functions are predefined formulas like SUM, AVERAGE, IF, VLOOKUP, XLOOKUP, COUNTIF used to perform quick calculations and data operations."
  },
  {
    question: "What is the difference between Absolute and Relative cell references?",
    answer:
      "Relative references change when copied (A1), while absolute references stay fixed using $ symbol like $A$1."
  },
  {
    question: "What is a Pivot Table used for?",
    answer:
      "A pivot table is used to summarize and analyze large data sets — allowing grouping, filtering, and generating business insights quickly."
  },
  {
    question: "What is Excel VBA?",
    answer:
      "VBA (Visual Basic for Applications) is a programming language used to automate repetitive tasks, build macros, and create custom functions."
  },
  {
    question: "How does Power Query help in Excel?",
    answer:
      "Power Query allows users to import, clean, and transform data from multiple sources with click-based automation workflows."
  },
  {
    question: "Which skills are required for Excel jobs in industry?",
    answer:
      "Advanced formulas, PivotTables, data cleaning, dashboards, charts, Power Query, Power Pivot, functions like XLOOKUP, and basic VBA automation."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-4">
      <h2 className="text-2xl font-bold">Excel — Frequently Asked Questions</h2>

      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border rounded-lg p-4 cursor-pointer transition"
          onClick={() => toggleFAQ(index)}
        >
          <h3 className="font-medium">{faq.question}</h3>
          {activeIndex === index && (
            <p className="mt-2 text-gray-600">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
}
