// components/ApiDocs.jsx
import React from "react";
import { ExternalLink } from "lucide-react";

const docsList = [
  {
    title: "OpenAPI Specification (OAS)",
    description:
      "Standard format for describing HTTP/REST APIs — machine-readable in YAML or JSON. Learn how to design and document RESTful APIs effectively.",
    url: "https://learn.openapis.org/",
    citation: "OpenAPI Documentation",
  },
  {
    title: "Swagger Specification",
    description:
      "Official Swagger documentation — defines how to describe, produce, consume, and visualize RESTful web services.",
    url: "https://swagger.io/specification/",
    citation: "Swagger Docs",
  },
  {
    title: "OpenAPI Initiative",
    description:
      "The OpenAPI Initiative under the Linux Foundation maintains and evolves the OpenAPI Specification standard.",
    url: "https://openapis.org/",
    citation: "OpenAPI Initiative",
  },
  {
    title: "gRPC Documentation",
    description:
      "High-performance, open-source universal RPC framework that uses Protocol Buffers for defining services and message contracts.",
    url: "https://grpc.io/docs/",
    citation: "gRPC Docs",
  },
  {
    title: "Protocol Buffers (Protobuf)",
    description:
      "Language-agnostic data serialization and interface definition language used with gRPC for defining messages and RPC methods.",
    url: "https://grpc.io/docs/what-is-grpc/introduction/",
    citation: "Protocol Buffers Overview",
  },
  {
    title: "OpenTelemetry Documentation",
    description:
      "Vendor-neutral observability framework providing standard APIs for distributed tracing, metrics, and logging in microservices and APIs.",
    url: "https://opentelemetry.io/docs/",
    citation: "OpenTelemetry Docs",
  },
  {
    title: "OAuth 2.0 Framework",
    description:
      "Industry-standard protocol for authorization, enabling secure delegated access for web and API applications.",
    url: "https://oauth.net/2/",
    citation: "OAuth Community Site",
  },
  {
    title: "RFC 6749 — OAuth 2.0 Authorization Framework",
    description:
      "The official IETF RFC defining the OAuth 2.0 authorization flows, tokens, and roles for securing APIs and services.",
    url: "https://datatracker.ietf.org/doc/html/rfc6749",
    citation: "IETF Datatracker",
  },
];

export default function ApiDocs() {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          🔗 API Technologies — Official Documentation
        </h1>
        <p className="text-gray-600 mb-10">
          Official documentation for the most important API technologies and
          specifications every backend or API engineer should know — including
          OpenAPI, gRPC, OAuth, Protocol Buffers, and observability tools like
          OpenTelemetry.
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
