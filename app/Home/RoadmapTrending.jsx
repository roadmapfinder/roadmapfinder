"use client"
import React, { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  Brain, 
  Globe, 
  Code2, 
  Server, 
  Smartphone, 
  Terminal,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  ArrowRight,
  Users,
  Play,
  Star,
  BookOpen
} from "lucide-react";

const TrendingRoadmapsHome = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const scrollContainerRef = useRef(null);
  const router = useRouter();

  // Top 6 trending roadmaps for home page - all free and accessible
  const trendingRoadmaps = [
    {
      id: "ai",
      title: "AI & Machine Learning",
      icon: <Brain className="w-6 h-6" />,
      link: "/Roadmaps/Aiml",
      bgColor: "bg-blue-600",
      description: "Master AI, ML, and neural networks",
      difficulty: "Advanced",
      estimatedTime: "6-8 months",
      students: "45K+",
      isHot: true,
      rating: 4.8,
      feature: "AI & Machine Learning Roadmap"
    },
    {
      id: "web",
      title: "Full Stack Web Dev",
      icon: <Globe className="w-6 h-6" />,
      link: "/Roadmaps/Web",
      bgColor: "bg-blue-600",
      description: "Complete web development journey",
      difficulty: "Beginner",
      estimatedTime: "4-6 months",
      students: "89K+",
      isHot: true,
      rating: 4.9,
      feature: "Full Stack Web Development Roadmap"
    },
    {
      id: "react",
      title: "React Development",
      icon: <Code2 className="w-6 h-6" />,
      link: "/Roadmaps/React",
      bgColor: "bg-blue-600",
      description: "Build modern React applications",
      difficulty: "Intermediate",
      estimatedTime: "3-4 months",
      students: "67K+",
      isHot: false,
      rating: 4.7,
      feature: "React Development Roadmap"
    },
    {
      id: "nodejs",
      title: "Node.js Backend",
      icon: <Server className="w-6 h-6" />,
      link: "/Roadmaps/Nodejs",
      bgColor: "bg-blue-600",
      description: "Server-side JavaScript mastery",
      difficulty: "Intermediate",
      estimatedTime: "3-4 months",
      students: "42K+",
      isHot: false,
      rating: 4.6,
      feature: "Node.js Backend Roadmap"
    },
    {
      id: "reactnative",
      title: "React Native",
      icon: <Smartphone className="w-6 h-6" />,
      link: "/Roadmaps/Reactnative",
      bgColor: "bg-blue-600",
      description: "Cross-platform mobile apps",
      difficulty: "Intermediate",
      estimatedTime: "4-5 months",
      students: "28K+",
      isHot: false,
      rating: 4.5,
      feature: "React Native Roadmap"
    },
    {
      id: "python",
      title: "Python Programming",
      icon: <Terminal className="w-6 h-6" />,
      link: "/Roadmaps/Python",
      bgColor: "bg-blue-600",
      description: "Versatile Python development",
      difficulty: "Beginner",
      estimatedTime: "4-6 months",
      students: "92K+",
      isHot: true,
      rating: 4.8,
      feature: "Python Programming Roadmap"
    }
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800 border-green-200';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Advanced': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  // Mobile slider navigation
  const slideLeft = () => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.children[0].offsetWidth + 16;
      scrollContainerRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    }
    setCurrentSlide(Math.max(0, currentSlide - 1));
  };

  const slideRight = () => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.children[0].offsetWidth + 16;
      scrollContainerRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
    setCurrentSlide(Math.min(trendingRoadmaps.length - 1, currentSlide + 1));
  };

  // Direct roadmap navigation without any protection
  const handleRoadmapClick = (roadmap, e) => {
    e.preventDefault();
    router.push(roadmap.link);
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 shadow-lg">
            <TrendingUp className="w-4 h-4" />
            Most Popular This Month
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trending Learning Paths
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of learners mastering the most in-demand technologies
          </p>
        </div>

        {/* Desktop Grid (3 cards per row, 2 rows) */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 mb-8">
          {trendingRoadmaps.map((roadmap) => (
            <RoadmapCard
              key={roadmap.id}
              roadmap={roadmap}
              hoveredCard={hoveredCard}
              setHoveredCard={setHoveredCard}
              getDifficultyColor={getDifficultyColor}
              handleRoadmapClick={handleRoadmapClick}
            />
          ))}
        </div>

        {/* Mobile Horizontal Slider */}
        <div className="md:hidden relative">
          {/* Navigation Arrows */}
          <button
            onClick={slideLeft}
            disabled={currentSlide === 0}
            className={`absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-300 ${
              currentSlide === 0 
                ? 'text-gray-300 cursor-not-allowed' 
                : 'text-gray-700 hover:bg-gray-50 hover:shadow-xl'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={slideRight}
            disabled={currentSlide >= trendingRoadmaps.length - 1}
            className={`absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-300 ${
              currentSlide >= trendingRoadmaps.length - 1
                ? 'text-gray-300 cursor-not-allowed'
                : 'text-gray-700 hover:bg-gray-50 hover:shadow-xl'
            }`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Horizontal Scroll Container */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide px-4 pb-4"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {trendingRoadmaps.map((roadmap) => (
              <div
                key={roadmap.id}
                className="flex-shrink-0 w-80"
                style={{ scrollSnapAlign: 'start' }}
              >
                <RoadmapCard
                  roadmap={roadmap}
                  hoveredCard={hoveredCard}
                  setHoveredCard={setHoveredCard}
                  getDifficultyColor={getDifficultyColor}
                  handleRoadmapClick={handleRoadmapClick}
                  isMobile={true}
                />
              </div>
            ))}
          </div>

          {/* Mobile Slide Indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {trendingRoadmaps.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-blue-600 w-6' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <Link href="/RoadmapPage">
            <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              <BookOpen className="w-5 h-5" />
              Explore All Roadmaps
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

// Roadmap Card Component without any protection
const RoadmapCard = ({ 
  roadmap, 
  hoveredCard, 
  setHoveredCard, 
  getDifficultyColor, 
  handleRoadmapClick,
  isMobile = false 
}) => {
  return (
    <div
      className="group relative bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden h-full"
      onMouseEnter={() => setHoveredCard(roadmap.id)}
      onMouseLeave={() => setHoveredCard(null)}
    >
      {/* Hot Badge */}
      {roadmap.isHot && (
        <div className="absolute top-3 right-3 z-10">
          <div className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1 shadow-lg">
            🔥 TRENDING
          </div>
        </div>
      )}

      {/* Card Content */}
      <div className="relative p-6 h-full flex flex-col">
        {/* Icon Container */}
        <div className={`w-16 h-16 rounded-2xl ${roadmap.bgColor} flex items-center justify-center text-white mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
          {roadmap.icon}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
          {roadmap.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 flex-grow">
          {roadmap.description}
        </p>

        {/* Metadata */}
        <div className="space-y-3 mt-auto">
          {/* Difficulty and Time */}
          <div className="flex items-center justify-between">
            <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(roadmap.difficulty)}`}>
              {roadmap.difficulty}
            </span>
            <span className="text-xs text-gray-500 font-medium">
              {roadmap.estimatedTime}
            </span>
          </div>

          {/* Students Count and Rating */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <Users className="w-3 h-3" />
              <span className="font-medium">{roadmap.students} learners</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">{roadmap.rating}</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-blue-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"
            />
          </div>

          {/* Action Button */}
          <div className="pt-2">
            <button 
              onClick={(e) => handleRoadmapClick(roadmap, e)}
              className="w-full bg-blue-600 hover:bg-blue-700 hover:shadow-lg text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 group-hover:shadow-xl"
            >
              <Play className="w-4 h-4" />
              Start Learning
            </button>
          </div>
        </div>

        {/* Subtle Hover Overlay */}
        <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl pointer-events-none" />
      </div>
    </div>
  );
};

export default TrendingRoadmapsHome;