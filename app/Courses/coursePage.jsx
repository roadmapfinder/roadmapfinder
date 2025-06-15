"use client";
import { useState, useRef, useEffect, useMemo, useCallback } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Search,
  ExternalLink,
  Bookmark,
  BookmarkCheck,
  Globe,
  Sun,
  Moon,
  Filter,
  Grid,
  List,
  X,
  TrendingUp,
  Clock,
  Users,
  Play,
  ArrowLeft,
  Settings,
  Heart,
  Share2,
  Download,
  ChevronDown
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Import your course data
import { courses } from "./coursesData.json";

// Import all course images
import * as courseImages from "../CoursesImage";

export default function OptimizedCoursePage() {
  // Theme and UI State
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'list'
  const [showFilters, setShowFilters] = useState(false);

  // Course Management State
  const [activeTab, setActiveTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [bookmarks, setBookmarks] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [showBookmarksOnly, setShowBookmarksOnly] = useState(false);

  // UI Feedback State
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Responsive State
  const [windowWidth, setWindowWidth] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Filters State
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [selectedLanguage, setSelectedLanguage] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("rating");

  // Refs
  const scrollContainerRefs = useRef({});
  const searchInputRef = useRef(null);

  // Theme persistence and detection
  useEffect(() => {
    const savedTheme = false; // Can't use localStorage in artifacts
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(savedTheme || prefersDark);
  }, []);

  // Handle window resize for responsiveness
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      setIsMobile(width < 768);
    };

    if (typeof window !== "undefined") {
      handleResize();
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey || e.metaKey) {
        switch (e.key) {
          case 'k':
            e.preventDefault();
            searchInputRef.current?.focus();
            break;
          case 'd':
            e.preventDefault();
            toggleTheme();
            break;
        }
      }
      if (e.key === 'Escape') {
        setShowFilters(false);
        setSearchQuery('');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Theme toggle function
  const toggleTheme = useCallback(() => {
    setIsDarkMode(prev => !prev);
  }, []);

  // Tab handling
  const handleTabClick = useCallback((tab) => {
    setActiveTab(tab);
    setSearchQuery("");
    setShowBookmarksOnly(tab === "Bookmarks");
    setShowFilters(false);
  }, []);

  // Search handling with debounce
  const handleSearchChange = useCallback((e) => {
    const value = e.target.value;
    setSearchQuery(value);
    setActiveTab("All");
    setShowBookmarksOnly(false);

    // Auto-focus search results
    if (value.length > 0) {
      setIsLoading(true);
      setTimeout(() => setIsLoading(false), 500);
    }
  }, []);

  // Smooth scrolling functions
  const scrollLeft = useCallback((category) => {
    if (scrollContainerRefs.current[category]) {
      const container = scrollContainerRefs.current[category];
      const scrollAmount = windowWidth >= 768 ? -400 : -280;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  }, [windowWidth]);

  const scrollRight = useCallback((category) => {
    if (scrollContainerRefs.current[category]) {
      const container = scrollContainerRefs.current[category];
      const scrollAmount = windowWidth >= 768 ? 400 : 280;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  }, [windowWidth]);

  // Bookmark management
  const toggleBookmark = useCallback((courseId) => {
    setBookmarks((prev) => {
      const isBookmarked = prev.includes(courseId);
      const newBookmarks = isBookmarked 
        ? prev.filter((id) => id !== courseId)
        : [...prev, courseId];

      // Show notification
      setNotificationMessage(
        isBookmarked ? "Bookmark removed" : "Course bookmarked!"
      );
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);

      return newBookmarks;
    });
  }, []);

  // Favorite management
  const toggleFavorite = useCallback((courseId) => {
    setFavorites((prev) => {
      const isFavorited = prev.includes(courseId);
      const newFavorites = isFavorited 
        ? prev.filter((id) => id !== courseId)
        : [...prev, courseId];

      setNotificationMessage(
        isFavorited ? "Removed from favorites" : "Added to favorites!"
      );
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);

      return newFavorites;
    });
  }, []);

  // YouTube redirect
  const redirectToYoutube = useCallback((videoLink) => {
    if (videoLink.includes("youtube.com") || videoLink.includes("youtu.be")) {
      window.open(videoLink, "_blank");
    } else {
      window.open(`https://www.youtube.com/watch?v=${videoLink}`, "_blank");
    }
  }, []);

  // Course sharing
  const shareCourse = useCallback((course) => {
    if (navigator.share) {
      navigator.share({
        title: course.title,
        text: `Check out this course: ${course.title}`,
        url: window.location.href
      });
    } else {
      // Fallback to clipboard
      navigator.clipboard.writeText(`${course.title} - ${window.location.href}`);
      setNotificationMessage("Course link copied to clipboard!");
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);
    }
  }, []);

  // Advanced filtering and sorting
  const filteredCourses = useMemo(() => {
    let filtered = courses.filter((course) => {
      const matchesSearch = searchQuery === "" ||
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.language.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesTab = activeTab === "All" ||
        (activeTab === "Popular" && ["BESTSELLER", "POPULAR", "HOT", "TRENDING"].includes(course.badge)) ||
        (activeTab === "New" && course.badge === "NEW");

      const matchesLevel = selectedLevel === "All" || course.level === selectedLevel;
      const matchesLanguage = selectedLanguage === "All" || course.language === selectedLanguage;
      const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
      const matchesBookmarks = !showBookmarksOnly || bookmarks.includes(course.id);

      return matchesSearch && matchesTab && matchesLevel && 
             matchesLanguage && matchesCategory && matchesBookmarks;
    });

    // Sort courses
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return b.rating - a.rating;
        case "title":
          return a.title.localeCompare(b.title);
        case "level":
          const levelOrder = { "Beginner": 1, "Intermediate": 2, "Advanced": 3 };
          return levelOrder[a.level] - levelOrder[b.level];
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchQuery, activeTab, selectedLevel, selectedLanguage, selectedCategory, 
      showBookmarksOnly, bookmarks, sortBy]);

  // Get unique filter options
  const filterOptions = useMemo(() => ({
    levels: [...new Set(courses.map(c => c.level))],
    languages: [...new Set(courses.map(c => c.language))],
    categories: [...new Set(courses.map(c => c.category))]
  }), []);

  const filteredCategories = useMemo(() => {
    return [...new Set(filteredCourses.map((course) => course.category))];
  }, [filteredCourses]);

  // Get badge color
  const getBadgeColor = (badge) => {
    const colors = {
      "HOT": "bg-red-500 text-white",
      "NEW": "bg-green-500 text-white",
      "BESTSELLER": "bg-yellow-500 text-black",
      "TRENDING": "bg-purple-500 text-white",
      "POPULAR": "bg-blue-500 text-white"
    };
    return colors[badge] || "bg-gray-500 text-white";
  };

  const themeClasses = isDarkMode ? 'dark' : '';
  const bgClass = isDarkMode ? 'bg-gray-900' : 'bg-gray-50';
  const textClass = isDarkMode ? 'text-white' : 'text-gray-900';
  const cardClass = isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200';
  const inputClass = isDarkMode ? 'bg-gray-800 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900';

  return (
    <div className={`${themeClasses} min-h-screen transition-colors duration-300`}>
      <div className={`w-full mx-auto ${bgClass} ${textClass} font-['Inter'] pb-12 relative`}>
        {/* Enhanced Notification Popup */}
        {showNotification && (
          <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-2xl z-50 flex items-center space-x-3 border border-blue-100 dark:border-gray-700 animate-slide-in">
            <div className="flex-shrink-0">
              {notificationMessage.includes("Bookmark") ? (
                <BookmarkCheck className="text-blue-600 w-5 h-5" />
              ) : (
                <Heart className="text-red-500 w-5 h-5" />
              )}
            </div>
            <div>
              <p className="text-gray-800 dark:text-gray-200 font-medium">
                {notificationMessage}
              </p>
              <Link href="/Bookmarks" className="text-blue-600 dark:text-blue-400 text-sm hover:underline">
                View your collection
              </Link>
            </div>
            <button
              onClick={() => setShowNotification(false)}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            >
              <X size={16} />
            </button>
          </div>
        )}

        {/* Enhanced Header */}
        <div className="sticky top-0 z-40 backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-700">
          <div className="px-4 py-3">
            <div className="flex items-center justify-between">
              <Link href="/">
                <div className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  <span className="font-medium">Back to Home</span>
                </div>
              </Link>

              <div className="flex items-center space-x-3">
                {/* Theme Toggle */}
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  title="Toggle theme (Ctrl+D)"
                >
                  {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>

                {/* View Mode Toggle */}
                <button
                  onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  title="Toggle view mode"
                >
                  {viewMode === 'grid' ? <List size={20} /> : <Grid size={20} />}
                </button>

                {/* Filter Toggle */}
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  title="Toggle filters"
                >
                  <Filter size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Hero Section */}
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 py-8 px-4 text-center relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-4 left-4 w-20 h-20 bg-white rounded-full animate-float"></div>
              <div className="absolute top-12 right-8 w-16 h-16 bg-white rounded-full animate-float-delayed"></div>
              <div className="absolute bottom-8 left-1/3 w-12 h-12 bg-white rounded-full animate-float"></div>
            </div>

            <div className="relative z-10">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Discover Amazing Courses
              </h1>
              <p className="text-blue-100 text-lg max-w-2xl mx-auto">
                Learn from the best instructors and accelerate your career with our curated collection
              </p>
              <div className="flex justify-center items-center mt-4 space-x-6 text-blue-100">
                <div className="flex items-center">
                  <Users size={20} className="mr-2" />
                  <span>500K+ Students</span>
                </div>
                <div className="flex items-center">
                  <Star size={20} className="mr-2" />
                  <span>4.8 Average Rating</span>
                </div>
                <div className="flex items-center">
                  <TrendingUp size={20} className="mr-2" />
                  <span>Updated Weekly</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Search and Filters */}
        <div className="px-4 py-6 space-y-4">
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search size={20} className="text-gray-400" />
              </div>
              <input
                ref={searchInputRef}
                type="text"
                className={`block w-full pl-12 pr-4 py-3 border-2 rounded-xl ${inputClass} shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-400`}
                placeholder="Search courses, skills, or instructors... (Ctrl+K)"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600"
                >
                  <X size={20} />
                </button>
              )}
            </div>
          </div>

          {/* Filter Panel */}
          {showFilters && (
            <div className={`max-w-4xl mx-auto p-6 ${cardClass} rounded-xl shadow-lg border transition-all`}>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Level</label>
                  <select
                    value={selectedLevel}
                    onChange={(e) => setSelectedLevel(e.target.value)}
                    className={`w-full p-2 border rounded-lg ${inputClass} focus:ring-2 focus:ring-blue-500`}
                  >
                    <option value="All">All Levels</option>
                    {filterOptions.levels.map(level => (
                      <option key={level} value={level}>{level}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Language</label>
                  <select
                    value={selectedLanguage}
                    onChange={(e) => setSelectedLanguage(e.target.value)}
                    className={`w-full p-2 border rounded-lg ${inputClass} focus:ring-2 focus:ring-blue-500`}
                  >
                    <option value="All">All Languages</option>
                    {filterOptions.languages.map(lang => (
                      <option key={lang} value={lang}>{lang}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className={`w-full p-2 border rounded-lg ${inputClass} focus:ring-2 focus:ring-blue-500`}
                  >
                    <option value="All">All Categories</option>
                    {filterOptions.categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Sort By</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className={`w-full p-2 border rounded-lg ${inputClass} focus:ring-2 focus:ring-blue-500`}
                  >
                    <option value="rating">Rating</option>
                    <option value="title">Title</option>
                    <option value="level">Level</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {filteredCourses.length} courses found
                </span>
                <button
                  onClick={() => {
                    setSelectedLevel("All");
                    setSelectedLanguage("All");
                    setSelectedCategory("All");
                    setSortBy("rating");
                  }}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Enhanced Tabs */}
        <div className="flex justify-center px-4 space-x-2 mb-8 overflow-x-auto scrollbar-hide py-1">
          {["All", "Popular", "New", "Bookmarks"].map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`px-6 py-2.5 text-sm font-medium rounded-full transition-all whitespace-nowrap ${
                activeTab === tab
                  ? "bg-blue-600 text-white shadow-lg transform scale-105"
                  : `${cardClass} border hover:shadow-md hover:scale-102`
              }`}
            >
              {tab === "Bookmarks" && (
                <BookmarkCheck size={16} className="inline mr-2" />
              )}
              {tab}
              {tab === "Bookmarks" && bookmarks.length > 0 && (
                <span className="ml-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                  {bookmarks.length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
        )}

        {/* No Results */}
        {!isLoading && filteredCategories.length === 0 && (
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-2">
                {showBookmarksOnly
                  ? "No bookmarked courses found"
                  : `No courses found${searchQuery ? ` for "${searchQuery}"` : ''}`}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {showBookmarksOnly
                  ? "Start bookmarking courses to see them here!"
                  : "Try adjusting your search terms or filters"}
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setShowBookmarksOnly(false);
                  setActiveTab("All");
                  setSelectedLevel("All");
                  setSelectedLanguage("All");
                  setSelectedCategory("All");
                }}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                {showBookmarksOnly ? "View All Courses" : "Clear All Filters"}
              </button>
            </div>
          </div>
        )}

        {/* Enhanced Course Categories */}
        {!isLoading && filteredCategories.map((category) => {
          const categoryCourses = filteredCourses.filter(
            (course) => course.category === category,
          );

          if (categoryCourses.length === 0) return null;

          return (
            <div key={category} className="mb-12 px-4 md:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                {/* Enhanced Category Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <h2 className="text-2xl font-bold mr-4">{category}</h2>
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                      {categoryCourses.length} courses
                    </span>
                  </div>
                  <button className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium flex items-center">
                    View All <ChevronRight size={16} className="ml-1" />
                  </button>
                </div>

                {/* Enhanced Course Cards */}
                <div className="relative">
                  {/* Scroll Buttons */}
                  {categoryCourses.length > 3 && !isMobile && (
                    <>
                      <button
                        onClick={() => scrollLeft(category)}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button
                        onClick={() => scrollRight(category)}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700"
                      >
                        <ChevronRight size={20} />
                      </button>
                    </>
                  )}

                  <div
                    ref={(el) => (scrollContainerRefs.current[category] = el)}
                    className="flex overflow-x-auto scrollbar-hide py-2 space-x-6 snap-x"
                  >
                    {categoryCourses.map((course, index) => (
                      <div
                        key={`${course.id}-${index}`}
                        className={`flex-shrink-0 w-80 ${cardClass} rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-102 snap-start border`}
                      >
                        {/* Course Image */}
                        <div
                          className="relative w-full h-48 cursor-pointer group overflow-hidden"
                          onClick={() => redirectToYoutube(course.videoId)}
                        >
                          <Image
                            src={courseImages[course.image] || "/placeholder.jpg"}
                            alt={course.title}
                            fill={true}
                            sizes="(max-width: 768px) 100vw, 320px"
                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                            priority={course.id <= 6}
                          />

                          {/* Course Stats */}
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                              <div className="flex items-center">
                                <Clock size={14} className="mr-1" />
                                <span>{course.duration || "25h"}</span>
                              </div>
                              <div className="flex items-center">
                                <Users size={14} className="mr-1" />
                                <span>{course.students || "50k"}</span>
                              </div>
                            </div>

                            <div className="flex items-center">
                              <Star size={16} className="text-yellow-400 fill-yellow-400 mr-1" />
                              <span className="font-semibold text-sm">{course.rating}</span>
                            </div>
                          </div>

                          {/* Level Badge */}
                          <div className="flex items-center justify-between mb-4">
                            <span className={`text-xs font-medium px-3 py-1.5 rounded-full ${
                              course.level === "Beginner" 
                                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                                : course.level === "Intermediate"
                                ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                                : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                            }`}>
                              {course.level}
                            </span>
                          </div>

                          {/* Action Button */}
                          <button
                            onClick={() => redirectToYoutube(course.videoId)}
                            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-xl transform hover:scale-105"
                          >
                            <Play size={16} className="mr-2 group-hover:scale-110 transition-transform" />
                            <span>Watch Course</span>
                            <ExternalLink size={14} className="ml-2 opacity-70" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Enhanced Footer */}
        <footer className="mt-16 py-12 border-t border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="font-semibold text-lg mb-4">Quick Stats</h3>
                <div className="space-y-2 text-gray-600 dark:text-gray-400">
                  <p>{courses.length}+ Premium Courses</p>
                  <p>500K+ Happy Students</p>
                  <p>4.8/5 Average Rating</p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-4">Popular Categories</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {filterOptions.categories.slice(0, 6).map(cat => (
                    <button
                      key={cat}
                      onClick={() => {
                        setSelectedCategory(cat);
                        setShowFilters(true);
                      }}
                      className="text-sm px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-4">Keyboard Shortcuts</h3>
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <p><kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-xs">Ctrl+K</kbd> Search</p>
                  <p><kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-xs">Ctrl+D</kbd> Toggle Theme</p>
                  <p><kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-xs">Esc</kbd> Clear/Close</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
              <p className="text-gray-600 dark:text-gray-400">
                © 2024 Course Platform. Discover, Learn, Excel.
              </p>
            </div>
          </div>
        </footer>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }

        @keyframes slide-in {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 6s ease-in-out infinite 2s;
        }

        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }

        .hover\\:scale-105:hover {
          transform: scale(1.05);
        }

        .hover\\:scale-110:hover {
          transform: scale(1.1);
        }

        .snap-x {
          scroll-snap-type: x mandatory;
        }

        .snap-start {
          scroll-snap-align: start;
        }

        kbd {
          font-family: ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace;
        }

        /* Dark mode improvements */
        .dark {
          color-scheme: dark;
        }

        /* Focus styles for accessibility */
        .focus\\:ring-2:focus {
          ring-width: 2px;
        }

        /* Smooth transitions */
        * {
          transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 150ms;
        }

        /* Custom scrollbar for webkit browsers */
        .custom-scrollbar::-webkit-scrollbar {
          height: 6px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.1);
          border-radius: 3px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(0, 0, 0, 0.3);
          border-radius: 3px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </div>
  );
} Play button overlay */}
                          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                                <Play size={24} className="text-blue-600 ml-1" />
                              </div>
                            </div>
                          </div>

                          {/* Enhanced Badges */}
                          {course.badge && (
                            <div className="absolute top-3 right-3">
                              <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${getBadgeColor(course.badge)} shadow-lg`}>
                                {course.badge}
                              </span>
                            </div>
                          )}

                          {/* Language Badge */}
                          <div className="absolute bottom-3 left-3">
                            <span className="bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full flex items-center">
                              <Globe size={12} className="mr-1" />
                              {course.language}
                            </span>
                          </div>

                          {/* Action Buttons */}
                          <div className="absolute top-3 left-3 flex space-x-2">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleBookmark(course.id);
                              }}
                              className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all transform hover:scale-110"
                            >
                              {bookmarks.includes(course.id) ? (
                                <BookmarkCheck size={16} className="text-blue-600" />
                              ) : (
                                <Bookmark size={16} className="text-gray-700" />
                              )}
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleFavorite(course.id);
                              }}
                              className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all transform hover:scale-110"
                            >
                              <Heart
                                size={16}
                                className={favorites.includes(course.id) ? "text-red-500 fill-red-500" : "text-gray-700"}
                              />
                            </button>
                          </div>
                        </div>

                        {/* Enhanced Card Content */}
                        <div className="p-6">
                          <div className="flex items-start justify-between mb-3">
                            <h3 className="font-semibold text-lg line-clamp-2 leading-tight">
                              {course.title}
                            </h3>
                            <button
                              onClick={() => shareCourse(course)}
                              className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors ml-2"
                            >
                              <Share2 size={16} className="text-gray-500" />
                            </button>
                          </div>
z
                          </div>