
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, Star, ExternalLink, Bookmark, BookmarkCheck, Globe } from "lucide-react";

export default function Bookmarks() {
  const [bookmarkedCourses, setBookmarkedCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load bookmarked courses from localStorage on component mount
  useEffect(() => {
    const loadBookmarks = () => {
      try {
        // Get bookmarked course IDs from localStorage
        const savedBookmarks = localStorage.getItem("courseBookmarks");
        const bookmarkIds = savedBookmarks ? JSON.parse(savedBookmarks) : [];

        // Get all courses from localStorage (assuming courses are stored there)
        const allCoursesData = localStorage.getItem("allCourses");
        const allCourses = allCoursesData ? JSON.parse(allCoursesData) : [];

        // Filter courses to only include bookmarked ones
        const bookmarked = allCourses.filter(course => bookmarkIds.includes(course.id));
        setBookmarkedCourses(bookmarked);
      } catch (error) {
        console.error("Error loading bookmarks:", error);
        setBookmarkedCourses([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadBookmarks();
  }, []);

  // Function to remove a bookmark
  const removeBookmark = (courseId) => {
    try {
      // Get current bookmarks
      const savedBookmarks = localStorage.getItem("courseBookmarks");
      const bookmarkIds = savedBookmarks ? JSON.parse(savedBookmarks) : [];

      // Remove the course ID from bookmarks
      const updatedBookmarkIds = bookmarkIds.filter(id => id !== courseId);

      // Save updated bookmarks back to localStorage
      localStorage.setItem("courseBookmarks", JSON.stringify(updatedBookmarkIds));

      // Update state to reflect changes
      setBookmarkedCourses(prev => prev.filter(course => course.id !== courseId));
    } catch (error) {
      console.error("Error removing bookmark:", error);
    }
  };

  // Function to handle direct YouTube redirection
  const redirectToYoutube = (videoLink) => {
    // Extract YouTube video ID if it's a full URL
    if (videoLink.includes("youtube.com") || videoLink.includes("youtu.be")) {
      window.open(videoLink, "_blank");
    } else {
      // If it's already just the ID
      window.open(`https://www.youtube.com/watch?v=${videoLink}`, "_blank");
    }
  };

  return (
    <div className="w-full mx-auto bg-gray-50 font-['Sora'] pb-12 min-h-screen">
      {/* Header Section */}
      <div className="px-4 pt-4 pb-2">
        <Link href="/Courses">
          <div className="flex items-center text-blue-500 hover:text-blue-600 mb-1 mt-1">
            <ChevronLeft className="w-5 h-5 mr-1" />
            <span className="text-sm font-medium">Back to Courses</span>
          </div>
        </Link>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-6 px-4 text-center mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-white">
          Your Bookmarked Courses
        </h1>
      </div>

      {/* Content Section */}
      <div className="px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        {isLoading ? (
          <div className="text-center py-10">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-500 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
            <p className="mt-4 text-gray-600">Loading your bookmarked courses...</p>
          </div>
        ) : bookmarkedCourses.length === 0 ? (
          <div className="text-center py-10">
            <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
              <BookmarkCheck size={48} className="mx-auto text-gray-400 mb-4" />
              <h2 className="text-xl font-semibold text-gray-800 mb-2">No Bookmarks Found</h2>
              <p className="text-gray-600 mb-4">You haven't bookmarked any courses yet. Explore courses and bookmark your favorites to find them here.</p>
              <Link href="/Courses">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                  Explore Courses
                </button>
              </Link>
            </div>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <p className="text-gray-600">You have {bookmarkedCourses.length} bookmarked {bookmarkedCourses.length === 1 ? 'course' : 'courses'}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {bookmarkedCourses.map((course) => (
                <div
                  key={course.id}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <div
                    className="relative w-full h-36 cursor-pointer"
                    onClick={() => redirectToYoutube(course.videoId)}
                  >
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill={true}
                      sizes="(max-width: 768px) 100vw, 300px"
                      className="object-cover"
                    />

                    {/* Play button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity">
                      <ExternalLink size={46} className="text-white" />
                    </div>

                    {/* Badge (optional) */}
                    {course.badge && (
                      <div className="absolute top-2 right-2">
                        <span
                          className={`text-xs font-bold px-2 py-1 rounded ${
                            course.badge === "HOT"
                              ? "bg-red-500 text-white"
                              : course.badge === "NEW"
                                ? "bg-green-500 text-white"
                                : course.badge === "BESTSELLER"
                                  ? "bg-yellow-500 text-black"
                                  : course.badge === "TRENDING"
                                    ? "bg-purple-500 text-white"
                                    : course.badge === "POPULAR"
                                      ? "bg-blue-500 text-white"
                                      : "bg-gray-700 text-white"
                          }`}
                        >
                          {course.badge}
                        </span>
                      </div>
                    )}

                    {/* Language badge */}
                    <div className="absolute bottom-2 left-2">
                      <span className="bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded flex items-center">
                        <Globe size={12} className="mr-1" />
                        {course.language}
                      </span>
                    </div>

                    {/* Bookmark button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent triggering redirectToYoutube
                        removeBookmark(course.id);
                      }}
                      className="absolute top-2 left-2 p-1.5 bg-white bg-opacity-90 rounded-full shadow hover:bg-opacity-100 transition-all"
                    >
                      <BookmarkCheck size={16} className="text-blue-600" />
                    </button>
                  </div>

                  <div className="p-3">
                    <h3 className="font-medium text-sm line-clamp-2 h-10 mb-2">
                      {course.title}
                    </h3>

                    <div className="flex justify-between items-center mb-3">
                      <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                        {course.level}
                      </span>
                      <div className="flex items-center">
                        <Star
                          size={14}
                          className="text-yellow-400 fill-yellow-400 mr-1"
                        />
                        <span className="text-xs font-medium">
                          {course.rating}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => redirectToYoutube(course.videoId)}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium p-2 rounded transition-colors flex items-center justify-center"
                    >
                      <span>Watch on YouTube</span>
                      <ExternalLink size={14} className="ml-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}