// components/Projects.jsx
"use client"
import React from "react";

const projects = [
  // ---------- BEGINNER PROJECTS ----------
  {
    id: "js-digital-clock",
    level: "JavaScript — Beginner",
    title: "Digital Clock",
    description:
      "Build a real-time digital clock using DOM manipulation, setInterval(), and the Date object.",
    url: "https://youtu.be/RDynd1km5Qk?si=bBDDplOqKcRM-5hP"
  },
  {
    id: "js-todo-list",
    level: "JavaScript — Beginner",
    title: "To-Do List App",
    description:
      "Create a task manager with add, edit, and delete functionalities using event handling and localStorage.",
    url: "https://youtu.be/G0jO8kUrg-I?si=zpwK7TT0kyrKFMoD"
  },
  {
    id: "js-calculator",
    level: "JavaScript — Beginner",
    title: "Calculator",
    description:
      "Develop a basic arithmetic calculator with event listeners, arithmetic operations, and UI design.",
    url: "https://www.youtube.com/watch?v=dg_S8EV_TxQ"
  },
  {
    id: "js-stopwatch",
    level: "JavaScript — Beginner",
    title: "Stopwatch",
    description:
      "Implement a stopwatch with start, stop, and reset features using setInterval() and DOM updates.",
    url: "https://youtu.be/cO-qjCC_UYQ?si=4vsZGWKDXFCIUDqd"
  },
  {
    id: "js-note-taking-app",
    level: "JavaScript — Beginner",
    title: "Note-Taking App",
    description:
      "Create an app to add, edit, and delete notes with DOM manipulation, localStorage, and event listeners.",
    url: "https://youtu.be/gzoifHuIsrI?si=fkbP-XOGOz3UEliX"
  },

  // ---------- INTERMEDIATE PROJECTS ----------
  {
    id: "js-weather-app",
    level: "JavaScript — Intermediate",
    title: "Weather App",
    description:
      "Fetch and display weather data using an API, covering Fetch API, JSON handling, and async programming.",
    url: "https://youtu.be/pFvWwFua6mw?si=D3escfBy7dPOmrS-"
  },
  {
    id: "js-ecommerce-website",
    level: "JavaScript — Intermediate",
    title: "E-commerce Website",
    description:
      "Build a simple e-commerce site with product listings and a shopping cart using DOM manipulation and event handling.",
    url: "https://youtu.be/bYvgvYWqMn0?si=Zans8jtCG8biMQKa"
  },
  {
    id: "js-mini-projects-collection",
    level: "JavaScript — Intermediate",
    title: "Mini Projects Collection",
    description:
      "Work on various mini projects like a countdown timer, tip calculator, etc., focusing on core JS concepts.",
    url: "https://www.youtube.com/watch?v=2ml4x0rO1PQ"
  },

  // ---------- ADVANCED PROJECTS ----------
  {
    id: "js-full-course-hindi",
    level: "JavaScript — Advanced",
    title: "JavaScript Full Course (Hindi)",
    description:
      "Comprehensive course covering multiple projects, helping you advance from beginner to full-stack JavaScript development.",
    url: "https://www.youtube.com/watch?v=13gLB6hDHR8"
  },
  {
    id: "js-50-projects",
    level: "JavaScript — Advanced",
    title: "50 JavaScript Projects",
    description:
      "A series of 50 projects ranging from beginner to advanced levels, covering extensive JS concepts and applications.",
    url: "https://www.youtube.com/watch?v=STcLo0cOZYo"
  }
];

export default function Projects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            🧑‍💻 JavaScript Project Roadmap
          </h2>
          <p className="mt-2 text-gray-600">
            From beginner apps to advanced projects — each project includes latest YouTube tutorials (Hindi & English, 2025).
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
          Start small, master the foundations, and scale up to advanced JavaScript projects 🚀
        </footer>
      </div>
    </section>
  );
}
