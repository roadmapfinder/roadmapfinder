// components/Projects.jsx
"use client"
import React from "react";

const projects = [
  // 🧩 Beginner Phase
  {
    id: "phase1-basic-crud",
    level: "Beginner (0–1 month)",
    title: "Basic CRUD API",
    description:
      "Build a REST API with Express.js to Create, Read, Update, and Delete resources like Books or Tasks. Learn routing, middleware, JSON handling, and basic error handling.",
    url: "https://youtu.be/uNCrMvkPUAE?si=Yxrmta08HaVmuE3R"
  },
  {
    id: "phase1-todo-backend",
    level: "Beginner (0–1 month)",
    title: "Todo App Backend",
    description:
      "Develop backend for a Todo application with endpoints for adding, updating, completing, and deleting tasks. Practice structured folder organization and controllers.",
    url: "https://youtu.be/2u8VAAyvFv0?si=qqqTGzAsWLGZrxWg"
  },
  {
    id: "phase1-file-upload-api",
    level: "Beginner (1 month)",
    title: "File Upload API",
    description:
      "Implement file upload endpoints using Multer. Handle multiple file uploads, file size validation, and store metadata in a database.",
    url: "https://youtu.be/4pmkQjsKJ-U?si=FKZXpf4PfJGuktKm"
  },

  // ⚙️ Intermediate Phase
  {
    id: "phase2-blog-api",
    level: "Intermediate (2–3 months)",
    title: "Blog REST API",
    description:
      "Create a full-featured blog API with users, posts, comments, and categories. Integrate MongoDB/PostgreSQL, learn about schema design, relationships, authentication, and pagination.",
    url: "https://youtu.be/BpXaVQSdo_E?si=SuhSImVLikbdtot4"
  },
  {
    id: "phase2-auth-system",
    level: "Intermediate (2–3 months)",
    title: "User Authentication & Authorization",
    description:
      "Build a secure auth system using JWT, password hashing, email verification, and role-based access control (RBAC). Learn secure session handling.",
    url: "https://youtu.be/y_Ia7RP4rzk?si=BQ47wAvsK5kJFI6I"
  },
  {
    id: "phase2-ecommerce-backend",
    level: "Intermediate (3–4 months)",
    title: "E-commerce Backend API",
    description:
      "Develop backend for an e-commerce platform including products, categories, carts, orders, and payments. Implement data validation, error handling, and modular routes.",
    url: "https://youtu.be/rMiRZ1iRC0A?si=DFSLeB-TJW7ZWO-Y"
  },

  // 🚀 Advanced / Industry-Ready Phase
  {
    id: "phase3-realtime-chat",
    level: "Advanced (4–5 months)",
    title: "Real-Time Chat App Backend",
    description:
      "Build a WebSocket-based chat server using Socket.io or native WebSocket. Implement rooms, private messaging, message persistence, and online status.",
    url: "https://youtu.be/CqWF2fZJ_p0?si=mR4X7JEv45aRsBCo"
  },
  {
    id: "phase3-graphql-api",
    level: "Advanced (5–6 months)",
    title: "GraphQL API with Express",
    description:
      "Develop a GraphQL API for a resource-rich application. Learn queries, mutations, subscriptions, schema design, and integrating GraphQL with Express.",
    url: "https://youtu.be/WtkKwO1viI8?si=A30kpVpb3uDSeVQn"
  },
  {
    id: "phase3-microservices-backend",
    level: "Industry-Ready (6–8 months)",
    title: "Microservices Architecture with Express",
    description:
      "Design a microservices-based backend with multiple services (Auth, Product, Payment). Implement API gateway, service communication, and Docker containerization.",
    url: "https://youtu.be/mmcReIECv6E?si=ZxoYCkJba9cke4Mt"
  }
];

export default function Projects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            🚀 Express.js Project Roadmap (Beginner → Industry-Ready)
          </h2>
          <p className="mt-2 text-gray-600">
            Build these projects step-by-step to master Express.js and become industry-ready. Includes CRUD APIs, authentication, real-time apps, GraphQL, and microservices.
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
                  Watch Tutorial ▶
                </a>
              )}
            </article>
          ))}
        </div>

        <footer className="mt-10 text-sm text-gray-500 text-center">
          💡 Follow each phase in order — start with basics, progress to authentication, databases, real-time apps, GraphQL, and microservices. Convert top projects into portfolio case studies.
        </footer>
      </div>
    </section>
  );
}
