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
} from "lucide-react";

import Link from "next/link";

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
import dsajava from "../CoursesImage/dsajava.jpg";
import cppdsa from "../CoursesImage/cppdsa.jpg";
import dsapy from "../CoursesImage/dsapy.jpg";
import dsajs from "../CoursesImage/dsajs.jpg";
import dbms from "../CoursesImage/dbms.jpg";
import mongo from "../CoursesImage/mongo.jpg";
import sql from "../CoursesImage/sql.jpg";
import dataa from "../CoursesImage/dataa.jpg";
import dataaw from "../CoursesImage/dataaw.jpg";
import datas from "../CoursesImage/datas.jpg";
import sys from "../CoursesImage/sys.jpg";
import syse from "../CoursesImage/syse.jpg";
import syss from "../CoursesImage/syss.jpg";
import ai from "../CoursesImage/ai.jpg";
import ml from "../CoursesImage/ml.jpg";
import deep from "../CoursesImage/deep.jpg";
import git from "../CoursesImage/git.jpg";
import githube from "../CoursesImage/Githube.jpg";
import githubh from "../CoursesImage/githubh.jpg";
import os from "../CoursesImage/os.jpg";
import osa from "../CoursesImage/osa.jpg";
import osf from "../CoursesImage/osf.jpg";
import osb from "../CoursesImage/osb.jpg";
import networking from "../CoursesImage/networking.jpg";
import networkingk from "../CoursesImage/networkingk.jpg";
import networkingf from "../CoursesImage/networkingf.jpg";
import cybere from "../CoursesImage/cybere.jpg";
import cyberh from "../CoursesImage/cyberh.jpg";

export default function CoursePlatform() {
  const [activeTab, setActiveTab] = useState("All");
  const [windowWidth, setWindowWidth] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [bookmarks, setBookmarks] = useState([]);
  const [showBookmarksOnly, setShowBookmarksOnly] = useState(false);
  const scrollContainerRefs = useRef({});

  // Load bookmarks from localStorage on component mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedBookmarks = localStorage.getItem("courseBookmarks");
      if (savedBookmarks) {
        setBookmarks(JSON.parse(savedBookmarks));
      }
    }
  }, []);

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
    setShowBookmarksOnly(tab === "Bookmarks");
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setActiveTab("All"); // Reset to All tab when searching
    setShowBookmarksOnly(false);
  };

  // Optimize scroll functions using useCallback
  const scrollLeft = useCallback(
    (category) => {
      if (scrollContainerRefs.current[category]) {
        const container = scrollContainerRefs.current[category];
        const scrollAmount = windowWidth >= 768 ? -400 : -280;
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    },
    [windowWidth],
  );

  const scrollRight = useCallback(
    (category) => {
      if (scrollContainerRefs.current[category]) {
        const container = scrollContainerRefs.current[category];
        const scrollAmount = windowWidth >= 768 ? 400 : 280;
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    },
    [windowWidth],
  );

  // Function to handle bookmark toggling
  const toggleBookmark = useCallback((courseId) => {
    setBookmarks((prevBookmarks) => {
      let newBookmarks;
      if (prevBookmarks.includes(courseId)) {
        newBookmarks = prevBookmarks.filter((id) => id !== courseId);
      } else {
        newBookmarks = [...prevBookmarks, courseId];
      }

      // Save bookmark IDs to localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem("courseBookmarks", JSON.stringify(newBookmarks));
        
        // Save all courses data to localStorage
        localStorage.setItem("allCourses", JSON.stringify(courses));
      }

      return newBookmarks;
    });
  }, []);

  // Function to handle direct YouTube redirection
  const redirectToYoutube = useCallback((videoLink) => {
    // Extract YouTube video ID if it's a full URL
    if (videoLink.includes("youtube.com") || videoLink.includes("youtu.be")) {
      window.open(videoLink, "_blank");
    } else {
      // If it's already just the ID
      window.open(`https://www.youtube.com/watch?v=${videoLink}`, "_blank");
    }
  }, []);

  // Course categories
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
    "Data Analysis & Science",
    "Video Editing",
    "AI & ML",
    "Networking",
    "Operating System",
    "CyberSecurity",
  ];

  // Sample courses data with direct YouTube links and language information

  // Sample courses data with direct YouTube links and language indicators
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
      language: "Hindi",
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
      language: "Hindi",
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
      language: "English",
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
      language: "Hindi",
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
      language: "English",
    },
    {
      id: 6,
      category: "App Development",
      title: "React Native Complete Course in Hindi",
      level: "Beginner to Intermediate",
      rating: 4.6,
      image: native2,
      videoId: "https://youtu.be/KBWWxJdsFlY",
      language: "Hindi",
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
      language: "English",
    },
    {
      id: 8,
      category: "App Development",
      title: "Flutter App Development",
      level: "Beginner to intermediate",
      rating: 4.8,
      image: flutter,
      videoId: "https://youtu.be/CzRQ9mnmh44",
      badge: "NEW",
      language: "English",
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
      language: "English",
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
      language: "Hindi",
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
      language: "Hindi",
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
      language: "English",
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
      language: "Hindi",
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
      language: "English",
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
      language: "English",
    },
    {
      id: 16,
      category: "Graphic Design",
      title: "Canva Complete Course",
      level: "Beginner to Advanced",
      rating: 4.9,
      image: canva,
      videoId: "https://youtu.be/rXLvN1FEkOE",
      language: "Hindi",
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
      language: "Hindi",
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
      language: "English",
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
      language: "English",
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
      language: "Hindi",
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
      language: "Hindi",
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
      language: "English",
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
      language: "English",
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
      language: "English",
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
      language: "Hindi",
    },

    // Dsa
    {
      id: 26,
      category: "DataStructure & Algorithms",
      title: "DSA in java",
      level: "Beginner to Advanced",
      rating: 4.7,
      image: dsajava,
      videoId:
        "https://youtu.be/54cYKItOkzI?list=PLA3GkZPtsafYzRj2lk6OyquJtRXoDLR_S",
      badge: "POPULAR",
      language: "English",
    },
    {
      id: 27,
      category: "DataStructure & Algorithms",
      title: "DSA in C++",
      level: "Beginner to Intermediate",
      rating: 4.8,
      image: cppdsa,
      videoId:
        "https://youtu.be/VTLCoHnyACE?list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt",
      badge: "NEW",
      language: "Hindi",
    },
    {
      id: 28,
      category: "DataStructure & Algorithms",
      title: "DSA in python",
      level: "Beginner to Intermediate",
      rating: 4.9,
      image: dsapy,
      videoId: "https://youtu.be/f9Aje_cN_CY",
      badge: "POPULAR",
      language: "English",
    },
    {
      id: 29,
      category: "DataStructure & Algorithms",
      title: "DSA in Javascript",
      level: "Beginner to Intermediate",
      rating: 4.9,
      image: dsajs,
      videoId:
        "https://youtu.be/dY-OpnLZRd0?list=PLbtI3_MArDOmSKABu09sEs0SxCibd1wgr",
      badge: "NEW",
      language: "Hindi",
    },

    // Database
    {
      id: 30,
      category: "Database",
      title: "DBMS Complete Course",
      level: "Beginner to Advanced",
      rating: 4.7,
      image: dbms,
      videoId: "https://youtu.be/dl00fOOYLOM",
      badge: "POPULAR",
      language: "Hindi",
    },
    {
      id: 31,
      category: "Database",
      title: "SQL Complete Course",
      level: "Beginner to Intermediate",
      rating: 4.8,
      image: sql,
      videoId: "https://youtu.be/hlGoQC332VM",
      badge: "NEW",
      language: "English",
    },
    {
      id: 32,
      category: "Database",
      title: "MongoDB Crash Course",
      level: "Beginner to Advance",
      rating: 4.9,
      image: mongo,
      videoId: "https://youtu.be/rU9ZODw5yvU",
      badge: "POPULAR",
      language: "English",
    },

    // Data Analysis & Science
    {
      id: 33,
      category: "Data Analysis & Science",
      title: "Data Analyst Complete course ",
      level: "Beginner",
      rating: 4.9,
      image: dataa,
      videoId: "https://youtu.be/wQQR60KtnFY",
      badge: "POPULAR",
      language: "English",
    },
    {
      id: 34,
      category: "Data Analysis & Science",
      title: "Data Analysis Crash Course",
      level: "Beginner to Intermediate",
      rating: 4.9,
      image: dataaw,
      videoId:
        "https://youtu.be/VaSjiJMrq24?list=PLjVLYmrlmjGdRs1sGqRrTE-EMraLclJga",
      badge: "HOT",
      language: "Hindi",
    },
    {
      id: 35,
      category: "Data Analysis & Science",
      title: "Data Science Complete Course",
      level: "Beginner to Advance",
      rating: 4.9,
      image: datas,
      videoId: "https://youtu.be/gDZ6czwuQ18",
      badge: "DEMANDED",
      language: "English",
    },

    // System Design
    {
      id: 36,
      category: "System Design",
      title: "System Design Complete Course",
      level: "Beginner to Intermediate",
      rating: 4.9,
      image: syss,
      videoId:
        "https://youtu.be/SqcXvc3ZmRU?list=PLMCXHnjXnTnvo6alSjVkgxV-VH6EPyvoX",
      badge: "POPULAR",
      language: "English",
    },
    {
      id: 37,
      category: "System Design",
      title: "System Design Crash Course",
      level: "Beginner to Advance",
      rating: 4.9,
      image: syse,
      videoId:
        "https://youtu.be/43-X22tdxiI?list=PLA3GkZPtsafZdyC5iucNM_uhqGJ5yFNUM",
      badge: "POPULAR",
      language: "Hindi",
    },
    {
      id: 38,
      category: "System Design",
      title: "System Design Fundamental Course",
      level: "Beginner",
      rating: 4.9,
      image: sys,
      videoId: "https://youtu.be/m8Icp_Cid5o",
      badge: "POPULAR",
      language: "English",
    },

    // AI & ML
    {
      id: 39,
      category: "AI & ML",
      title: "Deep Learning Complete Course",
      level: "Beginner to advance",
      rating: 4.9,
      image: deep,
      videoId: "https://youtu.be/rU9ZODw5yvU",
      badge: "DEMANDED",
      language: "English",
    },
    {
      id: 40,
      category: "AI & ML",
      title: "Machine Learning Course",
      level: "Beginner to Intermediate",
      rating: 4.9,
      image: ml,
      videoId: "https://youtu.be/LvC68w9JS4Y",
      badge: "NEW",
      language: "English",
    },
    {
      id: 41,
      category: "AI & ML",
      title: "Artificial Intelligence Complete Course",
      level: "Beginner to Advance",
      rating: 4.9,
      image: ai,
      videoId: "https://youtu.be/5NgNicANyqM",
      badge: "POPULAR",
      language: "Hindi",
    },

    // Git & Github
    {
      id: 42,
      category: "Git & Github",
      title: "Git & Github Complete course",
      level: "Beginner to Advance",
      rating: 4.9,
      image: git,
      videoId: "https://youtu.be/q8EevlEpQ2A",
      badge: "POPULAR",
      language: "Hindi",
    },
    {
      id: 43,
      category: "Git & Github",
      title: "Git & Github Crash Course",
      level: "Beginner to Intermediate ",
      rating: 4.9,
      image: githubh,
      videoId: "https://youtu.be/RDxQEzXN8AU",
      badge: "NEW",
      language: "English",
    },
    {
      id: 44,
      category: "Git & Github",
      title: "Git & Github Course",
      level: "Beginner to Intermediate",
      rating: 4.9,
      image: githube,
      videoId: "https://youtu.be/S7XpTAnSDL4",
      badge: "TRENDING",
      language: "English",
    },
    {
      id: 45,
      category: "Operating System",
      title: "Operating System Course",
      level: "Beginner to Intermediate",
      rating: 4.9,
      image: osf,
      videoId: "https://youtu.be/yK1uBHPdp30",
      badge: "TRENDING",
      language: "English",
    },
    {
      id: 46,
      category: "Operating System",
      title: "Operating System Complete Course",
      level: "Beginner to Intermediate",
      rating: 4.9,
      image: os,
      videoId: "https://youtu.be/A4G0hOI6XyQ",
      badge: "TRENDING",
      language: "Hindi",
    },
    {
      id: 47,
      category: "Operating System",
      title: "Operating Sytem Crash Course",
      level: "Beginner to Advance",
      rating: 4.9,
      image: osb,
      videoId: "https://youtu.be/3obEP8eLsCw",
      badge: "TRENDING",
      language: "Hindi",
    },
    {
      id: 48,
      category: "Operating System",
      title: "Operating System in one shot",
      level: "Beginner",
      rating: 4.9,
      image: osa,
      videoId: "https://youtu.be/8XBtAjKwCm4",
      badge: "TRENDING",
      language: "Hindi",
    },
    {
      id: 49,
      category: "Networking",
      title: "Networking Complete course",
      level: "Beginner to Intermediate",
      rating: 4.9,
      image: networkingk,
      videoId: "https://youtu.be/IPvYjXCsTg8",
      badge: "TRENDING",
      language: "English",
    },
    {
      id: 50,
      category: "Networking",
      title: "networkingf",
      level: "Beginner to Advanced",
      rating: 4.9,
      image: networkingf,
      videoId: "https://youtu.be/qiQR5rTSshw",
      badge: "TRENDING",
      language: "English",
    },

    {
      id: 51,
      category: "Networking",
      title: "Complete Networkng course",
      level: "Beginner to Intermediate",
      rating: 4.9,
      image: networking,
      videoId: "https://youtu.be/qiQR5rTSshw",
      badge: "TRENDING",
      language: "English",
    },
    {
      id: 51,
      category: "CyberSecurity",
      title: "Complete CyberSecurity course",
      level: "Beginner to Intermediate",
      rating: 4.9,
      image: cybere,
      videoId:
        "https://youtu.be/VbEx7B_PTOE?list=PLIhvC56v63IJIujb5cyE13oLuyORZpdkL",
      badge: "TRENDING",
      language: "English",
    },
    {
      id: 51,
      category: "CyberSecurity",
      title: "Complete CyberSecurity course",
      level: "Beginner to Intermediate",
      rating: 4.9,
      image: cyberh,
      videoId: "https://youtu.be/v3iUx2SNspY",
      badge: "TRENDING",
      language: "Hindi",
    },
  ];

  // Optimized filtering using useMemo
  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      // Search filter
      const matchesSearch =
        searchQuery === "" ||
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.language.toLowerCase().includes(searchQuery.toLowerCase());

      // Tab filter
      const matchesTab =
        activeTab === "All" ||
        (activeTab === "Popular" &&
          ["BESTSELLER", "POPULAR", "HOT", "TRENDING"].includes(
            course.badge,
          )) ||
        (activeTab === "New" && course.badge === "NEW");

      // Bookmarks filter
      const matchesBookmarks =
        !showBookmarksOnly || bookmarks.includes(course.id);

      return matchesSearch && matchesTab && matchesBookmarks;
    });
  }, [searchQuery, activeTab, showBookmarksOnly, bookmarks]);

  // Get unique categories that have courses after filtering
  const filteredCategories = useMemo(() => {
    return [...new Set(filteredCourses.map((course) => course.category))];
  }, [filteredCourses]);

  return (
    <div className="w-full mx-auto bg-gray-50 font-['Sora'] pb-12">
      {/* Header Section */}
      <div className="px-4 pt-4 pb-2">
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
      </div>
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
            placeholder="Search courses, skills, categories, or language..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      {/* Tabs - Added Bookmarks tab */}
      <div className="flex justify-center px-4 space-x-4 mb-6 overflow-x-auto scrollbar-hide py-1">
        {["All", "Popular", "New", "Bookmarks"].map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`px-4 py-1.5 text-sm rounded-full transition-all whitespace-nowrap ${
              activeTab === tab
                ? "bg-blue-600 text-white shadow-md"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
            }`}
          >
            {tab === "Bookmarks" ? (
              <div className="flex items-center">
                <BookmarkCheck size={16} className="mr-1" />
                <span>Bookmarks</span>
              </div>
            ) : (
              tab
            )}
          </button>
        ))}
      </div>

      {/* No results message */}
      {filteredCategories.length === 0 && (
        <div className="text-center py-10">
          <p className="text-gray-600 text-lg">
            {showBookmarksOnly
              ? "No bookmarked courses found. Start bookmarking courses to see them here!"
              : `No courses found for "${searchQuery}"`}
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setShowBookmarksOnly(false);
              setActiveTab("All");
            }}
            className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            {showBookmarksOnly ? "View All Courses" : "Clear Search"}
          </button>
        </div>
      )}

      {/* Course Categories */}
      {filteredCategories.map((category) => {
        // Filter courses by category (after search and tab filtering)
        const categoryCourses = filteredCourses.filter(
          (course) => course.category === category,
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
                  {categoryCourses && categoryCourses.length > 0 ? (
                    categoryCourses.map((course, index) => (
                      <div
                        key={`${course.id}-${index}`}
                        className="flex-shrink-0 w-64 sm:w-72 bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow snap-start"
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
                              toggleBookmark(course.id);
                            }}
                            className="absolute top-2 left-2 p-1.5 bg-white bg-opacity-90 rounded-full shadow hover:bg-opacity-100 transition-all"
                          >
                            {bookmarks.includes(course.id) ? (
                              <BookmarkCheck
                                size={16}
                                className="text-blue-600"
                              />
                            ) : (
                              <Bookmark size={16} className="text-gray-700" />
                            )}
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
                    ))
                  ) : (
                    <div className="w-full text-center py-4 text-gray-500">
                      No courses available in this category
                    </div>
                  )}
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
