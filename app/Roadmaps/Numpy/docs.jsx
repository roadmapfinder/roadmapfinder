// components/NumpyDocs.jsx
import React from "react";
import { ExternalLink } from "lucide-react";

const docsList = [
  {
    title: "NumPy Official Documentation",
    description:
      "Main entry point for all NumPy documentation, including guides, references, and releases.",
    url: "https://numpy.org/doc/",
    citation: "NumPy Docs",
  },
  {
    title: "NumPy Stable User Guide",
    description:
      "In-depth explanations of NumPy concepts, best practices, and real-world usage.",
    url: "https://numpy.org/doc/stable/user/",
    citation: "NumPy Docs",
  },
  {
    title: "Absolute Beginner’s Guide",
    description:
      "Official beginner-friendly introduction to NumPy arrays, indexing, and basic operations.",
    url: "https://numpy.org/doc/stable/user/absolute_beginners.html",
    citation: "NumPy Docs",
  },
  {
    title: "Quickstart Tutorial",
    description:
      "Fast-track tutorial covering array creation, manipulation, and computations.",
    url: "https://numpy.org/doc/stable/user/quickstart.html",
    citation: "NumPy Docs",
  },
  {
    title: "NumPy API Reference",
    description:
      "Complete reference of all NumPy functions, classes, modules, and constants.",
    url: "https://numpy.org/doc/stable/reference/",
    citation: "NumPy Docs",
  },
  {
    title: "Array Creation Routines",
    description:
      "Detailed documentation on creating NumPy arrays using different methods.",
    url: "https://numpy.org/doc/stable/reference/routines.array-creation.html",
    citation: "NumPy Docs",
  },
  {
    title: "Broadcasting",
    description:
      "Official guide explaining NumPy’s broadcasting rules and vectorized operations.",
    url: "https://numpy.org/doc/stable/user/basics.broadcasting.html",
    citation: "NumPy Docs",
  },
  {
    title: "Indexing & Slicing",
    description:
      "Learn advanced indexing, slicing, boolean masks, and views vs copies.",
    url: "https://numpy.org/doc/stable/user/basics.indexing.html",
    citation: "NumPy Docs",
  },
  {
    title: "Linear Algebra (linalg)",
    description:
      "Matrix operations, decompositions, eigenvalues, and solving linear systems.",
    url: "https://numpy.org/doc/stable/reference/routines.linalg.html",
    citation: "NumPy Docs",
  },
  {
    title: "Random Sampling",
    description:
      "Random number generation, distributions, and reproducibility utilities.",
    url: "https://numpy.org/doc/stable/reference/random/index.html",
    citation: "NumPy Docs",
  },
  {
    title: "Mathematical Functions",
    description:
      "Universal functions (ufuncs) for fast element-wise mathematical operations.",
    url: "https://numpy.org/doc/stable/reference/routines.math.html",
    citation: "NumPy Docs",
  },
  {
    title: "Input & Output (I/O)",
    description:
      "Load and save NumPy data using binary files, text files, and memory mapping.",
    url: "https://numpy.org/doc/stable/reference/routines.io.html",
    citation: "NumPy Docs",
  },
  {
    title: "NumPy Performance Tips",
    description:
      "Guidelines for writing fast, memory-efficient, and vectorized NumPy code.",
    url: "https://numpy.org/doc/stable/user/basics.performance.html",
    citation: "NumPy Docs",
  },
  {
    title: "NumPy Tutorials (Official)",
    description:
      "Hands-on Jupyter notebook tutorials maintained by the NumPy team.",
    url: "https://numpy.org/learn/",
    citation: "NumPy Docs",
  },
  {
    title: "NumPy GitHub (Source & Issues)",
    description:
      "Official NumPy source code, issue tracking, and contribution guidelines.",
    url: "https://github.com/numpy/numpy",
    citation: "NumPy GitHub",
  },
];

export default function NumpyDocs() {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          📘 Official NumPy Documentation
        </h1>
        <p className="text-gray-600 mb-10">
          Must-know official NumPy documentation — from beginner guides and
          broadcasting to linear algebra, performance, and production-ready
          APIs.
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
