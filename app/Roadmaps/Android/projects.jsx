// components/Projects.jsx
import React from "react";

const projects = [
  // 🌱 Beginner
  {
    id: "phase1-notes-app",
    level: "Phase 1 — Beginner",
    title: "Notes App",
    description:
      "Build a simple Notes app with CRUD operations using Room, ViewModel, LiveData, and RecyclerView. Learn persistence and state management.",
    url: "https://youtu.be/Shh0N45S4hE?si=QCqfZ7WJMpnZatkZ" // Notes App Room + MVVM tutorial
  },
  {
    id: "phase1-weather-app",
    level: "Phase 1 — Beginner",
    title: "Weather App",
    description:
      "Create a weather app using OpenWeatherMap API, Retrofit, and Coroutines. Parse JSON, handle errors, and display data in a clean UI.",
    url: "https://youtu.be/QFGKV8j2ulY?si=p-zBjd2KFWrCHf8N" // Weather App Retrofit tutorial
  },
  {
    id: "phase1-quiz-app",
    level: "Phase 1 — Beginner",
    title: "Quiz App",
    description:
      "Multiple-choice quiz app with scoring and progress saving. Learn Jetpack Compose Navigation or ViewPager.",
    url: "https://youtu.be/pXZR0QiwvrU?si=qAhE0ZCSP7IUsJQb" // Quiz App tutorial
  },

  // 🌿 Intermediate
  {
    id: "phase2-movie-explorer",
    level: "Phase 2 — Intermediate",
    title: "Movie Explorer",
    description:
      "Integrate TMDB API to build a movie explorer app. Learn Paging 3 for infinite scroll, offline caching with Room, and clean UI with Compose.",
    url: "https://youtu.be/s57FYRFh_Os?si=Q5TulZfaFuPs0RHy" // Paging 3 + Compose tutorial
  },
  {
    id: "phase2-expense-tracker",
    level: "Phase 2 — Intermediate",
    title: "Expense Tracker",
    description:
      "Track daily income and expenses. Use Room, Coroutines/Flow, Hilt for DI, and Compose UI with charts. Export data to CSV/Excel.",
    url: "https://youtu.be/MHlWd0AOQuU?si=KoUlURWAAE339Qme" // Expense Tracker tutorial
  },
  {
    id: "phase2-chat-app",
    level: "Phase 2 — Intermediate",
    title: "Chat App",
    description:
      "Simulated chat app using Firebase Realtime Database. Learn Google Sign-In authentication and push notifications with FCM.",
    url: "https://youtu.be/OlfHlM3Lvf8?si=WdK8vSzqtkbKU_2z" // Firebase Chat tutorial
  },

  // 🌳 Advanced
  {
    id: "phase3-ecommerce-app",
    level: "Phase 3 — Advanced",
    title: "E-Commerce Clone",
    description:
      "Mini e-commerce app with product listing, shopping cart, login, and mock payment. Built with MVVM, Hilt, Retrofit, and Jetpack Compose.",
    url: "https://youtu.be/4cbVZhohIkA?si=9iSRnPxhnRIiitzH" // E-commerce tutorial
  },
  {
    id: "phase3-fitness-tracker",
    level: "Phase 3 — Advanced",
    title: "Fitness Tracker",
    description:
      "Steps counting, calories burned, and daily tracking with Google Fit API. Use Room for persistence, charts for visualization, and WorkManager for background tasks.",
    url: "https://youtu.be/hg1_yiBvSBo?si=8v8Tczo6sLme9RCw" // Fitness Tracker tutorial
  },
  {
    id: "phase3-music-app",
    level: "Phase 3 — Advanced",
    title: "Music/Podcast Streaming App",
    description:
      "Stream music or podcasts using ExoPlayer. Add offline downloads with WorkManager, notifications with media controls, and Compose UI.",
    url: "https://youtu.be/L9arbsw82Oc?si=3vq8BAJT3pb2At2N" // ExoPlayer tutorial
  },

  // 🏆 Capstone
  {
    id: "capstone-food-delivery",
    level: "Phase 4 — Capstone",
    title: "Food Delivery Clone (Firebase + Maps API)",
    description:
      "Clone of Swiggy/Zomato style app with restaurant listings, cart, order tracking, Google Maps integration, Firebase realtime updates, and clean architecture.",
    url: "https://youtu.be/TwLilW0fH9c?si=sIDUAZrcV_vKzZIZ" // Food Delivery tutorial
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
            Build Android apps from beginner to industry-ready using Jetpack Compose, Kotlin, Firebase, and modern Android architecture.
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
          Build these projects step by step. Focus on architecture, state
          management, and clean coding. Showcase 2–3 polished apps in your
          portfolio to land industry roles.
        </footer>
      </div>
    </section>
  );
}
