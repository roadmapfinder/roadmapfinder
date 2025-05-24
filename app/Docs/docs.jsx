"use client";
import { useState, useEffect, useMemo, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  ExternalLink,
  Filter,
  X,
  Code,
  FileText,
  Smartphone,
  GitBranch,
  Database,
  Youtube,
  Bookmark,
  ChevronRight,
  Cloud,
  Settings,
  Star,
  Tag,
} from "lucide-react";

// Import documentation data
import docsData from "./docs.json";

// Import all icon images
import cpp from "../Icons/cpp.png";
import java from "../Icons/java.png";
import py from "../Icons/py.png";
import native from "../Icons/native.png";
import react from "../Icons/react.png";
import express from "../Icons/express.png";
import flutter from "../Icons/flutter.png";
import js from "../Icons/js.png";
import next from "../Icons/next.png";
import git from "../Icons/git.png";
import github from "../Icons/github.png";
import sql from "../Icons/sql.png";
import mongo from "../Icons/mongo.png";
import kotlin from "../Icons/kotlin.png";
import leetcode from "../Icons/leetcode.png";
import geeks from "../Icons/geeks.png";
import chai from "../DocIcons/chai.png";
import harry from "../DocIcons/harry.png";
import tuf from "../DocIcons/tuf.png";
import w3 from "../DocIcons/w3.png";
// Add new technology icons
import typescript from "../Icons/typescript.png";
import php from "../Icons/php.png";
import nodejs from "../Icons/node.png";
import rust from "../Icons/rust.png";
import golang from "../Icons/golang.png";
import django from "../Icons/django.png";
import spring from "../Icons/springboot.png";
import vue from "../Icons/vue.png"; 
import angular from "../Icons/angular.png";
import postgresql from "../Icons/postgresql.png";
import swift from "../Icons/swift.png";
import docker from "../Icons/docker.png";
import kubernetes from "../Icons/kubernetes.png";
import aws from "../Icons/aws.png";
import azure from "../Icons/azure.png";
import gcp from "../Icons/gcp.png";
import vscode from "../Icons/vscode.png";
import webpack from "../Icons/webpack.png";
import vite from "../Icons/vite.png";

// Icon mapping for categories
const iconMap = {
  FileText,
  Code,
  Database,
  Smartphone,
  GitBranch,
  Youtube,
  Cloud,
  Settings,
  Bookmark,
  ChevronRight,
  Star,
};

// Logo mapping
const logoMap = {
  py,
  java,
  cpp,
  js,
  php,
  typescript,
  nodejs,
  rust,
  golang,
  react,
  next,
  express,
  django,
  spring,
  vue,
  angular,
  mongo,
  sql,
  postgresql,
  native,
  flutter,
  kotlin,
  swift,
  git,
  github,
  docker,
  kubernetes,
  aws,
  azure,
  gcp,
  vscode,
  webpack,
  vite,
  leetcode,
  geeks,
  chai,
  harry,
  tuf,
  w3,
};

// Custom hooks for better performance
const useDebounce = (value, delay) => {
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
};

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === "undefined") return initialValue;

    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  const setValue = useCallback((value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);

      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  }, [key, storedValue]);

  return [storedValue, setValue];
};

// Performance optimized component
const DocumentationCard = ({ resource, isBookmarked, onToggleBookmark, searchTerm }) => {
  const handleBookmarkClick = useCallback((e) => {
    e.preventDefault();
    onToggleBookmark(resource.id);
  }, [resource.id, onToggleBookmark]);

  const highlightText = useCallback((text) => {
    if (!searchTerm) return text;

    const regex = new RegExp(`(${searchTerm.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&')})`, 'gi');
    return text.replace(regex, '<mark class="bg-yellow-200 px-1 rounded">$1</mark>');
  }, [searchTerm]);

  const IconComponent = iconMap[resource.category] || Code;
  const categoryInfo = docsData.categories.find(c => c.id === resource.category);

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group hover:border-blue-200">
      <div className="p-6">
        {/* Header with logo and bookmark */}
        <div className="flex items-start gap-4 mb-4">
          <div className="flex-shrink-0 relative h-16 w-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg overflow-hidden flex items-center justify-center shadow-sm">
            <Image
              src={logoMap[resource.logo] || py}
              alt={resource.name}
              width={48}
              height={48}
              className="object-contain transition-transform group-hover:scale-110"
              loading="lazy"
            />
          </div>

          <div className="flex-grow min-w-0">
            <h3 className="text-lg font-semibold text-gray-900 truncate mb-1">
              {resource.name}
            </h3>

            {/* Tags and featured badge */}
            <div className="flex items-center gap-2 flex-wrap">
              {resource.featured && (
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                  <Star size={12} className="mr-1" />
                  Featured
                </span>
              )}

              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                {categoryInfo?.name || resource.category}
              </span>
            </div>
          </div>

          {/* Bookmark button */}
          <button
            onClick={handleBookmarkClick}
            className={`p-2 rounded-full transition-all duration-200 ${
              isBookmarked
                ? "bg-blue-50 text-blue-600 hover:bg-blue-100"
                : "text-gray-400 hover:text-blue-500 hover:bg-blue-50"
            }`}
            aria-label={isBookmarked ? "Remove bookmark" : "Add bookmark"}
          >
            <Bookmark
              size={18}
              className={isBookmarked ? "fill-current" : ""}
            />
          </button>
        </div>

        {/* Description */}
        <p
          className="text-gray-600 mb-4 line-clamp-3 leading-relaxed"
          dangerouslySetInnerHTML={{
            __html: highlightText(resource.description),
          }}
        />

        {/* Tags */}
        {resource.tags && resource.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-4">
            {resource.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2 py-1 rounded text-xs bg-gray-50 text-gray-600 border"
              >
                <Tag size={10} className="mr-1" />
                {tag}
              </span>
            ))}
            {resource.tags.length > 3 && (
              <span className="text-xs text-gray-500 px-2 py-1">
                +{resource.tags.length - 3} more
              </span>
            )}
          </div>
        )}

        {/* Action button */}
        <a
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors group-hover:underline"
        >
          Visit Documentation
          <ExternalLink size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
};

// Main component
export default function Docs() {
  // State management
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const [bookmarkedDocs, setBookmarkedDocs] = useLocalStorage("bookmarkedDocs", []);
  const [sortBy, setSortBy] = useState("featured");

  // Debounced search
  const debouncedSearch = useDebounce(searchTerm, 300);

  // Memoized filtered and sorted resources
  const filteredResources = useMemo(() => {
    let filtered = docsData.resources.filter((resource) => {
      // Category filter
      let categoryMatch = true;
      switch (activeCategory) {
        case "bookmarked":
          categoryMatch = bookmarkedDocs.includes(resource.id);
          break;
        case "featured":
          categoryMatch = resource.featured;
          break;
        case "all":
          categoryMatch = true;
          break;
        default:
          categoryMatch = resource.category === activeCategory;
      }

      // Search filter
      const searchMatch = !debouncedSearch || 
        resource.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        resource.description.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        (resource.tags && resource.tags.some(tag => 
          tag.toLowerCase().includes(debouncedSearch.toLowerCase())
        ));

      return categoryMatch && searchMatch;
    });

    // Sort resources
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "featured":
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return a.name.localeCompare(b.name);
        case "name":
          return a.name.localeCompare(b.name);
        case "category":
          return a.category.localeCompare(b.category);
        default:
          return 0;
      }
    });

    return filtered;
  }, [debouncedSearch, activeCategory, bookmarkedDocs, sortBy]);

  // Memoized categories with icons
  const categoriesWithIcons = useMemo(() => {
    return docsData.categories.map(category => ({
      ...category,
      icon: iconMap[category.icon] || Code,
    }));
  }, []);

  // Event handlers
  const handleCategoryChange = useCallback((categoryId) => {
    setActiveCategory(categoryId);
    if (window.innerWidth < 768) {
      setShowFilters(false);
    }
  }, []);

  const handleToggleBookmark = useCallback((id) => {
    setBookmarkedDocs(prev => 
      prev.includes(id) 
        ? prev.filter(docId => docId !== id)
        : [...prev, id]
    );
  }, [setBookmarkedDocs]);

  const clearSearch = useCallback(() => {
    setSearchTerm("");
  }, []);

  // Stats
  const stats = useMemo(() => ({
    total: docsData.resources.length,
    featured: docsData.resources.filter(r => r.featured).length,
    bookmarked: bookmarkedDocs.length,
    categories: docsData.categories.length - 1, // Exclude "all"
  }), [bookmarkedDocs.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors mb-4">
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            <span className="font-medium">Back to Home</span>
          </Link>

          {/* Title section */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Star size={16} className="mr-2" />
              Updated May 2025
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
              Developer Documentation Hub
            </h1>

           

            {/* Stats */}
            <div className="flex justify-center gap-8 text-sm text-gray-600">
              <div className="text-center">
                <div className="font-bold text-2xl text-blue-600">{stats.total}</div>
                <div>Resources</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-2xl text-purple-600">{stats.featured}</div>
                <div>Featured</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-2xl text-green-600">{stats.categories}</div>
                <div>Categories</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-2xl text-orange-600">{stats.bookmarked}</div>
                <div>Bookmarked</div>
              </div>
            </div>
          </div>

          {/* Search and controls */}
          <div className="flex flex-col lg:flex-row gap-4 justify-between items-center">
            {/* Search bar */}
            <div className="relative flex-grow max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl bg-white/50 backdrop-blur-sm text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="Search documentation, technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 rounded-md hover:bg-gray-100 transition-colors"
                  onClick={clearSearch}
                  aria-label="Clear search"
                >
                  <X size={16} className="text-gray-500" />
                </button>
              )}
            </div>

            {/* Controls */}
            <div className="flex items-center gap-3">
              {/* Sort dropdown */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg bg-white/50 backdrop-blur-sm text-sm font-medium focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="featured">Featured First</option>
                <option value="name">Name A-Z</option>
                <option value="category">Category</option>
              </select>

              {/* Filter toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`p-2 rounded-lg border transition-all ${
                  showFilters
                    ? "bg-blue-100 border-blue-300 text-blue-700"
                    : "bg-white/50 border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
                aria-label="Toggle filters"
              >
                <Filter size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Filter panel */}
      {showFilters && (
        <div className="sticky top-[180px] z-30 bg-white/90 backdrop-blur-lg border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex flex-wrap gap-2">
              {categoriesWithIcons.map((category) => {
                const IconComponent = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.id)}
                    className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      activeCategory === category.id
                        ? "bg-blue-600 text-white shadow-lg"
                        : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    <IconComponent size={16} className="mr-2" />
                    {category.name}
                  </button>
                );
              })}

              {/* Special categories */}
              <button
                onClick={() => handleCategoryChange("bookmarked")}
                className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeCategory === "bookmarked"
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                }`}
              >
                <Bookmark size={16} className="mr-2" />
                Bookmarked ({bookmarkedDocs.length})
              </button>

              <button
                onClick={() => handleCategoryChange("featured")}
                className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeCategory === "featured"
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                }`}
              >
                <Star size={16} className="mr-2" />
                Featured
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Results header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              {activeCategory === "all" && "All Documentation"}
              {activeCategory === "bookmarked" && "Bookmarked Resources"}
              {activeCategory === "featured" && "Featured Resources"}
              {activeCategory !== "all" && activeCategory !== "bookmarked" && activeCategory !== "featured" && 
                categoriesWithIcons.find(c => c.id === activeCategory)?.name
              }
            </h2>
            <p className="text-gray-600 mt-1">
              {filteredResources.length === 0
                ? "No resources found matching your criteria"
                : `${filteredResources.length} resource${filteredResources.length !== 1 ? 's' : ''} found`}
              {debouncedSearch && (
                <span className="ml-2">
                  for "<span className="font-medium text-blue-600">{debouncedSearch}</span>"
                </span>
              )}
            </p>
          </div>
        </div>

        {/* Resources grid */}
        {filteredResources.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredResources.map((resource) => (
              <DocumentationCard
                key={resource.id}
                resource={resource}
                isBookmarked={bookmarkedDocs.includes(resource.id)}
                onToggleBookmark={handleToggleBookmark}
                searchTerm={debouncedSearch}
              />
            ))}
          </div>
        ) : (
          /* Empty state */
          <div className="text-center py-16">
            <div className="bg-gray-100 inline-flex rounded-full p-6 mb-6">
              <Search size={32} className="text-gray-400" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">
              No resources found
            </h3>
            <p className="text-gray-600 max-w-md mx-auto mb-6">
              Try adjusting your search terms or filters to find what you're looking for.
            </p>
            <div className="flex justify-center gap-3">
              {searchTerm && (
                <button
                  onClick={clearSearch}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Clear Search
                </button>
              )}
              <button
                onClick={() => setActiveCategory("all")}
                className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
              >
                Show All Resources
              </button>
            </div>
          </div>
        )}

        {/* Quick access categories */}
        {activeCategory === "all" && !debouncedSearch && (
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Explore by Category
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {categoriesWithIcons.slice(1).map((category) => {
                const IconComponent = category.icon;
                const categoryCount = docsData.resources.filter(r => r.category === category.id).length;

                return (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.id)}
                    className="p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all text-center group"
                  >
                    <div className="bg-blue-50 rounded-full p-3 inline-flex mb-4 group-hover:bg-blue-100 transition-colors">
                      <IconComponent size={24} className="text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1">{category.name}</h4>
                    <p className="text-sm text-gray-600">{categoryCount} resources</p>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white/50 backdrop-blur-sm mt-16">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 text-gray-600 mb-4">
              <Code size={20} className="text-blue-600" />
              <span className="font-semibold text-gray-900">Developer Documentation Hub</span>
            </div>
            <p className="text-gray-600 text-sm">
              Curated collection of official documentation and trusted resources for developers.
              <br />
              Last updated: May 2025 • {stats.total} total resources
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}