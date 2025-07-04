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
  Terminal,
  Zap,
  GitBranch,
  Cpu,
  Triangle,
  Binary,
  Leaf,
  Layers,
  Box
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
      link: "/Roadmaps/Aiml",
      bgColor: "from-blue-500 to-indigo-600",
    },
    {
      id: "web",
      title: "Web Development",
      icon: <Globe className="w-5 h-5 text-white" />,
      link: "/Roadmaps/Web",
      bgColor: "from-blue-600 to-blue-400",
    },
    {
      id: "react",
      title: "React",
      icon: <Globe className="w-5 h-5 text-white" />,
      link: "/Roadmaps/React",
      bgColor: "from-blue-600 to-blue-400",
    },
    {
      id: "nextjs",
      title: "Next.js",
      icon: <Triangle className="w-5 h-5 text-white" />,
      link: "/Roadmaps/Next",
      bgColor: "from-gray-800 to-black",
    },
    {
      id: "reactnative",
      title: "React Native",
      icon: <Smartphone className="w-5 h-5 text-white" />,
      link: "/Roadmaps/Reactnative",
      bgColor: "from-blue-500 to-cyan-400",
    },
    {
      id: "frontend",
      title: "Frontend",
      icon: <Layers className="w-5 h-5 text-white" />,
      link: "/Roadmaps/Frontend",
      bgColor: "from-blue-500 to-cyan-400",
    },
    {
      id: "backend",
      title: "Backend Development",
      icon: <Server className="w-5 h-5 text-white" />,
      link: "/Roadmaps/Backend",
      bgColor: "from-green-600 to-emerald-700",
    },
    {
      id: "javascript",
      title: "JavaScript",
      icon: <Code className="w-5 h-5 text-white" />,
      link: "/Roadmaps/Javascript",
      bgColor: "from-yellow-400 to-yellow-600",
    },
    {
      id: "python",
      title: "Python",
      icon: <Terminal className="w-5 h-5 text-white" />,
      link: "/Roadmaps/Python",
      bgColor: "from-blue-500 to-green-500",
    },
    {
      id: "java",
      title: "Java",
      icon: <FileCode className="w-5 h-5 text-white" />,
      link: "/Roadmaps/Java",
      bgColor: "from-orange-500 to-red-600",
    },
    {
      id: "rust",
      title: "Rust",
      icon: <Zap className="w-5 h-5 text-white" />,
      link: "/Roadmaps/Rust",
      bgColor: "from-orange-600 to-red-700",
    },
    {
      id: "php",
      title: "PHP",
      icon: <Code className="w-5 h-5 text-white" />,
      link: "/Roadmaps/Php",
      bgColor: "from-purple-600 to-blue-600",
    },
    {
      id: "sql",
      title: "SQL",
      icon: <Database className="w-5 h-5 text-white" />,
      link: "/Roadmaps/Sql",
      bgColor: "from-blue-700 to-indigo-800",
    },
    {
      id: "golang",
      title: "Go (Golang)",
      icon: <GitBranch className="w-5 h-5 text-white" />,
      link: "/Roadmaps/Go",
      bgColor: "from-cyan-500 to-blue-500",
    },
    {
      id: "swift",
      title: "Swift",
      icon: <Triangle className="w-5 h-5 text-white" />,
      link: "/Roadmaps/Swift",
      bgColor: "from-orange-400 to-red-500",
    },
    {
      id: "cpp",
      title: "C++",
      icon: <Cpu className="w-5 h-5 text-white" />,
      link: "/Roadmaps/Cpp",
      bgColor: "from-blue-800 to-indigo-900",
    },
    {
      id: "C",
      title: "C language",
      icon: <Cpu className="w-5 h-5 text-white" />,
      link: "/Roadmaps/C",
      bgColor: "from-blue-800 to-indigo-900",
    },
    {
      id: "kotlin",
      title: "Kotlin",
      icon: <Binary className="w-5 h-5 text-white" />,
      link: "/Roadmaps/Kotlin",
      bgColor: "from-purple-500 to-pink-600",
    },
    {
      id: "springboot",
      title: "Springboot",
      icon: <Leaf className="w-5 h-5 text-white" />,
      link: "/Roadmaps/Springboot",
      bgColor: "from-green-500 to-green-600",
    },
    {
      id: "data",
      title: "Data Analysis & Science",
      icon: <Database className="w-5 h-5 text-white" />,
      link: "/Roadmaps/Data",
      bgColor: "from-green-500 to-green-400",
    },
    {
      id: "uiux",
      title: "UI/UX Design",
      icon: <Layout className="w-5 h-5 text-white" />,
      link: "/Roadmaps/UIUX",
      bgColor: "from-purple-500 to-pink-500",
    },
    {
      id: "mobile",
      title: "Mobile App Development",
      icon: <Smartphone className="w-5 h-5 text-white" />,
      link: "/Roadmaps/APP",
      bgColor: "from-orange-500 to-red-500",
    },
    {
      id: "cloud",
      title: "Cloud Computing",
      icon: <Cloud className="w-5 h-5 text-white" />,
      link: "/Roadmaps/Cloud",
      bgColor: "from-blue-400 to-cyan-300",
    },
    {
      id: "video",
      title: "Video Editing",
      icon: <Video className="w-5 h-5 text-white" />,
      link: "/Roadmaps/Video",
      bgColor: "from-red-500 to-pink-500",
    },
    {
      id: "graphic",
      title: "Graphic Design",
      icon: <Paintbrush className="w-5 h-5 text-white" />,
      link: "/Roadmaps/Graphic",
      bgColor: "from-yellow-400 to-amber-500",
    },
    {
      id: "blockchain",
      title: "Blockchain Development",
      icon: <Blocks className="w-5 h-5 text-white" />,
      link: "/Roadmaps/Blockchain",
      bgColor: "from-blue-700 to-indigo-800",
    },
    {
      id: "system",
      title: "System Design",
      icon: <Settings className="w-5 h-5 text-white" />,
      link: "/Roadmaps/System",
      bgColor: "from-emerald-500 to-teal-600",
    },
    {
      id: "devops",
      title: "DevOps",
      icon: <Server className="w-5 h-5 text-white" />,
      link: "/Roadmaps/Devops",
      bgColor: "from-gray-700 to-gray-900",
    },
    {
      id: "dsa",
      title: "DSA",
      icon: <LayoutGrid className="w-5 h-5 text-white" />,
      link: "/Roadmaps/DSA",
      bgColor: "from-gray-700 to-gray-900",
    },
    {
      id: "cybersecurity",
      title: "Cyber Security",
      icon: <Shield className="w-5 h-5 text-white" />,
      link: "/Roadmaps/CyberSecurity",
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

  // Popular search tags (updated to include new roadmaps)
  const popularTags = ["AI", "Web", "JavaScript", "Python", "Java", "React", "Next.js", "Backend"];

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