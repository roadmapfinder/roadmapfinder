// components/Docs.jsx
"use client"
import React from "react";
import { ExternalLink } from "lucide-react";

const docsList = [
  {
    title: "Express Official Documentation",
    description:
      "The definitive guide to Express.js concepts, middleware, routing, and best practices for building web applications.",
    url: "https://expressjs.com/",
    citation: "Express Docs",
  },
  {
    title: "Node.js Official Documentation",
    description:
      "Comprehensive documentation for Node.js APIs, including HTTP, streams, and core modules essential for backend development.",
    url: "https://nodejs.org/en/docs",
    citation: "Node.js Docs",
  },
  {
    title: "DevDocs — Express",
    description:
      "A fast, searchable, and offline-friendly version of the Express.js documentation, ideal for quick reference.",
    url: "https://devdocs.io/express/",
    citation: "DevDocs Express",
  },
  {
    title: "MDN Express/Node Introduction",
    description:
      "A beginner-friendly guide to understanding Express.js and Node.js, with tutorials and examples for building server-side applications.",
    url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction",
    citation: "MDN Express/Node",
  },
  {
    title: "GeeksforGeeks Express.js Tutorial",
    description:
      "A detailed tutorial covering the basics of Express.js, including routing, middleware, and building RESTful APIs.",
    url: "https://www.geeksforgeeks.org/node-js/express-js/",
    citation: "GeeksforGeeks Express.js",
  },
];

export default function Docs() {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          📘 Express.js Developer Documentation
        </h1>
        <p className="text-gray-600 mb-10">
          Essential resources for mastering Express.js and Node.js, from
          foundational concepts to advanced application development.
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
