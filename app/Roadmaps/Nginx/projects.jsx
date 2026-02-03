// components/NginxProjects.jsx
import React from "react";

const projects = [
  // Phase 1 — Beginner
  {
    id: "phase1-static-site",
    level: "Phase 1 — Beginner",
    title: "Static Website Hosting & Optimization",
    description:
      "Host a production-ready static website using NGINX. Learn server blocks, root/index, custom error pages, gzip compression, browser caching, and HTTP/2.",
    url: "https://youtu.be/eJ6Taw1UaNc?si=kP_vD1QY42lS7_ZE",
  },
  {
    id: "phase1-reverse-proxy",
    level: "Phase 1 — Beginner",
    title: "Reverse Proxy for Backend Application",
    description:
      "Configure NGINX as a reverse proxy in front of a backend (Node.js, Python, or Java). Learn proxy_pass, headers, timeouts, buffering, and SPA routing.",
    url: "https://youtu.be/eJ6Taw1UaNc?si=kP_vD1QY42lS7_ZE",
  },

  // Phase 2 — Intermediate
  {
    id: "phase2-load-balancer",
    level: "Phase 2 — Intermediate",
    title: "Load Balancer with High Availability",
    description:
      "Distribute traffic across multiple backend servers using upstreams. Implement load balancing algorithms, failover, health checks, and sticky sessions.",
    url: "https://docs.nginx.com/nginx/admin-guide/load-balancer/",
  },
  {
    id: "phase2-https-security",
    level: "Phase 2 — Intermediate",
    title: "HTTPS & Security Hardening",
    description:
      "Secure an internet-facing server using HTTPS. Configure TLS, Let’s Encrypt, HTTP→HTTPS redirects, HSTS, rate limiting, and IP-based access control.",
    url: "https://docs.nginx.com/nginx/admin-guide/security-controls/terminating-ssl-http/",
  },

  // Phase 3 — Advanced
  {
    id: "phase3-api-gateway",
    level: "Phase 3 — Advanced",
    title: "NGINX API Gateway",
    description:
      "Use NGINX as an API gateway for multiple microservices. Implement routing, rate limiting per user, JWT-based auth patterns, CORS, and canary releases.",
    url: "https://docs.nginx.com/nginx/admin-guide/security-controls/",
  },
  {
    id: "phase3-docker-k8s",
    level: "Phase 3 — Advanced",
    title: "Docker & Kubernetes NGINX Ingress",
    description:
      "Deploy NGINX using Docker and Kubernetes. Configure NGINX Ingress, service routing, zero-downtime reloads, and basic observability.",
    url: "https://docs.nginx.com/nginx-ingress-controller/",
  },
];

export default function NginxProjects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            ⚙️ NGINX Project Roadmap
          </h2>
          <p className="mt-2 text-gray-600">
            Build real-world NGINX projects step by step — from beginner setups
            to production-grade infrastructure used in modern DevOps systems.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.id}
              className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform"
              aria-labelledby={`${p.id}-title`}
            >
              <span className="inline-block text-xs font-medium bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full">
                {p.level}
              </span>
              <h3
                id={`${p.id}-title`}
                className="mt-4 text-lg font-semibold text-gray-900 group-hover:text-indigo-600"
              >
                {p.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">{p.description}</p>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-indigo-600 font-medium hover:underline"
              >
                Explore Project ▶
              </a>
            </article>
          ))}
        </div>

        <footer className="mt-10 text-sm text-gray-500 text-center">
          Complete these projects in order to become industry-ready for DevOps,
          SRE, and Infrastructure engineering roles.
        </footer>
      </div>
    </section>
  );
}
