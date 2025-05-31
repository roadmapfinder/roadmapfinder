"use client";
import React, { useState, useEffect, useCallback, useMemo } from "react";
import {
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Clock,
  Sparkles,
  Search,
  Menu,
  X,
  Bot,
  Code,
  Palette,
  Cloud,
  Tag,
  TrendingUp,
  Users,
  Star,
} from "lucide-react";

const sampleBlogs = [
  {
    id: "1",
    title: "Perplexity AI: The Future of Learning with AI-Driven Search",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=200&fit=crop",
    content:
      "Perplexity AI is revolutionizing how we research and learn by combining the power of large language models with real-time web search capabilities. Unlike traditional search engines that return lists of links, Perplexity provides direct, well-sourced answers with citations, making it an invaluable tool for students, researchers, and professionals. The platform excels at synthesizing information from multiple sources, fact-checking claims in real-time, and providing contextual explanations that help users understand complex topics quickly. Whether you're conducting academic research, exploring new concepts, or need quick factual verification, Perplexity AI transforms the research process from hours of browsing to minutes of focused learning.",
    toolUrl: "https://www.perplexity.ai",
    category: "AI",
    tags: ["AI", "Research", "Search", "Learning"],
    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    rating: 4.8,
    popularity: 92,
  },
  {
    id: "2",
    title: "Gemini AI: Explore Google's Multimodal Answer to AI Learning",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1655720828018-edd2daec9349?w=400&h=200&fit=crop",
    content:
      "Gemini by Google represents a significant leap forward in AI assistance, offering multimodal capabilities that can process text, images, code, and audio inputs seamlessly. This versatility makes it particularly valuable for learners who need help across different domains - from explaining complex mathematical concepts with visual diagrams to debugging code and generating creative content. Gemini's integration with Google's ecosystem provides access to real-time information and can assist with everything from research projects to coding challenges. Its ability to understand context across different media formats makes it an excellent companion for students, developers, and creative professionals who work with diverse types of content.",
    toolUrl: "https://gemini.google.com",
    category: "AI",
    tags: ["AI", "Multimodal", "Google", "Learning"],
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    rating: 4.7,
    popularity: 89,
  },
  {
    id: "3",
    title: "Learn AI Hands-on with Hugging Face Spaces",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=200&fit=crop",
    content:
      "Hugging Face Spaces democratizes access to cutting-edge AI models by providing a platform where anyone can interact with, test, and deploy machine learning models without complex setup. This community-driven platform hosts thousands of AI applications covering everything from image generation and text analysis to speech recognition and computer vision. For learners and developers, Spaces offers an unparalleled opportunity to understand how different AI models work in practice, experiment with various parameters, and even deploy their own models. The platform's collaborative nature encourages learning through exploration, making advanced AI technologies accessible to users regardless of their technical background.",
    toolUrl: "https://huggingface.co/spaces",
    category: "AI",
    tags: ["AI", "Machine Learning", "Open Source", "Community"],
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    rating: 4.6,
    popularity: 85,
  },

  // Development Category
  {
    id: "4",
    title: "Practice Web Dev Online with W3Schools Spaces",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop",
    content:
      "W3Schools Spaces transforms the learning experience for aspiring web developers by providing an intuitive, browser-based coding environment that requires no software installation. This platform offers hands-on practice with HTML, CSS, JavaScript, Python, and other programming languages through interactive tutorials and real-time code execution. The seamless integration of learning materials with practical coding exercises makes it ideal for beginners who want to see immediate results from their code. With features like syntax highlighting, error detection, and instant preview capabilities, W3Schools Spaces bridges the gap between theoretical knowledge and practical application, enabling learners to build confidence through experimentation and immediate feedback.",
    toolUrl: "https://www.w3schools.com/spaces/",
    category: "Development",
    tags: ["Web Development", "Learning", "HTML", "CSS", "JavaScript"],
    createdAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000),
    rating: 4.5,
    popularity: 88,
  },
  {
    id: "5",
    title: "Start Building in Minutes with Replit Cloud IDE",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=200&fit=crop",
    content:
      "Replit revolutionizes software development by providing a comprehensive cloud-based IDE that supports over 50 programming languages and frameworks. This powerful platform eliminates the traditional barriers to coding by offering instant setup, collaborative features, and integrated hosting capabilities. Whether you're a beginner learning your first programming language or an experienced developer working on complex projects, Replit's environment adapts to your needs with features like real-time collaboration, version control, and one-click deployment. The platform's ability to handle everything from simple scripts to full-stack applications makes it an invaluable tool for education, prototyping, and production development.",
    toolUrl: "https://replit.com",
    category: "Development",
    tags: ["IDE", "Cloud Development", "Collaboration", "Multi-language"],
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
    rating: 4.7,
    popularity: 90,
  },
  {
    id: "6",
    title: "Level Up Your Frontend Skills with Real Projects",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=200&fit=crop",
    content:
      "Frontend Mentor addresses the critical gap between learning web development concepts and applying them to real-world projects. The platform provides professionally designed challenges that mirror actual client requirements, complete with design specifications, assets, and user stories. This approach helps developers build a portfolio of realistic projects while learning to work with design constraints, responsive layouts, and modern web technologies. Each challenge includes a community aspect where developers can share solutions, receive feedback, and learn from different approaches to the same problem. For developers looking to transition from tutorial-following to independent problem-solving, Frontend Mentor provides the perfect stepping stone to professional development work.",
    toolUrl: "https://www.frontendmentor.io",
    category: "Development",
    tags: ["Frontend", "HTML", "CSS", "JavaScript", "Projects"],
    createdAt: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000),
    rating: 4.8,
    popularity: 87,
  },

  // Design Category
  {
    id: "7",
    title: "Design Faster with Free Figma Resources",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1541462608143-67571c6738dd?w=400&h=200&fit=crop",
    content:
      "Figma Community has become the world's largest repository of free design resources, fundamentally changing how designers approach their work. With thousands of UI kits, design systems, icons, and templates contributed by the global design community, it enables both beginners and professionals to accelerate their design process significantly. The platform's collaborative nature means that high-quality resources are constantly being added and refined by expert designers. Whether you're creating mobile apps, web interfaces, or brand identities, Figma Community provides professionally crafted starting points that can be customized to fit any project. This democratization of design resources has made professional-quality design accessible to anyone with creative ambition.",
    toolUrl: "https://www.figma.com/community",
    category: "Design",
    tags: ["Design", "UI/UX", "Templates", "Community"],
    createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
    rating: 4.9,
    popularity: 94,
  },
  {
    id: "8",
    title: "Penpot: The Open-Source UI Tool You Should Try",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=200&fit=crop",
    content:
      "Penpot represents a paradigm shift in design tooling by offering a completely open-source alternative to proprietary design software. Built with web standards and focusing on collaboration between designers and developers, Penpot eliminates vendor lock-in while providing powerful design capabilities. The platform's commitment to open standards means designs remain accessible and portable, while its web-based architecture ensures universal accessibility without software installation requirements. For teams concerned about long-term accessibility of their design files, data ownership, or integration with custom workflows, Penpot offers a compelling solution that doesn't compromise on functionality or user experience.",
    toolUrl: "https://penpot.app",
    category: "Design",
    tags: ["Design", "Open Source", "UI/UX", "Collaboration"],
    createdAt: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000),
    rating: 4.4,
    popularity: 78,
  },
  {
    id: "9",
    title: "Add Delightful Animations with LottieFiles",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=200&fit=crop",
    content:
      "LottieFiles transforms static designs into engaging, interactive experiences through lightweight, scalable animations that work seamlessly across all platforms. The platform's extensive library of free animations, combined with powerful editing tools, enables designers and developers to add professional motion graphics to their projects without the complexity traditionally associated with animation. Lottie animations are vector-based, ensuring they remain crisp at any size while maintaining tiny file sizes that don't impact performance. Whether enhancing user interfaces with micro-interactions, creating engaging loading screens, or adding personality to brand communications, LottieFiles provides the tools and resources to elevate any digital experience through thoughtful animation.",
    toolUrl: "https://lottiefiles.com",
    category: "Design",
    tags: ["Animation", "UI/UX", "Motion Graphics", "Performance"],
    createdAt: new Date(Date.now() - 9 * 24 * 60 * 60 * 1000),
    rating: 4.6,
    popularity: 82,
  },

  // Deployment Category
  {
    id: "10",
    title: "One-Click Deployments with Vercel",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=400&h=200&fit=crop",
    content:
      "Vercel has redefined web deployment by making it as simple as connecting a Git repository and clicking deploy. This platform specializes in frontend frameworks like Next.js, React, and Vue.js, providing optimized hosting with features like automatic HTTPS, global CDN distribution, and serverless functions. The platform's zero-configuration approach means developers can focus on building rather than configuring infrastructure, while advanced features like preview deployments for every pull request enable seamless collaboration and testing. Vercel's emphasis on performance optimization, including automatic image optimization and edge caching, ensures that deployed applications deliver exceptional user experiences globally.",
    toolUrl: "https://vercel.com",
    category: "Deployment",
    tags: ["Deployment", "Frontend", "CDN", "Serverless"],
    createdAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000),
    rating: 4.8,
    popularity: 91,
  },
  {
    id: "11",
    title: "Full Stack Deployments Simplified with Render",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=200&fit=crop",
    content:
      "Render bridges the complexity gap in full-stack application deployment by providing a unified platform that handles everything from static sites to complex multi-service applications. Unlike traditional hosting providers that require extensive configuration, Render automatically detects your application type and configures appropriate build and deployment settings. The platform supports a wide range of technologies including Node.js, Python, Ruby, Go, and Docker containers, while providing managed databases, cron jobs, and background workers. This comprehensive approach eliminates the need to juggle multiple services and providers, making it particularly valuable for developers who want to focus on building features rather than managing infrastructure.",
    toolUrl: "https://render.com",
    category: "Deployment",
    tags: ["Full Stack", "Hosting", "Databases", "Multi-service"],
    createdAt: new Date(Date.now() - 11 * 24 * 60 * 60 * 1000),
    rating: 4.5,
    popularity: 84,
  },
  {
    id: "12",
    title: "Start Automating Your Projects with GitHub Actions",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=400&h=200&fit=crop",
    content:
      "GitHub Actions transforms software development workflows by automating repetitive tasks directly within the GitHub ecosystem. This powerful CI/CD platform enables developers to create custom workflows that automatically build, test, and deploy code based on repository events like pushes, pull requests, or releases. The platform's extensive marketplace of pre-built actions, combined with the ability to create custom workflows using simple YAML configuration, makes advanced DevOps practices accessible to developers of all skill levels. From running automated tests and code quality checks to deploying applications across multiple environments, GitHub Actions streamlines the entire software development lifecycle while maintaining the security and reliability required for production systems.",
    toolUrl: "https://github.com/features/actions",
    category: "Deployment",
    tags: ["CI/CD", "Automation", "DevOps", "GitHub"],
    createdAt: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000),
    rating: 4.7,
    popularity: 88,
  },
];
// Navigation categories with icons and colors
const categories = [
  {
    id: "all",
    name: "All Blogs",
    icon: Sparkles,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-gradient-to-r from-purple-50 to-pink-50",
    count: 0,
  },
  {
    id: "AI",
    name: "AI Tools",
    icon: Bot,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-gradient-to-r from-blue-50 to-cyan-50",
    count: 0,
  },
  {
    id: "Development",
    name: "Development",
    icon: Code,
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-gradient-to-r from-green-50 to-emerald-50",
    count: 0,
  },
  {
    id: "Design",
    name: "Design",
    icon: Palette,
    color: "from-orange-500 to-red-500",
    bgColor: "bg-gradient-to-r from-orange-50 to-red-50",
    count: 0,
  },
  {
    id: "Deployment",
    name: "Deployment",
    icon: Cloud,
    color: "from-indigo-500 to-purple-500",
    bgColor: "bg-gradient-to-r from-indigo-50 to-purple-50",
    count: 0,
  },
];

const TechToolsBlog = () => {
  const [blogs, setBlogs] = useState(sampleBlogs);
  const [loading, setLoading] = useState(false);
  const [expandedCards, setExpandedCards] = useState(new Set());
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Update category counts
  const categoriesWithCounts = useMemo(() => {
    return categories.map((cat) => ({
      ...cat,
      count:
        cat.id === "all"
          ? blogs.length
          : blogs.filter((blog) => blog.category === cat.id).length,
    }));
  }, [blogs]);

  // Filter and search functionality
  const filteredBlogs = useMemo(() => {
    return blogs
      .filter((blog) => {
        const matchesSearch =
          blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          blog.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
          blog.tags?.some((tag) =>
            tag.toLowerCase().includes(searchTerm.toLowerCase()),
          );

        const matchesCategory =
          selectedCategory === "all" || blog.category === selectedCategory;

        return matchesSearch && matchesCategory;
      })
      .sort((a, b) => {
        // Sort by popularity and recency
        const popularityDiff = (b.popularity || 0) - (a.popularity || 0);
        if (Math.abs(popularityDiff) > 10) return popularityDiff;
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
  }, [blogs, searchTerm, selectedCategory]);

  // Check if blog is new (within last 7 days)
  const isNewBlog = useCallback((timestamp) => {
    const blogDate = new Date(timestamp);
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    return blogDate > sevenDaysAgo;
  }, []);

  // Toggle card expansion
  const toggleExpanded = useCallback((blogId) => {
    setExpandedCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(blogId)) {
        newSet.delete(blogId);
      } else {
        newSet.add(blogId);
      }
      return newSet;
    });
  }, []);

  // Format date
  const formatDate = useCallback((date) => {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(new Date(date));
  }, []);

  // Get preview text
  const getPreviewText = useCallback((content, maxLength = 120) => {
    if (content.length <= maxLength) return content;
    return content.substring(0, maxLength).trim() + "...";
  }, []);

  // Handle category selection
  const handleCategorySelect = useCallback((categoryId) => {
    setSelectedCategory(categoryId);
    setIsMobileMenuOpen(false);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMobileMenuOpen &&
        !event.target.closest(".mobile-menu") &&
        !event.target.closest(".menu-button")
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMobileMenuOpen]);

  // Get current category info
  const currentCategory = categoriesWithCounts.find(
    (cat) => cat.id === selectedCategory,
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-50 lg:block lg:w-72 lg:overflow-y-auto lg:bg-white/80 lg:backdrop-blur-xl lg:border-r lg:border-gray-200">
        <div className="px-6 py-8">
          {/* Logo/Title */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Blogs Tech Hub
            </h1>
            <p className="text-sm text-gray-600 mt-2">Discover amazing tools</p>
          </div>

          {/* Search */}
          <div className="mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search Blogs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/50 backdrop-blur-sm"
              />
            </div>
          </div>

          {/* Categories */}
          <nav className="space-y-2">
            <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
              Categories
            </h2>
            {categoriesWithCounts.map((category) => {
              const Icon = category.icon;
              const isActive = selectedCategory === category.id;

              return (
                <button
                  key={category.id}
                  onClick={() => handleCategorySelect(category.id)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 group ${
                    isActive
                      ? `${category.bgColor} shadow-lg scale-105`
                      : "hover:bg-gray-50 hover:scale-102"
                  }`}
                >
                  <div className="flex items-center">
                    <div
                      className={`p-2 rounded-lg bg-gradient-to-r ${category.color} mr-3 shadow-sm`}
                    >
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <span
                      className={`font-medium ${isActive ? "text-gray-900" : "text-gray-700"}`}
                    >
                      {category.name}
                    </span>
                  </div>
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      isActive
                        ? "bg-white/70 text-gray-700"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {category.count}
                  </span>
                </button>
              );
            })}
          </nav>

          {/* Stats */}
          <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">
              Platform Stats
            </h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <TrendingUp className="w-4 h-4 text-blue-500 mr-2" />
                  <span className="text-sm text-gray-600">Total Tools</span>
                </div>
                <span className="font-semibold text-blue-600">
                  {blogs.length}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Users className="w-4 h-4 text-green-500 mr-2" />
                  <span className="text-sm text-gray-600">Active Users</span>
                </div>
                <span className="font-semibold text-green-600">12.5K</span>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Header */}
      <header className="lg:hidden sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-gray-200">
        <div className="px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Tech Tools Hub
              </h1>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="menu-button p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Search */}
          <div className="mt-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search blogs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/50"
              />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="mobile-menu absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-lg">
            <div className="px-4 py-4">
              <div className="grid grid-cols-2 gap-3">
                {categoriesWithCounts.map((category) => {
                  const Icon = category.icon;
                  const isActive = selectedCategory === category.id;

                  return (
                    <button
                      key={category.id}
                      onClick={() => handleCategorySelect(category.id)}
                      className={`flex items-center p-3 rounded-xl transition-all duration-300 ${
                        isActive
                          ? `${category.bgColor} shadow-md`
                          : "hover:bg-gray-50"
                      }`}
                    >
                      <div
                        className={`p-2 rounded-lg bg-gradient-to-r ${category.color} mr-3`}
                      >
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <div className="text-left">
                        <div
                          className={`font-medium text-sm ${isActive ? "text-gray-900" : "text-gray-700"}`}
                        >
                          {category.name}
                        </div>
                        <div className="text-xs text-gray-500">
                          {category.count} tools
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="lg:ml-72">
        <div className="px-4 lg:px-8 py-8">
          {/* Header Section */}
          <div className="mb-8">
            <div className="flex items-center mb-4">
              {currentCategory && (
                <>
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-r ${currentCategory.color} mr-4 shadow-lg`}
                  >
                    <currentCategory.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">
                      {currentCategory.name}
                    </h2>
                    <p className="text-gray-600 mt-1">
                      {filteredBlogs.length}{" "}
                      {filteredBlogs.length === 1 ? "tool" : "tools"} available
                    </p>
                  </div>
                </>
              )}
            </div>

            {/* Filter Results Info */}
            {(searchTerm || selectedCategory !== "all") && (
              <div className="flex items-center gap-4 text-sm">
                <span className="text-gray-600">
                  Showing {filteredBlogs.length} of {blogs.length} tools
                </span>
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Clear search
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Blog Grid */}
          {filteredBlogs.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                No tools found
              </h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search terms or browse a different category.
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                }}
                className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors duration-300"
              >
                Show All Tools
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredBlogs.map((blog, index) => {
                const isExpanded = expandedCards.has(blog.id);
                const isNew = isNewBlog(blog.createdAt);

                return (
                  <article
                    key={blog.id}
                    className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    {/* Thumbnail */}
                    <div className="relative overflow-hidden h-48">
                      <img
                        src={blog.thumbnailUrl}
                        alt={blog.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        onError={(e) => {
                          e.target.src =
                            "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2Y3ZjhmOSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiNhN2E3YTciIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZSBub3QgYXZhaWxhYmxlPC90ZXh0Pjwvc3ZnPg==";
                        }}
                        loading="lazy"
                      />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Badges */}
                      <div className="absolute top-4 left-4 flex gap-2">
                        {isNew && (
                          <span className="inline-flex items-center px-2.5 py-1 bg-green-500 text-white text-xs font-medium rounded-full shadow-lg">
                            <Sparkles className="w-3 h-3 mr-1" />
                            New
                          </span>
                        )}
                      </div>

                      <div className="absolute top-4 right-4">
                        <div className="flex items-center gap-1 px-2.5 py-1 bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-medium rounded-full shadow-lg">
                          <Star className="w-3 h-3 text-yellow-500 fill-current" />
                          {blog.rating}
                        </div>
                      </div>

                      {/* Popularity Indicator */}
                      <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex items-center gap-1 px-2.5 py-1 bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-medium rounded-full">
                          <TrendingUp className="w-3 h-3 text-blue-500" />
                          {blog.popularity}% popular
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                        {blog.title}
                      </h3>

                      {/* Tags */}
                      {blog.tags && blog.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1 mb-4">
                          {blog.tags.slice(0, 3).map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-2.5 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                          {blog.tags.length > 3 && (
                            <span className="px-2.5 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">
                              +{blog.tags.length - 3}
                            </span>
                          )}
                        </div>
                      )}

                      {/* Content Preview */}
                      <div
                        className={`text-gray-600 leading-relaxed mb-6 transition-all duration-500 ${
                          isExpanded ? "max-h-none" : "max-h-16 overflow-hidden"
                        }`}
                      >
                        {isExpanded
                          ? blog.content
                          : getPreviewText(blog.content)}
                      </div>

                      {/* Action Buttons */}
                      <div className="space-y-3">
                        {/* Read More Button */}
                        {blog.content.length > 120 && (
                          <button
                            onClick={() => toggleExpanded(blog.id)}
                            className="w-full inline-flex items-center justify-center px-4 py-2.5 bg-gray-50 text-gray-700 rounded-xl hover:bg-gray-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 group"
                          >
                            {isExpanded ? (
                              <>
                                Show Less
                                <ChevronUp className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:-translate-y-0.5" />
                              </>
                            ) : (
                              <>
                                Read More
                                <ChevronDown className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-y-0.5" />
                              </>
                            )}
                          </button>
                        )}

                        {/* Visit Tool Button */}
                        <a
                          href={blog.toolUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 group shadow-lg hover:shadow-xl"
                        >
                          Visit Tool
                          <ExternalLink className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-0.5" />
                        </a>
                      </div>

                      {/* Timestamp */}
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <div className="flex items-center text-xs text-gray-500">
                          <Clock className="w-3 h-3 mr-1" />
                          Added {formatDate(blog.createdAt)}
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </main>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        article {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default TechToolsBlog;
