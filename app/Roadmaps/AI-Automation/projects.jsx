import React from 'react';

const Projects = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Hands-on Projects</h2>
      <p className="text-gray-600 mb-6">
        Build these projects to solidify your AI automation skills.
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-6 border border-gray-100 rounded-xl hover:shadow-md transition-shadow">
          <h3 className="font-bold text-lg text-gray-800 mb-2">Multi-Agent Workflow</h3>
          <p className="text-sm text-gray-600">Create a system where multiple AI agents collaborate to solve complex tasks.</p>
        </div>
        <div className="p-6 border border-gray-100 rounded-xl hover:shadow-md transition-shadow">
          <h3 className="font-bold text-lg text-gray-800 mb-2">Custom RAG Application</h3>
          <p className="text-sm text-gray-600">Build a question-answering system using your own private data and vector databases.</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
