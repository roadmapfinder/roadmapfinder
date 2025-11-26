// components/MongoDBProjects.jsx
"use client"
import React from "react";

const projects = [
  // Phase 1 — Beginner
  {
    id: "phase1-expense-tracker",
    level: "Phase 1 — Beginner",
    title: "Personal Expense Tracker + Analytics",
    description:
      "Build an expense tracker with categories, monthly summaries, and analytics using aggregation pipelines and time-series data.",
    url: "https://www.mongodb.com/docs/manual/aggregation/",
  },
  {
    id: "phase1-basic-ecommerce",
    level: "Phase 1 — Beginner",
    title: "Basic E-Commerce Backend",
    description:
      "Create a product, user, and cart system using MongoDB CRUD, schema design fundamentals, and index best practices.",
    url: "https://www.youtube.com/live/XGV1FstO6B0?si=y8qeuuOgZeHNY-74",
  },

  // Phase 2 — Intermediate
  {
    id: "phase2-chat-app",
    level: "Phase 2 — Intermediate",
    title: "Real-Time Chat Application with Change Streams",
    description:
      "Build a full chat system with real-time message updates using MongoDB Change Streams and efficient message indexing.",
    url: "https://youtu.be/QfvvSSkb7EQ?si=zcOWRSx0jpABaafG",
  },
  {
    id: "phase2-social-media",
    level: "Phase 2 — Intermediate",
    title: "Mini Social Media Platform",
    description:
      "Implement posts, likes, comments, and a feed system using aggregation pipelines, pagination, and data modeling patterns.",
    url: "https://youtu.be/_W3R2VwRyF4?si=_-gybiT8-F95XD23",
  },

  // Phase 3 — Advanced / Industry-Ready
  {
    id: "phase3-vector-search-ai",
    level: "Phase 3 — Advanced",
    title: "AI Knowledge Base using Vector Search",
    description:
      "Store embeddings, implement vector search, hybrid text + semantic retrieval, and build an AI-powered Q&A system.",
    url: "https://youtu.be/JEBDfGqrAUA?si=6kStshpQTnbY76WQ",
  },
  {
    id: "phase3-iot-platform",
    level: "Phase 3 — Advanced",
    title: "Real time Dashboard",
    description:
      "Create a real-time  dashboard using MongoDB time-series collections, alerts, rollups, and performance-optimized indexes.",
    url: "https://youtu.be/HvYSZzRGAFM?si=PDBASOibqyzMbchV",
  },
];

export default function MongoDBProjects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">

        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            🍃 MongoDB Project Roadmap
          </h2>
          <p className="mt-2 text-gray-600">
            Build MongoDB mastery from beginner to industry-ready by working through practical, real-world projects.
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
                className="mt-4 text-lg font-semibold text-gray-900 group-hover:text-green-600"
              >
                {p.title}
              </h3>

              <p className="mt-2 text-gray-600 text-sm">{p.description}</p>

              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-green-600 font-medium hover:underline"
              >
                Explore Project ▶
              </a>
            </article>
          ))}
        </div>

        <footer className="mt-10 text-sm text-gray-500 text-center">
          Follow the path → practice the projects → master MongoDB like an industry engineer.
        </footer>
      </div>
    </section>
  );
}
