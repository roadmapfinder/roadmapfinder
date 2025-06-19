"use client";

import Image from "next/image";
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
  CheckCircle,
  Play,
  Map,
  Wrench,
  FileText,
  Users,
  Newspaper,
  Star,
  Sparkles,
  Zap,
  Globe, 

} from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "../lib/auth";
import { auth } from "../lib/firebase";
import Link from "next/link";
import Logout from "../Logout/logout";

// Import the new components
import HeroSection from "./HeroSection";
import Features from "./Features";
import ChooseUs from "./ChooseUs";

export default function HomePage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState("User");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState("popular");
  const [showSignupPopup, setShowSignupPopup] = useState(false);
  const router = useRouter();

  // Firebase auth state listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      if (currentUser) {
        setUsername(currentUser.displayName || currentUser.email || "User");
      }
    });

    return () => unsubscribe();
  }, []);

  // Show signup popup after a delay if user is not logged in
  useEffect(() => {
    if (!loading && !user) {
      const timer = setTimeout(() => {
        setShowSignupPopup(true);
      }, 3000); // Show popup after 3 seconds

      return () => clearTimeout(timer);
    }
  }, [loading, user]);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Toggle sidebar collapsed state
  const toggleSidebar = () => {
    setSidebarCollapsed(!isSidebarCollapsed);
  };

  // Handle signup redirect
  const handleSignupClick = () => {
    setShowSignupPopup(false);
    router.push('/Signup');
  };

  // Handle protected actions
  const handleProtectedAction = (href) => {
    if (!user) {
      setShowSignupPopup(true);
      return;
    }
    router.push(href);
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
      protected: true,
    },
    {
      name: "Courses",
      icon: <BookOpen size={24} className="mr-3" />,
      href: "/Courses",
      protected: true,
    },
    {
      name: "Career Guidance",
      icon: <Brain size={24} className="mr-3" />,
      href: "/CareerGuidance",
      protected: true,
    },
    
    {
      name: "Docs",
      icon: <FileText size={24} className="mr-3" />,
      href: "/Docs",
      protected: true,
    },
    {
      name: "Tools",
      icon: <PenTool size={24} className="mr-3" />,
      href: "/TOOLS",
      protected: true,
    },
    {
      name: "Blogs",
      icon: <Newspaper size={24} className="mr-3" />,
      href: "/Blogs",
      protected: true,
    },
    {
      name: "Profile",
      icon: <User size={24} className="mr-3" />,
      href: "/Profile",
      protected: true,
    },
    {
      name: "Logout",
      icon: <Logout size={14} className="mr-3 mt-0" />,
      href: "/Logout",
      protected: true,
    },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex font-['Sora']">
      {/* Signup Popup */}
      {showSignupPopup && !user && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-8 relative animate-in fade-in duration-300">
            <button
              onClick={() => setShowSignupPopup(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={24} />
            </button>

            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap size={32} className="text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Unlock Your Learning Journey
              </h2>
              <p className="text-gray-600">
                Join thousands of learners and get access to premium features
              </p>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Step-by-step roadmaps</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Premium courses & tutorials</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Developer tools & resources</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Push notifications for new resources</span>
              </div>
              <div className="flex items-center gap-3">
                <Users size={20} className="text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Join 50k+ learning community</span>
              </div>
            </div>

            <div className="space-y-3">
              <button
                onClick={handleSignupClick}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                Get Started Free
                <ArrowRight size={18} />
              </button>
              <button
                onClick={() => setShowSignupPopup(false)}
                className="w-full text-gray-500 py-2 px-6 rounded-xl font-medium hover:text-gray-700 transition-colors"
              >
                Continue browsing
              </button>
            </div>
          </div>
        </div>
      )}

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
                <div key={index}>
                  {item.protected && !user ? (
                    <button
                      onClick={() => handleProtectedAction(item.href)}
                      className={`flex items-center w-full ${
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
                    </button>
                  ) : (
                    <Link
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
                  )}
                </div>
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
              <div key={index}>
                {item.protected && !user ? (
                  <button
                    onClick={() => {
                      toggleMobileMenu();
                      handleProtectedAction(item.href);
                    }}
                    className={`flex items-center w-full ${
                      item.href === "/Roadmap"
                        ? "text-blue-600 font-semibold"
                        : "text-gray-600"
                    } hover:text-blue-600 transition-colors`}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </button>
                ) : (
                  <Link
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
                )}
              </div>
            ))}
          </nav>

          {user && (
            <div className="mt-8 pt-5 border-t">
              <h3 className="text-sm font-medium text-gray-500 mb-3">Account</h3>
              <Link
                href="/Logout"
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors py-2"
                onClick={toggleMobileMenu}
              >
                <LogOut size={20} className="mr-3" />
                <span>Logout</span>
              </Link>
            </div>
          )}
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
              {user ? (
                <button className="text-gray-800">
                  <Link href="/Notification">
                    <Bell size={24} />
                  </Link>
                </button>
              ) : (
                <button
                  onClick={handleSignupClick}
                  className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm font-medium"
                >
                  Sign Up
                </button>
              )}
              <button className="text-gray-800" onClick={toggleMobileMenu}>
                <Menu size={28} />
              </button>
            </div>
          </header>

          {/* Desktop Header */}
          <header className="hidden md:flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Dashboard</h2>
              <p className="text-gray-500">
                {user ? `Welcome back, ${username}` : "Welcome to RoadmapFinder"}
              </p>
            </div>
            <div className="flex items-center gap-4">
              {user ? (
                <>
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
                </>
              ) : (
                <button
                  onClick={handleSignupClick}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Get Started Free
                </button>
              )}
            </div>
          </header>

          {/* Hero Section Component */}
          <HeroSection 
            user={user}
            handleProtectedAction={handleProtectedAction}
            username={username}
          />
        </div>

        {/* Features Section Component */}
        <Features handleProtectedAction={handleProtectedAction} />

        {/* Choose Us Section Component */}
        <ChooseUs />
      </main>
    </div>
    )
}