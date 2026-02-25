// components/Projects.jsx
import React from "react";

const projects = [
  // Beginner Projects
  {
    id: "phase1-expense-tracker",
    level: "Beginner (0–2 months)",
    title: "Console Expense Tracker (C#)",
    description:
      "Build a console-based expense tracker to add, edit, delete, and list expenses with categories. Persist data using JSON files. Skills: C# basics, classes, collections, file I/O, exception handling.",
    url: "https://youtu.be/zxEGyrL_8r4?si=k1sMCma52rBQG97k",
  },
  {
    id: "phase1-student-management",
    level: "Beginner (0–2 months)",
    title: "Student Management System",
    description:
      "Manage students, courses, and grades. Calculate GPA and generate reports. Skills: OOP, LINQ basics, validation, clean code structure.",
    url: "https://youtu.be/mB9Yp36cp7U?si=Oq0RyBN4n0e6_uhx",
  },

  // Intermediate Projects
  {
    id: "phase2-library-system",
    level: "Intermediate (2–6 months)",
    title: "Library Management System",
    description:
      "Build a database-backed system to manage books, authors, members, and book issues. Skills: Entity Framework Core, SQL, CRUD operations, relationships.",
    url: "https://youtu.be/jR6MXHtC310?si=mmmWGZg3qEiE1jH2",
  },
  {
    id: "phase2-rest-api",
    level: "Intermediate (2–6 months)",
    title: "RESTful Web API",
    description:
      "Create a REST API with CRUD operations, validation, pagination, and proper HTTP responses. Skills: ASP.NET Core, middleware, dependency injection, REST principles.",
    url: "https://youtu.be/38GNKtclDdE?si=0aDmS9tuZPEiOGDH",
  },

  // Advanced Projects
  {
    id: "phase3-auth-system",
    level: "Advanced (6–12 months)",
    title: "Authentication & Authorization System",
    description:
      "Implement secure user authentication using JWT and role-based authorization. Skills: ASP.NET Core security, JWT, Identity, password hashing.",
    url: "https://youtu.be/V-S5JZJUvvU?si=jdWdsZ9cPiyIxFKP",
  },
  {
    id: "phase3-enterprise-backend",
    level: "Advanced (6–12 months)",
    title: "Enterprise-Grade Backend (Capstone)",
    description:
      "Design a scalable backend using Clean Architecture and SOLID principles. Add testing, logging, and containerization. Skills: Architecture, design patterns, unit testing, Docker.",
    url: "https://youtu.be/wfWxdh-_k_4?si=rzlD_TDXlUnDksZf",
  },
];

export default function Projects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            💻 C# / .NET Project Roadmap
          </h2>
          <p className="mt-2 text-gray-600">
            Step-by-step C# projects from beginner to industry-ready backend developer.
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
                View Tutorial ▶
              </a>
            </article>
          ))}
        </div>

        <footer className="mt-10 text-sm text-gray-500 text-center">
          Build these projects progressively. Focus on clean code, SOLID principles,
          security, testing, and scalable architecture to become industry-ready.
        </footer>
      </div>
    </section>
  );
}