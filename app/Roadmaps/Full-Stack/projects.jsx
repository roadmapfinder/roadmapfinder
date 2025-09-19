// components/Projects.jsx
import React from "react";

const projects = [
  // ---------- FRONTEND PROJECTS ----------
  {
    id: "phase1-portfolio",
    level: "Frontend — Beginner",
    title: "Personal Portfolio Website",
    description:
      "Build a responsive portfolio with React + Tailwind CSS, learn layout, components, and basic deployment.",
    url: "https://www.youtube.com/watch?v=lcnmx5h5jss" // 2025 Hindi/English
  },
  {
    id: "phase2-quiz-app",
    level: "Frontend — Beginner→Intermediate",
    title: "Quiz App with React",
    description:
      "Learn React state management, props, and conditional rendering by creating a simple quiz app.",
    url: "https://www.youtube.com/watch?v=tiLWCNFzThE"
  },
  {
    id: "phase3-dashboard",
    level: "Frontend — Intermediate",
    title: "Admin Dashboard UI",
    description:
      "Create a responsive dashboard with charts, tables, and authentication using React and Tailwind.",
    url: "https://www.youtube.com/watch?v=cY0b6qYzKqs"
  },
  {
    id: "phase4-chat-ui",
    level: "Frontend — Intermediate",
    title: "Chat App UI",
    description:
      "Design and implement a modern chat interface with React, context API, and WebSocket UI simulation.",
    url: "https://www.youtube.com/watch?v=E1E08i2UJGI"
  },
  {
    id: "phase5-nextjs-blog",
    level: "Frontend — Advanced",
    title: "Blog with Next.js & Tailwind",
    description:
      "Learn server-side rendering, dynamic routing, and Markdown blog content with Next.js.",
    url: "https://www.youtube.com/watch?v=1GNsWa_EZdw"
  },

  // ---------- FULLSTACK / BACKEND PROJECTS ----------
  {
    id: "phase6-todo-api",
    level: "Fullstack — Beginner",
    title: "To-Do List API / Full-Stack Todo App",
    description:
      "Build a simple CRUD API for tasks with authentication and database integration. Perfect to learn REST basics.",
    url: "https://www.youtube.com/watch?v=fQZVQ7moCgg"
  },
  {
    id: "phase7-url-shortener",
    level: "Fullstack — Lower-Intermediate",
    title: "URL Shortening Service",
    description:
      "Learn routing, database mapping, and redirects by building a Node.js URL shortener with MongoDB or TypeScript.",
    url: "https://www.youtube.com/watch?v=sKq-aSrnZog"
  },
  {
    id: "phase8-ecommerce",
    level: "Fullstack — Intermediate",
    title: "E-commerce Store (MERN / Java Spring Boot)",
    description:
      "Develop a shopping cart backend with JWT authentication, product catalog, and payments. Add frontend shop UI.",
    url: "https://www.youtube.com/watch?v=EWd3_I4X32g"
  },
  {
    id: "phase9-subscription",
    level: "Fullstack — Intermediate→Advanced",
    title: "Subscription Management App",
    description:
      "Build a real-world app handling subscriptions, payments, authentication, and full CRUD APIs.",
    url: "https://www.youtube.com/watch?v=rOpEN1JDaD0"
  },
  {
    id: "phase10-mern-production",
    level: "Fullstack — Advanced",
    title: "Production-Quality MERN App",
    description:
      "End-to-end MERN stack application with secure backend API design, cloud deployment, and best practices.",
    url: "https://www.youtube.com/watch?v=F9gB5b4jgOI"
  }
];

export default function Projects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            🖥️ Fullstack Project Roadmap
          </h2>
          <p className="mt-2 text-gray-600">
            10 projects from beginner frontend to advanced fullstack, with Hindi & English tutorials (latest 2025).
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
          Follow the sequence, build step by step, and turn 2–3 into polished portfolio projects 🚀
        </footer>
      </div>
    </section>
  );
}
