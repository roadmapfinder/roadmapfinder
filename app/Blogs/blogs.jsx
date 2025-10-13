"use client";
import React, { useState, useEffect, useMemo, useCallback, useRef } from "react";
import Image from "next/image";
import {
  ChevronDown,
  ChevronUp,
  Search,
  Menu,
  X,
  Star,
  TrendingUp,
  Tag,
  Calendar,
  ArrowRight,
  Sparkles,
  Bot,
  Code,
  Palette,
  Cloud,
  Layout,
  Briefcase,
  Zap,
  AlertCircle,
  Loader2,
} from "lucide-react";

import blogsData from "./blogData.json";

// Constants
const NEW_BLOG_DAYS = 7;
const POPULARITY_THRESHOLD = 10;
const PREVIEW_LENGTH = 150;
const SEARCH_DEBOUNCE_MS = 300;
const BLOGS_PER_PAGE = 9;
const MAX_VISIBLE_TAGS = 3;

// Category configuration
const categories = [
  { id: "all", name: "All Articles", icon: Layout, color: "text-blue-600", bgColor: "bg-blue-50" },
  { id: "AI", name: "AI & Machine Learning", icon: Bot, color: "text-purple-600", bgColor: "bg-purple-50" },
  { id: "Development", name: "Development", icon: Code, color: "text-green-600", bgColor: "bg-green-50" },
  { id: "Design", name: "Design", icon: Palette, color: "text-pink-600", bgColor: "bg-pink-50" },
  { id: "Deployment", name: "Deployment", icon: Cloud, color: "text-orange-600", bgColor: "bg-orange-50" },
  { id: "UI/UX", name: "UI/UX", icon: Layout, color: "text-indigo-600", bgColor: "bg-indigo-50" },
  { id: "Project Management", name: "Project Management", icon: Briefcase, color: "text-teal-600", bgColor: "bg-teal-50" },
  { id: "Productivity", name: "Productivity", icon: Zap, color: "text-yellow-600", bgColor: "bg-yellow-50" },
];

// Utility functions (memoized outside component)
const isValidDate = (date) => {
  const parsed = new Date(date);
  return !isNaN(parsed.getTime());
};

const validateBlog = (blog) => {
  return {
    id: blog.id || `blog-${Date.now()}-${Math.random()}`,
    title: blog.title || "Untitled",
    content: blog.content || "",
    thumbnail: blog.thumbnail || "/placeholder-image.jpg",
    toolUrl: blog.toolUrl || "#",
    category: blog.category || "Development",
    tags: Array.isArray(blog.tags) ? blog.tags : [],
    createdAt: isValidDate(blog.createdAt) ? new Date(blog.createdAt) : new Date(),
    popularity: typeof blog.popularity === "number" ? blog.popularity : 0,
    rating: blog.rating || null,
    readTime: blog.readTime || null,
    author: blog.author || "Anonymous",
  };
};

const pluralize = (count, singular, plural = `${singular}s`) => {
  return count === 1 ? singular : plural;
};

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Blog Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
          <div className="text-center max-w-md">
            <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Something went wrong
            </h2>
            <p className="text-gray-600 mb-4">
              We encountered an error loading the blog. Please refresh the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Image with error handling
const BlogImage = ({ src, alt, ...props }) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  if (error) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-200">
        <div className="text-center p-4">
          <AlertCircle className="w-8 h-8 text-gray-400 mx-auto mb-2" />
          <p className="text-sm text-gray-500">Image unavailable</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <Loader2 className="w-8 h-8 text-gray-400 animate-spin" />
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        onError={() => setError(true)}
        onLoad={() => setLoading(false)}
        {...props}
      />
    </>
  );
};

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [expandedCards, setExpandedCards] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const searchTimeoutRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const mobileMenuButtonRef = useRef(null);

  // Process blogs data with validation
  useEffect(() => {
    try {
      setIsLoading(true);
      const processedBlogs = blogsData.map(validateBlog);
      setBlogs(processedBlogs);
      setError(null);
    } catch (err) {
      console.error("Error processing blogs:", err);
      setError("Failed to load blog posts. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Debounced search
  useEffect(() => {
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    searchTimeoutRef.current = setTimeout(() => {
      setDebouncedSearch(searchTerm);
      setCurrentPage(1);
    }, SEARCH_DEBOUNCE_MS);

    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
    };
  }, [searchTerm]);

  // Body scroll lock for mobile menu
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Focus trap for mobile menu
  useEffect(() => {
    if (!isMobileMenuOpen || !mobileMenuRef.current) return;

    const focusableElements = mobileMenuRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleTab = (e) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener("keydown", handleTab);
    firstElement?.focus();

    return () => {
      document.removeEventListener("keydown", handleTab);
    };
  }, [isMobileMenuOpen]);

  // Memoized utility functions
  const isNewBlog = useCallback((timestamp) => {
    const blogDate = new Date(timestamp);
    const daysAgo = new Date();
    daysAgo.setDate(daysAgo.getDate() - NEW_BLOG_DAYS);
    return blogDate > daysAgo;
  }, []);

  const formatDate = useCallback((date) => {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(new Date(date));
  }, []);

  const getPreviewText = useCallback((content, maxLength = PREVIEW_LENGTH) => {
    if (!content) return "";
    if (content.length <= maxLength) return content;
    return content.substring(0, maxLength).trim() + "...";
  }, []);

  // Update category counts with optimized filtering
  const categoriesWithCounts = useMemo(() => {
    const categoryCounts = blogs.reduce((acc, blog) => {
      acc[blog.category] = (acc[blog.category] || 0) + 1;
      return acc;
    }, {});

    return categories.map((cat) => ({
      ...cat,
      count: cat.id === "all" ? blogs.length : categoryCounts[cat.id] || 0,
    }));
  }, [blogs]);

  // Optimized filtering and search
  const filteredBlogs = useMemo(() => {
    return blogs
      .filter((blog) => {
        const matchesSearch =
          !debouncedSearch ||
          blog.title.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
          blog.content.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
          blog.tags?.some((tag) =>
            tag.toLowerCase().includes(debouncedSearch.toLowerCase())
          ) ||
          blog.author?.toLowerCase().includes(debouncedSearch.toLowerCase());

        const matchesCategory =
          selectedCategory === "all" || blog.category === selectedCategory;

        return matchesSearch && matchesCategory;
      })
      .sort((a, b) => {
        const popularityDiff = (b.popularity || 0) - (a.popularity || 0);
        if (Math.abs(popularityDiff) > POPULARITY_THRESHOLD) return popularityDiff;
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
  }, [blogs, debouncedSearch, selectedCategory]);

  // Pagination
  const paginatedBlogs = useMemo(() => {
    const startIndex = (currentPage - 1) * BLOGS_PER_PAGE;
    const endIndex = startIndex + BLOGS_PER_PAGE;
    return filteredBlogs.slice(startIndex, endIndex);
  }, [filteredBlogs, currentPage]);

  const totalPages = Math.ceil(filteredBlogs.length / BLOGS_PER_PAGE);

  // Event handlers
  const toggleExpanded = useCallback((blogId) => {
    setExpandedCards((prev) => {
      if (prev.includes(blogId)) {
        return prev.filter((id) => id !== blogId);
      }
      return [...prev, blogId];
    });
  }, []);

  const handleCategorySelect = useCallback((categoryId) => {
    setSelectedCategory(categoryId);
    setIsMobileMenuOpen(false);
    setCurrentPage(1);
  }, []);

  const handleSearchChange = useCallback((e) => {
    setSearchTerm(e.target.value);
  }, []);

  const handleTagClick = useCallback((tag) => {
    setSearchTerm(tag);
    setCurrentPage(1);
  }, []);

  const handleClearFilters = useCallback(() => {
    setSearchTerm("");
    setSelectedCategory("all");
    setCurrentPage(1);
  }, []);

  const handleMobileMenuToggle = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  const handlePageChange = useCallback((page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const currentCategory = categoriesWithCounts.find(
    (cat) => cat.id === selectedCategory
  );

  // Generate structured data for SEO
  const structuredData = useMemo(() => {
    return {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "Tech Blog",
      description: "Insights, tutorials, and industry news",
      blogPost: paginatedBlogs.map((blog) => ({
        "@type": "BlogPosting",
        headline: blog.title,
        description: getPreviewText(blog.content),
        image: blog.thumbnail,
        datePublished: blog.createdAt.toISOString(),
        author: {
          "@type": "Person",
          name: blog.author,
        },
        keywords: blog.tags?.join(", "),
      })),
    };
  }, [paginatedBlogs, getPreviewText]);

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Error Loading Blogs</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50">
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        {/* Desktop Sidebar */}
        <aside
          className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-50 lg:block lg:w-80 lg:overflow-y-auto lg:bg-white lg:border-r lg:border-gray-200"
          role="complementary"
          aria-label="Blog navigation"
        >
          <div className="px-6 py-8">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-gray-900">Tech Blog</h1>
              <p className="text-sm text-gray-600 mt-2">
                Insights, tutorials, and industry news
              </p>
            </div>

            {/* Search */}
            <div className="mb-8">
              <label htmlFor="desktop-search" className="sr-only">
                Search articles
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" aria-hidden="true" />
                <input
                  id="desktop-search"
                  type="search"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-500"
                  aria-label="Search articles"
                />
              </div>
            </div>

            {/* Categories */}
            <nav className="space-y-1" aria-label="Blog categories">
              <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4 px-3">
                Categories
              </h2>
              {categoriesWithCounts.map((category) => {
                const Icon = category.icon;
                const isActive = selectedCategory === category.id;

                return (
                  <button
                    key={category.id}
                    onClick={() => handleCategorySelect(category.id)}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg transition-all duration-200 ${
                      isActive
                        ? `${category.bgColor} ${category.color} font-medium`
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                    aria-label={`${category.name}, ${category.count} ${pluralize(category.count, "article")}`}
                  >
                    <div className="flex items-center">
                      <Icon className={`w-5 h-5 mr-3 ${isActive ? category.color : "text-gray-500"}`} aria-hidden="true" />
                      <span className="text-sm">{category.name}</span>
                    </div>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        isActive
                          ? "bg-white/70 text-gray-700"
                          : "bg-gray-200 text-gray-600"
                      }`}
                      aria-hidden="true"
                    >
                      {category.count}
                    </span>
                  </button>
                );
              })}
            </nav>

            {/* Stats */}
            <div className="mt-8 bg-blue-50 rounded-lg p-4 border border-blue-100">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">
                Blog Statistics
              </h3>
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-600">Total Articles</span>
                  <span className="text-sm font-bold text-gray-900">
                    {blogs.length}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-600">Categories</span>
                  <span className="text-sm font-bold text-gray-900">
                    {categories.length - 1}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-600">New This Week</span>
                  <span className="text-sm font-bold text-blue-600">
                    {blogs.filter((blog) => isNewBlog(blog.createdAt)).length}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Mobile Header */}
        <header className="lg:hidden bg-white border-b border-gray-200 sticky top-0 z-40">
          <div className="px-4 py-4 flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-gray-900">Tech Blog</h1>
            </div>
            <button
              ref={mobileMenuButtonRef}
              onClick={handleMobileMenuToggle}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-600" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6 text-gray-600" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Mobile Search */}
          <div className="px-4 pb-4">
            <label htmlFor="mobile-search" className="sr-only">
              Search articles
            </label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" aria-hidden="true" />
              <input
                id="mobile-search"
                type="search"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                aria-label="Search articles"
              />
            </div>
          </div>
        </header>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50"
            onClick={handleMobileMenuToggle}
            aria-hidden="true"
          >
            <div
              id="mobile-menu"
              ref={mobileMenuRef}
              className="fixed left-0 top-0 bottom-0 w-80 bg-white shadow-xl overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile menu"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold text-gray-900">Categories</h2>
                  <button
                    onClick={handleMobileMenuToggle}
                    className="p-2 rounded-lg hover:bg-gray-100"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" aria-hidden="true" />
                  </button>
                </div>

                <nav className="space-y-1" aria-label="Blog categories">
                  {categoriesWithCounts.map((category) => {
                    const Icon = category.icon;
                    const isActive = selectedCategory === category.id;

                    return (
                      <button
                        key={category.id}
                        onClick={() => handleCategorySelect(category.id)}
                        className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg transition-all ${
                          isActive
                            ? `${category.bgColor} ${category.color} font-medium`
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                        aria-current={isActive ? "page" : undefined}
                        aria-label={`${category.name}, ${category.count} ${pluralize(category.count, "article")}`}
                      >
                        <div className="flex items-center">
                          <Icon className={`w-5 h-5 mr-3 ${isActive ? category.color : "text-gray-500"}`} aria-hidden="true" />
                          <span className="text-sm">{category.name}</span>
                        </div>
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            isActive
                              ? "bg-white/70 text-gray-700"
                              : "bg-gray-200 text-gray-600"
                          }`}
                          aria-hidden="true"
                        >
                          {category.count}
                        </span>
                      </button>
                    );
                  })}
                </nav>
              </div>
            </div>
          </div>
        )}

        {/* Main Content */}
        <main className="lg:pl-80" role="main">
          <div className="px-4 lg:px-8 py-8 max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    {currentCategory?.name || "All Articles"}
                  </h2>
                  <p className="text-gray-600">
                    {filteredBlogs.length} {pluralize(filteredBlogs.length, "article")} found
                    {searchTerm && ` for "${searchTerm}"`}
                  </p>
                </div>
              </div>
            </div>

            {/* Loading State */}
            {isLoading ? (
              <div className="flex flex-col items-center justify-center py-16">
                <Loader2 className="w-12 h-12 text-blue-600 animate-spin mb-4" />
                <p className="text-gray-600">Loading articles...</p>
              </div>
            ) : filteredBlogs.length === 0 ? (
              /* Empty State */
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-gray-400" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  No articles found
                </h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your search or browse different categories.
                </p>
                <button
                  onClick={handleClearFilters}
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <>
                {/* Blog Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
                  {paginatedBlogs.map((blog) => {
                    const isExpanded = expandedCards.includes(blog.id);
                    const isNew = isNewBlog(blog.createdAt);

                    return (
                      <article
                        key={blog.id}
                        className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden group"
                        aria-labelledby={`blog-title-${blog.id}`}
                      >
                        {/* Thumbnail */}
                        <div className="relative h-48 bg-gray-100 overflow-hidden">
                          <BlogImage
                            src={blog.thumbnail}
                            alt={`Thumbnail for ${blog.title}`}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            priority={false}
                          />

                          {/* Badges */}
                          <div className="absolute top-3 left-3 flex gap-2">
                            {isNew && (
                              <span className="px-2.5 py-1 bg-green-500 text-white text-xs font-medium rounded-full flex items-center shadow-sm">
                                <Sparkles className="w-3 h-3 mr-1" aria-hidden="true" />
                                New
                              </span>
                            )}
                            {blog.rating && (
                              <span className="px-2.5 py-1 bg-gray-900 text-white text-xs font-medium rounded-full flex items-center shadow-sm">
                                <Star className="w-3 h-3 mr-1 fill-current" aria-hidden="true" />
                                {blog.rating}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                          {/* Title */}
                          <h3
                            id={`blog-title-${blog.id}`}
                            className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors"
                          >
                            {blog.title}
                          </h3>

                          {/* Meta Info */}
                          <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1.5" aria-hidden="true" />
                              <time dateTime={blog.createdAt.toISOString()}>
                                {formatDate(blog.createdAt)}
                              </time>
                            </div>
                            {blog.popularity > 0 && (
                              <div className="flex items-center">
                                <TrendingUp className="w-4 h-4 mr-1.5" aria-hidden="true" />
                                <span aria-label={`Popularity: ${blog.popularity} percent`}>
                                  {blog.popularity}%
                                </span>
                              </div>
                            )}
                          </div>

                          {/* Description */}
                          <p className="text-gray-600 mb-4 leading-relaxed">
                            {isExpanded
                              ? blog.content
                              : getPreviewText(blog.content)}
                          </p>

                          {/* Tags */}
                          {blog.tags && blog.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-4">
                              {blog.tags.slice(0, MAX_VISIBLE_TAGS).map((tag, index) => (
                                <button
                                  key={index}
                                  onClick={() => handleTagClick(tag)}
                                  className="inline-flex items-center px-2.5 py-1 bg-gray-100 text-gray-700 text-xs rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
                                  aria-label={`Filter by ${tag}`}
                                >
                                  <Tag className="w-3 h-3 mr-1" aria-hidden="true" />
                                  {tag}
                                </button>
                              ))}
                              {blog.tags.length > MAX_VISIBLE_TAGS && (
                                <span className="inline-flex items-center px-2.5 py-1 bg-gray-100 text-gray-500 text-xs rounded-full">
                                  +{blog.tags.length - MAX_VISIBLE_TAGS}
                                </span>
                              )}
                            </div>
                          )}

                          {/* Actions */}
                          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                            <button
                              onClick={() => toggleExpanded(blog.id)}
                              className="flex items-center text-sm text-gray-600 hover:text-blue-600 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 rounded px-2 py-1"
                              aria-expanded={isExpanded}
                              aria-label={isExpanded ? "Show less content" : "Read more content"}
                            >
                              {isExpanded ? (
                                <>
                                  <ChevronUp className="w-4 h-4 mr-1" aria-hidden="true" />
                                  Show Less
                                </>
                              ) : (
                                <>
                                  <ChevronDown className="w-4 h-4 mr-1" aria-hidden="true" />
                                  Read More
                                </>
                              )}
                            </button>

                            <a
                              href={blog.toolUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                              aria-label={`Visit ${blog.title} (opens in new tab)`}
                            >
                              Visit Tool
                              <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                            </a>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-center gap-2 mt-8" role="navigation" aria-label="Pagination">
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                      aria-label="Previous page"
                    >
                      Previous
                    </button>

                    <div className="flex gap-2">
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                        // Show first page, last page, current page, and pages around current
                        if (
                          page === 1 ||
                          page === totalPages ||
                          (page >= currentPage - 1 && page <= currentPage + 1)
                        ) {
                          return (
                            <button
                              key={page}
                              onClick={() => handlePageChange(page)}
                              className={`px-4 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                currentPage === page
                                  ? "bg-blue-600 text-white"
                                  : "border border-gray-300 text-gray-700 hover:bg-gray-50"
                              }`}
                              aria-label={`Page ${page}`}
                              aria-current={currentPage === page ? "page" : undefined}
                            >
                              {page}
                            </button>
                          );
                        } else if (
                          page === currentPage - 2 ||
                          page === currentPage + 2
                        ) {
                          return (
                            <span key={page} className="px-2 py-2 text-gray-500" aria-hidden="true">
                              ...
                            </span>
                          );
                        }
                        return null;
                      })}
                    </div>

                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                      aria-label="Next page"
                    >
                      Next
                    </button>
                  </div>
                )}

                {/* Results info */}
                <div className="text-center mt-6 text-sm text-gray-600">
                  Showing {(currentPage - 1) * BLOGS_PER_PAGE + 1} to{" "}
                  {Math.min(currentPage * BLOGS_PER_PAGE, filteredBlogs.length)} of{" "}
                  {filteredBlogs.length} {pluralize(filteredBlogs.length, "result")}
                </div>
              </>
            )}
          </div>
        </main>
      </div>
    </ErrorBoundary>
  );
};

export default Blog