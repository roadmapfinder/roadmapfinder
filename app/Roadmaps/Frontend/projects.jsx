// components/Projects.jsx
import React from "react";

const projects = [
  // 🌱 Beginner
  {
    id: "beginner-portfolio",
    level: "Phase 1 — Beginner",
    title: "Responsive Portfolio Website",
    description:
      "Learn HTML, CSS, js Flex/Grid and responsive design. Industry expects clean, mobile-first layouts. Bonus: Add dark/light mode.",
    url: "https://youtu.be/0YFrGy_mzjY?si=7wDa9-z7llj_HfIs"
  },
  {
    id: "beginner-landing",
    level: "Phase 1 — Beginner",
    title: "Interactive Landing Page Clone (Amazon)",
    description:
      "Practice CSS animations, transitions, hero sections and UI polish. Learn pixel-perfect design by cloning real-world UIs.",
    url: "https://youtu.be/nGhKIC_7Mkk?si=zRcULAKTasjOHdC5"
  },
  {
    id: "beginner-form-validation",
    level: "Phase 1 — Beginner",
    title: "Form Validation App",
    description:
      "Use JavaScript DOM, regex and error handling. Forms are everywhere in production apps.",
    url: "https://youtu.be/WLUCzSaH5kI?si=1JjiTjdJQJT3YYp_"
  },

  // 🚀 Intermediate
  {
    id: "intermediate-weather",
    level: "Phase 2 — Intermediate",
    title: "Weather App with API Integration",
    description:
      "Learn async programming, Fetch API, error handling and loading states by building a weather app with live data.",
    url: "https://youtu.be/pFvWwFua6mw?si=GD3toVKyL3bBUAzp"
  },
  {
    id: "intermediate-notes",
    level: "Phase 2 — Intermediate",
    title: "Notes/To-Do App with Local Storage",
    description:
      "Practice CRUD operations, state management and offline persistence using localStorage.",
    url: "https://youtu.be/SBuZSalHLe0?si=NCBLGx4_J76Fgv1H"
  },
  {
    id: "intermediate-search",
    level: "Phase 2 — Intermediate",
    title: "Movie/Book Search App",
    description:
      "Build search, filtering, and pagination features using APIs like OMDB or Google Books. Learn API queries and UI states.",
    url: "https://youtu.be/caWpnOyLO30?si=6EgiFhAEFzOM7OAQ"
  },

  // 🏗️ Advanced
  {
    id: "advanced-ecommerce",
    level: "Phase 3 — Advanced",
    title: "E-Commerce Store (Mini Amazon)",
    description:
      "Build product listings, cart, filtering and checkout UI. Covers complex flows, performance and state management. Bonus: Add auth + Stripe payments.",
    url: "https://youtu.be/pjEC9d28SKM?si=Ao2qM_6fSzamk8jG"
  },
  {
    id: "advanced-dashboard",
    level: "Phase 3 — Advanced",
    title: "Dashboard with Charts & Analytics",
    description:
      "Use Chart.js or Recharts for data visualization. Add dynamic tables with sorting and filtering. Dashboards are common in SaaS apps.",
    url: "https://youtu.be/wYpCWwD1oz0?si=XUe2tHmkH-BAySn7"
  },
  {
    id: "advanced-chat",
    level: "Phase 3 — Advanced",
    title: "Real-Time Chat App",
    description:
      "Learn WebSockets or Firebase for live updates, state sync and notifications. Prepares you for collaborative real-time apps.",
    url: "https://youtu.be/0gLr-pBIPhI?si=t-hXklUvdgl8Dkqh"
  },
  {
    id: "advanced-cms",
    level: "Phase 3 — Advanced",
    title: "CMS Blog Platform (with Markdown)",
    description:
      "Build CRUD posts, Markdown rendering and authentication. Mimics production CMS/blog systems and admin panels.",
    url: "https://youtu.be/1g32IlH3SUs?si=DU93lkTe90GzTND4"
  },

  // 💼 Industry-Grade
  {
    id: "industry-kanban",
    level: "Phase 4 — Industry-Grade",
    title: "Kanban Board (Trello Clone)",
    description:
      "Implement drag-and-drop, complex state management and persistence. Great for testing performance and problem-solving.",
    url: "https://youtu.be/pRybm9lXW2c?si=8bau0_7UJ8LR5lzk"
  },
  {
    id: "industry-portfolio-cms",
    level: "Phase 4 — Industry-Grade",
    title: "Portfolio CMS (Self-Updating Portfolio)",
    description:
      "Use headless CMS (Contentful, Sanity, Strapi) to make your portfolio dynamic. Demonstrates real-world service integration.",
    url: "https://youtu.be/ypSc8HEurGQ?si=X9vQElebvDIiTN3q"
  },

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
            Build projects step by step from beginner to industry-grade. Convert top ones into polished portfolio pieces.
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
              {p.url !== "#" && (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-indigo-600 font-medium hover:underline"
                >
                  Watch Tutorial ▶
                </a>
              )}
            </article>
          ))}
        </div>

        <footer className="mt-10 text-sm text-gray-500 text-center">
          Follow the sequence, practice deeply, and polish 2–3 projects for your portfolio.
        </footer>
      </div>
    </section>
  );
}
