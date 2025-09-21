// components/SystemDesignDocs.jsx
import React from "react";
import { ExternalLink } from "lucide-react";

const docsList = [
  {
    title: "Apache Kafka — Official Documentation",
    description:
      "Official docs for Kafka covering concepts, Streams API, Connect, architecture, and distributed messaging at scale.",
    url: "https://kafka.apache.org/documentation/",
    citation: "Apache Kafka",
  },
  {
    title: "Redis — Official Documentation",
    description:
      "In-memory caching system docs with guides on clustering, persistence, caching strategies, and distributed usage.",
    url: "https://redis.io/docs/",
    citation: "Redis Docs",
  },
  {
    title: "Elasticsearch — Official Documentation",
    description:
      "Search and indexing engine docs with inverted indexes, geo search, query DSL, aggregation, and production patterns.",
    url: "https://www.elastic.co/guide/index.html",
    citation: "Elasticsearch Docs",
  },
  {
    title: "gRPC — Official Documentation",
    description:
      "High-performance RPC framework docs covering service definitions, HTTP/2 transport, load balancing, and streaming.",
    url: "https://grpc.io/docs/",
    citation: "gRPC Docs",
  },
  {
    title: "Kubernetes — Official Documentation",
    description:
      "Container orchestration platform docs covering pods, services, deployments, scaling, networking, and monitoring.",
    url: "https://kubernetes.io/docs/",
    citation: "Kubernetes Docs",
  },
  {
    title: "AWS — Architecture Center",
    description:
      "Amazon Web Services official architecture guides, best practices, reference implementations, and scaling patterns.",
    url: "https://aws.amazon.com/architecture/",
    citation: "AWS Docs",
  },
  {
    title: "Google Cloud — Architecture Framework",
    description:
      "GCP’s official cloud architecture guidance, distributed design patterns, reliability, and security models.",
    url: "https://cloud.google.com/architecture/framework",
    citation: "GCP Docs",
  },
  {
    title: "Microsoft Azure — Architecture Center",
    description:
      "Azure’s architecture docs covering cloud design, microservices, distributed databases, and performance tuning.",
    url: "https://learn.microsoft.com/en-us/azure/architecture/",
    citation: "Azure Docs",
  },
  {
    title: "GeeksforGeeks — System Design Tutorial",
    description:
      "System design fundamentals: HLD, LLD, caching, load balancers, CDNs, messaging systems, and security principles.",
    url: "https://www.geeksforgeeks.org/system-design/system-design-tutorial/",
    citation: "GeeksforGeeks",
  },
  {
    title: "GeeksforGeeks — Highly Scalable Systems Guide",
    description:
      "Guide for building scalable distributed systems: sharding, replication, CAP theorem, and case studies.",
    url: "https://www.geeksforgeeks.org/system-design/guide-for-designing-highly-scalable-systems/",
    citation: "GeeksforGeeks",
  },
  {
    title: "System Design Primer — GitHub",
    description:
      "Popular open-source repository with curated topics, interview prep, and design case studies at scale.",
    url: "https://github.com/donnemartin/system-design-primer",
    citation: "GitHub",
  },
  {
    title: "Karan Pratap Singh — System Design Repo",
    description:
      "Structured system design repo with rate limiting, OAuth2, circuit breakers, and case studies for practice.",
    url: "https://github.com/karanpratapsingh/system-design",
    citation: "GitHub",
  },
  {
    title: "DesignGurus — Distributed System Design Guide",
    description:
      "Practical distributed system guide covering CAP theorem, consensus, partitioning, and real-world cases like Spanner, Netflix, DynamoDB.",
    url: "https://www.designgurus.io/blog/distributed-system-design-guide-for-beginners",
    citation: "Design Gurus",
  },
  {
    title: "DesignGurus — Technical Excellence Guide",
    description:
      "Best practices for demonstrating system design mastery with Kubernetes, Kafka, Redis, and cloud integration.",
    url: "https://www.designgurus.io/answers/detail/demonstrating-technical-excellence-in-system-design-interviews",
    citation: "Design Gurus",
  },
];

export default function SystemDesignDocs() {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          📚 System Design Documentation
        </h1>
        <p className="text-gray-600 mb-10">
          Official and popular documentation sites every System Design learner must know —
          distributed systems, caching, APIs, search, cloud, and scalability guides.
        </p>

        {/* Cards Grid */}
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
