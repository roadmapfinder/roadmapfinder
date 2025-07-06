"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  ChevronLeft, 
  Search, 
  X
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
    <div className="max-w-md mx-auto px-4 pt-6 pb-12 font-sans md:max-w-4xl bg-gray-50 min-h-screen">
      {/* Header with animated gradient background */}
      <div className="relative mb-8 rounded-xl overflow-hidden shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-90"></div>
        <div className="relative px-6 py-8 text-white">
          {/* Home Arrow Icon */}
          <div className="flex justify-start mb-6">
            <Link href="/" passHref>
              <div className="flex items-center text-white hover:text-blue-100 transition-all duration-300 cursor-pointer">
                <ChevronLeft className="w-5 h-5 mr-1" />
                <span className="text-sm font-medium">Home</span>
              </div>
            </Link>
          </div>

          <h1 className="text-3xl font-bold mb-2">Tech Learning Paths</h1>
          <p className="text-blue-100">
            Discover curated roadmaps for various tech domains & programming languages
          </p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="mb-6 px-2">
        <div className="relative">
          <input
            type="text"
            placeholder="Search paths..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 pl-10 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          />
          <Search className="w-5 h-5 text-gray-400 absolute left-3 top-3.5" />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-3.5"
            >
              <X className="w-5 h-5 text-gray-400 hover:text-gray-600" />
            </button>
          )}
        </div>

        {/* Popular search tags */}
        <div className="flex flex-wrap gap-2 mt-3">
          <span className="text-sm text-gray-500">Popular:</span>
          {popularTags.map((tag) => (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
              className="px-3 py-1 text-xs rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors duration-300"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Categories Section */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4 px-2">
          {searchQuery ? `Search Results (${displayFeatured.length})` : "Featured Paths"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 px-2">
          {displayFeatured.map((category) => (
            <RoadmapCard
              key={category.id}
              category={category}
              hoveredCard={hoveredCard}
              setHoveredCard={setHoveredCard}
            />
          ))}
        </div>
      </div>

      {/* Trending Categories Section */}
      {displayTrending.length > 0 && !searchQuery && (
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4 px-2">
            Trending & Specialized Paths
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-2">
            {displayTrending.map((category) => (
              <RoadmapCard
                key={category.id}
                category={category}
                hoveredCard={hoveredCard}
                setHoveredCard={setHoveredCard}
              />
            ))}
          </div>
        </div>
      )}

      {/* No Results Message */}
      {searchQuery && displayFeatured.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <Search className="w-16 h-16 mx-auto mb-4 opacity-50" />
          </div>
          <h3 className="text-lg font-medium text-gray-600 mb-2">
            No roadmaps found
          </h3>
          <p className="text-gray-500 mb-4">
            Try searching for different keywords or browse our popular tags
          </p>
          <button
            onClick={() => setSearchQuery("")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-300"
          >
            Show All Roadmaps
          </button>
        </div>
      )}

      {/* Newsletter Subscription */}
      <div className="bg-white rounded-xl p-6 shadow-md mb-8 border border-gray-200 mx-2">
        <h3 className="text-lg font-bold mb-2">Stay Updated</h3>
        <p className="text-sm text-gray-600 mb-4">
          Get notified about new roadmaps and learning resources.
        </p>
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Link href="/Signup">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">
              Subscribe
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

// Roadmap Card Component
function RoadmapCard({ category, hoveredCard, setHoveredCard }) {
  return (
    <Link href={category.link} key={category.id} passHref>
      <div
        className="border border-gray-200 rounded-xl p-4 flex items-center hover:shadow-md transition-all duration-300 cursor-pointer bg-white transform hover:-translate-y-1"
        onMouseEnter={() => setHoveredCard(category.id)}
        onMouseLeave={() => setHoveredCard(null)}
      >
        <div
          className={`bg-gradient-to-br ${
            category.bgColor
          } rounded-lg w-12 h-12 flex items-center justify-center mr-4 shadow-md transition-all duration-300 ${
            hoveredCard === category.id ? "scale-110" : ""
          }`}
        >
          {category.icon}
        </div>
        <div className="flex-1">
          <span className="text-lg font-medium block">{category.title}</span>
          {hoveredCard === category.id && (
            <p className="text-sm text-gray-500 mt-1">
              {category.description}
            </p>
          )}
          {hoveredCard !== category.id && (
            <p className="text-sm text-gray-400 mt-1">
              Explore roadmap →
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}