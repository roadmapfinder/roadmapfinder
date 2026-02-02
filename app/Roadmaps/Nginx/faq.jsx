// components/NginxFaq.jsx
"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is NGINX and why is it used?",
    answer:
      "NGINX is a high-performance web server, reverse proxy, load balancer, and API gateway. It is widely used because of its event-driven architecture, low memory usage, and ability to handle high traffic efficiently.",
  },
  {
    question: "Is NGINX only for serving static websites?",
    answer:
      "No. While NGINX is excellent at serving static content, it is most commonly used as a reverse proxy in front of backend applications, as a load balancer, API gateway, and for SSL termination in production systems.",
  },
  {
    question: "Do I need backend knowledge to learn NGINX?",
    answer:
      "Basic backend knowledge helps, but it is not mandatory. You can start with static hosting and gradually move to reverse proxying backend apps like Node.js, Python, or Java services.",
  },
  {
    question: "What is the difference between NGINX and Apache?",
    answer:
      "Apache uses a process/thread-based model, while NGINX uses an event-driven model. NGINX performs better under high concurrency and is commonly used as a reverse proxy and load balancer, even when Apache is used as the backend server.",
  },
  {
    question: "Is NGINX required for DevOps or SRE roles?",
    answer:
      "Yes. NGINX is a core skill for DevOps, SRE, Cloud, and Platform Engineers. It is heavily used for traffic routing, security, scaling, and reliability in real-world production environments.",
  },
  {
    question: "Can NGINX be used with Docker and Kubernetes?",
    answer:
      "Absolutely. NGINX works seamlessly with Docker and is widely used as a Kubernetes Ingress Controller to manage traffic routing, SSL, and load balancing in cloud-native applications.",
  },
  {
    question: "Is NGINX Open Source enough or do I need NGINX Plus?",
    answer:
      "NGINX Open Source is more than enough for most learners and production systems. NGINX Plus adds enterprise features like advanced metrics and dynamic reconfiguration, which are useful in large organizations.",
  },
  {
    question: "How long does it take to become production-ready with NGINX?",
    answer:
      "With consistent practice and real projects, you can become production-ready in 4–6 weeks. Mastery comes from building projects involving reverse proxying, HTTPS, load balancing, and debugging real issues.",
  },
];

export default function NginxFaq() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <header className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">
            ❓ NGINX Frequently Asked Questions
          </h2>
          <p className="mt-3 text-gray-600">
            Common questions answered to help you understand NGINX clearly and
            progress from beginner to industry-ready engineer.
          </p>
        </header>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-gray-200 rounded-2xl bg-gray-50 overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
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
                  <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        <p className="mt-12 text-center text-sm text-gray-500">
          Still confused? Build the projects in the roadmap — real understanding
          comes from hands-on practice.
        </p>
      </div>
    </section>
  );
}
