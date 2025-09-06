module.exports = {

"[project]/.next-internal/server/app/api/generate-project/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/app/api/generate-project/youtube-service.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// lib/youtube-service.js
// YouTube API Integration Service
/**
 * Enhanced YouTube API helper function with better search logic
 * @param {string} searchQuery - The search query string
 * @param {number} maxResults - Maximum number of results to fetch (default: 5)
 * @returns {Promise<Array>} Array of video objects
 */ __turbopack_context__.s({
    "analyzeProject": (()=>analyzeProject),
    "calculateRelevanceScore": (()=>calculateRelevanceScore),
    "createFallbackSearchLinks": (()=>createFallbackSearchLinks),
    "fetchProjectRelevantVideos": (()=>fetchProjectRelevantVideos),
    "fetchYouTubeVideos": (()=>fetchYouTubeVideos),
    "generateIntelligentSearchQueries": (()=>generateIntelligentSearchQueries),
    "getBackendTech": (()=>getBackendTech),
    "getFrontendTech": (()=>getFrontendTech)
});
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
        const videoIds = data.items.map((item)=>item.id.videoId).join(',');
        const detailsUrl = `https://www.googleapis.com/youtube/v3/videos?part=statistics,contentDetails&id=${videoIds}&key=${process.env.YOUTUBE_API_KEY}`;
        const detailsResponse = await fetch(detailsUrl);
        const detailsData = detailsResponse.ok ? await detailsResponse.json() : {
            items: []
        };
        return data.items.map((item, index)=>{
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
        }).filter((video)=>video.relevanceScore > 0.3) // Filter out low relevance videos
        .sort((a, b)=>b.relevanceScore - a.relevanceScore); // Sort by relevance
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
 */ function calculateRelevanceScore(video, searchQuery) {
    const queryTerms = searchQuery.toLowerCase().split(' ').filter((term)=>term.length > 2);
    const title = video.snippet.title.toLowerCase();
    const description = video.snippet.description.toLowerCase();
    const channel = video.snippet.channelTitle.toLowerCase();
    let score = 0;
    queryTerms.forEach((term)=>{
        if (title.includes(term)) score += 1;
        if (description.includes(term)) score += 0.5;
        if (channel.includes(term)) score += 0.3;
    });
    // Bonus for educational channels and tutorial keywords
    const educationalKeywords = [
        'tutorial',
        'course',
        'learn',
        'guide',
        'how to',
        'coding',
        'programming'
    ];
    const educationalChannels = [
        'freecodecamp',
        'traversy',
        'net ninja',
        'programming with mosh',
        'academind',
        'codevolution',
        'web dev simplified'
    ];
    educationalKeywords.forEach((keyword)=>{
        if (title.includes(keyword) || description.includes(keyword)) score += 0.2;
    });
    educationalChannels.forEach((channelName)=>{
        if (channel.includes(channelName)) score += 0.5;
    });
    return Math.min(score / queryTerms.length, 1); // Normalize to 0-1
}
/**
 * Advanced project analysis function
 * @param {string} projectIdea - The project idea description
 * @param {Array} technologies - Array of technologies used in the project
 * @returns {Object} Project analysis object
 */ function analyzeProject(projectIdea, technologies) {
    const ideaLower = projectIdea.toLowerCase();
    const analysis = {
        projectType: 'generic',
        domains: [],
        complexity: 'beginner',
        advancedConcepts: []
    };
    // Project type detection
    const projectTypes = {
        'e-commerce': [
            'shop',
            'store',
            'marketplace',
            'cart',
            'payment',
            'product'
        ],
        'social media': [
            'social',
            'chat',
            'messaging',
            'post',
            'feed',
            'friend'
        ],
        'blog': [
            'blog',
            'cms',
            'article',
            'content',
            'publishing'
        ],
        'dashboard': [
            'dashboard',
            'admin',
            'analytics',
            'metrics',
            'reporting'
        ],
        'mobile app': [
            'mobile',
            'app',
            'ios',
            'android',
            'native'
        ],
        'web app': [
            'web app',
            'webapp',
            'single page',
            'spa'
        ],
        'api': [
            'api',
            'rest',
            'graphql',
            'backend',
            'service'
        ],
        'ai app': [
            'ai',
            'ml',
            'machine learning',
            'neural',
            'chatbot'
        ],
        'game': [
            'game',
            'gaming',
            'puzzle',
            'arcade'
        ],
        'portfolio': [
            'portfolio',
            'personal site',
            'resume'
        ],
        'landing page': [
            'landing',
            'marketing',
            'promotional'
        ]
    };
    for (const [type, keywords] of Object.entries(projectTypes)){
        if (keywords.some((keyword)=>ideaLower.includes(keyword))) {
            analysis.projectType = type;
            break;
        }
    }
    // Domain detection
    const domains = {
        'web development': [
            'web',
            'website',
            'html',
            'css',
            'javascript'
        ],
        'mobile development': [
            'mobile',
            'app',
            'ios',
            'android',
            'react native',
            'flutter'
        ],
        'backend development': [
            'api',
            'server',
            'database',
            'backend'
        ],
        'ai/ml': [
            'ai',
            'machine learning',
            'neural',
            'deep learning'
        ],
        'blockchain': [
            'blockchain',
            'crypto',
            'smart contract',
            'web3'
        ],
        'devops': [
            'deployment',
            'docker',
            'kubernetes',
            'ci/cd'
        ],
        'data science': [
            'data',
            'analytics',
            'visualization',
            'statistics'
        ]
    };
    for (const [domain, keywords] of Object.entries(domains)){
        if (keywords.some((keyword)=>ideaLower.includes(keyword) || technologies.some((tech)=>tech.toLowerCase().includes(keyword)))) {
            analysis.domains.push(domain);
        }
    }
    // Complexity assessment
    const complexityIndicators = {
        advanced: [
            'microservice',
            'distributed',
            'scalable',
            'enterprise',
            'real-time',
            'machine learning',
            'blockchain'
        ],
        intermediate: [
            'authentication',
            'database',
            'api',
            'testing',
            'deployment'
        ],
        beginner: [
            'simple',
            'basic',
            'learning',
            'tutorial'
        ]
    };
    for (const [level, indicators] of Object.entries(complexityIndicators)){
        if (indicators.some((indicator)=>ideaLower.includes(indicator))) {
            analysis.complexity = level;
            break;
        }
    }
    // Advanced concepts detection
    const advancedConcepts = [
        'authentication',
        'authorization',
        'caching',
        'testing',
        'deployment',
        'optimization',
        'security'
    ];
    analysis.advancedConcepts = advancedConcepts.filter((concept)=>ideaLower.includes(concept));
    return analysis;
}
/**
 * Helper function to identify frontend technology from tech stack
 * @param {Array} technologies - Array of technologies
 * @returns {string|undefined} Frontend technology if found
 */ function getFrontendTech(technologies) {
    const frontendTechs = [
        'react',
        'vue',
        'angular',
        'svelte',
        'next.js',
        'nuxt',
        'html',
        'css',
        'javascript'
    ];
    return technologies.find((tech)=>frontendTechs.some((ft)=>tech.toLowerCase().includes(ft.toLowerCase())));
}
/**
 * Helper function to identify backend technology from tech stack
 * @param {Array} technologies - Array of technologies
 * @returns {string|undefined} Backend technology if found
 */ function getBackendTech(technologies) {
    const backendTechs = [
        'node.js',
        'express',
        'django',
        'flask',
        'spring',
        'laravel',
        'ruby on rails',
        'fastapi'
    ];
    return technologies.find((tech)=>backendTechs.some((bt)=>tech.toLowerCase().includes(bt.toLowerCase())));
}
/**
 * Intelligent YouTube search query generation with project analysis
 * @param {Object} projectData - Project data object
 * @param {string} projectIdea - Original project idea
 * @returns {Promise<Array>} Array of search query strings
 */ async function generateIntelligentSearchQueries(projectData, projectIdea) {
    const queries = [];
    // Extract technologies from tech stack
    const allTechnologies = [];
    if (projectData.techStack) {
        Object.values(projectData.techStack).forEach((techArray)=>{
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
    allTechnologies.slice(0, 3).forEach((tech)=>{
        queries.push({
            query: `${tech} crash course 2024 beginners`,
            priority: 'medium',
            category: 'individual-tech'
        });
    });
    // Priority 4: Domain-specific tutorials
    projectAnalysis.domains.forEach((domain)=>{
        queries.push({
            query: `${domain} development tutorial ${allTechnologies[0] || 'programming'}`,
            priority: 'medium',
            category: 'domain-specific'
        });
    });
    // Priority 5: Advanced concepts if detected
    if (projectAnalysis.complexity === 'advanced') {
        projectAnalysis.advancedConcepts.forEach((concept)=>{
            queries.push({
                query: `${concept} ${allTechnologies[0]} implementation tutorial`,
                priority: 'low',
                category: 'advanced-concepts'
            });
        });
    }
    // Sort by priority and return top queries
    const priorityOrder = {
        'high': 3,
        'medium': 2,
        'low': 1
    };
    return queries.sort((a, b)=>priorityOrder[b.priority] - priorityOrder[a.priority]).slice(0, 6) // Limit to top 6 queries
    .map((q)=>q.query);
}
/**
 * Enhanced video fetching with intelligent search
 * @param {Object} projectData - Project data object
 * @param {string} projectIdea - Original project idea
 * @returns {Promise<Array>} Array of relevant YouTube videos
 */ async function fetchProjectRelevantVideos(projectData, projectIdea) {
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
    for (const query of searchQueries){
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
            await new Promise((resolve)=>setTimeout(resolve, 100));
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
    const uniqueVideos = combinedVideos.filter((video, index, self)=>index === self.findIndex((v)=>v.url === video.url));
    // Final filtering and sorting
    return uniqueVideos.filter((video)=>video.viewCount > 1000) // Filter out very low view count videos
    .sort((a, b)=>{
        // Sort by relevance score first, then by view count
        if (Math.abs(a.relevanceScore - b.relevanceScore) > 0.1) {
            return b.relevanceScore - a.relevanceScore;
        }
        return b.viewCount - a.viewCount;
    }).slice(0, 10); // Final limit to 10 videos
}
/**
 * Create fallback search links when no videos are found
 * @param {Object} projectData - Project data object
 * @param {string} projectIdea - Original project idea
 * @returns {Promise<Array>} Array of fallback search links
 */ async function createFallbackSearchLinks(projectData, projectIdea) {
    console.log('No relevant videos found, creating fallback search links');
    const fallbackQueries = await generateIntelligentSearchQueries(projectData, projectIdea);
    return fallbackQueries.slice(0, 3).map((query)=>({
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
;
}}),
"[project]/app/api/generate-project/route.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// app/api/generate-project/route.js
__turbopack_context__.s({
    "POST": (()=>POST)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$generate$2d$project$2f$youtube$2d$service$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/api/generate-project/youtube-service.js [app-route] (ecmascript)");
;
;
async function POST(request) {
    try {
        const { projectIdea } = await request.json();
        if (!projectIdea || projectIdea.trim().length === 0) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Project idea is required'
            }, {
                status: 400
            });
        }
        // Validate API keys
        if (!process.env.GEMINI_API_KEY) {
            console.error('GEMINI_API_KEY is not set');
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'API configuration error'
            }, {
                status: 500
            });
        }
        console.log('Making request to Gemini API for project generation...');
        // Generate comprehensive project data using Gemini AI
        const projectData = await generateProjectWithGemini(projectIdea);
        // **INTELLIGENT YOUTUBE VIDEO FETCHING**
        console.log('Starting intelligent YouTube video analysis and fetching...');
        let youtubeResources = [];
        try {
            youtubeResources = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$generate$2d$project$2f$youtube$2d$service$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fetchProjectRelevantVideos"])(projectData, projectIdea);
            console.log(`Successfully fetched ${youtubeResources.length} relevant YouTube videos`);
        } catch (youtubeError) {
            console.error('YouTube video fetching error:', youtubeError);
            youtubeResources = [];
        }
        // Fallback if no videos found
        if (youtubeResources.length === 0) {
            youtubeResources = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$generate$2d$project$2f$youtube$2d$service$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createFallbackSearchLinks"])(projectData, projectIdea);
        }
        // Enhanced response with metadata
        const enhancedResponse = {
            ...projectData,
            youtubeResources,
            metadata: {
                model: 'gemini-2.0-flash-exp',
                timestamp: new Date().toISOString(),
                tokens_used: projectData.tokens_used || 'N/A',
                youtube_videos_found: youtubeResources.filter((v)=>!v.isSearchLink).length,
                search_queries_generated: (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$generate$2d$project$2f$youtube$2d$service$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateIntelligentSearchQueries"])(projectData, projectIdea)).length,
                project_analysis: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$generate$2d$project$2f$youtube$2d$service$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["analyzeProject"])(projectIdea, Object.values(projectData.techStack || {}).flat())
            }
        };
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(enhancedResponse);
    } catch (error) {
        console.error('Project generation API error:', error);
        if (error.name === 'AbortError') {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Request timeout. Please try again.'
            }, {
                status: 500
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Failed to generate project guide',
            details: ("TURBOPACK compile-time truthy", 1) ? error.message : ("TURBOPACK unreachable", undefined)
        }, {
            status: 500
        });
    }
}
/**
 * Generate project data using Gemini AI
 * @param {string} projectIdea - The project idea description
 * @returns {Promise<Object>} The generated project data
 */ async function generateProjectWithGemini(projectIdea) {
    const prompt = `
You are an expert full-stack software architect, AI consultant, and technical project planner.
A user has described their project idea in natural language:

"${projectIdea}"

Your task is to deeply analyze this idea — whether it's a simple utility, a full SaaS platform, an AI-driven application, a blockchain dApp, or a UI/UX design system.
Provide a comprehensive, language-agnostic project breakdown in structured JSON format.

⚠️ You must:

Support all popular tech stacks: JavaScript/TypeScript, Python, Java, Dart/Flutter, Swift, Solidity, R, Rust, Go, etc.

Include recommendations for AI/ML, data analytics, blockchain, and design-oriented projects where relevant

Recommend only modern, well-maintained, and production-ready tools and libraries (2024–2025)

Ensure every step is practical, structured, and developer-actionable

**ENHANCED ROADMAP REQUIREMENTS:**
- Each phase should include detailed terminal commands for package installation
- Provide actual code snippets for setup and configuration
- Include file structure examples
- Add estimated time duration for each phase
- Include prerequisites and dependencies
- Provide troubleshooting tips for common issues
- Add testing commands and validation steps

Return ONLY a valid JSON object (no extra text), using the following format:

{
  "mindMap": {
    "name": "Project Name",
    "children": [
      {
        "name": "Major Component 1",
        "children": [
          { "name": "Sub-component 1.1" },
          { "name": "Sub-component 1.2" }
        ]
      }
    ]
  },
  "roadmap": [
    {
      "phase": "Phase 1: Project Setup & Environment",
      "description": "Set up the development environment and project structure",
      "duration": "2-4 hours",
      "difficulty": "Beginner",
      "prerequisites": ["Node.js v18+", "Git", "VS Code"],
      "steps": [
        {
          "title": "Initialize Project",
          "description": "Create project directory and initialize package.json",
          "type": "terminal",
          "commands": [
            "mkdir my-project && cd my-project",
            "npm init -y",
            "git init"
          ]
        },
        {
          "title": "Install Dependencies",
          "description": "Install core packages and development tools",
          "type": "terminal",
          "commands": [
            "npm install next react react-dom",
            "npm install -D tailwindcss postcss autoprefixer"
          ]
        }
      ],
      "troubleshooting": [
        "If Node.js version errors occur, use nvm to switch versions"
      ],
      "validation": [
        "Project starts without errors",
        "localhost:3000 loads successfully"
      ]
    }
  ],
  "techStack": {
    "frontend": ["React", "Next.js", "Tailwind CSS"],
    "backend": ["Node.js", "Express"],
    "database": ["PostgreSQL"],
    "devops": ["Docker", "GitHub Actions"],
    "deployment": ["Vercel", "Railway"]
  },
  "packages": {
    "npm": ["next", "react", "axios", "tailwindcss"],
    "python": [],
    "tools": ["VS Code", "Postman", "Figma", "Git"]
  },
  "documentation": [
    {
      "title": "Next.js Documentation",
      "url": "https://nextjs.org/docs",
      "description": "Official Next.js guide and API docs"
    }
  ],
  "quickStart": {
    "description": "Get started with this project in under 5 minutes",
    "commands": [
      "git clone <repository-url>",
      "npm install",
      "npm run dev"
    ],
    "notes": [
      "Make sure to update environment variables",
      "Visit http://localhost:3000 to see your project"
    ]
  }
}`;
    // Gemini API request configuration
    const requestBody = {
        contents: [
            {
                parts: [
                    {
                        text: prompt
                    }
                ]
            }
        ],
        generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 8192,
            responseMimeType: "text/plain"
        },
        safetySettings: [
            {
                category: "HARM_CATEGORY_HARASSMENT",
                threshold: "BLOCK_MEDIUM_AND_ABOVE"
            },
            {
                category: "HARM_CATEGORY_HATE_SPEECH",
                threshold: "BLOCK_MEDIUM_AND_ABOVE"
            },
            {
                category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
                threshold: "BLOCK_MEDIUM_AND_ABOVE"
            },
            {
                category: "HARM_CATEGORY_DANGEROUS_CONTENT",
                threshold: "BLOCK_MEDIUM_AND_ABOVE"
            }
        ]
    };
    // Make request to Gemini API
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${process.env.GEMINI_API_KEY}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
    });
    // Handle API response errors
    if (!response.ok) {
        const errorData = await response.json().catch(()=>null);
        console.error('Gemini API error:', response.status, errorData);
        if (response.status === 401) {
            throw new Error('Invalid API key configuration');
        } else if (response.status === 429) {
            throw new Error('API rate limit exceeded. Please try again in a few minutes.');
        } else if (response.status === 403) {
            throw new Error('API quota exceeded or access denied.');
        }
        throw new Error('Failed to connect to Gemini API');
    }
    const data = await response.json();
    console.log('Gemini API response received');
    if (!data.candidates || data.candidates.length === 0) {
        throw new Error('No response from AI model');
    }
    const content = data.candidates[0].content.parts[0].text;
    // Enhanced JSON extraction
    let jsonMatch = content.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
        const codeBlockMatch = content.match(/```(?:json)?\s*(\{[\s\S]*\})\s*```/);
        if (codeBlockMatch) {
            jsonMatch = [
                codeBlockMatch[1]
            ];
        }
    }
    if (!jsonMatch) {
        console.error('No JSON found in AI response');
        throw new Error('Invalid response format from AI service');
    }
    let projectData;
    try {
        projectData = JSON.parse(jsonMatch[0]);
    } catch (parseError) {
        console.error('JSON parsing error:', parseError);
        throw new Error('Failed to parse AI response');
    }
    // Validate required fields
    const requiredFields = [
        'mindMap',
        'roadmap',
        'techStack',
        'packages',
        'documentation'
    ];
    for (const field of requiredFields){
        if (!projectData[field]) {
            projectData[field] = getDefaultValue(field);
        }
    }
    // Add token usage information
    projectData.tokens_used = data.usageMetadata?.totalTokenCount || 'N/A';
    return projectData;
}
/**
 * Helper function for default values when required fields are missing
 * @param {string} field - The field name
 * @returns {*} Default value for the field
 */ function getDefaultValue(field) {
    const defaults = {
        mindMap: {
            name: "Project",
            children: []
        },
        roadmap: [],
        techStack: {},
        packages: {
            npm: [],
            tools: []
        },
        documentation: [],
        youtubeResources: [],
        quickStart: {
            description: "Quick setup commands",
            commands: [
                "npm install",
                "npm run dev"
            ],
            notes: [
                "Check the documentation for detailed setup"
            ]
        }
    };
    return defaults[field] || null;
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__c30024d3._.js.map