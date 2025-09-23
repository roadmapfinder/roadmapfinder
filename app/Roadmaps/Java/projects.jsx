import React from "react";

const projects = [
  // ---------- BEGINNER PROJECTS ----------
  {
    id: "java-bank-management",
    level: "Java — Beginner",
    title: "Bank Management System",
    description:
      "A console-based application simulating basic banking operations like account creation, deposits, withdrawals, and balance inquiries.",
    url: "https://www.youtube.com/watch?v=wY0fUVH-8TE"
  },
  {
    id: "java-temp-converter",
    level: "Java — Beginner",
    title: "Temperature Converter",
    description:
      "A GUI application to convert temperatures between Celsius, Fahrenheit, and Kelvin.",
    url: "https://www.youtube.com/watch?v=CEG5qkRPqCU"
  },
  {
    id: "java-student-management",
    level: "Java — Beginner",
    title: "Student Management System",
    description:
      "A system to manage student records, including adding, updating, and deleting information.",
    url: "https://www.youtube.com/watch?v=_8nW0YYSpIY"
  },
  {
    id: "java-library-management",
    level: "Java — Beginner",
    title: "Library Management System",
    description:
      "An application to manage book inventories, issue/return books, and track due dates.",
    url: "https://www.youtube.com/watch?v=KtDcPQkHU7o"
  },
  {
    id: "java-inventory-management",
    level: "Java — Beginner",
    title: "Inventory Management System",
    description:
      "A system to track product stock, manage orders, and generate reports.",
    url: "https://www.youtube.com/watch?v=QoBzRvut0HA"
  },
  {
    id: "java-online-quiz",
    level: "Java — Beginner",
    title: "Online Quiz Application",
    description:
      "A web-based quiz application with multiple-choice questions, timers, and score tracking.",
    url: "https://www.youtube.com/watch?v=5P8lCgteYKQ"
  },
  {
    id: "java-ecommerce-website",
    level: "Java — Intermediate",
    title: "E-commerce Website",
    description:
      "A platform for users to browse products, add to cart, and make purchases.",
    url: "https://www.youtube.com/watch?v=m559BxR30ls"
  },
  {
    id: "java-weather-app",
    level: "Java — Intermediate",
    title: "Weather Forecasting Application",
    description:
      "An application to fetch and display weather data using APIs.",
    url: "https://www.youtube.com/watch?v=8ZcEYv2ezWc"
  }
];

export default function Projects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            🧑‍💻 Java Project Roadmap
          </h2>
          <p className="mt-2 text-gray-600">
            From beginner apps to intermediate projects — each project includes latest YouTube tutorials (Hindi & English, 2025).
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
          Start small, master the foundations, and scale up to advanced Java projects 🚀
        </footer>
      </div>
    </section>
  );
}
