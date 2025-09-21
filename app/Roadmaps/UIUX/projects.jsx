// components/Projects.jsx
import React from "react";

const projects = [
  {
    id: "portfolio-standout-2025",
    level: "Phase 1 — Beginner",
    title: "How to Create your UX Design Portfolio to Stand Out 2025",
    description:
      "Guide to building a standout portfolio site, covering wireframe → UI → interactive prototype and storytelling.",
    url: "https://www.youtube.com/watch?v=MpmIyTMKx30",
  },
  {
    id: "figma-crash-course-2025",
    level: "Phase 0 — Tool Fundamentals",
    title: "Free Figma Crash Course for Beginners 2025 | UI/UX Design",
    description:
      "Master Figma’s Auto Layout, components, prototyping and AI features—perfect prep before starting projects.",
    url: "https://www.youtube.com/watch?v=1SNZRCVNizg",
  },
  {
    id: "design-system-full-course",
    level: "Phase 2 — Design System",
    title: "Build a Design System – Full Course",
    description:
      "Comprehensive Figma course building a design system from scratch—tokens, components, variants.",
    url: "https://www.youtube.com/watch?v=opTANvl9G1g",
  },
  {
    id: "figma-variables-setup",
    level: "Phase 2 — Design System",
    title: "Design System & Figma Variable Set Up – Full Tutorial",
    description:
      "Step-by-step walkthrough for setting up Figma variables and scaling a real design system.",
    url: "https://www.youtube.com/watch?v=L-tpK7Eeuow",
  },
  {
    id: "fintech-mobile-design",
    level: "Phase 3 — Advanced / Fintech Flow",
    title: "Figma Mobile App Design Tutorial | Fintech App UI/UX",
    description:
      "End-to-end modern fintech app UI design in Figma, ideal for transaction flow and checkout flows.",
    url: "https://www.youtube.com/watch?v=oMoH6KGQ60M",
  },
  {
    id: "banking-app-walkthrough",
    level: "Phase 3 — Advanced / Fintech",
    title: "Design a Banking App in Figma | Step by Step",
    description:
      "Complete banking app walkthrough: onboarding flows, 2FA, UI structure—great for fintech or security flows.",
    url: "https://www.youtube.com/watch?v=EPhAp2uW49Q",
  },
  {
    id: "portfolio-coaching-2025",
    level: "Phase 1 — Beginner",
    title: "How to Build Your First UI/UX Design Portfolio Website | Step ...",
    description:
      "End-to-end tutorial: planning, designing, prototyping and publishing a portfolio website.",
    url: "https://www.youtube.com/watch?v=bAHuwiEZrP8",
  },
];

export default function Projects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            🎥 Verified UI/UX Design Tutorials (2025)
          </h2>
          <p className="mt-2 text-gray-600">
            Carefully selected, real-world UI/UX tutorials in English—project-based from tool fundamentals to industry-ready flows.
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
          These tutorials are up-to-date (2025) and aligned with key UI/UX project phases from tool mastery to advanced fintech workflows.
        </footer>
      </div>
    </section>
  );
}
