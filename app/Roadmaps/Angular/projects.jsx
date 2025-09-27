// components/Projects.jsx
import React from "react";

const projects = [
  {
    id: "phase1-portfolio",
    level: "Phase 1 — Beginner",
    title: "Personal Portfolio Website",
    description:
      "Learn Angular components, routing, styling, and data binding. Build Home, About, Projects, Contact pages with responsive design and basic animations. Implement contact form using Reactive Forms.",
    url: "https://youtu.be/GJHjl2D9C2M?si=nQ6KN9P-hcMeEanj", // replace with your tutorial or GitHub repo if available
  },
  {
    id: "phase2-todo",
    level: "Phase 2 — Intermediate",
    title: "To-Do / Task Management App",
    description:
      "Create, edit, delete, and mark tasks as done. Implement filtering by status and persistent storage using localStorage or IndexedDB. Optional: connect to a REST API.",
    url: "https://youtu.be/uyTC0Skvvls?si=DwCFijPtZiV8fXvg",
  },
  {
    id: "phase2-ecommerce",
    level: "Phase 2 — Intermediate → Advanced",
    title: "E-Commerce Store",
    description:
      "Build product catalog with search & filter, add-to-cart, checkout simulation, and API integration. Implement user authentication (JWT or Firebase Auth).",
    url: "https://youtu.be/ryQHyOzQ9fA?si=oYAWUnxokw8LaRvu",
  },
  {
    id: "phase3-blog",
    level: "Phase 3 — Advanced",
    title: "Blog / Content Management System",
    description:
      "Develop CRUD for posts, categories, and comments. Integrate rich text editor, role-based access, and backend API (NestJS / Firebase). Learn NgRx for state management and lazy-loaded modules.",
    url: "https://youtu.be/Rpe8s4-qFFI?si=WZCKqNlcdlPDZ7NS",
  },
  {
    id: "phase3-chat",
    level: "Phase 3 — Advanced",
    title: "Real-Time Chat Application",
    description:
      "Build one-on-one and group chat with online/offline status, notifications, and message history. Optional: WebRTC video/audio chat. Learn RxJS, NgRx, and reactive programming.",
    url: "https://youtu.be/Dg7bZUFopUo?si=qZVCOaTZIFfEtbF9",
  },
  {
    id: "phase4-dashboard",
    level: "Phase 4 — Industry-Ready",
    title: "Enterprise Dashboard / SaaS Application",
    description:
      "Simulate real-world enterprise app with role-based dashboards, analytics charts, CRUD for multiple modules, lazy-loaded feature modules. Implement PWA, offline support, Angular Universal / SSR, and CI/CD deployment.",
    url: "https://youtu.be/s7bKr_-GLtM?si=Va0tfjXkI1c08eZE",
  },
];

export default function Projects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            ⚡ Angular Project Roadmap
          </h2>
          <p className="mt-2 text-gray-600">
            Step through beginner to industry-ready Angular projects. Build, code along, and deploy to strengthen your portfolio.
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
                Explore Project ▶
              </a>
            </article>
          ))}
        </div>

        <footer className="mt-10 text-sm text-gray-500 text-center">
          Follow the sequence, implement features step by step, and showcase your top projects in a polished portfolio.
        </footer>
      </div>
    </section>
  );
}
