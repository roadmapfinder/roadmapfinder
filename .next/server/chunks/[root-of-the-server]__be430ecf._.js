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
    "POST": (()=>POST)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@google/generative-ai/dist/index.mjs [app-route] (ecmascript)");
;
;
// Initialize Gemini AI
const genAI = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GoogleGenerativeAI"](process.env.GEMINI_API_KEY);
// YouTube API configuration
const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
const YOUTUBE_SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search';
const YOUTUBE_VIDEOS_URL = 'https://www.googleapis.com/youtube/v3/videos';
/**
 * Calculate video quality score with stricter criteria
 */ function calculateVideoScore(video) {
    const views = parseInt(video.viewCount || 0);
    const likes = parseInt(video.likeCount || 0);
    const comments = parseInt(video.commentCount || 0);
    const duration = parseDuration(video.duration);
    // Engagement metrics
    const engagementRate = views > 0 ? (likes + comments) / views : 0;
    const viewScore = Math.log10(views + 1);
    const engagementScore = engagementRate * 10000;
    // Duration score - prefer comprehensive courses (45min-3hr for full courses)
    let durationScore = 0;
    if (duration >= 45 && duration <= 180) {
        durationScore = 2.0; // Sweet spot for full courses
    } else if (duration >= 30 && duration <= 240) {
        durationScore = 1.5;
    } else if (duration >= 20 && duration <= 300) {
        durationScore = 1.0;
    } else {
        durationScore = 0.5;
    }
    // Recency score - prefer recent content
    const publishDate = new Date(video.publishedAt);
    const monthsOld = (Date.now() - publishDate.getTime()) / (1000 * 60 * 60 * 24 * 30);
    let recencyScore = 1.0;
    if (monthsOld < 6) recencyScore = 2.0;
    else if (monthsOld < 12) recencyScore = 1.7;
    else if (monthsOld < 24) recencyScore = 1.3;
    else if (monthsOld < 36) recencyScore = 0.8;
    else recencyScore = 0.5;
    // Weighted final score
    return viewScore * 0.2 + engagementScore * 0.3 + durationScore * 0.3 + recencyScore * 0.2;
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
 * Search YouTube videos with enhanced filtering for single best result
 */ async function searchYouTubeVideos(query, language, formats) {
    try {
        // Build precise search query
        let searchQuery = query;
        // Add language specificity
        if (language === 'hindi') {
            searchQuery += ' hindi tutorial';
        } else {
            searchQuery += ' tutorial';
        }
        // Add course-specific keywords
        searchQuery += ' complete course full';
        // Search parameters - fetch more to find the best one
        const searchParams = new URLSearchParams({
            part: 'snippet',
            q: searchQuery,
            type: 'video',
            maxResults: 15,
            order: formats.latestVideo ? 'date' : 'relevance',
            videoDuration: 'long',
            videoDefinition: 'high',
            relevanceLanguage: language === 'hindi' ? 'hi' : 'en',
            key: YOUTUBE_API_KEY
        });
        const searchResponse = await fetch(`${YOUTUBE_SEARCH_URL}?${searchParams}`, {
            signal: AbortSignal.timeout(8000)
        });
        if (!searchResponse.ok) {
            const errorData = await searchResponse.json();
            throw new Error(`YouTube API Error: ${errorData.error?.message || 'Unknown error'}`);
        }
        const searchData = await searchResponse.json();
        if (!searchData.items || searchData.items.length === 0) {
            return [];
        }
        // Get video IDs
        const videoIds = searchData.items.map((item)=>item.id.videoId).join(',');
        // Fetch detailed video info
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
        // Format and score all videos
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
            }))// Apply strict quality filters
        .filter((video)=>{
            const duration = parseDuration(video.duration);
            return video.viewCount > 5000 && duration >= 20 && video.qualityScore > 1.0;
        })// Sort by quality score and return only the best one
        .sort((a, b)=>b.qualityScore - a.qualityScore).slice(0, 1); // Return only the BEST video
        return videos;
    } catch (error) {
        console.error('Error searching YouTube:', error);
        throw error;
    }
}
/**
 * Generate comprehensive course documentation with detailed content
 */ async function generateDetailedDocumentation(video, language) {
    try {
        const model = genAI.getGenerativeModel({
            model: 'gemini-1.5-pro',
            generationConfig: {
                maxOutputTokens: 4000,
                temperature: 0.3
            }
        });
        const prompt = `You are an expert course analyst. Analyze this YouTube course and create comprehensive, detailed documentation.

**Video Title:** ${video.title}
**Channel:** ${video.channelTitle}
**Description:** ${video.description}
**Duration:** ${Math.round(parseDuration(video.duration))} minutes

Create detailed course documentation in ${language === 'hindi' ? 'Hinglish (mix of Hindi and English, natural style)' : 'English'} with this EXACT structure:

## Course Overview
Write 3-4 paragraphs explaining:
- What this course teaches
- Who should take this course (beginners, intermediate, advanced)
- What prerequisites are needed (if any)
- What students will be able to do after completing it

## Complete Course Content & Syllabus
Based on the video description and title, break down the course into detailed lessons/modules.
Create 8-15 lessons with this format:

### Lesson 1: [Lesson Title]
- [Subtopic 1 - be specific]
- [Subtopic 2 - be specific]
- [Subtopic 3 - be specific]
- [Subtopic 4 - be specific]

(Continue for all lessons)

## What You'll Learn
List 8-10 specific, actionable learning outcomes:
- [Specific skill or concept]
- [Specific skill or concept]
...

## Course Benefits
List 5-7 key benefits of taking this course:
- [Benefit]
- [Benefit]
...

## Who This Course Is For
List 4-5 types of people who would benefit:
- [Target audience type]
- [Target audience type]
...

## Requirements
List any prerequisites or requirements:
- [Requirement]
- [Requirement]
...

## Course Details
- **Instructor:** ${video.channelTitle}
- **Duration:** ${Math.round(parseDuration(video.duration))} minutes (${Math.floor(parseDuration(video.duration) / 60)} hours ${Math.round(parseDuration(video.duration) % 60)} minutes)
- **Language:** ${language === 'hindi' ? 'Hindi/Hinglish' : 'English'}
- **Level:** [Analyze and mention: Beginner/Intermediate/Advanced]
- **Published:** ${new Date(video.publishedAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })}

IMPORTANT INSTRUCTIONS:
1. Make the content detailed and specific - avoid generic statements
2. Base the syllabus on actual content hints from the video description
3. Be realistic about what the course covers
4. Use proper markdown formatting with ## for main headers and ### for subheaders
5. Make each lesson meaningful with 4-6 specific subtopics
6. Ensure the ${language === 'hindi' ? 'Hinglish is natural and conversational' : 'English is clear and professional'}`;
        const result = await model.generateContent(prompt);
        const response = await result.response;
        return response.text();
    } catch (error) {
        console.error('Error generating documentation:', error);
        return null;
    }
}
/**
 * Generate AI summary for the course
 */ async function generateAISummary(query, video, language) {
    try {
        const model = genAI.getGenerativeModel({
            model: 'gemini-1.5-flash',
            generationConfig: {
                maxOutputTokens: 500,
                temperature: 0.7
            }
        });
        const prompt = `You found the best YouTube course for "${query}".

**Course:** "${video.title}" by ${video.channelTitle}
**Stats:** ${video.viewCount.toLocaleString()} views | ${Math.round(parseDuration(video.duration))} minutes

Provide in ${language === 'hindi' ? 'Hinglish (natural mix of Hindi and English)' : 'English'}:

1. **Why This Course:** Explain in 2-3 sentences why this is the best match for their query
2. **What Makes It Great:** List 3-4 key strengths of this course
3. **Quick Start Tip:** One actionable tip to get the most from this course

Be enthusiastic and helpful. Keep it conversational.`;
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
        const { query, language, formats } = body;
        // Validation
        if (!query?.trim()) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Query is required'
            }, {
                status: 400
            });
        }
        // Validate API keys
        if (!YOUTUBE_API_KEY || !process.env.GEMINI_API_KEY) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'API keys not configured'
            }, {
                status: 500
            });
        }
        console.log(`🔍 Searching for BEST course: "${query}" (${language})`);
        // Search YouTube for the single best video
        const videos = await searchYouTubeVideos(query, language, formats);
        if (videos.length === 0) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                videos: [],
                aiSummary: `Sorry, couldn't find a quality course for "${query}". Try different keywords or check the spelling.`,
                responseTime: `${Date.now() - startTime}ms`
            });
        }
        const bestVideo = videos[0];
        console.log(`✅ Found best video: "${bestVideo.title}" (Score: ${bestVideo.qualityScore.toFixed(2)})`);
        // Always generate documentation for the course content
        console.log('📚 Generating detailed course documentation...');
        const documentation = await generateDetailedDocumentation(bestVideo, language);
        // Generate AI summary
        const aiSummary = await generateAISummary(query, bestVideo, language);
        // Combine data
        const videoWithDocumentation = {
            ...bestVideo,
            documentation
        };
        const responseTime = Date.now() - startTime;
        console.log(`⚡ Total response time: ${responseTime}ms`);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            query,
            language,
            videos: [
                videoWithDocumentation
            ],
            aiSummary,
            hasDocumentation: true,
            totalResults: 1,
            responseTime: `${responseTime}ms`
        });
    } catch (error) {
        console.error('❌ API Error:', error);
        if (error.message.includes('YouTube API')) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'YouTube API error. Check your API key and quota.'
            }, {
                status: 500
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: error.message || 'Unexpected error occurred'
        }, {
            status: 500
        });
    }
}
async function GET() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        status: 'ok',
        message: 'YouTube Course Finder API - Single Best Resource',
        version: '3.0-single-resource',
        endpoints: {
            search: 'POST /api/search-resources'
        }
    });
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__be430ecf._.js.map