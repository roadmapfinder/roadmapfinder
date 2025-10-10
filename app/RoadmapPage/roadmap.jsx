"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  ChevronLeft, 
  Search, 
  X,
  TrendingUp,
  Star,
  Sparkles,
  ArrowRight,
  Filter
} from "lucide-react";
import { 
  roadmapsData, 
  popularTags, 
  getFeaturedRoadmaps, 
  getTrendingRoadmaps, 
  searchRoadmaps 
} from "./roadmapsData";

export default function TechRoadmap() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // Initialize filtered categories with all categories
  useEffect(() => {
    setFilteredCategories(roadmapsData);
  }, []);

  // Filter categories based on search query
  useEffect(() => {
    const filtered = searchRoadmaps(searchQuery);
    setFilteredCategories(filtered);
  }, [searchQuery]);

  // Handle search tag click
  const handleTagClick = (tag) => {
    setSearchQuery(tag);
  };

  // Get featured and trending roadmaps
  const featuredRoadmaps = getFeaturedRoadmaps();
  const trendingRoadmaps = getTrendingRoadmaps();

  // If search is active, show filtered results
  const displayFeatured = searchQuery ? filteredCategories : featuredRoadmaps;
  const displayTrending = searchQuery ? [] : trendingRoadmaps.filter(roadmap => 
    !searchQuery || filteredCategories.includes(roadmap)
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Navigation Bar */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-lg bg-white/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" passHref>
              <div className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 cursor-pointer group">
                <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
                <span className="font-semibold text-sm">Back to Home</span>
              </div>
            </Link>

            <div className="flex items-center space-x-3">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                <Filter className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="mb-6 text-center">
        
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
            Tech Learning
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Roadmaps</span>
          </h1>

          <p className="text-me sm:text-small text-gray-600 max-w-2xl mx-auto mb-8">
            Discover expertly curated learning paths for various tech domains and programming languages
          </p>

          {/* Search Bar - Enhanced */}
          <div className="max-w-2xl mx-auto mb-6">
            <div className={`relative transition-all duration-300 ${isSearchFocused ? 'transform scale-105' : ''}`}>
              <div className={`absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur-xl opacity-20 transition-opacity duration-300 ${isSearchFocused ? 'opacity-30' : 'opacity-0'}`}></div>

              <div className="relative bg-white rounded-2xl shadow-lg border border-gray-200">
                <Search className="w-5 h-5 text-gray-400 absolute left-5 top-1/2 -translate-y-1/2 z-10" />
                <input
                  type="text"
                  placeholder="Search for roadmaps, technologies, or skills..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  className="w-full px-14 py-4 rounded-2xl focus:outline-none text-gray-800 placeholder-gray-400 bg-transparent"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-5 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full transition-colors duration-200"
                  >
                    <X className="w-5 h-5 text-gray-400 hover:text-gray-600" />
                  </button>
                )}
              </div>
            </div>

            {/* Popular Tags */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
              <span className="text-sm font-medium text-gray-500">Popular:</span>
              {popularTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => handleTagClick(tag)}
                  className="px-4 py-1.5 text-sm rounded-full bg-white border border-gray-200 hover:border-blue-300 hover:bg-blue-50 text-gray-700 hover:text-blue-700 transition-all duration-200 shadow-sm hover:shadow"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>

    

        {/* Featured Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg">
                <Star className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {searchQuery ? `Search Results` : "Featured Paths"}
                </h2>
                <p className="text-sm text-gray-600">
                  {searchQuery ? `${displayFeatured.length} results found` : "Most popular learning roadmaps"}
                </p>
              </div>
            </div>
          </div>

          {displayFeatured.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayFeatured.map((category) => (
                <RoadmapCard
                  key={category.id}
                  category={category}
                  hoveredCard={hoveredCard}
                  setHoveredCard={setHoveredCard}
                />
              ))}
            </div>
          ) : null}
        </div>

        {/* Trending Section */}
        {displayTrending.length > 0 && !searchQuery && (
          <div className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-br from-pink-500 to-rose-500 rounded-lg">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Trending & Specialized
                  </h2>
                  <p className="text-sm text-gray-600">
                    Emerging technologies and niche specializations
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayTrending.map((category) => (
                <RoadmapCard
                  key={category.id}
                  category={category}
                  hoveredCard={hoveredCard}
                  setHoveredCard={setHoveredCard}
                  isTrending={true}
                />
              ))}
            </div>
          </div>
        )}

        {/* No Results */}
        {searchQuery && displayFeatured.length === 0 && (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-6">
              <Search className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              No roadmaps found
            </h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              We couldn't find any roadmaps matching "<span className="font-semibold">{searchQuery}</span>". Try different keywords or browse our popular tags.
            </p>
            <button
              onClick={() => setSearchQuery("")}
              className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              <span>Show All Roadmaps</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        </div>
    </div>
  );
}

// Enhanced Roadmap Card Component
function RoadmapCard({ category, hoveredCard, setHoveredCard, isTrending = false }) {
  const isHovered = hoveredCard === category.id;

  return (
    <Link href={category.link} passHref>
      <div
        className="group relative bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
        onMouseEnter={() => setHoveredCard(category.id)}
        onMouseLeave={() => setHoveredCard(null)}
      >
        {/* Gradient overlay on hover */}
        <div className={`absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

        {/* Trending badge */}
        {isTrending && (
          <div className="absolute top-4 right-4 z-10">
            <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center space-x-1 shadow-lg">
              <TrendingUp className="w-3 h-3" />
              <span>Trending</span>
            </div>
          </div>
        )}

        <div className="relative z-10">
          {/* Icon */}
          <div className={`bg-gradient-to-br ${category.bgColor} rounded-xl w-14 h-14 flex items-center justify-center mb-4 shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
            {category.icon}
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
            {category.title}
          </h3>

          {/* Description */}
          <p className={`text-gray-600 text-sm mb-4 transition-all duration-300 ${isHovered ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0 overflow-hidden'}`}>
            {category.description}
          </p>

          {/* CTA */}
          <div className="flex items-center space-x-2 text-blue-600 font-medium text-sm group-hover:translate-x-2 transition-transform duration-300">
            <span>Explore roadmap</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>

        {/* Bottom gradient accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
      </div>
    </Link>
  );
}