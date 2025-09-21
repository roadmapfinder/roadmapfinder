// components/Docs.jsx
import React from "react";
import { ExternalLink } from "lucide-react";

const docsList = [
  {
    title: "Git Official Documentation",
    description:
      "The definitive guide to Git concepts, commands, and workflows for version control.",
    url: "https://git-scm.com/doc",
    citation: "Git Docs",
  },
  {
    title: "GitHub Documentation",
    description:
      "Official GitHub documentation for repositories, actions, collaboration, and integrations.",
    url: "https://docs.github.com/",
    citation: "GitHub Docs",
  },
  {
    title: "GitLab Documentation",
    description:
      "Comprehensive guide to GitLab features including CI/CD, version control, and DevOps lifecycle tools.",
    url: "https://docs.gitlab.com/",
    citation: "GitLab Docs",
  },
  {
    title: "GNU Bash Manual",
    description:
      "Official GNU Bash documentation covering scripting, automation, and advanced shell usage.",
    url: "https://www.gnu.org/software/bash/manual/bash.html",
    citation: "Bash Docs",
  },
  {
    title: "Jenkins User Documentation",
    description:
      "Guides on installing, configuring, and building CI/CD pipelines using Jenkins.",
    url: "https://www.jenkins.io/doc/",
    citation: "Jenkins Docs",
  },
  {
    title: "GitHub Actions Documentation",
    description:
      "Official docs for GitHub Actions covering workflows, YAML syntax, and automation best practices.",
    url: "https://docs.github.com/en/actions",
    citation: "GitHub Actions Docs",
  },
  {
    title: "GitLab CI/CD Documentation",
    description:
      "Learn to configure pipelines, stages, jobs, and deployment workflows in GitLab.",
    url: "https://docs.gitlab.com/ee/ci/",
    citation: "GitLab CI/CD Docs",
  },
  {
    title: "Docker Documentation",
    description:
      "Learn about containers, images, networking, volumes, and orchestration with Docker.",
    url: "https://docs.docker.com/",
    citation: "Docker Docs",
  },
  {
    title: "Kubernetes Documentation",
    description:
      "Official docs for Kubernetes covering pods, deployments, services, configs, and clusters.",
    url: "https://kubernetes.io/docs/",
    citation: "Kubernetes Docs",
  },
  {
    title: "Helm Documentation",
    description:
      "Manage Kubernetes applications with Helm charts for packaging and deployment automation.",
    url: "https://helm.sh/docs/",
    citation: "Helm Docs",
  },
  {
    title: "Terraform Documentation",
    description:
      "Infrastructure as Code tool documentation for provisioning cloud and on-prem resources.",
    url: "https://developer.hashicorp.com/terraform/docs",
    citation: "Terraform Docs",
  },
  {
    title: "Ansible Documentation",
    description:
      "Configuration management and automation platform documentation with playbooks and roles.",
    url: "https://docs.ansible.com/",
    citation: "Ansible Docs",
  },
  {
    title: "AWS Documentation",
    description:
      "Official AWS service documentation including EC2, IAM, S3, VPC, and EKS.",
    url: "https://docs.aws.amazon.com/",
    citation: "AWS Docs",
  },
  {
    title: "Azure Documentation",
    description:
      "Microsoft Learn official documentation for Azure cloud services and DevOps tools.",
    url: "https://learn.microsoft.com/en-us/azure/",
    citation: "Azure Docs",
  },
  {
    title: "Google Cloud Documentation",
    description:
      "GCP documentation for Compute Engine, GKE, networking, and storage solutions.",
    url: "https://cloud.google.com/docs",
    citation: "GCP Docs",
  },
  {
    title: "Prometheus Documentation",
    description:
      "Official Prometheus docs for metrics collection, alerting, and PromQL usage.",
    url: "https://prometheus.io/docs/",
    citation: "Prometheus Docs",
  },
  {
    title: "Grafana Documentation",
    description:
      "Documentation for Grafana dashboards, visualization, and observability integrations.",
    url: "https://grafana.com/docs/",
    citation: "Grafana Docs",
  },
  {
    title: "Elastic Stack Documentation",
    description:
      "Official docs for Elasticsearch, Logstash, and Kibana (ELK) for logging and monitoring.",
    url: "https://www.elastic.co/guide/index.html",
    citation: "Elastic Docs",
  },
  {
    title: "Trivy Documentation",
    description:
      "Security scanning tool documentation for container images, IaC, and Kubernetes.",
    url: "https://aquasecurity.github.io/trivy/",
    citation: "Trivy Docs",
  },
  {
    title: "Snyk Documentation",
    description:
      "Docs for Snyk covering SAST, SCA, IaC scanning, and CI/CD pipeline security.",
    url: "https://docs.snyk.io/",
    citation: "Snyk Docs",
  },
  {
    title: "HashiCorp Vault Documentation",
    description:
      "Secrets management system for securely storing and accessing sensitive data.",
    url: "https://developer.hashicorp.com/vault/docs",
    citation: "Vault Docs",
  },
  {
    title: "Argo CD Documentation",
    description:
      "GitOps continuous delivery for Kubernetes using declarative configurations.",
    url: "https://argo-cd.readthedocs.io/",
    citation: "ArgoCD Docs",
  },
  {
    title: "FluxCD Documentation",
    description:
      "GitOps tool for Kubernetes, managing deployments and syncing with Git repos.",
    url: "https://fluxcd.io/docs/",
    citation: "FluxCD Docs",
  },
  {
    title: "DevOps Roadmap 2025",
    description:
      "Step-by-step roadmap and curated resources to learn DevOps in 2025.",
    url: "https://github.com/milanm/DevOps-Roadmap",
    citation: "Milan Milanović Repo",
  },
  {
    title: "DevOps Roadmap 2025 (Eva Clari)",
    description:
      "A modern blog guide with tools, skills, and certifications to master DevOps.",
    url: "https://dev.to/eva_clari_289d85ecc68da48/devops-roadmap-2025-tools-skills-certifications-to-know-5a5g",
    citation: "Eva Clari Blog",
  },
  {
    title: "Reddit Beginner DevOps Roadmap",
    description:
      "Community-based roadmap for learning DevOps in 3 months with projects.",
    url: "https://www.reddit.com/r/devops/comments/1mic1ae/give_me_a_realstructuredroadmap_for_devops/",
    citation: "Reddit Roadmap",
  },
];

export default function Docs() {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          📘 DevOps Documentation Resources
        </h1>
        <p className="text-gray-600 mb-10">
          Official documentation for DevOps tools and platforms. Essential for
          learners to build, deploy, monitor, and secure modern infrastructure
          and applications.
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
