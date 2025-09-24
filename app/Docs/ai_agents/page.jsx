import React from "react";

export default function AIAgentsMasterclassHindi() {
  const course = {
    title: "AI Agents Full Masterclass (Hindi)",
    platform: "YouTube",
    instructor: "AI Learners India",
    description: [
      "A multi-day masterclass series in Hindi on AI Agents.",
      "Covers fundamentals, tools, architectures, workflows, and real use cases.",
      "Each 'Day' in the playlist represents a dedicated module of the masterclass.",
    ],
    day1: {
      title: "Day 1 – AI Agents Are Changing the Game!",
      focus: "Foundational introduction to AI agents and why they matter.",
      coverage: [
        "Definition of AI agents and how they differ from scripts/automation",
        "Importance and role of agents in AI workflows",
        "Overview of frameworks: LangChain, Auto-GPT, BabyAGI",
        "Concepts: memory, planning, decision making",
        "Real-world examples: email bots, task managers, social media agents",
        "Agent vs traditional automation – advantages of agentic architecture",
      ],
      comments: "Acts as conceptual & motivational entry point, preparing for deeper technical modules ahead.",
    },
    roadmap: [
      {
        day: "Day 1",
        topic: "Introduction, agent fundamentals",
        learn: "What agents are, why they are transformative, basic mental models",
      },
      {
        day: "Day 2",
        topic: "Tools & frameworks",
        learn: "Intro to LangChain, Auto-GPT, BabyAGI, and other libraries",
      },
      {
        day: "Day 3",
        topic: "Agent architecture & components",
        learn: "Memory, planning, decision-making, environment interface",
      },
      {
        day: "Day 4 / 5",
        topic: "Simple agent building",
        learn: "Code your first agent(s) in Python, API integrations",
      },
      {
        day: "Day 6",
        topic: "n8n / no-code / nodes",
        learn: "Using n8n workflow automation to build AI agents",
      },
      {
        day: "Day 7 / 8",
        topic: "Complex agents & workflows",
        learn: "Branching flows, error handling, advanced tasks",
      },
      {
        day: "Day 9 / 10",
        topic: "Email agents / reply agents",
        learn: "Automating email responses with n8n Email Reply Agent",
      },
      {
        day: "Day 11",
        topic: "Advanced workflows / XML in agents",
        learn: "Using XML prompts inside n8n for advanced control",
      },
      {
        day: "Day 12 / 13",
        topic: "Agent orchestration & deployment",
        learn: "Managing multiple agents, scaling, reliability",
      },
      {
        day: "Day 14",
        topic: "RAG (Retrieval Augmented Generation)",
        learn: "Connecting agents with data/doc sources via embeddings",
      },
      {
        day: "Later days",
        topic: "Specialized agent use cases",
        learn: "Multi-agent systems, chaining agents, DB & API integration",
      },
    ],
    strengths: [
      "Explains both conceptual and practical aspects of agents",
      "Mix of coding (Python) and no-code (n8n) approaches",
      "Hands-on projects for real-world use cases",
      "Gradual increase in technical depth from basics to advanced",
      "Accessible in Hindi – useful for native learners",
    ],
    lighterAreas: [
      "Not focused on building LLMs from scratch",
      "Less coverage of distributed systems or ML theory",
      "Advanced low-level optimization not the main scope",
    ],
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
      <p className="text-lg mb-2">
        <strong>Platform:</strong> {course.platform}
      </p>
      <p className="text-lg mb-6">
        <strong>Instructor:</strong> {course.instructor}
      </p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">About the Masterclass</h2>
        <ul className="list-disc pl-6">
          {course.description.map((desc, i) => (
            <li key={i}>{desc}</li>
          ))}
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Day 1 Overview</h2>
        <h3 className="text-xl font-bold mb-2">{course.day1.title}</h3>
        <p className="italic mb-2">{course.day1.focus}</p>
        <ul className="list-disc pl-6 mb-2">
          {course.day1.coverage.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>
        <p className="text-gray-600 italic">{course.day1.comments}</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Course Roadmap (Days / Modules)</h2>
        <div className="space-y-4">
          {course.roadmap.map((r, i) => (
            <div key={i} className="border rounded-xl p-4 shadow">
              <h3 className="text-xl font-semibold">{r.day} – {r.topic}</h3>
              <p className="mt-1">{r.learn}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Strengths</h2>
        <ul className="list-disc pl-6">
          {course.strengths.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Lighter / Less Covered Areas</h2>
        <ul className="list-disc pl-6">
          {course.lighterAreas.map((l, i) => (
            <li key={i}>{l}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
