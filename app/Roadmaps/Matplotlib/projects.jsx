"use client"

// components/MatplotlibProjects.jsx
import React from "react";

const projects = [
  // Phase 1 — Beginner
  {
    id: "phase1-student-dashboard",
    level: "Phase 1 — Beginner",
    title: "Student Performance Dashboard",
    description:
      "Build a complete student analytics dashboard using Matplotlib. Visualize marks distribution, subject-wise averages, and attendance vs marks with clean labels, legends, grids, and readable formatting.",
    url: "https://matplotlib.org/stable/tutorials/index.html",
  },
  {
    id: "phase1-sales-report",
    level: "Phase 1 — Beginner",
    title: "Sales Analytics Report (CSV Business Project)",
    description:
      "Analyze a real sales CSV dataset and create business-friendly charts like monthly revenue trends, category-wise performance bar charts, and profit distribution histograms using Pandas + Matplotlib.",
    url: "https://youtu.be/5OiPItz34sE?si=XKw_ZUgShQzNllyl",
  },

  // Phase 2 — Intermediate
  {
    id: "phase2-timeseries-analyzer",
    level: "Phase 2 — Intermediate",
    title: "Weather / COVID Time-Series Analyzer",
    description:
      "Create a time-series visualization tool with rolling averages, peak detection, annotations, and clean tick formatting. Generate an export-ready report chart for presentations.",
    url: "https://youtu.be/_LWjaAiKaf8?si=R109wFsaarrSh2at",
  },
  {
    id: "phase2-stock-visualizer",
    level: "Phase 2 — Intermediate",
    title: "Stock Market Visualizer (Moving Averages + Volume)",
    description:
      "Build a stock chart system that plots price trends, moving averages, volume bars, and highlights highs/lows. Learn subplot dashboards, dual axes (twinx), and legend positioning.",
    url: "https://youtu.be/qKBqiZwmGSs?si=HttwDqn462VGW90P",
  },

  // Phase 3 — Advanced / Industry-Ready
  {
    id: "phase3-correlation-heatmap",
    level: "Phase 3 — Advanced",
    title: "Correlation Heatmap + Insights Generator",
    description:
      "Build an insights generator using correlation heatmaps. Visualize feature relationships with proper colormaps, normalization, axis formatting, and export high-quality charts for reports.",
    url: "https://youtu.be/x0Ga1UG9szU?si=XFr2xQS7cv7zr725",
  },
  {
    id: "phase3-ml-evaluation-pack",
    level: "Phase 3 — Advanced",
    title: "ML Model Evaluation Plot Pack (Industry Level)",
    description:
      "Create a reusable visualization toolkit that generates confusion matrices, ROC curves, Precision-Recall curves, feature importance plots, and error analysis charts for machine learning models.",
    url: "https://matplotlib.org/stable/api/index.html",
  },
];

export default function MatplotlibProjects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            📊 Matplotlib Project Roadmap
          </h2>
          <p className="mt-2 text-gray-600">
            Progress from beginner to industry-ready Matplotlib developer
            through hands-on projects focused on data visualization, dashboard
            creation, reporting, and real-world analytics workflows.
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
                Explore Project ▶
              </a>
            </article>
          ))}
        </div>

        <footer className="mt-10 text-sm text-gray-500 text-center">
          Complete these projects step-by-step to master Matplotlib charts,
          professional formatting, dashboards, and report-ready visualizations.
          Each project increases your confidence toward becoming an
          industry-ready visualization engineer.
        </footer>
      </div>
    </section>
  );
}
