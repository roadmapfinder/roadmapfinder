module.exports = {

"[project]/.next-internal/server/app/api/search-resources/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

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
"[project]/app/api/search-resources/route.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// app/api/search-resources/route.js
__turbopack_context__.s({
    "GET": (()=>GET),
    "POST": (()=>POST)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@google/generative-ai/dist/index.mjs [app-route] (ecmascript)");
;
;
// ==================== CONFIGURATION ====================
const CONFIG = {
    GEMINI_MODEL: 'gemini-2.0-flash-exp',
    MAX_SEARCH_RESULTS: 30,
    MIN_VIDEO_DURATION: 5,
    SEARCH_TIMEOUT: 15000,
    AI_TIMEOUT: 10000,
    CACHE_TTL: 3600
};
const TECH_DOMAINS = {
    programming: [
        'javascript',
        'python',
        'java',
        'c++',
        'c#',
        'go',
        'rust',
        'typescript',
        'php',
        'ruby',
        'swift',
        'kotlin'
    ],
    webDev: [
        'react',
        'vue',
        'angular',
        'next.js',
        'node.js',
        'express',
        'nestjs',
        'html',
        'css',
        'tailwind',
        'bootstrap'
    ],
    mobile: [
        'react native',
        'flutter',
        'android',
        'ios',
        'swift',
        'kotlin',
        'xamarin'
    ],
    backend: [
        'django',
        'flask',
        'spring boot',
        'laravel',
        'fastapi',
        'graphql',
        'rest api',
        'microservices'
    ],
    database: [
        'mongodb',
        'postgresql',
        'mysql',
        'redis',
        'firebase',
        'supabase',
        'sql',
        'nosql'
    ],
    devops: [
        'docker',
        'kubernetes',
        'aws',
        'azure',
        'gcp',
        'ci/cd',
        'jenkins',
        'terraform'
    ],
    design: [
        'figma',
        'adobe xd',
        'ui/ux',
        'user experience',
        'user interface',
        'design system',
        'prototyping'
    ],
    dataScience: [
        'machine learning',
        'deep learning',
        'tensorflow',
        'pytorch',
        'pandas',
        'numpy',
        'data analysis'
    ],
    other: [
        'git',
        'github',
        'testing',
        'agile',
        'algorithms',
        'data structures',
        'system design'
    ]
};
// Initialize AI
const genAI = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GoogleGenerativeAI"](process.env.GEMINI_API_KEY);
const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
const YOUTUBE_SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search';
const YOUTUBE_VIDEOS_URL = 'https://www.googleapis.com/youtube/v3/videos';
// ==================== UTILITY FUNCTIONS ====================
/**
 * Validates environment variables
 */ function validateEnvironment() {
    if (!YOUTUBE_API_KEY || !process.env.GEMINI_API_KEY) {
        throw new Error('Missing required API keys: YOUTUBE_API_KEY or GEMINI_API_KEY');
    }
}
/**
 * Creates a timeout promise for API calls
 */ function withTimeout(promise, timeoutMs, errorMessage = 'Operation timed out') {
    return Promise.race([
        promise,
        new Promise((_, reject)=>setTimeout(()=>reject(new Error(errorMessage)), timeoutMs))
    ]);
}
/**
 * Retry logic with exponential backoff
 */ async function retryWithBackoff(fn, maxRetries = 3, baseDelay = 1000) {
    for(let i = 0; i < maxRetries; i++){
        try {
            return await fn();
        } catch (error) {
            if (i === maxRetries - 1) throw error;
            const delay = baseDelay * Math.pow(2, i);
            console.log(`⚠️ Retry ${i + 1}/${maxRetries} after ${delay}ms:`, error.message);
            await new Promise((resolve)=>setTimeout(resolve, delay));
        }
    }
}
/**
 * Parse ISO 8601 duration to minutes
 */ function parseDuration(duration) {
    const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
    if (!match) return 0;
    const hours = parseInt(match[1] || 0);
    const minutes = parseInt(match[2] || 0);
    const seconds = parseInt(match[3] || 0);
    return hours * 60 + minutes + seconds / 60;
}
/**
 * Format duration for display
 */ function formatDuration(minutes) {
    const hours = Math.floor(minutes / 60);
    const mins = Math.round(minutes % 60);
    if (hours > 0) return `${hours}h ${mins}m`;
    return `${mins}m`;
}
/**
 * Sanitize user input
 */ function sanitizeQuery(query) {
    return query.trim().replace(/[<>{}]/g, '') // Remove potentially harmful characters
    .substring(0, 200); // Limit length
}
/**
 * Detect tech domain from query
 */ function detectTechDomain(query) {
    const lowerQuery = query.toLowerCase();
    for (const [domain, keywords] of Object.entries(TECH_DOMAINS)){
        if (keywords.some((keyword)=>lowerQuery.includes(keyword))) {
            return domain;
        }
    }
    return 'general';
}
// ==================== AI ANALYSIS ====================
/**
 * Deep query analysis with expert tech understanding
 */ async function analyzeQueryIntent(query, language, preferLatest) {
    try {
        const model = genAI.getGenerativeModel({
            model: CONFIG.GEMINI_MODEL,
            generationConfig: {
                maxOutputTokens: 300,
                temperature: 0.2
            }
        });
        const techDomain = detectTechDomain(query);
        const relevantTech = TECH_DOMAINS[techDomain]?.join(', ') || 'general technology';
        const prompt = `You are an expert tech educator and course curator specializing in programming, software development, UI/UX design, and all tech domains.

ANALYZE THIS LEARNING QUERY:
User Query: "${query}"
Language Preference: ${language === 'hindi' ? 'Hindi/Hinglish (Indian learners)' : 'English'}
Recency Preference: ${preferLatest ? 'YES - Must prioritize 2023-2025 content' : 'NO - Quality matters more than date'}
Detected Domain: ${techDomain}
Related Technologies: ${relevantTech}

YOUR TASK - Extract precise learning intent:

1. CORE TOPIC/TECHNOLOGY:
   - What EXACT technology, language, framework, or tool they want to learn
   - Identify specific versions if mentioned (e.g., React 18, Python 3.12, Next.js 14)
   - Recognize abbreviations and common variations

2. SKILL LEVEL (be precise):
   - Beginner: Complete newcomer, needs fundamentals
   - Intermediate: Knows basics, wants to go deeper
   - Advanced: Experienced, seeking mastery or specialization
   - DEFAULT to Beginner if unclear

3. LEARNING FORMAT:
   - Full Course: Comprehensive A-Z coverage (preferred for most queries)
   - Tutorial Series: Structured multi-part lessons
   - Crash Course: Quick intensive overview
   - Project-Based: Learn by building
   - Specific Topic: Focused on one concept

4. TECH STACK CONTEXT:
   - Frontend/Backend/Full Stack/Mobile/Design/DevOps/Data Science
   - Related technologies they might need
   - Industry standards for this technology

5. LEARNER CONTEXT (infer intelligently):
   - Career switch? Job preparation? Academic? Hobby? Freelancing?
   - Time sensitivity? Interview prep? Project deadline?

GENERATE 3 STRATEGIC YOUTUBE SEARCH QUERIES:

PRIMARY QUERY (Most Specific):
- Target the EXACT technology + comprehensive format
- Include year if preferLatest=true (2024, 2025)
- Add language if hindi
- Use professional educational keywords
- Example: "React 18 complete course tutorial 2024" or "Next.js 14 full stack hindi"

SECONDARY QUERY (Broader but Focused):
- Remove year, keep technology specific
- Add variations like "bootcamp", "masterclass", "zero to hero"
- Example: "React complete tutorial" or "Next.js full course"

FALLBACK QUERY (Safest):
- Core technology + basic educational keywords
- Guaranteed to return results
- Example: "React tutorial" or "Next.js basics"

CRITICAL RULES:
- If query mentions "latest" or specific year → MUST include 2024/2025 in PRIMARY
- For programming languages → include "complete course" or "full tutorial"
- For frameworks → include framework name + "course" or "tutorial"
- For UI/UX → include "UI UX design complete course"
- For hindi → include "hindi" in ALL queries
- Be very specific with technology names (React NOT javascript, Python NOT programming)

FORMAT YOUR RESPONSE EXACTLY AS:
TOPIC: [exact technology/skill name]
LEVEL: [beginner/intermediate/advanced]
FORMAT: [full course/tutorial series/crash course/project-based/specific topic]
TECH_STACK: [frontend/backend/fullstack/mobile/design/devops/data/other]
VERSION: [specific version if any, else "latest"]
CONTEXT: [career/academic/project/hobby/interview]
PRIMARY: [most specific search query]
SECONDARY: [broader search query]
FALLBACK: [safest search query]

Be extremely precise and tech-savvy. Think like a senior developer recommending resources to a junior.`;
        const result = await withTimeout(model.generateContent(prompt), CONFIG.AI_TIMEOUT, 'Query analysis timed out');
        const response = await result.response;
        const analysisText = response.text().trim();
        // Parse structured response
        const analysis = {
            topic: analysisText.match(/TOPIC:\s*(.+)/i)?.[1]?.trim() || query,
            level: analysisText.match(/LEVEL:\s*(.+)/i)?.[1]?.trim()?.toLowerCase() || 'beginner',
            format: analysisText.match(/FORMAT:\s*(.+)/i)?.[1]?.trim() || 'full course',
            techStack: analysisText.match(/TECH_STACK:\s*(.+)/i)?.[1]?.trim() || 'general',
            version: analysisText.match(/VERSION:\s*(.+)/i)?.[1]?.trim() || 'latest',
            context: analysisText.match(/CONTEXT:\s*(.+)/i)?.[1]?.trim() || 'learning',
            primaryQuery: analysisText.match(/PRIMARY:\s*(.+)/i)?.[1]?.trim(),
            secondaryQuery: analysisText.match(/SECONDARY:\s*(.+)/i)?.[1]?.trim(),
            fallbackQuery: analysisText.match(/FALLBACK:\s*(.+)/i)?.[1]?.trim()
        };
        console.log(`🧠 AI Analysis:`);
        console.log(`   Topic: ${analysis.topic}`);
        console.log(`   Level: ${analysis.level}`);
        console.log(`   Format: ${analysis.format}`);
        console.log(`   Stack: ${analysis.techStack}`);
        console.log(`   Version: ${analysis.version}`);
        return analysis;
    } catch (error) {
        console.error('⚠️ AI analysis failed:', error.message);
        // Intelligent fallback with tech-aware defaults
        const cleanQuery = query.toLowerCase().trim();
        const domain = detectTechDomain(query);
        const yearSuffix = preferLatest ? '2024' : '';
        const langSuffix = language === 'hindi' ? 'hindi' : '';
        return {
            topic: query,
            level: 'beginner',
            format: 'full course',
            techStack: domain,
            version: 'latest',
            context: 'learning',
            primaryQuery: `${cleanQuery} complete course tutorial ${yearSuffix} ${langSuffix}`.trim(),
            secondaryQuery: `${cleanQuery} full tutorial ${langSuffix}`.trim(),
            fallbackQuery: `${cleanQuery} ${langSuffix}`.trim()
        };
    }
}
// ==================== YOUTUBE SEARCH ====================
/**
 * Execute YouTube search with optimized parameters
 */ async function executeYouTubeSearch(searchQuery, language, preferLatest, videoDuration = 'medium') {
    try {
        console.log(`   🔍 Searching: "${searchQuery}"`);
        const searchParams = new URLSearchParams({
            part: 'snippet',
            q: searchQuery,
            type: 'video',
            maxResults: CONFIG.MAX_SEARCH_RESULTS,
            order: preferLatest ? 'date' : 'relevance',
            videoDuration: videoDuration,
            videoDefinition: 'any',
            videoCategoryId: '27',
            relevanceLanguage: language === 'hindi' ? 'hi' : 'en',
            safeSearch: 'strict',
            key: YOUTUBE_API_KEY
        });
        const searchResponse = await fetch(`${YOUTUBE_SEARCH_URL}?${searchParams}`, {
            signal: AbortSignal.timeout(CONFIG.SEARCH_TIMEOUT),
            headers: {
                'Accept': 'application/json'
            }
        });
        if (!searchResponse.ok) {
            const errorData = await searchResponse.json().catch(()=>({}));
            console.error('❌ YouTube API Error:', errorData);
            if (searchResponse.status === 403) {
                throw new Error('YouTube API quota exceeded or invalid API key');
            }
            return null;
        }
        const searchData = await searchResponse.json();
        if (!searchData.items?.length) {
            console.log('   ⚠️ No results found');
            return null;
        }
        console.log(`   ✓ Found ${searchData.items.length} videos`);
        // Fetch detailed video information
        const videoIds = searchData.items.map((item)=>item.id.videoId).join(',');
        const videoParams = new URLSearchParams({
            part: 'snippet,contentDetails,statistics',
            id: videoIds,
            key: YOUTUBE_API_KEY
        });
        const videoResponse = await fetch(`${YOUTUBE_VIDEOS_URL}?${videoParams}`, {
            signal: AbortSignal.timeout(CONFIG.SEARCH_TIMEOUT),
            headers: {
                'Accept': 'application/json'
            }
        });
        if (!videoResponse.ok) {
            console.error('❌ Failed to fetch video details');
            return null;
        }
        const videoData = await videoResponse.json();
        console.log(`   ✓ Retrieved details for ${videoData.items?.length || 0} videos`);
        return videoData.items || null;
    } catch (error) {
        if (error.name === 'AbortError') {
            console.error('⚠️ Search timeout exceeded');
        } else {
            console.error('⚠️ Search error:', error.message);
        }
        return null;
    }
}
/**
 * Multi-strategy search with intelligent fallback
 */ async function searchYouTubeCourse(query, language, preferLatest) {
    console.log('\n🎯 Starting Multi-Strategy Search...');
    // Get AI analysis
    const analysis = await analyzeQueryIntent(query, language, preferLatest);
    const strategies = [
        {
            name: 'Primary (AI-Optimized)',
            query: analysis.primaryQuery,
            duration: 'medium'
        },
        {
            name: 'Secondary (Broad)',
            query: analysis.secondaryQuery,
            duration: 'medium'
        },
        {
            name: 'Fallback (Safe)',
            query: analysis.fallbackQuery,
            duration: 'any'
        },
        {
            name: 'Basic Topic',
            query: `${analysis.topic} ${language === 'hindi' ? 'hindi' : ''}`.trim(),
            duration: 'any'
        }
    ];
    let allResults = [];
    for (const [index, strategy] of strategies.entries()){
        console.log(`\n📍 Strategy ${index + 1}/4: ${strategy.name}`);
        const results = await executeYouTubeSearch(strategy.query, language, preferLatest, strategy.duration);
        if (results?.length) {
            allResults = [
                ...allResults,
                ...results
            ];
            console.log(`   ✓ Accumulated ${allResults.length} total videos`);
            // If we have enough quality results, stop searching
            if (allResults.length >= 20) {
                console.log('   ℹ️ Sufficient results collected, stopping search');
                break;
            }
        }
    }
    if (!allResults.length) {
        console.log('\n❌ No results from any strategy');
        return null;
    }
    // Remove duplicates
    const uniqueResults = Array.from(new Map(allResults.map((item)=>[
            item.id,
            item
        ])).values());
    console.log(`\n📊 Processing ${uniqueResults.length} unique videos...`);
    // Process and rank
    const rankedVideos = await processAndRankVideos(uniqueResults, query, analysis, language, preferLatest);
    if (!rankedVideos?.length) {
        console.log('❌ No valid videos after processing');
        return null;
    }
    const topVideo = rankedVideos[0];
    console.log(`\n✅ BEST MATCH SELECTED:`);
    console.log(`   Title: "${topVideo.title.substring(0, 80)}..."`);
    console.log(`   Channel: ${topVideo.channelTitle}`);
    console.log(`   Duration: ${formatDuration(parseDuration(topVideo.duration))}`);
    console.log(`   Overall Score: ${topVideo.finalScore.toFixed(2)}/10`);
    console.log(`   Relevance: ${topVideo.relevanceScore.toFixed(1)} | Teaching: ${topVideo.teachingScore.toFixed(1)} | Quality: ${topVideo.qualityScore.toFixed(1)}`);
    return topVideo;
}
// ==================== VIDEO PROCESSING & RANKING ====================
/**
 * Process and rank videos with comprehensive scoring
 */ async function processAndRankVideos(videoItems, originalQuery, analysis, language, preferLatest) {
    // Format videos with complete data
    const videos = videoItems.map((video)=>({
            id: video.id,
            title: video.snippet.title,
            description: video.snippet.description,
            thumbnail: video.snippet.thumbnails.high?.url || video.snippet.thumbnails.medium?.url,
            channelTitle: video.snippet.channelTitle,
            publishedAt: video.snippet.publishedAt,
            duration: video.contentDetails.duration,
            viewCount: parseInt(video.statistics.viewCount || 0),
            likeCount: parseInt(video.statistics.likeCount || 0),
            commentCount: parseInt(video.statistics.commentCount || 0),
            url: `https://www.youtube.com/watch?v=${video.id}`
        }));
    // Apply quality filters
    let filteredVideos = videos.filter((video)=>{
        const duration = parseDuration(video.duration);
        const hasMinViews = video.viewCount >= 100;
        const hasEngagement = video.likeCount > 0;
        const meetsMinDuration = duration >= CONFIG.MIN_VIDEO_DURATION;
        const notTooLong = duration <= 1200; // Max 20 hours
        return hasMinViews && hasEngagement && meetsMinDuration && notTooLong;
    });
    console.log(`   After filters: ${filteredVideos.length}/${videos.length} videos`);
    if (!filteredVideos.length) {
        // Relaxed fallback
        filteredVideos = videos.filter((v)=>parseDuration(v.duration) >= 3).sort((a, b)=>b.viewCount - a.viewCount).slice(0, 15);
        console.log(`   Using relaxed criteria: ${filteredVideos.length} videos`);
    }
    // Score videos in parallel batches to avoid rate limits
    const BATCH_SIZE = 5;
    const scoredVideos = [];
    for(let i = 0; i < filteredVideos.length; i += BATCH_SIZE){
        const batch = filteredVideos.slice(i, i + BATCH_SIZE);
        const batchResults = await Promise.all(batch.map(async (video)=>{
            try {
                const [relevanceScore, teachingScore] = await Promise.all([
                    calculateRelevanceScore(video, originalQuery, analysis, language),
                    calculateTeachingScore(video, analysis)
                ]);
                const qualityScore = calculateQualityScore(video, preferLatest);
                const engagementScore = calculateEngagementScore(video);
                // Weighted final score
                const finalScore = relevanceScore * 0.40 + // Most critical
                teachingScore * 0.30 + // Teaching quality
                qualityScore * 0.20 + // Video quality
                engagementScore * 0.10 // Community validation
                ;
                return {
                    ...video,
                    finalScore,
                    relevanceScore,
                    teachingScore,
                    qualityScore,
                    engagementScore
                };
            } catch (error) {
                console.error(`⚠️ Error scoring video "${video.title}":`, error.message);
                return null;
            }
        }));
        scoredVideos.push(...batchResults.filter(Boolean));
        // Small delay between batches
        if (i + BATCH_SIZE < filteredVideos.length) {
            await new Promise((resolve)=>setTimeout(resolve, 100));
        }
    }
    // Sort by final score
    const rankedVideos = scoredVideos.sort((a, b)=>b.finalScore - a.finalScore);
    console.log(`\n   📊 Top 5 Ranked Results:`);
    rankedVideos.slice(0, 5).forEach((v, i)=>{
        console.log(`   ${i + 1}. Score: ${v.finalScore.toFixed(2)} | "${v.title.substring(0, 60)}..."`);
    });
    return rankedVideos;
}
/**
 * AI-powered relevance scoring
 */ async function calculateRelevanceScore(video, originalQuery, analysis, language) {
    try {
        const model = genAI.getGenerativeModel({
            model: CONFIG.GEMINI_MODEL,
            generationConfig: {
                maxOutputTokens: 50,
                temperature: 0.1
            }
        });
        const duration = parseDuration(video.duration);
        const prompt = `Rate video relevance for tech learning (0-10 scale):

TARGET: "${originalQuery}"
- Topic: ${analysis.topic}
- Level: ${analysis.level}
- Format: ${analysis.format}
- Tech Stack: ${analysis.techStack}
- Version: ${analysis.version}

VIDEO:
- Title: "${video.title}"
- Channel: "${video.channelTitle}"
- Duration: ${formatDuration(duration)}
- Description: "${video.description.substring(0, 300)}"

SCORING:
10: Perfect - exact topic, right level, comprehensive
8-9: Excellent - covers topic well, appropriate depth
6-7: Good - relevant, minor gaps
4-5: Moderate - related but not ideal
0-3: Poor - wrong topic/level/format

PRIORITY FACTORS:
1. Title explicitly mentions exact technology/framework
2. Duration suggests comprehensive coverage (30min-10hrs ideal)
3. Professional educational channel
4. Clear course/tutorial structure indicators
5. Matches skill level
6. Language appropriate (${language === 'hindi' ? 'Hindi/Hinglish' : 'English'})

Return ONLY a number 0-10 (decimals ok).`;
        const result = await withTimeout(model.generateContent(prompt), CONFIG.AI_TIMEOUT, 'Relevance scoring timed out');
        const response = await result.response;
        const score = parseFloat(response.text().trim());
        return isNaN(score) ? 5 : Math.max(0, Math.min(10, score));
    } catch (error) {
        // Smart fallback
        const titleLower = video.title.toLowerCase();
        const descLower = video.description.toLowerCase();
        const topicLower = analysis.topic.toLowerCase();
        const queryLower = originalQuery.toLowerCase();
        let score = 0;
        // Exact topic match
        if (titleLower.includes(topicLower)) score += 4;
        if (descLower.includes(topicLower)) score += 1;
        // Query words
        const queryWords = queryLower.split(' ').filter((w)=>w.length > 3);
        queryWords.forEach((word)=>{
            if (titleLower.includes(word)) score += 1;
        });
        // Course indicators
        const courseKeywords = [
            'complete',
            'full',
            'course',
            'tutorial',
            'bootcamp',
            'masterclass'
        ];
        if (courseKeywords.some((kw)=>titleLower.includes(kw))) score += 2;
        // Level match
        if (titleLower.includes(analysis.level)) score += 1;
        return Math.min(10, score);
    }
}
/**
 * Teaching quality score
 */ async function calculateTeachingScore(video, analysis) {
    try {
        const model = genAI.getGenerativeModel({
            model: CONFIG.GEMINI_MODEL,
            generationConfig: {
                maxOutputTokens: 50,
                temperature: 0.1
            }
        });
        const duration = parseDuration(video.duration);
        const prompt = `Rate teaching quality potential (0-10):

Title: "${video.title}"
Channel: "${video.channelTitle}"
Duration: ${formatDuration(duration)}
Views: ${video.viewCount.toLocaleString()}
Likes: ${video.likeCount.toLocaleString()}
Target Level: ${analysis.level}

Evaluate:
1. Professional title clarity
2. Duration appropriateness (30min-10hrs ideal for courses)
3. Channel credibility (educational brands)
4. High engagement (like ratio, comment count)
5. Comprehensive vs superficial

10: Excellent professional course
7-9: Good quality tutorial
4-6: Basic/moderate quality
0-3: Poor indicators

Return ONLY a number 0-10.`;
        const result = await withTimeout(model.generateContent(prompt), CONFIG.AI_TIMEOUT, 'Teaching scoring timed out');
        const response = await result.response;
        const score = parseFloat(response.text().trim());
        return isNaN(score) ? 5 : Math.max(0, Math.min(10, score));
    } catch (error) {
        // Fallback heuristic
        const duration = parseDuration(video.duration);
        let score = 5;
        // Duration sweet spot
        if (duration >= 30 && duration <= 600) score += 2;
        else if (duration >= 15) score += 1;
        // Channel credibility
        const channelLower = video.channelTitle.toLowerCase();
        const professionalKeywords = [
            'academy',
            'university',
            'tutorial',
            'tech',
            'code',
            'dev'
        ];
        if (professionalKeywords.some((kw)=>channelLower.includes(kw))) score += 2;
        // Engagement
        const likeRatio = video.viewCount > 0 ? video.likeCount / video.viewCount : 0;
        if (likeRatio > 0.03) score += 1;
        return Math.min(10, Math.max(0, score));
    }
}
/**
 * Video quality metrics score
 */ function calculateQualityScore(video, preferLatest) {
    const views = video.viewCount;
    const likes = video.likeCount;
    const duration = parseDuration(video.duration);
    // Logarithmic view score
    const viewScore = Math.min(10, Math.log10(views + 1) * 1.5);
    // Engagement rate
    const likeRatio = views > 0 ? likes / views : 0;
    const engagementScore = Math.min(10, likeRatio * 200);
    // Duration score
    let durationScore;
    if (duration >= 30 && duration <= 600) durationScore = 10;
    else if (duration >= 15) durationScore = 7;
    else if (duration >= 10) durationScore = 5;
    else durationScore = 3;
    // Recency score
    const publishDate = new Date(video.publishedAt);
    const monthsOld = (Date.now() - publishDate.getTime()) / (1000 * 60 * 60 * 24 * 30);
    let recencyScore;
    if (preferLatest) {
        if (monthsOld < 6) recencyScore = 10;
        else if (monthsOld < 12) recencyScore = 7;
        else if (monthsOld < 24) recencyScore = 4;
        else recencyScore = 2;
    } else {
        if (monthsOld < 12) recencyScore = 8;
        else if (monthsOld < 36) recencyScore = 6;
        else recencyScore = 4;
    }
    return preferLatest ? viewScore * 0.2 + engagementScore * 0.2 + durationScore * 0.3 + recencyScore * 0.3 : viewScore * 0.3 + engagementScore * 0.3 + durationScore * 0.3 + recencyScore * 0.1;
}
/**
 * Engagement score
 */ function calculateEngagementScore(video) {
    const { viewCount, likeCount, commentCount } = video;
    if (viewCount === 0) return 0;
    const likeRatio = likeCount / viewCount;
    const commentRatio = commentCount / viewCount;
    const likeScore = Math.min(10, likeRatio * 200);
    const commentScore = Math.min(10, commentRatio * 500);
    return likeScore * 0.7 + commentScore * 0.3;
}
// ==================== CONTENT GENERATION ====================
/**
 * Generate course content outline
 */ async function generateCourseContent(video, language, analysis) {
    try {
        const model = genAI.getGenerativeModel({
            model: CONFIG.GEMINI_MODEL,
            generationConfig: {
                maxOutputTokens: 1500,
                temperature: 0.6
            }
        });
        const duration = parseDuration(video.duration);
        const prompt = `Create a comprehensive course outline for tech learners.

COURSE INFO:
Title: "${video.title}"
Channel: "${video.channelTitle}"
Duration: ${formatDuration(duration)}
Description: ${video.description.substring(0, 500)}

USER CONTEXT:
Topic: ${analysis.topic}
Level: ${analysis.level}
Tech Stack: ${analysis.techStack}
Version: ${analysis.version}

Create 12-20 specific learning modules in ${language === 'hindi' ? 'Hinglish (Hindi + English mix)' : 'English'}.

REQUIREMENTS:
1. Progress from fundamentals → intermediate → advanced
2. Each module: 1-2 sentences explaining WHAT will be learned
3. Be tech-specific and actionable (not vague)
4. Use action verbs: Master, Build, Implement, Design, Optimize, Deploy
5. Include hands-on projects and real-world applications
6. Cover best practices and industry standards
7. Make it feel like a complete professional curriculum

GOOD EXAMPLES:
✓ "Master ${analysis.topic} fundamentals including syntax, data structures, and core concepts with practical examples"
✓ "Build production-ready applications using modern best practices, design patterns, and scalable architecture"
✓ "Implement advanced features like authentication, state management, and API integration for real-world projects"

BAD EXAMPLES:
✗ "Introduction" (too vague)
✗ "Basics" (not specific)
✗ "Overview" (not actionable)

Format: Return ONLY bullet points starting with "-", no numbering, no extra text.`;
        const result = await withTimeout(model.generateContent(prompt), CONFIG.AI_TIMEOUT, 'Content generation timed out');
        const content = (await result.response).text();
        const points = content.split('\n').map((line)=>line.trim()).filter((line)=>line.length > 0).map((line)=>line.replace(/^[-*•]\s*|\d+\.\s*/g, '').trim()).filter((line)=>line.length > 30 && line.length < 350).slice(0, 20);
        if (points.length >= 8) return points;
        // Fallback content
        return [
            `Master the fundamentals of ${analysis.topic} with comprehensive coverage from basics to advanced concepts`,
            `Understand core principles, syntax, and essential features with clear, practical explanations`,
            `Learn industry-standard best practices and coding conventions used by professional developers`,
            `Build real-world projects to apply your knowledge and develop practical problem-solving skills`,
            `Implement advanced features and techniques to create production-ready applications`,
            `Explore ecosystem tools, libraries, and frameworks that enhance ${analysis.topic} development`,
            `Debug and optimize code for better performance, maintainability, and scalability`,
            `Deploy applications using modern DevOps practices and cloud platforms`,
            `Work with databases, APIs, and external services to build full-stack solutions`,
            `Master testing strategies including unit tests, integration tests, and end-to-end testing`,
            `Understand design patterns and architectural principles for writing clean, maintainable code`,
            `Learn version control with Git and collaborative development workflows on GitHub`
        ];
    } catch (error) {
        console.error('⚠️ Content generation error:', error.message);
        // Robust fallback
        return [
            `Learn ${analysis.topic} from beginner to professional level with comprehensive coverage`,
            `Master fundamental concepts, syntax, and core principles with hands-on practice`,
            `Build real-world projects to develop practical skills and portfolio-worthy applications`,
            `Understand best practices, design patterns, and industry-standard development workflows`,
            `Implement advanced features and optimize code for production environments`,
            `Work with modern tools, libraries, and frameworks in the ${analysis.techStack} ecosystem`,
            `Deploy and maintain applications using cloud platforms and DevOps practices`,
            `Develop problem-solving abilities through coding challenges and real-world scenarios`
        ];
    }
}
/**
 * Generate course analysis/recommendation
 */ async function generateCourseAnalysis(query, video, language, analysis) {
    try {
        const model = genAI.getGenerativeModel({
            model: CONFIG.GEMINI_MODEL,
            generationConfig: {
                maxOutputTokens: 600,
                temperature: 0.7
            }
        });
        const duration = parseDuration(video.duration);
        const durationText = formatDuration(duration);
        const prompt = `Write a compelling, personalized course recommendation for a tech learner.

USER QUERY: "${query}"

COURSE DETAILS:
- Title: ${video.title}
- Instructor: ${video.channelTitle}
- Duration: ${durationText}
- Views: ${video.viewCount.toLocaleString()}
- Likes: ${video.likeCount.toLocaleString()}
- Comments: ${video.commentCount.toLocaleString()}
- Published: ${new Date(video.publishedAt).toLocaleDateString('en-US', {
            month: 'short',
            year: 'numeric'
        })}

AI ANALYSIS:
- Topic: ${analysis.topic}
- Level: ${analysis.level}
- Tech Stack: ${analysis.techStack}
- Version: ${analysis.version}
- Context: ${analysis.context}

Write in ${language === 'hindi' ? 'Hinglish (natural Hindi-English mix like "Ye course bahut comprehensive hai with hands-on projects")' : 'professional but friendly English'}.

Create a 5-6 sentence recommendation that:
1. Opens with why THIS specific course perfectly matches their learning goal
2. Highlights unique strengths (instructor credibility, comprehensiveness, teaching style, recency)
3. Uses social proof naturally (views/engagement show it's trusted)
4. Addresses their skill level and what they'll achieve
5. Mentions practical aspects (projects, hands-on learning, real-world skills)
6. Ends with an encouraging call-to-action

TONE: Confident, enthusiastic friend who's a tech expert. Be specific, not generic.

DON'T:
- Use clichés like "great course" without context
- Over-promise or exaggerate
- Be overly salesy with excessive exclamations
- Make vague claims

DO:
- Be specific about what they'll learn
- Connect directly to their goal/career
- Mention concrete numbers (duration, views, engagement)
- Sound genuinely enthusiastic but authentic
- Reference the technology stack and practical skills

Example style (English): "This comprehensive ${durationText} course is exactly what you need to master ${analysis.topic}. ${video.channelTitle} breaks down complex concepts into digestible lessons, and with ${video.viewCount.toLocaleString()} views and ${video.likeCount.toLocaleString()} likes, it's a proven resource trusted by thousands of learners..."

Example style (Hinglish): "Agar aap ${analysis.topic} seriously seekhna chahte ho, toh ye ${durationText} ka course perfect hai aapke liye. ${video.channelTitle} ne har concept ko bahut clearly explain kiya hai, aur ${video.viewCount.toLocaleString()} views aur ${video.likeCount.toLocaleString()} likes dekh kar pata chalta hai ki ye trusted resource hai..."

Write the complete recommendation now:`;
        const result = await withTimeout(model.generateContent(prompt), CONFIG.AI_TIMEOUT, 'Analysis generation timed out');
        const analysisText = (await result.response).text().trim();
        return analysisText || generateFallbackAnalysis(video, analysis, language, durationText);
    } catch (error) {
        console.error('⚠️ Analysis generation error:', error.message);
        return generateFallbackAnalysis(video, analysis, language, formatDuration(parseDuration(video.duration)));
    }
}
/**
 * Fallback analysis generator
 */ function generateFallbackAnalysis(video, analysis, language, durationText) {
    if (language === 'hindi') {
        return `Agar aap ${analysis.topic} master karna chahte ho, toh ye ${durationText} ka comprehensive course aapke liye perfect hai! ${video.channelTitle} ne is course mein ${analysis.level} level ke learners ko dhyan mein rakhte hue har concept ko detail se cover kiya hai. ${video.viewCount.toLocaleString()} views aur ${video.likeCount.toLocaleString()} likes clearly show karte hain ki ye ek trusted aur high-quality resource hai. Course mein theoretical knowledge ke saath-saath practical projects bhi include hain jo aapko real-world skills develop karne mein help karenge. ${analysis.techStack} ecosystem ke best practices aur industry standards bhi cover kiye gaye hain. Toh wait mat karo, aaj hi apni learning journey start karo aur apne career goals achieve karo!`;
    }
    return `If you're serious about mastering ${analysis.topic}, this ${durationText} comprehensive course is exactly what you need. ${video.channelTitle} has expertly designed this content for ${analysis.level} learners, covering everything from fundamentals to advanced concepts. With ${video.viewCount.toLocaleString()} views and ${video.likeCount.toLocaleString()} likes, it's clearly a trusted resource that delivers results. The course includes hands-on projects and real-world applications that will help you build practical skills employers are looking for. You'll also learn industry best practices and modern ${analysis.techStack} development workflows. Don't wait—start your learning journey today and take your skills to the next level!`;
}
async function POST(request) {
    const startTime = Date.now();
    const requestId = `req_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    try {
        // Validate environment
        validateEnvironment();
        // Parse and validate request
        const body = await request.json();
        const { query, language = 'english', preferLatest = false } = body;
        // Validate input
        if (!query?.trim()) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: 'Query parameter is required and cannot be empty'
            }, {
                status: 400
            });
        }
        if (![
            'english',
            'hindi'
        ].includes(language.toLowerCase())) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: 'Language must be either "english" or "hindi"'
            }, {
                status: 400
            });
        }
        const sanitizedQuery = sanitizeQuery(query);
        if (sanitizedQuery.length < 2) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: 'Query is too short. Please provide a meaningful search term.'
            }, {
                status: 400
            });
        }
        console.log(`\n${'='.repeat(60)}`);
        console.log(`🚀 NEW REQUEST [${requestId}]`);
        console.log(`${'='.repeat(60)}`);
        console.log(`📝 Query: "${sanitizedQuery}"`);
        console.log(`🌐 Language: ${language}`);
        console.log(`📅 Prefer Latest: ${preferLatest}`);
        console.log(`⏰ Timestamp: ${new Date().toISOString()}`);
        console.log(`${'='.repeat(60)}\n`);
        // Execute search with retry logic
        const video = await retryWithBackoff(()=>searchYouTubeCourse(sanitizedQuery, language, preferLatest), 2, 2000 // 2 second base delay
        );
        // Handle no results
        if (!video) {
            console.log(`\n❌ NO RESULTS FOUND [${requestId}]`);
            const noResultsMessage = language === 'hindi' ? `"${sanitizedQuery}" ke liye koi suitable course nahi mila. Kripya different keywords try karein, spelling check karein, ya thoda general search term use karein. Tech courses ke liye specific technology ka naam use karein (jaise "React", "Python", "Figma").` : `No suitable courses found for "${sanitizedQuery}". Please try different keywords, check spelling, or use more general search terms. For tech courses, use specific technology names (e.g., "React", "Python", "Figma").`;
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                video: null,
                courseAnalysis: noResultsMessage,
                courseContent: [],
                metadata: {
                    requestId,
                    query: sanitizedQuery,
                    language,
                    preferLatest,
                    responseTime: `${Date.now() - startTime}ms`,
                    timestamp: new Date().toISOString()
                },
                suggestions: language === 'hindi' ? [
                    'Keywords ko simplify karein (e.g., "React complete course" → "React tutorial")',
                    'Specific technology ka exact naam use karein',
                    'English terms try karein for better results',
                    'General terms se start karein (e.g., "web development" → "HTML CSS")'
                ] : [
                    'Try simplifying your keywords (e.g., "React complete course" → "React tutorial")',
                    'Use exact technology names',
                    'Try broader search terms',
                    'Check for typos or alternative spellings',
                    'Search for fundamental topics first'
                ]
            });
        }
        // Analyze query for content generation
        const analysis = await analyzeQueryIntent(sanitizedQuery, language, preferLatest);
        // Generate analysis and content in parallel
        const [courseAnalysis, courseContent] = await Promise.all([
            generateCourseAnalysis(sanitizedQuery, video, language, analysis),
            generateCourseContent(video, language, analysis)
        ]);
        const responseTime = Date.now() - startTime;
        console.log(`\n${'='.repeat(60)}`);
        console.log(`✅ REQUEST COMPLETED [${requestId}]`);
        console.log(`${'='.repeat(60)}`);
        console.log(`⏱️  Response Time: ${responseTime}ms`);
        console.log(`🎥 Selected: "${video.title.substring(0, 60)}..."`);
        console.log(`👤 Channel: ${video.channelTitle}`);
        console.log(`⏳ Duration: ${formatDuration(parseDuration(video.duration))}`);
        console.log(`📊 Score: ${video.finalScore.toFixed(2)}/10`);
        console.log(`   - Relevance: ${video.relevanceScore.toFixed(1)}`);
        console.log(`   - Teaching: ${video.teachingScore.toFixed(1)}`);
        console.log(`   - Quality: ${video.qualityScore.toFixed(1)}`);
        console.log(`   - Engagement: ${video.engagementScore.toFixed(1)}`);
        console.log(`${'='.repeat(60)}\n`);
        // Return success response
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            query: sanitizedQuery,
            language,
            preferLatest,
            video: {
                id: video.id,
                title: video.title,
                description: video.description,
                thumbnail: video.thumbnail,
                channelTitle: video.channelTitle,
                publishedAt: video.publishedAt,
                duration: video.duration,
                durationFormatted: formatDuration(parseDuration(video.duration)),
                viewCount: video.viewCount,
                likeCount: video.likeCount,
                commentCount: video.commentCount,
                url: video.url,
                embedUrl: `https://www.youtube.com/embed/${video.id}`,
                scores: {
                    overall: parseFloat(video.finalScore.toFixed(2)),
                    relevance: parseFloat(video.relevanceScore.toFixed(2)),
                    teaching: parseFloat(video.teachingScore.toFixed(2)),
                    quality: parseFloat(video.qualityScore.toFixed(2)),
                    engagement: parseFloat(video.engagementScore.toFixed(2))
                }
            },
            courseAnalysis,
            courseContent,
            metadata: {
                requestId,
                analyzedTopic: analysis.topic,
                detectedLevel: analysis.level,
                preferredFormat: analysis.format,
                techStack: analysis.techStack,
                version: analysis.version,
                responseTime: `${responseTime}ms`,
                timestamp: new Date().toISOString(),
                apiVersion: '7.0.0'
            }
        }, {
            headers: {
                'Cache-Control': `public, s-maxage=${CONFIG.CACHE_TTL}, stale-while-revalidate`,
                'X-Request-ID': requestId
            }
        });
    } catch (error) {
        console.error(`\n${'='.repeat(60)}`);
        console.error(`❌ API ERROR [${requestId}]`);
        console.error(`${'='.repeat(60)}`);
        console.error('Error Name:', error.name);
        console.error('Error Message:', error.message);
        console.error('Stack Trace:', error.stack);
        console.error(`${'='.repeat(60)}\n`);
        // Determine appropriate status code
        let statusCode = 500;
        let errorMessage = 'An unexpected error occurred while processing your request';
        if (error.message.includes('API key') || error.message.includes('quota')) {
            statusCode = 503;
            errorMessage = 'Service temporarily unavailable. Please try again later.';
        } else if (error.message.includes('timeout')) {
            statusCode = 504;
            errorMessage = 'Request timed out. Please try again.';
        } else if (error.name === 'AbortError') {
            statusCode = 504;
            errorMessage = 'Request took too long and was cancelled.';
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: errorMessage,
            details: ("TURBOPACK compile-time truthy", 1) ? {
                message: error.message,
                stack: error.stack,
                name: error.name
            } : ("TURBOPACK unreachable", undefined),
            metadata: {
                requestId,
                timestamp: new Date().toISOString(),
                responseTime: `${Date.now() - startTime}ms`
            }
        }, {
            status: statusCode,
            headers: {
                'X-Request-ID': requestId
            }
        });
    }
}
async function GET() {
    try {
        validateEnvironment();
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            status: 'operational',
            service: 'AI-Powered Tech Course Finder API',
            version: '7.0.0',
            environment: ("TURBOPACK compile-time value", "development") || 'production',
            timestamp: new Date().toISOString(),
            uptime: process.uptime ? `${Math.floor(process.uptime())}s` : 'N/A',
            features: [
                '🧠 Advanced AI Query Analysis',
                '🎯 Multi-Dimensional Relevance Scoring',
                '👨‍🏫 Teaching Quality Evaluation',
                '📊 Comprehensive Video Ranking',
                '🔄 Intelligent Multi-Strategy Search',
                '🎓 Context-Aware Content Generation',
                '🌐 Bilingual Support (English/Hindi)',
                '⚡ Production-Grade Error Handling',
                '🔒 Input Validation & Sanitization',
                '♻️ Retry Logic with Exponential Backoff',
                '⏱️ Request Timeout Protection',
                '📈 Performance Monitoring'
            ],
            endpoints: {
                POST: {
                    path: '/api/search-resources',
                    description: 'Search for tech courses',
                    parameters: {
                        query: 'string (required) - Learning topic or technology',
                        language: 'string (optional) - "english" or "hindi" (default: "english")',
                        preferLatest: 'boolean (optional) - Prioritize recent content (default: false)'
                    },
                    example: {
                        query: 'React 18 complete course',
                        language: 'english',
                        preferLatest: true
                    }
                },
                GET: {
                    path: '/api/search-resources',
                    description: 'API health check and documentation'
                }
            },
            techSupport: {
                programming: TECH_DOMAINS.programming.slice(0, 10).join(', '),
                webDev: TECH_DOMAINS.webDev.slice(0, 10).join(', '),
                design: TECH_DOMAINS.design.join(', '),
                moreCategories: 'Mobile, Backend, Database, DevOps, Data Science, and more'
            },
            scoring: {
                relevance: '40% - How well video matches user intent and topic',
                teaching: '30% - Teaching quality and comprehensiveness',
                quality: '20% - Video metrics, production quality, engagement',
                engagement: '10% - Community validation and feedback'
            },
            limits: {
                maxQueryLength: 200,
                searchTimeout: `${CONFIG.SEARCH_TIMEOUT}ms`,
                aiTimeout: `${CONFIG.AI_TIMEOUT}ms`,
                maxRetries: 3
            }
        }, {
            headers: {
                'Cache-Control': 'public, max-age=3600'
            }
        });
    } catch (error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            status: 'error',
            error: 'Service configuration error',
            timestamp: new Date().toISOString()
        }, {
            status: 500
        });
    }
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__c68111a4._.js.map