// components/Projects.jsx
import React from "react";

const projects = [
  // 🧩 Beginner Phase
  {
    id: "phase1-linux-automation",
    level: "Beginner (0–2 months)",
    title: "Linux Server Setup & Automation",
    description:
      "Install and manage Ubuntu Server on cloud or VM. Automate updates and backups using shell scripts or Ansible. Learn permissions, cron, users, and packages.",
    url: "https://youtu.be/uR1_hlHxvhc?si=A2oHzsxslZAoze9I"
  },
  {
    id: "phase1-github-ci",
    level: "Beginner (0–2 months)",
    title: "CI/CD with GitHub Actions",
    description:
      "Create a GitHub Actions workflow to test and deploy a sample app. Learn YAML syntax, workflow triggers, and environment secrets.",
    url: "https://youtu.be/YLtlz88zrLg?si=kwjT51tFFQcnOL5B"
  },
  {
    id: "phase1-dockerize-app",
    level: "Beginner (0–2 months)",
    title: "Dockerize a Web App",
    description:
      "Containerize a Flask or Node.js app using Docker and docker-compose. Understand images, networking, and volume management.",
    url: "https://youtu.be/dfTco9hmXEM?si=tFp0nMjKe8Zc4r1c"
  },

  // ⚙️ Intermediate Phase
  {
    id: "phase2-jenkins-pipeline",
    level: "Intermediate (2–4 months)",
    title: "CI/CD Pipeline with Jenkins",
    description:
      "Set up Jenkins to automate build, test, and deploy for your app. Learn webhooks, pipeline-as-code, and integration with Git.",
    url: "https://youtu.be/rcZoPygiI8o?si=2Dea82tRzGuiqgwm"
  },
  {
    id: "phase2-docker-nginx",
    level: "Intermediate (2–4 months)",
    title: "Docker + NGINX Reverse Proxy Setup",
    description:
      "Run multiple containers (frontend, backend, DB) behind NGINX. Configure routing, load balancing, and container networking.",
    url: "https://youtu.be/ZmH1L1QeNHk?si=eZzQXElWILBO1f4G"
  },
  {
    id: "phase2-monitoring-stack",
    level: "Intermediate (2–4 months)",
    title: "Monitoring Stack: Prometheus + Grafana",
    description:
      "Set up Prometheus to collect metrics and Grafana to visualize dashboards for containers or Kubernetes workloads.",
    url: "https://youtu.be/ddZjhv66o_o?si=BBiFjFgQmZ6mmksz"
  },

  // ☁️ Cloud & IaC Phase
  {
    id: "phase3-terraform-aws",
    level: "Intermediate (4–6 months)",
    title: "Terraform Infrastructure Setup on AWS",
    description:
      "Provision AWS infrastructure using Terraform scripts (EC2, RDS, S3). Learn modules, state management, and variables.",
    url: "https://youtu.be/NoKeG8iRnQw?si=AWSe6CrUKkWofjaI"
  },
  {
    id: "phase3-ansible-config",
    level: "Intermediate (4–6 months)",
    title: "Server Configuration with Ansible",
    description:
      "Automate app deployments and server configuration using Ansible playbooks and roles. Manage multiple environments easily.",
    url: "https://youtu.be/DBdOFvOAeFA?si=WmLJhBqy38BS0RJx"
  },
  {
    id: "phase3-cloud-cicd",
    level: "Intermediate (4–6 months)",
    title: "AWS CI/CD with CodePipeline or GitHub Actions",
    description:
      "Create cloud-native CI/CD pipeline to deploy apps to EC2/ECS. Learn secrets, IAM, and artifact management.",
    url: "https://youtu.be/IUF-pfbYGvg?si=cQNlvJb6DV9ZzRWZ"
  },

  // 🚀 Advanced Phase
  {
    id: "phase4-k8s-minikube",
    level: "Advanced (6–8 months)",
    title: "Kubernetes Deployment on Minikube",
    description:
      "Deploy microservices using Kubernetes pods, services, and ingress. Master kubectl, manifests, and autoscaling.",
    url: "https://youtu.be/M64aA5Icuk4?si=pEirrE-FCs0rX4TZ"
  },
  {
    id: "phase4-helm-jenkins",
    level: "Advanced (6–8 months)",
    title: "CI/CD with Jenkins + Helm + Kubernetes",
    description:
      "Integrate Jenkins CI pipeline with Helm for automated app deployments on EKS or Minikube.",
    url: "https://youtu.be/Ojb9Rh0BcvA?si=dCcZ4f7jo2Wb6kZr"
  },
  {
    id: "phase4-gitops-argocd",
    level: "Advanced (6–8 months)",
    title: "GitOps with ArgoCD for Automated Deployments",
    description:
      "Implement declarative GitOps patterns with ArgoCD and Kustomize. Automate syncs and rollback strategies.",
    url: "https://youtu.be/Kbvch_swZWA?si=mdqN0nQEdGTN2MLV"
  },
  {
    id: "phase4-capstone-full",
    level: "Advanced (6–8 months)",
    title: "Full Cloud-Native DevOps System (Capstone)",
    description:
      "End-to-end DevOps pipeline: Terraform + AWS + Jenkins + Kubernetes + Monitoring. Add Trivy for image scanning and SonarQube for code quality.",
    url: "https://youtu.be/kBWCsHEcWnc?si=N4pG6TZWFl4D8MS-"
  }
];

export default function Projects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            🚀 DevOps Project Roadmap (Beginner → Advanced)
          </h2>
          <p className="mt-2 text-gray-600">
            Build these projects step-by-step to become industry-ready. Includes real-world CI/CD, Docker, Kubernetes, and Cloud automation projects.
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
                Watch Tutorial ▶
              </a>
            </article>
          ))}
        </div>

        <footer className="mt-10 text-sm text-gray-500 text-center">
          💡 Follow each phase in order — automate, containerize, deploy, and monitor.  
          Convert your top 2–3 into detailed portfolio case studies.
        </footer>
      </div>
    </section>
  );
}
