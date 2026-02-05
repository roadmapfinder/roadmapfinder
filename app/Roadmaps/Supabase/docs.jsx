'use client'
import React from "react";

const docs = [
  {
    id: "supabase-main",
    level: "Official",
    title: "Supabase Documentation (Main)",
    description:
      "The central hub for all Supabase features including database, auth, storage, realtime, edge functions, CLI, and architecture concepts.",
    cta: "Open Docs",
    url: "https://supabase.com/docs"
  },
  {
    id: "supabase-quickstart",
    level: "Official",
    title: "Supabase Quickstarts",
    description:
      "Step-by-step guides to get started with Supabase using popular frameworks like Next.js, React, Svelte, Flutter, and more.",
    cta: "Open Docs",
    url: "https://supabase.com/docs/guides/getting-started"
  },
  {
    id: "supabase-database",
    level: "Official",
    title: "Supabase Database (PostgreSQL)",
    description:
      "Official docs for using PostgreSQL in Supabase including tables, SQL editor, functions, triggers, views, and performance tuning.",
    cta: "Open Docs",
    url: "https://supabase.com/docs/guides/database"
  },
  {
    id: "supabase-sql",
    level: "Official",
    title: "SQL & Postgres Extensions",
    description:
      "Deep dive into SQL usage, Postgres extensions, JSONB, full-text search, indexes, constraints, and advanced querying patterns.",
    cta: "Open Docs",
    url: "https://supabase.com/docs/guides/database/overview"
  },
  {
    id: "supabase-auth",
    level: "Official",
    title: "Supabase Authentication",
    description:
      "Authentication system documentation covering email/password, magic links, OAuth providers, sessions, JWTs, and security best practices.",
    cta: "Open Docs",
    url: "https://supabase.com/docs/guides/auth"
  },
  {
    id: "supabase-rls",
    level: "Official",
    title: "Row Level Security (RLS)",
    description:
      "Critical documentation for securing data using Postgres Row Level Security policies with auth.uid(), roles, and access control patterns.",
    cta: "Open Docs",
    url: "https://supabase.com/docs/guides/auth/row-level-security"
  },
  {
    id: "supabase-storage",
    level: "Official",
    title: "Supabase Storage",
    description:
      "Official guide for managing file uploads, buckets, access policies, signed URLs, CDN usage, and secure file handling.",
    cta: "Open Docs",
    url: "https://supabase.com/docs/guides/storage"
  },
  {
    id: "supabase-realtime",
    level: "Official",
    title: "Supabase Realtime",
    description:
      "Documentation for real-time database changes, subscriptions, broadcast channels, and presence using WebSockets.",
    cta: "Open Docs",
    url: "https://supabase.com/docs/guides/realtime"
  },
  {
    id: "supabase-edge-functions",
    level: "Official",
    title: "Supabase Edge Functions",
    description:
      "Serverless Edge Functions using Deno for secure backend logic, API endpoints, webhooks, and integrations.",
    cta: "Open Docs",
    url: "https://supabase.com/docs/guides/functions"
  },
  {
    id: "supabase-cli",
    level: "Official",
    title: "Supabase CLI",
    description:
      "Command-line tooling for local development, database migrations, schema management, environment sync, and deployments.",
    cta: "Open Docs",
    url: "https://supabase.com/docs/guides/cli"
  },
  {
    id: "supabase-client-js",
    level: "Official",
    title: "Supabase JavaScript Client",
    description:
      "Complete API reference for the supabase-js client including auth, database queries, storage, realtime, and edge function calls.",
    cta: "Open Docs",
    url: "https://supabase.com/docs/reference/javascript"
  },
  {
    id: "supabase-management-api",
    level: "Official",
    title: "Supabase Management API",
    description:
      "Official REST API for programmatically managing Supabase projects, organizations, settings, and infrastructure.",
    cta: "Open Docs",
    url: "https://supabase.com/docs/reference/rest/management"
  },
  {
    id: "supabase-local-dev",
    level: "Official",
    title: "Local Development & Migrations",
    description:
      "Guides for running Supabase locally, managing migrations safely, environment separation, and production deployment workflows.",
    cta: "Open Docs",
    url: "https://supabase.com/docs/guides/local-development"
  },
  {
    id: "supabase-security",
    level: "Official",
    title: "Security & Best Practices",
    description:
      "Security-focused documentation covering API keys, service roles, least privilege, SQL injection protection, and data privacy.",
    cta: "Open Docs",
    url: "https://supabase.com/docs/guides/platform/security"
  },
  {
    id: "supabase-architecture",
    level: "Official",
    title: "Supabase Architecture",
    description:
      "High-level system design and architecture explanation to understand how Supabase components work together at scale.",
    cta: "Open Docs",
    url: "https://supabase.com/docs/architecture"
  }
];

export default function SupabaseDocsCards() {
  return (
    <section className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            🚀 Supabase — Official Documentation
          </h2>
          <p className="mt-2 text-slate-600 max-w-2xl">
            These are the must-know official Supabase documentation resources for
            building secure, scalable, production-ready applications using
            PostgreSQL-first architecture.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {docs.map((d) => (
            <article
              key={d.id}
              className="group bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-transform transform hover:-translate-y-1"
              aria-labelledby={`${d.id}-title`}
            >
              <div className="flex items-start justify-between">
                <span className="inline-block text-xs font-medium bg-emerald-50 text-emerald-700 px-2 py-1 rounded-full">
                  {d.level}
                </span>
                <a
                  href={d.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-slate-400 hover:text-emerald-600 transition"
                  aria-label={`Open documentation for ${d.title}`}
                >
                  🔗 Docs
                </a>
              </div>

              <h3
                id={`${d.id}-title`}
                className="mt-4 text-lg font-semibold text-slate-900 group-hover:text-emerald-600"
              >
                {d.title}
              </h3>

              <p className="mt-3 text-sm text-slate-600">{d.description}</p>

              <div className="mt-5 flex items-center justify-between">
                <a
                  href={d.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-emerald-600 text-white px-4 py-2 text-sm font-medium hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-300"
                >
                  {d.cta}
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
                <span className="text-xs text-slate-400">Official</span>
              </div>
            </article>
          ))}
        </div>

        <footer className="mt-10 text-sm text-slate-500">
          Tip: Mastering these docs — especially Database, Auth, RLS, and Edge
          Functions — is what separates hobby Supabase users from
          industry-ready backend engineers.
        </footer>
      </div>
    </section>
  );
}
