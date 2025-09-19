// components/Docs.jsx
import React from "react";
import { ExternalLink } from "lucide-react";

const docsList = [
  {
    title: "Node.js Documentation",
    description:
      "Official Node.js API reference and guides: core runtime, HTTP, streams, modules, and tooling.",
    url: "https://nodejs.org/en/docs",
    citation: "Node.js Docs",
  },
  {
    title: "Express.js Documentation",
    description:
      "Authoritative Express.js docs for building web servers and REST APIs on Node.js.",
    url: "https://expressjs.com/",
    citation: "Express.js Docs",
  },
  {
    title: "FastAPI Documentation",
    description:
      "Modern, high-performance Python API framework with OpenAPI support and interactive docs.",
    url: "https://fastapi.tiangolo.com/",
    citation: "FastAPI Docs",
  },
  {
    title: "Flask Documentation",
    description:
      "Lightweight Python web framework docs: quickstart, user guide, extensions and API reference.",
    url: "https://flask.palletsprojects.com/",
    citation: "Flask Docs",
  },
  {
    title: "Django Documentation",
    description:
      "Comprehensive guides and reference for the Django full-stack Python framework (tutorials, topics).",
    url: "https://docs.djangoproject.com/en/5.2/",
    citation: "Django Docs",
  },
  {
    title: "MDN Web Docs — Express/Node Intro",
    description:
      "Mozilla’s hands-on guide to server-side web development using Node.js and Express.",
    url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction",
    citation: "MDN Web Docs",
  },
  {
    title: "Comparison of Server-Side Frameworks (Wikipedia)",
    description:
      "Structured comparison of many server-side frameworks — helpful when evaluating options.",
    url: "https://en.wikipedia.org/wiki/Comparison_of_server-side_web_frameworks",
    citation: "Wikipedia — Framework Comparison",
  },
];

export default function Docs() {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          📚 Backend Developer Docs
        </h1>
        <p className="text-gray-600 mb-10">
          Official and popular documentation sites every backend learner should
          use — from Node.js & Express to modern Python frameworks and practical
          MDN guides.
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
