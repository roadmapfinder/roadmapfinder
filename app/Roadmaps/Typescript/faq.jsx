import React, { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "What makes TypeScript better than JavaScript for large projects?",
    answer:
      "TypeScript adds static typing, interfaces, and advanced tooling that prevent runtime errors and make refactoring safer. It’s especially valuable for teams working on large or long-term codebases where maintainability and scalability matter.",
  },
  {
    id: 2,
    question: "Do I need to learn JavaScript before learning TypeScript?",
    answer:
      "Yes. TypeScript is a superset of JavaScript, meaning all JS code is valid TS. A solid understanding of ES6+ JavaScript (promises, classes, async/await, etc.) will make learning TypeScript much smoother.",
  },
  {
    id: 3,
    question: "What is the best way to practice TypeScript?",
    answer:
      "Start by converting small JavaScript projects to TypeScript, gradually enabling strict mode. Then, build end-to-end apps with frameworks like Next.js or Express using TypeScript for real-world experience.",
  },
  {
    id: 4,
    question: "What are TypeScript generics and why are they important?",
    answer:
      "Generics allow you to write reusable, type-safe code that works with different data types without sacrificing type safety. They’re heavily used in React hooks, APIs, and libraries like Redux Toolkit and Prisma.",
  },
  {
    id: 5,
    question: "What are common mistakes beginners make in TypeScript?",
    answer:
      "Relying too much on the 'any' type, ignoring compiler warnings, not using interfaces or utility types, and skipping type definitions for third-party libraries are common mistakes that reduce TypeScript’s benefits.",
  },
  {
    id: 6,
    question: "What’s the difference between interfaces and types?",
    answer:
      "Both define object shapes, but interfaces are extendable and mergeable, while types are more flexible (can define unions, intersections, primitives). Use interfaces for object shapes and types for complex compositions.",
  },
  {
    id: 7,
    question: "How does TypeScript integrate with frameworks like React or Next.js?",
    answer:
      "React and Next.js have first-class TypeScript support. You can type props, hooks, API responses, and components to catch bugs early and improve IDE autocomplete — leading to cleaner, safer UI code.",
  },
  {
    id: 8,
    question: "Is TypeScript required for backend frameworks like Node.js or Express?",
    answer:
      "Not required, but highly recommended. TypeScript provides auto-completion, type safety for API inputs/outputs, and prevents common logic errors — all of which are essential in scalable backend systems.",
  },
  {
    id: 9,
    question: "How do I become industry-ready with TypeScript?",
    answer:
      "Build 6–9 progressively complex projects covering frontend (React/Next.js), backend (Express/Prisma), and full-stack type-safe apps (tRPC/GraphQL). Learn to structure large codebases, write reusable types, and integrate CI/CD with type checks.",
  },
  {
    id: 10,
    question: "Which tools and libraries should I master with TypeScript?",
    answer:
      "Key tools include ts-node, ESLint with @typescript-eslint, Jest for testing, Zod for runtime validation, Prisma ORM, and frameworks like Next.js or NestJS. Also learn build tools like tsup and Vite.",
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  return (
    <section className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <header className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            ❓ TypeScript Mastery FAQ
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            Common and practical questions asked by learners and professionals while mastering TypeScript — from setup to production-grade development.
          </p>
        </header>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="border border-slate-200 rounded-xl bg-white shadow-sm hover:shadow-md transition"
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full text-left px-6 py-4 flex justify-between items-center"
              >
                <span className="text-slate-900 font-medium">
                  {faq.question}
                </span>
                <svg
                  className={`h-5 w-5 text-slate-500 transform transition-transform ${
                    openId === faq.id ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {openId === faq.id && (
                <div className="px-6 pb-4 text-slate-600 text-sm border-t border-slate-100">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <footer className="mt-10 text-center text-sm text-slate-500">
          Tip: Keep building real projects while learning — TypeScript confidence comes
          from practice, debugging, and structuring apps for scalability.
        </footer>
      </div>
    </section>
  );
}
