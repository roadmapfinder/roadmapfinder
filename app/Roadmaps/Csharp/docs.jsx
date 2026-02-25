// components/CDocs.jsx
import React from "react";
import { ExternalLink } from "lucide-react";

const docsList = [
  {
    title: "Microsoft Learn / Docs (Official Documentation Hub)",
    description:
      "The central official documentation portal for Microsoft technologies. Includes tutorials, guides, learning paths, and references for .NET, C#, Azure, tooling, and more.",
    url: "https://learn.microsoft.com/",
    citation: "Microsoft Learn",
  },
  {
    title: "C# Official Documentation",
    description:
      "Comprehensive official guide to the C# language covering syntax, fundamentals, advanced features, best practices, and examples.",
    url: "https://learn.microsoft.com/dotnet/csharp/",
    citation: "Microsoft Docs – C#",
  },
  {
    title: "C# Language Reference & Specification",
    description:
      "Detailed language reference explaining C# keywords, operators, types, statements, and official language behavior. Essential for deep understanding.",
    url: "https://learn.microsoft.com/dotnet/csharp/language-reference/",
    citation: "Microsoft C# Language Reference",
  },
  {
    title: ".NET Platform Documentation",
    description:
      "Official documentation for the .NET platform, including runtime, SDK, CLI tools, libraries, configuration, deployment, and platform concepts.",
    url: "https://learn.microsoft.com/dotnet/",
    citation: ".NET Docs",
  },
  {
    title: ".NET API Reference",
    description:
      "Complete API reference for all .NET namespaces such as System.* and Microsoft.*. Used daily by professional developers.",
    url: "https://learn.microsoft.com/dotnet/api/",
    citation: ".NET API Browser",
  },
  {
    title: "ASP.NET Core Official Documentation",
    description:
      "Authoritative documentation for building web apps, REST APIs, Razor Pages, MVC apps, and real-time services using ASP.NET Core.",
    url: "https://learn.microsoft.com/aspnet/core/",
    citation: "ASP.NET Core Docs",
  },
  {
    title: "ASP.NET Core Web API Guides",
    description:
      "Step-by-step tutorials and best practices for building RESTful Web APIs using ASP.NET Core and C#.",
    url: "https://dotnet.microsoft.com/apps/aspnet/apis",
    citation: "ASP.NET Web API",
  },
  {
    title: "Entity Framework Core Documentation",
    description:
      "Official documentation for EF Core covering ORM concepts, migrations, LINQ queries, performance tuning, and database modeling.",
    url: "https://learn.microsoft.com/ef/",
    citation: "Entity Framework Core",
  },
  {
    title: ".NET CLI & Tooling Documentation",
    description:
      "Documentation for dotnet CLI commands such as build, run, test, publish, and project management workflows.",
    url: "https://learn.microsoft.com/dotnet/core/tools/",
    citation: ".NET CLI Docs",
  },
  {
    title: "Microsoft Learn – C# Learning Paths",
    description:
      "Interactive and structured learning paths for C#, from beginner fundamentals to advanced and professional-level topics.",
    url: "https://dotnet.microsoft.com/learn/csharp",
    citation: "Microsoft Learn C#",
  },
  {
    title: ".NET Learning Center",
    description:
      "Curated tutorials, videos, courses, and guides for learning .NET and building real-world applications.",
    url: "https://dotnet.microsoft.com/learn",
    citation: ".NET Learning Center",
  },
];

export default function CDocs() {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          📘 C# / .NET Official Documentation Resources
        </h1>
        <p className="text-gray-600 mb-10">
          Official and authoritative Microsoft documentation every C# and .NET
          learner must know — language references, platform docs, APIs, backend,
          data access, and tooling.
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