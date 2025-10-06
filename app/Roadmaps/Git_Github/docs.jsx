// components/Docs.jsx
import React from "react";
import { ExternalLink } from "lucide-react";

const docsList = [
  {
    title: "Git — Official Documentation",
    description:
      "Comprehensive reference and man pages for all Git commands, internals, guides and tutorials.",
    url: "https://git-scm.com/docs",
    citation: "git-scm.com",
  },
  {
    title: "Git User Manual (Pro Git book)",
    description:
      "Readable guide and tutorial-style explanations of Git concepts, workflows, branching, and more (free book).",
    url: "https://git-scm.com/book/en/v2",
    citation: "Pro Git / git-scm.com",
  },
  {
    title: "GitHub Docs",
    description:
      "Official GitHub documentation covering usage, APIs, features, administration, workflows, and integrations.",
    url: "https://docs.github.com/",
    citation: "GitHub",
  },
  {
    title: "GitHub — About Git (GitHub Docs)",
    description:
      "Intro to version control, distributed systems, and how Git and GitHub relate, from the GitHub docs site.",
    url: "https://docs.github.com/en/get-started/using-git/about-git",
    citation: "GitHub Docs",
  },
  {
    title: "Chai aur Docs — Git & GitHub Tutorial",
    description:
      "A step-by-step tutorial in Hindi / bilingual style (“Chai aur Docs”) covering Git & GitHub basics, installation, branches etc.",
    url: "https://docs.chaicode.com/youtube/chai-aur-git/introduction/",
    citation: "Chai aur Docs",
  },
  {
    title: "Chai (Assertion Library) — Official Site & API",
    description:
      "Official site for Chai assertion library: guides, API reference, plugins, usage in Node.js/browser environments.",
    url: "https://www.chaijs.com/",
    citation: "Chai.js",
  },
];

export default function Docs() {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          📚 Documentation & Resources — Git, GitHub & Chai
        </h1>
        <p className="text-gray-600 mb-10">
          Essential documentation links for Git, GitHub, and Chai / Chai aur Docs that every learner should know.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {docsList.map((doc) => (
            <a
              key={doc.title}
              href={doc.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">
                  {doc.title}
                </h3>
                <ExternalLink
                  size={18}
                  className="text-gray-400 group-hover:text-blue-600"
                  aria-hidden="true"
                />
              </div>
              <p className="mt-3 text-sm text-gray-600">{doc.description}</p>
              <p className="mt-4 text-xs text-indigo-600 font-medium">
                {doc.citation}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
