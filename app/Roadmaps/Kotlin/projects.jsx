// components/KotlinProjects.jsx
"use client"
import React from "react";

const projects = [
  // Phase 1 — Beginner
  {
    id: "phase1-todo",
    level: "Phase 1 — Beginner",
    title: "Kotlin CLI To-Do App",
    description:
      "Build a command-line task manager to add, edit, mark as done, and delete tasks. Learn Kotlin basics, collections, file I/O, and error handling.",
    url: "https://youtu.be/DUCqZkLOC0U?si=jE11VJ5ml2uScaxZ", // replace with your repo or tutorial
  },
  {
    id: "phase1-guess",
    level: "Phase 1 — Beginner",
    title: "Guess the Number Game",
    description:
      "CLI game where the computer selects a number and the user guesses it. Learn loops, conditionals, random numbers, and Kotlin 'when' expressions.",
    url: "https://youtu.be/Uy4FDMFYzmo?si=Tqy3kLzt3lRM6eZs",
  },
  // Phase 2 — Intermediate
  {
    id: "phase2-expense",
    level: "Phase 2 — Intermediate",
    title: "Expense Tracker App (Android)",
    description:
      "Track daily expenses with categories and summaries. Learn Android basics, RecyclerView, Room Database, MVVM, LiveData, ViewModel, and Coroutines.",
    url: "https://youtu.be/GP4p3d7_b2k?si=kOJZaCknOOMvcR2T",
  },
  {
    id: "phase2-weather",
    level: "Phase 2 — Intermediate",
    title: "Weather Forecast App (API Integration)",
    description:
      "Fetch real-time weather data from an API. Learn Retrofit, OkHttp, JSON parsing, Coroutines, asynchronous programming, and UI state handling.",
    url: "https://youtu.be/QFGKV8j2ulY?si=l8v_AF6An31pvIXS",
  },
  // Phase 3 — Advanced / Industry-Ready

  {
    id: "phase3-social",
    level: "Phase 3 — Advanced",
    title: "Social Media Android App (Realtime Features)",
    description:
      "Mobile app with posts, likes, comments, and follow system using Firebase Realtime Database. Learn Jetpack Compose, Coroutines, Flows, push notifications, and scalable architecture.",
    url: "https://youtu.be/jS5LVdmHjsA?si=PQD9oa3AJ9yCg5EG",
  },
];

export default function KotlinProjects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            ⚡ Kotlin Project Roadmap
          </h2>
          <p className="mt-2 text-gray-600">
            Step through beginner to industry-ready Kotlin projects. Build, code along, and deploy to strengthen your portfolio.
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
