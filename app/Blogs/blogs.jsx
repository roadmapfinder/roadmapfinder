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
    title: "Private AI: Run Advanced AI Models Offline on Android",
    thumbnailUrl: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=400&h=200&fit=crop",
    content: "Private AI transforms your Android device into a powerful, secure AI companion by running advanced language models directly on your phone without requiring internet connectivity. This groundbreaking approach ensures complete data privacy while providing offline functionality that's perfect for users concerned about data security. The app supports multiple AI models and can handle complex conversations, writing tasks, and problem-solving entirely offline. For beginners and intermediate users, this tool represents a significant shift toward personal AI ownership, eliminating concerns about data being sent to external servers. The offline capability makes it particularly valuable for users with limited internet access or those working in secure environments where data privacy is paramount.",
    toolUrl: "https://play.google.com/store/apps/details?id=us.valkon.privateai",
    category: "AI",
    tags: ["AI", "Privacy", "Offline", "Android", "Security"],
    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    rating: 4.6,
    popularity: 88
  },
  {
    id: "2",
    title: "OpenAI Operator: Your AI Browser Assistant for Task Automation",
    thumbnailUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=200&fit=crop",
    content: "OpenAI Operator revolutionizes web automation by serving as an AI agent that can perform tasks directly in web browsers on your behalf. Using its own browser interface, Operator can look at webpages, interact with them by typing, clicking, and scrolling, effectively automating repetitive online tasks. Currently available to Pro users in the US, this tool excels at booking travel accommodations, making restaurant reservations, online shopping, and filling out forms. For beginners, Operator eliminates the need to learn complex automation scripts - simply describe what you want done in natural language. The tool is designed with safety in mind, asking users to take over for tasks requiring payment details, login credentials, or CAPTCHA solving. This represents a major step toward autonomous web browsing and task completion.",
    toolUrl: "https://openai.com/index/introducing-operator/",
    category: "AI",
    tags: ["AI", "Automation", "Browser", "Task Management", "OpenAI"],
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    rating: 4.7,
    popularity: 92
  },
  {
    id: "3",
    title: "Runway ML: Beginner-Friendly AI Video and Image Editing",
    thumbnailUrl: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?w=400&h=200&fit=crop",
    content: "Runway ML democratizes AI-powered content creation by providing intuitive tools for video and image editing that require no technical expertise. This platform combines cutting-edge machine learning with user-friendly interfaces, enabling creators to generate videos from text prompts, remove backgrounds with precision, and apply complex visual effects with simple clicks. The platform's strength lies in its accessibility - complex AI operations that once required programming knowledge are now available through drag-and-drop interfaces. For beginners entering the world of AI-assisted creativity, Runway ML offers extensive tutorials and templates that make professional-quality content creation achievable. The tool supports various formats and integrates seamlessly with popular creative workflows, making it an ideal stepping stone for those looking to incorporate AI into their creative projects without overwhelming technical complexity.",
    toolUrl: "https://runwayml.com",
    category: "AI",
    tags: ["AI", "Video Editing", "Image Generation", "Creative Tools", "Beginner-Friendly"],
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    rating: 4.5,
    popularity: 89
  },
  {
    id: "4",
    title: "Firebase Studio: Cloud IDE with Gemini AI Assistant",
    thumbnailUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop",
    content: "Firebase Studio represents the next evolution in cloud-based development environments by integrating Google's Gemini AI directly into the development workflow. This powerful IDE combines the reliability of Firebase's backend services with intelligent AI assistance that can help write code, debug issues, and suggest optimizations in real-time. The platform excels at full-stack development, offering seamless integration with Google Cloud services while providing AI-powered code completion, error detection, and architectural recommendations. For new learners, Firebase Studio eliminates the complexity of setting up development environments while providing intelligent guidance throughout the coding process. The AI assistant can explain complex concepts, suggest best practices, and even help with project planning, making it an invaluable learning companion for developers at any skill level.",
    toolUrl: "https://firebase.google.com/products/studio",
    category: "Development",
    tags: ["IDE", "Cloud Development", "AI Assistant", "Firebase", "Full-Stack"],
    createdAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000),
    rating: 4.8,
    popularity: 91
  },
  {
    id: "5",
    title: "koderAI: Multi-Agent AI Coding Assistant",
    thumbnailUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=200&fit=crop",
    content: "koderAI transforms software development through its innovative multi-agent approach, where specialized AI agents collaborate to handle different aspects of coding projects. Unlike single AI assistants, koderAI deploys multiple specialized agents that can work simultaneously on architecture design, code implementation, testing, and documentation. This collaborative AI approach mimics how development teams work, with each agent bringing expertise in specific domains like frontend development, backend systems, or database design. For beginners and intermediate developers, this tool provides an unprecedented learning experience by showing how different aspects of software development interconnect. The platform's ability to break down complex projects into manageable tasks, assign them to appropriate AI agents, and coordinate their work provides valuable insights into professional development practices while significantly accelerating the learning curve.",
    toolUrl: "https://koder.ai",
    category: "Development",
    tags: ["AI Coding", "Multi-Agent", "Collaboration", "Learning", "Development"],
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
    rating: 4.6,
    popularity: 87
  },
  {
    id: "6",
    title: "Lumen AI: Natural Language Data Analytics Tool",
    thumbnailUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop",
    content: "Lumen AI revolutionizes data analytics by allowing users to interact with complex datasets using natural language queries instead of requiring SQL or programming knowledge. This powerful tool can interpret questions like 'Show me sales trends for the last quarter' and automatically generate appropriate visualizations, statistical analyses, and insights. The platform supports various data sources including spreadsheets, databases, and cloud storage, making it accessible to users across different technical backgrounds. For beginners in data analysis, Lumen AI serves as both a powerful analytical tool and an educational platform, showing how different types of questions translate into analytical approaches. The tool's ability to explain its reasoning and suggest follow-up questions helps users develop analytical thinking skills while providing immediate value through actionable insights from their data.",
    toolUrl: "https://lumen.ai",
    category: "Development",
    tags: ["Data Analytics", "Natural Language", "Business Intelligence", "Visualization", "AI"],
    createdAt: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000),
    rating: 4.7,
    popularity: 85
  },
  {
    id: "7",
    title: "Foxit Smart Redact Server: AI-Powered Document Security",
    thumbnailUrl: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=400&h=200&fit=crop",
    content: "Foxit Smart Redact Server addresses critical document security and compliance needs through AI-powered automatic redaction of sensitive information. This enterprise-grade solution can intelligently identify and redact personal identifiable information (PII), financial data, legal content, and other sensitive information across large document repositories. The AI engine continuously learns and adapts to recognize new patterns and data types, ensuring comprehensive protection against data breaches and compliance violations. For organizations dealing with legal documents, financial records, or customer data, this tool simplifies the complex process of document sanitization that traditionally required manual review. The automated approach not only reduces human error but also scales to handle thousands of documents efficiently, making compliance with regulations like GDPR, HIPAA, and SOX more manageable for businesses of all sizes.",
    toolUrl: "https://www.foxit.com/smart-redact-server/",
    category: "Deployment",
    tags: ["Document Security", "AI Redaction", "Compliance", "Enterprise", "Privacy"],
    createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
    rating: 4.5,
    popularity: 78
  },
  {
    id: "8",
    title: "Model Context Protocol (MCP): Open Standard for LLM Integrations",
    thumbnailUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=200&fit=crop",
    content: "Model Context Protocol (MCP) establishes a universal standard for connecting Large Language Models (LLMs) with external data sources, tools, and services, eliminating the need for custom integrations for each AI platform. This open protocol enables seamless interoperability between different AI models and enterprise systems, databases, APIs, and business applications. MCP simplifies the deployment of AI solutions by providing standardized methods for context sharing, tool calling, and data access across different AI platforms. For developers and organizations, this means reduced development time, improved reliability, and easier maintenance of AI integrations. The protocol's open nature ensures vendor independence and promotes innovation in the AI ecosystem by allowing different tools and services to work together seamlessly, regardless of the underlying AI model or platform being used.",
    toolUrl: "https://modelcontextprotocol.io",
    category: "Deployment",
    tags: ["Protocol", "LLM Integration", "Open Standard", "Interoperability", "AI Infrastructure"],
    createdAt: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000),
    rating: 4.4,
    popularity: 82
  },
  {
    id: "9",
    title: "Lecca.io: No-Code AI Agent Deployment Platform",
    thumbnailUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=200&fit=crop",
    content: "Lecca.io democratizes AI agent deployment by providing a comprehensive no-code platform that enables anyone to create, deploy, and manage AI-powered automation workflows without programming knowledge. The platform offers drag-and-drop interfaces for building complex AI agents that can handle customer service, data processing, content creation, and business process automation. Users can connect various AI models, APIs, and services through visual workflows, making sophisticated automation accessible to business users, entrepreneurs, and small teams. The platform's strength lies in its extensive library of pre-built templates and integrations with popular business tools, allowing rapid deployment of functional AI agents. For organizations looking to implement AI automation without significant technical investment, Lecca.io provides a pathway to leverage advanced AI capabilities while maintaining full control over deployment and customization.",
    toolUrl: "https://lecca.io",
    category: "Deployment",
    tags: ["No-Code", "AI Agents", "Automation", "Workflow", "Business Process"],
    createdAt: new Date(Date.now() - 9 * 24 * 60 * 60 * 1000),
    rating: 4.6,
    popularity: 86
  },
  {
    id: "10",
    title: "PixelYatra by Appy Pie: India's First Hindi AI Design Tool",
    thumbnailUrl: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?w=400&h=200&fit=crop",
    content: "PixelYatra by Appy Pie breaks language barriers in design technology by offering India's first comprehensive AI-powered design tool that operates in Hindi and other regional languages. This groundbreaking platform enables users to create professional graphics, logos, social media content, and marketing materials using natural language prompts in their native language. The tool understands cultural context and local design preferences, making it particularly valuable for Indian businesses, educators, and content creators who want to leverage AI design capabilities without language constraints. Beyond language support, PixelYatra offers extensive templates tailored to Indian festivals, cultural events, and business contexts. For the vast Hindi-speaking population, this tool represents a significant democratization of design technology, enabling creative expression and professional design work without the need to navigate English-only interfaces or translate creative concepts.",
    toolUrl: "https://www.appypie.com/design/pixelyatra",
    category: "Design",
    tags: ["AI Design", "Hindi", "Regional Language", "Cultural Context", "Accessibility"],
    createdAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000),
    rating: 4.7,
    popularity: 89
  },
  {
    id: "11",
    title: "Canva Magic Studio: AI-Driven Design Enhancement Suite",
    thumbnailUrl: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=200&fit=crop",
    content: "Canva Magic Studio elevates the popular design platform with a comprehensive suite of AI-powered tools that transform how creators approach design challenges. This enhanced platform includes Magic Write for AI-generated copy, Magic Eraser for seamless object removal, Magic Edit for intelligent image manipulation, and Magic Expand for extending image boundaries naturally. The studio's strength lies in its integration of multiple AI capabilities within a familiar interface, allowing users to access advanced features without learning new tools. For creative professionals and beginners alike, Magic Studio streamlines the design process by automating time-consuming tasks like background removal, text generation, and image enhancement. The platform's ability to understand design context and suggest improvements makes it an invaluable learning tool, helping users understand design principles while creating professional-quality content efficiently.",
    toolUrl: "https://www.canva.com/magic-studio/",
    category: "Design",
    tags: ["AI Design", "Creative Suite", "Image Editing", "Content Creation", "Automation"],
    createdAt: new Date(Date.now() - 11 * 24 * 60 * 60 * 1000),
    rating: 4.8,
    popularity: 94
  },
  {
    id: "12",
    title: "Adobe Firefly: Enterprise-Grade AI Creative Assistant",
    thumbnailUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=200&fit=crop",
    content: "Adobe Firefly represents the integration of generative AI into professional creative workflows, offering enterprise-grade AI tools for image generation, text effects, and creative asset creation. Built with commercial safety in mind, Firefly is trained on Adobe Stock images and public domain content, ensuring generated assets are safe for commercial use. The platform excels in creating high-quality images from text descriptions, generating variations of existing designs, and producing text effects that seamlessly integrate with other Adobe Creative Suite applications. For creative professionals, Firefly accelerates ideation and concept development while maintaining the quality standards expected in professional environments. The tool's integration with Photoshop, Illustrator, and other Adobe applications creates a seamless workflow that enhances rather than replaces traditional creative skills, making it an ideal tool for both learning and professional application.",
    toolUrl: "https://firefly.adobe.com",
    category: "Design",
    tags: ["AI Art", "Creative Suite", "Commercial Safe", "Professional", "Integration"],
    createdAt: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000),
    rating: 4.6,
    popularity: 88
  }
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
                placeholder="Search blogss..."
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
