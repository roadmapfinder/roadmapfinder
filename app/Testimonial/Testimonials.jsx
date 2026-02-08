"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Quote, Star, Users, CheckCircle } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Alex Rivera",
    role: "Flutter Developer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces",
    feedback: "RoadmapFinder completely changed how I approach learning. The structured paths helped me go from zero to building production-ready Flutter apps in months.",
    linkedin: "#",
    rating: 5
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Computer Science Student",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces",
    feedback: "As a student, the sheer amount of resources online is overwhelming. These roadmaps gave me the clarity I needed to focus on what actually matters in the industry.",
    linkedin: "#",
    rating: 5
  },
  {
    id: 3,
    name: "Marcus Johnson",
    role: "Full Stack Engineer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces",
    feedback: "The AI Automation roadmap is world-class. It covers everything from foundations to advanced agentic workflows. A must-have for any modern developer.",
    linkedin: "#",
    rating: 5
  },
  {
    id: 4,
    name: "Elena Rodriguez",
    role: "UI/UX Designer",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces",
    feedback: "The design roadmaps are incredibly detailed. They don't just teach tools; they teach the underlying principles that make a great designer.",
    linkedin: "#",
    rating: 5
  },
  {
    id: 5,
    name: "David Kim",
    role: "Backend Developer",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=150&fit=crop&crop=faces",
    feedback: "I finally understood system design thanks to the clear visual mapping here. The community support is just the icing on the cake.",
    linkedin: "#",
    rating: 5
  },
  {
    id: 6,
    name: "Priya Sharma",
    role: "Data Scientist",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=faces",
    feedback: "Structured, up-to-date, and practical. RoadmapFinder is my go-to recommendation for anyone starting their tech journey.",
    linkedin: "#",
    rating: 5
  }
];

const TestimonialCard = ({ testimonial, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-3xl -rotate-1 group-hover:rotate-0 transition-transform duration-300" />
      
      <div className="relative bg-white p-8 rounded-3xl border border-blue-100/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(37,99,235,0.1)] transition-all duration-500 flex flex-col h-full overflow-hidden">
        {/* Decorative Quote Mark */}
        <Quote className="absolute -top-4 -right-4 w-24 h-24 text-blue-50 opacity-20 rotate-12" />
        
        <div className="flex justify-between items-start mb-6 relative z-10">
          <div className="flex items-center gap-4">
            <div className="relative p-1 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-sm">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 flex items-center gap-2">
                {testimonial.name}
                <CheckCircle className="w-4 h-4 text-blue-500" />
              </h4>
              <p className="text-sm font-medium text-blue-600/70">{testimonial.role}</p>
            </div>
          </div>
          <a 
            href={testimonial.linkedin} 
            className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-50 text-blue-500 hover:bg-blue-600 hover:text-white transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={16} />
          </a>
        </div>
        
        <div className="mb-4 flex gap-0.5">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>

        <div className="relative flex-grow z-10">
          <p className="text-gray-600 leading-relaxed text-lg">
            "{testimonial.feedback}"
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  return (
    <section className="relative py-32 bg-[#fcfdff] overflow-hidden font-['Sora']">
      {/* Background Orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-100/30 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-bold mb-6"
          >
            <Users size={16} />
            <span>COMMUNITY FEEDBACK</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight"
          >
            What Learners <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Are Saying</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-500 max-w-2xl mx-auto"
          >
            Join thousands of developers who have accelerated their careers with our structured learning paths.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={testimonial.id} 
              testimonial={testimonial} 
              index={index} 
            />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-6"
        >
          <div className="flex -space-x-3">
            {testimonials.slice(0, 5).map((t, i) => (
              <img 
                key={i}
                src={t.image} 
                className="w-12 h-12 rounded-full border-4 border-white shadow-sm object-cover" 
                alt="user"
              />
            ))}
            <div className="w-12 h-12 rounded-full border-4 border-white bg-blue-600 text-white flex items-center justify-center text-xs font-bold shadow-sm">
              +5k
            </div>
          </div>
          <p className="text-gray-500 text-base font-semibold flex items-center gap-2">
            <CheckCircle className="text-green-500 w-5 h-5" />
            Used by self-learners, students, and developers worldwide.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
