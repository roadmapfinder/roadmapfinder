import React from 'react';

export default function SystemDesignPlaylistPiyushGarg() {
  const course = {
    title: "Complete System Design Playlist — Piyush Garg",
    format: "Beginner-focused YouTube playlist with multiple videos, including crash courses and focused topic discussions.",
    targetAudience: [
      "Beginners transitioning into system design thinking",
      "Developers preparing for system design interviews",
      "Learners interested in scalable architecture patterns"
    ],
    modules: [
      {
        id: 1,
        name: "Introduction to System Design",
        topics: [
          "What is System Design?",
          "Why it is important for developers",
          "Scope of the playlist"
        ]
      },
      {
        id: 2,
        name: "System Design Crash Course – Part 2",
        topics: [
          "Scalable design principles",
          "System bottlenecks",
          "Architectural components"
        ]
      },
      {
        id: 3,
        name: "Event Sourcing & Patterns",
        topics: [
          "Event-driven architecture",
          "Event sourcing fundamentals",
          "State management patterns"
        ]
      }
    ],
    learningApproach: [
      "Watch the playlist sequentially for incremental learning",
      "Pause to diagram architectures, trade-offs, and workflows",
      "Apply learnings by modeling systems (messaging, APIs, databases)"
    ],
    expectedOutcomes: [
      "Understanding of foundational system architecture patterns",
      "Exposure to scalable designs and event sourcing",
      "Initial readiness for system design interviews"
    ],
    nextSteps: [
      "Watch 'How Video Streaming Works at Scale – System Design' by Piyush Garg",
      "Practice mock system design questions (e.g., URIs, load balancing, scaling databases)"
    ],
    summary:
      "Piyush Garg's System Design playlist offers a compact yet foundational walkthrough of scalable architectures and distributed systems. With emphasis on modern patterns like event sourcing, it’s an excellent starting point for developers new to system design."
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{course.title}</h1>
      <p className="mb-4">{course.format}</p>

      <h2 className="text-xl font-semibold mt-4 mb-2">🎯 Target Audience</h2>
      <ul className="list-disc ml-6 mb-4">
        {course.targetAudience.map((audience, idx) => (
          <li key={idx}>{audience}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mt-4 mb-2">📚 Modules</h2>
      <div className="space-y-4">
        {course.modules.map((module) => (
          <div key={module.id} className="p-4 border rounded-lg shadow">
            <h3 className="font-semibold">
              {module.id}. {module.name}
            </h3>
            <ul className="list-disc ml-6">
              {module.topics.map((topic, idx) => (
                <li key={idx}>{topic}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-semibold mt-6 mb-2">📝 Learning Approach</h2>
      <ul className="list-disc ml-6 mb-4">
        {course.learningApproach.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">🏆 Expected Outcomes</h2>
      <ul className="list-disc ml-6 mb-4">
        {course.expectedOutcomes.map((outcome, idx) => (
          <li key={idx}>{outcome}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">🚀 Next Steps</h2>
      <ul className="list-disc ml-6 mb-4">
        {course.nextSteps.map((step, idx) => (
          <li key={idx}>{step}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">📌 Final Summary</h2>
      <p>{course.summary}</p>
    </div>
  );
}
