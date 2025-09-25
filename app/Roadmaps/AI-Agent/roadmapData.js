// roadmapData.js
export const phases = [
  {
    id: 1,
    title: "Foundations",
    subtitle: "Beginner Level",
    description: "Learn how AI agents work without touching heavy code.",
    color: "bg-blue-500",
    sections: [
      {
        title: "🤖 Basics of AI & LLMs",
        items: [
          "What are AI agents? (Reasoning + Tools + Memory)",
          "Core terms: prompt, context, embedding, RAG, function calling",
          "Learn about OpenAI, Claude, LLaMA, Mistral APIs (just how to connect via no-code)",
          "Understanding AI agent architecture and workflows"
        ]
      },
      {
        title: "🛠️ Tools to Start",
        items: [
          "ChatGPT / Claude (prompting basics)",
          "Perplexity AI (research assistant examples)",
          "Prompt marketplaces (PromptBase, FlowGPT)",
          "Basic prompt engineering techniques"
        ]
      },
      {
        title: "🎯 Mini Projects",
        items: [
          "Design prompts to create an email writer",
          "Prompt engineer a 'travel planner assistant'",
          "Create a personal productivity AI assistant",
          "Build a simple Q&A bot using prompts"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Agent Building with No-Code Platforms",
    subtitle: "Intermediate Level",
    description: "Start connecting LLMs with external tools using visual builders.",
    color: "bg-green-500",
    sections: [
      {
        title: "🎨 Visual Agent Builders",
        items: [
          "Langflow – drag-and-drop chains, memory, tools",
          "Flowise AI – open-source no-code LangChain UI",
          "Relevance AI – multi-agent studio with templates",
          "Poe by Quora – simple agent creation"
        ]
      },
      {
        title: "⚡ Automation + AI Workflows",
        items: [
          "Zapier AI Actions – connect LLMs to 6000+ apps",
          "Make (Integromat) – AI + API workflows",
          "n8n – open-source automation with AI integrations",
          "Power Automate + AI Builder integration"
        ]
      },
      {
        title: "🧠 Knowledge & Memory (No-Code RAG)",
        items: [
          "Chatbase (chat with your data)",
          "DocuAsk / CustomGPT for document processing",
          "Pinecone (GUI) + Flowise for embeddings",
          "Vector database integration without coding"
        ]
      },
      {
        title: "🚀 Intermediate Projects",
        items: [
          "Create a Q&A bot for a PDF (Flowise + ChromaDB)",
          "Customer support agent with memory (Langflow)",
          "AI agent that drafts social media posts (Zapier + OpenAI)",
          "Company FAQ chatbot trained on your docs"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Multi-Agent Systems",
    subtitle: "Advanced Intermediate",
    description: "Build collaborative AI agent teams without coding.",
    color: "bg-purple-500",
    sections: [
      {
        title: "👥 Multi-Agent Orchestration (No-Code)",
        items: [
          "CrewAI Studio (GUI) – define multiple roles (researcher, coder, tester)",
          "Relevance AI Multi-Agent Hub – agents collaborate visually",
          "AutoGen Studio (UI) – Microsoft's no-code agent playground",
          "Agent workflow coordination and task delegation"
        ]
      },
      {
        title: "🔗 Advanced Integrations",
        items: [
          "CRM Integrations (HubSpot, Salesforce)",
          "E-commerce AI (Shopify AI agents with Zapier)",
          "Analytics & Monitoring (LangSmith dashboard without coding)",
          "API connections through visual interfaces"
        ]
      },
      {
        title: "🎯 Multi-Agent Projects",
        items: [
          "AI research team (Researcher agent + Writer agent)",
          "Multi-agent 'startup simulation' (CEO, marketer, developer)",
          "Sales assistant that logs leads in CRM",
          "E-commerce agent that answers customer questions from product catalog"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Scaling & Deployment",
    subtitle: "Advanced Level",
    description: "Build deployable, production-ready AI agents — still no-code.",
    color: "bg-orange-500",
    sections: [
      {
        title: "🌐 Deployment & Hosting",
        items: [
          "Vercel AI SDK (GUI options) – deploy chatbots on websites",
          "Typedream + Chatbase widget – embed AI agent on site",
          "Glide / Bubble.io – no-code apps with AI backends",
          "Botpress – conversational AI without coding"
        ]
      },
      {
        title: "⚙️ Production Features",
        items: [
          "User authentication and session management",
          "Scalable hosting and load balancing",
          "Monitoring and analytics dashboards",
          "Error handling and fallback systems"
        ]
      },
      {
        title: "📈 Advanced Projects",
        items: [
          "Deploy AI customer support widget on website",
          "Launch an AI 'resume coach' app on Bubble",
          "Multi-channel chatbot (web, Slack, Discord)",
          "AI-powered workflow automation system"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Mastery",
    subtitle: "Cutting-Edge No-Code",
    description: "Build autonomous and self-improving AI agent systems.",
    color: "bg-red-500",
    sections: [
      {
        title: "🤖 Autonomous & Self-Improving Agents",
        items: [
          "Use AutoGPT UIs (Camel AGI UI, AgentGPT)",
          "Relevance AI's self-learning agents",
          "Plug-in multiple APIs to make agents truly autonomous",
          "Continuous learning and adaptation systems"
        ]
      },
      {
        title: "🏆 Capstone Projects (Industry-Ready)",
        items: [
          "Fully automated market research agent (scrapes web, summarizes, stores results)",
          "Multi-agent AI consultancy firm (Planner, Researcher, Writer, Designer agents)",
          "AI-powered business intelligence system",
          "Autonomous customer service ecosystem",
          "Self-optimizing marketing campaign manager"
        ]
      }
    ]
  }
];

export const learningPathData = {
  beginnerTools: [
    "Prompting → ChatGPT / Claude / Poe",
    "Visual agent builders → Flowise, Langflow"
  ],
  advancedTools: [
    "Automation → Zapier AI, Make, n8n",
    "Memory → Chatbase, Relevance AI, Pinecone GUI"
  ],
  multiAgentTools: [
    "Multi-agent → CrewAI Studio, Relevance AI Multi-Agent",
    "Deployment → Bubble, Glide, Typedream, Botpress"
  ],
  scalingTools: [
    "Scaling → Vercel, LangSmith dashboards",
    "Autonomous → AutoGPT UIs, AgentGPT"
  ]
};

export const timelineData = [
  {
    phase: "Phase 1: Foundations",
    duration: "1 month",
    level: "Beginner Level",
    color: "border-blue-300",
    textColor: "text-blue-600"
  },
  {
    phase: "Phase 2: Agent Building",
    duration: "2-3 months",
    level: "Intermediate Level",
    color: "border-green-300",
    textColor: "text-green-600"
  },
  {
    phase: "Phase 3: Multi-Agent",
    duration: "3-5 months",
    level: "Advanced Level",
    color: "border-purple-300",
    textColor: "text-purple-600"
  },
  {
    phase: "Phase 4-5: Mastery",
    duration: "Ongoing",
    level: "Expert Level",
    color: "border-red-300",
    textColor: "text-red-600"
  }
];

export const finalTips = [
  "Join no-code AI communities (Discord, Reddit, LinkedIn groups)",
  "Share your agent builds on social media & portfolio sites",
  "Write tutorials about your no-code AI solutions",
  "Stay updated via no-code newsletters and AI agent platforms",
  "Experiment with new no-code AI tools as they emerge"
];