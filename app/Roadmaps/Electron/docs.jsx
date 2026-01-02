// components/Docs.jsx
"use client";
import React from "react";
import { ExternalLink } from "lucide-react";

const docsList = [
  {
    title: "Electron Official Documentation",
    description:
      "The primary and authoritative source for Electron.js. Covers core concepts, APIs, security best practices, tutorials, and production-ready desktop application development.",
    url: "https://www.electronjs.org/docs/latest",
    citation: "Electron Docs",
  },
  {
    title: "Node.js Official Documentation",
    description:
      "Comprehensive reference for Node.js core APIs including file system, processes, streams, networking, and modules essential for Electron backend logic.",
    url: "https://nodejs.org/docs/latest/api/",
    citation: "Node.js Docs",
  },
  {
    title: "MDN Web Docs (HTML, CSS, JavaScript)",
    description:
      "The definitive documentation for web platform fundamentals such as HTML, CSS, JavaScript, and browser APIs used inside Electron renderer processes.",
    url: "https://developer.mozilla.org/",
    citation: "MDN Web Docs",
  },
  {
    title: "JavaScript Language Reference (MDN)",
    description:
      "In-depth reference for modern JavaScript (ES6+) including async programming, promises, classes, modules, and language specifications.",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    citation: "JavaScript Docs",
  },
  {
    title: "TypeScript Official Documentation",
    description:
      "Official TypeScript documentation covering static typing, interfaces, generics, strict mode, and large-scale application patterns widely used in Electron projects.",
    url: "https://www.typescriptlang.org/docs",
    citation: "TypeScript Docs",
  },
  {
    title: "React Official Documentation",
    description:
      "The official React documentation for building modern user interfaces commonly used in Electron renderer processes with hooks, state management, and component architecture.",
    url: "https://react.dev/",
    citation: "React Docs",
  },
  
  {
    title: "Tailwind CSS Official Documentation",
    description:
      "Utility-first CSS framework documentation for building clean, responsive, and consistent desktop application interfaces in Electron.",
    url: "https://tailwindcss.com/docs",
    citation: "Tailwind CSS Docs",
  },
  {
    title: "ECMAScript (JavaScript) Specification",
    description:
      "The official ECMAScript language specification defining how JavaScript works at the language level, useful for advanced understanding and edge cases.",
    url: "https://262.ecma-international.org/",
    citation: "ECMA-262 Spec",
  },
];

export default function Docs() {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          📚 Official Documentation Every Electron Developer Must Know
        </h1>
        <p className="text-gray-600 mb-10">
          These are the official and authoritative documentation sources you
          should regularly read and reference while learning and building
          real-world Electron.js desktop applications.
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
