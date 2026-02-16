// components/LaravelProjects.jsx
"use client";
import React from "react";

const projects = [
  // Phase 1 — Beginner
  {
    id: "phase1-auth",
    level: "Phase 1 — Beginner",
    title: "User Authentication & Role Management",
    description:
      "Build a secure authentication system with login, registration, email verification, password reset, and role-based access (Admin, User). Learn Laravel auth, middleware, validation, and security best practices.",
    url: "https://laravel.com/docs/authentication",
  },
  {
    id: "phase1-crud",
    level: "Phase 1 — Beginner",
    title: "CRUD Application (Posts & Categories)",
    description:
      "Create a CRUD system with posts and categories using Laravel MVC. Learn routing, controllers, Blade views, form validation, Eloquent models, and database migrations.",
    url: "https://laravel.com/docs/eloquent",
  },

  // Phase 2 — Intermediate
  {
    id: "phase2-cms",
    level: "Phase 2 — Intermediate",
    title: "Blog / CMS with Admin Dashboard",
    description:
      "Develop a content management system with draft/publish workflows, image uploads, SEO-friendly slugs, pagination, and admin controls.",
    url: "https://laravel.com/docs/blade",
  },
  {
    id: "phase2-api",
    level: "Phase 2 — Intermediate",
    title: "REST API with Sanctum Authentication",
    description:
      "Build a RESTful API for frontend or mobile apps with token authentication, API resources, validation, pagination, and rate limiting.",
    url: "https://laravel.com/docs/sanctum",
  },
  {
    id: "phase2-tasks",
    level: "Phase 2 — Intermediate",
    title: "Task Management System",
    description:
      "Create a Trello-like task manager with projects, task statuses, assignments, notifications, and activity logs.",
    url: "https://laravel.com/docs/events",
  },

  // Phase 3 — Advanced / Industry-Ready
  {
    id: "phase3-ecommerce",
    level: "Phase 3 — Advanced",
    title: "E-Commerce Backend System",
    description:
      "Build a scalable e-commerce backend with products, carts, orders, payments, inventory management, background jobs, and transactional integrity.",
    url: "https://laravel.com/docs/queues",
  },
  {
    id: "phase3-saas",
    level: "Phase 3 — Advanced",
    title: "Multi-Tenant SaaS Platform",
    description:
      "Develop a production-grade SaaS platform with tenant isolation, subscriptions, role-based access, caching, and performance optimization.",
    url: "https://laravel.com/docs/cashier",
  },
  {
    id: "phase3-performance",
    level: "Phase 3 — Advanced",
    title: "High-Performance Laravel Application",
    description:
      "Optimize a Laravel application using caching, queues, Horizon, Octane, database indexing, and load-ready architecture.",
    url: "https://laravel.com/docs/octane",
  },
];

export default function LaravelProjects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            🧱 Laravel Project Roadmap
          </h2>
          <p className="mt-2 text-gray-600">
            Progress from beginner to industry-ready Laravel developer through
            hands-on backend projects focused on security, APIs, SaaS
            architecture, and performance.
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
                Explore Project ▶
              </a>
            </article>
          ))}
        </div>

        <footer className="mt-10 text-sm text-gray-500 text-center">
          Complete each phase to master Laravel backend development, APIs,
          security, SaaS architecture, and production-grade performance.
        </footer>
      </div>
    </section>
  );
}
