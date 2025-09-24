import React from "react";

const projects = [
  {
    id: "faq-bot",
    level: "🌱 Beginner",
    title: "Personal FAQ Bot",
    description:
      "Build a simple FAQ chatbot that answers questions from uploaded data (PDF, Docs, Notion). Great first step with RAG + no-code builders.",
    url: "https://www.youtube.com/watch?v=QUGrcABPCFM" // Leon van Zyl - Flowise tutorial
  },
  {
    id: "ai-email-assistant",
    level: "🌱 Beginner",
    title: "AI Email Assistant",
    description:
      "Create an AI agent that drafts, summarizes, and replies to emails using Zapier + OpenAI. Automate workflows for productivity or customer support.",
    url: "https://www.youtube.com/watch?v=pGEwPzACnAY" // Zapier AI Agent tutorial
  },
  {
    id: "social-media-generator",
    level: "⚡ Intermediate",
    title: "Social Media Content Generator",
    description:
      "Automate social media content generation and scheduling. Multi-step workflows with Zapier agents, perfect for solopreneurs and marketers.",
    url: "https://www.youtube.com/watch?v=2r4QNDuzOGQ" // Helena Liu - Zapier agent tutorial
  },
  {
    id: "research-summarizer",
    level: "⚡ Intermediate",
    title: "Research + Summarization Agent",
    description:
      "Multi-agent workflow where one agent searches the web, another summarizes, and another formats reports. Built with CrewAI Studio.",
    url: "https://www.youtube.com/watch?v=pjEQGFdGvbg" // CrewAI multi-agent systems
  },
  {
    id: "customer-support-system",
    level: "🚀 Advanced",
    title: "Customer Support Multi-Agent System",
    description:
      "A role-based crew of agents: Classifier routes queries, Answer agent retrieves knowledge, Escalation agent passes complex cases to humans.",
    url: "https://www.youtube.com/watch?v=B3AGasnazJg" // CrewAI beginner tutorial
  },
  {
    id: "autonomous-business-agent",
    level: "🚀 Advanced",
    title: "Autonomous Business Agent (Mini AutoGPT)",
    description:
      "An autonomous crew that plans, executes, and reports on tasks like competitor analysis. Uses AutoGen Studio for no-code multi-agent orchestration.",
    url: "https://www.youtube.com/watch?v=lJeD-X-QHfQ" // Matthew Berman - AutoGen Studio 2.0
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
            the latest tutorials (2025). Build useful assistants, automation
            flows, and multi-agent systems.
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
          Follow the sequence, practice with no-code tools, and evolve from
          simple FAQ bots to advanced autonomous business agents. Document and
          showcase 2–3 projects in your portfolio.
        </footer>
      </div>
    </section>
  );
}
