// components/NodeDocs.jsx
import React from "react";
import { ExternalLink } from "lucide-react";

const docsList = [
  {
    title: "Node.js Official Docs",
    description:
      "Comprehensive documentation covering all core modules, features, and APIs of Node.js.",
    url: "https://nodejs.org/en/docs/",
    citation: "Node.js Docs",
  },
  {
    title: "HTTP Module",
    description:
      "Learn how to create HTTP servers and handle requests and responses in Node.js.",
    url: "https://nodejs.org/api/http.html",
    citation: "Node.js Docs",
  },
  {
    title: "File System (fs) Module",
    description:
      "Understand how to interact with the file system, including reading and writing files.",
    url: "https://nodejs.org/api/fs.html",
    citation: "Node.js Docs",
  },
  {
    title: "Process Module",
    description:
      "Gain insights into the Node.js process, including environment variables and command-line arguments.",
    url: "https://nodejs.org/api/process.html",
    citation: "Node.js Docs",
  },
  {
    title: "Modules System",
    description:
      "Explore how Node.js handles modules, including CommonJS and ES Modules.",
    url: "https://nodejs.org/api/modules.html",
    citation: "Node.js Docs",
  },
  {
    title: "Node-API (N-API)",
    description:
      "Learn about building native addons for Node.js for performance-intensive tasks.",
    url: "https://nodejs.org/api/n-api.html",
    citation: "Node.js Docs",
  },
  {
    title: "CLI Options",
    description:
      "Understand the command-line options and tools available for Node.js applications.",
    url: "https://nodejs.org/api/cli.html",
    citation: "Node.js Docs",
  },
  {
    title: "All Node.js Modules",
    description:
      "A complete reference of all Node.js modules and their functionalities.",
    url: "https://nodejs.org/api/all.html",
    citation: "Node.js Docs",
  },
];

export default function NodeDocs() {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          📘 Official Node.js Documentation
        </h1>
        <p className="text-gray-600 mb-10">
          Official Node.js documentation every learner should follow — from core modules, HTTP, file system, processes, CLI tools, to building native addons.
        </p>

        {/* Cards Grid */}
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
