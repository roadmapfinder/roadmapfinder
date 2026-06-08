"use client";

import { Star, Users, Zap, Globe, CheckCircle, TrendingUp, Smartphone, BookOpen, Award, Flame } from "lucide-react";

const ChooseUs = () => {
  const steps = [
    {
      step: "1",
      title: "Get Your AI Fullstack Roadmap",
      description: "Paste your current level, goal, and language. We generate a personalized fullstack path that adapts to YOU.",
      icon: <Smartphone size={24} className="text-blue-600" />,
      color: "blue"
    },
    {
      step: "2",
      title: "Learn with Best YouTube Courses",
      description: "Follow curated, high-quality YouTube lessons for each topic. No random tutorials—only what actually builds skills.",
      icon: <BookOpen size={24} className="text-purple-600" />,
      color: "purple"
    },
    {
      step: "3",
      title: "Prove You Learned It",
      description: "Complete real assignments after each phase. Upload code or screenshots—our AI mentor checks your output and guides you.",
      icon: <Zap size={24} className="text-indigo-600" />,
      color: "indigo"
    }
  ];

  const stats = [
    {
      number: "10K+",
      label: "Active Learners",
      icon: <Users size={32} className="text-blue-600" />,
      description: "Join our growing community"
    },
    {
      number: "250+",
      label: "Learning Paths",
      icon: <Award size={32} className="text-purple-600" />,
      description: "Fullstack & tech specializations"
    },
    {
      number: "95%",
      label: "Success Rate",
      icon: <CheckCircle size={32} className="text-indigo-600" />,
      description: "Students land jobs with our help"
    },
    {
      number: "24/7",
      label: "AI Mentor Support",
      icon: <Globe size={32} className="text-orange-500" />,
      description: "Always here to solve doubts"
    }
  ];

  const benefits = [
    "AI-powered personalized fullstack roadmap",
    "Best YouTube lessons for each topic",
    "Real assignments with AI output checking",
    "Hindi + English + Hinglish support",
    "XP points, streaks & gamification",
    "Job-ready skills from zero"
  ];

  return (
    <>
      {/* How it Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
              How RoadmapFinder Works
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Your AI-powered fullstack journey in 3 steps: personalized roadmap, best YouTube lessons, and proof through assignments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting Lines for Desktop */}
            <div className="hidden md:block absolute top-24 left-1/3 w-1/3 h-0.5 border-t-2 border-dashed border-blue-200"></div>
            <div className="hidden md:block absolute top-24 right-1/3 w-1/3 h-0.5 border-t-2 border-dashed border-purple-200"></div>

            {steps.map((step, index) => (
              <div
                key={index}
                className="relative bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 group hover:-translate-y-1"
              >
                {/* Step Number Badge */}
                <div className={`absolute -top-4 left-8 w-8 h-8 bg-white border-2 border-${step.color}-600 rounded-full flex items-center justify-center shadow-sm`}>
                  <span className={`text-${step.color}-600 font-bold text-sm`}>{step.step}</span>
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl ${step.color === 'blue' ? 'bg-blue-100' :
                    step.color === 'purple' ? 'bg-purple-100' :
                      'bg-indigo-100'
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Trusted by Developers Worldwide
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of developers who transformed their careers with AI-powered fullstack learning
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-gray-100 rounded-2xl flex items-center justify-center group-hover:bg-gray-200 transition-all duration-300 group-hover:scale-110">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-extrabold mb-2 text-gray-900">
                  {stat.number}
                </div>
                <div className="text-lg font-bold text-gray-700 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-500">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-bold mb-6">
                <Star size={16} />
                Why Choose RoadmapFinder
              </div>

              <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 tracking-tight">
                The smartest way to learn
                <span className="text-blue-600"> fullstack from zero</span>
              </h3>

              <p className="text-lg text-gray-600 mb-8">
                We don't just give roadmaps—we give a complete ecosystem: AI-personalized fullstack path, curated YouTube lessons, and assignments that prove you learned it.
              </p>

              <div className="grid grid-cols-1 gap-3">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-200 hover:bg-blue-50 transition-all duration-200"
                  >
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle size={14} className="text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual Element */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300 border border-gray-200">
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Flame size={32} className="text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">
                    Start Your Fullstack Journey
                  </h4>
                  <p className="text-gray-600 mb-6">
                    Join developers who chose the smart path to job-ready fullstack skills
                  </p>
                  <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                    <div className="text-sm text-gray-600 mb-2 font-medium">Success Rate</div>
                    <div className="text-3xl font-extrabold text-blue-600">
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