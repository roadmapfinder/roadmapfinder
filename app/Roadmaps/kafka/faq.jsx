// components/Faq.jsx
"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is Apache Kafka and why is it used?",
    answer:
      "Apache Kafka is a distributed event streaming platform used to build real-time data pipelines and event-driven systems. It is widely used for high-throughput messaging, real-time analytics, log aggregation, and data integration between services."
  },
  {
    question: "Is Kafka a message queue like RabbitMQ?",
    answer:
      "Kafka is not a traditional message queue. It is a distributed commit log designed for high throughput, durability, and replayability. Unlike RabbitMQ, Kafka allows multiple consumers to read the same data independently and retain messages for a configurable time."
  },
  {
    question: "Do I need prior experience in distributed systems to learn Kafka?",
    answer:
      "No, but having basic knowledge of backend development, networking, and asynchronous processing will help. Kafka concepts like partitions, replication, and consumer groups become much easier once you understand distributed system fundamentals."
  },
  {
    question: "Which programming language is best for Kafka?",
    answer:
      "Kafka is language-agnostic. Java is most commonly used due to native support, but Kafka works extremely well with Python, Node.js, Go, and C#. Choose the language you are already comfortable with."
  },
  {
    question: "What is the difference between Kafka Streams and ksqlDB?",
    answer:
      "Kafka Streams is a Java library for building stream processing applications with full control over logic and state. ksqlDB allows you to process Kafka data using SQL-like queries, making it easier and faster for analytics use cases."
  },
  {
    question: "Is Kafka difficult to use in production?",
    answer:
      "Kafka itself is powerful but complex. Production readiness involves understanding monitoring, security, scaling, and failure handling. Managed services like Confluent Cloud or AWS MSK significantly reduce operational complexity."
  },
  {
    question: "How long does it take to become job-ready in Kafka?",
    answer:
      "With consistent practice and real projects, most learners become Kafka job-ready in 2–3 months. Building production-style projects is far more important than memorizing concepts."
  },
  {
    question: "What kind of roles require Kafka knowledge?",
    answer:
      "Kafka is commonly used in Backend Engineer, Data Engineer, Platform Engineer, and Distributed Systems roles. It is especially valuable in companies working with real-time data."
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-14 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">
            ❓ Kafka FAQs
          </h2>
          <p className="mt-3 text-gray-600">
            Clear answers to common questions every Kafka learner asks before going industry-ready.
          </p>
        </header>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl bg-gray-50 overflow-hidden transition"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-5 text-left focus:outline-none focus-visible:ring focus-visible:ring-indigo-500"
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
                <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center text-sm text-gray-500">
          Still confused? Build projects — Kafka makes the most sense when you use it 🚀
        </footer>
      </div>
    </section>
  );
}
