// lib/youtube-service.js
// YouTube API Integration Service

/**
 * Enhanced YouTube API helper function with better search logic
 * @param {string} searchQuery - The search query string
 * @param {number} maxResults - Maximum number of results to fetch (default: 5)
 * @returns {Promise<Array>} Array of video objects
 */
async function fetchYouTubeVideos(searchQuery, maxResults = 5) {
  try {
    if (!process.env.YOUTUBE_API_KEY) {
      console.warn('YOUTUBE_API_KEY not set, skipping video fetch');
      return [];
    }

    // Enhanced search parameters for better results
    const searchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(searchQuery)}&type=video&maxResults=${maxResults}&order=relevance&videoDuration=medium&videoDefinition=any&key=${process.env.YOUTUBE_API_KEY}`;

    const response = await fetch(searchUrl);

    if (!response.ok) {
      console.error('YouTube API error:', response.status, await response.text());
      return [];
    }

    const data = await response.json();

    if (!data.items || data.items.length === 0) {
      console.log(`No videos found for query: ${searchQuery}`);
      return [];
    }

    // Get additional video details for better filtering
    const videoIds = data.items.map(item => item.id.videoId).join(',');
    const detailsUrl = `https://www.googleapis.com/youtube/v3/videos?part=statistics,contentDetails&id=${videoIds}&key=${process.env.YOUTUBE_API_KEY}`;

    const detailsResponse = await fetch(detailsUrl);
    const detailsData = detailsResponse.ok ? await detailsResponse.json() : { items: [] };

    return data.items.map((item, index) => {
      const details = detailsData.items?.[index];
      const viewCount = details?.statistics?.viewCount ? parseInt(details.statistics.viewCount) : 0;
      const duration = details?.contentDetails?.duration || 'Unknown';

      return {
        title: item.snippet.title,
        channel: item.snippet.channelTitle,
        url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
        description: item.snippet.description.substring(0, 200) + '...',
        thumbnail: item.snippet.thumbnails.medium?.url || item.snippet.thumbnails.default?.url,
        publishedAt: item.snippet.publishedAt,
        viewCount,
        duration,
        relevanceScore: calculateRelevanceScore(item, searchQuery)
      };
    }).filter(video => video.relevanceScore > 0.3) // Filter out low relevance videos
      .sort((a, b) => b.relevanceScore - a.relevanceScore); // Sort by relevance

  } catch (error) {
    console.error('YouTube API fetch error:', error);
    return [];
  }
}

/**
 * Calculate relevance score based on title, description, and channel
 * @param {Object} video - Video object from YouTube API
 * @param {string} searchQuery - Original search query
 * @returns {number} Relevance score between 0 and 1
 */
function calculateRelevanceScore(video, searchQuery) {
  const queryTerms = searchQuery.toLowerCase().split(' ').filter(term => term.length > 2);
  const title = video.snippet.title.toLowerCase();
  const description = video.snippet.description.toLowerCase();
  const channel = video.snippet.channelTitle.toLowerCase();

  let score = 0;

  queryTerms.forEach(term => {
    if (title.includes(term)) score += 1;
    if (description.includes(term)) score += 0.5;
    if (channel.includes(term)) score += 0.3;
  });

  // Bonus for educational channels and tutorial keywords
  const educationalKeywords = ['tutorial', 'course', 'learn', 'guide', 'how to', 'coding', 'programming'];
  const educationalChannels = ['freecodecamp', 'traversy', 'net ninja', 'programming with mosh', 'academind', 'codevolution', 'web dev simplified'];

  educationalKeywords.forEach(keyword => {
    if (title.includes(keyword) || description.includes(keyword)) score += 0.2;
  });

  educationalChannels.forEach(channelName => {
    if (channel.includes(channelName)) score += 0.5;
  });

  return Math.min(score / queryTerms.length, 1); // Normalize to 0-1
}

/**
 * Advanced project analysis function
 * @param {string} projectIdea - The project idea description
 * @param {Array} technologies - Array of technologies used in the project
 * @returns {Object} Project analysis object
 */
function analyzeProject(projectIdea, technologies) {
  const ideaLower = projectIdea.toLowerCase();
  const analysis = {
    projectType: 'generic',
    domains: [],
    complexity: 'beginner',
    advancedConcepts: []
  };

  // Project type detection
  const projectTypes = {
    'e-commerce': ['shop', 'store', 'marketplace', 'cart', 'payment', 'product'],
    'social media': ['social', 'chat', 'messaging', 'post', 'feed', 'friend'],
    'blog': ['blog', 'cms', 'article', 'content', 'publishing'],
    'dashboard': ['dashboard', 'admin', 'analytics', 'metrics', 'reporting'],
    'mobile app': ['mobile', 'app', 'ios', 'android', 'native'],
    'web app': ['web app', 'webapp', 'single page', 'spa'],
    'api': ['api', 'rest', 'graphql', 'backend', 'service'],
    'ai app': ['ai', 'ml', 'machine learning', 'neural', 'chatbot'],
    'game': ['game', 'gaming', 'puzzle', 'arcade'],
    'portfolio': ['portfolio', 'personal site', 'resume'],
    'landing page': ['landing', 'marketing', 'promotional']
  };

  for (const [type, keywords] of Object.entries(projectTypes)) {
    if (keywords.some(keyword => ideaLower.includes(keyword))) {
      analysis.projectType = type;
      break;
    }
  }

  // Domain detection
  const domains = {
    'web development': ['web', 'website', 'html', 'css', 'javascript'],
    'mobile development': ['mobile', 'app', 'ios', 'android', 'react native', 'flutter'],
    'backend development': ['api', 'server', 'database', 'backend'],
    'ai/ml': ['ai', 'machine learning', 'neural', 'deep learning'],
    'blockchain': ['blockchain', 'crypto', 'smart contract', 'web3'],
    'devops': ['deployment', 'docker', 'kubernetes', 'ci/cd'],
    'data science': ['data', 'analytics', 'visualization', 'statistics']
  };

  for (const [domain, keywords] of Object.entries(domains)) {
    if (keywords.some(keyword => ideaLower.includes(keyword) || technologies.some(tech => tech.toLowerCase().includes(keyword)))) {
      analysis.domains.push(domain);
    }
  }

  // Complexity assessment
  const complexityIndicators = {
    advanced: ['microservice', 'distributed', 'scalable', 'enterprise', 'real-time', 'machine learning', 'blockchain'],
    intermediate: ['authentication', 'database', 'api', 'testing', 'deployment'],
    beginner: ['simple', 'basic', 'learning', 'tutorial']
  };

  for (const [level, indicators] of Object.entries(complexityIndicators)) {
    if (indicators.some(indicator => ideaLower.includes(indicator))) {
      analysis.complexity = level;
      break;
    }
  }

  // Advanced concepts detection
  const advancedConcepts = ['authentication', 'authorization', 'caching', 'testing', 'deployment', 'optimization', 'security'];
  analysis.advancedConcepts = advancedConcepts.filter(concept => ideaLower.includes(concept));

  return analysis;
}

/**
 * Helper function to identify frontend technology from tech stack
 * @param {Array} technologies - Array of technologies
 * @returns {string|undefined} Frontend technology if found
 */
function getFrontendTech(technologies) {
  const frontendTechs = ['react', 'vue', 'angular', 'svelte', 'next.js', 'nuxt', 'html', 'css', 'javascript'];
  return technologies.find(tech => frontendTechs.some(ft => tech.toLowerCase().includes(ft.toLowerCase())));
}

/**
 * Helper function to identify backend technology from tech stack
 * @param {Array} technologies - Array of technologies
 * @returns {string|undefined} Backend technology if found
 */
function getBackendTech(technologies) {
  const backendTechs = ['node.js', 'express', 'django', 'flask', 'spring', 'laravel', 'ruby on rails', 'fastapi'];
  return technologies.find(tech => backendTechs.some(bt => tech.toLowerCase().includes(bt.toLowerCase())));
}

/**
 * Intelligent YouTube search query generation with project analysis
 * @param {Object} projectData - Project data object
 * @param {string} projectIdea - Original project idea
 * @returns {Promise<Array>} Array of search query strings
 */
async function generateIntelligentSearchQueries(projectData, projectIdea) {
  const queries = [];

  // Extract technologies from tech stack
  const allTechnologies = [];
  if (projectData.techStack) {
    Object.values(projectData.techStack).forEach(techArray => {
      if (Array.isArray(techArray)) {
        allTechnologies.push(...techArray);
      }
    });
  }

  // Analyze project type and complexity
  const projectAnalysis = analyzeProject(projectIdea, allTechnologies);

  console.log('Project Analysis:', projectAnalysis);

  // Priority 1: Exact project match tutorials
  if (projectAnalysis.projectType !== 'generic') {
    queries.push({
      query: `${projectAnalysis.projectType} ${allTechnologies.slice(0, 2).join(' ')} tutorial 2024`,
      priority: 'high',
      category: 'project-specific'
    });

    queries.push({
      query: `build ${projectAnalysis.projectType} ${allTechnologies[0]} step by step`,
      priority: 'high',
      category: 'project-specific'
    });
  }

  // Priority 2: Technology stack combinations
  if (allTechnologies.length >= 2) {
    const mainStack = allTechnologies.slice(0, 3);
    queries.push({
      query: `${mainStack.join(' ')} full stack tutorial`,
      priority: 'high',
      category: 'tech-stack'
    });

    // Frontend + Backend combination
    const frontend = getFrontendTech(allTechnologies);
    const backend = getBackendTech(allTechnologies);
    if (frontend && backend) {
      queries.push({
        query: `${frontend} ${backend} complete project tutorial`,
        priority: 'high',
        category: 'tech-stack'
      });
    }
  }

  // Priority 3: Individual technology deep dives
  allTechnologies.slice(0, 3).forEach(tech => {
    queries.push({
      query: `${tech} crash course 2024 beginners`,
      priority: 'medium',
      category: 'individual-tech'
    });
  });

  // Priority 4: Domain-specific tutorials
  projectAnalysis.domains.forEach(domain => {
    queries.push({
      query: `${domain} development tutorial ${allTechnologies[0] || 'programming'}`,
      priority: 'medium',
      category: 'domain-specific'
    });
  });

  // Priority 5: Advanced concepts if detected
  if (projectAnalysis.complexity === 'advanced') {
    projectAnalysis.advancedConcepts.forEach(concept => {
      queries.push({
        query: `${concept} ${allTechnologies[0]} implementation tutorial`,
        priority: 'low',
        category: 'advanced-concepts'
      });
    });
  }

  // Sort by priority and return top queries
  const priorityOrder = { 'high': 3, 'medium': 2, 'low': 1 };
  return queries
    .sort((a, b) => priorityOrder[b.priority] - priorityOrder[a.priority])
    .slice(0, 6) // Limit to top 6 queries
    .map(q => q.query);
}

/**
 * Enhanced video fetching with intelligent search
 * @param {Object} projectData - Project data object
 * @param {string} projectIdea - Original project idea
 * @returns {Promise<Array>} Array of relevant YouTube videos
 */
async function fetchProjectRelevantVideos(projectData, projectIdea) {
  console.log('Starting intelligent video search...');

  const searchQueries = await generateIntelligentSearchQueries(projectData, projectIdea);
  console.log('Generated search queries:', searchQueries);

  const videosByCategory = {
    projectSpecific: [],
    techStack: [],
    individual: [],
    general: []
  };

  // Fetch videos for each query with category tracking
  for (const query of searchQueries) {
    try {
      const videos = await fetchYouTubeVideos(query, 4);

      if (videos.length > 0) {
        // Categorize videos based on query type
        if (query.includes('tutorial') && (query.includes('build') || query.includes('project'))) {
          videosByCategory.projectSpecific.push(...videos);
        } else if (query.includes('full stack') || query.includes('crash course')) {
          videosByCategory.techStack.push(...videos);
        } else {
          videosByCategory.individual.push(...videos);
        }
      }

      // Add delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 100));
    } catch (error) {
      console.error(`Error fetching videos for query "${query}":`, error);
    }
  }

  // Combine and prioritize videos
  let combinedVideos = [
    ...videosByCategory.projectSpecific.slice(0, 4),
    ...videosByCategory.techStack.slice(0, 3),
    ...videosByCategory.individual.slice(0, 2),
    ...videosByCategory.general.slice(0, 1)
  ];

  // Remove duplicates based on URL
  const uniqueVideos = combinedVideos.filter((video, index, self) => 
    index === self.findIndex(v => v.url === video.url)
  );

  // Final filtering and sorting
  return uniqueVideos
    .filter(video => video.viewCount > 1000) // Filter out very low view count videos
    .sort((a, b) => {
      // Sort by relevance score first, then by view count
      if (Math.abs(a.relevanceScore - b.relevanceScore) > 0.1) {
        return b.relevanceScore - a.relevanceScore;
      }
      return b.viewCount - a.viewCount;
    })
    .slice(0, 10); // Final limit to 10 videos
}

/**
 * Create fallback search links when no videos are found
 * @param {Object} projectData - Project data object
 * @param {string} projectIdea - Original project idea
 * @returns {Promise<Array>} Array of fallback search links
 */
async function createFallbackSearchLinks(projectData, projectIdea) {
  console.log('No relevant videos found, creating fallback search links');
  const fallbackQueries = await generateIntelligentSearchQueries(projectData, projectIdea);

  return fallbackQueries.slice(0, 3).map(query => ({
    title: `Search: ${query}`,
    channel: "YouTube Search",
    url: `https://youtube.com/results?search_query=${encodeURIComponent(query)}`,
    description: `Click to search for tutorials about: ${query}`,
    thumbnail: null,
    publishedAt: new Date().toISOString(),
    viewCount: 0,
    duration: "Search",
    relevanceScore: 1,
    isSearchLink: true
  }));
}

// Export all functions
export {
  fetchYouTubeVideos,
  calculateRelevanceScore,
  analyzeProject,
  getFrontendTech,
  getBackendTech,
  generateIntelligentSearchQueries,
  fetchProjectRelevantVideos,
  createFallbackSearchLinks
};