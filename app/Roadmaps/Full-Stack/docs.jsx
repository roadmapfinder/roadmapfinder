// components/Docs.jsx
import React from "react";
import { ExternalLink } from "lucide-react";

const docsList = [
  {
    title: "MDN Web Docs",
    description:
      "Comprehensive reference for HTML, CSS, JavaScript, browser APIs and more.",
    url: "https://developer.mozilla.org/",
    citation: "MDN Web Docs",
  },
  {
    title: "React Documentation",
    description:
      "Official React site for docs, api reference, and learning paths (React v19).",
    url: "https://react.dev/",
    citation: "React Docs",
  },
  {
    title: "TypeScript Documentation",
    description:
      "Comprehensive handbook and reference for TypeScript language and tooling.",
    url: "https://www.typescriptlang.org/docs/",
    citation: "TypeScript Docs",
  },
  {
    title: "Next.js Documentation",
    description:
      "Official Next.js docs covering routing, SSR, API routes, and App Router.",
    url: "https://nextjs.org/docs",
    citation: "Next.js Docs",
  },
  {
    title: "Node.js Documentation",
    description:
      "Official Node.js runtime API reference: modules, HTTP, streams, buffers.",
    url: "https://nodejs.org/api/documentation.html",
    citation: "Node.js Docs",
  },
  {
    title: "Express.js Documentation",
    description:
      "Authoritative docs for building REST APIs and web servers using Express.",
    url: "https://expressjs.com/",
    citation: "Express.js Docs",
  },
];

export default function Docs() {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          📚 Essential Full-Stack Documentation
        </h1>
        <p className="text-gray-600 mb-10">
          Official documentation links for key frontend and backend technologies
          that every full-stack developer should know in 2025.
        </p>

        {/* Cards */}
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
