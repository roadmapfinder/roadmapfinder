"use client"
import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center px-6 py-16">
      <div className="max-w-3xl text-center bg-white p-10 rounded-2xl shadow-xl">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          About RoadmapFinder
        </h1>
        <p className="text-gray-700 leading-relaxed mb-6">
          <strong>RoadmapFinder.tech</strong> is a free AI-powered learning platform 
          built to guide learners step by step toward becoming industry-ready. 
          We provide personalized roadmaps, learning resources, project ideas, 
          and curated YouTube playlists to help you master skills in programming, 
          AI, design, and development.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          Our goal is to make tech education simple, structured, and accessible 
          to everyone — from beginners to professionals. Every roadmap is 
          designed with community feedback and industry insights to ensure 
          you’re always on the right track.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Founded by <strong>Tech Point</strong>, a computer education institute, 
          RoadmapFinder is committed to empowering learners across India 
          with the right resources, motivation, and direction to achieve 
          their tech dreams.
        </p>
      </div>
    </div>
  );
};

export default About;
