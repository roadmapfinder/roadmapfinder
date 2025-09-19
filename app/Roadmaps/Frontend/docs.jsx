// components/Docs.jsx
import React from "react";
import { ExternalLink } from "lucide-react";

const docsList = [
  {
    title: "HTML/CSS",
    description:
      "Learn the foundation of the web with semantic HTML and modern CSS.",
    url: "https://developer.mozilla.org/",
    citation: "MDN Web Docs",
  },
  {
    title: "JavaScript",
    description:
      "Comprehensive JS guide for beginners to advanced developers.",
    url: "https://javascript.info/",
    citation: "JavaScript.info",
  },
  {
    title: "React",
    description:
      "Official React documentation with guides, hooks, and examples.",
    url: "https://react.dev/",
    citation: "React Docs",
  },
  {
    title: "Next.js",
    description:
      "Learn full-stack React with routing, SSR, and API routes.",
    url: "https://nextjs.org/docs",
    citation: "Next.js Docs",
  },
  {
    title: "TypeScript",
    description:
      "Typed JavaScript at scale – official docs and guides.",
    url: "https://www.typescriptlang.org/docs/",
    citation: "TypeScript Docs",
  },
  {
    title: "Tailwind CSS",
    description:
      "Utility-first CSS framework for rapid UI development.",
    url: "https://tailwindcss.com/docs",
    citation: "Tailwind Docs",
  },
  {
    title: "Redux Toolkit",
    description:
      "State management made easy with Redux Toolkit.",
    url: "https://redux-toolkit.js.org/",
    citation: "Redux Toolkit Docs",
  },
  {
    title: "Jest (Testing)",
    description:
      "Delightful JavaScript testing framework with unit test support.",
    url: "https://jestjs.io/docs/getting-started",
    citation: "Jest Docs",
  },
  {
    title: "Cypress (Testing)",
    description:
      "End-to-end testing framework for modern web apps.",
    url: "https://docs.cypress.io/",
    citation: "Cypress Docs",
  },
];

export default function Docs() {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          📚 Frontend Developer Docs
        </h1>
        <p className="text-gray-600 mb-10">
          Explore official and popular documentation resources that every
          frontend developer should master — from HTML/CSS and JavaScript
          to modern frameworks, state management, and testing tools.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {docsList.map((doc) => (
            <a
              key={doc.title}
              href={doc.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">
                  {doc.title}
                </h3>
                <ExternalLink
                  size={18}
                  className="text-gray-400 group-hover:text-blue-600"
                  aria-hidden="true"
                />
              </div>

              <p className="mt-3 text-sm text-gray-600">{doc.description}</p>

              <p className="mt-4 text-xs text-indigo-600 font-medium">
                {doc.citation}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
