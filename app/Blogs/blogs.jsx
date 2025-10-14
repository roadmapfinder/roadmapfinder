"use client";

import React, { useState, useMemo } from "react";
import {
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Search,
  Filter,
  Clock,
  Calendar,
  Tag,
  X,
} from "lucide-react";
import { blogsData, getAllCategories } from "./blogData";

const BlogCard = ({ blog, expanded, onToggle }) => {
  const getCategoryColor = (category) => {
    const colors = {
      "AI/ML": "bg-purple-50 text-purple-700 border-purple-200",
      Backend: "bg-blue-50 text-blue-700 border-blue-200",
      Frontend: "bg-pink-50 text-pink-700 border-pink-200",
      Database: "bg-green-50 text-green-700 border-green-200",
      Security: "bg-red-50 text-red-700 border-red-200",
      DevOps: "bg-orange-50 text-orange-700 border-orange-200",
      Performance: "bg-yellow-50 text-yellow-700 border-yellow-200",
    };
    return colors[category] || "bg-gray-50 text-gray-700 border-gray-200";
  };

  return (
    <article
      className="group bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden"
      itemScope
      itemType="https://schema.org/BlogPosting"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          loading="lazy"
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          itemProp="image"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Content */}
      <div className="flex-1 p-5 flex flex-col justify-between">
        <div>
          {/* Meta */}
          <div className="flex items-center justify-between mb-3">
            <span
              className={`text-xs font-medium border rounded-full px-3 py-1 ${getCategoryColor(
                blog.category
              )}`}
            >
              {blog.category}
            </span>
            <span className="text-xs text-gray-500 flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {blog.readTime}
            </span>
          </div>

          {/* Title */}
          <h2
            className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition"
            itemProp="headline"
          >
            {blog.title}
          </h2>

          {/* Short Description */}
          <p className="text-gray-600 text-sm mb-3" itemProp="description">
            {blog.shortDescription}
          </p>

          {/* Full Description */}
          {expanded && (
            <div
              className="border-t border-gray-100 pt-3 text-gray-600 text-sm animate-fadeIn"
              itemProp="articleBody"
            >
              {blog.fullDescription}
            </div>
          )}

          {/* Tags */}
          {blog.tags && blog.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-3">
              {blog.tags.map((tag, i) => (
                <span
                  key={i}
                  className="inline-flex items-center text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition"
                >
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Bottom Section */}
        <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3">
          <button
            onClick={onToggle}
            className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-blue-600 transition"
          >
            {expanded ? (
              <>
                <ChevronUp size={16} />
                Read Less
              </>
            ) : (
              <>
                <ChevronDown size={16} />
                Read More
              </>
            )}
          </button>

          <a
            href={blog.toolLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700 transition"
          >
            Visit Tool
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </article>
  );
};

export default function Blogs() {
  const [expanded, setExpanded] = useState({});
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  const categories = ["All", ...getAllCategories()];

  const filteredBlogs = useMemo(() => {
    let list = blogsData;
    if (category !== "All") list = list.filter((b) => b.category === category);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (b) =>
          b.title.toLowerCase().includes(q) ||
          b.shortDescription.toLowerCase().includes(q) ||
          b.author.toLowerCase().includes(q) ||
          b.tags?.some((t) => t.toLowerCase().includes(q))
      );
    }
    return list;
  }, [search, category]);

  const toggleExpand = (id) =>
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));

  const clearFilters = () => {
    setSearch("");
    setCategory("All");
  };

  const hasFilters = search || category !== "All";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Header */}
      <header className="text-center py-12 px-4 border-b border-gray-200 bg-white shadow-sm">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
          Developer <span className="text-blue-600">Blog</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore the latest trends, tools, and frameworks transforming modern
          development.
        </p>
      </header>

      {/* Search + Filters */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-5">
        <div className="bg-white border border-gray-200 shadow-sm rounded-2xl p-5">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="search"
                placeholder="Search by title, author, or tags..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center justify-center gap-2 px-4 py-3 border border-gray-200 rounded-lg bg-gray-50 hover:bg-gray-100"
            >
              <Filter className="w-4 h-4" />
              Filters
              {showFilters ? <ChevronUp /> : <ChevronDown />}
            </button>
          </div>

          {/* Categories */}
          <div
            className={`${showFilters ? "block" : "hidden"} lg:block mt-5 pt-5 border-t border-gray-200`}
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-gray-700 uppercase">
                Categories
              </h3>
              {hasFilters && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700"
                >
                  <X size={16} />
                  Clear All
                </button>
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                    category === cat
                      ? "bg-blue-600 text-white shadow-sm"
                      : "bg-gray-50 hover:bg-gray-100 text-gray-700"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid - 3 cards per row */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-20">
        {filteredBlogs.length ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredBlogs.map((blog) => (
              <BlogCard
                key={blog.id}
                blog={blog}
                expanded={expanded[blog.id]}
                onToggle={() => toggleExpand(blog.id)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="inline-flex w-16 h-16 items-center justify-center rounded-full bg-gray-100 mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No articles found
            </h3>
            <p className="text-gray-600 mb-6">
              Try changing your search or category filters.
            </p>
            <button
              onClick={clearFilters}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>

      <footer className="bg-white border-t border-gray-200 py-10 text-center">
        <p className="text-gray-500">
          © {new Date().getFullYear()} Developer Tools Blog — Built with ❤️ using
          Next.js
        </p>
      </footer>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
