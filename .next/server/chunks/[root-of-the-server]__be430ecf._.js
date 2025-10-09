module.exports = {

"[project]/.next-internal/server/app/api/fetched-resources/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

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
"[project]/app/api/fetched-resources/route.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// app/api/search-resources/route.js
__turbopack_context__.s({
    "GET": (()=>GET),
    "POST": (()=>POST),
    "PUT": (()=>PUT)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@google/generative-ai/dist/index.mjs [app-route] (ecmascript)");
;
;
const genAI = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GoogleGenerativeAI"](process.env.GEMINI_API_KEY);
const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
const YOUTUBE_SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search';
const YOUTUBE_VIDEOS_URL = 'https://www.googleapis.com/youtube/v3/videos';
/**
 * Enhance search query using AI for better accuracy
 */ async function enhanceSearchQuery(query, language) {
    try {
        const model = genAI.getGenerativeModel({
            model: 'gemini-1.5-flash',
            generationConfig: {
                maxOutputTokens: 100,
                temperature: 0.3
            }
        });
        const prompt = `Extract the core learning topic from this query: "${query}"

Return ONLY the essential search keywords (2-5 words) optimized for finding educational YouTube videos.
Examples:
- "I want to learn react js" → "react js tutorial"
- "teach me python basics" → "python basics course"
- "how to machine learning" → "machine learning tutorial"

Query: "${query}"
Keywords:`;
        const result = await model.generateContent(prompt);
        const enhanced = result.response.text().trim().replace(/['"]/g, '');
        return enhanced || query;
    } catch (error) {
        console.error('Error enhancing query:', error);
        return query;
    }
}
/**
 * Calculate comprehensive video quality score
 */ function calculateVideoScore(video, query) {
    const views = parseInt(video.viewCount || 0);
    const likes = parseInt(video.likeCount || 0);
    const duration = parseDuration(video.duration);
    const title = video.title.toLowerCase();
    const description = video.description.toLowerCase();
    const queryLower = query.toLowerCase();
    // Relevance scoring
    const queryWords = queryLower.split(' ').filter((w)=>w.length > 2);
    let relevanceScore = 0;
    queryWords.forEach((word)=>{
        if (title.includes(word)) relevanceScore += 3;
        if (description.includes(word)) relevanceScore += 1;
    });
    // Check for course indicators
    const courseKeywords = [
        'complete',
        'full',
        'course',
        'tutorial',
        'beginner',
        'guide',
        'learn'
    ];
    const hasCourseKeywords = courseKeywords.some((kw)=>title.includes(kw));
    const courseBonus = hasCourseKeywords ? 5 : 0;
    // Engagement metrics
    const engagementRate = views > 0 ? likes / views : 0;
    const viewScore = Math.log10(views + 1) * 2;
    const engagementScore = engagementRate * 10000;
    // Duration preference (20min-3hr optimal for courses)
    let durationScore = 0;
    if (duration >= 20 && duration <= 180) durationScore = 10;
    else if (duration >= 10 && duration <= 240) durationScore = 5;
    else if (duration >= 5 && duration <= 360) durationScore = 2;
    // Recency bonus
    const publishDate = new Date(video.publishedAt);
    const monthsOld = (Date.now() - publishDate.getTime()) / (1000 * 60 * 60 * 24 * 30);
    const recencyScore = monthsOld < 6 ? 8 : monthsOld < 12 ? 5 : monthsOld < 24 ? 3 : 1;
    // Total score calculation
    const totalScore = relevanceScore * 0.35 + viewScore * 0.20 + engagementScore * 0.15 + durationScore * 0.15 + recencyScore * 0.10 + courseBonus * 0.05;
    return {
        score: totalScore,
        breakdown: {
            relevance: relevanceScore,
            views: viewScore,
            engagement: engagementScore,
            duration: durationScore,
            recency: recencyScore,
            courseBonus
        }
    };
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
 * Search YouTube for the SINGLE best matching video
 */ async function searchBestYouTubeVideo(query, language, preferLatest) {
    try {
        // Enhance query for better accuracy
        const enhancedQuery = await enhanceSearchQuery(query, language);
        console.log(`🔍 Original: "${query}" → Enhanced: "${enhancedQuery}"`);
        // Build precise search query
        let searchQuery = enhancedQuery;
        // Add language specificity
        if (language === 'hindi') {
            searchQuery += ' hindi';
        }
        // Add course/tutorial keywords
        searchQuery += ' complete tutorial';
        // Search parameters
        const searchParams = new URLSearchParams({
            part: 'snippet',
            q: searchQuery,
            type: 'video',
            maxResults: 15,
            order: preferLatest ? 'date' : 'relevance',
            videoDuration: 'medium',
            videoDefinition: 'high',
            relevanceLanguage: language === 'hindi' ? 'hi' : 'en',
            key: YOUTUBE_API_KEY
        });
        const searchResponse = await fetch(`${YOUTUBE_SEARCH_URL}?${searchParams}`, {
            signal: AbortSignal.timeout(8000)
        });
        if (!searchResponse.ok) {
            throw new Error('YouTube search failed');
        }
        const searchData = await searchResponse.json();
        if (!searchData.items || searchData.items.length === 0) {
            return null;
        }
        // Get detailed video information
        const videoIds = searchData.items.map((item)=>item.id.videoId).join(',');
        const videoParams = new URLSearchParams({
            part: 'snippet,contentDetails,statistics',
            id: videoIds,
            key: YOUTUBE_API_KEY
        });
        const videoResponse = await fetch(`${YOUTUBE_VIDEOS_URL}?${videoParams}`, {
            signal: AbortSignal.timeout(8000)
        });
        if (!videoResponse.ok) {
            throw new Error('Failed to fetch video details');
        }
        const videoData = await videoResponse.json();
        // Score and rank all videos
        const rankedVideos = videoData.items.map((video)=>{
            const scoreData = calculateVideoScore({
                title: video.snippet.title,
                description: video.snippet.description,
                viewCount: video.statistics.viewCount,
                likeCount: video.statistics.likeCount,
                duration: video.contentDetails.duration,
                publishedAt: video.snippet.publishedAt
            }, query);
            return {
                id: video.id,
                title: video.snippet.title,
                description: video.snippet.description,
                thumbnail: video.snippet.thumbnails.high.url,
                channelTitle: video.snippet.channelTitle,
                publishedAt: video.snippet.publishedAt,
                duration: video.contentDetails.duration,
                viewCount: parseInt(video.statistics.viewCount || 0),
                likeCount: parseInt(video.statistics.likeCount || 0),
                commentCount: parseInt(video.statistics.commentCount || 0),
                url: `https://www.youtube.com/watch?v=${video.id}`,
                qualityScore: scoreData.score,
                scoreBreakdown: scoreData.breakdown
            };
        }).filter((video)=>{
            const duration = parseDuration(video.duration);
            // More lenient filtering
            return video.viewCount > 500 && duration >= 5 && video.qualityScore > 1;
        }).sort((a, b)=>b.qualityScore - a.qualityScore);
        console.log(`📊 Top 3 scores:`, rankedVideos.slice(0, 3).map((v)=>({
                title: v.title.substring(0, 50),
                score: v.qualityScore.toFixed(2)
            })));
        return {
            video: rankedVideos[0] || null,
            enhancedQuery
        };
    } catch (error) {
        console.error('Error searching YouTube:', error);
        throw error;
    }
}
/**
 * Extract course content/outline from video
 */ async function extractCourseContent(video, language) {
    try {
        const model = genAI.getGenerativeModel({
            model: 'gemini-1.5-pro',
            generationConfig: {
                maxOutputTokens: 1500,
                temperature: 0.4
            }
        });
        const prompt = `Analyze this YouTube course and extract its content structure:

Title: "${video.title}"
Channel: ${video.channelTitle}
Description: ${video.description}

Create a detailed course content breakdown in ${language === 'hindi' ? 'Hinglish (Hindi + English mix)' : 'English'}:

1. **Course Overview** (2-3 sentences about what this course teaches)

2. **What You'll Learn** (5-7 key learning outcomes as bullet points)

3. **Course Topics** (Extract 8-12 main topics/modules from the description, formatted as numbered list with brief descriptions)

4. **Prerequisites** (What students should know before starting, if any)

5. **Best For** (Who is this course ideal for - beginners/intermediate/advanced)

Format professionally with clear sections. Base everything on the actual video description.`;
        const result = await model.generateContent(prompt);
        return result.response.text();
    } catch (error) {
        console.error('Error extracting course content:', error);
        return null;
    }
}
/**
 * Generate AI summary about the found resource
 */ async function generateAISummary(query, video, language) {
    try {
        const model = genAI.getGenerativeModel({
            model: 'gemini-1.5-flash',
            generationConfig: {
                maxOutputTokens: 300,
                temperature: 0.7
            }
        });
        const duration = Math.round(parseDuration(video.duration));
        const prompt = `You found this course for query "${query}":

Title: ${video.title}
Channel: ${video.channelTitle}
Duration: ${duration} minutes
Views: ${video.viewCount.toLocaleString()}

Write a brief, enthusiastic summary in ${language === 'hindi' ? 'Hinglish' : 'English'} (3-4 sentences):
1. Why this is a great match for their query
2. What makes this course valuable
3. Quick encouragement to start learning

Keep it conversational and motivating!`;
        const result = await model.generateContent(prompt);
        return result.response.text();
    } catch (error) {
        console.error('Error generating summary:', error);
        return null;
    }
}
async function POST(request) {
    const startTime = Date.now();
    try {
        const body = await request.json();
        const { query, language = 'english', preferLatest = false } = body;
        if (!query?.trim()) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Please provide a search query'
            }, {
                status: 400
            });
        }
        if (!YOUTUBE_API_KEY || !process.env.GEMINI_API_KEY) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'API keys not configured'
            }, {
                status: 500
            });
        }
        console.log(`🔍 Searching for: "${query}" (${language})`);
        // Find the single best matching video
        const result = await searchBestYouTubeVideo(query, language, preferLatest);
        if (!result || !result.video) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                video: null,
                aiSummary: `Sorry, couldn't find a suitable course for "${query}". Try rephrasing your search with more specific keywords.`,
                enhancedQuery: result?.enhancedQuery || query,
                responseTime: `${Date.now() - startTime}ms`
            });
        }
        const video = result.video;
        console.log(`✅ Best match: "${video.title}" (score: ${video.qualityScore.toFixed(2)})`);
        // Generate course content and AI summary in parallel
        const [courseContent, aiSummary] = await Promise.all([
            extractCourseContent(video, language),
            generateAISummary(query, video, language)
        ]);
        const responseTime = Date.now() - startTime;
        console.log(`⚡ Total time: ${responseTime}ms`);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            query,
            enhancedQuery: result.enhancedQuery,
            language,
            video: {
                ...video,
                courseContent
            },
            aiSummary,
            responseTime: `${responseTime}ms`
        });
    } catch (error) {
        console.error('❌ API Error:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: error.message || 'Search failed. Please try again.'
        }, {
            status: 500
        });
    }
}
async function PUT(request) {
    try {
        const body = await request.json();
        const { videoId, title, description, channelTitle, language } = body;
        const model = genAI.getGenerativeModel({
            model: 'gemini-1.5-pro',
            generationConfig: {
                maxOutputTokens: 3000,
                temperature: 0.4
            }
        });
        const prompt = `Create comprehensive course documentation for:

Title: "${title}"
Channel: ${channelTitle}
Description: ${description}

Generate detailed documentation in ${language === 'hindi' ? 'Hinglish (Hindi + English)' : 'English'} with this structure:

## Course Overview
[2-3 detailed paragraphs about the course]

## Learning Objectives
[8-10 specific things students will learn]

## Course Curriculum
[10-15 lessons/modules with:
- Module name
- 3-4 subtopics per module]

## Prerequisites & Requirements
[What students need to know]

## Target Audience
[Who should take this course]

## Key Takeaways
[5-7 main benefits]

## Meta Information
**Instructor:** ${channelTitle}
**Level:** [Beginner/Intermediate/Advanced]
**Duration:** [Estimate based on description]

Use proper markdown formatting. Be thorough and educational.`;
        const result = await model.generateContent(prompt);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            documentation: result.response.text()
        });
    } catch (error) {
        console.error('Documentation error:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Failed to generate documentation'
        }, {
            status: 500
        });
    }
}
async function GET() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        status: 'ok',
        message: 'AI Resource Finder API',
        version: '3.0-accurate',
        endpoints: {
            search: 'POST /api/search-resources',
            documentation: 'PUT /api/search-resources'
        }
    });
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__be430ecf._.js.map