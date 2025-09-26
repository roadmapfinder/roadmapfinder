import React, { useState } from 'react';
import {
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Clock,
  DollarSign,
  Monitor,
  Palette,
  Volume2,
  Target,
  TrendingUp,
  Users,
  Award,
  BookOpen,
} from 'lucide-react';
import { faqData } from './roadmapData';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const getIcon = (index) => {
    const icons = [
      Clock,
      DollarSign,
      Monitor,
      Palette,
      Volume2,
      Target,
      Award,
      TrendingUp,
      DollarSign,
      Users,
    ];
    const IconComponent = icons[index] || HelpCircle;
    return <IconComponent size={20} className="text-blue-500 flex-shrink-0" />;
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      {/* Header */}
      <div className="text-center mb-8 md:mb-12">
        <div className="flex items-center justify-center mb-4">
          <HelpCircle className="text-blue-600 mr-3" size={40} />
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h1>
        </div>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Common questions about the Video Editing Mastery Roadmap and career guidance
        </p>
      </div>

      {/* FAQ List */}
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full p-4 md:p-6 text-left flex items-start justify-between hover:bg-gray-50 transition-colors duration-200 rounded-lg"
            >
              <div className="flex items-start space-x-3 flex-1">
                {getIcon(index)}
                <h3 className="font-semibold text-gray-900 text-base md:text-lg pr-4">
                  {faq.question}
                </h3>
              </div>
              <div className="flex-shrink-0 ml-2">
                {openIndex === index ? (
                  <ChevronUp className="text-blue-500" size={24} />
                ) : (
                  <ChevronDown className="text-gray-400" size={24} />
                )}
              </div>
            </button>

            {openIndex === index && (
              <div className="px-4 md:px-6 pb-4 md:pb-6">
                <div className="pl-8 md:pl-11">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Additional Resources Section */}
      <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200 p-6 md:p-8">
        <div className="text-center">
          <BookOpen className="text-blue-600 mx-auto mb-4" size={48} />
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h2>
          <p className="text-gray-700 mb-6">
            Join our community of video editors and get personalized guidance on your editing journey.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-white p-4 rounded-lg border border-blue-200">
              <Users className="text-blue-500 mx-auto mb-2" size={24} />
              <h3 className="font-semibold text-gray-900 mb-1">Community Support</h3>
              <p className="text-sm text-gray-600">Connect with fellow editors and mentors</p>
            </div>

            <div className="bg-white p-4 rounded-lg border border-blue-200">
              <Award className="text-purple-500 mx-auto mb-2" size={24} />
              <h3 className="font-semibold text-gray-900 mb-1">Expert Guidance</h3>
              <p className="text-sm text-gray-600">Get advice from industry professionals</p>
            </div>

            <div className="bg-white p-4 rounded-lg border border-blue-200">
              <TrendingUp className="text-green-500 mx-auto mb-2" size={24} />
              <h3 className="font-semibold text-gray-900 mb-1">Career Growth</h3>
              <p className="text-sm text-gray-600">Track your progress and unlock opportunities</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
