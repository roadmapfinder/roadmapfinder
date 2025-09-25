// components/Faq.jsx
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is the role of a Software Architect?",
    answer:
      "A Software Architect defines the high-level structure of software systems. They choose technologies, design patterns, and architecture styles (monolith, microservices, event-driven, etc.), ensuring scalability, performance, and maintainability."
  },
  {
    question: "Do I need to be a senior developer before becoming a software architect?",
    answer:
      "Yes, typically. A solid background as a developer (5+ years) helps you understand trade-offs, design decisions, and technical depth needed for architecture-level thinking."
  },
  {
    question: "Which programming languages should I know?",
    answer:
      "Languages are tools. Focus on at least one system-level (Java, C#, Go) and one scripting/dynamic (JavaScript/Node.js, Python). More important is understanding concepts like concurrency, memory, and distributed systems."
  },
  {
    question: "What are the must-know architecture patterns?",
    answer:
      "MVC, Layered (N-tier), Microservices, Event-driven, Serverless, CQRS, Event Sourcing, and Modular Monoliths are essential. Each solves different scaling and complexity problems."
  },
  {
    question: "How do I practice architecture without real enterprise projects?",
    answer:
      "Build architecture-focused projects like an E-commerce backend, ride-sharing app, or video streaming platform. Focus on diagrams (C4 model), API boundaries, and scalability strategies, even if the system is small."
  },
  {
    question: "What tools should I learn as an aspiring architect?",
    answer:
      "Core tools include Docker, Kubernetes, API Gateways, CI/CD (GitHub Actions/Jenkins), monitoring (Prometheus, Grafana), logging (ELK/EFK stack), and message brokers (Kafka, RabbitMQ)."
  },
  {
    question: "What is more important: coding or diagrams?",
    answer:
      "Both. Architects must code enough to stay hands-on but also design system blueprints (C4, UML). The real skill is balancing business needs, technical constraints, and developer experience."
  },
  {
    question: "How long does it take to become a software architect?",
    answer:
      "It usually takes 5–8 years of consistent experience, but you can speed up by learning distributed systems, practicing architectural patterns, and working on high-scale projects."
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-slate-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            ❓ Roadmap FAQs for Aspiring Software Architects
          </h2>
          <p className="mt-2 text-slate-600">
            Common questions learners ask when transitioning from developer to
            software architect.
          </p>
        </header>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-slate-200 rounded-xl bg-white shadow-sm"
            >
              <button
                className="w-full flex justify-between items-center p-5 text-left"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-medium text-slate-900">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-slate-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-500" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-5 pb-5 text-slate-600 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
