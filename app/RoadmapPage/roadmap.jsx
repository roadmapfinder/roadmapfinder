"use client";
import React, { useState, useEffect, useMemo, useCallback, memo } from "react";
import Link from "next/link";
import { 
  ChevronLeft, 
  Search, 
  X,
  TrendingUp,
  Star,
  ArrowRight,
  Filter,
  Loader2
} from "lucide-react";
import { 
  roadmapsData, 
  popularTags, 
  getFeaturedRoadmaps, 
  getTrendingRoadmaps, 
  searchRoadmaps 
} from "./roadmapsData";
import { useRouter } from "next/navigation";

// Custom hook for debounced search
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

// Enhanced search with fuzzy matching and ranking
function enhancedSearch(query, categories) {
  if (!query.trim()) return categories;

  const searchTerms = query.toLowerCase().trim().split(/\s+/);

  const scoredResults = categories.map(category => {
    let score = 0;
    const titleLower = category.title.toLowerCase();
    const descLower = category.description?.toLowerCase() || "";
    const tagsLower = category.tags?.map(t => t.toLowerCase()).join(" ") || "";
    const searchableText = `${titleLower} ${descLower} ${tagsLower}`;

    searchTerms.forEach(term => {
      // Exact title match (highest priority)
      if (titleLower === term) score += 100;

      // Title starts with term
      if (titleLower.startsWith(term)) score += 50;

      // Title contains term
      if (titleLower.includes(term)) score += 30;

      // Description contains term
      if (descLower.includes(term)) score += 15;

      // Tags contain term
      if (tagsLower.includes(term)) score += 20;

      // Fuzzy match for typos (simple implementation)
      if (searchableText.includes(term.slice(0, -1))) score += 5;
    });

    // Boost score if all terms are found
    const allTermsFound = searchTerms.every(term => searchableText.includes(term));
    if (allTermsFound) score += 26;

    return { category, score };
  });

  // Filter and sort by score
  return scoredResults
    .filter(result => result.score > 0)
    .sort((a, b) => b.score - a.score)
    .map(result => result.category);
}

// Memoized RoadmapCard component for better performance
const RoadmapCard = memo(({ category, hoveredCard, setHoveredCard, isTrending = false }) => {
  const isHovered = hoveredCard === category.id;

  const handleMouseEnter = useCallback(() => {
    setHoveredCard(category.id);
  }, [category.id, setHoveredCard]);

  const handleMouseLeave = useCallback(() => {
    setHoveredCard(null);
  }, [setHoveredCard]);

  return (
    <Link 
      href={category.link} 
      passHref
      aria-label={`Explore ${category.title} roadmap`}
    >
      <div
        className="group relative bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        role="article"
      >
        {/* Gradient overlay on hover */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          aria-hidden="true"
        />

        {/* Trending badge */}
        {isTrending && (
          <div className="absolute top-4 right-4 z-10">
            <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center space-x-1 shadow-lg">
              <TrendingUp className="w-3 h-3" aria-hidden="true" />
              <span>Trending</span>
            </div>
          </div>
        )}

        <div className="relative z-10">
          {/* Icon */}
          <div 
            className={`bg-gradient-to-br ${category.bgColor} rounded-xl w-14 h-14 flex items-center justify-center mb-4 shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
            aria-hidden="true"
          >
            {category.icon}
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
            {category.title}
          </h3>

          {/* Description */}
          <p 
            className={`text-gray-600 text-sm mb-4 transition-all duration-300 ${
              isHovered ? 'opacity-100 max-h-20' : 'opacity-70 max-h-12'
            } line-clamp-2`}
          >
            {category.description}
          </p>

          {/* CTA */}
          <div className="flex items-center space-x-2 text-blue-600 font-medium text-sm group-hover:translate-x-2 transition-transform duration-300">
            <span>Explore roadmap</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </div>
        </div>

        {/* Bottom gradient accent */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
          aria-hidden="true"
        />
      </div>
    </Link>
  );
});

RoadmapCard.displayName = 'RoadmapCard';

// Main component
export default function TechRoadmap() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  // Debounce search query for better performance
  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  // Show loading state during debounce
  useEffect(() => {
    if (searchQuery !== debouncedSearchQuery) {
      setIsSearching(true);
    } else {
      setIsSearching(false);
    }
  }, [searchQuery, debouncedSearchQuery]);

  // Memoize featured and trending roadmaps
  const featuredRoadmaps = useMemo(() => getFeaturedRoadmaps(), []);
  const trendingRoadmaps = useMemo(() => getTrendingRoadmaps(), []);

  // Memoize filtered results with enhanced search
  const filteredResults = useMemo(() => {
    if (!debouncedSearchQuery.trim()) {
      return roadmapsData;
    }
    return enhancedSearch(debouncedSearchQuery, roadmapsData);
  }, [debouncedSearchQuery]);

  // Display logic
  const displayFeatured = useMemo(() => {
    return debouncedSearchQuery ? filteredResults : featuredRoadmaps;
  }, [debouncedSearchQuery, filteredResults, featuredRoadmaps]);

  const displayTrending = useMemo(() => {
    return debouncedSearchQuery ? [] : trendingRoadmaps;
  }, [debouncedSearchQuery, trendingRoadmaps]);

  // Handle search tag click
  const handleTagClick = useCallback((tag) => {
    setSearchQuery(tag);
  }, []);

  // Handle clear search
  const handleClearSearch = useCallback(() => {
    setSearchQuery("");
  }, []);

  // Handle search input change
  const handleSearchChange = useCallback((e) => {
    setSearchQuery(e.target.value);
  }, []);

  // Keyboard navigation for search
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') {
      handleClearSearch();
      e.currentTarget.blur();
    }
  }, [handleClearSearch]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Navigation Bar */}
      <nav 
        className="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-lg bg-white/80"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" passHref aria-label="Go back to home page">
              <div className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 cursor-pointer group">
                <ChevronLeft 
                  className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" 
                  aria-hidden="true"
                />
                <span className="font-semibold text-sm">Back to Home</span>
              </div>
            </Link>

            <button 
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              aria-label="Open filters"
            >
              <Filter className="w-5 h-5 text-gray-600" aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <header className="mb-6 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
            Tech Learning
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Roadmaps</span>
          </h1>

          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Discover expertly curated learning paths for various tech domains and programming languages
          </p>

          {/* Search Bar - Enhanced */}
          <div className="max-w-2xl mx-auto mb-6">
            <div className={`relative transition-all duration-300 ${isSearchFocused ? 'transform scale-105' : ''}`}>
              <div 
                className={`absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur-xl opacity-20 transition-opacity duration-300 ${isSearchFocused ? 'opacity-30' : 'opacity-0'}`}
                aria-hidden="true"
              />

              <div className="relative bg-white rounded-2xl shadow-lg border border-gray-200">
                <label htmlFor="roadmap-search" className="sr-only">
                  Search for roadmaps, technologies, or skills
                </label>
                <Search 
                  className="w-5 h-5 text-gray-400 absolute left-5 top-1/2 -translate-y-1/2 z-10 pointer-events-none" 
                  aria-hidden="true"
                />
                {isSearching && (
                  <Loader2 
                    className="w-5 h-5 text-blue-500 absolute right-14 top-1/2 -translate-y-1/2 z-10 animate-spin" 
                    aria-hidden="true"
                  />
                )}
                <input
                  id="roadmap-search"
                  type="text"
                  placeholder="Search for roadmaps, technologies, or skills..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  onKeyDown={handleKeyDown}
                  className="w-full px-14 py-4 rounded-2xl focus:outline-none text-gray-800 placeholder-gray-400 bg-transparent focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  aria-describedby="search-description"
                />
                <span id="search-description" className="sr-only">
                  Search through {roadmapsData.length} available roadmaps
                </span>
                {searchQuery && (
                  <button
                    onClick={handleClearSearch}
                    className="absolute right-5 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full transition-colors duration-200"
                    aria-label="Clear search"
                  >
                    <X className="w-5 h-5 text-gray-400 hover:text-gray-600" aria-hidden="true" />
                  </button>
                )}
              </div>
            </div>

            {/* Popular Tags */}
            <div 
              className="flex flex-wrap items-center justify-center gap-2 mt-4"
              role="group"
              aria-label="Popular search tags"
            >
              <span className="text-sm font-medium text-gray-500">Popular:</span>
              {popularTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => handleTagClick(tag)}
                  className="px-4 py-1.5 text-sm rounded-full bg-white border border-gray-200 hover:border-blue-300 hover:bg-blue-50 text-gray-700 hover:text-blue-700 transition-all duration-200 shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  aria-label={`Search for ${tag}`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </header>

        {/* Featured Section */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg" aria-hidden="true">
                <Star className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {debouncedSearchQuery ? `Search Results` : "Featured Paths"}
                </h2>
                <p className="text-sm text-gray-600">
                  {debouncedSearchQuery 
                    ? `${displayFeatured.length} result${displayFeatured.length !== 1 ? 's' : ''} found` 
                    : "Most popular learning roadmaps"
                  }
                </p>
              </div>
            </div>
          </div>

          {displayFeatured.length > 0 && (
            <div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              role="list"
            >
              {displayFeatured.map((category) => (
                <div key={category.id} role="listitem">
                  <RoadmapCard
                    category={category}
                    hoveredCard={hoveredCard}
                    setHoveredCard={setHoveredCard}
                  />
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Trending Section */}
        {displayTrending.length > 0 && !debouncedSearchQuery && (
          <section className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-br from-pink-500 to-rose-500 rounded-lg" aria-hidden="true">
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

            <div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              role="list"
            >
              {displayTrending.map((category) => (
                <div key={category.id} role="listitem">
                  <RoadmapCard
                    category={category}
                    hoveredCard={hoveredCard}
                    setHoveredCard={setHoveredCard}
                    isTrending={true}
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* No Results */}
        {debouncedSearchQuery && displayFeatured.length === 0 && !isSearching && (
          <div className="text-center py-20" role="status" aria-live="polite">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-6">
              <Search className="w-10 h-10 text-gray-400" aria-hidden="true" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              No roadmaps found
            </h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              We couldn't find any roadmaps matching "<span className="font-semibold">{debouncedSearchQuery}</span>". Try different keywords or browse our popular tags.
            </p>
            <button
              onClick={handleClearSearch}
              className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-colors duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <span>Show All Roadmaps</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        )}
      </main>
    </div>
  );
}