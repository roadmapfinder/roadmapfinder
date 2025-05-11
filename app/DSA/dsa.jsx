"use client";
import { useState } from "react";
import Head from "next/head";

// DSA Roadmap data structure
const roadmapData = [
  {
    id: 1,
    title: "Programming Fundamentals",
    description: "Master the programming language of your choice",
    content: {
      whatToLearn: [
        "Syntax and semantics",
        "Variables, data types, and operators",
        "Control structures (if/else, loops)",
        "Functions and methods",
        "Error handling",
        "Basic I/O operations",
      ],
      resources: [
        "C++: 'A Tour of C++' by Bjarne Stroustrup",
        "Java: 'Effective Java' by Joshua Bloch",
        "Python: 'Python Crash Course' by Eric Matthes",
        "JavaScript: 'Eloquent JavaScript' by Marijn Haverbeke",
        "freeCodeCamp Programming Fundamentals course",
      ],
      toolsToUse: [
        "Visual Studio Code",
        "JetBrains IDEs (PyCharm, IntelliJ)",
        "Replit (online editor)",
        "GitHub (version control)",
        "Jupyter Notebooks (for Python)",
      ],
      practiceIdeas: [
        "Implement simple math operations",
        "Create a command-line calculator",
        "Build a simple text-based game",
        "Create a to-do list application",
      ],
    },
  },
  {
    id: 2,
    title: "Basic Data Structures",
    description: "Learn the core building blocks of efficient programs",
    content: {
      whatToLearn: [
        "Arrays and dynamic arrays",
        "Linked Lists (singly, doubly)",
        "Stacks and Queues",
        "Hash Tables",
        "Trees (Binary, BST)",
        "Heaps (Min/Max)",
      ],
      resources: [
        "Introduction to Algorithms by CLRS",
        "Data Structures and Algorithms Made Easy by Narasimha Karumanchi",
        "CS50's Introduction to Computer Science (Harvard)",
        "Visualgo.net - Data Structure Visualizations",
        "GeeksforGeeks Data Structures articles",
      ],
      toolsToUse: [
        "Programming language of choice",
        "VisuAlgo (visualization tool)",
        "Data Structure Visualizations (USFCA)",
        "Algorithm Visualizer",
        "CodePen/CodeSandbox for testing",
      ],
      practiceIdeas: [
        "Implement each data structure from scratch",
        "Create a stack-based calculator",
        "Build a queue simulation",
        "Design a custom hash table",
      ],
    },
  },
  {
    id: 3,
    title: "Basic Algorithms",
    description: "Master fundamental algorithms and problem-solving approaches",
    content: {
      whatToLearn: [
        "Searching algorithms (Linear, Binary)",
        "Sorting algorithms (Bubble, Selection, Insertion, Merge, Quick)",
        "Recursion basics",
        "Time and space complexity (Big O notation)",
        "Problem-solving strategies",
        "Basic algorithm design techniques",
      ],
      resources: [
        "Grokking Algorithms by Aditya Bhargava",
        "Algorithms Illuminated (Part 1) by Tim Roughgarden",
        "MIT 6.006 Introduction to Algorithms",
        "Coursera: Algorithms Specialization (Stanford)",
        "Khan Academy: Algorithms",
      ],
      toolsToUse: [
        "LeetCode (Easy problems)",
        "HackerRank Algorithms track",
        "CLRS solution manual",
        "Algorithm Visualizer tools",
        "Time complexity calculator",
      ],
      practiceIdeas: [
        "Implement all sorting algorithms",
        "Create a binary search function",
        "Solve simple recursion problems",
        "Analyze algorithm complexities",
      ],
    },
  },
  {
    id: 4,
    title: "Advanced Data Structures",
    description: "Expand your toolkit with more complex data structures",
    content: {
      whatToLearn: [
        "Balanced Trees (AVL, Red-Black)",
        "B-Trees and B+ Trees",
        "Graphs (representation, traversal)",
        "Trie",
        "Segment Trees",
        "Disjoint Set Union (DSU)",
      ],
      resources: [
        "Advanced Data Structures by Peter Brass",
        "Competitive Programmer's Handbook by Antti Laaksonen",
        "William Fiset's Data Structures YouTube Series",
        "CP-Algorithms.com",
        "Topcoder tutorials",
      ],
      toolsToUse: [
        "Graph visualization tools",
        "LeetCode Medium problems",
        "Codeforces Div2 problems",
        "Custom test case generators",
        "Benchmarking tools",
      ],
      practiceIdeas: [
        "Implement an AVL tree with rotations",
        "Create a trie for autocomplete",
        "Build a graph with traversal algorithms",
        "Design a segment tree implementation",
      ],
    },
  },
  {
    id: 5,
    title: "Advanced Algorithms",
    description: "Study complex algorithm paradigms for challenging problems",
    content: {
      whatToLearn: [
        "Divide and Conquer",
        "Greedy Algorithms",
        "Dynamic Programming",
        "Graph Algorithms (DFS, BFS, Dijkstra, Floyd-Warshall)",
        "String Algorithms (KMP, Z, Rabin-Karp)",
        "Computational Geometry basics",
      ],
      resources: [
        "Algorithms Illuminated (Parts 2-4) by Tim Roughgarden",
        "Algorithm Design Manual by Steven Skiena",
        "Dynamic Programming for Coding Interviews",
        "Erik Demaine's lectures (MIT)",
        "Tushar Roy's Algorithm videos",
      ],
      toolsToUse: [
        "LeetCode Medium/Hard problems",
        "Codeforces Div1 problems",
        "AtCoder contests",
        "Algorithm visualization platforms",
        "OEIS (for sequence problems)",
      ],
      practiceIdeas: [
        "Solve classic DP problems (knapsack, LCS)",
        "Implement Dijkstra's algorithm",
        "Create string matching algorithms",
        "Solve geometry problems (convex hull)",
      ],
    },
  },
  {
    id: 6,
    title: "Problem Solving Patterns",
    description: "Learn common patterns to tackle algorithmic challenges",
    content: {
      whatToLearn: [
        "Sliding Window technique",
        "Two Pointers approach",
        "Fast and Slow pointers",
        "Merge Intervals",
        "Cyclic Sort",
        "Topological Sort",
        "Binary Search variations",
        "Backtracking",
      ],
      resources: [
        "Grokking the Coding Interview",
        "Element of Programming Interviews",
        "Coding Interview Patterns on Educative.io",
        "NeetCode pattern videos",
        "InterviewCamp.io",
      ],
      toolsToUse: [
        "Pattern classification tools",
        "Problem tags on LeetCode/Codeforces",
        "Spaced repetition software",
        "Personal problem database",
        "Interview preparation websites",
      ],
      practiceIdeas: [
        "Identify patterns in new problems",
        "Solve 5 problems of each pattern",
        "Create a cheat sheet of patterns",
        "Practice pattern switching",
      ],
    },
  },
  {
    id: 7,
    title: "System Design Basics",
    description: "Learn to design scalable systems using DSA principles",
    content: {
      whatToLearn: [
        "Component design",
        "API design principles",
        "Database schema design",
        "Caching strategies",
        "Load balancing basics",
        "Consistent hashing",
      ],
      resources: [
        "System Design Interview by Alex Xu",
        "Designing Data-Intensive Applications",
        "System Design Primer (GitHub)",
        "Grokking the System Design Interview",
        "ByteByteGo System Design videos",
      ],
      toolsToUse: [
        "Draw.io for diagrams",
        "Excalidraw",
        "Database design tools",
        "API documentation tools",
        "GitHub repositories with examples",
      ],
      practiceIdeas: [
        "Design a URL shortener",
        "Create a simple key-value store",
        "Design a task scheduler",
        "Build a simple rate limiter",
      ],
    },
  },
  {
    id: 8,
    title: "Competitive Programming",
    description: "Sharpen your skills with timed coding competitions",
    content: {
      whatToLearn: [
        "Contest strategies",
        "Fast implementation techniques",
        "Common CP algorithms and data structures",
        "Mathematical foundations",
        "Advanced optimization techniques",
        "Problem classification",
      ],
      resources: [
        "Competitive Programming 4 by Steven Halim",
        "USACO Guide",
        "Algorithms Live! (YouTube)",
        "Errichto's YouTube channel",
        "Codeforces educational articles",
      ],
      toolsToUse: [
        "Codeforces",
        "AtCoder",
        "CodeChef",
        "ICPC archives",
        "Competitive programming template",
        "Custom judge systems",
      ],
      practiceIdeas: [
        "Participate in weekly contests",
        "Virtual contest practice",
        "Solve past ICPC problems",
        "Create a personal code library",
      ],
    },
  },
  {
    id: 9,
    title: "Interview Preparation",
    description: "Get ready for technical interviews and assessments",
    content: {
      whatToLearn: [
        "Communication during problem-solving",
        "Test case formulation",
        "Edge case handling",
        "Solution optimization",
        "Mock interview strategies",
        "Behavioral question preparation",
      ],
      resources: [
        "Cracking the Coding Interview",
        "Tech Interview Handbook",
        "Leetcode Premium",
        "Pramp (mock interviews)",
        "AlgoExpert.io",
      ],
      toolsToUse: [
        "LeetCode",
        "HackerRank Interview Preparation Kit",
        "InterviewBit",
        "Pramp",
        "Interview preparation calendars",
      ],
      practiceIdeas: [
        "Solve company-specific questions",
        "Weekly mock interviews",
        "Practice talking while coding",
        "Time-boxed problem solving",
      ],
    },
  },
  {
    id: 10,
    title: "Continuous Learning",
    description: "Stay updated with new algorithms and techniques",
    content: {
      whatToLearn: [
        "Research papers on algorithms",
        "New data structures",
        "Language-specific optimizations",
        "Industry applications of DSA",
        "Performance engineering",
        "Domain-specific algorithms",
      ],
      resources: [
        "ArXiv CS papers",
        "CLRS 4th edition updates",
        "Algorithm conference proceedings",
        "Journal of Algorithms",
        "Specialized books in ML/AI algorithms",
      ],
      toolsToUse: [
        "GitHub trending repositories",
        "Research paper databases",
        "Tech blogs (Medium, Dev.to)",
        "DSA newsletters",
        "Algorithm visualization tools",
      ],
      practiceIdeas: [
        "Implement algorithms from research papers",
        "Contribute to open-source DSA libraries",
        "Create visualizations for complex algorithms",
        "Write blog posts explaining algorithms",
      ],
    },
  },
];

export default function DSARoadmap() {
  const [openSection, setOpenSection] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  // Toggle section open/close
  const toggleSection = (id) => {
    setOpenSection(openSection === id ? null : id);
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "dark bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <Head>
        <title>DSA Mastery Roadmap</title>
        <meta
          name="description"
          content="Complete roadmap for mastering Data Structures and Algorithms"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Sticky Navigation Bar */}
      <nav
        className={`sticky top-0 z-10 ${
          darkMode ? "bg-gray-800" : "bg-white"
        } shadow-md px-4 py-4 flex justify-between items-center transition-colors duration-300`}
      >
        <h1 className="text-xl md:text-2xl font-bold">
          DSA Mastery Roadmap 🧠
        </h1>
        <button
          onClick={toggleDarkMode}
          className={`p-2 rounded-full ${
            darkMode
              ? "bg-gray-700 text-yellow-300"
              : "bg-gray-200 text-gray-700"
          }`}
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          )}
        </button>
      </nav>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Introduction */}
        <section
          className={`mb-8 p-6 rounded-lg ${
            darkMode ? "bg-gray-800" : "bg-white"
          } shadow-md transition-colors duration-300`}
        >
          <h2 className="text-xl md:text-2xl font-semibold mb-3">
            Your Path to DSA Mastery
          </h2>
          <p className="text-sm md:text-base leading-relaxed">
            This comprehensive roadmap will guide you through learning Data
            Structures and Algorithms efficiently. From programming fundamentals
            to advanced algorithm techniques, interview preparation, and
            competitive programming, this guide covers everything you need for
            technical interviews and problem-solving excellence. Click on any
            section to explore its contents in detail.
          </p>
        </section>

        {/* Roadmap Sections */}
        <div className="space-y-4">
          {roadmapData.map((section) => (
            <div
              key={section.id}
              className={`rounded-lg shadow-md overflow-hidden transition-all duration-300 ${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-750"
                  : "bg-white hover:bg-gray-50"
              }`}
            >
              {/* Section Header */}
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full px-6 py-4 flex items-center justify-between focus:outline-none"
                aria-expanded={openSection === section.id}
              >
                <div className="flex items-center">
                  <span
                    className={`flex items-center justify-center w-8 h-8 rounded-full mr-3 ${
                      darkMode ? "bg-blue-600" : "bg-blue-500"
                    } text-white font-medium`}
                  >
                    {section.id}
                  </span>
                  <div className="text-left">
                    <h3 className="font-semibold text-lg">{section.title}</h3>
                    <p
                      className={`text-sm ${
                        darkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {section.description}
                    </p>
                  </div>
                </div>
                <svg
                  className={`w-5 h-5 transform transition-transform duration-300 ${
                    openSection === section.id ? "rotate-180" : "rotate-0"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {/* Section Content */}
              {openSection === section.id && (
                <div
                  className={`px-6 pb-6 pt-2 border-t ${
                    darkMode ? "border-gray-700" : "border-gray-200"
                  } animate-fadeIn`}
                >
                  {/* What to Learn */}
                  <div className="mb-6">
                    <h4 className="flex items-center text-lg font-medium mb-3">
                      <span className="mr-2">📚</span>What to Learn
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {section.content.whatToLearn.map((item, index) => (
                        <li
                          key={index}
                          className={`flex items-center ${
                            darkMode ? "text-gray-300" : "text-gray-700"
                          }`}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Resources */}
                  <div className="mb-6">
                    <h4 className="flex items-center text-lg font-medium mb-3">
                      <span className="mr-2">🔍</span>Resources
                    </h4>
                    <ul className="space-y-1">
                      {section.content.resources.map((resource, index) => (
                        <li
                          key={index}
                          className={`flex items-start ${
                            darkMode ? "text-gray-300" : "text-gray-700"
                          }`}
                        >
                          <span className="min-w-4 text-blue-500 mr-2">•</span>
                          {resource}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tools to Use */}
                  <div className="mb-6">
                    <h4 className="flex items-center text-lg font-medium mb-3">
                      <span className="mr-2">🧰</span>Tools to Use
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {section.content.toolsToUse.map((tool, index) => (
                        <span
                          key={index}
                          className={`px-3 py-1 rounded-full text-sm ${
                            darkMode
                              ? "bg-gray-700 text-gray-200"
                              : "bg-gray-200 text-gray-800"
                          }`}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Practice Ideas */}
                  <div>
                    <h4 className="flex items-center text-lg font-medium mb-3">
                      <span className="mr-2">💡</span>Practice Ideas
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {section.content.practiceIdeas.map((project, index) => (
                        <div
                          key={index}
                          className={`p-3 rounded-md ${
                            darkMode
                              ? "bg-gray-700 text-gray-200"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {project}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer
        className={`mt-12 py-8 px-4 ${
          darkMode ? "bg-gray-800 text-gray-300" : "bg-gray-100 text-gray-700"
        }`}
      >
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">
                DSA Mastery Roadmap
              </h3>
              <p className="text-sm">
                Your comprehensive guide to mastering Data Structures and
                Algorithms
              </p>
            </div>
            <div className="flex flex-col items-center md:items-end">
              <div className="flex space-x-4 mb-2">
                <a href="#" className="hover:text-blue-500 transition-colors">
                  Twitter
                </a>
                <a href="#" className="hover:text-blue-500 transition-colors">
                  GitHub
                </a>
                <a href="#" className="hover:text-blue-500 transition-colors">
                  LinkedIn
                </a>
              </div>
              <p className="text-xs">
                © 2025 DSA Mastery Roadmap. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
