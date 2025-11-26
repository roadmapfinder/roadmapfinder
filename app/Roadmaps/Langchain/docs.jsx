// components/LangchainDocs.jsx
import React from "react";
import { ExternalLink } from "lucide-react";

const docsList = [
  {
    title: "LangChain Official Documentation",
    description:
      "The primary source for all LangChain concepts, modules, LLMs, chains, agents, and integrations.",
    url: "https://docs.langchain.com/",
    citation: "LangChain Docs",
  },
  {
    title: "LangChain Python Documentation",
    description:
      "Comprehensive Python guides for using LLMs, tools, agents, vector stores, memory, and RAG.",
    url: "https://python.langchain.com/",
    citation: "LangChain Python",
  },
  {
    title: "LangChain JS/TypeScript Documentation",
    description:
      "Documentation for using LangChain with JavaScript and TypeScript in web and server environments.",
    url: "https://js.langchain.com/",
    citation: "LangChain JS",
  },
  {
    title: "LangGraph Documentation",
    description:
      "Guide to building multi-agent systems, workflows, and stateful LLM apps using LangGraph.",
    url: "https://langchain-ai.github.io/langgraph/",
    citation: "LangGraph",
  },
  {
    title: "LangSmith Documentation",
    description:
      "Official docs for tracing, evaluating, debugging, and monitoring LangChain applications.",
    url: "https://docs.smith.langchain.com/",
    citation: "LangSmith",
  },
  {
    title: "LangChain Integrations",
    description:
      "List of supported models, vector databases, tools, retrievers, and external API integrations.",
    url: "https://docs.langchain.com/docs/integrations/",
    citation: "Integrations",
  },
  {
    title: "LangChain Templates",
    description:
      "Official boilerplates for production-ready LangChain apps including RAG, agents, chatbots, tools, and workflows.",
    url: "https://templates.langchain.com/",
    citation: "Templates",
  },
  {
    title: "LangChain API Reference",
    description:
      "Full class and module reference for LangChain Python and JS SDKs.",
    url: "https://api.python.langchain.com/",
    citation: "API Reference",
  },
  {
    title: "LangChain GitHub Repository",
    description:
      "Official repository including examples, issues, pull requests, and source code for LangChain.",
    url: "https://github.com/langchain-ai/langchain",
    citation: "GitHub Repo",
  },
  {
    title: "LangChain Cookbook",
    description:
      "Community-driven cookbook with real-world examples for agents, RAG, memory, and workflows.",
    url: "https://github.com/langchain-ai/langchain/blob/master/docs/cookbook.md",
    citation: "Cookbook",
  },
  {
    title: "LangChain RAG Guide",
    description:
      "Official guide for Retrieval-Augmented Generation: chunking, embeddings, indexing, and retrievers.",
    url: "https://docs.langchain.com/docs/use-cases/question-answering/",
    citation: "RAG Guide",
  },
  {
    title: "LangChain Agents Guide",
    description:
      "Deep dive into agent types, tool usage, callbacks, reasoning, and multi-step workflows.",
    url: "https://docs.langchain.com/docs/modules/agents/",
    citation: "Agents",
  },
];

export default function LangchainDocs() {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          📘 Official LangChain Documentation
        </h1>
        <p className="text-gray-600 mb-10">
          Essential LangChain documentation every learner must follow — including LLMs, agents, vector stores, LangGraph, LangSmith, integrations, templates, and API references.
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