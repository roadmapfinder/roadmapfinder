"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function TechRoadmap() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);

  // Categories data
  const categories = [
    {
      id: "ai",
      title: "AI & ML",
      icon: (
        <svg
          className="w-5 h-5 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
        </svg>
      ),
      link: "/AIML",
      bgColor: "from-blue-500 to-indigo-600",
    },
    {
      id: "web",
      title: "Web Development",
      icon: (
        <svg
          className="w-5 h-5 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
        </svg>
      ),
      link: "/WEB",
      bgColor: "from-blue-600 to-blue-400",
    },
    {
      id: "data",
      title: "Data Analysis & Science",
      icon: (
        <svg
          className="w-5 h-5 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="3" y="3" width="7" height="7"></rect>
          <rect x="14" y="3" width="7" height="7"></rect>
          <rect x="14" y="14" width="7" height="7"></rect>
          <rect x="3" y="14" width="7" height="7"></rect>
        </svg>
      ),
      link: "Data",
      bgColor: "from-green-500 to-green-400",
    },
    {
      id: "uiux",
      title: "UI/UX Design",
      icon: (
        <svg
          className="w-5 h-5 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="3" y1="9" x2="21" y2="9"></line>
        </svg>
      ),
      link: "/UIUX",
      bgColor: "from-purple-500 to-pink-500",
    },
    {
      id: "mobile",
      title: "Mobile App Development",
      icon: (
        <svg
          className="w-5 h-5 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 18V6M7 10l5-4 5 4M7 14l5 4 5-4" />
        </svg>
      ),
      link: "/APP",
      bgColor: "from-orange-500 to-red-500",
    },
    {
      id: "cloud",
      title: "Cloud Computing",
      icon: (
        <svg
          className="w-5 h-5 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
        </svg>
      ),
      link: "CLOUD",
      bgColor: "from-blue-400 to-cyan-300",
    },
    {
      id: "video",
      title: "Video Editing",
      icon: (
        <svg
          className="w-5 h-5 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polygon points="23 7 16 12 23 17 23 7"></polygon>
          <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
        </svg>
      ),
      link: "Video",
      bgColor: "from-red-500 to-pink-500",
    },
    {
      id: "graphic",
      title: "Graphic Design",
      icon: (
        <svg
          className="w-5 h-5 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
          <line x1="9" y1="9" x2="9.01" y2="9"></line>
          <line x1="15" y1="9" x2="15.01" y2="9"></line>
        </svg>
      ),
      link: "/Graphic",
      bgColor: "from-yellow-400 to-amber-500",
    },
    {
      id: "blockchain",
      title: "Blockchain Development",
      icon: (
        <svg
          className="w-5 h-5 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M20 11.08V8l-6-6H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2v-3.08"></path>
          <path d="M18 14v4h4"></path>
          <path d="M18 18l-3-3"></path>
          <rect x="6" y="6" width="6" height="4" rx="1"></rect>
          <rect x="6" y="14" width="6" height="4" rx="1"></rect>
        </svg>
      ),
      link: "/Blockchain",
      bgColor: "from-blue-700 to-indigo-800",
    },
    {
      id: "system",
      title: "System Design",
      icon: (
        <svg
          className="w-5 h-5 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
      ),
      link: "/System",
      bgColor: "from-emerald-500 to-teal-600",
    },
    {
      id: "devops",
      title: "Devops",
      icon: (
        <svg
          className="w-5 h-5 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="1"></circle>
          <circle cx="19" cy="12" r="1"></circle>
          <circle cx="5" cy="12" r="1"></circle>
        </svg>
      ),
      link: "Devops",
      bgColor: "from-gray-700 to-gray-900",
    },
    {
      id: "dsa",
      title: "DSA",
      icon: (
        <svg
          className="w-5 h-5 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="1"></circle>
          <circle cx="19" cy="12" r="1"></circle>
          <circle cx="5" cy="12" r="1"></circle>
        </svg>
      ),
      link: "DSA",
      bgColor: "from-gray-700 to-gray-900",
    },
  ];

  // Initialize filtered categories with all categories
  useEffect(() => {
    setFilteredCategories(categories);
  }, []);

  // Filter categories based on search query
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredCategories(categories);
    } else {
      const filtered = categories.filter((category) =>
        category.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredCategories(filtered);
    }
  }, [searchQuery]);

  // Handle search tag click
  const handleTagClick = (tag) => {
    setSearchQuery(tag);
  };

  // Group categories for responsive design
  const firstRow = filteredCategories.slice(
    0,
    Math.ceil(filteredCategories.length / 2)
  );
  const secondRow = filteredCategories.slice(
    Math.ceil(filteredCategories.length / 2)
  );

  // Popular search tags
  const popularTags = ["AI", "Web", "Data", "Mobile", "Cloud"];

  return (
    <div className="max-w-md mx-auto px-4 pt-6 pb-12 font-sans md:max-w-4xl bg-gray-50 min-h-screen">
      {/* Header with animated gradient background */}
      <div className="relative mb-8 rounded-xl overflow-hidden shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-90"></div>
        <div className="relative px-6 py-8 text-white">
          {/* Home Arrow Icon */}
          <div className="flex justify-start mb-6">
            <Link href="/" passHref>
              <div className="flex items-center text-white hover:text-blue-100 transition-all duration-300 cursor-pointer">
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
          </div>

          <h1 className="text-3xl font-bold mb-2">Tech Learning Paths</h1>
          <p className="text-blue-100">
            Discover curated roadmaps for various tech domains
          </p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="mb-6 px-2">
        <div className="relative">
          <input
            type="text"
            placeholder="Search paths..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 pl-10 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          />
          <svg
            className="w-5 h-5 text-gray-400 absolute left-3 top-3.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-3.5"
            >
              <svg
                className="w-5 h-5 text-gray-400 hover:text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          )}
        </div>

        {/* Popular search tags */}
        <div className="flex flex-wrap gap-2 mt-3">
          <span className="text-sm text-gray-500">Popular:</span>
          {popularTags.map((tag) => (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
              className="px-3 py-1 text-xs rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors duration-300"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Categories Section - First row */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4 px-2">
          Featured Paths
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 px-2">
          {firstRow.map((category) => (
            <Link href={category.link} key={category.id} passHref>
              <div
                className="border border-gray-200 rounded-xl p-4 flex items-center hover:shadow-md transition-all duration-300 cursor-pointer bg-white transform hover:-translate-y-1"
                onMouseEnter={() => setHoveredCard(category.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div
                  className={`bg-gradient-to-br ${
                    category.bgColor
                  } rounded-lg w-12 h-12 flex items-center justify-center mr-4 shadow-md transition-all duration-300 ${
                    hoveredCard === category.id ? "scale-110" : ""
                  }`}
                >
                  {category.icon}
                </div>
                <div>
                  <span className="text-lg font-medium">{category.title}</span>
                  {hoveredCard === category.id && (
                    <p className="text-sm text-gray-500 mt-1">
                      Explore roadmap →
                    </p>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Trending Categories Section - Second row */}
      {secondRow.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4 px-2">
            Trending & Specialized Paths
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-2">
            {secondRow.map((category) => (
              <Link href={category.link} key={category.id} passHref>
                <div
                  className="border border-gray-200 rounded-xl p-4 flex items-center hover:shadow-md transition-all duration-300 cursor-pointer bg-white transform hover:-translate-y-1"
                  onMouseEnter={() => setHoveredCard(category.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div
                    className={`bg-gradient-to-br ${
                      category.bgColor
                    } rounded-lg w-12 h-12 flex items-center justify-center mr-4 shadow-md transition-all duration-300 ${
                      hoveredCard === category.id ? "scale-110" : ""
                    }`}
                  >
                    {category.icon}
                  </div>
                  <div>
                    <span className="text-lg font-medium">
                      {category.title}
                    </span>
                    {hoveredCard === category.id && (
                      <p className="text-sm text-gray-500 mt-1">
                        Explore roadmap →
                      </p>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Newsletter Subscription */}
      <div className="bg-white rounded-xl p-6 shadow-md mb-8 border border-gray-200 mx-2">
        <h3 className="text-lg font-bold mb-2">Stay Updated</h3>
        <p className="text-sm text-gray-600 mb-4">
          Get notified about new roadmaps and learning resources.
        </p>
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">
            Subscribe
          </button>
        </div>
      </div>

    </div>
  );
}
