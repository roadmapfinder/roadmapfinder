// components/MatplotlibDocs.jsx
import React from "react";
import { ExternalLink } from "lucide-react";

const docsList = [
  {
    title: "Matplotlib Documentation (Stable)",
    description:
      "The official Matplotlib documentation hub: concepts, tutorials, examples, guides, and references for building professional charts.",
    url: "https://matplotlib.org/stable/index.html",
    citation: "matplotlib.org",
  },
  {
    title: "Matplotlib Installation Guide",
    description:
      "Official installation guide for Matplotlib using pip/conda, including troubleshooting and platform-specific setup notes.",
    url: "https://matplotlib.org/stable/install/index.html",
    citation: "Installation Docs",
  },
  {
    title: "Matplotlib Quick Start Guide",
    description:
      "Beginner-friendly official guide to quickly learn core plotting workflows and create your first professional charts.",
    url: "https://matplotlib.org/stable/users/explain/quick_start.html",
    citation: "Quick Start",
  },
  {
    title: "Matplotlib Tutorials (Official)",
    description:
      "Step-by-step official tutorials covering pyplot, object-oriented API, customization, images, text, and more.",
    url: "https://matplotlib.org/stable/tutorials/index.html",
    citation: "Tutorials",
  },
  {
    title: "Matplotlib Example Gallery",
    description:
      "Official example gallery with hundreds of plot examples (with source code) for real-world chart patterns and designs.",
    url: "https://matplotlib.org/stable/gallery/index.html",
    citation: "Gallery",
  },
  {
    title: "Matplotlib API Reference",
    description:
      "Complete official API reference covering all modules and functions for advanced charting and production-level control.",
    url: "https://matplotlib.org/stable/api/index.html",
    citation: "API Reference",
  },
  {
    title: "Pyplot API Summary",
    description:
      "Official summary of the pyplot interface: the fastest way to plot using Matplotlib’s procedural API.",
    url: "https://matplotlib.org/stable/api/pyplot_summary.html",
    citation: "pyplot",
  },
  {
    title: "Matplotlib User Guide",
    description:
      "Deep explanations of core Matplotlib concepts such as figures, axes, artists, transforms, ticks, layouts, and best practices.",
    url: "https://matplotlib.org/stable/users/index.html",
    citation: "User Guide",
  },
  {
    title: "Customizing Matplotlib (Styles & rcParams)",
    description:
      "Official guide for styling charts using themes, style sheets, rcParams, fonts, and consistent formatting for industry-ready plots.",
    url: "https://matplotlib.org/stable/users/explain/customizing.html",
    citation: "Styles & Themes",
  },
  {
    title: "Matplotlib Main Website",
    description:
      "Matplotlib official home page with project overview, ecosystem information, releases, news, and community resources.",
    url: "https://matplotlib.org/",
    citation: "Official Website",
  },
  {
    title: "Matplotlib GitHub Repository",
    description:
      "Official GitHub repository for Matplotlib: source code, issues, releases, changelogs, and contribution guidelines.",
    url: "https://github.com/matplotlib/matplotlib",
    citation: "GitHub",
  },
];

export default function MatplotlibDocs() {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          📊 Essential Matplotlib Documentation
        </h1>
        <p className="text-gray-600 mb-10">
          A curated list of official Matplotlib documentation resources — from
          installation and quick start guides to advanced tutorials, API
          references, customization styling, and production-grade examples.
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
