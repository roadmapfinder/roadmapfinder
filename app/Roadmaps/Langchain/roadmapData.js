export const phases = [
  {
    id: 0,
    title: "Prerequisites",
    subtitle: "Foundation Level",
    description: "Essential programming and infrastructure knowledge before starting LangChain.",
    color: "bg-slate-500",
    sections: [
      {
        title: "💻 Programming Fundamentals",
        items: [
          "Python (primary): idiomatic Python, async programming",
          "Virtualenv/poetry for package management",
          "TypeScript basics for JS/TS SDK usage",
          "Understanding of software design patterns"
        ]
      },
      {
        title: "🌐 Networking & APIs",
        items: [
          "HTTP protocol and REST API concepts",
          "gRPC and JSON data formats",
          "OAuth and ACL basics for authentication",
          "API design and integration patterns"
        ]
      },
      {
        title: "🗄️ Databases & Infrastructure",
        items: [
          "SQL and NoSQL database fundamentals",
          "Basic Linux command line operations",
          "Docker containerization basics",
          "Basic Kubernetes concepts and orchestration"
        ]
      }
    ]
  },
  {
    id: 1,
    title: "Core LLM & LangChain Fundamentals",
    subtitle: "Beginner Level",
    description: "Understand LLM behavior and LangChain building blocks.",
    color: "bg-blue-500",
    sections: [
      {
        title: "🤖 LLM Basics",
        items: [
          "How transformer LLMs generate text and tokenization",
          "Context window, temperature, top-k/p sampling",
          "System vs user messages and conversation structure",
          "Cost & latency tradeoffs across providers"
        ]
      },
      {
        title: "🔗 LangChain Fundamentals",
        items: [
          "Install and run basic examples (Python & JS/TS)",
          "LLM wrapper, Prompts, Chains, Tools",
          "Retrievers, Memory, and Agents components",
          "Practice with minimal 'Hello LangChain' chains"
        ]
      },
      {
        title: "✍️ Prompt Engineering",
        items: [
          "System-roles and message formatting",
          "Few-shot prompts and examples",
          "Chain-of-thought prompting techniques",
          "Safety guardrails and content filtering"
        ]
      },
      {
        title: "📊 Embeddings Introduction",
        items: [
          "What embeddings are and how they work",
          "Semantic search fundamentals",
          "RAG (Retrieval Augmented Generation) overview",
          "Embedding use cases and applications"
        ]
      },
      {
        title: "🎯 Practical Micro-Projects",
        items: [
          "Simple QA chain with knowledge file",
          "Embed and run semantic search + answer",
          "Small agent with calculator tool",
          "Web-search tool integration (simulated)"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Retrieval & Vector Databases",
    subtitle: "Intermediate Level",
    description: "Build robust retrieval pipelines and master RAG building blocks.",
    color: "bg-green-500",
    sections: [
      {
        title: "🔍 RAG Concepts & Pipelines",
        items: [
          "Indexing and chunking strategies (overlap, chunk size)",
          "Metadata handling and filtering",
          "Hybrid retrieval (BM25 + embeddings)",
          "Tradeoffs: latency, freshness, security, vector-indexing methods (ANN, HNSW)"
        ]
      },
      {
        title: "🗃️ Vector Databases",
        items: [
          "Chroma (local/dev) setup and usage",
          "Pinecone (managed) cloud solution",
          "Weaviate (schema + semantic search)",
          "Qdrant, Milvus, FAISS comparison and benchmarking",
          "Namespaces, metadata filtering, and production features"
        ]
      },
      {
        title: "🧮 Embedding Models",
        items: [
          "Test multiple embedding models (OpenAI, Cohere)",
          "Hugging Face models and local options",
          "Quality vs cost analysis",
          "Model selection for production"
        ]
      },
      {
        title: "⚙️ Data Pipelines",
        items: [
          "ETL to create/upsert vectors",
          "Reindexing strategies and automation",
          "Freshness and versioning management",
          "Data pipeline optimization"
        ]
      },
      {
        title: "🚀 RAG Project",
        items: [
          "Build Q&A over documents (PDFs, web pages)",
          "Implement chunking and embeddings",
          "Create vector index with LangChain",
          "Return answers with citations and sources"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Agents, Tools & Complex Chains",
    subtitle: "Advanced Intermediate",
    description: "Build multi-step reasoning systems and tool-calling agents.",
    color: "bg-purple-500",
    sections: [
      {
        title: "🤖 LangChain Agents",
        items: [
          "Tool interface design and implementation",
          "Safety constraints and output validation",
          "Specifying tool outputs and schemas",
          "Retries, rate limiting, and error handling"
        ]
      },
      {
        title: "🔄 Orchestration Patterns",
        items: [
          "Multi-step chains and workflows",
          "Loops and conditional logic",
          "Tool chaining and composition",
          "Asynchronous tools and long-running tasks"
        ]
      },
      {
        title: "📈 Agent Orchestration at Scale",
        items: [
          "Task scheduling and queuing",
          "Circuit breakers and resilience patterns",
          "Idempotency and state management",
          "Cost control and budget limits"
        ]
      },
      {
        title: "🎯 Multi-Source Research Project",
        items: [
          "Build agent for multi-source research task",
          "Retrieves and synthesizes information",
          "Runs code via sandboxed execution tool",
          "Generates structured report with sources"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Observability, Evaluation & LLMOps",
    subtitle: "Advanced Level",
    description: "Make systems debuggable, testable, and measurable.",
    color: "bg-orange-500",
    sections: [
      {
        title: "🔍 Tracing & Observability",
        items: [
          "LangSmith for tracing and monitoring",
          "Custom logging for prompts and tool calls",
          "Capture responses, embeddings, and retrieval traces",
          "Debugging and compliance tracking"
        ]
      },
      {
        title: "✅ Evaluation & Testing",
        items: [
          "Unit tests for prompt/chain logic",
          "Regression tests for answer correctness",
          "Human review pipelines",
          "Metrics: accuracy, hallucination rate, latency, cost"
        ]
      },
      {
        title: "🧪 A/B Experiments",
        items: [
          "Compare prompt templates",
          "Test different LLM models",
          "Evaluate chunk sizes and embeddings",
          "Use stored traces for analysis"
        ]
      },
      {
        title: "📊 Dashboard Project",
        items: [
          "Add full tracing to RAG + Agent projects",
          "Create dashboards for token cost",
          "Monitor latencies and performance",
          "Track retrieval accuracy metrics"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Productionization & LLMOps",
    subtitle: "Production Level",
    description: "Harden systems for reliability, cost, security, and compliance.",
    color: "bg-red-500",
    sections: [
      {
        title: "🔒 Security & Privacy",
        items: [
          "Data access control and permissions",
          "PII detection/redaction before model calls",
          "Encryption at rest and in transit",
          "Token redaction in logs and DLP",
          "Regulatory compliance (EU AI Act, GDPR)"
        ]
      },
      {
        title: "⚡ Scaling Strategies",
        items: [
          "Caching strategies for responses",
          "Batching requests for efficiency",
          "Async patterns for high throughput",
          "Autoscaling vector DBs and sharding"
        ]
      },
      {
        title: "💰 Cost Control",
        items: [
          "Token budgeting and monitoring",
          "Cheaper embeddings with periodic re-embedding",
          "Local small models for non-sensitive tasks",
          "Cost optimization strategies"
        ]
      },
      {
        title: "🏗️ Alternative Architectures",
        items: [
          "Agent-based vs centralized RAG",
          "Agents querying systems directly",
          "Access control preservation patterns",
          "Architecture tradeoff analysis"
        ]
      },
      {
        title: "✅ Production Checklist",
        items: [
          "AuthN/AuthZ and secrets management",
          "Observability + retraceable logs (no PII)",
          "Rate limits, retries, error handling, circuit breakers",
          "CI for prompts and chains, model-change QA",
          "Disaster recovery and reindex/rebuild strategies"
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Multimodal, Local Models & Edge",
    subtitle: "Advanced Specialization",
    description: "Add images, audio, and on-premises/local LLM capabilities.",
    color: "bg-pink-500",
    sections: [
      {
        title: "🎨 Multimodal Pipelines",
        items: [
          "OCR + embeddings for documents",
          "Vision-language chains and models",
          "Audio transcription pipelines",
          "Multi-format data processing"
        ]
      },
      {
        title: "🖥️ Local and Open Models",
        items: [
          "Running Llama-family models locally",
          "Mistral and other open models",
          "Benchmark speed vs accuracy tradeoffs",
          "Model releases and licensing restrictions"
        ]
      },
      {
        title: "⚙️ Optimization Techniques",
        items: [
          "Quantization for model compression",
          "ONNX/Triton inference optimization",
          "Batching at inference time",
          "Memory/VRAM considerations and GPU/CPU tradeoffs"
        ]
      },
      {
        title: "🎯 Multimodal Project",
        items: [
          "Build multimodal assistant",
          "Image OCR + text retrieval",
          "LLM reasoning on image-based queries",
          "Combined visual and textual understanding"
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Real-World Product & Team Practices",
    subtitle: "Mastery Level",
    description: "Ship reliable products and lead engineering efforts.",
    color: "bg-indigo-500",
    sections: [
      {
        title: "🎨 Product & UX",
        items: [
          "Design human-in-the-loop flows",
          "Explainability (show sources & confidence)",
          "Escalation to humans when needed",
          "Graceful degradation strategies"
        ]
      },
      {
        title: "👥 Team Engineering",
        items: [
          "LLMOps playbooks and documentation",
          "Model-change runbooks",
          "Incident response for hallucinations/data leaks",
          "Team collaboration best practices"
        ]
      },
      {
        title: "💼 Hiring & Portfolio",
        items: [
          "Build 3 production-grade projects",
          "Project 1: Secure RAG product with traces",
          "Project 2: Agent integrating external APIs",
          "Project 3: Multimodal assistant"
        ]
      },
      {
        title: "🎤 Interview Preparation",
        items: [
          "System design interviews preparation",
          "Architecture diagrams (retrieval, caching, model selection)",
          "Cost analysis and optimization discussions",
          "Failure modes and mitigation strategies"
        ]
      }
    ]
  }
];


