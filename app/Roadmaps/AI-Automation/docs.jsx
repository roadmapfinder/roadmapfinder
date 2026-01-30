import React from 'react';

const Docs = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Documentation</h2>
      <p className="text-gray-600 mb-6">
        Detailed documentation and learning resources for AI Automation Engineering.
      </p>
      <div className="space-y-4">
        <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
          <h3 className="font-semibold text-blue-900">Getting Started</h3>
          <p className="text-sm text-blue-800 mt-1">Foundational concepts and setup guides.</p>
        </div>
        <div className="p-4 bg-green-50 rounded-lg border border-green-100">
          <h3 className="font-semibold text-green-900">Advanced Topics</h3>
          <p className="text-sm text-green-800 mt-1">Deep dives into LLMs, RAG, and Agentic workflows.</p>
        </div>
      </div>
    </div>
  );
};

export default Docs;
