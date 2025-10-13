"use client";

import React, { useState, useMemo } from 'react';
import { ChevronDown, ChevronUp, ExternalLink, Search, Filter, Clock, Calendar, Tag, X } from 'lucide-react';
import { blogsData, getAllCategories } from './blogData';

// SEO-optimized Blog Card Component
const BlogCard = ({ blog, expanded, onToggle }) => {
  const getCategoryColor = (category) => {
    const colors = {
      'AI/ML': 'bg-purple-100 text-purple-800 border-purple-200',
      'Backend': 'bg-blue-100 text-blue-800 border-blue-200',
      'Frontend': 'bg-pink-100 text-pink-800 border-pink-200',
      'Database': 'bg-green-100 text-green-800 border-green-200',
      'Security': 'bg-red-100 text-red-800 border-red-200',
      'DevOps': 'bg-orange-100 text-orange-800 border-orange-200',
      'Performance': 'bg-yellow-100 text-yellow-800 border-yellow-200'
    };
    return colors[category] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  return (
    <article 
      className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
      itemScope 
      itemType="https://schema.org/BlogPosting"
    >
      <div className="md:flex">
        {/* Image Section */}
        <div className="md:w-80 flex-shrink-0 relative overflow-hidden group">
          <img 
            src={blog.image} 
            alt={blog.title}
            className="h-full w-full object-cover md:h-full transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
            itemProp="image"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content Section */}
        <div className="flex-1 p-6 lg:p-8 flex flex-col">
          <div className="flex-1">
            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span 
                className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryColor(blog.category)}`}
                itemProp="articleSection"
              >
                {blog.category}
              </span>
              <span className="flex items-center text-sm text-gray-600">
                <Clock className="w-4 h-4 mr-1" />
                <time itemProp="timeRequired">{blog.readTime}</time>
              </span>
              <span className="flex items-center text-sm text-gray-600">
                <Calendar className="w-4 h-4 mr-1" />
                <time dateTime={blog.publishDate} itemProp="datePublished">{blog.date}</time>
              </span>
            </div>

            {/* Title */}
            <h2 
              className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors leading-tight"
              itemProp="headline"
            >
              {blog.title}
            </h2>

            {/* Short Description */}
            <p className="text-gray-700 mb-4 leading-relaxed" itemProp="description">
              {blog.shortDescription}
            </p>

            {/* Full Description - Expandable */}
            {expanded && (
              <div 
                className="prose prose-gray max-w-none mb-6 pt-4 border-t border-gray-200 animate-fadeIn"
                itemProp="articleBody"
              >
                <p className="text-gray-600 leading-relaxed">
                  {blog.fullDescription}
                </p>
              </div>
            )}

            {/* Tags */}
            {blog.tags && blog.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {blog.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="inline-flex items-center text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors"
                    itemProp="keywords"
                  >
                    <Tag className="w-3 h-3 mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Author Info */}
            <div className="flex items-center text-sm text-gray-600 mb-4" itemProp="author" itemScope itemType="https://schema.org/Person">
              <span className="font-medium" itemProp="name">{blog.author}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 flex-wrap pt-4 border-t border-gray-100">
            <button
              onClick={onToggle}
              className="flex items-center gap-2 px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold rounded-lg transition-all duration-200 hover:shadow-md"
              aria-expanded={expanded}
              aria-label={expanded ? 'Read less' : 'Read more'}
            >
              {expanded ? (
                <>
                  <ChevronUp size={18} />
                  Read Less
                </>
              ) : (
                <>
                  <ChevronDown size={18} />
                  Read More
                </>
              )}
            </button>

            <a
              href={blog.toolLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5"
              aria-label={`Visit ${blog.title} tool`}
            >
              Visit Tool
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

// Main Blog Listing Component
export default function Blogs() {
  const [expanded, setExpanded] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showFilters, setShowFilters] = useState(false);

  const categories = ['All', ...getAllCategories()];

  // Filter and search logic
  const filteredBlogs = useMemo(() => {
    let filtered = blogsData;

    // Category filter
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(blog => blog.category === selectedCategory);
    }

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(blog =>
        blog.title.toLowerCase().includes(query) ||
        blog.shortDescription.toLowerCase().includes(query) ||
        blog.author.toLowerCase().includes(query) ||
        blog.tags?.some(tag => tag.toLowerCase().includes(query))
      );
    }

    return filtered;
  }, [searchQuery, selectedCategory]);

  const toggleExpand = (id) => {
    setExpanded(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
  };

  const hasActiveFilters = searchQuery || selectedCategory !== 'All';

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      {/* SEO-optimized Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Developer Tools <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore the latest tools, frameworks, and technologies transforming modern software development
            </p>

            {/* Blog Count */}
            <div className="mt-6 inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
              {filteredBlogs.length} {filteredBlogs.length === 1 ? 'Article' : 'Articles'} Available
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Search and Filter Section */}
        <div className="mb-8 lg:mb-12">
          <div className="bg-white rounded-xl shadow-md p-4 lg:p-6 border border-gray-200">
            {/* Search Bar */}
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="search"
                  placeholder="Search articles by title, author, or tags..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                  aria-label="Search blogs"
                />
              </div>

              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold rounded-lg transition-colors"
                aria-expanded={showFilters}
                aria-label="Toggle filters"
              >
                <Filter size={18} />
                Filters
                {showFilters ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>
            </div>

            {/* Category Filters */}
            <div className={`${showFilters ? 'block' : 'hidden'} lg:block mt-4 pt-4 border-t border-gray-200`}>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Categories</h3>
                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
                    className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700 font-medium"
                  >
                    <X size={16} />
                    Clear All
                  </button>
                )}
              </div>

              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white shadow-md transform scale-105'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    aria-pressed={selectedCategory === category}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results Info */}
        {hasActiveFilters && (
          <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-800">
              {filteredBlogs.length === 0 ? (
                <span className="font-semibold">No articles found matching your criteria. Try adjusting your filters.</span>
              ) : (
                <>
                  Showing <span className="font-semibold">{filteredBlogs.length}</span> {filteredBlogs.length === 1 ? 'article' : 'articles'}
                  {searchQuery && <> matching "<span className="font-semibold">{searchQuery}</span>"</>}
                  {selectedCategory !== 'All' && <> in <span className="font-semibold">{selectedCategory}</span></>}
                </>
              )}
            </p>
          </div>
        )}

        {/* Blog Grid */}
        {filteredBlogs.length > 0 ? (
          <div className="grid gap-6 lg:gap-8">
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
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
            <button
              onClick={clearFilters}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
          <p className="text-gray-600">
            © 2025 Developer Tools Blog. Stay updated with the latest in web development.
          </p>
        </div>
      </footer>

      {/* Custom CSS for animations */}
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
          animation: fadeIn 0.3s ease-out;
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        ::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      `}</style>
    </div>
  );
}