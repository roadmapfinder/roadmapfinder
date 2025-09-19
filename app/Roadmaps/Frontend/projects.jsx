// components/Projects.jsx
import React from "react";

const projects = [
  {
    id: "phase1-react-basic",
    level: "Phase 1 — Beginner",
    title: "Build a React UI & Stateful App (Counter / Todo)",
    description:
      "Learn React fundamentals: JSX, components, state, props and lifecycle using React v19 tutorial in Hindi.",
    url: "https://www.youtube.com/watch?v=4z9bvgTlxKw"
  },
  {
    id: "phase2-crud-app",
    level: "Phase 2 — Intermediate",
    title: "CRUD App with API Integration in React",
    description:
      "Create a full CRUD app (e.g. movie search or notes manager) using React v19 full course in Hindi (14-hr deep dive).",
    url: "https://www.youtube.com/watch?v=LuNPCSNr-nE"
  },
  {
    id: "phase3-nextjs-fullstack",
    level: "Phase 3 — Intermediate→Advanced",
    title: "Full-Stack Next.js 13.4 App with MongoDB",
    description:
      "Build and deploy a full-stack website (SSR, API routes, database integration) using Next.js 13.4 in Hindi.",
    url: "https://www.youtube.com/watch?v=lpsLAP4x-tk"
  },
  {
    id: "phase4-nextjs15-full-app",
    level: "Phase 4 — Advanced",
    title: "Modern Next.js v15 Full Application",
    description:
      "Master latest Next.js (v15) features – App Router, optimization, edge functions and production deployment.",
    url: "https://www.youtube.com/watch?v=3qGQ4dGA42o"
  }
];

export default function Projects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            🎯 Frontend Project Roadmap
          </h2>
          <p className="mt-2 text-gray-600">
            Track your projects from beginner to advanced, with Hindi(English subtitles) tutorials.
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
          Follow in sequence, practice each project, and convert top 2–3 into polished portfolio pieces.
        </footer>
      </div>
    </section>
  );
}
