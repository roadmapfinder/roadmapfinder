// components/FAQ.jsx
"use client";

import React, { useMemo, useState } from "react";
import { ChevronDown, Search, Sparkles } from "lucide-react";

const faqs = [
  {
    question: "What is PySpark and why is it used in industry?",
    answer:
      "PySpark is the Python API for Apache Spark. It is widely used to process large-scale data (batch and streaming) across clusters, enabling faster ETL pipelines, analytics, and machine learning compared to traditional single-machine tools.",
    tag: "Basics",
  },
  {
    question: "Do I need to learn SQL before starting PySpark?",
    answer:
      "Yes — SQL is a must. Most real-world PySpark work involves Spark SQL, joins, aggregations, and window functions. Strong SQL skills will make you much faster at building production pipelines.",
    tag: "Getting Started",
  },
  {
    question: "Should I learn RDDs or focus on DataFrames?",
    answer:
      "Focus on DataFrames and Spark SQL first. Modern Spark development is DataFrame-centric because it is optimized by Catalyst (Spark’s optimizer). Learn RDD basics later for interviews or legacy code.",
    tag: "Learning Path",
  },
  {
    question: "What is the difference between transformations and actions?",
    answer:
      "Transformations (like select, filter, join) are lazy — Spark builds a logical plan but doesn’t execute immediately. Actions (like count, collect, write) trigger execution and actually run the job on the cluster.",
    tag: "Core Concepts",
  },
  {
    question: "What is a shuffle in Spark and why is it expensive?",
    answer:
      "A shuffle is data movement across executors (e.g., during groupBy, join, distinct). It’s expensive because it involves network I/O, disk spill risk, and task delays. Minimizing shuffles is key for performance.",
    tag: "Performance",
  },
  {
    question: "When should I use repartition() vs coalesce()?",
    answer:
      "Use repartition() when you need to increase or rebalance partitions (it causes a shuffle). Use coalesce() when you want to reduce partitions efficiently (usually no shuffle). Common use: coalesce before writing output.",
    tag: "Performance",
  },
  {
    question: "What is partitioning and why does it matter?",
    answer:
      "Partitioning splits data into chunks processed in parallel. Good partitioning improves speed and reduces memory pressure. Bad partitioning can cause slow jobs, skew, and executor out-of-memory failures.",
    tag: "Big Data",
  },
  {
    question: "How do I optimize joins in PySpark?",
    answer:
      "Use broadcast joins when one table is small, avoid unnecessary columns before joins, ensure join keys are clean, and watch for skew. Spark UI is the best place to diagnose join bottlenecks.",
    tag: "Performance",
  },
  {
    question: "Why is Parquet preferred over CSV in production?",
    answer:
      "Parquet is columnar, compressed, and supports predicate pushdown. This makes reads faster and cheaper compared to CSV, especially at scale. Most data lakes store transformed datasets in Parquet or Delta.",
    tag: "Storage",
  },
  {
    question: "What is Delta Lake and why should I learn it?",
    answer:
      "Delta Lake adds ACID transactions, time travel, schema evolution, and MERGE (upserts) on top of data lakes. It’s heavily used in modern lakehouse architectures and common in Databricks-based teams.",
    tag: "Lakehouse",
  },
  {
    question: "How do I handle the small files problem?",
    answer:
      "Small files slow down reads and metadata operations. Fix it by controlling output partitions (coalesce/repartition), writing fewer files, and using compaction strategies like OPTIMIZE in Delta Lake.",
    tag: "Performance",
  },
  {
    question: "What is Spark UI and why is it important?",
    answer:
      "Spark UI helps you debug performance issues by showing jobs, stages, tasks, shuffle metrics, executor memory, and skew. In real jobs, Spark UI is essential for diagnosing slow pipelines.",
    tag: "Debugging",
  },
  {
    question: "Is PySpark enough to get a Data Engineer job?",
    answer:
      "PySpark is a core skill, but jobs also expect SQL, data modeling basics, orchestration (Airflow/Databricks Workflows), cloud storage (S3/ADLS/GCS), and knowledge of writing reliable pipelines.",
    tag: "Career",
  },
  {
    question: "What are common mistakes beginners make in PySpark?",
    answer:
      "Using collect() on large data, overusing UDFs, ignoring partitioning, writing too many small files, not using Spark UI, and selecting too many columns before joins/aggregations.",
    tag: "Mistakes",
  },
  {
    question: "How do I become industry-ready with PySpark?",
    answer:
      "Build 5–6 solid projects (ETL, analytics, Delta lakehouse, streaming, optimization case study), learn Spark UI, master joins & windows, and practice debugging real performance issues.",
    tag: "Roadmap",
  },
];

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function FAQ() {
  const [openId, setOpenId] = useState(faqs[0]?.question || "");
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState("All");

  const tags = useMemo(() => {
    const unique = new Set(faqs.map((f) => f.tag));
    return ["All", ...Array.from(unique)];
  }, []);

  const filteredFaqs = useMemo(() => {
    const q = query.trim().toLowerCase();

    return faqs.filter((f) => {
      const matchesTag = activeTag === "All" ? true : f.tag === activeTag;
      const matchesQuery =
        q.length === 0
          ? true
          : f.question.toLowerCase().includes(q) ||
            f.answer.toLowerCase().includes(q);

      return matchesTag && matchesQuery;
    });
  }, [query, activeTag]);

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <header className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium border border-indigo-100">
            <Sparkles size={16} />
            PySpark FAQs (Beginner → Industry Ready)
          </div>

          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Clear answers to the most important PySpark questions — concepts,
            performance, streaming, Delta Lake, and job readiness.
          </p>
        </header>

        {/* Controls */}
        <div className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-5 shadow-sm">
          <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
            {/* Search */}
            <div className="relative flex-1">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search questions (joins, shuffle, Delta, streaming...)"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-800"
              />
            </div>

            {/* Tag Filters */}
            <div className="flex flex-wrap gap-2">
              {tags.map((t) => {
                const active = t === activeTag;
                return (
                  <button
                    key={t}
                    onClick={() => setActiveTag(t)}
                    className={cn(
                      "px-3 py-2 rounded-xl text-sm font-medium border transition",
                      active
                        ? "bg-indigo-600 text-white border-indigo-600"
                        : "bg-white text-gray-700 border-gray-200 hover:border-indigo-200 hover:bg-indigo-50"
                    )}
                  >
                    {t}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Results count */}
          <p className="mt-3 text-xs text-gray-500">
            Showing <span className="font-semibold">{filteredFaqs.length}</span>{" "}
            question{filteredFaqs.length !== 1 ? "s" : ""}
          </p>
        </div>

        {/* FAQ List */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.question;

            return (
              <div
                key={faq.question}
                className={cn(
                  "bg-white border rounded-2xl shadow-sm transition",
                  isOpen
                    ? "border-indigo-300 ring-1 ring-indigo-200"
                    : "border-gray-200 hover:border-indigo-200"
                )}
              >
                <button
                  onClick={() =>
                    setOpenId(isOpen ? "" : faq.question)
                  }
                  className="w-full text-left p-5 flex items-start justify-between gap-4"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                        {faq.tag}
                      </span>
                    </div>
                    <h3 className="mt-3 text-base sm:text-lg font-semibold text-gray-900">
                      {faq.question}
                    </h3>
                  </div>

                  <ChevronDown
                    size={20}
                    className={cn(
                      "mt-1 text-gray-400 transition-transform",
                      isOpen ? "rotate-180 text-indigo-600" : ""
                    )}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5">
                    <div className="h-px bg-gray-100 mb-4" />
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredFaqs.length === 0 && (
          <div className="mt-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm">
              No results found. Try searching “shuffle”, “broadcast”, or “Delta”.
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="mt-12 text-center text-sm text-gray-500">
          Tip: Focus on{" "}
          <span className="font-semibold text-gray-700">
            joins + partitioning + Spark UI
          </span>{" "}
          — these 3 skills decide most PySpark interviews.
        </footer>
      </div>
    </section>
  );
}
