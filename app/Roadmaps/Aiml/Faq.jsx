import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const Faq = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqData = [
    {
      question: "How long does it take to complete this entire roadmap?",
      answer: "With consistent study of 12-15 hours per week, the complete roadmap typically takes 12-18 months. However, this varies based on your background, learning pace, and whether you're studying full-time or part-time. Phase 1-2 might take 5-7 months, Phase 3-4 another 7-10 months, and Phase 5 is ongoing specialization."
    },
    {
      question: "Do I need a computer science or math background to start?",
      answer: "No formal CS or advanced math background is required, but basic programming knowledge helps. The roadmap starts with mathematical foundations in Phase 1. If you're completely new to programming, consider spending 2-4 weeks learning Python basics before starting Phase 1."
    },
    {
      question: "Should I complete all phases sequentially or can I skip around?",
      answer: "It's highly recommended to follow the phases sequentially, especially Phases 1-4. Each phase builds upon previous knowledge. However, within each phase, you can adjust the order of sections based on your interests. Phase 5 (Specializations) can be pursued based on your career goals."
    },
    {
      question: "What's the difference between this roadmap and online courses like Coursera or Udemy?",
      answer: "This roadmap is a comprehensive, structured learning path that combines multiple resources. Unlike single courses, it covers the entire spectrum from basics to advanced topics with hands-on projects. It's designed to make you industry-ready, not just teach individual concepts. You'll use various resources including free and paid courses as part of this roadmap."
    },
    {
      question: "How much will it cost to follow this roadmap?",
      answer: "The roadmap can be followed with mostly free resources. Essential costs might include: Cloud computing for projects ($20-50/month when actively training models), optional paid courses ($30-200 total), and potentially a GPU for local training ($200-1000+ for hardware). Many alternatives exist using free tiers and Google Colab."
    },
    {
      question: "What programming languages should I focus on?",
      answer: "Python is the primary language for this roadmap and the industry standard for AI/ML. You'll also need basic knowledge of SQL for data handling, and optionally JavaScript for web deployment. R can be useful for statistics but isn't essential. Focus 90% of your time on Python."
    },
    {
      question: "How important are the projects, and can I substitute them?",
      answer: "Projects are crucial - they're what differentiate you from theory-only learners. The suggested projects are carefully chosen to reinforce learning and build your portfolio. You can substitute similar projects, but ensure they cover the same concepts and complexity level. Aim for 2-3 projects per phase."
    },
    {
      question: "Should I get certifications while following this roadmap?",
      answer: "Certifications can be helpful but aren't essential. Focus on building real projects and skills first. Consider certifications from Google Cloud, AWS, or Azure for MLOps skills, and perhaps deep learning specializations from Coursera. However, a strong GitHub portfolio often matters more than certificates."
    },
    {
      question: "How do I stay motivated during the long learning journey?",
      answer: "Break the roadmap into smaller milestones, celebrate completing each phase, join AI/ML communities (Reddit, Discord, LinkedIn groups), work on projects you're passionate about, share your progress on social media, find a study buddy or mentor, and remember that each phase makes you more valuable in the job market."
    },
    {
      question: "What job opportunities are available after completing different phases?",
      answer: "After Phase 1-2: Data Analyst, Junior Data Scientist roles. After Phase 3: ML Engineer, Computer Vision Engineer, NLP Engineer positions. After Phase 4: Senior ML Engineer, AI Research Engineer, MLOps Engineer. Phase 5 opens specialized roles like AI Research Scientist, Deep Learning Architect, or domain-specific AI consultant."
    },
    {
      question: "How do I choose which specialization to pursue in Phase 5?",
      answer: "Consider your interests, job market demand in your area, and which projects excited you most in earlier phases. Computer Vision and NLP have broad applications, Generative AI is trending, RL is great for research, and Edge/Robotics for hardware applications. You can also pursue multiple specializations over time."
    },
    {
      question: "Is it better to learn PyTorch or TensorFlow first?",
      answer: "Both are covered in the roadmap. TensorFlow/Keras is slightly easier for beginners with its high-level API, while PyTorch is preferred in research. Start with TensorFlow in Phase 3, then learn PyTorch. Many concepts transfer between frameworks, so learning both makes you more versatile."
    },
    {
      question: "How do I build a portfolio that stands out to employers?",
      answer: "Focus on end-to-end projects that solve real problems, deploy your models (not just notebooks), write clear documentation and blog posts explaining your work, contribute to open source projects, show the business impact of your projects, use version control properly, and demonstrate both technical skills and communication ability."
    },
    {
      question: "What if I get stuck on mathematical concepts?",
      answer: "Math anxiety is common. Use visual resources like 3Blue1Brown, Khan Academy, and hands-on coding to reinforce theory. Don't aim for mathematical perfection - focus on intuitive understanding. Join study groups, ask questions on Stack Overflow or Reddit, and remember that you can always return to strengthen math knowledge as needed."
    },
    {
      question: "How do I transition from this roadmap to a career in AI/ML?",
      answer: "Start applying for roles after Phase 2-3, build a LinkedIn presence sharing your learning journey, network with professionals in the field, contribute to open source projects, attend AI/ML meetups and conferences, consider internships or freelance projects to gain experience, and tailor your portfolio to specific job requirements."
    },
    {
      question: "Should I pursue a formal degree while following this roadmap?",
      answer: "A formal degree isn't required but can be helpful for certain roles, especially in research. This roadmap can complement a degree program or serve as an alternative path. Many successful AI/ML professionals are self-taught. Focus on skills and portfolio first, then consider formal education if needed for specific career goals."
    },
    {
      question: "How do I stay updated with the rapidly evolving AI/ML field?",
      answer: "Follow key researchers on Twitter, subscribe to AI newsletters (The Batch, AI Research), read Papers with Code regularly, join AI/ML podcasts, participate in online communities, attend virtual conferences, and most importantly, continuously work on projects using the latest techniques and tools."
    },
    {
      question: "What hardware do I need to follow this roadmap?",
      answer: "A decent laptop with 8GB+ RAM is sufficient for most of the roadmap. For deep learning projects, you can use Google Colab (free GPU access), Kaggle kernels, or cloud platforms. If you want local GPU training, consider RTX 3060/4060 or higher. Many successful ML practitioners start with just CPU and cloud resources."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <HelpCircle className="text-blue-600 mr-3" size={32} />
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Frequently Asked Questions
          </h1>
        </div>
        <p className="text-gray-600 text-lg">
          Common questions about the AI/ML Mastery Roadmap
        </p>
      </div>

      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div 
            key={index}
            className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden"
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <h3 className="font-semibold text-gray-900 text-sm md:text-base pr-4">
                {item.question}
              </h3>
              {openItems[index] ? (
                <ChevronUp className="text-blue-600 flex-shrink-0" size={20} />
              ) : (
                <ChevronDown className="text-blue-600 flex-shrink-0" size={20} />
              )}
            </button>

            {openItems[index] && (
              <div className="px-6 pb-4 border-t border-gray-100">
                <p className="text-gray-700 text-sm md:text-base leading-relaxed mt-4">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Additional Help Section */}
      <div className="mt-12 bg-blue-50 rounded-lg p-6 border border-blue-200">
        <h2 className="text-xl font-bold text-blue-900 mb-4">
          Still have questions?
        </h2>
        <p className="text-blue-800 mb-4">
          The AI/ML community is always ready to help! Here are some great places to get additional support:
        </p>
        <ul className="space-y-2 text-blue-700">
          <li>• Join the r/MachineLearning and r/LearnMachineLearning subreddits</li>
          <li>• Participate in AI/ML Discord communities and Slack groups</li>
          <li>• Ask specific technical questions on Stack Overflow</li>
          <li>• Connect with learners and professionals on LinkedIn</li>
          <li>• Attend local AI/ML meetups and study groups</li>
        </ul>
      </div>
    </div>
  );
};

export default Faq;