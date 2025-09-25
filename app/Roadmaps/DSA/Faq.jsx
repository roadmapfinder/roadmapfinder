import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Faq = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "How long does it take to complete this entire roadmap?",
      answer: "The timeline varies based on your background and study schedule. For beginners with 2-3 hours daily practice: 3-4 months for basics, 6-8 months for intermediate, and 12-18 months for mastery. Those with programming experience can progress faster."
    },
    {
      question: "Should I learn C++, Java, or Python for DSA?",
      answer: "C++ is preferred for competitive programming due to speed and STL. Java is excellent for interviews at big tech companies. Python is beginner-friendly with clean syntax but slower. Choose based on your goal: C++ for contests, Java/Python for interviews."
    },
    {
      question: "How many problems should I solve daily?",
      answer: "Start with 1-2 problems daily as a beginner. Intermediate level: 3-5 problems. Advanced: 5-10 problems. Quality over quantity - understand each solution thoroughly rather than rushing through many problems."
    },
    {
      question: "When should I start applying for jobs?",
      answer: "Start applying after completing Level 2 (Intermediate DSA) if you can solve medium LeetCode problems consistently. For FAANG companies, aim to complete Level 3-4. Practice system design basics alongside DSA for senior positions."
    },
    {
      question: "Is competitive programming necessary for software engineering jobs?",
      answer: "Not mandatory, but highly beneficial. Competitive programming sharpens problem-solving skills and helps in technical interviews. Focus on interview-style problems (LeetCode) if your goal is software engineering rather than competitive contests."
    },
    {
      question: "How do I track my progress effectively?",
      answer: "Maintain a problem-solving journal with: problems solved, time taken, approach used, and key learnings. Use platforms like LeetCode to track progress. Regular mock interviews help assess readiness. Set weekly goals and review them."
    },
    {
      question: "What if I get stuck on a problem for too long?",
      answer: "Spend 30-45 minutes trying different approaches. If stuck, read hints or watch explanations. Understand the solution completely, then solve similar problems. Come back to the original problem after a few days to test retention."
    },
    {
      question: "Should I memorize algorithms or understand concepts?",
      answer: "Focus on understanding concepts and patterns. Memorizing helps with speed, but understanding helps with variations. Learn the 'why' behind algorithms. Practice implementing from scratch to build muscle memory naturally."
    },
    {
      question: "How important is mathematics for DSA?",
      answer: "Basic math is essential: logarithms, modular arithmetic, combinatorics, and probability. Advanced math becomes important for competitive programming and specific domains like graphics or machine learning. Start with basics and build up gradually."
    },
    {
      question: "Can I skip levels or should I follow the roadmap strictly?",
      answer: "The roadmap is designed progressively, but you can adjust based on your background. If you're experienced, quickly review basics and focus on gaps. Complete beginners should follow the sequence to build strong fundamentals."
    },
    {
      question: "How do I prepare for system design alongside DSA?",
      answer: "Start system design after Level 3 DSA. Begin with basics: scalability, databases, caching, load balancing. Practice designing simple systems like URL shortener, chat app. DSA knowledge helps in optimizing system components."
    },
    {
      question: "What's the difference between interview prep and competitive programming?",
      answer: "Interview prep focuses on medium-level problems, clean code, and communication. Competitive programming emphasizes speed, advanced algorithms, and mathematical insights. Both improve problem-solving but have different optimization goals."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Frequently Asked <span className="text-purple-600">Questions</span>
        </h1>
        <p className="text-gray-600 text-lg">
          Common questions about the DSA Mastery Roadmap and learning journey
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden"
          >
            <button
              onClick={() => toggleFaq(index)}
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <h3 className="text-lg font-semibold text-gray-900 pr-4">
                {faq.question}
              </h3>
              {openFaq === index ? (
                <ChevronUp className="text-purple-600 flex-shrink-0" size={24} />
              ) : (
                <ChevronDown className="text-purple-600 flex-shrink-0" size={24} />
              )}
            </button>

            {openFaq === index && (
              <div className="px-6 pb-4">
                <div className="pt-2 border-t border-gray-100">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Additional Tips Section */}
      <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
        <h2 className="text-xl font-bold text-blue-900 mb-4">💡 Quick Learning Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <p className="text-blue-800">• Practice consistently, not intensively</p>
            <p className="text-blue-800">• Join coding communities for motivation</p>
            <p className="text-blue-800">• Teach others to solidify your learning</p>
          </div>
          <div className="space-y-2">
            <p className="text-blue-800">• Review and revise solved problems</p>
            <p className="text-blue-800">• Participate in virtual contests</p>
            <p className="text-blue-800">• Document your learning journey</p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="mt-8 text-center p-6 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Still have questions?
        </h3>
        <p className="text-gray-600">
          Join coding communities, follow DSA experts on social media, or practice on platforms mentioned in the roadmap.
        </p>
      </div>
    </div>
  );
};

export default Faq;