// components/Docs.jsx
import React from "react";
import { ExternalLink } from "lucide-react";

const docsList = [
  {
    title: "Django Official Documentation",
    description:
      "Comprehensive and authoritative documentation for Django, covering installation, models, views, templates, admin, and deployment.",
    url: "https://docs.djangoproject.com/en/5.2/",
    citation: "Django Docs",
  },
  {
    title: "Django Getting Started",
    description:
      "Official step-by-step tutorial introducing Django basics like projects, apps, templates, and models.",
    url: "https://docs.djangoproject.com/en/5.2/intro/tutorial01/",
    citation: "Django Tutorial",
  },
  {
    title: "Django REST Framework (DRF)",
    description:
      "Official documentation for Django REST Framework covering serializers, viewsets, authentication, and API best practices.",
    url: "https://www.django-rest-framework.org/",
    citation: "DRF Docs",
  },
  {
    title: "Django Channels Documentation",
    description:
      "Learn to build real-time applications using Django Channels for WebSockets, background tasks, and async support.",
    url: "https://channels.readthedocs.io/",
    citation: "Channels Docs",
  },
  {
    title: "ASGI Specification",
    description:
      "Official ASGI documentation — the standard interface between async Python web servers and applications, used by Django.",
    url: "https://asgi.readthedocs.io/",
    citation: "ASGI Docs",
  },
  {
    title: "Django Async Support",
    description:
      "Learn about Django’s asynchronous capabilities, including async views, middleware, and ORM considerations.",
    url: "https://docs.djangoproject.com/en/5.2/topics/async/",
    citation: "Async Docs",
  },
  {
    title: "Django ORM Documentation",
    description:
      "Comprehensive guide to Django’s Object Relational Mapper (ORM) for working with databases using Python objects.",
    url: "https://docs.djangoproject.com/en/5.2/topics/db/",
    citation: "ORM Docs",
  },
  {
    title: "Django Model Reference",
    description:
      "Detailed reference for defining and managing database models, fields, queries, and migrations in Django.",
    url: "https://docs.djangoproject.com/en/5.2/ref/models/",
    citation: "Model Reference",
  },
  {
    title: "Django Authentication System",
    description:
      "Official documentation for Django’s built-in user authentication, permissions, and session management system.",
    url: "https://docs.djangoproject.com/en/5.2/topics/auth/",
    citation: "Auth Docs",
  },
  {
    title: "Django Forms and Validation",
    description:
      "Learn about Django Forms, ModelForms, validation, and secure user input handling.",
    url: "https://docs.djangoproject.com/en/5.2/topics/forms/",
    citation: "Forms Docs",
  },
  {
    title: "Django Templates",
    description:
      "Detailed guide to Django’s templating system for dynamic HTML rendering and context management.",
    url: "https://docs.djangoproject.com/en/5.2/topics/templates/",
    citation: "Templates Docs",
  },
  {
    title: "Django Caching Framework",
    description:
      "Official documentation for Django caching, covering view caching, template fragment caching, and backend configuration.",
    url: "https://docs.djangoproject.com/en/5.2/topics/cache/",
    citation: "Cache Docs",
  },
  {
    title: "Django Security Documentation",
    description:
      "Covers Django’s built-in protections against common vulnerabilities such as CSRF, XSS, and SQL injection.",
    url: "https://docs.djangoproject.com/en/5.2/topics/security/",
    citation: "Security Docs",
  },
  {
    title: "Django Testing Framework",
    description:
      "Learn to write and run automated tests for Django projects using its built-in testing tools.",
    url: "https://docs.djangoproject.com/en/5.2/topics/testing/",
    citation: "Testing Docs",
  },
  {
    title: "Django Admin Site",
    description:
      "Official documentation for customizing Django’s built-in admin interface to manage data models.",
    url: "https://docs.djangoproject.com/en/5.2/ref/contrib/admin/",
    citation: "Admin Docs",
  },
  {
    title: "Django Deployment Checklist",
    description:
      "Security-focused checklist for deploying Django applications safely to production environments.",
    url: "https://docs.djangoproject.com/en/5.2/howto/deployment/checklist/",
    citation: "Deployment Docs",
  },
  {
    title: "Django Email Handling",
    description:
      "Covers Django’s email utilities, backend configuration, and sending emails securely.",
    url: "https://docs.djangoproject.com/en/5.2/topics/email/",
    citation: "Email Docs",
  },
  {
    title: "Django Internationalization (i18n)",
    description:
      "Official guide to translating and localizing Django applications for multiple languages.",
    url: "https://docs.djangoproject.com/en/5.2/topics/i18n/",
    citation: "i18n Docs",
  },
  {
    title: "Django Middleware",
    description:
      "Explains Django middleware architecture, order of execution, and custom middleware creation.",
    url: "https://docs.djangoproject.com/en/5.2/topics/http/middleware/",
    citation: "Middleware Docs",
  },
  {
    title: "Celery Documentation",
    description:
      "Official Celery docs — task queue and asynchronous job processing framework commonly integrated with Django.",
    url: "https://docs.celeryq.dev/en/stable/",
    citation: "Celery Docs",
  },
  {
    title: "Redis Documentation",
    description:
      "Official Redis documentation for caching, message brokering, and session storage with Django.",
    url: "https://redis.io/docs/",
    citation: "Redis Docs",
  },
  {
    title: "Graphene-Django Documentation",
    description:
      "Official docs for integrating GraphQL APIs with Django using Graphene.",
    url: "https://docs.graphene-python.org/projects/django/en/latest/",
    citation: "Graphene-Django Docs",
  },
  {
    title: "Django Debug Toolbar",
    description:
      "Documentation for Django Debug Toolbar, a debugging tool for inspecting database queries, cache usage, and performance.",
    url: "https://django-debug-toolbar.readthedocs.io/",
    citation: "Debug Toolbar Docs",
  },
  {
    title: "Django Extensions",
    description:
      "Docs for Django Extensions package — adds management commands and development utilities.",
    url: "https://django-extensions.readthedocs.io/",
    citation: "Django Extensions Docs",
  },
];

export default function Docs() {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          📘 Django Documentation Resources
        </h1>
        <p className="text-gray-600 mb-10">
          Official documentation for Django and its core ecosystem — essential
          for mastering backend development, APIs, async processing, and
          production deployment.
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
