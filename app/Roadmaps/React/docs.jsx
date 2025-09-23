import React from "react";

const docs = [
  {
    id: "react-core",
    level: "Core Library",
    title: "React (react.dev)",
    description:
      "Official React documentation, tutorials, API reference, modern patterns and latest features. Updated and beginner-friendly.",
    cta: "Open Docs",
    url: "https://react.dev"
  },
  {
    id: "react-router",
    level: "Routing",
    title: "React Router",
    description:
      "Official docs for routing with React, handling both v6 and v7 (framework-mode & library mode).",
    cta: "Open Docs",
    url: "https://reactrouter.com"
  },
  {
    id: "mdn",
    level: "Web Fundamentals",
    title: "MDN Web Docs",
    description:
      "Comprehensive resource for JavaScript, HTML, CSS, and React basics (not React-specific but essential web fundamentals).",
    cta: "Open Docs",
    url: "https://developer.mozilla.org"
  },
  {
    id: "tanstack-query",
    level: "Data Fetching",
    title: "TanStack Query (React Query)",
    description:
      "Guides and API reference for data fetching, caching, mutations, and testing with React.",
    cta: "Open Docs",
    url: "https://tanstack.com/query/latest/docs/react"
  },
  
  {
    id: "react-native",
    level: "Mobile",
    title: "React Native Docs",
    description:
      "For building mobile apps using React Native—covering setup, components, Snack player, and more.",
    cta: "Open Docs",
    url: "https://reactnative.dev/docs/getting-started"
  }
];

export default function DocsCards() {
  return (
    <section className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            🌐 Essential Documentation — React Ecosystem
          </h2>
          <p className="mt-2 text-slate-600 max-w-2xl">
            Explore the official and most popular documentation sites every React
            learner must know. These cover React, routing, data fetching, frameworks,
            mobile apps, and core web technologies.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {docs.map((d) => (
            <article
              key={d.id}
              className="group bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-transform transform hover:-translate-y-1"
              aria-labelledby={`${d.id}-title`}
            >
              <div className="flex items-start justify-between">
                <span className="inline-block text-xs font-medium bg-blue-50 text-indigo-700 px-2 py-1 rounded-full">
                  {d.level}
                </span>
                <a
                  href={d.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-slate-400 hover:text-blue-600 transition"
                  aria-label={`Open documentation for ${d.title}`}
                >
                  🔗 Docs
                </a>
              </div>

              <h3
                id={`${d.id}-title`}
                className="mt-4 text-lg font-semibold text-slate-900 group-hover:text-blue-600"
              >
                {d.title}
              </h3>

              <p className="mt-3 text-sm text-slate-600">{d.description}</p>

              <div className="mt-5 flex items-center justify-between">
                <a
                  href={d.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-blue-600 text-white px-4 py-2 text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                  {d.cta}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
                <span className="text-xs text-slate-400">Official Docs</span>
              </div>
            </article>
          ))}
        </div>

        <footer className="mt-10 text-sm text-slate-500">
          Tip: Bookmark these docs and revisit them often. Staying up to date with
          official resources ensures you follow best practices and latest standards.
        </footer>
      </div>
    </section>
  );
}
