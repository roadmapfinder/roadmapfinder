import React from "react";

const projects = [
  // Beginner Projects
  {
    id: "phase1-student-course-db",
    level: "Beginner (0–2 months)",
    title: "Student & Course Management System",
    description:
      "Design and build a relational database to manage students, teachers, courses, and grades. Focus: ER diagrams, normalization, SQL CRUD, joins. Why: Builds strong foundation in relational design.",
    url: "https://youtu.be/FoAXWjkWvrM?si=KaFkYeaMOcSTtRbv", // PostgreSQL official docs
  },
  {
    id: "phase1-ecommerce-db",
    level: "Beginner (0–2 months)",
    title: "E-Commerce Database Design",
    description:
      "Model schema for products, users, orders, and payments. Focus: relationships, indexing, data integrity, and query optimization. Why: Core structure behind most web applications.",
    url: "https://youtu.be/Yx4O4tVByZ0?si=_J6O0fhALb-vPJQF", // MySQL docs
  },
  {
    id: "phase1-inventory-system",
    level: "Beginner (0–2 months)",
    title: "Inventory & Warehouse Management System",
    description:
      "Track products, suppliers, and stock movements. Focus: triggers, transactions, stored procedures. Why: Enhances understanding of real-world database automation.",
    url: "https://youtu.be/2uOZlsSvXx0?si=Oe7o4lgj8Gyl7hwf", // PostgreSQL stored procedure docs
  },

  // Intermediate Projects
  {
    id: "phase2-analytics-warehouse",
    level: "Intermediate (2–6 months)",
    title: "Analytics Dashboard / Data Warehouse",
    description:
      "Design OLAP schema and create ETL pipelines for data aggregation. Focus: Star schema, ETL, materialized views. Why: Core of business intelligence systems.",
    url: "https://youtu.be/9GVqKuTVANE?si=G-OlxBx_tIqYk_hM", // dbt official docs
  },
  {
    id: "phase2-query-optimization",
    level: "Intermediate (2–6 months)",
    title: "Query Optimization & Performance Tuning",
    description:
      "Take complex queries and make them faster. Focus: Indexing, query plans, caching (Redis), and load balancing. Why: Critical for high-performance systems.",
    url: "https://youtu.be/S8ZzIHrLUiw?si=0ebtYfLyXCz8m-GT", // Redis official docs
  },
  {
    id: "phase2-nosql-user-tracking",
    level: "Intermediate (2–6 months)",
    title: "User Activity Tracking System (NoSQL)",
    description:
      "Capture user actions and analyze engagement in real time. Focus: MongoDB schema design, aggregation pipelines, replication. Why: Understand scalable NoSQL data design.",
    url: "https://youtu.be/4K2yoG4__r8?si=T2fFXC6uEFsb_pF0", // MongoDB docs
  },

  // Advanced Projects
  {
    id: "phase3-cloud-rds",
    level: "Advanced (6–12 months)",
    title: "Cloud Database Deployment (AWS RDS)",
    description:
      "Deploy PostgreSQL/MySQL on AWS RDS with monitoring and backups. Focus: RDS setup, IAM roles, VPC security, scaling. Why: Prepares you for cloud-native production environments.",
    url: "https://youtu.be/3WdoBWdkEBA?si=T5gNllAuS5dffEey", // AWS RDS docs
  },
  {
    id: "phase3-event-streaming-db",
    level: "Advanced (6–12 months)",
    title: "Real-Time Event Streaming & Storage",
    description:
      "Stream and store real-time data with Kafka and Cassandra. Focus: Event-driven architecture, ingestion pipelines, consistency models. Why: Needed in IoT, analytics, and monitoring systems.",
    url: "https://youtu.be/pwWIegHgNRw?si=z2pPHrV4UdXPKOcM", // Kafka docs
  },
  {
    id: "phase3-distributed-db",
    level: "Advanced (6–12 months)",
    title: "Distributed Database System Simulation",
    description:
      "Simulate distributed key-value store with replication and failover. Focus: CAP theorem, Raft/Paxos consensus, sharding. Why: Builds deep understanding of distributed database architecture.",
    url: "https://youtu.be/1EuIxyEUPPY?si=fZpfieJxqv8fP6o1", // CockroachDB docs
  },
];

export default function Projects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            🧩 Database Engineering Project Roadmap
          </h2>
          <p className="mt-2 text-gray-600">
            Step from beginner to advanced Database Engineering projects with official docs and real-world system design.
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
              <p className="mt-2 text-gray-600 text-sm">{p.description}</p>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-indigo-600 font-medium hover:underline"
              >
                Explore Documentation ▶
              </a>
            </article>
          ))}
        </div>

        <footer className="mt-10 text-sm text-gray-500 text-center">
          Build these projects step by step. Focus on SQL, NoSQL, optimization,
          ETL, cloud databases, and distributed systems to become industry-ready.
        </footer>
      </div>
    </section>
  );
}
