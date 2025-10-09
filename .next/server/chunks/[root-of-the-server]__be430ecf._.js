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
 * Enhance user query using AI to get better search terms
 */ async function enhanceQuery(userQuery, language) {
    try {
        const model = genAI.getGenerativeModel({
            model: 'gemini-1.5-flash',
            generationConfig: {
                maxOutputTokens: 100,
                temperature: 0.3
            }
        });
        const prompt = `User wants to learn: "${userQuery}"

Extract the core topic and return ONLY the best YouTube search query (3-6 words) that would find a comprehensive tutorial/course.
Focus on: main topic + "complete course" or "full tutorial"
Language preference: ${language}

Return only the search query, nothing else.`;
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const enhancedQuery = response.text().trim().replace(/['"]/g, '');
        console.log(`📝 Enhanced query: "${userQuery}" → "${enhancedQuery}"`);
        return enhancedQuery;
    } catch (error) {
        console.error('Query enhancement failed:', error);
        return userQuery; // Fallback to original
    }
}
/**
 * Calculate video quality score
 */ function calculateVideoScore(video) {
    const views = parseInt(video.viewCount || 0);
    const likes = parseInt(video.likeCount || 0);
    const duration = parseDuration(video.duration);
    const engagementRate = views > 0 ? likes / views : 0;
    const viewScore = Math.log10(views + 1);
    const engagementScore = engagementRate * 8000;
    // Prefer comprehensive courses (30min-4hr)
    const durationScore = duration >= 30 && duration <= 240 ? 2 : duration >= 10 && duration <= 360 ? 1 : 0.3;
    // Recency preference
    const publishDate = new Date(video.publishedAt);
    const monthsOld = (Date.now() - publishDate.getTime()) / (1000 * 60 * 60 * 24 * 30);
    const recencyScore = monthsOld < 12 ? 1.5 : monthsOld < 24 ? 1 : 0.5;
    return viewScore * 0.25 + engagementScore * 0.35 + durationScore * 0.25 + recencyScore * 0.15;
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
 * Search for THE BEST YouTube video
 */ async function searchBestVideo(query, language, preferLatest) {
    try {
        let searchQuery = query;
        if (language === 'hindi') {
            searchQuery += ' hindi';
        }
        searchQuery += ' complete course tutorial full';
        const searchParams = new URLSearchParams({
            part: 'snippet',
            q: searchQuery,
            type: 'video',
            maxResults: 15,
            order: preferLatest ? 'date' : 'relevance',
            videoDuration: 'long',
            videoDefinition: 'high',
            relevanceLanguage: language === 'hindi' ? 'hi' : 'en',
            key: YOUTUBE_API_KEY
        });
        const searchResponse = await fetch(`${YOUTUBE_SEARCH_URL}?${searchParams}`, {
            signal: AbortSignal.timeout(5000)
        });
        if (!searchResponse.ok) {
            throw new Error('YouTube search failed');
        }
        const searchData = await searchResponse.json();
        if (!searchData.items || searchData.items.length === 0) {
            return null;
        }
        const videoIds = searchData.items.map((item)=>item.id.videoId).join(',');
        const videoParams = new URLSearchParams({
            part: 'snippet,contentDetails,statistics',
            id: videoIds,
            key: YOUTUBE_API_KEY
        });
        const videoResponse = await fetch(`${YOUTUBE_VIDEOS_URL}?${videoParams}`, {
            signal: AbortSignal.timeout(5000)
        });
        if (!videoResponse.ok) {
            throw new Error('Failed to fetch video details');
        }
        const videoData = await videoResponse.json();
        // Process and find the BEST video
        const videos = videoData.items.map((video)=>({
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
                qualityScore: calculateVideoScore({
                    viewCount: video.statistics.viewCount,
                    likeCount: video.statistics.likeCount,
                    commentCount: video.statistics.commentCount,
                    duration: video.contentDetails.duration,
                    publishedAt: video.snippet.publishedAt
                })
            })).filter((video)=>{
            const duration = parseDuration(video.duration);
            return video.viewCount > 5000 && duration >= 10 && video.qualityScore > 0.5;
        }).sort((a, b)=>b.qualityScore - a.qualityScore);
        return videos[0] || null; // Return ONLY the best one
    } catch (error) {
        console.error('Error searching YouTube:', error);
        throw error;
    }
}
/**
 * Generate AI summary for single video
 */ async function generateAISummary(query, video, language) {
    try {
        const model = genAI.getGenerativeModel({
            model: 'gemini-1.5-flash',
            generationConfig: {
                maxOutputTokens: 400,
                temperature: 0.7
            }
        });
        const prompt = `Analyze this YouTube course for "${query}":

Title: "${video.title}"
Channel: ${video.channelTitle}
Views: ${video.viewCount.toLocaleString()}
Duration: ${Math.round(parseDuration(video.duration))} minutes

Provide in ${language === 'hindi' ? 'Hinglish (mix of Hindi and English)' : 'English'}:
1. Course overview (2-3 sentences)
2. What you'll learn (3-4 key points)
3. Who should take this (1 sentence)

Keep it concise and encouraging.`;
        const result = await model.generateContent(prompt);
        const response = await result.response;
        return response.text();
    } catch (error) {
        console.error('Error generating AI summary:', error);
        return null;
    }
}
async function POST(request) {
    const startTime = Date.now();
    try {
        const body = await request.json();
        const { query, language, preferLatest } = body;
        if (!query?.trim()) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Query is required'
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
        // Enhance query for better results
        const enhancedQuery = await enhanceQuery(query, language);
        // Find the BEST video
        const bestVideo = await searchBestVideo(enhancedQuery, language, preferLatest);
        if (!bestVideo) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                video: null,
                aiSummary: `No suitable course found for "${query}". Try refining your search.`,
                responseTime: `${Date.now() - startTime}ms`
            });
        }
        console.log(`✅ Found best video in ${Date.now() - startTime}ms`);
        // Generate AI summary
        const aiSummary = await generateAISummary(query, bestVideo, language);
        const responseTime = Date.now() - startTime;
        console.log(`⚡ Total response time: ${responseTime}ms`);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            query,
            enhancedQuery,
            language,
            video: bestVideo,
            aiSummary,
            responseTime: `${responseTime}ms`
        });
    } catch (error) {
        console.error('❌ API Error:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: error.message || 'Unexpected error occurred'
        }, {
            status: 500
        });
    }
}
async function PUT(request) {
    try {
        const body = await request.json();
        const { videoId, title, description, channelTitle, language } = body;
        if (!videoId) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Video ID required'
            }, {
                status: 400
            });
        }
        const model = genAI.getGenerativeModel({
            model: 'gemini-1.5-pro',
            generationConfig: {
                maxOutputTokens: 3000,
                temperature: 0.4
            }
        });
        const prompt = `Create comprehensive course documentation for: "${title}" by ${channelTitle}

Video Description: ${description}

Create detailed, well-structured documentation in ${language === 'hindi' ? 'Hinglish (mix of Hindi and English)' : 'English'} with this EXACT structure:

## Course Overview
[2-3 paragraphs explaining what the course covers and who it's for]

## Course Structure
[Analyze the description and create 6-10 main modules/lessons with:
- Module number and title
- 3-5 subtopics as bullet points]

## Key Learning Outcomes
[5-7 specific things students will learn]

## Prerequisites
[What knowledge/tools are needed before starting]

## Course Information
- **Instructor**: ${channelTitle}
- **Platform**: YouTube
- **Language**: ${language === 'hindi' ? 'Hindi/Hinglish' : 'English'}
- **Level**: [Beginner/Intermediate/Advanced based on content]

Use proper markdown formatting. Be specific and educational.`;
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const documentation = response.text();
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            videoId,
            documentation,
            generated: new Date().toISOString()
        });
    } catch (error) {
        console.error('❌ Documentation Error:', error);
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
        message: 'AI Resource Finder API v3.0',
        endpoints: {
            search: 'POST /api/search-resources',
            documentation: 'PUT /api/search-resources'
        }
    });
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__be430ecf._.js.map