// components/Projects.jsx
"use client"
import React from "react";

const projects = [
  {
    id: "expense-tracker",
    level: "Phase 1 — Beginner",
    title: "Personal Expense Tracker",
    description:
      "Learn SUM, AVERAGE, Data Validation, and Excel Tables to create a categorized monthly expense report.",
    url: "https://youtu.be/JNrEGN5HyI0?si=we2n0Z7TiHAEMAN8"
  },
  {
    id: "record-system",
    level: "Phase 1 — Beginner",
    title: "Student Record System",
    description:
      "Master Sorting, Filtering, and Conditional Formatting to build a smart searchable database.",
    url: "https://youtu.be/q9mYo_4wPbE?si=HBVw_fnyueQtIzkV"
  },
  {
    id: "basic-sales-report",
    level: "Phase 1 — Beginner",
    title: "Basic Sales Report",
    description:
      "Use Charts, PivotTable basics, and Lookup functions to analyze sales trends and highlight top products.",
    url: "https://youtu.be/WV6X0rol5To?si=I1lnOgVuPZoz3jZl"
  },
  {
    id: "inventory-management",
    level: "Phase 2 — Intermediate",
    title: "Inventory Management System",
    description:
      "Apply XLOOKUP and advanced IF logic to generate low-stock alerts and map suppliers dynamically.",
    url: "https://youtu.be/ZeziCCDL348?si=-QLsV3XuCYae6uE3"
  },
  {
    id: "hr-payroll",
    level: "Phase 2 — Intermediate",
    title: "HR Attendance + Payroll Calculator",
    description:
      "Utilize nested formulas and DATE functions to automate salary slip generation from attendance data.",
    url: "https://youtu.be/TR_OyLv3qCo?si=QAaJ69XYXjGRoi7l"
  },
  {
    id: "ecommerce-tracker",
    level: "Phase 2 — Intermediate",
    title: "E-Commerce Order Tracker Dashboard",
    description:
      "Create a clean dashboard using PivotTables, Slicers, and Power Query for KPI-based order analysis.",
    url: "https://youtu.be/gTK5rNhWJyA?si=YUH2dRAOEbn9XoZ5"
  },
  {
    id: "marketing-roi",
    level: "Phase 3 — Advanced",
    title: "Marketing ROI & Funnel Analysis",
    description:
      "Use Power Pivot and DAX to build campaign ROI dashboards with KPI tracking for conversion funnels.",
    url: "https://youtu.be/BVenI8RwXW0?si=3xlDbQnjrozCaPSQ"
  },
  {
    id: "financial-forecasting",
    level: "Phase 3 — Advanced",
    title: "Financial Forecasting & Budget Planning",
    description:
      "Apply Forecast Sheets and Scenario Manager to create 12-month projections with What-If modeling.",
    url: "https://youtu.be/GjxhDo9luh8?si=EbdCBwoCpvhB3Brf"
  },
  {
    id: "automated-etl-toolkit",
    level: "Phase 3 — Advanced",
    title: "Automated Data Cleaning Toolkit",
    description:
      "Develop one-click ETL automation using Power Query M and VBA macros to process multiple files at once.",
    url: "https://youtu.be/jxq4-KSB_OA?si=r6nzkMbpC-eU6PQG"
  }
];

export default function Projects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            📊 Excel Projects Roadmap
          </h2>
          <p className="mt-2 text-gray-600">
            Industry-ready Excel portfolio projects to master data analysis from beginner to advanced.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.id}
              className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform"
              aria-labelledby={`${p.id}-title`}
            >
              <span className="inline-block text-xs font-medium bg-green-100 text-green-800 px-2 py-1 rounded-full">
                {p.level}
              </span>
              <h3
                id={`${p.id}-title`}
                className="mt-4 text-lg font-semibold text-gray-900 group-hover:text-indigo-600"
              >
                {p.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">{p.description}</p>
              {p.url && (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-indigo-600 font-medium hover:underline"
                >
                  View Resource ➜
                </a>
              )}
            </article>
          ))}
        </div>

        <footer className="mt-10 text-sm text-gray-500 text-center">
          These Excel projects build real industry-ready skills step-by-step.
        </footer>
      </div>
    </section>
  );
}
