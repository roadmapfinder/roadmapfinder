// components/Projects.jsx
"use client";
import React from "react";

const projects = [
  // 🧩 Beginner Phase
  {
    id: "phase1-auth-system",
    level: "Beginner (0–1 month)",
    title: "Authentication & Authorization API",
    description:
      "Build a Fastify authentication system with user registration, login, password hashing, JWT access & refresh tokens, role-based access control, and protected routes using Fastify plugins.",
    url: "https://youtu.be/xJA8tP74KD0?si=BM3ObB6j2ib8O2vg"
  },
  {
    id: "phase1-crud-api",
    level: "Beginner (0–1 month)",
    title: "RESTful CRUD API",
    description:
      "Create a REST API using Fastify to manage resources like tasks or notes. Implement CRUD operations, schema validation, pagination, filtering, centralized error handling, and proper response serialization.",
    url: "https://youtu.be/LMoMHP44-xM?si=bEaMH69K1lMEUUqb"
  },

  // ⚙️ Intermediate Phase
  {
    id: "phase2-blog-backend",
    level: "Intermediate (2–3 months)",
    title: "Blog website",
    description:
      "Develop a CMS backend using Fastify with users, posts, comments, categories, draft & publish workflows, admin roles, database integration, and clean plugin-based architecture.",
    url: "https://youtu.be/1hROFu5WLzg?si=2xvnidTOSpvHL32w/"
  },
  {
    id: "phase2-notes-api",
    level: "Intermediate (3–4 months)",
    title: "Notes App Backend (Fastify + MongoDB)",
    description:
      "Build a notes application backend using Fastify and MongoDB with authentication, authorization, schema validation, indexing, and clean repository/service separation.",
    url: "https://youtu.be/xENx639mPxg?si=FuT2fUxQ4XiJ6wnv"
  },

  // 🚀 Advanced / Industry-Ready Phase
  {
    id: "phase3-file-streaming",
    level: "Advanced",
    title: "File Upload & Streaming Service",
    description:
      "Implement large file uploads and streaming downloads using Fastify streams and multipart handling. Focus on memory safety, backpressure, and production-grade error handling.",
    url: "https://www.youtube.com/live/IcGsgGTkwSo?si=hoNRgXkUrCUnHQxG"
  },
  {
    id: "phase3-saas-backend",
    level: "Industry-Ready",
    title: "Multi-Tenant SaaS Backend",
    description:
      "Create a production-grade SaaS backend with organizations, users, roles, subscriptions, usage limits, API versioning, audit logs, rate limiting, and deployment-ready Fastify architecture.",
    url: "https://youtu.be/b6VhN_HHDiQ?si=pAHKTaMNP49OrKuj"
  }
];

export default function Projects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            🚀 Fastify Project Roadmap (Beginner → Industry-Ready)
          </h2>
          <p className="mt-2 text-gray-600">
            Build these Fastify projects step-by-step to master backend
            development, schema-first APIs, authentication, performance,
            scalability, and production architecture.
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
                  View Tutorial ▶
                </a>
              )}
            </article>
          ))}
        </div>

        <footer className="mt-10 text-sm text-gray-500 text-center">
          💡 Completing these Fastify projects proves real backend capability —
          schema-driven APIs, performance awareness, and production readiness.
        </footer>
      </div>
    </section>
  );
}
