import React from "react";
import { ExternalLink } from "lucide-react";

const docsList = [
  {
    title: "OpenAI API Documentation (Official)",
    description:
      "Official OpenAI API documentation covering GPT models, embeddings, function calling, assistants, streaming, pricing, and best practices.",
    url: "https://platform.openai.com/docs",
    citation: "OpenAI Official",
  },
  {
    title: "Google Gemini API Documentation",
    description:
      "Official Gemini API docs by Google — multimodal models, prompt design, safety, SDKs, and enterprise-ready generative AI workflows.",
    url: "https://ai.google.dev/gemini-api/docs",
    citation: "Google AI Official",
  },
  {
    title: "Anthropic Claude API Docs",
    description:
      "Official Claude API documentation — system prompts, tool use, long context, safety design, and structured outputs.",
    url: "https://docs.anthropic.com/",
    citation: "Anthropic Official",
  },
  {
    title: "LangChain Documentation",
    description:
      "Core framework for building LLM-powered applications — chains, agents, tools, memory, RAG, and production patterns.",
    url: "https://python.langchain.com/docs/",
    citation: "LangChain Docs",
  },
  {
    title: "LlamaIndex Documentation",
    description:
      "Official documentation for LlamaIndex — data connectors, indexing, retrieval, RAG pipelines, and agent integrations.",
    url: "https://docs.llamaindex.ai/",
    citation: "LlamaIndex Official",
  },
  {
    title: "CrewAI Documentation",
    description:
      "Agent orchestration framework documentation — multi-agent systems, task delegation, tools, and autonomous workflows.",
    url: "https://docs.crewai.com/",
    citation: "CrewAI Official",
  },
  {
    title: "n8n Automation Platform Docs",
    description:
      "Official n8n documentation — workflow automation, triggers, webhooks, AI integrations, retries, and error handling.",
    url: "https://docs.n8n.io/",
    citation: "n8n Official",
  },
  {
    title: "Pipedream Developer Docs",
    description:
      "Code-first automation platform documentation — event-driven workflows, APIs, cron jobs, and AI integrations.",
    url: "https://docs.pipedream.com/",
    citation: "Pipedream Docs",
  },
  {
    title: "FastAPI Documentation",
    description:
      "High-performance backend framework used in AI automation — async APIs, auth, background tasks, and OpenAPI support.",
    url: "https://fastapi.tiangolo.com/",
    citation: "FastAPI Official",
  },
  {
    title: "PostgreSQL Official Docs",
    description:
      "Official PostgreSQL documentation — schemas, indexing, transactions, performance tuning, and production usage.",
    url: "https://www.postgresql.org/docs/",
    citation: "PostgreSQL Official",
  },
  {
    title: "Pinecone Vector Database Docs",
    description:
      "Official Pinecone documentation — embeddings storage, similarity search, hybrid search, and scalable vector indexing.",
    url: "https://docs.pinecone.io/",
    citation: "Pinecone Official",
  },
  {
    title: "Docker Documentation",
    description:
      "Official Docker docs — containerization, Dockerfiles, images, volumes, and production deployment workflows.",
    url: "https://docs.docker.com/",
    citation: "Docker Official",
  },
  {
    title: "AWS Documentation",
    description:
      "Amazon Web Services official documentation — EC2, Lambda, S3, IAM, and cloud infrastructure for AI automation.",
    url: "https://docs.aws.amazon.com/",
    citation: "AWS Official",
  },
  {
    title: "LangSmith (LLM Observability)",
    description:
      "Official LangSmith documentation — debugging, monitoring, testing, and evaluating LLM-based automation pipelines.",
    url: "https://docs.smith.langchain.com/",
    citation: "LangSmith Official",
  },
];

export default function AiAutomationDocs() {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          🤖 AI Automation Engineer – Official Documentation
        </h1>
        <p className="text-gray-600 mb-10 max-w-3xl">
          Curated official documentation every AI Automation Engineer must know —
          covering LLM APIs, agents, automation platforms, backend systems,
          vector databases, deployment, and production best practices.
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
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 leading-snug">
                  {doc.title}
                </h3>
                <ExternalLink
                  size={18}
                  className="text-gray-400 group-hover:text-indigo-600 shrink-0 mt-1"
                  aria-hidden="true"
                />
              </div>

              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                {doc.description}
              </p>

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
