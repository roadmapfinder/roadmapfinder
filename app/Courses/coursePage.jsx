"use client";
import { useState, useRef, useEffect, useMemo } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Search,
  ExternalLink,
} from "lucide-react";

import Link from "next/link"

// thumbnail for cards
import Image from "next/image";
import sigma from "../CoursesImage/sigma.png";
import babbar from "../CoursesImage/babbar.png";
import backend from "../CoursesImage/backend.jpg";
import apna from "../CoursesImage/apna.jpg";
import native from "../CoursesImage/native.jpg";
import kotlin from "../CoursesImage/kotlin.jpg";
import native2 from "../CoursesImage/native2.jpg";
import flutter from "../CoursesImage/flutter.jpg";
import figma from "../CoursesImage/figma.jpg";
import ui from "../CoursesImage/ui.jpg";
import design from "../CoursesImage/design.jpg";
import uiux from "../CoursesImage/uiux.jpg";
import graphic from "../CoursesImage/graphic.jpg";
import graphics from "../CoursesImage/graphics.jpg";
import logo from "../CoursesImage/logo.jpg";
import canva from "../CoursesImage/canva.jpg";
import js from "../CoursesImage/js.jpg";
import python from "../CoursesImage/python.jpg";
import java from "../CoursesImage/java.jpg";
import cpp from "../CoursesImage/cpp.jpg";
import c from "../CoursesImage/c.jpg";
import php from "../CoursesImage/php.jpg";
import blockchain from "../CoursesImage/blockchain.jpg";
import web3 from "../CoursesImage/web3.jpg";
import block from "../CoursesImage/block.jpg";
import dsajava from "../CoursesImage/dsajava.jpg"
import cppdsa from "../CoursesImage/cppdsa.jpg"
import dsapy from "../CoursesImage/dsapy.jpg"
import dsajs from "../CoursesImage/dsajs.jpg"
import dbms from "../CoursesImage/dbms.jpg"
import mongo from "../CoursesImage/mongo.jpg"
import sql from "../CoursesImage/sql.jpg"
import dataa from "../CoursesImage/dataa.jpg"
import dataaw from "../CoursesImage/dataaw.jpg"
import datas from "../CoursesImage/datas.jpg"
import sys from "../CoursesImage/sys.jpg"
import syse from "../CoursesImage/syse.jpg";
import syss from "../CoursesImage/syss.jpg";
import ai from "../CoursesImage/ai.jpg"
import ml from"../CoursesImage/ml.jpg"
import deep from "../CoursesImage/deep.jpg"
import git from "../CoursesImage/git.jpg"
import githube from "../CoursesImage/Githube.jpg"
import githubh from "../CoursesImage/githubh.jpg"

export default function CoursePlatform() {
  const [activeTab, setActiveTab] = useState("All");
  const [windowWidth, setWindowWidth] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const scrollContainerRefs = useRef({});

  // Handle window resize for responsiveness
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set initial width
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setSearchQuery(""); // Clear search when changing tabs
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setActiveTab("All"); // Reset to All tab when searching
  };

  const scrollLeft = (category) => {
    if (scrollContainerRefs.current[category]) {
      const container = scrollContainerRefs.current[category];
      const scrollAmount = windowWidth >= 768 ? -400 : -280;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const scrollRight = (category) => {
    if (scrollContainerRefs.current[category]) {
      const container = scrollContainerRefs.current[category];
      const scrollAmount = windowWidth >= 768 ? 400 : 280;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
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

  // Course data with 6 categories
  const categories = [
    "Web Development",
    "App Development",
    "UI/UX Design",
    "Graphic Design",
    "Programming",
    "Git & Github",
    "DataStructure & Algorithms",
    "DataBases",
    "Blockchain",
    "Data Anaylsis & Science",
    "Video Editing",
    "AI & ML"

  ];

  // Sample courses data with direct YouTube links
  const courses = [
    // Web Development
    {
      id: 1,
      category: "Web Development",
      title: "Complete Web Development Bootcamp",
      level: "Beginner to Intermediate",
      rating: 4.8,
      image: sigma,
      videoId:
        "https://youtu.be/tVzUXW6siu0?list=PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w",
      badge: "TRENDING",
    },
    {
      id: 2,
      category: "Web Development",
      title: "Complete Mern Stack Course",
      level: "Beginner to Intermediate",
      rating: 4.9,
      image: babbar,
      videoId:
        "https://youtu.be/Vi9bxu-M-ag?list=PLDzeHZWIZsTo0wSBcg4-NMIbC0L8evLrD",
      badge: "NEW",
    },
    {
      id: 3,
      category: "Web Development",
      title: "Complete Backend Course",
      level: "Beginner to advance",
      rating: 4.7,
      image: backend,
      videoId:
        "https://youtu.be/ohIAiuHMKMI?list=PLinedj3B30sDby4Al-i13hQJGQoRQDfPo",
      badge: "POPULAR",
    },
    {
      id: 4,
      category: "Web Development",
      title: "Html Css JS Git $ Github",
      level: "Beginner to advance",
      rating: 4.7,
      image: apna,
      videoId:
        "https://youtu.be/HcOc7P5BMi4?list=PLfqMhTWNBTe0PY9xunOzsP5kmYIz2Hu7i",
      badge: "HOT",
    },

    // App Development
    {
      id: 5,
      category: "App Development",
      title: "React Native Mobile Apps",
      level: "Beginner to Intermediate",
      rating: 4.7,
      image: native,
      videoId:
        "https://youtu.be/kGtEax1WQFg?list=PLRAV69dS1uWSjBBJ-egNNOd4mdblt1P4c",
      badge: "TRENDING",
    },
    {
      id: 6,
      category: "App Development",
      title: "React Native Complete Course in Hindi",
      level: "Beginner to Intermediate",
      rating: 4.6,
      image: native2,
      videoId: "https://youtu.be/KBWWxJdsFlY",
    },
    {
      id: 7,
      category: "App Development",
      title: "Kotlin App Development",
      level: "Beginner to Intermediate",
      rating: 4.8,
      image: kotlin,
      videoId: "https://youtu.be/BxM2DayeOBE",
      badge: "NEW",
    },
    {
      id: 8,
      category: "App Development",
      title: "FLutter App Development",
      level: "Beginner to intermediate",
      rating: 4.8,
      image: flutter,
      videoId: "https://youtu.be/CzRQ9mnmh44",
      badge: "NEW",
    },

    // UI/UX Design
    {
      id: 9,
      category: "UI/UX Design",
      title: "UI/UX Design Fundamentals",
      level: "Beginner to Advanced",
      rating: 4.9,
      image: figma,
      videoId:
        "https://youtu.be/bI6q16ffdgQ?list=PLlHtucAD9KT19ckHqXpPSStZOyDSq9AW-",
      badge: "POPULAR",
    },
    {
      id: 10,
      category: "UI/UX Design",
      title: "UI/UX Designing Course",
      level: "Beginner to Intermediate",
      rating: 4.8,
      image: ui,
      videoId:
        "https://youtu.be/O5IXf8qB9U4?list=PLdvOfoe7PXT0ouChAnR1nHlT8BJIo5hP_",
      badge: "NEW",
    },
    {
      id: 11,
      category: "UI/UX Design",
      title: "Web Designing Course",
      level: "Beginner to Intermediate",
      rating: 4.7,
      image: design,
      videoId: "https://youtu.be/j6Ule7GXaRs",
      badge: "HOT",
    },
    {
      id: 12,
      category: "UI/UX Design",
      title: "Web Designing Essential UI Course",
      level: "Beginner to Intermediate",
      rating: 4.7,
      image: uiux,
      videoId: "https://youtu.be/kbZejnPXyLM",
      badge: "HOT",
    },

    // Graphic Design
    {
      id: 13,
      category: "Graphic Design",
      title: "Graphic Designing Complete Course",
      level: "Beginner to Advance",
      rating: 4.6,
      image: graphic,
      videoId: "https://youtu.be/90Zaa8dH4SU",
      badge: "NEW",
    },
    {
      id: 14,
      category: "Graphic Design",
      title: "Graphic Designing Essential Course",
      level: "Beginner to Intermediate",
      rating: 4.8,
      image: graphics,
      videoId: "https://youtu.be/e_dv7GBHka8",
      badge: "POPULAR",
    },
    {
      id: 15,
      category: "Graphic Design",
      title: "Logo Designing Complete Course",
      level: "Beginner to Advanced",
      rating: 4.9,
      image: logo,
      videoId:
        "https://youtu.be/l9_BM1opTj8?list=PL-c9Rq56P4KmK4sVH49C4rjYh5VH6uK4o",
    },
    {
      id: 16,
      category: "Graphic Design",
      title: "Canva Complete Course",
      level: "Beginner to Advanced",
      rating: 4.9,
      image: canva,
      videoId: "https://youtu.be/rXLvN1FEkOE",
    },

    // Programming
    {
      id: 17,
      category: "Programming",
      title: "Python Programming Crash Course",
      level: "Beginner to Intermediate",
      rating: 4.9,
      image: python,
      videoId: "https://youtu.be/ERCMXc8x7mc",
      badge: "BESTSELLER",
    },
    {
      id: 18,
      category: "Programming",
      title: "Java Complete Crash Course",
      level: "Beginner to Advance",
      rating: 4.7,
      image: java,
      videoId:
        "https://youtu.be/oveyab6lO_E?list=PLA3GkZPtsafY62QhQ030p85HAer0pFDdr",
      badge: "HOT",
    },
    {
      id: 19,
      category: "Programming",
      title: "Php Complete Course",
      level: "Beginner to Advance",
      rating: 4.8,
      image: php,
      videoId: "https://youtu.be/z8gIVootnUQ",
      badge: "BESTSELLER",
    },
    {
      id: 20,
      category: "Programming",
      title: "C Complete Course",
      level: "Beginner to Intermediate",
      rating: 4.8,
      image: c,
      videoId: "https://youtu.be/aZb0iu4uGwA",
      badge: "NEW",
    },
    {
      id: 21,
      category: "Programming",
      title: "C++ Complete Course",
      level: "Beginner to Advance",
      rating: 4.8,
      image: cpp,
      videoId:
        "https://youtu.be/WQoB2z67hvY?list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA",
      badge: "TRENDING",
    },
    {
      id: 22,
      category: "Programming",
      title: "Javascript Complete Course",
      level: "Beginner to Advance",
      rating: 4.8,
      image: js,
      videoId:
        "https://youtu.be/Hr5iLG7sUa0?list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37",
      badge: "HOT",
    },

    // Blockchain
    {
      id: 23,
      category: "Blockchain",
      title: "Blockchain Complete Course",
      level: "Beginner to Advanced",
      rating: 4.7,
      image: blockchain,
      videoId: "https://youtu.be/gyMwXuJrbJQ",
      badge: "POPULAR",
    },
    {
      id: 24,
      category: "Blockchain",
      title: "Web3 Complete Course",
      level: "Beginner to Intermediate",
      rating: 4.8,
      image: web3,
      videoId: "https://youtu.be/ERAxd8gl1Eg",
      badge: "NEW",
    },
    {
      id: 25,
      category: "Blockchain",
      title: "BlockChain Crash Course",
      level: "Beginner",
      rating: 4.9,
      image: block,
      videoId: "https://youtu.be/6aF6p2VUORE",
      badge: "POPULAR",
    },

    // Dsa
    {
      id: 26,
      category: "DataStrucutures & Algorithms",
      title: "DSA in java",
      level: "Beginner to Advanced",
      rating: 4.7,
      image: dsajava,
      videoId:
        "https://youtu.be/54cYKItOkzI?list=PLA3GkZPtsafYzRj2lk6OyquJtRXoDLR_S",
      badge: "POPULAR",
    },
    {
      id: 24,
      category: "DataStrucutures & Algorithms",
      title: "DSA in C++",
      level: "Beginner to Intermediate",
      rating: 4.8,
      image: cppdsa,
      videoId:
        "https://youtu.be/VTLCoHnyACE?list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt",
      badge: "NEW",
    },
    {
      id: 25,
      category: "DataStrucutures & Algorithms",
      title: "DSA in python",
      level: "Beginner to Intermediate",
      rating: 4.9,
      image: dsapy,
      videoId: "https://youtu.be/f9Aje_cN_CY",
      badge: "POPULAR",
    },

    {
      id: 27,
      category: "DataStrucutures & Algorithms",
      title: "DSA in Javascript",
      level: "Beginner to Intermediate",
      rating: 4.9,
      image: dsajs,
      videoId:
        "https://youtu.be/dY-OpnLZRd0?list=PLbtI3_MArDOmSKABu09sEs0SxCibd1wgr",
      badge: "NEW",
    },
    {
      id: 28,
      category: "Database",
      title: "DBMS Complete Course",
      level: "Beginner to Advanced",
      rating: 4.7,
      image: dbms,
      videoId: "https://youtu.be/dl00fOOYLOM",
      badge: "POPULAR",
    },
    {
      id: 29,
      category: "Database",
      title: "SQL Complete Course",
      level: "Beginner to Intermediate",
      rating: 4.8,
      image: sql,
      videoId: "https://youtu.be/hlGoQC332VM",
      badge: "NEW",
    },
    {
      id: 30,
      category: "Database",
      title: "MongoDB Crash Course",
      level: "Beginner to Advance",
      rating: 4.9,
      image: mongo,
      videoId: "https://youtu.be/rU9ZODw5yvU",
      badge: "POPULAR",
    },
    {
      id: 31,
      category: "Data Analysis & Science",
      title: "Data Analysit Complete course ",
      level: "Beginner",
      rating: 4.9,
      image: dataa,
      videoId: "https://youtu.be/wQQR60KtnFY",
      badge: "POPULAR",
    },
    {
      id: 32,
      category: "Data Analysis & Science",
      title: "Data Analysis Crash Course",
      level: "Beginner to Intermediate",
      rating: 4.9,
      image: dataaw,
      videoId:
        "https://youtu.be/VaSjiJMrq24?list=PLjVLYmrlmjGdRs1sGqRrTE-EMraLclJga",
      badge: "HOT",
    },
    {
      id: 33,
      category: "Data Analysis & Science",
      title: "Data Science Complete Course",
      level: "Beginner to Advance",
      rating: 4.9,
      image: datas,
      videoId: "https://youtu.be/gDZ6czwuQ18",
      badge: "DEMANDED",
    },

    {
      id: 34,
      category: "System Design",
      title: "System Design Complete Course",
      level: "Beginner to Intermediate",
      rating: 4.9,
      image: syss,
      videoId:
        "https://youtu.be/SqcXvc3ZmRU?list=PLMCXHnjXnTnvo6alSjVkgxV-VH6EPyvoX",
      badge: "POPULAR",
    },
    {
      id: 35,
      category: "System Design",
      title: "System Design Crash Course",
      level: "Beginner to Advance",
      rating: 4.9,
      image: syse,
      videoId:
        "https://youtu.be/43-X22tdxiI?list=PLA3GkZPtsafZdyC5iucNM_uhqGJ5yFNUM",
      badge: "POPULAR",
    },
    {
      id: 36,
      category: "System Design",
      title: "System Design Fundamental Course",
      level: "Beginner",
      rating: 4.9,
      image: sys,
      videoId: "https://youtu.be/m8Icp_Cid5o",
      badge: "POPULAR",
    },
    {
      id: 37,
      category: "AI & ML",
      title: "Deep Learning Complete Course",
      level: "Beginner to advance",
      rating: 4.9,
      image: deep,
      videoId: "https://youtu.be/rU9ZODw5yvU",
      badge: "DEMANDED",
    },
    {
      id: 38,
      category: "AI & ML",
      title: "Machine Learning Course",
      level: "Beginner to Intermediate",
      rating: 4.9,
      image: ml,
      videoId: "https://youtu.be/LvC68w9JS4Yhttps://youtu.be/rU9ZODw5yvU",
      badge: "NEW",
    },
    {
      id: 39,
      category: "AI & ML",
      title: "Artifical Inteligence Complete Course",
      level: "Beginner to Advance",
      rating: 4.9,
      image: ai,
      videoId: "https://youtu.be/5NgNicANyqM",
      badge: "POPULAR",
    },
    {
      id: 40,
      category: "Git & Github",
      title: "Git & Github Complete course",
      level: "Beginner to Advance",
      rating: 4.9,
      image: git,
      videoId: "https://youtu.be/q8EevlEpQ2A",
      badge: "POPULAR",
    },
    {
      id: 41,
      category: "Git & Github",
      title: "Git & Github Crash Course",
      level: "Beginner to Intermediate ",
      rating: 4.9,
      image: githubh,
      videoId: "https://youtu.be/RDxQEzXN8AU",
      badge: "NEW",
    },
    {
      id: 42,
      category: "Git & Github",
      title: "Git & Github  Course",
      level: "Beginner to Intermediate",
      rating: 4.9,
      image: githube,
      videoId: "https://youtu.be/S7XpTAnSDL4",
      badge: "TRENDING",
    },
  ];

  // Filter courses based on search query and active tab - memoize this for better performance
  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      // Search filter
      const matchesSearch =
        searchQuery === "" ||
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.category.toLowerCase().includes(searchQuery.toLowerCase());

      // Tab filter - removed "Advanced" option
      const matchesTab =
        activeTab === "All" ||
        (activeTab === "Popular" &&
          ["BESTSELLER", "POPULAR", "HOT"].includes(course.badge)) ||
        (activeTab === "New" && course.badge === "NEW");

      return matchesSearch && matchesTab;
    });
  }, [searchQuery, activeTab]);

  // Get unique categories that have courses after filtering - memoize this calculation
  const filteredCategories = useMemo(() => {
    return [...new Set(filteredCourses.map((course) => course.category))];
  }, [filteredCourses]);

  return (
    <div className="w-full mx-auto bg-gray-50 font-['Sora'] pb-12">
      {/* Header Section */}
      <Link href="/">
                <div className="flex items-center text-blue-500 hover:text-blue-600 mb-1 mt-1">
                  <svg
                    className="w-5 h-5 mr-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M19 12H5M12 19l-7-7 7-7"></path>
                  </svg>
                  <span className="text-sm font-medium">Home</span>
                </div>
              </Link>
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-6 px-4 text-center mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-white">
         Internet Best Courses
        </h1>
      </div>

      {/* Search Bar */}
      <div className="max-w-xl mx-auto px-4 mb-6">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={18} className="text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Search for courses, skills, or categories..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      {/* Tabs - Removed "Advanced" tab */}
      <div className="flex justify-center px-4 space-x-4 mb-6">
        {["All", "Popular", "New"].map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`px-4 py-1.5 text-sm rounded-full transition-all ${
              activeTab === tab
                ? "bg-blue-600 text-white shadow-md"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* No results message */}
      {filteredCategories.length === 0 && (
        <div className="text-center py-10">
          <p className="text-gray-600 text-lg">
            No courses found for "{searchQuery}"
          </p>
          <button
            onClick={() => setSearchQuery("")}
            className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Clear Search
          </button>
        </div>
      )}

      {/* Course Categories */}
      {filteredCategories.map((category) => {
        // Filter courses by category (after search and tab filtering)
        const categoryCourses = filteredCourses.filter(
          (course) => course.category === category
        );

        // Skip rendering if no courses in this category
        if (categoryCourses.length === 0) return null;

        return (
          <div key={category} className="mb-8 px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              {/* Category Header */}
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg md:text-xl font-bold text-gray-800">
                  {category}
                </h2>
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  View All
                </a>
              </div>

              {/* Horizontal Scrollable Cards */}
              <div className="relative">
                {categoryCourses.length > 3 && (
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
                    <button
                      onClick={() => scrollLeft(category)}
                      className="p-2 bg-white rounded-full shadow-lg text-gray-700 hover:bg-gray-100 focus:outline-none"
                      aria-label="Scroll left"
                    >
                      <ChevronLeft size={windowWidth < 640 ? 16 : 20} />
                    </button>
                  </div>
                )}

                <div
                  ref={(el) => (scrollContainerRefs.current[category] = el)}
                  className="flex overflow-x-auto scrollbar-hide py-2 space-x-4 snap-x"
                  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                  {categoryCourses.map((course) => (
                    <div
                      key={course.id}
                      className="flex-shrink-0 w-64 sm:w-72 bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow snap-start"
                    >
                      <div
                        className="relative w-full h-36 cursor-pointer"
                        onClick={() => redirectToYoutube(course.videoId)}
                      >
                        <Image
                          src={course.image}
                          alt={course.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 300px"
                          className="object-cover"
                          priority={course.id <= 6} // Prioritize loading of first visible courses
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

                {categoryCourses.length > 3 && (
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
                    <button
                      onClick={() => scrollRight(category)}
                      className="p-2 bg-white rounded-full shadow-lg text-gray-700 hover:bg-gray-100 focus:outline-none"
                      aria-label="Scroll right"
                    >
                      <ChevronRight size={windowWidth < 640 ? 16 : 20} />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
