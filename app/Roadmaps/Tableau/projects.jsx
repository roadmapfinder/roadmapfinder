"use client";
// components/Projects.jsx
import React from "react";

const projects = [
  // Phase 1 — Beginner
  {
    id: "sales-kpi-dashboard",
    level: "Phase 1 — Beginner",
    title: "Sales Performance & KPI Dashboard",
    description:
      "Build an interactive sales dashboard tracking revenue, profit, quantity, regional performance, and monthly trends using core Tableau charts.",
    url: "https://youtu.be/NoppQVdd8U8?si=1F4F0RU-MzXSzFsu",
    channel: "Tableau Official Docs",
  },
  {
    id: "customer-cohort-analysis",
    level: "Phase 1 — Beginner",
    title: "Customer Segmentation & Cohort Analysis",
    description:
      "Analyze customer behavior with cohorts, retention heatmaps, new vs returning users, and segment-based revenue insights.",
    url: "https://youtu.be/jWHJc5gGMnk?si=Tqhd-iyMBiT0Cyb2",
    channel: "Tableau Calculations Docs",
  },

  // Phase 2 — Intermediate
  {
    id: "executive-overview",
    level: "Phase 2 — Intermediate",
    title: "Executive Business Overview Dashboard",
    description:
      "Design a one-page executive dashboard with KPIs, profit analysis, drill-down actions, and stakeholder-focused storytelling.",
    url: "https://youtu.be/slMoEx45tjg?si=s-dluflF3LheIMwc",
    channel: "Tableau Dashboard Design",
  },
  {
    id: "product-funnel-analysis",
    level: "Phase 2 — Intermediate",
    title: "Product Funnel & Conversion Analysis",
    description:
      "Create a funnel dashboard showing stage-wise drop-offs, conversion rates, and segment comparison using calculated fields and parameters.",
    url: "https://youtu.be/AGS542szO_o?si=AS1vy8YgOCVLuYLE",
    channel: "Tableau Table Calculations",
  },

  // Phase 3 — Advanced
  {
    id: "financial-budget-vs-actual",
    level: "Phase 3 — Advanced",
    title: "Financial Budget vs Actual Dashboard",
    description:
      "Build a finance-grade dashboard comparing budget vs actuals with variance analysis, trends, and LOD-based accuracy.",
    url: "https://youtu.be/urIlcZn4ilo?si=smjjrNWm4nnMfd6d",
    channel: "Tableau LOD Expressions",
  },
  {
    id: "enterprise-bi-solution",
    level: "Phase 3 — Advanced",
    title: "Role-Based Enterprise BI Dashboard",
    description:
      "Simulate a real enterprise BI solution with row-level security, optimized extracts, user-based views, and Tableau Server concepts.",
    url: "https://youtu.be/oAIubTqg-Kw?si=MZ-msZ7KqDCgsuKc",
    channel: "Tableau Server & Cloud",
  },
];

export default function Projects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            📊 Tableau Project Roadmap
          </h2>
          <p className="mt-2 text-gray-600">
            Progressive Tableau projects from Beginner → Intermediate → Advanced to become industry-ready BI & Tableau professional.
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

              <p className="mt-2 text-gray-600 text-sm">
                {p.description}
              </p>

              <p className="mt-1 text-gray-500 text-xs">
                Reference: {p.channel}
              </p>

              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-indigo-600 font-medium hover:underline"
              >
                View Tutorial ▶
              </a>
            </article>
          ))}
        </div>

        <footer className="mt-10 text-sm text-gray-500 text-center">
          Each project mirrors real-world Tableau use cases — KPI tracking, analytics, financial reporting, and enterprise BI delivery.
        </footer>
      </div>
    </section>
  );
}
