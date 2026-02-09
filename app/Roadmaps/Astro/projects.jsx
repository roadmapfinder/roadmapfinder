// components/AstroProjects.jsx
"use client"
import React from "react";

const projects = [
  {
    id: "phase1-portfolio-blog",
    level: "Phase 1 — Beginner",
    title: "Personal Portfolio + Blog",
    description:
      "Build a blazing-fast personal portfolio with an MDX-powered blog using Astro layouts, content collections, SEO, and zero-JS pages.",
    url: "https://youtu.be/3_JE76PKBWE?si=582ofKKgDSfgMPOR"
  },
  {
    id: "phase2-docs-platform",
    level: "Phase 2 — Intermediate",
    title: "Documentation Platform",
    description:
      "Create a production-grade documentation site with sidebar navigation, search (islands), dynamic routes, versioned content, and Markdown collections.",
    url: "https://youtu.be/B1ejSMzr0n4?si=t5LHQmg32HasZjlR"
  },
  {
    id: "phase2-saas-marketing",
    level: "Phase 2 — Intermediate",
    title: "SaaS Marketing Website",
    description:
      "Build a performance-first SaaS landing page with selective hydration, Astro Image optimization, SEO, analytics, and Lighthouse 95+ scores.",
    url: "https://youtu.be/ZFJZiwiYZBc?si=UjXk8uh343iZNPqy"
  },
  {
    id: "phase3-interactive-blog",
    level: "Phase 3 — Advanced",
    title: "Interactive Blog Platform",
    description:
      "Enhance a static blog with interactive features like likes, comments, and theme toggle using Solid/React islands and Astro API routes.",
    url: "https://youtu.be/Ud9obEHadLI?si=pzYg4uYMoiwgOG2u"
  },
  {
    id: "phase3-auth-dashboard",
    level: "Phase 3 — Advanced",
    title: "Authenticated Dashboard",
    description:
      "Build a full-stack Astro app with authentication, protected routes, SSR, database integration, and server actions.",
    url: "https://youtu.be/7VHBtrtjcsg?si=sWqIJ6We-vGkUgmO"
  },
  {
    id: "phase4-open-source-product",
    level: "Phase 4 — Expert",
    title: "Open-Source Astro Product",
    description:
      "Design and ship an open-source, production-ready Astro product with TypeScript, accessibility, CI/CD, and real-world architecture.",
    url: "https://youtu.be/9196iQJtK4s?si=yFLjEEHP7_ZhhQ0s"
  }
];

export default function AstroProjects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            🌌 Astro Projects Roadmap
          </h2>
          <p className="mt-2 text-gray-600">
            The essential Astro portfolio to go from beginner to industry-ready frontend engineer.
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
                View Official Guide
              </a>
            </article>
          ))}
        </div>

        <footer className="mt-10 text-sm text-gray-500 text-center">
          Build → Optimize → Hydrate selectively → Deploy.  
          Each project should be documented as a real production case study.
        </footer>
      </div>
    </section>
  );
}
