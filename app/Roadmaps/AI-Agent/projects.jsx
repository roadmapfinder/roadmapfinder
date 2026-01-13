"use client"
import React from "react";

const projects = [
  // 🌱 Beginner Level
  {
    id: "faq-bot",
    level: "🌱 Beginner",
    title: "Personal FAQ Bot",
    description:
      "Build a chatbot that answers FAQs from uploaded files (PDF/CSV/Docs). Learn RAG basics and vector databases using Flowise or Langflow.",
    url: "https://youtu.be/PGaiZfjJZi0?si=H-B7CUi4JbRiqtg3" // Flowise tutorial by Leon van Zyl
  },
  {
    id: "data-summarizer",
    level: "🌱 Beginner",
    title: "Data Summarizer Agent",
    description:
      "Upload PDFs, YouTube transcripts, or blogs and let the agent summarize them. Practice text chunking, embeddings, and summarization pipelines.",
    url: "https://youtu.be/9lBTS5dM27c?si=-fpWFmosNNJX_0va" // Summarization agent tutorial
  },
  {
    id: "simple-support-bot",
    level: "🌱 Beginner",
    title: "Customer Support Chatbot (Simple)",
    description:
      "Answer customer queries using uploaded docs. Learn intent classification, knowledge base creation, and multi-turn conversations.",
    url: "https://youtu.be/hjbVmXTQltQ?si=ckjEPHIla-t1GHJJ" // Flowise support chatbot tutorial
  },

  // 🚀 Intermediate Level
  {
    id: "ai-research-assistant",
    level: "⚡ Intermediate",
    title: "AI Research Assistant",
    description:
      "Connect web search tools (Google/Serper API) to fetch fresh results and summarize them into insights. Learn retrieval + reasoning + tool use.",
    url: "https://youtu.be/VXxge_ra3rM?si=oxN827fozqgHmqmf" // Web search + summarization agent tutorial
  },
  {
    id: "email-reply-generator",
    level: "⚡ Intermediate",
    title: "Email Reply Generator",
    description:
      "Integrate with Gmail and draft automated replies. Learn persona tuning, workflow automation, and API connections.",
    url: "https://youtu.be/KIJHRq_Tg6o?si=fvbAk3bfsZveyl63" // Zapier AI Gmail agent tutorial
  },
  {
    id: "ecommerce-recommender",
    level: "⚡ Intermediate",
    title: "E-commerce Product Recommender",
    description:
      "Upload product catalog and let the agent recommend items. Learn embeddings for semantic search and personalized recommendations.",
    url: "https://youtu.be/RlOXkcSPM18?si=WubL9xinmPUYwDJ6" // AI recommender tutorial
  },
  {
    id: "social-media-generator",
    level: "⚡ Intermediate",
    title: "Social Media Post Generator",
    description:
      "Input topic → agent generates LinkedIn/Twitter content with hashtags. Learn style transfer and multi-step content generation.",
    url: "https://youtu.be/qZ_J-Xg0QM4?si=llrMGpzxOlu7GA9L" // Zapier AI content automation tutorial
  },

  // 🏆 Advanced Level
  {
    id: "multi-agent-workflow",
    level: "🚀 Advanced",
    title: "Multi-Agent Workflow Orchestrator",
    description:
      "Create a pipeline: Research Agent → Writer Agent → Editor Agent → Publisher Agent. Learn multi-agent collaboration and task orchestration.",
    url: "https://youtu.be/WKKdBC2zM3k?si=Wp84GEbBkSd0u82j" // CrewAI multi-agent workflow tutorial
  },
  {
    id: "support-escalation-bot",
    level: "🚀 Advanced",
    title: "Customer Support Agent with Escalation",
    description:
      "Smart support agent that routes queries, retrieves knowledge, and escalates tough cases to humans via Slack/Email.",
    url: "https://youtu.be/Zpoc7Al90w8?si=OpBb7avLoJB8oONS" // CrewAI beginner system
  },
  {
    id: "business-automation-agent",
    level: "🚀 Advanced",
    title: "Business Automation Agent (Industry Ready)",
    description:
      "Example: Real estate agent → scrape listings, extract insights, email leads. Or finance agent → fetch stock data and generate daily reports.",
    url: "https://youtu.be/_5ud3vEV3_M?si=jdh5ui5vLfTDXrNn" // AutoGen Studio autonomous agent
  }
];

export default function Projects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            🤖 No-Code AI Agent Projects
          </h2>
          <p className="mt-2 text-gray-600">
            Step through beginner to advanced no-code AI Agent projects with
            the latest tutorials (2025). Build assistants, automation flows,
            and multi-agent systems that prepare you for industry.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.id}
              className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform"
              aria-labelledby={`${p.id}-title`}
            >
              <span className="inline-block text-xs font-medium bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full">
                {p.level}
              </span>
              <h3
                id={`${p.id}-title`}
                className="mt-4 text-lg font-semibold text-gray-900 group-hover:text-indigo-600"
              >
                {p.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">{p.description}</p>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-indigo-600 font-medium hover:underline"
              >
                Watch Tutorial ▶
              </a>
            </article>
          ))}
        </div>

        <footer className="mt-10 text-sm text-gray-500 text-center">
          Follow the sequence: start with simple FAQ bots, move into
          automation, and finally build autonomous multi-agent systems.
          Document and showcase 2–3 projects in your portfolio to stand out.
        </footer>
      </div>
    </section>
  );
}
