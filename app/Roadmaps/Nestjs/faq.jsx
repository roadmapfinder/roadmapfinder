// components/FAQ.jsx
"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is the MERN stack and why should I learn it?",
    answer:
      "MERN stands for MongoDB, Express, React, and Node.js. It is one of the most popular full-stack development stacks used to build modern, scalable web applications."
  },
  {
    question: "How long does it take to become job-ready in MERN?",
    answer:
      "On average, it takes 3–6 months of consistent learning and building projects to become industry-ready. It depends on your consistency and hands-on practice."
  },
  {
    question: "Do I need DSA (Data Structures & Algorithms) to get a MERN developer job?",
    answer:
      "Basic understanding of arrays, objects, loops, and problem-solving is enough for most MERN developer roles. Advanced DSA is optional for MERN roles unless applying to big tech companies."
  },
  {
    question: "How many projects should I build before applying for jobs?",
    answer:
      "At least 5–7 solid real-world projects including authentication, CRUD operations, real-time features, and an e-commerce system."
  },
  {
    question: "Is TypeScript required for MERN development?",
    answer:
      "TypeScript is not mandatory but highly recommended. It improves reliability, scalability, and code quality in large applications."
  },
  {
    question: "How do I deploy MERN projects?",
    answer:
      "You can deploy MERN apps using platforms like Vercel, Netlify, Render, Railway, and AWS. Databases can be hosted using MongoDB Atlas."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-gray-50 py-16 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <header className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-gray-900">❓ Frequently Asked Questions</h2>
          <p className="mt-3 text-gray-600 text-lg">
            Real and practical questions learners ask while becoming a MERN developer.
          </p>
        </header>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white shadow-sm border border-gray-200 rounded-2xl p-6 cursor-pointer hover:shadow-md transition-all"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                  {isOpen ? (
                    <ChevronUp className="w-6 h-6 text-indigo-600" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-500" />
                  )}
                </div>

                {isOpen && (
                  <p className="mt-3 text-gray-600 leading-relaxed">{faq.answer}</p>
                )}
              </div>
            );
          })}
        </div>

        <footer className="mt-12 text-center text-gray-500 text-sm">
          These FAQs are curated based on real developer queries and industry expectations.
        </footer>
      </div>
    </section>
  );
}
