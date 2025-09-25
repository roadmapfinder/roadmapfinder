// components/Projects.jsx
import React from "react";

const projects = [
  // 🌱 Beginner
  {
    id: "beginner-url-shortener",
    level: "Phase 1 — Beginner",
    title: "URL Shortener (like Bitly)",
    description:
      "Learn REST API basics, CRUD operations, and database design. Teaches mapping logic, indexing, and redirects.",
    url: "https://youtu.be/4WvX9dBjiJo?si=q17Y3yV9DOB-Lm37"
  },
  {
    id: "beginner-auth-service",
    level: "Phase 1 — Beginner",
    title: "Simple Authentication Service (JWT-based)",
    description:
      "Build secure authentication with hashing, sessions, JWT, and middleware. Auth is a must-know skill for backend engineers.",
    url: "https://youtu.be/mGrVmEex6_g?si=ak5VBwvwooicrXd1"
  },
  {
    id: "beginner-task-manager",
    level: "Phase 1 — Beginner",
    title: "Task Manager API",
    description:
      "Implement CRUD with validation and error handling. Foundation for almost every SaaS app.",
    url: "https://www.youtube.com/live/ceUIG8zgNTs?si=gqj55CzN8n5Bk1Fe"
  },

  // 🚀 Intermediate
  {
    id: "intermediate-blog-api",
    level: "Phase 2 — Intermediate",
    title: "Blogging Platform API (Headless CMS)",
    description:
      "Create CRUD with relations (Users → Posts → Comments) and RBAC (roles & permissions). Covers real-world data modeling.",
    url: "https://youtu.be/6z6CR29gtds?si=hODgk7Tw69BXqNFJ"
  },
  {
    id: "intermediate-file-upload",
    level: "Phase 2 — Intermediate",
    title: "File Upload & Image Processing Service",
    description:
      "Handle file storage (local/S3) and image processing like resizing/compression. Common need in media-heavy apps.",
    url: "https://youtu.be/GgnlQ1a0_uA?si=GmWLdUC2pvQpvhjV"
  },
  {
    id: "intermediate-ecommerce",
    level: "Phase 2 — Intermediate",
    title: "E-Commerce Backend (Mini Amazon)",
    description:
      "Implement cart, product catalog, orders, and payment integration (Stripe/PayPal sandbox). Covers full business logic.",
    url: "https://youtu.be/y99YgaQjgx4?si=NYYp8XRX6nGgzPqy"
  },

  // 🏗️ Advanced
  {
    id: "advanced-chat-backend",
    level: "Phase 3 — Advanced",
    title: "Real-Time Chat Backend",
    description:
      "Use WebSockets/Socket.IO to enable live updates, presence tracking, and scaling connections. Prepares you for collaborative systems.",
    url: "https://youtu.be/cr1XaYBqlhs?si=7e0H01xmpYtSiHSh"
  },
  {
    id: "advanced-queue-system",
    level: "Phase 3 — Advanced",
    title: "Notification & Email Queue System",
    description:
      "Learn message queues (RabbitMQ, Kafka, Redis) and background jobs. Companies need scalable async task handling.",
    url: "https://youtu.be/yXPKB7fHxfo?si=jTI8KuYcaEja1SdZ"
  },
  {
    id: "advanced-analytics-tracker",
    level: "Phase 3 — Advanced",
    title: "Analytics Event Tracker (Google Analytics Lite)",
    description:
      "Build logging pipelines for events, batch processing, and aggregations. Teaches analytics queries and data handling.",
    url: "https://youtu.be/2S7Y2wewF6I?si=wXNZkUg979-f8z12"
  },

  // 💼 Industry-Grade
  {
    id: "industry-api-gateway",
    level: "Phase 4 — Industry-Grade",
    title: "API Gateway & Rate Limiter",
    description:
      "Implement reverse proxy (NGINX/Express Gateway), caching, and throttling. Essential for scaling and API monetization.",
    url: "https://youtu.be/eR66m7TaV5A?si=WxCo94T4ZuRcidWL"
  },
  {
    id: "industry-booking-system",
    level: "Phase 4 — Industry-Grade",
    title: "Microservices-based Booking System (Airbnb Clone)",
    description:
      "Design service-to-service communication (REST/gRPC), database per service, transactions, and eventual consistency.",
    url: "https://youtu.be/k3Vfj-e1Ma4?si=6tiy58TdOv6EDSOn"
  },
  {
    id: "industry-distributed-cache",
    level: "Phase 4 — Industry-Grade",
    title: "Distributed Caching System (Redis-based)",
    description:
      "Implement caching strategies (LRU, write-through, TTL) and performance tuning. Critical for high-scale backends.",
    url: "https://youtu.be/Y46wlauVH_o?si=Pavhl4Ib2WSTs747"
  },

];

export default function Projects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            ⚙️ Backend Project Roadmap
          </h2>
          <p className="mt-2 text-gray-600">
            Build backend projects step by step — from REST APIs to microservices, queues, caching, and deployment.
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
              {p.url !== "#" && (
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
          Follow the sequence, master backend concepts, and turn 2–3 advanced projects into portfolio-grade work.
        </footer>
      </div>
    </section>
  );
}
