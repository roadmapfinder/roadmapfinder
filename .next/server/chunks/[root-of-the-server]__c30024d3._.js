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
// Enhanced Multilingual YouTube API Integration Service
/**
 * Deep analysis of project idea using AI-like analysis
 * @param {string} projectIdea - The project idea description
 * @returns {Promise<Object>} Deep analysis object
 */ __turbopack_context__.s({
    "analyzeProject": (()=>analyzeProject),
    "calculateEnhancedRelevanceScore": (()=>calculateEnhancedRelevanceScore),
    "calculateQualityScore": (()=>calculateQualityScore),
    "createFallbackSearchLinks": (()=>createFallbackSearchLinks),
    "deepAnalyzeProjectIdea": (()=>deepAnalyzeProjectIdea),
    "detectVideoLanguage": (()=>detectVideoLanguage),
    "fetchProjectRelevantVideos": (()=>fetchProjectRelevantVideos),
    "fetchYouTubeVideos": (()=>fetchYouTubeVideos),
    "generateIntelligentSearchQueries": (()=>generateIntelligentSearchQueries)
});
async function deepAnalyzeProjectIdea(projectIdea) {
    const ideaLower = projectIdea.toLowerCase();
    // Advanced project categorization
    const projectTypes = {
        'e-commerce': {
            keywords: [
                'shop',
                'store',
                'marketplace',
                'cart',
                'payment',
                'product',
                'checkout',
                'inventory',
                'order'
            ],
            complexity: 'intermediate',
            estimatedDuration: '3-6 months',
            keyTechnologies: [
                'payment gateway',
                'database',
                'authentication',
                'cart management'
            ]
        },
        'social media': {
            keywords: [
                'social',
                'chat',
                'messaging',
                'post',
                'feed',
                'friend',
                'follow',
                'share',
                'comment'
            ],
            complexity: 'advanced',
            estimatedDuration: '6-12 months',
            keyTechnologies: [
                'real-time communication',
                'websockets',
                'notification system',
                'media handling'
            ]
        },
        'blog/cms': {
            keywords: [
                'blog',
                'cms',
                'article',
                'content',
                'publishing',
                'editor',
                'seo'
            ],
            complexity: 'intermediate',
            estimatedDuration: '2-4 months',
            keyTechnologies: [
                'rich text editor',
                'seo optimization',
                'content management'
            ]
        },
        'dashboard/analytics': {
            keywords: [
                'dashboard',
                'admin',
                'analytics',
                'metrics',
                'reporting',
                'chart',
                'graph',
                'data'
            ],
            complexity: 'intermediate',
            estimatedDuration: '2-5 months',
            keyTechnologies: [
                'data visualization',
                'charts',
                'real-time updates',
                'data processing'
            ]
        },
        'mobile app': {
            keywords: [
                'mobile',
                'app',
                'ios',
                'android',
                'native',
                'react native',
                'flutter'
            ],
            complexity: 'advanced',
            estimatedDuration: '4-8 months',
            keyTechnologies: [
                'mobile ui',
                'native features',
                'app store deployment'
            ]
        },
        'ai/ml application': {
            keywords: [
                'ai',
                'ml',
                'machine learning',
                'neural',
                'chatbot',
                'recommendation',
                'nlp',
                'computer vision'
            ],
            complexity: 'advanced',
            estimatedDuration: '4-10 months',
            keyTechnologies: [
                'tensorflow',
                'pytorch',
                'api integration',
                'model training'
            ]
        },
        'blockchain/web3': {
            keywords: [
                'blockchain',
                'crypto',
                'smart contract',
                'web3',
                'nft',
                'defi',
                'ethereum'
            ],
            complexity: 'advanced',
            estimatedDuration: '6-12 months',
            keyTechnologies: [
                'solidity',
                'web3.js',
                'metamask',
                'smart contracts'
            ]
        },
        'saas platform': {
            keywords: [
                'saas',
                'subscription',
                'multi-tenant',
                'billing',
                'enterprise',
                'platform'
            ],
            complexity: 'advanced',
            estimatedDuration: '8-18 months',
            keyTechnologies: [
                'multi-tenancy',
                'billing system',
                'scalable architecture'
            ]
        },
        'game': {
            keywords: [
                'game',
                'gaming',
                'puzzle',
                'arcade',
                'multiplayer',
                'unity',
                'godot'
            ],
            complexity: 'intermediate',
            estimatedDuration: '3-8 months',
            keyTechnologies: [
                'game engine',
                'physics',
                'graphics',
                'multiplayer networking'
            ]
        },
        'portfolio/landing': {
            keywords: [
                'portfolio',
                'personal site',
                'resume',
                'landing',
                'marketing',
                'showcase'
            ],
            complexity: 'beginner',
            estimatedDuration: '1-2 months',
            keyTechnologies: [
                'responsive design',
                'seo',
                'performance optimization'
            ]
        }
    };
    let detectedType = 'web application';
    let typeConfig = {
        complexity: 'intermediate',
        estimatedDuration: '3-6 months',
        keyTechnologies: [
            'frontend',
            'backend',
            'database'
        ]
    };
    // Find best matching project type
    for (const [type, config] of Object.entries(projectTypes)){
        const matchCount = config.keywords.filter((keyword)=>ideaLower.includes(keyword)).length;
        if (matchCount > 0) {
            detectedType = type;
            typeConfig = config;
            break;
        }
    }
    // Extract key features and requirements
    const featureExtraction = {
        authentication: [
            'login',
            'signup',
            'auth',
            'user',
            'account',
            'profile'
        ],
        payment: [
            'payment',
            'billing',
            'subscription',
            'checkout',
            'stripe',
            'paypal'
        ],
        realtime: [
            'realtime',
            'live',
            'chat',
            'notification',
            'websocket',
            'socket'
        ],
        search: [
            'search',
            'filter',
            'find',
            'query',
            'elasticsearch'
        ],
        upload: [
            'upload',
            'file',
            'image',
            'media',
            'document',
            'attachment'
        ],
        api: [
            'api',
            'rest',
            'graphql',
            'endpoint',
            'integration'
        ],
        admin: [
            'admin',
            'dashboard',
            'management',
            'control panel'
        ],
        mobile: [
            'mobile',
            'responsive',
            'app',
            'native',
            'pwa'
        ],
        seo: [
            'seo',
            'meta',
            'sitemap',
            'optimization',
            'google'
        ],
        analytics: [
            'analytics',
            'tracking',
            'metrics',
            'statistics',
            'data'
        ]
    };
    const detectedFeatures = [];
    for (const [feature, keywords] of Object.entries(featureExtraction)){
        if (keywords.some((keyword)=>ideaLower.includes(keyword))) {
            detectedFeatures.push(feature);
        }
    }
    // Detect target platforms
    const platformDetection = {
        web: [
            'website',
            'web app',
            'browser',
            'html',
            'css',
            'javascript'
        ],
        mobile: [
            'mobile app',
            'ios',
            'android',
            'react native',
            'flutter'
        ],
        desktop: [
            'desktop',
            'electron',
            'native app',
            'windows',
            'mac'
        ],
        api: [
            'api',
            'backend',
            'service',
            'microservice'
        ]
    };
    const targetPlatforms = [];
    for (const [platform, keywords] of Object.entries(platformDetection)){
        if (keywords.some((keyword)=>ideaLower.includes(keyword))) {
            targetPlatforms.push(platform);
        }
    }
    if (targetPlatforms.length === 0) {
        targetPlatforms.push('web'); // Default to web
    }
    // Advanced complexity analysis
    const complexityFactors = {
        beginner: [
            'simple',
            'basic',
            'learning',
            'tutorial',
            'static',
            'portfolio'
        ],
        intermediate: [
            'dynamic',
            'database',
            'auth',
            'api',
            'crud',
            'responsive'
        ],
        advanced: [
            'realtime',
            'microservice',
            'scalable',
            'enterprise',
            'ml',
            'blockchain',
            'distributed'
        ],
        expert: [
            'high-performance',
            'distributed system',
            'custom engine',
            'advanced ai',
            'complex algorithm'
        ]
    };
    let finalComplexity = typeConfig.complexity;
    for (const [level, indicators] of Object.entries(complexityFactors)){
        if (indicators.some((indicator)=>ideaLower.includes(indicator))) {
            finalComplexity = level;
        }
    }
    // Extract user requirements and constraints
    const userRequirements = {
        budget: extractBudgetInfo(projectIdea),
        timeline: extractTimelineInfo(projectIdea),
        scalability: ideaLower.includes('scalable') || ideaLower.includes('millions') || ideaLower.includes('enterprise'),
        performance: ideaLower.includes('fast') || ideaLower.includes('performance') || ideaLower.includes('speed'),
        security: ideaLower.includes('secure') || ideaLower.includes('security') || ideaLower.includes('privacy'),
        accessibility: ideaLower.includes('accessible') || ideaLower.includes('a11y') || ideaLower.includes('disability')
    };
    // Technology recommendations based on analysis
    const recommendedTechnologies = generateTechnologyRecommendations(detectedType, detectedFeatures, targetPlatforms, finalComplexity);
    return {
        projectType: detectedType,
        complexity: finalComplexity,
        estimatedDuration: typeConfig.estimatedDuration,
        keyFeatures: detectedFeatures,
        targetPlatforms: targetPlatforms,
        domains: identifyDomains(detectedFeatures, targetPlatforms),
        userRequirements: userRequirements,
        recommendedTechnologies: recommendedTechnologies,
        searchKeywords: generateSearchKeywords(detectedType, detectedFeatures, recommendedTechnologies),
        learningPath: generateLearningPath(finalComplexity, detectedFeatures)
    };
}
/**
 * Extract budget information from project description
 */ function extractBudgetInfo(projectIdea) {
    const ideaLower = projectIdea.toLowerCase();
    if (ideaLower.includes('free') || ideaLower.includes('no budget') || ideaLower.includes('open source')) {
        return 'minimal';
    } else if (ideaLower.includes('startup') || ideaLower.includes('mvp')) {
        return 'low';
    } else if (ideaLower.includes('enterprise') || ideaLower.includes('commercial')) {
        return 'high';
    }
    return 'moderate';
}
/**
 * Extract timeline information from project description
 */ function extractTimelineInfo(projectIdea) {
    const ideaLower = projectIdea.toLowerCase();
    if (ideaLower.includes('quickly') || ideaLower.includes('asap') || ideaLower.includes('urgent')) {
        return 'urgent';
    } else if (ideaLower.includes('long term') || ideaLower.includes('comprehensive')) {
        return 'extended';
    }
    return 'normal';
}
/**
 * Generate technology recommendations based on project analysis
 */ function generateTechnologyRecommendations(projectType, features, platforms, complexity) {
    const recommendations = {
        frontend: [],
        backend: [],
        database: [],
        tools: [],
        deployment: []
    };
    // Frontend recommendations
    if (platforms.includes('web')) {
        if (complexity === 'beginner') {
            recommendations.frontend = [
                'HTML',
                'CSS',
                'JavaScript',
                'Bootstrap'
            ];
        } else if (complexity === 'intermediate') {
            recommendations.frontend = [
                'React',
                'Next.js',
                'Tailwind CSS',
                'TypeScript'
            ];
        } else {
            recommendations.frontend = [
                'React',
                'Next.js',
                'TypeScript',
                'Tailwind CSS',
                'Redux Toolkit'
            ];
        }
    }
    if (platforms.includes('mobile')) {
        if (features.includes('realtime') || complexity === 'advanced') {
            recommendations.frontend.push('React Native', 'Expo');
        } else {
            recommendations.frontend.push('Flutter', 'React Native');
        }
    }
    // Backend recommendations
    if (projectType.includes('ai') || features.includes('ml')) {
        recommendations.backend = [
            'Python',
            'FastAPI',
            'TensorFlow',
            'PyTorch'
        ];
    } else if (complexity === 'advanced' || features.includes('realtime')) {
        recommendations.backend = [
            'Node.js',
            'Express',
            'Socket.io',
            'TypeScript'
        ];
    } else {
        recommendations.backend = [
            'Node.js',
            'Express',
            'TypeScript'
        ];
    }
    // Database recommendations
    if (features.includes('analytics') || projectType.includes('dashboard')) {
        recommendations.database = [
            'PostgreSQL',
            'MongoDB',
            'Redis'
        ];
    } else if (complexity === 'advanced' || features.includes('search')) {
        recommendations.database = [
            'PostgreSQL',
            'Redis',
            'Elasticsearch'
        ];
    } else {
        recommendations.database = [
            'PostgreSQL',
            'MongoDB'
        ];
    }
    return recommendations;
}
/**
 * Identify relevant domains based on features and platforms
 */ function identifyDomains(features, platforms) {
    const domains = [];
    if (platforms.includes('web')) domains.push('Web Development');
    if (platforms.includes('mobile')) domains.push('Mobile Development');
    if (features.includes('api')) domains.push('Backend Development');
    if (features.includes('analytics')) domains.push('Data Analysis');
    if (features.includes('ml') || features.includes('ai')) domains.push('Machine Learning');
    if (features.includes('payment')) domains.push('FinTech');
    if (features.includes('realtime')) domains.push('Real-time Systems');
    return domains.length > 0 ? domains : [
        'Web Development'
    ];
}
/**
 * Generate search keywords for better video discovery
 */ function generateSearchKeywords(projectType, features, technologies) {
    const keywords = [
        projectType
    ];
    keywords.push(...features);
    Object.values(technologies).flat().forEach((tech)=>{
        keywords.push(tech.toLowerCase());
    });
    return [
        ...new Set(keywords)
    ]; // Remove duplicates
}
/**
 * Generate learning path based on complexity and features
 */ function generateLearningPath(complexity, features) {
    const basePath = [
        'HTML/CSS Basics',
        'JavaScript Fundamentals'
    ];
    if (complexity === 'intermediate' || complexity === 'advanced') {
        basePath.push('Framework Learning', 'Database Concepts', 'API Development');
    }
    if (complexity === 'advanced') {
        basePath.push('Advanced Architecture', 'Testing', 'Deployment', 'Performance Optimization');
    }
    if (features.includes('auth')) basePath.push('Authentication & Security');
    if (features.includes('payment')) basePath.push('Payment Integration');
    if (features.includes('realtime')) basePath.push('WebSocket & Real-time Communication');
    return basePath;
}
/**
 * Enhanced YouTube API helper with multilingual support
 * @param {string} searchQuery - The search query string
 * @param {number} maxResults - Maximum number of results to fetch
 * @param {string} language - Language preference ('en', 'hi', 'auto')
 * @param {string} region - Region code for localized results
 * @returns {Promise<Array>} Array of video objects with language detection
 */ async function fetchYouTubeVideos(searchQuery, maxResults = 8, language = 'auto', region = 'IN') {
    try {
        if (!process.env.YOUTUBE_API_KEY) {
            console.warn('YOUTUBE_API_KEY not set, skipping video fetch');
            return [];
        }
        // Enhanced search parameters for better multilingual results
        const baseUrl = 'https://www.googleapis.com/youtube/v3/search';
        const searchParams = new URLSearchParams({
            part: 'snippet',
            q: searchQuery,
            type: 'video',
            maxResults: maxResults.toString(),
            order: 'relevance',
            publishedAfter: getDateOneYearAgo(),
            videoDuration: 'medium',
            videoDefinition: 'any',
            regionCode: region,
            relevanceLanguage: language === 'auto' ? undefined : language,
            key: process.env.YOUTUBE_API_KEY
        });
        // Remove undefined parameters
        Array.from(searchParams.entries()).forEach(([key, value])=>{
            if (value === undefined) searchParams.delete(key);
        });
        const searchUrl = `${baseUrl}?${searchParams.toString()}`;
        console.log('Fetching videos with query:', searchQuery, 'Language:', language);
        const response = await fetch(searchUrl);
        if (!response.ok) {
            const errorText = await response.text();
            console.error('YouTube API error:', response.status, errorText);
            if (response.status === 403) {
                console.error('YouTube API quota exceeded or access denied');
            }
            return [];
        }
        const data = await response.json();
        if (!data.items || data.items.length === 0) {
            console.log(`No videos found for query: ${searchQuery}`);
            return [];
        }
        // Get additional video details for better filtering
        const videoIds = data.items.map((item)=>item.id.videoId).join(',');
        const detailsUrl = new URL('https://www.googleapis.com/youtube/v3/videos');
        detailsUrl.searchParams.set('part', 'statistics,contentDetails,localizations');
        detailsUrl.searchParams.set('id', videoIds);
        detailsUrl.searchParams.set('key', process.env.YOUTUBE_API_KEY);
        const detailsResponse = await fetch(detailsUrl.toString());
        const detailsData = detailsResponse.ok ? await detailsResponse.json() : {
            items: []
        };
        // Process and enhance video data
        const processedVideos = data.items.map((item, index)=>{
            const details = detailsData.items?.[index];
            const viewCount = details?.statistics?.viewCount ? parseInt(details.statistics.viewCount) : 0;
            const likeCount = details?.statistics?.likeCount ? parseInt(details.statistics.likeCount) : 0;
            const duration = details?.contentDetails?.duration || 'Unknown';
            // Detect video language
            const detectedLanguage = detectVideoLanguage(item, details);
            // Calculate enhanced relevance score
            const relevanceScore = calculateEnhancedRelevanceScore(item, searchQuery, detectedLanguage, viewCount, likeCount);
            // Calculate quality score
            const qualityScore = calculateQualityScore(viewCount, likeCount, duration, item.snippet.publishedAt);
            return {
                title: item.snippet.title,
                channel: item.snippet.channelTitle,
                url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
                description: item.snippet.description.substring(0, 300) + '...',
                thumbnail: item.snippet.thumbnails.high?.url || item.snippet.thumbnails.medium?.url || item.snippet.thumbnails.default?.url,
                publishedAt: item.snippet.publishedAt,
                viewCount,
                likeCount,
                duration: formatDuration(duration),
                language: detectedLanguage,
                relevanceScore,
                qualityScore,
                overallScore: relevanceScore * 0.6 + qualityScore * 0.4,
                tags: extractVideoTags(item.snippet.title + ' ' + item.snippet.description),
                isRecent: isVideoRecent(item.snippet.publishedAt),
                channelReputation: getChannelReputation(item.snippet.channelTitle)
            };
        });
        // Enhanced filtering and sorting
        return processedVideos.filter((video)=>video.overallScore > 0.3) // Filter out very low quality videos
        .filter((video)=>video.viewCount > 500) // Minimum view count threshold
        .filter((video)=>!isVideoTooOld(video.publishedAt, 3)) // Not older than 3 years
        .sort((a, b)=>{
            // Priority sorting: Recent videos with high scores first
            if (a.isRecent !== b.isRecent) {
                return b.isRecent - a.isRecent;
            }
            return b.overallScore - a.overallScore;
        }).slice(0, maxResults);
    } catch (error) {
        console.error('YouTube API fetch error:', error);
        return [];
    }
}
/**
 * Detect video language based on title, description, and channel
 */ function detectVideoLanguage(item, details) {
    const title = item.snippet.title;
    const description = item.snippet.description;
    const channel = item.snippet.channelTitle;
    // Hindi language patterns
    const hindiPatterns = [
        /[\u0900-\u097F]/,
        /\b(mein|aur|kaise|kya|tutorial|sikhe|seekho|hindi|urdu)\b/i,
        /\b(बनाएं|सीखें|कैसे|क्या|ट्यूटोरियल)\b/
    ];
    // English patterns
    const englishPatterns = [
        /^[a-zA-Z0-9\s\-_.,!?()]+$/,
        /\b(tutorial|how to|learn|build|create|step by step|guide|course)\b/i
    ];
    const combinedText = `${title} ${description} ${channel}`.toLowerCase();
    // Check for Hindi patterns
    if (hindiPatterns.some((pattern)=>pattern.test(combinedText))) {
        return 'hi';
    }
    // Check for English patterns
    if (englishPatterns.some((pattern)=>pattern.test(combinedText))) {
        return 'en';
    }
    // Check channel names for language hints
    const hindiChannels = [
        'technical',
        'desi',
        'hindi',
        'bharti',
        'indian'
    ];
    if (hindiChannels.some((hint)=>channel.toLowerCase().includes(hint))) {
        return 'hi';
    }
    // Default to English
    return 'en';
}
/**
 * Enhanced relevance score calculation
 */ function calculateEnhancedRelevanceScore(video, searchQuery, language, viewCount, likeCount) {
    const queryTerms = searchQuery.toLowerCase().split(' ').filter((term)=>term.length > 2);
    const title = video.snippet.title.toLowerCase();
    const description = video.snippet.description.toLowerCase();
    const channel = video.snippet.channelTitle.toLowerCase();
    let score = 0;
    let maxPossibleScore = 0;
    // Title matching (highest weight)
    queryTerms.forEach((term)=>{
        maxPossibleScore += 2;
        if (title.includes(term)) {
            score += 2;
        } else if (title.includes(term.substring(0, Math.max(3, term.length - 2)))) {
            score += 1; // Partial match
        }
    });
    // Description matching (medium weight)
    queryTerms.forEach((term)=>{
        maxPossibleScore += 1;
        if (description.includes(term)) score += 1;
    });
    // Channel reputation (low weight)
    const educationalChannels = [
        'freecodecamp',
        'traversy',
        'net ninja',
        'programming with mosh',
        'academind',
        'codevolution',
        'web dev simplified',
        'coding train',
        'technical guruji',
        'code with harry',
        'apni kaksha',
        'physics wallah'
    ];
    educationalChannels.forEach((channelName)=>{
        if (channel.includes(channelName)) {
            score += 1;
            maxPossibleScore += 1;
        }
    });
    // Educational keywords bonus
    const educationalKeywords = [
        'tutorial',
        'course',
        'learn',
        'guide',
        'how to',
        'step by step',
        'complete',
        'full',
        'crash course',
        'beginners',
        'explained'
    ];
    let educationalBonus = 0;
    educationalKeywords.forEach((keyword)=>{
        if (title.includes(keyword) || description.includes(keyword)) {
            educationalBonus += 0.1;
        }
    });
    // Engagement bonus (based on like ratio)
    let engagementBonus = 0;
    if (viewCount > 0 && likeCount > 0) {
        const likeRatio = likeCount / viewCount;
        if (likeRatio > 0.01) engagementBonus = 0.2; // Good like ratio
        if (likeRatio > 0.02) engagementBonus = 0.3; // Excellent like ratio
    }
    // Normalize score
    const normalizedScore = maxPossibleScore > 0 ? score / maxPossibleScore : 0;
    return Math.min(normalizedScore + educationalBonus + engagementBonus, 1);
}
/**
 * Calculate quality score based on engagement metrics
 */ function calculateQualityScore(viewCount, likeCount, duration, publishedAt) {
    let score = 0;
    // View count scoring (normalized)
    if (viewCount > 1000) score += 0.2;
    if (viewCount > 10000) score += 0.2;
    if (viewCount > 100000) score += 0.1;
    // Like ratio scoring
    if (viewCount > 0 && likeCount > 0) {
        const likeRatio = likeCount / viewCount;
        if (likeRatio > 0.01) score += 0.2;
        if (likeRatio > 0.02) score += 0.1;
    }
    // Duration scoring (prefer medium-length videos)
    const durationMinutes = parseDurationToMinutes(duration);
    if (durationMinutes >= 5 && durationMinutes <= 60) score += 0.2;
    if (durationMinutes >= 10 && durationMinutes <= 30) score += 0.1;
    // Recency bonus
    if (isVideoRecent(publishedAt, 1)) score += 0.1; // Within last year
    return Math.min(score, 1);
}
/**
 * Extract relevant tags from video title and description
 */ function extractVideoTags(text) {
    const techKeywords = [
        'javascript',
        'react',
        'nodejs',
        'python',
        'html',
        'css',
        'api',
        'tutorial',
        'course',
        'guide',
        'beginners',
        'advanced',
        'project'
    ];
    const lowerText = text.toLowerCase();
    return techKeywords.filter((keyword)=>lowerText.includes(keyword));
}
/**
 * Check if video is recent (within specified years)
 */ function isVideoRecent(publishedAt, years = 2) {
    const videoDate = new Date(publishedAt);
    const cutoffDate = new Date();
    cutoffDate.setFullYear(cutoffDate.getFullYear() - years);
    return videoDate > cutoffDate;
}
/**
 * Check if video is too old
 */ function isVideoTooOld(publishedAt, years = 3) {
    const videoDate = new Date(publishedAt);
    const cutoffDate = new Date();
    cutoffDate.setFullYear(cutoffDate.getFullYear() - years);
    return videoDate < cutoffDate;
}
/**
 * Get channel reputation score
 */ function getChannelReputation(channelName) {
    const topChannels = [
        'freecodecamp',
        'traversy media',
        'the net ninja',
        'programming with mosh',
        'code with harry',
        'technical guruji',
        'apni kaksha'
    ];
    return topChannels.some((channel)=>channelName.toLowerCase().includes(channel.toLowerCase())) ? 1 : 0.5;
}
/**
 * Parse YouTube duration format to minutes
 */ function parseDurationToMinutes(duration) {
    if (!duration || duration === 'Unknown') return 0;
    // Parse ISO 8601 duration format (PT1H2M3S)
    const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
    if (!match) return 0;
    const hours = parseInt(match[1] || '0');
    const minutes = parseInt(match[2] || '0');
    const seconds = parseInt(match[3] || '0');
    return hours * 60 + minutes + seconds / 60;
}
/**
 * Format duration for display
 */ function formatDuration(duration) {
    const minutes = parseDurationToMinutes(duration);
    if (minutes < 1) return 'Short';
    if (minutes < 60) return `${Math.round(minutes)}m`;
    return `${Math.floor(minutes / 60)}h ${Math.round(minutes % 60)}m`;
}
/**
 * Get date one year ago for recent video filtering
 */ function getDateOneYearAgo() {
    const date = new Date();
    date.setFullYear(date.getFullYear() - 1);
    return date.toISOString();
}
/**
 * Advanced multilingual search query generation
 * @param {Object} projectData - Project data object
 * @param {string} projectIdea - Original project idea
 * @param {Object} projectAnalysis - Deep project analysis
 * @returns {Promise<Array>} Array of multilingual search queries
 */ async function generateIntelligentSearchQueries(projectData, projectIdea, projectAnalysis) {
    const queries = [];
    const technologies = [];
    // Extract technologies from project data
    if (projectData.techStack) {
        Object.values(projectData.techStack).forEach((techArray)=>{
            if (Array.isArray(techArray)) {
                technologies.push(...techArray.slice(0, 2)); // Top 2 from each category
            }
        });
    }
    // Add technologies from analysis
    if (projectAnalysis.recommendedTechnologies) {
        Object.values(projectAnalysis.recommendedTechnologies).forEach((techs)=>{
            technologies.push(...techs.slice(0, 2));
        });
    }
    // Remove duplicates and limit
    const uniqueTechs = [
        ...new Set(technologies)
    ].slice(0, 4);
    // Generate English queries
    const englishQueries = [
        // Project-specific queries
        `${projectAnalysis.projectType} tutorial ${uniqueTechs.slice(0, 2).join(' ')} 2024`,
        `build ${projectAnalysis.projectType} ${uniqueTechs[0]} complete guide`,
        `${uniqueTechs.slice(0, 2).join(' ')} ${projectAnalysis.projectType} step by step`,
        // Technology-focused queries
        `${uniqueTechs[0]} crash course beginners 2024`,
        `${uniqueTechs.slice(0, 2).join(' ')} full stack project`,
        // Feature-specific queries
        ...projectAnalysis.keyFeatures.slice(0, 2).map((feature)=>`${feature} implementation ${uniqueTechs[0]} tutorial`)
    ];
    // Generate Hindi queries
    const hindiQueries = [
        `${projectAnalysis.projectType} tutorial hindi ${uniqueTechs[0]}`,
        `${uniqueTechs[0]} सीखें hindi tutorial`,
        `web development hindi course ${uniqueTechs.slice(0, 2).join(' ')}`,
        `${projectAnalysis.projectType} banane ka tarika ${uniqueTechs[0]}`,
        `hindi tutorial ${uniqueTechs[0]} complete course`
    ];
    // Combine and prioritize queries
    const allQueries = [
        ...englishQueries.map((q)=>({
                query: q,
                language: 'en',
                priority: 'high'
            })),
        ...hindiQueries.map((q)=>({
                query: q,
                language: 'hi',
                priority: 'medium'
            }))
    ];
    // Sort by priority and return
    return allQueries.sort((a, b)=>{
        const priorities = {
            high: 3,
            medium: 2,
            low: 1
        };
        return priorities[b.priority] - priorities[a.priority];
    }).slice(0, 10); // Top 10 queries
}
/**
 * Enhanced video fetching with intelligent multilingual search
 * @param {Object} projectData - Project data object
 * @param {string} projectIdea - Original project idea
 * @param {Object} projectAnalysis - Deep project analysis
 * @returns {Promise<Array>} Array of relevant YouTube videos in multiple languages
 */ async function fetchProjectRelevantVideos(projectData, projectIdea, projectAnalysis) {
    console.log('Starting enhanced multilingual video search...');
    const searchQueries = await generateIntelligentSearchQueries(projectData, projectIdea, projectAnalysis);
    console.log('Generated search queries:', searchQueries.length);
    const videosByLanguage = {
        english: [],
        hindi: [],
        mixed: []
    };
    // Fetch videos for each query with language-specific handling
    for (const queryObj of searchQueries){
        try {
            const videos = await fetchYouTubeVideos(queryObj.query, 6, queryObj.language, 'IN' // India region for better Hindi content
            );
            if (videos.length > 0) {
                // Categorize by detected language
                videos.forEach((video)=>{
                    if (video.language === 'hi') {
                        videosByLanguage.hindi.push({
                            ...video,
                            searchQuery: queryObj.query
                        });
                    } else if (video.language === 'en') {
                        videosByLanguage.english.push({
                            ...video,
                            searchQuery: queryObj.query
                        });
                    } else {
                        videosByLanguage.mixed.push({
                            ...video,
                            searchQuery: queryObj.query
                        });
                    }
                });
            }
            // Rate limiting to avoid API quota issues
            await new Promise((resolve)=>setTimeout(resolve, 200));
        } catch (error) {
            console.error(`Error fetching videos for query "${queryObj.query}":`, error);
        }
    }
    // Intelligent combination of results
    let combinedVideos = [
        ...videosByLanguage.hindi.slice(0, 5),
        ...videosByLanguage.english.slice(0, 5),
        ...videosByLanguage.mixed.slice(0, 2) // Mixed language content
    ];
    // Remove duplicates based on video ID from URL
    const uniqueVideos = combinedVideos.filter((video, index, self)=>{
        const videoId = video.url.split('v=')[1]?.split('&')[0];
        return index === self.findIndex((v)=>{
            const vId = v.url.split('v=')[1]?.split('&')[0];
            return vId === videoId;
        });
    });
    // Final filtering and intelligent sorting
    const filteredVideos = uniqueVideos.filter((video)=>video.overallScore > 0.4) // Higher quality threshold
    .filter((video)=>video.viewCount > 1000) // Minimum engagement
    .filter((video)=>{
        // Filter out very generic or unrelated content
        const title = video.title.toLowerCase();
        const relevantKeywords = projectAnalysis.searchKeywords.slice(0, 5);
        return relevantKeywords.some((keyword)=>title.includes(keyword.toLowerCase()) || video.tags.includes(keyword.toLowerCase()));
    });
    // Smart sorting algorithm
    const sortedVideos = filteredVideos.sort((a, b)=>{
        // 1. Prioritize recent videos
        if (a.isRecent !== b.isRecent) {
            return b.isRecent - a.isRecent;
        }
        // 2. Prioritize by overall quality score
        if (Math.abs(a.overallScore - b.overallScore) > 0.1) {
            return b.overallScore - a.overallScore;
        }
        // 3. Balance languages (slight preference to Hindi for Indian users)
        if (a.language === 'hi' && b.language === 'en') return -1;
        if (a.language === 'en' && b.language === 'hi') return 1;
        // 4. Finally by view count
        return b.viewCount - a.viewCount;
    });
    console.log(`Final video selection: ${sortedVideos.length} videos`);
    console.log(`Hindi videos: ${sortedVideos.filter((v)=>v.language === 'hi').length}`);
    console.log(`English videos: ${sortedVideos.filter((v)=>v.language === 'en').length}`);
    return sortedVideos.slice(0, 12); // Return top 12 videos
}
/**
 * Enhanced fallback search links with multilingual support
 * @param {Object} projectData - Project data object
 * @param {string} projectIdea - Original project idea
 * @param {Object} projectAnalysis - Deep project analysis
 * @returns {Promise<Array>} Array of fallback search links
 */ async function createFallbackSearchLinks(projectData, projectIdea, projectAnalysis) {
    console.log('Creating enhanced multilingual fallback search links');
    const fallbackQueries = await generateIntelligentSearchQueries(projectData, projectIdea, projectAnalysis);
    const topQueries = fallbackQueries.slice(0, 4);
    return topQueries.map((queryObj, index)=>({
            title: `${queryObj.language === 'hi' ? '🇮🇳' : '🇺🇸'} Search: ${queryObj.query}`,
            channel: `YouTube Search (${queryObj.language.toUpperCase()})`,
            url: `https://youtube.com/results?search_query=${encodeURIComponent(queryObj.query)}`,
            description: `Click to search for ${queryObj.language === 'hi' ? 'Hindi' : 'English'} tutorials about: ${queryObj.query}`,
            thumbnail: null,
            publishedAt: new Date().toISOString(),
            viewCount: 0,
            likeCount: 0,
            duration: "Search",
            language: queryObj.language,
            relevanceScore: 1,
            qualityScore: 0.5,
            overallScore: 0.7,
            isSearchLink: true,
            priority: queryObj.priority
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
        console.log('Making request to Gemini API for enhanced project generation...');
        // Deep analysis of project idea before generation
        const projectAnalysis = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$generate$2d$project$2f$youtube$2d$service$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deepAnalyzeProjectIdea"])(projectIdea);
        console.log('Deep project analysis completed:', projectAnalysis);
        // Generate comprehensive project data using enhanced Gemini AI
        const projectData = await generateProjectWithGemini(projectIdea, projectAnalysis);
        // **ENHANCED MULTILINGUAL YOUTUBE VIDEO FETCHING**
        console.log('Starting enhanced multilingual YouTube video analysis and fetching...');
        let youtubeResources = [];
        try {
            youtubeResources = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$generate$2d$project$2f$youtube$2d$service$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fetchProjectRelevantVideos"])(projectData, projectIdea, projectAnalysis);
            console.log(`Successfully fetched ${youtubeResources.length} relevant YouTube videos in multiple languages`);
        } catch (youtubeError) {
            console.error('YouTube video fetching error:', youtubeError);
            youtubeResources = [];
        }
        // Enhanced fallback with better search links
        if (youtubeResources.length === 0) {
            youtubeResources = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$generate$2d$project$2f$youtube$2d$service$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createFallbackSearchLinks"])(projectData, projectIdea, projectAnalysis);
        }
        // Enhanced response with comprehensive metadata
        const enhancedResponse = {
            ...projectData,
            youtubeResources,
            projectAnalysis,
            metadata: {
                model: 'gemini-2.0-flash-exp',
                timestamp: new Date().toISOString(),
                tokens_used: projectData.tokens_used || 'N/A',
                youtube_videos_found: youtubeResources.filter((v)=>!v.isSearchLink).length,
                hindi_videos_count: youtubeResources.filter((v)=>v.language === 'hi').length,
                english_videos_count: youtubeResources.filter((v)=>v.language === 'en').length,
                search_queries_generated: (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$generate$2d$project$2f$youtube$2d$service$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateIntelligentSearchQueries"])(projectData, projectIdea, projectAnalysis)).length,
                project_complexity: projectAnalysis.complexity,
                project_domains: projectAnalysis.domains,
                estimated_duration: projectAnalysis.estimatedDuration
            }
        };
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(enhancedResponse);
    } catch (error) {
        console.error('Enhanced project generation API error:', error);
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
 * Enhanced project generation with deeper analysis using Gemini AI
 * @param {string} projectIdea - The project idea description
 * @param {Object} projectAnalysis - Deep analysis of the project
 * @returns {Promise<Object>} The generated project data
 */ async function generateProjectWithGemini(projectIdea, projectAnalysis) {
    const prompt = `
You are an expert full-stack software architect, AI consultant, and technical project planner with deep knowledge of modern development practices across all major programming languages and frameworks.

User's Project Idea:
"${projectIdea}"

Deep Project Analysis:
- Project Type: ${projectAnalysis.projectType}
- Domains: ${projectAnalysis.domains.join(', ')}
- Complexity: ${projectAnalysis.complexity}
- Estimated Duration: ${projectAnalysis.estimatedDuration}
- Key Features: ${projectAnalysis.keyFeatures.join(', ')}
- Target Platforms: ${projectAnalysis.targetPlatforms.join(', ')}
- User Requirements: ${JSON.stringify(projectAnalysis.userRequirements)}

Based on this comprehensive analysis, create an extremely detailed, production-ready project breakdown that considers:

1. **Technology Stack Optimization**: Choose the most suitable and modern tech stack based on project requirements
2. **Scalability Considerations**: Design for future growth and maintainability
3. **Best Practices**: Include industry-standard practices, security, testing, and deployment
4. **Performance Optimization**: Consider caching, optimization, and efficiency
5. **User Experience**: Focus on usability and accessibility
6. **Development Workflow**: Include proper development, staging, and production environments

⚠️ Enhanced Requirements:

- Support ALL modern tech stacks with justification for choices
- Include comprehensive security implementations
- Provide detailed testing strategies (unit, integration, e2e)
- Add performance monitoring and optimization steps
- Include internationalization if applicable
- Provide detailed deployment strategies
- Add comprehensive error handling and logging
- Include database design and optimization
- Provide API documentation standards
- Add CI/CD pipeline configurations

**ULTRA-DETAILED ROADMAP REQUIREMENTS:**
- Each phase should include exact terminal commands with explanations
- Provide complete code snippets with comments
- Include detailed file structures with explanations
- Add precise time estimates with difficulty levels
- Include comprehensive prerequisites and setup instructions
- Provide extensive troubleshooting guides
- Add validation steps for each phase
- Include performance benchmarks and optimization tips
- Add security checkpoints and best practices
- Include testing commands and quality assurance steps

Return ONLY a valid JSON object with this enhanced structure:

{
  "projectOverview": {
    "name": "Enhanced Project Name",
    "description": "Detailed project description with scope and objectives",
    "version": "1.0.0",
    "license": "MIT",
    "author": "Generated by AI Assistant",
    "keywords": ["keyword1", "keyword2"],
    "estimatedCost": "Free / $X per month",
    "targetAudience": "Description of target users",
    "marketAnalysis": "Brief market analysis and competitive landscape"
  },
  "mindMap": {
    "name": "Project Architecture",
    "children": [
      {
        "name": "Frontend Layer",
        "children": [
          { "name": "User Interface", "description": "Component-based architecture" },
          { "name": "State Management", "description": "Global state handling" },
          { "name": "Routing", "description": "Navigation and page management" },
          { "name": "API Integration", "description": "Backend communication layer" }
        ]
      },
      {
        "name": "Backend Layer",
        "children": [
          { "name": "API Gateway", "description": "Request routing and validation" },
          { "name": "Business Logic", "description": "Core application logic" },
          { "name": "Database Layer", "description": "Data persistence and management" },
          { "name": "Authentication", "description": "User security and authorization" }
        ]
      },
      {
        "name": "Infrastructure",
        "children": [
          { "name": "Deployment", "description": "Cloud hosting and CI/CD" },
          { "name": "Monitoring", "description": "Performance and error tracking" },
          { "name": "Security", "description": "Data protection and compliance" },
          { "name": "Scaling", "description": "Load balancing and optimization" }
        ]
      }
    ]
  },
  "roadmap": [
    {
      "phase": "Phase 1: Project Foundation & Environment Setup",
      "description": "Establish development environment, project structure, and core dependencies",
      "duration": "4-8 hours",
      "difficulty": "Beginner to Intermediate",
      "prerequisites": ["Node.js v18+ or Python 3.9+", "Git", "VS Code or preferred IDE", "Package manager (npm/yarn/pip)"],
      "learningObjectives": ["Understanding project structure", "Development environment setup", "Version control basics"],
      "steps": [
        {
          "title": "Development Environment Setup",
          "description": "Configure your local development environment with all necessary tools",
          "type": "setup",
          "estimatedTime": "30-60 minutes",
          "commands": [
            {
              "command": "node --version && npm --version",
              "description": "Verify Node.js and npm installation",
              "expected_output": "v18.x.x or higher"
            },
            {
              "command": "git --version",
              "description": "Verify Git installation",
              "expected_output": "git version 2.x.x"
            }
          ],
          "files_to_create": [
            {
              "path": ".gitignore",
              "content": "node_modules/\\n.env\\n.env.local\\ndist/\\nbuild/\\n*.log",
              "description": "Git ignore file for common artifacts"
            }
          ]
        },
        {
          "title": "Project Initialization",
          "description": "Create project directory and initialize with proper configuration",
          "type": "terminal",
          "estimatedTime": "15-30 minutes",
          "commands": [
            {
              "command": "mkdir enhanced-project && cd enhanced-project",
              "description": "Create and navigate to project directory"
            },
            {
              "command": "npm init -y",
              "description": "Initialize package.json with default settings"
            },
            {
              "command": "git init",
              "description": "Initialize Git repository"
            }
          ],
          "configuration": [
            {
              "file": "package.json",
              "updates": {
                "scripts": {
                  "dev": "next dev",
                  "build": "next build",
                  "start": "next start",
                  "lint": "eslint . --ext .js,.jsx,.ts,.tsx",
                  "test": "jest",
                  "test:watch": "jest --watch"
                }
              }
            }
          ]
        }
      ],
      "troubleshooting": [
        {
          "issue": "Node.js version compatibility",
          "solution": "Use nvm (Node Version Manager) to switch to correct version: nvm install 18 && nvm use 18"
        },
        {
          "issue": "Permission errors during npm install",
          "solution": "Configure npm to use different directory: npm config set prefix ~/.npm-global"
        }
      ],
      "validation": [
        {
          "check": "Project structure created",
          "command": "ls -la",
          "expected": "package.json, .git folder, node_modules"
        },
        {
          "check": "Development server starts",
          "command": "npm run dev",
          "expected": "Server running on localhost:3000"
        }
      ],
      "security_notes": [
        "Never commit .env files to version control",
        "Use environment variables for sensitive configuration"
      ]
    }
  ],
  "techStack": {
    "frontend": {
      "primary": ["React 18", "Next.js 14"],
      "styling": ["Tailwind CSS", "Styled Components"],
      "state": ["Zustand", "React Query"],
      "testing": ["Jest", "React Testing Library"]
    },
    "backend": {
      "runtime": ["Node.js", "Express.js"],
      "database": ["PostgreSQL", "Redis"],
      "orm": ["Prisma", "TypeORM"],
      "testing": ["Supertest", "Jest"]
    },
    "devops": {
      "containerization": ["Docker", "Docker Compose"],
      "ci_cd": ["GitHub Actions", "GitLab CI"],
      "deployment": ["Vercel", "AWS", "Railway"],
      "monitoring": ["Sentry", "LogRocket"]
    },
    "tools": {
      "development": ["VS Code", "Postman", "Figma"],
      "version_control": ["Git", "GitHub"],
      "project_management": ["Linear", "Notion"]
    }
  },
  "architecture": {
    "pattern": "Microservices / Monolith",
    "database_design": "Normalized relational with caching layer",
    "api_design": "RESTful with GraphQL consideration",
    "authentication": "JWT with refresh tokens",
    "caching_strategy": "Redis for session, CDN for static assets",
    "security_measures": ["Input validation", "Rate limiting", "CORS", "Helmet.js"]
  },
  "packages": {
    "npm": [
      {
        "name": "next",
        "version": "^14.0.0",
        "purpose": "React framework for production"
      },
      {
        "name": "@prisma/client",
        "version": "^5.0.0",
        "purpose": "Type-safe database client"
      }
    ],
    "dev_dependencies": [
      {
        "name": "eslint",
        "version": "^8.0.0",
        "purpose": "Code linting and quality"
      }
    ],
    "python": [],
    "tools": ["VS Code", "Postman", "Figma", "Git", "Docker"]
  },
  "database_schema": {
    "tables": [
      {
        "name": "users",
        "columns": ["id", "email", "password_hash", "created_at", "updated_at"],
        "relationships": ["one-to-many with posts"]
      }
    ],
    "indexes": ["email_unique", "created_at_btree"],
    "migrations": ["Initial schema", "Add user profiles"]
  },
  "api_endpoints": [
    {
      "method": "POST",
      "path": "/api/auth/login",
      "description": "User authentication",
      "parameters": ["email", "password"],
      "response": "JWT token and user data"
    }
  ],
  "testing_strategy": {
    "unit_tests": "Jest for business logic",
    "integration_tests": "Supertest for API endpoints",
    "e2e_tests": "Playwright for user workflows",
    "coverage_target": "80%+"
  },
  "deployment": {
    "development": {
      "environment": "Local development server",
      "database": "Local PostgreSQL instance",
      "commands": ["npm run dev"]
    },
    "staging": {
      "environment": "Staging server for testing",
      "database": "Staging database",
      "url": "https://staging.yourapp.com"
    },
    "production": {
      "environment": "Production server",
      "database": "Production database with backups",
      "url": "https://yourapp.com",
      "monitoring": "Full observability stack"
    }
  },
  "documentation": [
    {
      "title": "API Documentation",
      "url": "https://docs.yourapi.com",
      "description": "Complete API reference with examples"
    },
    {
      "title": "Developer Guide",
      "url": "https://github.com/yourrepo/wiki",
      "description": "Setup and development guidelines"
    }
  ],
  "quickStart": {
    "description": "Get your project running in under 10 minutes",
    "commands": [
      "git clone <repository-url>",
      "npm install",
      "cp .env.example .env",
      "npm run db:migrate",
      "npm run dev"
    ],
    "notes": [
      "Update environment variables in .env file",
      "Run database migrations before starting",
      "Visit http://localhost:3000 to see your project",
      "Check the logs for any startup errors"
    ],
    "first_time_setup": [
      "Create accounts for third-party services (if needed)",
      "Configure environment variables",
      "Set up database connections",
      "Run initial data seeds"
    ]
  },
  "performance_optimization": {
    "frontend": ["Code splitting", "Image optimization", "Lazy loading"],
    "backend": ["Database indexing", "Query optimization", "Caching"],
    "deployment": ["CDN", "Compression", "Minification"]
  },
  "security_checklist": [
    "Environment variables secured",
    "Input validation implemented",
    "Rate limiting configured",
    "HTTPS enforced",
    "Security headers added"
  ],
  "monitoring_and_analytics": {
    "error_tracking": "Sentry for error monitoring",
    "performance": "Web Vitals and custom metrics",
    "user_analytics": "Privacy-compliant analytics",
    "uptime_monitoring": "Health check endpoints"
  }
}`;
    // Enhanced Gemini API request configuration
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
            temperature: 0.3,
            topK: 40,
            topP: 0.8,
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
    // Make request to Gemini API with retry logic
    let response;
    let attempts = 0;
    const maxAttempts = 3;
    while(attempts < maxAttempts){
        try {
            response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${process.env.GEMINI_API_KEY}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestBody)
            });
            if (response.ok) break;
            attempts++;
            if (attempts < maxAttempts) {
                console.log(`Attempt ${attempts} failed, retrying...`);
                await new Promise((resolve)=>setTimeout(resolve, 1000 * attempts));
            }
        } catch (error) {
            attempts++;
            if (attempts >= maxAttempts) throw error;
            await new Promise((resolve)=>setTimeout(resolve, 1000 * attempts));
        }
    }
    // Handle API response errors with detailed feedback
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
        throw new Error(`Failed to connect to Gemini API: ${response.status}`);
    }
    const data = await response.json();
    console.log('Enhanced Gemini API response received');
    if (!data.candidates || data.candidates.length === 0) {
        throw new Error('No response from AI model');
    }
    const content = data.candidates[0].content.parts[0].text;
    // Enhanced JSON extraction with better error handling
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
        console.error('Raw response:', content);
        throw new Error('Invalid response format from AI service');
    }
    let projectData;
    try {
        // Clean up common JSON formatting issues
        let cleanedJson = jsonMatch[0].replace(/,(\s*[}\]])/g, '$1') // Remove trailing commas
        .replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g, '"$2":'); // Ensure proper key quoting
        projectData = JSON.parse(cleanedJson);
    } catch (parseError) {
        console.error('JSON parsing error:', parseError);
        console.error('Attempted to parse:', jsonMatch[0]);
        throw new Error('Failed to parse AI response - invalid JSON format');
    }
    // Enhanced validation with detailed fallbacks
    const requiredFields = [
        'projectOverview',
        'mindMap',
        'roadmap',
        'techStack',
        'packages',
        'documentation'
    ];
    for (const field of requiredFields){
        if (!projectData[field]) {
            console.warn(`Missing required field: ${field}, using default`);
            projectData[field] = getDefaultValue(field);
        }
    }
    // Add comprehensive metadata
    projectData.tokens_used = data.usageMetadata?.totalTokenCount || 'N/A';
    projectData.generation_timestamp = new Date().toISOString();
    projectData.model_version = 'gemini-2.0-flash-exp';
    return projectData;
}
/**
 * Enhanced helper function for default values with better structure
 * @param {string} field - The field name
 * @returns {*} Default value for the field
 */ function getDefaultValue(field) {
    const defaults = {
        projectOverview: {
            name: "Generated Project",
            description: "A modern web application",
            version: "1.0.0",
            license: "MIT",
            keywords: [
                "web",
                "development"
            ],
            estimatedCost: "Free to start",
            targetAudience: "General users"
        },
        mindMap: {
            name: "Project Architecture",
            children: [
                {
                    name: "Frontend",
                    children: [
                        {
                            name: "User Interface"
                        },
                        {
                            name: "State Management"
                        }
                    ]
                },
                {
                    name: "Backend",
                    children: [
                        {
                            name: "API Layer"
                        },
                        {
                            name: "Database"
                        }
                    ]
                }
            ]
        },
        roadmap: [
            {
                phase: "Phase 1: Setup",
                description: "Initial project setup",
                duration: "2-4 hours",
                difficulty: "Beginner",
                steps: []
            }
        ],
        techStack: {
            frontend: [
                "React",
                "Next.js"
            ],
            backend: [
                "Node.js"
            ],
            database: [
                "PostgreSQL"
            ],
            deployment: [
                "Vercel"
            ]
        },
        packages: {
            npm: [
                "next",
                "react",
                "react-dom"
            ],
            tools: [
                "VS Code",
                "Git"
            ]
        },
        documentation: [
            {
                title: "Getting Started",
                url: "#",
                description: "Basic setup guide"
            }
        ],
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