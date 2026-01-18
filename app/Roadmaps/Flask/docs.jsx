// components/Docs.jsx
"use client";
import React from "react";
import { ExternalLink } from "lucide-react";

const docsList = [
  {
    title: "Flask Official Documentation",
    description:
      "The definitive guide to Flask framework, including tutorials, API references, patterns, and deployment best practices.",
    url: "https://flask.palletsprojects.com/",
    citation: "Flask Docs",
  },
  {
    title: "Werkzeug Documentation",
    description:
      "Official documentation for Werkzeug, the WSGI utility library that powers Flask’s request and response handling.",
    url: "https://werkzeug.palletsprojects.com/",
    citation: "Werkzeug Docs",
  },
  {
    title: "Jinja2 Template Engine",
    description:
      "Complete reference for Jinja2 templating syntax, filters, inheritance, macros, and advanced template features.",
    url: "https://jinja.palletsprojects.com/",
    citation: "Jinja2 Docs",
  },
  {
    title: "Click CLI Framework",
    description:
      "Official documentation for Click, used by Flask for building command-line interfaces.",
    url: "https://click.palletsprojects.com/",
    citation: "Click Docs",
  },
  {
    title: "Flask-SQLAlchemy",
    description:
      "Integration guide for using SQLAlchemy ORM with Flask applications.",
    url: "https://flask-sqlalchemy.readthedocs.io/",
    citation: "Flask-SQLAlchemy Docs",
  },
  {
    title: "SQLAlchemy ORM",
    description:
      "Official SQLAlchemy ORM documentation for advanced database modeling and queries.",
    url: "https://docs.sqlalchemy.org/",
    citation: "SQLAlchemy Docs",
  },
  {
    title: "Flask-Migrate",
    description:
      "Database migration documentation using Alembic with Flask applications.",
    url: "https://flask-migrate.readthedocs.io/",
    citation: "Flask-Migrate Docs",
  },
  {
    title: "Alembic",
    description:
      "Official Alembic database migration tool documentation.",
    url: "https://alembic.sqlalchemy.org/",
    citation: "Alembic Docs",
  },
  {
    title: "Flask-Login",
    description:
      "User session management, authentication, and login handling for Flask apps.",
    url: "https://flask-login.readthedocs.io/",
    citation: "Flask-Login Docs",
  },
  {
    title: "Flask-JWT-Extended",
    description:
      "JWT authentication and authorization documentation for Flask REST APIs.",
    url: "https://flask-jwt-extended.readthedocs.io/",
    citation: "Flask-JWT Docs",
  },
  {
    title: "Authlib OAuth",
    description:
      "OAuth and OpenID Connect integration library commonly used with Flask.",
    url: "https://docs.authlib.org/",
    citation: "Authlib Docs",
  },
  {
    title: "Flask-RESTX",
    description:
      "REST API framework for Flask with Swagger/OpenAPI documentation support.",
    url: "https://flask-restx.readthedocs.io/",
    citation: "Flask-RESTX Docs",
  },
  {
    title: "Marshmallow",
    description:
      "Serialization and validation library for Python objects and Flask APIs.",
    url: "https://marshmallow.readthedocs.io/",
    citation: "Marshmallow Docs",
  },
  {
    title: "Flask-WTF",
    description:
      "WTForms integration for Flask for form handling and validation.",
    url: "https://flask-wtf.readthedocs.io/",
    citation: "Flask-WTF Docs",
  },
  {
    title: "Celery",
    description:
      "Distributed task queue system used for background jobs in Flask applications.",
    url: "https://docs.celeryq.dev/",
    citation: "Celery Docs",
  },
  {
    title: "PyTest",
    description:
      "Official testing framework documentation for writing unit and integration tests.",
    url: "https://docs.pytest.org/",
    citation: "PyTest Docs",
  },
  {
    title: "Docker Documentation",
    description:
      "Official Docker documentation for containerizing Flask applications.",
    url: "https://docs.docker.com/",
    citation: "Docker Docs",
  },
  {
    title: "Gunicorn",
    description:
      "WSGI HTTP server documentation for deploying Flask applications in production.",
    url: "https://docs.gunicorn.org/",
    citation: "Gunicorn Docs",
  },
];

export default function Docs() {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          📘 Flask Developer Documentation
        </h1>
        <p className="text-gray-600 mb-10">
          Essential official resources for mastering Flask backend development,
          from fundamentals to enterprise production systems.
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
