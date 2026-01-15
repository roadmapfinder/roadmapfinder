"use client"
import React from "react";

const projects = [
  {
    id: "arch-beginner-1",
    level: "Phase 1 — Beginner (Foundations – Monolith Thinking)",
    title: "Task Manager (Trello Lite)",
    description:
      "Monolithic MVC/3-tier architecture project with CRUD, authentication, REST APIs, and relational DB schema. Teaches layered design, normalization, and separation of concerns.",
    cta: "Explore project",
    url: "https://youtu.be/s5HK_H9GSDI?si=J7Gw82rKtnrCw3an"
  },
  {
    id: "arch-beginner-2",
    level: "Phase 1 — Beginner (Foundations – Monolith Thinking)",
    title: "Library Management System",
    description:
      "Layered monolith with repository pattern, DTOs, and role-based access (admin, user). Practice clean architecture and design patterns like Factory and Strategy.",
    cta: "Explore project",
    url: "https://youtu.be/fVqv4B8sG1s?si=l-oSWbR0yBuV9nsA"
  },
  {
    id: "arch-intermediate-1",
    level: "Phase 2 — Intermediate (Service-Oriented Thinking)",
    title: "E-Commerce Backend (Amazon Lite)",
    description:
      "Microservices architecture with Product, Cart, Orders, and Payments. Concepts: API Gateway, database per service, service communication. Learn domain boundaries & trade-offs.",
    cta: "Explore project",
    url: "https://youtu.be/-wJuExkI97s?si=bS50pF4oKjnKdo4U"
  },
  {
    id: "arch-intermediate-2",
    level: "Phase 2 — Intermediate (Service-Oriented Thinking)",
    title: "Social Media Feed System",
    description:
      "Event-driven (CQRS + Pub/Sub) system for feed generation. Uses caching (Redis), eventual consistency, and real-time updates with WebSockets. Simulates high-traffic systems.",
    cta: "Explore project",
    url: "https://youtu.be/MQOz1yZaC54?si=0KxwZF91rfj7cw7p"
  },
  {
    id: "arch-intermediate-3",
    level: "Phase 2 — Intermediate (Service-Oriented Thinking)",
    title: "Online Learning Platform (Udemy Lite)",
    description:
      "Modular monolith or microservices for media storage, payments, and user progress tracking. Introduces Domain-Driven Design (DDD) with layered architecture.",
    cta: "Explore project",
    url: "https://youtu.be/F2FmTdLtb_4?si=0KXphbLYepsERL3W"
  },
  {
    id: "arch-advanced-1",
    level: "Phase 3 — Advanced (Scalable & Distributed Systems)",
    title: "Ride Sharing App (Uber Lite)",
    description:
      "Event-driven + microservices system with real-time location tracking, matching algorithms, queues (Kafka/RabbitMQ), and Maps API. Teaches scalability & reliability.",
    cta: "Explore project",
    url: "https://youtu.be/b9pFI8J0syg?si=HQ54gdFg80Qxf-SC"
  },
  {
    id: "arch-advanced-2",
    level: "Phase 3 — Advanced (Scalable & Distributed Systems)",
    title: "Video Streaming Platform (Netflix Lite)",
    description:
      "Microservices + CDN integration with content delivery, transcoding, recommendation engine. Learn distributed storage, caching, and observability (logs, metrics, tracing).",
    cta: "Explore project",
    url: "https://youtu.be/-JtjQ-OA7XE?si=wM9R2Xa2miotxB0u"
  },
  {
    id: "arch-advanced-3",
    level: "Phase 3 — Advanced (Scalable & Distributed Systems)",
    title: "Banking System (Digital Wallet)",
    description:
      "Event-sourced CQRS system with transaction auditing, consistency models, and financial-grade architecture. Must-do for financial systems understanding.",
    cta: "Explore project",
    url: "https://youtu.be/olfaBgJrUBI?si=rz_4IXVCXF1ugAHt"
  },
  {
    id: "arch-expert-1",
    level: "Phase 4 — Expert / Capstone (Enterprise & Industry-Level)",
    title: "SaaS Multi-Tenant Platform (Notion/Slack Lite)",
    description:
      "Multi-tenant SaaS system with tenant isolation, billing, scalability, RBAC. Industry must-have for SaaS architects. Tech: Kubernetes, PostgreSQL schemas, CI/CD.",
    cta: "Explore project",
    url: "https://youtu.be/tsGarhpWOws?si=-HP_Yplx6bDzMpQW"
  }
];

export default function ProjectCards() {
  return (
    <section className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
            🏗 Software Architect Projects Path — Beginner → Industry-Ready
          </h2>
          <p className="mt-2 text-slate-600 max-w-2xl">
            Build these projects step by step to progress from monolithic
            foundations to enterprise-grade SaaS systems. 
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
                <span className="inline-block text-xs font-medium bg-blue-50 text-indigo-700 px-2 py-1 rounded-full">
                  {p.level}
                </span>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-slate-400 hover:text-blue-600 transition"
                  aria-label={`Open tutorial for ${p.title}`}
                >
                  Docs ▶
                </a>
              </div>

              <h3
                id={`${p.id}-title`}
                className="mt-4 text-lg font-semibold text-slate-900 group-hover:text-blue-600"
              >
                {p.title}
              </h3>

              <p className="mt-3 text-sm text-slate-600">{p.description}</p>

              <div className="mt-5 flex items-center justify-between">
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-blue-600 text-white px-4 py-2 text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
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
          Tip: Don’t just build — focus on architecture. Add features like
          observability, scaling strategies, or multi-tenant support to mimic
          real-world complexity.
        </footer>
      </div>
    </section>
  );
}
