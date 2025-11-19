import React from "react";
import { ExternalLink } from "lucide-react";

const docsList = [
  {
    title: "NestJS — Official Documentation",
    description:
      "The complete official NestJS documentation covering fundamentals, modules, providers, controllers, middleware, and all core concepts.",
    url: "https://docs.nestjs.com/",
    citation: "NestJS Docs",
  },
  {
    title: "NestJS Modules — Official Guide",
    description:
      "Understanding NestJS modules: feature modules, shared modules, global modules, dependency injection structure, and architecture best practices.",
    url: "https://docs.nestjs.com/modules",
    citation: "NestJS Modules",
  },
  {
    title: "NestJS Guards — Official Guide",
    description:
      "Documentation on guards: handling authorization, route protection, role-based access control (RBAC), and custom guard creation.",
    url: "https://docs.nestjs.com/guards",
    citation: "NestJS Guards",
  },
  {
    title: "NestJS Pipes — Official Guide",
    description:
      "Official guide to pipes for data transformation & validation. Includes built-in pipes, class-validator integration, and custom pipe creation.",
    url: "https://docs.nestjs.com/pipes",
    citation: "NestJS Pipes",
  },
  {
    title: "NestJS Request Lifecycle — FAQ",
    description:
      "Detailed explanation of how NestJS processes each request: middleware → guards → interceptors → pipes → controller → service → response.",
    url: "https://docs.nestjs.com/faq/request-lifecycle",
    citation: "Request Lifecycle",
  },
];

export default function Docs() {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          📚 NestJS Official Documentation
        </h1>
        <p className="text-gray-600 mb-10">
          Essential official NestJS documentation every backend developer must
          know — covering core concepts, architecture, modules, lifecycle, and
          advanced patterns.
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
