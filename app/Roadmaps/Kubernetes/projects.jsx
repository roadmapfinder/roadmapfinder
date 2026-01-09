// components/KubernetesProjects.jsx
"use client"
import React from "react";

const projects = [
  // Phase 1 — Beginner
  {
    id: "phase1-containerized-app",
    level: "Phase 1 — Beginner",
    title: "Containerized Web App on Kubernetes",
    description:
      "Build and deploy a simple web application on Kubernetes. Learn Pods, Deployments, Services, kubectl debugging, and basic cluster interaction.",
    url: "https://youtu.be/12c8ziarCqE?si=dAF6IOJfHeX0rShQ",
  },
  {
    id: "phase1-zero-downtime",
    level: "Phase 1 — Beginner",
    title: "Zero-Downtime Rolling Deployment",
    description:
      "Implement rolling updates and rollbacks with readiness and liveness probes. Learn how Kubernetes handles availability during deployments.",
    url: "https://youtu.be/0QhUhrWGB9k?si=DR2M5KCRnkpp2akS",
  },

  // Phase 2 — Intermediate
  {
    id: "phase2-secure-ingress",
    level: "Phase 2 — Intermediate",
    title: "Secure Ingress with HTTPS",
    description:
      "Expose multiple services using an Ingress Controller with TLS. Learn Ingress, DNS, path-based routing, and secure traffic management.",
    url: "https://youtu.be/t0jSuKdvtvg?si=S7l-RkaV-unbTb62",
  },
  {
    id: "phase2-stateful-app",
    level: "Phase 2 — Intermediate",
    title: "Stateful Database on Kubernetes",
    description:
      "Deploy a production-grade database using StatefulSets and Persistent Volumes. Learn storage classes, data persistence, and recovery.",
    url: "https://youtu.be/pPQKAR1pA9U?si=BuAYSY3OZXvAX2C9",
  },

  // Phase 3 — Advanced / Industry-Ready
  {
    id: "phase3-autoscaling-observability",
    level: "Phase 3 — Advanced",
    title: "Autoscaling & Observability Platform",
    description:
      "Implement Horizontal Pod Autoscaling with full monitoring using Prometheus and Grafana. Learn metrics, alerts, and performance tuning.",
    url: "https://youtu.be/gvQvtJAw630?si=X6UFQpKX589NPeEd",
  },
  {
    id: "phase3-gitops-production",
    level: "Phase 3 — Advanced",
    title: "GitOps-Driven Production Kubernetes Cluster",
    description:
      "Build a production-ready cluster using GitOps with Argo CD or Flux. Add RBAC, NetworkPolicies, and declarative rollbacks.",
    url: "https://youtu.be/MeU5_k9ssrs?si=V0IPV-rE5Ktz_rkC",
  },
];

export default function KubernetesProjects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            ☸️ Kubernetes Project Roadmap
          </h2>
          <p className="mt-2 text-gray-600">
            Six real-world projects to master Kubernetes from scratch — focused on production skills, not toy demos.
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
          Build these in order. If you skip one, Kubernetes will expose the gap later in production.
        </footer>
      </div>
    </section>
  ); 
}
