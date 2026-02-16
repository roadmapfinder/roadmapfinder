// components/LaravelDocs.jsx
"use client";
import React from "react";
import { ExternalLink } from "lucide-react";

const docsList = [
  {
    title: "Laravel Official Documentation",
    description:
      "The primary and most important resource. Covers the entire Laravel framework including routing, controllers, Eloquent, security, testing, and deployment.",
    url: "https://laravel.com/docs",
    citation: "laravel.com/docs",
  },
  {
    title: "Laravel Installation & Setup",
    description:
      "Official guide for installing Laravel using Composer, Laravel Installer, Sail (Docker), and environment configuration.",
    url: "https://laravel.com/docs/installation",
    citation: "Installation Docs",
  },
  {
    title: "Routing & Controllers",
    description:
      "Learn how HTTP requests are handled using routes, controllers, route model binding, middleware, and RESTful patterns.",
    url: "https://laravel.com/docs/routing",
    citation: "Routing Docs",
  },
  {
    title: "Blade Templating Engine",
    description:
      "Official documentation for Blade: layouts, components, slots, directives, conditionals, loops, and rendering views.",
    url: "https://laravel.com/docs/blade",
    citation: "Blade Docs",
  },
  {
    title: "Database & Query Builder",
    description:
      "Covers database connections, raw queries, transactions, schema builder, indexing, and query optimization.",
    url: "https://laravel.com/docs/database",
    citation: "Database Docs",
  },
  {
    title: "Eloquent ORM",
    description:
      "Master Laravel’s ORM: models, relationships, eager loading, scopes, mutators, accessors, and soft deletes.",
    url: "https://laravel.com/docs/eloquent",
    citation: "Eloquent Docs",
  },
  {
    title: "Authentication",
    description:
      "Official guide for authentication systems including login, registration, password resets, guards, and providers.",
    url: "https://laravel.com/docs/authentication",
    citation: "Auth Docs",
  },
  {
    title: "Authorization (Gates & Policies)",
    description:
      "Learn how to protect resources using gates, policies, roles, permissions, and access control patterns.",
    url: "https://laravel.com/docs/authorization",
    citation: "Authorization Docs",
  },
  {
    title: "Validation",
    description:
      "Complete reference for request validation, form requests, custom rules, error handling, and best practices.",
    url: "https://laravel.com/docs/validation",
    citation: "Validation Docs",
  },
  {
    title: "Queues & Jobs",
    description:
      "Official documentation for background jobs, queue drivers, failed jobs, workers, and scaling async tasks.",
    url: "https://laravel.com/docs/queues",
    citation: "Queues Docs",
  },
  {
    title: "Caching",
    description:
      "Learn how to improve performance using cache drivers like Redis, Memcached, file cache, and tags.",
    url: "https://laravel.com/docs/cache",
    citation: "Cache Docs",
  },
  {
    title: "Testing",
    description:
      "Covers feature tests, unit tests, database testing, HTTP tests, mocking, and test-driven development in Laravel.",
    url: "https://laravel.com/docs/testing",
    citation: "Testing Docs",
  },
  {
    title: "Laravel Sanctum",
    description:
      "Official package for API authentication, SPA authentication, mobile tokens, and lightweight auth systems.",
    url: "https://laravel.com/docs/sanctum",
    citation: "Sanctum Docs",
  },
  {
    title: "Laravel Passport",
    description:
      "OAuth2 authentication server for advanced API authentication and third-party integrations.",
    url: "https://laravel.com/docs/passport",
    citation: "Passport Docs",
  },
  {
    title: "Laravel Horizon",
    description:
      "Dashboard and configuration system for monitoring Redis queues in production environments.",
    url: "https://laravel.com/docs/horizon",
    citation: "Horizon Docs",
  },
  {
    title: "Laravel Octane",
    description:
      "High-performance Laravel execution using Swoole or RoadRunner for low-latency applications.",
    url: "https://laravel.com/docs/octane",
    citation: "Octane Docs",
  },
  {
    title: "Laravel Cashier",
    description:
      "Subscription billing system for Stripe and Paddle with invoices, plans, trials, and webhooks.",
    url: "https://laravel.com/docs/cashier",
    citation: "Cashier Docs",
  },
  {
    title: "Laravel Sail",
    description:
      "Official Docker-based local development environment for Laravel applications.",
    url: "https://laravel.com/docs/sail",
    citation: "Sail Docs",
  },
];

export default function LaravelDocs() {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          🧱 Essential Laravel Documentation
        </h1>
        <p className="text-gray-600 mb-10">
          A curated list of official Laravel documentation every learner and
          professional must know — from core framework concepts to APIs,
          authentication, performance, and production tooling.
        </p>

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

              <p className="mt-3 text-sm text-gray-600">
                {doc.description}
              </p>

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
