"use client";
import React, { useState, useEffect, useCallback, useMemo } from "react";
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
  Users,
  Sparkles,
  Bot,
  Code,
  Palette,
  Cloud,
} from "lucide-react";

import blogsData from "./blogs.json"
import { categories } from "./categories.js"


const TechToolsBlog = () => {
  const [blogs, setBlogs] = useState(blogsData);
  const [loading, setLoading] = useState(false);
  const [expandedCards, setExpandedCards] = useState(new Set());
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Process dates from JSON strings to Date objects
  useEffect(() => {
    const processedBlogs = blogsData.map(blog => ({
      ...blog,
      createdAt: new Date(blog.createdAt)
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
          <div className="mt-8 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-4">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">
              Platform Stats
            </h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-600">Total Tools</span>
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
                  {blogs.filter(blog => isNewBlog(blog.createdAt)).length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Header */}
      <header className="lg:hidden bg-white/80 backdrop-blur-xl border-b border-gray-200 sticky top-0 z-40">
        <div className="px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Blogs Tech Hub
            </h1>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="menu-button p-2 rounded-lg hover:bg-gray-100 transition-colors"
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
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search tools..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/50"
            />
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="mobile-menu fixed left-0 top-0 bottom-0 w-80 bg-white shadow-xl">
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-lg font-semibold">Categories</h2>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="space-y-2">
                {categoriesWithCounts.map((category) => {
                  const Icon = category.icon;
                  const isActive = selectedCategory === category.id;

                  return (
                    <button
                      key={category.id}
                      onClick={() => handleCategorySelect(category.id)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 ${
                        isActive
                          ? `${category.bgColor} shadow-lg`
                          : "hover:bg-gray-50"
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
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="lg:pl-72">
        <div className="px-4 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  {currentCategory?.name || "All Tools"}
                </h2>
                <p className="text-gray-600">
                  {filteredBlogs.length} tools found
                  {searchTerm && ` for "${searchTerm}"`}
                </p>
              </div>
              {selectedCategory !== "all" && (
                <div className="hidden lg:flex items-center">
                  <div
                    className={`flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${currentCategory?.color} text-white shadow-lg`}
                  >
                    {currentCategory?.icon && (
                      <currentCategory.icon className="w-4 h-4 mr-2" />
                    )}
                    <span className="font-medium">{currentCategory?.name}</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Blog Cards Grid */}
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          ) : filteredBlogs.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                No tools found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search terms or category filter.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredBlogs.map((blog) => {
                const isExpanded = expandedCards.has(blog.id);
                const isNew = isNewBlog(blog.createdAt);

                return (
                  <article
                    key={blog.id}
                    className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                  >
                    {/* Thumbnail */}
                    <div className="relative overflow-hidden rounded-t-2xl">
                      <img
                        src={blog.thumbnailUrl}
                        alt={blog.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          e.target.src = `https://via.placeholder.com/400x200/6366f1/ffffff?text=${encodeURIComponent(blog.title.substring(0, 20))}`;
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Badges */}
                      <div className="absolute top-3 left-3 flex gap-2">
                        {isNew && (
                          <span className="px-2 py-1 bg-green-500 text-white text-xs font-medium rounded-full flex items-center">
                            <Sparkles className="w-3 h-3 mr-1" />
                            New
                          </span>
                        )}
                        {blog.rating && (
                          <span className="px-2 py-1 bg-black/70 text-white text-xs font-medium rounded-full flex items-center">
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
                          <Clock className="w-4 h-4 mr-1" />
                          {formatDate(blog.createdAt)}
                        </div>
                        {blog.popularity && (
                          <div className="flex items-center">
                            <TrendingUp className="w-4 h-4 mr-1" />
                            {blog.popularity}% popular
                          </div>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {isExpanded ? blog.content : getPreviewText(blog.content)}
                      </p>

                      {/* Tags */}
                      {blog.tags && blog.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {blog.tags.slice(0, 3).map((tag, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full hover:bg-blue-100 hover:text-blue-600 transition-colors cursor-pointer"
                              onClick={() => setSearchTerm(tag)}
                            >
                              {tag}
                            </span>
                          ))}
                          {blog.tags.length > 3 && (
                            <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-full">
                              +{blog.tags.length - 3} more
                            </span>
                          )}
                        </div>
                      )}

                      {/* Actions */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <button
                          onClick={() => toggleExpanded(blog.id)}
                          className="flex items-center text-sm text-gray-500 hover:text-blue-600 transition-colors"
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
                          className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                        >
                          Visit Tool
                          <ExternalLink className="w-4 h-4 ml-2" />
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

export default TechToolsBlog;