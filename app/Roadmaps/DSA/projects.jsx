// components/Projects.jsx
import React from "react";

const projects = [
  {
    id: "dsa-cpp-cli",
    level: "Phase 1 — Beginner",
    title: "DSA Projects Using C++ - Operations CLI Project",
    description:
      "Implement DSA concepts through a Command Line Interface (CLI) application, covering various operations.",
    url: "https://www.youtube.com/watch?v=bj7QSgpVXxo"
  },
  {
    id: "dsa-java-projects",
    level: "Phase 2 — Lower-Intermediate",
    title: "DSA in Java - Project-Based Learning",
    description:
      "Project-based approach to learning DSA in Java, ideal for building real-world applications.",
    url: "https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ"
  },
  {
    id: "dsa-python-projects",
    level: "Phase 3 — Intermediate",
    title: "DSA in Python - Introduction and Projects",
    description:
      "Comprehensive guide to DSA in Python, including project implementations and problem-solving techniques.",
    url: "https://www.youtube.com/watch?v=pkYVOmU3MgA"
  },
  {
    id: "dsa-hindi-course",
    level: "Phase 4 — Beginner→Intermediate",
    title: "Complete DSA Course in Hindi",
    description:
      "Full course in Hindi covering all essential DSA topics, with practical projects and examples.",
    url: "https://www.youtube.com/playlist?list=PL0zysOflRCel693wumX2pbb-Zvi-5Ctea"
  },
  {
    id: "sorting-visualizer",
    level: "Phase 5 — Intermediate",
    title: "Sorting Visualizer",
    description:
      "Create a visual representation of various sorting algorithms to understand their working mechanisms.",
    url: "https://www.youtube.com/watch?v=KKgWxW8fT34"
  },
  {
    id: "graph-traversal-visualizer",
    level: "Phase 5 — Intermediate",
    title: "Graph Traversal Visualizer",
    description:
      "Develop a tool to visualize Depth-First Search (DFS) and Breadth-First Search (BFS) algorithms on graphs.",
    url: "https://www.youtube.com/watch?v=2FZ0wD4dS3U"
  },
  {
    id: "pathfinding-visualizer",
    level: "Phase 6 — Intermediate→Advanced",
    title: "Pathfinding Algorithm Visualizer",
    description:
      "Implement and visualize algorithms like Dijkstra's and A* for finding the shortest path in a grid.",
    url: "https://www.youtube.com/watch?v=7oKQd0vFYMI"
  },
  {
    id: "data-structure-implementation",
    level: "Phase 6 — Advanced",
    title: "Data Structure Implementations",
    description:
      "Build custom implementations of Linked Lists, Stacks, Queues, Trees, and Graphs.",
    url: "https://www.youtube.com/watch?v=pkYVOmU3MgA"
  },
  {
    id: "leetcode-problem-solver",
    level: "Phase 7 — Advanced",
    title: "LeetCode Problem Solver",
    description:
      "Develop a tool to solve and test LeetCode problems, integrating various DSA concepts.",
    url: "https://www.youtube.com/watch?v=8hly31xKli0"
  }
];

export default function Projects() {
  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            ⚙️ DSA Project Roadmap
          </h2>
          <p className="mt-2 text-gray-600">
            Step through beginner to advanced DSA projects with Hindi & English tutorials (latest 2025).
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
          Follow the sequence, practice each project, and polish top projects into portfolio-ready case studies.
        </footer>
      </div>
    </section>
  );
}
