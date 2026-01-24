"use client"
// components/Projects.jsx
import React from "react";

const projects = [
  // Phase 1 — Beginner
  {
    id: "vue-counter-app",
    level: "Phase 1 — Beginner",
    title: "Counter App (Vue Basics)",
    description:
      "Build a simple counter application using Vue 3 Composition API to understand reactivity, ref, events, and template binding.",
    url: "https://youtu.be/khlc7FlkXV8?si=hbJXa2zWknTxZOi1",
    
  },
  {
    id: "vue-todo-app",
    level: "Phase 1 — Beginner",
    title: "Todo List App",
    description:
      "Create a todo list app with add, edit, delete, filter, and local storage persistence using Vue 3.",
    url: "https://youtu.be/qhjxAP1hFuI?si=eqqPghXQfivyU4q7",
   
  },

  // Phase 2 — Intermediate
  {
    id: "vue-blog-app",
    level: "Phase 2 — Intermediate",
    title: "Blog Platform Frontend",
    description:
      "Develop a blog frontend with Vue Router, API integration, pagination, dynamic routing, and loading states.",
    url: "https://youtu.be/6ZoiO4McyPA?si=jl8NOll2v3Ds2MUs",
    
  },
  {
    id: "vue-ecommerce",
    level: "Phase 2 — Intermediate",
    title: "E-Commerce Store UI",
    description:
      "Build a modern e-commerce UI using Vue 3, Pinia store, product filters, cart system, and checkout UI.",
    url: "https://youtu.be/ja9evUOJ57M?si=2Jqae2KnY5j-KwAz",

    
  },

  // Phase 3 — Advanced
  {
    id: "vue-dashboard",
    level: "Phase 3 — Advanced",
    title: "Admin Dashboard Panel",
    description:
      "Create an enterprise admin dashboard with charts, role-based routes, layout system, and responsive tables.",
    url: "https://youtu.be/5dhiDC_Ikig?si=v2aUbeuF7_IFbl4m",
    
  },
  {
    id: "vue-saas-app",
    level: "Phase 3 — Advanced",
    title: "SaaS App (Industry Ready)",
    description:
      "Build a full SaaS application using Vue + Nuxt with authentication, SSR, SEO, dashboard, and subscription UI.",
    url: "https://youtu.be/e8IoJecZIBk?si=6UIodmg146EmnDvz",
    
  },
];

export default function Projects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            🟢 Vue.js Project Roadmap
          </h2>
          <p className="mt-2 text-gray-600">
            Progressive Vue.js projects from Beginner → Intermediate → Advanced to become industry-ready in 2026.
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
          Each project focuses on real-world Vue.js skills — Composition API, routing, state management, SSR, and production-ready architecture.
        </footer>
      </div>
    </section>
  );
}
