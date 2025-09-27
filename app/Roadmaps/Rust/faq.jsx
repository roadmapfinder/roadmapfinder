// components/FAQ.jsx
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqData = [
  {
    id: 1,
    question: "What makes Rust different from other programming languages?",
    answer:
      "Rust emphasizes memory safety without needing a garbage collector, using its ownership and borrowing system. It prevents common errors like null pointer dereferencing and data races at compile time.",
  },
  {
    id: 2,
    question: "What is ownership and borrowing in Rust?",
    answer:
      "Ownership is Rust's system to manage memory: each value has a single owner. Borrowing allows references to a value without taking ownership. Lifetimes ensure references are always valid.",
  },
  {
    id: 3,
    question: "When should I use Box, Rc, or Arc in Rust?",
    answer:
      "Use Box for heap allocation of a single owner, Rc for multiple shared ownership in single-threaded contexts, and Arc for multiple shared ownership across threads.",
  },
  {
    id: 4,
    question: "How does Rust handle concurrency safely?",
    answer:
      "Rust enforces thread safety through ownership, Send, and Sync traits. It prevents data races at compile time, making concurrent programming safer than in many other languages.",
  },
  {
    id: 5,
    question: "What is async/await in Rust and when to use it?",
    answer:
      "Async/await allows writing non-blocking code in a sequential style. Use it for I/O-bound operations like HTTP requests or file operations to improve performance without blocking threads.",
  },
  {
    id: 6,
    question: "What is the difference between Result and Option types?",
    answer:
      "Option represents a value that may or may not exist (Some or None). Result represents a computation that can succeed (Ok) or fail (Err), providing a way to handle errors safely.",
  },
  {
    id: 7,
    question: "How can I test my Rust code effectively?",
    answer:
      "Rust supports unit tests and integration tests using `cargo test`. Use assertions, test modules, and integration files to validate functionality and catch regressions.",
  },
  {
    id: 8,
    question: "What is Cargo and why is it important?",
    answer:
      "Cargo is Rust’s package manager and build system. It handles dependencies, compiles code, runs tests, and helps manage project workflows efficiently.",
  },
  {
    id: 9,
    question: "How do I contribute to Rust open-source projects?",
    answer:
      "Start by exploring issues labeled 'good first issue' on repositories like Tokio, Actix, or the Rust compiler. Follow contribution guidelines, write clean code, and submit pull requests.",
  },
  {
    id: 10,
    question: "Which projects should I build to become industry-ready in Rust?",
    answer:
      "Begin with CLI apps and games, move to async web clients and REST APIs, then try systems-level or embedded projects. Focus on using crates like serde, tokio, Actix Web, and writing idiomatic, safe Rust.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          ❓ Rust FAQ — Common Learner Questions
        </h2>
        <p className="text-gray-600 mb-10">
          Frequently asked questions by Rust learners, from core concepts to industry practices.
        </p>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={faq.id}
              className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between w-full text-left text-gray-900 font-medium focus:outline-none"
              >
                {faq.question}
                {openIndex === index ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </button>
              {openIndex === index && (
                <p className="mt-3 text-gray-600 text-sm">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
