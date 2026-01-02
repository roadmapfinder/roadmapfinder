"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is Electron.js and when should I use it?",
    answer:
      "Electron.js is a framework for building cross-platform desktop applications using web technologies like HTML, CSS, and JavaScript. Use it when you want to ship desktop apps for Windows, macOS, and Linux from a single codebase."
  },
  {
    question: "Do I need to know React or Vue before learning Electron?",
    answer:
      "No, Electron works with plain HTML and JavaScript. However, knowing React, Vue, or similar frameworks is highly recommended because most production Electron apps use them for better scalability and maintainability."
  },
  {
    question: "Is Electron suitable for large-scale, production apps?",
    answer:
      "Yes. Popular apps like VS Code, Slack, Discord, Notion, and Figma Desktop are built with Electron. When built correctly with performance and security best practices, Electron scales very well."
  },
  {
    question: "How does Electron handle security?",
    answer:
      "Electron provides strong security mechanisms such as context isolation, sandboxing, and restricted IPC. Developers must follow best practices like disabling nodeIntegration in the renderer and validating all IPC messages."
  },
  {
    question: "Are Electron apps heavy or slow?",
    answer:
      "Electron apps can consume more memory than native apps, but with modern optimizations like code splitting, lazy loading, and proper window management, performance is excellent for most real-world use cases."
  },
  {
    question: "Can Electron apps access the file system and OS features?",
    answer:
      "Yes. Electron allows controlled access to the file system, system tray, native dialogs, notifications, clipboard, and more through Node.js and Electron APIs."
  },
  {
    question: "Is Electron a good career choice in 2026?",
    answer:
      "Absolutely. Desktop apps remain critical in productivity, developer tools, fintech, and SaaS. Skilled Electron engineers are in demand, especially those who understand performance, security, and architecture."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            ❓ Frequently Asked Questions
          </h2>
          <p className="mt-3 text-gray-600">
            Everything you need to know before and while learning Electron.js.
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
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none focus-visible:ring focus-visible:ring-indigo-500"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {/* Answer */}
                <div
                  className={`px-6 pb-5 text-sm text-gray-600 leading-relaxed transition-all duration-200 ${
                    isOpen ? "block" : "hidden"
                  }`}
                >
                  {faq.answer}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer note */}
        <p className="mt-10 text-center text-sm text-gray-500">
          💡 Still have questions? Build projects — real understanding comes
          from practice.
        </p>
      </div>
    </section>
  );
}
