// components/Docs.jsx
import React from "react";
import { ExternalLink } from "lucide-react";

const docsList = [
  // Backend Technologies
  {
    title: "Oracle Java Documentation",
    description:
      "Comprehensive resource for Java SE, including tutorials, API references, and guides.",
    url: "https://docs.oracle.com/en/java/",
    citation: "Oracle",
  },
  {
    title: "Dev.java - Getting Started with Java",
    description:
      "Beginner-friendly guide covering JDK setup, writing your first Java class, and creating applications.",
    url: "https://dev.java/learn/",
    citation: "Oracle",
  },
  {
    title: "Spring Boot Documentation",
    description:
      "Official guide for building stand-alone, production-grade Spring-based applications.",
    url: "https://docs.spring.io/spring-boot/index.html",
    citation: "Spring",
  },
  {
    title: "Spring Guides",
    description:
      "Step-by-step tutorials on various Spring Boot features and integrations.",
    url: "https://spring.io/guides",
    citation: "Spring",
  },

  // Frontend Technologies
  {
    title: "React Official Documentation",
    description: "Comprehensive resource for building user interfaces with React.",
    url: "https://react.dev/",
    citation: "React",
  },
  {
    title: "MDN Web Docs - Getting Started with React",
    description:
      "Beginner-friendly guide covering React basics and setup.",
    url: "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started",
    citation: "MDN Web Docs",
  },
  {
    title: "Angular Official Documentation",
    description: "Complete reference for building applications with Angular.",
    url: "https://angular.io/docs",
    citation: "Angular",
  },
  {
    title: "MDN Web Docs - Angular Getting Started",
    description:
      "Introduction to Angular's architecture and setup.",
    url: "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_getting_started",
    citation: "MDN Web Docs",
  },

  // Databases
  {
    title: "MySQL Developer Zone",
    description:
      "Detailed reference for MySQL, including version-specific manuals.",
    url: "https://dev.mysql.com/doc/",
    citation: "MySQL",
  },
  {
    title: "W3Schools MySQL Tutorial",
    description:
      "Beginner-friendly tutorials covering SQL basics and advanced topics.",
    url: "https://www.w3schools.com/mysql/",
    citation: "W3Schools",
  },
  {
    title: "MongoDB Official Documentation",
    description:
      "Comprehensive guide for MongoDB, including setup, CRUD operations, and advanced features.",
    url: "https://www.mongodb.com/docs/",
    citation: "MongoDB",
  },
  {
    title: "MongoDB Basics",
    description:
      "Beginner's guide to understanding MongoDB's document model and operations.",
    url: "https://www.mongodb.com/resources/fundamentals/basics",
    citation: "MongoDB",
  },

  // DevOps & Deployment
  {
    title: "Docker Documentation",
    description:
      "Complete resource for containerization, including installation, usage, and best practices.",
    url: "https://docs.docker.com/",
    citation: "Docker",
  },
  {
    title: "Docker Getting Started",
    description:
      "Beginner-friendly guide to building and running applications with Docker.",
    url: "https://www.docker.com/get-started",
    citation: "Docker",
  },
  {
    title: "Kubernetes Official Documentation",
    description:
      "Comprehensive guide to container orchestration with Kubernetes.",
    url: "https://kubernetes.io/docs/home/",
    citation: "Kubernetes",
  },
  {
    title: "Kubernetes Overview",
    description:
      "Introduction to Kubernetes concepts and architecture.",
    url: "https://kubernetes.io/docs/concepts/overview/",
    citation: "Kubernetes",
  },

  // Cloud Platforms
  {
    title: "AWS Official Documentation",
    description:
      "Complete reference for AWS services, including compute, storage, and networking.",
    url: "https://aws.amazon.com/documentation/",
    citation: "AWS",
  },
  {
    title: "AWS Getting Started",
    description: "Beginner's guide to deploying applications on AWS.",
    url: "https://aws.amazon.com/getting-started/",
    citation: "AWS",
  },

  // Additional Resources
  {
    title: "GeeksforGeeks - Java Full Stack",
    description:
      "Overview of the Java Full Stack, covering frontend, backend, and database technologies.",
    url: "https://www.geeksforgeeks.org/advance-java/java-full-stack/",
    citation: "GeeksforGeeks",
  },
];

export default function Docs() {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          📘 Java Full-Stack Documentation Sites
        </h1>
        <p className="text-gray-600 mb-10">
          Official documentation links for essential Java Full-Stack technologies
          that every learner should know in 2025.
        </p>

        {/* Cards */}
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
