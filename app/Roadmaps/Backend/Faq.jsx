"use client"
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Clock, BookOpen, Code, Users, Zap, Globe } from 'lucide-react';

const Faq = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const faqData = [
    {
      id: 1,
      icon: <Clock className="text-blue-600" size={20} />,
      question: "How long does it take to complete the entire roadmap?",
      answer: "The complete roadmap typically takes 12-18 months for beginners studying 2-3 hours daily. Experienced developers can complete it in 8-12 months. The timeline varies based on your prior experience, learning pace, and time commitment. Each phase has estimated timeframes ranging from 2-20 weeks."
    },
    {
      id: 2,
      icon: <BookOpen className="text-green-600" size={20} />,
      question: "Do I need a computer science degree to follow this roadmap?",
      answer: "No, you don't need a CS degree. This roadmap is designed for self-taught developers. However, you'll need strong dedication, consistent practice, and problem-solving skills. Many successful backend developers are self-taught. Focus on building projects and gaining practical experience."
    },
    {
      id: 3,
      icon: <Code className="text-purple-600" size={20} />,
      question: "Which programming language should I choose for backend development?",
      answer: "For beginners, we recommend JavaScript/TypeScript (Node.js) or Python. JavaScript has a huge ecosystem and is beginner-friendly. Python is great for rapid development and has excellent frameworks like Django and FastAPI. Java and Go are excellent for enterprise applications but have steeper learning curves."
    },
    {
      id: 4,
      icon: <Zap className="text-orange-600" size={20} />,
      question: "Can I skip phases or learn them in a different order?",
      answer: "While the roadmap is designed progressively, you can adjust based on your background. Don't skip Phase 1-3 as they're foundational. Advanced developers might move faster through early phases. However, ensure you understand fundamentals before moving to complex topics like system design."
    },
    {
      id: 5,
      icon: <Users className="text-red-600" size={20} />,
      question: "What kind of jobs can I get after completing this roadmap?",
      answer: "After completing the roadmap, you can apply for roles like Backend Developer, Full-Stack Developer, API Developer, DevOps Engineer (with Phase 6), or Software Engineer. Junior positions are achievable after Phase 4-5, while senior positions require completing Phase 7 plus real-world experience."
    },
    {
      id: 6,
      icon: <Globe className="text-indigo-600" size={20} />,
      question: "How important are the projects mentioned in each phase?",
      answer: "Projects are crucial - they're your portfolio and proof of skills. Employers care more about what you've built than what you've studied. Complete every project, add your own features, deploy them live, and showcase them on GitHub. These projects often become talking points in interviews."
    },
    {
      id: 7,
      icon: <BookOpen className="text-teal-600" size={20} />,
      question: "What resources should I use for learning?",
      answer: "Combine multiple resources: official documentation, video tutorials (YouTube, Udemy, Coursera), books, and hands-on coding. Free resources like freeCodeCamp, The Odin Project, and MDN Web Docs are excellent. Practice on platforms like LeetCode for algorithms and HackerRank for general programming."
    },
    {
      id: 8,
      icon: <Zap className="text-yellow-600" size={20} />,
      question: "How do I know when I'm ready to move to the next phase?",
      answer: "You're ready when you can complete the phase project independently, explain the concepts clearly, and apply them to solve new problems. Don't aim for perfection - 80% confidence is enough to move forward. You'll reinforce learning in later phases."
    },
    {
      id: 9,
      icon: <Code className="text-pink-600" size={20} />,
      question: "Should I learn frontend technologies as a backend developer?",
      answer: "Basic frontend knowledge helps you understand the full picture and communicate better with frontend teams. Learn HTML, CSS, JavaScript basics, and how REST APIs are consumed. However, focus primarily on backend skills - being a specialist is often more valuable than being a generalist."
    },
    {
      id: 10,
      icon: <Users className="text-gray-600" size={20} />,
      question: "How do I get real-world experience while learning?",
      answer: "Contribute to open source projects, build personal projects that solve real problems, participate in hackathons, create a tech blog, join developer communities, and consider internships or junior roles even before completing the roadmap. Real-world experience is invaluable."
    },
    {
      id: 11,
      icon: <Globe className="text-cyan-600" size={20} />,
      question: "What's the difference between this roadmap and bootcamps?",
      answer: "This roadmap is self-paced and comprehensive, covering 7 phases over 12-18 months. Bootcamps are intensive 3-6 month programs with structured curriculum and mentorship. Bootcamps offer faster job placement but less depth. This roadmap gives you deeper understanding but requires more self-discipline."
    },
    {
      id: 12,
      icon: <Clock className="text-emerald-600" size={20} />,
      question: "How much should I practice coding daily?",
      answer: "Consistency beats intensity. Aim for 2-3 hours daily for beginners, split between learning new concepts (60%) and coding practice (40%). Include at least 30 minutes of hands-on coding daily. Weekend sessions can be longer for project work. Quality focused practice is more important than hours."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 text-lg">
          Common questions about the Backend Developer Roadmap
        </p>
      </div>

      <div className="space-y-4">
        {faqData.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              <div className="flex items-center space-x-3">
                {item.icon}
                <h3 className="font-semibold text-gray-900 text-sm md:text-base">
                  {item.question}
                </h3>
              </div>
              {openItems[item.id] ? (
                <ChevronUp className="text-gray-500 flex-shrink-0" size={20} />
              ) : (
                <ChevronDown className="text-gray-500 flex-shrink-0" size={20} />
              )}
            </button>

            {openItems[item.id] && (
              <div className="px-6 pb-4">
                <div className="pl-8 pt-2 border-l-2 border-gray-100">
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    {item.answer}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Additional Help Section */}
      <div className="mt-12 text-center p-6 bg-blue-50 rounded-lg border border-blue-200">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Still have questions?
        </h3>
        <p className="text-gray-700 mb-4">
          The Backend development community is very supportive. Here are some great places to get help:
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <span className="px-3 py-1 bg-white rounded-full border border-blue-300 text-blue-700">
            Stack Overflow
          </span>
          <span className="px-3 py-1 bg-white rounded-full border border-blue-300 text-blue-700">
            Reddit r/webdev
          </span>
          <span className="px-3 py-1 bg-white rounded-full border border-blue-300 text-blue-700">
            Discord Communities
          </span>
          <span className="px-3 py-1 bg-white rounded-full border border-blue-300 text-blue-700">
            Twitter #webdev
          </span>
        </div>
      </div>
    </div>
  );
};

export default Faq;