import React from "react";
import { ExternalLink } from "lucide-react";

const docsList = [
  {
    title: "ISO C++ Standard (Official C++ Specs)",
    description:
      "The authoritative reference for the C++ language and standard library.",
    url: "https://isocpp.org/std/the-standard",
    citation: "ISO C++",
  },
  {
    title: "C++ Reference (cppreference.com)",
    description:
      "Unofficial but the most widely used reference for language features, STL, and modern C++ standards.",
    url: "https://en.cppreference.com/w/",
    citation: "cppreference",
  },
  {
    title: "CPlusPlus.com",
    description:
      "Good for beginners, covers basic to intermediate concepts and STL documentation.",
    url: "https://www.cplusplus.com/",
    citation: "cplusplus.com",
  },
  {
    title: "LearnCpp.com",
    description:
      "Step-by-step tutorial covering beginner to advanced C++, including modern C++ standards.",
    url: "https://www.learncpp.com/",
    citation: "learncpp.com",
  },
  {
    title: "GeeksforGeeks C++ Section",
    description:
      "Excellent for learning concepts, problem-solving, and examples.",
    url: "https://www.geeksforgeeks.org/c-plus-plus/",
    citation: "GeeksforGeeks",
  },
  {
    title: "Microsoft C++ Docs (Visual Studio)",
    description:
      "Official Microsoft documentation for C++ with MSVC, including STL and Windows-specific features.",
    url: "https://learn.microsoft.com/en-us/cpp/cpp/?view=msvc-170",
    citation: "Microsoft Docs",
  },
  {
    title: "cppreference STL Section",
    description:
      "Comprehensive reference for all STL containers, algorithms, and iterators.",
    url: "https://en.cppreference.com/w/cpp/container",
    citation: "cppreference",
  },
  {
    title: "STL Tutorials on GeeksforGeeks",
    description: "Examples and explanations of STL usage.",
    url: "https://www.geeksforgeeks.org/cpp-stl-tutorial/",
    citation: "GeeksforGeeks",
  },
  {
    title: "Modern C++ (C++11/14/17/20) Guides",
    description:
      "Official FAQ for modern C++ features and practices.",
    url: "https://isocpp.org/wiki/faq",
    citation: "ISO C++",
  },
  {
    title: "Effective Modern C++ (Scott Meyers)",
    description:
      "Companion resources and examples for learning modern C++ best practices.",
    url: "https://github.com/PacktPublishing/Effective-Modern-C-",
    citation: "Scott Meyers",
  },
  {
    title: "C++ Core Guidelines",
    description:
      "Industry-standard rules for writing safe, modern, and maintainable C++ code.",
    url: "https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines",
    citation: "ISO C++",
  },
  {
    title: "GCC (GNU Compiler Collection)",
    description:
      "Comprehensive documentation for GCC, including compilation flags, libraries, and C++ support.",
    url: "https://gcc.gnu.org/onlinedocs/",
    citation: "GNU Project",
  },
  {
    title: "Clang / LLVM Documentation",
    description: "Official documentation for Clang and LLVM projects.",
    url: "https://clang.llvm.org/docs/index.html",
    citation: "LLVM Project",
  },
  {
    title: "Microsoft Visual C++ (MSVC) Documentation",
    description:
      "Official Microsoft documentation for C++ compilers, tools, and libraries.",
    url: "https://learn.microsoft.com/en-us/cpp/overview/visual-cpp-in-visual-studio",
    citation: "Microsoft Docs",
  },
  {
    title: "Stack Overflow – C++ Tag",
    description:
      "Community-driven Q&A site for C++ programming questions.",
    url: "https://stackoverflow.com/questions/tagged/c%2b%2b",
    citation: "Stack Overflow",
  },
  {
    title: "Reddit – r/cpp",
    description: "Active C++ community discussing best practices, news, and problems.",
    url: "https://www.reddit.com/r/cpp/",
    citation: "Reddit",
  },
  {
    title: "ISO C++ Forums",
    description:
      "Official C++ forums for discussions, questions, and proposals.",
    url: "https://isocpp.org/forums",
    citation: "ISO C++",
  },
  {
    title: "LeetCode C++ Section",
    description:
      "C++ practice problems for algorithm and data structure mastery.",
    url: "https://leetcode.com/problemset/all/?topicSlugs=cpp",
    citation: "LeetCode",
  },
  {
    title: "HackerRank C++ Challenges",
    description: "C++ practice problems and challenges for beginners and advanced learners.",
    url: "https://www.hackerrank.com/domains/cpp",
    citation: "HackerRank",
  },
  {
    title: "Codeforces (C++ Community)",
    description: "Competitive programming community and C++ problem-solving.",
    url: "https://codeforces.com/",
    citation: "Codeforces",
  },
];

export default function CDocs() {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          📘 C++ Documentation Resources
        </h1>
        <p className="text-gray-600 mb-10">
          Official, popular, and community resources every C++ learner should know —
          standards, tutorials, STL references, modern C++ guides, compilers, and practice platforms.
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
