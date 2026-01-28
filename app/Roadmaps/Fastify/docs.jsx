// components/Docs.jsx
"use client";
import React from "react";
import { ExternalLink } from "lucide-react";

const docsList = [
  {
    title: "Fastify Official Documentation",
    description:
      "The complete official Fastify documentation covering core concepts, plugins, lifecycle hooks, schema validation, and production best practices.",
    url: "https://fastify.dev/docs/latest/",
    citation: "Fastify Docs",
  },
  {
    title: "Fastify Getting Started Guide",
    description:
      "Official getting started guide for building your first Fastify server with proper structure and configuration.",
    url: "https://fastify.dev/docs/latest/Guides/Getting-Started/",
    citation: "Fastify Getting Started",
  },
  {
    title: "Fastify API Reference",
    description:
      "Detailed API reference for Fastify core methods, hooks, decorators, and server options.",
    url: "https://fastify.dev/docs/latest/Reference/",
    citation: "Fastify API",
  },
  {
    title: "Fastify Plugin System",
    description:
      "Official documentation explaining Fastify plugins, encapsulation, dependency injection, and modular architecture.",
    url: "https://fastify.dev/docs/latest/Reference/Plugins/",
    citation: "Fastify Plugins",
  },
  {
    title: "Validation & Serialization (JSON Schema)",
    description:
      "Fastify’s schema-first approach using JSON Schema for request validation and response serialization.",
    url: "https://fastify.dev/docs/latest/Reference/Validation-and-Serialization/",
    citation: "Fastify Schema",
  },
  {
    title: "Fastify TypeScript Support",
    description:
      "Official TypeScript documentation including type providers, inference, and best practices for type-safe APIs.",
    url: "https://fastify.dev/docs/latest/Reference/TypeScript/",
    citation: "Fastify TypeScript",
  },
  {
    title: "Fastify Ecosystem & Official Plugins",
    description:
      "List of officially maintained Fastify plugins for authentication, databases, security, and more.",
    url: "https://fastify.dev/docs/latest/Guides/Ecosystem/",
    citation: "Fastify Ecosystem",
  },
  {
    title: "Fastify GitHub Repository",
    description:
      "Official Fastify source code, releases, issues, RFCs, and community discussions.",
    url: "https://github.com/fastify/fastify",
    citation: "Fastify GitHub",
  },
  {
    title: "Node.js Official Documentation",
    description:
      "Official Node.js documentation covering HTTP, streams, event loop, modules, and backend fundamentals required for Fastify.",
    url: "https://nodejs.org/en/docs",
    citation: "Node.js Docs",
  },
  {
    title: "AJV – JSON Schema Validator",
    description:
      "Official AJV documentation. AJV is the JSON Schema validator used internally by Fastify.",
    url: "https://ajv.js.org/",
    citation: "AJV Docs",
  },
  {
    title: "JSON Schema Official Specification",
    description:
      "Official JSON Schema specification used for Fastify request/response validation.",
    url: "https://json-schema.org/",
    citation: "JSON Schema",
  },
  {
    title: "Fastify Swagger / OpenAPI",
    description:
      "Official Fastify plugin for generating OpenAPI (Swagger) documentation from schemas.",
    url: "https://github.com/fastify/fastify-swagger",
    citation: "Fastify Swagger",
  },
  {
    title: "Pino Logger",
    description:
      "Official Pino documentation. Fastify uses Pino for high-performance structured logging.",
    url: "https://getpino.io/#/",
    citation: "Pino Docs",
  },
  {
    title: "Autocannon",
    description:
      "Official HTTP benchmarking tool used to test Fastify performance under load.",
    url: "https://github.com/mcollina/autocannon",
    citation: "Autocannon",
  },
  {
    title: "Docker Documentation",
    description:
      "Official Docker documentation for containerizing and deploying Fastify applications.",
    url: "https://docs.docker.com/",
    citation: "Docker Docs",
  },
  {
    title: "Prometheus Monitoring",
    description:
      "Official Prometheus documentation for metrics and monitoring Fastify applications in production.",
    url: "https://prometheus.io/docs/",
    citation: "Prometheus Docs",
  },
];

export default function Docs() {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          ⚡ Fastify Developer Documentation
        </h1>
        <p className="text-gray-600 mb-10">
          Essential official resources to master Fastify backend development —
          from fundamentals to production-grade systems.
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
