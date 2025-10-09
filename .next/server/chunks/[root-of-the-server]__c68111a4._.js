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
// Initialize Gemini AI with 2.5 Flash
const genAI = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GoogleGenerativeAI"](process.env.GEMINI_API_KEY);
// YouTube API configuration
const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
const YOUTUBE_SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search';
const YOUTUBE_VIDEOS_URL = 'https://www.googleapis.com/youtube/v3/videos';
/**
 * Intelligent query analysis using Gemini 2.5 Flash
 */ async function analyzeQueryWithAI(query, language, preferLatest) {
    try {
        const model = genAI.getGenerativeModel({
            model: 'gemini-2.0-flash-exp',
            generationConfig: {
                maxOutputTokens: 150,
                temperature: 0.2
            }
        });
        const prompt = `You are an intelligent AI YouTube Course Finder designed to discover high-quality, complete learning resources for users.

User Query: "${query}"  
Preferred Language: ${language}  
Preference: ${preferLatest ? 'Latest/Recent courses' : 'Best quality courses'}

Your primary goal:
1. Generate the most precise YouTube search query for the requested course.
2. Once videos are fetched (via YouTube API), analyze the metadata — including **title, description, and chapters (if available)** — to summarize what the course covers in a clear and structured **overview + documentation-style format**.

-----------------------------------------
Guidelines for Search Query Generation:
-----------------------------------------
1. Identify the **core learning topic or skill** (e.g., “Python”, “Tally”, “Excel”, “React.js”, “Photoshop”).
2. Add educational keywords such as:
   - "complete course", "full tutorial", "step by step", "beginner to advanced", "masterclass", "in-depth guide"
3. Ensure **language accuracy**:
   - If ${language} = "Hindi", include "Hindi" or "हिंदी" in the query.
   - If ${language} = "English", include "English".
4. Apply the user’s content preference:
   - If preferLatest = true → add "2023", "2024", or "2025" for recent uploads.
   - Else → prioritize "comprehensive", "well-structured", and "long-duration" courses.
5. Keep the final search query **4–10 words**.
6. If no exact match exists (e.g., no Hindi or latest course), fallback gracefully:
   - Fetch the **best available** alternative that still matches the topic closely (even in another language or older version).
7. Return **only one optimized search query**, no explanations or extra text.

-----------------------------------------
Guidelines for Course Overview Generation:
-----------------------------------------
After fetching YouTube API results, analyze the selected video metadata and produce a short structured documentation format with:

- **Course Title:**  
  (Fetched from YouTube video title)
  
- **Language:**  
  (Based on user preference or detected automatically)

- **Duration:**  
  (If available from YouTube API)

- **Course Overview (2–3 lines):**  
  Summarize what this course teaches and who it’s for.

- **Key Modules or Topics Covered:**  
  - List key concepts or chapters (based on video description or chapters metadata)
  - Use bullet points for clarity

- **Why This Course Is Useful:**  
  2–3 bullet points about what makes this course valuable (e.g., hands-on examples, project-based, covers basics to advanced)

-----------------------------------------
Expected Output Format:
-----------------------------------------
{
  "search_query": "optimized YouTube search query",
  "course_overview": {
    "title": "Fetched Course Title",
    "language": "Hindi/English",
    "duration": "e.g., 5 hours",
    "overview": "Short summary of what the course teaches",
    "modules": [
      "Topic 1: Introduction",
      "Topic 2: Core Concepts",
      "Topic 3: Advanced Techniques",
      ...
    ],
    "why_useful": [
      "Covers from basics to expert level",
      "Includes hands-on examples",
      "Latest version explained"
    ]
  }
}

-----------------------------------------
Goal:
-----------------------------------------
Always ensure the user receives:
- The **most accurate course** for their topic and language
- A **concise, well-structured overview** of what the course teaches
- A **fallback suggestion** if the preferred course isn’t available
`;
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const enhancedQuery = response.text().trim().replace(/['"]/g, '');
        console.log(`🤖 AI Enhanced Query: "${query}" → "${enhancedQuery}"`);
        return enhancedQuery;
    } catch (error) {
        console.error('AI query analysis error:', error);
        // Fallback to manual enhancement
        let fallbackQuery = query;
        if (language === 'hindi') {
            fallbackQuery += ' hindi tutorial';
        } else {
            fallbackQuery += ' english tutorial';
        }
        if (preferLatest) {
            fallbackQuery += ' 2024';
        }
        return fallbackQuery;
    }
}
/**
 * Validate if video is relevant to user query using AI
 */ async function validateVideoRelevance(video, originalQuery, language) {
    try {
        const model = genAI.getGenerativeModel({
            model: 'gemini-2.0-flash-exp',
            generationConfig: {
                maxOutputTokens: 50,
                temperature: 0.1
            }
        });
        const prompt = `Is this YouTube video relevant for someone wanting to learn: "${originalQuery}"?

Video Title: ${video.title}
Channel: ${video.channelTitle}
Description: ${video.description.substring(0, 300)}

Expected Language: ${language === 'hindi' ? 'Hindi/Hinglish' : 'English'}

Answer with ONLY "YES" if highly relevant OR "NO" if not relevant.`;
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const answer = response.text().trim().toUpperCase();
        return answer.includes('YES');
    } catch (error) {
        console.error('Video validation error:', error);
        return true; // Default to true on error
    }
}
/**
 * Calculate video quality score
 */ function calculateVideoScore(video, preferLatest) {
    const views = parseInt(video.viewCount || 0);
    const likes = parseInt(video.likeCount || 0);
    const duration = parseDuration(video.duration);
    // Engagement metrics
    const engagementRate = views > 0 ? likes / views : 0;
    const viewScore = Math.log10(views + 1);
    const engagementScore = engagementRate * 10000;
    // Duration scoring - prefer comprehensive courses
    let durationScore;
    if (duration >= 30 && duration <= 300) {
        durationScore = 3; // 30min-5hr sweet spot
    } else if (duration >= 15 && duration <= 420) {
        durationScore = 2; // 15min-7hr acceptable
    } else if (duration >= 10) {
        durationScore = 1; // At least 10 minutes
    } else {
        durationScore = 0.3; // Too short
    }
    // Recency scoring
    const publishDate = new Date(video.publishedAt);
    const monthsOld = (Date.now() - publishDate.getTime()) / (1000 * 60 * 60 * 24 * 30);
    let recencyScore;
    if (preferLatest) {
        // Strong preference for recent content
        if (monthsOld < 3) recencyScore = 5;
        else if (monthsOld < 6) recencyScore = 4;
        else if (monthsOld < 12) recencyScore = 2;
        else if (monthsOld < 24) recencyScore = 1;
        else recencyScore = 0.2;
    } else {
        // Balanced - not too old, not too new
        if (monthsOld < 6) recencyScore = 2;
        else if (monthsOld < 18) recencyScore = 2.5;
        else if (monthsOld < 36) recencyScore = 1.5;
        else recencyScore = 0.5;
    }
    // Calculate final score
    const baseScore = viewScore * 0.30 + engagementScore * 0.35 + durationScore * 0.35;
    const finalScore = preferLatest ? baseScore * 0.4 + recencyScore * 0.6 : baseScore * 0.75 + recencyScore * 0.25;
    return finalScore;
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
 * Search YouTube for relevant courses
 */ async function searchYouTubeCourse(query, language, preferLatest) {
    try {
        // Get AI-enhanced search query
        const enhancedQuery = await analyzeQueryWithAI(query, language, preferLatest);
        console.log(`🔍 Searching YouTube with: "${enhancedQuery}"`);
        // Search parameters
        const searchParams = new URLSearchParams({
            part: 'snippet',
            q: enhancedQuery,
            type: 'video',
            maxResults: 20,
            order: preferLatest ? 'date' : 'relevance',
            videoDuration: 'medium',
            videoDefinition: 'high',
            relevanceLanguage: language === 'hindi' ? 'hi' : 'en',
            key: YOUTUBE_API_KEY
        });
        const searchResponse = await fetch(`${YOUTUBE_SEARCH_URL}?${searchParams}`, {
            signal: AbortSignal.timeout(10000)
        });
        if (!searchResponse.ok) {
            const errorData = await searchResponse.json();
            throw new Error(`YouTube API Error: ${errorData.error?.message || 'Unknown error'}`);
        }
        const searchData = await searchResponse.json();
        if (!searchData.items || searchData.items.length === 0) {
            return null;
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
            signal: AbortSignal.timeout(10000)
        });
        if (!videoResponse.ok) {
            throw new Error('Failed to fetch video details');
        }
        const videoData = await videoResponse.json();
        // Format videos
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
                url: `https://www.youtube.com/watch?v=${video.id}`
            }));
        // Filter by basic criteria
        const filteredVideos = videos.filter((video)=>{
            const duration = parseDuration(video.duration);
            return video.viewCount > 1000 && duration >= 8; // At least 8 minutes
        });
        if (filteredVideos.length === 0) {
            return null;
        }
        // Validate top candidates with AI
        console.log(`🤖 Validating ${Math.min(5, filteredVideos.length)} top candidates with AI...`);
        const validationPromises = filteredVideos.slice(0, 5).map(async (video)=>{
            const isRelevant = await validateVideoRelevance(video, query, language);
            return {
                video,
                isRelevant
            };
        });
        const validatedVideos = await Promise.all(validationPromises);
        const relevantVideos = validatedVideos.filter((v)=>v.isRelevant).map((v)=>v.video);
        // If no validated videos, fall back to all filtered videos
        const videosToScore = relevantVideos.length > 0 ? relevantVideos : filteredVideos;
        // Score and sort
        const scoredVideos = videosToScore.map((video)=>({
                ...video,
                qualityScore: calculateVideoScore(video, preferLatest)
            })).sort((a, b)=>b.qualityScore - a.qualityScore);
        console.log(`✅ Found ${scoredVideos.length} relevant courses`);
        return scoredVideos[0] || null;
    } catch (error) {
        console.error('Error searching YouTube:', error);
        throw error;
    }
}
/**
 * Generate course content outline using AI
 */ async function generateCourseContent(video, language) {
    try {
        const model = genAI.getGenerativeModel({
            model: 'gemini-2.0-flash-exp',
            generationConfig: {
                maxOutputTokens: 1000,
                temperature: 0.6
            }
        });
        const prompt = `Analyze this educational course and create a detailed content outline:

Title: "${video.title}"
Channel: ${video.channelTitle}
Description: ${video.description.substring(0, 600)}

Create a comprehensive course outline in ${language === 'hindi' ? 'Hinglish (Hindi-English mix)' : 'English'}.

List 10-15 specific topics/modules this course covers. Each point should:
- Be specific and actionable
- Show what skills/concepts students will learn
- Progress from beginner to advanced
- Be 1-2 sentences

Format: Return ONLY the bullet points, no numbering, no headers.`;
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const content = response.text();
        // Parse content into clean points
        const points = content.split('\n').map((line)=>line.trim()).filter((line)=>line.length > 0).filter((line)=>line.startsWith('-') || line.startsWith('*') || line.startsWith('•') || /^\d+\./.test(line)).map((line)=>line.replace(/^[-*•]\s*/, '').replace(/^\d+\.\s*/, '').trim()).filter((line)=>line.length > 15 && line.length < 200);
        return points.slice(0, 15);
    } catch (error) {
        console.error('Error generating course content:', error);
        return [];
    }
}
/**
 * Generate AI course analysis
 */ async function generateCourseAnalysis(query, video, language) {
    try {
        const model = genAI.getGenerativeModel({
            model: 'gemini-2.0-flash-exp',
            generationConfig: {
                maxOutputTokens: 400,
                temperature: 0.7
            }
        });
        const duration = Math.round(parseDuration(video.duration));
        const hours = Math.floor(duration / 60);
        const minutes = duration % 60;
        const durationText = hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;
        const prompt = `Write a helpful course recommendation for someone wanting to learn: "${query}"

Course Details:
- Title: ${video.title}
- Instructor: ${video.channelTitle}
- Duration: ${durationText}
- Views: ${video.viewCount.toLocaleString()}
- Engagement: ${video.likeCount.toLocaleString()} likes

Write in ${language === 'hindi' ? 'Hinglish (conversational Hindi-English mix)' : 'clear English'}.

Include:
1. Why this course matches their learning goal (2-3 sentences)
2. What makes it a quality resource (1-2 sentences)
3. Who it's best suited for (1 sentence)

Keep it friendly, encouraging, and concise. No headers or bullet points.`;
        const result = await model.generateContent(prompt);
        const response = await result.response;
        return response.text().trim();
    } catch (error) {
        console.error('Error generating course analysis:', error);
        return null;
    }
}
async function POST(request) {
    const startTime = Date.now();
    try {
        const body = await request.json();
        const { query, language = 'english', preferLatest = false } = body;
        // Validation
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
        console.log(`\n🎯 Search Request: "${query}" | Language: ${language} | Latest: ${preferLatest}`);
        // Search for the best matching course
        const video = await searchYouTubeCourse(query, language, preferLatest);
        if (!video) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                video: null,
                courseAnalysis: language === 'hindi' ? `"${query}" ke liye koi suitable course nahi mila. Kripya different keywords try karein.` : `No suitable courses found for "${query}". Try different keywords or check your spelling.`,
                courseContent: [],
                responseTime: `${Date.now() - startTime}ms`
            });
        }
        console.log(`✅ Selected Course: "${video.title}" by ${video.channelTitle}`);
        // Generate course analysis and content in parallel
        const [courseAnalysis, courseContent] = await Promise.all([
            generateCourseAnalysis(query, video, language),
            generateCourseContent(video, language)
        ]);
        const responseTime = Date.now() - startTime;
        console.log(`⚡ Total response time: ${responseTime}ms\n`);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            query,
            language,
            preferLatest,
            video: {
                ...video,
                durationFormatted: formatDuration(parseDuration(video.duration))
            },
            courseAnalysis,
            courseContent,
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
/**
 * Format duration for display
 */ function formatDuration(minutes) {
    const hours = Math.floor(minutes / 60);
    const mins = Math.round(minutes % 60);
    if (hours > 0) {
        return `${hours}h ${mins}m`;
    }
    return `${mins}m`;
}
async function GET() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        status: 'ok',
        message: 'Intelligent YouTube Course Finder API',
        version: '4.0-ai-enhanced',
        model: 'gemini-2.0-flash-exp',
        endpoints: {
            search: 'POST /api/search-resources'
        }
    });
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__c68111a4._.js.map