import React from "react";

const projects = [
  {
    id: "rn-beginner-1",
    level: "Phase 1 — Beginner",
    title: "To-Do App (Starter)",
    description:
      "Basic app with components, props, state, hooks (useState, useEffect), FlatList, and styling. Teaches rendering, user input, and list handling.",
    cta: "Explore project",
    url: "https://youtu.be/CfSK9niSAxY?si=msIeW9L_dhnC9vsr" // React Native Todo tutorial
  },
  {
    id: "rn-beginner-2",
    level: "Phase 1 — Beginner",
    title: "Weather App",
    description:
      "API-driven weather app using OpenWeather API. Learn API calls, async/await, and conditional rendering with geolocation support.",
    cta: "Explore project",
    url: "https://youtu.be/953vyZMO4cM?si=hPd0CwBAdDSfgto_"
  },
  {
    id: "rn-beginner-3",
    level: "Phase 1 — Beginner",
    title: "Notes App",
    description:
      "CRUD operations with forms, text input validation, and local storage. Teaches form handling and persistence with AsyncStorage.",
    cta: "Explore project",
    url: "https://youtu.be/CpD0Uh3tHuc?si=EQDhQ3SToEPnxvB_"
  },
  {
    id: "rn-intermediate-1",
    level: "Phase 2 — Intermediate",
    title: "Recipe Explorer App",
    description:
      "Navigation (Stack + Tabs), API integration, and infinite scroll with large data sets. Includes favorites with AsyncStorage or SQLite.",
    cta: "Explore project",
    url: "https://youtu.be/cdnneQjsoT0?si=M97hKjYRxkm6fAe_"
  },
  {
    id: "rn-intermediate-2",
    level: "Phase 2 — Intermediate",
    title: "Chat App (Real-Time)",
    description:
      "Real-time messaging using Firebase or Socket.io with Redux Toolkit/Zustand. Includes typing indicators and push notifications.",
    cta: "Explore project",
    url: "https://youtu.be/Ov3Z3vD5zFw?si=svmT5aHL5KEIVMiw"
  },
  {
    id: "rn-intermediate-3",
    level: "Phase 2 — Intermediate",
    title: "E-Commerce App",
    description:
      "Product listing, cart, wishlist, and authentication (JWT). Covers most business app features. Add payments with Stripe or PayPal.",
    cta: "Explore project",
    url: "https://youtu.be/tpNCk0HDnf0?si=Ce4dpC3mZGbfukDJ"
  },
  {
    id: "rn-advanced-1",
    level: "Phase 3 — Advanced",
    title: "Fitness Tracker App",
    description:
      "Tracks health data with charts (Victory Native/Reanimated), offline sync (SQLite/Realm), and device sensors (pedometer, health APIs).",
    cta: "Explore project",
    url: "https://youtu.be/asMSo4DLq6s?si=qPSdYtbpjDvqpySw"
  },
  {
    id: "rn-advanced-2",
    level: "Phase 3 — Advanced",
    title: "Ride-Sharing App (Uber Lite)",
    description:
      "Maps, geolocation, real-time driver tracking (sockets), and deep linking. Includes fare estimation and payments integration.",
    cta: "Explore project",
    url: "https://www.youtube.com/live/bvn_HYpix6s?si=pEMbt4SbYlBM5WTu"
  },
  {
    id: "rn-advanced-3",
    level: "Phase 3 — Advanced",
    title: "Social Media Clone (Instagram/TikTok Lite)",
    description:
      "Camera/media upload, infinite scroll, video rendering, likes/comments, push notifications, and CI/CD (CodePush or EAS).",
    cta: "Explore project",
    url: "https://youtu.be/eYByUtXQbEo?si=_LUNTmo4ArhW6NmG"
  }
];

export default function ProjectCards() {
  return (
    <section className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
            📱 React Native Projects Path — Beginner → Industry-Ready
          </h2>
          <p className="mt-2 text-slate-600 max-w-2xl">
            Build these React Native apps step by step to progress from basic UI
            skills to production-ready mobile applications.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article
              key={p.id}
              className="group bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-transform transform hover:-translate-y-1"
              aria-labelledby={`${p.id}-title`}
            >
              <div className="flex items-start justify-between">
                <span className="inline-block text-xs font-medium bg-green-50 text-green-700 px-2 py-1 rounded-full">
                  {p.level}
                </span>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-slate-400 hover:text-green-600 transition"
                  aria-label={`Open tutorial for ${p.title}`}
                >
                  Docs ▶
                </a>
              </div>

              <h3
                id={`${p.id}-title`}
                className="mt-4 text-lg font-semibold text-slate-900 group-hover:text-green-600"
              >
                {p.title}
              </h3>

              <p className="mt-3 text-sm text-slate-600">{p.description}</p>

              <div className="mt-5 flex items-center justify-between">
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-green-600 text-white px-4 py-2 text-sm font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300"
                >
                  {p.cta}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>

                <span className="text-xs text-slate-400">~1–4 weeks</span>
              </div>
            </article>
          ))}
        </div>

        <footer className="mt-10 text-sm text-slate-500">
          Tip: Don’t just copy tutorials — experiment with new features, add
          real-world integrations (auth, payments, push notifications), and
          deploy with Expo EAS or bare workflow.
        </footer>
      </div>
    </section>
  );
}
