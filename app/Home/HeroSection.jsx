"use client";
import Image from "next/image";
import { ChevronRight, BookOpen, ArrowRight, Brain, Star, Users, Award, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";
import roadmap from "../Images/roadmap.png";

const HeroSection = ({ user, handleProtectedAction, username }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger entrance animation
    setIsVisible(true);
  }, []);

  // Validation for props to prevent runtime errors
  const isUserAuthenticated = user && username;
  const safeUsername = username?.trim() || 'User';

  return (
    <div className="px-3 xs:px-4 sm:px-6 lg:px-8">

      {/* Universal Hero Section - Fully Responsive */}
      <section className={`mb-6 xs:mb-8 lg:mb-12 transform transition-all duration-500 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}>

        {/* Hero Content Container - Dynamic height that adapts to content */}
        <div className="bg-white rounded-xl xs:rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">

          {/* Mobile Layout (lg and below) - Fully Responsive with Dynamic Height */}
          <div className="block lg:hidden">
            {/* Welcome Message - Now at the top for mobile */}
            {isUserAuthenticated && (
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-blue-100 px-4 xs:px-6 py-3 xs:py-4">
                <div className="flex items-center gap-2 text-blue-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm xs:text-base font-medium">
                    Welcome back, <span className="font-semibold">{safeUsername}</span>!
                  </span>
                </div>
                <p className="text-xs xs:text-sm text-blue-600 mt-1">
                  Ready to continue your learning journey?
                </p>
              </div>
            )}

            {/* Mobile Content - Dynamic padding and spacing */}
            <div className="p-4 xs:p-6 sm:p-8 text-center flex flex-col justify-center">
              {/* Trust Badge - Responsive */}
              <div className="inline-flex items-center gap-1.5 xs:gap-2 bg-green-50 text-green-700 px-2.5 xs:px-3 py-1 rounded-full text-xs font-medium mb-3 xs:mb-4 border border-green-200 self-center">
                <CheckCircle size={10} className="xs:w-3 xs:h-3" />
                <span className="text-xs xs:text-xs">100% Free Platform</span>
              </div>

              {/* Main Headline - Fully Responsive Typography with Dynamic Spacing */}
              <div className="mb-4 xs:mb-6">
                <h1 className="text-2xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                  Find Your Perfect
                  <span className="block text-blue-600 mt-1 xs:mt-2">Career Roadmap</span>
                </h1>
              </div>

              {/* Value Proposition - Responsive Text with Dynamic Spacing */}
              <div className="mb-4 xs:mb-6">
                <p className="text-gray-600 text-sm xs:text-base sm:text-lg leading-relaxed max-w-xs xs:max-w-sm sm:max-w-md mx-auto px-2 xs:px-0">
                  Get expert-curated learning paths, courses, and AI-powered career guidance - completely free
                </p>
              </div>

              {/* Trust Indicators - Mobile Optimized with Dynamic Spacing */}
              <div className="mb-6 xs:mb-8">
                <div className="flex items-center justify-center gap-3 xs:gap-4 sm:gap-6 text-xs xs:text-sm text-gray-500 flex-wrap">
                  <div className="flex items-center gap-1 xs:gap-1.5">
                    <Users size={14} className="xs:w-4 xs:h-4 text-blue-500 flex-shrink-0" />
                    <span className="whitespace-nowrap">10K+ Users</span>
                  </div>
                  <div className="flex items-center gap-1 xs:gap-1.5">
                    <Star size={14} className="xs:w-4 xs:h-4 text-yellow-500 fill-current flex-shrink-0" />
                    <span className="whitespace-nowrap">4.8 Rating</span>
                  </div>
                  <div className="flex items-center gap-1 xs:gap-1.5">
                    <Award size={14} className="xs:w-4 xs:h-4 text-purple-500 flex-shrink-0" />
                    <span className="whitespace-nowrap">Expert Verified</span>
                  </div>
                </div>
              </div>

              {/* Mobile Action Buttons */}
              <div className="block xs:hidden space-y-2.5">
                <button
                  onClick={() => handleProtectedAction && handleProtectedAction("/RoadmapPage")}
                  disabled={!handleProtectedAction}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center py-3 px-4 rounded-lg text-sm font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Start your career roadmap journey"
                >
                  <ChevronRight size={16} />
                  <span>Start Roadmap</span>
                </button>

                <button
                  onClick={() => handleProtectedAction && handleProtectedAction("/Courses")}
                  disabled={!handleProtectedAction}
                  className="w-full bg-white text-blue-600 text-center py-2.5 px-3 rounded-lg text-sm font-semibold border border-blue-600 hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Browse available courses"
                >
                  <BookOpen size={16} />
                  <span>Youtube Courses</span>
                </button>
              </div>
            </div>
          </div>

          {/* Desktop Layout (lg and above) - Enhanced with fixed min-height */}
          <div className="hidden lg:flex min-h-[400px]">
            <div className="lg:w-1/2 p-8 xl:p-10 flex flex-col justify-center relative overflow-hidden">
              {/* Background decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-xl opacity-60"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-pink-100 to-yellow-100 rounded-full blur-xl opacity-60"></div>

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium mb-4 border border-green-200">
                  <CheckCircle size={14} />
                  100% Free Platform
                </div>

                <h2 className="text-2xl xl:text-4xl font-bold text-gray-900 mb-7 mt-3  transition-colors duration-300">
                  Start Your Tech Journey with 
                  <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent"> Clarity</span>
                </h2>

                <p className="text-medium xl:text-medium text-gray-600 mb-8 transition-colors duration-300 ">
                  Get beginner-friendly roadmaps, curated Hindi & English tutorials, and AI guidance 
                </p>


                {/* Welcome Message for Desktop - Improved styling */}
                {isUserAuthenticated && (
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 px-4 py-3 rounded-lg text-sm mb-6 border border-blue-200 shadow-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="font-medium">Welcome back, <span className="font-semibold">{safeUsername}</span>!</span>
                    </div>
                    <p className="text-blue-600 text-xs mt-1">Ready to continue your journey?</p>
                  </div>
                )}

                {/* Trust Indicators for Desktop */}
                <div className="flex items-center gap-6 mb-8 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Users size={18} className="text-blue-500" />
                    <span>10,000+ Users</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star size={18} className="text-yellow-500 fill-current" />
                    <span>4.8 Rating</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award size={18} className="text-purple-500" />
                    <span>Expert Verified</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 relative flex items-center justify-center p-6 xl:p-8 group">
              {/* Simplified background circles */}
              <div className="absolute inset-0 flex items-center justify-center opacity-30">
                <div className="w-72 xl:w-80 h-72 xl:h-80 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full animate-pulse"></div>
              </div>

              <div className="relative z-10">
                <Image
                  src={roadmap}
                  alt="Interactive career roadmap illustration showing learning paths"
                  width={500}
                  height={600}
                  className="object-contain rounded-xl group-hover:scale-105 transition-transform duration-500 drop-shadow-2xl max-w-full"
                  priority={true}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyLli2hG5epgqiRDAzuBdtnX9ddDzgBD1X/xAAbEQACAwADAQAAAAAAAAAAAAABAgADBCURE//aAAwDAQACEQMRAD8A6pf6MlmPo6/mCeZCcIa8bOhHDhZBHHPyJJsJqkMYOm6fOGVF9IQwSevuJNVVqUOcM3xNqj2MNNpDWcGJWgfSqxDc5DmnPqw2/wA="
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Action Buttons Section - Fully Responsive */}
      <section className={`transform transition-all duration-500 delay-200 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}>

        {/* Small Mobile Layout (375px - 639px) */}
        <div className="hidden xs:block sm:hidden space-y-3">
          <button
            onClick={() => handleProtectedAction && handleProtectedAction("/RoadmapPage")}
            disabled={!handleProtectedAction}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center py-4 px-6 rounded-xl text-base font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Start your roadmap journey"
          >
            <ChevronRight size={18} />
            Start Your Roadmap Journey
          </button>

          <button
            onClick={() => handleProtectedAction && handleProtectedAction("/Courses")}
            disabled={!handleProtectedAction}
            className="w-full bg-white text-blue-600 text-center py-3 px-4 rounded-xl text-sm font-semibold border border-blue-600 hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Browse available courses"
          >
            <BookOpen size={16} />
            Youtube Courses
          </button>
        </div>

        {/* Tablet Layout (640px - 1023px) */}
        <div className="hidden sm:flex lg:hidden gap-3 flex-wrap">
          <button
            onClick={() => handleProtectedAction && handleProtectedAction("/RoadmapPage")}
            disabled={!handleProtectedAction}
            className="flex-1 min-w-[200px] bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center py-3 px-5 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Explore career roadmaps"
          >
            <ChevronRight size={18} />
            Roadmap
          </button>
          <button
            onClick={() => handleProtectedAction && handleProtectedAction("/Courses")}
            disabled={!handleProtectedAction}
            className="flex-1 min-w-[150px] bg-white text-blue-600 text-center py-3 px-5 rounded-xl text-lg font-semibold border border-blue-600 hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Browse available courses"
          >
            <BookOpen size={18} />
            Courses
          </button>
          <button
            onClick={() => handleProtectedAction && handleProtectedAction("/CareerGuidance")}
            disabled={!handleProtectedAction}
            className="flex-1 min-w-[180px] bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white text-center py-3 px-5 rounded-xl text-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Get AI-powered career guidance"
          >
            <Brain size={18} />
            Career Guidance
          </button>
        </div>

        {/* Desktop Layout (1024px and above) */}
        <div className="hidden lg:flex gap-6 justify-center flex-wrap">
          <button
            onClick={() => handleProtectedAction && handleProtectedAction("/RoadmapPage")}
            disabled={!handleProtectedAction}
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center py-4 px-8 rounded-xl text-lg font-bold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center gap-3 transform hover:scale-105 hover:shadow-xl min-w-[180px] group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            aria-label="Explore career roadmaps"
          >
            Explore Roadmaps
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          <button
            onClick={() => handleProtectedAction && handleProtectedAction("/Courses")}
            disabled={!handleProtectedAction}
            className="bg-white text-blue-600 text-center py-4 px-8 rounded-xl text-lg font-bold border border-blue-600 hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl min-w-[180px] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            aria-label="Browse available courses"
          >
            Youtube Courses
          </button>
          <button
            onClick={() => handleProtectedAction && handleProtectedAction("/CareerGuidance")}
            disabled={!handleProtectedAction}
            className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white text-center py-4 px-8 rounded-xl text-lg font-bold transition-all duration-300 flex items-center justify-center gap-3 transform hover:scale-105 hover:shadow-xl min-w-[180px] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            aria-label="Get AI-powered career guidance"
          >
            <Brain size={20} />
            Career Guidance
          </button>
        </div>
      </section>

      <style jsx>{`
        /* Subtle animations only */
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: .8;
          }
        }

        /* Custom responsive breakpoints for better mobile experience */
        @media (max-width: 374px) {
          .text-xl { font-size: 1.75rem; line-height: 1.2; }
          .text-base { font-size: 0.875rem; }
          .text-sm { font-size: 0.8125rem; }
          .text-xs { font-size: 0.75rem; }
        }

        /* Extra small screens optimization */
        @media (max-width: 320px) {
          .text-xl { font-size: 1.125rem; }
          .text-sm { font-size: 0.75rem; }
          .px-3 { padding-left: 0.5rem; padding-right: 0.5rem; }
        }

        /* Touch targets for mobile */
        @media (max-width: 1023px) {
          button {
            min-height: 44px; /* iOS recommended touch target */
          }
        }

        /* Safe area for notched devices */
        @media (max-width: 1023px) {
          .px-3 {
            padding-left: max(0.75rem, env(safe-area-inset-left));
            padding-right: max(0.75rem, env(safe-area-inset-right));
          }
        }

        /* Prevent text overflow on very small screens */
        .leading-tight {
          line-height: 1.1;
        }

        /* Ensure proper spacing in compact layouts */
        .min-w-0 {
          min-width: 0;
        }

        /* Active state for better mobile feedback */
        .active\\:scale-95:active {
          transform: scale(0.95);
        }

        /* Focus styles for accessibility */
        button:focus-visible {
          outline: 2px solid #3b82f6;
          outline-offset: 2px;
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;