import React from 'react';
import { Play, Map, Wrench, FileText, Users, Newspaper, Star, Sparkles, Zap, Globe } from 'lucide-react';

export default function PlatformResourcesSection() {
  return (
    <section className="mt-16 mb-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-60"></div>
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute top-32 right-20 w-16 h-16 bg-purple-200 rounded-full opacity-40 animate-bounce"></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-pink-200 rounded-full opacity-30 animate-pulse"></div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4 shadow-lg">
            <Sparkles className="w-4 h-4" />
            <span>Premium Resources</span>
            <Sparkles className="w-4 h-4" />
          </div>
          <h3 className="text-gray-900 text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
            Everything You Need to Succeed
          </h3>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Access our complete arsenal of learning resources, tools, and industry insights
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">

          {/* YouTube Courses */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-pink-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
            <div className="relative bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-red-100">
              <div className="absolute top-4 right-4 flex gap-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
              </div>

              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                <Play className="text-white w-10 h-10" />
              </div>

              <div className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-6 py-2 rounded-full text-lg font-bold mb-4 inline-block shadow-lg">
                61+ Courses
              </div>

              <h4 className="text-gray-900 font-bold text-xl mb-4">
                YouTube Best Courses
              </h4>
              <p className="text-gray-600 text-base leading-relaxed">
                Handpicked premium YouTube courses from top creators, carefully curated for maximum learning impact
              </p>

              <div className="mt-6 flex items-center text-sm text-gray-500">
                <Globe className="w-4 h-4 mr-2" />
                <span>Global Content</span>
              </div>
            </div>
          </div>

          {/* Tech Roadmaps */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
            <div className="relative bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-100">
              <div className="absolute top-4 right-4 bg-blue-100 px-2 py-1 rounded-full text-xs font-semibold text-blue-600">
                TRENDING
              </div>

              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                <Map className="text-white w-10 h-10" />
              </div>

              <div className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-6 py-2 rounded-full text-lg font-bold mb-4 inline-block shadow-lg">
                22+ Roadmaps
              </div>

              <h4 className="text-gray-900 font-bold text-xl mb-4">
                Industry Demanded Roadmaps
              </h4>
              <p className="text-gray-600 text-base leading-relaxed">
                Complete learning paths for trending technologies that companies are actively hiring for
              </p>

              <div className="mt-6 flex items-center text-sm text-gray-500">
                <Zap className="w-4 h-4 mr-2" />
                <span>High Demand</span>
              </div>
            </div>
          </div>

          {/* Industry Tools */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
            <div className="relative bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-purple-100">
              <div className="absolute top-4 right-4 bg-purple-100 px-2 py-1 rounded-full text-xs font-semibold text-purple-600">
                PRO
              </div>

              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                <Wrench className="text-white w-10 h-10" />
              </div>

              <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-6 py-2 rounded-full text-lg font-bold mb-4 inline-block shadow-lg">
                Pro Tools
              </div>

              <h4 className="text-gray-900 font-bold text-xl mb-4">
                Industry Standard Tools
              </h4>
              <p className="text-gray-600 text-base leading-relaxed">
                Essential development tools, frameworks, and software that professionals use in real projects
              </p>

              <div className="mt-6 flex items-center text-sm text-gray-500">
                <Star className="w-4 h-4 mr-2 text-yellow-400 fill-current" />
                <span>Professional Grade</span>
              </div>
            </div>
          </div>

          {/* Official Documentation */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
            <div className="relative bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-emerald-100">
              <div className="absolute top-4 right-4 bg-emerald-100 px-2 py-1 rounded-full text-xs font-semibold text-emerald-600">
                OFFICIAL
              </div>

              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                <FileText className="text-white w-10 h-10" />
              </div>

              <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-2 rounded-full text-lg font-bold mb-4 inline-block shadow-lg">
                Official Docs
              </div>

              <h4 className="text-gray-900 font-bold text-xl mb-4">
                Technology Documentation
              </h4>
              <p className="text-gray-600 text-base leading-relaxed">
                Direct links to official documentation and guides from technology creators and maintainers
              </p>

              <div className="mt-6 flex items-center text-sm text-gray-500">
                <FileText className="w-4 h-4 mr-2" />
                <span>Authentic Sources</span>
              </div>
            </div>
          </div>

          {/* Influencer Notes */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
            <div className="relative bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-amber-100">
              <div className="absolute top-4 right-4 bg-amber-100 px-2 py-1 rounded-full text-xs font-semibold text-amber-600">
                EXCLUSIVE
              </div>

              <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                <Users className="text-white w-10 h-10" />
              </div>

              <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-2 rounded-full text-lg font-bold mb-4 inline-block shadow-lg">
                Expert Notes
              </div>

              <h4 className="text-gray-900 font-bold text-xl mb-4">
                Influencer Insights
              </h4>
              <p className="text-gray-600 text-base leading-relaxed">
                Curated notes and insights from top tech influencers and industry leaders
              </p>

              <div className="mt-6 flex items-center text-sm text-gray-500">
                <Users className="w-4 h-4 mr-2" />
                <span>Expert Curated</span>
              </div>
            </div>
          </div>

          {/* Tech Blogs */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-pink-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
            <div className="relative bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-rose-100">
              <div className="absolute top-4 right-4 bg-rose-100 px-2 py-1 rounded-full text-xs font-semibold text-rose-600 animate-pulse">
                NEW
              </div>

              <div className="w-20 h-20 bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                <Newspaper className="text-white w-10 h-10" />
              </div>

              <div className="bg-gradient-to-r from-rose-500 to-pink-600 text-white px-6 py-2 rounded-full text-lg font-bold mb-4 inline-block shadow-lg">
                Latest Blogs
              </div>

              <h4 className="text-gray-900 font-bold text-xl mb-4">
                New Tech Tool Blogs
              </h4>
              <p className="text-gray-600 text-base leading-relaxed">
                Stay updated with comprehensive blogs on newly launched tools and emerging technologies
              </p>

              <div className="mt-6 flex items-center text-sm text-gray-500">
                <Sparkles className="w-4 h-4 mr-2" />
                <span>Fresh Content</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-30"></div>
            <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-12 py-8 rounded-2xl shadow-2xl">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Sparkles className="w-6 h-6" />
                <p className="font-bold text-2xl">Everything You Need in One Place</p>
                <Sparkles className="w-6 h-6" />
              </div>
              <p className="text-lg opacity-90">From beginner tutorials to advanced industry tools</p>
              <div className="mt-6 flex items-center justify-center gap-8 text-sm">
                <span className="flex items-center gap-2">
                  <Star className="w-4 h-4 fill-current" />
                  Premium Quality
                </span>
                <span className="flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  Regularly Updated
                </span>
                <span className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Expert Curated
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}