// components/AstroDocs.jsx
"use client"
import React from "react";
import { ExternalLink } from "lucide-react";

const docsList = [
  {
    title: "Astro Documentation Home",
    description:
      "Official Astro framework documentation — components, routing, layouts, islands architecture, integrations, and deployment.",
    url: "https://docs.astro.build/",
    citation: "Astro Docs",
  },
  {
    title: "Astro Getting Started",
    description:
      "Beginner-friendly introduction to Astro — project setup, file structure, basic components, and first pages.",
    url: "https://docs.astro.build/en/getting-started/",
    citation: "Astro Getting Started",
  },
  {
    title: "Astro Tutorial (Build a Blog)",
    description:
      "Step-by-step official tutorial to build a real Astro blog using layouts, Markdown, collections, and routing.",
    url: "https://docs.astro.build/en/tutorial/0-introduction/",
    citation: "Astro Tutorial",
  },
  {
    title: "Astro Content Collections",
    description:
      "Type-safe content management using Markdown/MDX with schemas, validation, and structured content.",
    url: "https://docs.astro.build/en/guides/content-collections/",
    citation: "Content Collections",
  },
  {
    title: "Astro Islands Architecture",
    description:
      "Deep dive into Astro’s partial hydration model — server-first rendering and interactive islands.",
    url: "https://docs.astro.build/en/concepts/islands/",
    citation: "Islands Architecture",
  },
  {
    title: "Astro Routing & Pages",
    description:
      "File-based routing, dynamic routes, pagination, nested layouts, and endpoint handling.",
    url: "https://docs.astro.build/en/core-concepts/routing/",
    citation: "Astro Routing",
  },
  {
    title: "Astro Styling Guide",
    description:
      "Scoped styles, global CSS, CSS modules, Tailwind CSS, and styling best practices.",
    url: "https://docs.astro.build/en/guides/styling/",
    citation: "Astro Styling",
  },
  {
    title: "Astro Integrations",
    description:
      "Official integrations for React, Vue, Svelte, Solid, Tailwind, MDX, Sitemap, and more.",
    url: "https://docs.astro.build/en/guides/integrations-guide/",
    citation: "Astro Integrations",
  },
  {
    title: "Astro SSR & Server Rendering",
    description:
      "Server-side rendering, hybrid output, adapters, and backend capabilities in Astro.",
    url: "https://docs.astro.build/en/guides/server-side-rendering/",
    citation: "Astro SSR",
  },
  {
    title: "Astro API Routes",
    description:
      "Create backend APIs using Astro — REST endpoints, JSON responses, auth, and data handling.",
    url: "https://docs.astro.build/en/guides/api-routes/",
    citation: "Astro API Routes",
  },
  {
    title: "Astro Actions",
    description:
      "Modern server actions for handling forms, mutations, and secure server logic.",
    url: "https://docs.astro.build/en/guides/actions/",
    citation: "Astro Actions",
  },
  {
    title: "Astro Deployment Guide",
    description:
      "Deploy Astro apps to Vercel, Netlify, Cloudflare, Node, and other platforms.",
    url: "https://docs.astro.build/en/guides/deploy/",
    citation: "Astro Deployment",
  },
  {
    title: "Vite Documentation",
    description:
      "Astro’s build tool — fast dev server, bundling, plugins, and optimization.",
    url: "https://vitejs.dev/guide/",
    citation: "Vite Docs",
  },
  {
    title: "MDX Documentation",
    description:
      "Markdown with JSX support — write interactive content inside Astro projects.",
    url: "https://mdxjs.com/docs/",
    citation: "MDX Docs",
  },
  {
    title: "TypeScript Documentation",
    description:
      "Type safety for Astro projects — types, interfaces, generics, and tooling.",
    url: "https://www.typescriptlang.org/docs/",
    citation: "TypeScript Docs",
  },
  {
    title: "Tailwind CSS Documentation",
    description:
      "Utility-first CSS framework commonly used with Astro for rapid UI development.",
    url: "https://tailwindcss.com/docs",
    citation: "Tailwind Docs",
  },
  {
    title: "SolidJS Documentation",
    description:
      "High-performance reactive UI library — highly recommended for Astro islands.",
    url: "https://www.solidjs.com/docs/latest",
    citation: "SolidJS Docs",
  },
];

export default function AstroDocs() {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          🌌 Astro Official Documentation Resources
        </h1>
        <p className="text-gray-600 mb-10">
          Essential official documentation every Astro learner must know —
          framework fundamentals, content systems, islands architecture,
          server features, integrations, and production deployment.
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
