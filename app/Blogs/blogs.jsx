"use client"
import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { Search, Calendar, Tag, ArrowRight, Filter, Globe, Smartphone, Palette, Brain, Shield, BarChart3, Video, PenTool, Code, Database } from 'lucide-react';

import aiml from "../Images/aiml.png"
import docker from "../Images/docker.png"
import nextjs from "../Images/nextjs.png"
import graphql from "../Images/graphql.png"
import cyber from "../Images/cyber.png"

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  // Blog categories for sidebar
  const blogCategories = [
    { id: 'web', name: 'Web Development', icon: Globe, color: 'blue', count: 45 },
    { id: 'app', name: 'App Development', icon: Smartphone, color: 'green', count: 32 },
    { id: 'uiux', name: 'UI/UX Design', icon: Palette, color: 'purple', count: 28 },
    { id: 'aiml', name: 'AI & Machine Learning', icon: Brain, color: 'indigo', count: 38 },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'red', count: 24 },
    { id: 'data', name: 'Data Analysis & Science', icon: BarChart3, color: 'cyan', count: 31 },
    { id: 'database', name: 'Database Management', icon: Database, color: 'gray', count: 19 },
    { id: 'video', name: 'Video Editing', icon: Video, color: 'orange', count: 15 },
    { id: 'graphics', name: 'Graphic Design', icon: PenTool, color: 'pink', count: 22 },
    { id: 'devops', name: 'DevOps & Cloud', icon: Code, color: 'teal', count: 27 }
  ];

  // Enhanced blog data with categories
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Web Development",
      summary: "Exploring how artificial intelligence is revolutionizing the way we build and design websites, from automated code generation to intelligent UX optimization.",
      coverImage: aiml,
      tags: ["AI", "WebDev", "Future"],
      category: "aiml",
      publishDate: "2025-05-28",
      readTime: "5 min read",
      author: "Sarah Johnson",
      featured: true
    },
    {
      id: 2,
      title: "Mastering Docker for Modern DevOps",
      summary: "A comprehensive guide to containerization with Docker, covering best practices, security considerations, and deployment strategies for production environments.",
      coverImage: docker,
      tags: ["DevOps", "Docker", "Tools"],
      category: "devops",
      publishDate: "2025-05-26",
      readTime: "8 min read",
      author: "Michael Chen",
      featured: false
    },
    {
      id: 3,
      title: "Next.js 15: What's New and Exciting",
      summary: "Dive into the latest features of Next.js 15, including improved performance optimizations, new routing capabilities, and enhanced developer experience.",
      coverImage: nextjs,
      tags: ["WebDev", "NextJS", "React"],
      category: "web",
      publishDate: "2025-05-24",
      readTime: "6 min read",
      author: "Emily Rodriguez",
      featured: true
    },
    {
      id: 4,
      title: "Building Scalable APIs with GraphQL",
      summary: "Learn how to design and implement robust GraphQL APIs that can handle enterprise-level traffic while maintaining excellent performance and flexibility.",
      coverImage: graphql,
      tags: ["API", "GraphQL", "Backend"],
      category: "web",
      publishDate: "2025-05-22",
      readTime: "10 min read",
      author: "David Kim",
      featured: false
    },
    {
      id: 5,
      title: "Cybersecurity Best Practices for Developers",
      summary: "Essential security practices every developer should know, from secure coding principles to protecting against common vulnerabilities and attacks.",
      coverImage: cyber,
      tags: ["Security", "Best Practices", "Tools"],
      category: "cybersecurity",
      publishDate: "2025-05-20",
      readTime: "7 min read",
      author: "Alex Thompson",
      featured: false
    }
  ];

  // Get all unique tags
  const allTags = useMemo(() => {
    const tags = new Set();
    blogPosts.forEach(post => {
      post.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, []);

  // Filter posts based on search term, selected tag, and category
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.summary.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesTag = selectedTag === '' || post.tags.includes(selectedTag);
      const matchesCategory = selectedCategory === '' || post.category === selectedCategory;

      return matchesSearch && matchesTag && matchesCategory;
    });
  }, [searchTerm, selectedTag, selectedCategory]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const getTagColor = (tag) => {
    const colors = {
      'AI': 'bg-purple-100 text-purple-800 border-purple-200',
      'WebDev': 'bg-blue-100 text-blue-800 border-blue-200',
      'DevOps': 'bg-green-100 text-green-800 border-green-200',
      'Tools': 'bg-orange-100 text-orange-800 border-orange-200',
      'Security': 'bg-red-100 text-red-800 border-red-200',
      'Backend': 'bg-indigo-100 text-indigo-800 border-indigo-200',
      'NextJS': 'bg-gray-100 text-gray-800 border-gray-200',
      'React': 'bg-cyan-100 text-cyan-800 border-cyan-200',
      'API': 'bg-yellow-100 text-yellow-800 border-yellow-200',
      'GraphQL': 'bg-pink-100 text-pink-800 border-pink-200',
      'Docker': 'bg-teal-100 text-teal-800 border-teal-200',
      'ML': 'bg-violet-100 text-violet-800 border-violet-200',
      'JavaScript': 'bg-amber-100 text-amber-800 border-amber-200',
      'Future': 'bg-emerald-100 text-emerald-800 border-emerald-200',
      'Best Practices': 'bg-rose-100 text-rose-800 border-rose-200'
    };
    return colors[tag] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  const getCategoryColorClasses = (color) => {
    const colorMap = {
      blue: 'text-blue-600 bg-blue-50 hover:bg-blue-100 border-blue-200',
      green: 'text-green-600 bg-green-50 hover:bg-green-100 border-green-200',
      purple: 'text-purple-600 bg-purple-50 hover:bg-purple-100 border-purple-200',
      indigo: 'text-indigo-600 bg-indigo-50 hover:bg-indigo-100 border-indigo-200',
      red: 'text-red-600 bg-red-50 hover:bg-red-100 border-red-200',
      cyan: 'text-cyan-600 bg-cyan-50 hover:bg-cyan-100 border-cyan-200',
      gray: 'text-gray-600 bg-gray-50 hover:bg-gray-100 border-gray-200',
      orange: 'text-orange-600 bg-orange-50 hover:bg-orange-100 border-orange-200',
      pink: 'text-pink-600 bg-pink-50 hover:bg-pink-100 border-pink-200',
      teal: 'text-teal-600 bg-teal-50 hover:bg-teal-100 border-teal-200'
    };
    return colorMap[color] || 'text-gray-600 bg-gray-50 hover:bg-gray-100 border-gray-200';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            TechHub Blog
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your comprehensive resource for technology insights, tutorials, and industry trends
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-80 order-2 lg:order-1">
            <div className="sticky top-8">
              {/* Categories */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <Tag className="w-5 h-5 mr-2 text-blue-600" />
                  Categories
                </h2>
                <nav className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory('')}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 text-left ${
                      selectedCategory === '' 
                        ? 'bg-blue-100 text-blue-700 border border-blue-200' 
                        : 'hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    <span className="flex items-center">
                      <Globe className="w-4 h-4 mr-3" />
                      All Categories
                    </span>
                    <span className="text-sm font-medium text-gray-500">
                      {blogPosts.length}
                    </span>
                  </button>
                  {blogCategories.map(category => {
                    const IconComponent = category.icon;
                    const isSelected = selectedCategory === category.id;
                    return (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 text-left border ${
                          isSelected 
                            ? getCategoryColorClasses(category.color) + ' border-opacity-100' 
                            : 'hover:bg-gray-50 text-gray-700 border-transparent'
                        }`}
                      >
                        <span className="flex items-center">
                          <IconComponent className="w-4 h-4 mr-3" />
                          <span className="text-sm font-medium">{category.name}</span>
                        </span>
                        <span className="text-xs font-medium opacity-70">
                          {category.count}
                        </span>
                      </button>
                    );
                  })}
                </nav>
              </div>

              {/* Featured Posts */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <ArrowRight className="w-5 h-5 mr-2 text-purple-600" />
                  Featured Posts
                </h2>
                <div className="space-y-4">
                  {blogPosts.filter(post => post.featured).slice(0, 3).map(post => (
                    <div key={post.id} className="group">
                      <div className="flex space-x-3">
                        <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                          <Image
                            src={post.coverImage}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-300"
                            sizes="64px"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2 mb-1">
                            {post.title}
                          </h3>
                          <p className="text-xs text-gray-500 flex items-center">
                            <Calendar className="w-3 h-3 mr-1" />
                            {formatDate(post.publishDate)}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 order-1 lg:order-2">
            {/* Search and Filter Section */}
            <div className="mb-8 space-y-4 md:space-y-0 md:flex md:items-center md:justify-between md:space-x-4">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 shadow-sm hover:shadow-md bg-white"
                  aria-label="Search blog posts"
                />
              </div>

              {/* Tag Filter */}
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={selectedTag}
                  onChange={(e) => setSelectedTag(e.target.value)}
                  className="pl-10 pr-8 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 shadow-sm hover:shadow-md appearance-none bg-white min-w-48"
                  aria-label="Filter by tag"
                >
                  <option value="">All Tags</option>
                  {allTags.map(tag => (
                    <option key={tag} value={tag}>{tag}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Results Count */}
            <div className="mb-8 flex items-center justify-between">
              <p className="text-gray-600">
                Showing {filteredPosts.length} of {blogPosts.length} articles
                {selectedTag && (
                  <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    #{selectedTag}
                  </span>
                )}
                {selectedCategory && (
                  <span className="ml-2 px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                    {blogCategories.find(cat => cat.id === selectedCategory)?.name}
                  </span>
                )}
              </p>

              {(selectedTag || selectedCategory || searchTerm) && (
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedTag('');
                    setSelectedCategory('');
                  }}
                  className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                >
                  Clear all filters
                </button>
              )}
            </div>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredPosts.map((post, index) => (
                <article
                  key={post.id}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: 'fadeInUp 0.6s ease-out forwards'
                  }}
                >
                  {/* Cover Image */}
                  <div className="relative overflow-hidden h-48">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={index < 2}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {post.featured && (
                      <div className="absolute top-4 left-4">
                        <span className="px-2 py-1 bg-purple-600 text-white text-xs font-medium rounded-full">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          <time dateTime={post.publishDate}>
                            {formatDate(post.publishDate)}
                          </time>
                        </div>
                        <span className="text-gray-300">•</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    {/* Author */}
                    <p className="text-sm text-gray-600 mb-3">By {post.author}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map(tag => (
                        <span
                          key={tag}
                          className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${getTagColor(tag)} transition-colors duration-200`}
                        >
                          <Tag className="w-3 h-3 mr-1" />
                          {tag}
                        </span>
                      ))}
                      {post.tags.length > 3 && (
                        <span className="text-xs text-gray-500 px-2 py-1">
                          +{post.tags.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h2>

                    {/* Summary */}
                    <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                      {post.summary}
                    </p>

                    {/* Read More Button */}
                    <button
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      aria-label={`Read more about ${post.title}`}
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                </article>
              ))}
            </div>

            {/* No Results */}
            {filteredPosts.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">No articles found</h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your search terms or clearing the filters
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedTag('');
                    setSelectedCategory('');
                  }}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  Clear All Filters
                </button>
              </div>
            )}

            {/* Load More Button */}
            {filteredPosts.length > 0 && filteredPosts.length >= 4 && (
              <div className="text-center mt-12">
                <button className="px-8 py-4 bg-white border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 shadow-sm hover:shadow-md">
                  Load More Articles
                </button>
              </div>
            )}
          </main>
        </div>
      </div>

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

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Blog;