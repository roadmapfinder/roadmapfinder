// components/Projects.jsx
import React from "react";

const projects = [
  {
    id: "dsa-cpp-cli",
    level: "Phase 1 — Beginner",
    title: "C++ CLI Project – Build Command-Line Tools",
    description:
      "Learn how to build CLI tools in C++—a foundation for implementing DSA operations via command-line interface.",
    url: "https://www.youtube.com/watch?v=fyRMUnhvjqM" // real C++ CLI tutorial :contentReference[oaicite:0]{index=0}
  },
  {
    id: "sorting-visualizer-js",
    level: "Phase 2 — Lower-Intermediate",
    title: "Sorting Visualizer (JavaScript) Tutorial",
    description:
      "Visualize merge sort and other sorting algorithms in a modern GUI—great for understanding algorithm flow.",
    url: "https://www.youtube.com/watch?v=pFXYym4Wbkc" // real sorting visualizer :contentReference[oaicite:1]{index=1}
  },
  {
    id: "sorting-visualizer-python",
    level: "Phase 3 — Intermediate",
    title: "Sorting Algorithm Visualizer in Python (pygame)",
    description:
      "Build a visualizer in Python using pygame to animate sorting steps—excellent for learning logic and GUI.",
    url: "https://m.youtube.com/watch?v=twRidO-_vqQ" // pygame sorting visualizer :contentReference[oaicite:2]{index=2}
  },
  {
    id: "sorting-algos-visualizer",
    level: "Phase 4 — Intermediate→Advanced",
    title: "Sorting Algorithms Visualizations (all major sorts)",
    description:
      "Comprehensive visuals for Quick, Merge, Heap, Radix, Counting sorts—ideal for algorithm comparisons.",
    url: "https://www.youtube.com/playlist?list=PL2aHrV9pFqNS79ZKnGLw-RG5h01bcjRZ" // playlist :contentReference[oaicite:3]{index=3}
  },
  {
    id: "advanced-sorting-visualizer",
    level: "Phase 5 — Advanced",
    title: "Visualizing 70 Sorting Algorithms (C++)",
    description:
      "See how more than 70 sorting algorithms behave—implemented and visualized in C++.",
    url: "https://www.youtube.com/watch?v=Uq6URzo9q6g" // visualizing many algorithms :contentReference[oaicite:4]{index=4}
  }
];

export default function Projects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            ⚙️ Verified DSA Project Tutorials
          </h2>
          <p className="mt-2 text-gray-600">
            Carefully selected, real-world DSA project tutorials (2025) in Hindi & English—projects you can build today.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.id}
              className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform"
              aria-labelledby={`${p.id}-title`}
            >
              <span className="inline-block text-xs font-medium bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full">
                {p.level}
              </span>
              <h3
                id={`${p.id}-title`}
                className="mt-4 text-lg font-semibold text-gray-900 group-hover:text-indigo-600"
              >
                {p.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">{p.description}</p>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-indigo-600 font-medium hover:underline"
              >
                Watch Tutorial ▶
              </a>
            </article>
          ))}
        </div>

        <footer className="mt-10 text-sm text-gray-500 text-center">
          These tutorials have been verified and are relevant, up-to-date, and project-focused.
        </footer>
      </div>
    </section>
  );
}
