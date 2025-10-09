import React from "react";

const docs = [
  {
    id: "ts-lang",
    level: "Official",
    title: "TypeScript Official Docs",
    description:
      "The main TypeScript documentation site: handbook, tutorials, and guides.",
    cta: "Open Docs",
    url: "https://www.typescriptlang.org/docs/"
  },
  {
    id: "ts-handbook",
    level: "Official",
    title: "TypeScript Handbook",
    description:
      "In-depth handbook for TypeScript: types, interfaces, generics, type system design.",
    cta: "Open Handbook",
    url: "https://www.typescriptlang.org/docs/handbook/intro.html"
  },
  {
    id: "tsconfig",
    level: "Official",
    title: "TSConfig Reference",
    description:
      "Comprehensive reference of all compiler options and configuration flags.",
    cta: "Open TSConfig",
    url: "https://www.typescriptlang.org/tsconfig/"
  },
  {
    id: "ts-react",
    level: "Official",
    title: "TypeScript + React",
    description:
      "Guide to use TypeScript with React: typing props, events, JSX, etc.",
    cta: "Open Guide",
    url: "https://www.typescriptlang.org/docs/handbook/react.html"
  },
  {
    id: "release-notes",
    level: "Official",
    title: "TypeScript Release Notes",
    description:
      "Changelog and new features across TypeScript versions.",
    cta: "Open Release Notes",
    url: "https://www.typescriptlang.org/docs/handbook/release-notes/overview.html"
  }
];

export default function DocsCards() {
  return (
    <section className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            📘 Essential TypeScript Documentation
          </h2>
          <p className="mt-2 text-slate-600 max-w-2xl">
            Explore the official TypeScript resources every learner should know:
            core docs, handbook, config, React integration, and release notes.
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
                <span className="text-xs text-slate-400">Reference</span>
              </div>
            </article>
          ))}
        </div>

        <footer className="mt-10 text-sm text-slate-500">
          Tip: Bookmark these resources and revisit them often. Mastering TypeScript means
          staying current with the language, compiler, and ecosystem.
        </footer>
      </div>
    </section>
  );
}
