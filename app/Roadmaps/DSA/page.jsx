"use client"
import React, { useState } from 'react';
import { ChevronDown, Download, FileText, FolderOpen, Map, Menu, X, Loader2 } from 'lucide-react';
import Docs from './docs';
import Projects from './projects';
import { downloadRoadmapPDF, PDFDownloadButton } from './downloadPdf';

const DSAMasteryRoadmap = () => {
  const [activeTab, setActiveTab] = useState('roadmap');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const phases = [
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

  // Handle PDF download with loading state
  const handlePDFDownload = async () => {
    setIsDownloading(true);
    try {
      const result = await downloadRoadmapPDF(phases);
      if (result.success) {
        console.log(`PDF downloaded successfully: ${result.filename}`);
      } else {
        console.error('PDF download failed:', result.error);
      }
    } catch (error) {
      console.error('PDF download error:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'documentation':
        return <Docs />;
      case 'projects':
        return <Projects />;
      default:
        return (
          <div className="relative">
            {/* Timeline */}
            <div className="flex flex-col space-y-8 md:space-y-12">
              {phases.map((phase, index) => (
                <div key={phase.id} className="relative">
                  {/* Connection Line */}
                  {index < phases.length - 1 && (
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-full h-8 md:h-12 w-0.5 md:w-1 bg-gray-300 z-10"></div>
                  )}

                  {/* Phase Card */}
                  <div className="flex flex-col items-center">
                    {/* Phase Header */}
                    <div className="text-center mb-4 md:mb-6 px-4">
                      <div className={`inline-block ${phase.color} text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold text-base md:text-lg mb-2`}>
                        Level {phase.id}: {phase.title}
                      </div>
                      <p className="text-gray-600 text-xs md:text-sm">{phase.subtitle}</p>
                      <p className="text-gray-800 font-medium mt-1 text-sm md:text-base">{phase.description}</p>
                    </div>

                    {/* Phase Content */}
                    <div className="w-full max-w-5xl px-4">
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
                        {phase.sections.map((section, sectionIndex) => (
                          <div
                            key={sectionIndex}
                            className="bg-white rounded-lg border-2 border-blue-200 p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow"
                          >
                            <h3 className="text-blue-600 font-semibold text-base md:text-lg mb-3 md:mb-4">
                              {section.title}
                            </h3>
                            <ol className="space-y-2">
                              {section.items.map((item, itemIndex) => (
                                <li key={itemIndex} className="text-gray-700 text-xs md:text-sm leading-relaxed">
                                  <span className="font-medium text-gray-900">{itemIndex + 1}.</span> {item}
                                </li>
                              ))}
                            </ol>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Step Indicators */}
                    {index < phases.length - 1 && (
                      <div className="mt-6 md:mt-8 flex items-center space-x-2 md:space-x-4">
                        <div className="text-gray-500 font-medium text-xs md:text-sm transform -rotate-12">
                          Level {phase.id}
                        </div>
                        <ChevronDown className="text-gray-400" size={20} />
                        <div className="text-gray-500 font-medium text-xs md:text-sm transform rotate-12">
                          Level {phase.id + 1}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Final Message */}
            <div className="text-center mt-8 md:mt-12 mx-4 p-6 md:p-8 bg-gradient-to-r from-green-50 to-purple-50 rounded-lg border border-green-200">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                🎉 Congratulations! You've Mastered DSA!
              </h2>
              <p className="text-gray-700 text-base md:text-lg">
                You've completed the DSA Mastery Roadmap and are now ready for competitive programming and technical interviews at top companies.
              </p>
            </div>

            {/* Success Tips Section */}
            <div className="mt-8 md:mt-12 mx-4 p-6 md:p-8 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-4">🚀 Tips for Success</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="text-blue-800 text-sm md:text-base">• Start small, gradually increase difficulty</p>
                  <p className="text-blue-800 text-sm md:text-base">• Write code by hand to improve memory</p>
                  <p className="text-blue-800 text-sm md:text-base">• Participate in contests regularly</p>
                </div>
                <div className="space-y-2">
                  <p className="text-blue-800 text-sm md:text-base">• Time yourself - crucial for interviews</p>
                  <p className="text-blue-800 text-sm md:text-base">• Maintain a DSA problem journal</p>
                  <p className="text-blue-800 text-sm md:text-base">• Solve 1-2 problems daily consistently</p>
                </div>
              </div>
            </div>

            {/* Practice Platforms */}
            <div className="mt-8 md:mt-12 mx-4 p-6 md:p-8 bg-yellow-50 rounded-lg border border-yellow-200">
              <h3 className="text-lg md:text-xl font-bold text-yellow-900 mb-4">🏆 Recommended Practice Platforms</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                  <p className="font-semibold text-yellow-800">LeetCode</p>
                  <p className="text-xs text-gray-600">Interview Prep</p>
                </div>
                <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                  <p className="font-semibold text-yellow-800">Codeforces</p>
                  <p className="text-xs text-gray-600">Competitive</p>
                </div>
                <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                  <p className="font-semibold text-yellow-800">HackerRank</p>
                  <p className="text-xs text-gray-600">Skills Practice</p>
                </div>
                <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                  <p className="font-semibold text-yellow-800">CSES</p>
                  <p className="text-xs text-gray-600">Problem Set</p>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <div className="flex items-center space-x-2 md:space-x-4">
            <h1 className="text-xl md:text-3xl font-bold text-gray-900">
              DSA <span className="text-purple-600">Mastery Roadmap</span> <span className="text-gray-500 text-lg md:text-xl">(2025)</span>
            </h1>
          </div>

          {/* Desktop Download Button */}
          <button 
            onClick={handlePDFDownload}
            disabled={isDownloading}
            className="hidden md:flex bg-red-500 hover:bg-red-600 disabled:bg-red-400 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg items-center space-x-2 transition-colors"
          >
            {isDownloading ? (
              <Loader2 size={18} className="animate-spin" />
            ) : (
              <Download size={18} />
            )}
            <span>{isDownloading ? 'Generating PDF...' : 'Download PDF'}</span>
          </button>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden bg-purple-500 hover:bg-purple-600 text-white p-2 rounded-lg transition-colors"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Download Button */}
        <div className="md:hidden mb-4">
          <button 
            onClick={handlePDFDownload}
            disabled={isDownloading}
            className="w-full bg-red-500 hover:bg-red-600 disabled:bg-red-400 disabled:cursor-not-allowed text-white px-4 py-3 rounded-lg flex items-center justify-center space-x-2 transition-colors"
          >
            {isDownloading ? (
              <Loader2 size={18} className="animate-spin" />
            ) : (
              <Download size={18} />
            )}
            <span>{isDownloading ? 'Generating PDF...' : 'Download PDF'}</span>
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:block mb-6 md:mb-8`}>
          <div className="flex flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-1 bg-white p-1 rounded-lg shadow-sm w-full md:w-fit">
            <button
              onClick={() => {
                setActiveTab('roadmap');
                setMobileMenuOpen(false);
              }}
              className={`px-4 md:px-6 py-3 md:py-2 rounded-md font-medium transition-colors flex items-center justify-center md:justify-start ${
                activeTab === 'roadmap'
                  ? 'bg-purple-500 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Map size={18} className="mr-2" />
              Roadmap
            </button>
            <button
              onClick={() => {
                setActiveTab('documentation');
                setMobileMenuOpen(false);
              }}
              className={`px-4 md:px-6 py-3 md:py-2 rounded-md font-medium transition-colors flex items-center justify-center md:justify-start ${
                activeTab === 'documentation'
                  ? 'bg-purple-500 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <FileText size={18} className="mr-2" />
              Documentation
            </button>
            <button
              onClick={() => {
                setActiveTab('projects');
                setMobileMenuOpen(false);
              }}
              className={`px-4 md:px-6 py-3 md:py-2 rounded-md font-medium transition-colors flex items-center justify-center md:justify-start ${
                activeTab === 'projects'
                  ? 'bg-purple-500 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <FolderOpen size={18} className="mr-2" />
              Projects
            </button>
          </div>
        </div>

        {/* Content */}
        {renderContent()}
      </div>
    </div>
  );
};

export default DSAMasteryRoadmap;