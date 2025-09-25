export const phases = [
  {
    id: 0,
    title: "Pre-Requisites",
    subtitle: "Foundation Level",
    description: "Build strong foundation in programming and basic math concepts",
    color: "bg-gray-500",
    sections: [
      {
        title: "Programming Fundamentals",
        items: [
          "Variables, data types, loops, conditionals",
          "Functions and recursion basics",
          "Input/output operations",
          "Choose one language: C++, Java, or Python"
        ]
      },
      {
        title: "Mathematical Foundations",
        items: [
          "Time complexity basics (Big O notation)",
          "Logarithms, factorials, permutations, combinations",
          "Modular arithmetic fundamentals",
          "Basic bit manipulation operations"
        ]
      },
      {
        title: "Resources",
        items: [
          "GeeksforGeeks - C++ Basics",
          "Python Official Documentation",
          "Mathematics for CP (Codeforces Wiki)"
        ]
      }
    ]
  },
  {
    id: 1,
    title: "Beginner DSA",
    subtitle: "Beginner Level",
    description: "Understanding basic data structures and algorithms with small problems",
    color: "bg-green-500",
    sections: [
      {
        title: "Core Data Structures",
        items: [
          "Arrays & Strings: traversal, insertion, deletion",
          "Two-pointer techniques and sliding window",
          "Linked Lists: singly, doubly, circular operations",
          "Stacks & Queues: basic operations and applications"
        ]
      },
      {
        title: "Basic Algorithms",
        items: [
          "Recursion: factorial, Fibonacci sequences",
          "Simple backtracking problems",
          "Basic tree traversal methods",
          "Complexity analysis: O(1), O(n), O(n²)"
        ]
      },
      {
        title: "Practice Projects",
        items: [
          "Reverse a string/array implementation",
          "Build stack & queue from scratch",
          "Simple calculator using stack",
          "Basic linked list operations"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Intermediate DSA",
    subtitle: "Intermediate Level",
    description: "Handle medium difficulty problems with advanced data structures",
    color: "bg-blue-500",
    sections: [
      {
        title: "Advanced Data Structures",
        items: [
          "Hashing & Maps: hash tables, frequency counting",
          "Binary Trees: traversals (inorder, preorder, postorder)",
          "Tree properties: height, size, diameter, LCA",
          "Heaps & Priority Queues: MinHeap, MaxHeap operations"
        ]
      },
      {
        title: "Core Algorithms",
        items: [
          "Binary Search: sorted arrays, rotated arrays",
          "Binary search on answer technique",
          "Sorting Algorithms: Merge Sort, Quick Sort, Heap Sort",
          "Advanced Recursion & Backtracking: subsets, permutations"
        ]
      },
      {
        title: "Practice Projects",
        items: [
          "Task scheduler using priority queue",
          "Median of data stream using heaps",
          "Sudoku solver with backtracking",
          "Element frequency counter with hashing"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Advanced DSA",
    subtitle: "Advanced Level",
    description: "Master hard problems and prepare for competitive programming",
    color: "bg-purple-500",
    sections: [
      {
        title: "Graph Algorithms",
        items: [
          "Graph representation: adjacency list/matrix",
          "BFS, DFS traversal algorithms",
          "Shortest paths: Dijkstra, Bellman-Ford, Floyd-Warshall",
          "Minimum Spanning Tree: Kruskal, Prim algorithms"
        ]
      },
      {
        title: "Advanced Trees & DP",
        items: [
          "Segment Tree, Fenwick Tree (Binary Indexed Tree)",
          "Trie, Suffix Trie implementations",
          "Dynamic Programming: 1D & 2D, Knapsack variations",
          "DP on trees and advanced DP techniques"
        ]
      },
      {
        title: "String & Greedy Algorithms",
        items: [
          "String matching: KMP, Rabin-Karp algorithms",
          "Greedy algorithms: interval scheduling, activity selection",
          "Advanced graph: topological sorting, strongly connected components",
          "Pattern matching with Trie-based searches"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Industry & Competitive Mastery",
    subtitle: "Expert Level",
    description: "Focus on optimization, real-world problems, and competitive programming",
    color: "bg-yellow-500",
    sections: [
      {
        title: "Advanced Algorithms",
        items: [
          "Network flow: Ford-Fulkerson, Edmonds-Karp",
          "Advanced DP: Bitmask DP, DP on trees and DAGs",
          "Mathematical algorithms: number theory, combinatorics",
          "Fast Fourier Transform (FFT) for advanced problems"
        ]
      },
      {
        title: "Optimization & Parallel Processing",
        items: [
          "Convex hull trick and optimization techniques",
          "Multi-threaded problem solving approaches",
          "Divide & conquer optimization strategies",
          "Graph coloring and bipartite matching"
        ]
      },
      {
        title: "Interview Preparation",
        items: [
          "System design basics with DSA applications",
          "FAANG-level coding interview challenges",
          "Real-world problem solving techniques",
          "Competitive programming contest strategies"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Mastery & Real Applications",
    subtitle: "Industry-Ready Level",
    description: "Apply DSA in real software development and system design",
    color: "bg-red-500",
    sections: [
      {
        title: "Backend & Systems Applications",
        items: [
          "Efficient database queries using B-trees and hashing",
          "Caching algorithms implementation (LRU cache)",
          "Load balancing with priority queues and graphs",
          "Database indexing and query optimization"
        ]
      },
      {
        title: "AI & Web Applications",
        items: [
          "Pathfinding algorithms for AI systems",
          "Data preprocessing with heaps and hash maps",
          "Autocomplete and search optimization techniques",
          "Recommendation systems using graph algorithms"
        ]
      },
      {
        title: "Open Source Contributions",
        items: [
          "Contribute to competitive programming libraries",
          "Open-source algorithm implementations",
          "Build and maintain DSA educational resources",
          "Create performance benchmarking tools"
        ]
      }
    ]
  }
];

export const successTips = [
  "Start small, gradually increase difficulty",
  "Write code by hand to improve memory",
  "Participate in contests regularly",
  "Time yourself - crucial for interviews",
  "Maintain a DSA problem journal",
  "Solve 1-2 problems daily consistently"
];

export const practicePlatforms = [
  {
    name: "LeetCode",
    description: "Interview Prep",
    color: "text-yellow-800"
  },
  {
    name: "Codeforces",
    description: "Competitive",
    color: "text-yellow-800"
  },
  {
    name: "HackerRank",
    description: "Skills Practice",
    color: "text-yellow-800"
  },
  {
    name: "CSES",
    description: "Problem Set",
    color: "text-yellow-800"
  }
];