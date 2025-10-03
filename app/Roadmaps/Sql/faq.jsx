"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is SQL and why should I learn it?",
    answer:
      "SQL (Structured Query Language) is the standard language for managing relational databases. It’s essential for developers, analysts, and data engineers to query, analyze, and manipulate data. Almost every industry uses SQL."
  },
  {
    question: "Which SQL database should I start with?",
    answer:
      "Start with MySQL or PostgreSQL since they’re open-source and widely used. Once comfortable, you can explore MS SQL Server, Oracle, or cloud databases like Snowflake and BigQuery depending on your career path."
  },
  {
    question: "What’s the difference between SQL and NoSQL?",
    answer:
      "SQL databases are relational, use structured schema, and support complex joins. NoSQL databases (like MongoDB) are schema-less, good for unstructured data, and scale horizontally. SQL is still the backbone for transactional and analytical systems."
  },
  {
    question: "How do I design a good database schema?",
    answer:
      "Follow normalization rules (1NF, 2NF, 3NF) to avoid redundancy, define primary/foreign keys, use proper data types, and ensure indexes on frequently queried columns. Start normalized, then denormalize for performance if needed."
  },
  {
    question: "What are indexes and why are they important?",
    answer:
      "Indexes speed up read queries by creating quick lookup structures. However, they slow down writes (INSERT/UPDATE/DELETE). The key is to balance indexing: only index columns used in filtering, joins, or ordering."
  },
  {
    question: "What’s the difference between INNER JOIN, LEFT JOIN, and RIGHT JOIN?",
    answer:
      "INNER JOIN returns only matching rows. LEFT JOIN returns all rows from the left table and matches from the right. RIGHT JOIN does the opposite. Understanding joins is crucial for combining data across tables."
  },
  {
    question: "What are ACID properties in databases?",
    answer:
      "ACID stands for Atomicity, Consistency, Isolation, and Durability. These properties ensure reliability of transactions (like banking). SQL developers must design queries and transactions that respect ACID guarantees."
  },
  {
    question: "How do I optimize slow SQL queries?",
    answer:
      "Common techniques include: using indexes, avoiding SELECT *, analyzing execution plans, rewriting subqueries with JOIN/CTEs, partitioning large tables, and caching results when possible."
  },
  {
    question: "What’s the role of stored procedures, functions, and triggers?",
    answer:
      "Stored procedures encapsulate business logic in the database, functions return computed results, and triggers automatically execute logic on data changes. They help centralize logic but should be used carefully to avoid performance issues."
  },
  {
    question: "How can I become industry-ready as an SQL Developer?",
    answer:
      "1) Master CRUD, joins, and aggregations. 2) Learn indexing and query optimization. 3) Work on real projects (e-commerce, banking, analytics). 4) Understand data warehousing & ETL. 5) Practice with large datasets for performance tuning."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mb-8">
          ❓ SQL Developer Roadmap — Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-slate-200 rounded-xl shadow-sm"
            >
              <button
                className="w-full flex items-center justify-between p-4 text-left"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium text-slate-800">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-slate-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-slate-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4 text-slate-600 text-sm">
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
