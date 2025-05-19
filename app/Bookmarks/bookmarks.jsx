
"use client";
import { useState, useEffect } from "react";
import Image from "next/legacy/image";
import Link from "next/link";
import { ChevronLeft, Star, ExternalLink, Globe } from "lucide-react";

export default function BookmarksPage() {
  const [bookmarkedCourses, setBookmarkedCourses] = useState([]);

  import courses from '../lib/courseData';

  useEffect(() => {
    // Load bookmarked courses from localStorage
    const savedBookmarks = localStorage.getItem("courseBookmarks");
    if (savedBookmarks) {
      const bookmarkIds = JSON.parse(savedBookmarks);
      
      // Get course data from CoursePage
      const allCourses = courses; // This will be imported from a shared location
      const bookmarkedCoursesData = allCourses.filter(course => 
        bookmarkIds.includes(course.id)
      );
      setBookmarkedCourses(bookmarkedCoursesData);
    }
  }, []);

  const redirectToYoutube = (videoLink) => {
    if (videoLink.includes("youtube.com") || videoLink.includes("youtu.be")) {
      window.open(videoLink, "_blank");
    } else {
      window.open(`https://www.youtube.com/watch?v=${videoLink}`, "_blank");
    }
  };

  return (
    <div className="w-full mx-auto bg-gray-50 font-['Sora'] pb-12">
      <div className="px-4 pt-4 pb-2">
        <Link href="/">
          <div className="flex items-center text-blue-500 hover:text-blue-600 mb-1 mt-1">
            <ChevronLeft className="w-5 h-5 mr-1" />
            <span className="text-sm font-medium">Back</span>
          </div>
        </Link>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-6 px-4 text-center mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-white">
          Your Bookmarked Courses
        </h1>
      </div>

      <div className="px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity">
                  <ExternalLink size={46} className="text-white" />
                </div>
                {course.badge && (
                  <div className="absolute top-2 right-2">
                    <span className={`text-xs font-bold px-2 py-1 rounded ${
                      course.badge === "HOT" ? "bg-red-500 text-white" :
                      course.badge === "NEW" ? "bg-green-500 text-white" :
                      course.badge === "BESTSELLER" ? "bg-yellow-500 text-black" :
                      course.badge === "TRENDING" ? "bg-purple-500 text-white" :
                      course.badge === "POPULAR" ? "bg-blue-500 text-white" :
                      "bg-gray-700 text-white"
                    }`}>
                      {course.badge}
                    </span>
                  </div>
                )}
                <div className="absolute bottom-2 left-2">
                  <span className="bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded flex items-center">
                    <Globe size={12} className="mr-1" />
                    {course.language}
                  </span>
                </div>
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
                    <Star size={14} className="text-yellow-400 fill-yellow-400 mr-1" />
                    <span className="text-xs font-medium">{course.rating}</span>
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

          {bookmarkedCourses.length === 0 && (
            <div className="col-span-full text-center py-10">
              <p className="text-gray-600 text-lg">No bookmarked courses yet.</p>
              <Link href="/Courses">
                <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Browse Courses
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
