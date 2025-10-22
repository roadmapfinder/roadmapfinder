import React, { useState } from 'react';
import { Youtube, BookOpen, Users, Wrench, FileText, GraduationCap, ExternalLink } from 'lucide-react';

const ResourcesView = ({ resources }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  if (!resources) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-8 text-center border border-gray-100">
        <BookOpen className="mx-auto text-gray-400 mb-4" size={48} />
        <h3 className="text-xl font-semibold text-gray-700 mb-2">No Resources Available</h3>
        <p className="text-gray-500">Resources will appear here once the roadmap is generated.</p>
      </div>
    );
  }

  const categories = [
    { id: 'all', label: 'All Resources', icon: '📚' },
    { id: 'youtube', label: 'YouTube', icon: '🎥' },
    { id: 'courses', label: 'Courses', icon: '🎓' },
    { id: 'documentation', label: 'Docs', icon: '📖' },
    { id: 'books', label: 'Books', icon: '📚' },
    { id: 'communities', label: 'Communities', icon: '👥' },
    { id: 'tools', label: 'Tools', icon: '🛠️' }
  ];

  const shouldShowCategory = (categoryId) => {
    if (categoryId === 'all') return true;
    const resourceKey = categoryId === 'youtube' ? 'youtubeChannels' : categoryId;
    return resources[resourceKey] && resources[resourceKey].length > 0;
  };

  const filteredCategories = categories.filter(cat => shouldShowCategory(cat.id));

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-6 md:p-8 border border-indigo-200 shadow-lg">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">
          📚 Curated Learning Resources
        </h2>
        <p className="text-gray-700 text-center text-base md:text-lg">
          Hand-picked resources from industry experts to accelerate your learning
        </p>
      </div>

      {/* Category Filter */}
      <div className="bg-white rounded-xl shadow-lg p-3 border border-gray-100">
        <div className="flex flex-wrap gap-2 justify-center">
          {filteredCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-all text-sm md:text-base ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {/* YouTube Channels */}
      {(activeCategory === 'all' || activeCategory === 'youtube') && resources.youtubeChannels?.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <Youtube className="text-red-600" size={28} />
            <h3 className="text-2xl font-bold text-gray-800">YouTube Channels</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {resources.youtubeChannels.map((channel, idx) => (
              <div key={idx} className="bg-white rounded-xl border-2 border-red-200 p-5 shadow-md hover:shadow-xl transition-all hover:border-red-300">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-lg font-bold text-gray-900 flex-1">{channel.name}</h4>
                  <span className="px-2 py-1 bg-red-100 text-red-700 rounded-lg text-xs font-semibold">
                    {channel.bestFor}
                  </span>
                </div>
                <p className="text-gray-700 text-sm mb-3">{channel.description}</p>
                <a
                  href={channel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-red-600 hover:text-red-700 font-medium text-sm"
                >
                  <span>Visit Channel</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Courses */}
      {(activeCategory === 'all' || activeCategory === 'courses') && resources.courses?.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <GraduationCap className="text-blue-600" size={28} />
            <h3 className="text-2xl font-bold text-gray-800">Online Courses</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {resources.courses.map((course, idx) => (
              <div key={idx} className="bg-white rounded-xl border-2 border-blue-200 p-5 shadow-md hover:shadow-xl transition-all hover:border-blue-300">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-lg font-bold text-gray-900 flex-1">{course.name}</h4>
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-lg text-xs font-semibold">
                    {course.level}
                  </span>
                </div>
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-xs text-gray-600 font-medium">{course.platform}</span>
                  <span className="text-xs text-gray-400">•</span>
                  <span className={`text-xs font-semibold ${
                    course.price.toLowerCase().includes('free') ? 'text-green-600' : 'text-orange-600'
                  }`}>
                    {course.price}
                  </span>
                </div>
                <p className="text-gray-700 text-sm mb-3">{course.description}</p>
                <a
                  href={course.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium text-sm"
                >
                  <span>View Course</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Documentation */}
      {(activeCategory === 'all' || activeCategory === 'documentation') && resources.documentation?.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <FileText className="text-purple-600" size={28} />
            <h3 className="text-2xl font-bold text-gray-800">Official Documentation</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {resources.documentation.map((doc, idx) => (
              <div key={idx} className="bg-white rounded-xl border-2 border-purple-200 p-5 shadow-md hover:shadow-xl transition-all hover:border-purple-300">
                <h4 className="text-lg font-bold text-gray-900 mb-2">{doc.name}</h4>
                <p className="text-gray-700 text-sm mb-3">{doc.description}</p>
                <a
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-purple-600 hover:text-purple-700 font-medium text-sm"
                >
                  <span>Read Docs</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Books */}
      {(activeCategory === 'all' || activeCategory === 'books') && resources.books?.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <BookOpen className="text-green-600" size={28} />
            <h3 className="text-2xl font-bold text-gray-800">Recommended Books</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {resources.books.map((book, idx) => (
              <div key={idx} className="bg-white rounded-xl border-2 border-green-200 p-5 shadow-md hover:shadow-xl transition-all hover:border-green-300">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-lg font-bold text-gray-900 flex-1">{book.title}</h4>
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded-lg text-xs font-semibold">
                    {book.level}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-3 font-medium">by {book.author}</p>
                <p className="text-gray-700 text-sm">{book.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Communities */}
      {(activeCategory === 'all' || activeCategory === 'communities') && resources.communities?.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <Users className="text-indigo-600" size={28} />
            <h3 className="text-2xl font-bold text-gray-800">Communities & Forums</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {resources.communities.map((community, idx) => (
              <div key={idx} className="bg-white rounded-xl border-2 border-indigo-200 p-5 shadow-md hover:shadow-xl transition-all hover:border-indigo-300">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-lg font-bold text-gray-900">{community.name}</h4>
                  <span className="text-xs text-gray-600 font-medium">{community.platform}</span>
                </div>
                <p className="text-gray-700 text-sm mb-3">{community.description}</p>
                <a
                  href={community.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-indigo-600 hover:text-indigo-700 font-medium text-sm"
                >
                  <span>Join Community</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tools */}
      {(activeCategory === 'all' || activeCategory === 'tools') && resources.tools?.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <Wrench className="text-orange-600" size={28} />
            <h3 className="text-2xl font-bold text-gray-800">Development Tools</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {resources.tools.map((tool, idx) => (
              <div key={idx} className="bg-white rounded-xl border-2 border-orange-200 p-5 shadow-md hover:shadow-xl transition-all hover:border-orange-300">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-lg font-bold text-gray-900 flex-1">{tool.name}</h4>
                  <span className={`px-2 py-1 rounded-lg text-xs font-semibold ${
                    tool.pricing.toLowerCase().includes('free') 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-orange-100 text-orange-700'
                  }`}>
                    {tool.pricing}
                  </span>
                </div>
                <p className="text-xs text-gray-600 mb-2 font-medium">{tool.category}</p>
                <p className="text-gray-700 text-sm mb-3">{tool.description}</p>
                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-orange-600 hover:text-orange-700 font-medium text-sm"
                >
                  <span>Visit Tool</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Learning Tips */}
      <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl p-6 border border-yellow-200 shadow-lg">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          <span className="text-2xl mr-3">🎯</span>
          How to Use These Resources
        </h3>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start">
            <span className="text-yellow-600 mr-2 font-bold">•</span>
            <span className="text-sm md:text-base">Follow multiple YouTube channels to get different perspectives on the same topics</span>
          </li>
          <li className="flex items-start">
            <span className="text-yellow-600 mr-2 font-bold">•</span>
            <span className="text-sm md:text-base">Complete at least one comprehensive course to build structured knowledge</span>
          </li>
          <li className="flex items-start">
            <span className="text-yellow-600 mr-2 font-bold">•</span>
            <span className="text-sm md:text-base">Use official documentation as your primary reference while coding</span>
          </li>
          <li className="flex items-start">
            <span className="text-yellow-600 mr-2 font-bold">•</span>
            <span className="text-sm md:text-base">Join communities early to ask questions and learn from others' experiences</span>
          </li>
          <li className="flex items-start">
            <span className="text-yellow-600 mr-2 font-bold">•</span>
            <span className="text-sm md:text-base">Invest in quality tools and learn keyboard shortcuts to boost productivity</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ResourcesView;