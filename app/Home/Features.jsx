"use client";

import { 
  Wrench, 
  FileText, 
  Newspaper, 
  ArrowRight, 
  Sparkles, 
  Zap, 
  Globe,
  BookOpen,
  Map
} from "lucide-react";

import Link from "next/link"

const Features = ({ handleProtectedAction }) => {
  const features = [
    {
      id: 1,
      title: "Developer Tools",
      description: "Access premium development tools, code generators, and productivity enhancers designed for modern developers.",
      icon: <Wrench size={32} className="text-purple-500" />,
      href: "/tools",
      gradient: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      hoverColor: "hover:bg-purple-100",
      stats: "50+ Tools",
      badge: "Popular",
      features: ["Code Generators", "API Testing", "Performance Tools", "Design Assets"]
    },
    {
      id: 2,
      title: "Smart Documentation",
      description: "Comprehensive guides, API references, and technical documentation to accelerate your learning curve.",
      icon: <FileText size={32} className="text-emerald-500" />,
      href: "/docs",
      gradient: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-50",
      hoverColor: "hover:bg-emerald-100",
      stats: "1000+ Docs",
      badge: "Updated",
      features: ["API References", "Quick Guides", "Code Examples", "Best Practices"]
    },
    {
      id: 3,
      title: "Tech Insights & Blogs",
      description: "Stay updated with the latest tech trends, tutorials, and industry insights from experts worldwide.",
      icon: <Newspaper size={32} className="text-orange-500" />,
      href: "/blogs",
      gradient: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      hoverColor: "hover:bg-orange-100",
      stats: "500+ Articles",
      badge: "Fresh",
      features: ["Tech News", "Tutorials", "Industry Trends", "Expert Opinions"]
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles size={16} />
            Premium Features
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Everything you need to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">accelerate</span> your career
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Unlock powerful tools, comprehensive documentation, and expert insights to supercharge your development journey
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${feature.gradient} text-white`}>
                  {feature.badge}
                </span>
              </div>

              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className={`w-full h-full bg-gradient-to-br ${feature.gradient}`}></div>
              </div>

              {/* Card Content */}
              <div className="relative p-8 h-full flex flex-col">
                {/* Icon Container */}
                <div className={`w-16 h-16 rounded-2xl ${feature.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">
                      {feature.title}
                    </h3>
                    <span className="text-sm font-medium text-gray-500">
                      {feature.stats}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Feature List */}
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {feature.features.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${feature.gradient}`}></div>
                        <span className="text-sm text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button with Link */}
                <Link href={feature.href} className="w-full">
                  <button
                    className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${feature.bgColor} ${feature.hoverColor} text-gray-700 group-hover:shadow-md`}
                  >
                    Explore Now
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>

              {/* Hover Effect Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Ready to level up your skills?
                </h3>
                <p className="text-gray-600">
                  Join thousands of developers who are already using our platform to advance their careers
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/roadmap">
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-2">
                    <Map size={18} />
                    Start Learning
                  </button>
                </Link>
                <Link href="/courses">
                  <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 flex items-center gap-2">
                    <BookOpen size={18} />
                    Browse Courses
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;