"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Is cloud computing necessary to get into IT?",
    answer:
      "Not mandatory, but highly recommended. Most modern companies rely on AWS, Azure, or GCP. Knowing cloud makes you more employable and industry-ready.",
  },
  {
    question: "Which cloud provider should I start with?",
    answer:
      "AWS has the largest market share, Azure is popular with enterprises, and GCP is strong in data/AI. Start with any one, then explore multi-cloud concepts.",
  },
  {
    question: "Do I need coding skills to learn cloud?",
    answer:
      "Yes, at least basic scripting. Python, Bash, or PowerShell is often needed for automation, serverless functions, and DevOps tasks.",
  },
  {
    question: "What are the prerequisites before learning cloud?",
    answer:
      "Basic knowledge of operating systems (Linux/Windows), networking (IP, DNS, firewalls), and programming fundamentals helps a lot.",
  },
  {
    question: "How important is Linux for cloud engineers?",
    answer:
      "Very important. Most cloud servers run Linux. You should be comfortable with command line, permissions, process management, and package managers.",
  },
  {
    question: "Do I need to learn all services of AWS/Azure/GCP?",
    answer:
      "No. Focus on core services first: Compute (EC2, VMs), Storage (S3, Blob), Networking (VPC, Load Balancers), Databases, IAM (security).",
  },
  {
    question: "What kind of projects should I build to get cloud jobs?",
    answer:
      "Projects like hosting static sites, CI/CD pipelines, serverless APIs, containerized apps, monitoring setups, and Kubernetes deployments show real skills.",
  },
  {
    question: "How do I prepare for cloud certifications?",
    answer:
      "Start with entry-level certifications like AWS Certified Cloud Practitioner, Azure Fundamentals, or GCP Associate Engineer. Do hands-on labs, not just theory.",
  },
  {
    question: "Is DevOps knowledge required for cloud engineering?",
    answer:
      "Yes. Cloud and DevOps go hand-in-hand. Skills like CI/CD, Infrastructure as Code (Terraform), and Docker/Kubernetes are essential for real-world work.",
  },
  {
    question: "How do I showcase cloud skills to employers?",
    answer:
      "Push your cloud projects to GitHub, write documentation, share deployment diagrams, and mention tools (Terraform, Docker, CI/CD) in your portfolio.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">
        ☁️ Cloud Engineering FAQ
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-xl shadow-sm p-4 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">{faq.question}</h3>
              {openIndex === index ? <ChevronUp /> : <ChevronDown />}
            </div>
            {openIndex === index && (
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
