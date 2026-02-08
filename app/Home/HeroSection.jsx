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

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
        <div className="bg-white rounded-xl xs:rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
          {/* Mobile Layout */}
          <div className="block lg:hidden">
            {/* Welcome Message */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 border-b border-blue-700 px-4 xs:px-6 py-3 xs:py-4">
              <div className="flex items-center gap-3 text-white">
                <div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm xs:text-base font-medium">
                      Welcome back, User
                    </span>
                  </div>
                  <p className="text-xs xs:text-sm text-blue-100">
                    Ready to continue your learning journey?
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile Content */}
            <div className="p-4 xs:p-6 sm:p-8 text-center flex flex-col justify-center">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-1.5 xs:gap-2 bg-green-50 text-green-700 px-2.5 xs:px-3 py-1 rounded-full text-xs font-medium mb-4 xs:mb-5 border border-green-200 self-center">
                <CheckCircle size={10} className="xs:w-3 xs:h-3" />
                <span className="text-xs xs:text-xs">100% Free Platform</span>
              </div>

              {/* NEW Headline - Mobile */}
              <div className="mb-5 xs:mb-6">
                <h1 className="text-2xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
                  <span className="text-blue-600">Clear Roadmaps</span> to Turn{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10 text-blue-600">YouTube Learning</span>
                    <svg className="absolute -bottom-1 left-0 w-full" height="8" viewBox="0 0 100 8" preserveAspectRatio="none">
                      <path d="M0,7 Q25,1 50,4 T100,7" stroke="#FCD34D" strokeWidth="3" fill="none" strokeLinecap="round"/>
                    </svg>
                  </span>{" "}
                  into{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10 text-blue-600">Job-Ready Skills</span>
                    <svg className="absolute -bottom-1 left-0 w-full" height="8" viewBox="0 0 100 8" preserveAspectRatio="none">
                      <path d="M0,7 Q25,1 50,4 T100,7" stroke="#93C5FD" strokeWidth="3" fill="none" strokeLinecap="round"/>
                    </svg>
                  </span>
                </h1>

                {/* NEW Subheadline - Mobile */}
                <p className="text-gray-700 text-sm xs:text-base sm:text-base leading-relaxed max-w-xs xs:max-w-sm sm:max-w-md mx-auto px-2 xs:px-0">
                  Follow structured tech paths with the best{" "}
                  <span className="relative inline-block font-semibold text-gray-900">
                    <span className="relative z-10">Hindi & English video resources</span>
                    <span className="absolute bottom-0 left-0 w-full h-2 bg-blue-200 -z-0"></span>
                  </span>{" "}
                  and practical documentation—all organized so beginners and
                  students know exactly{" "}
                  <span className="relative inline-block font-semibold text-gray-900">
                    <span className="relative z-10">what to learn next</span>
                    <span className="absolute bottom-0 left-0 w-full h-2 bg-indigo-200 -z-0"></span>
                  </span>
                  .
                </p>
              </div>

              {/* Trust Indicators */}
              <div className="mb-6 xs:mb-8">
                <div className="flex items-center justify-center gap-3 xs:gap-4 sm:gap-6 text-xs xs:text-sm text-gray-600 flex-wrap">
                  <div className="flex items-center gap-1 xs:gap-1.5">
                    <Users
                      size={14}
                      className="xs:w-4 xs:h-4 text-blue-600 flex-shrink-0"
                    />
                    <span className="whitespace-nowrap font-medium">
                      10K+ Users
                    </span>
                  </div>
                  <div className="flex items-center gap-1 xs:gap-1.5">
                    <Star
                      size={14}
                      className="xs:w-4 xs:h-4 text-yellow-500 fill-current flex-shrink-0"
                    />
                    <span className="whitespace-nowrap font-medium">
                      4.8 Rating
                    </span>
                  </div>
                  <div className="flex items-center gap-1 xs:gap-1.5">
                    <Award
                      size={14}
                      className="xs:w-4 xs:h-4 text-purple-600 flex-shrink-0"
                    />
                    <span className="whitespace-nowrap font-medium">
                      Expert Verified
                    </span>
                  </div>
                </div>
              </div>

              {/* Mobile Buttons */}
              <div className="block xs:hidden space-y-2.5">
                <button
                  onClick={() => handleNavigation("/RoadmapPage")}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center py-3 px-4 rounded-lg text-sm font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg active:scale-95"
                  aria-label="Start your career roadmap journey"
                >
                  <ArrowRight size={16} />
                  Start Roadmap
                </button>

                <button
                  onClick={() => handleNavigation("/Courses")}
                  className="w-full bg-white text-blue-600 text-center py-2.5 px-3 rounded-lg text-sm font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-2 active:scale-95"
                  aria-label="Browse available courses"
                >
                  <BookOpen size={16} />
                  <span>Browse Courses</span>
                </button>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:flex min-h-[450px]">
            <div className="lg:w-1/2 p-8 xl:p-12 flex flex-col justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50/30">
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1.5 rounded-full text-sm font-medium mb-6 border border-green-200 shadow-sm">
                  <CheckCircle size={14} />
                  100% Free Platform
                </div>

                {/* NEW Headline - Desktop */}
                <h2 className="text-3xl xl:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                  <span className="text-blue-600">Clear Roadmaps</span> to Turn{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10 text-blue-600">YouTube Learning</span>
                    <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 100 12" preserveAspectRatio="none">
                      <path d="M0,10 Q25,2 50,6 T100,10" stroke="#FCD34D" strokeWidth="4" fill="none" strokeLinecap="round"/>
                    </svg>
                  </span>
                  <br />
                  into{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10 text-blue-600">Job-Ready Skills</span>
                    <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 100 12" preserveAspectRatio="none">
                      <path d="M0,10 Q25,2 50,6 T100,10" stroke="#93C5FD" strokeWidth="4" fill="none" strokeLinecap="round"/>
                    </svg>
                  </span>
                </h2>

                {/* NEW Subheadline - Desktop */}
                <p className="text-base xl:text-lg text-gray-700 mb-8 leading-relaxed max-w-xl">
                  Follow structured tech paths with the best{" "}
                  <span className="relative inline-block font-semibold text-gray-900">
                    <span className="relative z-10">Hindi & English video resources</span>
                    <span className="absolute bottom-0 left-0 w-full h-2.5 bg-blue-200 -z-0"></span>
                  </span>{" "}
                  and practical documentation—all organized so beginners and
                  students know exactly{" "}
                  <span className="relative inline-block font-semibold text-gray-900">
                    <span className="relative z-10">what to learn next</span>
                    <span className="absolute bottom-0 left-0 w-full h-2.5 bg-indigo-200 -z-0"></span>
                  </span>
                  .
                </p>

                <div className="bg-white text-gray-700 px-5 py-4 rounded-lg text-sm mb-8 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse flex-shrink-0"></div>
                    <div>
                      <p className="font-medium text-gray-800">
                        Welcome back, User!
                      </p>
                      <p className="text-gray-600 text-xs mt-0.5">
                        Ready to continue your journey?
                      </p>
                    </div>
                  </div>
                </div>

                {/* Trust Indicators */}
                <div className="flex items-center gap-6 mb-8 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Users size={18} className="text-blue-600" />
                    <span className="font-medium">10,000+ Users</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star size={18} className="text-yellow-500 fill-current" />
                    <span className="font-medium">4.8 Rating</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award size={18} className="text-purple-600" />
                    <span className="font-medium">Expert Verified</span>
                  </div>
                </div>

                {/* Desktop CTA Buttons */}
                <div className="flex gap-4">
                  <button
                    onClick={() => handleNavigation("/RoadmapPage")}
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center py-4 px-8 rounded-xl text-base font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center gap-3 transform hover:scale-105 shadow-lg"
                  >
                    Explore Roadmaps
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>

                  <button
                    onClick={() => handleNavigation("/Courses")}
                    className="bg-white text-blue-600 text-center py-4 px-8 rounded-xl text-base font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105"
                  >
                    <BookOpen size={20} />
                    Browse Courses
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 relative flex items-center justify-center p-6 xl:p-8 bg-white group">
              <div className="absolute inset-0 bg-gradient-to-bl from-blue-50 to-indigo-50 opacity-40"></div>

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

      {/* Action Buttons Section - Mobile/Tablet only */}
      <section
        className={`transform transition-all duration-500 delay-200 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        {/* Mobile */}
        <div className="hidden xs:block sm:hidden space-y-3">
          <button
            onClick={() => handleNavigation("/RoadmapPage")}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center py-4 px-6 rounded-xl text-base font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg active:scale-95"
          >
            <ChevronRight size={18} />
            Start Your Roadmap Journey
          </button>

          <button
            onClick={() => handleNavigation("/Courses")}
            className="w-full bg-white text-blue-600 text-center py-3 px-4 rounded-xl text-sm font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-2 active:scale-95"
          >
            <BookOpen size={16} />
            Youtube Courses
          </button>
        </div>

        {/* Tablet */}
        <div className="hidden sm:flex lg:hidden gap-3 flex-wrap">
          <button
            onClick={() => handleNavigation("/RoadmapPage")}
            className="flex-1 min-w-[200px] bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center py-3 px-5 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg active:scale-95"
          >
            <ChevronRight size={18} />
            Roadmap
          </button>

          <button
            onClick={() => handleNavigation("/Courses")}
            className="flex-1 min-w-[150px] bg-white text-blue-600 text-center py-3 px-5 rounded-xl text-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-2 active:scale-95"
          >
            <BookOpen size={18} />
            Courses
          </button>
        </div>
      </section>

      {/* Animations */}
      <style jsx>{`
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse {
          0%,
          100% {
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