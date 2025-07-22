"use client";
import { useState, useCallback } from "react";
import {
  Star,
  ExternalLink,
  Bookmark,
  BookmarkCheck,
  Globe,
  TrendingUp,
 
  Play,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Import your images
import sigma from "../CoursesImage/sigma.png";
import ui from "../CoursesImage/ui.jpg";
import cpp from "../CoursesImage/cpp.jpg";
import js from "../CoursesImage/js.jpg";
import osf from "../CoursesImage/osf.jpg";
import os from "../CoursesImage/os.jpg";
import osb from "../CoursesImage/osb.jpg";
import osa from "../CoursesImage/osa.jpg";
import networking from "../CoursesImage/networking.jpg";
import networkingk from "../CoursesImage/networkingk.jpg";
import networkingf from "../CoursesImage/networkingf.jpg";
import cybere from "../CoursesImage/cybere.jpg";
import cyberh from "../CoursesImage/cyberh.jpg";
import laravel from "../CoursesImage/laravel.jpg";
import backendh from "../CoursesImage/backendh.jpg";
import swift from "../CoursesImage/swift.jpg";
import post from "../CoursesImage/post.jpg";
import githube from "../CoursesImage/Githube.jpg";

// Image mapping object
const imageMap = {
  sigma,ui, cpp, js, osf, os, osb, osa,
  networking, networkingk, networkingf, cybere, cyberh,
  laravel, backendh, swift, post, githube
};

// Trending courses data (6-8 courses with TRENDING badges and popular ones)
const trendingCoursesData = [
  {
    id: 1,
    category: "Web Development",
    title: "Complete Web Development Bootcamp",
    level: "Beginner to Intermediate",
    rating: 4.8,
    image: "sigma",
    videoId: "https://youtu.be/tVzUXW6siu0?list=PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w",
    badge: "TRENDING",
    language: "Hindi"
  },
  {
    id: 10,
    category: "UI/UX Design",
    title: "UI/UX Designing Course",
    level: "Beginner to Intermediate",
    rating: 4.8,
    image: "ui",
    videoId: "https://youtu.be/O5IXf8qB9U4?list=PLdvOfoe7PXT0ouChAnR1nHlT8BJIo5hP_",
    badge: "NEW",
    language: "Hindi"
  },
  {
    id: 21,
    category: "Programming",
    title: "C++ Complete Course",
    level: "Beginner to Advance",
    rating: 4.8,
    image: "cpp",
    videoId: "https://youtu.be/WQoB2z67hvY?list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA",
    badge: "TRENDING",
    language: "Hindi"
  },
  {
    id: 22,
    category: "Programming",
    title: "Javascript Complete Course",
    level: "Beginner to Advance",
    rating: 4.8,
    image: "js",
    videoId: "https://youtu.be/Hr5iLG7sUa0?list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37",
    badge: "HOT",
    language: "Hindi"
  },
  {
    id: 45,
    category: "Operating System",
    title: "Operating System Course",
    level: "Beginner to Intermediate",
    rating: 4.9,
    image: "osf",
    videoId: "https://youtu.be/yK1uBHPdp30",
    badge: "TRENDING",
    language: "English"
  },
  {
    id: 49,
    category: "Networking",
    title: "Networking Complete course",
    level: "Beginner to Intermediate",
    rating: 4.9,
    image: "networkingk",
    videoId: "https://youtu.be/IPvYjXCsTg8",
    badge: "TRENDING",
    language: "English"
  },
  {
    id: 52,
    category: "CyberSecurity",
    title: "Complete CyberSecurity course",
    level: "Beginner to Intermediate",
    rating: 4.9,
    image: "cybere",
    videoId: "https://youtu.be/VbEx7B_PTOE?list=PLIhvC56v63IJIujb5cyE13oLuyORZpdkL",
    badge: "TRENDING",
    language: "English"
  },
  {
    id: 63,
    category: "Frameworks & Libraries",
    title: "Laravel complete php backend course",
    level: "Beginner to Intermediate",
    rating: 4.9,
    image: "laravel",
    videoId: "https://youtu.be/bixnv3xHccs",
    badge: "TRENDING",
    language: "Hindi"
  }
];

export default function TrendingCourses() {
  const [bookmarks, setBookmarks] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [loading, setLoading] = useState({});

  const toggleBookmark = useCallback((courseId) => {
    setBookmarks((prevBookmarks) => {
      let newBookmarks;
      if (prevBookmarks.includes(courseId)) {
        newBookmarks = prevBookmarks.filter((id) => id !== courseId);
      } else {
        newBookmarks = [...prevBookmarks, courseId];
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 3000);
      }
      return newBookmarks;
    });
  }, []);

  const redirectToYoutube = useCallback((videoLink, courseId) => {
    setLoading(prev => ({ ...prev, [courseId]: true }));

    if (videoLink.includes("youtube.com") || videoLink.includes("youtu.be")) {
      window.open(videoLink, "_blank");
    } else {
      window.open(`https://www.youtube.com/watch?v=${videoLink}`, "_blank");
    }

    setTimeout(() => {
      setLoading(prev => ({ ...prev, [courseId]: false }));
    }, 1000);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Notification Popup */}
      {showNotification && (
        <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg z-50 flex items-center space-x-3 border border-blue-100">
          <BookmarkCheck className="text-blue-600 w-5 h-5" />
          <div>
            <p className="text-gray-800 font-medium">Course Bookmarked!</p>
            <Link href="/Bookmarks" className="text-blue-600 text-sm hover:underline">
              View your bookmarks
            </Link>
          </div>
        </div>
      )}

      {/* Main Content Area - Adjusted for sidebar */}
      <div className="ml-0 lg:ml-1 transition-all duration-300">
        <section className="py-5 lg:py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Header Section */}
            <div className="text-center mb-8 lg:mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-50 to-red-50 text-orange-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
            
                <TrendingUp size={16} />
                Trending Now
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                🔥 Trending Courses
              </h2>
              <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
                Don't miss out on these hot courses that everyone's talking about. 
                Join thousands of learners already enrolled!
              </p>
            </div>

            {/* Courses Grid - Desktop: 3 per row, Mobile: 1 per row (horizontal cards) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 mb-8 lg:mb-12">
              {trendingCoursesData.map((course, index) => (
                <div
                  key={`${course.id}-${index}`}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-lg hover:border-blue-200 transition-all duration-200 cursor-pointer group overflow-hidden"
                >
                  {/* Horizontal Card Layout */}
                  <div className="flex h-full">
                    {/* Image Section */}
                    <div 
                      className="relative w-32 lg:w-40 xl:w-32 h-32 lg:h-36 xl:h-32 flex-shrink-0 overflow-hidden"
                      onClick={() => redirectToYoutube(course.videoId, course.id)}
                    >
                      <Image
                        src={imageMap[course.image] || "/placeholder.jpg"}
                        alt={course.title}
                        fill={true}
                        sizes="(max-width: 768px) 128px, 160px"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        priority={index < 6}
                      />

                      {/* Play button overlay */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white bg-opacity-90 rounded-full p-2 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                          <Play size={16} className="text-gray-800 ml-0.5" />
                        </div>
                      </div>

                      {/* Badge */}
                      {course.badge && (
                        <div className="absolute top-2 right-2">
                          <span
                            className={`text-xs font-bold px-2 py-1 rounded-full shadow-lg ${
                              course.badge === "HOT"
                                ? "bg-gradient-to-r from-red-500 to-orange-500 text-white"
                                : course.badge === "NEW"
                                  ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white"
                                  : course.badge === "BESTSELLER"
                                    ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-black"
                                    : course.badge === "TRENDING"
                                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white animate-pulse"
                                      : course.badge === "POPULAR"
                                        ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white"
                                        : "bg-gray-700 text-white"
                            }`}
                          >
                            {course.badge}
                          </span>
                        </div>
                      )}

                      {/* Language badge */}
                      <div className="absolute bottom-2 left-2">
                        <span className="bg-black bg-opacity-80 text-white text-xs px-2 py-1 rounded-full flex items-center backdrop-blur-sm">
                          <Globe size={10} className="mr-1" />
                          {course.language}
                        </span>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex-1 p-4 flex flex-col justify-between min-w-0">
                      {/* Top content */}
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                            {course.category}
                          </span>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleBookmark(course.id);
                            }}
                            className="p-1 hover:bg-gray-100 rounded-full transition-colors duration-200"
                          >
                            {bookmarks.includes(course.id) ? (
                              <BookmarkCheck size={14} className="text-blue-600" />
                            ) : (
                              <Bookmark size={14} className="text-gray-700" />
                            )}
                          </button>
                        </div>

                        <h3 className="font-semibold text-gray-800 text-sm line-clamp-2 mb-2 leading-tight">
                          {course.title}
                        </h3>

                        <div className="flex justify-between items-center mb-3">
                          <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md font-medium">
                            {course.level}
                          </span>
                          <div className="flex items-center">
                            <Star size={12} className="text-yellow-400 fill-yellow-400 mr-1" />
                            <span className="text-xs font-semibold text-gray-700">{course.rating}</span>
                          </div>
                        </div>
                      </div>

                      {/* Bottom button */}
                      <button
                        onClick={() => redirectToYoutube(course.videoId, course.id)}
                        disabled={loading[course.id]}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 rounded-md transition-all duration-200 flex items-center justify-center group transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {loading[course.id] ? (
                          <>
                            <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                            Loading...
                          </>
                        ) : (
                          <>
                            <span>Watch Now</span>
                            <ExternalLink size={12} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA Section */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 lg:p-8">
              <div className="text-center mb-6">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
                  Ready to start learning?
                </h3>
                <p className="text-gray-600">
                  Join thousands of developers advancing their skills with our trending courses
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/Courses" 
                  className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <span>Explore All Courses</span>
                  <ExternalLink size={18} />
                </Link>
                <Link 
                  href="/RoadmapPage"
                  className="border border-gray-300 text-gray-700 px-6 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <span>View Learning Paths</span>
                  <TrendingUp size={18} />
                </Link>
              </div>
            </div>

          </div>
        </section>
      </div>
    </div>
  );
}