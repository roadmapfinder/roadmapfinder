// components/FAQ.jsx
"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqData = [
  {
    question: "What is Next.js and why should I learn it?",
    answer:
      "Next.js is a React framework that enables server-side rendering, static site generation, and building full-stack applications. Learning it makes you proficient in building high-performance, SEO-friendly web apps used widely in the industry.",
  },
  {
    question: "Should I learn React before Next.js?",
    answer:
      "Yes. Next.js is built on React, so understanding React fundamentals like components, props, state, and hooks is essential before diving into Next.js.",
  },
  {
    question: "What are the main features of Next.js?",
    answer:
      "Key features include: Server-Side Rendering (SSR), Static Site Generation (SSG), API routes, image optimization, file-based routing, TypeScript support, and built-in SEO optimization.",
  },
  {
    question: "What is the difference between Pages Router and App Router?",
    answer:
      "Pages Router is the traditional routing system in Next.js using file-based routing. App Router is the newer system supporting React Server Components, nested layouts, and advanced routing patterns for scalable apps.",
  },
  {
    question: "How do I fetch data in Next.js?",
    answer:
      "You can fetch data using: getStaticProps (SSG), getServerSideProps (SSR), and client-side fetching (fetch or axios). Each method serves different use cases based on performance and SEO requirements.",
  },
  {
    question: "What are API routes in Next.js?",
    answer:
      "API routes allow you to build backend endpoints directly within your Next.js app. They can handle requests like POST, GET, PUT, DELETE and are perfect for small backend logic without a separate server.",
  },
  {
    question: "How can I deploy a Next.js application?",
    answer:
      "You can deploy on Vercel (official platform), Netlify, AWS, or any server that supports Node.js. Next.js supports static exports, serverless functions, and server-side rendering deployments.",
  },
  {
    question: "Should I use TypeScript with Next.js?",
    answer:
      "Yes, using TypeScript is highly recommended. It adds type safety, improves developer experience, and is widely used in professional Next.js projects.",
  },
  {
    question: "How do I optimize performance in Next.js apps?",
    answer:
      "Use image optimization (`next/image`), lazy loading, static generation (SSG/ISR), caching strategies, code splitting, and minimizing unnecessary re-renders.",
  },
  {
    question: "Can I use Next.js for full-stack applications?",
    answer:
      "Absolutely. Next.js supports API routes for backend logic, can integrate with databases, authentication, and even real-time features, making it suitable for full-stack applications.",
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
          ❓ Next.js Roadmap FAQ
        </h2>
        <p className="text-gray-600 mb-10">
          Answers to the most common questions learners have while mastering Next.js.
        </p>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left"
              >
                <span className="text-gray-900 font-medium">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp size={20} className="text-gray-500" />
                ) : (
                  <ChevronDown size={20} className="text-gray-500" />
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
