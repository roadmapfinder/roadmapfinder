import React from "react";

const docs = [
  {
    id: "spring-boot-ref",
    level: "Official",
    title: "Spring Boot Reference Documentation",
    description:
      "Comprehensive guide covering Spring Boot setup, configuration, and advanced features.",
    cta: "Open Docs",
    url: "https://docs.spring.io/spring-boot/docs/current/reference/html/"
  },
  {
    id: "spring-boot-project",
    level: "Official",
    title: "Spring Boot Project Page",
    description:
      "Official Spring Boot project page with features, guides, and support information.",
    cta: "Open Docs",
    url: "https://spring.io/projects/spring-boot"
  },
  {
    id: "spring-framework",
    level: "Official",
    title: "Spring Framework Documentation",
    description:
      "Detailed documentation on core Spring Framework concepts like IoC, AOP, and data access.",
    cta: "Open Docs",
    url: "https://docs.spring.io/spring-framework/reference/index.html"
  },
  {
    id: "spring-data",
    level: "Official",
    title: "Spring Data Documentation",
    description:
      "Documentation on Spring Data JPA, MongoDB, and other data access technologies.",
    cta: "Open Docs",
    url: "https://spring.io/projects/spring-data"
  },
  {
    id: "spring-security",
    level: "Official",
    title: "Spring Security",
    description:
      "Comprehensive guide on securing applications with Spring Security.",
    cta: "Open Docs",
    url: "https://docs.spring.io/spring-security/reference/index.html"
  },
  {
    id: "spring-cloud",
    level: "Official",
    title: "Spring Cloud Documentation",
    description:
      "Documentation for building cloud-native applications with Spring Cloud.",
    cta: "Open Docs",
    url: "https://spring.io/projects/spring-cloud"
  },
  {
    id: "spring-webflux",
    level: "Official",
    title: "Spring WebFlux",
    description:
      "Guide on building reactive web applications with Spring WebFlux.",
    cta: "Open Docs",
    url: "https://docs.spring.io/spring-framework/reference/web-reactive.html"
  },
  {
    id: "spring-boot-testing",
    level: "Official",
    title: "Spring Boot Testing",
    description:
      "Official documentation on testing Spring Boot applications.",
    cta: "Open Docs",
    url: "https://docs.spring.io/spring-boot/docs/current/reference/html/features.html#features.testing"
  },
  {
    id: "spring-boot-devtools",
    level: "Official",
    title: "Spring Boot DevTools",
    description:
      "Documentation on development-time tools to enhance the developer experience.",
    cta: "Open Docs",
    url: "https://docs.spring.io/spring-boot/docs/current/reference/html/features.html#features.devtools"
  },
  {
    id: "spring-boot-actuator",
    level: "Official",
    title: "Spring Boot Actuator",
    description:
      "Provides production-ready features like health checks, metrics, and monitoring endpoints.",
    cta: "Open Docs",
    url: "https://docs.spring.io/spring-boot/docs/current/reference/html/actuator.html"
  },
  {
    id: "spring-boot-deployment",
    level: "Official",
    title: "Spring Boot Deployment",
    description:
      "Guidelines on deploying Spring Boot applications in various environments.",
    cta: "Open Docs",
    url: "https://docs.spring.io/spring-boot/docs/current/reference/html/features.html#features.deploying"
  },
  {
    id: "spring-guides",
    level: "Official",
    title: "Spring Guides",
    description:
      "Step-by-step tutorials on various Spring projects and features.",
    cta: "Open Docs",
    url: "https://spring.io/guides"
  },
  {
    id: "spring-initializr",
    level: "Official",
    title: "Spring Initializr",
    description: "Web-based tool to generate Spring Boot projects quickly.",
    cta: "Open Docs",
    url: "https://start.spring.io"
  },
  {
    id: "spring-academy",
    level: "Official",
    title: "Spring Academy",
    description:
      "Courses and certifications to deepen your Spring knowledge.",
    cta: "Open Docs",
    url: "https://academy.spring.io"
  }
];

export default function DocsCards() {
  return (
    <section className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            🏗 Essential Spring Boot Documentation
          </h2>
          <p className="mt-2 text-slate-600 max-w-2xl">
            Explore official Spring Boot resources that every learner must know.
            These cover Spring Boot core, security, data access, cloud, reactive programming,
            deployment, and development tools.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {docs.map((d) => (
            <article
              key={d.id}
              className="group bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-transform transform hover:-translate-y-1"
              aria-labelledby={`${d.id}-title`}
            >
              <div className="flex items-start justify-between">
                <span className="inline-block text-xs font-medium bg-blue-50 text-indigo-700 px-2 py-1 rounded-full">
                  {d.level}
                </span>
                <a
                  href={d.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-slate-400 hover:text-blue-600 transition"
                  aria-label={`Open documentation for ${d.title}`}
                >
                  🔗 Docs
                </a>
              </div>

              <h3
                id={`${d.id}-title`}
                className="mt-4 text-lg font-semibold text-slate-900 group-hover:text-blue-600"
              >
                {d.title}
              </h3>

              <p className="mt-3 text-sm text-slate-600">{d.description}</p>

              <div className="mt-5 flex items-center justify-between">
                <a
                  href={d.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-blue-600 text-white px-4 py-2 text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                  {d.cta}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
                <span className="text-xs text-slate-400">Reference</span>
              </div>
            </article>
          ))}
        </div>

        <footer className="mt-10 text-sm text-slate-500">
          Tip: Bookmark these resources and revisit them often. Mastering Spring Boot means keeping up with
          evolving features, tools, and best practices.
        </footer>
      </div>
    </section>
  );
}
