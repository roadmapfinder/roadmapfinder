export const phases = [
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