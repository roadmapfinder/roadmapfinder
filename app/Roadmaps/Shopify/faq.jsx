"use client";

import React from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What skills do I need before starting Shopify development?",
    answer:
      "You should know HTML, CSS, JavaScript basics, Git, and fundamentals of any backend language like Node.js. Liquid templating syntax is essential once you start building Shopify themes.",
  },
  {
    question: "Do I need to know React to become a Shopify developer?",
    answer:
      "React is not required for theme development, but it is extremely important for Shopify App Development and Checkout/Theme Extensions. Shopify also uses React in Polaris and Hydrogen.",
  },
  {
    question: "Is Shopify theme development and app development the same?",
    answer:
      "No. Theme development uses Liquid, HTML/CSS, and JavaScript to customize online store design. App development requires backend logic, APIs, OAuth, databases, Polaris UI, and often React.",
  },
  {
    question: "Do I need a Shopify Partner Account?",
    answer:
      "Yes, a Shopify Partner Account is completely free and required to create unlimited development stores, test apps, submit apps, and access partner-exclusive tools.",
  },
  {
    question: "Which programming languages are used in Shopify apps?",
    answer:
      "Most Shopify apps use Node.js + Remix, but you can also use PHP, Python, Ruby, or Go. The core requirement is the ability to handle OAuth, session storage, and API integrations.",
  },
  {
    question: "How long does it take to become a Shopify developer?",
    answer:
      "With consistent learning, theme development takes 1–2 months, while app development and extensions take 3–6 months. Industry-ready developers typically master both sides in 6–12 months.",
  },
  {
    question: "What is the difference between Liquid and JavaScript in Shopify?",
    answer:
      "Liquid is rendered on the server and is used for templates, loops, and data output. JavaScript is used for dynamic interactions, AJAX carts, animations, and Shopify’s JS APIs.",
  },
  {
    question: "Can I build Shopify apps without publishing them on the app store?",
    answer:
      "Yes. You can build custom apps for specific clients without submitting them to the public app store. Many Shopify developers earn their income through private client apps.",
  },
  {
    question: "Does Shopify support headless development?",
    answer:
      "Yes. Shopify fully supports headless using Hydrogen (React framework) and Storefront API. Headless is ideal for large brands needing ultra-fast custom storefronts.",
  },
  {
    question: "How much can a Shopify developer earn?",
    answer:
      "Freelancers typically charge $20–$120/hr depending on skills. Theme developers earn $1k–$5k per project, and app developers can earn significantly more based on custom app scope.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-white py-14 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center">
          ❓ Shopify Developer — Frequently Asked Questions
        </h2>
        <p className="text-gray-600 text-center mt-3 mb-10">
          All common questions learners ask while becoming Shopify developers.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group bg-gray-50 border border-gray-200 rounded-xl p-5 hover:bg-gray-100 transition"
            >
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <span className="text-gray-900 font-semibold">
                  {faq.question}
                </span>
                <ChevronDown className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" />
              </summary>

              <p className="mt-3 text-gray-600 leading-relaxed">{faq.answer}</p>
            </details>
          ))}
        </div>

        <p className="text-center text-sm text-gray-500 mt-10">
          Still have questions? Feel free to ask anytime.
        </p>
      </div>
    </section>
  );
}
