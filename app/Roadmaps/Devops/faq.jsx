// components/FAQ.jsx
import React from "react";

const faqs = [
  // 🧩 Beginner
  {
    id: "faq1",
    level: "Beginner (0–2 months)",
    question: "Why do DevOps engineers need to learn Linux first?",
    answer:
      "Almost all servers and containers run on Linux. Understanding file systems, permissions, services, and networking in Linux helps you manage production environments confidently."
  },
  {
    id: "faq2",
    level: "Beginner (0–2 months)",
    question: "What’s the difference between Continuous Integration (CI) and Continuous Deployment (CD)?",
    answer:
      "CI focuses on automatically building and testing code after every change, while CD automates releasing the code to production environments. Together, they ensure faster and safer delivery."
  },
  {
    id: "faq3",
    level: "Beginner (0–2 months)",
    question: "Why is Docker so important in DevOps?",
    answer:
      "Docker standardizes environments by packaging applications and dependencies together. It eliminates the classic 'it works on my machine' issue, enabling consistent builds and deployments."
  },

  // ⚙️ Intermediate
  {
    id: "faq4",
    level: "Intermediate (2–4 months)",
    question: "How is Jenkins different from GitHub Actions?",
    answer:
      "Jenkins is a self-hosted automation server giving you full control, while GitHub Actions is cloud-native and integrated directly with GitHub. Jenkins offers deep customization, whereas Actions is easier to set up for smaller teams."
  },
  {
    id: "faq5",
    level: "Intermediate (2–4 months)",
    question: "What’s the purpose of using Ansible or Terraform when I can just use the AWS Console?",
    answer:
      "Manual setup via AWS Console doesn’t scale and isn’t reproducible. Tools like Ansible and Terraform define infrastructure as code (IaC), allowing versioning, automation, and consistency across environments."
  },
  {
    id: "faq6",
    level: "Intermediate (2–4 months)",
    question: "What’s the difference between Prometheus and Grafana?",
    answer:
      "Prometheus is a monitoring system that collects and stores metrics, while Grafana visualizes those metrics in interactive dashboards. They are often used together for observability."
  },

  // ☁️ Cloud / IaC
  {
    id: "faq7",
    level: "Intermediate (4–6 months)",
    question: "Why do companies prefer Terraform over CloudFormation?",
    answer:
      "Terraform is cloud-agnostic, meaning it supports AWS, Azure, GCP, etc., while CloudFormation is AWS-only. Terraform also offers a cleaner syntax and reusable modules, making it more flexible in multi-cloud setups."
  },
  {
    id: "faq8",
    level: "Intermediate (4–6 months)",
    question: "What’s the real-world use of Infrastructure as Code (IaC)?",
    answer:
      "IaC allows teams to create, modify, and destroy cloud infrastructure using code — just like software. It ensures reliability, quick replication of environments, and full traceability through version control."
  },
  {
    id: "faq9",
    level: "Intermediate (4–6 months)",
    question: "What’s the difference between configuration management and provisioning?",
    answer:
      "Provisioning (Terraform) creates infrastructure resources, while configuration management (Ansible) installs and configures software on those resources. They’re complementary in a DevOps workflow."
  },

  // 🚀 Advanced
  {
    id: "faq10",
    level: "Advanced (6–8 months)",
    question: "Why is Kubernetes so widely used in production environments?",
    answer:
      "Kubernetes automates deployment, scaling, and management of containerized applications. It enables resilience, load balancing, and zero-downtime rolling updates across clusters."
  },
  {
    id: "faq11",
    level: "Advanced (6–8 months)",
    question: "What’s the difference between Helm and ArgoCD?",
    answer:
      "Helm manages Kubernetes packages (charts) — it’s like a package manager for K8s. ArgoCD focuses on GitOps — automatically syncing the desired state from your Git repository to your cluster."
  },
  {
    id: "faq12",
    level: "Advanced (6–8 months)",
    question: "What does GitOps mean and why is it trending?",
    answer:
      "GitOps uses Git as the single source of truth for deployments. Any change to infrastructure or app configuration is made via Git commits, ensuring traceability, consistency, and automated rollbacks."
  },
  {
    id: "faq13",
    level: "Advanced (6–8 months)",
    question: "How can I make my DevOps projects stand out to recruiters?",
    answer:
      "Document each project clearly — add architecture diagrams, CI/CD flow, technologies used, screenshots, and lessons learned. Deploy live demos (even on free tiers) and share GitHub repos with detailed READMEs."
  }
];

export default function FAQ() {
  return (
    <section className="bg-white py-12 min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        <header className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            💬 DevOps FAQ — Genuine Questions Learners Ask
          </h2>
          <p className="mt-2 text-gray-600">
            Real-world DevOps questions to clarify your learning path from beginner to advanced.
          </p>
        </header>

        <div className="space-y-6">
          {faqs.map((faq) => (
            <details
              key={faq.id}
              className="group border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all"
            >
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <div>
                  <span className="inline-block text-xs font-medium bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full">
                    {faq.level}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900 mt-2 group-hover:text-indigo-600">
                    {faq.question}
                  </h3>
                </div>
                <span className="text-indigo-500 text-xl font-bold group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="mt-3 text-gray-700 text-sm leading-relaxed">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>

        <footer className="mt-10 text-sm text-gray-500 text-center">
          💡 Keep revisiting these FAQs as you progress. Most real-world DevOps interviews revolve around these core principles and project experience.
        </footer>
      </div>
    </section>
  );
}
