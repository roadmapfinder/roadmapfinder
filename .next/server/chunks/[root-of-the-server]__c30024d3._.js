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
// Enhanced YouTube API Integration Service with Intelligent Multi-language Search
/**
 * Enhanced YouTube API helper function with intelligent search logic
 * @param {string} searchQuery - The search query string
 * @param {number} maxResults - Maximum number of results to fetch (default: 8)
 * @param {string} language - Language preference ('en', 'hi', or 'mixed')
 * @returns {Promise<Array>} Array of video objects
 */ __turbopack_context__.s({
    "analyzeProject": (()=>analyzeProject),
    "calculateIntelligentRelevanceScore": (()=>calculateIntelligentRelevanceScore),
    "calculateQualityScore": (()=>calculateQualityScore),
    "createFallbackSearchLinks": (()=>createFallbackSearchLinks),
    "detectVideoLanguage": (()=>detectVideoLanguage),
    "enhanceSearchQuery": (()=>enhanceSearchQuery),
    "fetchProjectRelevantVideos": (()=>fetchProjectRelevantVideos),
    "fetchYouTubeVideos": (()=>fetchYouTubeVideos),
    "formatDuration": (()=>formatDuration),
    "generateIntelligentSearchQueries": (()=>generateIntelligentSearchQueries),
    "getBackendTech": (()=>getBackendTech),
    "getFrontendTech": (()=>getFrontendTech)
});
async function fetchYouTubeVideos(searchQuery, maxResults = 8, language = 'mixed') {
    try {
        if (!process.env.YOUTUBE_API_KEY) {
            console.warn('YOUTUBE_API_KEY not set, skipping video fetch');
            return [];
        }
        // Enhanced search parameters for better, more recent results
        const currentYear = new Date().getFullYear();
        const lastYear = currentYear - 1;
        // Add recency and language filters to the query
        const enhancedQuery = enhanceSearchQuery(searchQuery, language, currentYear);
        const searchParams = new URLSearchParams({
            part: 'snippet',
            q: enhancedQuery,
            type: 'video',
            maxResults: maxResults,
            order: 'relevance',
            videoDuration: 'medium',
            videoDefinition: 'any',
            publishedAfter: `${lastYear}-01-01T00:00:00Z`,
            relevanceLanguage: language === 'hi' ? 'hi' : 'en',
            key: process.env.YOUTUBE_API_KEY
        });
        const searchUrl = `https://www.googleapis.com/youtube/v3/search?${searchParams}`;
        console.log(`Searching YouTube: ${enhancedQuery} (Language: ${language})`);
        const response = await fetch(searchUrl);
        if (!response.ok) {
            const errorText = await response.text();
            console.error('YouTube API error:', response.status, errorText);
            return [];
        }
        const data = await response.json();
        if (!data.items || data.items.length === 0) {
            console.log(`No videos found for query: ${enhancedQuery}`);
            return [];
        }
        // Get additional video details for better filtering
        const videoIds = data.items.map((item)=>item.id.videoId).join(',');
        const detailsUrl = `https://www.googleapis.com/youtube/v3/videos?part=statistics,contentDetails,snippet&id=${videoIds}&key=${process.env.YOUTUBE_API_KEY}`;
        const detailsResponse = await fetch(detailsUrl);
        const detailsData = detailsResponse.ok ? await detailsResponse.json() : {
            items: []
        };
        const processedVideos = data.items.map((item, index)=>{
            const details = detailsData.items?.find((d)=>d.id === item.id.videoId);
            const viewCount = details?.statistics?.viewCount ? parseInt(details.statistics.viewCount) : 0;
            const duration = details?.contentDetails?.duration || 'Unknown';
            const publishedAt = new Date(item.snippet.publishedAt);
            // Calculate recency score (higher for newer videos)
            const daysSincePublished = (Date.now() - publishedAt.getTime()) / (1000 * 60 * 60 * 24);
            const recencyScore = Math.max(0, 1 - daysSincePublished / 730); // 2 years max
            const relevanceScore = calculateIntelligentRelevanceScore(item, searchQuery, language, recencyScore, viewCount);
            return {
                title: item.snippet.title,
                channel: item.snippet.channelTitle,
                url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
                description: item.snippet.description.substring(0, 200) + '...',
                thumbnail: item.snippet.thumbnails.high?.url || item.snippet.thumbnails.medium?.url || item.snippet.thumbnails.default?.url,
                publishedAt: item.snippet.publishedAt,
                viewCount,
                duration: formatDuration(duration),
                relevanceScore,
                recencyScore,
                language: detectVideoLanguage(item.snippet.title, item.snippet.description),
                isRecent: daysSincePublished <= 180,
                qualityScore: calculateQualityScore(viewCount, daysSincePublished, item.snippet.channelTitle)
            };
        });
        // Advanced filtering and sorting
        return processedVideos.filter((video)=>video.relevanceScore > 0.4) // Higher threshold for better quality
        .filter((video)=>video.viewCount > 500) // Minimum view count
        .sort((a, b)=>{
            // Weighted sorting: relevance (40%) + recency (30%) + quality (30%)
            const scoreA = a.relevanceScore * 0.4 + a.recencyScore * 0.3 + a.qualityScore * 0.3;
            const scoreB = b.relevanceScore * 0.4 + b.recencyScore * 0.3 + b.qualityScore * 0.3;
            return scoreB - scoreA;
        });
    } catch (error) {
        console.error('YouTube API fetch error:', error);
        return [];
    }
}
/**
 * Enhance search query with language-specific terms and recency filters
 * @param {string} query - Original search query
 * @param {string} language - Target language ('en', 'hi', 'mixed')
 * @param {number} currentYear - Current year for recency
 * @returns {string} Enhanced search query
 */ function enhanceSearchQuery(query, language, currentYear) {
    let enhancedQuery = query;
    // Add year for recency
    if (!query.includes(currentYear.toString()) && !query.includes((currentYear - 1).toString())) {
        enhancedQuery += ` ${currentYear}`;
    }
    // Language-specific enhancements
    if (language === 'hi') {
        // Add Hindi tutorial keywords
        const hindiKeywords = [
            'tutorial',
            'सिखें',
            'टुटोरिअल',
            'कोर्स',
            'हिंदी में'
        ];
        const hasHindiKeyword = hindiKeywords.some((keyword)=>enhancedQuery.toLowerCase().includes(keyword.toLowerCase()));
        if (!hasHindiKeyword) {
            enhancedQuery += ' tutorial हिंदी';
        }
    } else if (language === 'en') {
        // Add English tutorial keywords if not present
        const englishKeywords = [
            'tutorial',
            'course',
            'guide',
            'learn',
            'how to'
        ];
        const hasEnglishKeyword = englishKeywords.some((keyword)=>enhancedQuery.toLowerCase().includes(keyword.toLowerCase()));
        if (!hasEnglishKeyword) {
            enhancedQuery += ' tutorial';
        }
    } else {
        // Mixed language - add both
        enhancedQuery += ' tutorial';
    }
    return enhancedQuery;
}
/**
 * Advanced relevance scoring with language, recency, and quality factors
 * @param {Object} video - Video object from YouTube API
 * @param {string} searchQuery - Original search query
 * @param {string} language - Target language
 * @param {number} recencyScore - Recency score (0-1)
 * @param {number} viewCount - Video view count
 * @returns {number} Relevance score between 0 and 1
 */ function calculateIntelligentRelevanceScore(video, searchQuery, language, recencyScore, viewCount) {
    const queryTerms = searchQuery.toLowerCase().split(' ').filter((term)=>term.length > 2);
    const title = video.snippet.title.toLowerCase();
    const description = video.snippet.description.toLowerCase();
    const channel = video.snippet.channelTitle.toLowerCase();
    let score = 0;
    let termMatchCount = 0;
    // Term matching with weighted importance
    queryTerms.forEach((term)=>{
        let termScore = 0;
        if (title.includes(term)) {
            termScore += 2; // Title matches are most important
            termMatchCount++;
        }
        if (description.includes(term)) {
            termScore += 1; // Description matches are less important
        }
        if (channel.includes(term)) {
            termScore += 0.5; // Channel matches are least important
        }
        score += termScore;
    });
    // Normalize by query terms
    score = score / (queryTerms.length * 2); // Max possible score per term is 2
    // Language preference bonus
    const detectedLanguage = detectVideoLanguage(video.snippet.title, video.snippet.description);
    if (language === 'mixed') {
        score += 0.1; // Small bonus for any language in mixed mode
    } else if (language === detectedLanguage) {
        score += 0.3; // Significant bonus for matching language
    }
    // Educational content bonus
    const educationalKeywords = [
        // English
        'tutorial',
        'course',
        'learn',
        'guide',
        'how to',
        'step by step',
        'complete',
        'full course',
        'crash course',
        'beginner',
        'explained',
        'project',
        'build',
        'create',
        'development',
        // Hindi
        'tutorial',
        'सिखें',
        'टुटोरिअल',
        'कोर्स',
        'गाइड',
        'कैसे',
        'सीखिए',
        'प्रोजेक्ट'
    ];
    educationalKeywords.forEach((keyword)=>{
        if (title.includes(keyword.toLowerCase()) || description.includes(keyword.toLowerCase())) {
            score += 0.1;
        }
    });
    // Trusted educational channels bonus
    const trustedChannels = [
        // English channels
        'freecodecamp',
        'traversy media',
        'the net ninja',
        'programming with mosh',
        'academind',
        'codevolution',
        'web dev simplified',
        'dave gray',
        'javascript mastery',
        'coding addict',
        'fireship',
        'techno tim',
        'coding train',
        'sentdex',
        'derek banas',
        // Hindi channels
        'code with harry',
        'thapa technical',
        'learn code with durgesh',
        'college wallah',
        'apna college',
        'krishna sakinala',
        'technical suneja',
        'web cifar',
        'geeky shows',
        'code step by step',
        'procademy',
        'easytuts4you',
        'yahoo baba'
    ];
    trustedChannels.forEach((trustedChannel)=>{
        if (channel.includes(trustedChannel.toLowerCase())) {
            score += 0.4; // Significant bonus for trusted channels
        }
    });
    // Recency bonus (newer videos get higher scores)
    score += recencyScore * 0.2;
    // View count normalization (logarithmic scale to avoid bias towards viral videos)
    const viewScore = Math.min(Math.log10(viewCount + 1) / 7, 0.2); // Max 0.2 bonus
    score += viewScore;
    // Must have minimum term matches to be relevant
    if (termMatchCount === 0) {
        score *= 0.3; // Heavily penalize videos with no term matches
    }
    return Math.min(score, 1); // Cap at 1.0
}
/**
 * Detect video language based on title and description
 * @param {string} title - Video title
 * @param {string} description - Video description
 * @returns {string} Detected language ('en', 'hi', 'mixed')
 */ function detectVideoLanguage(title, description) {
    const text = (title + ' ' + description).toLowerCase();
    // Hindi indicators
    const hindiPatterns = [
        /[\u0900-\u097F]/,
        /\b(tutorial|सिखें|टुटोरिअल|कोर्स|गाइड|कैसे|सीखिए|हिंदी|मे)\b/i
    ];
    // English indicators
    const englishPatterns = [
        /\b(tutorial|course|learn|guide|how\s+to|step\s+by\s+step|english|in\s+english)\b/i
    ];
    const hasHindi = hindiPatterns.some((pattern)=>pattern.test(text));
    const hasEnglish = englishPatterns.some((pattern)=>pattern.test(text));
    if (hasHindi && hasEnglish) return 'mixed';
    if (hasHindi) return 'hi';
    if (hasEnglish) return 'en';
    return 'en'; // Default to English
}
/**
 * Calculate quality score based on various factors
 * @param {number} viewCount - Video view count
 * @param {number} daysSincePublished - Days since video was published
 * @param {string} channelTitle - Channel title
 * @returns {number} Quality score between 0 and 1
 */ function calculateQualityScore(viewCount, daysSincePublished, channelTitle) {
    let score = 0;
    // View count factor (logarithmic to avoid bias)
    score += Math.min(Math.log10(viewCount + 1) / 7, 0.4);
    // Age factor (newer videos get bonus, but not too new to be untested)
    if (daysSincePublished >= 7 && daysSincePublished <= 365) {
        score += 0.3; // Sweet spot: 1 week to 1 year old
    } else if (daysSincePublished <= 730) {
        score += 0.2; // Up to 2 years old
    }
    // Channel reputation (subscriber count proxy)
    const channel = channelTitle.toLowerCase();
    if (channel.includes('official') || channel.includes('academy') || channel.includes('university')) {
        score += 0.3;
    }
    return Math.min(score, 1);
}
/**
 * Format video duration from ISO 8601 to readable format
 * @param {string} duration - ISO 8601 duration string
 * @returns {string} Formatted duration
 */ function formatDuration(duration) {
    if (!duration || duration === 'Unknown') return 'Unknown';
    const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
    if (!match) return duration;
    const hours = parseInt(match[1]) || 0;
    const minutes = parseInt(match[2]) || 0;
    const seconds = parseInt(match[3]) || 0;
    if (hours > 0) {
        return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    } else {
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }
}
/**
 * Super intelligent search query generation with multi-language support
 * @param {Object} projectData - Project data object
 * @param {string} projectIdea - Original project idea
 * @returns {Promise<Array>} Array of intelligent search query objects
 */ async function generateIntelligentSearchQueries(projectData, projectIdea) {
    const queries = [];
    const currentYear = new Date().getFullYear();
    // Extract and analyze technologies
    const allTechnologies = [];
    if (projectData.techStack) {
        Object.values(projectData.techStack).forEach((techArray)=>{
            if (Array.isArray(techArray)) {
                allTechnologies.push(...techArray);
            }
        });
    }
    const projectAnalysis = analyzeProject(projectIdea, allTechnologies);
    console.log('Enhanced Project Analysis:', projectAnalysis);
    // Helper function to create bilingual queries
    const createBilingualQuery = (englishQuery, hindiTerms = [])=>{
        const english = {
            query: englishQuery,
            language: 'en',
            priority: 'high',
            type: 'english'
        };
        const hindi = {
            query: englishQuery + ' ' + hindiTerms.join(' '),
            language: 'hi',
            priority: 'high',
            type: 'hindi'
        };
        return [
            english,
            hindi
        ];
    };
    // 1. PROJECT-SPECIFIC QUERIES (Highest Priority)
    if (projectAnalysis.projectType !== 'generic') {
        const englishQuery = `${projectAnalysis.projectType} ${allTechnologies.slice(0, 2).join(' ')} complete tutorial ${currentYear}`;
        const hindiTerms = [
            'tutorial',
            'हिंदी',
            'प्रोजेक्ट'
        ];
        queries.push(...createBilingualQuery(englishQuery, hindiTerms));
        // Step-by-step project building queries
        queries.push(...createBilingualQuery(`build ${projectAnalysis.projectType} ${allTechnologies[0]} step by step ${currentYear}`, [
            'कैसे',
            'बनाये',
            'step by step'
        ]));
    }
    // 2. TECHNOLOGY STACK COMBINATIONS
    if (allTechnologies.length >= 2) {
        const mainStack = allTechnologies.slice(0, 3);
        // Full stack tutorial
        queries.push(...createBilingualQuery(`${mainStack.join(' ')} full stack project ${currentYear}`, [
            'full stack',
            'प्रोजेक्ट',
            'tutorial'
        ]));
        // Frontend + Backend specific
        const frontend = getFrontendTech(allTechnologies);
        const backend = getBackendTech(allTechnologies);
        if (frontend && backend) {
            queries.push(...createBilingualQuery(`${frontend} ${backend} complete application tutorial ${currentYear}`, [
                'complete',
                'application',
                'tutorial'
            ]));
        }
    }
    // 3. INDIVIDUAL TECHNOLOGY DEEP DIVES
    allTechnologies.slice(0, 3).forEach((tech)=>{
        queries.push(...createBilingualQuery(`${tech} crash course ${currentYear} complete guide`, [
            'crash course',
            'complete',
            'tutorial'
        ]));
    });
    // 4. DOMAIN-SPECIFIC ADVANCED QUERIES
    projectAnalysis.domains.forEach((domain)=>{
        queries.push(...createBilingualQuery(`${domain} project ${allTechnologies[0]} best practices ${currentYear}`, [
            'project',
            'best practices',
            'tutorial'
        ]));
    });
    // 5. COMPLEXITY-BASED QUERIES
    if (projectAnalysis.complexity === 'advanced') {
        projectAnalysis.advancedConcepts.forEach((concept)=>{
            queries.push(...createBilingualQuery(`${concept} ${allTechnologies[0]} implementation guide ${currentYear}`, [
                'implementation',
                'guide',
                'advanced'
            ]));
        });
    } else if (projectAnalysis.complexity === 'beginner') {
        queries.push(...createBilingualQuery(`${allTechnologies[0]} beginner complete course ${currentYear}`, [
            'beginner',
            'complete',
            'course',
            'शुरुआती'
        ]));
    }
    // 6. TRENDING AND LATEST QUERIES
    queries.push(...createBilingualQuery(`${allTechnologies[0]} latest features ${currentYear} tutorial`, [
        'latest',
        'new features',
        'tutorial'
    ]));
    // Sort by priority and language diversity
    const priorityOrder = {
        'high': 3,
        'medium': 2,
        'low': 1
    };
    const sortedQueries = queries.sort((a, b)=>priorityOrder[b.priority] - priorityOrder[a.priority]).slice(0, 12); // Increased limit for better coverage
    // Ensure balanced language distribution
    const englishQueries = sortedQueries.filter((q)=>q.language === 'en').slice(0, 6);
    const hindiQueries = sortedQueries.filter((q)=>q.language === 'hi').slice(0, 6);
    return [
        ...englishQueries,
        ...hindiQueries
    ];
}
/**
 * Enhanced video fetching with intelligent multi-language search
 * @param {Object} projectData - Project data object
 * @param {string} projectIdea - Original project idea
 * @returns {Promise<Array>} Array of relevant YouTube videos
 */ async function fetchProjectRelevantVideos(projectData, projectIdea) {
    console.log('Starting super intelligent multi-language video search...');
    const searchQueries = await generateIntelligentSearchQueries(projectData, projectIdea);
    console.log(`Generated ${searchQueries.length} intelligent search queries`);
    const videosByLanguage = {
        english: [],
        hindi: [],
        mixed: []
    };
    // Fetch videos for each query
    for (const queryObj of searchQueries){
        try {
            console.log(`Searching: "${queryObj.query}" (${queryObj.language})`);
            const videos = await fetchYouTubeVideos(queryObj.query, 6, queryObj.language);
            if (videos.length > 0) {
                if (queryObj.language === 'hi') {
                    videosByLanguage.hindi.push(...videos);
                } else {
                    videosByLanguage.english.push(...videos);
                }
            }
            // Rate limiting
            await new Promise((resolve)=>setTimeout(resolve, 200));
        } catch (error) {
            console.error(`Error fetching videos for query "${queryObj.query}":`, error);
        }
    }
    // Combine and balance languages
    let combinedVideos = [
        ...videosByLanguage.english.slice(0, 8),
        ...videosByLanguage.hindi.slice(0, 8),
        ...videosByLanguage.mixed.slice(0, 2)
    ];
    // Remove duplicates and final processing
    const uniqueVideos = combinedVideos.filter((video, index, self)=>index === self.findIndex((v)=>v.url === video.url));
    // Advanced filtering with quality metrics
    return uniqueVideos.filter((video)=>video.viewCount > 1000).filter((video)=>video.relevanceScore > 0.5).sort((a, b)=>{
        // Multi-factor sorting
        const scoreA = a.relevanceScore * 0.4 + a.recencyScore * 0.3 + a.qualityScore * 0.3;
        const scoreB = b.relevanceScore * 0.4 + b.recencyScore * 0.3 + b.qualityScore * 0.3;
        return scoreB - scoreA;
    }).slice(0, 15); // Increased final limit
}
/**
 * Create intelligent fallback search links
 * @param {Object} projectData - Project data object
 * @param {string} projectIdea - Original project idea
 * @returns {Promise<Array>} Array of fallback search links
 */ async function createFallbackSearchLinks(projectData, projectIdea) {
    console.log('Creating intelligent multi-language fallback search links');
    const fallbackQueries = await generateIntelligentSearchQueries(projectData, projectIdea);
    const currentYear = new Date().getFullYear();
    return fallbackQueries.slice(0, 6).map((queryObj)=>({
            title: `${queryObj.language === 'hi' ? '🇮🇳 Hindi' : '🇺🇸 English'}: ${queryObj.query}`,
            channel: "YouTube Search",
            url: `https://youtube.com/results?search_query=${encodeURIComponent(queryObj.query)}&sp=EgQIAhAB`,
            description: `Search for ${queryObj.language === 'hi' ? 'Hindi' : 'English'} tutorials: ${queryObj.query}`,
            thumbnail: null,
            publishedAt: new Date().toISOString(),
            viewCount: 0,
            duration: "Search Link",
            relevanceScore: 1,
            language: queryObj.language,
            isSearchLink: true,
            isRecent: true
        }));
}
// Keep existing helper functions
function analyzeProject(projectIdea, technologies) {
    const ideaLower = projectIdea.toLowerCase();
    const analysis = {
        projectType: 'generic',
        domains: [],
        complexity: 'beginner',
        advancedConcepts: [],
        targetAudience: 'general'
    };
    // Enhanced project type detection
    const projectTypes = {
        'e-commerce': [
            'shop',
            'store',
            'marketplace',
            'cart',
            'payment',
            'product',
            'ecommerce',
            'shopping'
        ],
        'social media': [
            'social',
            'chat',
            'messaging',
            'post',
            'feed',
            'friend',
            'social network'
        ],
        'blog': [
            'blog',
            'cms',
            'article',
            'content',
            'publishing',
            'news'
        ],
        'dashboard': [
            'dashboard',
            'admin',
            'analytics',
            'metrics',
            'reporting',
            'panel'
        ],
        'mobile app': [
            'mobile',
            'app',
            'ios',
            'android',
            'native',
            'flutter',
            'react native'
        ],
        'web app': [
            'web app',
            'webapp',
            'single page',
            'spa',
            'pwa'
        ],
        'api': [
            'api',
            'rest',
            'graphql',
            'backend',
            'service',
            'microservice'
        ],
        'ai app': [
            'ai',
            'ml',
            'machine learning',
            'neural',
            'chatbot',
            'nlp',
            'computer vision'
        ],
        'game': [
            'game',
            'gaming',
            'puzzle',
            'arcade',
            'unity',
            'godot'
        ],
        'portfolio': [
            'portfolio',
            'personal site',
            'resume',
            'cv'
        ],
        'landing page': [
            'landing',
            'marketing',
            'promotional',
            'business'
        ],
        'saas': [
            'saas',
            'subscription',
            'tenant',
            'cloud',
            'platform'
        ]
    };
    for (const [type, keywords] of Object.entries(projectTypes)){
        if (keywords.some((keyword)=>ideaLower.includes(keyword))) {
            analysis.projectType = type;
            break;
        }
    }
    // Enhanced complexity assessment
    const complexityIndicators = {
        advanced: [
            'microservice',
            'distributed',
            'scalable',
            'enterprise',
            'real-time',
            'machine learning',
            'blockchain',
            'kubernetes',
            'docker'
        ],
        intermediate: [
            'authentication',
            'database',
            'api',
            'testing',
            'deployment',
            'responsive',
            'state management'
        ],
        beginner: [
            'simple',
            'basic',
            'learning',
            'tutorial',
            'static',
            'html',
            'css'
        ]
    };
    for (const [level, indicators] of Object.entries(complexityIndicators)){
        if (indicators.some((indicator)=>ideaLower.includes(indicator))) {
            analysis.complexity = level;
            break;
        }
    }
    return analysis;
}
function getFrontendTech(technologies) {
    const frontendTechs = [
        'react',
        'vue',
        'angular',
        'svelte',
        'next.js',
        'nuxt',
        'html',
        'css',
        'javascript',
        'flutter',
        'react native'
    ];
    return technologies.find((tech)=>frontendTechs.some((ft)=>tech.toLowerCase().includes(ft.toLowerCase())));
}
function getBackendTech(technologies) {
    const backendTechs = [
        'node.js',
        'express',
        'django',
        'flask',
        'spring',
        'laravel',
        'ruby on rails',
        'fastapi',
        'nestjs',
        'koa'
    ];
    return technologies.find((tech)=>backendTechs.some((bt)=>tech.toLowerCase().includes(bt.toLowerCase())));
}
;
}}),
"[project]/app/api/generate-project/route.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// app/api/generate-project/route.js
__turbopack_context__.s({
    "GET": (()=>GET),
    "POST": (()=>POST)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$generate$2d$project$2f$youtube$2d$service$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/api/generate-project/youtube-service.js [app-route] (ecmascript)"); // Fixed import path
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
            // Use imported function from youtube-service.js
            youtubeResources = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$generate$2d$project$2f$youtube$2d$service$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fetchProjectRelevantVideos"])(projectData, projectIdea);
            console.log(`Successfully fetched ${youtubeResources.length} relevant YouTube videos`);
        } catch (youtubeError) {
            console.error('YouTube video fetching error:', youtubeError);
            youtubeResources = [];
        }
        // Fallback if no videos found - use imported function
        if (youtubeResources.length === 0) {
            console.log('No videos found, creating fallback search links...');
            youtubeResources = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$generate$2d$project$2f$youtube$2d$service$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createFallbackSearchLinks"])(projectData, projectIdea);
        }
        // Get tech stack for analysis
        const allTechnologies = [];
        if (projectData.techStack) {
            Object.values(projectData.techStack).forEach((techArray)=>{
                if (Array.isArray(techArray)) {
                    allTechnologies.push(...techArray);
                }
            });
        }
        // Enhanced response with metadata using imported functions
        const enhancedResponse = {
            ...projectData,
            youtubeResources,
            metadata: {
                model: 'gemini-2.0-flash-exp',
                timestamp: new Date().toISOString(),
                tokens_used: projectData.tokens_used || 'N/A',
                youtube_videos_found: youtubeResources.filter((v)=>!v.isSearchLink).length,
                search_queries_generated: (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$generate$2d$project$2f$youtube$2d$service$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateIntelligentSearchQueries"])(projectData, projectIdea)).length,
                project_analysis: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$generate$2d$project$2f$youtube$2d$service$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["analyzeProject"])(projectIdea, allTechnologies),
                total_resources: youtubeResources.length,
                language_distribution: {
                    english: youtubeResources.filter((v)=>v.language === 'en').length,
                    hindi: youtubeResources.filter((v)=>v.language === 'hi').length,
                    mixed: youtubeResources.filter((v)=>v.language === 'mixed').length
                }
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
        console.error('Raw content:', content);
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
async function GET() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        status: 'OK',
        message: 'Project Generation API is running',
        timestamp: new Date().toISOString(),
        features: [
            'Gemini AI Integration',
            'Intelligent YouTube Video Search',
            'Multi-language Support (English/Hindi)',
            'Advanced Project Analysis',
            'Technology Stack Recommendations'
        ]
    });
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__c30024d3._.js.map