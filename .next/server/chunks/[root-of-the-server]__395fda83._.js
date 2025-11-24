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
"[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("@opentelemetry/api", () => require("@opentelemetry/api"));

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
    "OPTIONS": (()=>OPTIONS),
    "POST": (()=>POST)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@google/generative-ai/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
;
const genAI = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GoogleGenerativeAI"](process.env.GEMINI_API_KEY);
// Premium channels with course specialization metadata
const PREMIUM_CHANNELS = {
    hindi: [
        {
            name: "Chai aur Code",
            specialty: [
                "javascript",
                "react",
                "full-stack"
            ],
            courseQuality: "high"
        },
        {
            name: "Code Step By Step",
            specialty: [
                "java",
                "spring",
                "dsa"
            ],
            courseQuality: "high"
        },
        {
            name: "Coder's Gyan",
            specialty: [
                "python",
                "django",
                "web"
            ],
            courseQuality: "high"
        },
        {
            name: "Apna College",
            specialty: [
                "dsa",
                "cpp",
                "java",
                "python"
            ],
            courseQuality: "excellent"
        },
        {
            name: "Code with Sagar",
            specialty: [
                "javascript",
                "react",
                "node"
            ],
            courseQuality: "high"
        },
        {
            name: "CodeWithHarry",
            specialty: [
                "python",
                "javascript",
                "web"
            ],
            courseQuality: "excellent"
        },
        {
            name: "Piyush Garg",
            specialty: [
                "javascript",
                "react",
                "system-design"
            ],
            courseQuality: "high"
        },
        {
            name: "Harkirat Singh",
            specialty: [
                "web3",
                "full-stack",
                "system-design"
            ],
            courseQuality: "excellent"
        },
        {
            name: "Sheryians Coding School",
            specialty: [
                "javascript",
                "gsap",
                "frontend"
            ],
            courseQuality: "high"
        },
        {
            name: "WsCube Tech",
            specialty: [
                "web",
                "python",
                "database"
            ],
            courseQuality: "good"
        }
    ],
    english: [
        {
            name: "Programming with Mosh",
            specialty: [
                "python",
                "javascript",
                "react"
            ],
            courseQuality: "excellent"
        },
        {
            name: "Bro Code",
            specialty: [
                "java",
                "python",
                "cpp"
            ],
            courseQuality: "excellent"
        },
        {
            name: "freeCodeCamp.org",
            specialty: [
                "all"
            ],
            courseQuality: "excellent"
        },
        {
            name: "Traversy Media",
            specialty: [
                "web",
                "javascript",
                "frameworks"
            ],
            courseQuality: "high"
        },
        {
            name: "Net Ninja",
            specialty: [
                "javascript",
                "react",
                "vue",
                "firebase"
            ],
            courseQuality: "excellent"
        },
        {
            name: "Corey Schafer",
            specialty: [
                "python",
                "django",
                "flask"
            ],
            courseQuality: "excellent"
        },
        {
            name: "Web Dev Simplified",
            specialty: [
                "javascript",
                "react",
                "css"
            ],
            courseQuality: "high"
        },
        {
            name: "Fireship",
            specialty: [
                "quick-concepts",
                "modern-web"
            ],
            courseQuality: "good"
        }
    ]
};
// Course quality indicators
const COURSE_KEYWORDS = {
    strong: [
        "complete course",
        "full course",
        "full tutorial",
        "crash course",
        "bootcamp",
        "masterclass",
        "zero to hero",
        "beginner to advanced",
        "complete guide"
    ],
    moderate: [
        "tutorial series",
        "learning path",
        "step by step",
        "comprehensive",
        "in-depth",
        "detailed tutorial"
    ],
    weak: [
        "quick tip",
        "snippet",
        "short tutorial",
        "in 5 minutes",
        "speedrun"
    ]
};
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW = 60000;
const MAX_REQUESTS = 10;
function checkRateLimit(identifier) {
    const now = Date.now();
    const userRequests = rateLimitMap.get(identifier) || [];
    const recentRequests = userRequests.filter((time)=>now - time < RATE_LIMIT_WINDOW);
    if (recentRequests.length >= MAX_REQUESTS) return false;
    recentRequests.push(now);
    rateLimitMap.set(identifier, recentRequests);
    return true;
}
function validateInput(query, language, preferLatest) {
    if (!query || typeof query !== "string") throw new Error("Query is required and must be a string");
    if (query.length > 200) throw new Error("Query too long (max 200 characters)");
    if (![
        "hindi",
        "english"
    ].includes(language)) throw new Error("Language must be 'hindi' or 'english'");
    if (typeof preferLatest !== "boolean") throw new Error("preferLatest must be a boolean");
}
// Parse ISO 8601 duration to minutes
function parseDuration(duration) {
    const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
    if (!match) return 0;
    const hours = parseInt(match[1] || 0);
    const minutes = parseInt(match[2] || 0);
    const seconds = parseInt(match[3] || 0);
    return hours * 60 + minutes + seconds / 60;
}
// Detect if content is a complete course
function detectCourseQuality(video) {
    const text = `${video.title} ${video.description}`.toLowerCase();
    let score = 0;
    // Strong course indicators
    COURSE_KEYWORDS.strong.forEach((keyword)=>{
        if (text.includes(keyword)) score += 3;
    });
    // Moderate indicators
    COURSE_KEYWORDS.moderate.forEach((keyword)=>{
        if (text.includes(keyword)) score += 1.5;
    });
    // Negative indicators (snippets)
    COURSE_KEYWORDS.weak.forEach((keyword)=>{
        if (text.includes(keyword)) score -= 2;
    });
    // Duration bonus (longer = more likely complete course)
    const durationMins = parseDuration(video.duration);
    if (durationMins > 180) score += 4; // 3+ hours
    else if (durationMins > 60) score += 2; // 1+ hour
    else if (durationMins < 15) score -= 2; // Too short
    // Playlist indicators
    if (text.includes("playlist") || text.includes("series")) score += 2;
    // Chapter/timestamp indicators
    if (text.includes("chapters") || text.includes("timestamps") || text.includes("00:00")) score += 2;
    return {
        score,
        isLikelyCourse: score >= 3,
        durationMinutes: durationMins,
        quality: score >= 6 ? "excellent" : score >= 3 ? "good" : "moderate"
    };
}
// Build enhanced YouTube query for courses
function buildCourseQuery(query, language) {
    const langKeyword = language === "hindi" ? "hindi" : "english";
    const cleanQuery = query.trim().replace(/[^\w\s]/gi, " ").replace(/\s+/g, " ");
    // Prioritize course-specific terms
    return `${cleanQuery} ${langKeyword} complete course tutorial full`;
}
// Get relevant premium channels based on query
function getRelevantChannels(query, language) {
    const channels = PREMIUM_CHANNELS[language] || [];
    const queryLower = query.toLowerCase();
    // Match channels by specialty
    const relevant = channels.filter((channel)=>channel.specialty.some((spec)=>queryLower.includes(spec) || spec === "all"));
    // Return all if no specific match, but prioritize excellent quality
    return relevant.length > 0 ? relevant.sort((a, b)=>{
        const qualityOrder = {
            excellent: 3,
            high: 2,
            good: 1
        };
        return (qualityOrder[b.courseQuality] || 0) - (qualityOrder[a.courseQuality] || 0);
    }) : channels.filter((c)=>c.courseQuality === "excellent" || c.courseQuality === "high");
}
// Search premium channels with course focus
async function searchPremiumChannels(query, language, preferLatest, apiKey) {
    const relevantChannels = getRelevantChannels(query, language);
    const searchQuery = buildCourseQuery(query, language);
    const relevanceLanguage = language === "hindi" ? "hi" : "en";
    // Search for each relevant channel
    const channelPromises = relevantChannels.slice(0, 6).map(async (channel)=>{
        const channelQuery = `${searchQuery} ${channel.name}`;
        const searchUrl = new URL("https://www.googleapis.com/youtube/v3/search");
        searchUrl.searchParams.append("part", "snippet");
        searchUrl.searchParams.append("q", channelQuery);
        searchUrl.searchParams.append("type", "video");
        searchUrl.searchParams.append("videoDuration", "long");
        searchUrl.searchParams.append("videoDefinition", "high");
        searchUrl.searchParams.append("relevanceLanguage", relevanceLanguage);
        searchUrl.searchParams.append("order", preferLatest ? "date" : "relevance");
        searchUrl.searchParams.append("maxResults", "5");
        searchUrl.searchParams.append("key", apiKey);
        // Add date filter for latest videos
        if (preferLatest) {
            const oneYearAgo = new Date();
            oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
            searchUrl.searchParams.append("publishedAfter", oneYearAgo.toISOString());
        }
        try {
            const response = await fetch(searchUrl.toString(), {
                next: {
                    revalidate: 3600
                }
            });
            if (!response.ok) return [];
            const data = await response.json();
            return data.items || [];
        } catch (error) {
            console.error(`Error searching ${channel.name}:`, error);
            return [];
        }
    });
    const results = await Promise.all(channelPromises);
    const allItems = results.flat();
    if (allItems.length === 0) return [];
    return await fetchVideoDetails(allItems, apiKey);
}
// General search with course focus
async function searchGeneralVideos(query, language, preferLatest, apiKey) {
    const searchQuery = buildCourseQuery(query, language);
    const relevanceLanguage = language === "hindi" ? "hi" : "en";
    const searchUrl = new URL("https://www.googleapis.com/youtube/v3/search");
    searchUrl.searchParams.append("part", "snippet");
    searchUrl.searchParams.append("q", searchQuery);
    searchUrl.searchParams.append("type", "video");
    searchUrl.searchParams.append("videoDuration", "long");
    searchUrl.searchParams.append("videoDefinition", "high");
    searchUrl.searchParams.append("relevanceLanguage", relevanceLanguage);
    searchUrl.searchParams.append("order", preferLatest ? "date" : "relevance");
    searchUrl.searchParams.append("maxResults", "15");
    searchUrl.searchParams.append("key", apiKey);
    // Add date filter for latest videos
    if (preferLatest) {
        const oneYearAgo = new Date();
        oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
        searchUrl.searchParams.append("publishedAfter", oneYearAgo.toISOString());
    }
    const response = await fetch(searchUrl.toString(), {
        next: {
            revalidate: 3600
        }
    });
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`YouTube API error: ${errorData.error?.message || "Unknown error"}`);
    }
    const data = await response.json();
    if (!data.items || data.items.length === 0) return [];
    return await fetchVideoDetails(data.items, apiKey);
}
async function fetchVideoDetails(items, apiKey) {
    const videoIds = items.map((item)=>item.id.videoId).join(",");
    const videoUrl = new URL("https://www.googleapis.com/youtube/v3/videos");
    videoUrl.searchParams.append("part", "snippet,contentDetails,statistics");
    videoUrl.searchParams.append("id", videoIds);
    videoUrl.searchParams.append("key", apiKey);
    const response = await fetch(videoUrl.toString(), {
        next: {
            revalidate: 3600
        }
    });
    if (!response.ok) throw new Error("Failed to fetch video details");
    const videoData = await response.json();
    return videoData.items.map((video)=>({
            id: video.id,
            title: video.snippet.title,
            description: video.snippet.description,
            thumbnail: video.snippet.thumbnails.high?.url || video.snippet.thumbnails.medium?.url,
            channelTitle: video.snippet.channelTitle,
            publishedAt: video.snippet.publishedAt,
            duration: video.contentDetails.duration,
            viewCount: parseInt(video.statistics.viewCount || "0"),
            likeCount: parseInt(video.statistics.likeCount || "0"),
            commentCount: parseInt(video.statistics.commentCount || "0"),
            url: `https://www.youtube.com/watch?v=${video.id}`
        }));
}
async function fetchYouTubeVideos(query, language, preferLatest) {
    const apiKey = process.env.YOUTUBE_API_KEY;
    if (!apiKey) throw new Error("YouTube API key not configured");
    let allVideos = [];
    // Premium channels first
    try {
        const premiumVideos = await searchPremiumChannels(query, language, preferLatest, apiKey);
        allVideos.push(...premiumVideos);
    } catch (error) {
        console.error("Premium channel search error:", error);
    }
    // General search if needed
    if (allVideos.length < 8) {
        try {
            const generalVideos = await searchGeneralVideos(query, language, preferLatest, apiKey);
            allVideos.push(...generalVideos);
        } catch (error) {
            console.error("General search error:", error);
        }
    }
    // Remove duplicates
    const uniqueVideos = allVideos.filter((video, index, self)=>index === self.findIndex((v)=>v.id === video.id));
    return uniqueVideos;
}
function isPremiumChannel(channelName, language) {
    const channels = PREMIUM_CHANNELS[language] || [];
    return channels.some((channel)=>channelName.toLowerCase().includes(channel.name.toLowerCase()));
}
function getPremiumChannelInfo(channelName, language) {
    const channels = PREMIUM_CHANNELS[language] || [];
    return channels.find((channel)=>channelName.toLowerCase().includes(channel.name.toLowerCase()));
}
function calculateVideoScore(video, preferLatest, language, query) {
    const views = video.viewCount || 0;
    const likes = video.likeCount || 0;
    const comments = video.commentCount || 0;
    // Course quality detection
    const courseAnalysis = detectCourseQuality(video);
    const courseQualityBoost = courseAnalysis.isLikelyCourse ? 2.5 : 0.5;
    // Premium channel boost with quality consideration
    const channelInfo = getPremiumChannelInfo(video.channelTitle, language);
    let premiumBoost = 1.0;
    if (channelInfo) {
        const qualityMultiplier = {
            excellent: 2.5,
            high: 2.0,
            good: 1.5
        };
        premiumBoost = qualityMultiplier[channelInfo.courseQuality] || 1.5;
        // Extra boost if channel specialty matches query
        const queryLower = query.toLowerCase();
        if (channelInfo.specialty.some((spec)=>queryLower.includes(spec))) {
            premiumBoost *= 1.3;
        }
    }
    // Engagement metrics
    const engagementRate = views > 0 ? (likes + comments) / views : 0;
    const likeRatio = views > 0 ? likes / views : 0;
    // Recency score
    let recencyScore = 0;
    if (preferLatest) {
        const publishDate = new Date(video.publishedAt);
        const now = new Date();
        const daysDiff = (now - publishDate) / (1000 * 60 * 60 * 24);
        recencyScore = Math.max(0, 1 - daysDiff / 365);
    }
    // Popularity (logarithmic)
    const popularityScore = Math.log10(views + 1) / 10;
    // Duration scoring (prefer longer, comprehensive content)
    const durationMins = courseAnalysis.durationMinutes;
    let durationScore = 0;
    if (durationMins > 120) durationScore = 1.0; // 2+ hours excellent
    else if (durationMins > 60) durationScore = 0.8; // 1+ hour good
    else if (durationMins > 30) durationScore = 0.5; // 30+ mins moderate
    else durationScore = 0.2; // Short videos
    // Combined score
    const baseScore = popularityScore * 0.20 + engagementRate * 1000 * 0.20 + likeRatio * 100 * 0.15 + recencyScore * 0.15 + durationScore * 0.30;
    return baseScore * premiumBoost * courseQualityBoost;
}
async function analyzeWithAI(videos, query, language, preferLatest) {
    const model = genAI.getGenerativeModel({
        model: "gemini-2.0-flash-exp",
        generationConfig: {
            temperature: 0.4,
            topP: 0.9,
            topK: 40,
            maxOutputTokens: 1500
        }
    });
    const channelList = PREMIUM_CHANNELS[language].map((c)=>`${c.name} (${c.courseQuality})`).join(", ");
    const videoSummaries = videos.slice(0, 10).map((video, idx)=>{
        const courseAnalysis = detectCourseQuality(video);
        const channelInfo = getPremiumChannelInfo(video.channelTitle, language);
        return {
            rank: idx + 1,
            title: video.title,
            channel: video.channelTitle,
            isPremiumChannel: !!channelInfo,
            channelQuality: channelInfo?.courseQuality || "unknown",
            channelSpecialty: channelInfo?.specialty || [],
            durationMinutes: Math.round(courseAnalysis.durationMinutes),
            views: video.viewCount,
            likes: video.likeCount,
            publishedAt: video.publishedAt,
            courseQuality: courseAnalysis.quality,
            isLikelyCourse: courseAnalysis.isLikelyCourse,
            description: video.description.substring(0, 600)
        };
    });
    const prompt = `You are an expert educational content curator specializing in identifying COMPLETE programming courses and tutorials.

**CRITICAL REQUIREMENT**: The user is searching for a COMPLETE, COMPREHENSIVE COURSE on "${query}", NOT short tutorials or quick tips.

**USER PREFERENCES:**
- Query: "${query}"
- Language Preference: ${language === "hindi" ? "Hindi" : "English"} (STRICTLY ENFORCE - videos MUST be in this language)
- Latest Content: ${preferLatest ? "YES - User wants the most recent/updated content from the last year" : "NO - Relevance and quality are more important than recency"}

**PREMIUM CHANNELS (${language.toUpperCase()}):**
${channelList}

**Available Videos (with course analysis):**
${JSON.stringify(videoSummaries, null, 2)}

**SELECTION CRITERIA (STRICTLY PRIORITIZED):**

1. **LANGUAGE MATCH (MANDATORY - FILTER OUT NON-MATCHING):**
   - ${language === "hindi" ? "Video MUST be in Hindi - reject if English or other language" : "Video MUST be in English - reject if Hindi or other language"}
   - Check title, channel name, and description for language indicators
   - Hindi channels: Chai aur Code, Code Step By Step, Coder's Gyan, Apna College, CodeWithHarry, etc.
   - English channels: freeCodeCamp, Traversy Media, Net Ninja, Programming with Mosh, etc.

2. **LATEST CONTENT PREFERENCE (${preferLatest ? "HIGH PRIORITY - 25% weight" : "LOW PRIORITY - 5% weight"}):**
   ${preferLatest ? "- STRONGLY prefer videos from the last 6-12 months\n   - Recent content shows latest best practices and updates\n   - publishedAt date is CRITICAL in selection" : "- Quality and completeness matter more than recency\n   - Older but comprehensive courses are acceptable"}

3. **COMPLETE COURSE REQUIREMENT (MANDATORY - 35% weight)**:
   - MUST be a full/complete course, NOT snippets or quick tutorials
   - Look for: "complete course", "full tutorial", "bootcamp", "zero to hero", "A to Z"
   - Duration: Prefer 60+ minutes (courses are typically 1-5+ hours)
   - Check description for chapters/timestamps/comprehensive content structure
   - isLikelyCourse: true is STRONGLY preferred

4. **Premium Channel Priority (20% weight)**:
   - Premium channels with "excellent" quality get highest priority
   - If channel specialty matches query topic, give extra weight
   - Trust established educators over random creators

5. **Content Relevance (15% weight)**:
   - Does the course content EXACTLY match what user asked for?
   - MongoDB query → should teach MongoDB specifically, not general databases
   - React query → should be React-focused, not general JavaScript

6. **Teaching Quality Indicators (5% weight)**:
   - Structured description with clear learning outcomes
   - Good engagement (views, likes)

**YOUR TASKS:**

1. **VALIDATE LANGUAGE MATCH**: First, verify that the selected video is in ${language === "hindi" ? "Hindi" : "English"}. If NO videos match the language, set confidence to 0.

2. **Identify Best COMPLETE Course**: Select the video that:
   - Matches the ${language === "hindi" ? "Hindi" : "English"} language requirement
   - ${preferLatest ? "Is from the last 6-12 months (check publishedAt)" : "Has the best quality and completeness"}
   - Is the most comprehensive, complete course matching "${query}"
   - Give HEAVY preference to videos marked isLikelyCourse: true and premium channels

3. **Extract Detailed Course Syllabus**: From the description, extract 7-10 SPECIFIC topics/modules covered. Be detailed - not generic points like "basics" but actual concepts like "MongoDB aggregation pipeline", "CRUD operations", etc.

4. **Write Compelling Summary**: Explain in 2-3 sentences WHY this is the perfect COMPLETE course, mention the channel's credibility if premium, language match, ${preferLatest ? "and recent publication date" : ""}.

5. **Assess Completeness**: Rate how "complete" this course is (0-100).

**RESPOND ONLY WITH THIS JSON (no markdown, no code blocks):**
{
  "bestVideoRank": <number 1-10>,
  "courseContent": [
    "Specific topic/module 1",
    "Specific topic/module 2",
    "...",
    "7-10 specific learning outcomes"
  ],
  "summary": "Compelling 2-3 sentence summary emphasizing completeness and channel quality",
  "confidence": <number 0-100>,
  "completenessScore": <number 0-100>,
  "isPremiumChannel": <boolean>,
  "reasoning": "Brief 1-sentence explanation of why this video was chosen over others"
}

**CRITICAL RULES:**
- If NO video seems like a complete course, choose the most comprehensive one and note lower completenessScore
- ALWAYS prefer isLikelyCourse: true videos
- Duration matters: 60+ minutes is better for courses
- Premium channels are trusted but verify course completeness first`;
    try {
        const result = await model.generateContent(prompt);
        const response = result.response.text();
        let jsonText = response.trim();
        jsonText = jsonText.replace(/```json\n?/g, "").replace(/```\n?/g, "");
        const aiAnalysis = JSON.parse(jsonText);
        if (!aiAnalysis.bestVideoRank || !aiAnalysis.courseContent || !aiAnalysis.summary) {
            throw new Error("Invalid AI response structure");
        }
        return aiAnalysis;
    } catch (error) {
        console.error("AI Analysis Error:", error);
        // Intelligent fallback: prefer complete courses from premium channels
        let courseVideos = videos.filter((v)=>detectCourseQuality(v).isLikelyCourse);
        let premiumCourses = courseVideos.filter((v)=>isPremiumChannel(v.channelTitle, language));
        // Apply latest filter if needed
        if (preferLatest && premiumCourses.length > 0) {
            const sixMonthsAgo = new Date();
            sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
            const recentPremium = premiumCourses.filter((v)=>new Date(v.publishedAt) > sixMonthsAgo);
            if (recentPremium.length > 0) premiumCourses = recentPremium;
        }
        const bestVideo = premiumCourses[0] || courseVideos[0] || videos[0];
        const bestIndex = videos.findIndex((v)=>v.id === bestVideo.id);
        return {
            bestVideoRank: bestIndex + 1,
            courseContent: [
                "Comprehensive fundamentals and core concepts",
                "Step-by-step practical implementation",
                "Real-world project examples",
                "Best practices and design patterns",
                "Common challenges and solutions",
                "Advanced techniques and optimization",
                "Hands-on exercises and assignments"
            ],
            summary: `This comprehensive ${language} course covers ${query} from basics to advanced concepts with practical examples from a trusted educational source${preferLatest ? ", with recent and updated content" : ""}.`,
            confidence: premiumCourses.length > 0 ? 80 : 70,
            completenessScore: courseVideos.length > 0 ? 85 : 65,
            isPremiumChannel: isPremiumChannel(bestVideo.channelTitle, language),
            reasoning: `Selected based on course indicators, ${language} language match, channel reputation${preferLatest ? ", and recent publication" : ""}`
        };
    }
}
async function POST(request) {
    const startTime = Date.now();
    try {
        const ip = request.headers.get("x-forwarded-for") || "unknown";
        if (!checkRateLimit(ip)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Too many requests. Please try again later."
            }, {
                status: 429
            });
        }
        const body = await request.json();
        const { query, language = "hindi", preferLatest = false } = body;
        validateInput(query, language, preferLatest);
        const videos = await fetchYouTubeVideos(query, language, preferLatest);
        if (videos.length === 0) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                video: null,
                aiSummary: `No complete ${language} courses found for "${query}". Try different search terms or check alternative platforms.`,
                responseTime: `${Date.now() - startTime}ms`
            });
        }
        // Score videos with course quality emphasis
        const scoredVideos = videos.map((video)=>{
            const courseAnalysis = detectCourseQuality(video);
            return {
                ...video,
                score: calculateVideoScore(video, preferLatest, language, query),
                isPremium: isPremiumChannel(video.channelTitle, language),
                courseQuality: courseAnalysis
            };
        });
        scoredVideos.sort((a, b)=>b.score - a.score);
        const aiAnalysis = await analyzeWithAI(scoredVideos, query, language, preferLatest);
        const bestVideoIndex = Math.min(Math.max(aiAnalysis.bestVideoRank - 1, 0), scoredVideos.length - 1);
        const bestVideo = scoredVideos[bestVideoIndex];
        const { score, courseQuality, ...cleanVideo } = bestVideo;
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            video: cleanVideo,
            courseContent: aiAnalysis.courseContent,
            aiSummary: aiAnalysis.summary,
            confidence: aiAnalysis.confidence,
            completenessScore: aiAnalysis.completenessScore,
            isPremiumChannel: bestVideo.isPremium,
            channelName: bestVideo.channelTitle,
            durationMinutes: Math.round(courseQuality.durationMinutes),
            isCourse: courseQuality.isLikelyCourse,
            reasoning: aiAnalysis.reasoning,
            responseTime: `${Date.now() - startTime}ms`
        });
    } catch (error) {
        console.error("API Error:", error);
        if (error.message.includes("API key")) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Service configuration error. Please contact support."
            }, {
                status: 500
            });
        }
        if (error.message.includes("quota")) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Service temporarily unavailable. Please try again later."
            }, {
                status: 503
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: error.message || "Failed to fetch course. Please try again.",
            responseTime: `${Date.now() - startTime}ms`
        }, {
            status: 500
        });
    }
}
async function OPTIONS(request) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"](null, {
        status: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type"
        }
    });
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__395fda83._.js.map