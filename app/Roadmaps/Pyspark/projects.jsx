// components/PySparkProjects.jsx
import React from "react";

const projects = [
  // ---------- PHASE 1 — FOUNDATIONAL PROJECTS ----------
  {
    id: "phase1-etl-parquet",
    level: "Phase 1 — Beginner",
    title: "ETL Pipeline: Raw Data to Parquet",
    description:
      "Build a PySpark ETL pipeline that ingests raw CSV/JSON files, cleans nulls and duplicates, enforces schema, and writes optimized partitioned Parquet datasets.",
    url: "https://youtu.be/ZhY4NVg8x5o?si=dJbkbDhfJ2a0Gtvl",
  },
  {
    id: "phase1-sales-analytics",
    level: "Phase 1 — Beginner",
    title: "Sales Analytics Data Warehouse",
    description:
      "Create a sales analytics system using PySpark DataFrames. Perform joins across customers, orders, and products, compute KPIs, and generate aggregated reporting tables.",
    url: "https://youtu.be/HKcEyHF1U00?si=4z6cfPiVCCFiWi_7",
  },

  // ---------- PHASE 2 — INTERMEDIATE PROJECTS ----------
  {
    id: "phase2-customer-360",
    level: "Phase 2 — Intermediate",
    title: "Customer 360 Lakehouse (Delta Lake)",
    description:
      "Implement a Bronze–Silver–Gold lakehouse architecture using Delta Lake. Support incremental loads, schema evolution, and MERGE-based upserts for customer records.",
    url: "https://youtu.be/GApNstKQy_Q?si=KNt1jMrYlL4ADtsY",
  },
  {
    id: "phase2-log-sessionization",
    level: "Phase 2 — Intermediate",
    title: "Log Processing & Sessionization",
    description:
      "Process application or web logs using PySpark. Parse timestamps, create user sessions with window functions, and calculate session duration, bounce rate, and top pages.",
    url: "https://youtu.be/_D2bwSI-70w?si=36sNTTftNJDS6kSk",
  },

  // ---------- PHASE 3 — ADVANCED PROJECTS ----------
  {
    id: "phase3-streaming-analytics",
    level: "Phase 3 — Advanced",
    title: "Real-Time Streaming Analytics Pipeline",
    description:
      "Build a Structured Streaming pipeline that processes real-time events (socket/Kafka), applies windowed aggregations with watermarks, and writes results to Delta or Parquet.",
    url: "https://youtu.be/RQ7nnobb1N0?si=78JE1yJFviA7LRZX",
  },
  {
    id: "phase3-performance-optimization",
    level: "Phase 3 — Advanced",
    title: "Spark Performance Optimization Case Study",
    description:
      "Analyze and optimize a slow PySpark job using partition tuning, broadcast joins, caching, skew handling, and Spark UI metrics. Document before/after improvements.",
    url: "https://youtu.be/wNRjR6Cds5s?si=Xt_QYnlLTPui-VIU",
  },
];

export default function PySparkProjects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            ⚡ PySpark Project Roadmap
          </h2>
          <p className="mt-2 text-gray-600">
            Six hands-on PySpark projects designed to take you from beginner to
            industry-ready Spark & Data Engineer.
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
          Complete all six projects to demonstrate real-world PySpark,
          performance tuning, and lakehouse engineering skills.
        </footer>
      </div>
    </section>
  );
}
