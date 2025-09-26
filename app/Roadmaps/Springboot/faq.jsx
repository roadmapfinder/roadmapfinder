import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqData = [
  {
    question: "What is Spring Boot and why should I learn it?",
    answer:
      "Spring Boot is a framework that simplifies the development of production-ready Spring applications. Learning it allows you to build scalable REST APIs, microservices, and enterprise applications efficiently."
  },
  {
    question: "Which Java version is recommended for learning Spring Boot?",
    answer:
      "It is recommended to use Java 17 or higher since Spring Boot 3.x fully supports it and includes modern features like records, sealed classes, and pattern matching."
  },
  {
    question: "Do I need to know the core Spring Framework before Spring Boot?",
    answer:
      "Basic knowledge of Spring concepts like IoC, Dependency Injection, and annotations is helpful, but Spring Boot abstracts much of the configuration, so you can start with it directly."
  },
  {
    question: "How do I choose the database for my Spring Boot projects?",
    answer:
      "For beginners, H2 or SQLite are easy to start with. As you progress, PostgreSQL or MySQL is preferred for real-world projects. MongoDB can be used for NoSQL learning."
  },
  {
    question: "What is the difference between Spring Boot and Spring Cloud?",
    answer:
      "Spring Boot focuses on simplifying the development of individual applications, while Spring Cloud helps you build distributed, cloud-native microservices with features like service discovery, config management, and API gateways."
  },
  {
    question: "How important is Spring Security for beginners?",
    answer:
      "Basic understanding is essential because authentication and authorization are key in almost all applications. Start with simple JWT or role-based security and gradually explore OAuth2 and advanced configurations."
  },
  {
    question: "Can I build microservices without Spring Cloud?",
    answer:
      "Yes, you can build microservices using Spring Boot alone, but Spring Cloud simplifies service discovery, centralized configuration, and resiliency patterns like circuit breakers."
  },
  {
    question: "How do I deploy my Spring Boot application to the cloud?",
    answer:
      "You can deploy Spring Boot apps to cloud platforms like AWS, GCP, or Azure using Docker containers, or directly as JAR/WAR files. Learning Docker and Kubernetes is highly recommended for scalable deployments."
  },
  {
    question: "Which testing frameworks should I use?",
    answer:
      "JUnit 5 and Mockito are standard for unit and integration testing. Spring Boot provides @SpringBootTest, @WebMvcTest, and test slices to simplify testing of different layers."
  },
  {
    question: "How can I make my Spring Boot application production-ready?",
    answer:
      "Use Spring Boot Actuator for monitoring, configure externalized properties for different environments, enable caching, handle security properly, and use logging and metrics tools for observability."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <header className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            ❓ Spring Boot Roadmap FAQ
          </h2>
          <p className="mt-2 text-slate-600">
            Common questions learners have while progressing through the Spring Boot roadmap.
          </p>
        </header>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-2xl shadow-sm"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center p-4 text-left"
              >
                <span className="font-medium text-slate-900">{item.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-slate-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-slate-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4 text-slate-600">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <footer className="mt-10 text-sm text-slate-500">
          Tip: Keep revisiting these questions as you build projects to strengthen your understanding of Spring Boot.
        </footer>
      </div>
    </section>
  );
}
