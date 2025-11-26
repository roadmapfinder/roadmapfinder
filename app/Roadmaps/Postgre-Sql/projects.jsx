// components/PostgreSQLProjects.jsx
"use client"
import React from "react";

const projects = [
  // Phase 1 — Beginner
  {
    id: "phase1-ecommerce-db",
    level: "Phase 1 — Beginner",
    title: "E-Commerce Database Schema & Queries",
    description:
      "Design complete relational schemas with foreign keys, constraints, indexing, and write SQL queries for products, users, orders, and payments.",
    url: "https://youtu.be/1HamqOuv2Cw?si=CmcePlS1tgzOCS6K",
  },
  {
    id: "phase1-library-system",
    level: "Phase 1 — Beginner",
    title: "Library Management System",
    description:
      "Build a system with books, authors, users, and borrowing history using joins, group-by queries, views, and indexing basics.",
    url: "https://youtu.be/EZajJGOMWas?si=j9-4aRfTqp08_dGb",
  },

  // Phase 2 — Intermediate
  {
    id: "phase2-analytics-engine",
    level: "Phase 2 — Intermediate",
    title: "Analytics Dashboard with Partitioning",
    description:
      "Create a log/analytics dashboard using PostgreSQL partitioning, materialized views, and performance tuning with EXPLAIN ANALYZE.",
    url: "https://youtu.be/oJj-pltxBUM?si=VlUFergENVaNkNSf",
  },
  {
    id: "phase2-realtime-notifications",
    level: "Phase 2 — Intermediate",
    title: "Real-Time Notifications using Logical Decoding",
    description:
      "Use logical replication, WAL decoding, triggers, and NOTIFY/LISTEN to stream real-time database events to a backend service.",
    url: "https://youtu.be/gZ8MhQ0eZ08?si=ghtD6MOM1iXzi-jr",
  },

  // Phase 3 — Advanced / Industry-Ready
  {
    id: "phase3-fulltext-search",
    level: "Phase 3 — Advanced",
    title: "Enterprise Full-Text Search Engine",
    description:
      "Build a full-text search system using tsvector, tsquery, GIN indexes, ranking, and trigram-based fuzzy search.",
    url: "https://youtu.be/zc6lMaoroj0?si=3Wsa_RcJWS7Ps7Hs",
  },
  {
    id: "phase3-postgres-ha",
    level: "Phase 3 — Advanced",
    title: "High Availability Postgres Cluster",
    description:
      "Set up PostgreSQL streaming replication, failover, monitoring, WAL configuration, and real-world HA architecture.",
    url: "https://youtu.be/RHwglGf_z40?si=gI1QlBILFMD2Yhuk",
  },
];

export default function PostgreSQLProjects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">

        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            🐘 PostgreSQL Project Roadmap
          </h2>
          <p className="mt-2 text-gray-600">
            Build PostgreSQL mastery from beginner to industry-ready by practicing real-world, production-grade projects.
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
          Follow the path → practice the projects → master PostgreSQL like an industry engineer.
        </footer>
      </div>
    </section>
  );
}
