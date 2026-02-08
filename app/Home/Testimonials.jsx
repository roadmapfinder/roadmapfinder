"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Quote } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: "Alex Rivera",
    role: "Flutter Developer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces",
    feedback: "RoadmapFinder completely changed how I approach learning. The structured paths helped me go from zero to building production-ready Flutter apps in months.",
    linkedin: "#"
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Computer Science Student",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces",
    feedback: "As a student, the sheer amount of resources online is overwhelming. These roadmaps gave me the clarity I needed to focus on what actually matters in the industry.",
    linkedin: "#"
  },
  {
    id: 3,
    name: "Marcus Johnson",
    role: "Full Stack Engineer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces",
    feedback: "The AI Automation roadmap is world-class. It covers everything from foundations to advanced agentic workflows. A must-have for any modern developer.",
    linkedin: "#"
  },
  {
    id: 4,
    name: "Elena Rodriguez",
    role: "UI/UX Designer",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces",
    feedback: "The design roadmaps are incredibly detailed. They don't just teach tools; they teach the underlying principles that make a great designer.",
    linkedin: "#"
  },
  {
    id: 5,
    name: "David Kim",
    role: "Backend Developer",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=150&fit=crop&crop=faces",
    feedback: "I finally understood system design thanks to the clear visual mapping here. The community support is just the icing on the cake.",
    linkedin: "#"
  },
  {
    id: 6,
    name: "Priya Sharma",
    role: "Data Scientist",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=faces",
    feedback: "Structured, up-to-date, and practical. RoadmapFinder is my go-to recommendation for anyone starting their tech journey.",
    linkedin: "#"
  }
];

const TestimonialCard = ({ testimonial, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group"
    >
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center gap-4">
          <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-blue-50">
            <img 
              src={testimonial.image} 
              alt={testimonial.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h4 className="font-bold text-gray-900 leading-tight">{testimonial.name}</h4>
            <p className="text-sm text-gray-500">{testimonial.role}</p>
          </div>
        </div>
        {testimonial.linkedin && (
          <a 
            href={testimonial.linkedin} 
            className="text-gray-300 hover:text-blue-600 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={18} />
          </a>
        )}
      </div>
      
      <div className="relative flex-grow">
        <Quote className="absolute -top-2 -left-2 w-8 h-8 text-blue-50 opacity-50" />
        <p className="relative z-10 text-gray-600 leading-relaxed italic">
          "{testimonial.feedback}"
        </p>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-24 bg-white overflow-hidden font-['Sora']">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4"
          >
            What Learners Are Saying
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Real feedback from developers and students navigating their paths with RoadmapFinder.
          </motion.p>
        </div>

        {/* Desktop/Tablet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={testimonial.id} 
              testimonial={testimonial} 
              index={index} 
            />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-400 text-sm font-medium tracking-wide uppercase">
            Used by self-learners, students, and developers worldwide.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
