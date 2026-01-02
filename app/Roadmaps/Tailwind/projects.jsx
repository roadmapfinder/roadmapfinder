"use client"
// components/Projects.jsx
import React from "react";

const projects = [
  // Phase 1 — Beginner
  {
    id: "tailwind-landing-page",
    level: "Phase 1 — Beginner",
    title: "Responsive Landing Page",
    description:
      "Build a modern, mobile-first landing page using Tailwind CSS with navbar, hero section, features grid, CTA, and footer.",
    url: "https://youtu.be/EwzWg-Joxq0?si=B8eW9Kyo7CDG7jUi",
    channel: "Tailwind CSS Docs",
  },
  {
    id: "auth-ui",
    level: "Phase 1 — Beginner",
    title: "Authentication UI (Login / Signup)",
    description:
      "Design professional authentication screens with Tailwind CSS including forms, focus states, validation errors, and accessibility.",
    url: "https://youtu.be/ICFrH6EbqC4?si=fannnijJ302KGmBX",
    channel: "Tailwind CSS Docs",
  },

  // Phase 2 — Intermediate
  {
    id: "dashboard-ui",
    level: "Phase 2 — Intermediate",
    title: "Admin Dashboard UI",
    description:
      "Create a responsive SaaS-style admin dashboard with sidebar navigation, stats cards, tables, and mobile adaptability using Tailwind.",
    url: "https://youtu.be/zx3l94g2Nb8?si=NdXo92aQ7dJxeAkd",
    channel: "Tailwind CSS Docs",
  },
  {
    id: "pricing-design-system",
    level: "Phase 2 — Intermediate",
    title: "Pricing Page + Design System",
    description:
      "Build a SaaS pricing page backed by a custom Tailwind design system using tailwind.config.js, tokens, and reusable components.",
    url: "https://tailwindcss.com/docs/theme",
    channel: "https://youtu.be/WMGFQwewVa4?si=jS9U8OiWNz39BUYb",
  },

  // Phase 3 — Advanced
  {
    id: "component-library",
    level: "Phase 3 — Advanced",
    title: "Reusable Component Library",
    description:
      "Develop your own Tailwind-based component library including buttons, modals, inputs, badges, and variant-driven components.",
    url: "https://youtu.be/Gp95bKdmfok?si=6U8MgOlf5f9ZiTbK",
    channel: "Tailwind CSS Docs",
  },
  {
    id: "full-app-ui",
    level: "Phase 3 — Advanced",
    title: "Full Web App UI (Industry Ready)",
    description:
      "Build a complete production-grade web app UI with Tailwind CSS featuring dark mode, skeleton loaders, empty states, and accessibility.",
    url: "https://youtu.be/WluV9LeDzwo?si=OOLxWx3O_vuwPu_A",
    channel: "Tailwind CSS Docs",
  },
];

export default function Projects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            🎨 Tailwind CSS Project Roadmap
          </h2>
          <p className="mt-2 text-gray-600">
            Progressive Tailwind CSS projects from Beginner → Intermediate → Advanced to become industry-ready in 2026.
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

              <p className="mt-1 text-gray-500 text-xs">
                Reference: {p.channel}
              </p>

              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-indigo-600 font-medium hover:underline"
              >
                Explore Guide ▶
              </a>
            </article>
          ))}
        </div>

        <footer className="mt-10 text-sm text-gray-500 text-center">
          Each project focuses on real-world Tailwind CSS skills — responsiveness, accessibility, design systems, and production-ready UI.
        </footer>
      </div>
    </section>
  );
}
