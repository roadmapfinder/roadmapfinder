// components/Projects.jsx
"use client"
import React from "react";

const projects = [
  // 🧩 Beginner Phase
  {
    id: "phase1-auth-system",
    level: "Beginner (0–1 month)",
    title: "User Authentication System",
    description:
      "Build a Flask authentication system with user registration, login, password hashing, JWT/session authentication, and role-based access control using Flask-Login or Flask-JWT-Extended.",
    url: "https://youtu.be/nZRygaTH2MA?si=_vL5Q_so6hKJwgLp"
  },
  {
    id: "phase1-crud-api",
    level: "Beginner (0–1 month)",
    title: "RESTful CRUD API",
    description:
      "Create a REST API using Flask for managing resources like Books or Tasks. Implement CRUD operations, pagination, filtering, validation, and structured error handling.",
    url: "https://youtu.be/e-TWI2my-FA?si=ui42020svX6Oe5yt"
  },

  // ⚙️ Intermediate Phase
  {
    id: "phase2-blog-backend",
    level: "Intermediate (2–3 months)",
    title: "Blog / CMS Backend",
    description:
      "Develop a CMS backend with users, posts, comments, categories, draft & publish workflow, and admin access using Flask Blueprints and SQLAlchemy relationships.",
    url: "https://youtu.be/BQu9FBf6p7I?si=6KbCuxabVL9ZByRe"
  },
  {
    id: "phase2-ecommerce-api",
    level: "Intermediate (3–4 months)",
    title: "E-commerce Backend API",
    description:
      "Build an e-commerce backend with products, categories, cart, orders, and payment integration. Focus on database transactions, validations, and API architecture.",
    url: "https://youtu.be/bkYNv9BtS48?si=zV2rp8bmsndxoQ3q"
  },

  // 🚀 Advanced / Industry-Ready Phase
  {
    id: "phase3-background-tasks",
    level: "Advanced",
    title: "Background Task Processing System",
    description:
      "Implement background jobs like email sending, report generation, and notifications using Celery and Redis integrated with Flask.",
    url: "https://youtu.be/Y3NRCfPKp3c?si=hV6boqSGB00pLGGi"
  },
  {
    id: "phase3-saas-backend",
    level: "Industry-Ready",
    title: "SaaS Subscription Backend",
    description:
      "Create a multi-tenant SaaS backend with organizations, users, plans, usage limits, subscriptions, billing logic, API versioning, and role management.",
    url: "https://youtu.be/WRsSQnhwmQI?si=Cl0Eeu2VNJGVCH99"
  }
];

export default function Projects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            🚀 Flask Project Roadmap (Beginner → Industry-Ready)
          </h2>
          <p className="mt-2 text-gray-600">
            Build these Flask projects step-by-step to master backend
            development, REST APIs, authentication, background tasks, and SaaS
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
          💡 Complete these Flask projects in order to become an industry-ready
          backend engineer with strong portfolio credibility.
        </footer>
      </div>
    </section>
  );
}
