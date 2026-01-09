"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is Docker and why should I learn it?",
    answer:
      "Docker allows you to package applications with all their dependencies into containers, ensuring consistency across development, testing, and production environments. It is a core skill for modern backend, DevOps, and cloud engineers.",
  },
  {
    question: "Is Docker only for backend or DevOps roles?",
    answer:
      "No. Frontend developers, mobile developers, and even data engineers use Docker for local development, testing, and deployment consistency. DevOps just uses it more deeply.",
  },
  {
    question: "Do I need Linux knowledge before learning Docker?",
    answer:
      "Basic Linux concepts help a lot. You don’t need to be a Linux expert, but understanding filesystems, processes, and networking will significantly speed up your Docker learning.",
  },
  {
    question: "What is the difference between Docker and Virtual Machines?",
    answer:
      "Virtual Machines virtualize an entire operating system, while Docker containers share the host OS kernel and isolate only the application processes. Containers are lighter, faster, and more efficient.",
  },
  {
    question: "Is Docker enough or should I learn Kubernetes too?",
    answer:
      "Docker is mandatory. Kubernetes comes later. If you skip Docker fundamentals and jump to Kubernetes, you will struggle badly in real-world systems.",
  },
  {
    question: "Can Docker be used in production?",
    answer:
      "Yes. Docker is used in production everywhere. What matters is how you build images, manage secrets, handle networking, and deploy containers correctly.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">
            ❓ Frequently Asked Questions
          </h2>
          <p className="mt-3 text-gray-600">
            Clear answers to common questions about Docker, learning paths, and
            real-world usage.
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
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden px-5 pb-5 text-sm text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer note */}
        <p className="mt-10 text-center text-sm text-gray-500">
          Still confused? Build projects. Confusion disappears when execution
          starts.
        </p>
      </div>
    </section>
  );
}
