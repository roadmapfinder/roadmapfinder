import React from 'react';
import { Wrench, BookOpen, Map, ArrowRight, Cpu, Users, Target } from 'lucide-react';

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Cpu className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">CareerAI</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Wrench className="w-4 h-4" />
            <span>Under Construction</span>
          </div>

          <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            AI-Powered Career
            <br />
            <span className="text-blue-600">Guidance Platform</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Sorry for the inconvenience! We're currently working on bringing you the most comprehensive 
            AI-driven career guidance platform with industry-ready roadmaps and curated learning resources.
          </p>
        </div>

        {/* Features Preview */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-sm border hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Career Matching</h3>
            <p className="text-gray-600 leading-relaxed">
              Get personalized career recommendations based on your skills, interests, and market demand using advanced AI algorithms.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Map className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Industry Roadmaps</h3>
            <p className="text-gray-600 leading-relaxed">
              Access comprehensive, step-by-step learning paths designed by industry experts for various career tracks.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <BookOpen className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Curated Content</h3>
            <p className="text-gray-600 leading-relaxed">
              Hand-picked YouTube courses, documentation, and learning materials to accelerate your professional growth.
            </p>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="bg-white rounded-2xl p-12 shadow-sm border">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Explore for now
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              While we're perfecting the platform, check out our industry-ready roadmaps and 
              best YouTube courses with comprehensive documentation.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="/RoadmapPage" 
              className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-colors shadow-sm min-w-[200px] justify-center"
            >
              <Map className="w-5 h-5" />
              <span>View Roadmaps</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <a 
              href="/Courses" 
              className="inline-flex items-center space-x-2 bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-colors shadow-sm min-w-[200px] justify-center"
            >
              <BookOpen className="w-5 h-5" />
              <span>YouTube Courses</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>

       
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-24">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-center text-gray-600">
            <p>&copy; 2025 CareerAI. Building the future of career guidance.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}