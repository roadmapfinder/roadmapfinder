import React from "react";

const projects = [
  {
    id: "react-beginner-1",
    level: "Phase 1 — Beginner (Foundations)",
    title: "Portfolio Website (with Dark/Light Mode)",
    description:
      "Build a personal portfolio to showcase projects. Learn JSX, components, props, state, event handling, conditional rendering, and styling with CSS-in-JS or Tailwind.",
    cta: "Explore project",
    url: "https://youtu.be/bOk2qfkq2Sk?si=ge2dGykCeJJkZh0k"
  },
  {
    id: "react-beginner-2",
    level: "Phase 1 — Beginner (Foundations)",
    title: "Task Manager",
    description:
      "A Kanban-style task manager with CRUD, useState/useReducer, and drag-and-drop using react-beautiful-dnd. Great practice for complex state handling.",
    cta: "Explore project",
    url: "https://youtu.be/3RWMktZNsJQ?si=er188gqsJgW7z6Eu"
  },
  {
    id: "react-beginner-3",
    level: "Phase 1 — Beginner (Foundations)",
    title: "Weather Dashboard",
    description:
      "Fetch live weather using APIs. Practice async/await, conditional rendering, and error boundaries. Extend with geolocation and multiple city comparison.",
    cta: "Explore project",
    url: "https://youtu.be/zs1Nq2s_uy4?si=CfMXXTIbrULoujFf"
  },
  {
    id: "react-intermediate-1",
    level: "Phase 2 — Intermediate (Applied Concepts)",
    title: "Blogging Platform",
    description:
      "A blog app with routing, authentication (JWT), and global state via Context or Redux. Add markdown editor and image uploads for real-world use.",
    cta: "Explore project",
    url: "https://youtu.be/yukmW5T_62I?si=_CHoJtsoKEJOllp5"
  },
  {
    id: "react-intermediate-2",
    level: "Phase 2 — Intermediate (Applied Concepts)",
    title: "E-Commerce Storefront",
    description:
      "Product listing with filters, cart, and checkout. Learn Redux Toolkit/Zustand, pagination, and authentication. Extend with Stripe integration and order tracking.",
    cta: "Explore project",
    url: "https://youtu.be/4sc6BhgS_Co?si=Wms-Lu6PT5OAzXx4"
  },
  {
    id: "react-intermediate-3",
    level: "Phase 2 — Intermediate (Applied Concepts)",
    title: "Real-Time Chat App",
    description:
      "Messaging app using WebSockets or Firebase. Covers list rendering, form control, and infinite scroll. Extend with typing indicators and read receipts.",
    cta: "Explore project",
    url: "https://youtu.be/Xn_j5sE6M_k?si=EO4FHJfCy8QcvKcf"
  },
  {
    id: "react-advanced-1",
    level: "Phase 3 — Advanced (Industry-Level Challenges)",
    title: "Project Management Dashboard (Jira Lite)",
    description:
      "Jira-style Kanban board with nested routes, role-based auth, and API integration. Extend with charts (Recharts/Victory) for analytics.",
    cta: "Explore project",
    url: "https://youtu.be/R5dBYINNouY?si=FjLW2Q2BnX6p5y_D"
  },
  {
    id: "react-advanced-2",
    level: "Phase 3 — Advanced (Industry-Level Challenges)",
    title: "Video Streaming Platform (YouTube Lite)",
    description:
      "Stream videos with infinite scroll, comments, likes, and subscriptions. Extend with recommendation system via backend APIs.",
    cta: "Explore project",
    url: "https://youtu.be/Hn0uZwjghng?si=FMLvCVnst7pV-sBf"
  },
  {
    id: "react-advanced-3",
    level: "Phase 3 — Advanced (Industry-Level Challenges)",
    title: "SaaS Analytics Dashboard",
    description:
      "Enterprise-style analytics dashboard with data visualizations, lazy loading, and RBAC. Extend with CSV/PDF exports and CI/CD deployment.",
    cta: "Explore project",
    url: "https://youtu.be/jx5hdo50a2M?si=qu6Dp-eJWB9k-PRD"
  }
];

export default function ProjectCards() {
  return (
    <section className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
            ⚛️ React Projects Path — Beginner → Industry-Ready
          </h2>
          <p className="mt-2 text-slate-600 max-w-2xl">
            Build these projects step by step to progress from React foundations
            to enterprise-grade apps with complex real-world challenges.
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
          Tip: Don’t just build — scale! Add features like role-based access,
          offline-first patterns, or CI/CD pipelines to simulate real-world
          engineering challenges.
        </footer>
      </div>
    </section>
  );
}
