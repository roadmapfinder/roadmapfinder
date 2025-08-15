import React from 'react';

export default function DSARoadmap() {
  const roadmap = [
    {
      title: "Foundation",
      subtitle: "Programming & Core Concepts",
      steps: [
        { 
          step: "Step - 1", 
          topic: "Programming Language Mastery", 
          category: "Language Fundamentals",
          details: "Master one language: C++ (best for CP with STL), Java (enterprise-stable), or Python (beginner-friendly). Focus on variables, loops, functions, recursion, OOP basics"
        },
        { 
          step: "Step - 2", 
          topic: "Memory Management & Pointers", 
          category: "System Understanding",
          details: "Understand stack vs heap memory, pointers/references, memory allocation/deallocation, garbage collection concepts, and how data structures use memory"
        },
        { 
          step: "Step - 3", 
          topic: "Big-O Analysis", 
          category: "Complexity Analysis",
          details: "Master time complexity: O(1), O(log n), O(n), O(n log n), O(n²), O(2ⁿ). Understand space complexity, best/worst/average cases, and amortized analysis"
        },
      ],
    },
    {
      title: "Data Structures",
      subtitle: "Core Building Blocks",
      steps: [
        { 
          step: "Step - 4", 
          topic: "Arrays & Strings", 
          category: "Linear Structures",
          details: "Array operations, two pointers, sliding window, prefix sums. String manipulation, pattern matching (KMP, Rabin-Karp), palindromes, anagrams, Trie implementation"
        },
        { 
          step: "Step - 5", 
          topic: "Linked Lists", 
          category: "Dynamic Structures",
          details: "Singly, doubly, circular linked lists. Operations: insertion, deletion, reversal, merge. Floyd's cycle detection, finding middle node, intersection problems"
        },
        { 
          step: "Step - 6", 
          topic: "Stacks & Queues", 
          category: "LIFO & FIFO Structures",
          details: "Stack: balanced parentheses, infix to postfix, monotonic stack. Queue: BFS implementation, circular queue, deque, priority queue with heaps"
        },
        { 
          step: "Step - 7", 
          topic: "Hashing & Hash Tables", 
          category: "Key-Value Mapping",
          details: "Hash functions, collision handling (chaining, open addressing), frequency counting, anagram grouping, subarray sum problems, two-sum variations"
        },
      ],
    },
    {
      title: "Advanced Structures",
      subtitle: "Trees, Graphs & Complex Data",
      steps: [
        { 
          step: "Step - 8", 
          topic: "Binary Trees & BST", 
          category: "Tree Structures",
          details: "Binary tree traversals (pre/in/post/level order), BST operations, tree validation, LCA problems, balanced trees (AVL, Red-Black), tree diameter"
        },
        { 
          step: "Step - 9", 
          topic: "Heaps & Priority Queues", 
          category: "Heap Structures",
          details: "Min/Max heap implementation, heapify operations, top K problems, merge K sorted lists, median from data stream, heap sort algorithm"
        },
        { 
          step: "Step - 10", 
          topic: "Graphs & Graph Algorithms", 
          category: "Graph Theory",
          details: "Graph representations, BFS/DFS traversals, shortest paths (Dijkstra, Bellman-Ford), MST (Kruskal, Prim), topological sort, Union-Find"
        },
        { 
          step: "Step - 11", 
          topic: "Advanced Trees", 
          category: "Specialized Trees",
          details: "Segment Tree for range queries, Fenwick Tree (BIT) for updates, Suffix Tree/Array for string problems, Trie for prefix matching"
        },
      ],
    },
    {
      title: "Algorithms",
      subtitle: "Problem-Solving Paradigms",
      steps: [
        { 
          step: "Step - 12", 
          topic: "Recursion & Backtracking", 
          category: "Recursive Solutions",
          details: "N-Queens, Sudoku solver, generating subsets/permutations/combinations, maze solving, word search, constraint satisfaction problems"
        },
        { 
          step: "Step - 13", 
          topic: "Divide & Conquer", 
          category: "Problem Decomposition",
          details: "Merge sort, quick sort, binary search variations, closest pair of points, maximum subarray (Kadane's), fast exponentiation, matrix multiplication"
        },
        { 
          step: "Step - 14", 
          topic: "Dynamic Programming", 
          category: "Optimization Problems",
          details: "1D DP: Fibonacci, coin change, house robber. 2D DP: knapsack, LCS, edit distance. Advanced: bitmask DP, digit DP, tree DP"
        },
        { 
          step: "Step - 15", 
          topic: "Greedy & Advanced Algorithms", 
          category: "Optimization & Patterns",
          details: "Greedy algorithms: interval scheduling, Huffman coding. String algorithms: Z-algorithm, Manacher's. Bit manipulation, sliding window, two pointers"
        },
      ],
    },
  ];

  const certificationSuggestions = [
    { level: "Beginner", certs: "LeetCode 75, NeetCode 150, GeeksforGeeks DSA Course" },
    { level: "Intermediate", certs: "LeetCode Medium Problems, Codeforces Div. 3, InterviewBit" },
    { level: "Advanced", certs: "Codeforces Div. 1-2, AtCoder, ICPC Regional Problems" },
    { level: "Expert", certs: "IOI Problems, Google Code Jam, Meta Hacker Cup, TopCoder SRMs" },
  ];

  const practiceResources = [
    { category: "Online Judges", resources: "LeetCode, Codeforces, AtCoder, HackerRank, CodeChef" },
    { category: "Learning Platforms", resources: "GeeksforGeeks, InterviewBit, CodeStudio, AlgoExpert" },
    { category: "Books", resources: "CLRS, Competitive Programming 4, Elements of Programming" },
    { category: "Communities", resources: "Codeforces Blogs, Reddit r/algorithms, Discord CP servers" },
  ];

  const getSectionColor = (idx) => {
    const colors = [
      'bg-gradient-to-r from-blue-500 to-blue-600',
      'bg-gradient-to-r from-green-500 to-green-600',
      'bg-gradient-to-r from-orange-500 to-orange-600',
      'bg-gradient-to-r from-purple-500 to-purple-600'
    ];
    return colors[idx] || colors[0];
  };

  return (
    <main className="bg-gradient-to-br from-[#ffffff] via-white to-[#f3f3f3] min-h-screen p-4 sm:p-6 font-inter">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="mb-4">
        
          </div>
          <div className="mb-10 flex justify-center">
            <div className="bg-white rounded-full px-6 py-3 shadow-lg border border-gray-200">
              <span className="text-sm font-medium text-gray-700">🧠 15 Essential Steps • 🎯 4 Core Areas • 🚀 Interview Ready</span>
            </div>
          </div>
        </div>

        {/* Roadmap Sections */}
        <div className="space-y-12 sm:space-y-16">
          {roadmap.map((section, sectionIdx) => (
            <section key={sectionIdx} className="relative">
              {/* Desktop Layout */}
              <div className="hidden lg:block">
                <div className="flex items-start space-x-8 max-w-6xl mx-auto">
                  {/* Section Title */}
                  <div className="flex-shrink-0">
                    <div className={`px-6 py-4 rounded-lg text-lg font-semibold min-w-[150px] text-center text-white shadow-md ${getSectionColor(sectionIdx)}`}>
                      <div className="font-bold">{section.title}</div>
                      <div className="text-sm font-normal opacity-90 mt-1">{section.subtitle}</div>
                    </div>
                  </div>

                  {/* Steps */}
                  <div className="flex flex-col space-y-6 flex-grow">
                    {section.steps.map((item, stepIdx) => (
                      <div key={stepIdx} className="group">
                        <div className="flex items-center space-x-6">
                          {/* Step Number */}
                          <div className="w-20 text-right text-sm font-medium text-gray-500">
                            {item.step}
                          </div>

                          {/* Arrow */}
                          <svg
                            className="w-16 h-6 transition-all duration-300 group-hover:scale-110 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 100 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <defs>
                              <linearGradient id={`gradient-${sectionIdx}-${stepIdx}`} x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#3B82F6" />
                                <stop offset="100%" stopColor="#8B5CF6" />
                              </linearGradient>
                            </defs>
                            <line x1="0" y1="12" x2="70" y2="12" stroke={`url(#gradient-${sectionIdx}-${stepIdx})`} />
                            <polyline points="60,6 70,12 60,18" stroke={`url(#gradient-${sectionIdx}-${stepIdx})`} />
                          </svg>

                          {/* Topic Box */}
                          <div className="bg-white rounded-lg px-6 py-4 flex-grow max-w-sm shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                            <div className="text-base font-semibold text-gray-800 mb-1">
                              {item.topic}
                            </div>
                            <div className="text-xs text-gray-500 mb-2">
                              {item.category}
                            </div>
                            <div className="text-xs text-gray-600 leading-relaxed">
                              {item.details}
                            </div>
                          </div>

                          {/* Connecting line */}
                          <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent min-w-[20px]"></div>

                          {/* Progress Indicator */}
                          <div className="w-8 h-8 rounded-full border-2 border-gray-300 bg-white flex items-center justify-center group-hover:border-blue-500 transition-colors duration-300 flex-shrink-0">
                            <div className="w-3 h-3 rounded-full bg-gray-300 group-hover:bg-blue-500 transition-colors duration-300"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile & Tablet Layout */}
              <div className="lg:hidden">
                {/* Section Header */}
                <div className="flex items-center mb-6">
                  <div className={`px-4 py-3 rounded-lg text-base sm:text-lg font-semibold text-white shadow-md ${getSectionColor(sectionIdx)} flex-shrink-0`}>
                    <div className="font-bold">{section.title}</div>
                    <div className="text-xs sm:text-sm font-normal opacity-90">{section.subtitle}</div>
                  </div>
                  <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent ml-4"></div>
                </div>

                {/* Steps Grid */}
                <div className="space-y-4 sm:space-y-6 ml-4 border-l-2 border-dashed border-gray-300 pl-6 sm:pl-8">
                  {section.steps.map((item, stepIdx) => (
                    <div key={stepIdx} className="relative group">
                      {/* Connection Point */}
                      <div className="absolute -left-8 sm:-left-10 top-4 w-4 h-4 rounded-full bg-white border-2 border-gray-300 group-hover:border-blue-500 transition-colors duration-300">
                        <div className="w-2 h-2 rounded-full bg-gray-300 group-hover:bg-blue-500 transition-colors duration-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                      </div>

                      {/* Step Card */}
                      <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 group-hover:scale-[1.02]">
                        <div className="flex items-start justify-between mb-3">
                          <div className="text-xs sm:text-sm font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                            {item.step}
                          </div>
                          <div className="text-xs text-gray-500 bg-blue-50 px-2 py-1 rounded">
                            {item.category}
                          </div>
                        </div>

                        <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">
                          {item.topic}
                        </h3>

                        <p className="text-sm text-gray-600 leading-relaxed">
                          {item.details}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Practice Levels Section */}
        <section className="mt-16 sm:mt-20 bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-gray-800">
            🎯 DSA Practice Levels
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {certificationSuggestions.map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 sm:p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                <div className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">{item.level}</div>
                <div className="text-xs sm:text-sm text-gray-600">{item.certs}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Practice Resources Section */}
        <section className="mt-12 bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-gray-800">
            📚 DSA Learning Resources
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {practiceResources.map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 sm:p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                <div className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">{item.category}</div>
                <div className="text-xs sm:text-sm text-gray-600">{item.resources}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Programming Languages Section */}
        <section className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 sm:p-8 text-white">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">💻 Best Languages for DSA</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">🔵 C++</div>
              <div className="text-blue-100">Best for CP, STL library, fast execution, memory control</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">☕ Java</div>
              <div className="text-blue-100">Enterprise stable, rich collections, object-oriented</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-semibold mb-2">🐍 Python</div>
              <div className="text-blue-100">Beginner friendly, readable syntax, extensive libraries</div>
            </div>
          </div>
        </section>

        {/* Career Applications Section */}
        <section className="mt-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 sm:p-8 border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">🚀 DSA in Industry</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="font-semibold text-blue-600 mb-2">🔍 Search Engines</div>
              <div className="text-sm text-gray-600">Tries for autocomplete, inverted indexes, ranking algorithms, graph traversal</div>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="font-semibold text-green-600 mb-2">🌐 Social Networks</div>
              <div className="text-sm text-gray-600">Graph algorithms for connections, shortest paths, recommendation systems</div>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="font-semibold text-purple-600 mb-2">💰 Financial Systems</div>
              <div className="text-sm text-gray-600">Priority queues for trading, hash tables for transactions, dynamic programming</div>
            </div>
          </div>
        </section>

        {/* Problem Solving Patterns Section */}
        <section className="mt-12 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-6 sm:p-8 border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">🎨 Essential Problem Patterns</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="font-semibold text-orange-600 mb-2">🪟 Sliding Window</div>
              <div className="text-sm text-gray-600">Maximum sum subarray, longest substring, minimum window substring</div>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="font-semibold text-blue-600 mb-2">👥 Two Pointers</div>
              <div className="text-sm text-gray-600">Two sum, three sum, palindrome check, container with most water</div>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="font-semibold text-green-600 mb-2">🔍 Binary Search</div>
              <div className="text-sm text-gray-600">Search in rotated array, find peak element, search for range</div>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="font-semibold text-purple-600 mb-2">🌳 Tree Traversal</div>
              <div className="text-sm text-gray-600">DFS/BFS, level order, path sum problems, tree validation</div>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="font-semibold text-red-600 mb-2">↩️ Backtracking</div>
              <div className="text-sm text-gray-600">N-Queens, Sudoku, permutations, combinations, word search</div>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="font-semibold text-indigo-600 mb-2">💡 Dynamic Programming</div>
              <div className="text-sm text-gray-600">Knapsack, coin change, longest common subsequence, edit distance</div>
            </div>
          </div>
        </section>

        {/* Portfolio Projects Section */}
        <section className="mt-12 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-6 sm:p-8 border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">🛠️ DSA Portfolio Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="font-semibold text-blue-600 mb-2">📊 Algorithm Visualizer</div>
              <div className="text-sm text-gray-600">Interactive sorting algorithms, pathfinding (A*, Dijkstra), tree traversals with step-by-step animation</div>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="font-semibold text-green-600 mb-2">🔍 Search Engine</div>
              <div className="text-sm text-gray-600">Trie-based autocomplete, inverted index for document search, ranking algorithm implementation</div>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="font-semibold text-purple-600 mb-2">🏆 Online Judge System</div>
              <div className="text-sm text-gray-600">Code submission platform, test case execution, leaderboard using heaps and hash maps</div>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="font-semibold text-orange-600 mb-2">🎯 Interview Prep App</div>
              <div className="text-sm text-gray-600">Problem categorization, progress tracking, spaced repetition system for optimal learning</div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center mt-12 sm:mt-16 text-gray-600">
          <p className="text-sm sm:text-base px-4">
            🧠 Remember: DSA is the foundation of software engineering. Focus on understanding concepts deeply, practice consistently, and apply patterns to real-world problems. Consistency beats perfection!
          </p>
        </div>
      </div>
    </main>
  );
}