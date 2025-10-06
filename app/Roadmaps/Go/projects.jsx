// components/Projects.jsx
import React from "react";

const projects = [
  // ---------- BEGINNER PROJECTS ----------
  {
    id: "go-cli-todo",
    level: "Go — Beginner",
    title: "CLI Todo App",
    description:
      "Build a command-line todo manager to add, list, mark done, and delete tasks. Store tasks in a JSON file. Learn basic Go syntax, structs, slices, and file I/O.",
    url: "https://youtu.be/g16Zf0KQEWI?si=0QkdwfqR7UobDye8"
  },
  {
    id: "go-url-shortener",
    level: "Go — Beginner",
    title: "URL Shortener Service",
    description:
      "Create a simple URL shortening service with REST API endpoints and in-memory storage. Learn maps, JSON, and basic routing with net/http.",
    url: "https://youtu.be/3ExDEeSnyvE?si=DsKzh3qSqty9rkwq"
  },
  {
    id: "go-number-guess",
    level: "Go — Beginner",
    title: "Number Guessing / Quiz Game",
    description:
      "CLI-based number guessing or quiz game to practice loops, conditionals, and user input. Learn math/rand and error handling.",
    url: "https://youtu.be/RZuWWQOACUc?si=U4feZFHOV5VM1kg_"
  },

  // ---------- INTERMEDIATE PROJECTS ----------
  {
    id: "go-rest-crud-api",
    level: "Go — Intermediate",
    title: "RESTful CRUD API with PostgreSQL",
    description:
      "Develop a REST API for users/products/tasks using PostgreSQL and sqlc or GORM. Learn database queries, migrations, JSON handling, and context usage.",
    url: "https://youtu.be/R5KiqmsMysM?si=tiY_MnN-ir0w0OF3"
  },
  {
    id: "go-concurrent-crawler",
    level: "Go — Intermediate",
    title: "Concurrent Web Crawler",
    description:
      "Build a crawler that fetches website data concurrently using goroutines and channels. Learn worker pools, rate limiting, and logging.",
    url: "https://youtu.be/B9uR2gLM80E?si=c-XjWSFwyJ3ynhcO"
  },
  {
    id: "go-markdown-blog",
    level: "Go — Intermediate",
    title: "Markdown Blog API",
    description:
      "Serve markdown files as HTML via a REST API. Learn file system operations, template rendering, API design, and caching strategies.",
    url: "https://youtu.be/DmWqRBBenIg?si=CiZ9srOsYJym_XxQ"
  },

  // ---------- ADVANCED PROJECTS ----------
  {
    id: "go-grpc-service",
    level: "Go — Advanced",
    title: "gRPC Microservice",
    description:
      "Implement a gRPC service for managing inventory, tasks, or messages with a separate Go client. Learn Protocol Buffers, streaming, and error handling.",
    url: "https://youtu.be/hHzjDfCbTq4?si=FafDiHn5J41IS8hb"
  },
  {
    id: "go-chat-websocket",
    level: "Go — Advanced",
    title: "Chat Server with WebSocket",
    description:
      "Build a real-time chat server using gorilla/websocket. Learn concurrent connection handling, broadcasting messages, and graceful shutdown.",
    url: "https://youtu.be/JuUAEYLkGbM?si=z82kO0VSnZpLJ3TQ"
  },
  {
    id: "go-event-processor",
    level: "Go — Advanced",
    title: "Event-Driven Task Processor",
    description:
      "Create a system that listens to a message queue (Kafka/NATS) and processes jobs concurrently. Learn worker pools, retries/backoff, and observability.",
    url: "https://youtu.be/9F2NBTtUr-U?si=LjctzrzLqr_cgYA1"
  },
  {
    id: "go-microservices-ecommerce",
    level: "Go — Industry Ready",
    title: "Fullstack microservices e-commerce app",
    description:
      "Build a multi-service e-commerce system with REST/gRPC APIs, databases, caching, Docker/K8s deployment, monitoring, and authentication. Learn full-stack Go patterns.",
    url: "https://youtu.be/3MPgkKCbhTo?si=CwCzYeSlB5cHNVyr"
  }
];

export default function Projects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            🧰 Go Project Roadmap
          </h2>
          <p className="mt-2 text-gray-600">
            From CLI apps to full microservices — real-world Go projects to master the language, concurrency, databases, and production deployment.
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
                Learn More ▶
              </a>
            </article>
          ))}
        </div>

        <footer className="mt-10 text-sm text-gray-500 text-center">
          Master Go. Build, scale, and deploy production-ready applications 🚀
        </footer>
      </div>
    </section>
  );
}
