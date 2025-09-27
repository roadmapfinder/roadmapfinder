// components/Docs.jsx
import React from "react";
import { ExternalLink } from "lucide-react";

const docsList = [
  {
    title: "Angular (Core) Documentation",
    description:
      "The primary source for everything Angular — guides, tutorials, API reference, and examples.",
    url: "https://angular.io/docs",
    citation: "Angular Docs",
  },
  {
    title: "Angular Architecture Guide",
    description:
      "Understand how Angular apps are structured: modules, components, services, and dependency injection.",
    url: "https://angular.io/guide/architecture",
    citation: "Angular Architecture",
  },
  {
    title: "Angular Components",
    description:
      "Learn about component anatomy, lifecycle hooks, template syntax, and best practices.",
    url: "https://angular.io/guide/components",
    citation: "Angular Components",
  },
  {
    title: "Angular Signals",
    description:
      "Reactive primitives in Angular — signals, computed values, and effects for state management.",
    url: "https://angular.io/guide/signals",
    citation: "Angular Signals",
  },
  {
    title: "Angular Releases & Versions",
    description:
      "Stay updated with Angular’s release cycles, support windows, and migration guides.",
    url: "https://angular.dev/reference/releases",
    citation: "Angular Release Info",
  },
  {
    title: "NgRx Documentation",
    description:
      "Official docs for NgRx state management — store, actions, reducers, effects, and selectors.",
    url: "https://ngrx.io/",
    citation: "NgRx Docs",
  },
  {
    title: "NgRx Signals / SignalStore",
    description:
      "Learn how to integrate Angular Signals with NgRx for modern reactive state management.",
    url: "https://ngrx.io/guide/signals",
    citation: "NgRx Signals Guide",
  },
];

export default function Docs() {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          📘 Angular Documentation Resources
        </h1>
        <p className="text-gray-600 mb-10">
          Official Angular and NgRx documentation every learner should follow —
          from core concepts and components to signals, state management, and
          version updates.
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
