import React from "react";

const projects = [
  // ---------- PHASE 1 — BEGINNER ----------
  {
    id: "ts-beginner-1",
    level: "Phase 1 — Beginner (Core TypeScript + Fundamentals)",
    title: "CLI Task Manager",
    description:
      "Build a command-line task manager to add, list, and delete tasks using Node.js and TypeScript. Learn interfaces, enums, types, and file system operations with full type safety.",
    cta: "Explore project",
    url: "https://youtu.be/ca0rBFs-dgU?si=aVVxfuaT0-PW5HCp",
  },
  {
    id: "ts-beginner-2",
    level: "Phase 1 — Beginner (Core TypeScript + Fundamentals)",
    title: "Typed Weather App (API Integration)",
    description:
      "Fetch and display live weather data using OpenWeather API with TypeScript. Define types for API responses and handle errors using async/await and type guards.",
    cta: "Explore project",
    url: "https://youtu.be/7j-BxqUhsR4?si=RxApygn8BSM3mrzP",
  },
  {
    id: "ts-beginner-3",
    level: "Phase 1 — Beginner (Core TypeScript + Fundamentals)",
    title: "TypeScript Playground / Snippet Runner",
    description:
      "Build a small in-browser or Node app that compiles TypeScript code snippets using the TypeScript compiler API. Understand compiler options and tsconfig deeply.",
    cta: "Explore project",
    url: "https://youtu.be/q-1Lc0FUruc?si=FpyaAptTqnKoMxyu",
  },

  // ---------- PHASE 2 — INTERMEDIATE ----------
  {
    id: "ts-intermediate-1",
    level: "Phase 2 — Intermediate (Full-stack Integration)",
    title: "Next.js + TypeScript Portfolio",
    description:
      "Create a personal portfolio using Next.js, TypeScript, and Tailwind. Learn typed React components, getStaticProps, and API routes with strict type checks.",
    cta: "Explore project",
    url: "https://youtu.be/TCpwcsz97wo?si=acxYFpL1-uREdR05",
  },
  {
    id: "ts-intermediate-2",
    level: "Phase 2 — Intermediate (Full-stack Integration)",
    title: "REST API with Express + Prisma",
    description:
      "Build a RESTful backend using Express and Prisma ORM with TypeScript. Implement CRUD operations, type-safe models, DTOs, and middleware validation.",
    cta: "Explore project",
    url: "https://youtu.be/TzvPIUyh-AI?si=lSCvYTErYFCfikzn",
  },
  {
    id: "ts-intermediate-3",
    level: "Phase 2 — Intermediate (Full-stack Integration)",
    title: "Chat Application (Socket.io + TypeScript)",
    description:
      "Create a real-time chat app using Socket.io and TypeScript on both client and server. Share types across layers and learn event-driven architecture with strong typing.",
    cta: "Explore project",
    url: "https://youtu.be/gCwHi-UFSdg?si=Pyj3D_nYzznA3Bua",
  },

  // ---------- PHASE 3 — ADVANCED ----------
  {
    id: "ts-advanced-1",
    level: "Phase 3 — Advanced (Type-safe Full-stack Apps)",
    title: "Full-stack App with tRPC + Next.js + Prisma",
    description:
      "End-to-end type-safe app using tRPC, Prisma, and Next.js. Learn how to share types, infer API responses, and ensure zero runtime type mismatch.",
    cta: "Explore project",
    url: "https://youtu.be/S3k82XXCrBo?si=kK6hhNcKPaFULuMs",
  },
  {
    id: "ts-advanced-2",
    level: "Phase 3 — Advanced (Library Development)",
    title: "Internal NPM Library / SDK",
    description:
      "Develop and publish your own npm package written in TypeScript. Learn declaration files, bundling with tsup, versioning, and CI/CD for publishing.",
    cta: "Explore project",
    url: "https://youtu.be/GVN9d1rFeCo?si=uNCDyA1cbWpYlfxr",
  },
  {
    id: "ts-advanced-3",
    level: "Phase 3 — Advanced (Enterprise-ready Projects)",
    title: "Full stack Saas Scrape flow",
    description:
      "Build a Trello-like app using Next.js, TypeScript, GraphQL, and Prisma. Implement code generation, type-safe mutations, role-based access, and scalable folder structure.",
    cta: "Explore project",
    url: "https://youtu.be/RkwbGuL-dzo?si=9vtvY8XMwDV9IJG6",
  },
];

export default function ProjectCards() {
  return (
    <section className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
            ⚡ TypeScript Mastery Projects Path — Beginner → Industry-Ready
          </h2>
          <p className="mt-2 text-slate-600 max-w-2xl">
            Build these 9 progressive TypeScript projects to move from syntax mastery to
            production-grade full-stack and library development skills.
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
          Tip: Master TypeScript by building both apps and libraries. Focus on typing
          strategy, refactoring safety, and production patterns — not just syntax.
        </footer>
      </div>
    </section>
  );
}
