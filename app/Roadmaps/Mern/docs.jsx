import React from "react";
import { ExternalLink } from "lucide-react";

const docsList = [
  {
    title: "MongoDB — Official Documentation",
    description:
      "Comprehensive guide covering CRUD, aggregation, indexing, schema design, and MongoDB Atlas cloud services.",
    url: "https://www.mongodb.com/docs/",
    citation: "MongoDB Docs",
  },
  {
    title: "MongoDB — Node.js Driver (MongoDB with Node.js)",
    description:
      "Official Node.js driver reference and examples for connecting Node/Express apps to MongoDB.",
    url: "https://www.mongodb.com/docs/drivers/node/current/",
    citation: "MongoDB Node Driver",
  },
  {
    title: "MongoDB Atlas — Cloud Database",
    description:
      "Managed MongoDB in the cloud: cluster provisioning, security, backups, and Atlas-specific docs and tutorials.",
    url: "https://www.mongodb.com/cloud/atlas",
    citation: "MongoDB Atlas",
  },
  {
    title: "Node.js — Official Documentation",
    description:
      "Core runtime docs for Node.js including built-in modules, APIs, streams, and best practices for server-side JavaScript.",
    url: "https://nodejs.org/en/docs/",
    citation: "Node.js Docs",
  },
  {
    title: "Express.js — Official Documentation",
    description:
      "Minimal and flexible Node.js web framework docs covering routing, middleware, request/response utilities, and examples.",
    url: "https://expressjs.com/",
    citation: "Express",
  },
  {
    title: "React — Official Documentation",
    description:
      "The latest official React docs: fundamentals, hooks, concurrent features, and the recommended learning path for building UIs.",
    url: "https://react.dev/",
    citation: "React",
  },
  {
    title: "React Router — Official Documentation",
    description:
      "Routing for React applications: nested routes, data routers, and navigation patterns used in production apps.",
    url: "https://reactrouter.com/",
    citation: "React Router",
  },
  {
    title: "Redux Toolkit — Official Documentation",
    description:
      "The recommended, opinionated approach to Redux for predictable state management in medium-to-large React apps.",
    url: "https://redux-toolkit.js.org/",
    citation: "Redux Toolkit",
  },
  {
    title: "Mongoose — Official Documentation",
    description:
      "Mongoose ODM docs for defining schemas, validation, middleware (hooks), population, and working with MongoDB in Node.js.",
    url: "https://mongoosejs.com/docs/",
    citation: "Mongoose",
  },
];

export default function Docs() {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">📚 MERN Stack Documentation</h1>
        <p className="text-gray-600 mb-10">
          Official and popular documentation sites every MERN learner should know —
          core runtime, framework, database, drivers, and cloud docs.
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

              <p className="mt-4 text-xs text-indigo-600 font-medium">{doc.citation}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
