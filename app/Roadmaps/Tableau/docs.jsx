// components/TableauDocs.jsx

import React from "react";
import { ExternalLink } from "lucide-react";

const docsList = [
  {
    title: "Tableau — Official Product Documentation",
    description:
      "Complete official Tableau documentation covering Tableau Desktop, Tableau Cloud, Tableau Server, data connections, calculations, visual analytics, dashboards, and publishing workflows.",
    url: "https://help.tableau.com/current/pro/desktop/en-us/default.htm",
    citation: "Tableau (Salesforce)",
  },
  {
    title: "Tableau — Learning & Training Resources",
    description:
      "Official Tableau learning hub with free tutorials, guided learning paths, videos, and foundational analytics concepts for beginners to advanced users.",
    url: "https://www.tableau.com/learn",
    citation: "Tableau (Salesforce)",
  },
  {
    title: "Tableau — Free Training Videos",
    description:
      "Official free Tableau training videos covering core features, data visualization principles, calculations, dashboards, and real-world BI use cases.",
    url: "https://www.tableau.com/learn/training",
    citation: "Tableau (Salesforce)",
  },
  {
    title: "Tableau — Calculations & Functions Reference",
    description:
      "Official reference for Tableau calculated fields including string, date, logical, aggregate, table calculations, and LOD expressions.",
    url: "https://help.tableau.com/current/pro/desktop/en-us/functions_all.htm",
    citation: "Tableau Docs",
  },
  {
    title: "Tableau — Data Modeling & Relationships Guide",
    description:
      "Official documentation explaining Tableau’s logical data model, relationships vs joins, cardinality, referential integrity, and best practices.",
    url: "https://help.tableau.com/current/pro/desktop/en-us/datasource_datamodel.htm",
    citation: "Tableau Docs",
  },
  {
    title: "Tableau — Dashboard Design & Best Practices",
    description:
      "Guidance on designing effective dashboards including layout principles, usability, interactivity, performance optimization, and storytelling.",
    url: "https://help.tableau.com/current/pro/desktop/en-us/dashboards_best_practices.htm",
    citation: "Tableau Docs",
  },
  {
    title: "Tableau — Performance Optimization Guide",
    description:
      "Official performance tuning documentation covering extracts vs live connections, filters, LOD optimization, performance recorder, and scaling dashboards.",
    url: "https://help.tableau.com/current/pro/desktop/en-us/performance_tips.htm",
    citation: "Tableau Docs",
  },
  {
    title: "Tableau Prep Builder — Official Documentation",
    description:
      "Official Tableau Prep documentation for cleaning, shaping, joining, unioning, and automating data preparation workflows.",
    url: "https://help.tableau.com/current/prep/en-us/prep.htm",
    citation: "Tableau Prep",
  },
  {
    title: "Tableau Server & Cloud — Administration Guide",
    description:
      "Official admin documentation covering Tableau Server and Cloud including security, permissions, row-level security, publishing, and governance.",
    url: "https://help.tableau.com/current/server/en-us/admin.htm",
    citation: "Tableau Admin",
  },
  {
    title: "Tableau Community & Forums",
    description:
      "Official Tableau community forums where learners and professionals discuss solutions, best practices, performance issues, and real-world scenarios.",
    url: "https://community.tableau.com",
    citation: "Tableau Community",
  },
  {
    title: "Tableau Public — Visualization Gallery",
    description:
      "Official gallery of public Tableau dashboards showcasing high-quality visualizations, storytelling techniques, and industry use cases.",
    url: "https://public.tableau.com",
    citation: "Tableau Public",
  },
  {
    title: "Tableau — Certification Program",
    description:
      "Official Tableau certification paths and exam guides for Desktop Specialist, Data Analyst, and Server certifications.",
    url: "https://www.tableau.com/learn/certification",
    citation: "Tableau Certification",
  },
];

export default function TableauDocs() {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          📊 Tableau Official Documentation
        </h1>
        <p className="text-gray-600 mb-10">
          Essential official Tableau documentation links every learner must know —
          covering analytics fundamentals, dashboard design, performance optimization,
          data modeling, administration, and career growth.
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

              <p className="mt-3 text-sm text-gray-600">
                {doc.description}
              </p>

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
