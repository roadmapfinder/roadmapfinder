"use client";
import Head from "next/head";
import Image from "next/legacy/image";
import {
  Bell,
  Menu,
  Home,
  BookOpen,
  Brain,
  User,
  X,
  PenTool,
  ChevronRight,
  ArrowRight,
  Settings,
  LogOut,
  ChevronLeft,
  FileText,
} from "lucide-react";
import { useState, useEffect } from "react";
import roadmap from "../Images/roadmap.png";
import Link from "next/link";

export default function HomePage() {
  const [username, setUsername] = useState("User");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState("popular");

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Toggle sidebar collapsed state
  const toggleSidebar = () => {
    setSidebarCollapsed(!isSidebarCollapsed);
  };

  // Close mobile menu when screen gets larger
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { name: "Home", icon: <Home size={24} className="mr-3" />, href: "/" },
    {
      name: "Roadmap",
      icon: <ChevronRight size={24} className="mr-3" />,
      href: "/Roadmap",
    },
    {
      name: "Courses",
      icon: <BookOpen size={24} className="mr-3" />,
      href: "/Courses",
    },
    {
      name: "Docs",
      icon: <FileText size={24} className="mr-3" />,
      href: "/Docs",
    },
    {
      name: "Tools",
      icon: <PenTool size={24} className="mr-3" />,
      href: "/TOOLS",
    },
    {
      name: "Profile",
      icon: <User size={24} className="mr-3" />,
      href: "/Profile",
    },
  ];

  // Sample featured roadmaps
  const featuredRoadmaps = [
    { title: "Web Development", users: "15.3k", level: "Beginner" },
    { title: "Dsa", users: "12.8k", level: "Intermediate" },
    { title: "UX/UI Design", users: "9.5k", level: "All levels" },
  ];

  // Sample popular courses
  const popularCourses = [
    { title: "Mern Stack", duration: "4h 30m", rating: 4.8 },
    { title: "UI/UX Designing", duration: "6h 15m", rating: 4.9 },
    { title: "Java with Dsa", duration: "8h", rating: 4.7 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex font-['Sora']">
      {/* Desktop Sidebar */}
      <aside
        className={`bg-white shadow-lg fixed inset-y-0 left-0 z-20 transform transition-all duration-300 ease-in-out
          ${isSidebarCollapsed ? "w-20" : "w-66"} 
          hidden md:block`}
      >
        <div className="flex flex-col h-full">
          <div
            className={`p-5 flex ${
              isSidebarCollapsed ? "justify-center" : "justify-between"
            } items-center border-b`}
          >
            {!isSidebarCollapsed && (
              <h1 className="text-xl font-bold text-blue-600">RoadmapFinder</h1>
            )}

            <button
              onClick={toggleSidebar}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              {isSidebarCollapsed ? (
                <ChevronRight size={24} />
              ) : (
                <ChevronLeft size={24} />
              )}
            </button>
          </div>
          <hr className="text-blue-50 " />
          <div className="p-5 flex-grow">
            <nav className="space-y-6">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={`flex items-center ${
                    item.href === "/Roadmap"
                      ? "text-blue-600 font-semibold"
                      : "text-gray-600"
                  } hover:text-blue-600 transition-colors py-2 px-3 rounded-lg ${
                    item.href === "/Roadmap" ? "bg-blue-50" : ""
                  } hover:bg-blue-50`}
                >
                  <div className={isSidebarCollapsed ? "mx-auto" : ""}>
                    {item.icon}
                  </div>
                  {!isSidebarCollapsed && <span>{item.name}</span>}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </aside>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-gray-800 md:hidden transition-opacity duration-300 ease-in-out z-30 ${
          isMobileMenuOpen
            ? "opacity-75 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMobileMenu}
      ></div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-y-0 left-0 max-w-xs w-full bg-white shadow-xl z-40 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-5 border-b">
          <h1 className="text-xl font-bold text-blue-600">RoadmapFinder</h1>
          <button onClick={toggleMobileMenu} className="text-gray-600">
            <X size={24} />
          </button>
        </div>

        <div className="p-5">
          <nav className="space-y-6">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`flex items-center ${
                  item.href === "/Roadmap"
                    ? "text-blue-600 font-semibold"
                    : "text-gray-600"
                } hover:text-blue-600 transition-colors`}
                onClick={toggleMobileMenu}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

          <div className="mt-8 pt-5 border-t">
            <h3 className="text-sm font-medium text-gray-500 mb-3">Account</h3>
            <Link
              href="/logout"
              className="flex items-center text-gray-600 hover:text-blue-600 transition-colors py-2"
              onClick={toggleMobileMenu}
            >
              <LogOut size={20} className="mr-3" />
              <span>Logout</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main
        className={`flex-1 transition-all duration-300 ${
          isSidebarCollapsed ? "md:ml-20" : "md:ml-72"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 py-6">
          {/* Mobile Header */}
          <header className="flex justify-between items-center mb-6 md:hidden">
            <h1 className="text-2xl font-bold text-blue-600">RoadmapFinder</h1>
            <div className="flex gap-4 items-center">
           
              <button className="text-gray-800">
                 <Link href="/Notification">
                <Bell size={24} />
                   </Link>
              </button>
             
              <button className="text-gray-800" onClick={toggleMobileMenu}>
                <Menu size={28} />
              </button>
            </div>
          </header>

          {/* Desktop Header */}
          <header className="hidden md:flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Dashboard</h2>
              <p className="text-gray-500">Welcome back, {username}</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 relative bg-white rounded-full shadow-sm hover:shadow-md transition-all">
                <Link href="/Notification">
                <Bell size={22} className="text-gray-700" />
                  </Link>
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center gap-3 bg-white py-2 px-4 rounded-full shadow-sm">
                <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <User size={16} className="text-blue-600" />
                </div>
                <span className="text-gray-800 font-medium">{username}</span>
              </div>
            </div>
          </header>

          {/* Mobile Hero Section */}
          <section className="md:hidden mb-6">
            <div className="relative h-48 w-full rounded-xl overflow-hidden mb-4">
              <Image
                src={roadmap}
                alt="Roadmap illustration"
                layout="fill"
                objectFit="cover"
                className="brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <h2 className="text-2xl font-bold text-white leading-tight">
                  Find your perfect path to success
                </h2>
              </div>
            </div>
            <p className="text-gray-500 text-sm mb-1">Welcome, {username}</p>
            <p className="text-medium text-[#6B7280] mb-4">
              Expert roadmaps, smart resources and AI-powered guidance to build
              your success journey
            </p>
          </section>

          {/* Mobile Action Buttons */}
          <section className="flex gap-3 mb-8 md:hidden">
            <Link href="/Roadmap" className="flex-1">
              <button className="bg-blue-600 text-white text-center py-3 px-4 rounded-xl text-lg font-semibold w-full hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                <ChevronRight size={18} />
                Roadmap
              </button>
            </Link>
            <Link href="/Courses" className="flex-1">
              <button className="bg-white text-blue-600 text-center py-3 px-3 rounded-xl text-lg font-semibold border border-blue-600 hover:bg-blue-50 transition-colors w-full flex items-center justify-center gap-2">
                <BookOpen size={18} />
                Courses
              </button>
            </Link>
          </section>

          {/* Desktop Hero Section */}
          <section className="hidden md:flex bg-white rounded-2xl shadow-md overflow-hidden mb-12">
            <div className="md:w-1/2 p-10 flex flex-col justify-center">
              <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
                Find your perfect path and turn your dream into success.
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Expert roadmaps, smart resources, and AI-powered guidance -
                build your own success journey
              </p>
              <div className="flex gap-4">
                <Link href="/Roadmap" className="flex-none">
                  <button className="bg-blue-600 text-white text-center py-3 px-6 rounded-xl text-lg font-bold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                    Explore Roadmaps
                    <ArrowRight size={18} />
                  </button>
                </Link>
                <Link href="/Courses" className="flex-none">
                  <button className="bg-white text-blue-600 text-center py-3 px-6 rounded-xl text-lg font-bold border border-blue-600 hover:bg-blue-50 transition-colors">
                    Browse Courses
                  </button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 relative flex items-center justify-center p-6">
              <Image
                src={roadmap}
                alt="Roadmap illustration"
                width={500}
                height={400}
                className="object-contain rounded-xl"
              />
            </div>
          </section>

          {/* Content Tabs - Desktop only */}
          <div className="hidden md:block mb-8">
            <div className="flex border-b">
              <button
                className={`py-4 px-6 font-medium text-lg ${
                  activeTab === "popular"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveTab("popular")}
              >
                Popular Roadmaps
              </button>
              <button
                className={`py-4 px-6 font-medium text-lg ${
                  activeTab === "courses"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveTab("courses")}
              >
                Featured Courses
              </button>
              <button
                className={`py-4 px-6 font-medium text-lg ${
                  activeTab === "progress"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveTab("progress")}
              >
                Your Progress
              </button>
            </div>
          </div>

          {/* Mobile Featured Roadmaps Section */}
          <section className="md:hidden mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Popular Roadmaps
            </h3>
            <div className="space-y-4">
              {featuredRoadmaps.map((roadmap, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <ChevronRight size={20} className="text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">
                        {roadmap.title}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {roadmap.users} users
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs">
                      {roadmap.level}
                    </span>
                    <Link href="/Roadmap">
                      <button className="text-blue-600 text-sm font-medium flex items-center gap-1">
                        View <ArrowRight size={14} />
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Mobile Popular Courses Section */}
          <section className="md:hidden mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Featured Courses
            </h3>
            <div className="space-y-4">
              {popularCourses.map((course, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <BookOpen size={20} className="text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">
                        {course.title}
                      </h4>
                      <p className="text-sm text-gray-500">{course.duration}</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="bg-yellow-50 text-yellow-700 px-2 py-1 rounded-full text-xs flex items-center">
                      ★ {course.rating}
                    </span>
                    <Link href="/Courses">
                      <button className="text-blue-600 text-sm font-medium flex items-center gap-1">
                        Start <ArrowRight size={14} />
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Desktop Featured Content Section */}
          <section className="hidden md:block mb-12">
            {activeTab === "popular" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {featuredRoadmaps.map((roadmap, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <ChevronRight size={24} className="text-blue-600" />
                      </div>
                      <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                        {roadmap.level}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {roadmap.title}
                    </h3>
                    <p className="text-gray-500 mb-4">
                      {roadmap.users} users following
                    </p>
                    <Link href="/Roadmap">
                      <button className="text-blue-600 font-medium flex items-center gap-1 hover:gap-2 transition-all">
                        View Roadmap <ArrowRight size={16} />
                      </button>
                    </Link>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "courses" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {popularCourses.map((course, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <BookOpen size={24} className="text-blue-600" />
                      </div>
                      <span className="bg-yellow-50 text-yellow-700 px-3 py-1 rounded-full text-sm flex items-center">
                        ★ {course.rating}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {course.title}
                    </h3>
                    <p className="text-gray-500 mb-4">
                      Duration: {course.duration}
                    </p>
                    <Link href="/Course">
                      <button className="text-blue-600 font-medium flex items-center gap-1 hover:gap-2 transition-all">
                        Start Learning <ArrowRight size={16} />
                      </button>
                    </Link>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "progress" && (
              <div className="bg-white p-8 rounded-xl shadow-sm text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User size={32} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Track Your Progress
                </h3>
                <p className="text-gray-600 mb-6 max-w-md mx-auto">
                  Start a roadmap or course to track your learning journey and
                  see your progress here
                </p>
                <div className="flex justify-center gap-4">
                  <Link href="/Roadmap">
                    <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                      Find a Roadmap
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </section>

          {/* How it works Section */}
          <section className="mt-12 mb-12">
            <h3 className="text-gray-900 text-2xl font-bold text-center mb-8">
              How RoadmapFinder Works
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm hover:shadow-md transition-all text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-blue-600 font-bold text-xl">1</span>
                </div>
                <h4 className="text-gray-900 font-bold text-lg md:text-xl mb-3">
                  Choose a Roadmap
                </h4>
                <p className="text-gray-600 text-sm md:text-base">
                  Select from our curated collection of career paths and
                  development roadmaps designed by industry experts
                </p>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm hover:shadow-md transition-all text-center relative">
                <div className="hidden md:block absolute top-16 -left-4 w-8 border-t-2 border-dashed border-blue-200"></div>
                <div className="hidden md:block absolute top-16 -right-4 w-8 border-t-2 border-dashed border-blue-200"></div>

                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-blue-600 font-bold text-xl">2</span>
                </div>
                <h4 className="text-gray-900 font-bold text-lg md:text-xl mb-3">
                  Follow the Best Course
                </h4>
                <p className="text-gray-600 text-sm md:text-base">
                  Follow best curated course step by step and keep practice to
                  master.
                </p>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm hover:shadow-md transition-all text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-blue-600 font-bold text-xl">3</span>
                </div>
                <h4 className="text-gray-900 font-bold text-lg md:text-xl mb-3">
                  Get Tools & Docs
                </h4>
                <p className="text-gray-600 text-sm md:text-base">
                  Get best Tech tools or Docs that enhanced your Skills.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
