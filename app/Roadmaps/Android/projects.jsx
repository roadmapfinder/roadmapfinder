// components/Projects.jsx
import React from "react";

const projects = [
  {
    id: "phase1-notes-app",
    level: "Phase 1 — Beginner",
    title: "Notes App (MVVM + Room + Jetpack Compose)",
    description:
      "Build a simple Notes app with CRUD operations using Room, MVVM, and Jetpack Compose. Covers offline storage, state management, and dark mode.",
    url: "https://youtu.be/srp2d3_ofRU" // Notes App Compose MVVM Room
  },
  {
    id: "phase1-weather-app",
    level: "Phase 1 — Beginner–Intermediate",
    title: "Weather Forecast App (Retrofit + Compose + Room)",
    description:
      "Create a weather app using OpenWeatherMap API, Retrofit, Coroutines, and Jetpack Compose. Add offline caching with Room for better UX.",
    url: "https://www.youtube.com/watch?v=YbvumICc3Pk" // Weather App Retrofit Compose
  },
  {
    id: "phase2-expense-tracker",
    level: "Phase 2 — Intermediate",
    title: "Expense Tracker (Room + Hilt + Charts)",
    description:
      "Track income/expenses with monthly charts. Learn DI with Hilt, Room persistence, Jetpack Compose UI, and MVVM clean patterns.",
    url: "https://www.youtube.com/watch?v=xolI_2svC6w" // Expense Tracker Compose tutorial
  },
  {
    id: "phase2-news-app",
    level: "Phase 2 — Intermediate",
    title: "News App (Paging 3 + Compose + Retrofit)",
    description:
      "Build a modern News app with infinite scroll, bookmarks, offline caching using Paging 3, Retrofit, Room, and Compose LazyColumn.",
    url: "https://www.youtube.com/watch?v=QhwVe3RBfqw" // Paging 3 + Compose tutorial
  },
  {
    id: "phase3-task-manager",
    level: "Phase 3 — Intermediate",
    title: "Task Manager with Notifications (WorkManager + DataStore)",
    description:
      "Implement a task scheduling app with reminders. Covers background tasks using WorkManager, AlarmManager, DataStore, and Compose notifications.",
    url: "https://youtu.be/Cv4KKIllLhk" // Google Codelab WorkManager
  },
  {
    id: "phase3-auth-app",
    level: "Phase 3 — Intermediate",
    title: "Authentication App (Firebase Auth + Compose Navigation)",
    description:
      "Learn secure login flows with Firebase Authentication, Google Sign-In, Jetpack Compose Navigation, and Encrypted Storage for tokens.",
    url: "https://www.youtube.com/watch?v=_yY7voDC1eM" // Firebase Auth Compose tutorial
  }
];

export default function Projects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            📱 Android Dev Project Roadmap
          </h2>
          <p className="mt-2 text-gray-600">
            Step from beginner to advanced Android development projects using Jetpack Compose, Kotlin, and modern Android architecture (Hindi & English tutorials).
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
          Build these apps step by step. Focus on architecture, state management, and clean coding. 
          Deploy your top 2–3 as portfolio-ready projects.
        </footer>
      </div>
    </section>
  );
}
