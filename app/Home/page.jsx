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
} from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "../lib/auth";
import { auth } from "../lib/firebase";
import Link from "next/link";
import Logout from "../Logout/logout";
import CourseTrending from "./CourseTrending"
import RoadmapTrending from "./RoadmapTrending"

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
  const [popupTriggerContext, setPopupTriggerContext] = useState(null);
  const [popupAnimation, setPopupAnimation] = useState("slide-in");
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

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Toggle sidebar collapsed state
  const toggleSidebar = () => {
    setSidebarCollapsed(!isSidebarCollapsed);
  };

  // Enhanced signup click handler with smooth transition
  const handleSignupClick = () => {
    setPopupAnimation("slide-out");
    setTimeout(() => {
      setShowSignupPopup(false);
      setPopupAnimation("slide-in");
      router.push('/Signup');
    }, 300);
  };

  // Enhanced protected action handler with contextual popup
  const handleProtectedAction = (href, featureName) => {
    if (!user) {
      setPopupTriggerContext(featureName);
      setShowSignupPopup(true);
      return;
    }
    router.push(href);
  };

  // Close popup with animation
  const closePopup = () => {
    setPopupAnimation("slide-out");
    setTimeout(() => {
      setShowSignupPopup(false);
      setPopupAnimation("slide-in");
      setPopupTriggerContext(null);
    }, 300);
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
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { name: "Home", icon: <Home size={24} className="mr-3" />, href: "/" },
    {
      name: "Roadmaps",
      icon: <Map size={24} className="mr-3" />,
      href: "/RoadmapPage",
      protected: true,
      feature: "Roadmaps"
    },
    {
      name: "Courses",
      icon: <BookOpen size={24} className="mr-3" />,
      href: "/Courses",
      protected: true,
      feature: "Courses"
    },
    {
      name: "Career Guidance",
      icon: <Brain size={24} className="mr-3" />,
      href: "/CareerGuidance",
      protected: true,
      feature: "Career Guidance"
    },
    {
      name: "Docs",
      icon: <FileText size={24} className="mr-3" />,
      href: "/Docs",
      protected: true,
      feature: "Documentation"
    },
    {
      name: "Tools",
      icon: <PenTool size={24} className="mr-3" />,
      href: "/TOOLS",
      protected: true,
      feature: "Tools"
    },
    {
      name: "Blogs",
      icon: <Newspaper size={24} className="mr-3" />,
      href: "/Blogs",
      protected: true,
      feature: "Blogs"
    },
    {
      name: "Profile",
      icon: <User size={24} className="mr-3" />,
      href: "/Profile",
      protected: true,
      feature: "Profile"
    },
    {
      name: "Logout",
      icon: <Logout size={14} className="mr-3 mt-0" />,
      href: "/Logout",
      protected: true,
    },
  ];

  // Get contextual popup content based on the feature user tried to access
  const getPopupContent = () => {
    const baseContent = {
      icon: <Rocket size={28} className="text-blue-600" />,
      title: "Start Your Tech Journey With RoadmapFinder",

      benefits: [
        { icon: <Map size={18} className="text-blue-500" />, text: "Personalized roadmaps for every skill level" },
        { icon: <Award size={18} className="text-green-500" />, text: "Industry-ready Suggested Youtube Courses" },
        { icon: <Users size={18} className="text-purple-500" />, text: "AI Career Guidance" },
        { icon: <Clock size={18} className="text-orange-500" />, text: "Learn at your own pace" },
        { icon: <Shield size={18} className="text-red-500" />, text: "Lifetime access to all content" }
      ]
    };

    // Contextual content based on what feature user tried to access
    const contextualContent = {
      "Roadmaps": {
        icon: <Map size={28} className="text-blue-600" />,
        title: "Unlock Your Learning Path",
        subtitle: "Get step-by-step roadmaps tailored to your goals",
        benefits: [
          { icon: <TrendingUp size={18} className="text-blue-500" />, text: "Structured learning paths for 20+ skills" },
          { icon: <CheckCircle size={18} className="text-green-500" />, text: "Progress tracking and milestones" },
          { icon: <Star size={18} className="text-yellow-500" />, text: "Expert-curated content" },
          { icon: <Users size={18} className="text-purple-500" />, text: "Community support and mentorship" },
          { icon: <Zap size={18} className="text-orange-500" />, text: "Fast-track your career growth" }
        ]
      },
      "Courses": {
        icon: <BookOpen size={28} className="text-blue-600" />,
        title: "Access Premium Courses",
        subtitle: "Learn from industry experts with hands-on projects",
        benefits: [
          { icon: <Play size={18} className="text-blue-500" />, text: "500+ video tutorials and workshops" },
          { icon: <Award size={18} className="text-green-500" />, text: "Certificates upon completion" },
          { icon: <Wrench size={18} className="text-purple-500" />, text: "Real-world projects and assignments" },
          { icon: <Users size={18} className="text-orange-500" />, text: "Direct access to instructors" },
          { icon: <Globe size={18} className="text-red-500" />, text: "Learn the latest technologies" }
        ]
      },
      "Career Guidance": {
        icon: <Brain size={28} className="text-blue-600" />,
        title: "Accelerate Your Career",
        subtitle: "Get personalized career advice from industry mentors",
        benefits: [
          { icon: <TrendingUp size={18} className="text-blue-500" />, text: "1-on-1 career coaching sessions" },
          { icon: <FileText size={18} className="text-green-500" />, text: "Resume and portfolio reviews" },
          { icon: <Users size={18} className="text-purple-500" />, text: "Interview preparation and mock tests" },
          { icon: <Star size={18} className="text-yellow-500" />, text: "Job referrals and networking" },
          { icon: <Rocket size={18} className="text-orange-500" />, text: "Salary negotiation guidance" }
        ]
      },
      "Tools": {
        icon: <PenTool size={28} className="text-blue-600" />,
        title: "Access Developer Tools",
        subtitle: "Boost your productivity with premium tools and resources",
        benefits: [
          { icon: <Wrench size={18} className="text-blue-500" />, text: "50+ productivity tools and utilities" },
          { icon: <Zap size={18} className="text-green-500" />, text: "Code generators and templates" },
          { icon: <Globe size={18} className="text-purple-500" />, text: "API testing and documentation tools" },
          { icon: <Shield size={18} className="text-red-500" />, text: "Security and performance analyzers" },
          { icon: <Star size={18} className="text-yellow-500" />, text: "Regular updates and new tools" }
        ]
      },
      "Documentation": {
        icon: <FileText size={28} className="text-blue-600" />,
        title: "Comprehensive Documentation",
        subtitle: "Access detailed guides and references for every technology",
        benefits: [
          { icon: <BookOpen size={18} className="text-blue-500" />, text: "Detailed API documentation" },
          { icon: <CheckCircle size={18} className="text-green-500" />, text: "Step-by-step tutorials" },
          { icon: <Star size={18} className="text-yellow-500" />, text: "Best practices and patterns" },
          { icon: <Users size={18} className="text-purple-500" />, text: "Community-contributed examples" },
          { icon: <Zap size={18} className="text-orange-500" />, text: "Regular updates and additions" }
        ]
      }
    };

    return contextualContent[popupTriggerContext] || baseContent;
  };

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

  const popupContent = getPopupContent();

  return (
    <div className="min-h-screen bg-gray-50 font-['Sora']">
      {/* Enhanced Signup Popup - Notification Style */}
      {showSignupPopup && !user && (
        <div className="fixed inset-0 z-50 pointer-events-none">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm pointer-events-auto" onClick={closePopup}></div>

          {/* Popup Container */}
          <div className="flex items-start justify-center pt-4 px-4 h-full pointer-events-none">
            <div className={`
              bg-white rounded-2xl shadow-2xl max-w-md w-full pointer-events-auto
              transform transition-all duration-300 ease-out
              ${popupAnimation === 'slide-in' ? 'translate-y-0 opacity-100 scale-100' : '-translate-y-full opacity-0 scale-95'}
            `}>
              {/* Header with close button */}
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  {popupContent.icon}
                  <div>
                    <h3 className="font-bold text-gray-900">{popupContent.title}</h3>
                    <p className="text-sm text-gray-600">{popupContent.subtitle}</p>
                  </div>
                </div>
                <button
                  onClick={closePopup}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X size={20} className="text-gray-400" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Trust indicators */}
                <div className="flex items-center gap-4 mb-6 p-4 bg-blue-50 rounded-xl">
                  <div className="flex items-center gap-2">
                    <Users size={20} className="text-blue-600" />
                    <span className="text-sm font-medium text-blue-900">1000+</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star size={20} className="text-yellow-500" />
                    <span className="text-sm font-medium text-gray-700">4.5/5 Rating</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp size={20} className="text-green-600" />
                    <span className="text-sm font-medium text-green-700">95% Success</span>
                  </div>
                </div>

                {/* Benefits */}
                <div className="space-y-3 mb-6">
                  {popupContent.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                      {benefit.icon}
                      <span className="text-gray-700 text-sm">{benefit.text}</span>
                    </div>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="space-y-3">
                  <button
                    onClick={handleSignupClick}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
                  >
                    <Rocket size={18} />
                    Start Free 
                    <ArrowRight size={18} />
                  </button>

                  <button
                    onClick={closePopup}
                    className="w-full text-gray-500 py-2 px-6 rounded-xl font-medium hover:text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Maybe later
                  </button>
                </div>

                {/* Trust badge */}
                <div className="mt-4 text-center">
                  <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                    <Shield size={14} />
                    <span>Completely Free • No Subscription Required</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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

            <div className="p-5 flex-grow overflow-y-auto">
              <nav className="space-y-2">
                {navItems.map((item, index) => (
                  <div key={index}>
                    {item.protected && !user ? (
                      <button
                        onClick={() => handleProtectedAction(item.href, item.feature)}
                        className={`flex items-center w-full ${
                          item.href === "/"
                            ? "text-blue-600 font-semibold bg-blue-50"
                            : "text-gray-600"
                        } hover:text-blue-600 transition-colors py-3 px-3 rounded-lg hover:bg-blue-50 group`}
                      >
                        <div className={`${isSidebarCollapsed ? "mx-auto" : ""} relative`}>
                          {item.icon}
                          {!user && item.protected && (
                            <Lock size={12} className="absolute -top-1 -right-1 text-gray-400 group-hover:text-blue-500" />
                          )}
                        </div>
                        {!isSidebarCollapsed && (
                          <span className="flex-1 text-left">{item.name}</span>
                        )}
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        className={`flex items-center ${
                          item.href === "/"
                            ? "text-blue-600 font-semibold bg-blue-50"
                            : "text-gray-600"
                        } hover:text-blue-600 transition-colors py-3 px-3 rounded-lg hover:bg-blue-50`}
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

          <div className="p-5 overflow-y-auto h-full pb-20">
            <nav className="space-y-2">
              {navItems.map((item, index) => (
                <div key={index}>
                  {item.protected && !user ? (
                    <button
                      onClick={() => {
                        toggleMobileMenu();
                        handleProtectedAction(item.href, item.feature);
                      }}
                      className={`flex items-center w-full ${
                        item.href === "/"
                          ? "text-blue-600 font-semibold bg-blue-50"
                          : "text-gray-600"
                      } hover:text-blue-600 transition-colors py-3 px-3 rounded-lg hover:bg-blue-50 group`}
                    >
                      <div className="relative">
                        {item.icon}
                        {!user && item.protected && (
                          <Lock size={12} className="absolute -top-1 -right-1 text-gray-400 group-hover:text-blue-500" />
                        )}
                      </div>
                      <span className="flex-1 text-left">{item.name}</span>
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={`flex items-center ${
                        item.href === "/"
                          ? "text-blue-600 font-semibold bg-blue-50"
                          : "text-gray-600"
                      } hover:text-blue-600 transition-colors py-3 px-3 rounded-lg hover:bg-blue-50`}
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
              {user ? (
                <button className="text-gray-800 p-2">
                  <Link href="/Notification">
                    <Bell size={20} />
                  </Link>
                </button>
              ) : (
                <button
                  onClick={handleSignupClick}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium hover:from-blue-700 hover:to-purple-700 transition-all"
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
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg flex items-center gap-2"
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
              <HeroSection 
                user={user}
                handleProtectedAction={handleProtectedAction}
                username={username}
              />
            </div>

            {/* Additional Content Sections */}
            <div className="w-full">
              {/* Uncomment if needed */}
              <RoadmapTrending
                 user={user}
                 handleProtectedAction={handleProtectedAction}
                />
              


              <Features handleProtectedAction={handleProtectedAction} />
              <ChooseUs />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}