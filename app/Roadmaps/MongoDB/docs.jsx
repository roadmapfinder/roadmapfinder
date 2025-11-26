// components/MongoDBDocs.jsx
import React from "react";
import { ExternalLink } from "lucide-react";

const docsList = [
  {
    title: "MongoDB Manual (Core Docs)",
    description:
      "The official and complete documentation for MongoDB including CRUD, indexing, aggregation, replication, and sharding.",
    url: "https://www.mongodb.com/docs/manual/",
    citation: "MongoDB Manual",
  },
  {
    title: "MongoDB Atlas Documentation",
    description:
      "Official doc for Atlas — MongoDB's fully managed cloud database. Covers clusters, security, backup, scaling, and deployments.",
    url: "https://www.mongodb.com/docs/atlas/",
    citation: "MongoDB Atlas",
  },
  {
    title: "MongoDB Drivers (All Languages)",
    description:
      "Official documentation for all MongoDB drivers including Node.js, Python, Java, Go, C#, PHP, and more.",
    url: "https://www.mongodb.com/docs/drivers/",
    citation: "MongoDB Drivers",
  },
  {
    title: "MongoDB Node.js Driver",
    description:
      "Complete reference for MongoDB Node.js driver — CRUD operations, aggregation, change streams, transactions, and best practices.",
    url: "https://www.mongodb.com/docs/drivers/node/current/",
    citation: "Node.js Driver",
  },
  {
    title: "MongoDB Aggregation Framework",
    description:
      "Deep dive into the Aggregation Pipeline — stages, operators, analytics queries, transformations, and powerful data processing.",
    url: "https://www.mongodb.com/docs/manual/aggregation/",
    citation: "Aggregation Docs",
  },
  {
    title: "Indexing Guide",
    description:
      "Learn everything about indexes including compound, text, wildcard, geospatial, TTL, performance tuning, and index design.",
    url: "https://www.mongodb.com/docs/manual/indexes/",
    citation: "Indexing",
  },
  {
    title: "Replication (Replica Sets)",
    description:
      "Official guide for high availability with MongoDB replica sets including elections, failover, read preferences, and configs.",
    url: "https://www.mongodb.com/docs/manual/replication/",
    citation: "Replication",
  },
  {
    title: "Sharding (Horizontal Scaling)",
    description:
      "Complete guide to sharding — shard keys, chunking, balancing, zone sharding, and designing scalable architectures.",
    url: "https://www.mongodb.com/docs/manual/sharding/",
    citation: "Sharding",
  },
  {
    title: "MongoDB Atlas Search",
    description:
      "Enterprise-grade text search with analyzers, scoring, query operators, relevance tuning, autocomplete, and faceted search.",
    url: "https://www.mongodb.com/docs/atlas/atlas-search/",
    citation: "Atlas Search",
  },
  {
    title: "MongoDB Vector Search",
    description:
      "Documentation for building semantic search, AI, and embedding-based retrieval systems with MongoDB Vector Search.",
    url: "https://www.mongodb.com/docs/atlas/atlas-vector-search/",
    citation: "Vector Search",
  },
  {
    title: "MongoDB Realm & Mobile Sync",
    description:
      "Docs for building offline-first apps with Realm Database and MongoDB Atlas sync.",
    url: "https://www.mongodb.com/docs/realm/",
    citation: "Realm",
  },
  {
    title: "MongoDB Change Streams",
    description:
      "Real-time database change notifications for building reactive, event-driven systems.",
    url: "https://www.mongodb.com/docs/manual/changeStreams/",
    citation: "Change Streams",
  },
  {
    title: "MongoDB Security Best Practices",
    description:
      "Official guide for authentication, role-based access, encryption, auditing, and cloud security configuration.",
    url: "https://www.mongodb.com/docs/manual/core/security/",
    citation: "Security",
  },
  {
    title: "MongoDB Compass",
    description:
      "GUI tool documentation for schema visualization, queries, aggregation building, and performance insights.",
    url: "https://www.mongodb.com/docs/compass/current/",
    citation: "Compass",
  },
  {
    title: "MongoDB Shell (mongosh)",
    description:
      "Documentation for the official MongoDB shell: scripting, administration, queries, and automation.",
    url: "https://www.mongodb.com/docs/mongodb-shell/",
    citation: "mongosh",
  },
  {
    title: "MongoDB Cloud CLI",
    description:
      "CLI documentation for managing MongoDB Atlas clusters, users, backups, projects, and automation.",
    url: "https://www.mongodb.com/docs/atlas/cli/",
    citation: "Atlas CLI",
  },
  {
    title: "MongoDB BI Connector",
    description:
      "Connect MongoDB to BI tools like Tableau, PowerBI, Excel, and analytics dashboards.",
    url: "https://www.mongodb.com/docs/bi-connector/current/",
    citation: "BI Connector",
  },
  {
    title: "MongoDB Kubernetes Operator",
    description:
      "Official docs for deploying and managing MongoDB clusters on Kubernetes using the MongoDB Enterprise Operator.",
    url: "https://www.mongodb.com/docs/kubernetes-operator/stable/",
    citation: "K8s Operator",
  },
  {
    title: "MongoDB Kafka Connector",
    description:
      "Documentation for integrating MongoDB with Kafka for streaming data pipelines.",
    url: "https://www.mongodb.com/docs/kafka-connector/current/",
    citation: "Kafka Connector",
  },
];

export default function MongoDBDocs() {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          🍃 Official MongoDB Documentation
        </h1>

        <p className="text-gray-600 mb-10">
          All essential MongoDB documentation sources — including core manual,
          drivers, Atlas, aggregation, indexing, replication, sharding, vector
          search, Realm, and cloud integrations.
        </p>

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
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-green-600">
                  {doc.title}
                </h3>
                <ExternalLink
                  size={18}
                  className="text-gray-400 group-hover:text-green-600"
                  aria-hidden="true"
                />
              </div>

              <p className="mt-3 text-sm text-gray-600">{doc.description}</p>

              <p className="mt-4 text-xs text-green-600 font-medium">
                {doc.citation}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
