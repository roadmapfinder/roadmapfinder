import React from "react";
import { ExternalLink } from "lucide-react";

const projectsList = [
  {
    title: "AI Workflow Automation Platform (Mini Zapier + AI)",
    description:
      "Build a platform where users create automation workflows combining triggers, AI decision-making, and actions. Example: Form submission → AI intent detection → route to CRM, Email, or Slack.",
    skills:
      "LLM orchestration, workflow automation, APIs, retries, logging",
    outcome:
      "Proves ability to design reusable AI-powered automation systems used by businesses.",
  },
  {
    title: "Autonomous AI Agent (Planner → Executor → Reporter)",
    description:
      "Create an AI agent that receives a goal, breaks it into steps, selects tools, executes tasks autonomously, and generates a final structured report.",
    skills:
      "Agents, reasoning loops, tool calling, long-running tasks",
    outcome:
      "Demonstrates advanced agent design and real-world autonomous behavior.",
  },
  {
    title: "AI Customer Support Automation System",
    description:
      "Automate customer support by classifying tickets, retrieving answers from knowledge bases using RAG, drafting replies, and escalating complex cases to humans.",
    skills:
      "RAG pipelines, classification, safety rules, integrations",
    outcome:
      "Shows ability to replace manual human workflows with reliable AI systems.",
  },
  {
    title: "Resume Screening & Hiring Automation",
    description:
      "Build an AI system that parses resumes, matches them against job descriptions, scores candidates, and generates interview questions automatically.",
    skills:
      "Document parsing, embeddings, scoring logic, structured output",
    outcome:
      "Proves business-focused AI automation and decision-support skills.",
  },
  {
    title: "Enterprise AI Knowledge Base (RAG System)",
    description:
      "Develop a knowledge assistant where users upload documents and ask questions with source-based answers, citations, and controlled hallucination.",
    skills:
      "Vector databases, embeddings, retrieval, prompt design",
    outcome:
      "Core project expected from every AI Automation / LLM Engineer.",
  },
  {
    title: "AI Email & CRM Automation Engine",
    description:
      "Automate inbound email processing by extracting intent, updating CRM records, drafting replies, and scheduling follow-ups automatically.",
    skills:
      "Email APIs, workflow automation, intent detection",
    outcome:
      "Demonstrates real-world business automation with measurable ROI.",
  },
  {
    title: "AI Monitoring & Ops Automation Bot",
    description:
      "Build an AI bot that monitors logs and metrics, detects anomalies, explains issues in plain English, and sends alerts with suggested fixes.",
    skills:
      "Observability, anomaly detection, AI-assisted debugging",
    outcome:
      "Advanced project showing AI + DevOps automation expertise.",
  },
  {
    title: "AI Research & Content Automation Agent",
    description:
      "Create an agent that researches topics, verifies sources, generates structured content, and publishes results to CMS or Notion automatically.",
    skills:
      "Multi-step pipelines, web tools, content generation",
    outcome:
      "Proves ability to control AI quality and factual consistency.",
  },
  {
    title: "AI Automation SaaS Platform (Capstone)",
    description:
      "Build a full SaaS where users design AI automations with authentication, billing, usage tracking, logs, and cloud deployment.",
    skills:
      "End-to-end system design, SaaS architecture, scaling",
    outcome:
      "Industry-ready capstone proving you can ship real AI products.",
  },
];

export default function AiAutomationProjects() {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          ⚙️ AI Automation Engineer – Must Build Projects
        </h1>
        <p className="text-gray-600 mb-10 max-w-3xl">
          These 9 projects are carefully selected to transform a learner into an
          industry-ready AI Automation Engineer. Each project mirrors real-world
          systems used by startups and enterprises.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsList.map((project) => (
            <div
              key={project.title}
              className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 leading-snug">
                  {project.title}
                </h3>
                <ExternalLink
                  size={18}
                  className="text-gray-400 group-hover:text-indigo-600 shrink-0 mt-1"
                  aria-hidden="true"
                />
              </div>

              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                {project.description}
              </p>

              <p className="mt-4 text-xs text-gray-500">
                <span className="font-semibold text-gray-700">Skills:</span>{" "}
                {project.skills}
              </p>

              <p className="mt-2 text-xs text-indigo-600 font-medium">
                {project.outcome}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
