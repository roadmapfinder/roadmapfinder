"use client";
import React from "react";

const projects = [
  // 🌱 Beginner
  {
    id: "supabase-beginner-1",
    level: "Phase 1 — Beginner (Core Foundations)",
    title: "Auth-First Personal Dashboard",
    description:
      "Build a secure user dashboard with Supabase Auth. Features include signup/login, protected routes, user-specific CRUD operations, and strict Row Level Security using auth.uid(). This project builds strong foundations in auth + database security.",
    cta: "Explore project",
    url: "https://supabase.com/docs/guides/auth"
  },
  {
    id: "supabase-beginner-2",
    level: "Phase 1 — Beginner (Core Foundations)",
    title: "File-Driven Profile System",
    description:
      "Create user profiles with avatar uploads using Supabase Storage. Implement public and private buckets, signed URLs, metadata tables, and RLS rules for secure file access and ownership validation.",
    cta: "Explore project",
    url: "https://supabase.com/docs/guides/storage"
  },

  // 🌿 Intermediate
  {
    id: "supabase-intermediate-1",
    level: "Phase 2 — Intermediate (Realtime & Collaboration)",
    title: "Real-Time Collaboration App",
    description:
      "Build a live collaboration feature such as chat or shared notes using Supabase Realtime. Implement Postgres change feeds, presence tracking, and optimized subscriptions for scalable real-time updates.",
    cta: "Explore project",
    url: "https://supabase.com/docs/guides/realtime"
  },
  {
    id: "supabase-intermediate-2",
    level: "Phase 2 — Intermediate (SaaS Architecture)",
    title: "Multi-Tenant SaaS Dashboard",
    description:
      "Design a SaaS-style app with organizations, team members, and role-based access. Focus on advanced RLS policies, secure joins, and multi-tenant schema design using PostgreSQL best practices.",
    cta: "Explore project",
    url: "https://supabase.com/docs/guides/auth/row-level-security"
  },

  // 🌲 Advanced
  {
    id: "supabase-advanced-1",
    level: "Phase 3 — Advanced (Payments & Backend Logic)",
    title: "Subscription-Based SaaS (Stripe + Supabase)",
    description:
      "Build a paid SaaS product with free and premium plans. Use Supabase Edge Functions for Stripe webhooks, secure server-side logic, subscription state syncing, and feature gating at the database level.",
    cta: "Explore project",
    url: "https://supabase.com/docs/guides/functions"
  },
  {
    id: "supabase-advanced-2",
    level: "Phase 3 — Advanced (Production & Compliance)",
    title: "Audit-Ready Admin Platform",
    description:
      "Create an internal admin panel with audit logs, activity tracking, soft deletes, Postgres triggers, materialized views, and admin-only RLS. This project mirrors real enterprise-grade Supabase systems.",
    cta: "Explore project",
    url: "https://supabase.com/docs/guides/database"
  }
];

export default function ProjectCards() {
  return (
    <section className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
            🚀 Supabase Project Path — Beginner → Industry-Ready
          </h2>
          <p className="mt-2 text-slate-600 max-w-2xl">
            These Supabase projects are designed to move learners from basic
            CRUD usage to real-world SaaS, security, and backend engineering
            skills used in production systems.
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
                <span className="inline-block text-xs font-medium bg-emerald-50 text-emerald-700 px-2 py-1 rounded-full">
                  {p.level}
                </span>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-slate-400 hover:text-emerald-600 transition"
                  aria-label={`Open docs for ${p.title}`}
                >
                  Docs ▶
                </a>
              </div>

              <h3
                id={`${p.id}-title`}
                className="mt-4 text-lg font-semibold text-slate-900 group-hover:text-emerald-600"
              >
                {p.title}
              </h3>

              <p className="mt-3 text-sm text-slate-600">{p.description}</p>

              <div className="mt-5 flex items-center justify-between">
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-emerald-600 text-white px-4 py-2 text-sm font-medium hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-300"
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

                <span className="text-xs text-slate-400">~2–6 weeks</span>
              </div>
            </article>
          ))}
        </div>

        <footer className="mt-10 text-sm text-slate-500">
          Tip: Supabase mastery is not about CRUD — it’s about RLS, Postgres
          design, Edge Functions, and production security. These projects force
          you to learn all of them.
        </footer>
      </div>
    </section>
  );
}
