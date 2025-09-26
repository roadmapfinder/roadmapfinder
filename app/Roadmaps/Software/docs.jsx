import React from "react";

const docs = [
  {
    id: "fowler-architecture",
    level: "Popular Resource",
    title: "Software Architecture Guide",
    description:
      "Martin Fowler’s guide provides a holistic view of software architecture, linking to key concepts and detailed articles.",
    cta: "Open Docs",
    url: "https://martinfowler.com/architecture/"
  },
  {
    id: "azure-patterns",
    level: "Official",
    title: "Cloud Design Patterns",
    description:
      "Azure Architecture Center's catalog of distributed system patterns, with trade-offs and implementation details.",
    cta: "Open Docs",
    url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/"
  },
  {
    id: "aws-patterns",
    level: "Official",
    title: "Cloud Design / Modernization Patterns",
    description:
      "AWS Prescriptive Guidance on cloud design patterns, modernization strategies, and best practices for architects.",
    cta: "Open Docs",
    url: "https://docs.aws.amazon.com/prescriptive-guidance/latest/cloud-design-patterns/introduction.html"
  },
  {
    id: "microservices-io",
    level: "Popular Resource",
    title: "Microservices Architecture / Patterns",
    description:
      "Chris Richardson’s microservices.io catalog of microservice patterns, trade-offs, and best practices.",
    cta: "Open Docs",
    url: "https://microservices.io/patterns/microservices.html"
  },
  {
    id: "dotnet-microservices",
    level: "Official",
    title: ".NET Microservices Architecture",
    description:
      "Microsoft’s documentation on designing and implementing microservices with .NET and containers.",
    cta: "Open Docs",
    url: "https://learn.microsoft.com/en-us/dotnet/architecture/microservices/"
  },
  {
    id: "gcp-microservices",
    level: "Official",
    title: "Microservices in Cloud Context",
    description:
      "Google Cloud’s documentation explaining microservices architecture in a cloud-native environment.",
    cta: "Open Docs",
    url: "https://cloud.google.com/learn/what-is-microservices-architecture"
  },
  {
    id: "redhat-patterns",
    level: "Popular Resource",
    title: "Architecture Styles / Patterns",
    description:
      "Red Hat’s overview of 14 software architecture patterns and when to apply them.",
    cta: "Open Docs",
    url: "https://www.redhat.com/en/blog/14-software-architecture-patterns"
  },
  {
    id: "c4-model",
    level: "Official",
    title: "C4 Model for Architecture Diagrams",
    description:
      "The official C4 Model site for context, container, component, and code views in architecture diagrams.",
    cta: "Open Docs",
    url: "https://c4model.com/"
  },
  {
    id: "4plus1-view",
    level: "Academic Reference",
    title: "4+1 View Model of Software Architecture",
    description:
      "The classic 'Architectural Blueprints: The 4+1 View Model' for structuring architecture views.",
    cta: "Open Docs",
    url: "https://arxiv.org/abs/2006.04975"
  },
  {
    id: "microservices-data",
    level: "Research",
    title: "Data Management in Microservices",
    description:
      "Survey on microservices data management: practices, challenges, and future research directions.",
    cta: "Open Docs",
    url: "https://arxiv.org/abs/2103.00170"
  },
  {
    id: "microservices-benchmark",
    level: "Research",
    title: "Benchmark Suite for Cloud & IoT Microservices",
    description:
      "An open-source benchmark suite designed to evaluate microservice-based systems in cloud and IoT contexts.",
    cta: "Open Docs",
    url: "https://arxiv.org/abs/1905.11055"
  }
];

export default function DocsCards() {
  return (
    <section className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            🏗 Essential Software Architecture Documentation
          </h2>
          <p className="mt-2 text-slate-600 max-w-2xl">
            Explore official and popular resources that every software architect
            must know. These cover patterns, system design, cloud architecture,
            microservices, and academic references.
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
          Tip: Bookmark these resources and revisit them often. Mastering
          architecture means keeping up with evolving patterns and practices.
        </footer>
      </div>
    </section>
  );
}
