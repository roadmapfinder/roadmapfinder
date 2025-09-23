import React from "react";

const projects = [
  {
    id: "python-beginner-1",
    level: "Phase 1 — Beginner Projects",
    title: "Python Projects for Beginners – Master Problem-Solving!",
    description:
      "A collection of beginner-friendly Python projects to enhance problem-solving skills.",
    cta: "Watch tutorial",
    url: "https://www.youtube.com/watch?v=yVl_G-F7m8c"
  },
  {
    id: "python-beginner-2",
    level: "Phase 1 — Beginner Projects",
    title: "Python Beginner Projects!",
    description:
      "Playlist featuring practical beginner Python projects, including a calculator and a contact book.",
    cta: "Watch tutorial",
    url: "https://www.youtube.com/playlist?list=PLsFyHm8kJsx334faJF44Qe_WBiNEUSOrO"
  },
  {
    id: "python-intermediate-1",
    level: "Phase 2 — Intermediate Projects",
    title: "3 Mini Python Projects - For Intermediates",
    description:
      "Demonstrates three intermediate-level Python projects, ideal for learners with some experience.",
    cta: "Watch tutorial",
    url: "https://www.youtube.com/watch?v=txKBWtvV99Y"
  },
  {
    id: "python-intermediate-2",
    level: "Phase 2 — Intermediate Projects",
    title: "Intermediate Python Projects",
    description:
      "Playlist exploring intermediate Python projects, applying programming skills to practical scenarios.",
    cta: "Watch tutorial",
    url: "https://www.youtube.com/playlist?list=PLGFzROSPU9oUISEtQwJJAf5J8dLWcDLPz"
  },
  {
    id: "python-webdev-1",
    level: "Phase 3 — Web Development Projects",
    title: "Learn Python Backend Development by Building 3 Projects",
    description:
      "Guides you through building three full backend web applications using Python.",
    cta: "Watch tutorial",
    url: "https://www.youtube.com/watch?v=ftKiHCDVwfA"
  },
  {
    id: "python-webdev-2",
    level: "Phase 3 — Web Development Projects",
    title: "Python Web Development Simplified",
    description:
      "Playlist including tutorials on Python web development, covering frameworks like Flask and Django.",
    cta: "Watch tutorial",
    url: "https://www.youtube.com/playlist?list=PLqXS1b2lRpYQ2_3p195SqDnURRakJLwET"
  },
  {
    id: "python-automation-1",
    level: "Phase 4 — Automation & Scripting Projects",
    title: "Automate with Python – Full Course for Beginners",
    description:
      "Learn how to use Python to automate everyday tasks such as creating Excel reports and sending text messages.",
    cta: "Watch tutorial",
    url: "https://www.youtube.com/watch?v=PXMJ6FS7llk"
  },
  {
    id: "python-automation-2",
    level: "Phase 4 — Automation & Scripting Projects",
    title: "Python Automation Projects",
    description:
      "Playlist showcasing various Python automation projects, including desktop cleanup and file organization.",
    cta: "Watch tutorial",
    url: "https://www.youtube.com/playlist?list=PL5tVJtjoxKzqacJbIGbFbNTu7h2v4tsaF"
  },
  {
    id: "python-ds-1",
    level: "Phase 5 — Data & AI/ML Projects",
    title: "End-to-End Data Science Projects with Python",
    description:
      "Playlist exploring various topics in data science and machine learning through hands-on projects.",
    cta: "Watch tutorial",
    url: "https://www.youtube.com/playlist?list=PLTsu3dft3CWg69zbIVUQtFSRx_UV80OOg"
  },
  {
    id: "python-ds-2",
    level: "Phase 5 — Data & AI/ML Projects",
    title: "3 Python AI Projects for Beginners - Full Tutorial",
    description:
      "Learn how to build three Python AI projects designed for beginners.",
    cta: "Watch tutorial",
    url: "https://www.youtube.com/watch?v=XZdY15sHUa8"
  },
  {
    id: "python-advanced-1",
    level: "Phase 6 — Advanced/Industry-Ready Projects",
    title: "Advanced Projects in Python",
    description:
      "Playlist featuring advanced Python projects, including CCTV camera software and drowsiness detection systems.",
    cta: "Watch tutorial",
    url: "https://www.youtube.com/playlist?list=PLTUSGW0o2A2HDYJ5SWLa86OvriGtnw8My"
  },
  {
    id: "python-advanced-2",
    level: "Phase 6 — Advanced/Industry-Ready Projects",
    title: "Advanced Python Programming – Real-World Projects 2025",
    description:
      "Complete guide to building scalable, efficient, and production-ready Python applications.",
    cta: "Watch tutorial",
    url: "https://www.youtube.com/watch?v=scYxL7Qvdhc"
  }
];

export default function ProjectCards() {
  return (
    <section className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            🐍 Python Projects Path — Beginner → Industry-Ready
          </h2>
          <p className="mt-2 text-slate-600 max-w-2xl">
            Follow these Python projects and step-by-step YouTube tutorials to progress from beginner projects to advanced, industry-ready applications.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article
              key={p.id}
              className="group bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-transform transform hover:-translate-y-1"
              aria-labelledby={`${p.id}-title`}
            >
              <div className="flex items-start justify-between">
                <span className="inline-block text-xs font-medium bg-blue-50 text-indigo-700 px-2 py-1 rounded-full">
                  {p.level}
                </span>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-slate-400 hover:text-blue-600 transition"
                  aria-label={`Open tutorial for ${p.title}`}
                >
                  YouTube ▶
                </a>
              </div>

              <h3
                id={`${p.id}-title`}
                className="mt-4 text-lg font-semibold text-slate-900 group-hover:text-blue-600"
              >
                {p.title}
              </h3>

              <p className="mt-3 text-sm text-slate-600">{p.description}</p>

              <div className="mt-5 flex items-center justify-between">
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-blue-600 text-white px-4 py-2 text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                  {p.cta}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>

                <span className="text-xs text-slate-400">~20–60 mins</span>
              </div>
            </article>
          ))}
        </div>

        <footer className="mt-10 text-sm text-slate-500">
          Tip: Follow the projects in order, practice coding by yourself, and add extra features like dark mode, search filters, or integrations.
        </footer>
      </div>
    </section>
  );
}
