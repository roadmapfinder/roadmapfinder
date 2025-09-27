// components/KotlinDocs.jsx
import React from "react";
import { ExternalLink } from "lucide-react";

const docsList = [
  {
    title: "Kotlin Official Documentation",
    description:
      "The primary source for Kotlin syntax, features, and best practices for all levels.",
    url: "https://kotlinlang.org/docs/home.html",
    citation: "Kotlin Docs",
  },
  {
    title: "Getting Started with Kotlin",
    description:
      "Learn how to set up your Kotlin environment and write your first Kotlin program.",
    url: "https://kotlinlang.org/docs/getting-started.html",
    citation: "Kotlin Docs",
  },
  {
    title: "Basic Syntax",
    description:
      "Understand Kotlin's basic syntax, variables, data types, and control flow.",
    url: "https://kotlinlang.org/docs/basic-syntax.html",
    citation: "Kotlin Docs",
  },
  {
    title: "Standard Library",
    description:
      "Explore Kotlin's built-in classes and functions for everyday programming tasks.",
    url: "https://kotlinlang.org/docs/reference/standard-library.html",
    citation: "Kotlin Docs",
  },
  {
    title: "Coroutines",
    description:
      "Learn asynchronous programming with Kotlin coroutines for concurrency and parallelism.",
    url: "https://kotlinlang.org/docs/coroutines-overview.html",
    citation: "Kotlin Docs",
  },
  {
    title: "Multiplatform Projects",
    description:
      "Share code between multiple platforms like Android, iOS, and backend using Kotlin Multiplatform.",
    url: "https://kotlinlang.org/docs/multiplatform.html",
    citation: "Kotlin Docs",
  },
  {
    title: "Android Kotlin Guide",
    description:
      "Official guide for using Kotlin in Android development, from basics to advanced topics.",
    url: "https://developer.android.com/kotlin",
    citation: "Android Dev",
  },
  {
    title: "Kotlin API Reference",
    description:
      "Detailed reference for Kotlin's standard library, coroutines, serialization, and Ktor framework APIs.",
    url: "https://kotlinlang.org/docs/api-references.html",
    citation: "Kotlin API",
  },
  {
    title: "Kotlin Documentation PDF",
    description:
      "Downloadable PDF version of the Kotlin documentation for offline reading.",
    url: "https://kotlinlang.org/docs/kotlin-pdf.html",
    citation: "Kotlin Docs PDF",
  },
];

export default function KotlinDocs() {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          📘 Official Kotlin Documentation
        </h1>
        <p className="text-gray-600 mb-10">
          Essential Kotlin documentation every learner should follow — from setup, syntax, libraries, coroutines, multiplatform, and Android guides.
        </p>

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
