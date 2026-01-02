"use client"
// components/Projects.jsx
import React from "react";

const projects = [
  // 🧩 Beginner Phase
  {
    id: "phase1-notes-app",
    level: "Beginner ",
    title: "Desktop Notes App",
    description:
      "Build a cross-platform desktop notes application using Electron. Learn BrowserWindow, IPC communication, file system access, menus, keyboard shortcuts, and persistent local storage.",
    url: "https://youtu.be/t8ane4BDyC8?si=JGjeh-DWYsiVcA84",
  },
  {
    id: "phase1-todo-desktop",
    level: "Beginner",
    title: "Mini Desktop Application",
    description:
      "Create a desktop Todo app with add, update, delete, and complete tasks. Practice Electron app lifecycle, renderer–main process communication, and UI state management.",
    url: "https://youtu.be/ML743nrkMHw?si=3SrleVX3rhMuy8By",
  },
  {
    id: "phase1-file-reader",
    level: "Beginner",
    title: "File Reader & Viewer App",
    description:
      "Develop a desktop app that opens and reads local files using native dialogs. Learn file system APIs, drag & drop, and OS-level permissions handling.",
    url: "https://youtu.be/1rDvNDvZrnA?si=tRK-kn1Z4gl3EK4h",
  },

  // ⚙️ Intermediate Phase
 
  {
    id: "phase2-file-manager",
    level: "Intermediate (2–3 months)",
    title: "Todo App",
    description:
      "Create a simplified file explorer like Finder or Windows Explorer. Implement folder navigation, file actions, drag & drop, metadata display, and performance optimization.",
    url: "https://youtu.be/GQvDNRBe4IU?si=mXRogir9z_LlGj4p",
  },
  {
    id: "phase2-auth-desktop",
    level: "Intermediate (3–4 months)",
    title: "Authenticated Desktop App",
    description:
      "Build a desktop app with login, secure token storage, and protected screens. Learn Electron security best practices, context isolation, and safe IPC patterns.",
    url: "https://youtu.be/y43xLc42cS4?si=A75G-wt1lvtcV3ae",
  },

  
  {
    id: "phase3-offline-sync",
    level: "Advanced (5–6 months)",
    title: "Offline-First Sync App",
    description:
      "Develop an offline-capable desktop app using SQLite or IndexedDB with background sync, network detection, and conflict resolution when reconnecting.",
    url: "https://youtu.be/zFlvwbiTWsk?si=6jbHq_hCHXnxO6Dn",
  },
  {
    id: "phase3-saas-client",
    level: "Industry-Ready (6–8 months)",
    title: "SaaS Desktop Client (Capstone)",
    description:
      "Create a full-featured SaaS desktop client like Slack or Notion. Implement OAuth, system tray integration, notifications, analytics, multi-window architecture, and telemetry.",
    url: "https://youtu.be/3R63m4sTpKo?si=75xmmE18fuD-kYjL",
  },
];

export default function Projects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            🚀 Electron.js Project Roadmap (Beginner → Industry-Ready)
          </h2>
          <p className="mt-2 text-gray-600">
            Build these Electron.js desktop projects step-by-step to master OS
            integration, security, performance, and production-ready app
            delivery.
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
                  View Official Docs ▶
                </a>
              )}
            </article>
          ))}
        </div>

        <footer className="mt-10 text-sm text-gray-500 text-center">
          💡 Complete these projects in order — fundamentals → file system →
          performance → security → auto updates → SaaS-level architecture.
          Convert the final projects into portfolio-grade case studies.
        </footer>
      </div>
    </section>
  );
}
