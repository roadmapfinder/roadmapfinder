import React from "react";

const docs = [
  {
    id: "python-official",
    level: "Official",
    title: "Python 3.13.7 Documentation",
    description:
      "The official documentation for Python 3.13.7, including tutorials, library references, and language references.",
    cta: "Open Docs",
    url: "https://docs.python.org/3/"
  },
  {
    id: "python-beginner",
    level: "Official",
    title: "Python Beginner's Guide",
    description:
      "A comprehensive guide to help beginners get started with Python programming.",
    cta: "Open Docs",
    url: "https://www.python.org/about/gettingstarted/"
  },
  {
    id: "python-versions",
    level: "Official",
    title: "Python Documentation by Version",
    description:
      "Access documentation for different Python versions, useful for understanding changes and compatibility.",
    cta: "Open Docs",
    url: "https://www.python.org/doc/versions/"
  },
  {
    id: "realpython",
    level: "Popular Resource",
    title: "Real Python",
    description:
      "Offers tutorials, articles, and resources for Python developers at all levels.",
    cta: "Open Docs",
    url: "https://realpython.com/"
  },
  {
    id: "w3schools-python",
    level: "Popular Resource",
    title: "W3Schools Python Tutorial",
    description:
      "Provides a beginner-friendly introduction to Python programming with examples and exercises.",
    cta: "Open Docs",
    url: "https://www.w3schools.com/python/"
  },
  {
    id: "geeksforgeeks-python",
    level: "Popular Resource",
    title: "GeeksforGeeks Python Programming Language",
    description:
      "A vast collection of Python tutorials, examples, and interview questions.",
    cta: "Open Docs",
    url: "https://www.geeksforgeeks.org/python-programming-language/"
  },
  {
    id: "readthedocs",
    level: "Documentation Hosting",
    title: "Read the Docs",
    description:
      "A platform for hosting and browsing documentation for Python projects.",
    cta: "Open Docs",
    url: "https://readthedocs.org/"
  },
  {
    id: "sphinx",
    level: "Documentation Tool",
    title: "Sphinx Documentation Generator",
    description:
      "A tool that makes it easy to create intelligent and beautiful documentation for Python projects.",
    cta: "Open Docs",
    url: "https://www.sphinx-doc.org/"
  }
];

export default function DocsCards() {
  return (
    <section className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            🐍 Essential Python Documentation
          </h2>
          <p className="mt-2 text-slate-600 max-w-2xl">
            Explore official and popular documentation sites every Python learner must know.
            These cover Python basics, tutorials, libraries, tools, and project hosting platforms.
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
