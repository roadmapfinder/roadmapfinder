// components/NodeProjects.jsx
"use client"
import React from "react";

const projects = [
  // Phase 1 — Beginner
  {
    id: "phase1-cli-todo",
    level: "Phase 1 — Beginner",
    title: "CLI Todo App",
    description:
      "Build a command-line todo manager to add, edit, mark done, and delete tasks. Store data in JSON files and practice Node.js core modules.",
    url: "https://youtu.be/bsDxlkx2aoU?si=fCEFMrbjQxIxoLZc", // replace with your tutorial or GitHub repo
  },
  {
    id: "phase1-rest-api",
    level: "Phase 1 — Beginner",
    title: "Simple REST API",
    description:
      "Create a REST API for managing books or movies with CRUD operations using Express.js. Test endpoints with Postman.",
    url: "https://youtu.be/uNCrMvkPUAE?si=oNgxM_2abVy-afQv",
  },
  {
    id: "phase1-note-app",
    level: "Phase 1 — Beginner",
    title: "Note-Taking Web App",
    description:
      "Build a server-rendered note-taking app using Express and EJS/Handlebars. Implement create, edit, delete notes functionality.",
    url: "https://youtu.be/UsNm8ZL3YaE?si=-AklK_6y9D1xYxz5",
  },
  // Phase 2 — Intermediate
  {
    id: "phase2-auth-system",
    level: "Phase 2 — Intermediate",
    title: "User Authentication System",
    description:
      "Implement JWT-based authentication, password hashing with bcrypt, session handling, and email verification.",
    url: "https://github.com/someuser/node-auth-system",
  },
  {
    id: "phase2-blog-db",
    level: "Phase 2 — Intermediate",
    title: "Blog Platform with Database",
    description:
      "Develop a blog platform using MongoDB or PostgreSQL with CRUD operations, comments, and user management.",
    url: "https://youtu.be/6z6CR29gtds?si=ozbCSzD9DLwqllyN",
  },
  {
    id: "phase2-ecommerce",
    level: "Phase 2 — Intermediate",
    title: "E-Commerce Backend",
    description:
      "Build a backend for an e-commerce site including product catalog, cart, orders, and Stripe/PayPal payment integration.",
    url: "https://youtu.be/D4iVxz_1utY?si=AMRH4d0DWWZOsrvI",
  },
  {
    id: "phase2-file-server",
    level: "Phase 2 — Intermediate",
    title: "File Upload & Download Server",
    description:
      "Implement file upload, storage (local or AWS S3), download functionality, and streaming for large files.",
    url: "https://youtu.be/837d-bTG6Xs?si=gqt95YHo5vBtWsIf",
  },
  // Phase 3 — Advanced
  {
    id: "phase3-chat-app",
    level: "Phase 3 — Advanced",
    title: "Real-Time Chat App",
    description:
      "Build a multi-user chat application using Socket.io. Features include private/public rooms, notifications, and message history.",
    url: "https://youtu.be/UUddpbgPEJM?si=0mAoxB4NjIGkxVvT",
  },
  {
    id: "phase3-task-saas",
    level: "Phase 3 — Advanced",
    title: "Task Management SaaS",
    description:
      "Create a Trello-like task management app with multi-user collaboration, roles, and real-time updates using Node.js backend.",
    url: "https://youtu.be/fZK57PxKC-0?si=uVWBT703AxQMvdCl",
  },
  {
    id: "phase3-microservices",
    level: "Phase 3 — Advanced",
    title: "Microservices / Event-Driven App",
    description:
      "Develop multiple Node.js microservices communicating via RabbitMQ/Kafka. Implement Redis caching, Docker deployment, and asynchronous job queues.",
    url: "https://youtu.be/wdsiQEa5mQY?si=QBGerrQLme7UWvtM",
  },
];

export default function NodeProjects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            ⚡ Node.js Project Roadmap
          </h2>
          <p className="mt-2 text-gray-600">
            Step through beginner to industry-ready Node.js projects. Build, code along, and deploy to strengthen your backend skills.
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
          Follow the sequence, implement features step by step, and showcase your top Node.js projects in a polished portfolio.
        </footer>
      </div>
    </section>
  );
}
