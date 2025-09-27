// components/Projects.jsx
import React from "react";

const projects = [
  {
    id: "phase1-todo-cli",
    level: "Phase 1 — Beginner",
    title: "CLI To-Do App",
    description:
      "Build a command-line To-Do app with CRUD operations. Store tasks in JSON or CSV files. Learn Rust structs, enums, Vec, file I/O, and serde for data serialization.",
    url: "https://youtu.be/v0uJtBdZwnA?si=cEdJfuTNHvaUJatn", // Example resource; replace with your repo/tutorial
  },
  {
    id: "phase1-guessing-game",
    level: "Phase 1 — Beginner",
    title: "Guessing Game",
    description:
      "Create a random number guessing game with CLI input. Practice loops, conditionals, rand crate, and error handling in Rust.",
    url: "https://youtu.be/H0xBSbnQYds?si=K7mzZ_6TYQKk_zo3",
  },
  {
    id: "phase1-calculator",
    level: "Phase 1 — Beginner",
    title: "Simple Calculator",
    description:
      "Implement a CLI calculator supporting basic arithmetic operations. Learn functions, pattern matching, and enums.",
    url: "https://youtu.be/Z5WTOcOhEWY?si=BcY07SNmwUpntew0",
  },
  {
    id: "phase2-text-adventure",
    level: "Phase 2 — Intermediate",
    title: "Text-Based Adventure Game",
    description:
      "Build an interactive story game with branching choices. Practice enums, structs, pattern matching, and modular code organization.",
    url: "https://youtu.be/nQ5q_k6Ro0s?si=yY1-qhxPBmpzhGIH",
  },
  {
    id: "phase2-csv-json-parser",
    level: "Phase 2 — Intermediate",
    title: "CSV/JSON Parser",
    description:
      "Parse and summarize CSV or JSON files. Learn file I/O, iterators, error handling, and serialization/deserialization using serde.",
    url: "https://youtu.be/9w3rVqsdLRE?si=QTEwDzIdFENEROCS",
  },
  {
    id: "phase2-chat-cli",
    level: "Phase 2 — Intermediate",
    title: "Command-Line Chat App (Local)",
    description:
      "Simulate a local chat system using TCP sockets. Gain experience with std::net, multithreading, Arc, and Mutex.",
    url: "https://youtu.be/ogN_mBkWu7o?si=HFEGCpb-ubV0vK78",
  },
  {
    id: "phase3-async-http-client",
    level: "Phase 3 — Advanced",
    title: "Async HTTP Client",
    description:
      "Fetch data from multiple APIs concurrently using async/await. Learn tokio, reqwest, and asynchronous programming in Rust.",
    url: "https://youtu.be/E2qnMh3W7TM?si=Yn17QJhJ-lIMy15f",
  },
  {
    id: "phase3-rest-api",
    level: "Phase 3 — Advanced",
    title: "REST API Backend",
    description:
      "Build a blog or todo REST API using Actix Web or Rocket. Learn async Rust, database integration, and web frameworks.",
    url: "https://youtu.be/7RlVM0D4CEA?si=REfkx6h0TtzIvkFm",
  },
  {
    id: "phase3-file-encryption",
    level: "Phase 3 — Advanced / Industry-Ready",
    title: "Custom File Encryption Tool",
    description:
      "Create a CLI tool to encrypt and decrypt files. Gain experience with file I/O, Rust crypto libraries, and error handling.",
    url: "https://youtu.be/ZQV_zGBW7dM?si=3-w6pyEKKl1ubYjZ",
  },
];

export default function Projects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            ⚡ Rust Project Roadmap
          </h2>
          <p className="mt-2 text-gray-600">
            Step through beginner to industry-ready Rust projects. Build, code along, and strengthen your portfolio with practical applications.
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
          Follow the sequence, implement features step by step, and showcase your top Rust projects in a polished portfolio.
        </footer>
      </div>
    </section>
  );
}
