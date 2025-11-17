"use client"
import React, { useState } from "react";

const faqData = [
  {
    id: "what-is-wordpress",
    question: "What is WordPress, and why is it used?",
    answer:
      "WordPress is an open-source content management system (CMS) used to build websites, blogs, eCommerce stores, and applications. It is popular because it is customizable, SEO-friendly, scalable, and supports themes and plugins.",
  },
  {
    id: "theme-vs-plugin",
    question: "What is the difference between a WordPress theme and a plugin?",
    answer:
      "A theme controls the design, layout, and appearance of a site, while a plugin extends functionality—such as forms, SEO tools, security, payment systems, etc.",
  },
  {
    id: "child-theme",
    question: "What is a child theme, and why do developers use it?",
    answer:
      "A child theme inherits the design and features of a parent theme but allows customizations without affecting core files. It prevents updates from overwriting your changes.",
  },
  {
    id: "custom-post-types",
    question: "What are Custom Post Types (CPT) in WordPress?",
    answer:
      "Custom Post Types allow you to create new content types besides posts and pages—for example, Portfolio, Events, Courses, Testimonials. They help structure large projects.",
  },
  {
    id: "wp-hooks",
    question: "What are WordPress Hooks (Actions & Filters)?",
    answer:
      "Hooks allow developers to insert custom code into WordPress without editing core files. Actions run at specific events, while Filters modify data before it's displayed.",
  },
  {
    id: "security-best-practices",
    question: "How do you secure a WordPress site?",
    answer:
      "Security includes strong passwords, 2FA, updated themes/plugins, limited login attempts, firewalls, disabling XML-RPC, removing unused plugins, and regular security scans.",
  },
  {
    id: "rest-api",
    question: "What is the WordPress REST API used for?",
    answer:
      "The WordPress REST API allows developers to interact with the site using JSON data. It's used to build headless WordPress apps with React, Next.js, Flutter, etc.",
  },
  {
    id: "performance-optimization",
    question: "How do you optimize WordPress performance?",
    answer:
      "Optimization includes caching, minification, image compression, CDN usage, lazy loading, database cleanup, optimized queries, and using performance-focused hosting.",
  },
  {
    id: "deployment",
    question: "How do you deploy a WordPress site to production?",
    answer:
      "Deployment involves syncing files, migrating databases, updating URLs, configuring SSL, setting correct permissions, testing plugins/themes, and enabling caching/CDN.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  const toggle = (id) => {
    setOpen(open === id ? null : id);
  };

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            ❓ WordPress Developer — Frequently Asked Questions
          </h2>
          <p className="mt-2 text-gray-600">
            Genuine, real-world questions asked by WordPress learners,
            beginners, and professional developers.
          </p>
        </header>

        <div className="space-y-4">
          {faqData.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm"
            >
              <button
                onClick={() => toggle(item.id)}
                className="w-full flex justify-between items-center text-left"
              >
                <span className="text-lg font-medium text-gray-900">
                  {item.question}
                </span>
                <span className="text-indigo-600 font-bold">
                  {open === item.id ? "−" : "+"}
                </span>
              </button>

              {open === item.id && (
                <p className="mt-3 text-gray-600 text-sm">{item.answer}</p>
              )}
            </div>
          ))}
        </div>

        <footer className="mt-10 text-sm text-gray-500 text-center">
          These FAQs help you understand WordPress development from basics to
          production-level concepts.
        </footer>
      </div>
    </section>
  );
}
