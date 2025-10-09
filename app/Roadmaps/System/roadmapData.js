
export const phases = [
  {
    id: 1,
    title: "Fundamentals",
    subtitle: "Beginner Level",
    description: "Build a strong foundation in computer science and system basics",
    color: "bg-gray-600",
    sections: [
      {
        title: "Computer Science Basics",
        items: [
          "Data Structures & Algorithms → Arrays, Linked Lists, Trees, Graphs, Sorting, Searching",
          "Complexity Analysis → Big O, Big Θ, Big Ω notations and analysis",
          "Algorithm Design → Divide & Conquer, Dynamic Programming, Greedy algorithms",
          "Practice: Solve 150+ LeetCode problems focusing on system design patterns"
        ]
      },
      {
        title: "Networking Basics",
        items: [
          "OSI Model → 7-layer model, TCP vs UDP protocols",
          "HTTP/HTTPS → REST basics, status codes, headers, caching",
          "DNS, CDN → Domain resolution, content delivery networks",
          "Load Balancers → Round-robin, weighted, least connections algorithms"
        ]
      },
      {
        title: "Operating Systems",
        items: [
          "Process vs Thread → Concurrency, parallelism, synchronization",
          "CPU Scheduling → FIFO, Round Robin, Priority scheduling",
          "Memory Management → Virtual memory, paging, segmentation",
          "File Systems → NTFS, ext4, distributed file systems basics"
        ]
      },
      {
        title: "Databases (Basics)",
        items: [
          "Relational Databases → SQL, normalization, ACID properties",
          "NoSQL Introduction → Document, Key-Value, Columnar, Graph databases",
          "Database Design → ER diagrams, schema design, indexing basics",
          "Practice: Design schemas for e-commerce, social media applications"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Core System Design",
    subtitle: "Intermediate Level",
    description: "Learn to design scalable, reliable, and maintainable systems",
    color: "bg-blue-500",
    sections: [
      {
        title: "System Design Basics",
        items: [
          "Latency vs Throughput → Performance metrics, optimization trade-offs",
          "Vertical vs Horizontal Scaling → Scale-up vs scale-out strategies",
          "Load Balancing & Caching → Distribution strategies, cache patterns",
          "Stateless vs Stateful → Session management, scalability implications"
        ]
      },
      {
        title: "Databases (Advanced)",
        items: [
          "Indexing → B-trees, hash indexes, composite indexes, query optimization",
          "Sharding → Horizontal partitioning, shard keys, rebalancing",
          "Replication → Master-slave, master-master, eventual consistency",
          "CAP Theorem → Consistency, Availability, Partition tolerance trade-offs"
        ]
      },
      {
        title: "APIs & Communication",
        items: [
          "REST APIs → HTTP methods, status codes, resource design",
          "GraphQL → Schema design, resolvers, N+1 problem solutions",
          "gRPC → Protocol Buffers, streaming, service mesh integration",
          "Message Queues → Kafka, RabbitMQ, SQS, pub/sub patterns"
        ]
      },
      {
        title: "Storage Systems",
        items: [
          "Blob Storage → S3, GCS, Azure Blob, object storage patterns",
          "File Systems → Distributed file systems, HDFS, Ceph",
          "Data Warehousing → OLTP vs OLAP, ETL processes, data lakes",
          "Backup & Recovery → Point-in-time recovery, disaster recovery planning"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Distributed Systems & Scalability",
    subtitle: "Advanced Level",
    description: "Dive deep into large-scale distributed systems architecture",
    color: "bg-green-500",
    sections: [
      {
        title: "Scalability & Reliability",
        items: [
          "Replication → Synchronous vs asynchronous, conflict resolution",
          "Partitioning → Range-based, hash-based, directory-based partitioning",
          "Leader Election → Raft, Paxos, ZooKeeper coordination",
          "Consistent Hashing → Ring topology, virtual nodes, load distribution"
        ]
      },
      {
        title: "Caching Strategies",
        items: [
          "Client-side Caching → Browser cache, mobile app caching",
          "CDN → Geographic distribution, edge computing, cache invalidation",
          "Reverse Proxy → Varnish, Nginx, load balancing with caching",
          "Cache Patterns → Write-through, write-around, write-back strategies"
        ]
      },
      {
        title: "Search & Indexing",
        items: [
          "Inverted Index → Full-text search, tokenization, scoring algorithms",
          "Elasticsearch → Document storage, aggregations, cluster management",
          "Ranking Algorithms → TF-IDF, PageRank, machine learning ranking",
          "Query Optimization → Index selection, query planning, performance tuning"
        ]
      },
      {
        title: "Observability",
        items: [
          "Logging → ELK stack, Fluentd, structured logging, log aggregation",
          "Monitoring → Prometheus, Grafana, metrics collection, alerting",
          "Distributed Tracing → Jaeger, OpenTelemetry, span correlation",
          "APM → Application performance monitoring, error tracking, profiling"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Industry-Level Mastery",
    subtitle: "Advanced Level",
    description: "Build production-grade, FAANG-scale system design expertise",
    color: "bg-purple-500",
    sections: [
      {
        title: "High-Performance Architectures",
        items: [
          "Microservices → Service decomposition, API gateways, service mesh",
          "Event-driven Architecture → Event sourcing, CQRS, saga patterns",
          "Serverless → AWS Lambda, Azure Functions, cold starts, scaling",
          "Monolith vs Microservices → Migration strategies, trade-offs analysis"
        ]
      },
      {
        title: "Cloud & DevOps",
        items: [
          "Kubernetes → Orchestration, pods, services, ingress, autoscaling",
          "Docker → Containerization, multi-stage builds, registry management",
          "Service Mesh → Istio, Linkerd, traffic management, security policies",
          "Infrastructure as Code → Terraform, CloudFormation, Ansible automation"
        ]
      },
      {
        title: "Security in System Design",
        items: [
          "Authentication & Authorization → OAuth2, JWT, OpenID Connect, RBAC",
          "Encryption → TLS, HTTPS, encryption at rest vs in transit",
          "API Security → Rate limiting, API keys, throttling, DDoS protection",
          "Security Patterns → Zero-trust architecture, defense in depth"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Case Studies & Real-World Systems",
    subtitle: "Expert Level",
    description: "Master FAANG-style system design through real-world examples",
    color: "bg-red-500",
    sections: [
      {
        title: "Social Media Systems",
        items: [
          "Twitter Feed → Timeline generation, fan-out strategies, caching layers",
          "Instagram → Image storage, CDN optimization, recommendation algorithms",
          "LinkedIn → Professional networking, graph databases, search indexing",
          "TikTok → Video processing, real-time recommendations, global distribution"
        ]
      },
      {
        title: "Media & Content Systems",
        items: [
          "YouTube → Video transcoding, storage optimization, global CDN",
          "Netflix → Content recommendation, A/B testing, adaptive streaming",
          "Spotify → Music streaming, playlist algorithms, real-time analytics",
          "Zoom → Real-time video, WebRTC, load balancing, quality adaptation"
        ]
      },
      {
        title: "E-commerce & Marketplace",
        items: [
          "Amazon → Product catalog, inventory management, order processing",
          "Uber → Real-time matching, location services, pricing algorithms",
          "Airbnb → Search & filtering, booking system, payment processing",
          "DoorDash → Restaurant management, delivery optimization, real-time tracking"
        ]
      },
      {
        title: "Communication Systems",
        items: [
          "WhatsApp → Message delivery, end-to-end encryption, presence system",
          "Slack → Real-time messaging, file sharing, notification system",
          "Discord → Voice chat, gaming integration, server management",
          "Email System → SMTP, spam filtering, attachment handling, scalability"
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Continuous Growth",
    subtitle: "Expert Level",
    description: "Keep updated with latest trends, research, and emerging technologies",
    color: "bg-orange-500",
    sections: [
      {
        title: "Research Papers & Innovation",
        items: [
          "Google Papers → Spanner, MapReduce, Bigtable, Borg distributed systems",
          "Amazon Papers → DynamoDB, Aurora, S3 architecture and design decisions",
          "Facebook Papers → TAO, Cassandra, React architecture patterns",
          "Microsoft Papers → Orleans, Service Fabric, distributed computing research"
        ]
      },
      {
        title: "Emerging Technologies",
        items: [
          "Edge Computing → 5G networks, IoT systems, latency optimization",
          "Machine Learning Systems → MLOps, model serving, A/B testing for ML",
          "Blockchain → Distributed ledgers, consensus mechanisms, smart contracts",
          "Quantum Computing → Future implications for distributed systems"
        ]
      },
      {
        title: "Interview Preparation",
        items: [
          "Mock Interviews → Practice 45-60 minute system design sessions",
          "Whiteboard Skills → Clear communication, structured thinking, trade-offs",
          "Company-specific → Google, Meta, Amazon, Netflix interview formats",
          "Behavioral Questions → Leadership principles, problem-solving approach"
        ]
      },
      {
        title: "Community & Learning",
        items: [
          "Tech Blogs → High Scalability, Engineering blogs of major companies",
          "Conferences → QCon, Strange Loop, Velocity, distributed systems conferences",
          "Open Source → Contribute to distributed systems projects, Kubernetes",
          "Mentorship → Share knowledge, teach others, build engineering community"
        ]
      }
    ]
  }
];
