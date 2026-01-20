// components/PowerBIProjects.jsx
"use client"
import React from "react";

const projects = [
  // Phase 1 — Beginner
  {
    id: "phase1-sales-dashboard",
    level: "Phase 1 — Beginner",
    title: "Sales Performance Dashboard",
    description:
      "Build a sales dashboard with total revenue, profit, region-wise performance, top products, and monthly trends using basic DAX and visuals.",
    url: "https://youtu.be/fZn83JRt4Nk?si=To3g2At1oj-2sQvk",
  },
  {
    id: "phase1-hr-analytics",
    level: "Phase 1 — Beginner",
    title: "HR Attrition Analytics Dashboard",
    description:
      "Analyze employee attrition using department, age, gender, salary, and tenure with percentage DAX measures and interactive filters.",
    url: "https://youtu.be/5KaIU-9EF-0?si=7mV0p2tVTcHN2bCU",
  },

  // Phase 2 — Intermediate
  {
    id: "phase2-finance-pl",
    level: "Phase 2 — Intermediate",
    title: "Finance P&L Dashboard",
    description:
      "Create a profit and loss report with revenue, cost, gross profit, EBITDA, and variance vs budget using advanced DAX and matrix visuals.",
    url: "https://youtu.be/i3AR0gt9SHA?si=rCrL-7aK6VZYvZ7x",
  },
  {
    id: "phase2-marketing-roi",
    level: "Phase 2 — Intermediate",
    title: "Marketing Campaign ROI Dashboard",
    description:
      "Measure campaign performance by channel, conversion funnel, ROI percentage, and cost per lead using calculated measures.",
    url: "https://youtu.be/rk8Gx4kOuiw?si=eyvsQK5lt5TPYwWL",
  },

  // Phase 3 — Advanced / Industry-Ready
  {
    id: "phase3-supplychain",
    level: "Phase 3 — Advanced",
    title: "Supply Chain & Inventory Dashboard",
    description:
      "Monitor stock levels, reorder alerts, supplier performance, lead time, and inventory turnover with conditional formatting and KPIs.",
    url: "https://youtu.be/Gu583PXJDpY?si=LijcWEMS_OJYi6hI",
  },
  {
    id: "phase3-executive-kpi",
    level: "Phase 3 — Advanced",
    title: "Executive KPI Dashboard",
    description:
      "Design a C-level dashboard with company KPIs, trends, risks, navigation buttons, bookmarks, and storytelling visuals.",
    url: "https://youtu.be/i3AR0gt9SHA?si=QXSnY1NtUrAhj9A3",
  },
];

export default function PowerBIProjects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">

        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            📊 Power BI Project Roadmap
          </h2>
          <p className="mt-2 text-gray-600">
            Build Power BI mastery from beginner to industry-ready by practicing real-world, production-grade dashboard projects.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.id}
              className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform"
              aria-labelledby={`${p.id}-title`}
            >
              <span className="inline-block text-xs font-medium bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                {p.level}
              </span>

              <h3
                id={`${p.id}-title`}
                className="mt-4 text-lg font-semibold text-gray-900 group-hover:text-blue-600"
              >
                {p.title}
              </h3>

              <p className="mt-2 text-gray-600 text-sm">{p.description}</p>

              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-blue-600 font-medium hover:underline"
              >
                Explore Project ▶
              </a>
            </article>
          ))}
        </div>

        <footer className="mt-10 text-sm text-gray-500 text-center">
          Follow the path → practice the projects → master Power BI like an industry analyst.
        </footer>
      </div>
    </section>
  );
}
