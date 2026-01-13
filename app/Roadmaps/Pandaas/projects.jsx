"use client";
import React from "react";

const projects = [
  // 🌱 Beginner Level
  {
    id: "csv-cleanup-engine",
    level: "🌱 Beginner",
    title: "Dirty CSV Cleanup Engine",
    description:
      "Build a data cleaning tool that ingests messy CSV files and outputs clean, standardized datasets. Learn dtype control, missing value handling, and safe exports.",
    url: "https://pandas.pydata.org/docs/reference/api/pandas.read_csv.html"
  },
  {
    id: "basic-data-profiler",
    level: "🌱 Beginner",
    title: "Dataset Profiling Tool",
    description:
      "Create a script that analyzes any dataset and reports column types, missing values, duplicates, and basic statistics. Learn Series, DataFrame ops, and indexing.",
    url: "https://pandas.pydata.org/docs/user_guide/basics.html"
  },

  // ⚡ Intermediate Level
  {
    id: "sales-analytics-pipeline",
    level: "⚡ Intermediate",
    title: "Sales Analytics Pipeline",
    description:
      "Transform raw sales data into daily, weekly, and monthly business metrics. Practice groupby, aggregations, merges, and time-based analysis.",
    url: "https://pandas.pydata.org/docs/user_guide/groupby.html"
  },
  {
    id: "deduplication-system",
    level: "⚡ Intermediate",
    title: "Customer Deduplication System",
    description:
      "Detect and merge duplicate customer records using normalization, string operations, and logical matching rules. Learn real-world data consistency handling.",
    url: "https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.duplicated.html"
  },

  // 🚀 Advanced Level
  {
    id: "log-file-analyzer",
    level: "🚀 Advanced",
    title: "Server Log File Analyzer",
    description:
      "Process large log files to analyze traffic, errors, and peak usage. Learn chunk processing, datetime indexing, rolling windows, and performance tuning.",
    url: "https://pandas.pydata.org/docs/user_guide/timeseries.html"
  },
  {
    id: "production-etl-module",
    level: "🚀 Advanced",
    title: "Production-Ready Pandas ETL Module",
    description:
      "Build a reusable, config-driven ETL pipeline with schema validation, logging, and error handling. Learn how Pandas is used in real production systems.",
    url: "https://pandas.pydata.org/docs/user_guide/scale.html"
  }
];

export default function Projects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            🐼 Pandas Mastery Projects
          </h2>
          <p className="mt-2 text-gray-600">
            Build real-world Pandas projects from beginner to industry-ready.
            These projects force you to think in data transformations, not tutorials.
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
                Official Docs ▶
              </a>
            </article>
          ))}
        </div>

        <footer className="mt-10 text-sm text-gray-500 text-center">
          Build these in order. No notebooks-only projects. Push clean code to GitHub.
          If your pipeline breaks on new data, you’re not done.
        </footer>
      </div>
    </section>
  );
}
