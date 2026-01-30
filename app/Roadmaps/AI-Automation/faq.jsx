import React from 'react';

const Faq = () => {
  const faqs = [
    {
      q: "What is the prerequisite for this roadmap?",
      a: "Solid understanding of Python and basic machine learning concepts."
    },
    {
      q: "How long does it take to complete?",
      a: "Typically 6-12 months depending on your prior experience and time commitment."
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
      <div className="space-y-6">
        {faqs.map((faq, i) => (
          <div key={i} className="border-b border-gray-100 pb-4 last:border-0">
            <h3 className="font-bold text-gray-800 mb-2">{faq.q}</h3>
            <p className="text-gray-600 text-sm">{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
