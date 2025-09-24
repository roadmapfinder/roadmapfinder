import React from "react";

export default function N8nHindiCourse() {
  const course = {
    title:
      "n8n Tutorial For Beginners In Hindi (2025) - Complete n8n Course हिन्दी में [A-Z]",
    instructor: "Kripesh Adwani",
    platform: "YouTube",
    overallGoal:
      "An extensive, beginner-friendly guide to mastering n8n, a powerful no-code automation platform. This course is tailored for Hindi-speaking audiences and covers everything from the basics to advanced automation techniques.",
    modules: [
      {
        title: "Introduction to n8n",
        details: [
          "What is n8n? An open-source workflow automation tool that allows you to automate tasks and integrate various services.",
          "Setting Up n8n Locally and on cloud platforms.",
          "Understanding the n8n Interface: Navigating the dashboard, workflows, and nodes.",
        ],
      },
      {
        title: "Creating Your First Workflow",
        details: [
          "Building a Simple Workflow: Using triggers and actions.",
          "Connecting Different Services: Like Google Sheets, Gmail, and Slack.",
          "Testing and Debugging Workflows: Ensuring they run smoothly.",
        ],
      },
      {
        title: "Advanced Workflow Techniques",
        details: [
          "Conditional Logic: Implementing if/else conditions.",
          "Loops and Iterations: Processing data in batches.",
          "Error Handling: Managing exceptions and failures.",
        ],
      },
      {
        title: "Integrating AI Capabilities",
        details: [
          "Using AI APIs: Integrating services like OpenAI for natural language processing.",
          "Building AI-Powered Agents: Creating intelligent automation bots.",
          "Implementing RAG (Retrieval Augmented Generation): Enhancing AI responses with external data.",
        ],
      },
      {
        title: "Deploying and Scaling Workflows",
        details: [
          "Scheduling Workflows: Running tasks at specified intervals.",
          "Monitoring and Logging: Tracking workflow executions.",
          "Scaling Workflows: Handling increased load and performance optimization.",
        ],
      },
      {
        title: "Real-World Use Cases",
        details: [
          "Automating Social Media Posts: Scheduling and posting content.",
          "Managing Leads: Integrating with CRM systems.",
          "Data Synchronization: Syncing data between different platforms.",
        ],
      },
    ],
    tools: [
      "n8n: The core platform for building automation workflows.",
      "OpenAI API: For integrating AI capabilities.",
      "Google Sheets, Gmail, Slack: Common services integrated with n8n.",
      "Webhooks and APIs: For connecting with external services.",
    ],
    outcomes: [
      "Build and deploy automated workflows using n8n.",
      "Integrate various services and APIs without writing code.",
      "Create AI-powered automation agents.",
      "Monitor, scale, and optimize workflows for real-world applications.",
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

      <h2 className="text-xl font-semibold mb-3">🛠 Tools & Technologies</h2>
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
