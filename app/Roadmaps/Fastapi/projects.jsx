// components/Projects.jsx
"use client";
import React from "react";

const projects = [
  // 🧩 Beginner Phase
  {
    id: "phase1-auth-system",
    level: "Beginner (0–1 month)",
    title: "User Authentication API",
    description:
      "Build a FastAPI authentication system with user registration, login, password hashing, JWT access & refresh tokens, and role-based access control using FastAPI Security utilities.",
    url: "https://youtu.be/5GxQ1rLTwaU?si=wYojBc_RJXLCZbGT"
  },
  {
    id: "phase1-crud-api",
    level: "Beginner (0–1 month)",
    title: "RESTful CRUD API",
    description:
      "Create a REST API using FastAPI for managing resources like Books or Tasks. Implement CRUD operations, pagination, filtering, Pydantic validation, and structured error handling.",
    url: "https://youtu.be/iWS9ogMPOI0?si=gCnv9iQb2iF1u3qg"
  },

  // ⚙️ Intermediate Phase
  {
    id: "phase2-blog-backend",
    level: "Intermediate (2–3 months)",
    title: "Blog / CMS Backend",
    description:
      "Develop a CMS backend with users, posts, comments, categories, draft & publish workflow, and admin access using FastAPI routers, SQLAlchemy relationships, and role permissions.",
    url: "https://youtu.be/aSdVU9-SxH4?si=XHW6LW6vkKxz2Lbd"
  },
  {
    id: "phase2-ecommerce-api",
    level: "Intermediate (3–4 months)",
    title: "Notes App",
    description:
      "Build an notes app using fast api + mongo db backend auth",
    url: "https://youtu.be/52c7Kxp_14E?si=AVWH4dPsJVF47Qp-"
  },

  // 🚀 Advanced / Industry-Ready Phase
  {
    id: "phase3-background-tasks",
    level: "Advanced",
    title: "Background Task Processing System",
    description:
      "Implement background jobs like email sending, report generation, and notifications using FastAPI BackgroundTasks, Celery, and Redis integration.",
    url: "https://youtu.be/eAHAKowv6hk?si=3-53ebFTYuvEbIEb"
  },
  {
    id: "phase3-saas-backend",
    level: "Industry-Ready",
    title: "SaaS Subscription Backend",
    description:
      "Create a multi-tenant SaaS backend with organizations, users, plans, usage limits, subscriptions, billing logic, API versioning, role management, and audit logging.",
    url: "https://youtu.be/BvsBJynm64k?si=VB1BJE0DAwiHsn8Y"
  }
];

export default function Projects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            🚀 FastAPI Project Roadmap (Beginner → Industry-Ready)
          </h2>
          <p className="mt-2 text-gray-600">
            Build these FastAPI projects step-by-step to master backend
            development, REST APIs, authentication, async processing, and SaaS
            architecture.
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
              {p.url && (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-indigo-600 font-medium hover:underline"
                >
                  Official Reference ▶
                </a>
              )}
            </article>
          ))}
        </div>

        <footer className="mt-10 text-sm text-gray-500 text-center">
          💡 Complete these FastAPI projects in order to become an industry-ready
          backend engineer with strong portfolio credibility.
        </footer>
      </div>
    </section>
  );
}
