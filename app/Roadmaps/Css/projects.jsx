"use client";

// components/Projects.jsx
import React from "react";

const projects = [
  {
    id: "phase1-responsive-landing",
    level: "Phase 1 — Beginner",
    title: "Responsive Landing Page",
    description:
      "Build a modern SaaS landing page with hero section, feature grid, testimonials, pricing cards, and footer. Learn box model, typography, Flexbox, spacing systems, and mobile-first responsive design.",
    url: "https://youtu.be/_rWKTxvTUzQ?si=mQMAZrQAld-EsmRt"
  },
  {
    id: "phase1-navigation-system",
    level: "Phase 1 — Beginner",
    title: "Advanced Navigation System",
    description:
      "Create a sticky navbar with dropdown menus, mobile hamburger navigation, smooth transitions, and accessible focus states. Master positioning, z-index, transforms, and responsive interaction patterns.",
    url: "https://youtu.be/Og-YEeCTE7A?si=zfJC-8gsL7TpMDUV"
  },
  {
    id: "phase2-dashboard-layout",
    level: "Phase 2 — Intermediate",
    title: "Admin Dashboard Layout (CSS Grid)",
    description:
      "Design a responsive admin dashboard with sidebar, header, stats cards, and tables using CSS Grid and Flexbox together. Learn grid-template areas, auto-fit, minmax, and layout scalability.",
    url: "https://youtu.be/QlZkfmofzHU?si=L7n-pihuRTrcG07_"
  },
  {
    id: "phase2-component-library",
    level: "Phase 2 — Intermediate",
    title: "Reusable Component Library",
    description:
      "Build a reusable UI component library including buttons, inputs, cards, badges, alerts, and modals. Learn CSS architecture, naming conventions, design consistency, and scalable styling patterns.",
    url: "https://youtu.be/GNtohfhj_A4?si=HKkQWwQcsJVmfH1L"
  },
  {
    id: "phase3-theme-system",
    level: "Phase 3 — Advanced",
    title: "Dark / Light Theme System",
    description:
      "Implement a complete dark and light theme system using CSS variables, prefers-color-scheme, and runtime theme switching. Focus on accessibility, contrast ratios, and design tokens.",
    url: "https://youtu.be/chnZaeheCJU?si=jr4-7XzZLZPuOci3"
  },
  {
    id: "phase4-animated-ui",
    level: "Phase 4 — Expert",
    title: "Animated & Interactive UI System",
    description:
      "Build advanced UI interactions like toasts, tooltips, skeleton loaders, spinners, and micro-interactions. Master keyframe animations, transitions, performance optimization, and reduced-motion support.",
    url: "https://youtu.be/fr85UI37dUA?si=LphdxmmeVnzvlcIG"
  }
];

export default function Projects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            🎨 CSS Mastery Project Roadmap
          </h2>
          <p className="mt-2 text-gray-600">
            Master CSS from beginner to industry-ready by building real,
            production-grade UI projects used in modern web applications.
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
                Learn Tutotrial ▶
              </a>
            </article>
          ))}
        </div>

        <footer className="mt-10 text-sm text-gray-500 text-center">
          Build each project fully, refactor your CSS, document decisions, and
          you will reach true industry-level CSS mastery.
        </footer>
      </div>
    </section>
  );
}
