// components/Faq.jsx
import React from "react";

const faqs = [
  {
    question: "Do I need to learn Data Structures and Algorithms (DSA) for Java backend development?",
    answer:
      "Yes, but focus on understanding how DSA applies in real-world Java problems — collections, searching, sorting, and optimization. You don’t need to master competitive programming, but a strong grasp of logic and efficiency helps you write scalable backend code.",
  },
  {
    question: "Which Java version should I learn in 2025?",
    answer:
      "Start with Java 17 (LTS) or later. Most companies are moving toward Java 17 or Java 21. The syntax and performance improvements are modern while keeping long-term stability and support.",
  },
  {
    question: "How important is Spring Boot for getting a Java developer job?",
    answer:
      "Very important. Spring Boot is the industry standard for building backend APIs and microservices. Mastering it — along with Spring Data JPA, Security, and Testing — will open most Java backend roles for you.",
  },
  {
    question: "Should I learn Hibernate before Spring Data JPA?",
    answer:
      "Not necessarily. Spring Data JPA abstracts most Hibernate complexities, but understanding Hibernate concepts like entity lifecycle, caching, and relationships will help you debug and optimize effectively.",
  },
  {
    question: "What database should I use for my Java projects?",
    answer:
      "Start with PostgreSQL or MySQL for relational databases. Learn to integrate using JPA/Hibernate. Later, explore Redis for caching and MongoDB for NoSQL scenarios like analytics or document storage.",
  },
  {
    question: "How do I test my Java applications properly?",
    answer:
      "Use JUnit 5 for unit testing and Mockito for mocking dependencies. For integration tests, use @SpringBootTest or Testcontainers to test against real databases or services.",
  },
  {
    question: "When should I learn Docker and Kubernetes as a Java developer?",
    answer:
      "After you’re comfortable building Spring Boot APIs and using databases. Docker helps you package and deploy your apps consistently, and Kubernetes comes next for orchestrating microservices in production.",
  },
  {
    question: "Is learning Microservices mandatory for Java developers?",
    answer:
      "No, but it’s highly valuable. Start with monolithic applications to learn core backend principles. Once confident, learn microservices, Kafka, and distributed communication to move into enterprise-level systems.",
  },
  {
    question: "What’s the best way to practice Java backend skills?",
    answer:
      "Build projects end-to-end — from API design to database integration, security, testing, and deployment. Each project should solve a real problem and include documentation, CI/CD, and Docker setup. Avoid only tutorials — build, break, and fix your code.",
  },
  {
    question: "Can I become a Java developer without knowing frontend technologies?",
    answer:
      "Yes. Many backend engineers specialize in APIs and system design. However, knowing basic HTML, CSS, and JavaScript helps you test your APIs and collaborate better with frontend teams.",
  },
  {
    question: "How do I make my Java projects stand out to recruiters?",
    answer:
      "Host your projects on GitHub, write clear README files, and deploy at least one live demo using Render, Railway, or Docker Hub. Add tests, CI/CD pipelines, and proper API documentation (Swagger/OpenAPI).",
  },
];

export default function Faq() {
  return (
    <section className="bg-white py-16 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <header className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">💡 Java Developer FAQ</h2>
          <p className="mt-2 text-gray-600">
            Common questions answered to guide you from beginner to industry-ready Java backend developer.
          </p>
        </header>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <summary className="cursor-pointer flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-900 group-hover:text-yellow-700">
                  {faq.question}
                </h3>
                <span className="text-yellow-600 font-bold group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
            </details>
          ))}
        </div>

        <footer className="mt-12 text-sm text-gray-500 text-center">
          Keep learning, building, and iterating — that’s how Java mastery happens ☕🚀
        </footer>
      </div>
    </section>
  );
}
