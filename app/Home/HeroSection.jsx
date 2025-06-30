"use client";
import Image from "next/image";
import { ChevronRight, BookOpen, ArrowRight, Brain } from "lucide-react";
import { useState, useEffect } from "react";
import roadmap from "../Images/roadmap.png";

const HeroSection = ({ user, handleProtectedAction, username }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger entrance animation
    setIsVisible(true);
  }, []);

  return (
    <div className="px-4 sm:px-6 lg:px-8">

      {/* Universal Hero Section - Responsive for all screen sizes */}
      <section className={`mb-8 lg:mb-12 transform transition-all duration-700 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}>

        {/* Hero Content Container */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">

          {/* Mobile Layout (sm and below) */}
          <div className="block lg:hidden">
            {/* Mobile Image Section */}
            <div className="relative h-48 sm:h-56 w-full overflow-hidden group">
              <Image
                src={roadmap}
                alt="Roadmap illustration"
                layout="fill"
                className="brightness-90 group-hover:scale-105 transition-transform duration-500"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight animate-slideInUp">
                  Find your perfect path to success
                </h2>
              </div>
              {/* Floating particles effect */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-float delay-100"></div>
                <div className="absolute top-12 right-8 w-1 h-1 bg-purple-400 rounded-full animate-float delay-300"></div>
                <div className="absolute top-8 right-12 w-1.5 h-1.5 bg-pink-400 rounded-full animate-float delay-500"></div>
              </div>
            </div>

            {/* Mobile Text Content */}
            <div className="p-4 sm:p-6 animate-slideInUp delay-200">
              <p className="text-gray-500 text-sm mb-2 transition-colors duration-300">
                {user ? `Welcome, ${username}` : "Start your journey today"}
              </p>
              <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed transition-colors duration-300">
                Expert roadmaps, smart resources and AI-powered guidance to build your success journey
              </p>
            </div>
          </div>

          {/* Desktop Layout (lg and above) */}
          <div className="hidden lg:flex">
            <div className="lg:w-1/2 p-8 xl:p-12 flex flex-col justify-center relative overflow-hidden">
              {/* Background decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-xl animate-float"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-pink-100 to-yellow-100 rounded-full blur-xl animate-float delay-1000"></div>

              <div className="relative z-10">
                <h2 className="text-3xl xl:text-4xl font-bold text-gray-900 leading-tight mb-6 animate-slideInLeft transition-colors duration-300">
                  Find your perfect path and turn your 
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient"> dream into success</span>.
                </h2>
                <p className="text-lg xl:text-xl text-gray-600 mb-8 animate-slideInLeft delay-200 transition-colors duration-300 leading-relaxed">
                  Expert roadmaps, smart resources, and AI-powered guidance - build your own success journey
                </p>
              </div>
            </div>

            <div className="lg:w-1/2 relative flex items-center justify-center p-6 xl:p-8 group">
              {/* Animated background circles */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-72 xl:w-80 h-72 xl:h-80 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full animate-spin-slow"></div>
                <div className="absolute w-52 xl:w-60 h-52 xl:h-60 bg-gradient-to-r from-pink-200/30 to-yellow-200/30 rounded-full animate-spin-reverse"></div>
              </div>

              <div className="relative z-10 animate-slideInRight">
                <Image
                  src={roadmap}
                  alt="Roadmap illustration"
                  width={500}
                  height={400}
                  className="object-contain rounded-xl group-hover:scale-105 transition-transform duration-500 drop-shadow-2xl max-w-full h-auto"
                />
              </div>

              {/* Floating elements */}
              <div className="absolute top-8 right-8 w-4 h-4 bg-blue-500 rounded-full animate-float opacity-60"></div>
              <div className="absolute bottom-12 left-8 w-3 h-3 bg-purple-500 rounded-full animate-float delay-500 opacity-60"></div>
              <div className="absolute top-20 left-12 w-2 h-2 bg-pink-500 rounded-full animate-float delay-1000 opacity-60"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Action Buttons Section - Responsive */}
      <section className={`transform transition-all duration-700 delay-300 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}>

        {/* Mobile Button Layout (2 + 1 stack) */}
        <div className="block sm:hidden space-y-3">
          {/* First row - 2 buttons */}
          <div className="flex gap-3">
            <button
              onClick={() => handleProtectedAction("/RoadmapPage")}
              className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center py-3 px-4 rounded-xl text-base font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105 hover:shadow-lg active:scale-95"
            >
              <ChevronRight size={16} className="animate-bounce" />
              Roadmap
            </button>
            <button
              onClick={() => handleProtectedAction("/Courses")}
              className="flex-1 bg-white text-blue-600 text-center py-3 px-4 rounded-xl text-base font-semibold border border-blue-600 hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105 hover:shadow-lg active:scale-95"
            >
              <BookOpen size={16} className="animate-pulse" />
              Courses
            </button>
          </div>
          {/* Second row - Career Guidance button */}
          <button
            onClick={() => handleProtectedAction("/CareerGuidance")}
            className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white text-center py-3 px-4 rounded-xl text-base font-semibold transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105 hover:shadow-lg active:scale-95 shadow-emerald-200"
          >
            <Brain size={16} className="animate-pulse" />
            Career Guidance
          </button>
        </div>

        {/* Tablet Layout (sm to lg) */}
        <div className="hidden sm:flex lg:hidden gap-3">
          <button
            onClick={() => handleProtectedAction("/RoadmapPage")}
            className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center py-3 px-5 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105 hover:shadow-lg active:scale-95"
          >
            <ChevronRight size={18} className="animate-bounce" />
            Roadmap
          </button>
          <button
            onClick={() => handleProtectedAction("/Courses")}
            className="flex-1 bg-white text-blue-600 text-center py-3 px-5 rounded-xl text-lg font-semibold border border-blue-600 hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105 hover:shadow-lg active:scale-95"
          >
            <BookOpen size={18} className="animate-pulse" />
            Courses
          </button>
          <button
            onClick={() => handleProtectedAction("/CareerGuidance")}
            className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white text-center py-3 px-5 rounded-xl text-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105 hover:shadow-lg active:scale-95 shadow-emerald-200"
          >
            <Brain size={18} className="animate-pulse" />
            Career Guidance
          </button>
        </div>

        {/* Desktop Layout (lg and above) */}
        <div className="hidden lg:flex gap-6 justify-center">
          <button
            onClick={() => handleProtectedAction("/RoadmapPage")}
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center py-4 px-8 rounded-xl text-lg font-bold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center gap-3 transform hover:scale-105 hover:shadow-xl active:scale-95 min-w-[180px]"
          >
            Explore Roadmaps
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          <button
            onClick={() => handleProtectedAction("/Courses")}
            className="bg-white text-blue-600 text-center py-4 px-8 rounded-xl text-lg font-bold border border-blue-600 hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl active:scale-95 min-w-[180px]"
          >
            Browse Courses
          </button>
          <button
            onClick={() => handleProtectedAction("/CareerGuidance")}
            className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white text-center py-4 px-8 rounded-xl text-lg font-bold transition-all duration-300 flex items-center justify-center gap-3 transform hover:scale-105 hover:shadow-xl active:scale-95 min-w-[180px] shadow-emerald-200"
          >
            <Brain size={20} className="animate-pulse" />
            Career Guidance
          </button>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-fadeInDown {
          animation: fadeInDown 0.6s ease-out;
        }

        .animate-slideInUp {
          animation: slideInUp 0.6s ease-out;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.6s ease-out;
        }

        .animate-slideInRight {
          animation: slideInRight 0.6s ease-out;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .delay-100 {
          animation-delay: 0.1s;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }

        .delay-400 {
          animation-delay: 0.4s;
        }

        .delay-500 {
          animation-delay: 0.5s;
        }

        .delay-1000 {
          animation-delay: 1s;
        }

        /* Custom responsive breakpoints for better mobile experience */
        @media (max-width: 374px) {
          .text-xl { font-size: 1.125rem; }
          .text-base { font-size: 0.875rem; }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;