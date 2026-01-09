// components/KubernetesDocs.jsx
import React from "react";
import { ExternalLink } from "lucide-react";

const docsList = [
  {
    title: "Kubernetes Official Documentation",
    description:
      "The primary and canonical source for Kubernetes concepts, architecture, tasks, tutorials, and references.",
    url: "https://kubernetes.io/docs/",
    citation: "Official Docs",
  },
  {
    title: "Kubernetes Concepts",
    description:
      "In-depth explanations of Kubernetes core concepts like Pods, Services, Deployments, Networking, Storage, and Security.",
    url: "https://kubernetes.io/docs/concepts/",
    citation: "Core Concepts",
  },
  {
    title: "Kubernetes Tasks",
    description:
      "Step-by-step guides for performing real-world tasks such as deploying apps, configuring networking, storage, and security.",
    url: "https://kubernetes.io/docs/tasks/",
    citation: "Hands-on Tasks",
  },
  {
    title: "Kubernetes Tutorials",
    description:
      "Practical tutorials to help beginners and intermediate learners understand Kubernetes through guided examples.",
    url: "https://kubernetes.io/docs/tutorials/",
    citation: "Tutorials",
  },
  {
    title: "kubectl Command Reference",
    description:
      "Complete reference for kubectl commands used to interact with Kubernetes clusters from the CLI.",
    url: "https://kubernetes.io/docs/reference/kubectl/",
    citation: "kubectl",
  },
  {
    title: "Kubernetes API Reference",
    description:
      "Detailed API documentation for all Kubernetes resources, fields, versions, and specifications.",
    url: "https://kubernetes.io/docs/reference/kubernetes-api/",
    citation: "API Reference",
  },
  {
    title: "Kubernetes Glossary",
    description:
      "Official glossary defining Kubernetes terminology, components, and architecture-related terms.",
    url: "https://kubernetes.io/docs/reference/glossary/",
    citation: "Glossary",
  },
  {
    title: "Kubernetes Networking Documentation",
    description:
      "Official documentation covering Services, Ingress, Gateway API, DNS, CNI plugins, and NetworkPolicies.",
    url: "https://kubernetes.io/docs/concepts/services-networking/",
    citation: "Networking",
  },
  {
    title: "Kubernetes Storage Documentation",
    description:
      "Covers Persistent Volumes, Persistent Volume Claims, StorageClasses, and stateful application patterns.",
    url: "https://kubernetes.io/docs/concepts/storage/",
    citation: "Storage",
  },
  {
    title: "Kubernetes Security Documentation",
    description:
      "Security-focused docs including RBAC, Pod Security Standards, Secrets, and cluster hardening practices.",
    url: "https://kubernetes.io/docs/concepts/security/",
    citation: "Security",
  },
  {
    title: "Kubernetes Configuration Documentation",
    description:
      "Learn how to manage application configuration using ConfigMaps, Secrets, and environment variables.",
    url: "https://kubernetes.io/docs/concepts/configuration/",
    citation: "Configuration",
  },
  {
    title: "Kubernetes Monitoring & Logging",
    description:
      "Official guidance on metrics, logging, debugging, and observability within Kubernetes clusters.",
    url: "https://kubernetes.io/docs/concepts/cluster-administration/logging/",
    citation: "Observability",
  },
  {
    title: "Kubernetes GitHub Repository",
    description:
      "Main Kubernetes source code repository including issues, enhancements (KEPs), and implementation details.",
    url: "https://github.com/kubernetes/kubernetes",
    citation: "GitHub Repo",
  },
  {
    title: "Kubernetes Documentation GitHub",
    description:
      "Source repository for Kubernetes documentation — useful for tracking updates and contributing.",
    url: "https://github.com/kubernetes/website",
    citation: "Docs Source",
  },
];

export default function KubernetesDocs() {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          📘 Official Kubernetes Documentation
        </h1>
        <p className="text-gray-600 mb-10">
          Essential official Kubernetes documentation every learner must follow — covering core concepts,
          networking, storage, security, APIs, kubectl, and production best practices.
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
