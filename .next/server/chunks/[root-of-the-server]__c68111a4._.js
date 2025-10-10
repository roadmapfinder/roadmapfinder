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
const genAI = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GoogleGenerativeAI"](process.env.GEMINI_API_KEY);
const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
const YOUTUBE_SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search';
const YOUTUBE_VIDEOS_URL = 'https://www.googleapis.com/youtube/v3/videos';
/**
 * Deep query analysis to understand user intent
 */ async function analyzeQueryIntent(query, language, preferLatest) {
    try {
        const model = genAI.getGenerativeModel({
            model: 'gemini-2.0-flash-exp',
            generationConfig: {
                maxOutputTokens: 250,
                temperature: 0.3
            }
        });
        const prompt = `Analyze this learning query deeply and extract key information:

User Query: "${query}"
Language: ${language === 'hindi' ? 'Hindi/Hinglish' : 'English'}
Latest Preference: ${preferLatest ? 'Yes - Recent content (2023-2025)' : 'No - Best quality regardless of date'}

Extract:
1. Core Topic/Skill: What exactly they want to learn (programming language, software, concept, skill)
2. Level: Beginner/Intermediate/Advanced (infer from query or assume beginner if unclear)
3. Format Preference: Full course, tutorial series, crash course, or specific topic
4. Key Technologies/Tools: Any specific versions, frameworks, or tools mentioned
5. Context Clues: Any hints about their goal (job, project, exam, hobby)

Then create 3 optimized YouTube search queries:
- Primary: Most specific and comprehensive search
- Secondary: Broader but still focused search
- Fallback: General search with educational keywords

Format your response as:
TOPIC: [core topic]
LEVEL: [level]
FORMAT: [preferred format]
TECH: [specific tech/version if any]
PRIMARY: [best search query]
SECONDARY: [broader search query]
FALLBACK: [general search query]

Make queries natural and effective for YouTube search algorithm.`;
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const analysisText = response.text().trim();
        // Parse the structured response
        const analysis = {
            topic: analysisText.match(/TOPIC:\s*(.+)/i)?.[1]?.trim() || query,
            level: analysisText.match(/LEVEL:\s*(.+)/i)?.[1]?.trim() || 'beginner',
            format: analysisText.match(/FORMAT:\s*(.+)/i)?.[1]?.trim() || 'full course',
            tech: analysisText.match(/TECH:\s*(.+)/i)?.[1]?.trim() || 'general',
            primaryQuery: analysisText.match(/PRIMARY:\s*(.+)/i)?.[1]?.trim(),
            secondaryQuery: analysisText.match(/SECONDARY:\s*(.+)/i)?.[1]?.trim(),
            fallbackQuery: analysisText.match(/FALLBACK:\s*(.+)/i)?.[1]?.trim()
        };
        console.log(`🧠 Query Analysis:
   Topic: ${analysis.topic}
   Level: ${analysis.level}
   Format: ${analysis.format}
   Tech: ${analysis.tech}`);
        return analysis;
    } catch (error) {
        console.error('⚠️ Intent analysis failed:', error.message);
        // Smart fallback with better defaults
        const cleanQuery = query.toLowerCase().trim();
        return {
            topic: query,
            level: 'beginner',
            format: 'full course',
            tech: 'general',
            primaryQuery: `${cleanQuery} complete course tutorial ${language === 'hindi' ? 'hindi' : ''} ${preferLatest ? '2024' : ''}`.trim(),
            secondaryQuery: `${cleanQuery} full tutorial ${language === 'hindi' ? 'hindi' : ''}`.trim(),
            fallbackQuery: `${cleanQuery} ${language === 'hindi' ? 'hindi' : ''}`.trim()
        };
    }
}
/**
 * Enhanced multi-strategy search with intelligent fallback
 */ async function searchYouTubeCourse(query, language, preferLatest) {
    try {
        // Deep analysis first
        const analysis = await analyzeQueryIntent(query, language, preferLatest);
        // Strategy 1: Use AI-analyzed primary query (most specific)
        console.log(`🔍 Strategy 1: Primary search - "${analysis.primaryQuery}"`);
        let results = await executeYouTubeSearch(analysis.primaryQuery, language, preferLatest, 'medium');
        // Strategy 2: Secondary query (broader)
        if (!results || results.length === 0) {
            console.log(`🔍 Strategy 2: Secondary search - "${analysis.secondaryQuery}"`);
            results = await executeYouTubeSearch(analysis.secondaryQuery, language, preferLatest, 'medium');
        }
        // Strategy 3: Fallback query (general)
        if (!results || results.length === 0) {
            console.log(`🔍 Strategy 3: Fallback search - "${analysis.fallbackQuery}"`);
            results = await executeYouTubeSearch(analysis.fallbackQuery, language, preferLatest, 'any');
        }
        // Strategy 4: Last resort - simple topic search
        if (!results || results.length === 0) {
            console.log(`🔍 Strategy 4: Basic topic search`);
            const basicQuery = `${analysis.topic} ${language === 'hindi' ? 'hindi' : ''}`.trim();
            results = await executeYouTubeSearch(basicQuery, language, preferLatest, 'any');
        }
        if (!results || results.length === 0) {
            console.log('❌ All search strategies exhausted');
            return null;
        }
        // Process with context-aware ranking
        const processedVideos = await processAndRankVideos(results, query, analysis, language, preferLatest);
        if (!processedVideos || processedVideos.length === 0) {
            console.log('❌ No valid videos after processing');
            return null;
        }
        const topVideo = processedVideos[0];
        console.log(`✅ Selected: "${topVideo.title}"`);
        console.log(`   Quality Score: ${topVideo.qualityScore.toFixed(2)}`);
        console.log(`   Teaching Score: ${topVideo.teachingScore.toFixed(2)}`);
        console.log(`   Relevance Score: ${topVideo.relevanceScore.toFixed(2)}`);
        return topVideo;
    } catch (error) {
        console.error('❌ Search error:', error);
        throw error;
    }
}
/**
 * Execute YouTube search with optimized parameters
 */ async function executeYouTubeSearch(searchQuery, language, preferLatest, videoDuration = 'medium') {
    try {
        console.log(`   Searching: "${searchQuery}"`);
        const searchParams = new URLSearchParams({
            part: 'snippet',
            q: searchQuery,
            type: 'video',
            maxResults: 30,
            order: preferLatest ? 'date' : 'relevance',
            videoDuration: videoDuration,
            videoDefinition: 'any',
            relevanceLanguage: language === 'hindi' ? 'hi' : 'en',
            key: YOUTUBE_API_KEY
        });
        const searchResponse = await fetch(`${YOUTUBE_SEARCH_URL}?${searchParams}`, {
            signal: AbortSignal.timeout(12000)
        });
        if (!searchResponse.ok) {
            const errorData = await searchResponse.json();
            console.error('❌ YouTube Search Error:', errorData);
            return null;
        }
        const searchData = await searchResponse.json();
        console.log(`   Found ${searchData.items?.length || 0} videos`);
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
            signal: AbortSignal.timeout(12000)
        });
        if (!videoResponse.ok) {
            console.error('❌ Video details fetch failed');
            return null;
        }
        const videoData = await videoResponse.json();
        console.log(`   Retrieved details for ${videoData.items?.length || 0} videos`);
        return videoData.items;
    } catch (error) {
        console.error('⚠️ Search execution error:', error.message);
        return null;
    }
}
/**
 * Advanced video processing with comprehensive scoring
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
    // Apply quality filters (lenient but effective)
    let filteredVideos = videos.filter((video)=>{
        const duration = parseDuration(video.duration);
        const hasViews = video.viewCount > 100; // Minimum engagement
        const hasLikes = video.likeCount > 0;
        const isReasonableLength = duration >= 5; // At least 5 minutes
        return hasViews && hasLikes && isReasonableLength;
    });
    console.log(`📊 After quality filter: ${filteredVideos.length}/${videos.length} videos`);
    if (filteredVideos.length === 0) {
        console.log('⚠️ Filters too strict, using top videos by views');
        filteredVideos = videos.filter((v)=>parseDuration(v.duration) >= 3).sort((a, b)=>b.viewCount - a.viewCount).slice(0, 15);
    }
    // Comprehensive scoring with parallel AI analysis
    const scoredVideos = await Promise.all(filteredVideos.map(async (video)=>{
        // Calculate all score dimensions
        const [relevanceScore, teachingScore] = await Promise.all([
            calculateRelevanceScore(video, originalQuery, analysis, language),
            calculateTeachingQualityScore(video, analysis.level, language)
        ]);
        const qualityScore = calculateVideoQualityScore(video, preferLatest);
        const engagementScore = calculateEngagementScore(video);
        // Weighted final score
        const finalScore = relevanceScore * 0.35 + // Most important: matches user intent
        teachingScore * 0.30 + // Teaching quality
        qualityScore * 0.20 + // Video quality metrics
        engagementScore * 0.15 // Community engagement
        ;
        return {
            ...video,
            qualityScore: finalScore,
            relevanceScore,
            teachingScore,
            videoQualityScore: qualityScore,
            engagementScore
        };
    }));
    // Sort by final score
    const rankedVideos = scoredVideos.sort((a, b)=>b.qualityScore - a.qualityScore);
    console.log(`📊 Top 5 videos by comprehensive score:`);
    rankedVideos.slice(0, 5).forEach((v, i)=>{
        console.log(`   ${i + 1}. "${v.title.substring(0, 60)}..."`);
        console.log(`      Overall: ${v.qualityScore.toFixed(2)} | Rel: ${v.relevanceScore.toFixed(1)} | Teach: ${v.teachingScore.toFixed(1)} | Qual: ${v.videoQualityScore.toFixed(1)}`);
    });
    return rankedVideos;
}
/**
 * AI-powered relevance scoring with deep matching
 */ async function calculateRelevanceScore(video, originalQuery, analysis, language) {
    try {
        const model = genAI.getGenerativeModel({
            model: 'gemini-2.0-flash-exp',
            generationConfig: {
                maxOutputTokens: 100,
                temperature: 0.1
            }
        });
        const prompt = `Rate how well this video matches the learning goal (0-10 scale):

USER WANTS TO LEARN: "${originalQuery}"
Extracted Topic: ${analysis.topic}
Desired Level: ${analysis.level}
Preferred Format: ${analysis.format}
Specific Tech: ${analysis.tech}

VIDEO DETAILS:
Title: "${video.title}"
Channel: "${video.channelTitle}"
Description (first 300 chars): "${video.description.substring(0, 300)}"
Duration: ${formatDuration(parseDuration(video.duration))}
Language Context: ${language === 'hindi' ? 'Hindi/Hinglish' : 'English'}

SCORING CRITERIA (0-10):
- 10: Perfect match - exactly what user needs (comprehensive course on exact topic)
- 8-9: Excellent match - covers topic thoroughly with right approach
- 6-7: Good match - relevant but may miss some aspects
- 4-5: Moderate match - related but not ideal
- 2-3: Weak match - loosely related
- 0-1: Poor match - wrong topic or format

Consider:
1. Does title/description clearly indicate it teaches the exact topic?
2. Is it comprehensive enough (right duration/depth)?
3. Does it match the user's implied skill level?
4. Is the language appropriate?
5. Does it appear to be a structured course/tutorial vs random video?

Return ONLY a number between 0-10 (can use decimals like 8.5).`;
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const scoreText = response.text().trim();
        const score = parseFloat(scoreText);
        return isNaN(score) ? 5 : Math.min(10, Math.max(0, score));
    } catch (error) {
        // Enhanced fallback with semantic matching
        const titleLower = video.title.toLowerCase();
        const descLower = video.description.toLowerCase();
        const queryLower = originalQuery.toLowerCase();
        const topicLower = analysis.topic.toLowerCase();
        let matchScore = 0;
        // Exact topic match
        if (titleLower.includes(topicLower)) matchScore += 3;
        if (descLower.includes(topicLower)) matchScore += 1;
        // Query word matching
        const queryWords = queryLower.split(' ').filter((w)=>w.length > 3);
        queryWords.forEach((word)=>{
            if (titleLower.includes(word)) matchScore += 1.5;
            if (descLower.includes(word)) matchScore += 0.5;
        });
        // Format indicators
        const formatWords = [
            'course',
            'tutorial',
            'complete',
            'full',
            'comprehensive',
            'masterclass',
            'bootcamp'
        ];
        formatWords.forEach((word)=>{
            if (titleLower.includes(word)) matchScore += 1;
        });
        // Level indicators
        if (analysis.level === 'beginner' && (titleLower.includes('beginner') || titleLower.includes('basics'))) matchScore += 1;
        if (analysis.level === 'advanced' && titleLower.includes('advanced')) matchScore += 1;
        return Math.min(10, matchScore);
    }
}
/**
 * Evaluate teaching quality and comprehensiveness
 */ async function calculateTeachingQualityScore(video, level, language) {
    try {
        const model = genAI.getGenerativeModel({
            model: 'gemini-2.0-flash-exp',
            generationConfig: {
                maxOutputTokens: 80,
                temperature: 0.1
            }
        });
        const duration = parseDuration(video.duration);
        const durationText = formatDuration(duration);
        const prompt = `Rate the teaching quality potential of this video (0-10):

Title: "${video.title}"
Channel: "${video.channelTitle}"
Duration: ${durationText}
Target Level: ${level}
Views: ${video.viewCount.toLocaleString()}
Engagement: ${video.likeCount.toLocaleString()} likes, ${video.commentCount.toLocaleString()} comments

Evaluate:
1. Title clarity and professionalism
2. Duration appropriateness (too short = superficial, too long = may be unfocused)
3. Channel credibility (professional educational names vs random)
4. Engagement metrics (high likes/comments = good teaching)
5. Does it seem comprehensive or just a quick tip?

Scoring:
- 9-10: Excellent teaching quality indicators (professional, comprehensive, highly engaged)
- 7-8: Good teaching quality (clear, adequate depth, decent engagement)
- 5-6: Moderate quality (basic but functional)
- 3-4: Below average (unclear, too brief, low engagement)
- 0-2: Poor quality indicators

Return ONLY a number 0-10.`;
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const score = parseFloat(response.text().trim());
        return isNaN(score) ? 5 : Math.min(10, Math.max(0, score));
    } catch (error) {
        // Heuristic-based fallback
        const duration = parseDuration(video.duration);
        let score = 5;
        // Duration quality for courses
        if (duration >= 60 && duration <= 600) score += 2; // 1-10 hours ideal
        else if (duration >= 30) score += 1.5; // 30min+ good
        else if (duration >= 15) score += 1; // 15min+ acceptable
        else if (duration < 10) score -= 1; // Too short
        // Channel credibility signals
        const channelLower = video.channelTitle.toLowerCase();
        const professionalWords = [
            'academy',
            'tutorial',
            'university',
            'institute',
            'learning',
            'education',
            'tech',
            'code'
        ];
        if (professionalWords.some((word)=>channelLower.includes(word))) score += 1;
        // Title quality
        const titleLower = video.title.toLowerCase();
        const qualityWords = [
            'complete',
            'comprehensive',
            'full',
            'master',
            'ultimate',
            'definitive'
        ];
        if (qualityWords.some((word)=>titleLower.includes(word))) score += 1;
        // Engagement
        const engagementRate = video.viewCount > 0 ? video.likeCount / video.viewCount : 0;
        if (engagementRate > 0.03) score += 1; // 3%+ like rate is good
        if (video.commentCount > 100) score += 0.5; // Active community
        return Math.min(10, Math.max(0, score));
    }
}
/**
 * Calculate video quality score based on metrics
 */ function calculateVideoQualityScore(video, preferLatest) {
    const views = parseInt(video.viewCount || 0);
    const likes = parseInt(video.likeCount || 0);
    const duration = parseDuration(video.duration);
    // View score (logarithmic to prevent mega-viral videos from dominating)
    const viewScore = Math.min(10, Math.log10(views + 1) * 1.5);
    // Engagement rate
    const engagementRate = views > 0 ? likes / views : 0;
    const engagementScore = Math.min(10, engagementRate * 200); // 5% = full score
    // Duration appropriateness for courses
    let durationScore;
    if (duration >= 60 && duration <= 600) durationScore = 10; // 1-10 hours ideal
    else if (duration >= 30) durationScore = 8; // 30min+ good
    else if (duration >= 15) durationScore = 6; // 15min+ okay
    else if (duration >= 10) durationScore = 4; // 10min+ minimal
    else durationScore = 2; // Too short
    // Recency score
    const publishDate = new Date(video.publishedAt);
    const monthsOld = (Date.now() - publishDate.getTime()) / (1000 * 60 * 60 * 24 * 30);
    let recencyScore;
    if (preferLatest) {
        // Strong preference for latest
        if (monthsOld < 3) recencyScore = 10;
        else if (monthsOld < 6) recencyScore = 8;
        else if (monthsOld < 12) recencyScore = 6;
        else if (monthsOld < 24) recencyScore = 4;
        else recencyScore = 2;
    } else {
        // Moderate preference for recent, but quality matters more
        if (monthsOld < 12) recencyScore = 8;
        else if (monthsOld < 24) recencyScore = 7;
        else if (monthsOld < 36) recencyScore = 6;
        else recencyScore = 5;
    }
    // Weighted combination
    if (preferLatest) {
        return viewScore * 0.2 + engagementScore * 0.2 + durationScore * 0.3 + recencyScore * 0.3;
    } else {
        return viewScore * 0.3 + engagementScore * 0.3 + durationScore * 0.3 + recencyScore * 0.1;
    }
}
/**
 * Calculate engagement score
 */ function calculateEngagementScore(video) {
    const views = parseInt(video.viewCount || 0);
    const likes = parseInt(video.likeCount || 0);
    const comments = parseInt(video.commentCount || 0);
    if (views === 0) return 0;
    const likeRate = likes / views;
    const commentRate = comments / views;
    // Normalize engagement metrics
    const likeScore = Math.min(10, likeRate * 200); // 5% like rate = full score
    const commentScore = Math.min(10, commentRate * 500); // 2% comment rate = full score
    return likeScore * 0.7 + commentScore * 0.3;
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
 * Format duration
 */ function formatDuration(minutes) {
    const hours = Math.floor(minutes / 60);
    const mins = Math.round(minutes % 60);
    return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
}
/**
 * Generate comprehensive course content outline
 */ async function generateCourseContent(video, language, analysis) {
    try {
        const model = genAI.getGenerativeModel({
            model: 'gemini-2.0-flash-exp',
            generationConfig: {
                maxOutputTokens: 1200,
                temperature: 0.6
            }
        });
        const prompt = `Create a detailed, structured learning outline for this course.

Course Information:
- Title: "${video.title}"
- Channel: "${video.channelTitle}"
- Duration: ${formatDuration(parseDuration(video.duration))}
- Description: ${video.description.substring(0, 700)}

User Context:
- Learning Goal: ${analysis.topic}
- Skill Level: ${analysis.level}

Create 12-18 specific learning modules/topics in ${language === 'hindi' ? 'Hinglish (natural mix of Hindi & English)' : 'English'}.

Requirements:
1. Start with fundamentals/basics, progress to advanced
2. Each module should be 1-2 sentences explaining WHAT will be learned
3. Be specific and actionable (not vague like "Introduction")
4. Use engaging action verbs: Learn, Master, Build, Understand, Create, Implement, Design, etc.
5. Make it feel like a structured curriculum
6. Include practical applications and real-world examples where relevant
7. Coverage should feel comprehensive and complete

Good examples:
✓ "Master the fundamental syntax and data types including strings, numbers, lists, and dictionaries"
✓ "Build your first interactive web application using modern frameworks and best practices"
✓ "Understand advanced concepts like closures, promises, and async/await for efficient code"

Bad examples:
✗ "Introduction" (too vague)
✗ "Basics" (not specific)
✗ "Learn programming" (not actionable)

Format: Use bullet points with "-", no numbering. Each point should feel substantial.`;
        const result = await model.generateContent(prompt);
        const content = (await result.response).text();
        const points = content.split('\n').map((line)=>line.trim()).filter((line)=>line.length > 0).map((line)=>line.replace(/^[-*•]\s*|\d+\.\s*/g, '').trim()).filter((line)=>line.length > 30 && line.length < 300) // Ensure substantial points
        .slice(0, 18);
        return points.length >= 8 ? points : [
            `Master the fundamentals of ${analysis.topic} from ground up`,
            `Understand core concepts and principles with clear explanations`,
            `Learn essential techniques and best practices used by professionals`,
            `Practice with hands-on examples and real-world scenarios`,
            `Build practical projects to solidify your understanding`,
            `Explore advanced features and optimization strategies`,
            `Develop problem-solving skills specific to ${analysis.topic}`,
            `Apply your knowledge to create professional-grade solutions`
        ];
    } catch (error) {
        console.error('⚠️ Content generation error:', error.message);
        return [
            `Learn ${analysis.topic} from beginner to advanced level`,
            `Master fundamental concepts and core principles`,
            `Practice with real-world examples and exercises`,
            `Build practical projects to reinforce learning`,
            `Understand best practices and industry standards`,
            `Develop professional-level skills`
        ];
    }
}
/**
 * Generate intelligent, personalized course analysis
 */ async function generateCourseAnalysis(query, video, language, analysis) {
    try {
        const model = genAI.getGenerativeModel({
            model: 'gemini-2.0-flash-exp',
            generationConfig: {
                maxOutputTokens: 500,
                temperature: 0.7
            }
        });
        const duration = Math.round(parseDuration(video.duration));
        const hours = Math.floor(duration / 60);
        const minutes = duration % 60;
        const durationText = hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;
        const prompt = `Write a compelling, personalized course recommendation for someone wanting to learn "${query}".

Course Details:
- Title: ${video.title}
- Instructor/Channel: ${video.channelTitle}
- Duration: ${durationText}
- Views: ${video.viewCount.toLocaleString()}
- Engagement: ${video.likeCount.toLocaleString()} likes, ${video.commentCount.toLocaleString()} comments
- Published: ${new Date(video.publishedAt).toLocaleDateString()}

User Context:
- What they want: ${analysis.topic}
- Skill level: ${analysis.level}
- Preferred format: ${analysis.format}

Write in ${language === 'hindi' ? 'Hinglish (natural, conversational mix of Hindi and English)' : 'English'}.

Create a 5-6 sentence recommendation that:
1. Opens with why this course is perfect for their specific goal (be specific, not generic)
2. Highlights the course's strongest qualities (credibility, comprehensiveness, teaching style)
3. Mentions what makes it stand out (views, engagement, instructor reputation, etc.)
4. Addresses their skill level appropriately
5. Ends with an encouraging, motivating call-to-action

Tone: Friendly, encouraging, confident but not overselling. Sound like a helpful friend recommending a great resource.

DO NOT:
- Use generic phrases like "great course" without context
- Just list features without explaining value
- Be overly salesy or use excessive exclamations
- Make unsupported claims

DO:
- Be specific about what they'll learn
- Connect the course directly to their goal
- Use social proof naturally (views/likes/comments)
- Sound genuinely enthusiastic but authentic`;
        const result = await model.generateContent(prompt);
        const analysisText = (await result.response).text().trim();
        return analysisText || `This comprehensive ${durationText} course by ${video.channelTitle} is perfect for mastering ${analysis.topic}. With ${video.viewCount.toLocaleString()} views and ${video.likeCount.toLocaleString()} likes, it's a proven resource that covers everything from basics to advanced concepts. The structured approach makes it ideal for ${analysis.level} learners. Start your learning journey today!`;
    } catch (error) {
        console.error('⚠️ Analysis error:', error.message);
        const durationText = formatDuration(parseDuration(video.duration));
        return language === 'hindi' ? `Ye ${durationText} ka course ${analysis.topic} seekhne ke liye perfect hai! ${video.channelTitle} ne isko bahut achhe se explain kiya hai aur ${video.viewCount.toLocaleString()} views aur ${video.likeCount.toLocaleString()} likes dikhaate hain ki ye ek trusted resource hai. ${analysis.level} level ke liye ideal. Aaj hi shuru karein!` : `This ${durationText} course is perfect for learning ${analysis.topic}. ${video.channelTitle} explains everything clearly, and with ${video.viewCount.toLocaleString()} views and ${video.likeCount.toLocaleString()} likes, it's a trusted resource. Ideal for ${analysis.level} level learners. Start today!`;
    }
}
async function POST(request) {
    const startTime = Date.now();
    try {
        const body = await request.json();
        const { query, language = 'english', preferLatest = false } = body;
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
        console.log(`\n🎯 === NEW REQUEST ===`);
        console.log(`Query: "${query}"`);
        console.log(`Language: ${language}`);
        console.log(`Latest Preference: ${preferLatest}`);
        console.log(`======================\n`);
        const video = await searchYouTubeCourse(query, language, preferLatest);
        if (!video) {
            console.log('❌ No course found after exhaustive search');
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                video: null,
                courseAnalysis: language === 'hindi' ? `"${query}" ke liye koi suitable course nahi mila. Kripya alag keywords try karein, spelling check karein, ya thoda general search term use karein.` : `No suitable courses found for "${query}". Please try different keywords, check spelling, or use more general search terms.`,
                courseContent: [],
                responseTime: `${Date.now() - startTime}ms`,
                suggestions: language === 'hindi' ? [
                    'Keywords ko simplify karein (jaise "learn python basics" ki jagah "python tutorial")',
                    'English terms try karein agar Hindi mein results nahi mil rahe',
                    'General terms use karein (jaise "web development" ki jagah "html css")'
                ] : [
                    'Try simplifying your keywords',
                    'Use more general terms',
                    'Check spelling and try alternative phrasings',
                    'Search for broader topics first'
                ]
            });
        }
        // Analyze the query deeply first
        const analysis = await analyzeQueryIntent(query, language, preferLatest);
        // Generate analysis and content in parallel with context
        const [courseAnalysis, courseContent] = await Promise.all([
            generateCourseAnalysis(query, video, language, analysis),
            generateCourseContent(video, language, analysis)
        ]);
        const responseTime = Date.now() - startTime;
        console.log(`\n⚡ === REQUEST COMPLETED ===`);
        console.log(`Time: ${responseTime}ms`);
        console.log(`Selected: "${video.title}"`);
        console.log(`Channel: ${video.channelTitle}`);
        console.log(`Quality Score: ${video.qualityScore.toFixed(2)}/10`);
        console.log(`===========================\n`);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            query,
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
                // Quality metrics for transparency
                scores: {
                    overall: parseFloat(video.qualityScore.toFixed(2)),
                    relevance: parseFloat(video.relevanceScore.toFixed(2)),
                    teaching: parseFloat(video.teachingScore.toFixed(2)),
                    quality: parseFloat(video.videoQualityScore.toFixed(2)),
                    engagement: parseFloat(video.engagementScore.toFixed(2))
                }
            },
            courseAnalysis,
            courseContent,
            metadata: {
                analyzedTopic: analysis.topic,
                detectedLevel: analysis.level,
                preferredFormat: analysis.format,
                responseTime: `${responseTime}ms`,
                searchStrategiesUsed: video.searchStrategy || 'multi-strategy',
                totalVideosAnalyzed: video.totalAnalyzed || 'N/A'
            }
        });
    } catch (error) {
        console.error('❌ === API ERROR ===');
        console.error('Error:', error);
        console.error('Stack:', error.stack);
        console.error('===================\n');
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: error.message || 'Internal server error',
            details: ("TURBOPACK compile-time truthy", 1) ? error.stack : ("TURBOPACK unreachable", undefined),
            timestamp: new Date().toISOString()
        }, {
            status: 500
        });
    }
}
async function GET() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        status: 'operational',
        service: 'YouTube Course Finder API',
        version: '6.0.0',
        timestamp: new Date().toISOString(),
        features: [
            '🧠 Deep query intent analysis',
            '🎯 Multi-dimensional relevance scoring',
            '👨‍🏫 Teaching quality evaluation',
            '📊 Comprehensive video ranking',
            '🔄 Intelligent multi-strategy search',
            '🎓 Context-aware content generation',
            '🌐 Bilingual support (English/Hindi)',
            '⚡ Optimized performance'
        ],
        endpoints: {
            POST: '/api/search-resources - Search for courses',
            GET: '/api/search-resources - API status'
        },
        scoring: {
            relevance: '35% - How well video matches user intent',
            teaching: '30% - Quality and comprehensiveness of teaching',
            quality: '20% - Video metrics and production quality',
            engagement: '15% - Community engagement and feedback'
        }
    });
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__c68111a4._.js.map