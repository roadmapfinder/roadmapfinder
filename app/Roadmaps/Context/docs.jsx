// components/Docs.jsx
import React from "react";
import { ExternalLink } from "lucide-react";

const docsList = [
  {
    title: "LangChain Documentation",
    description:
      "Official LangChain docs for agents, chains, retrieval, and LLM orchestration.",
    url: "https://docs.langchain.com/",
    citation: "LangChain Docs",
  },
  {
    title: "LangChain API Reference (Python)",
    description:
      "Complete Python API reference for LangChain, covering tools, chains, agents, and integrations.",
    url: "https://reference.langchain.com/python/",
    citation: "LangChain Python API Docs",
  },
  {
    title: "LangGraph Documentation",
    description:
      "Workflow engine built on LangChain for building robust stateful AI agents.",
    url: "https://www.langchain.com/langgraph",
    citation: "LangGraph Docs",
  },
  {
    title: "Pinecone Documentation",
    description:
      "Hosted vector database for high-performance semantic search and retrieval systems.",
    url: "https://docs.pinecone.io/",
    citation: "Pinecone Docs",
  },
  {
    title: "Weaviate Documentation",
    description:
      "Open-source vector database with hybrid search, modules, and GraphQL API.",
    url: "https://docs.weaviate.io/weaviate",
    citation: "Weaviate Docs",
  },
  {
    title: "Qdrant Documentation",
    description:
      "Open-source vector search engine with filters, distributed support, and embeddings.",
    url: "https://qdrant.tech/documentation/",
    citation: "Qdrant Docs",
  },
  {
    title: "Milvus Documentation",
    description:
      "Scalable open-source vector database built for enterprise-grade semantic search.",
    url: "https://milvus.io/docs",
    citation: "Milvus Docs",
  },
];

export default function Docs() {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          📘 Context Engineering Documentation Resources
        </h1>
        <p className="text-gray-600 mb-10">
          Official documentation for essential context engineering technologies —
          including vector databases, retrieval frameworks, agent workflows, and LLM orchestration.
        </p>

        {/* Cards Grid */}
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
