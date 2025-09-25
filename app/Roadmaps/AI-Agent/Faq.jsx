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
    // 🌱 Beginner / General Questions
    {
      question: "Do I need any coding experience to follow this roadmap?",
      answer: "No coding experience is required! This roadmap is specifically designed for complete beginners who want to build AI agents using visual, no-code tools. The focus is on drag-and-drop interfaces, visual builders, and configuration-based approaches rather than writing code."
    },
    {
      question: "What's the difference between an AI chatbot and an AI agent?",
      answer: "An AI chatbot typically responds to questions in a conversational format, while an AI agent can reason, use tools, maintain memory, and take actions autonomously. AI agents can connect to external APIs, databases, and services to perform complex tasks like booking appointments, analyzing data, or managing workflows."
    },
    {
      question: "How much time should I dedicate weekly to complete this roadmap?",
      answer: "We recommend 10-12 hours per week for optimal progress. This allows you to complete Phase 1 in about 1 month, Phase 2 in 2-3 months, and so on. However, you can adjust the pace based on your schedule - even 5-6 hours per week will lead to steady progress."
    },
    {
      question: "What equipment or software do I need to get started?",
      answer: "You only need a computer with internet access and a web browser. Most tools in this roadmap are cloud-based and accessible through web interfaces. Some tools offer free tiers, while others may require paid subscriptions as you advance."
    },

    // 🛠 No-Code Tools
    {
      question: "Which no-code AI platform should I start with?",
      answer: "For absolute beginners, start with ChatGPT or Claude for prompt engineering basics. Then move to Flowise AI or Langflow for visual agent building. These platforms have intuitive interfaces and good documentation to help you learn the fundamentals."
    },
    {
      question: "Are these no-code tools free to use?",
      answer: "Many tools offer free tiers with limitations. For example, Flowise AI is open-source and free to self-host, ChatGPT has a free tier, and Zapier offers limited free automation. As you build more complex agents, you may need to upgrade to paid plans for additional features and higher usage limits."
    },
    {
      question: "Can I build production-ready agents with no-code tools?",
      answer: "Absolutely! Many businesses use no-code AI agents in production. Tools like Botpress, Bubble.io, and Vercel allow you to deploy scalable, professional-grade AI agents. The key is proper planning, testing, and using enterprise features for authentication, monitoring, and error handling."
    },
    {
      question: "What if a no-code tool I'm learning gets discontinued?",
      answer: "This is why the roadmap teaches concepts and multiple tools for each function. If one tool disappears, you can apply the same principles to alternative platforms. The fundamental concepts of AI agents (reasoning, memory, tools) remain consistent across different implementations."
    },

    // ⏩ Learning Strategy
    {
      question: "Can I skip phases or jump directly to advanced topics?",
      answer: "While possible, it's not recommended. Each phase builds on previous knowledge and skills. Skipping foundations might leave gaps in understanding that become problematic in advanced projects. However, if you have relevant experience, you can move through early phases more quickly."
    },
    {
      question: "What if I get stuck on a particular concept or tool?",
      answer: "Join no-code AI communities (Discord servers, Reddit groups, LinkedIn communities) where you can ask questions and get help. Most tools also have documentation, tutorials, and community forums. Don't hesitate to revisit earlier phases if needed."
    },
    {
      question: "Should I complete all projects in each phase?",
      answer: "Focus on 1-2 projects per phase that align with your interests or goals. The projects are designed to reinforce learning, but you don't need to complete every single one. Choose projects that will help you build a portfolio relevant to your career objectives."
    },
    {
      question: "How do I know when I'm ready to move to the next phase?",
      answer: "You should be comfortable with the core concepts and have completed at least one substantial project in your current phase. If you can explain the key tools and concepts to someone else and troubleshoot basic issues independently, you're ready to advance."
    },

    // 💼 Career & Business
    {
      question: "What career opportunities exist for no-code AI agent builders?",
      answer: "Many opportunities exist: AI consultant, automation specialist, process improvement analyst, AI trainer, no-code developer, and business efficiency expert. Companies increasingly need people who can bridge the gap between business needs and AI capabilities without traditional programming."
    },
    {
      question: "Can I freelance or start a business with these skills?",
      answer: "Definitely! Many freelancers offer AI automation services, custom chatbot development, and business process optimization. You could start an agency helping small businesses implement AI agents for customer service, lead generation, or workflow automation."
    },
    {
      question: "What types of businesses can benefit from AI agents?",
      answer: "Almost any business can benefit: e-commerce, finance, healthcare, education, customer service, HR, marketing, and more. AI agents can automate repetitive tasks, improve customer support, streamline workflows, and provide 24/7 assistance."
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
            <p className="text-gray-600 text-lg">Common questions about the AI/ML Mastery Roadmap</p>
          </div>

          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-semibold text-gray-900 text-sm md:text-base pr-4">{item.question}</h3>
                  {openItems[index] ? <ChevronUp className="text-blue-600" size={20} /> : <ChevronDown className="text-blue-600" size={20} />}
                </button>

                {openItems[index] && (
                  <div className="px-6 pb-4 border-t border-gray-100">
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed mt-4">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-12 bg-blue-50 rounded-lg p-6 border border-blue-200">
            <h2 className="text-xl font-bold text-blue-900 mb-4">
              Still have questions?
            </h2>
            <p className="text-blue-800 mb-4">
              The AI Agent community is always ready to help! Here are some great places to get additional support:
            </p>
            <ul className="space-y-2 text-blue-700">
              <li>• Join the r/MachineLearning and r/LearnMachineLearning subreddits</li>
              <li>• Participate in No code  Discord communities and Slack groups</li>
              <li>• Ask specific technical questions on Stack Overflow</li>
              <li>• Connect with learners and professionals on LinkedIn</li>
              <li>• Attend local AI meetups and study groups</li>
            </ul>
          </div>
        </div>
      );
    };

    export default Faq;