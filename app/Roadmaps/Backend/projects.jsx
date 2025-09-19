// components/Projects.jsx
import React from "react";

const projects = [
  {
    id: "phase1-todo-api",
    level: "Phase 1 — Beginner",
    title: "To-Do List API / Full-Stack Todo App",
    description:
      "Build a simple CRUD API for tasks with authentication and database integration. Perfect to learn REST basics.",
    url: "https://www.youtube.com/watch?v=fQZVQ7moCgg" // Hindi 2025
  },
  {
    id: "phase2-url-shortener",
    level: "Phase 2 — Lower-Intermediate",
    title: "URL Shortening Service",
    description:
      "Learn routing, database mapping, and redirects by building a Node.js URL shortener with MongoDB or TypeScript.",
    url: "https://www.youtube.com/watch?v=sKq-aSrnZog"
  },
  {
    id: "phase3-ecommerce-api",
    level: "Phase 3 — Intermediate",
    title: "E-commerce REST API (Spring Boot / Java)",
    description:
      "Develop a shopping cart backend with user management, JWT authentication, product catalog, and payment integration.",
    url: "https://www.youtube.com/watch?v=EWd3_I4X32g"
  },
  {
    id: "phase4-subscription-backend",
    level: "Phase 4 — Intermediate→Advanced",
    title: "Subscription Management Backend",
    description:
      "Build a real-world backend system handling subscriptions, authentication, and production-ready API logic.",
    url: "https://www.youtube.com/watch?v=rOpEN1JDaD0"
  },
  {
    id: "phase5-node-ts-backend",
    level: "Phase 5 — Advanced",
    title: "Backend with Node.js & TypeScript",
    description:
      "Learn type-safe backend development with Node.js, Express, TypeScript, and clean architecture principles.",
    url: "https://www.youtube.com/watch?v=Jzqv-xsxErk"
  },
  {
    id: "phase6-mern-production",
    level: "Phase 6 — Advanced",
    title: "Production-Quality MERN App",
    description:
      "Full-stack MERN application with backend API design, deployment, and production best practices.",
    url: "https://www.youtube.com/watch?v=F9gB5b4jgOI"
  }
];

export default function Projects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            ⚙️ Backend Project Roadmap
          </h2>
          <p className="mt-2 text-gray-600">
            Step through beginner to advanced backend projects, with Hindi & English tutorials (latest 2025).
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
                Watch Tutorial ▶
              </a>
            </article>
          ))}
        </div>

        <footer className="mt-10 text-sm text-gray-500 text-center">
          Follow the sequence, practice each project, and polish top 2–3 into portfolio-ready case studies.
        </footer>
      </div>
    </section>
  );
}
