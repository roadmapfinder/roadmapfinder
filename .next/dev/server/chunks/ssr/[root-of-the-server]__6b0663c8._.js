module.exports = [
"[project]/app/Roadmaps/kafka/roadmapData.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "phases",
    ()=>phases
]);
const phases = [
    {
        id: 0,
        title: "Foundations",
        subtitle: "Prerequisites & Core Concepts (Before Kafka)",
        description: "Essential distributed systems and networking fundamentals before diving into Kafka",
        color: "bg-gray-600",
        sections: [
            {
                title: "Core Concepts",
                items: [
                    "Event-Driven Architecture → Understanding event-based system design patterns",
                    "Message Queues vs Logs → Differences between traditional queues and log-based systems",
                    "Synchronous vs Asynchronous → Communication patterns in distributed systems",
                    "CAP Theorem → Consistency, Availability, Partition tolerance trade-offs"
                ]
            },
            {
                title: "Distributed Systems Basics",
                items: [
                    "Replication → Data redundancy, fault tolerance strategies",
                    "Partitioning → Data distribution across multiple nodes",
                    "Leader-Follower Model → Primary-replica architecture patterns",
                    "Fault Tolerance → System resilience and failure handling"
                ]
            },
            {
                title: "Networking Basics",
                items: [
                    "TCP vs HTTP → Protocol differences and use cases",
                    "Latency vs Throughput → Performance metrics and trade-offs",
                    "Serialization Basics → Data encoding and decoding fundamentals"
                ]
            }
        ]
    },
    {
        id: 1,
        title: "Beginner",
        subtitle: "Kafka Core Concepts & Fundamentals (0-2 months)",
        description: "Master Kafka basics, architecture, and fundamental building blocks",
        color: "bg-yellow-600",
        sections: [
            {
                title: "Kafka Fundamentals",
                items: [
                    "What is Kafka → Distributed commit log, streaming platform architecture",
                    "Use Cases → Event streaming, messaging, data pipelines",
                    "Ecosystem Overview → Broker, Producer, Consumer components",
                    "Core Components → Topic, Partition, Offset concepts"
                ]
            },
            {
                title: "Topics & Partitions",
                items: [
                    "Partition Mechanics → How partitions work and scale",
                    "Ordering Guarantees → Message ordering within partitions",
                    "Keyed vs Non-Keyed → Message key impact on routing",
                    "Partition Count → Trade-offs and sizing considerations"
                ]
            },
            {
                title: "Producers & Consumers",
                items: [
                    "Producer Architecture → Message flow, key concepts (acks, retries)",
                    "Idempotent Producer → Preventing duplicate messages",
                    "Consumer Groups → Parallel processing and load distribution",
                    "Offset Management → Auto vs manual commit, delivery semantics"
                ]
            },
            {
                title: "Hands-On Practice",
                items: [
                    "Local Installation → Kafka setup with KRaft mode",
                    "CLI Operations → Create topics, produce and consume via terminal",
                    "Basic Producer → Write simple producer in Java/Python/Node",
                    "Basic Consumer → Implement consumer with offset management"
                ]
            }
        ]
    },
    {
        id: 2,
        title: "Intermediate",
        subtitle: "Real-World Usage & Advanced Configuration (2-5 months)",
        description: "Deep dive into Kafka architecture, schemas, and production-ready configurations",
        color: "bg-blue-500",
        sections: [
            {
                title: "Architecture Deep Dive",
                items: [
                    "Brokers & Clusters → Cluster topology, leader election mechanisms",
                    "ISR (In-Sync Replicas) → Replication management and synchronization",
                    "Replication Factor → High availability configuration strategies",
                    "Fault Tolerance → Handling broker and partition failures"
                ]
            },
            {
                title: "Serialization & Schemas",
                items: [
                    "Data Formats → JSON vs Avro vs Protobuf comparison",
                    "Schema Registry → Centralized schema management",
                    "Compatibility → Backward/forward compatibility strategies",
                    "Schema Evolution → Managing schema changes over time"
                ]
            },
            {
                title: "Consumer Groups & Delivery",
                items: [
                    "Rebalancing → Cooperative vs eager rebalancing strategies",
                    "Static Membership → Fixed partition assignments",
                    "Assignment Strategies → Range, round-robin, sticky patterns",
                    "Delivery Semantics → At-most-once, at-least-once, exactly-once (EOS)"
                ]
            },
            {
                title: "Configuration & Projects",
                items: [
                    "Producer Tuning → batch.size, linger.ms, compression settings",
                    "Consumer Tuning → fetch.min.bytes, max.poll.records optimization",
                    "Order Processing → Build reliable order processing system",
                    "Log Aggregation → Implement centralized logging pipeline"
                ]
            }
        ]
    },
    {
        id: 3,
        title: "Advanced",
        subtitle: "Stream Processing & Real-Time Analytics (5-10 months)",
        description: "Master Kafka Streams, ksqlDB, and Connect for advanced streaming applications",
        color: "bg-green-500",
        sections: [
            {
                title: "Kafka Streams",
                items: [
                    "Stream vs Table → KStream vs KTable abstractions",
                    "Processing Types → Stateful vs stateless operations",
                    "Windowing → Tumbling, hopping, sliding window operations",
                    "Joins → Stream-stream, stream-table join patterns"
                ]
            },
            {
                title: "Exactly-Once Processing",
                items: [
                    "EOS in Streams → Exactly-once semantics implementation",
                    "Transactions → Transactional processing guarantees",
                    "Commit Intervals → Tuning commit frequency",
                    "State Stores → Managing stateful processing data"
                ]
            },
            {
                title: "ksqlDB & Kafka Connect",
                items: [
                    "SQL on Streams → Continuous queries with ksqlDB",
                    "Materialized Views → Real-time view maintenance",
                    "Source Connectors → JDBC, Debezium (CDC), file sources",
                    "Sink Connectors → S3, Elasticsearch, database sinks"
                ]
            },
            {
                title: "Advanced Projects",
                items: [
                    "Real-Time Analytics → Build live dashboard with Kafka Streams",
                    "CDC Pipeline → Debezium → Kafka → Database sync",
                    "Fraud Detection → Streaming pattern detection system",
                    "SMTs & Error Handling → Single Message Transforms, DLQs"
                ]
            }
        ]
    },
    {
        id: 4,
        title: "Production",
        subtitle: "Industry-Ready Kafka Operations (8-14 months)",
        description: "Production cluster design, monitoring, security, and enterprise deployment",
        color: "bg-purple-500",
        sections: [
            {
                title: "Cluster Design & Planning",
                items: [
                    "Topic Design → Naming conventions, partition strategy",
                    "Partition Sizing → Capacity planning and scaling decisions",
                    "Retention Policies → Time vs size-based retention",
                    "Compaction → Log compaction vs deletion strategies"
                ]
            },
            {
                title: "Monitoring & Observability",
                items: [
                    "Key Metrics → Consumer lag, under-replicated partitions, ISR shrink",
                    "Monitoring Tools → Prometheus, Grafana, Confluent Control Center",
                    "Alerting → Setting up proactive monitoring alerts",
                    "Log Analysis → Troubleshooting with Kafka logs"
                ]
            },
            {
                title: "Security & Compliance",
                items: [
                    "TLS Encryption → Securing data in transit",
                    "SASL Authentication → PLAIN, SCRAM, OAuth mechanisms",
                    "ACLs → Access control lists, authorization policies",
                    "Secrets Management → Credential rotation and storage"
                ]
            },
            {
                title: "Performance & Failure Handling",
                items: [
                    "Horizontal Scaling → Adding brokers, repartitioning strategies",
                    "Hot Partitions → Identifying and resolving partition skew",
                    "Disaster Recovery → Multi-DC Kafka, MirrorMaker 2 setup",
                    "Poison Messages → Dead Letter Topics, replay strategies"
                ]
            }
        ]
    },
    {
        id: 5,
        title: "Enterprise",
        subtitle: "Advanced Internals & Cloud Architecture (12-18 months)",
        description: "Senior/Staff engineer level - internals, cloud platforms, and event-driven design",
        color: "bg-red-500",
        sections: [
            {
                title: "Advanced Internals",
                items: [
                    "Log Segments → Internal storage mechanism, segment management",
                    "Page Cache & Disk I/O → Zero-copy optimization, OS-level caching",
                    "Controller Internals → Cluster coordination and metadata management",
                    "KRaft vs Zookeeper → Modern consensus protocol, ZK removal"
                ]
            },
            {
                title: "Cloud Kafka Platforms",
                items: [
                    "Confluent Cloud → Managed Kafka service, features and pricing",
                    "AWS MSK → Amazon Managed Streaming for Kafka setup",
                    "Azure Event Hubs → Kafka-compatible event streaming",
                    "Cost Optimization → Resource management, performance tuning"
                ]
            },
            {
                title: "Kafka + Modern Stack",
                items: [
                    "Kafka on Kubernetes → Strimzi, Kafka Operators deployment",
                    "GitOps → Infrastructure as code, configuration management",
                    "Helm Charts → Kubernetes deployment automation",
                    "Service Mesh → Istio, Linkerd integration patterns"
                ]
            },
            {
                title: "Event-Driven System Design",
                items: [
                    "Event Versioning → Schema evolution, backward compatibility",
                    "Event Choreography → Decoupled service communication",
                    "Saga Pattern → Distributed transaction management",
                    "Event Sourcing → When to use and when NOT to use"
                ]
            }
        ]
    },
    {
        id: 6,
        title: "Projects Portfolio",
        subtitle: "Must-Build Kafka Projects for Hire-Ready Profile",
        description: "Industry-standard projects demonstrating production-level Kafka expertise",
        color: "bg-indigo-600",
        sections: [
            {
                title: "Core Production Systems",
                items: [
                    "Order Processing → Real-time order management with EOS guarantees",
                    "Activity Tracking → User behavior analytics platform",
                    "CDC Pipeline → Database change capture to analytics warehouse",
                    "Fraud Detection → Real-time anomaly detection streaming system"
                ]
            },
            {
                title: "Enterprise Applications",
                items: [
                    "Log Aggregation → Centralized logging with alerting system",
                    "Multi-Tenant Platform → Isolated Kafka environments per tenant",
                    "Event-Driven Microservices → Service orchestration with Kafka",
                    "Real-Time Dashboard → Live metrics with Kafka Streams processing"
                ]
            },
            {
                title: "Interview Preparation",
                items: [
                    "System Design → Whiteboarding event flows, architecture decisions",
                    "Kafka vs Alternatives → RabbitMQ, Pulsar, Kinesis comparisons",
                    "Troubleshooting → Debug consumer lag, rebalancing issues",
                    "Scenarios → Handling failures, scaling strategies, exactly-once"
                ]
            },
            {
                title: "Bonus Skills",
                items: [
                    "Performance Tuning → Throughput optimization, latency reduction",
                    "Capacity Planning → Resource estimation for production workloads",
                    "Multi-DC Setup → Active-active vs active-passive strategies",
                    "Migration Strategies → Moving from legacy systems to Kafka"
                ]
            }
        ]
    }
];
}),
"[project]/app/Roadmaps/kafka/docs.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/Docs.jsx
__turbopack_context__.s([
    "default",
    ()=>Docs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-ssr] (ecmascript) <export default as ExternalLink>");
;
;
;
const docsList = [
    // Core Kafka
    {
        title: "Apache Kafka – Official Documentation",
        description: "The authoritative documentation for Apache Kafka covering architecture, concepts, APIs, configuration, and operations.",
        url: "https://kafka.apache.org/documentation/",
        citation: "Apache Software Foundation"
    },
    {
        title: "Kafka Quick Start",
        description: "Step-by-step guide to install Kafka, create topics, produce and consume messages using CLI.",
        url: "https://kafka.apache.org/quickstart",
        citation: "Apache Kafka"
    },
    // Confluent Platform
    {
        title: "Confluent Platform Documentation",
        description: "Comprehensive Kafka ecosystem docs including Kafka Streams, Connect, ksqlDB, Schema Registry, and security.",
        url: "https://docs.confluent.io/",
        citation: "Confluent"
    },
    // Kafka Clients
    {
        title: "Kafka Java Client API",
        description: "Official Java client documentation for building Kafka producers, consumers, and admin clients.",
        url: "https://kafka.apache.org/documentation/#api",
        citation: "Apache Kafka"
    },
    {
        title: "Kafka Python Client (confluent-kafka-python)",
        description: "High-performance Python client for Kafka built on top of librdkafka.",
        url: "https://docs.confluent.io/platform/current/clients/confluent-kafka-python/html/index.html",
        citation: "Confluent"
    },
    // Streaming & Processing
    {
        title: "Kafka Streams Documentation",
        description: "Guide to building real-time streaming applications using Kafka Streams with stateful and stateless processing.",
        url: "https://kafka.apache.org/documentation/streams/",
        citation: "Apache Kafka"
    },
    {
        title: "ksqlDB Documentation",
        description: "SQL-based streaming engine for Kafka enabling real-time data processing using simple SQL queries.",
        url: "https://docs.confluent.io/platform/current/ksqldb/index.html",
        citation: "Confluent"
    },
    // Integration & Connect
    {
        title: "Kafka Connect Documentation",
        description: "Framework for building scalable and reliable data pipelines using source and sink connectors.",
        url: "https://docs.confluent.io/platform/current/connect/index.html",
        citation: "Confluent"
    },
    {
        title: "Debezium Documentation (CDC)",
        description: "Change Data Capture platform that streams database changes into Kafka topics.",
        url: "https://debezium.io/documentation/",
        citation: "Debezium"
    },
    // Schema & Serialization
    {
        title: "Schema Registry Documentation",
        description: "Centralized schema management for Avro, Protobuf, and JSON with compatibility guarantees.",
        url: "https://docs.confluent.io/platform/current/schema-registry/index.html",
        citation: "Confluent"
    },
    // Operations & Security
    {
        title: "Kafka Security Documentation",
        description: "Covers authentication (SASL), authorization (ACLs), encryption (TLS), and secure Kafka setup.",
        url: "https://kafka.apache.org/documentation/#security",
        citation: "Apache Kafka"
    },
    {
        title: "Kafka Operations Guide",
        description: "Best practices for monitoring, scaling, tuning, and operating Kafka clusters in production.",
        url: "https://kafka.apache.org/documentation/#operations",
        citation: "Apache Kafka"
    },
    // Cloud Kafka
    {
        title: "Confluent Cloud Documentation",
        description: "Managed Kafka service documentation covering cluster setup, pricing, security, and observability.",
        url: "https://docs.confluent.io/cloud/current/overview.html",
        citation: "Confluent Cloud"
    },
    {
        title: "AWS MSK Documentation",
        description: "Amazon Managed Streaming for Apache Kafka (MSK) official documentation.",
        url: "https://docs.aws.amazon.com/msk/",
        citation: "AWS"
    },
    // Tutorials & Examples
    {
        title: "Kafka Tutorials (GitHub)",
        description: "Hands-on Kafka tutorials covering producers, consumers, Kafka Streams, ksqlDB, and Connect.",
        url: "https://github.com/confluentinc/kafka-tutorials",
        citation: "Confluent GitHub"
    },
    {
        title: "Kafka Improvement Proposals (KIPs)",
        description: "Design proposals and evolution of Kafka features — essential for advanced learners.",
        url: "https://cwiki.apache.org/confluence/display/KAFKA/Kafka+Improvement+Proposals",
        citation: "Apache Kafka"
    }
];
function Docs() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "px-6 py-12 bg-gray-50 min-h-screen",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-3xl font-bold text-gray-900 mb-6",
                    children: "📘 Apache Kafka Documentation Sites"
                }, void 0, false, {
                    fileName: "[project]/app/Roadmaps/kafka/docs.jsx",
                    lineNumber: 149,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-600 mb-10",
                    children: "Official and essential Kafka documentation links every learner must know — from beginner fundamentals to production-grade streaming."
                }, void 0, false, {
                    fileName: "[project]/app/Roadmaps/kafka/docs.jsx",
                    lineNumber: 152,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
                    children: docsList.map((doc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: doc.url,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition transform hover:-translate-y-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold text-gray-900 group-hover:text-blue-600",
                                            children: doc.title
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/kafka/docs.jsx",
                                            lineNumber: 168,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                            size: 18,
                                            className: "text-gray-400 group-hover:text-blue-600",
                                            "aria-hidden": "true"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/kafka/docs.jsx",
                                            lineNumber: 171,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Roadmaps/kafka/docs.jsx",
                                    lineNumber: 167,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-3 text-sm text-gray-600",
                                    children: doc.description
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/kafka/docs.jsx",
                                    lineNumber: 177,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-4 text-xs text-indigo-600 font-medium",
                                    children: doc.citation
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/kafka/docs.jsx",
                                    lineNumber: 178,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, doc.title, true, {
                            fileName: "[project]/app/Roadmaps/kafka/docs.jsx",
                            lineNumber: 160,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/Roadmaps/kafka/docs.jsx",
                    lineNumber: 158,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/Roadmaps/kafka/docs.jsx",
            lineNumber: 147,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/Roadmaps/kafka/docs.jsx",
        lineNumber: 146,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/Roadmaps/kafka/projects.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/Projects.jsx
__turbopack_context__.s([
    "default",
    ()=>Projects
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const projects = [
    // ---------- BEGINNER PROJECTS ----------
    {
        id: "kafka-order-processing",
        level: "Kafka — Beginner",
        title: "Log Processing System",
        description: "Build an event-driven order processing pipeline where producers publish orders and consumers validate, process, and store them reliably.",
        url: "https://youtu.be/hNDjd9I_VGA?si=6TH8GpHJaSZkqqKf"
    },
    {
        id: "kafka-user-activity-tracking",
        level: "Kafka — Beginner",
        title: "User Activity Tracking Pipeline",
        description: "Stream user actions like login, clicks, and purchases into Kafka and consume them for analytics and monitoring.",
        url: "https://youtu.be/NEgesasu5OA?si=JR7c0YtvtHkjtKi1"
    },
    // ---------- INTERMEDIATE PROJECTS ----------
    {
        id: "kafka-cdc-debezium",
        level: "Kafka — Intermediate",
        title: "Change Data Capture (CDC) Pipeline",
        description: "Capture database changes using Debezium and Kafka Connect, then stream them to downstream systems in real time.",
        url: "https://youtu.be/TkNDjnp-1tw?si=zUrzhvsn2nlmJIYc"
    },
    {
        id: "kafka-log-aggregation",
        level: "Kafka — Intermediate",
        title: "Centralized Log Aggregation Platform",
        description: "Collect logs from multiple services into Kafka and push them to Elasticsearch or OpenSearch for search and analysis.",
        url: "https://youtu.be/TA2XzAN3FNQ?si=TSejw4wdmQUIdXu0"
    },
    // ---------- ADVANCED PROJECTS ----------
    {
        id: "kafka-fraud-detection",
        level: "Kafka — Advanced",
        title: "Real-Time Fraud Detection System",
        description: "Use Kafka Streams or ksqlDB to analyze transaction streams and detect suspicious patterns using windowed processing.",
        url: "https://youtu.be/Pf1pB6etxEQ?si=qWfw7zKebgktYRch"
    },
    {
        id: "kafka-multi-tenant-platform",
        level: "Kafka — Advanced",
        title: "Multi-Tenant Event Streaming Platform",
        description: "Design a secure, scalable Kafka platform supporting multiple teams with ACLs, quotas, monitoring, and disaster recovery.",
        url: "https://youtu.be/8hcUBhLE6_U?si=2-CjvCG8pi9T9nl9"
    }
];
function Projects() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-gray-50 py-12 min-h-screen",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "mb-8 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl font-extrabold text-gray-900",
                            children: "🔥 Apache Kafka Project Roadmap"
                        }, void 0, false, {
                            fileName: "[project]/app/Roadmaps/kafka/projects.jsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2 text-gray-600",
                            children: "From foundational Kafka projects to production-grade streaming systems — designed to make you industry-ready."
                        }, void 0, false, {
                            fileName: "[project]/app/Roadmaps/kafka/projects.jsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Roadmaps/kafka/projects.jsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
                    children: projects.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform",
                            "aria-labelledby": `${p.id}-title`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-block text-xs font-medium bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full",
                                    children: p.level
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/kafka/projects.jsx",
                                    lineNumber: 81,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    id: `${p.id}-title`,
                                    className: "mt-4 text-lg font-semibold text-gray-900 group-hover:text-indigo-600",
                                    children: p.title
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/kafka/projects.jsx",
                                    lineNumber: 85,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-gray-600 text-sm",
                                    children: p.description
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/kafka/projects.jsx",
                                    lineNumber: 92,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: p.url,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "mt-4 inline-block text-indigo-600 font-medium hover:underline",
                                    children: "View Tutorial ▶"
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/kafka/projects.jsx",
                                    lineNumber: 96,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, p.id, true, {
                            fileName: "[project]/app/Roadmaps/kafka/projects.jsx",
                            lineNumber: 76,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/Roadmaps/kafka/projects.jsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                    className: "mt-10 text-sm text-gray-500 text-center",
                    children: "Build these Kafka projects end-to-end and you’ll be ready for real-world streaming systems 🚀"
                }, void 0, false, {
                    fileName: "[project]/app/Roadmaps/kafka/projects.jsx",
                    lineNumber: 108,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/Roadmaps/kafka/projects.jsx",
            lineNumber: 64,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/Roadmaps/kafka/projects.jsx",
        lineNumber: 63,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/Roadmaps/kafka/faq.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/Faq.jsx
__turbopack_context__.s([
    "default",
    ()=>Faq
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
"use client";
;
;
;
const faqs = [
    {
        question: "What is Apache Kafka and why is it used?",
        answer: "Apache Kafka is a distributed event streaming platform used to build real-time data pipelines and event-driven systems. It is widely used for high-throughput messaging, real-time analytics, log aggregation, and data integration between services."
    },
    {
        question: "Is Kafka a message queue like RabbitMQ?",
        answer: "Kafka is not a traditional message queue. It is a distributed commit log designed for high throughput, durability, and replayability. Unlike RabbitMQ, Kafka allows multiple consumers to read the same data independently and retain messages for a configurable time."
    },
    {
        question: "Do I need prior experience in distributed systems to learn Kafka?",
        answer: "No, but having basic knowledge of backend development, networking, and asynchronous processing will help. Kafka concepts like partitions, replication, and consumer groups become much easier once you understand distributed system fundamentals."
    },
    {
        question: "Which programming language is best for Kafka?",
        answer: "Kafka is language-agnostic. Java is most commonly used due to native support, but Kafka works extremely well with Python, Node.js, Go, and C#. Choose the language you are already comfortable with."
    },
    {
        question: "What is the difference between Kafka Streams and ksqlDB?",
        answer: "Kafka Streams is a Java library for building stream processing applications with full control over logic and state. ksqlDB allows you to process Kafka data using SQL-like queries, making it easier and faster for analytics use cases."
    },
    {
        question: "Is Kafka difficult to use in production?",
        answer: "Kafka itself is powerful but complex. Production readiness involves understanding monitoring, security, scaling, and failure handling. Managed services like Confluent Cloud or AWS MSK significantly reduce operational complexity."
    },
    {
        question: "How long does it take to become job-ready in Kafka?",
        answer: "With consistent practice and real projects, most learners become Kafka job-ready in 2–3 months. Building production-style projects is far more important than memorizing concepts."
    },
    {
        question: "What kind of roles require Kafka knowledge?",
        answer: "Kafka is commonly used in Backend Engineer, Data Engineer, Platform Engineer, and Distributed Systems roles. It is especially valuable in companies working with real-time data."
    }
];
function Faq() {
    const [openIndex, setOpenIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const toggleFaq = (index)=>{
        setOpenIndex(openIndex === index ? null : index);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-white py-14 px-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "text-center mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl font-extrabold text-gray-900",
                            children: "❓ Kafka FAQs"
                        }, void 0, false, {
                            fileName: "[project]/app/Roadmaps/kafka/faq.jsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-3 text-gray-600",
                            children: "Clear answers to common questions every Kafka learner asks before going industry-ready."
                        }, void 0, false, {
                            fileName: "[project]/app/Roadmaps/kafka/faq.jsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Roadmaps/kafka/faq.jsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: faqs.map((faq, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border border-gray-200 rounded-2xl bg-gray-50 overflow-hidden transition",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>toggleFaq(index),
                                    className: "w-full flex items-center justify-between p-5 text-left focus:outline-none focus-visible:ring focus-visible:ring-indigo-500",
                                    "aria-expanded": openIndex === index,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-base font-semibold text-gray-900",
                                            children: faq.question
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/kafka/faq.jsx",
                                            lineNumber: 81,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                            className: `h-5 w-5 text-gray-500 transition-transform ${openIndex === index ? "rotate-180" : ""}`
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/kafka/faq.jsx",
                                            lineNumber: 84,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Roadmaps/kafka/faq.jsx",
                                    lineNumber: 76,
                                    columnNumber: 15
                                }, this),
                                openIndex === index && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-5 pb-5 text-sm text-gray-600 leading-relaxed",
                                    children: faq.answer
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/kafka/faq.jsx",
                                    lineNumber: 92,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/app/Roadmaps/kafka/faq.jsx",
                            lineNumber: 72,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/Roadmaps/kafka/faq.jsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                    className: "mt-12 text-center text-sm text-gray-500",
                    children: "Still confused? Build projects — Kafka makes the most sense when you use it 🚀"
                }, void 0, false, {
                    fileName: "[project]/app/Roadmaps/kafka/faq.jsx",
                    lineNumber: 101,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/Roadmaps/kafka/faq.jsx",
            lineNumber: 58,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/Roadmaps/kafka/faq.jsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
}),
"[externals]/@react-pdf/renderer [external] (@react-pdf/renderer, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("@react-pdf/renderer");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/app/Roadmaps/kafka/downloadPdf.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "PDFDownloadButton",
    ()=>PDFDownloadButton,
    "downloadAdvancedRoadmapPDF",
    ()=>downloadAdvancedRoadmapPDF,
    "downloadRoadmapPDF",
    ()=>downloadRoadmapPDF
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@react-pdf/renderer [external] (@react-pdf/renderer, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$file$2d$saver$2f$dist$2f$FileSaver$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/file-saver/dist/FileSaver.min.js [app-ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
// Define styles for the PDF
const styles = __TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["StyleSheet"].create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#f8fafc',
        padding: 30,
        fontFamily: 'Helvetica'
    },
    header: {
        marginBottom: 30,
        textAlign: 'center',
        paddingBottom: 20,
        borderBottomWidth: 2,
        borderBottomColor: '#3b82f6'
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#1f2937',
        marginBottom: 8
    },
    subtitle: {
        fontSize: 16,
        color: '#6b7280',
        fontWeight: 'normal'
    },
    phaseContainer: {
        marginBottom: 25,
        backgroundColor: '#ffffff',
        borderRadius: 8,
        padding: 20,
        borderWidth: 1,
        borderColor: '#e5e7eb'
    },
    phaseHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15
    },
    phaseNumber: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#3b82f6',
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 40,
        marginRight: 15
    },
    phaseTitleContainer: {
        flex: 1
    },
    phaseTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1f2937',
        marginBottom: 2
    },
    phaseSubtitle: {
        fontSize: 12,
        color: '#6b7280',
        marginBottom: 2
    },
    phaseDescription: {
        fontSize: 14,
        color: '#374151',
        fontWeight: 'normal'
    },
    sectionsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 15
    },
    section: {
        flex: '1 1 45%',
        backgroundColor: '#f8fafc',
        borderRadius: 6,
        padding: 15,
        borderLeftWidth: 4,
        borderLeftColor: '#3b82f6',
        marginBottom: 10
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#3b82f6',
        marginBottom: 10
    },
    itemsList: {
        gap: 6
    },
    item: {
        fontSize: 11,
        color: '#374151',
        lineHeight: 1.4,
        paddingLeft: 12,
        marginBottom: 4
    },
    itemNumber: {
        fontWeight: 'bold',
        color: '#1f2937'
    },
    phaseConnector: {
        alignSelf: 'center',
        marginVertical: 15,
        paddingVertical: 8,
        paddingHorizontal: 20,
        backgroundColor: '#f3f4f6',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#d1d5db'
    },
    connectorText: {
        fontSize: 12,
        color: '#6b7280',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    footer: {
        marginTop: 30,
        padding: 20,
        backgroundColor: '#ecfdf5',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#10b981',
        textAlign: 'center'
    },
    footerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#065f46',
        marginBottom: 8
    },
    footerText: {
        fontSize: 14,
        color: '#047857',
        lineHeight: 1.5
    },
    pageNumber: {
        position: 'absolute',
        fontSize: 10,
        bottom: 20,
        right: 30,
        color: '#6b7280'
    },
    watermark: {
        position: 'absolute',
        top: 50,
        right: 30,
        fontSize: 8,
        color: '#d1d5db',
        opacity: 0.5
    }
});
// PDF Document Component
const RoadmapPDFDocument = ({ phases })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Document"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Page"], {
            size: "A4",
            style: styles.page,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                    style: styles.header,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                            style: styles.title,
                            children: "Kafka Developer Roadmap"
                        }, void 0, false, {
                            fileName: "[project]/app/Roadmaps/kafka/downloadPdf.jsx",
                            lineNumber: 168,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                            style: styles.subtitle,
                            children: "Your Complete Journey from Beginner to Professional"
                        }, void 0, false, {
                            fileName: "[project]/app/Roadmaps/kafka/downloadPdf.jsx",
                            lineNumber: 169,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Roadmaps/kafka/downloadPdf.jsx",
                    lineNumber: 167,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                phases.map((phase, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                        wrap: false,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                                style: styles.phaseContainer,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                                        style: styles.phaseHeader,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                                style: [
                                                    styles.phaseNumber,
                                                    {
                                                        backgroundColor: getPhaseColor(phase.color)
                                                    }
                                                ],
                                                children: phase.id
                                            }, void 0, false, {
                                                fileName: "[project]/app/Roadmaps/kafka/downloadPdf.jsx",
                                                lineNumber: 180,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                                                style: styles.phaseTitleContainer,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                                        style: styles.phaseTitle,
                                                        children: phase.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Roadmaps/kafka/downloadPdf.jsx",
                                                        lineNumber: 184,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                                        style: styles.phaseSubtitle,
                                                        children: phase.subtitle
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Roadmaps/kafka/downloadPdf.jsx",
                                                        lineNumber: 185,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                                        style: styles.phaseDescription,
                                                        children: phase.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Roadmaps/kafka/downloadPdf.jsx",
                                                        lineNumber: 186,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/Roadmaps/kafka/downloadPdf.jsx",
                                                lineNumber: 183,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/Roadmaps/kafka/downloadPdf.jsx",
                                        lineNumber: 179,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                                        style: styles.sectionsContainer,
                                        children: phase.sections.map((section, sectionIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                                                style: styles.section,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                                        style: styles.sectionTitle,
                                                        children: section.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Roadmaps/kafka/downloadPdf.jsx",
                                                        lineNumber: 194,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                                                        style: styles.itemsList,
                                                        children: section.items.map((item, itemIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                                                style: styles.item,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                                                        style: styles.itemNumber,
                                                                        children: [
                                                                            itemIndex + 1,
                                                                            "."
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/Roadmaps/kafka/downloadPdf.jsx",
                                                                        lineNumber: 198,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    " ",
                                                                    item
                                                                ]
                                                            }, itemIndex, true, {
                                                                fileName: "[project]/app/Roadmaps/kafka/downloadPdf.jsx",
                                                                lineNumber: 197,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Roadmaps/kafka/downloadPdf.jsx",
                                                        lineNumber: 195,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, sectionIndex, true, {
                                                fileName: "[project]/app/Roadmaps/kafka/downloadPdf.jsx",
                                                lineNumber: 193,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/app/Roadmaps/kafka/downloadPdf.jsx",
                                        lineNumber: 191,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/Roadmaps/kafka/downloadPdf.jsx",
                                lineNumber: 177,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            index < phases.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                                style: styles.phaseConnector,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                    style: styles.connectorText,
                                    children: [
                                        "↓ Next: Phase ",
                                        phase.id + 1
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Roadmaps/kafka/downloadPdf.jsx",
                                    lineNumber: 210,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/Roadmaps/kafka/downloadPdf.jsx",
                                lineNumber: 209,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, phase.id, true, {
                        fileName: "[project]/app/Roadmaps/kafka/downloadPdf.jsx",
                        lineNumber: 176,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                    style: styles.pageNumber,
                    render: ({ pageNumber, totalPages })=>`${pageNumber} / ${totalPages}`,
                    fixed: true
                }, void 0, false, {
                    fileName: "[project]/app/Roadmaps/kafka/downloadPdf.jsx",
                    lineNumber: 221,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/Roadmaps/kafka/downloadPdf.jsx",
            lineNumber: 165,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/Roadmaps/kafka/downloadPdf.jsx",
        lineNumber: 164,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
// Helper function to convert Tailwind colors to hex
const getPhaseColor = (tailwindColor)=>{
    const colorMap = {
        'bg-blue-500': '#3b82f6',
        'bg-purple-500': '#8b5cf6',
        'bg-green-500': '#10b981',
        'bg-orange-500': '#f59e0b',
        'bg-red-500': '#ef4444'
    };
    return colorMap[tailwindColor] || '#3b82f6';
};
const downloadRoadmapPDF = async (phases)=>{
    try {
        // Create the PDF blob
        const blob = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["pdf"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(RoadmapPDFDocument, {
            phases: phases
        }, void 0, false, {
            fileName: "[project]/app/Roadmaps/kafka/downloadPdf.jsx",
            lineNumber: 244,
            columnNumber: 28
        }, ("TURBOPACK compile-time value", void 0))).toBlob();
        // Generate filename with current date
        const currentDate = new Date().toISOString().split('T')[0];
        const filename = `kafka-Developer-roadmap-${currentDate}.pdf`;
        // Save the file
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$file$2d$saver$2f$dist$2f$FileSaver$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveAs"])(blob, filename);
        return {
            success: true,
            filename
        };
    } catch (error) {
        console.error('Error generating PDF:', error);
        return {
            success: false,
            error: error.message
        };
    }
};
const PDFDownloadButton = ({ phases, className = "", children = "Download PDF" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["PDFDownloadLink"], {
        document: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(RoadmapPDFDocument, {
            phases: phases
        }, void 0, false, {
            fileName: "[project]/app/Roadmaps/kafka/downloadPdf.jsx",
            lineNumber: 263,
            columnNumber: 15
        }, void 0),
        fileName: `Kafka-roadmap-${new Date().toISOString().split('T')[0]}.pdf`,
        className: className,
        children: ({ blob, url, loading, error })=>{
            if (loading) return 'Generating PDF...';
            if (error) return 'Error generating PDF';
            return children;
        }
    }, void 0, false, {
        fileName: "[project]/app/Roadmaps/kafka/downloadPdf.jsx",
        lineNumber: 262,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const downloadAdvancedRoadmapPDF = async (phases, options = {})=>{
    const { includeWatermark = true, customTitle = "Kafka Developer Roadmap", customSubtitle = "Your Complete Journey from Beginner to Professional", pageSize = "A4", orientation = "portrait" } = options;
    try {
        const AdvancedPDFDocument = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Document"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Page"], {
                    size: pageSize,
                    orientation: orientation,
                    style: styles.page,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                            style: styles.header,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                    style: styles.title,
                                    children: customTitle
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/kafka/downloadPdf.jsx",
                                    lineNumber: 291,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                    style: styles.subtitle,
                                    children: customSubtitle
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/kafka/downloadPdf.jsx",
                                    lineNumber: 292,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/Roadmaps/kafka/downloadPdf.jsx",
                            lineNumber: 290,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        phases.map((phase, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                                wrap: false,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                                        style: styles.phaseContainer,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                                                style: styles.phaseHeader,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                                        style: [
                                                            styles.phaseNumber,
                                                            {
                                                                backgroundColor: getPhaseColor(phase.color)
                                                            }
                                                        ],
                                                        children: phase.id
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Roadmaps/kafka/downloadPdf.jsx",
                                                        lineNumber: 302,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                                                        style: styles.phaseTitleContainer,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                                                style: styles.phaseTitle,
                                                                children: phase.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Roadmaps/kafka/downloadPdf.jsx",
                                                                lineNumber: 306,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                                                style: styles.phaseSubtitle,
                                                                children: phase.subtitle
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Roadmaps/kafka/downloadPdf.jsx",
                                                                lineNumber: 307,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                                                style: styles.phaseDescription,
                                                                children: phase.description
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Roadmaps/kafka/downloadPdf.jsx",
                                                                lineNumber: 308,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/Roadmaps/kafka/downloadPdf.jsx",
                                                        lineNumber: 305,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/Roadmaps/kafka/downloadPdf.jsx",
                                                lineNumber: 301,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                                                style: styles.sectionsContainer,
                                                children: phase.sections.map((section, sectionIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                                                        style: styles.section,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                                                style: styles.sectionTitle,
                                                                children: section.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Roadmaps/kafka/downloadPdf.jsx",
                                                                lineNumber: 315,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                                                                style: styles.itemsList,
                                                                children: section.items.map((item, itemIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                                                        style: styles.item,
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                                                                style: styles.itemNumber,
                                                                                children: [
                                                                                    itemIndex + 1,
                                                                                    "."
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/Roadmaps/kafka/downloadPdf.jsx",
                                                                                lineNumber: 319,
                                                                                columnNumber: 29
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            " ",
                                                                            item
                                                                        ]
                                                                    }, itemIndex, true, {
                                                                        fileName: "[project]/app/Roadmaps/kafka/downloadPdf.jsx",
                                                                        lineNumber: 318,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0)))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Roadmaps/kafka/downloadPdf.jsx",
                                                                lineNumber: 316,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, sectionIndex, true, {
                                                        fileName: "[project]/app/Roadmaps/kafka/downloadPdf.jsx",
                                                        lineNumber: 314,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/app/Roadmaps/kafka/downloadPdf.jsx",
                                                lineNumber: 312,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/Roadmaps/kafka/downloadPdf.jsx",
                                        lineNumber: 300,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    index < phases.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                                        style: styles.phaseConnector,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                            style: styles.connectorText,
                                            children: [
                                                "↓ Next: Phase ",
                                                phase.id + 1
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/Roadmaps/kafka/downloadPdf.jsx",
                                            lineNumber: 330,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/Roadmaps/kafka/downloadPdf.jsx",
                                        lineNumber: 329,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, phase.id, true, {
                                fileName: "[project]/app/Roadmaps/kafka/downloadPdf.jsx",
                                lineNumber: 299,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                            style: styles.footer,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                    style: styles.footerTitle,
                                    children: "🎉 Congratulations!"
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/kafka/downloadPdf.jsx",
                                    lineNumber: 339,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                    style: styles.footerText,
                                    children: "You've completed the Kafka Developer Roadmap and are now ready to take on professional  challenges."
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/kafka/downloadPdf.jsx",
                                    lineNumber: 340,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/Roadmaps/kafka/downloadPdf.jsx",
                            lineNumber: 338,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                            style: styles.pageNumber,
                            render: ({ pageNumber, totalPages })=>`${pageNumber} / ${totalPages}`,
                            fixed: true
                        }, void 0, false, {
                            fileName: "[project]/app/Roadmaps/kafka/downloadPdf.jsx",
                            lineNumber: 345,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Roadmaps/kafka/downloadPdf.jsx",
                    lineNumber: 288,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/Roadmaps/kafka/downloadPdf.jsx",
                lineNumber: 287,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0));
        const blob = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["pdf"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AdvancedPDFDocument, {}, void 0, false, {
            fileName: "[project]/app/Roadmaps/kafka/downloadPdf.jsx",
            lineNumber: 352,
            columnNumber: 28
        }, ("TURBOPACK compile-time value", void 0))).toBlob();
        const currentDate = new Date().toISOString().split('T')[0];
        const filename = `${customTitle.toLowerCase().replace(/\s+/g, '-')}-${currentDate}.pdf`;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$file$2d$saver$2f$dist$2f$FileSaver$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveAs"])(blob, filename);
        return {
            success: true,
            filename
        };
    } catch (error) {
        console.error('Error generating advanced PDF:', error);
        return {
            success: false,
            error: error.message
        };
    }
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/app/Roadmaps/kafka/page.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-ssr] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/folder-open.js [app-ssr] (ecmascript) <export default as FolderOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map.js [app-ssr] (ecmascript) <export default as Map>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$help$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-help.js [app-ssr] (ecmascript) <export default as HelpCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$kafka$2f$roadmapData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Roadmaps/kafka/roadmapData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$kafka$2f$docs$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Roadmaps/kafka/docs.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$kafka$2f$projects$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Roadmaps/kafka/projects.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$kafka$2f$faq$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Roadmaps/kafka/faq.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$kafka$2f$downloadPdf$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Roadmaps/kafka/downloadPdf.jsx [app-ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$kafka$2f$downloadPdf$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$kafka$2f$downloadPdf$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
"use client";
;
;
;
;
;
;
;
;
const KafkaRoadmap = ()=>{
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('roadmap');
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDownloading, setIsDownloading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Handle PDF download with loading state
    const handlePDFDownload = async ()=>{
        setIsDownloading(true);
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$kafka$2f$downloadPdf$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["downloadRoadmapPDF"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$kafka$2f$roadmapData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["phases"]);
            if (result.success) {
                console.log(`PDF downloaded successfully: ${result.filename}`);
            } else {
                console.error('PDF download failed:', result.error);
            }
        } catch (error) {
            console.error('PDF download error:', error);
        } finally{
            setIsDownloading(false);
        }
    };
    const renderContent = ()=>{
        switch(activeTab){
            case 'documentation':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$kafka$2f$docs$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/Roadmaps/kafka/page.jsx",
                    lineNumber: 35,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            case 'projects':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$kafka$2f$projects$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/Roadmaps/kafka/page.jsx",
                    lineNumber: 37,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            case 'faq':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$kafka$2f$faq$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/Roadmaps/kafka/page.jsx",
                    lineNumber: 39,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col space-y-8 md:space-y-12",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$kafka$2f$roadmapData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["phases"].map((phase, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    index < __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$kafka$2f$roadmapData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["phases"].length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute left-1/2 transform -translate-x-1/2 top-full h-8 md:h-12 w-0.5 md:w-1 bg-gray-300 z-10"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Roadmaps/kafka/page.jsx",
                                        lineNumber: 49,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center mb-4 md:mb-6 px-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `inline-block ${phase.color} text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold text-base md:text-lg mb-2`,
                                                        children: [
                                                            "Phase ",
                                                            phase.id,
                                                            ": ",
                                                            phase.title
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/Roadmaps/kafka/page.jsx",
                                                        lineNumber: 56,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-600 text-xs md:text-sm",
                                                        children: phase.subtitle
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Roadmaps/kafka/page.jsx",
                                                        lineNumber: 59,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-800 font-medium mt-1 text-sm md:text-base",
                                                        children: phase.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Roadmaps/kafka/page.jsx",
                                                        lineNumber: 60,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/Roadmaps/kafka/page.jsx",
                                                lineNumber: 55,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-full max-w-5xl px-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6",
                                                    children: phase.sections.map((section, sectionIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-white rounded-lg border-2 border-blue-200 p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "text-blue-600 font-semibold text-base md:text-lg mb-3 md:mb-4",
                                                                    children: section.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/Roadmaps/kafka/page.jsx",
                                                                    lineNumber: 71,
                                                                    columnNumber: 29
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                                                    className: "space-y-2",
                                                                    children: section.items.map((item, itemIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            className: "text-gray-700 text-xs md:text-sm leading-relaxed",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "font-medium text-gray-900",
                                                                                    children: [
                                                                                        itemIndex + 1,
                                                                                        "."
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/Roadmaps/kafka/page.jsx",
                                                                                    lineNumber: 77,
                                                                                    columnNumber: 35
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                " ",
                                                                                item
                                                                            ]
                                                                        }, itemIndex, true, {
                                                                            fileName: "[project]/app/Roadmaps/kafka/page.jsx",
                                                                            lineNumber: 76,
                                                                            columnNumber: 33
                                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/Roadmaps/kafka/page.jsx",
                                                                    lineNumber: 74,
                                                                    columnNumber: 29
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, sectionIndex, true, {
                                                            fileName: "[project]/app/Roadmaps/kafka/page.jsx",
                                                            lineNumber: 67,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Roadmaps/kafka/page.jsx",
                                                    lineNumber: 65,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/app/Roadmaps/kafka/page.jsx",
                                                lineNumber: 64,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            index < __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$kafka$2f$roadmapData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["phases"].length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-6 md:mt-8 flex items-center space-x-2 md:space-x-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-gray-500 font-medium text-xs md:text-sm transform -rotate-12",
                                                        children: [
                                                            "Phase ",
                                                            phase.id
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/Roadmaps/kafka/page.jsx",
                                                        lineNumber: 89,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                        className: "text-gray-400",
                                                        size: 20
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Roadmaps/kafka/page.jsx",
                                                        lineNumber: 92,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-gray-500 font-medium text-xs md:text-sm transform rotate-12",
                                                        children: [
                                                            "Phase ",
                                                            phase.id + 1
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/Roadmaps/kafka/page.jsx",
                                                        lineNumber: 93,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/Roadmaps/kafka/page.jsx",
                                                lineNumber: 88,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/Roadmaps/kafka/page.jsx",
                                        lineNumber: 53,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, phase.id, true, {
                                fileName: "[project]/app/Roadmaps/kafka/page.jsx",
                                lineNumber: 46,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/app/Roadmaps/kafka/page.jsx",
                        lineNumber: 44,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/app/Roadmaps/kafka/page.jsx",
                    lineNumber: 42,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between mb-6 md:mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-2 md:space-x-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-xl md:text-3xl font-bold text-gray-900",
                                children: [
                                    "Kafka ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-blue-600",
                                        children: "Mastery Roadmap 2026"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Roadmaps/kafka/page.jsx",
                                        lineNumber: 116,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/Roadmaps/kafka/page.jsx",
                                lineNumber: 115,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/app/Roadmaps/kafka/page.jsx",
                            lineNumber: 114,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handlePDFDownload,
                            disabled: isDownloading,
                            className: "hidden md:flex bg-red-500 hover:bg-red-600 disabled:bg-red-400 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg items-center space-x-2 transition-colors",
                            children: [
                                isDownloading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                    size: 18,
                                    className: "animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/kafka/page.jsx",
                                    lineNumber: 127,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/kafka/page.jsx",
                                    lineNumber: 129,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: isDownloading ? 'Generating PDF...' : 'Download PDF'
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/kafka/page.jsx",
                                    lineNumber: 131,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/Roadmaps/kafka/page.jsx",
                            lineNumber: 121,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setMobileMenuOpen(!mobileMenuOpen),
                            className: "md:hidden bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg transition-colors",
                            children: mobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/app/Roadmaps/kafka/page.jsx",
                                lineNumber: 139,
                                columnNumber: 31
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/app/Roadmaps/kafka/page.jsx",
                                lineNumber: 139,
                                columnNumber: 49
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/app/Roadmaps/kafka/page.jsx",
                            lineNumber: 135,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Roadmaps/kafka/page.jsx",
                    lineNumber: 113,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "md:hidden mb-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handlePDFDownload,
                        disabled: isDownloading,
                        className: "w-full bg-red-500 hover:bg-red-600 disabled:bg-red-400 disabled:cursor-not-allowed text-white px-4 py-3 rounded-lg flex items-center justify-center space-x-2 transition-colors",
                        children: [
                            isDownloading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                size: 18,
                                className: "animate-spin"
                            }, void 0, false, {
                                fileName: "[project]/app/Roadmaps/kafka/page.jsx",
                                lineNumber: 151,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/app/Roadmaps/kafka/page.jsx",
                                lineNumber: 153,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: isDownloading ? 'Generating PDF...' : 'Download PDF'
                            }, void 0, false, {
                                fileName: "[project]/app/Roadmaps/kafka/page.jsx",
                                lineNumber: 155,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/Roadmaps/kafka/page.jsx",
                        lineNumber: 145,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/app/Roadmaps/kafka/page.jsx",
                    lineNumber: 144,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `${mobileMenuOpen ? 'block' : 'hidden'} md:block mb-6 md:mb-8`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-1 bg-white p-1 rounded-lg shadow-sm w-full md:w-fit",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setActiveTab('roadmap');
                                    setMobileMenuOpen(false);
                                },
                                className: `px-4 md:px-6 py-3 md:py-2 rounded-md font-medium transition-colors flex items-center justify-center md:justify-start ${activeTab === 'roadmap' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:text-gray-900'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__["Map"], {
                                        size: 18,
                                        className: "mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Roadmaps/kafka/page.jsx",
                                        lineNumber: 173,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Roadmap"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/Roadmaps/kafka/page.jsx",
                                lineNumber: 162,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setActiveTab('documentation');
                                    setMobileMenuOpen(false);
                                },
                                className: `px-4 md:px-6 py-3 md:py-2 rounded-md font-medium transition-colors flex items-center justify-center md:justify-start ${activeTab === 'documentation' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:text-gray-900'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                        size: 18,
                                        className: "mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Roadmaps/kafka/page.jsx",
                                        lineNumber: 187,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Documentation"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/Roadmaps/kafka/page.jsx",
                                lineNumber: 176,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setActiveTab('projects');
                                    setMobileMenuOpen(false);
                                },
                                className: `px-4 md:px-6 py-3 md:py-2 rounded-md font-medium transition-colors flex items-center justify-center md:justify-start ${activeTab === 'projects' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:text-gray-900'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpen$3e$__["FolderOpen"], {
                                        size: 18,
                                        className: "mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Roadmaps/kafka/page.jsx",
                                        lineNumber: 201,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Projects"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/Roadmaps/kafka/page.jsx",
                                lineNumber: 190,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setActiveTab('faq');
                                    setMobileMenuOpen(false);
                                },
                                className: `px-4 md:px-6 py-3 md:py-2 rounded-md font-medium transition-colors flex items-center justify-center md:justify-start ${activeTab === 'faq' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:text-gray-900'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$help$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__["HelpCircle"], {
                                        size: 18,
                                        className: "mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Roadmaps/kafka/page.jsx",
                                        lineNumber: 215,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "FAQ"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/Roadmaps/kafka/page.jsx",
                                lineNumber: 204,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/Roadmaps/kafka/page.jsx",
                        lineNumber: 161,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/app/Roadmaps/kafka/page.jsx",
                    lineNumber: 160,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                renderContent()
            ]
        }, void 0, true, {
            fileName: "[project]/app/Roadmaps/kafka/page.jsx",
            lineNumber: 111,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/Roadmaps/kafka/page.jsx",
        lineNumber: 110,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = KafkaRoadmap;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__6b0663c8._.js.map