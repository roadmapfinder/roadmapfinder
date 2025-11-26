"use client";
import React from "react";

const faqs = [
  {
    id: 1,
    question: "What is MongoDB and why should developers learn it?",
    answer:
      "MongoDB is a NoSQL document database used for building scalable and high-performance applications. Developers learn it because it offers flexible schema design, is cloud-native, and powers modern applications like real-time systems, analytics platforms, and AI workloads.",
  },
  {
    id: 2,
    question: "Is MongoDB good for beginners in backend development?",
    answer:
      "Yes. MongoDB is very beginner-friendly due to its JSON-like structure (BSON), simple CRUD operations, easy setup, and rich developer tools like MongoDB Compass and Atlas.",
  },
  {
    id: 3,
    question: "What skills should I master before learning advanced MongoDB topics?",
    answer:
      "You should understand CRUD operations, schema design basics, indexing, aggregation pipelines, and how MongoDB interacts with Node.js or other backend frameworks.",
  },
  {
    id: 4,
    question: "How important are indexes in MongoDB?",
    answer:
      "Indexes are essential when building scalable applications. They improve read performance, help optimize queries, and are a critical part of real-world backend systems.",
  },
  {
    id: 5,
    question: "Can MongoDB handle real-time applications?",
    answer:
      "Yes. MongoDB supports Change Streams, time-series collections, and high-speed writes, making it ideal for chat apps, IoT dashboards, financial analytics, and more.",
  },
  {
    id: 6,
    question: "Is MongoDB suitable for enterprise-level projects?",
    answer:
      "Absolutely. MongoDB is used by companies like Meta, Uber, Adobe, and thousands more due to its scalability, distributed architecture, and cloud ecosystem.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-white py-16 px-6 md:px-10 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900">❓ Frequently Asked Questions</h2>
          <p className="mt-4 text-gray-600 text-lg">
            Clear answers to help you understand MongoDB and your learning journey.
          </p>
        </header>

        <div className="space-y-6">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="group border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all cursor-pointer"
            >
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-green-600">
                {faq.question}
              </h3>
              <p className="mt-3 text-gray-600 leading-relaxed text-sm md:text-base">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <footer className="mt-12 text-center text-gray-500 text-sm">
          Have more questions? Keep learning — the answers come with practice.
        </footer>
      </div>
    </section>
  );
}