import React from "react";
import { ExternalLink } from "lucide-react";

const docsList = [
  // Core Java & JVM
  {
    title: "Java SE Documentation",
    description:
      "The official resource for Java Standard Edition, including tutorials, API documentation, and developer guides.",
    url: "https://docs.oracle.com/en/java/",
    citation: "Oracle",
  },
  {
    title: "Java Tutorials",
    description:
      "Beginner-friendly tutorials covering Java basics, object-oriented programming, and more.",
    url: "https://docs.oracle.com/javase/tutorial/",
    citation: "Oracle",
  },
  {
    title: "Java Platform, Standard Edition API Specification",
    description:
      "Detailed API documentation for Java SE classes and interfaces.",
    url: "https://docs.oracle.com/en/java/javase/",
    citation: "Oracle",
  },

  // Build Tools
  {
    title: "Apache Maven Documentation",
    description:
      "Comprehensive guide to using Maven for project management and build automation.",
    url: "https://maven.apache.org/guides/",
    citation: "Apache Maven",
  },
  {
    title: "Gradle Documentation",
    description:
      "Official documentation for Gradle, a modern build automation tool.",
    url: "https://docs.gradle.org/current/userguide/",
    citation: "Gradle",
  },

  // Testing Frameworks
  {
    title: "JUnit 5 User Guide",
    description:
      "Official guide for JUnit 5, the most widely used testing framework in Java.",
    url: "https://docs.junit.org/current/user-guide/",
    citation: "JUnit",
  },
  {
    title: "Mockito Documentation",
    description:
      "Comprehensive documentation for Mockito, a popular mocking framework for unit tests.",
    url: "https://site.mockito.org/",
    citation: "Mockito",
  },

  // Web Development Frameworks
  {
    title: "Spring Framework Documentation",
    description:
      "Official documentation for the Spring Framework, covering core concepts, data access, and more.",
    url: "https://docs.spring.io/spring-framework/reference/index.html",
    citation: "Spring",
  },
  {
    title: "Spring Boot Documentation",
    description:
      "Guides and reference material for building production-ready applications with Spring Boot.",
    url: "https://docs.spring.io/spring-boot/docs/current/reference/html/",
    citation: "Spring Boot",
  },
  {
    title: "Hibernate ORM Documentation",
    description:
      "Official documentation for Hibernate ORM, a framework for object-relational mapping.",
    url: "https://hibernate.org/orm/documentation/",
    citation: "Hibernate",
  },

  // Cloud & Deployment
  {
    title: "Docker Documentation",
    description:
      "Official documentation for Docker, a platform for developing, shipping, and running applications.",
    url: "https://docs.docker.com",
    citation: "Docker",
  },
  {
    title: "Kubernetes Documentation",
    description:
      "Comprehensive guide to Kubernetes, an open-source system for automating deployment, scaling, and management of containerized applications.",
    url: "https://kubernetes.io/docs/",
    citation: "Kubernetes",
  },

  // Additional Learning Resources
  {
    title: "Dev.java Learn",
    description:
      "Interactive tutorials and resources for learning Java, including setting up the JDK and writing your first Java application.",
    url: "https://dev.java/learn/",
    citation: "Dev.java",
  },
  {
    title: "Spring Guides",
    description:
      "Hands-on guides to help you learn and use the Spring Framework.",
    url: "https://spring.io/guides",
    citation: "Spring",
  },
];

export default function Docs() {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          📘 Java Documentation Sites
        </h1>
        <p className="text-gray-600 mb-10">
          Official and popular Java documentation links that every learner should know in 2025.
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
