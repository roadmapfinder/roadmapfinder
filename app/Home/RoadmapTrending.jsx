"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ChevronRight, TrendingUp } from "lucide-react";
import { getTrendingRoadmaps } from "../RoadmapPage/roadmapsData";

export default function TrendingRoadmap() {
  const [hoveredCard, setHoveredCard] = useState(null);

  // Get trending roadmaps and pick items 6 to 8 (indices 5, 6, 7)
  const allTrendingRoadmaps = getTrendingRoadmaps();
  const selectedTrendingRoadmaps = allTrendingRoadmaps.slice(5, 8);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <TrendingUp className="w-8 h-8 text-orange-500 mr-2" />
          <h1 className="text-3xl font-bold text-gray-800">Trending Now</h1>
        </div>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Discover the hottest learning paths that developers are exploring right now
        </p>
      </div>

      {/* Trending Roadmaps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {selectedTrendingRoadmaps.map((roadmap) => (
          <TrendingCard
            key={roadmap.id}
            roadmap={roadmap}
            hoveredCard={hoveredCard}
            setHoveredCard={setHoveredCard}
          />
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center">
        <Link href="/Roadmaps" passHref>
          <button className="group bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            <span className="flex items-center">
              View All Roadmaps
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}

// Trending Card Component
function TrendingCard({ roadmap, hoveredCard, setHoveredCard }) {
  return (
    <Link href={roadmap.link} passHref>
      <div
        className="group relative bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
        onMouseEnter={() => setHoveredCard(roadmap.id)}
        onMouseLeave={() => setHoveredCard(null)}
      >
        {/* Trending Badge */}
        <div className="absolute top-4 right-4 z-10">
          <span className="bg-gradient-to-r from-orange-400 to-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            TRENDING
          </span>
        </div>

        {/* Card Content */}
        <div className="p-6">
          {/* Icon Section */}
          <div className="mb-4">
            <div
              className={`bg-gradient-to-br ${roadmap.bgColor} rounded-lg w-16 h-16 flex items-center justify-center shadow-lg transition-all duration-300 ${
                hoveredCard === roadmap.id ? "scale-110 shadow-xl" : ""
              }`}
            >
              {roadmap.icon}
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors duration-300">
            {roadmap.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {roadmap.description}
          </p>

          {/* Action Text */}
          <div className="flex items-center text-orange-500 font-medium text-sm group-hover:text-orange-600 transition-colors duration-300">
            <span>Start Learning</span>
            <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </Link>
  );
}