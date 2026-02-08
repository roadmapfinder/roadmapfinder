"use client";
import React from "react";

const docs = [
  // ---- Python Core ----
  {
    id: "python",
    level: "Official",
    title: "Python Documentation",
    description:
      "The official Python docs covering the language reference, standard library, tutorials, and best practices.",
    cta: "Open Docs",
    url: "https://docs.python.org/3/"
  },
  {
    id: "pep",
    level: "Official",
    title: "Python Enhancement Proposals (PEPs)",
    description:
      "Authoritative design documents describing Python features, standards, and conventions like PEP 8.",
    cta: "Open Docs",
    url: "https://peps.python.org/"
  },

  // ---- Web Frameworks ----
  {
    id: "django",
    level: "Official",
    title: "Django Documentation",
    description:
      "Comprehensive Django documentation covering ORM, authentication, admin, middleware, and deployment.",
    cta: "Open Docs",
    url: "https://docs.djangoproject.com/"
  },
  {
    id: "django-rest",
    level: "Official",
    title: "Django REST Framework",
    description:
      "Official DRF docs for building powerful, secure, and scalable REST APIs with Django.",
    cta: "Open Docs",
    url: "https://www.django-rest-framework.org/"
  },
  {
    id: "flask",
    level: "Official",
    title: "Flask Documentation",
    description:
      "Flask official docs explaining routing, templates, extensions, and deployment fundamentals.",
    cta: "Open Docs",
    url: "https://flask.palletsprojects.com/"
  },
  {
    id: "fastapi",
    level: "Official",
    title: "FastAPI Documentation",
    description:
      "Modern, high-performance async web framework documentation with OpenAPI, OAuth2, and async support.",
    cta: "Open Docs",
    url: "https://fastapi.tiangolo.com/"
  },

  // ---- ASGI / WSGI ----
  {
    id: "starlette",
    level: "Official",
    title: "Starlette Documentation",
    description:
      "Lightweight ASGI framework that powers FastAPI. Essential for understanding async Python web apps.",
    cta: "Open Docs",
    url: "https://www.starlette.io/"
  },

  // ---- Data Validation ----
  {
    id: "pydantic",
    level: "Official",
    title: "Pydantic Documentation",
    description:
      "Data validation and settings management using Python type hints. Core to FastAPI.",
    cta: "Open Docs",
    url: "https://docs.pydantic.dev/"
  },

  // ---- Databases & ORM ----
  {
    id: "postgresql",
    level: "Official",
    title: "PostgreSQL Documentation",
    description:
      "Official PostgreSQL documentation covering SQL, indexing, performance, and administration.",
    cta: "Open Docs",
    url: "https://www.postgresql.org/docs/"
  },
  {
    id: "sqlalchemy",
    level: "Official",
    title: "SQLAlchemy Documentation",
    description:
      "The official ORM and SQL toolkit documentation used widely in Flask and FastAPI projects.",
    cta: "Open Docs",
    url: "https://docs.sqlalchemy.org/"
  },
  {
    id: "django-orm",
    level: "Official",
    title: "Django ORM Documentation",
    description:
      "Official Django ORM reference for models, queries, migrations, and database optimization.",
    cta: "Open Docs",
    url: "https://docs.djangoproject.com/en/stable/topics/db/"
  },
  {
    id: "redis",
    level: "Official",
    title: "Redis Documentation",
    description:
      "Official Redis docs for caching, sessions, queues, and high-performance data access.",
    cta: "Open Docs",
    url: "https://redis.io/docs/"
  },

  // ---- Background Tasks ----
  {
    id: "celery",
    level: "Official",
    title: "Celery Documentation",
    description:
      "Distributed task queue documentation for background jobs, retries, and async workflows.",
    cta: "Open Docs",
    url: "https://docs.celeryq.dev/"
  },

  // ---- Servers & Deployment ----
  {
    id: "gunicorn",
    level: "Official",
    title: "Gunicorn Documentation",
    description:
      "Production-grade WSGI server documentation commonly used with Django and Flask.",
    cta: "Open Docs",
    url: "https://docs.gunicorn.org/"
  },
  {
    id: "uvicorn",
    level: "Official",
    title: "Uvicorn Documentation",
    description:
      "Lightning-fast ASGI server documentation used with FastAPI and async frameworks.",
    cta: "Open Docs",
    url: "https://www.uvicorn.org/"
  },
  {
    id: "nginx",
    level: "Official",
    title: "NGINX Documentation",
    description:
      "Official NGINX docs for reverse proxying, load balancing, and serving Python web apps.",
    cta: "Open Docs",
    url: "https://nginx.org/en/docs/"
  },

  // ---- DevOps ----
  {
    id: "docker",
    level: "Official",
    title: "Docker Documentation",
    description:
      "Official Docker docs for containerizing, deploying, and scaling Python web applications.",
    cta: "Open Docs",
    url: "https://docs.docker.com/"
  },

  // ---- API Standards ----
  {
    id: "openapi",
    level: "Official",
    title: "OpenAPI Specification",
    description:
      "Official OpenAPI spec used for API documentation, contracts, and tooling.",
    cta: "Open Docs",
    url: "https://swagger.io/specification/"
  }
];

export default function DocsCards() {
  return (
    <section className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            🐍 Python Web Development — Official Documentation
          </h2>
          <p className="mt-2 text-slate-600 max-w-2xl">
            These are the official documentation sources every Python web
            developer must master to become industry-ready.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {docs.map((d) => (
            <article
              key={d.id}
              className="group bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-transform hover:-translate-y-1"
            >
              <span className="inline-block text-xs font-medium bg-blue-50 text-indigo-700 px-2 py-1 rounded-full">
                {d.level}
              </span>

              <h3 className="mt-4 text-lg font-semibold text-slate-900 group-hover:text-blue-600">
                {d.title}
              </h3>

              <p className="mt-3 text-sm text-slate-600">{d.description}</p>

              <div className="mt-5">
                <a
                  href={d.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-blue-600 text-white px-4 py-2 text-sm font-medium hover:bg-indigo-700"
                >
                  {d.cta} →
                </a>
              </div>
            </article>
          ))}
        </div>

        <footer className="mt-10 text-sm text-slate-500">
          Tip: Real Python web developers live inside official docs. Bookmark
          these and revisit them while building real projects.
        </footer>
      </div>
    </section>
  );
}
