export const phases = [
  {
    id: 0,
    title: "Mindset & Prep",
    subtitle: "0–2 weeks",
    description: "Context engineering is system design — not just clever prompts. Start with the right habits",
    color: "bg-slate-500",
    sections: [
      {
        title: "What to Learn",
        items: [
          "Learn the definition & role of context engineering: designing what the model sees before generation",
          "Understand context engineering as system design fundamentals"
        ]
      },
      {
        title: "Environment Setup",
        items: [
          "Python 3.10+, Node 18+, Git, VS Code, Docker",
          "Create a learning repo and practice clean commits, README, and issues"
        ]
      },
      {
        title: "Quick Reading",
        items: [
          "Short articles from LangChain, Datacamp, LlamaIndex to internalize scope (30–90m)"
        ]
      }
    ]
  },
  {
    id: 1,
    title: "Foundations",
    subtitle: "1–2 months",
    description: "Fundamentals of ML infra, embeddings, APIs, and prompt basics",
    color: "bg-green-500",
    sections: [
      {
        title: "Skills to Master",
        items: [
          "Python basics (functions, classes, async), REST APIs, basic SQL",
          "Basics of LLMs & token economics (context windows, cost/latency tradeoffs)",
          "Embeddings: concept and cosine / inner product similarity",
          "Prompt design basics: instruction clarity, system/user/assistant roles"
        ]
      },
      {
        title: "Core Tools & Libraries",
        items: [
          "OpenAI/Anthropic/other LLM SDKs; requests/httpx; transformers (for local experiments)",
          "Simple vector store: FAISS or in-memory vectors (to experiment)"
        ]
      },
      {
        title: "Project",
        items: [
          "Build a one-file Q&A with context app: take a small doc set, generate embeddings, run nearest-neighbour retrieval, then call an LLM with a structured prompt + retrieved context",
          "Evaluate answer quality manually"
        ]
      },
      {
        title: "Why This Matters",
        items: [
          "RAG and retrieval are the base building blocks of context systems"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Retrieval & Vector Databases",
    subtitle: "1–2 months",
    description: "Production-grade retrieval pipelines and vector DB selection",
    color: "bg-yellow-500",
    sections: [
      {
        title: "Topics & Skills",
        items: [
          "Vector DB fundamentals: indexing, ANN, sharding, persistence, metadata filtering",
          "Compare hosted vs self-hosted (Pinecone, Qdrant, Weaviate, Milvus, FAISS). Learn tradeoffs: ease vs scalability vs features",
          "Chunking strategies, embedding dimension vs model choice",
          "Embedding pipelines: batching, upserts, vector lifecycle"
        ]
      },
      {
        title: "Core Tools",
        items: [
          "Pinecone (hosted), Qdrant/Weaviate/Milvus (self-host), FAISS for local dev"
        ]
      },
      {
        title: "Project",
        items: [
          "Build a document search microservice: ingestion pipeline (PDF/HTML → text → chunks → embeddings → vector DB), query API with filters",
          "Add monitoring: latency, qps, error rates"
        ]
      },
      {
        title: "Evaluation",
        items: [
          "Semantic search precision@k; latency under 200–500ms (target varies by infra); false positive rate"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Context Engineering Practices & Patterns",
    subtitle: "2–3 months",
    description: "Master patterns that decide what and how to include in context",
    color: "bg-orange-500",
    sections: [
      {
        title: "Core Techniques",
        items: [
          "Context curation: ranking retrieved passages, deduplication, prompt templates, structured context (JSON), tool-use instructions",
          "Retrieval + reranking: use first-stage ANN + lightweight ML/BM25/reranker to pick best chunks",
          "Dynamic context stitching: assemble multi-type context (user profile, metadata, tool outputs)",
          "Safety & redaction: filter PII and sensitive data before it reaches the model"
        ]
      },
      {
        title: "Tools & Libraries",
        items: [
          "LangChain / LlamaIndex / PromptingGuide tooling (for orchestration)",
          "Reranker models (sentence-transformers, cross-encoders) for ranking pass"
        ]
      },
      {
        title: "Project",
        items: [
          "Ship a context orchestrator service that receives query + user state, retrieves candidate chunks, reranks & composes best-k items into structured context, calls the LLM with a template, and returns structured JSON outputs"
        ]
      },
      {
        title: "Evaluation & Metrics",
        items: [
          "End-to-end correctness (human eval), hallucination rate, fidelity to source (citation recall)"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "RAG to Agents & Architectural Choices",
    subtitle: "2–3 months",
    description: "Learn architectures and when to switch to agent-based designs",
    color: "bg-blue-500",
    sections: [
      {
        title: "Topics",
        items: [
          "RAG architecture patterns: centralized vector stores vs on-the-fly retrieval. Understand security/regulatory tradeoffs",
          "Agent patterns: tool-using agents that query services at runtime (preserve auth/ACLs)",
          "Hybrid designs: RAG for static knowledge, agents for live data/APIs"
        ]
      },
      {
        title: "Projects",
        items: [
          "Build a secure RAG chatbot with citation tracebacks",
          "Build a simple agent that can query a private API (with auth) and respond",
          "Add CI eval: unit tests for prompt outputs, regression tests for examples"
        ]
      },
      {
        title: "Why Agents",
        items: [
          "Some enterprises prefer agents for security and live access over centralizing sensitive data in vector stores"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "LLMOps, Evaluation & Scale",
    subtitle: "2–3 months",
    description: "Production hardening: observability, cost control, testing, and governance",
    color: "bg-purple-500",
    sections: [
      {
        title: "Key Areas",
        items: [
          "LLMOps: model selection, cost monitoring, caching responses, A/B testing prompts/models",
          "Evaluation pipelines: automated metrics (ROUGE, BLEU where applicable), factuality checks, human-in-the-loop grading",
          "Security: DLP, auth flow, token redaction, rate limiting, throttling",
          "Latency & throughput engineering: batching inference, async pipelines, caching embeddings, vector DB tuning"
        ]
      },
      {
        title: "Project",
        items: [
          "Deploy your system (Docker + Kubernetes or managed infra)",
          "Include Prometheus/Grafana metrics",
          "Add tracing (OpenTelemetry)",
          "Implement CI/CD: automated tests that include prompt regression and canary rollouts"
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Specialized Topics & Advanced Techniques",
    subtitle: "3–6 months",
    description: "Design systems for domain-specific needs & lead projects",
    color: "bg-red-500",
    sections: [
      {
        title: "Advanced Skills",
        items: [
          "Fine-tuning & instruction-tuning (safely, with evaluation)",
          "Retrieval for multimodal data (images, audio) and multimodal embeddings",
          "Long-term memory & summarization pipelines (sleeping indices, periodic re-embedding)",
          "Prompt compilers, structured prompting (chain-of-thought, scratchpad), and program synthesis patterns"
        ]
      },
      {
        title: "Projects",
        items: [
          "Fine-tune or LoRA a model for a domain (legal/medical) — with synthetic eval sets",
          "Build a multimodal search (images + text) or an internal knowledge assistant with secure access"
        ]
      },
      {
        title: "Industry Trends",
        items: [
          "Demand for RAG + agents + LLMOps skills is high for 2026 product teams"
        ]
      }
    ]
  },
  {
    id: 7,
    title: "System Design & Leadership",
    subtitle: "Ongoing",
    description: "Design, present, and own context systems at an organizational level",
    color: "bg-indigo-500",
    sections: [
      {
        title: "Deliverables to Practice",
        items: [
          "End-to-end architecture diagrams: ingestion, vector DB, context orchestrator, LLM infra, monitoring, auth, data lifecycle",
          "Cost/benefit analysis: choice of hosted vs self-hosted components",
          "Security & compliance plan: PII handling, retention, access controls"
        ]
      },
      {
        title: "Interview Readiness",
        items: [
          "Prepare for system-design interviews: design a secure RAG chatbot for finance (cover ingestion, indexing, ACLs, monitoring)",
          "Mock interviews: explain tradeoffs (latency vs freshness vs compliance)",
          "Portfolio: GitHub repos for (a) ingestion pipeline, (b) orchestrator service, (c) deployed demo with metrics dashboards"
        ]
      }
    ]
  }
];