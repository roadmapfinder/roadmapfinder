// components/AwsDocs.jsx
"use client"
import React from "react";
import { ExternalLink } from "lucide-react";

const docsList = [
  {
    title: "AWS Documentation Home",
    description:
      "All AWS services documentation including Compute, Storage, Security, Networking, Databases, and Architecture guides.",
    url: "https://docs.aws.amazon.com/",
    citation: "AWS Docs",
  },
  {
    title: "Amazon EC2 Documentation",
    description:
      "Core compute service — instances, autoscaling, AMIs, load balancers, and networking fundamentals.",
    url: "https://docs.aws.amazon.com/ec2/",
    citation: "EC2 Docs",
  },
  {
    title: "Amazon S3 Documentation",
    description:
      "Object storage — buckets, lifecycle management, versioning, events, cross-region replication.",
    url: "https://docs.aws.amazon.com/s3/",
    citation: "S3 Docs",
  },
  {
    title: "AWS IAM Documentation",
    description:
      "Identity and access management — users, roles, policies, MFA, best security practices.",
    url: "https://docs.aws.amazon.com/iam/",
    citation: "IAM Docs",
  },
  {
    title: "Amazon VPC Documentation",
    description:
      "Networking service — subnets, routing, NAT, VPN, security groups, NACLs, endpoint services.",
    url: "https://docs.aws.amazon.com/vpc/",
    citation: "VPC Docs",
  },
  {
    title: "AWS Lambda Documentation",
    description:
      "Serverless compute — event-driven functions, triggers, deployments, scaling, monitoring.",
    url: "https://docs.aws.amazon.com/lambda/",
    citation: "Lambda Docs",
  },
  {
    title: "Amazon RDS Documentation",
    description:
      "Managed SQL databases — MySQL, PostgreSQL, security, backups, Multi-AZ, migration.",
    url: "https://docs.aws.amazon.com/rds/",
    citation: "RDS Docs",
  },
  {
    title: "API Gateway Documentation",
    description:
      "Managed APIs — REST/HTTP/WebSockets, throttling, authentication using IAM & Cognito.",
    url: "https://docs.aws.amazon.com/apigateway/",
    citation: "API Gateway Docs",
  },
  {
    title: "Amazon DynamoDB Documentation",
    description:
      "NoSQL database — single-table design, GSI/LSI indexing, streams, and serverless performance.",
    url: "https://docs.aws.amazon.com/amazondynamodb/",
    citation: "DynamoDB Docs",
  },
  {
    title: "Amazon ECS & Containers",
    description:
      "Container orchestration — Fargate, task definitions, ECR, auto scaling, load balancing.",
    url: "https://docs.aws.amazon.com/ecs/",
    citation: "ECS Docs",
  },
  {
    title: "Amazon EKS Documentation",
    description:
      "Kubernetes on AWS — clusters, node groups, networking, security, GitOps, IRSA.",
    url: "https://docs.aws.amazon.com/eks/",
    citation: "EKS Docs",
  },
  {
    title: "AWS CloudFormation Documentation",
    description:
      "Infrastructure as Code — YAML/JSON templates for automated resource provisioning.",
    url: "https://docs.aws.amazon.com/cloudformation/",
    citation: "CloudFormation Docs",
  },
  {
    title: "Terraform AWS Provider Docs",
    description:
      "IaC automation widely used in real-world — resources for all AWS services.",
    url: "https://registry.terraform.io/providers/hashicorp/aws/latest/docs",
    citation: "Terraform AWS Docs",
  },
  {
    title: "AWS CodePipeline Documentation",
    description:
      "CI/CD service for automated builds, tests, and deployments using DevOps workflows.",
    url: "https://docs.aws.amazon.com/codepipeline/",
    citation: "CodePipeline Docs",
  },
  {
    title: "Amazon CloudWatch Documentation",
    description:
      "Monitoring & logging — metrics, dashboards, alarms, log groups, tracing with X-Ray.",
    url: "https://docs.aws.amazon.com/cloudwatch/",
    citation: "CloudWatch Docs",
  },
  {
    title: "AWS Security Reference Architecture",
    description:
      "Enterprise-grade guidelines for secure, compliant, multi-account AWS environments.",
    url: "https://docs.aws.amazon.com/prescriptive-guidance/latest/security-reference-architecture/",
    citation: "AWS Security Architecture",
  },
];

export default function AwsDocs() {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          🛡️ AWS Documentation Resources
        </h1>
        <p className="text-gray-600 mb-10">
          Essential official AWS documentation every Cloud/DevOps/Solutions
          Architect learner must know — core services, networking, security,
          DevOps tooling, serverless, and monitoring.
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
