"use client";
import React from "react";

const projects = [
  // 🌱 Beginner
  {
    id: "py-web-beginner-1",
    level: "Phase 1 — Beginner (Foundations)",
    title: "Authentication & User Management System",
    description:
      "Build user signup/login, password hashing, JWT authentication, email verification, and role-based access control. Teaches security fundamentals every backend developer must know.",
    cta: "Explore project",
    url: "https://youtu.be/WuyKxdLcw3w?si=WZfi6c1y9hcj5yXR"
  },
  {
    id: "py-web-beginner-2",
    level: "Phase 1 — Beginner (Foundations)",
    title: "CRUD REST API (Notes / Blog API)",
    description:
      "Create REST APIs with CRUD operations, validation, pagination, filtering, and OpenAPI docs. Builds strong API fundamentals using FastAPI or Django.",
    cta: "Explore project",
    url: "https://youtu.be/52c7Kxp_14E?si=NgWveO4pUja9zWHm"
  },
  {
    id: "py-web-beginner-3",
    level: "Phase 1 — Beginner (Foundations)",
    title: "Database-Driven Web App",
    description:
      "Design relational schema, integrate PostgreSQL, perform ORM queries, migrations, and indexing. Focus on real-world data modeling.",
    cta: "Explore project",
    url: "https://youtu.be/yBDHkveJUf4?si=1yXN7sw4cFd39iAK"
  },

  // 🌿 Intermediate
  {
    id: "py-web-intermediate-1",
    level: "Phase 2 — Intermediate (Real-World Scenarios)",
    title: "E-Commerce Backend System",
    description:
      "Build products, carts, orders, payments (mock), inventory management, and admin APIs. Covers transactions, caching, and business logic.",
    cta: "Explore project",
    url: "https://youtu.be/ZxMB6Njs3ck?si=BM4NbDGVS0HGpNlQ"
  },
  {
    id: "py-web-intermediate-2",
    level: "Phase 2 — Intermediate (Real-World Scenarios)",
    title: "Background Jobs & Task Queue System",
    description:
      "Implement background tasks like email sending, file processing, retries, and scheduling using Celery and Redis.",
    cta: "Explore project",
    url: "https://youtu.be/12eNGDjXY7s?si=TJsYs4Z7uaLoDe3Z"
  },
  {
    id: "py-web-intermediate-3",
    level: "Phase 2 — Intermediate (Real-World Scenarios)",
    title: "Real-Time Chat Application",
    description:
      "Develop a real-time chat system with WebSockets, online presence, message history, and Redis pub/sub. Introduces async Python.",
    cta: "Explore project",
    url: "https://youtu.be/mkXdvs8H7TA?si=dJ3PxGNrHByVDHeE"
  },

  // 🌲 Advanced
  {
    id: "py-web-advanced-1",
    level: "Phase 3 — Advanced (Scalable Systems)",
    title: "Multi-Tenant SaaS Application",
    description:
      "Build a SaaS app supporting multiple organizations, tenant isolation, subscription plans, and role-based permissions.",
    cta: "Explore project",
    url: "https://youtu.be/4h4R7JL-h10?si=HMvQz0NdJ6wMg2Sg"
  },
  {
    id: "py-web-advanced-2",
    level: "Phase 3 — Advanced (Scalable Systems)",
    title: "File Upload & Media Processing Service",
    description:
      "Secure file uploads, background processing, cloud storage integration, signed URLs, and async processing pipelines.",
    cta: "Explore project",
    url: "https://youtu.be/sOrw2G-Cj2A?si=bE9xykjooSLZ7Ow3"
  },
  {
    id: "py-web-advanced-3",
    level: "Phase 3 — Advanced (Industry-Ready)",
    title: "Production Deployment & DevOps Pipeline",
    description:
      "Dockerize the app, configure Nginx, CI/CD pipelines, environment configs, HTTPS, monitoring, and health checks.",
    cta: "Explore project",
    url: "https://youtu.be/jHlRqQzqB_Y?si=tKagf3VCXs7Skyyq"
  }
];

export default function ProjectCards() {
  return (
    <section className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
            🐍 Python Web Developer Projects Path — Beginner → Industry-Ready
          </h2>
          <p className="mt-2 text-slate-600 max-w-2xl">
            Build these Python web projects step by step to move from basic APIs
            to scalable, production-ready systems used in real companies.
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
                  className="inline-flex items-center gap-2 rounded-md bg-green-600 text-white px-4 py-2 text-sm font-medium hover:bg-green-700"
                >
                  {p.cta}
                  →
                </a>
                <span className="text-xs text-slate-400">~2–6 weeks</span>
              </div>
            </article>
          ))}
        </div>

        <footer className="mt-10 text-sm text-slate-500">
          Tip: These projects are designed to match real backend engineering
          work. Focus on clean architecture, security, and deployment.
        </footer>
      </div>
    </section>
  );
}
