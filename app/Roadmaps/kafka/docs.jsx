// components/Docs.jsx
import React from "react";
import { ExternalLink } from "lucide-react";

const docsList = [
  // Core Kafka
  {
    title: "Apache Kafka – Official Documentation",
    description:
      "The authoritative documentation for Apache Kafka covering architecture, concepts, APIs, configuration, and operations.",
    url: "https://kafka.apache.org/documentation/",
    citation: "Apache Software Foundation",
  },

  {
    title: "Kafka Quick Start",
    description:
      "Step-by-step guide to install Kafka, create topics, produce and consume messages using CLI.",
    url: "https://kafka.apache.org/quickstart",
    citation: "Apache Kafka",
  },

  // Confluent Platform
  {
    title: "Confluent Platform Documentation",
    description:
      "Comprehensive Kafka ecosystem docs including Kafka Streams, Connect, ksqlDB, Schema Registry, and security.",
    url: "https://docs.confluent.io/",
    citation: "Confluent",
  },

  // Kafka Clients
  {
    title: "Kafka Java Client API",
    description:
      "Official Java client documentation for building Kafka producers, consumers, and admin clients.",
    url: "https://kafka.apache.org/documentation/#api",
    citation: "Apache Kafka",
  },

  {
    title: "Kafka Python Client (confluent-kafka-python)",
    description:
      "High-performance Python client for Kafka built on top of librdkafka.",
    url: "https://docs.confluent.io/platform/current/clients/confluent-kafka-python/html/index.html",
    citation: "Confluent",
  },

  // Streaming & Processing
  {
    title: "Kafka Streams Documentation",
    description:
      "Guide to building real-time streaming applications using Kafka Streams with stateful and stateless processing.",
    url: "https://kafka.apache.org/documentation/streams/",
    citation: "Apache Kafka",
  },

  {
    title: "ksqlDB Documentation",
    description:
      "SQL-based streaming engine for Kafka enabling real-time data processing using simple SQL queries.",
    url: "https://docs.confluent.io/platform/current/ksqldb/index.html",
    citation: "Confluent",
  },

  // Integration & Connect
  {
    title: "Kafka Connect Documentation",
    description:
      "Framework for building scalable and reliable data pipelines using source and sink connectors.",
    url: "https://docs.confluent.io/platform/current/connect/index.html",
    citation: "Confluent",
  },

  {
    title: "Debezium Documentation (CDC)",
    description:
      "Change Data Capture platform that streams database changes into Kafka topics.",
    url: "https://debezium.io/documentation/",
    citation: "Debezium",
  },

  // Schema & Serialization
  {
    title: "Schema Registry Documentation",
    description:
      "Centralized schema management for Avro, Protobuf, and JSON with compatibility guarantees.",
    url: "https://docs.confluent.io/platform/current/schema-registry/index.html",
    citation: "Confluent",
  },

  // Operations & Security
  {
    title: "Kafka Security Documentation",
    description:
      "Covers authentication (SASL), authorization (ACLs), encryption (TLS), and secure Kafka setup.",
    url: "https://kafka.apache.org/documentation/#security",
    citation: "Apache Kafka",
  },

  {
    title: "Kafka Operations Guide",
    description:
      "Best practices for monitoring, scaling, tuning, and operating Kafka clusters in production.",
    url: "https://kafka.apache.org/documentation/#operations",
    citation: "Apache Kafka",
  },

  // Cloud Kafka
  {
    title: "Confluent Cloud Documentation",
    description:
      "Managed Kafka service documentation covering cluster setup, pricing, security, and observability.",
    url: "https://docs.confluent.io/cloud/current/overview.html",
    citation: "Confluent Cloud",
  },

  {
    title: "AWS MSK Documentation",
    description:
      "Amazon Managed Streaming for Apache Kafka (MSK) official documentation.",
    url: "https://docs.aws.amazon.com/msk/",
    citation: "AWS",
  },

  // Tutorials & Examples
  {
    title: "Kafka Tutorials (GitHub)",
    description:
      "Hands-on Kafka tutorials covering producers, consumers, Kafka Streams, ksqlDB, and Connect.",
    url: "https://github.com/confluentinc/kafka-tutorials",
    citation: "Confluent GitHub",
  },

  {
    title: "Kafka Improvement Proposals (KIPs)",
    description:
      "Design proposals and evolution of Kafka features — essential for advanced learners.",
    url: "https://cwiki.apache.org/confluence/display/KAFKA/Kafka+Improvement+Proposals",
    citation: "Apache Kafka",
  },
];

export default function Docs() {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          📘 Apache Kafka Documentation Sites
        </h1>
        <p className="text-gray-600 mb-10">
          Official and essential Kafka documentation links every learner must
          know — from beginner fundamentals to production-grade streaming.
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
