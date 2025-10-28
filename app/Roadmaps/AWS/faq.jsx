import React from "react";

const faqs = [
  {
    q: "Is this AWS roadmap enough to get a job?",
    a: "Yes — these 9 projects cover core production skills: serverless, microservices, security, DevOps, data, and DR. With strong case studies and GitHub, you’ll be interview ready."
  },
  {
    q: "Do I need AWS Certification?",
    a: "Not mandatory, but getting SAA-C03 or DVA-C02 boosts credibility. Projects + certs together = strongest combination."
  },
  {
    q: "Which project should I build first?",
    a: "Start with the Serverless URL Shortener, then CI/CD Pipeline and Blog CMS. Once comfortable, move into microservices, streaming, and DR architectures."
  },
  {
    q: "How many projects should I include in my resume?",
    a: "Pick the best 2–3, deploy them publicly, and document architecture + cost efficiencies. Recruiters love measurable outcomes."
  },
  {
    q: "Do I need strong programming skills for AWS?",
    a: "Basic coding (Python/JavaScript) is enough for Lambda, IaC, automation scripts, and container apps. You’ll improve naturally while building."
  },
  {
    q: "Which tools should I learn besides AWS?",
    a: "Terraform/CloudFormation, Docker, GitHub Actions, Prometheus/Grafana, Linux fundamentals — these take your profile to DevOps level."
  },
  {
    q: "What is the total learning duration?",
    a: "With consistent effort — Beginner to Industry Ready in 3–6 months. Accelerate by doing hands-on deployments instead of only learning theory."
  },
  {
    q: "Where should I deploy my projects?",
    a: "Host everything on AWS with CI/CD. Use S3+CloudFront for frontend, ECS/Lambda for backend, and Route 53 for global access — looks professional."
  },
  {
    q: "How do I manage AWS costs while learning?",
    a: "Use Free Tier services, enable billing alarms, and shut down unused resources. Prefer serverless over always-running compute."
  }
];

export default function Faq() {
  return (
    <section className="py-16 bg-white" id="faq">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900">
          ❓ Frequently Asked Questions
        </h2>
        <p className="text-gray-600 text-center mt-2">
          Common questions beginners have on the AWS Cloud Projects Roadmap
        </p>

        <div className="mt-10 space-y-6">
          {faqs.map((item, idx) => (
            <div
              key={idx}
              className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold text-gray-900">
                {item.q}
              </h3>
              <p className="mt-2 text-gray-700 text-sm">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
