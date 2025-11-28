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
  Lock,
  Rocket,
  Award,
  TrendingUp,
  Shield,
  Clock,
  Lightbulb,
  Contact,
  Info
} from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import Link from "next/link";

import RoadmapTrending from "./RoadmapTrending";

// Import the new components
import HeroSection from "./HeroSection";
import Features from "./Features";
import ChooseUs from "./ChooseUs";
import Footer from "../Footer/footer";

// Import Clerk hooks
import { useUser, useClerk, SignOutButton } from "@clerk/nextjs";

export default function HomePage() {
  const { user: clerkUser, isLoaded } = useUser(); // Use Clerk's user hook

  const [username, setUsername] = useState("User");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState("popular");
  const router = useRouter();

  // Set username from Clerk if available
  useEffect(() => {
    if (isLoaded && clerkUser) {
      setUsername(clerkUser.username || clerkUser.firstName || "User");
    }
  }, [isLoaded, clerkUser]);


  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Toggle sidebar collapsed state
  const toggleSidebar = () => {
    setSidebarCollapsed(!isSidebarCollapsed);
  };

  // Direct signup navigation handler
  const handleSignupClick = () => {
    router.push("/RoadmapPage");
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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { name: "Home", icon: <Home size={24} className="mr-3" />, href: "/" },
    {
      name: "Roadmaps",
      icon: <Map size={24} className="mr-3" />,
      href: "/RoadmapPage",
    },
    {
      name: "Courses",
      icon: <BookOpen size={24} className="mr-3" />,
      href: "/Courses",
    },
    {
      name: "Blogs",
      icon: <Newspaper size={24} className="mr-3" />,
      href: "/Blogs",
    },
    {
      name: "About Us",
      icon: <Info size={24} className="mr-3" />,
      href: "/AboutUs",
    },
    {
      name: "Profile",
      icon: <User size={24} className="mr-3" />,
      href: "/Profile",
    },
    {
      name: "Contact Us",
      icon: <Contact size={24} className="mr-3" />,
      href: "/ContactUs",
    },

  ];



  return (
    <div className="min-h-screen bg-white font-['Sora']">
      {/* Layout Container */}
      <div className="flex">
        {/* Desktop Sidebar - Hidden on mobile */}
        <aside
          className={`bg-white shadow-lg fixed inset-y-0 left-0 z-20 transform transition-all duration-300 ease-in-out
            ${isSidebarCollapsed ? "w-20" : "w-72"} 
            hidden md:block`}
        >
          <div className="flex flex-col h-full">
            <div
              className={`p-5 flex ${
                isSidebarCollapsed ? "justify-center" : "justify-between"
              } items-center border-b`}
            >
              {!isSidebarCollapsed && (
                <h1 className="text-xl font-bold text-blue-600">
                  RoadmapFinder
                </h1>
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

            <div className="p-5 flex-grow overflow-y-auto">
              <nav className="space-y-2">
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className={`flex items-center relative ${
                      item.href === "/"
                        ? "text-blue-600 font-semibold bg-blue-50"
                        : "text-gray-600"
                    } hover:text-blue-600 transition-colors py-3 px-3 rounded-lg hover:bg-blue-50`}
                  >
                    <div className={isSidebarCollapsed ? "mx-auto" : ""}>
                      {item.icon}
                    </div>
                    {!isSidebarCollapsed && (
                      <>
                        <span>{item.name}</span>
                        {item.isNew && (
                          <span className="ml-auto bg-gradient-to-r from-green-400 to-green-600 text-white text-xs px-2 py-1 rounded-full font-medium">
                            New
                          </span>
                        )}
                      </>
                    )}
                    {isSidebarCollapsed && item.isNew && (
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    )}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Logout Section */}
            {clerkUser && (
              <div className="p-5 border-t border-gray-200">
                <SignOutButton>
                  <button
                    className={`flex items-center w-full text-red-600 hover:text-red-700 transition-colors py-3 px-3 rounded-lg hover:bg-red-50 ${
                      isSidebarCollapsed ? "justify-center" : ""
                    }`}
                  >
                    <div className={isSidebarCollapsed ? "mx-auto" : ""}>
                      <LogOut size={24} className="mr-3" />
                    </div>
                    {!isSidebarCollapsed && <span className="font-medium">Logout</span>}
                  </button>
                </SignOutButton>
              </div>
            )}
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

          <div className="p-5 overflow-y-auto h-full pb-20">
            <nav className="space-y-2">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={`flex items-center relative ${
                    item.href === "/"
                      ? "text-blue-600 font-semibold bg-blue-50"
                      : "text-gray-600"
                  } hover:text-blue-600 transition-colors py-3 px-3 rounded-lg hover:bg-blue-50`}
                  onClick={toggleMobileMenu}
                >
                  {item.icon}
                  <span>{item.name}</span>
                  {item.isNew && (
                    <span className="ml-auto bg-gradient-to-r from-green-400 to-green-600 text-white text-xs px-2 py-1 rounded-full font-medium">
                      New
                    </span>
                  )}
                </Link>
              ))}
            </nav>

            {/* Mobile Logout Button */}
            {clerkUser && (
              <div className="mt-4 pt-4 border-t border-gray-200">
                <SignOutButton>
                  <button
                    className="flex items-center w-full text-red-600 hover:text-red-700 transition-colors py-3 px-3 rounded-lg hover:bg-red-50"
                    onClick={toggleMobileMenu}
                  >
                    <LogOut size={24} className="mr-3" />
                    <span className="font-medium">Logout</span>
                  </button>
                </SignOutButton>
              </div>
            )}
          </div>
        </div>

        {/* Main Content Container - Responsive margins */}
        <main
          className={`flex-1 min-h-screen w-full transition-all duration-300 
            ${isSidebarCollapsed ? "md:ml-20" : "md:ml-72"}
            ml-0`}
        >
          {/* Mobile Header - Only visible on mobile */}
          <header className="flex justify-between items-center p-4 bg-white shadow-sm md:hidden sticky top-0 z-10">
            <h1 className="text-lg font-bold text-blue-600">RoadmapFinder</h1>
            <div className="flex gap-3 items-center">
              {clerkUser ? (
                <button className="text-gray-800 p-2">
                  <Link href="/Notification">
                    <Bell size={20} />
                  </Link>
                </button>
              ) : (
                <button
                  onClick={handleSignupClick}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-3 py-1.5 rounded-lg text-sm font-medium hover:from-blue-700 hover:to-purple-700 transition-all"
                >
                  Get Started
                </button>
              )}
              <button className="text-gray-800 p-2" onClick={toggleMobileMenu}>
                <Menu size={24} />
              </button>
            </div>
          </header>

          {/* Desktop Header - Only visible on desktop */}
          <header className="hidden md:flex justify-between items-center p-8 bg-gray-50">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Dashboard</h2>
              <p className="text-gray-500">
                {clerkUser
                  ? `Welcome back, ${username}`
                  : "Welcome to RoadmapFinder"}
              </p>
            </div>
            <div className="flex items-center gap-4">
              {clerkUser ? (
                <>
                  <button className="p-2 relative bg-white rounded-full shadow-sm hover:shadow-md transition-all">
                    <Link href="/Notification">
                      <Bell size={22} className="text-gray-700" />
                    </Link>
                    <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                  </button>
                  <div className="flex items-center gap-3 bg-white py-2 px-4 rounded-full shadow-sm">
                    <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                      {clerkUser.imageUrl ? (
                        <Image
                          src={clerkUser.imageUrl}
                          alt="User Profile"
                          width={32}
                          height={32}
                          className="rounded-full"
                        />
                      ) : (
                        <User size={16} className="text-blue-600" />
                      )}
                    </div>
                    <span className="text-gray-800 font-medium">
                      {username}
                    </span>
                  </div>
                </>
              ) : (
                <button
                  onClick={handleSignupClick}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg flex items-center gap-2"
                >
                  <Rocket size={18} />
                  Start Your Journey
                </button>
              )}
            </div>
          </header>

          {/* Main Content Area */}
          <div className="w-full">
            {/* Hero Section Container */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6">
              <HeroSection />
            </div>

            {/* Additional Content Sections */}
            <div className="w-full">
              <RoadmapTrending
                user={clerkUser}
              />

              <Features />
              <ChooseUs />
            </div>
          </div>

          {/* Footer - Aligned with sidebar */}
          <Footer isSidebarCollapsed={isSidebarCollapsed} />
        </main>
      </div>
    </div>
  );
}