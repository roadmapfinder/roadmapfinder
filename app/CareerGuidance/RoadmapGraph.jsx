
"use client"
import { useState, useEffect, useRef } from 'react';
import { 
  ChevronRight, 
  CheckCircle, 
  Circle, 
  Clock, 
  Target,
  BookOpen,
  Code,
  Trophy,
  Users,
  Star
} from 'lucide-react';

export default function RoadmapGraph({ roadmapData, onNodeClick }) {
  const [completedNodes, setCompletedNodes] = useState(new Set());
  const [selectedNode, setSelectedNode] = useState(null);
  const svgRef = useRef(null);

  // Sample roadmap structure - this will be populated based on AI response
  const defaultRoadmap = {
    title: "Full Stack Developer Roadmap",
    nodes: [
      {
        id: 'basics',
        title: 'Programming Basics',
        description: 'Learn fundamental programming concepts',
        level: 1,
        position: { x: 50, y: 100 },
        icon: <BookOpen className="w-4 h-4" />,
        color: 'from-blue-500 to-blue-600',
        skills: ['Variables', 'Functions', 'Data Types', 'Control Flow'],
        timeEstimate: '2-4 weeks',
        difficulty: 'Beginner'
      },
      {
        id: 'frontend',
        title: 'Frontend Development',
        description: 'Master HTML, CSS, and JavaScript',
        level: 2,
        position: { x: 200, y: 80 },
        icon: <Code className="w-4 h-4" />,
        color: 'from-green-500 to-green-600',
        skills: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
        timeEstimate: '6-8 weeks',
        difficulty: 'Beginner'
      },
      {
        id: 'react',
        title: 'React Framework',
        description: 'Build dynamic user interfaces',
        level: 3,
        position: { x: 350, y: 60 },
        icon: <Target className="w-4 h-4" />,
        color: 'from-purple-500 to-purple-600',
        skills: ['JSX', 'Components', 'State', 'Props', 'Hooks'],
        timeEstimate: '4-6 weeks',
        difficulty: 'Intermediate'
      },
      {
        id: 'backend',
        title: 'Backend Development',
        description: 'Server-side programming and APIs',
        level: 2,
        position: { x: 200, y: 200 },
        icon: <Users className="w-4 h-4" />,
        color: 'from-orange-500 to-orange-600',
        skills: ['Node.js', 'Express', 'APIs', 'Authentication'],
        timeEstimate: '6-8 weeks',
        difficulty: 'Intermediate'
      },
      {
        id: 'database',
        title: 'Database Management',
        description: 'Store and manage data effectively',
        level: 3,
        position: { x: 350, y: 220 },
        icon: <Trophy className="w-4 h-4" />,
        color: 'from-red-500 to-red-600',
        skills: ['SQL', 'MongoDB', 'Database Design', 'Queries'],
        timeEstimate: '3-4 weeks',
        difficulty: 'Intermediate'
      },
      {
        id: 'fullstack',
        title: 'Full Stack Integration',
        description: 'Connect frontend and backend',
        level: 4,
        position: { x: 500, y: 140 },
        icon: <Star className="w-4 h-4" />,
        color: 'from-indigo-500 to-indigo-600',
        skills: ['API Integration', 'Deployment', 'Testing', 'DevOps'],
        timeEstimate: '4-6 weeks',
        difficulty: 'Advanced'
      }
    ],
    connections: [
      { from: 'basics', to: 'frontend' },
      { from: 'basics', to: 'backend' },
      { from: 'frontend', to: 'react' },
      { from: 'backend', to: 'database' },
      { from: 'react', to: 'fullstack' },
      { from: 'database', to: 'fullstack' }
    ]
  };

  const [roadmap, setRoadmap] = useState(roadmapData || defaultRoadmap);

  const toggleNodeCompletion = (nodeId) => {
    setCompletedNodes(prev => {
      const newSet = new Set(prev);
      if (newSet.has(nodeId)) {
        newSet.delete(nodeId);
      } else {
        newSet.add(nodeId);
      }
      return newSet;
    });
  };

  const handleNodeClick = (node) => {
    setSelectedNode(node);
    if (onNodeClick) {
      onNodeClick(node);
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty?.toLowerCase()) {
      case 'beginner': return 'text-green-600 bg-green-100';
      case 'intermediate': return 'text-yellow-600 bg-yellow-100';
      case 'advanced': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  // Generate SVG path for connections
  const generatePath = (from, to) => {
    const fromNode = roadmap.nodes.find(n => n.id === from);
    const toNode = roadmap.nodes.find(n => n.id === to);
    
    if (!fromNode || !toNode) return '';
    
    const x1 = fromNode.position.x + 60; // Node width/2
    const y1 = fromNode.position.y + 30; // Node height/2
    const x2 = toNode.position.x + 60;
    const y2 = toNode.position.y + 30;
    
    // Create curved path
    const midX = (x1 + x2) / 2;
    const midY = (y1 + y2) / 2;
    
    return `M ${x1} ${y1} Q ${midX} ${midY - 20} ${x2} ${y2}`;
  };

  return (
    <div className="w-full bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
        <h2 className="text-2xl font-bold mb-2">{roadmap.title}</h2>
        <p className="text-blue-100">Interactive learning path with step-by-step guidance</p>
        
        {/* Progress indicator */}
        <div className="mt-4 flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            <span className="text-sm">Completed: {completedNodes.size}</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
            <span className="text-sm">Remaining: {roadmap.nodes.length - completedNodes.size}</span>
          </div>
        </div>
      </div>

      {/* Main Graph Area */}
      <div className="relative">
        {/* SVG for connections */}
        <svg 
          ref={svgRef}
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ minHeight: '400px' }}
        >
          <defs>
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="7"
              refX="9"
              refY="3.5"
              orient="auto"
            >
              <polygon
                points="0 0, 10 3.5, 0 7"
                fill="#94a3b8"
              />
            </marker>
          </defs>
          
          {roadmap.connections.map((connection, index) => (
            <path
              key={index}
              d={generatePath(connection.from, connection.to)}
              stroke="#94a3b8"
              strokeWidth="2"
              fill="none"
              markerEnd="url(#arrowhead)"
              className="transition-all duration-300 hover:stroke-blue-500"
            />
          ))}
        </svg>

        {/* Nodes */}
        <div className="relative p-8" style={{ minHeight: '400px' }}>
          {roadmap.nodes.map((node) => (
            <div
              key={node.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
              style={{ 
                left: `${node.position.x}px`, 
                top: `${node.position.y}px` 
              }}
              onClick={() => handleNodeClick(node)}
            >
              {/* Node */}
              <div className={`
                w-32 h-20 rounded-xl border-2 transition-all duration-300
                ${completedNodes.has(node.id) 
                  ? 'bg-green-50 border-green-400 shadow-green-200' 
                  : 'bg-white border-gray-300 hover:border-blue-400 hover:shadow-lg'
                }
                ${selectedNode?.id === node.id ? 'ring-4 ring-blue-200 border-blue-500' : ''}
                group-hover:scale-105 shadow-md
              `}>
                {/* Icon and completion status */}
                <div className="flex items-center justify-between p-2">
                  <div className={`p-1.5 rounded-lg bg-gradient-to-r ${node.color}`}>
                    <div className="text-white">
                      {node.icon}
                    </div>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleNodeCompletion(node.id);
                    }}
                    className="text-gray-400 hover:text-green-500 transition-colors"
                  >
                    {completedNodes.has(node.id) ? (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    ) : (
                      <Circle className="w-5 h-5" />
                    )}
                  </button>
                </div>
                
                {/* Title */}
                <div className="px-2 pb-2">
                  <h3 className="text-xs font-semibold text-gray-800 leading-tight">
                    {node.title}
                  </h3>
                </div>
              </div>

              {/* Hover tooltip */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-gray-900 text-white p-3 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                <h4 className="font-semibold mb-1">{node.title}</h4>
                <p className="text-sm text-gray-300 mb-2">{node.description}</p>
                
                <div className="flex items-center justify-between text-xs">
                  <span className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{node.timeEstimate}</span>
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(node.difficulty)}`}>
                    {node.difficulty}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Selected Node Details */}
      {selectedNode && (
        <div className="border-t border-gray-200 p-6 bg-gray-50">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{selectedNode.title}</h3>
              <p className="text-gray-600">{selectedNode.description}</p>
            </div>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(selectedNode.difficulty)}`}>
              {selectedNode.difficulty}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Skills to learn */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                <Target className="w-4 h-4 mr-2" />
                Key Skills
              </h4>
              <div className="space-y-2">
                {selectedNode.skills.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <ChevronRight className="w-4 h-4 text-blue-500" />
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Time estimate and actions */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                Time Estimate
              </h4>
              <p className="text-2xl font-bold text-blue-600 mb-4">{selectedNode.timeEstimate}</p>
              
              <div className="space-y-2">
                <button
                  onClick={() => toggleNodeCompletion(selectedNode.id)}
                  className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
                    completedNodes.has(selectedNode.id)
                      ? 'bg-green-100 text-green-700 hover:bg-green-200'
                      : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                  }`}
                >
                  {completedNodes.has(selectedNode.id) ? 'Mark as Incomplete' : 'Mark as Complete'}
                </button>
                <button className="w-full py-2 px-4 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                  View Resources
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Legend */}
      <div className="border-t border-gray-200 p-4 bg-white">
        <div className="flex flex-wrap items-center justify-center space-x-6 text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            <span>Completed</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
            <span>Not Started</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-0.5 bg-gray-400"></div>
            <span>Learning Path</span>
          </div>
        </div>
      </div>
    </div>
  );
}
