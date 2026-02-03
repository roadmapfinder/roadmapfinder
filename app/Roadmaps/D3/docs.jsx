// components/Docs.jsx
"use client";
import React from "react";
import { ExternalLink } from "lucide-react";

const docsList = [
  {
    title: "D3.js Official Website",
    description:
      "The official homepage of D3.js maintained by Mike Bostock. Includes project overview, philosophy, examples, and links to all core documentation.",
    url: "https://d3js.org/",
    citation: "D3 Official",
  },
  {
    title: "D3.js API Reference",
    description:
      "Authoritative and complete API reference for all D3 modules including selections, scales, axes, shapes, transitions, layouts, and utilities.",
    url: "https://d3js.org/api",
    citation: "D3 API",
  },
  {
    title: "D3.js GitHub Repository",
    description:
      "Official GitHub repository containing source code, releases, changelogs, issues, and discussions maintained by the D3 core team.",
    url: "https://github.com/d3/d3",
    citation: "GitHub",
  },
  {
    title: "Observable D3 Gallery",
    description:
      "Official curated gallery of D3 examples hosted on Observable. Includes real-world, interactive, and advanced visualizations by the D3 creators.",
    url: "https://observablehq.com/@d3/gallery",
    citation: "Observable",
  },
  {
    title: "DevDocs – D3.js Reference",
    description:
      "Searchable, offline-friendly documentation for D3.js APIs. Widely used by professionals for quick lookups during development.",
    url: "https://devdocs.io/d3/",
    citation: "DevDocs",
  },
  {
    title: "MDN JavaScript Documentation",
    description:
      "Official JavaScript documentation by Mozilla. Essential for understanding ES6+, arrays, objects, async programming, and DOM APIs used in D3.",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    citation: "MDN",
  },
  {
    title: "MDN SVG Documentation",
    description:
      "Comprehensive reference for SVG elements, attributes, coordinate systems, and transforms — foundational knowledge for D3 visualizations.",
    url: "https://developer.mozilla.org/en-US/docs/Web/SVG",
    citation: "MDN SVG",
  },
  {
    title: "MDN Web APIs",
    description:
      "Official documentation for browser APIs such as ResizeObserver, IntersectionObserver, Canvas, and Events used in advanced D3 projects.",
    url: "https://developer.mozilla.org/en-US/docs/Web/API",
    citation: "MDN Web API",
  },
  {
    title: "React Official Documentation",
    description:
      "Official React documentation covering hooks, rendering, lifecycle, and best practices when integrating D3 with React and Next.js.",
    url: "https://react.dev/",
    citation: "React Docs",
  },
  {
    title: "Next.js Official Documentation",
    description:
      "Official Next.js documentation for server components, client rendering, performance optimization, and production deployment with D3.",
    url: "https://nextjs.org/docs",
    citation: "Next.js Docs",
  },
];

export default function Docs() {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          📊 Official D3.js Documentation Hub
        </h1>
        <p className="text-gray-600 mb-10">
          These are the official and authoritative documentation sources every
          D3.js learner, data visualization engineer, and frontend developer
          must know to build production-ready, interactive visualizations.
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

              <p className="mt-3 text-sm text-gray-600">
                {doc.description}
              </p>

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
