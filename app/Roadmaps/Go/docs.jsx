// components/Docs.jsx
import React from "react";
import { ExternalLink } from "lucide-react";

const docsList = [
  {
    title: "Go — Official Documentation",
    description:
      "The official starting point for all Go resources. Includes installation, tutorials, standard library, and the language specification.",
    url: "https://go.dev/doc/",
    citation: "go.dev",
  },
  {
    title: "Effective Go — Writing Idiomatic Go Code",
    description:
      "A must-read guide on writing clear, idiomatic, and efficient Go programs. Covers naming, interfaces, error handling, and best practices.",
    url: "https://go.dev/doc/effective_go",
    citation: "go.dev",
  },
  {
    title: "Go Packages (pkg.go.dev)",
    description:
      "The official reference site for the Go standard library and third-party packages. View documentation for any module directly from its import path.",
    url: "https://pkg.go.dev/",
    citation: "pkg.go.dev",
  },
  {
    title: "Go by Example",
    description:
      "Practical, annotated code snippets that demonstrate Go concepts such as goroutines, channels, structs, maps, and more.",
    url: "https://gobyexample.com/",
    citation: "gobyexample.com",
  },
  {
    title: "Tour of Go",
    description:
      "An interactive browser-based tutorial from the Go team covering syntax, functions, methods, interfaces, and concurrency.",
    url: "https://go.dev/tour/",
    citation: "go.dev",
  },
  {
    title: "Go Blog",
    description:
      "Official Go blog with in-depth articles on new features, best practices, performance improvements, and design decisions.",
    url: "https://go.dev/blog/",
    citation: "go.dev",
  },
  {
    title: "Go Language Specification",
    description:
      "The formal language specification defining syntax, semantics, and the Go type system. Essential for deep understanding.",
    url: "https://go.dev/ref/spec",
    citation: "go.dev",
  },
  {
    title: "Go Command Documentation",
    description:
      "Reference for the `go` tool — build, test, mod, run, vet, install, and more. The CLI every Go developer must master.",
    url: "https://pkg.go.dev/cmd/go",
    citation: "pkg.go.dev",
  },
  {
    title: "Go Modules Reference",
    description:
      "Detailed explanation of dependency management using Go Modules — replacing GOPATH-based workflows. Includes versioning and vendoring guides.",
    url: "https://go.dev/ref/mod",
    citation: "go.dev",
  },
  {
    title: "Gin Web Framework — Official Documentation",
    description:
      "Fast, minimalistic web framework for Go. Includes routing, middleware, JSON rendering, and example APIs.",
    url: "https://gin-gonic.com/docs/",
    citation: "Gin Web Framework",
  },
  {
    title: "GORM — Go ORM Library Documentation",
    description:
      "Comprehensive ORM for Go supporting MySQL, PostgreSQL, SQLite, and SQL Server. Includes migrations, hooks, and associations.",
    url: "https://gorm.io/docs/",
    citation: "gorm.io",
  },
  {
    title: "sqlc — Generate Type-Safe Go Code from SQL",
    description:
      "Official docs for sqlc, a code generator that turns SQL queries into type-safe Go code. Widely used in production for DB access.",
    url: "https://docs.sqlc.dev/",
    citation: "sqlc.dev",
  },
  {
    title: "Go Testing Package",
    description:
      "Official documentation for the Go testing framework. Learn about unit tests, benchmarks, fuzz tests, and table-driven testing.",
    url: "https://pkg.go.dev/testing",
    citation: "pkg.go.dev",
  },
  {
    title: "OpenTelemetry Go — Observability",
    description:
      "Documentation for integrating metrics, traces, and logs in Go applications using OpenTelemetry.",
    url: "https://opentelemetry.io/docs/instrumentation/go/",
    citation: "opentelemetry.io",
  },
  {
    title: "Go Modules Proxy & Checksum Database",
    description:
      "Explains Go’s module proxy and checksum database system for secure, reproducible builds.",
    url: "https://proxy.golang.org/",
    citation: "golang.org",
  },
  {
    title: "Docker Official Docs (for Go Deployment)",
    description:
      "How to containerize Go applications using multi-stage builds, environment variables, and distroless images.",
    url: "https://docs.docker.com/language/golang/",
    citation: "docs.docker.com",
  },
  {
    title: "Kubernetes — Go Client (client-go)",
    description:
      "Documentation for the official Go client used to interact with Kubernetes clusters. Commonly used in operators and controllers.",
    url: "https://pkg.go.dev/k8s.io/client-go",
    citation: "k8s.io/client-go",
  },
  {
    title: "Go Concurrency Patterns — Blog & Talks",
    description:
      "Official Go blog and GopherCon talks exploring concurrency patterns, pipelines, and goroutines best practices.",
    url: "https://go.dev/blog/pipelines",
    citation: "go.dev/blog",
  },
  {
    title: "Go DevDocs — Offline API Reference",
    description:
      "Fast, searchable, and offline-friendly reference for Go standard library and commands.",
    url: "https://devdocs.io/go/",
    citation: "devdocs.io",
  },
];

export default function Docs() {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          📘 Documentation & Resources — Go Language & Ecosystem
        </h1>
        <p className="text-gray-600 mb-10">
          Essential official documentation, API references, and trusted guides for learning Go and its ecosystem — from core language features to production deployment.
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
