// components/Projects.jsx
import React from "react";

const projects = [
  // 🌱 Programming Projects
  {
    id: "programming-calculator-cli",
    level: "Phase 1 — Beginner",
    title: "Calculator & CLI Tools",
    description:
      "Build a console-based calculator (arithmetic, factorial, percentage). Extend with CLI tools for text processing (word/line count). Focus on Python basics, functions, control flow, and modularity.",
    url: "https://youtu.be/cZLu3HhBwe4?si=ZVOHTqXd4Ey7mAJd"
  },
  {
    id: "programming-number-guess",
    level: "Phase 1 — Beginner → Intermediate",
    title: "Number Guessing Game",
    description:
      "Create a terminal-based game where the user guesses a number with hints for high/low guesses. Focus on loops, conditionals, random module, and input handling.",
    url: "https://youtu.be/QXX2ySfwEBM?si=VE33hltAXXW85wA7"
  },
  {
    id: "programming-budget-tracker",
    level: "Phase 2 — Intermediate",
    title: "Personal Budget Tracker",
    description:
      "Track income and expenses, generate monthly reports, and save in CSV/JSON. Focus on file handling, OOP, and basic data visualization.",
    url: "https://youtu.be/HTD86h69PtE?si=_8_VIT9aSyXxfJss"
  },


  // 🚀 Web Development Projects
  {
    id: "web-portfolio-blog",
    level: "Phase 2 — Intermediate",
    title: "Portfolio / Blog Website",
    description:
      "Build a Flask/Django app with user accounts, blog posts, and comments. Learn routing, templates, databases, and CRUD operations.",
    url: "https://youtu.be/0U9-KUx0SD8?si=Yl9DEW55d644_kqI"
  },
  {
    id: "web-task-manager",
    level: "Phase 2 — Intermediate → Advanced",
    title: "Task Management / To-Do App",
    description:
      "Create tasks with priorities, mark as done, and filter/search. Focus on backend logic, REST API endpoints, database integration, and authentication.",
    url: "https://youtu.be/TzlcavuwNvo?si=6XEtVkqr3NW_eT8H"
  },
  {
    id: "web-mini-ecommerce",
    level: "Phase 3 — Advanced",
    title: "Mini E-commerce App",
    description:
      "Build product catalog, cart, mock checkout, user authentication, and admin panel. Covers full-stack web development, deployment, and database design.",
    url: "https://youtu.be/jXFPIB40J4s?si=e0z5dR9L5PCfEBnx"
  },

  // 🏗️ Automation & Scraping Projects
  {
    id: "automation-web-scraper",
    level: "Phase 1 — Beginner → Intermediate",
    title: "Web Scraper & Data Extractor",
    description:
      "Scrape product info (title, price, rating) from websites. Save data to CSV/Excel and optionally send email notifications for price drops. Focus on requests, BeautifulSoup, pandas.",
    url: "https://youtu.be/1227R6KY8Ts?si=XC6-S5KHBzjryde_"
  },
  {
    id: "automation-scripts",
    level: "Phase 2 — Intermediate",
    title: "Automation Scripts",
    description:
      "Automate tasks like renaming files, moving folders, or auto-filling forms. Focus on os, shutil, pyautogui, and scripting efficiency.",
    url: "https://youtu.be/PXMJ6FS7llk?si=Hrx-eQWEXbDUrKUD"
  },
  {
    id: "automation-social-scraper",
    level: "Phase 3 — Advanced",
    title: "Instagram / Twitter Data Scraper",
    description:
      "Scrape posts, likes, and comments for analytics or research. Focus on selenium, APIs, JSON parsing, and handling rate limits.",
    url: "https://youtu.be/8fFf0XE7nuQ?si=lrfrMlBadWuuo8km"
  },
];

export default function Projects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            🎯 Python Project Roadmap
          </h2>
          <p className="mt-2 text-gray-600">
            Build projects step by step across programming, web development, and automation/scraping to become industry-ready.
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
          Follow the sequence, practice deeply, and polish 2–3 projects for your portfolio.
        </footer>
      </div>
    </section>
  );
}
