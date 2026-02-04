// components/Projects.jsx
"use client";
import React from "react";

const projects = [
  // ---------- BEGINNER PROJECTS ----------
  {
    id: "kafka-order-processing",
    level: "Kafka — Beginner",
    title: "Log Processing System",
    description:
      "Build an event-driven order processing pipeline where producers publish orders and consumers validate, process, and store them reliably.",
    url: "https://youtu.be/hNDjd9I_VGA?si=6TH8GpHJaSZkqqKf"
  },
  {
    id: "kafka-user-activity-tracking",
    level: "Kafka — Beginner",
    title: "User Activity Tracking Pipeline",
    description:
      "Stream user actions like login, clicks, and purchases into Kafka and consume them for analytics and monitoring.",
    url: "https://youtu.be/NEgesasu5OA?si=JR7c0YtvtHkjtKi1"
  },

  // ---------- INTERMEDIATE PROJECTS ----------
  {
    id: "kafka-cdc-debezium",
    level: "Kafka — Intermediate",
    title: "Change Data Capture (CDC) Pipeline",
    description:
      "Capture database changes using Debezium and Kafka Connect, then stream them to downstream systems in real time.",
    url: "https://youtu.be/TkNDjnp-1tw?si=zUrzhvsn2nlmJIYc"
  },
  {
    id: "kafka-log-aggregation",
    level: "Kafka — Intermediate",
    title: "Centralized Log Aggregation Platform",
    description:
      "Collect logs from multiple services into Kafka and push them to Elasticsearch or OpenSearch for search and analysis.",
    url: "https://youtu.be/TA2XzAN3FNQ?si=TSejw4wdmQUIdXu0"
  },

  // ---------- ADVANCED PROJECTS ----------
  {
    id: "kafka-fraud-detection",
    level: "Kafka — Advanced",
    title: "Real-Time Fraud Detection System",
    description:
      "Use Kafka Streams or ksqlDB to analyze transaction streams and detect suspicious patterns using windowed processing.",
    url: "https://youtu.be/Pf1pB6etxEQ?si=qWfw7zKebgktYRch"
  },
  {
    id: "kafka-multi-tenant-platform",
    level: "Kafka — Advanced",
    title: "Multi-Tenant Event Streaming Platform",
    description:
      "Design a secure, scalable Kafka platform supporting multiple teams with ACLs, quotas, monitoring, and disaster recovery.",
    url: "https://youtu.be/8hcUBhLE6_U?si=2-CjvCG8pi9T9nl9"
  }
];

export default function Projects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            🔥 Apache Kafka Project Roadmap
          </h2>
          <p className="mt-2 text-gray-600">
            From foundational Kafka projects to production-grade streaming systems — designed to make you industry-ready.
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
          Build these Kafka projects end-to-end and you’ll be ready for real-world streaming systems 🚀
        </footer>
      </div>
    </section>
  );
}
