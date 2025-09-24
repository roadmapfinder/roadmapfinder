import React from "react";

export default function N8nAiAgentsCourse() {
  const course = {
    title: "Build & Sell n8n AI Agents (8+ Hour Course, No Code)",
    instructor: "Nate Herk",
    platform: "YouTube",
    overallGoal:
      "A comprehensive, beginner-friendly masterclass designed to teach you how to build and monetize AI-powered automation workflows using n8n — a no-code, open-source automation tool.",
    modules: [
      {
        title: "Introduction to n8n",
        details: [
          "What is n8n?: An open-source automation tool that allows you to automate tasks and workflows without writing code.",
          "Setting Up n8n: Instructions on how to install and set up n8n on your local machine or server.",
        ],
      },
      {
        title: "Creating Workflows",
        details: [
          "Workflow Basics: Understanding nodes, triggers, and actions.",
          "Building Your First Workflow: Step-by-step guidance on creating a simple automation workflow.",
        ],
      },
      {
        title: "Integrating AI Capabilities",
        details: [
          "Using AI APIs: Connecting to AI services like OpenAI to add intelligence to your workflows.",
          "Implementing AI Agents: Building agents that can make decisions and perform tasks based on AI inputs.",
        ],
      },
      {
        title: "Advanced Automation Techniques",
        details: [
          "Error Handling: Implementing robust error handling to ensure workflows run smoothly.",
          "Scheduling and Triggers: Setting up workflows to run at specific times or in response to events.",
        ],
      },
      {
        title: "Monetizing Your Creations",
        details: [
          "Selling AI Agents: Strategies for marketing and selling your automation solutions.",
          "Building a Portfolio: Creating a showcase of your work to attract potential clients.",
        ],
      },
    ],
    tools: [
      "n8n: The core platform for building automation workflows.",
      "OpenAI API: For integrating AI capabilities into your workflows.",
      "Webhooks: To trigger workflows from external events.",
      "HTTP Requests: To connect with various APIs and services.",
    ],
    outcomes: [
      "Build complex automation workflows using n8n.",
      "Integrate AI capabilities into your workflows.",
      "Deploy and sell your AI agents to clients.",
    ],
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-2">{course.title}</h1>
      <p className="text-gray-700 mb-1">
        <strong>Instructor:</strong> {course.instructor}
      </p>
      <p className="text-gray-700 mb-4">
        <strong>Platform:</strong> {course.platform}
      </p>
      <p className="mb-6">{course.overallGoal}</p>

      <h2 className="text-xl font-semibold mb-3">📚 Course Modules</h2>
      <ul className="space-y-4 mb-6">
        {course.modules.map((mod, idx) => (
          <li key={idx} className="bg-gray-50 p-4 rounded-lg shadow">
            <h3 className="font-semibold mb-2">{mod.title}</h3>
            <ul className="list-disc list-inside space-y-1">
              {mod.details.map((detail, dIdx) => (
                <li key={dIdx}>{detail}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-3">🧰 Tools & Technologies</h2>
      <ul className="list-disc list-inside mb-6 space-y-1">
        {course.tools.map((tool, idx) => (
          <li key={idx}>{tool}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-3">🎯 Learning Outcomes</h2>
      <ul className="list-disc list-inside space-y-1">
        {course.outcomes.map((outcome, idx) => (
          <li key={idx}>{outcome}</li>
        ))}
      </ul>
    </div>
  );
}
