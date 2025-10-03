// components/Projects.jsx
import React from "react";

const projects = [
  // Beginner Projects
  {
    id: "phase1-static-website",
    level: "Beginner (0–2 months)",
    title: "Static Website Hosting",
    description:
      "Deploy a personal portfolio or resume website using AWS S3 + CloudFront, Azure Blob Storage, or GCP Storage + CDN. Add custom domain and HTTPS.",
    url: "https://youtu.be/-l83oqcaTHg?si=QBicYxHaOoAnO-cl", // AWS S3 static hosting tutorial
  },
  {
    id: "phase1-containerized-app",
    level: "Beginner (0–2 months)",
    title: "Containerized Application Deployment",
    description:
      "Build a simple Node.js or Python app, dockerize it, and deploy on AWS ECS, Azure Container Instances, or GCP Cloud Run.",
    url: "https://youtu.be/DQJNtDm5qy0?si=kzBNYMteb0_eUVdI", // Docker + ECS tutorial
  },
  {
    id: "phase1-ci-cd",
    level: "Beginner (0–2 months)",
    title: "CI/CD Pipeline with GitHub Actions",
    description:
      "Automate build and deployment of a web app to EC2, Azure VM, or GCP VM. Add unit tests and approval gates.",
    url: "https://youtu.be/YLtlz88zrLg?si=JjCCHsfzr8yRwDrO", // GitHub Actions CI/CD tutorial
  },

  // Intermediate Projects
  {
    id: "phase2-serverless-api",
    level: "Intermediate (2–6 months)",
    title: "Serverless REST API",
    description:
      "Create a REST API using AWS Lambda + API Gateway, Azure Functions, or GCP Cloud Functions. Store data in DynamoDB, Cosmos DB, or Firestore.",
    url: "https://youtu.be/VvYADzRwJK8?si=OBzz738TikmZVoJO", // AWS Lambda API Gateway tutorial
  },
  {
    id: "phase2-infra-as-code",
    level: "Intermediate (2–6 months)",
    title: "Infrastructure as Code",
    description:
      "Provision VPC, subnets, EC2, S3, IAM roles using Terraform or AWS CDK. Keep infra reusable and version controlled.",
    url: "https://youtu.be/EtEb40LE5zQ?si=MfOlyD1J9agBfxlZ", // Terraform tutorial
  },
  {
    id: "phase2-cloud-security",
    level: "Intermediate (2–6 months)",
    title: "Cloud Security Project",
    description:
      "Design a secure app environment with IAM roles, least privilege access, security groups, and encryption. Test with AWS Inspector or similar tools.",
    url: "https://youtu.be/7Y2EF99vlr0?si=mPU5GeTc45mw5yko", // IAM & security best practices
  },

  // Advanced Projects
  {
    id: "phase3-microservices-k8s",
    level: "Advanced (6–12 months)",
    title: "Scalable Microservices with Kubernetes",
    description:
      "Break a monolithic app into microservices. Deploy on Kubernetes (EKS/AKS/GKE) with autoscaling. Use Istio/Linkerd for service mesh.",
    url: "https://youtu.be/xsIwYL-N4vI?si=OuiHsJldkr1IltHA", // Kubernetes crash course
  },
  {
    id: "phase3-monitoring",
    level: "Advanced (6–12 months)",
    title: "Monitoring & Logging Setup",
    description:
      "Deploy an app and integrate CloudWatch, Azure Monitor, or GCP Ops Suite. Add Prometheus + Grafana dashboards for observability.",
    url: "https://youtu.be/ddZjhv66o_o?si=DrjwldJ0kSRmEgEv", // Prometheus + Grafana tutorial
  },
  {
    id: "phase3-multi-cloud",
    level: "Advanced (6–12 months)",
    title: "Multi-Cloud Deployment",
    description:
      "Deploy the same app on AWS and Azure (or GCP). Configure load balancing and failover using Route 53, Azure Traffic Manager, or similar DNS tools.",
    url: "https://youtu.be/9XBrZQdTcJo?si=blsR7zUt5ZH0ldaM", // Multi-cloud deployment
  },
];

export default function Projects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            ☁️ Cloud Engineering Project Roadmap
          </h2>
          <p className="mt-2 text-gray-600">
            Step from beginner to advanced cloud projects with tutorials on AWS, Azure, and GCP. Gain industry-ready skills in DevOps, IaC, serverless, and Kubernetes.
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
          Build these projects step by step. Focus on cloud fundamentals, automation, DevOps, and security. Showcase your best projects in your portfolio to stand out in cloud roles.
        </footer>
      </div>
    </section>
  );
}
