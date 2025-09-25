import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Clock,
  BookOpen,
  Brain,
  Briefcase,
  Zap,
  Users,
} from "lucide-react";

const FAQ = () => {
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
      icon: <BookOpen className="w-5 h-5" />,
      color: "text-green-600",
      bgColor: "bg-green-50",
      questions: [
        {
          question:
            "Do I need a PhD or advanced degree to become a Generative AI Engineer?",
          answer:
            "No, you don't need a PhD. Industry roles focus on practical skills. A strong foundation in math, programming, and demonstrated project experience is sufficient.",
        },
        {
          question: "What programming languages should I focus on?",
          answer:
            "Python is essential. JavaScript/TypeScript can be valuable for full-stack AI apps. Start with Python, add others as needed.",
        },
        {
          question: "How much math do I really need to know?",
          answer:
            "Solid fundamentals in linear algebra, probability/statistics, and calculus are required. Focus on practical application over theoretical proofs.",
        },
      ],
    },
    {
      category: "Timeline & Learning",
      icon: <Clock className="w-5 h-5" />,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      questions: [
        {
          question: "Is the 24-month timeline realistic? Can I go faster?",
          answer:
            "Assumes 15-20 hours/week. Full-time learners can accelerate to 8-12 months. Consistency and real projects matter most.",
        },
        {
          question:
            "Should I follow the phases in order, or can I skip around?",
          answer:
            "Follow the phases in order. If experienced, you may skip early phases but always complete projects.",
        },
        {
          question: "How do I know when I'm ready to move to the next phase?",
          answer:
            "You should complete projects in the current phase, explain concepts to others, and solve practice problems correctly.",
        },
      ],
    },
    {
      category: "Technical Skills",
      icon: <Brain className="w-5 h-5" />,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      questions: [
        {
          question: "PyTorch vs TensorFlow - which should I learn first?",
          answer:
            "Start with PyTorch. It's intuitive and widely used for Generative AI. TensorFlow can be learned later.",
        },
        {
          question: "How important is understanding math vs using libraries?",
          answer:
            "Balance is key. Understand core concepts and implement basic algorithms from scratch, but use libraries for production.",
        },
        {
          question: "What hardware do I need? Do I need expensive GPUs?",
          answer:
            "Free resources like Colab, Kaggle, Hugging Face spaces are enough initially. Mid-range GPU is helpful but optional.",
        },
      ],
    },
    {
      category: "Career & Jobs",
      icon: <Briefcase className="w-5 h-5" />,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      questions: [
        {
          question: "What kinds of jobs can I get with these skills?",
          answer:
            "Roles include Generative AI Engineer, ML Engineer, AI Product Engineer, Prompt Engineer, AI Consultant, Full-stack AI Developer, and more.",
        },
        {
          question:
            "How important is having a portfolio vs formal credentials?",
          answer:
            "Portfolio is more important. 2-3 high-quality deployed projects outweigh certificates.",
        },
        {
          question: "Should I target big tech or startups?",
          answer:
            "Both have advantages. Big tech: structured mentorship & compensation. Startups: ownership & diverse responsibilities.",
        },
      ],
    },
    {
      category: "Projects & Practice",
      icon: <Zap className="w-5 h-5" />,
      color: "text-red-600",
      bgColor: "bg-red-50",
      questions: [
        {
          question: "How do I choose good projects for my portfolio?",
          answer:
            "Pick real problems. Include RAG chatbots, fine-tuned models, multimodal apps, and deployed web applications.",
        },
        {
          question: "Should I build from scratch or use existing models/APIs?",
          answer:
            "Early: implement key algorithms from scratch. Later: use pre-trained models, APIs, and frameworks for production.",
        },
        {
          question: "How do I stay updated with the rapidly changing field?",
          answer:
            "Follow Hugging Face blog, Papers with Code, AI research Twitter, company blogs, and set aside 2-3 hours weekly.",
        },
      ],
    },
    {
      category: "Common Challenges",
      icon: <Users className="w-5 h-5" />,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
      questions: [
        {
          question:
            "I'm struggling with math concepts. Should I take a formal course?",
          answer:
            "Start with practical resources like 3Blue1Brown and hands-on coding. Only take a structured course if needed.",
        },
        {
          question:
            "How do I deal with 'tutorial hell' and actually build projects?",
          answer:
            "Use the 70/30 rule: 70% hands-on, 30% consuming content. Build projects immediately after learning.",
        },
      ],
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Generative AI FAQ</h1>
      <div className="space-y-8">
        {faqData.map((category, catIndex) => (
          <div
            key={catIndex}
            className={`${category.bgColor} rounded-lg p-6 border border-gray-200`}
          >
            <div className="flex items-center mb-4">
              <span className={`${category.color} mr-2`}>{category.icon}</span>
              <h2 className="text-xl font-semibold">{category.category}</h2>
            </div>
            <div className="space-y-2">
              {category.questions.map((q, index) => {
                const uniqueIndex = `${catIndex}-${index}`;
                return (
                  <div
                    key={uniqueIndex}
                    className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden"
                  >
                    <button
                      onClick={() => toggleItem(uniqueIndex)}
                      className="w-full px-4 py-3 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-medium">{q.question}</span>
                      {openItems.has(uniqueIndex) ? (
                        <ChevronUp className="text-gray-600" />
                      ) : (
                        <ChevronDown className="text-gray-600" />
                      )}
                    </button>
                    {openItems.has(uniqueIndex) && (
                      <div className="px-4 py-3 border-t border-gray-100">
                        <p className="text-gray-700">{q.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
