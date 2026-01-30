"use client";
import React from "react";

const projects = [
  // 🌱 Beginner
  {
    id: "phase1-task-management-api",
    level: "Phase 1 — Beginner",
    title: "Task Management REST API",
    description:
      "Build a RESTful API to manage tasks, users, priorities, and statuses. Focus on CRUD operations, proper HTTP responses, DTOs, and validation.",
    url: "https://youtu.be/38GNKtclDdE?si=BVDCmjjf4dWhz_TM"
  },
  {
    id: "phase1-csharp-core-system",
    level: "Phase 1 — Beginner",
    title: "C# Core Console Management System",
    description:
      "Create a console-based system using OOP, collections, LINQ, exception handling, and file persistence to master C# fundamentals.",
    url: "https://youtu.be/bEjA8-SLtUo?si=-SeXkmSdnipGb8ZI"
  },

  // 🌿 Intermediate
  {
    id: "phase2-authentication-system",
    level: "Phase 2 — Intermediate",
    title: "Authentication & Authorization System",
    description:
      "Implement JWT authentication with refresh tokens, role-based and policy-based authorization using ASP.NET Identity.",
    url: "https://youtu.be/V-S5JZJUvvU?si=OPspurCc5IDgooTX"
  },
  {
    id: "phase2-ecommerce-backend",
    level: "Phase 2 — Intermediate",
    title: "E-Commerce Backend API",
    description:
      "Develop a production-style backend handling products, carts, orders, inventory, and transactions using Clean Architecture.",
    url: "https://youtu.be/_eXr8G8V4FE?si=StDRDxpgBDMSV7jW"
  },

  // 🌳 Advanced
  {
    id: "phase3-background-processing",
    level: "Phase 3 — Advanced",
    title: "Background Jobs & Notification Service",
    description:
      "Build an async notification system using background services, queues, retries, logging, and failure handling.",
    url: "https://youtu.be/ip3Z4ZcAgA8?si=Yb6PrbgCP92izCIv"
  },
  {
    id: "phase3-cloud-saas-app",
    level: "Phase 3 — Advanced",
    title: "Cloud-Deployed SaaS Application",
    description:
      "Create a multi-tenant SaaS backend with Docker, CI/CD, environment configs, Azure deployment, monitoring, and scalability.",
    url: "https://youtu.be/Li86oRPuq5g?si=6y4-7MCs8VDf8dEf/"
  }
];

export default function Projects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            ⚙️ .NET Developer Project Roadmap
          </h2>
          <p className="mt-2 text-gray-600">
            Build essential .NET projects from beginner to industry-ready —
            APIs, authentication, clean architecture, background processing,
            and cloud-deployed systems.
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
          Complete all 6 projects with clean architecture, proper error handling,
          security, and cloud deployment. These projects are sufficient to crack
          junior-to-mid .NET developer roles and build a strong backend portfolio.
        </footer>
      </div>
    </section>
  );
}
