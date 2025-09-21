// components/Projects.jsx
import React from "react";

const projects = [
  {
    id: "mern-todo-hindi",
    level: "Phase 1 — Beginner",
    title: "MERN To-Do App (Hindi)",
    description:
      "Step-by-step Hindi series to build a full To-Do app with React, Node.js, and MongoDB—perfect for beginners.",
    url: "https://www.youtube.com/watch?v=W1Ai9kQ-kP4"
  },
  {
    id: "mern-todo-english",
    level: "Phase 1 — Beginner",
    title: "MERN To-Do App with Deployment (English)",
    description:
      "Beginner-friendly tutorial to create a small CRUD app, covering API integration, HTTP methods, and deployment.",
    url: "https://www.youtube.com/watch?v=F9gB5b4jgOI"
  },
  {
    id: "mern-ecommerce",
    level: "Phase 2 — Intermediate",
    title: "Full Stack E-Commerce App (English)",
    description:
      "Comprehensive project building an e-commerce store with products, cart, Stripe payments, and admin roles.",
    url: "https://www.youtube.com/watch?v=Z12ymKGTbN4"
  },
  {
    id: "mern-chat-socketio",
    level: "Phase 2 — Intermediate",
    title: "Real-Time Chat App with Socket.IO (English)",
    description:
      "Learn to build a real-time messaging application using MERN, JWT authentication, and Socket.IO integration.",
    url: "https://www.youtube.com/watch?v=nCTiE5szEyY"
  },
  {
    id: "mern-chat-whatsapp",
    level: "Phase 2 — Intermediate",
    title: "WhatsApp-Style Real-Time Chat App (English)",
    description:
      "A polished project to build a WhatsApp-style chat app using MERN and Socket.IO with a modern UI experience.",
    url: "https://www.youtube.com/watch?v=b5VVPltbLoo"
  },
  {
    id: "mern-ecommerce-product",
    level: "Practice Project",
    title: "E-Commerce Product Page (MERN)",
    description:
      "Focused tutorial on building product page features for an e-commerce site with MERN stack.",
    url: "https://www.youtube.com/watch?v=GLY1mnFUPa0"
  },
  {
    id: "mern-ecommerce-playlist",
    level: "Practice Project",
    title: "Full Stack E-Commerce Website Playlist",
    description:
      "A YouTube playlist covering the full cycle of building an e-commerce store using MERN.",
    url: "https://www.youtube.com/playlist?list=PLFvsoeJk9fmCc7kK6V1N4vNVir2WJo73h"
  },
  {
    id: "mern-chat-playlist",
    level: "Practice Project",
    title: "Realtime Chat App Playlist",
    description:
      "Step-by-step playlist on building a real-time chat app with MERN stack and Socket.IO.",
    url: "https://www.youtube.com/playlist?list=PLZNmKBJAPu4wGjqb4kPSi_OcWyDjY9k55"
  }
];

export default function Projects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            🚀 Verified MERN Stack Project Tutorials
          </h2>
          <p className="mt-2 text-gray-600">
            Carefully selected, real-world MERN Stack project tutorials (2025) in Hindi & English—projects you can build today.
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
          These tutorials are verified, up-to-date, and cover practical MERN projects from beginner to intermediate level.
        </footer>
      </div>
    </section>
  );
}
