// components/Docs.jsx
import React from "react";
import { ExternalLink } from "lucide-react";

const docsList = [
  {
    title: "OpenAI Prompt Engineering Guide",
    description:
      "Official OpenAI documentation covering prompt design, structure, and techniques for reliable, high-quality outputs.",
    url: "https://platform.openai.com/docs/guides/prompt-engineering",
    citation: "OpenAI Platform Docs — Prompt Engineering",
  },
  {
    title: "OpenAI Prompting Best Practices",
    description:
      "Best practices article from OpenAI explaining tips, examples, and how to get consistent results across models.",
    url: "https://help.openai.com/en/articles/6654000-best-practices-for-prompt-engineering-with-the-openai-api",
    citation: "OpenAI Help Center — Prompt Engineering Best Practices",
  },
  {
    title: "LangChain Prompt Engineering",
    description:
      "LangChain’s documentation on building, templating, testing, and optimizing prompts for LLM applications.",
    url: "https://docs.langchain.com/langsmith/prompt-engineering",
    citation: "LangChain Docs — LangSmith Prompt Engineering",
  },
  {
    title: "LangChain Prompt Templates & Examples",
    description:
      "Conceptual and practical guide for prompt templates, chat prompts, and chaining prompts within LangChain pipelines.",
    url: "https://docs.langchain.com/docs/modules/model_io/prompts/",
    citation: "LangChain Docs — Prompt Templates & Model I/O",
  },
  {
    title: "Azure OpenAI Prompt Engineering",
    description:
      "Microsoft Learn documentation covering prompt design principles, structure, and examples for Azure OpenAI users.",
    url: "https://learn.microsoft.com/en-us/azure/ai-foundry/openai/concepts/prompt-engineering",
    citation: "Microsoft Learn — Azure OpenAI Prompt Engineering",
  },
  {
    title: "Anthropic Claude Prompt Engineering",
    description:
      "Official Anthropic documentation on creating effective prompts for Claude models with examples and safety guidelines.",
    url: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering",
    citation: "Anthropic Docs — Claude Prompt Engineering",
  },
  {
    title: "Google Gemini Prompting Guide",
    description:
      "Google’s official Gemini API documentation on prompting techniques, examples, and structured generation control.",
    url: "https://cloud.google.com/vertex-ai/docs/generative-ai/model-reference/prompt-design",
    citation: "Google Cloud Docs — Gemini Prompt Design Guide",
  },
  {
    title: "Learn Prompting (Community Curriculum)",
    description:
      "A free, open-source, community-maintained guide covering all prompt engineering techniques from beginner to advanced.",
    url: "https://learnprompting.org/",
    citation: "Learn Prompting — Open Learning Resource",
  },
  {
    title: "DeepLearning.AI — ChatGPT Prompt Engineering Course",
    description:
      "A practical course by DeepLearning.AI & OpenAI, teaching structured prompting, reasoning, and real-world use cases.",
    url: "https://learn.deeplearning.ai/courses/chatgpt-prompt-engineering-for-developers",
    citation: "DeepLearning.AI — Official Prompt Engineering Course",
  },
];

export default function Docs() {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          🧠 Prompt Engineering Official Docs
        </h1>
        <p className="text-gray-600 mb-10">
          Explore official documentation and learning resources that will help
          you master prompt engineering and build production-ready GenAI systems.
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
