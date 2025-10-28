// components/AwsProjects.jsx
"use client"
import React from "react";

const projects = [
  {
    id: "phase1-serverless-url",
    level: "Phase 1 — Intermediate",
    title: "Serverless URL Shortener",
    description:
      "Use Lambda, API Gateway, and DynamoDB to create custom short links with click analytics — all fully event-driven and scalable on demand.",
    url: "https://youtu.be/gouSPuCobUI?si=EFmz7b8QiAxcr3RA"
  },
  {
    id: "phase2-ecommerce-microservices",
    level: "Phase 2 — Advanced",
    title: "Scalable E-commerce Microservices",
    description:
      "Build independent services (cart, auth, payments) with ECS/EKS, S3, RDS, ALB, CI/CD, auto-scaling, and observability — real production-grade architecture.",
    url: "https://youtu.be/M-l7gVm69KI?si=_f60roOOx3SCiZZ9"
  },
  {
    id: "phase3-landingzone-security",
    level: "Phase 3 — Advanced",
    title: "Secure Multi-Account Landing Zone",
    description:
      "Use AWS Organizations, IAM, SCPs, VPC design, and centralized logging to create a secure enterprise-grade multi-account environment.",
    url: "https://youtu.be/3-aaw-B1j8Y?si=G5hnznT9pJsWw-32"
  },
  {
    id: "phase1-cicd-pipeline",
    level: "Phase 1 — Intermediate",
    title: "CI/CD Pipeline for Modern Web App",
    description:
      "Automate deployments with CodePipeline + CodeBuild, S3 + CloudFront hosting, canary releases, automated tests, and artifact versioning.",
    url: "https://youtu.be/gLptmcuCx6Q?si=omezPVsbLqvK8A17"
  },
  {
    id: "phase3-event-streaming",
    level: "Phase 3 — Advanced",
    title: "Real-Time Event Streaming System",
    description:
      "Process massive incoming events with Kinesis or MSK + Lambda consumers, fan-out model, and CloudWatch dashboards for monitoring.",
    url: "https://youtu.be/mG3xQb_-rV4?si=Xvm-k30Pswvhvkme"
  },

  {
    id: "phase4-disaster-recovery",
    level: "Phase 4 — Expert",
    title: "Disaster-Recovery Enabled Web App",
    description:
      "Multi-region architecture using Route 53 health checks, S3 CRR, automated failovers, and RPO/RTO optimization for high availability.",
    url: "https://youtu.be/B7IL7AuOxFQ?si=gbdbObsQwhly8uNO"
  },
  {
    id: "phase4-data-lake-analytics",
    level: "Phase 4 — Expert",
    title: "Data Lake + Analytics Pipeline",
    description:
      "End-to-end analytics platform: S3 ingestion, Glue ETL, Athena querying, and QuickSight dashboards to unlock actionable insights.",
    url: "https://youtu.be/35Du026h-KY?si=iTjIOESOYJ30TdmT"
  }
];

export default function AwsProjects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            ☁️ AWS Cloud Projects Roadmap
          </h2>
          <p className="mt-2 text-gray-600">
            The essential AWS portfolio to go from intermediate to industry-ready (2025).
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
                View Tutorial 
              </a>
            </article>
          ))}
        </div>

        <footer className="mt-10 text-sm text-gray-500 text-center">
          Build → Deploy → Monitor → Secure.  
          Document each project as a case study for interviews.
        </footer>
      </div>
    </section>
  );
}
