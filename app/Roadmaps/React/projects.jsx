import React from "react";

const projects = [
  {
    id: "counter-app",
    level: "Phase 1 — Fundamentals",
    title: "Counter App (useState, events)",
    description:
      "Short, beginner-friendly walkthrough demonstrating useState to build a clickable counter.",
    cta: "Watch tutorial",
    url: "https://www.youtube.com/watch?v=WMxRwmj_wxE" // React Counter App Tutorial (2025)
  },
  {
    id: "todo-app",
    level: "Phase 1 — CRUD Basics",
    title: "Todo List App (CRUD, Context/useReducer, Hindi available)",
    description:
      "Build a todo list with create, edit, delete tasks. Hindi & English versions available. Learn Context/useReducer for scalable state.",
    cta: "Watch tutorial",
    url: "https://www.youtube.com/watch?v=mF0fBaY-lYc" // React v19 Todo List in Hindi
  },
  {
    id: "weather-app",
    level: "Phase 2 — API Integration",
    title: "Weather App (API fetching, loading/error states)",
    description:
      "Professional-looking weather dashboard using OpenWeather API. Covers fetching, useEffect, error & loading handling.",
    cta: "Watch tutorial",
    url: "https://www.youtube.com/watch?v=ViYs8tE2RjU" // React Weather App Tutorial
  },
  {
    id: "movie-app",
    level: "Phase 2 — API + UI Rendering",
    title: "Movie Search App (OMDb API, Hindi support)",
    description:
      "Movie search app using fetch + OMDb backend. Learn API integration, rendering results, posters & ratings. Hindi tutorial included.",
    cta: "Watch tutorial",
    url: "https://www.youtube.com/watch?v=YsPqjYGauns" // React Movie App Tutorial (Hindi, Piyush Garg)
  }
];

export default function ProjectCards() {
  return (
    <section className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            🎯 React Projects Path — Beginner → API Apps
          </h2>
          <p className="mt-2 text-slate-600 max-w-2xl">
            Follow these projects and their step-by-step YouTube tutorials to
            move from React fundamentals to real-world apps with APIs.
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
                  YouTube ▶
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
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>

                <span className="text-xs text-slate-400">~20–60 mins</span>
              </div>
            </article>
          ))}
        </div>

        <footer className="mt-10 text-sm text-slate-500">
          Tip: Do each project in order, commit on GitHub, and upgrade Todo/Weather apps with features
          like dark mode, search filters, or pagination.
        </footer>
      </div>
    </section>
  );
}
