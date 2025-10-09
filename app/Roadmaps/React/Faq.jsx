import React, { useState } from "react";

const faqs = [
  {
    id: "react-faq-1",
    question: "What is React.js and why is it used?",
    answer:
      "React.js is an open-source JavaScript library developed by Facebook for building fast, interactive user interfaces. It’s used because it promotes reusable components, efficient rendering through the virtual DOM, and makes complex UIs easier to manage.",
  },
  {
    id: "react-faq-2",
    question: "What is the difference between a class component and a functional component?",
    answer:
      "Class components use ES6 classes and have lifecycle methods, while functional components are simpler and use hooks like useState and useEffect for state and lifecycle management. Functional components are now the recommended approach.",
  },
  {
    id: "react-faq-3",
    question: "What are React Hooks?",
    answer:
      "Hooks are special functions introduced in React 16.8 that let you use state and other React features in functional components. Common hooks include useState, useEffect, useContext, and useRef.",
  },
  {
    id: "react-faq-4",
    question: "What is JSX and why is it used?",
    answer:
      "JSX is a syntax extension that allows you to write HTML-like code inside JavaScript. It makes your React components more readable and easier to maintain by combining markup and logic in one place.",
  },
  {
    id: "react-faq-5",
    question: "How does the Virtual DOM work in React?",
    answer:
      "The Virtual DOM is a lightweight copy of the real DOM. React uses it to efficiently detect changes and update only the parts of the UI that need re-rendering, improving app performance.",
  },
  {
    id: "react-faq-6",
    question: "What is the purpose of useEffect in React?",
    answer:
      "The useEffect hook lets you perform side effects like fetching data, updating the DOM, or setting up subscriptions. It runs after the component renders and can clean up automatically when dependencies change.",
  },
  {
    id: "react-faq-7",
    question: "How do props differ from state in React?",
    answer:
      "Props are used to pass data from a parent component to a child component, while state is used to manage data within a component itself. Props are read-only, whereas state is mutable.",
  },
  {
    id: "react-faq-8",
    question: "What are keys in React and why are they important?",
    answer:
      "Keys help React identify which items in a list have changed, been added, or removed. They improve rendering performance and prevent UI bugs during re-renders. Each key should be unique among siblings.",
  },
  {
    id: "react-faq-9",
    question: "What is React Router and why do we use it?",
    answer:
      "React Router is a library for handling navigation and routing in React applications. It allows you to create multi-page experiences with dynamic URLs without reloading the entire page.",
  },
  {
    id: "react-faq-10",
    question: "What is the difference between Context API and Redux?",
    answer:
      "The Context API is built into React and is great for simple global state management. Redux is an external library better suited for large applications requiring predictable and centralized state management.",
  },
];

const FAQ = () => {
  const [activeId, setActiveId] = useState(null);

  const toggleFAQ = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="max-w-3xl mx-auto py-10 px-6">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
        React.js — Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="border border-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition duration-200 bg-white"
          >
            <button
              onClick={() => toggleFAQ(faq.id)}
              className="w-full flex justify-between items-center text-left text-gray-800 font-medium focus:outline-none"
            >
              <span>{faq.question}</span>
              <span className="text-xl">{activeId === faq.id ? "−" : "+"}</span>
            </button>

            {activeId === faq.id && (
              <p className="mt-3 text-gray-600 leading-relaxed">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
