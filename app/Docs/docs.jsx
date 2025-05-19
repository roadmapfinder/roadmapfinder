"use client";
import { useState, useEffect } from "react";
import Image from "next/legacy/image";
import {
  Search,
  Download,
  ExternalLink,
  Filter,
  X,
  Code,
  FileText,
  Smartphone,
  GitBranch,
  Database,
  Youtube,
  Bookmark,
  ChevronRight,
} from "lucide-react";

import  Link  from "next/link"

import cpp from "../Icons/cpp.png"
import java from "../Icons/java.png"
import py from "../Icons/py.png"
import native from "../Icons/native.png"
import react from "../Icons/react.png";
import express from "../Icons/express.png"
import flutter from "../Icons/flutter.png"
import js from "../Icons/js.png";
import next from "../Icons/next.png";
import git from "../Icons/git.png";
import github from "../Icons/github.png";
import sql from "../Icons/sql.png";
import mongo from "../Icons/mongo.png";
import kotlin from "../Icons/kotlin.png";
import leetcode from "../Icons/leetcode.png"
import geeks from "../Icons/geeks.png"
import chai from "../DocIcons/chai.png"
import harry from "../DocIcons/harry.png"
import tuf from "../DocIcons/tuf.png"
import w3 from "../DocIcons/w3.png"
// Define a default placeholder for images that fail to load


export default function Docs() {
  // State management
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [showExportMenu, setShowExportMenu] = useState(false);
  const [bookmarkedDocs, setBookmarkedDocs] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  // Debounce search term
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  // Load bookmarks from localStorage on component mount
  useEffect(() => {
    const savedBookmarks = localStorage.getItem("bookmarkedDocs");
    if (savedBookmarks) {
      try {
        setBookmarkedDocs(JSON.parse(savedBookmarks));
      } catch (error) {
        console.error("Failed to parse bookmarks:", error);
      }
    }
  }, []);

  // Toggle bookmark function
  const toggleBookmark = (id) => {
    setBookmarkedDocs((prev) => {
      const newBookmarks = prev.includes(id)
        ? prev.filter((docId) => docId !== id)
        : [...prev, id];

      // Save to localStorage
      localStorage.setItem("bookmarkedDocs", JSON.stringify(newBookmarks));
      return newBookmarks;
    });
  };

  // Categories with icons
  const categories = [
    { id: "all", name: "All", icon: <FileText size={18} /> },
    {
      id: "programming",
      name: "Programming Languages",
      icon: <Code size={18} />,
    },
    {
      id: "frameworks",
      name: "Development Frameworks",
      icon: <Database size={18} />,
    },
    { id: "app", name: "App Development", icon: <Smartphone size={18} /> },
    { id: "vcs", name: "Version Control", icon: <GitBranch size={18} /> },
    { id: "dsa", name: "DSA", icon: <Code size={18} /> },
    { id: "influencer", name: "Influencer Notes", icon: <Youtube size={18} /> },
  ];

  // Resource data with base64 encoded SVG placeholders for logos
  const resources = [
    // 1. Programming Language Docs
    {
      id: "python",
      category: "programming",
      name: "Python Documentation",
      logo: py,
      url: "https://docs.python.org/",
      description: "Official Python language documentation",
      featured: true,
    },
    {
      id: "java",
      category: "programming",
      name: "Java Documentation",
      logo: java,
      url: "https://docs.oracle.com/javase/",
      description: "Official Java SE documentation from Oracle",
    },
    {
      id: "cpp",
      category: "programming",
      name: "C++ Reference",
      logo: cpp,
      url: "https://cplusplus.com/",
      description: "Complete C++ language and standard library reference",
    },
    {
      id: "javascript",
      category: "programming",
      name: "JavaScript (MDN)",
      logo: js,
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      description:
        "Mozilla Developer Network's comprehensive JavaScript documentation",
      featured: true,
    },

    // 2. Development Framework Docs
    {
      id: "react",
      category: "frameworks",
      name: "React Documentation",
      logo: react,
      url: "https://react.dev/",
      description: "Official React library documentation",
      featured: true,
    },
    {
      id: "nextjs",
      category: "frameworks",
      name: "Next.js Documentation",
      logo: next,
      url: "https://nextjs.org/docs",
      description: "The React framework for production",
    },
    {
      id: "express",
      category: "frameworks",
      name: "Express Documentation",
      logo: express,
      url: "https://expressjs.com/",
      description: "Fast, unopinionated, minimalist web framework for Node.js",
    },
    {
      id: "mongodb",
      category: "frameworks",
      name: "MongoDB Documentation",
      logo: mongo,
      url: "https://mongodb.com/docs",
      description: "The MongoDB database documentation",
      featured: true,
    },
    {
      id: "mysql",
      category: "frameworks",
      name: "MySQL Documentation",
      logo: sql,
      url: "https://dev.mysql.com/doc/",
      description: "Reference manual for the MySQL database",
    },

    // 3. App Development Docs
    {
      id: "reactnative",
      category: "app",
      name: "React Native",
      logo: native,
      url: "https://reactnative.dev/",
      description: "Learn once, write anywhere mobile framework",
      featured: true,
    },
    {
      id: "flutter",
      category: "app",
      name: "Flutter Documentation",
      logo: flutter,
      url: "https://flutter.dev/docs",
      description:
        "Google's UI toolkit for building natively compiled applications",
    },
    {
      id: "kotlin",
      category: "app",
      name: "Kotlin Documentation",
      logo:kotlin,
      url: "https://kotlinlang.org/docs/",
      description: "Modern programming language for Android development",
    },

    // 4. Version Control Docs
    {
      id: "git",
      category: "vcs",
      name: "Git Documentation",
      logo: git,
      url: "https://git-scm.com/doc",
      description: "Official documentation for Git version control system",
      featured: true,
    },
    {
      id: "github",
      category: "vcs",
      name: "GitHub Docs",
      logo: github,
      url: "https://docs.github.com/",
      description: "Learn how to use GitHub with comprehensive guides",
    },

    // 5. Data Structures & Algorithms (DSA)
    {
      id: "geeksforgeeks",
      category: "dsa",
      name: "GeeksforGeeks DSA",
      logo: geeks,
      url: "https://www.geeksforgeeks.org/data-structures/",
      description: "Comprehensive DSA tutorials and practice problems",
      featured: true,
    },
    {
      id: "leetcode",
      category: "dsa",
      name: "LeetCode Explore",
      logo: leetcode,
      url: "https://leetcode.com/explore/",
      description:
        "Curated coding interview preparation with structured learning paths",
    },
    {
      id: "takeuforward",
      category: "dsa",
      name: "Take U Forward DSA",
      logo: tuf,
      url: "https://takeuforward.org/",
      description:
        "Striver's DSA playlist with comprehensive algorithm coverage",
    },

    // 6. Influencer Notes & Docs
    {
      id: "chaiaurcode",
      category: "influencer",
      name: "Chai aur Code GitHub",
      logo: chai,
      url: "https://docs.chaicode.com/",
      description: "Hitesh Choudhary's coding tutorials and notes repository",
      featured: true,
    },
    {
      id: "codewithharry",
      category: "influencer",
      name: "CodeWithHarry Notes",
      logo: harry,
      url: "https://codewithharry.com/notes",
      description: "Programming notes and cheat sheets by Harry",
    },
    {
      id: "w3 Schools",
      category: "w3 schools explore",
      name: "w3 Schools Coding docs",
      logo: w3,
      url: "https://www.w3schools.com/",
      description: "Programming docs and compiler by W3 schools",
    },

    
  ];

  // Filter resources based on search and category
  const filteredResources = resources.filter((resource) => {
    // For bookmarked category
    if (activeCategory === "bookmarked") {
      return bookmarkedDocs.includes(resource.id) && searchMatch(resource);
    }

    // For featured category
    if (activeCategory === "featured") {
      return resource.featured && searchMatch(resource);
    }

    // For other categories
    const categoryMatch =
      activeCategory === "all" || resource.category === activeCategory;

    return categoryMatch && searchMatch(resource);
  });

  // Search matching function
  function searchMatch(resource) {
    if (debouncedSearch === "") return true;

    const searchLower = debouncedSearch.toLowerCase();
    return (
      resource.name.toLowerCase().includes(searchLower) ||
      resource.description.toLowerCase().includes(searchLower)
    );
  }

  // Highlight search terms in text
  const highlightSearchTerm = (text) => {
    if (!debouncedSearch) return text;

    const regex = new RegExp(`(${debouncedSearch})`, "gi");
    return text.replace(regex, "<mark>$1</mark>");
  };

  // Clear search input
  const clearSearch = () => {
    setSearchTerm("");
  };

  // Handle category selection
  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    // If we're in mobile view, close the filters panel
    if (window.innerWidth < 768) {
      setShowFilters(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-30 to-white p-4 md:p-6">
      {/* Header section */}
      <Link href="/">
                <div className="flex items-center text-blue-500 hover:text-blue-600">
                  <svg
                    className="w-5 h-5 mr-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M19 12H5M12 19l-7-7 7-7"></path>
                  </svg>
                  <span className="text-sm font-medium">Home</span>
                </div>
              </Link>
      <header className="max-w-6xl mx-auto mb-12">
        <div className="text-center mb-10">
          <div className="inline-block bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium mb-3">
            Updated May 2025
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            <span className="text-blue-600">Documentation</span> Hub
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Handpicked, high-quality documentation and trusted resources to help
            you become a production-ready engineer
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-12 py-3 border border-gray-200 rounded-lg bg-white text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
              placeholder="Search documentation..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button
                className="absolute right-12 top-1/2 transform -translate-y-1/2 p-1 rounded-md hover:bg-gray-100"
                onClick={clearSearch}
                aria-label="Clear search"
              >
                <X size={16} className="text-gray-500" />
              </button>
            )}
            <button
              className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 rounded-md hover:bg-gray-100"
              onClick={() => setShowFilters(!showFilters)}
              aria-label="Toggle filters"
            >
              <Filter
                size={20}
                className={`text-gray-500 ${
                  showFilters ? "text-blue-500" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* Category filters - visible when showFilters is true */}
        {showFilters && (
          <div className="mt-4 p-4 bg-white rounded-lg border border-gray-200 shadow-sm animate-fadeIn">
            <div className="mb-3 font-medium text-gray-700">
              Filter by category:
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`inline-flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeCategory === category.id
                      ? "bg-blue-100 text-blue-800"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </button>
              ))}
              {/* Add bookmarked and featured filters */}
              <button
                onClick={() => handleCategoryChange("bookmarked")}
                className={`inline-flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeCategory === "bookmarked"
                    ? "bg-blue-100 text-blue-800"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
              >
                <span className="mr-2">
                  <Bookmark size={18} />
                </span>
                Bookmarked
              </button>
              <button
                onClick={() => handleCategoryChange("featured")}
                className={`inline-flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeCategory === "featured"
                    ? "bg-blue-100 text-blue-800"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
              >
                <span className="mr-2">
                  <ChevronRight size={18} />
                </span>
                Featured
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Main content */}
      <main className="max-w-6xl mx-auto">
        {/* Display results count */}
        <div className="mb-6 flex justify-between items-center text-gray-600">
          <p>
            {filteredResources.length === 0
              ? "No documentation found for your search criteria."
              : `Showing ${filteredResources.length} documentation resources`}
          </p>

          {debouncedSearch && (
            <div className="text-sm">
              Search results for:{" "}
              <span className="font-medium text-blue-600">
                {debouncedSearch}
              </span>
            </div>
          )}
        </div>

        {/* Resource grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource) => (
            <div
              key={resource.id}
              className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all overflow-hidden group"
            >
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-shrink-0 relative h-16 w-16 bg-gray-50 rounded-md overflow-hidden flex items-center justify-center">
                    {/* Error handling for images */}
                    <Image
                      src={resource.logo}
                      alt={resource.name}
                      width={96}
                      height={96}
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                  <div className="flex-grow min-w-0">
                    <h3 className="text-lg font-medium text-gray-900 truncate">
                      {resource.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-1 flex-wrap">
                      {resource.featured && (
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                          Featured
                        </span>
                      )}
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                        {categories.find((c) => c.id === resource.category)
                          ?.name || resource.category}
                      </span>
                    </div>
                  </div>

                  {/* Bookmark button */}
                  <button
                    onClick={() => toggleBookmark(resource.id)}
                    className={`text-gray-400 hover:text-blue-500 transition-colors p-2 rounded-full ${
                      bookmarkedDocs.includes(resource.id)
                        ? "bg-blue-50"
                        : "hover:bg-gray-50"
                    }`}
                    aria-label={
                      bookmarkedDocs.includes(resource.id)
                        ? "Remove bookmark"
                        : "Add bookmark"
                    }
                  >
                    <Bookmark
                      size={20}
                      className={
                        bookmarkedDocs.includes(resource.id)
                          ? "text-blue-500 fill-blue-500"
                          : ""
                      }
                    />
                  </button>
                </div>

                <p
                  className="text-gray-600 mb-6 line-clamp-3"
                  dangerouslySetInnerHTML={{
                    __html: highlightSearchTerm(resource.description),
                  }}
                />

                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium group-hover:underline"
                >
                  Visit Documentation
                  <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredResources.length === 0 && (
          <div className="text-center py-16 bg-white rounded-lg border border-gray-200 shadow-sm">
            <div className="bg-gray-100 inline-flex rounded-full p-4 mb-4">
              <Search size={24} className="text-gray-500" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">
              No results found
            </h3>
            <p className="text-gray-600 max-w-md mx-auto">
              Try adjusting your search or filter to find what you're looking
              for
            </p>
            {searchTerm && (
              <button
                onClick={clearSearch}
                className="mt-4 px-4 py-2 bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100 transition-colors"
              >
                Clear search
              </button>
            )}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto mt-16 py-6 border-t border-gray-200 text-center">
        <div className="flex items-center justify-center gap-2 text-gray-500 text-sm">
          <p>RoadmapFinder Documentation Hub</p>
          <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
          <p>Updated May 2025</p>
        </div>
      </footer>

      {/* Add some CSS animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
