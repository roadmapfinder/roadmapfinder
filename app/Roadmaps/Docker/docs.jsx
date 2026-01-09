// components/Docs.jsx
"use client";
import React from "react";
import { ExternalLink } from "lucide-react";

const docsList = [
  {
    title: "Docker Official Documentation",
    description:
      "The primary and authoritative source for Docker. Covers core concepts, architecture, containers, images, networking, volumes, security, and production best practices.",
    url: "https://docs.docker.com/",
    citation: "Docker Docs",
  },
  {
    title: "Docker Get Started Guide",
    description:
      "Official beginner-friendly Docker guide explaining containers, images, Dockerfiles, and hands-on examples to build and run your first containerized applications.",
    url: "https://docs.docker.com/get-started/",
    citation: "Docker Get Started",
  },
  {
    title: "Docker Engine Documentation",
    description:
      "Deep dive into Docker Engine including installation, configuration, daemon behavior, storage drivers, logging, and runtime internals.",
    url: "https://docs.docker.com/engine/",
    citation: "Docker Engine Docs",
  },
  {
    title: "Docker Build & Dockerfile Reference",
    description:
      "Official documentation for Docker builds including Dockerfile syntax, multi-stage builds, build cache optimization, and BuildKit features.",
    url: "https://docs.docker.com/build/",
    citation: "Docker Build Docs",
  },
  {
    title: "Docker Compose Documentation",
    description:
      "Complete reference for Docker Compose used to define and manage multi-container applications using docker-compose.yml files.",
    url: "https://docs.docker.com/compose/",
    citation: "Docker Compose Docs",
  },
  {
    title: "Docker CLI & Command Reference",
    description:
      "Detailed reference for all Docker CLI commands, flags, and options required for daily Docker usage and automation.",
    url: "https://docs.docker.com/reference/",
    citation: "Docker CLI Reference",
  },
  {
    title: "Docker Networking Documentation",
    description:
      "Official guide to Docker networking including bridge networks, host networks, overlay networks, DNS, and container communication.",
    url: "https://docs.docker.com/network/",
    citation: "Docker Networking Docs",
  },
  {
    title: "Docker Volumes & Storage",
    description:
      "Authoritative documentation on Docker volumes, bind mounts, storage drivers, data persistence strategies, and backup considerations.",
    url: "https://docs.docker.com/storage/",
    citation: "Docker Storage Docs",
  },
  {
    title: "Docker Security Best Practices",
    description:
      "Official security documentation covering container isolation, non-root users, image scanning, secrets management, and production hardening.",
    url: "https://docs.docker.com/engine/security/",
    citation: "Docker Security Docs",
  },
  {
    title: "Docker Hub & Registry Documentation",
    description:
      "Official documentation for Docker Hub and image registries including pulling, pushing, tagging images, and managing repositories.",
    url: "https://docs.docker.com/docker-hub/",
    citation: "Docker Hub Docs",
  },
];

export default function Docs() {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          📚 Official Docker Documentation Every Developer Must Know
        </h1>
        <p className="text-gray-600 mb-10">
          These are the official and authoritative Docker documentation sources
          you must regularly read and reference while learning, building, and
          deploying real-world containerized applications.
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
