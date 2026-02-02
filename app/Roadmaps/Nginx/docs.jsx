import React from "react";
import { ExternalLink } from "lucide-react";

const docsList = [
  {
    title: "NGINX Official Documentation (Core)",
    description:
      "The primary official documentation for NGINX Open Source. Covers core concepts, configuration syntax, directives, modules, and architecture.",
    url: "https://nginx.org/en/docs/",
    citation: "nginx.org",
  },
  {
    title: "NGINX Beginner Guide",
    description:
      "Step-by-step beginner-friendly guide explaining how NGINX works, how to start and stop it, and how to write basic configurations.",
    url: "https://nginx.org/en/docs/beginners_guide.html",
    citation: "nginx.org",
  },
  {
    title: "NGINX Admin Guide",
    description:
      "Comprehensive administration guide maintained by F5. Covers production-ready configuration, performance tuning, and best practices.",
    url: "https://docs.nginx.com/nginx/admin-guide/",
    citation: "F5 NGINX Docs",
  },
  {
    title: "Installation & Deployment Guides",
    description:
      "Official installation and deployment documentation for NGINX across Linux distributions, Docker, cloud, and production environments.",
    url: "https://docs.nginx.com/nginx/deployment-guides/",
    citation: "F5 NGINX Docs",
  },
  {
    title: "Reverse Proxy Configuration",
    description:
      "Official documentation explaining how to configure NGINX as a reverse proxy for HTTP, WebSocket, and backend applications.",
    url: "https://docs.nginx.com/nginx/admin-guide/web-server/reverse-proxy/",
    citation: "F5 NGINX Docs",
  },
  {
    title: "Load Balancing Guide",
    description:
      "Learn how to configure HTTP, TCP, and UDP load balancing using upstreams, algorithms, health checks, and failover strategies.",
    url: "https://docs.nginx.com/nginx/admin-guide/load-balancer/",
    citation: "F5 NGINX Docs",
  },
  {
    title: "HTTPS & SSL/TLS Configuration",
    description:
      "Official guide to configuring HTTPS, SSL certificates, TLS versions, ciphers, HSTS, and secure redirects in NGINX.",
    url: "https://docs.nginx.com/nginx/admin-guide/security-controls/terminating-ssl-http/",
    citation: "F5 NGINX Docs",
  },
  {
    title: "NGINX Directive & Variable Reference",
    description:
      "Complete reference for all NGINX directives, variables, and configuration options used in real-world production setups.",
    url: "https://docs.nginx.com/nginx/reference/",
    citation: "F5 NGINX Docs",
  },
  {
    title: "NGINX GitHub (Source Code)",
    description:
      "Official NGINX Open Source repository. Useful for understanding internals, modules, changelogs, and advanced configuration examples.",
    url: "https://github.com/nginx/nginx",
    citation: "GitHub – NGINX",
  },
];

export default function NginxDocs() {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          📘 Official NGINX Documentation
        </h1>
        <p className="text-gray-600 mb-10">
          Curated official NGINX documentation every learner must know — from
          beginner setup and core configuration to reverse proxying, load
          balancing, security, and production deployment.
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
