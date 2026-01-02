// components/SystemDesignDocs.jsx

import React from "react";
import { ExternalLink } from "lucide-react";

const docsList = [
  {
    title: "Tailwind CSS — Official Documentation",
    description:
      "Complete official Tailwind CSS documentation covering utility-first concepts, installation, core utilities, responsive design, customization, dark mode, and best practices.",
    url: "https://tailwindcss.com/docs/",
    citation: "Tailwind CSS",
  },
  {
    title: "Tailwind CSS — Installation Guide",
    description:
      "Official getting started guide explaining Play CDN, CLI installation, PostCSS setup, and production-ready Tailwind configuration.",
    url: "https://tailwindcss.com/docs/installation",
    citation: "Tailwind CSS",
  },
  {
    title: "Tailwind CSS — Framework Installation Guides",
    description:
      "Framework-specific setup guides for React, Next.js, Vite, Vue, Nuxt, Svelte, and more with optimized Tailwind integration.",
    url: "https://tailwindcss.com/docs/installation/framework-guides",
    citation: "Tailwind CSS",
  },
  {
    title: "Tailwind CSS — Adding Custom Styles",
    description:
      "Guide on extending the Tailwind theme using tailwind.config.js, custom colors, fonts, spacing scales, animations, and design tokens.",
    url: "https://tailwindcss.com/docs/adding-custom-styles",
    citation: "Tailwind CSS",
  },
  {
    title: "Tailwind CSS — Detecting Classes in Source Files",
    description:
      "Learn how Tailwind scans source files to generate optimized CSS bundles, avoid purge issues, and ensure production performance.",
    url: "https://tailwindcss.com/docs/detecting-classes-in-source-files",
    citation: "Tailwind CSS",
  },
  {
    title: "Tailwind CSS — Functions & Directives",
    description:
      "Official documentation for Tailwind directives and functions like @tailwind, @apply, theme(), and responsive utilities.",
    url: "https://tailwindcss.com/docs/functions-and-directives",
    citation: "Tailwind CSS",
  },
  {
    title: "Tailwind CSS — Hover, Focus & State Variants",
    description:
      "Covers interactive state variants including hover, focus, focus-visible, active, group, peer, disabled, and dark mode usage.",
    url: "https://tailwindcss.com/docs/hover-focus-and-other-states",
    citation: "Tailwind CSS",
  },
  {
    title: "Tailwind CSS — Editor Setup & IntelliSense",
    description:
      "Official guide for setting up Tailwind IntelliSense with VS Code and other editors to improve productivity and DX.",
    url: "https://tailwindcss.com/docs/editor-setup",
    citation: "Tailwind CSS",
  },
  {
    title: "Tailwind UI — Official Component Library",
    description:
      "Premium component and template library built by Tailwind Labs showcasing production-grade Tailwind patterns and UI systems.",
    url: "https://tailwindcss.com/plus",
    citation: "Tailwind Labs",
  },
  {
    title: "Tailwind CSS — GitHub Repository",
    description:
      "Official Tailwind CSS GitHub repository containing source code, discussions, issues, RFCs, and release updates.",
    url: "https://github.com/tailwindlabs/tailwindcss",
    citation: "GitHub",
  },
];

export default function TailwindDocs() {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          📘 Tailwind CSS Documentation
        </h1>
        <p className="text-gray-600 mb-10">
          Official documentation links every Tailwind CSS learner must know —
          from core concepts and installation to customization, performance, and production-ready UI development.
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
