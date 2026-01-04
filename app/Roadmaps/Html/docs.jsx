// components/Docs.jsx
"use client";
import React from "react";
import { ExternalLink } from "lucide-react";

const docsList = [
  {
    title: "HTML Living Standard (WHATWG)",
    description:
      "The official and authoritative HTML specification followed by all modern browsers. Defines how HTML actually works at the platform level, including elements, parsing rules, APIs, and browser behavior.",
    url: "https://html.spec.whatwg.org/",
    citation: "WHATWG HTML Spec",
  },
  {
    title: "MDN Web Docs — HTML",
    description:
      "The most trusted developer-friendly documentation for HTML. Covers elements, attributes, semantics, accessibility, examples, and best practices used in real-world web development.",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    citation: "MDN HTML Docs",
  },
  {
    title: "web.dev — Learn HTML",
    description:
      "A structured, modern HTML learning path by Google. Focuses on semantic HTML, accessibility, performance, and real-world best practices aligned with current web standards.",
    url: "https://web.dev/learn/html",
    citation: "web.dev HTML",
  },
  {
    title: "W3C HTML Specification (Snapshot)",
    description:
      "The World Wide Web Consortium’s snapshot of HTML specifications. Useful for understanding formal standards, historical context, and compliance-focused documentation.",
    url: "https://www.w3.org/TR/html52/",
    citation: "W3C HTML Spec",
  },
  {
    title: "ARIA Authoring Practices (WAI-ARIA)",
    description:
      "Official accessibility guidance for building inclusive web interfaces. Explains how HTML semantics and ARIA roles should be used to support screen readers and assistive technologies.",
    url: "https://www.w3.org/WAI/ARIA/apg/",
    citation: "WAI-ARIA Docs",
  },
  {
    title: "HTML Validator (W3C)",
    description:
      "The official W3C HTML validation service used to check markup correctness, standards compliance, and structural errors in production HTML documents.",
    url: "https://validator.w3.org/",
    citation: "W3C Validator",
  },
  {
    title: "Schema.org (Structured Data)",
    description:
      "Official structured data vocabulary used with HTML to enhance SEO, enable rich search results, and improve content understanding by search engines.",
    url: "https://schema.org/",
    citation: "Schema.org",
  },
  {
    title: "Can I use — HTML & Web Features",
    description:
      "Authoritative browser compatibility database for HTML elements and web features. Essential for understanding cross-browser support and production readiness.",
    url: "https://caniuse.com/",
    citation: "Can I use",
  },
];

export default function Docs() {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          📚 Official Documentation Every HTML Developer Must Know
        </h1>
        <p className="text-gray-600 mb-10">
          These are the official, standards-based, and industry-trusted
          documentation sources every HTML learner should regularly study to
          write semantic, accessible, SEO-friendly, and production-ready HTML.
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
