// components/Docs.jsx
import React from "react";
import { ExternalLink } from "lucide-react";

const docsList = [
  {
    title: "GeeksforGeeks DSA Tutorial",
    description:
      "A comprehensive guide covering a wide range of data structures and algorithms, including implementation and applications.",
    url: "https://www.geeksforgeeks.org/dsa/dsa-tutorial-learn-data-structures-and-algorithms/",
    citation: "GeeksforGeeks",
  },
  {
    title: "W3Schools DSA Tutorial",
    description:
      "Beginner-friendly tutorial introducing fundamental DSA concepts with interactive examples and quizzes.",
    url: "https://www.w3schools.com/dsa/",
    citation: "W3Schools",
  },
  {
    title: "Python Official Documentation - Data Structures",
    description:
      "Official Python documentation providing insights into built-in data structures like lists, tuples, dictionaries, and sets.",
    url: "https://docs.python.org/3/tutorial/datastructures.html",
    citation: "Python Docs",
  },
  {
    title: "The Algorithms - Open Source Repository",
    description:
      "An open-source collection of algorithms and data structures implemented in various programming languages.",
    url: "https://the-algorithms.com/",
    citation: "The Algorithms",
  },
  {
    title: "LeetCode Explore",
    description:
      "Structured learning paths for DSA topics, curated problems, and solutions for interview and practice.",
    url: "https://leetcode.com/explore/",
    citation: "LeetCode",
  },
  {
    title: "Codeforces Problem Set",
    description:
      "Competitive programming platform with problems categorized by difficulty, regular contests, and user solutions.",
    url: "https://codeforces.com/problemset",
    citation: "Codeforces",
  },
  {
    title: "HackerRank Data Structures",
    description:
      "Interactive platform offering challenges and tutorials on various data structures with leaderboards and discussions.",
    url: "https://www.hackerrank.com/domains/tutorials/10-days-of-javascript",
    citation: "HackerRank",
  },
  {
    title: "GitHub - Data Structures and Algorithms by Pranay Gupta",
    description:
      "Repository containing implementations of various data structures and algorithms in multiple programming languages.",
    url: "https://github.com/thepranaygupta/Data-Structures-and-Algorithms",
    citation: "GitHub",
  },
  {
    title: "OpenDSA",
    description:
      "Open-source platform providing interactive textbooks and exercises on data structures and algorithms.",
    url: "https://opendsa-server.cs.vt.edu/",
    citation: "OpenDSA",
  },
];

export default function Docs() {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          📚 DSA Documentation
        </h1>
        <p className="text-gray-600 mb-10">
          Official and popular documentation sites every DSA learner should
          explore — from beginner tutorials to open-source repositories and
          interactive platforms.
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
                  aria-hidden="true"
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
