"use client";
import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import {
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Clock,
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
  CheckCircle,
  Briefcase,
  Zap,
} from "lucide-react";

import blogsData from "./blogData.json";

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

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [expandedCards, setExpandedCards] = useState(new Set());
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Process blogs data
  useEffect(() => {
    const processedBlogs = blogsData.map((blog) => ({
      ...blog,
      createdAt: new Date(blog.createdAt),
    }));
    setBlogs(processedBlogs);
  }, []);

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
            tag.toLowerCase().includes(searchTerm.toLowerCase())
          );

        const matchesCategory =
          selectedCategory === "all" || blog.category === selectedCategory;

        return matchesSearch && matchesCategory;
      })
      .sort((a, b) => {
        const popularityDiff = (b.popularity || 0) - (a.popularity || 0);
        if (Math.abs(popularityDiff) > 10) return popularityDiff;
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
  }, [blogs, searchTerm, selectedCategory]);

  // Check if blog is new (within last 7 days)
  const isNewBlog = (timestamp) => {
    const blogDate = new Date(timestamp);
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    return blogDate > sevenDaysAgo;
  };

  // Toggle card expansion
  const toggleExpanded = (blogId) => {
    setExpandedCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(blogId)) {
        newSet.delete(blogId);
      } else {
        newSet.add(blogId);
      }
      return newSet;
    });
  };

  // Format date
  const formatDate = (date) => {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(new Date(date));
  };

  // Get preview text
  const getPreviewText = (content, maxLength = 150) => {
    if (content.length <= maxLength) return content;
    return content.substring(0, maxLength).trim() + "...";
  };

  // Handle category selection
  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
    setIsMobileMenuOpen(false);
  };

  // Get current category info
  const currentCategory = categoriesWithCounts.find(
    (cat) => cat.id === selectedCategory
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* SEO Meta Tags would go in the parent page/layout */}

      {/* Desktop Sidebar */}
      <aside className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-50 lg:block lg:w-80 lg:overflow-y-auto lg:bg-white lg:border-r lg:border-gray-200">
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
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                id="desktop-search"
                type="search"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
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
                >
                  <div className="flex items-center">
                    <Icon className={`w-5 h-5 mr-3 ${isActive ? category.color : "text-gray-500"}`} />
                    <span className="text-sm">{category.name}</span>
                  </div>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      isActive
                        ? "bg-white/70 text-gray-700"
                        : "bg-gray-200 text-gray-600"
                    }`}
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
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Search */}
        <div className="px-4 pb-4">
          <label htmlFor="mobile-search" className="sr-only">
            Search articles
          </label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              id="mobile-search"
              type="search"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
              aria-label="Search articles"
            />
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="fixed left-0 top-0 bottom-0 w-80 bg-white shadow-xl overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">Categories</h2>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-100"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
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
                    >
                      <div className="flex items-center">
                        <Icon className={`w-5 h-5 mr-3 ${isActive ? category.color : "text-gray-500"}`} />
                        <span className="text-sm">{category.name}</span>
                      </div>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          isActive
                            ? "bg-white/70 text-gray-700"
                            : "bg-gray-200 text-gray-600"
                        }`}
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
      <main className="lg:pl-80">
        <div className="px-4 lg:px-8 py-8 max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  {currentCategory?.name || "All Articles"}
                </h2>
                <p className="text-gray-600">
                  {filteredBlogs.length} article{filteredBlogs.length !== 1 ? "s" : ""} found
                  {searchTerm && ` for "${searchTerm}"`}
                </p>
              </div>
            </div>
          </div>

          {/* Blog Cards Grid */}
          {filteredBlogs.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                No articles found
              </h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your search or browse different categories.
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                }}
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredBlogs.map((blog) => {
                const isExpanded = expandedCards.has(blog.id);
                const isNew = isNewBlog(blog.createdAt);

                return (
                  <article
                    key={blog.id}
                    className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden group"
                  >
                    {/* Thumbnail */}
                    <div className="relative h-48 bg-gray-100 overflow-hidden">
                      <Image
                        src={blog.thumbnail}
                        alt={blog.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        priority={false}
                      />

                      {/* Badges */}
                      <div className="absolute top-3 left-3 flex gap-2">
                        {isNew && (
                          <span className="px-2.5 py-1 bg-green-500 text-white text-xs font-medium rounded-full flex items-center shadow-sm">
                            <Sparkles className="w-3 h-3 mr-1" />
                            New
                          </span>
                        )}
                        {blog.rating && (
                          <span className="px-2.5 py-1 bg-gray-900 text-white text-xs font-medium rounded-full flex items-center shadow-sm">
                            <Star className="w-3 h-3 mr-1 fill-current" />
                            {blog.rating}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                        {blog.title}
                      </h3>

                      {/* Meta Info */}
                      <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1.5" />
                          <time dateTime={blog.createdAt.toISOString()}>
                            {formatDate(blog.createdAt)}
                          </time>
                        </div>
                        {blog.popularity && (
                          <div className="flex items-center">
                            <TrendingUp className="w-4 h-4 mr-1.5" />
                            {blog.popularity}%
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
                          {blog.tags.slice(0, 3).map((tag, index) => (
                            <button
                              key={index}
                              onClick={() => setSearchTerm(tag)}
                              className="inline-flex items-center px-2.5 py-1 bg-gray-100 text-gray-700 text-xs rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors"
                              aria-label={`Filter by ${tag}`}
                            >
                              <Tag className="w-3 h-3 mr-1" />
                              {tag}
                            </button>
                          ))}
                          {blog.tags.length > 3 && (
                            <span className="inline-flex items-center px-2.5 py-1 bg-gray-100 text-gray-500 text-xs rounded-full">
                              +{blog.tags.length - 3}
                            </span>
                          )}
                        </div>
                      )}

                      {/* Actions */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <button
                          onClick={() => toggleExpanded(blog.id)}
                          className="flex items-center text-sm text-gray-600 hover:text-blue-600 transition-colors font-medium"
                          aria-expanded={isExpanded}
                          aria-label={isExpanded ? "Show less" : "Read more"}
                        >
                          {isExpanded ? (
                            <>
                              <ChevronUp className="w-4 h-4 mr-1" />
                              Show Less
                            </>
                          ) : (
                            <>
                              <ChevronDown className="w-4 h-4 mr-1" />
                              Read More
                            </>
                          )}
                        </button>

                        <a
                          href={blog.toolUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                          aria-label={`Visit ${blog.title} (opens in new tab)`}
                        >
                          Visit Tool
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </a>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Blog;