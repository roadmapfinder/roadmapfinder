"use client"

import { Filter } from "lucide-react";
import React, { useMemo, useState } from "react";
import {
  Search,
  X,
  ChevronDown,
  Sparkles,
  BookOpen,
  LayoutDashboard,
  Palette,
  FileDown,
  Wrench,
  Bug,
} from "lucide-react";

const faqData = [
  // Getting Started
  {
    id: "faq-1",
    category: "Getting Started",
    icon: <BookOpen className="w-4 h-4" />,
    question: "What is Matplotlib and why is it used?",
    answer:
      "Matplotlib is Python’s most popular plotting library used for creating charts like line plots, bar charts, scatter plots, histograms, heatmaps, and dashboards. It’s widely used in data science, analytics, machine learning, and research because it offers deep customization and publication-quality plots.",
    tags: ["basics", "intro", "why matplotlib"],
  },
  {
    id: "faq-2",
    category: "Getting Started",
    icon: <BookOpen className="w-4 h-4" />,
    question: "Should I learn pyplot or the Object-Oriented (OO) API first?",
    answer:
      "Start with pyplot for quick plotting basics, but shift to the Object-Oriented API as soon as possible. In industry, the OO API is preferred because it is scalable, reusable, and best for dashboards and complex multi-chart layouts.",
    tags: ["pyplot", "oo api", "best practice"],
  },
  {
    id: "faq-3",
    category: "Getting Started",
    icon: <BookOpen className="w-4 h-4" />,
    question: "What is the difference between Figure and Axes?",
    answer:
      "A Figure is the overall canvas/window that holds everything. Axes is the actual chart area where data is plotted. Most real-world Matplotlib work is done by creating `fig, ax = plt.subplots()` and then plotting on `ax` for clean control.",
    tags: ["figure", "axes", "subplots"],
  },

  // Charts & Layouts
  {
    id: "faq-4",
    category: "Charts & Layouts",
    icon: <LayoutDashboard className="w-4 h-4" />,
    question: "How do I create multiple charts in one figure (subplots)?",
    answer:
      "Use `fig, ax = plt.subplots(rows, cols)` to create a grid layout. Then plot each chart on its own axis. Finally, use `plt.tight_layout()` to prevent overlapping labels and improve spacing.",
    tags: ["subplots", "dashboard", "layout"],
  },
  {
    id: "faq-5",
    category: "Charts & Layouts",
    icon: <LayoutDashboard className="w-4 h-4" />,
    question: "How can I avoid overlapping labels and messy dashboards?",
    answer:
      "Use these best practices: rotate long x-labels, shorten category names, increase figure size, use `tight_layout()`, and control spacing with `fig.subplots_adjust()`. Clean formatting always beats cramming too much data in one plot.",
    tags: ["labels", "layout", "dashboard"],
  },
  {
    id: "faq-6",
    category: "Charts & Layouts",
    icon: <LayoutDashboard className="w-4 h-4" />,
    question: "When should I use a secondary Y-axis (twinx)?",
    answer:
      "Use `ax.twinx()` only when two metrics share the same timeline but have different scales (like revenue vs profit margin). Keep labels clear, use readable colors, and avoid confusing viewers with unrelated comparisons.",
    tags: ["twinx", "dual axis", "advanced"],
  },

  // Styling & Customization
  {
    id: "faq-7",
    category: "Styling & Customization",
    icon: <Palette className="w-4 h-4" />,
    question: "How do I make my plots look professional?",
    answer:
      "Focus on readability: use clear titles, proper axis labels, consistent fonts, subtle grids, and meaningful legends. Keep charts uncluttered and highlight only the key insights. Use consistent styling across all plots for a report-ready look.",
    tags: ["professional", "style", "design"],
  },
  {
    id: "faq-8",
    category: "Styling & Customization",
    icon: <Palette className="w-4 h-4" />,
    question: "What are Matplotlib styles and how do I use them?",
    answer:
      "Matplotlib styles are predefined themes you can apply using `plt.style.use('style_name')`. You can also customize everything using rcParams to create consistent visuals across charts in dashboards and reports.",
    tags: ["styles", "themes", "rcParams"],
  },

  // Exporting & Reporting
  {
    id: "faq-9",
    category: "Exporting & Reporting",
    icon: <FileDown className="w-4 h-4" />,
    question: "How do I save plots as high-quality images for reports?",
    answer:
      "Use `plt.savefig()` with DPI settings like 300 for high-quality output. For professional reports, export as PDF or SVG. Always verify spacing and readability before final export.",
    tags: ["savefig", "dpi", "pdf", "svg"],
  },
  {
    id: "faq-10",
    category: "Exporting & Reporting",
    icon: <FileDown className="w-4 h-4" />,
    question: "What format should I use: PNG, SVG, or PDF?",
    answer:
      "Use PNG for web and general sharing, SVG for scalable web graphics, and PDF for reports or research papers. If you need perfect quality for printing, prefer PDF or SVG.",
    tags: ["png", "svg", "pdf", "export"],
  },

  // Performance & Debugging
  {
    id: "faq-11",
    category: "Performance & Debugging",
    icon: <Wrench className="w-4 h-4" />,
    question: "Why is my Matplotlib plot slow with large datasets?",
    answer:
      "Large datasets can slow down plotting. Solutions: downsample your data, avoid plotting every point, use line simplification, or plot aggregated values. For big dashboards, focus on performance-first charts.",
    tags: ["performance", "large data", "optimize"],
  },
  {
    id: "faq-12",
    category: "Performance & Debugging",
    icon: <Bug className="w-4 h-4" />,
    question: "My plot looks wrong. How do I debug it?",
    answer:
      "Check data types, missing values, axis scaling, and label mismatches. Start simple: plot small samples first, verify correct columns, and add formatting step-by-step. Debugging charts is mostly debugging data + axes limits.",
    tags: ["debug", "wrong plot", "issues"],
  },
];

const categories = [
  { name: "All", icon: <Sparkles className="w-4 h-4" /> },
  { name: "Getting Started", icon: <BookOpen className="w-4 h-4" /> },
  { name: "Charts & Layouts", icon: <LayoutDashboard className="w-4 h-4" /> },
  { name: "Styling & Customization", icon: <Palette className="w-4 h-4" /> },
  { name: "Exporting & Reporting", icon: <FileDown className="w-4 h-4" /> },
  { name: "Performance & Debugging", icon: <Wrench className="w-4 h-4" /> },
];

export default function MatplotlibFAQ() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [openId, setOpenId] = useState("faq-1");

  const filteredFAQs = useMemo(() => {
    const q = query.trim().toLowerCase();

    return faqData.filter((item) => {
      const matchCategory =
        activeCategory === "All" || item.category === activeCategory;

      const matchQuery =
        !q ||
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q) ||
        item.tags.some((t) => t.toLowerCase().includes(q));

      return matchCategory && matchQuery;
    });
  }, [query, activeCategory]);

  const resultsCountText = useMemo(() => {
    if (!query && activeCategory === "All") return `${faqData.length} FAQs`;
    return `${filteredFAQs.length} result${filteredFAQs.length === 1 ? "" : "s"}`;
  }, [filteredFAQs.length, query, activeCategory]);

  return (
    <section className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="inline-flex items-center gap-2 text-xs font-semibold bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full">
            <Sparkles className="w-4 h-4" />
            Matplotlib Support Center
          </p>
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900">
            📌 Matplotlib FAQ
          </h1>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Fast answers to common Matplotlib questions — from beginner basics
            to advanced dashboards, exporting, performance tuning, and industry
            best practices.
          </p>
        </div>

        {/* Search + Stats */}
        <div className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-5 shadow-sm mb-6">
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
            <div className="relative w-full sm:max-w-xl">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search questions (example: subplots, savefig, heatmap, twinx...)"
                className="w-full pl-10 pr-10 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="flex items-center justify-between sm:justify-end gap-3">
              <span className="text-xs font-medium bg-gray-100 text-gray-700 px-3 py-2 rounded-xl">
                {resultsCountText}
              </span>
              <span className="hidden sm:inline-flex items-center gap-2 text-xs text-gray-500">
                <Filter className="w-4 h-4" />
                Filter by category
              </span>
            </div>
          </div>

          {/* Categories */}
          <div className="mt-4 flex flex-wrap gap-2">
            {categories.map((c) => {
              const active = activeCategory === c.name;
              return (
                <button
                  key={c.name}
                  onClick={() => setActiveCategory(c.name)}
                  className={`inline-flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold border transition
                    ${
                      active
                        ? "bg-indigo-600 text-white border-indigo-600"
                        : "bg-white text-gray-700 border-gray-200 hover:border-indigo-300 hover:text-indigo-700"
                    }`}
                >
                  {c.icon}
                  {c.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* FAQ List */}
        <div className="space-y-3">
          {filteredFAQs.length === 0 && (
            <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm">
              <p className="text-lg font-semibold text-gray-900">
                No results found 😕
              </p>
              <p className="mt-2 text-gray-600 text-sm">
                Try searching different keywords like{" "}
                <span className="font-semibold">subplots</span>,{" "}
                <span className="font-semibold">savefig</span>,{" "}
                <span className="font-semibold">styles</span>,{" "}
                <span className="font-semibold">heatmap</span>, or{" "}
                <span className="font-semibold">twinx</span>.
              </p>
            </div>
          )}

          {filteredFAQs.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenId(isOpen ? "" : item.id)}
                  className="w-full text-left px-5 py-4 flex items-start gap-3 hover:bg-gray-50 transition"
                >
                  <span className="mt-1 inline-flex items-center justify-center w-8 h-8 rounded-xl bg-indigo-100 text-indigo-700">
                    {item.icon}
                  </span>

                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-sm sm:text-base font-semibold text-gray-900">
                        {item.question}
                      </h3>

                      <ChevronDown
                        className={`w-5 h-5 text-gray-400 transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </div>

                    <p className="mt-1 text-xs text-gray-500">
                      Category:{" "}
                      <span className="font-semibold text-gray-600">
                        {item.category}
                      </span>
                    </p>
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5">
                    <div className="pl-11">
                      <div className="rounded-xl border border-indigo-100 bg-indigo-50 p-4">
                        <p className="text-sm text-gray-700 leading-relaxed">
                          {item.answer}
                        </p>

                        <div className="mt-3 flex flex-wrap gap-2">
                          {item.tags.map((t) => (
                            <span
                              key={t}
                              className="text-[11px] font-medium bg-white border border-indigo-100 text-indigo-700 px-2 py-1 rounded-full"
                            >
                              #{t}
                            </span>
                          ))}
                        </div>

                        <div className="mt-4 flex items-center gap-2 text-xs text-gray-600">
                          <span className="inline-flex items-center gap-2 font-semibold text-indigo-700">
                            ✅ Tip:
                          </span>
                          Try implementing this answer in a mini plot to retain it
                          faster.
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer CTA */}
        <div className="mt-10 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-bold text-gray-900">
            Want to become Industry-Ready? 🚀
          </h3>
          <p className="mt-2 text-sm text-gray-600">
            Build Matplotlib projects like dashboards, reports, stock charts, and
            ML evaluation plots. The best way to master Matplotlib is by making
            real charts from real data — not just watching tutorials.
          </p>

          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            <a
              href="https://matplotlib.org/stable/tutorials/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center gap-2 px-4 py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
            >
              <BookOpen className="w-4 h-4" />
              Official Tutorials
            </a>
            <a
              href="https://matplotlib.org/stable/gallery/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center gap-2 px-4 py-3 rounded-xl bg-gray-900 text-white font-semibold hover:bg-black transition"
            >
              <LayoutDashboard className="w-4 h-4" />
              Example Gallery
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
