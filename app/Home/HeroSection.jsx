"use client";
import Image from "next/image";
import {
  ChevronRight,
  BookOpen,
  ArrowRight,
  Star,
  Users,
  Award,
  CheckCircle,
} from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import roadmap from "../Images/roadmap.png";

const HeroSection = ({ user, username }) => {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Trigger entrance animation
    setIsVisible(true);
  }, []);

  // Validation for props to prevent runtime errors
  const isUserAuthenticated = user && username;
  const safeUsername = username?.trim() || "User";

  // Direct navigation without protection
  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <div className="px-3 xs:px-4 sm:px-6 lg:px-8">
      {/* Universal Hero Section */}
      <section
        className={`mb-6 xs:mb-8 lg:mb-12 transform transition-all duration-500 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        <div className="bg-white rounded-xl xs:rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
          {/* Mobile Layout */}
          <div className="block lg:hidden">
            {/* Welcome Message */}
            {isUserAuthenticated && (
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-blue-100 px-4 xs:px-6 py-3 xs:py-4">
                <div className="flex items-center gap-2 text-blue-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm xs:text-base font-medium">
                    Welcome back,{" "}
                    <span className="font-semibold">{safeUsername}</span>!
                  </span>
                </div>
                <p className="text-xs xs:text-sm text-blue-600 mt-1">
                  Ready to continue your learning journey?
                </p>
              </div>
            )}

            {/* Mobile Content */}
            <div className="p-4 xs:p-6 sm:p-8 text-center flex flex-col justify-center">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-1.5 xs:gap-2 bg-green-50 text-green-700 px-2.5 xs:px-3 py-1 rounded-full text-xs font-medium mb-3 xs:mb-4 border border-green-200 self-center">
                <CheckCircle size={10} className="xs:w-3 xs:h-3" />
                <span className="text-xs xs:text-xs">100% Free Platform</span>
              </div>

              {/* Headline + Subheadline */}
              <div className="mb-4 xs:mb-6">
                <h1 className="text-2xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                  Learn Tech skill with -{" "}
                  <span className="text-blue-600">AI Powered Roadmaps</span>
                </h1>
                <p className="text-gray-600 text-sm xs:text-base sm:text-lg leading-relaxed mt-3 max-w-xs xs:max-w-sm sm:max-w-md mx-auto px-2 xs:px-0">
                  RoadmapFinder shows you the right learning path, real trends,
                  and beginner-friendly resources
                </p>
              </div>

              {/* Trust Indicators */}
              <div className="mb-6 xs:mb-8">
                <div className="flex items-center justify-center gap-3 xs:gap-4 sm:gap-6 text-xs xs:text-sm text-gray-500 flex-wrap">
                  <div className="flex items-center gap-1 xs:gap-1.5">
                    <Users
                      size={14}
                      className="xs:w-4 xs:h-4 text-blue-500 flex-shrink-0"
                    />
                    <span className="whitespace-nowrap">10K+ Users</span>
                  </div>
                  <div className="flex items-center gap-1 xs:gap-1.5">
                    <Star
                      size={14}
                      className="xs:w-4 xs:h-4 text-yellow-500 fill-current flex-shrink-0"
                    />
                    <span className="whitespace-nowrap">4.8 Rating</span>
                  </div>
                  <div className="flex items-center gap-1 xs:gap-1.5">
                    <Award
                      size={14}
                      className="xs:w-4 xs:h-4 text-purple-500 flex-shrink-0"
                    />
                    <span className="whitespace-nowrap">Expert Verified</span>
                  </div>
                </div>
              </div>

              {/* Mobile Buttons */}
              <div className="block xs:hidden space-y-2.5">
                <button
                  onClick={() => handleNavigation("/RoadmapPage")}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center py-3 px-4 rounded-lg text-sm font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg active:scale-95"
                  aria-label="Start your career roadmap journey"
                >
                  <ChevronRight size={16} />
                  <span>Start Roadmap</span>
                </button>

                <button
                  onClick={() => handleNavigation("/Courses")}
                  className="w-full bg-white text-blue-600 text-center py-2.5 px-3 rounded-lg text-sm font-semibold border border-blue-600 hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-2 active:scale-95"
                  aria-label="Browse available courses"
                >
                  <BookOpen size={16} />
                  <span>Youtube Courses</span>
                </button>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:flex min-h-[400px]">
            <div className="lg:w-1/2 p-8 xl:p-10 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-xl opacity-60"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-pink-100 to-yellow-100 rounded-full blur-xl opacity-60"></div>

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium mb-4 border border-green-200">
                  <CheckCircle size={14} />
                  100% Free Platform
                </div>

                {/* Headline + Subheadline (Desktop) */}
                <h2 className="text-2xl xl:text-4xl font-bold text-gray-900 mb-7 mt-3 transition-colors duration-300">
                  Learn Tech skill with -{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                    AI-Powered Roadmaps
                  </span>
                </h2>

                <p className="text-medium xl:text-medium text-gray-600 mb-8 transition-colors duration-300">
                  RoadmapFinder shows you the right learning path, real trends,
                  and beginner-friendly resources.
                </p>

                {/* Welcome Message */}
                {isUserAuthenticated && (
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 px-4 py-3 rounded-lg text-sm mb-6 border border-blue-200 shadow-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="font-medium">
                        Welcome back,{" "}
                        <span className="font-semibold">{safeUsername}</span>!
                      </span>
                    </div>
                    <p className="text-blue-600 text-xs mt-1">
                      Ready to continue your journey?
                    </p>
                  </div>
                )}

                {/* Trust Indicators */}
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
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Action Buttons Section */}
      <section
        className={`transform transition-all duration-500 delay-200 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        {/* Mobile */}
        <div className="hidden xs:block sm:hidden space-y-3">
          <button
            onClick={() => handleNavigation("/RoadmapPage")}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center py-4 px-6 rounded-xl text-base font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg active:scale-95"
          >
            <ChevronRight size={18} />
            Start Your Roadmap Journey
          </button>

          <button
            onClick={() => handleNavigation("/Courses")}
            className="w-full bg-white text-blue-600 text-center py-3 px-4 rounded-xl text-sm font-semibold border border-blue-600 hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-2 active:scale-95"
          >
            <BookOpen size={16} />
            Youtube Courses
          </button>
        </div>

        {/* Tablet */}
        <div className="hidden sm:flex lg:hidden gap-3 flex-wrap">
          <button
            onClick={() => handleNavigation("/RoadmapPage")}
            className="flex-1 min-w-[200px] bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center py-3 px-5 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg active:scale-95"
          >
            <ChevronRight size={18} />
            Roadmap
          </button>

          <button
            onClick={() => handleNavigation("/Courses")}
            className="flex-1 min-w-[150px] bg-white text-blue-600 text-center py-3 px-5 rounded-xl text-lg font-semibold border border-blue-600 hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-2 active:scale-95"
          >
            <BookOpen size={18} />
            Courses
          </button>
        </div>

        {/* Desktop */}
        <div className="hidden lg:flex gap-6 justify-center flex-wrap">
          <button
            onClick={() => handleNavigation("/RoadmapPage")}
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center py-4 px-8 rounded-xl text-lg font-bold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center gap-3 transform hover:scale-105 hover:shadow-xl min-w-[180px] group"
          >
            Explore Roadmaps
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </button>

          <button
            onClick={() => handleNavigation("/Courses")}
            className="bg-white text-blue-600 text-center py-4 px-8 rounded-xl text-lg font-bold border border-blue-600 hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl min-w-[180px]"
          >
            Youtube Courses
          </button>
        </div>
      </section>

      {/* Subtle Animations */}
      <style jsx>{`
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;