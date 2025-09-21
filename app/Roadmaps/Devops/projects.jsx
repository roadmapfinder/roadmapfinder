// components/Projects.jsx
import React from "react";

const projects = [
  {
    id: "project1-nginx-ansible",
    level: "Beginner",
    title: "Automate Nginx Web Server Setup with Bash/Ansible",
    description:
      "Use Ansible (or Bash) to automatically install and configure Nginx on Linux servers. Great automation and infra-as-code practice.",
    url: "https://www.youtube.com/watch?v=Nw3XXNJDT8I"
  },
  {
    id: "project1b-nginx-ansible-infrafort",
    level: "Beginner",
    title: "InfraFort’s NGINX & Ansible Playbook for Beginners",
    description:
      "Beginner-friendly walkthrough by InfraFort automating NGINX setup using an Ansible playbook.",
    url: "https://www.youtube.com/watch?v=NrObnKyjHGo"
  },
  {
    id: "project2-github-actions",
    level: "Beginner",
    title: "CI/CD Pipeline with GitHub Actions (Tom Shaw)",
    description:
      "GitHub Actions CI/CD tutorial: building, testing, and deploying sample app workflows.",
    url: "https://www.youtube.com/watch?v=YLtlz88zrLg"
  },
  {
    id: "project2b-techworld-nana",
    level: "Beginner",
    title: "Mastering GitHub Actions by TechWorld with Nana",
    description:
      "Deeper dive into GitHub Actions CI/CD pipelines, Docker integration and workflow design.",
    url: "https://www.classcentral.com/course/youtube-github-actions-tutorial-basic-concepts-and-ci-cd-pipeline-with-docker-108868"
  },
  {
    id: "project3-dockerize-app",
    level: "Beginner",
    title: "Containerize a Web App with Docker",
    description:
      "Step-by-step Docker tutorial to build and run a web application inside a container.",
    url: "https://www.youtube.com/watch?v=b4wTi1DRkbk"
  },
  {
    id: "project3b-dockerize-app-alt",
    level: "Beginner",
    title: "Docker Intro & Containerization from Scratch",
    description:
      "Beginner containerization guide (Docker from zero to hero style) for full-stack apps.",
    url: "https://www.youtube.com/watch?v=Kxr68x1PZTY"
  },
  {
    id: "project4-k8s-minikube",
    level: "Intermediate",
    title: "Kubernetes Deployment on Minikube",
    description:
      "Deploy your Dockerized app to Minikube: pods, service, ingress, etc.",
    url: "https://www.youtube.com/watch?v=FR7nWVvQJoM"
  },
  {
    id: "project4b-k8s-zero-to-hero",
    level: "Intermediate",
    title: "Kubernetes Zero to Hero Tutorial",
    description:
      "Comprehensive K8s intro showing deployments, services, config-maps on Minikube.",
    url: "https://www.youtube.com/watch?v=j1T_PUOf_fc"
  },
  {
    id: "project5-terraform-aws",
    level: "Intermediate",
    title: "Terraform Infrastructure Setup on AWS (2025)",
    description:
      "Use Terraform to provision EC2, S3, networking on AWS—full beginner-friendly guide.",
    url: "https://www.youtube.com/watch?v=RiBSzAgt2Hw"
  },
  {
    id: "project5b-terraform-course",
    level: "Intermediate",
    title: "Terraform Full Course 2025 (AWS & Azure)",
    description:
      "Hands-on Terraform crash course for AWS/Azure real world infrastructure projects.",
    url: "https://www.youtube.com/playlist?list=PLGyKZJoyKdOfehoKuFC1PKTGzMtRwnGNd"
  },
  {
    id: "project6-monitoring-stack",
    level: "Intermediate",
    title: "Monitoring Stack: Prometheus + Grafana on Kubernetes",
    description:
      "Learn to scrape metrics with Prometheus and visualize using Grafana dashboards on K8s.",
    url: "https://www.youtube.com/watch?v=dzBGhlF4M1U"
  },
  {
    id: "project6b-monitoring-operator",
    level: "Intermediate",
    title: "Prometheus & Grafana Operator Setup Tutorial",
    description:
      "Full series playlist for setting up Prometheus and Grafana operator via Helm on K8s.",
    url: "https://www.youtube.com/playlist?list=PLVx1qovxj-anCTn6um3BDsoHnIr0O2tz3"
  },
  {
    id: "project7-jenkins-helm-k8s",
    level: "Advanced",
    title: "CI/CD with Jenkins + Kubernetes + Helm",
    description:
      "Build Docker with Jenkins, push to registry, deploy to Kubernetes via Helm (Minikube/EKS).",
    url: "https://www.youtube.com/watch?v=vWDi3PBpFng"
  },
  {
    id: "project7b-jenkins-helm-setup",
    level: "Advanced",
    title: "Setting up Jenkins on Kubernetes using Helm",
    description:
      "Detailed deployment of Jenkins in Kubernetes environment using Helm charts.",
    url: "https://www.youtube.com/watch?v=KKQWXtRmxcE"
  },
  {
    id: "project8-argocd-gitops",
    level: "Advanced",
    title: "GitOps with ArgoCD for Automated Deployments",
    description:
      "Hands-on guide to declarative GitOps patterns with ArgoCD: sync, rollback, and Git-driven delivery.",
    url: "https://www.youtube.com/watch?v=yj4O0wwkMQI"
  },
  {
    id: "project8b-gitops-playlist",
    level: "Advanced",
    title: "GitOps Tutorial Playlist for Kubernetes",
    description:
      "Beginner playlist for GitOps on Kubernetes using ArgoCD/Kustomize/Helm.",
    url: "https://www.youtube.com/playlist?list=PLdpzxOOAlwvKu7OZpgj1-MzJFqZ8RBp6f"
  },
  {
    id: "project9-capstone-fullstack",
    level: "Advanced",
    title: "Full Cloud-Native DevOps System (Terraform + AWS + Jenkins + Monitoring)",
    description:
      "Capstone: Terraform + AWS provisioning, Jenkins CI/CD, deploy to EKS, monitor with Prometheus / Grafana, add security scanning.",
    url: "https://www.youtube.com/watch?v=RiBSzAgt2Hw"
  },
  {
    id: "project9b-eks-jenkins-helm",
    level: "Advanced",
    title: "Deploy NodeJS Helm Chart to AWS EKS using Jenkins",
    description:
      "Tutorial combining Helm with Jenkins CI pipeline to deploy apps to AWS EKS cluster.",
    url: "https://www.youtube.com/watch?v=j5ryNaTMl9M"
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
            Nine real-world DevOps projects with latest tutorial links (English/Hindi mixed content) ready to build your skills & portfolio.
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
          Follow the sequence, code along, and polish your top 2–3 projects into portfolio-ready case studies.
        </footer>
      </div>
    </section>
  );
}
