import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Clock, BookOpen, Code, Users, Briefcase, Star } from 'lucide-react';

const Faq = () => {
  const [openItems, setOpenItems] = useState(new Set([0])); // First item open by default

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const faqData = [
    {
      category: "Getting Started",
      icon: <BookOpen size={20} className="text-blue-500" />,
      questions: [
        {
          question: "How long does it take to complete the entire MERN stack roadmap?",
          answer: "For complete beginners: 6-8 months with consistent daily practice (2-3 hours/day). For those with some programming background: 4-6 months. Remember, learning to code is a marathon, not a sprint. Focus on understanding concepts deeply rather than rushing through."
        },
        {
          question: "Do I need any prior programming experience to start this roadmap?",
          answer: "No prior experience required! The roadmap starts with web development foundations including HTML, CSS, and JavaScript basics. However, having basic computer literacy and problem-solving mindset will be helpful. If you're completely new to programming, consider spending extra time on Phase 1."
        },
        {
          question: "What should I do if I get stuck on a particular concept?",
          answer: "1) Re-read the documentation carefully, 2) Try building a small project using that concept, 3) Watch YouTube tutorials from different instructors, 4) Join communities like Stack Overflow, Reddit r/webdev, or Discord servers, 5) Take a break and come back with fresh eyes. Getting stuck is normal and part of the learning process!"
        }
      ]
    },
    {
      category: "Learning Path",
      icon: <Code size={20} className="text-green-500" />,
      questions: [
        {
          question: "Can I skip phases or learn them in a different order?",
          answer: "It's strongly recommended to follow the order, especially Phases 1-4. Each phase builds upon the previous one. However, once you reach Phase 5, you can customize based on your interests. For example, if you're more interested in frontend, you can dive deeper into React before mastering backend concepts."
        },
        {
          question: "Should I master each phase completely before moving to the next?",
          answer: "Aim for 80% comfort level before moving forward. You don't need to be an expert in everything, but you should understand core concepts well. You'll naturally reinforce earlier concepts as you progress. The key is being able to build small projects with each technology."
        },
        {
          question: "How do I know if I'm ready to move to the next phase?",
          answer: "You should be able to: 1) Build a small project using the current phase's technologies, 2) Explain key concepts to someone else, 3) Debug common errors independently, 4) Feel confident reading documentation. If you can do these, you're ready to progress!"
        }
      ]
    },
    {
      category: "Practice & Projects",
      icon: <Star size={20} className="text-purple-500" />,
      questions: [
        {
          question: "How important are the suggested projects in each phase?",
          answer: "Extremely important! Projects are where real learning happens. Each suggested project is carefully chosen to reinforce the concepts you've learned. Don't just code along with tutorials - try to build projects from scratch, make mistakes, debug, and problem-solve. This builds real programming skills."
        },
        {
          question: "Should I build my own projects or follow tutorials?",
          answer: "Both! Start with tutorials to understand concepts, then build your own projects to apply them. A good ratio is 30% tutorials, 70% your own projects. Try to modify tutorial projects by adding your own features. This helps you think independently and builds problem-solving skills."
        },
        {
          question: "How do I come up with project ideas?",
          answer: "Look at problems in your daily life that could be solved with an app. Ideas: expense tracker, habit tracker, local business website, inventory system, quiz app, weather dashboard, recipe organizer. Start simple and add complexity gradually. The best projects solve real problems you care about."
        }
      ]
    },
    {
      category: "Technical Questions",
      icon: <Clock size={20} className="text-orange-500" />,
      questions: [
        {
          question: "Which code editor and extensions should I use?",
          answer: "VS Code is the most popular choice. Essential extensions: ES7+ React/Redux/React-Native snippets, Prettier, ESLint, Auto Rename Tag, Bracket Pair Colorizer, Live Server, Thunder Client (for API testing), GitLens. These will significantly improve your coding experience and productivity."
        },
        {
          question: "Should I learn TypeScript along with JavaScript?",
          answer: "Start with JavaScript first and get comfortable with it. Once you're confident with JS and React (around Phase 2-3), introduce TypeScript gradually. TypeScript is increasingly important in the industry, but learning both simultaneously as a beginner can be overwhelming."
        },
        {
          question: "What's the best way to handle version control while learning?",
          answer: "Start using Git from day one, even for small projects. Create a GitHub account and push every project. This builds good habits and creates a portfolio. Basic workflow: git add -> git commit -> git push. Don't worry about advanced Git features initially - focus on the fundamentals."
        },
        {
          question: "Should I learn SQL databases or stick with MongoDB?",
          answer: "MongoDB is perfect for learning MERN stack concepts, but understanding SQL is crucial for your career. After completing the MERN roadmap, spend time learning PostgreSQL or MySQL. Many companies use both SQL and NoSQL databases, so knowing both makes you more versatile."
        }
      ]
    },
    {
      category: "Career & Job Search",
      icon: <Briefcase size={20} className="text-red-500" />,
      questions: [
        {
          question: "When am I ready to start applying for jobs?",
          answer: "You're job-ready when you can: 1) Build a full-stack application from scratch, 2) Deploy it to production, 3) Explain your code and architectural decisions, 4) Debug issues independently, 5) Have 2-3 solid portfolio projects. This typically happens after completing Phase 5 with some projects."
        },
        {
          question: "What should my portfolio include?",
          answer: "3-5 quality projects showcasing: 1) A full-stack MERN application with authentication, 2) A React frontend with external API integration, 3) A backend API with database operations, 4) Clean, commented code on GitHub, 5) Live deployments with good UI/UX. Quality over quantity!"
        },
        {
          question: "How do I prepare for technical interviews?",
          answer: "Practice: 1) LeetCode problems (data structures & algorithms), 2) System design basics, 3) Explaining your projects in detail, 4) Common React/Node.js interview questions, 5) Building applications live during interviews. Mock interviews with friends or online platforms help build confidence."
        },
        {
          question: "What salary can I expect as a junior MERN developer?",
          answer: "Varies by location and company. In the US: $50k-80k, India: ₹3-8 LPA, Europe: €35k-55k. Focus on landing your first job to gain experience rather than maximizing initial salary. Your earning potential grows significantly with experience and skills."
        }
      ]
    },
    {
      category: "Common Challenges",
      icon: <Users size={20} className="text-indigo-500" />,
      questions: [
        {
          question: "I'm feeling overwhelmed by how much there is to learn. What should I do?",
          answer: "This is completely normal! Break learning into small, daily goals. Focus on one concept at a time. Celebrate small wins. Remember that even senior developers are constantly learning new things. The key is consistency, not speed. Take breaks when needed and don't compare your progress to others."
        },
        {
          question: "How do I stay motivated during the learning process?",
          answer: "1) Set small, achievable daily goals, 2) Join coding communities for support, 3) Share your progress on social media, 4) Find an accountability partner, 5) Remind yourself why you started, 6) Take breaks to avoid burnout, 7) Celebrate completed projects. Motivation fluctuates, but building habits ensures progress."
        },
        {
          question: "Should I specialize in frontend or backend, or learn both?",
          answer: "Learning both (full-stack) makes you more valuable, especially as a junior developer. It gives you a complete understanding of how applications work. Later in your career, you might specialize based on your interests and market demands, but starting as a generalist opens more opportunities."
        }
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6">
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-600 text-sm md:text-base">
          Common questions and detailed answers to help you navigate your MERN stack learning journey
        </p>
      </div>

      <div className="space-y-6">
        {faqData.map((category, categoryIndex) => (
          <div key={categoryIndex} className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="border-b border-gray-100 p-4 bg-gray-50 rounded-t-lg">
              <div className="flex items-center space-x-3">
                {category.icon}
                <h2 className="text-lg font-semibold text-gray-900">
                  {category.category}
                </h2>
              </div>
            </div>

            <div className="divide-y divide-gray-100">
              {category.questions.map((item, itemIndex) => {
                const globalIndex = categoryIndex * 100 + itemIndex; // Unique index
                const isOpen = openItems.has(globalIndex);

                return (
                  <div key={itemIndex} className="transition-all duration-200">
                    <button
                      onClick={() => toggleItem(globalIndex)}
                      className="w-full px-4 md:px-6 py-4 text-left hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm md:text-base font-medium text-gray-900 pr-4">
                          {item.question}
                        </h3>
                        {isOpen ? (
                          <ChevronUp size={20} className="text-gray-500 flex-shrink-0" />
                        ) : (
                          <ChevronDown size={20} className="text-gray-500 flex-shrink-0" />
                        )}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-4 md:px-6 pb-4 animate-in slide-in-from-top-2 duration-200">
                        <p className="text-gray-700 text-sm md:text-base leading-relaxed whitespace-pre-line">
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Additional Resources */}
      <div className="mt-8 p-4 md:p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">
          Still have questions?
        </h3>
        <p className="text-gray-700 text-sm md:text-base mb-4">
          Learning to code is a journey, and questions are part of the process. Here are some great communities where you can get help:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded border">
            <h4 className="font-medium text-gray-900">Stack Overflow</h4>
            <p className="text-sm text-gray-600">Best for specific coding questions and debugging help</p>
          </div>
          <div className="bg-white p-3 rounded border">
            <h4 className="font-medium text-gray-900">Reddit r/webdev</h4>
            <p className="text-sm text-gray-600">Great community for career advice and discussions</p>
          </div>
          <div className="bg-white p-3 rounded border">
            <h4 className="font-medium text-gray-900">Discord Communities</h4>
            <p className="text-sm text-gray-600">Real-time help and coding study groups</p>
          </div>
          <div className="bg-white p-3 rounded border">
            <h4 className="font-medium text-gray-900">FreeCodeCamp Forum</h4>
            <p className="text-sm text-gray-600">Beginner-friendly community with detailed help</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;