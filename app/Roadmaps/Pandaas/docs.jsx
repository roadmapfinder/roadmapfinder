// components/PandasDocs.jsx
import React from "react";
import { ExternalLink } from "lucide-react";

const docsList = [
  {
    title: "Pandas Official Documentation",
    description:
      "Main entry point for all Pandas documentation including user guides, API reference, and release notes.",
    url: "https://pandas.pydata.org/docs/",
    citation: "Pandas Docs",
  },
  {
    title: "Getting Started (10 Minutes to Pandas)",
    description:
      "Official beginner introduction covering core concepts, Series, DataFrame, and basic operations.",
    url: "https://pandas.pydata.org/docs/getting_started/index.html",
    citation: "Pandas Docs",
  },
  {
    title: "Pandas User Guide",
    description:
      "In-depth explanations of Pandas concepts, workflows, and real-world usage patterns.",
    url: "https://pandas.pydata.org/docs/user_guide/index.html",
    citation: "Pandas Docs",
  },
  {
    title: "Data Structures (Series & DataFrame)",
    description:
      "Learn how Pandas coreD foundational data structures work under the hood.",
    url: "https://pandas.pydata.org/docs/user_guide/dsintro.html",
    citation: "Pandas Docs",
  },
  {
    title: "Essential Functionality",
    description:
      "Core operations such as sorting, selecting, dtypes, reindexing, and basic transformations.",
    url: "https://pandas.pydata.org/docs/user_guide/basics.html",
    citation: "Pandas Docs",
  },
  {
    title: "Indexing & Selection",
    description:
      "Master loc, iloc, boolean indexing, slicing, and avoid common indexing mistakes.",
    url: "https://pandas.pydata.org/docs/user_guide/indexing.html",
    citation: "Pandas Docs",
  },
  {
    title: "Input & Output (I/O Tools)",
    description:
      "Read and write data using CSV, Excel, JSON, SQL, Parquet, and other formats.",
    url: "https://pandas.pydata.org/docs/user_guide/io.html",
    citation: "Pandas Docs",
  },
  {
    title: "Missing Data Handling",
    description:
      "Learn how Pandas represents, detects, and handles missing or null values correctly.",
    url: "https://pandas.pydata.org/docs/user_guide/missing_data.html",
    citation: "Pandas Docs",
  },
  {
    title: "GroupBy & Aggregation",
    description:
      "Split–apply–combine strategy for aggregation, transformation, and filtering.",
    url: "https://pandas.pydata.org/docs/user_guide/groupby.html",
    citation: "Pandas Docs",
  },
  {
    title: "Reshaping & Pivoting",
    description:
      "Reshape datasets using pivot, melt, stack, unstack, and hierarchical indexing.",
    url: "https://pandas.pydata.org/docs/user_guide/reshaping.html",
    citation: "Pandas Docs",
  },
  {
    title: "Time Series & Date Functionality",
    description:
      "DatetimeIndex, resampling, rolling windows, and timezone-aware data handling.",
    url: "https://pandas.pydata.org/docs/user_guide/timeseries.html",
    citation: "Pandas Docs",
  },
  {
    title: "Pandas API Reference",
    description:
      "Complete reference of all Pandas classes, functions, and methods.",
    url: "https://pandas.pydata.org/docs/reference/index.html",
    citation: "Pandas Docs",
  },
  {
    title: "Scaling & Performance",
    description:
      "Performance tips, memory optimization, chunk processing, and when Pandas hits limits.",
    url: "https://pandas.pydata.org/docs/user_guide/scale.html",
    citation: "Pandas Docs",
  },
  {
    title: "Pandas Tutorials (Official)",
    description:
      "Hands-on tutorials and examples maintained by the Pandas core team.",
    url: "https://pandas.pydata.org/docs/getting_started/tutorials.html",
    citation: "Pandas Docs",
  },
  {
    title: "Pandas GitHub (Source & Issues)",
    description:
      "Official Pandas source code, issue tracking, development discussions, and contributions.",
    url: "https://github.com/pandas-dev/pandas",
    citation: "Pandas GitHub",
  },
];

export default function PandasDocs() {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          🐼 Official Pandas Documentation
        </h1>
        <p className="text-gray-600 mb-10">
          Must-know official Pandas documentation — from beginner concepts and
          indexing to GroupBy, time series, performance, and production usage.
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
