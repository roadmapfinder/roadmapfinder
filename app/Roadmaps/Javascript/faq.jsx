// components/FAQ.jsx
import React, { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "What is the difference between var, let, and const in JavaScript?",
    answer:
      "var is function-scoped and can be redeclared, let and const are block-scoped. const cannot be reassigned after declaration.",
  },
  {
    id: 2,
    question: "What is the difference between == and === in JavaScript?",
    answer:
      "== checks for value equality with type coercion, while === checks for strict equality (value and type must match).",
  },
  {
    id: 3,
    question: "What are closures in JavaScript?",
    answer:
      "A closure is a function that has access to variables from its outer scope even after the outer function has executed.",
  },
  {
    id: 4,
    question: "What is the event loop in JavaScript?",
    answer:
      "The event loop is a mechanism that handles asynchronous callbacks in JavaScript, allowing non-blocking I/O operations.",
  },
  {
    id: 5,
    question: "How does 'this' work in JavaScript?",
    answer:
      "'this' refers to the object that is executing the current function. Its value depends on how the function is called.",
  },
  {
    id: 6,
    question: "What is the difference between null and undefined?",
    answer:
      "undefined means a variable has been declared but not assigned a value. null is an assignment value representing no value.",
  },
  {
    id: 7,
    question: "What are Promises and how do they work?",
    answer:
      "Promises represent the eventual completion or failure of an asynchronous operation and allow chaining with then() and catch().",
  },
  {
    id: 8,
    question: "What is the difference between synchronous and asynchronous code?",
    answer:
      "Synchronous code executes sequentially, blocking further execution. Asynchronous code executes independently, allowing other operations to run.",
  },
];

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="faq-container max-w-3xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6 text-center">JavaScript FAQs</h2>
      <div className="space-y-4">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="faq-item border border-gray-300 rounded-lg p-4 cursor-pointer transition hover:bg-gray-50"
            onClick={() => toggleFAQ(faq.id)}
          >
            <h3 className="text-xl font-medium">{faq.question}</h3>
            {openId === faq.id && (
              <p className="mt-2 text-gray-700">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
