import React from "react";

const projects = [
  // Phase 1: Beginner
  {
    id: "phase1-static-website",
    level: "Beginner",
    title: "Static Website Hosting on AWS S3",
    description:
      "Learn to host a static website using AWS S3 and Route 53 in Hindi.",
    url: "https://www.youtube.com/watch?v=YJnqXaGb2M8"
  },
  {
    id: "phase1-vm-deployment",
    level: "Beginner",
    title: "Simple VM Deployment",
    description:
      "Step-by-step guide to launching and configuring an EC2 instance.",
    url: "https://www.youtube.com/watch?v=Zw0gw7mFORo"
  },
  {
    id: "phase1-serverless-function",
    level: "Beginner",
    title: "Simple Serverless Function",
    description:
      "Introduction to AWS Lambda and creating a basic function with triggers and API Gateway integration.",
    url: "https://www.youtube.com/watch?v=NWzfgAw_DYA"
  },

  // Phase 2: Intermediate
  {
    id: "phase2-multi-tier-app",
    level: "Intermediate",
    title: "Multi-Tier Web Application",
    description:
      "Design and deploy a three-tier architecture on AWS (EC2 + RDS + S3 + ELB).",
    url: "https://www.youtube.com/watch?v=ZhZXbrspvDA"
  },
  {
    id: "phase2-docker-ecs",
    level: "Intermediate",
    title: "Dockerized Application Deployment",
    description:
      "Deploy a Docker container on AWS ECS using Fargate.",
    url: "https://www.youtube.com/watch?v=kE9crVneLUk"
  },
  {
    id: "phase2-terraform",
    level: "Intermediate",
    title: "Infrastructure as Code with Terraform",
    description:
      "Comprehensive guide to using Terraform with AWS.",
    url: "https://www.youtube.com/watch?v=4JYtAf4M88Y"
  },
  {
    id: "phase2-ci-cd",
    level: "Intermediate",
    title: "Simple CI/CD Pipeline",
    description:
      "Learn to set up CI/CD pipelines using GitHub Actions.",
    url: "https://www.youtube.com/watch?v=je1u_ugTW6Y"
  },

  // Phase 3: Advanced
  {
    id: "phase3-kubernetes",
    level: "Advanced",
    title: "Kubernetes Cluster Deployment",
    description:
      "Deploy and manage a Kubernetes cluster on AWS EKS (Pods, Deployments, Services, Helm, Auto-scaling).",
    url: "https://www.youtube.com/watch?v=_POQdMKSMgw"
  },
  {
    id: "phase3-serverless-event",
    level: "Advanced",
    title: "Serverless Event-Driven Architecture",
    description:
      "Series covering AWS Lambda functions, triggers, and event-driven design.",
    url: "https://www.youtube.com/playlist?list=PLQk4f-b-y8hYwJXhWdJcQr3-5tBpS1Hsn"
  },
  // Phase 3: Advanced Projects
  {
    id: "phase3-monitoring-alerts",
    level: "Advanced",
    title: "Monitoring & Alerting Setup",
    description:
      "Learn how tech giants monitor their server resources using Prometheus & Grafana. Covers metrics collection, dashboards, and alerting rules.",
    url: "https://www.youtube.com/watch?v=pGSkPutCKtQ"
  },
  {
    id: "phase3-iam-security",
    level: "Advanced",
    title: "Cloud Security & IAM Project",
    description:
      "Understand AWS IAM to manage identities and permissions. Includes IAM roles/policies, encryption, key management, and audit logging.",
    url: "https://www.youtube.com/watch?v=XFGnS2d9_SE"
  },
  {
    id: "phase3-multi-region",
    level: "Advanced",
    title: "Multi-Region High Availability",
    description:
      "Learn best practices for architecting multi-region architectures on AWS. Covers load balancing, DNS failover, replication, and disaster recovery.",
    url: "https://www.youtube.com/watch?v=CbkqQznZS9Y"
  },

  // Phase 4: Capstone Projects
  {
    id: "phase4-multi-cloud",
    level: "Capstone",
    title: "Multi-Cloud Deployment",
    description:
      "Deploy services on AWS + GCP using IaC and CI/CD pipelines. Focus on cloud interoperability and cost optimization.",
    url: "https://www.youtube.com/watch?v=vP4Gyw1BjV0"
  },
  {
    id: "phase4-devops-automation",
    level: "Capstone",
    title: "End-to-End DevOps Automation",
    description:
      "Full CI/CD pipeline with Terraform, Kubernetes, serverless, and monitoring. Covers automated builds, deployment, and observability.",
    url: "https://www.youtube.com/watch?v=vx6ND6YfZz4"
  },
  {
    id: "phase4-cloud-data-pipeline",
    level: "Capstone",
    title: "Data Pipeline on Cloud",
    description:
      "Hands-on ETL pipeline using S3 → Lambda → DynamoDB/Redshift for serverless data processing and analytics.",
    url: "https://www.youtube.com/watch?v=1nhy4kMwo8E"
  },
  {
    id: "phase4-cost-optimization",
    level: "Capstone",
    title: "Cloud Cost Optimization Tool",
    description:
      "Learn to analyze cloud spend and implement cost-saving strategies using billing APIs and dashboards.",
    url: "https://www.youtube.com/watch?v=Ka08OEr7Mls"
  },
  {
    id: "phase4-disaster-recovery",
    level: "Capstone",
    title: "Disaster Recovery & Backup Solution",
    description:
      "Configure automated backups, replication, and failover across regions for high availability and business continuity.",
    url: "https://www.youtube.com/watch?v=GAMUCIJR5as"
  }
];

export default function Projects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            🛠 Cloud Engineering Project Roadmap
          </h2>
          <p className="mt-2 text-gray-600">
            Step through beginner to capstone-level Cloud Engineering projects with Hindi & English tutorials.
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
          Follow the sequence, code along, and deploy these projects. Document and polish your top projects for portfolio showcase.
        </footer>
      </div>
    </section>
  );
}
