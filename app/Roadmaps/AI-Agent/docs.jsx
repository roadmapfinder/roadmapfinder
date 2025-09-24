// components/Docs.jsx
import React from "react";
import { ExternalLink } from "lucide-react";

const docsList = [
  {
    title: "Langflow Documentation",
    description:
      "Comprehensive introduction, installation options, tutorials, and deployment guidance for Langflow (Visual LangChain Agent Builder).",
    url: "https://docs.langflow.org/",
    citation: "Langflow Docs",
  },
  {
    title: "Langflow Quickstart Guide",
    description:
      "How to install Langflow and run your first 'Simple Agent' flow via desktop app, Docker, or package.",
    url: "https://docs.langflow.org/get-started-quickstart",
    citation: "Langflow Quickstart",
  },
  {
    title: "Langflow Components Reference",
    description:
      "Overview of flow building blocks like LLMs, prompt templates, data input/output components, and memory.",
    url: "https://docs.langflow.org/concepts-components",
    citation: "Langflow Components",
  },
  {
    title: "Langflow Deployment Overview",
    description:
      "Steps to host Langflow using Docker, Kubernetes, or cloud providers for production-ready agents.",
    url: "https://docs.langflow.org/deployment-overview",
    citation: "Langflow Deployment",
  },
  {
    title: "Flowise Documentation",
    description:
      "Platform overview, Chatflow and Agentflow tutorials, analytics, evaluations, API usage, and deployment.",
    url: "https://docs.flowiseai.com/",
    citation: "Flowise Docs",
  },
  {
    title: "Flowise GitHub Docs",
    description:
      "Source repository with official documentation updates, examples, and community-driven improvements.",
    url: "https://github.com/FlowiseAI/FlowiseDocs",
    citation: "Flowise GitHub",
  },
  {
    title: "Relevance AI Get-Started Guide",
    description:
      "How to build agents, customize tools, and scale multi-agent workflows entirely through a GUI.",
    url: "https://relevanceai.com/docs/get-started/introduction",
    citation: "Relevance AI Quickstart",
  },
  {
    title: "Relevance AI Agent Concepts",
    description:
      "Explanation of how agents make decisions, use tools, and deploy via triggers or APIs in Relevance AI.",
    url: "https://relevanceai.com/docs/get-started/key-concepts/agent",
    citation: "Relevance AI Concepts",
  },
  {
    title: "Relevance AI No-Code Tools Builder",
    description:
      "Tutorials for building integrations, prompts, or workflows that can be used by agents without code.",
    url: "https://relevanceai.com/docs/get-started/key-concepts/tools",
    citation: "Relevance AI Tools",
  },
  {
    title: "CrewAI Documentation",
    description:
      "Core concepts for multi-agent orchestration: crews, flows, memory, tools, observability, and APIs.",
    url: "https://docs.crewai.com/",
    citation: "CrewAI Docs",
  },
  {
    title: "CrewAI Quickstart Guide",
    description:
      "Build your first crew in minutes using scaffolding with agents.yaml and tasks.yaml definitions.",
    url: "https://docs.crewai.com/quickstart",
    citation: "CrewAI Quickstart",
  },
  {
    title: "CrewAI Studio (No-Code GUI)",
    description:
      "Conversational interface to generate and deploy agent crews visually, without writing code.",
    url: "https://docs.crewai.com/enterprise/guides/enable-crew-studio",
    citation: "CrewAI Studio",
  },
  {
    title: "CrewAI LLM Configuration Guide",
    description:
      "How to configure, optimize, and connect LLM providers for CrewAI projects.",
    url: "https://docs.crewai.com/concepts/llms",
    citation: "CrewAI LLMs",
  },
];

export default function Docs() {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          🤖 No-Code AI Agent Documentation Resources
        </h1>
        <p className="text-gray-600 mb-10">
          Official documentation sites for the top no-code AI agent builders
          (Langflow, Flowise, Relevance AI, CrewAI) — essential for learners and
          builders.
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
