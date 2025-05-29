"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Brain, 
  Globe, 
  Database, 
  Layout, 
  Smartphone, 
  Cloud, 
  Video, 
  Paintbrush, 
  Blocks, 
  Settings, 
  LayoutGrid, 
  Server, 
  Shield, 
  ChevronLeft, 
  Search, 
  X,
  Code,
  FileCode,
  Terminal
} from "lucide-react";

export default function TechRoadmap() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);

  // Categories data with lucide-react icons
  const categories = [
    {
      id: "ai",
      title: "AI & ML",
      icon: <Brain className="w-5 h-5 text-white" />,
      link: "/AIML",
      bgColor: "from-blue-500 to-indigo-600",
    },
    {
      id: "web",
      title: "Web Development",
      icon: <Globe className="w-5 h-5 text-white" />,
      link: "/WEB",
      bgColor: "from-blue-600 to-blue-400",
    },
    {
      id: "javascript",
      title: "JavaScript",
      icon: <Code className="w-5 h-5 text-white" />,
      link: "/Javascript",
      bgColor: "from-yellow-400 to-yellow-600",
    },
    {
      id: "python",
      title: "Python",
      icon: <Terminal className="w-5 h-5 text-white" />,
      link: "/Python",
      bgColor: "from-blue-500 to-green-500",
    },
    {
      id: "java",
      title: "Java",
      icon: <FileCode className="w-5 h-5 text-white" />,
      link: "/Java",
      bgColor: "from-orange-500 to-red-600",
    },
    {
      id: "data",
      title: "Data Analysis & Science",
      icon: <Database className="w-5 h-5 text-white" />,
      link: "/Data",
      bgColor: "from-green-500 to-green-400",
    },
    {
      id: "uiux",
      title: "UI/UX Design",
      icon: <Layout className="w-5 h-5 text-white" />,
      link: "/UIUX",
      bgColor: "from-purple-500 to-pink-500",
    },
    {
      id: "mobile",
      title: "Mobile App Development",
      icon: <Smartphone className="w-5 h-5 text-white" />,
      link: "/APP",
      bgColor: "from-orange-500 to-red-500",
    },
    {
      id: "cloud",
      title: "Cloud Computing",
      icon: <Cloud className="w-5 h-5 text-white" />,
      link: "/CLOUD",
      bgColor: "from-blue-400 to-cyan-300",
    },
    {
      id: "video",
      title: "Video Editing",
      icon: <Video className="w-5 h-5 text-white" />,
      link: "/Video",
      bgColor: "from-red-500 to-pink-500",
    },
    {
      id: "graphic",
      title: "Graphic Design",
      icon: <Paintbrush className="w-5 h-5 text-white" />,
      link: "/Graphic",
      bgColor: "from-yellow-400 to-amber-500",
    },
    {
      id: "blockchain",
      title: "Blockchain Development",
      icon: <Blocks className="w-5 h-5 text-white" />,
      link: "/Blockchain",
      bgColor: "from-blue-700 to-indigo-800",
    },
    {
      id: "system",
      title: "System Design",
      icon: <Settings className="w-5 h-5 text-white" />,
      link: "/System",
      bgColor: "from-emerald-500 to-teal-600",
    },
    {
      id: "devops",
      title: "DevOps",
      icon: <Server className="w-5 h-5 text-white" />,
      link: "/Devops",
      bgColor: "from-gray-700 to-gray-900",
    },
    {
      id: "dsa",
      title: "DSA",
      icon: <LayoutGrid className="w-5 h-5 text-white" />,
      link: "/DSA",
      bgColor: "from-gray-700 to-gray-900",
    },
    {
      id: "cybersecurity",
      title: "Cyber Security",
      icon: <Shield className="w-5 h-5 text-white" />,
      link: "/CyberSecurity",
      bgColor: "from-red-600 to-red-800",
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

  // Popular search tags (updated to include programming languages)
  const popularTags = ["AI", "Web", "JavaScript", "Python", "Java", "Data", "Mobile"];

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
                <ChevronLeft className="w-5 h-5 mr-1" />
                <span className="text-sm font-medium">Home</span>
              </div>
            </Link>
          </div>

          <h1 className="text-3xl font-bold mb-2">Tech Learning Paths</h1>
          <p className="text-blue-100">
            Discover curated roadmaps for various tech domains & programming languages
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
          <Search className="w-5 h-5 text-gray-400 absolute left-3 top-3.5" />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-3.5"
            >
              <X className="w-5 h-5 text-gray-400 hover:text-gray-600" />
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
          <Link href="/Signup">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">
              Subscribe
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}