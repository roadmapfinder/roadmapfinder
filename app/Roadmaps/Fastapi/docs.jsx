// components/Docs.jsx
"use client";
import React from "react";
import { ExternalLink } from "lucide-react";

const docsList = [
  {
    title: "FastAPI Official Documentation",
    description:
      "The complete official FastAPI guide covering tutorials, advanced topics, dependency injection, security, and production deployment.",
    url: "https://fastapi.tiangolo.com/",
    citation: "FastAPI Docs",
  },
  {
    title: "FastAPI GitHub Repository",
    description:
      "Official FastAPI source code, releases, discussions, and contribution guidelines.",
    url: "https://github.com/fastapi/fastapi",
    citation: "FastAPI GitHub",
  },
  {
    title: "Pydantic Documentation",
    description:
      "Official Pydantic documentation for data validation, parsing, and schema modeling used by FastAPI.",
    url: "https://docs.pydantic.dev/latest/",
    citation: "Pydantic Docs",
  },
  {
    title: "Starlette Documentation",
    description:
      "Official Starlette ASGI framework documentation that powers FastAPI routing, middleware, and WebSockets.",
    url: "https://www.starlette.io/",
    citation: "Starlette Docs",
  },
  {
    title: "Uvicorn Documentation",
    description:
      "Official Uvicorn ASGI server documentation for running FastAPI applications in development and production.",
    url: "https://www.uvicorn.org/",
    citation: "Uvicorn Docs",
  },
  {
    title: "SQLModel Documentation",
    description:
      "Official SQLModel ORM documentation designed by the FastAPI creator for SQL databases with FastAPI.",
    url: "https://sqlmodel.tiangolo.com/",
    citation: "SQLModel Docs",
  },
  {
    title: "SQLAlchemy ORM",
    description:
      "Official SQLAlchemy documentation for advanced relational database modeling and queries in FastAPI.",
    url: "https://docs.sqlalchemy.org/",
    citation: "SQLAlchemy Docs",
  },
  {
    title: "Alembic Migrations",
    description:
      "Official Alembic documentation for managing database schema migrations in FastAPI projects.",
    url: "https://alembic.sqlalchemy.org/",
    citation: "Alembic Docs",
  },
  {
    title: "OpenAPI Specification",
    description:
      "Official OpenAPI specification documentation that FastAPI uses to generate Swagger and ReDoc.",
    url: "https://spec.openapis.org/",
    citation: "OpenAPI Spec",
  },
  {
    title: "Swagger UI",
    description:
      "Official Swagger UI documentation for interactive API documentation used in FastAPI.",
    url: "https://swagger.io/tools/swagger-ui/",
    citation: "Swagger UI Docs",
  },
  {
    title: "ReDoc Documentation",
    description:
      "Official ReDoc API documentation renderer used by FastAPI for alternative API docs view.",
    url: "https://redocly.com/docs/redoc/",
    citation: "ReDoc Docs",
  },
  {
    title: "PyTest",
    description:
      "Official PyTest documentation for testing FastAPI applications with unit and integration tests.",
    url: "https://docs.pytest.org/",
    citation: "PyTest Docs",
  },
  {
    title: "HTTPX",
    description:
      "Official HTTPX async HTTP client documentation used for FastAPI testing and API calls.",
    url: "https://www.python-httpx.org/",
    citation: "HTTPX Docs",
  },
  {
    title: "Docker Documentation",
    description:
      "Official Docker documentation for containerizing FastAPI applications.",
    url: "https://docs.docker.com/",
    citation: "Docker Docs",
  },
  {
    title: "Gunicorn",
    description:
      "Official Gunicorn documentation for running FastAPI with Uvicorn workers in production.",
    url: "https://docs.gunicorn.org/",
    citation: "Gunicorn Docs",
  },
  {
    title: "Prometheus",
    description:
      "Official Prometheus documentation for monitoring FastAPI application metrics.",
    url: "https://prometheus.io/docs/",
    citation: "Prometheus Docs",
  },
  {
    title: "Sentry",
    description:
      "Official Sentry documentation for FastAPI error tracking and observability.",
    url: "https://docs.sentry.io/",
    citation: "Sentry Docs",
  },
];

export default function Docs() {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          ⚡ FastAPI Developer Documentation
        </h1>
        <p className="text-gray-600 mb-10">
          Essential official resources for mastering FastAPI backend development
          from beginner to industry-ready production systems.
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
