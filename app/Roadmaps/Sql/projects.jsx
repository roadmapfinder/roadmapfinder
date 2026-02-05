"use client"
import React from "react";

const projects = [
  // 🌱 Beginner
  {
    id: "sql-beginner-1",
    level: "Phase 1 — Beginner (Foundations)",
    title: "Library Management System",
    description:
      "CRUD operations, relational schema, joins. Tables: Books, Members, BorrowedBooks, Authors. Queries: borrowed/returned books, most borrowed author, overdue fines. Builds confidence in joins + relational schema design.",
    cta: "Explore project",
    url: "https://youtu.be/6X2-P9fNVvw?si=heGXspZbgfAmapBb" // sample DB ref
  },
  {
    id: "sql-beginner-2",
    level: "Phase 1 — Beginner (Foundations)",
    title: "E-Commerce Orders Database",
    description:
      "Tables: Customers, Orders, Products, OrderDetails, Payments. Queries: Total revenue, top customers, best-selling products. Teaches analytics with foreign keys + aggregations.",
    cta: "Explore project",
    url: "https://youtu.be/oZRAaWAI4r0?si=ipUSAn7Ot75pWbUv" // MySQL docs
  },
  {
    id: "sql-beginner-3",
    level: "Phase 1 — Beginner (Foundations)",
    title: "Student Result Management",
    description:
      "Tables: Students, Courses, Grades, Instructors. Queries: GPA calculation, top student per subject, pass/fail analysis. Builds GROUP BY + aggregations practice.",
    cta: "Explore project",
    url: "https://youtu.be/Zrx6hS1adQk?si=1We9v0a1n4jwItOC" // Postgres docs
  },

  // 🌿 Intermediate
  {
    id: "sql-intermediate-1",
    level: "Phase 2 — Intermediate (Practical Scenarios)",
    title: "Sales & Inventory Dashboard Database",
    description:
      "Tables: Products, Sales, Suppliers, Inventory. Queries: Monthly sales trends, running totals, stock alerts. Focus on CTEs, window functions, optimization. Mimics BI dashboards.",
    cta: "Explore project",
    url: "https://youtu.be/Qr1Go2gP8fo?si=4RuMTqQ_qpxFAlLk" // MS SQL Server docs
  },
  {
    id: "sql-intermediate-2",
    level: "Phase 2 — Intermediate (Practical Scenarios)",
    title: "Hospital / Patient Management System",
    description:
      "Tables: Patients, Doctors, Appointments, Prescriptions, Billing. Queries: Doctor schedule conflicts, revenue per department, diagnosis analytics. Teaches normalization, constraints, and transactions.",
    cta: "Explore project",
    url: "https://youtu.be/lQ5sjfoTE-4?si=IkOyWF-SBzTZxxMH/" // MySQL docs
  },
  {
    id: "sql-intermediate-3",
    level: "Phase 2 — Intermediate (Practical Scenarios)",
    title: "Banking / Finance Transaction Database",
    description:
      "Tables: Accounts, Customers, Transactions, Loans. Queries: Monthly statements, suspicious transactions, interest calculation. Focus on ACID, stored procedures, isolation levels.",
    cta: "Explore project",
    url: "https://youtu.be/zROvasdXSqM?si=r5FdLeiCQmaoJeeJ"
  },

  // 🌲 Advanced
  {
    id: "sql-advanced-1",
    level: "Phase 3 — Advanced (Analytics & Big Data)",
    title: "Movie Streaming Analytics (Netflix-like)",
    description:
      "Tables: Users, Movies, Subscriptions, WatchHistory, Ratings. Queries: Most watched genre per country, churn prediction signals, avg watch time per user. Teaches partitioning + window functions.",
    cta: "Explore project",
    url: "https://youtu.be/-7cT0651_lw?si=guiQquwlaTWW8pMT" // BigQuery SQL
  },
  {
    id: "sql-advanced-2",
    level: "Phase 3 — Advanced (Analytics & Big Data)",
    title: "Data Warehouse (Retail Star Schema)",
    description:
      "Fact: Sales. Dimensions: Products, Customers, Time, Stores. Queries: Year-over-year growth, customer segmentation, profit by region. Learn ETL + dimensional modeling.",
    cta: "Explore project",
    url: "https://youtu.be/K7C1sWKQU-o?si=MSERqNgaF-cs-Ych" // Snowflake docs
  },
  {
    id: "sql-advanced-3",
    level: "Phase 3 — Advanced (Analytics & Big Data)",
    title: "Log Analysis System (Big Data Style)",
    description:
      "Table: ServerLogs(user_id, action, timestamp, device, location). Queries: Peak traffic, error rates, retention cohorts. Focus: partitioning, indexing, optimization for millions of rows.",
    cta: "Explore project",
    url: "https://www.youtube.com/live/8YvZZPWmhzQ?si=JHkcFpvmZ2NP1WxG"
  },
];

export default function ProjectCards() {
  return (
    <section className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
            🏗 SQL Developer Projects Path — Beginner → Industry-Ready
          </h2>
          <p className="mt-2 text-slate-600 max-w-2xl">
            Build these SQL projects step by step to progress from CRUD basics
            to advanced data analytics & warehouse design.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article
              key={p.id}
              className="group bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-transform transform hover:-translate-y-1"
              aria-labelledby={`${p.id}-title`}
            >
              <div className="flex items-start justify-between">
                <span className="inline-block text-xs font-medium bg-green-50 text-green-700 px-2 py-1 rounded-full">
                  {p.level}
                </span>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-slate-400 hover:text-green-600 transition"
                  aria-label={`Open docs for ${p.title}`}
                >
                  Docs ▶
                </a>
              </div>

              <h3
                id={`${p.id}-title`}
                className="mt-4 text-lg font-semibold text-slate-900 group-hover:text-green-600"
              >
                {p.title}
              </h3>

              <p className="mt-3 text-sm text-slate-600">{p.description}</p>

              <div className="mt-5 flex items-center justify-between">
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-green-600 text-white px-4 py-2 text-sm font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300"
                >
                  {p.cta}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>

                <span className="text-xs text-slate-400">~1–4 weeks</span>
              </div>
            </article>
          ))}
        </div>

        <footer className="mt-10 text-sm text-slate-500">
          Tip: Don’t just write queries — focus on indexing, optimization, and
          scalability. These make you truly industry-ready.
        </footer>
      </div>
    </section>
  );
}
