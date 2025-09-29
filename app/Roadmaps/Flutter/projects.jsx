"use client";
import React from "react";

const projects = {
  beginner: [
    {
      id: "flutter-todo-app",
      title: "To-Do List App",
      description:
        "Learn CRUD operations, ListView, Provider/setState, and local storage (Hive/SQLite). Add, edit, delete tasks, mark complete, and filter by category.",
      url: "https://youtu.be/GEqGhrjZ--4?si=qq-vypvMCx7IM4rx", // Replace with tutorial or repo link
    },
    {
      id: "flutter-weather-app",
      title: "Weather App",
      description:
        "Integrate APIs (OpenWeather), parse JSON, handle network errors. Features: search by city, current weather, 7-day forecast, and animations.",
      url: "https://youtu.be/6Xa4ejr57OM?si=9swwli8Wc9pBKcQi",
    },
    {
      id: "flutter-notes-app",
      title: "Notes App",
      description:
        "Practice text input, local database (SQLite/Hive), and state management. Features: add, edit, delete notes, tag notes, sort by date.",
      url: "https://youtu.be/Aa7U4Nn1kmM?si=Zm6hBZjLVcMJ64kN",
    },
  ],
  intermediate: [
    {
      id: "flutter-expense-tracker",
      title: "Expense Tracker / Budget App",
      description:
        "Learn Provider/Riverpod state management, charts, and responsive UI. Track expenses/income, category filter, monthly summaries, charts.",
      url: "https://youtu.be/A8Ou5iHU5lI?si=fKz72o2nd86lt0vL",
    },
    {
      id: "flutter-movie-app",
      title: "Movie / TV Show App",
      description:
        "Integrate TMDb API, handle pagination, caching. Search movies, show details, favorites list, offline caching.",
      url: "https://youtu.be/BtdEGLrEDn8?si=l6khfQrxRiECwvhW",
    },
    {
      id: "flutter-ecommerce-app",
      title: "E-Commerce App (Mini Version)",
      description:
        "Learn authentication, API integration, cart management, and state management. Features: product list, search/filter, add to cart, checkout, order history.",
      url: "https://youtu.be/rAPSRuSyeCI?si=ugxX4ynY8m900x6S",
    },
    {
      id: "flutter-recipe-app",
      title: "Recipe / Food App",
      description:
        "Practice API integration, JSON parsing, search/filter, state management. Browse recipes, view details, favorite recipes, filter by ingredients.",
      url: "https://youtu.be/JdVu04EC7kE?si=MrmRweft5k3sjoJB",
    },
  ],
  advanced: [
    {
      id: "flutter-social-app",
      title: "Social Media App (Mini)",
      description:
        "Learn Firebase Auth, Firestore, storage, real-time updates, and Riverpod/Bloc. Sign-up/login, post text/images, like/comment, real-time feed.",
      url: "https://youtu.be/ubmLxAvImBs?si=nOARdKx-6vg_t_Du",
    },
    {
      id: "flutter-chat-app",
      title: "Chat App / Messaging App",
      description:
        "Integrate Firebase Realtime DB/Firestore, push notifications, online/offline sync, and state management. Real-time chat, group chat, notifications, typing indicators.",
      url: "https://youtu.be/WbzGrxby8mI?si=a9URveYR6Sq5nptn",
    },
    {
      id: "flutter-productivity-app",
      title: "Task Management App",
      description:
        "Advanced state management, offline-first design, notifications, and analytics dashboard. Features: tasks/projects, deadlines & reminders, multi-user collaboration.",
      url: "https://youtu.be/ACpq1B_R6dw?si=Ph60AnApR9onfL0w",
    },
  ],
};

export default function Projects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            🧑‍💻 Flutter Project Roadmap
          </h2>
          <p className="mt-2 text-gray-600">
            Beginner → Intermediate → Advanced Flutter projects to become
            industry-ready.
          </p>
        </header>

        {Object.entries(projects).map(([level, list]) => (
          <div key={level} className="mb-12">
            <h3 className="text-2xl font-bold mb-6 capitalize text-indigo-700">
              {level} Projects
            </h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {list.map((p) => (
                <article
                  key={p.id}
                  className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform"
                  aria-labelledby={`${p.id}-title`}
                >
                  <h4
                    id={`${p.id}-title`}
                    className="mt-2 text-lg font-semibold text-gray-900 group-hover:text-indigo-600"
                  >
                    {p.title}
                  </h4>
                  <p className="mt-2 text-gray-600 text-sm">{p.description}</p>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Tutorial for ${p.title}`}
                    className="mt-4 inline-block text-indigo-600 font-medium hover:underline"
                  >
                    View Tutorial ▶
                  </a>
                </article>
              ))}
            </div>
          </div>
        ))}

        <footer className="mt-10 text-sm text-gray-500 text-center">
          Start with beginner projects, then move to intermediate, and finally
          advanced 🚀
        </footer>
      </div>
    </section>
  );
}
