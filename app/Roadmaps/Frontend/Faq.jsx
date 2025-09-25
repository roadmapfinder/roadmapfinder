import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { faqData } from './roadmapData';

const Faq = () => {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (id) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  const toggleAll = () => {
    if (openItems.size === faqData.length) {
      setOpenItems(new Set());
    } else {
      setOpenItems(new Set(faqData.map(item => item.id)));
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <HelpCircle className="text-blue-600 mr-3" size={32} />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
        </div>
        <p className="text-gray-600 text-lg">
          Common questions about the Frontend Engineer Roadmap
        </p>

        {/* Toggle All Button */}
        <button
          onClick={toggleAll}
          className="mt-4 text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
        >
          {openItems.size === faqData.length ? 'Collapse All' : 'Expand All'}
        </button>
      </div>

      {/* FAQ Items */}
      <div className="space-y-4">
        {faqData.map((item) => {
          const isOpen = openItems.has(item.id);

          return (
            <div
              key={item.id}
              className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset rounded-lg transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {item.question}
                </h3>
                {isOpen ? (
                  <ChevronUp className="text-gray-500 flex-shrink-0" size={20} />
                ) : (
                  <ChevronDown className="text-gray-500 flex-shrink-0" size={20} />
                )}
              </button>

              {isOpen && (
                <div className="px-6 pb-4">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-gray-700 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Additional Help Section */}
      <div className="mt-12 text-center p-6 bg-blue-50 rounded-lg border border-blue-200">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Still have questions?
        </h3>
        <p className="text-gray-700 mb-4">
          The frontend development community is very supportive. Here are some great places to get help:
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