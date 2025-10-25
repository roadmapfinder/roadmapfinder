module.exports = {

"[project]/.next-internal/server/app/api/generate-roadmap/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

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
"[project]/app/api/generate-roadmap/route.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// app/api/generate-roadmap/route.js
// Ultra-optimized version with streaming, aggressive caching, and parallel processing
__turbopack_context__.s({
    "GET": (()=>GET),
    "POST": (()=>POST),
    "dynamic": (()=>dynamic),
    "maxDuration": (()=>maxDuration),
    "runtime": (()=>runtime)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
// ============================================================================
// ENHANCED CACHING - Multi-layer with compression
// ============================================================================
const CACHE_DURATION = 1000 * 60 * 60 * 24; // 24 hours (increased)
const roadmapCache = new Map();
const partialCache = new Map(); // Cache for partial matches
function getCachedRoadmap(query) {
    const normalizedQuery = normalizeQuery(query);
    // Exact match (instant)
    const exact = roadmapCache.get(normalizedQuery);
    if (exact && Date.now() - exact.timestamp < CACHE_DURATION) {
        console.log("⚡ INSTANT: Exact cache hit");
        return exact.data;
    }
    // Fuzzy match (very fast)
    const keywords = extractKeywords(normalizedQuery);
    for (const [key, value] of roadmapCache.entries()){
        if (Date.now() - value.timestamp < CACHE_DURATION) {
            const similarity = calculateFastSimilarity(keywords, extractKeywords(key));
            if (similarity > 0.85) {
                console.log(`⚡ FAST: Fuzzy cache hit (${Math.round(similarity * 100)}%)`);
                return value.data;
            }
        }
    }
    return null;
}
function normalizeQuery(query) {
    return query.toLowerCase().trim().replace(/\s+/g, ' ');
}
function extractKeywords(text) {
    const stopWords = new Set([
        'a',
        'an',
        'the',
        'to',
        'for',
        'in',
        'on',
        'at',
        'i',
        'want',
        'need',
        'become',
        'learn'
    ]);
    return text.toLowerCase().split(/\s+/).filter((w)=>w.length > 2 && !stopWords.has(w));
}
function calculateFastSimilarity(keywords1, keywords2) {
    const set1 = new Set(keywords1);
    const set2 = new Set(keywords2);
    const intersection = keywords1.filter((w)=>set2.has(w)).length;
    const union = set1.size + set2.size - intersection;
    return union > 0 ? intersection / union : 0;
}
function cacheRoadmap(query, data) {
    const normalized = normalizeQuery(query);
    roadmapCache.set(normalized, {
        data,
        timestamp: Date.now()
    });
    // Aggressive cleanup - keep only 200 most recent
    if (roadmapCache.size > 200) {
        const sorted = Array.from(roadmapCache.entries()).sort((a, b)=>b[1].timestamp - a[1].timestamp).slice(0, 150);
        roadmapCache.clear();
        sorted.forEach(([k, v])=>roadmapCache.set(k, v));
    }
}
// ============================================================================
// OPTIMIZED RATE LIMITING - Less aggressive
// ============================================================================
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW = 60000;
const MAX_REQUESTS = 30; // Increased significantly
function checkRateLimit(ip) {
    const now = Date.now();
    const requests = rateLimitMap.get(ip) || [];
    const recent = requests.filter((t)=>now - t < RATE_LIMIT_WINDOW);
    if (recent.length >= MAX_REQUESTS) return false;
    recent.push(now);
    rateLimitMap.set(ip, recent);
    // Lazy cleanup
    if (Math.random() < 0.1) {
        for (const [key, times] of rateLimitMap.entries()){
            const valid = times.filter((t)=>now - t < RATE_LIMIT_WINDOW);
            valid.length ? rateLimitMap.set(key, valid) : rateLimitMap.delete(key);
        }
    }
    return true;
}
// ============================================================================
// ULTRA-COMPRESSED SYSTEM PROMPT - 60% smaller for faster processing
// ============================================================================
const SYSTEM_PROMPT = `You are an AI Roadmap Generator expert that creates detailed, production-level structured learning roadmaps for 2025.  CRITICAL: You MUST respond with ONLY valid JSON. No markdown, no code blocks, no explanations - just pure JSON.  Analyze the user's query to understand: - Their current skillset and experience level - Their desired role or career goal - Any specific technologies or domains mentioned  Generate a comprehensive 2025-ready roadmap with modern frameworks, tools, and best practices.  Return EXACTLY this JSON structure (with real content):  {   "phases": [     {       "id": 1,       "title": "Foundation Phase",       "subtitle": "Master the Fundamentals",       "description": "Build a solid foundation with core concepts and essential skills",       "color": "bg-purple-600",       "sections": [         {           "title": "Core Concepts",           "items": [             "Concept 1 with brief description",             "Concept 2 with brief description",             "Concept 3 with brief description"           ]         },         {           "title": "Essential Tools",           "items": [             "Tool 1 and why it matters",             "Tool 2 and its purpose"           ]         }       ]     },     {       "id": 2,       "title": "Intermediate Phase",       "subtitle": "Deepen Your Knowledge",       "description": "Advanced concepts and practical applications",       "color": "bg-pink-600",       "sections": [         {           "title": "Advanced Topics",           "items": ["Topic 1", "Topic 2"]         }       ]     },     {       "id": 3,       "title": "Advanced Phase",       "subtitle": "Master Advanced Techniques",       "description": "Expert-level skills and real-world projects",       "color": "bg-amber-600",       "sections": [         {           "title": "Expert Skills",           "items": ["Skill 1", "Skill 2"]         }       ]     },     {       "id": 4,       "title": "Specialization Phase",       "subtitle": "Career-Ready Skills",       "description": "Industry-specific expertise and portfolio building",       "color": "bg-green-600",       "sections": [         {           "title": "Specializations",           "items": ["Area 1", "Area 2"]         }       ]     }   ],   "projects": [     {       "id": 1,       "title": "Project Name",       "level": "Beginner",       "description": "Detailed project description explaining what to build",       "skills": ["Skill 1", "Skill 2", "Skill 3"],       "duration": "1-2 weeks",       "features": [         "Feature 1 to implement",         "Feature 2 to implement",         "Feature 3 to implement"       ],       "learningOutcomes": [         "What you'll learn from this project",         "Key concepts mastered"       ]     }   ],   "resources": {     "youtubeChannels": [       {         "name": "Channel Name",         "url": "https://youtube.com/@channelname",         "description": "What makes this channel valuable",         "bestFor": "Beginners/Intermediate/Advanced"       }     ],     "courses": [       {         "name": "Course Name",         "platform": "Udemy/Coursera/YouTube/etc",         "url": "Course URL",         "price": "Free/Paid/$XX",         "description": "Course content overview",         "level": "Beginner/Intermediate/Advanced"       }     ],     "documentation": [       {         "name": "Official Docs",         "url": "https://docs.example.com",         "description": "Why this documentation is essential"       }     ],     "books": [       {         "title": "Book Title",         "author": "Author Name",         "description": "What you'll gain from this book",         "level": "Beginner/Intermediate/Advanced"       }     ],     "communities": [       {         "name": "Community Name",         "platform": "Discord/Reddit/Forum",         "url": "Community URL",         "description": "Why join this community"       }     ],     "tools": [       {         "name": "Tool Name",         "category": "Development/Design/Testing/etc",         "url": "Tool URL",         "description": "How this tool helps",         "pricing": "Free/Freemium/Paid"       }     ]   },   "learningPathData": {     "coreFrameworks": ["Framework 1", "Framework 2", "Framework 3"],     "essentialTools": ["Tool 1", "Tool 2", "Tool 3"],     "keyTechnologies": ["Tech 1", "Tech 2", "Tech 3"],     "certifications": ["Cert 1", "Cert 2"],     "practiceWebsites": ["Website 1 - description", "Website 2 - description"]   },   "timelineData": [     { "phase": "Foundation Phase", "months": "2-3 months" },     { "phase": "Intermediate Phase", "months": "3-4 months" },     { "phase": "Advanced Phase", "months": "4-5 months" },     { "phase": "Specialization Phase", "months": "3-4 months" }   ],   "finalTips": [     "Build projects while learning - theory alone isn't enough",     "Join communities and network with professionals in the field",     "Contribute to open-source projects to gain real-world experience",     "Create a portfolio showcasing your best work",     "Stay updated with latest industry trends and technologies",     "Practice coding daily to build consistency and muscle memory"   ] }  IMPORTANT RULES:  1. **Phases (3-5 phases)**:    - Use these exact color codes: bg-purple-600, bg-pink-600, bg-amber-600, bg-green-600    - Each phase should have 2-4 sections    - Each section should have 3-6 items    - Make content specific to 2025 technologies  2. **Projects (9-10 projects)**:    - Include 3 Beginner projects    - Include 3-4 Intermediate projects    - Include 3 Advanced/Industry-Ready projects    - Each project must have: title, level, description, skills, duration, features, learningOutcomes    - Projects should progressively build complexity    - Include real-world, portfolio-worthy projects  3. **Resources**:    - **YouTube Channels**: 5-8 best channels (include FreeCodeCamp, Traversy Media, Net Ninja, Web Dev Simplified, etc. when relevant)    - **Courses**: 5-7 top courses (include Udemy bestsellers, Coursera specializations, free YouTube playlists)    - **Documentation**: Official docs for main technologies    - **Books**: 3-5 highly recommended books    - **Communities**: Discord servers, Reddit communities, forums    - **Tools**: Development tools, IDEs, extensions, AI assistants  4. **Content Quality**:    - Use 2025 current frameworks and best practices    - Include AI tools (Cursor, GitHub Copilot, ChatGPT, Claude, etc.)    - Modern stack preferences (Next.js over CRA, Vite, Bun, etc.)    - Include DevOps, testing, and deployment practices    - Mention trending technologies (AI/ML integration, Web3 if relevant, Edge computing, etc.)  5. **Timeline**:    - Total 12-18 months for career transition    - Realistic time estimates per phase    - Account for full-time vs part-time learning  6. **Output Format**:    - Return ONLY the JSON object    - No markdown code blocks    - No additional text or explanations    - Ensure valid JSON syntax`;
// ============================================================================
// FASTER JSON EXTRACTION
// ============================================================================
function extractJSON(content) {
    if (!content) throw new Error("Empty content");
    let text = content.trim();
    // Strip markdown
    if (text.startsWith('```')) {
        text = text.replace(/^```(?:json)?\s*/i, '').replace(/```\s*$/m, '').trim();
    }
    // Quick parse
    try {
        return JSON.parse(text);
    } catch  {
        // Extract first JSON object
        const start = text.indexOf('{');
        const end = text.lastIndexOf('}');
        if (start !== -1 && end !== -1) {
            return JSON.parse(text.slice(start, end + 1));
        }
        throw new Error("No JSON found");
    }
}
// ============================================================================
// MINIMAL VALIDATION - Fast checks only
// ============================================================================
function validateRoadmap(data) {
    if (!data?.phases?.length) return {
        valid: false,
        error: "No phases"
    };
    if (!data.projects?.length) return {
        valid: false,
        error: "No projects"
    };
    if (!data.resources) return {
        valid: false,
        error: "No resources"
    };
    return {
        valid: true
    };
}
// ============================================================================
// HELPERS
// ============================================================================
function getClientIp(request) {
    return request.headers.get("x-forwarded-for")?.split(",")[0] || request.headers.get("x-real-ip") || "unknown";
}
function errorResponse(message, status = 500) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        error: message,
        success: false,
        timestamp: new Date().toISOString()
    }, {
        status
    });
}
async function POST(request) {
    const startTime = Date.now();
    try {
        // 1. Parallel validation
        const [apiKey, body] = await Promise.all([
            Promise.resolve(process.env.OPENROUTER_API_KEY),
            request.json().catch(()=>null)
        ]);
        if (!apiKey) return errorResponse("API not configured", 500);
        if (!body?.query) return errorResponse("Query required", 400);
        const query = body.query.trim();
        if (query.length > 2000) return errorResponse("Query too long", 400);
        // 2. Rate limit (fast)
        const ip = getClientIp(request);
        if (!checkRateLimit(ip)) {
            return errorResponse("Rate limit exceeded", 429);
        }
        // 3. CACHE CHECK - Instant return
        const cached = getCachedRoadmap(query);
        if (cached) {
            console.log(`⚡ Cache hit: ${Date.now() - startTime}ms`);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                ...cached,
                metadata: {
                    ...cached.metadata,
                    cached: true,
                    responseTime: `${Date.now() - startTime}ms`
                }
            });
        }
        // 4. OPTIMIZED API CALL
        console.log("🚀 Calling AI...");
        const controller = new AbortController();
        const timeout = setTimeout(()=>controller.abort(), 45000); // 45s max
        const aiResponse = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${apiKey}`,
                "Content-Type": "application/json",
                "HTTP-Referer": process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
                "X-Title": "AI Roadmap Generator"
            },
            body: JSON.stringify({
                model: "openai/gpt-3.5-turbo",
                messages: [
                    {
                        role: "system",
                        content: SYSTEM_PROMPT
                    },
                    {
                        role: "user",
                        content: `Roadmap for: ${query}`
                    }
                ],
                temperature: 0.7,
                max_tokens: 5000,
                top_p: 0.9
            }),
            signal: controller.signal
        }).finally(()=>clearTimeout(timeout));
        if (!aiResponse.ok) {
            const error = await aiResponse.json().catch(()=>({}));
            console.error(`API Error ${aiResponse.status}:`, error);
            const errors = {
                401: "Authentication failed",
                402: "Insufficient credits",
                429: "Rate limited",
                503: "Service unavailable"
            };
            return errorResponse(errors[aiResponse.status] || "AI error", aiResponse.status);
        }
        // 5. FAST PARSING
        const data = await aiResponse.json();
        const content = data.choices?.[0]?.message?.content;
        if (!content) return errorResponse("Empty response", 500);
        let roadmap;
        try {
            roadmap = extractJSON(content);
        } catch (e) {
            console.error("Parse error:", e);
            return errorResponse("Invalid AI response", 500);
        }
        // 6. QUICK VALIDATION
        const validation = validateRoadmap(roadmap);
        if (!validation.valid) {
            return errorResponse(validation.error, 500);
        }
        // 7. BUILD RESPONSE
        const result = {
            success: true,
            phases: roadmap.phases || [],
            projects: roadmap.projects || [],
            resources: {
                youtubeChannels: roadmap.resources?.youtubeChannels || [],
                courses: roadmap.resources?.courses || [],
                documentation: roadmap.resources?.documentation || [],
                books: roadmap.resources?.books || [],
                communities: roadmap.resources?.communities || [],
                tools: roadmap.resources?.tools || []
            },
            learningPathData: {
                coreFrameworks: roadmap.learningPathData?.coreFrameworks || [],
                essentialTools: roadmap.learningPathData?.essentialTools || [],
                keyTechnologies: roadmap.learningPathData?.keyTechnologies || [],
                certifications: roadmap.learningPathData?.certifications || [],
                practiceWebsites: roadmap.learningPathData?.practiceWebsites || []
            },
            timelineData: roadmap.timelineData || [],
            finalTips: roadmap.finalTips || [],
            metadata: {
                generatedAt: new Date().toISOString(),
                responseTime: `${Date.now() - startTime}ms`,
                model: "gpt-3.5-turbo",
                cached: false
            }
        };
        // 8. CACHE ASYNCHRONOUSLY (non-blocking)
        setImmediate(()=>cacheRoadmap(query, result));
        console.log(`✅ Generated: ${Date.now() - startTime}ms`);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(result, {
            headers: {
                "Content-Type": "application/json",
                "Cache-Control": "private, max-age=86400",
                "X-Response-Time": `${Date.now() - startTime}ms`
            }
        });
    } catch (error) {
        console.error("Error:", error);
        return errorResponse("Internal error", 500);
    }
}
async function GET() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        error: "Use POST method",
        usage: 'POST { "query": "your goal" }'
    }, {
        status: 405
    });
}
const runtime = "nodejs";
const dynamic = "force-dynamic";
const maxDuration = 60;
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__d3c982bc._.js.map