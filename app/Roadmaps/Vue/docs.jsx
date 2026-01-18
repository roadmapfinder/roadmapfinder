// components/VueDocs.jsx
import React from "react";
import { ExternalLink } from "lucide-react";

const docsList = [
  {
    title: "Vue.js — Official Documentation",
    description:
      "Complete official Vue.js documentation covering core concepts, reactivity system, template syntax, Composition API, lifecycle hooks, and best practices.",
    url: "https://vuejs.org/",
    citation: "Vue.js",
  },
  {
    title: "Vue.js — Getting Started Guide",
    description:
      "Official beginner-friendly introduction explaining Vue basics, project setup, component structure, and learning path.",
    url: "https://vuejs.org/guide/introduction.html",
    citation: "Vue.js",
  },
  {
    title: "Vue.js — Composition API",
    description:
      "Detailed guide to Composition API including ref, reactive, computed, watch, lifecycle hooks, and composable patterns.",
    url: "https://vuejs.org/guide/extras/composition-api-faq.html",
    citation: "Vue.js",
  },
  {
    title: "Vue.js — Template Syntax",
    description:
      "Covers directives, interpolation, attribute bindings, conditional rendering, list rendering, and event handling.",
    url: "https://vuejs.org/guide/essentials/template-syntax.html",
    citation: "Vue.js",
  },
  {
    title: "Vue.js — Single File Components",
    description:
      "Learn how Vue SFC files structure template, script, and style blocks for scalable component development.",
    url: "https://vuejs.org/guide/scaling-up/sfc.html",
    citation: "Vue.js",
  },
  {
    title: "Vue.js — Reactivity Fundamentals",
    description:
      "Deep dive into Vue’s reactivity system, dependency tracking, proxy mechanism, and state update flow.",
    url: "https://vuejs.org/guide/essentials/reactivity-fundamentals.html",
    citation: "Vue.js",
  },
  {
    title: "Vue.js — Lifecycle Hooks",
    description:
      "Official lifecycle reference explaining beforeMount, mounted, updated, unmounted, and Composition API equivalents.",
    url: "https://vuejs.org/guide/essentials/lifecycle.html",
    citation: "Vue.js",
  },
  {
    title: "Vue Router — Official Documentation",
    description:
      "Official Vue Router documentation for routing, nested routes, navigation guards, layouts, and lazy loading.",
    url: "https://router.vuejs.org/",
    citation: "Vue Router",
  },
  {
    title: "Pinia — Official Store Library",
    description:
      "Official state management solution for Vue explaining stores, actions, getters, plugins, and devtools.",
    url: "https://pinia.vuejs.org/",
    citation: "Pinia",
  },
  {
    title: "Nuxt.js — Official Documentation",
    description:
      "Official Nuxt framework documentation covering SSR, SEO, routing, server routes, middleware, and deployment.",
    url: "https://nuxt.com/",
    citation: "Nuxt",
  },
  {
    title: "Vite — Official Documentation",
    description:
      "Vite official docs explaining modern build tooling, fast HMR, plugins, environment variables, and Vue integration.",
    url: "https://vitejs.dev/",
    citation: "Vite",
  },
  {
    title: "Vue.js — GitHub Repository",
    description:
      "Official Vue GitHub repository with source code, RFCs, discussions, issues, and version releases.",
    url: "https://github.com/vuejs/core",
    citation: "GitHub",
  },
];

export default function VueDocs() {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          📘 Vue.js Official Documentation
        </h1>
        <p className="text-gray-600 mb-10">
          Official Vue.js ecosystem documentation every Vue developer must know —
          from core fundamentals and state management to routing, SSR, and production deployment.
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
