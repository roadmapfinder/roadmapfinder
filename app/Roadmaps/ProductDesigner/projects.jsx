
import React from "react";



const projects = [
  {
    id: "phase1-ui-patterns",
    level: "Phase 1 — Foundations",
    title: "Build basic UI patterns in Figma",
    description:
      "Practice buttons, cards, forms, type scale, spacing and create a small style system (colors + typography + components).",
    cta: "Watch tutorial",
    url: "https://www.youtube.com/watch?v=JGLfyTDgfDc" // Introducing Figma: A Beginner’s Tutorial
  },
  {
    id: "phase2-onboarding",
    level: "Phase 2 — UX Foundations",
    title: "Design a simple mobile app flow (onboarding → main screen)",
    description:
      "Wireframe the user flow, build low → mid fidelity screens, then turn into a clickable prototype to validate the experience.",
    cta: "Watch tutorial",
    url: "https://www.youtube.com/watch?v=jQ1sfKIl50E" // 13-min crash course
  },
  {
    id: "phase2-proto-test",
    level: "Phase 2 — Prototyping",
    title: "Clickable prototypes + basic usability testing",
    description:
      "Add transitions, gestures and testing hooks. Share prototype links and run simple moderated/unmoderated tests.",
    cta: "Watch tutorial",
    url: "https://www.youtube.com/watch?v=1ucLq6JTxac" // Figma Prototype Tutorial (2025)
  },
  {
    id: "phase3-redesign",
    level: "Phase 3 — UI Specialization",
    title: "Redesign an app/website (e.g. checkout or music app)",
    description:
      "Conduct an audit, create component variants, design responsive layouts and document decisions for a case study.",
    cta: "Watch tutorial",
    url: "https://www.youtube.com/watch?v=D3vOM7750jw" // Figma Tutorial - Beginner to Advance (Part 1)
  },
  {
    id: "phase3-case-study",
    level: "Phase 3 — Case Study",
    title: "Build a full UX case study document",
    description:
      "Turn your redesign into a complete case study: problem, research, process, iterations, and measurable impact.",
    cta: "Watch tutorial",
    url: "https://www.youtube.com/watch?v=CaqkLBw8-dk" // Master UX Case Study Design
  },
  {
    id: "phase4-high-fi",
    level: "Phase 4 — Portfolio-Ready",
    title: "High-fidelity app with advanced interactions",
    description:
      "Polish your flagship project: tokens/variables, advanced auto-layout, accessible components, and polished micro-interactions.",
    cta: "Watch tutorial",
    url: "https://www.youtube.com/watch?v=1SNZRCVNizg" // Free Figma Crash Course (2025)
  }
];

export default function ProjectCards() {
  return (
    <section className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            🎯 Project Path — Beginner → Advanced
          </h2>
          <p className="mt-2 text-slate-600 max-w-2xl">
            Follow these progressive projects and their step-by-step YouTube tutorials to
            go from fundamentals to portfolio-ready product design work.
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

                <span className="text-xs text-slate-400">{/* small hint */} ~30–120 mins</span>
              </div>
            </article>
          ))}
        </div>

        <footer className="mt-10 text-sm text-slate-500">
          Tip: do each project in sequence, keep a short README for each (problem → process → result),
          and convert your best 3 into portfolio case studies.
        </footer>
      </div>
    </section>
  );
}
