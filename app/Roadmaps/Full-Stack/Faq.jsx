import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState({});

  const faqData = [
    {
      id: 1,
      question: "How long does it take to complete this roadmap?",
      answer: "The timeline varies based on your learning pace, prior experience, and time commitment. Generally, it takes 12-24 months to complete all phases if you dedicate 2-4 hours daily. Beginners might need 18-24 months, while those with some programming experience could finish in 12-15 months."
    },
    {
      id: 2,
      question: "Do I need a computer science degree to follow this roadmap?",
      answer: "No, a computer science degree is not required. This roadmap is designed to be self-taught friendly. However, you'll need dedication, consistency, and problem-solving skills. Many successful developers are self-taught and have built their careers following similar learning paths."
    },
    {
      id: 3,
      question: "What programming language should I start with?",
      answer: "Start with JavaScript as it's the foundation of web development and used in both frontend and backend development. The roadmap covers HTML, CSS, and JavaScript first, then progresses to frameworks like React and Node.js, all using JavaScript ecosystem."
    },
    {
      id: 4,
      question: "Should I complete each phase entirely before moving to the next?",
      answer: "While it's recommended to have a solid understanding of each phase before advancing, you don't need to master everything 100%. Aim for 70-80% competency in each phase, then move forward. You can always revisit and strengthen concepts as you progress."
    },
    {
      id: 5,
      question: "How much does it cost to follow this roadmap?",
      answer: "The roadmap can be followed with minimal cost. Most resources are free (documentation, tutorials, open-source tools). You might spend $20-50/month on hosting services for your projects and potentially $100-500 on premium courses or books, but free alternatives exist for everything."
    },
    {
      id: 6,
      question: "What kind of projects should I build?",
      answer: "Focus on projects that demonstrate full-stack capabilities: personal portfolio, e-commerce site, social media clone, chat application, and SaaS dashboard. Each project should showcase different technologies from the roadmap and solve real-world problems."
    },
    {
      id: 7,
      question: "How do I know if I'm ready for a job?",
      answer: "You're job-ready when you can: build full-stack applications independently, understand both frontend and backend concepts, have 3-5 solid projects in your portfolio, can explain your code and decisions, and feel confident discussing the technologies in the roadmap during interviews."
    },
    {
      id: 8,
      question: "Should I specialize in frontend or backend first?",
      answer: "Follow the roadmap sequence: start with frontend (HTML, CSS, JavaScript, React) as it provides immediate visual feedback and motivation. Then move to backend (Node.js, databases, APIs). This approach builds a strong foundation and keeps you motivated with visible progress."
    },
    {
      id: 9,
      question: "What if I get stuck on a particular topic?",
      answer: "Getting stuck is normal! Try multiple resources (documentation, tutorials, forums), break the problem into smaller parts, build simple examples, and don't hesitate to ask for help on Stack Overflow, Reddit, or Discord communities. Sometimes taking a short break and returning with fresh eyes helps."
    },
    {
      id: 10,
      question: "How important are the DevOps and deployment skills?",
      answer: "Very important for full-stack developers. Modern development requires understanding of deployment, containerization, CI/CD, and cloud platforms. These skills differentiate you from frontend-only or backend-only developers and make you more valuable in the job market."
    },
    {
      id: 11,
      question: "Can I skip TypeScript and just use JavaScript?",
      answer: "While you can build applications with just JavaScript, TypeScript is increasingly becoming the industry standard. It helps catch errors early, improves code quality, and is required by many employers. It's worth learning, especially as you advance in your career."
    },
    {
      id: 12,
      question: "How do I stay motivated throughout the journey?",
      answer: "Set small, achievable goals, celebrate small wins, build projects you're passionate about, join developer communities, track your progress, and remember that every expert was once a beginner. Focus on consistency over perfection."
    },
    {
      id: 13,
      question: "What's the difference between this roadmap and a bootcamp?",
      answer: "Bootcamps are structured, time-intensive (3-6 months), expensive ($10k-20k), but offer mentorship and job placement assistance. This roadmap is self-paced, free/low-cost, flexible, but requires more self-discipline. Both can lead to successful careers."
    },
    {
      id: 14,
      question: "How do I build a portfolio that stands out?",
      answer: "Create 3-5 high-quality projects that demonstrate different skills, deploy them live, write clean code, include README files, show your problem-solving process, make projects mobile-responsive, and ensure they solve real problems rather than just tutorial projects."
    },
    {
      id: 15,
      question: "What salary can I expect as a fullstack developer?",
      answer: "Salaries vary by location, experience, and company size. Entry-level: $50k-80k, Mid-level: $80k-120k, Senior-level: $120k-180k+. Major tech hubs typically offer higher salaries but also have higher living costs. Remote work has expanded opportunities globally."
    }
  ];

  const toggleItem = (itemId) => {
    setOpenItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {/* FAQ Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <HelpCircle className="text-blue-600 mr-3" size={32} />
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Frequently Asked Questions
          </h1>
        </div>
        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
          Find answers to common questions about the Fullstack Developer Roadmap and your learning journey.
        </p>
      </div>

      {/* FAQ Items */}
      <div className="space-y-4">
        {faqData.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
          >
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset rounded-lg"
            >
              <h3 className="text-base md:text-lg font-semibold text-gray-900 pr-4">
                {item.question}
              </h3>
              <div className="flex-shrink-0">
                {openItems[item.id] ? (
                  <ChevronUp className="text-blue-600" size={20} />
                ) : (
                  <ChevronDown className="text-gray-400" size={20} />
                )}
              </div>
            </button>

            {openItems[item.id] && (
              <div className="px-6 pb-4">
                <div className="pt-2 border-t border-gray-100">
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

     
    </div>
  );
};

export default FAQ;