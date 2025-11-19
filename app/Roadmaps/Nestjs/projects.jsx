// components/Projects.jsx
"use client"
import React from "react";

const projects = [
  {
    id: "nest-auth-api",
    level: "Phase 1 — Beginner",
    title: "NestJS Authentication & Users API",
    description:
      "Beginner-friendly project to learn JWT authentication, role-based access, DTO validation, password hashing, and basic API architecture.",
    url: "https://youtu.be/8jQZdDaBL3I?si=wc7-b5G_UdXOHPda" // placeholder
  },
  {
    id: "nest-task-manager",
    level: "Phase 2 — Intermediate",
    title: "NestJS Task Manager / Project Manager API",
    description:
      "Intermediate project covering database schema design, CRUD operations, pagination, filters, error handling, and Prisma/TypeORM usage.",
    url: "https://youtu.be/aq5Gzj2Rc8Y?si=oysT4KercuQbkem3" // placeholder
  },
  {
    id: "nest-realtime-chat",
    level: "Phase 2 — Intermediate",
    title: "NestJS Real-Time Chat App with WebSockets",
    description:
      "Build a real-time messaging backend with NestJS WebSockets, JWT-based socket auth, event gateways, presence tracking, and message persistence.",
    url: "https://youtu.be/eEa3u3wyYu4?si=bCdKJKQee9fZHLl8" // placeholder
  },
  {
    id: "nest-ecommerce-backend",
    level: "Phase 3 — Advanced",
    title: "NestJS E-Commerce Backend",
    description:
      "Advanced e-commerce backend with products, cart, orders, Stripe/Razorpay integration, webhooks, transactions, and admin role management.",
    url: "https://youtu.be/E1wtzB0ZSgQ?si=4um1KLPk6h0JfURu" // placeholder
  },
  {
    id: "nest-microservices",
    level: "Phase 4 — Advanced",
    title: "NestJS Microservices Order System",
    description:
      "Event-driven microservices using Kafka/NATS/Redis MQ. Includes API gateway, auth service, order service, payments service, and notification service.",
    url: "https://youtu.be/t76UMpwFNs0?si=1SD6n5bvp7FBjGAM" // placeholder
  },
  {
    id: "nest-saas-multitenant",
    level: "Phase 5 — Pro Level",
    title: "NestJS Multi-Tenant SaaS Backend",
    description:
      "Pro-level project implementing multi-tenant architecture, dynamic DB connections, billing, roles, permissions, and clean architecture patterns.",
    url: "https://youtu.be/l-xMjWR978c?si=Pz2Q1bJ_hf6-gUsv" // placeholder
  }
];

export default function Projects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            🚀 Verified NestJS Backend Project Roadmap
          </h2>
          <p className="mt-2 text-gray-600">
            Carefully selected backend projects from beginner to industry-level,
            designed to make you job-ready in real-world NestJS development.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.id}
              className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform"
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
                Open Guide ▶
              </a>
            </article>
          ))}
        </div>

        <footer className="mt-10 text-sm text-gray-500 text-center">
          These projects represent real-world NestJS systems used in modern
          companies — mastering them makes you truly industry-ready.
        </footer>
      </div>
    </section>
  );
}
