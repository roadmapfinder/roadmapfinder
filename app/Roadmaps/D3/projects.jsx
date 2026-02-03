"use client";
// components/Projects.jsx
import React from "react";

const projects = [
  // 🧩 Beginner Phase
  {
    id: "phase1-basic-charts",
    level: "Beginner",
    title: "Core Charts with D3.js",
    description:
      "Build foundational D3 charts including bar charts, line charts, and scatter plots. Learn SVG basics, data binding, scales, axes, and responsive layouts.",
    url: "https://youtu.be/hgbWXzl816A?si=N8ft5T7tuu3jVyHZ",
  },
  {
    id: "phase1-interactive-tooltips",
    level: "Beginner",
    title: "Interactive Charts & Tooltips",
    description:
      "Enhance basic charts with hover interactions, tooltips, highlighting, and simple transitions to improve usability and user engagement.",
    url: "https://youtu.be/XSJD5ay1D_8?si=bX-IlBF1E0mU38DX",
  },

  // ⚙️ Intermediate Phase
  {
    id: "phase2-time-series",
    level: "Intermediate (2–4 weeks)",
    title: "Time-Series & Zoomable Line Charts",
    description:
      "Create time-based visualizations with date parsing, dynamic axes, zooming, panning, brushing, and smooth animated transitions.",
    url: "https://youtu.be/fnucrqRHSlo?si=Q5NVjMNchD3tBLcF",
  },
  {
    id: "phase2-geo-maps",
    level: "Intermediate (4–6 weeks)",
    title: "Interactive Geo Maps & Choropleths",
    description:
      "Build interactive maps using GeoJSON with projections, color scales, tooltips, and zoomable regions for geographic data analysis.",
    url: "https://youtu.be/FsDyelH58F0?si=AdW1yWqhl3Fhs1zg",
  },

  // 🚀 Advanced Phase
  {
    id: "phase3-network-graph",
    level: "Advanced (6–8 weeks)",
    title: "Force-Directed Network Graph",
    description:
      "Visualize complex relationships using force simulations. Implement node-link graphs with drag interactions, clustering, and performance optimizations.",
    url: "https://youtu.be/6AdBAz-yHIg?si=klXSaPs8sQean6cu",
  },
  {
    id: "phase3-performance-dashboard",
    level: "Industry-Ready (8–10 weeks)",
    title: "High-Performance Analytics Dashboard (Capstone)",
    description:
      "Build a production-grade dashboard with multiple linked charts, filters, large datasets, Canvas + SVG rendering, accessibility, and responsive design.",
    url: "https://youtu.be/QTf3eLhszaw?si=9tTe25rHs959INGK",
  },
];

export default function Projects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            📊 D3.js Project Roadmap (Beginner → Industry-Ready)
          </h2>
          <p className="mt-2 text-gray-600">
            Build these D3.js projects step-by-step to master data visualization,
            interactivity, performance optimization, and real-world analytics
            dashboards used in modern web applications.
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
              {p.url && (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-indigo-600 font-medium hover:underline"
                >
                  View Official Resource ▶
                </a>
              )}
            </article>
          ))}
        </div>

        <footer className="mt-10 text-sm text-gray-500 text-center">
          💡 Complete these projects in order — core charts → interactivity →
          time-series → geo data → networks → high-performance dashboards. Each
          project mirrors real-world D3.js work done in production teams.
        </footer>
      </div>
    </section>
  );
}
