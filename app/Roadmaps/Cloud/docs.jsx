// components/Docs.jsx
import React from "react";
import { ExternalLink } from "lucide-react";

const docsList = [
  // 1. Cloud Provider Official Docs
  {
    title: "AWS Documentation",
    description:
      "Everything from EC2 to Lambda, IAM, networking, and DevOps tools.",
    url: "https://docs.aws.amazon.com/",
    citation: "AWS Docs",
  },
  {
    title: "AWS Well-Architected Framework",
    description:
      "Best practices for designing reliable, secure cloud architectures.",
    url: "https://aws.amazon.com/architecture/well-architected/",
    citation: "AWS Well-Architected",
  },
  {
    title: "AWS GitHub Repos",
    description: "Official SDKs, samples, and infrastructure templates.",
    url: "https://github.com/aws",
    citation: "AWS GitHub",
  },
  {
    title: "Azure Documentation",
    description: "Covers Azure services, tutorials, architecture guides.",
    url: "https://learn.microsoft.com/en-us/azure/",
    citation: "Azure Docs",
  },
  {
    title: "Azure Architecture Center",
    description:
      "Design patterns, best practices, and reference architectures.",
    url: "https://learn.microsoft.com/en-us/azure/architecture/",
    citation: "Azure Architecture",
  },
  {
    title: "Azure GitHub",
    description: "Official tools and sample projects.",
    url: "https://github.com/Azure",
    citation: "Azure GitHub",
  },
  {
    title: "Google Cloud Docs",
    description: "Detailed documentation on all GCP services.",
    url: "https://cloud.google.com/docs",
    citation: "GCP Docs",
  },
  {
    title: "GCP Architecture Framework",
    description: "Best practices for building cloud systems.",
    url: "https://cloud.google.com/architecture/framework",
    citation: "GCP Architecture",
  },
  {
    title: "GCP GitHub",
    description: "SDKs, samples, and tutorials.",
    url: "https://github.com/GoogleCloudPlatform",
    citation: "GCP GitHub",
  },

  // 2. Containerization & Orchestration
  {
    title: "Docker Docs",
    description: "Containers, Dockerfile, Compose, and best practices.",
    url: "https://docs.docker.com/",
    citation: "Docker Docs",
  },
  {
    title: "Kubernetes Docs",
    description: "Cluster management, deployments, networking, and security.",
    url: "https://kubernetes.io/docs/",
    citation: "Kubernetes Docs",
  },
  {
    title: "Helm Docs",
    description: "Kubernetes package manager.",
    url: "https://helm.sh/docs/",
    citation: "Helm Docs",
  },

  // 3. Infrastructure as Code (IaC)
  {
    title: "Terraform Docs",
    description:
      "Core concepts, providers, modules, and examples.",
    url: "https://developer.hashicorp.com/terraform/docs",
    citation: "Terraform Docs",
  },
  {
    title: "CloudFormation Docs",
    description: "AWS infrastructure as code documentation.",
    url: "https://docs.aws.amazon.com/cloudformation/",
    citation: "CloudFormation Docs",
  },
  {
    title: "Ansible Docs",
    description: "Configuration management and automation tool.",
    url: "https://docs.ansible.com/",
    citation: "Ansible Docs",
  },

  // 4. CI/CD & DevOps Tools
  {
    title: "Jenkins Docs",
    description: "Pipeline automation, plugins, and best practices.",
    url: "https://www.jenkins.io/doc/",
    citation: "Jenkins Docs",
  },
  {
    title: "GitHub Actions Docs",
    description: "CI/CD workflows, automation, and integrations.",
    url: "https://docs.github.com/en/actions",
    citation: "GitHub Actions",
  },
  {
    title: "GitLab CI/CD Docs",
    description: "Continuous integration and deployment pipelines.",
    url: "https://docs.gitlab.com/ee/ci/",
    citation: "GitLab Docs",
  },

  // 5. Monitoring & Logging
  {
    title: "Prometheus Docs",
    description: "Monitoring and alerting toolkit for cloud systems.",
    url: "https://prometheus.io/docs/",
    citation: "Prometheus Docs",
  },
  {
    title: "Grafana Docs",
    description: "Observability platform for metrics and dashboards.",
    url: "https://grafana.com/docs/",
    citation: "Grafana Docs",
  },
  {
    title: "ELK Stack Docs",
    description: "Logging and analytics using Elasticsearch, Logstash, Kibana.",
    url: "https://www.elastic.co/guide/index.html",
    citation: "ELK Docs",
  },

  // 6. Security & Identity
  {
    title: "AWS Security Docs",
    description: "Security best practices, IAM, encryption, and compliance.",
    url: "https://docs.aws.amazon.com/security/",
    citation: "AWS Security",
  },
  {
    title: "Azure Security Docs",
    description: "Cloud security, identity, and compliance documentation.",
    url: "https://learn.microsoft.com/en-us/azure/security/",
    citation: "Azure Security",
  },
  {
    title: "GCP Security Docs",
    description: "Cloud security, IAM, and compliance best practices.",
    url: "https://cloud.google.com/security",
    citation: "GCP Security",
  },

  // 7. Cloud Learning Platforms
  {
    title: "A Cloud Guru / Linux Academy",
    description: "Hands-on labs and tutorials for cloud platforms.",
    url: "https://acloudguru.com/",
    citation: "A Cloud Guru",
  },
  {
    title: "Qwiklabs",
    description: "Real cloud labs for AWS, GCP, Azure.",
    url: "https://www.qwiklabs.com/",
    citation: "Qwiklabs",
  },
  {
    title: "FreeCodeCamp Cloud Tutorials",
    description: "Cloud tutorials, guides, and practical projects.",
    url: "https://www.freecodecamp.org/news/tag/cloud/",
    citation: "FreeCodeCamp",
  },
];

export default function Docs() {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          ☁️ Cloud Engineering Documentation Resources
        </h1>
        <p className="text-gray-600 mb-10">
          Official and popular documentation sites every Cloud Engineer must
          know — covering cloud providers, containers, IaC, DevOps, monitoring,
          security, and learning platforms.
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
