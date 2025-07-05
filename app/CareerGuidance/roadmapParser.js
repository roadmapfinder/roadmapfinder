
// Parse career guidance response and convert to graph structure
export const parseResponseToRoadmap = (response) => {
  if (!response || typeof response !== 'string') {
    return null;
  }

  const lines = response.split('\n').filter(line => line.trim());
  let roadmapTitle = "Your Career Roadmap";
  let nodes = [];
  let connections = [];
  let currentLevel = 1;
  let nodeId = 1;
  let previousNodeId = null;

  // Extract title from response
  const titleMatch = response.match(/(?:career|roadmap|path|journey).*(?:to|for|as)\s+([^.\n]+)/i);
  if (titleMatch) {
    roadmapTitle = titleMatch[1].trim() + " Roadmap";
  }

  // Define common tech icons and colors
  const techIcons = {
    'programming': '💻',
    'frontend': '🎨',
    'backend': '⚙️',
    'database': '🗄️',
    'mobile': '📱',
    'cloud': '☁️',
    'ai': '🤖',
    'ml': '🧠',
    'data': '📊',
    'security': '🔒',
    'devops': '🚀',
    'testing': '🧪',
    'design': '🎯',
    'project': '📁',
    'portfolio': '💼',
    'certification': '🏆',
    'networking': '🌐',
    'leadership': '👥'
  };

  const getIcon = (title) => {
    const titleLower = title.toLowerCase();
    for (const [key, icon] of Object.entries(techIcons)) {
      if (titleLower.includes(key)) {
        return icon;
      }
    }
    return '📚';
  };

  const getColor = (index) => {
    const colors = [
      'from-blue-500 to-blue-600',
      'from-green-500 to-green-600',
      'from-purple-500 to-purple-600',
      'from-orange-500 to-orange-600',
      'from-red-500 to-red-600',
      'from-indigo-500 to-indigo-600',
      'from-pink-500 to-pink-600',
      'from-teal-500 to-teal-600'
    ];
    return colors[index % colors.length];
  };

  const getDifficulty = (content, position) => {
    const beginner = ['basic', 'fundamental', 'introduction', 'getting started', 'basics'];
    const intermediate = ['advanced', 'intermediate', 'practical', 'hands-on', 'real-world'];
    const expert = ['expert', 'mastery', 'professional', 'senior', 'leadership', 'architecture'];
    
    const contentLower = content.toLowerCase();
    
    if (position <= 2 || beginner.some(word => contentLower.includes(word))) {
      return 'Beginner';
    } else if (position >= 6 || expert.some(word => contentLower.includes(word))) {
      return 'Advanced';
    } else {
      return 'Intermediate';
    }
  };

  // Parse sections and create nodes
  const sectionPatterns = [
    /(?:\d+[\.\)]\s*)?(.+?)(?:\s*\((\d+[-\s]*(?:week|month|day)s?)\))?/,
    /(?:step\s*\d+[\:\.]?\s*)?(.+?)(?:\s*-\s*(.+?))?(?:\s*\((\d+[-\s]*(?:week|month|day)s?)\))?/i,
    /(?:phase\s*\d+[\:\.]?\s*)?(.+?)(?:\s*\((\d+[-\s]*(?:week|month|day)s?)\))?/i
  ];

  let position = { x: 100, y: 100 };
  const spacing = { x: 180, y: 120 };
  let rowCount = 0;
  const maxNodesPerRow = 3;

  lines.forEach((line, index) => {
    const trimmed = line.trim();
    
    // Skip empty lines and headers
    if (!trimmed || trimmed.startsWith('#') || trimmed.length < 10) {
      return;
    }

    // Check if line looks like a roadmap step
    const isStep = /^\d+[\.\)]/.test(trimmed) || 
                   /^(?:step|phase|stage|month|week)\s*\d+/i.test(trimmed) ||
                   /^(?:learn|master|build|develop|understand|practice)/i.test(trimmed);

    if (isStep || (index > 0 && trimmed.includes(':'))) {
      let title = trimmed;
      let timeEstimate = '2-3 weeks';
      let description = '';

      // Extract time estimate
      const timeMatch = trimmed.match(/\((\d+[-\s]*(?:week|month|day)s?)\)/);
      if (timeMatch) {
        timeEstimate = timeMatch[1];
        title = title.replace(timeMatch[0], '').trim();
      }

      // Clean up title
      title = title.replace(/^\d+[\.\)]\s*/, '')
                  .replace(/^(?:step|phase|stage|month|week)\s*\d+[\:\.]?\s*/i, '')
                  .replace(/\s*[-:]\s*.*$/, '')
                  .trim();

      if (title.length < 3) return;

      // Calculate position
      const col = rowCount % maxNodesPerRow;
      const row = Math.floor(rowCount / maxNodesPerRow);
      
      const node = {
        id: `node-${nodeId}`,
        title: title.charAt(0).toUpperCase() + title.slice(1),
        description: description || `Learn ${title.toLowerCase()} fundamentals and best practices`,
        level: currentLevel,
        position: {
          x: 100 + (col * spacing.x),
          y: 100 + (row * spacing.y)
        },
        icon: getIcon(title),
        color: getColor(nodeId - 1),
        skills: extractSkills(trimmed),
        timeEstimate: timeEstimate,
        difficulty: getDifficulty(trimmed, nodeId)
      };

      nodes.push(node);

      // Create connection to previous node
      if (previousNodeId && nodeId > 1) {
        connections.push({
          from: `node-${previousNodeId}`,
          to: `node-${nodeId}`
        });
      }

      previousNodeId = nodeId;
      nodeId++;
      rowCount++;
    }
  });

  // If no structured nodes found, create a simple linear path
  if (nodes.length === 0) {
    const phases = ['Foundation', 'Learning', 'Practice', 'Building', 'Mastery'];
    phases.forEach((phase, index) => {
      const node = {
        id: `phase-${index + 1}`,
        title: phase,
        description: `${phase} phase of your learning journey`,
        level: index + 1,
        position: {
          x: 100 + (index * 150),
          y: 150
        },
        icon: getIcon(phase),
        color: getColor(index),
        skills: ['Core concepts', 'Practical skills', 'Best practices'],
        timeEstimate: '2-4 weeks',
        difficulty: index < 2 ? 'Beginner' : index < 4 ? 'Intermediate' : 'Advanced'
      };
      nodes.push(node);

      if (index > 0) {
        connections.push({
          from: `phase-${index}`,
          to: `phase-${index + 1}`
        });
      }
    });
  }

  return {
    title: roadmapTitle,
    nodes,
    connections
  };
};

// Extract skills from text
const extractSkills = (text) => {
  const skillPatterns = [
    /(?:learn|master|understand|practice|use)\s+([^,\n\.]+)/gi,
    /(?:including|such as|like)\s+([^,\n\.]+)/gi,
    /([A-Z][a-z]+(?:\s+[A-Z][a-z]+)*)/g
  ];

  let skills = [];
  
  skillPatterns.forEach(pattern => {
    const matches = text.match(pattern) || [];
    matches.forEach(match => {
      const skill = match.replace(/^(?:learn|master|understand|practice|use|including|such as|like)\s+/i, '').trim();
      if (skill.length > 2 && skill.length < 30) {
        skills.push(skill);
      }
    });
  });

  // Default skills if none found
  if (skills.length === 0) {
    skills = ['Core concepts', 'Practical applications', 'Best practices'];
  }

  return skills.slice(0, 5); // Limit to 5 skills
};

// Convert timeline text to estimated weeks
export const parseTimeEstimate = (text) => {
  const weekMatch = text.match(/(\d+)[-\s]*week/i);
  if (weekMatch) return `${weekMatch[1]} weeks`;
  
  const monthMatch = text.match(/(\d+)[-\s]*month/i);
  if (monthMatch) return `${monthMatch[1] * 4} weeks`;
  
  const dayMatch = text.match(/(\d+)[-\s]*day/i);
  if (dayMatch) return `${Math.ceil(dayMatch[1] / 7)} weeks`;
  
  return '2-3 weeks';
};
