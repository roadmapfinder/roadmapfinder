// components/Projects.jsx
import React from "react";

const projects = [
  {
    id: "portfolio-website",
    level: "Phase 1 — Beginner",
    title: "Personal Portfolio Website",
    description:
      "Design and prototype a personal portfolio site showcasing case studies, responsive layout, and accessibility best practices.",
    url: "https://youtu.be/pYQBvAYnL1I?si=MJMw3ym6VAZ8dS-R",
  },
  {
    id: "app-redesign",
    level: "Phase 2 — Usability",
    title: "Mobile App Redesign",
    description:
      "Redesign a cluttered app (e.g., food delivery or banking), improve navigation, run heuristic evaluation, and build a clickable prototype.",
    url: "https://youtu.be/DyNGwhLcm0w?si=9o0FnKWXj9HrrIKk",
  },
  {
    id: "design-system",
    level: "Phase 2 — Design System",
    title: "Design System / Component Library",
    description:
      "Create reusable components in Figma—buttons, forms, grids, typography, tokens, and accessibility guidelines.",
    url: "https://youtu.be/opTANvl9G1g?si=2p3RrvzpB3Z9977K",
  },
  {
    id: "ecommerce-experience",
    level: "Phase 3 — Intermediate",
    title: "E-commerce Web/App Experience",
    description:
      "Design full user flow from browsing → cart → checkout. Solve real-world UX problems: filters, search, product pages, reviews.",
    url: "https://youtu.be/J7g0pZXo1V8?si=MhFi3Y16fpdxscOq",
  },
  {
    id: "analytics-dashboard",
    level: "Phase 3 — Intermediate",
    title: "Dashboard / SaaS Tool",
    description:
      "Build an analytics dashboard with tables, charts, and filters. Explore dark/light mode and data visualization principles.",
    url: "https://youtu.be/DLo5ybmRcE0?si=rxeed1pGNirSeiwz",
  },
  {
    id: "accessible-redesign",
    level: "Phase 4 — Advanced",
    title: "Accessibility-Focused Redesign",
    description:
      "Redesign an app to meet WCAG guidelines: color contrast, keyboard navigation, screen reader compatibility, and inclusive UX.",
    url: "https://youtu.be/QqDXDXd9y5k?si=BQ3Ueo3Sz1vQNC7m",
  },
  {
    id: "team-project",
    level: "Phase 4 — Advanced",
    title: "Collaboration Project (Industry Simulation)",
    description:
      "Work with peers in Figma using version control, shared libraries, critique sessions, and design documentation.",
    url: "https://youtu.be/v3AkpgApvSI?si=uWQNdnAVzm4YLtH_",
  },
  {
    id: "onboarding-microinteractions",
    level: "Phase 5 — Industry Ready",
    title: "Onboarding & Micro-interactions",
    description:
      "Design onboarding flows and add delight with micro-interactions (hover states, button animations, success feedback).",
    url: "https://youtu.be/hHp4FGVcHjY?si=-zWpqL8kD77KL-G8",
  },
];

export default function Projects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            🎨 Industry-Ready UI/UX Projects (Learner Roadmap)
          </h2>
          <p className="mt-2 text-gray-600">
            Hands-on UI/UX projects structured by phases—from beginner
            fundamentals to advanced, real-world workflows.
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
                View Details ▶
              </a>
            </article>
          ))}
        </div>

        <footer className="mt-10 text-sm text-gray-500 text-center">
          These projects cover the complete journey of a UI/UX learner—
          progressing from portfolio basics to advanced, industry-ready designs.
        </footer>
      </div>
    </section>
  );
}
