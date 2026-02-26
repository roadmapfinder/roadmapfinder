// components/Projects.jsx
"use client";
import React from "react";

const projects = [
  // 🧩 Beginner Phase
  {
    id: "phase1-auth-saas",
    level: "Beginner (0–1 month)",
    title: "Auth-First Firebase SaaS Starter",
    description:
      "Build a Firebase-powered app with Email/Password and Google authentication, protected routes, user profiles stored in Firestore, and role-based access using custom claims and Security Rules.",
    url: "https://youtu.be/rbuSx1yEgV8?si=EFSGaKrprqE_-rMu"
  },
  {
    id: "phase1-firestore-crud",
    level: "Beginner (0–1 month)",
    title: "Firestore CRUD Application",
    description:
      "Create a full CRUD application using Cloud Firestore with proper data modeling, pagination, indexing, offline support, and secure read/write rules.",
    url: "https://youtu.be/Cp3XPcOD4kY?si=VibUBiv1z6PPfrLb"
  },

  // ⚙️ Intermediate Phase
  {
    id: "phase2-realtime-chat",
    level: "Intermediate (2–3 months)",
    title: "Real-Time Chat Application",
    description:
      "Develop a real-time chat app using Firestore listeners with 1-to-1 and group chats, typing indicators, online presence, and notifications powered by Cloud Functions.",
    url: "https://youtu.be/2-LISBTczQE?si=Y3nS5Sr6_oejKA6C"
  },
  {
    id: "phase2-file-platform",
    level: "Intermediate (3–4 months)",
    title: "File Sharing & Media Platform",
    description:
      "Build a secure file upload and sharing platform using Firebase Storage, ownership-based Security Rules, Firestore metadata, and Cloud Functions for image processing.",
    url: "https://youtu.be/-IFRVMEhZDc?si=JyuL5IF9nrHN2Do_"
  },

  // 🚀 Advanced / Industry-Ready Phase
  {
    id: "phase3-multitenant-app",
    level: "Advanced",
    title: "Multi-Tenant Project Management App",
    description:
      "Create a multi-tenant Firebase app with organizations, teams, projects, and role-based permissions using advanced Firestore schemas and complex Security Rules.",
    url: "https://youtu.be/biyACidGDOQ?si=LuXji06ADQWML9lU"
  },
  {
    id: "phase3-saas-production",
    level: "Industry-Ready",
    title: "Build mobile app with firebase ",
    description:
      "Build a production-ready SaaS using Firebase with subscriptions, usage limits, backend logic in Cloud Functions, monitoring via Analytics & Crashlytics, and cost-optimized Firestore queries.",
    url: "https://youtu.be/UFD4SP91tSM?si=d53mUcJCptqbtlH4"
  }
];

export default function Projects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            🔥 Firebase Project Roadmap (Beginner → Industry-Ready)
          </h2>
          <p className="mt-2 text-gray-600">
            Build these Firebase projects step-by-step to master authentication,
            Firestore data modeling, security rules, serverless backend logic,
            scalability, and real-world production architecture.
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
              {p.url && (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-indigo-600 font-medium hover:underline"
                >
                  View Tutorial ▶
                </a>
              )}
            </article>
          ))}
        </div>

        <footer className="mt-10 text-sm text-gray-500 text-center">
          💡 Completing these Firebase projects demonstrates real-world backend
          and full-stack capability — security-first design, scalable data
          models, serverless architecture, and production readiness.
        </footer>
      </div>
    </section>
  );
}