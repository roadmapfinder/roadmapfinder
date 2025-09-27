// components/FAQ.jsx
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqData = [
  {
    id: 1,
    question: "What is Angular and why should I learn it?",
    answer:
      "Angular is a TypeScript-based framework for building scalable, modular, and maintainable web applications. Learning Angular helps you develop enterprise-ready apps with features like dependency injection, reactive programming, and strong typing.",
  },
  {
    id: 2,
    question: "Should I learn JavaScript and TypeScript before Angular?",
    answer:
      "Yes. A solid understanding of JavaScript is essential, and since Angular is built with TypeScript, learning it first makes it easier to work with Angular features like types, interfaces, classes, and decorators.",
  },
  {
    id: 3,
    question: "What are the core concepts I need to master in Angular?",
    answer:
      "You should focus on Components, Modules, Services, Directives, Pipes, Routing, Forms (Template-driven & Reactive), HTTPClient for APIs, RxJS for reactive programming, and state management (NgRx or Signals).",
  },
  {
    id: 4,
    question: "What is the difference between Template-driven and Reactive Forms?",
    answer:
      "Template-driven forms are easier to use for simple forms and are defined in the template. Reactive forms are more powerful, scalable, and defined in the component class, offering better control and dynamic validation.",
  },
  {
    id: 5,
    question: "When should I use NgRx or Angular Signals?",
    answer:
      "Use NgRx or Signals for state management in medium to large applications where multiple components share complex state. Signals provide a simpler reactive model, whereas NgRx follows Redux principles for predictable state changes.",
  },
  {
    id: 6,
    question: "How do I make Angular applications production-ready?",
    answer:
      "Focus on optimizing performance, lazy-loading modules, server-side rendering (Angular Universal), PWA support, unit & E2E testing, security best practices, and deploying using CI/CD pipelines to platforms like AWS, Azure, or Firebase.",
  },
  {
    id: 7,
    question: "Should I learn Angular Material or Tailwind CSS?",
    answer:
      "Angular Material helps quickly build consistent UI components with ready-to-use material design. Tailwind CSS is more flexible for custom designs. Ideally, learn both to handle different project requirements.",
  },
  {
    id: 8,
    question: "How do I debug and test Angular applications?",
    answer:
      "Use Angular DevTools for debugging, write unit tests using Jasmine/Karma, and end-to-end tests using Cypress or Protractor. Testing ensures your app is stable and maintainable in production.",
  },
  {
    id: 9,
    question: "What are the best practices for Angular folder structure?",
    answer:
      "Organize your app using feature modules, shared modules, and core modules. Keep components, services, models, and routing organized per feature for scalability and maintainability.",
  },
  {
    id: 10,
    question: "How can I become an industry-ready Angular developer?",
    answer:
      "Build real-world projects covering CRUD apps, e-commerce, dashboards, and chat apps. Master routing, forms, HTTP, state management, RxJS, testing, and deployment. Document your work and showcase it in a portfolio.",
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
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            ❓ Angular Roadmap FAQ
          </h2>
          <p className="mt-2 text-gray-600">
            Common questions learners ask while progressing from beginner to
            industry-ready Angular developer.
          </p>
        </header>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={faq.id}
              className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between w-full text-left focus:outline-none"
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-gray-500" />
                ) : (
                  <ChevronDown className="text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <p className="mt-2 text-gray-600 text-sm">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
