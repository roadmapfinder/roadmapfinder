// components/Docs.jsx
import React from "react";
import { ExternalLink } from "lucide-react";

const docsList = [
  // JavaScript Core
  {
    title: "MDN Web Docs - JavaScript Guide",
    description:
      "Offers structured tutorials and explanations for core JavaScript concepts.",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
    citation: "MDN Web Docs",
  },
  {
    title: "MDN Web Docs - JavaScript Reference",
    description:
      "Provides detailed documentation on JavaScript syntax, operators, methods, and built-in objects.",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference",
    citation: "MDN Web Docs",
  },
  {
    title: "MDN Web Docs - Web APIs",
    description:
      "Explains browser APIs like DOM, Fetch, and Storage, essential for web development.",
    url: "https://developer.mozilla.org/en-US/docs/Web/API",
    citation: "MDN Web Docs",
  },

  // Tutorials
  {
    title: "The Modern JavaScript Tutorial",
    description:
      "Community-driven, in-depth tutorial covering JavaScript from basics to advanced topics.",
    url: "https://javascript.info/",
    citation: "javascript.info",
  },

  // Standards
  {
    title: "ECMAScript Specification (ECMA-262)",
    description:
      "Defines the language's syntax, semantics, and APIs; definitive source for formal standards.",
    url: "https://www.ecma-international.org/publications-and-standards/standards/ecma-262/",
    citation: "Ecma International",
  },

  // Documentation Tools
  {
    title: "JSDoc",
    description:
      "Generates documentation from JavaScript code comments; widely used in projects.",
    url: "https://jsdoc.app/",
    citation: "JSDoc",
  },

  // API Browsers
  {
    title: "DevDocs",
    description:
      "API documentation browser combining multiple documentation sets with fast search and offline access.",
    url: "https://devdocs.io/javascript/",
    citation: "devdocs.io",
  },

  // Learning Resources
  {
    title: "JavaScript.info",
    description:
      "Provides clear explanations, interactive tasks, and focuses on modern JavaScript practices.",
    url: "https://javascript.info/",
    citation: "javascript.info",
  },
];

export default function Docs() {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          📘 JavaScript Documentation Sites
        </h1>
        <p className="text-gray-600 mb-10">
          Official and popular JavaScript documentation links that every learner
          should know in 2025.
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
