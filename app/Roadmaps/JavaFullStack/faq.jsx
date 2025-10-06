// components/FAQ.jsx
import React from "react";

const faqs = [
  // ---------- CORE JAVA ----------
  {
    question: "Do I need to learn C or C++ before starting Java?",
    answer:
      "No, Java is a beginner-friendly language. You can start directly with Java — it covers all programming fundamentals like OOP, data types, loops, and conditionals.",
  },
  {
    question: "Which version of Java should I learn in 2025?",
    answer:
      "Learn Java 17 or later (Java 21 LTS if possible). These versions are stable, modern, and widely used in production for Spring Boot applications.",
  },
  {
    question: "How much DSA (Data Structures & Algorithms) is required for a Java Fullstack Engineer?",
    answer:
      "You should have solid understanding of arrays, strings, collections, OOP, recursion, and basic algorithms. You don’t need competitive-level DSA, but enough to solve real backend problems efficiently.",
  },

  // ---------- SPRING BOOT & BACKEND ----------
  {
    question: "Should I learn Servlets and JSP before Spring Boot?",
    answer:
      "Not required. You can go straight to Spring Boot. Servlets and JSP are outdated; Spring Boot abstracts most of that complexity while teaching modern development practices.",
  },
  {
    question: "What is the difference between Spring and Spring Boot?",
    answer:
      "Spring is the core framework, while Spring Boot is a layer built on top that simplifies configuration and setup using auto-configuration, starter dependencies, and embedded servers.",
  },
  {
    question: "Which database should I use — MySQL, PostgreSQL, or MongoDB?",
    answer:
      "Start with MySQL or PostgreSQL (relational). Later, learn MongoDB (NoSQL) for flexible document-based data. Most fullstack systems use both depending on requirements.",
  },
  {
    question: "Is Spring Security hard to learn?",
    answer:
      "It has a learning curve, but once you understand JWT authentication and filter chains, it becomes easier. Start with form-based login and gradually move to JWT-based APIs.",
  },

  // ---------- FRONTEND ----------
  {
    question: "Should I learn React or Angular for Java Fullstack?",
    answer:
      "React is currently more in demand and easier to integrate with Java backends. Focus on React with Axios for API calls, React Router for navigation, and TailwindCSS for UI.",
  },
  {
    question: "Do I need to master frontend as deeply as backend?",
    answer:
      "Not necessarily. As a fullstack engineer, you should know enough React to build dynamic UIs and integrate APIs, but your deeper focus should be on backend design and performance.",
  },

  // ---------- DEVOPS & DEPLOYMENT ----------
  {
    question: "Where should I deploy my Java Fullstack projects?",
    answer:
      "Use Render, Railway, or AWS EC2 for backend, and Vercel or Netlify for frontend. For industry readiness, learn Docker and basic CI/CD using GitHub Actions or Jenkins.",
  },
  {
    question: "Is Docker necessary for Java developers?",
    answer:
      "Yes, most modern companies containerize Java apps. Learn how to write Dockerfiles, build images, and run Spring Boot apps in containers for consistency across environments.",
  },

  // ---------- CAREER & LEARNING PATH ----------
  {
    question: "How long does it take to become industry ready in Java Fullstack?",
    answer:
      "Typically 12–18 months with consistent practice — 6 months for core Java + Spring Boot, 3 months for frontend (React), and 3–6 months for building real-world projects and deployment.",
  },
  {
    question: "What kind of projects should I have in my portfolio?",
    answer:
      "At least 3 strong projects: one CRUD app (Employee System), one advanced (E-Commerce or LMS), and one microservice/cloud project (Kafka or Docker-based).",
  },
  {
    question: "Can I get a job with just personal projects and no degree?",
    answer:
      "Yes, if your GitHub portfolio shows real, working projects with clean code, documentation, and deployment. Recruiters care about your ability to build and maintain production apps.",
  },
  {
    question: "How important are unit tests in Spring Boot?",
    answer:
      "Very important for production readiness. Learn JUnit and Mockito to write tests for controllers, services, and repositories. Testing is a key skill for backend engineers.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-white py-12 min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            ❓ Java Fullstack Engineer — FAQ
          </h2>
          <p className="mt-2 text-gray-600">
            Genuine questions asked by learners while mastering Java, Spring Boot, and fullstack development.
          </p>
        </header>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <article
              key={index}
              className="border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-gray-900 text-lg">
                {faq.question}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">{faq.answer}</p>
            </article>
          ))}
        </div>

        <footer className="mt-10 text-sm text-gray-500 text-center">
          Keep building, debugging, and deploying — that’s how you master Java Fullstack 🚀
        </footer>
      </div>
    </section>
  );
}
