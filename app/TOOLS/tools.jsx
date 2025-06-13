"use client";

import React, { useState, useMemo, useCallback } from "react";
import {
  Search,
  X,
  ExternalLink,
  Grid,
  List,
  Filter,
  Star,
  Zap,
  Heart,
  Bookmark,
  TrendingUp,
  ChevronRight
} from "lucide-react";
import { toolsData } from "./toolsData";

// Memoized ToolCard component with modern design
const ToolCard = React.memo(({ tool, featured = false }) => (
  <div className={`group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-1 ${featured ? 'ring-2 ring-blue-500/20' : ''}`}>
    {featured && (
      <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs px-3 py-1 rounded-full font-medium flex items-center gap-1">
        <Star size={12} />
        Featured
      </div>
    )}

    <div className="flex items-start justify-between mb-4">
      <div className="flex-1">
        <h3 className="font-semibold text-gray-900 text-lg mb-2 group-hover:text-blue-600 transition-colors">
          {tool.name}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {tool.description}
        </p>
      </div>

      {tool.link && (
        <a
          href={tool.link}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-4 p-2 rounded-lg bg-gray-50 text-gray-400 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 flex-shrink-0"
          aria-label={`Visit ${tool.name} website`}
        >
          <ExternalLink size={16} />
        </a>
      )}
    </div>

    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
      <div className="flex items-center gap-3">
        <button className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors">
          <Heart size={16} className="text-gray-400 hover:text-red-500" />
        </button>
        <button className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors">
          <Bookmark size={16} className="text-gray-400 hover:text-blue-500" />
        </button>
      </div>

      <div className="flex items-center text-xs text-gray-500 gap-1">
        <TrendingUp size={12} />
        Popular
      </div>
    </div>
  </div>
));

ToolCard.displayName = "ToolCard";

// Memoized CategoryHeader component
const CategoryHeader = React.memo(({ category, toolCount, onViewAll }) => {
  const IconComponent = category.icon;

  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-4">
        <div className={`p-3 ${category.color} rounded-xl text-white shadow-lg`}>
          <IconComponent size={24} />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-1">
            {category.name}
          </h2>
          <p className="text-gray-500 text-sm">
            {toolCount} tools available
          </p>
        </div>
      </div>

      <button
        onClick={() => onViewAll(category.id)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors font-medium"
      >
        View All
        <ChevronRight size={16} />
      </button>
    </div>
  );
});

CategoryHeader.displayName = "CategoryHeader";

// Custom hook for search and filter logic
const useToolFilter = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState("grid");

  const filteredData = useMemo(() => {
    let filtered = toolsData;

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter(category => category.id === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.map(category => ({
        ...category,
        tools: category.tools.filter(tool =>
          tool.name.toLowerCase().includes(query) ||
          tool.description.toLowerCase().includes(query)
        )
      })).filter(category => 
        category.tools.length > 0 || 
        category.name.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [searchQuery, selectedCategory]);

  const totalTools = useMemo(() => 
    filteredData.reduce((sum, category) => sum + category.tools.length, 0)
  , [filteredData]);

  const clearFilters = useCallback(() => {
    setSearchQuery("");
    setSelectedCategory("all");
  }, []);

  return {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    viewMode,
    setViewMode,
    filteredData,
    totalTools,
    clearFilters,
  };
};

// Main ToolHub component
export default function ToolHub() {
  const {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    viewMode,
    setViewMode,
    filteredData,
    totalTools,
    clearFilters,
  } = useToolFilter();

  const handleSearchChange = useCallback((e) => {
    setSearchQuery(e.target.value);
  }, [setSearchQuery]);

  const handleSearchClear = useCallback(() => {
    setSearchQuery("");
  }, [setSearchQuery]);

  const handleViewAll = useCallback((categoryId) => {
    setSelectedCategory(categoryId);
  }, [setSelectedCategory]);

  const featuredTools = useMemo(() => {
    return toolsData.flatMap(category => 
      category.tools.filter(tool => tool.featured).map(tool => ({
        ...tool,
        categoryName: category.name,
        categoryColor: category.color
      }))
    );
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Zap size={16} className="text-yellow-300" />
              <span className="text-sm font-medium">Developer Tools Hub</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Discover Amazing Tools
            </h1>

            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8 leading-relaxed">
              Curated collection of the best development tools to supercharge your workflow and boost productivity
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-12 pr-12 py-4 border-0 rounded-2xl bg-white/90 backdrop-blur-sm shadow-xl focus:outline-none focus:ring-4 focus:ring-white/25 text-gray-900 placeholder-gray-500 text-lg"
                placeholder="Search for tools, categories, or technologies..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
              {searchQuery && (
                <button
                  onClick={handleSearchClear}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center hover:bg-gray-100/10 rounded-r-2xl transition-colors"
                >
                  <X className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Controls Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === "all"
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-50 shadow-sm border border-gray-200"
              }`}
            >
              All Categories
            </button>
            {toolsData.slice(0, 4).map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                    selectedCategory === category.id
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-gray-50 shadow-sm border border-gray-200"
                  }`}
                >
                  <IconComponent size={14} />
                  {category.name}
                </button>
              );
            })}
          </div>

          {/* View Mode & Stats */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500">
              {totalTools} tools found
            </span>

            <div className="flex items-center bg-white rounded-lg shadow-sm border border-gray-200 p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded transition-colors ${
                  viewMode === "grid" 
                    ? "bg-blue-600 text-white" 
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                <Grid size={16} />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded transition-colors ${
                  viewMode === "list" 
                    ? "bg-blue-600 text-white" 
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                <List size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Clear Filters */}
        {(searchQuery || selectedCategory !== "all") && (
          <div className="mb-8">
            <button
              onClick={clearFilters}
              className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 px-3 py-1 rounded-lg transition-colors"
            >
              <X size={14} />
              Clear all filters
            </button>
          </div>
        )}
      </section>

      {/* Featured Tools Section */}
      {!searchQuery && selectedCategory === "all" && featuredTools.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl text-white shadow-lg">
              <Star size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Featured Tools</h2>
              <p className="text-gray-500">Hand-picked tools recommended by the community</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTools.slice(0, 6).map((tool, index) => (
              <ToolCard key={`featured-${index}`} tool={tool} featured={true} />
            ))}
          </div>
        </section>
      )}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {filteredData.length === 0 ? (
          <div className="text-center py-16">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-gray-100 mb-6">
              <Search className="h-8 w-8 text-gray-400" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              No tools found
            </h2>
            <p className="text-gray-500 mb-6">
              Try adjusting your search terms or browse different categories
            </p>
            <button
              onClick={clearFilters}
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              <X size={16} />
              Clear filters
            </button>
          </div>
        ) : (
          <div className="space-y-16">
            {filteredData.map((category) => (
              <section key={category.id} className="space-y-6">
                <CategoryHeader
                  category={category}
                  toolCount={category.tools.length}
                  onViewAll={handleViewAll}
                />

                <div className={
                  viewMode === "grid"
                    ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                    : "space-y-4"
                }>
                  {category.tools.map((tool, index) => (
                    viewMode === "grid" ? (
                      <ToolCard
                        key={`${category.id}-${index}`}
                        tool={tool}
                        featured={tool.featured}
                      />
                    ) : (
                      <div key={`${category.id}-${index}`} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-100 flex items-center justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 text-lg mb-1">
                            {tool.name}
                          </h3>
                          <p className="text-gray-600 text-sm">
                            {tool.description}
                          </p>
                        </div>

                        <div className="flex items-center gap-3 ml-6">
                          {tool.featured && (
                            <div className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full font-medium flex items-center gap-1">
                              <Star size={10} />
                              Featured
                            </div>
                          )}

                          {tool.link && (
                            <a
                              href={tool.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-lg bg-gray-50 text-gray-400 hover:bg-blue-50 hover:text-blue-600 transition-all"
                            >
                              <ExternalLink size={16} />
                            </a>
                          )}
                        </div>
                      </div>
                    )
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}