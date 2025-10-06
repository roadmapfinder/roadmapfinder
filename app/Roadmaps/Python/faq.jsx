// components/FAQ.jsx
import React from "react";

const faqs = [
  // Phase 1 — Beginner
  {
    id: "faq1",
    level: "Phase 1 — Beginner",
    question: "What is Python and why should I learn it?",
    answer:
      "Python is a high-level, versatile programming language widely used in web development, data science, automation, and AI. It's beginner-friendly due to its readable syntax and large community support.",
  },
  {
    id: "faq2",
    level: "Phase 1 — Beginner",
    question: "How do I manage packages and dependencies in Python?",
    answer:
      "You can use `pip` to install packages and `virtualenv` or `venv` to create isolated environments, preventing version conflicts between projects.",
  },
  {
    id: "faq3",
    level: "Phase 1 — Beginner",
    question: "What are Python data types I should know?",
    answer:
      "Key data types include integers, floats, strings, lists, tuples, dictionaries, sets, and booleans. Understanding these helps with data storage and manipulation.",
  },

  // Phase 2 — Intermediate
  {
    id: "faq4",
    level: "Phase 2 — Intermediate",
    question: "What is object-oriented programming (OOP) in Python?",
    answer:
      "OOP is a programming paradigm where data and behavior are encapsulated in objects. Python supports classes, inheritance, polymorphism, and encapsulation to create modular and reusable code.",
  },
  {
    id: "faq5",
    level: "Phase 2 — Intermediate",
    question: "How do I interact with files in Python?",
    answer:
      "Python provides built-in functions to read and write files using `open()`. You can handle text, CSV, JSON, or binary files, and libraries like `pandas` help with structured data.",
  },
  {
    id: "faq6",
    level: "Phase 2 — Intermediate",
    question: "How do I handle exceptions and errors?",
    answer:
      "Use `try`, `except`, `finally` blocks to catch and handle exceptions gracefully. This prevents your program from crashing due to unexpected errors.",
  },

  // Phase 3 — Advanced
  {
    id: "faq7",
    level: "Phase 3 — Advanced",
    question: "What are Python decorators and when should I use them?",
    answer:
      "Decorators are functions that modify other functions or classes. Use them for logging, access control, memoization, or enhancing functionality without changing the original code.",
  },
  {
    id: "faq8",
    level: "Phase 3 — Advanced",
    question: "How do I write unit tests in Python?",
    answer:
      "Use the built-in `unittest` module or `pytest` to write test cases for your functions and classes. Unit tests help ensure your code works correctly and prevent regressions.",
  },
  {
    id: "faq9",
    level: "Phase 3 — Advanced",
    question: "What are common ways to optimize Python code for performance?",
    answer:
      "Use built-in data structures efficiently, avoid unnecessary loops, leverage list comprehensions, use libraries like NumPy for heavy computations, and consider caching or parallel processing where needed.",
  },
  {
    id: "faq10",
    level: "Phase 3 — Advanced",
    question: "How do I deploy a Python application to production?",
    answer:
      "You can deploy web apps using platforms like Heroku, AWS, or Vercel (for FastAPI/Flask). For scripts, use Docker containers or cron jobs for scheduling. Proper logging and environment management are essential.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">❓ Python FAQ</h2>
          <p className="mt-2 text-gray-600">
            Frequently asked questions for Python learners from beginner to advanced. Get clarity on concepts, best practices, and real-world usage.
          </p>
        </header>

        <div className="space-y-6">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow"
            >
              <span className="inline-block text-xs font-medium bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full">
                {faq.level}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                {faq.question}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">{faq.answer}</p>
            </div>
          ))}
        </div>

        <footer className="mt-10 text-sm text-gray-500 text-center">
          Keep exploring, coding, and building projects to master Python and become industry-ready.
        </footer>
      </div>
    </section>
  );
}
