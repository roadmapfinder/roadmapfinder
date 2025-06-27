"use client";

import { 
  Wrench, 
  FileText, 
  Newspaper, 
  ArrowRight, 
  Sparkles, 
  BookOpen,
  Map
} from "lucide-react";

import { useState } from "react";
import { useRouter } from "next/navigation"; // For Next.js 13+ App Router
// import { useNavigate } from "react-router-dom"; // For React Router

const Features = ({ handleProtectedAction }) => {
  const [navigating, setNavigating] = useState("");
  const router = useRouter(); // For Next.js
  // const navigate = useNavigate(); // For React Router

  const handleNavigation = (href) => {
    setNavigating(href);
    console.log(`Navigating to: ${href}`);

    // For Next.js App Router
    router.push(href);

    // For React Router (uncomment this and comment the line above)
    // navigate(href);

    // Reset loading state after a short delay
    setTimeout(() => setNavigating(""), 500);
  };

  const features = [
    {
      id: 1,
      title: "Developer Tools",
      description: "Access premium development tools, code generators, and productivity enhancers designed for modern developers.",
      icon: <Wrench size={24} className="text-blue-600" />,
      href: "/TOOLS", // Fixed: lowercase for consistency
      stats: "100+ Tools",
      badge: "Popular"
    },
    {
      id: 2,
      title: "Smart Documentation",
      description: "Comprehensive guides, API references, and technical documentation",
      icon: <FileText size={24} className="text-green-600" />,
      href: "/Docs", // Fixed: lowercase for consistency
      stats: "50+ Docs",
      badge: "Updated"
    },
    {
      id: 3,
      title: "Tech Insights & Blogs",
      description: "Stay updated with the latest tech trends, tutorials, and industry insights from experts worldwide.",
      icon: <Newspaper size={24} className="text-orange-600" />,
      href: "/Blogs", // Fixed: lowercase for consistency
      stats: "20+ Articles",
      badge: "Fresh"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content Area - Adjusted for sidebar */}
      <div className="ml-0 lg:ml-1 transition-all duration-300">
        <section className="py-5 lg:py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Header Section */}
            <div className="text-center mb-8 lg:mb-12">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                <Sparkles size={16} />
                Features
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Everything you need to accelerate your development
              </h2>
              <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
                Powerful tools, comprehensive documentation, and expert insights to boost your productivity
              </p>
            </div>

            {/* Features Grid - Responsive for sidebar layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 mb-8 lg:mb-12">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-lg hover:border-blue-200 transition-all duration-200 cursor-pointer group"
                  onClick={() => handleNavigation(feature.href)}
                >
                  {/* Badge */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center group-hover:bg-blue-50 transition-colors duration-200">
                      {feature.icon}
                    </div>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                      {feature.badge}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-lg lg:text-xl font-semibold text-gray-900 group-hover:text-blue-900 transition-colors duration-200">
                        {feature.title}
                      </h3>
                      <span className="text-sm text-gray-500">
                        {feature.stats}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNavigation(feature.href);
                    }}
                    disabled={navigating === feature.href}
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {navigating === feature.href ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Loading...
                      </>
                    ) : (
                      <>
                        Explore Now
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                      </>
                    )}
                  </button>
                </div>
              ))}
            </div>

            {/* Bottom CTA Section */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 lg:p-8">
              <div className="text-center mb-6">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
                  Ready to get started?
                </h3>
                <p className="text-gray-600">
                  Join thousands of developers using our platform to advance their careers
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => handleNavigation('/RoadmapPage')}
                  disabled={navigating === '/roadmap'}
                  className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {navigating === '/RoadmapPage' ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <Map size={18} />
                  )}
                  Start Learning
                </button>
                <button 
                  onClick={() => handleNavigation('/Courses')}
                  disabled={navigating === '/courses'}
                  className="border border-gray-300 text-gray-700 px-6 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {navigating === '/Courses' ? (
                    <div className="w-4 h-4 border-2 border-gray-700 border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <BookOpen size={18} />
                  )}
                  Browse Courses
                </button>
              </div>
            </div>

          </div>
        </section>
      </div>

    </div>
  );
};

export default Features;