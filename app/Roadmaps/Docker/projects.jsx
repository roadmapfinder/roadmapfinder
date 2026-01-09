"use client";
// components/Projects.jsx
import React from "react";

const projects = [
  // 🧩 Beginner Phase
  {
    id: "phase1-single-service",
    level: "Beginner",
    title: "Single Service API Container",
    description:
      "Containerize a simple backend API using Docker. Learn Dockerfile basics, image builds, container lifecycle, port mapping, environment variables, and .dockerignore.",
    url: "https://youtu.be/C-bX86AgyiA?si=IuMeQ3kl91FVhIEq",
  },
  {
    id: "phase1-static-web",
    level: "Beginner",
    title: "Static Website with Nginx",
    description:
      "Deploy a static website using Nginx inside Docker. Practice base images, COPY instructions, port exposure, container logs, and basic troubleshooting.",
    url: "https://youtu.be/YkuhqIDUi2A?si=a-W8lDC9cWA6facs",
  },
  {
    id: "phase1-cli-app",
    level: "Beginner",
    title: "CLI Application Container",
    description:
      "Dockerize a CLI-based application to understand container execution, ENTRYPOINT vs CMD, argument passing, and container exit behavior.",
    url: "https://youtu.be/Iz7HkvitqQE?si=_KJd072UTbZQez_8",
  },

  // ⚙️ Intermediate Phase
  {
    id: "phase2-multi-container",
    level: "Intermediate (2–3 weeks)",
    title: "Multi-Container Full Stack App",
    description:
      "Build a backend + database application using Docker Compose. Learn service networking, volumes for persistence, depends_on, and environment configuration.",
    url: "https://youtu.be/IUpsu2xemrA?si=loLCejdDgeJdh77D",
  },
  {
    id: "phase2-optimized-builds",
    level: "Intermediate (3–4 weeks)",
    title: "Production-Grade Dockerfile",
    description:
      "Create optimized multi-stage Dockerfiles. Focus on image size reduction, build caching, minimal base images, and running containers as non-root users.",
    url: "https://youtu.be/hX2UAHhX8E8?si=ip_N515JueLJ9zhb",
  },

  // 🚀 Advanced Phase
  {
    id: "phase3-reverse-proxy",
    level: "Advanced (5–6 weeks)",
    title: "Reverse Proxy & HTTPS Setup",
    description:
      "Set up multiple services behind an Nginx reverse proxy with HTTPS using Let’s Encrypt. Learn real-world networking, SSL cert handling, and production traffic routing.",
    url: "https://youtu.be/-hfejNXqOzA?si=H8RViLGwL8YFnGn9",
  },
  {
    id: "phase3-ci-cd",
    level: "Industry-Ready (6–8 weeks)",
    title: "Docker CI/CD Pipeline (Capstone)",
    description:
      "Implement a CI/CD pipeline that builds Docker images, runs tests, tags versions, and pushes images to a registry automatically using GitHub Actions.",
    url: "https://youtu.be/361bfIvXMBI?si=LJ2gNyAp_PsEm_hl",
  },
];

export default function Projects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            🐳 Docker Project Roadmap (Beginner → Industry-Ready)
          </h2>
          <p className="mt-2 text-gray-600">
            Build these Docker projects step-by-step to master containerization,
            image optimization, networking, security, and production-grade
            deployments.
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
              {p.url && (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-indigo-600 font-medium hover:underline"
                >
                  View Official Docs ▶
                </a>
              )}
            </article>
          ))}
        </div>

        <footer className="mt-10 text-sm text-gray-500 text-center">
          💡 Complete these projects in order — containers → images →
          multi-container apps → optimization → networking → CI/CD. Each project
          should result in a production-ready Docker setup suitable for real
          industry use.
        </footer>
      </div>
    </section>
  );
}
