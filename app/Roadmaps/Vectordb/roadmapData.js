// vectorDbRoadmapData.js - Vector Database Engineer Roadmap Data

export const phases = [
  {
    id: 1,
    title: "Foundation",
    subtitle: "Data + Math + Search Systems",
    description: "Understand vector math, search fundamentals, and Python tooling for data workflows",
    color: "bg-green-500",
    sections: [
      {
        title: "Basic Concepts",
        items: [
          "Linear Algebra Essentials → Vectors, dot product, cosine similarity, matrix operations",
          "Distance Metrics → Euclidean, cosine, Manhattan — tradeoffs for similarity tasks",
          "Dimensionality Reduction → PCA, t-SNE, UMAP — compress high-dimensional data",
          "High-Dimensional Search → Challenges of the curse of dimensionality, indexing complexity"
        ]
      },
      {
        title: "Traditional Search vs Vector Search",
        items: [
          "Inverted Indexes → How classic search engines store and retrieve term postings",
          "Tokenization & BM25 → Lexical scoring, TF-IDF, classic relevance ranking",
          "Semantic vs Lexical Search → Meaning-based vs keyword-based retrieval comparison",
          "When to Use Each → Structured queries vs open-ended NL queries decision framework"
        ]
      },
      {
        title: "Python for Data + Search",
        items: [
          "NumPy & Pandas → Array ops, dataframes, vectorized computation for embeddings",
          "Scikit-learn → Preprocessing, clustering, basic ML pipelines for search workflows",
          "Basic Data Workflows → Load, clean, transform, export data pipelines end-to-end",
          "Optional: Rust/Go Basics → Performance awareness for low-latency retrieval services"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Embeddings & Representations",
    subtitle: "Intermediate Level",
    description: "Generate, visualize, and cluster semantic embeddings using modern encoder models",
    color: "bg-blue-500",
    sections: [
      {
        title: "Introduction to Embeddings",
        items: [
          "What They Are → Dense vector representations of semantic meaning in high-dimensional space",
          "Why We Need Them → Capture semantic similarity beyond keyword overlap in retrieval",
          "Encoders vs Embeddings → Distinction between the model architecture and its output vectors",
          "Embedding Dimensions → Tradeoffs between vector size, accuracy, and memory cost"
        ]
      },
      {
        title: "Embedding Models",
        items: [
          "Sentence Transformers (SBERT) → Semantic search, sentence similarity, bi-encoder setup",
          "OpenAI text-embedding-* → General-purpose embeddings via API for diverse use cases",
          "CLIP → Joint image + text embedding space for multimodal retrieval applications",
          "LLM Token Embeddings → Knowledge retrieval and contextual representations from LLMs"
        ]
      },
      {
        title: "Hands-On Embedding Projects",
        items: [
          "Hugging Face Embeddings → Load and run sentence-transformers models locally",
          "OpenAI Embedding API → Batch embed documents, handle rate limits, store results",
          "Visualize Embeddings → t-SNE/UMAP 2D plots to inspect semantic clustering",
          "Cluster Semantic Data → K-means or DBSCAN over embedding space, label clusters"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Vector Indexing & ANN Search",
    subtitle: "Intermediate Level",
    description: "Master approximate nearest neighbor algorithms, benchmarking, and index tuning",
    color: "bg-yellow-500",
    sections: [
      {
        title: "Nearest Neighbor Search",
        items: [
          "Exact vs Approximate → Brute-force k-NN vs ANN for speed/recall tradeoff",
          "Latency vs Accuracy → How index parameters affect query speed and result quality",
          "Batch vs Real-Time → Offline bulk indexing vs low-latency online query requirements",
          "Index Selection → Choosing the right algorithm for dataset size and access patterns"
        ]
      },
      {
        title: "ANN Algorithms",
        items: [
          "HNSW → Hierarchical Navigable Small World graph-based ANN, high recall + speed",
          "IVF → Inverted File Index with Product Quantization for scalable billion-scale search",
          "PQ / OPQ → Product/Optimized Product Quantization for memory-efficient storage",
          "LSH → Locality Sensitive Hashing — simple, randomized approximate search baseline"
        ]
      },
      {
        title: "Benchmarking & Metrics",
        items: [
          "Recall @ K → Primary accuracy metric: fraction of true neighbors found in top-K",
          "Latency → P50/P95/P99 query time under load, throughput QPS measurements",
          "Index Build Time → Time and memory cost to construct and persist the vector index",
          "Memory Footprint → RAM usage per vector, compression tradeoffs with quantization"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Vector Databases — Tools & Use Cases",
    subtitle: "Intermediate–Advanced Level",
    description: "Evaluate, integrate, and deploy core vector databases for production search applications",
    color: "bg-orange-500",
    sections: [
      {
        title: "Core Vector Databases",
        items: [
          "Pinecone → Managed cloud-native vector DB, simple API, serverless and pod-based plans",
          "Weaviate → Open-source, GraphQL API, built-in modules for auto-vectorization",
          "Milvus → Distributed, cloud-native vector DB for billion-scale production workloads",
          "Qdrant / Redis / Vespa / PGVector → Evaluate per use case, ecosystem, and infra fit"
        ]
      },
      {
        title: "Hands-On Projects",
        items: [
          "Qdrant + FastAPI → Build and serve a semantic search REST API end-to-end",
          "Milvus + LangChain → RAG pipeline connecting vector store to LLM for Q&A",
          "PGVector + Django/Flask → Add vector search to existing relational DB stacks",
          "Redis Vector Search → Low-latency real-time recommendations with Redis Stack"
        ]
      },
      {
        title: "Evaluation Criteria",
        items: [
          "Scalability → Sharding, replication, horizontal scale for large corpora",
          "Persistence → ACID guarantees, WAL, snapshot backups, disaster recovery",
          "GPU Support → Hardware-accelerated indexing and query for speed at scale",
          "Integrations → Compatibility with ML stack: LangChain, Haystack, Beam, Spark"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Build Real Applications",
    subtitle: "Advanced Level",
    description: "Ship production-grade semantic search, RAG, and recommendation systems end-to-end",
    color: "bg-purple-500",
    sections: [
      {
        title: "Semantic Search Engine",
        items: [
          "Document Ingestion → Chunk, clean, and embed documents at scale into vector store",
          "Query Pipeline → Embed user query, retrieve top-K, rank and return results",
          "Metadata Filtering → Combine vector search with structured attribute filters",
          "Relevance Tuning → Re-ranking with cross-encoders, feedback loops, A/B testing"
        ]
      },
      {
        title: "RAG (Retrieval-Augmented Generation)",
        items: [
          "LLM + Vector DB → Connect retrieval pipeline to generation for grounded answers",
          "Chunking Strategies → Fixed, sentence, paragraph, semantic chunking tradeoffs",
          "Context Windows → Fit retrieved context within token limits, handle overflow",
          "Prompt Templates → Structured system prompts with retrieved context injection"
        ]
      },
      {
        title: "Recommendation Systems",
        items: [
          "User Embeddings → Represent user history/preferences as dense latent vectors",
          "Item Embeddings → Encode products, content, or entities for similarity retrieval",
          "Real-Time Updates → Incremental upserts, live embedding refresh, cold-start handling",
          "Diversity & Serendipity → MMR (Max Marginal Relevance) for non-repetitive results"
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Industry-Level Systems",
    subtitle: "Senior / Production Level",
    description: "Scale vector systems with distributed infra, monitoring, pipelines, and security",
    color: "bg-red-500",
    sections: [
      {
        title: "Scalability & Performance",
        items: [
          "Distributed Vector Stores → Horizontal sharding, partition strategies, replication",
          "GPUs for Indexing → FAISS-GPU, cuVS — accelerated large-scale index construction",
          "Memory Optimization → Quantization, on-disk indexes, tiered storage strategies",
          "Horizontal Sharding → Shard by ID range, consistent hashing, load balancing"
        ]
      },
      {
        title: "Monitoring & Logging",
        items: [
          "Latency Metrics → P99 query time dashboards, SLA alerting, slow query logging",
          "Vector Distribution Drift → Monitor embedding space changes over time with stats",
          "Nearest Neighbor Recall → Evaluate ANN accuracy degradation over index growth",
          "Query Analytics → Track popular queries, zero-result rates, user engagement metrics"
        ]
      },
      {
        title: "Data Pipelines",
        items: [
          "ETL/ELT → Embeddings → Batch pipelines: extract, embed, load into vector store",
          "Real-Time Streaming → Kafka/Pulsar consumers embed and upsert events live",
          "Embedding Pipeline Orchestration → Airflow, Prefect, or Dagster for scheduling",
          "Data Quality → Dedup, validation, version control for embedding datasets"
        ]
      },
      {
        title: "Security & Compliance",
        items: [
          "Access Control → RBAC, namespace isolation, per-collection API key scoping",
          "Encryption → TLS in flight, AES-at-rest, key management for sensitive embeddings",
          "Data Retention → TTL policies, GDPR deletion, audit logging for vector records",
          "Network Security → VPC peering, private endpoints, IP allowlisting for DB access"
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Advanced Topics",
    subtitle: "Expert Level",
    description: "Push the frontier with hybrid search, adaptive indexing, and automated embedding selection",
    color: "bg-gray-800",
    sections: [
      {
        title: "Hybrid Search",
        items: [
          "Vector + Keyword Search → Combine dense retrieval with BM25 sparse signals",
          "BM25 + ANN Fusion → Reciprocal Rank Fusion (RRF) for merged result ranking",
          "Multipass Ranking → Retrieve broad candidates, re-rank with cross-encoders",
          "Sparse-Dense Models → SPLADE, ColBERT for learned sparse + dense representations"
        ]
      },
      {
        title: "Adaptive Indexing",
        items: [
          "Dynamic Re-Indexing → Trigger index rebuilds based on data drift detection signals",
          "Usage-Based Tuning → Adjust HNSW ef/M params based on observed query patterns",
          "Feedback Loops → Use click/relevance signals to update embedding fine-tuning",
          "Online Learning → Continuously update user/item embeddings with streaming data"
        ]
      },
      {
        title: "AutoML for Embeddings",
        items: [
          "Model Selection → Benchmark embedding models automatically for your domain data",
          "Embedding Optimization → Fine-tune with contrastive loss, triplet loss, RLHF signals",
          "Relevance Feedback → Incorporate user corrections to improve retrieval quality",
          "Distillation → Compress large embedding models into faster, smaller student models"
        ]
      }
    ]
  },
  {
    id: 8,
    title: "Professional Practice & Leadership",
    subtitle: "Mastery Level",
    description: "Deploy, load test, cost-optimize, and lead teams building vector-powered AI infrastructure",
    color: "bg-indigo-700",
    sections: [
      {
        title: "CI/CD + Vector Store Deployment",
        items: [
          "Deployment Automation → Terraform/Pulumi for infra, Helm charts for k8s vector stores",
          "Canary Releases → Blue/green deploys, gradual rollouts for embedding model upgrades",
          "Schema Migrations → Versioned collections, backward-compatible index updates",
          "Observability → OpenTelemetry traces, Prometheus metrics, Grafana dashboards"
        ]
      },
      {
        title: "Load Testing for Vector Services",
        items: [
          "Locust / K6 → Simulate realistic concurrent query loads against vector endpoints",
          "Realistic Query Loads → Use production query distributions, not synthetic patterns",
          "Throughput vs Latency → Find optimal replica count and resource allocation under load",
          "Chaos Engineering → Test resilience: node failures, network partitions, OOM recovery"
        ]
      },
      {
        title: "Cost Optimization",
        items: [
          "GPU vs CPU Indexing → Cost-benefit of GPU acceleration vs CPU-based ANN indexes",
          "Storage vs Query Cost → Compressed on-disk indexes vs in-memory for cost/latency",
          "Managed vs Self-Hosted → TCO analysis of Pinecone/Weaviate Cloud vs self-managed",
          "Embedding Caching → Cache frequent query embeddings to reduce model inference cost"
        ]
      },
      {
        title: "Capstone Projects & Career",
        items: [
          "Scalable Semantic QA → Vector DB + LLM RAG pipeline with evaluation harness",
          "Cross-Modal Search → CLIP-based text + image retrieval with multimodal re-ranking",
          "Personalized Recommendation API → Real-time vector updates with A/B test framework",
          "Hybrid Search Engine → Elastic + Milvus fusion with BM25 + dense vector ranking"
        ]
      }
    ]
  }
];