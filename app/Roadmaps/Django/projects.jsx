// components/Projects.jsx
import React from "react";

const projects = [
  // 🧩 Beginner Phase
  {
    id: "phase1-blog-cms",
    level: "Beginner (0–2 months)",
    title: "Personal Blog CMS",
    description:
      "Build a fully functional blog using Django. Implement CRUD operations, admin panel customization, and basic authentication. Learn Django ORM and templates.",
    url: "https://youtu.be/OBsLgCm-Ayo?si=-vdtFAufO4ybent7"
  },
  {
    id: "phase1-task-manager",
    level: "Beginner (0–2 months)",
    title: "Task Manager App",
    description:
      "Create a task tracker with user login, registration, and CRUD tasks. Practice user authentication, forms, and model relationships in Django.",
    url: "https://youtu.be/WwDoMP-lH3g?si=XFck1TLFz_rZ1Etg"
  },
  {
    id: "phase1-notes-api",
    level: "Beginner (0–2 months)",
    title: "Notes REST API (Django + DRF)",
    description:
      "Develop a REST API for managing notes. Learn Django REST Framework serializers, viewsets, and routers. Add token authentication and Swagger docs.",
    url: "https://youtu.be/8d1HgJTEGe8?si=Zv0y9xx9llEXIm6P"
  },

  // ⚙️ Intermediate Phase
  {
    id: "phase2-ecommerce-backend",
    level: "Intermediate (2–4 months)",
    title: "E-Commerce Backend",
    description:
      "Design and build a backend for an e-commerce platform with products, carts, and orders. Implement JWT authentication, payment integration, and order management.",
    url: "https://youtu.be/BakSpjjdjVA?si=MVO39STVwnN7jmzB"
  },
  {
    id: "phase2-blog-comments",
    level: "Intermediate (2–4 months)",
    title: "Blog + Comment System with JWT",
    description:
      "Extend your blog with JWT-based authentication, comment threading, and role-based permissions (admin, editor, reader). Use Redis for caching posts.",
    url: "https://youtu.be/PdkQooqoINA?si=_pNVMSQdR5BWopdw"
  },
  {
    id: "phase2-chat-app",
    level: "Intermediate (2–4 months)",
    title: "Real-Time Chat App (Django Channels)",
    description:
      "Create a WebSocket-based chat app using Django Channels and Redis. Learn async consumers, message broadcasting, and real-time user presence.",
    url: "https://youtu.be/u7siCTdGhuw?si=CeMeUcP_z4MdbS4G"
  },

  // ☁️ Advanced Phase
  {
    id: "phase3-job-portal",
    level: "Advanced (4–6 months)",
    title: "Job Portal / Internship Finder API",
    description:
      "Build a platform for companies and candidates. Implement multi-role authentication, dynamic filters, resume uploads, and pagination using DRF.",
    url: "https://youtu.be/6CATb-G22xY?si=UZWKdW52L4LvTopY"
  },
  {
    id: "phase3-saas-analytics",
    level: "Advanced (4–6 months)",
    title: "SaaS Analytics Dashboard",
    description:
      "Develop an analytics backend using Django + Celery + PostgreSQL. Schedule async data aggregation tasks and provide analytics endpoints with DRF.",
    url: "https://youtu.be/3FdlvKDRfhA?si=t3nox3f8vhNHk-9C"
  },
  {
    id: "phase3-microservice-backend",
    level: "Advanced (6–8 months)",
    title: "Microservice-Ready Django Backend (Capstone)",
    description:
      "Architect a scalable backend using DRF, Celery, Redis, Docker, and PostgreSQL. Add logging, environment configs, and CI/CD deployment on AWS or Render.",
    url: "https://youtu.be/yy-29KZsQOE?si=UfeZ5Zj3XucKYzlx"
  }
];

export default function Projects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            🐍 Django Backend Developer Project Roadmap (Beginner → Advanced)
          </h2>
          <p className="mt-2 text-gray-600">
            Build these projects step-by-step to master Django backend development. 
            Learn ORM, REST APIs, async tasks, JWT authentication, and scalable architecture.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.id}
              className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform"
              aria-labelledby={`${p.id}-title`}
            >
              <span className="inline-block text-xs font-medium bg-green-100 text-green-800 px-2 py-1 rounded-full">
                {p.level}
              </span>
              <h3
                id={`${p.id}-title`}
                className="mt-4 text-lg font-semibold text-gray-900 group-hover:text-green-600"
              >
                {p.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">{p.description}</p>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-green-600 font-medium hover:underline"
              >
                Watch Tutorial ▶
              </a>
            </article>
          ))}
        </div>

        <footer className="mt-10 text-sm text-gray-500 text-center">
          💡 Follow each phase in order — start with core CRUD and REST APIs, 
          then advance to async, caching, and deployment. Convert top projects into portfolio case studies.
        </footer>
      </div>
    </section>
  );
}
