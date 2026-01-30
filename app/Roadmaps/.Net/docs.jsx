import React from "react";
import { ExternalLink } from "lucide-react";

const docsList = [
  {
    title: ".NET Official Documentation (Core Hub)",
    description:
      "The primary official documentation hub for .NET — covering runtime, SDK, libraries, CLI, architecture concepts, and platform fundamentals.",
    url: "https://learn.microsoft.com/dotnet/",
    citation: "Microsoft Official Docs",
  },
  {
    title: "C# Language Documentation",
    description:
      "Official C# language reference including syntax, OOP, async/await, LINQ, records, memory management, and modern C# features.",
    url: "https://learn.microsoft.com/dotnet/csharp/",
    citation: "Microsoft C# Docs",
  },
  {
    title: "ASP.NET Core Documentation",
    description:
      "Official documentation for building Web APIs, MVC apps, Razor Pages, Blazor, gRPC, SignalR, middleware, routing, and security.",
    url: "https://learn.microsoft.com/aspnet/core/",
    citation: "ASP.NET Core Docs",
  },
  {
    title: "Entity Framework Core Documentation",
    description:
      "Official ORM documentation for .NET — data modeling, migrations, LINQ queries, performance tuning, and database providers.",
    url: "https://learn.microsoft.com/ef/",
    citation: "EF Core Docs",
  },
  {
    title: ".NET API Browser (Class Library Reference)",
    description:
      "Complete reference for all .NET base class libraries — namespaces, classes, methods, and APIs used in real-world development.",
    url: "https://learn.microsoft.com/dotnet/api/",
    citation: ".NET API Reference",
  },
  {
    title: "Authentication & Authorization in ASP.NET Core",
    description:
      "Official security documentation covering JWT, ASP.NET Identity, OAuth, OpenID Connect, policies, roles, and claims.",
    url: "https://learn.microsoft.com/aspnet/core/security/",
    citation: "Microsoft Security Docs",
  },
  {
    title: ".NET Performance & Diagnostics",
    description:
      "Learn how to profile, optimize, and debug .NET applications — memory usage, async performance, logging, and diagnostics tools.",
    url: "https://learn.microsoft.com/dotnet/core/diagnostics/",
    citation: "Microsoft Performance Docs",
  },
  {
    title: "Azure for .NET Developers",
    description:
      "Official Azure documentation tailored for .NET developers — App Service, Azure SQL, Functions, Key Vault, CI/CD, and monitoring.",
    url: "https://learn.microsoft.com/dotnet/azure/",
    citation: "Azure .NET Docs",
  },
  {
    title: "Docker & Containers for .NET",
    description:
      "Official guide on containerizing .NET applications using Docker — images, Dockerfiles, development, and deployment workflows.",
    url: "https://learn.microsoft.com/dotnet/core/docker/",
    citation: "Microsoft Docker Docs",
  },
  {
    title: ".NET CLI Documentation",
    description:
      "Official reference for the dotnet CLI — project creation, builds, publishing, testing, package management, and automation.",
    url: "https://learn.microsoft.com/dotnet/core/tools/",
    citation: ".NET CLI Docs",
  },
  {
    title: ".NET Architecture & Design Guidelines",
    description:
      "Best practices for building scalable, maintainable .NET applications — Clean Architecture, microservices, and design principles.",
    url: "https://learn.microsoft.com/dotnet/architecture/",
    citation: "Microsoft Architecture Docs",
  },
  {
    title: "Microsoft Learn – .NET Learning Paths",
    description:
      "Official guided learning paths with hands-on exercises for C#, ASP.NET Core, Web APIs, cloud-native .NET, and backend development.",
    url: "https://learn.microsoft.com/training/dotnet/",
    citation: "Microsoft Learn",
  },
];

export default function DotNetDocs() {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          ⚙️ .NET Official Documentation
        </h1>

        <p className="text-gray-600 mb-10 max-w-3xl">
          Essential official Microsoft resources every .NET developer must know
          — from C# fundamentals and ASP.NET Core to databases, security,
          performance, cloud deployment, and system design.
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
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 leading-snug">
                  {doc.title}
                </h3>
                <ExternalLink
                  size={18}
                  className="text-gray-400 group-hover:text-indigo-600 shrink-0 mt-1"
                  aria-hidden="true"
                />
              </div>

              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
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
