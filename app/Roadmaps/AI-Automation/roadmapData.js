export const phases = [
  {
    id: 0,
    title: "Foundation",
    subtitle: "Mindset + Setup",
    description: "Understand what AI Automation Engineering actually means.",
    color: "bg-gray-500",
    sections: [
      {
        title: "💡 What an AI Automation Engineer Actually Does",
        items: [
          "Replace manual business workflows with AI + automation",
          "Integrate LLMs, APIs, databases, CRMs, tools",
          "Build AI agents, pipelines, and decision systems",
          "Focus on ROI, reliability, and scalability"
        ]
      },
      {
        title: "🧩 Core Skills Snapshot",
        items: [
          "Logic + APIs + Prompting",
          "Automation tools",
          "LLM orchestration",
          "Backend basics",
          "Cloud deployment",
          "Monitoring & safety"
        ]
      }
    ]
  },
  {
    id: 1,
    title: "Beginner",
    subtitle: "Month 1-2",
    description: "Programming & Automation Basics - build your foundation.",
    color: "bg-blue-500",
    sections: [
      {
        title: "🐍 Programming Fundamentals (Must-have)",
        items: [
          "Choose Python (industry standard)",
          "Variables, loops, functions",
          "OOP basics",
          "Error handling",
          "Virtual environments",
          "Tools: Python, VS Code, Git & GitHub"
        ]
      },
      {
        title: "🌐 Web & API Fundamentals",
        items: [
          "REST APIs and HTTP methods",
          "JSON data format",
          "Webhooks",
          "Consume public APIs",
          "Build simple Flask / FastAPI APIs"
        ]
      },
      {
        title: "🚀 Beginner Projects",
        items: [
          "✅ Email automation script",
          "✅ CSV → database cleaner",
          "✅ API data fetcher + formatter",
          "✅ API-based Task Automation Tool (Input → API → Process → Output)"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Automation Platforms",
    subtitle: "Month 3",
    description: "Master workflow tools - no-code + low-code automation.",
    color: "bg-green-500",
    sections: [
      {
        title: "⚙️ Automation Tools (Must Know at Least 2)",
        items: [
          "n8n (developer favorite)",
          "Zapier",
          "Make (Integromat)",
          "Pipedream"
        ]
      },
      {
        title: "🔧 Core Automation Concepts",
        items: [
          "Triggers & actions",
          "Webhooks",
          "Conditional logic",
          "Error handling",
          "Retries & logging"
        ]
      },
      {
        title: "🎯 Automation Projects",
        items: [
          "✅ Multi-step Automation: Form → Validation → AI → Database → Email/Slack"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "AI & LLM Foundations",
    subtitle: "Month 4",
    description: "Learn LLM APIs and prompt engineering - CORE SKILL.",
    color: "bg-purple-500",
    sections: [
      {
        title: "🧠 AI Basics (No Math Overload)",
        items: [
          "What is ML vs DL vs LLM",
          "Tokens, embeddings, temperature",
          "Context windows",
          "Hallucinations"
        ]
      },
      {
        title: "🤖 LLM APIs (CORE SKILL)",
        items: [
          "OpenAI API",
          "Gemini API",
          "Claude API",
          "Prompt engineering",
          "System vs user prompts"
        ]
      },
      {
        title: "✨ Hands-on LLM Skills",
        items: [
          "Text generation",
          "Classification",
          "Summarization",
          "Structured JSON output"
        ]
      },
      {
        title: "🚀 AI Projects",
        items: [
          "✅ AI Email & Document Automation Engine"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "LLM Orchestration",
    subtitle: "Month 5-6",
    description: "Master AI frameworks and vector databases - VERY IMPORTANT.",
    color: "bg-orange-500",
    sections: [
      {
        title: "🔗 LLM Frameworks (Choose 1 Primary + Understand Others)",
        items: [
          "LangChain",
          "LlamaIndex",
          "OpenAI Assistants API",
          "CrewAI",
          "AutoGen"
        ]
      },
      {
        title: "🧩 Framework Concepts",
        items: [
          "Chains",
          "Tools",
          "Memory",
          "Retrieval (RAG)",
          "Function calling"
        ]
      },
      {
        title: "🗄️ Vector Databases",
        items: [
          "Embeddings",
          "Similarity search",
          "Tools: Pinecone, Weaviate, Chroma, FAISS"
        ]
      },
      {
        title: "🎯 Orchestration Projects",
        items: [
          "✅ AI Knowledge Base with RAG: Upload docs → Ask questions → Source-aware answers"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "AI Agents",
    subtitle: "Month 7",
    description: "Build autonomous AI agents that think and act.",
    color: "bg-red-500",
    sections: [
      {
        title: "🤖 Agent Design Patterns",
        items: [
          "ReAct",
          "Planner–Executor",
          "Tool-using agents",
          "Multi-agent collaboration"
        ]
      },
      {
        title: "🛠️ Agent Tools",
        items: [
          "CrewAI",
          "AutoGen",
          "LangGraph"
        ]
      },
      {
        title: "🚀 Agent Projects",
        items: [
          "✅ AI Agent That: Reads tasks → Decides tools → Executes steps → Reports results"
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Backend & Databases",
    subtitle: "Month 8",
    description: "Build robust backends for AI automation systems.",
    color: "bg-indigo-500",
    sections: [
      {
        title: "💻 Backend Essentials",
        items: [
          "FastAPI / Node.js",
          "Authentication",
          "Rate limiting",
          "Background jobs"
        ]
      },
      {
        title: "🗄️ Databases",
        items: [
          "PostgreSQL",
          "MongoDB",
          "Redis (state & caching)"
        ]
      },
      {
        title: "🎯 Backend Projects",
        items: [
          "✅ AI Automation SaaS Backend: Users + automations + logs + usage tracking"
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Cloud Deployment",
    subtitle: "Month 9",
    description: "Deploy AI systems to production - make them real.",
    color: "bg-pink-500",
    sections: [
      {
        title: "☁️ Cloud & DevOps Basics",
        items: [
          "Docker",
          "CI/CD",
          "Environment variables",
          "Secrets management"
        ]
      },
      {
        title: "🌐 Deployment Platforms",
        items: [
          "AWS / GCP / Azure",
          "Vercel",
          "Railway",
          "Render"
        ]
      },
      {
        title: "🚀 Deployment Projects",
        items: [
          "✅ Deployed AI Automation Platform (Production-ready)"
        ]
      }
    ]
  },
  {
    id: 8,
    title: "Reliability & Security",
    subtitle: "Month 10",
    description: "Enterprise-grade systems - MUST-KNOW for Industry.",
    color: "bg-yellow-500",
    sections: [
      {
        title: "🔐 Security & Safety",
        items: [
          "Prompt injection prevention",
          "Input validation",
          "Token cost optimization",
          "Rate limits",
          "Fallback models"
        ]
      },
      {
        title: "📊 Monitoring & Observability",
        items: [
          "Logging & monitoring",
          "Tools: LangSmith, OpenTelemetry, Sentry"
        ]
      },
      {
        title: "🎯 Enterprise Projects",
        items: [
          "✅ Enterprise-grade AI Workflow with error recovery & cost dashboards"
        ]
      }
    ]
  },
  {
    id: 9,
    title: "Business Automation",
    subtitle: "Month 11",
    description: "Real-world use cases - replace human workflows.",
    color: "bg-teal-500",
    sections: [
      {
        title: "💼 Real-World Automations",
        items: [
          "CRM automation",
          "Customer support AI",
          "Resume screening",
          "Invoice processing",
          "Lead qualification",
          "Social media automation"
        ]
      },
      {
        title: "🚀 Business Projects",
        items: [
          "✅ End-to-End Business AI Automation (Replace a real human workflow)"
        ]
      }
    ]
  },
  {
    id: 10,
    title: "Testing & Optimization",
    subtitle: "Month 12",
    description: "Evaluate, test, and document like a professional.",
    color: "bg-cyan-500",
    sections: [
      {
        title: "🧪 Evaluation & Testing",
        items: [
          "Prompt testing",
          "A/B testing models",
          "Output scoring",
          "Regression tests"
        ]
      },
      {
        title: "📚 Documentation",
        items: [
          "Architecture diagrams",
          "API docs",
          "README",
          "Loom demos"
        ]
      }
    ]
  },
  {
    id: 11,
    title: "Industry Ready",
    subtitle: "Capstone & Career",
    description: "Build portfolio projects and launch your career.",
    color: "bg-emerald-500",
    sections: [
      {
        title: "🏆 Capstone Projects (Pick 2-3)",
        items: [
          "✅ AI Automation SaaS: User creates workflows → AI handles logic → Logs + billing",
          "✅ Autonomous Research Agent: Web + docs + tools → Final report output",
          "✅ AI Ops Bot: Monitors systems → Alerts + auto-fixes"
        ]
      },
      {
        title: "🛠️ Tech Stack Summary",
        items: [
          "Languages: Python, JavaScript",
          "AI: OpenAI, Gemini, Claude, LangChain, CrewAI",
          "Automation: n8n, Zapier, Pipedream",
          "Infra: Docker, AWS, Vercel",
          "Data: PostgreSQL, Pinecone, Redis"
        ]
      },
      {
        title: "💼 Job Roles You Can Target",
        items: [
          "AI Automation Engineer",
          "LLM Engineer",
          "AI Workflow Engineer",
          "Automation Architect",
          "AI Solutions Engineer",
          "No-Code AI Consultant"
        ]
      },
      {
        title: "🎯 How to Stand Out (IMPORTANT)",
        items: [
          "Build public demos",
          "Open-source workflows",
          "Write case studies",
          "Share automations on LinkedIn",
          "Show before vs after ROI"
        ]
      }
    ]
  }
];