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

  // **ENHANCED: Bonus for educational channels and tutorial keywords (Hindi + English)**
  const educationalKeywords = ['tutorial', 'course', 'learn', 'guide', 'how to', 'coding', 'programming', 'complete course', 'crash course', 'full stack', 'project'];
  
  // **Premium Educational Channels - English**
  const englishChannels = [
    'freecodecamp', 'net ninja', 'traversy media', 'programming with mosh', 'academind', 
    'codevolution', 'web dev simplified', 'clever programmer', 'dev ed', 'coding addict',
    'javascript mastery', 'fireship', 'ben awad', 'theo - ping․gg', 'coding garden'
  ];
  
  // **Premium Educational Channels - Hindi**
  const hindiChannels = [
    'code with harry', 'thapa technical', 'apna college', 'love babbar', 'chai aur code',
    'harkirat singh', 'hitesh choudhary', 'websitelearner', 'technical suneja', 
    'programming pathshala', 'codingshuttle', 'programming knowledge', 'geeky shows',
    'mysirg.com', 'saurabh shukla sir'
  ];
  
  const allEducationalChannels = [...englishChannels, ...hindiChannels];

  educationalKeywords.forEach(keyword => {
    if (title.includes(keyword) || description.includes(keyword)) score += 0.2;
  });

  allEducationalChannels.forEach(channelName => {
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

  // Extract technologies from tech stack (enhanced for new structure)
  const allTechnologies = [];
  if (projectData.techStack) {
    Object.values(projectData.techStack).forEach(techCategory => {
      if (Array.isArray(techCategory)) {
        allTechnologies.push(...techCategory);
      } else if (typeof techCategory === 'object') {
        // Handle nested structure like { primary: [], styling: [] }
        Object.values(techCategory).forEach(techArray => {
          if (Array.isArray(techArray)) {
            allTechnologies.push(...techArray);
          }
        });
      }
    });
  }

  // Analyze project type and complexity
  const projectAnalysis = analyzeProject(projectIdea, allTechnologies);

  console.log('Project Analysis:', projectAnalysis);

  // **ENHANCED: Priority 1 - Exact project match tutorials (Hindi + English)**
  if (projectAnalysis.projectType !== 'generic') {
    // English tutorials
    queries.push({
      query: `${projectAnalysis.projectType} ${allTechnologies.slice(0, 2).join(' ')} complete tutorial 2024`,
      priority: 'high',
      category: 'project-specific-en'
    });

    queries.push({
      query: `build ${projectAnalysis.projectType} ${allTechnologies[0]} step by step project`,
      priority: 'high', 
      category: 'project-specific-en'
    });

    // Hindi tutorials
    queries.push({
      query: `${projectAnalysis.projectType} ${allTechnologies[0]} hindi tutorial complete course`,
      priority: 'high',
      category: 'project-specific-hi'
    });
  }

  // **ENHANCED: Priority 2 - Technology stack combinations (Hindi + English)**
  if (allTechnologies.length >= 2) {
    const mainStack = allTechnologies.slice(0, 3);
    
    // English stack tutorials
    queries.push({
      query: `${mainStack.join(' ')} full stack tutorial 2024`,
      priority: 'high',
      category: 'tech-stack-en'
    });

    // Hindi stack tutorials
    queries.push({
      query: `${mainStack[0]} ${mainStack[1]} hindi tutorial complete project`,
      priority: 'high',
      category: 'tech-stack-hi'
    });

    // Frontend + Backend combination
    const frontend = getFrontendTech(allTechnologies);
    const backend = getBackendTech(allTechnologies);
    if (frontend && backend) {
      queries.push({
        query: `${frontend} ${backend} complete project tutorial english`,
        priority: 'high',
        category: 'tech-stack-en'
      });
      
      queries.push({
        query: `${frontend} ${backend} hindi me complete course`,
        priority: 'medium',
        category: 'tech-stack-hi'
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

  // **OPTIMIZED: Reduce to 4 queries for faster processing**
  const priorityOrder = { 'high': 3, 'medium': 2, 'low': 1 };
  return queries
    .sort((a, b) => priorityOrder[b.priority] - priorityOrder[a.priority])
    .slice(0, 4) // Reduced from 6 to 4 for speed
    .map(q => q.query);
}

/**
 * Validate video accessibility and quality
 * @param {Object} video - Video object from YouTube API
 * @returns {boolean} Whether video meets quality standards
 */
function validateVideoQuality(video) {
  try {
    // Check if video and snippet exist
    if (!video || !video.snippet) {
      return false;
    }

    // Check if video has proper metadata
    if (!video.snippet.title || !video.snippet.description) {
      return false;
    }

    // Check if video is not private/deleted
    if (video.snippet.title.toLowerCase().includes('private video') || 
        video.snippet.title.toLowerCase().includes('deleted video') ||
        video.snippet.title.toLowerCase().includes('[deleted]')) {
      return false;
    }

    // Check if video has meaningful title (not just random characters)
    if (video.snippet.title.length < 10) {
      return false;
    }

    // Prefer videos from known educational channels (both Hindi & English)
    const educationalChannels = [
      // English channels
      'freecodecamp', 'net ninja', 'traversy media', 'programming with mosh', 'academind',
      'web dev simplified', 'javascript mastery', 'fireship', 'coding addict',
      // Hindi channels  
      'code with harry', 'thapa technical', 'apna college', 'love babbar', 'chai aur code',
      'harkirat singh', 'hitesh choudhary', 'codingshuttle'
    ];
    
    const channelName = video.snippet.channelTitle.toLowerCase();
    const isEducationalChannel = educationalChannels.some(channel => 
      channelName.includes(channel)
    );

    // Check upload recency (prefer newer content from trusted channels)
    const uploadDate = new Date(video.snippet.publishedAt);
    const threeYearsAgo = new Date();
    threeYearsAgo.setFullYear(threeYearsAgo.getFullYear() - 3);
    
    // Allow older videos from trusted channels, recent videos from all channels
    if (uploadDate < threeYearsAgo && !isEducationalChannel) {
      return false;
    }

    return true;
  } catch (error) {
    console.error('Video validation error:', error);
    return false;
  }
}

/**
 * Enhanced video fetching with intelligent search and validation
 * @param {Object} projectData - Project data object
 * @param {string} projectIdea - Original project idea
 * @returns {Promise<Array>} Array of validated, relevant YouTube videos
 */
async function fetchProjectRelevantVideos(projectData, projectIdea) {
  // **SAFETY CHECK: Return empty if no YouTube API key**
  if (!process.env.YOUTUBE_API_KEY) {
    console.log('YouTube API key not available, skipping video search');
    return [];
  }

  console.log('Starting intelligent video search...');

  const searchQueries = await generateIntelligentSearchQueries(projectData, projectIdea);
  console.log('Generated search queries:', searchQueries);

  const videosByCategory = {
    projectSpecific: [],
    techStack: [],
    individual: [],
    general: []
  };

  // **OPTIMIZED: Fetch videos in parallel instead of sequentially**
  const videoPromises = searchQueries.slice(0, 4).map(async (query) => { // Limit to 4 queries for speed
    try {
      const videos = await fetchYouTubeVideos(query, 3); // Reduced to 3 videos per query
      return { query, videos };
    } catch (error) {
      console.error(`Error fetching videos for query "${query}":`, error);
      return { query, videos: [] };
    }
  });

  // Wait for all queries to complete in parallel
  const results = await Promise.all(videoPromises);
  
  // Process results with validation
  results.forEach(({ query, videos }) => {
    if (videos.length > 0) {
      // **ENHANCED: Validate each video before categorizing**
      const validatedVideos = videos.filter(video => validateVideoQuality(video));
      
      if (validatedVideos.length > 0) {
        // Categorize videos based on query type and language
        if (query.includes('hindi') || query.includes('hindi me')) {
          // Hindi content gets priority for Indian users
          videosByCategory.projectSpecific.push(...validatedVideos);
        } else if (query.includes('tutorial') && (query.includes('build') || query.includes('project'))) {
          videosByCategory.projectSpecific.push(...validatedVideos);
        } else if (query.includes('full stack') || query.includes('crash course')) {
          videosByCategory.techStack.push(...validatedVideos);
        } else {
          videosByCategory.individual.push(...validatedVideos);
        }
      }
    }
  });

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

  // **ENHANCED: Final filtering and intelligent sorting with language balance**
  const validatedVideos = uniqueVideos.filter(video => {
    // More lenient view count filter (500+ for quality content)
    return video.viewCount > 500 && validateVideoQuality(video);
  });

  // Separate Hindi and English videos for balanced representation
  const hindiVideos = validatedVideos.filter(video => 
    video.title.toLowerCase().includes('hindi') || 
    video.channel.toLowerCase().includes('harry') ||
    video.channel.toLowerCase().includes('thapa') ||
    video.channel.toLowerCase().includes('apna') ||
    video.channel.toLowerCase().includes('love babbar')
  );

  const englishVideos = validatedVideos.filter(video => !hindiVideos.includes(video));

  // Create balanced final list (mix of Hindi and English)
  const balancedVideos = [
    ...englishVideos.slice(0, 6), // 6 English videos
    ...hindiVideos.slice(0, 4),   // 4 Hindi videos
  ];

  return balancedVideos
    .sort((a, b) => {
      // **PREMIUM: Multi-factor sorting algorithm**
      // 1. Educational channels get priority
      const aIsEducational = allEducationalChannels.some(channel => 
        a.channel.toLowerCase().includes(channel)
      );
      const bIsEducational = allEducationalChannels.some(channel => 
        b.channel.toLowerCase().includes(channel)
      );
      
      if (aIsEducational && !bIsEducational) return -1;
      if (!aIsEducational && bIsEducational) return 1;

      // 2. Relevance score (quality of match)
      if (Math.abs(a.relevanceScore - b.relevanceScore) > 0.1) {
        return b.relevanceScore - a.relevanceScore;
      }

      // 3. View count for popular content
      return b.viewCount - a.viewCount;
    })
    .slice(0, 10); // Final limit to 10 high-quality videos
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

// Validate if a YouTube video exists and is accessible
async function validateVideoExists(videoId) {
  try {
    const response = await fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`, {
      method: 'GET',
      signal: AbortSignal.timeout(3000) // 3 second timeout
    });
    
    return response.ok;
  } catch (error) {
    return false;
  }
}

// Extract video ID from YouTube URL
function extractVideoId(url) {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
  return match ? match[1] : null;
}

// Validate and filter existing videos
async function validateVideos(videos) {
  console.log(`Validating ${videos.length} videos for existence...`);
  
  const validationPromises = videos.map(async (video) => {
    const videoId = extractVideoId(video.url);
    if (!videoId) return null;
    
    const exists = await validateVideoExists(videoId);
    return exists ? video : null;
  });
  
  const results = await Promise.all(validationPromises);
  const validVideos = results.filter(video => video !== null);
  
  console.log(`${validVideos.length} out of ${videos.length} videos are valid and accessible`);
  return validVideos;
}

// Curated, verified video resources for common project types
function getCuratedVideoResources(projectAnalysis) {
  console.log('Using curated video resources for better reliability...');
  
  const { projectType, domains, complexity } = projectAnalysis;
  
  // Verified, high-quality videos that exist and are project-relevant
  const verifiedVideos = {
    'web development': [
      {
        title: 'Complete Web Development Course 2024',
        channel: 'freeCodeCamp.org',
        url: 'https://www.youtube.com/watch?v=nu_pCVPKzTk',
        description: 'Full stack web development course covering HTML, CSS, JavaScript, and more.',
        relevantFor: ['beginner', 'intermediate']
      },
      {
        title: 'React Tutorial for Beginners',
        channel: 'Programming with Mosh',
        url: 'https://www.youtube.com/watch?v=SqcY0GlETPk',
        description: 'Learn React fundamentals with practical examples.',
        relevantFor: ['beginner', 'intermediate']
      }
    ],
    'mobile development': [
      {
        title: 'React Native Tutorial for Beginners',
        channel: 'Programming with Mosh',
        url: 'https://www.youtube.com/watch?v=0-S5a0eXPoc',
        description: 'Complete React Native course for mobile app development.',
        relevantFor: ['beginner', 'intermediate']
      }
    ],
    'backend development': [
      {
        title: 'Node.js Tutorial for Beginners',
        channel: 'Programming with Mosh',
        url: 'https://www.youtube.com/watch?v=TlB_eWDSMt4',
        description: 'Learn Node.js from scratch with practical projects.',
        relevantFor: ['beginner', 'intermediate']
      }
    ],
    'ai/ml': [
      {
        title: 'Machine Learning Course for Beginners',
        channel: 'freeCodeCamp.org',
        url: 'https://www.youtube.com/watch?v=NWONeJKn6kc',
        description: 'Complete machine learning course covering fundamentals and applications.',
        relevantFor: ['beginner', 'intermediate']
      }
    ],
    'hindi': [
      {
        title: 'Complete Web Development Course Hindi',
        channel: 'CodeWithHarry',
        url: 'https://www.youtube.com/watch?v=tVzUXW6siu0',
        description: 'Complete web development tutorial in Hindi.',
        relevantFor: ['beginner', 'intermediate']
      },
      {
        title: 'React JS Tutorial in Hindi',
        channel: 'Thapa Technical',
        url: 'https://www.youtube.com/watch?v=tiLWCNFzThE',
        description: 'Learn React.js in Hindi with practical examples.',
        relevantFor: ['beginner', 'intermediate']
      }
    ]
  };
  
  // Select relevant videos based on project analysis
  let selectedVideos = [];
  
  // Add domain-specific videos
  domains.forEach(domain => {
    if (verifiedVideos[domain]) {
      selectedVideos.push(...verifiedVideos[domain].filter(video => 
        video.relevantFor.includes(complexity)
      ));
    }
  });
  
  // Add Hindi videos for variety
  if (verifiedVideos.hindi) {
    selectedVideos.push(...verifiedVideos.hindi.filter(video => 
      video.relevantFor.includes(complexity)
    ).slice(0, 1)); // Just add one Hindi video
  }
  
  // Remove duplicates and limit to top 4 videos
  const uniqueVideos = selectedVideos.filter((video, index, self) => 
    index === self.findIndex(v => v.url === video.url)
  ).slice(0, 4);
  
  console.log(`Selected ${uniqueVideos.length} curated videos for project`);
  return uniqueVideos;
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
  createFallbackSearchLinks,
  validateVideoExists,
  extractVideoId,
  validateVideos,
  getCuratedVideoResources
};