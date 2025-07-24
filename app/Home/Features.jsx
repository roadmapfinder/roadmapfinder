"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Youtube, Map, FileText, TrendingUp, Users } from 'lucide-react';

const AnimatedStatsComponent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  // Animation state for each counter
  const [counters, setCounters] = useState({
    courses: 0,
    roadmaps: 0,
    blogs: 0
  });

  // Target values
  const targets = {
    courses: 100,
    roadmaps: 50,
    blogs: 30
  };

  // Intersection Observer to trigger animation when component comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          startCountingAnimation();
        }
      },
      { threshold: 0.3 }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  // Animated counting function
  const startCountingAnimation = () => {
    const duration = 2500; // 2.5 seconds
    const steps = 60; // 60 steps for smooth animation
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;

      // Easing function for more natural animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setCounters({
        courses: Math.floor(targets.courses * easeOutQuart),
        roadmaps: Math.floor(targets.roadmaps * easeOutQuart),
        blogs: Math.floor(targets.blogs * easeOutQuart)
      });

      if (step >= steps) {
        clearInterval(timer);
        // Ensure final values are exact
        setCounters({
          courses: targets.courses,
          roadmaps: targets.roadmaps,
          blogs: targets.blogs
        });
      }
    }, interval);
  };

  const StatCard = ({ icon: Icon, count, target, title, subtitle, iconColor }) => (
    <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
      {/* Icon */}
      <div className={`inline-flex items-center justify-center w-12 h-12 ${iconColor} rounded-lg mb-6`}>
        <Icon size={24} className="text-white" />
      </div>

      {/* Counter */}
      <div className="mb-4">
        <div className="flex items-baseline gap-1 mb-3">
          <span className="text-4xl font-bold text-gray-900 tabular-nums">
            {count}
          </span>
          <span className="text-xl font-semibold text-gray-500">+</span>
        </div>

        {/* Clean progress indicator */}
        <div className="w-full bg-gray-100 rounded-full h-1.5">
          <div 
            className={`h-full ${iconColor} rounded-full transition-all duration-1000 ease-out`}
            style={{ width: `${(count / target) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Content */}
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        {title}
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed">
        {subtitle}
      </p>
    </div>
  );

  return (
    <div ref={componentRef} className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
          <TrendingUp size={16} />
          Platform Statistics
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Empowering Your Learning Journey
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Join thousands of learners accessing premium content and expert-curated resources
        </p>
      </div>

      {/* Stats Grid */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatCard
            icon={Youtube}
            count={counters.courses}
            target={targets.courses}
            title="Industry Courses"
            subtitle="Expert-led courses from top professionals with YouTube certification and hands-on projects"
            iconColor="bg-red-500"
          />

          <StatCard
            icon={Map}
            count={counters.roadmaps}
            target={targets.roadmaps}
            title="Skill Roadmaps"
            subtitle="Comprehensive learning paths designed by industry experts for high-demand careers"
            iconColor="bg-blue-500"
          />

          <StatCard
            icon={FileText}
            count={counters.blogs}
            target={targets.blogs}
            title="Tech Tool Blogs"
            subtitle="Latest insights on cutting-edge tools and technologies shaping the future"
            iconColor="bg-green-500"
          />
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="text-center mt-16">
        <div className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-6 py-3 rounded-full text-sm font-medium shadow-sm">
          <Users size={16} />
          <span>Join 10,000+ learners worldwide</span>
        </div>
      </div>

      <style jsx>{`
        .tabular-nums {
          font-variant-numeric: tabular-nums;
          font-feature-settings: "tnum";
        }

        /* Accessibility improvements */
        @media (prefers-reduced-motion: reduce) {
          .transition-all,
          .transition-shadow {
            transition: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedStatsComponent;