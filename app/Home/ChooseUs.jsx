"use client";

import { Star, Users, Zap, Globe, CheckCircle, TrendingUp } from "lucide-react";

const ChooseUs = () => {
  const steps = [
    {
      step: "1",
      title: "Choose a Roadmap",
      description: "Select from our curated collection of career paths and development roadmaps designed by industry experts",
      icon: <Star size={24} className="text-blue-600" />,
      color: "blue"
    },
    {
      step: "2", 
      title: "Follow the Best Course",
      description: "Follow best curated course step by step and keep practice to master your chosen technology stack",
      icon: <TrendingUp size={24} className="text-purple-600" />,
      color: "purple"
    },
    {
      step: "3",
      title: "Get Tools & Docs",
      description: "Access premium tech tools and comprehensive documentation that enhance your development skills",
      icon: <Zap size={24} className="text-emerald-600" />,
      color: "emerald"
    }
  ];

  const stats = [
    {
      number: "1K+",
      label: "Active Learners",
      icon: <Users size={32} className="text-blue-500" />,
      description: "Join our growing community"
    },
    {
      number: "50+",
      label: "Learning Paths",
      icon: <Star size={32} className="text-purple-500" />,
      description: "Curated by industry experts"
    },
    {
      number: "95%",
      label: "Success Rate",
      icon: <CheckCircle size={32} className="text-emerald-500" />,
      description: "Students land their dream jobs with our help"
    },
    {
      number: "24/7",
      label: "Support",
      icon: <Globe size={32} className="text-orange-500" />,
      description: "Always here to help you"
    }
  ];

  const benefits = [
    "Expert-curated learning paths",
    "Industry-relevant Courses", 
    "Official Docs and Influencer Notes",
    "Career guidance & mentorship",
    "Recommend Tools used by mostly Industry",
    "Regular updates with latest trends"
  ];

  return (
    <>
      {/* How it Works Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How RoadmapFinder Works
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Follow our proven 3-step process to accelerate your learning journey and achieve your career goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting Lines for Desktop */}
            <div className="hidden md:block absolute top-20 left-1/3 w-1/3 h-0.5 bg-gradient-to-r from-blue-200 to-purple-200"></div>
            <div className="hidden md:block absolute top-20 right-1/3 w-1/3 h-0.5 bg-gradient-to-r from-purple-200 to-emerald-200"></div>

            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1"
              >
                {/* Step Number Badge */}
                <div className={`absolute -top-4 left-8 w-8 h-8 bg-gradient-to-r ${
                  step.color === 'blue' ? 'from-blue-500 to-blue-600' :
                  step.color === 'purple' ? 'from-purple-500 to-purple-600' :
                  'from-emerald-500 to-emerald-600'
                } rounded-full flex items-center justify-center`}>
                  <span className="text-white font-bold text-sm">{step.step}</span>
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl ${
                  step.color === 'blue' ? 'bg-blue-50' :
                  step.color === 'purple' ? 'bg-purple-50' :
                  'bg-emerald-50'
                } flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {step.icon}
                </div>

                {/* Content */}
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>

                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${
                  step.color === 'blue' ? 'from-blue-500/5 to-blue-600/5' :
                  step.color === 'purple' ? 'from-purple-500/5 to-purple-600/5' :
                  'from-emerald-500/5 to-emerald-600/5'
                } rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by Developers Worldwide
            </h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join thousands of successful developers who have transformed their careers with RoadmapFinder
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-gray-200 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-400">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Star size={16} />
                Why Choose RoadmapFinder
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The smartest way to 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> learn and grow</span>
              </h3>

              <p className="text-lg text-gray-600 mb-8">
                We don't just provide courses – we provide a complete ecosystem designed to accelerate your learning and career growth with personalized guidance every step of the way.
              </p>

              <div className="grid grid-cols-1 gap-4">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
                  >
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle size={14} className="text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual Element */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Zap size={32} className="text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">
                    Start Your Journey Today
                  </h4>
                  <p className="text-gray-600 mb-6">
                    Join the community of successful developers who chose the smart path to career growth
                  </p>
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4">
                    <div className="text-sm text-gray-600 mb-2">Success Rate</div>
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                      95%
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-blue-400 rounded-full animate-ping"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChooseUs;