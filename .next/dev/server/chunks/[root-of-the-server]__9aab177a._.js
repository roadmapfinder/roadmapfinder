module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/app/api/ai-roadmap/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "OPTIONS",
    ()=>OPTIONS,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
// System prompt for structured roadmap generation
const SYSTEM_PROMPT = `You are an expert technical roadmap creator specializing in creating comprehensive, industry-relevant learning paths.

CRITICAL REQUIREMENTS:
1. Return ONLY valid JSON - no markdown, no code blocks, no explanations
2. Content must be current and relevant to 2025 industry standards
3. Include practical, actionable items that build progressive expertise
4. Each phase should logically flow into the next
5. Include both theoretical knowledge and hands-on projects

JSON Structure (MUST match exactly):
{
  "title": "Professional title for the roadmap (e.g., 'Full Stack Development Mastery')",
  "subtitle": "Compelling tagline (10-15 words)",
  "estimatedTime": "Total estimated time (e.g., '6-12 months')",
  "difficulty": "beginner, intermediate, or advanced",
  "phases": [
    {
      "id": 0,
      "title": "Phase name",
      "subtitle": "Level indicator (Beginner/Intermediate/Advanced/Expert)",
      "description": "Clear description of phase goals (15-30 words)",
      "color": "bg-gray-500",
      "duration": "Estimated time for this phase",
      "sections": [
        {
          "title": "Section name with relevant emoji",
          "items": [
            "Specific, actionable learning item with context",
            "Another specific item that builds on previous concepts"
          ]
        }
      ]
    }
  ]
}

PHASE COLOR CODING:
- Phase 0 (Foundation): "bg-gray-500"
- Phase 1 (Core Skills): "bg-blue-500"
- Phase 2 (Intermediate): "bg-green-500"
- Phase 3 (Advanced): "bg-purple-500"
- Phase 4+ (Expert/Specialization): "bg-orange-500"

QUALITY GUIDELINES:
- Generate 4-6 phases minimum for comprehensive coverage
- Each phase should have 3-5 sections
- Each section should have 4-6 specific, measurable items
- Include project-based learning in later phases
- Progress from theory to practice
- Include modern tools and best practices
- Add industry-standard certifications where relevant`;
// Rate limiting - simple in-memory store (use Redis in production)
const rateLimitStore = new Map();
const RATE_LIMIT_WINDOW = 60000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 10;
// Check rate limit
function checkRateLimit(identifier) {
    const now = Date.now();
    const userRequests = rateLimitStore.get(identifier) || [];
    // Clean old requests
    const recentRequests = userRequests.filter((timestamp)=>now - timestamp < RATE_LIMIT_WINDOW);
    if (recentRequests.length >= MAX_REQUESTS_PER_WINDOW) {
        return false;
    }
    recentRequests.push(now);
    rateLimitStore.set(identifier, recentRequests);
    return true;
}
// Clean response text from API
function cleanJsonResponse(text) {
    return text.trim().replace(/```json\s*/g, '').replace(/```\s*/g, '').replace(/^[^{]*({)/, '$1').replace(/(})[^}]*$/g, '$1');
}
// Validate roadmap structure
function validateRoadmap(data) {
    if (!data || typeof data !== 'object') {
        throw new Error('Invalid roadmap data structure');
    }
    if (!data.title || typeof data.title !== 'string') {
        throw new Error('Missing or invalid title');
    }
    if (!data.phases || !Array.isArray(data.phases) || data.phases.length === 0) {
        throw new Error('Missing or invalid phases array');
    }
    // Validate each phase
    data.phases.forEach((phase, index)=>{
        if (typeof phase.id !== 'number') {
            throw new Error(`Phase ${index}: Invalid or missing id`);
        }
        if (!phase.title || typeof phase.title !== 'string') {
            throw new Error(`Phase ${index}: Invalid or missing title`);
        }
        if (!phase.sections || !Array.isArray(phase.sections) || phase.sections.length === 0) {
            throw new Error(`Phase ${index}: Missing or invalid sections`);
        }
        // Validate sections
        phase.sections.forEach((section, sIndex)=>{
            if (!section.title || typeof section.title !== 'string') {
                throw new Error(`Phase ${index}, Section ${sIndex}: Invalid or missing title`);
            }
            if (!section.items || !Array.isArray(section.items) || section.items.length === 0) {
                throw new Error(`Phase ${index}, Section ${sIndex}: Missing or invalid items`);
            }
        });
    });
    return true;
}
async function POST(request) {
    try {
        // Parse request body
        const body = await request.json();
        const { query } = body;
        // Validation
        if (!query || typeof query !== 'string' || query.trim().length === 0) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: 'Query is required and must be a non-empty string'
            }, {
                status: 400
            });
        }
        if (query.length > 500) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: 'Query is too long. Maximum 500 characters.'
            }, {
                status: 400
            });
        }
        // Rate limiting
        const identifier = request.headers.get('x-forwarded-for') || 'anonymous';
        if (!checkRateLimit(identifier)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: 'Rate limit exceeded. Please try again in a minute.'
            }, {
                status: 429
            });
        }
        // Get API key from environment
        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
            console.error('GEMINI_API_KEY not configured');
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: 'Service configuration error. Please contact support.'
            }, {
                status: 500
            });
        }
        // Prepare prompt
        const userPrompt = `Create a comprehensive learning roadmap for: "${query.trim()}"

Focus on:
1. Current industry standards and technologies (2025)
2. Practical, hands-on learning approach
3. Clear progression from basics to advanced
4. Real-world projects and applications
5. Industry-recognized skills and certifications

Generate a detailed, actionable roadmap that would make someone job-ready in this field.`;
        // Call Gemini API (Google AI Studio)
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: [
                    {
                        parts: [
                            {
                                text: SYSTEM_PROMPT
                            },
                            {
                                text: userPrompt
                            }
                        ]
                    }
                ],
                generationConfig: {
                    temperature: 0.7,
                    topK: 40,
                    topP: 0.95,
                    maxOutputTokens: 8192
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
            })
        });
        if (!response.ok) {
            const errorText = await response.text();
            console.error('Gemini API Error:', response.status, errorText);
            let errorMessage = 'Failed to generate roadmap. Please try again.';
            if (response.status === 429) {
                errorMessage = 'API quota exceeded. Please wait a minute and try again.';
            } else if (response.status === 400) {
                errorMessage = 'Invalid request to AI service. Please try a different query.';
            } else if (response.status === 403) {
                errorMessage = 'API key is invalid or expired. Please contact support.';
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: errorMessage,
                details: ("TURBOPACK compile-time truthy", 1) ? {
                    status: response.status,
                    errorText: errorText.substring(0, 200)
                } : "TURBOPACK unreachable"
            }, {
                status: response.status
            });
        }
        const data = await response.json();
        // Extract and validate response
        if (!data.candidates || !data.candidates[0] || !data.candidates[0].content) {
            console.error('Invalid API response structure:', JSON.stringify(data, null, 2));
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: 'Invalid response from AI service. Please try again.',
                details: ("TURBOPACK compile-time truthy", 1) ? data : "TURBOPACK unreachable"
            }, {
                status: 500
            });
        }
        let textResponse = data.candidates[0].content.parts[0].text;
        console.log('Raw AI response:', textResponse.substring(0, 200) + '...');
        // Clean and parse JSON
        const cleanedResponse = cleanJsonResponse(textResponse);
        let roadmapData;
        try {
            roadmapData = JSON.parse(cleanedResponse);
        } catch (parseError) {
            console.error('JSON Parse Error:', parseError.message);
            console.error('Cleaned response:', cleanedResponse.substring(0, 500));
            console.error('Raw response:', textResponse.substring(0, 500));
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: 'Failed to parse roadmap data. The AI generated invalid JSON. Please try again.',
                details: ("TURBOPACK compile-time truthy", 1) ? {
                    parseError: parseError.message,
                    sample: cleanedResponse.substring(0, 200)
                } : "TURBOPACK unreachable"
            }, {
                status: 500
            });
        }
        // Validate roadmap structure
        try {
            validateRoadmap(roadmapData);
        } catch (validationError) {
            console.error('Validation Error:', validationError.message);
            console.error('Roadmap data:', JSON.stringify(roadmapData, null, 2).substring(0, 500));
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: `Generated roadmap has invalid structure: ${validationError.message}`,
                details: ("TURBOPACK compile-time truthy", 1) ? roadmapData : "TURBOPACK unreachable"
            }, {
                status: 500
            });
        }
        // Add metadata
        roadmapData.generatedAt = new Date().toISOString();
        roadmapData.query = query.trim();
        // Success response
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            roadmap: roadmapData
        }, {
            status: 200,
            headers: {
                'Cache-Control': 'no-store, max-age=0'
            }
        });
    } catch (error) {
        console.error('Roadmap generation error:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'An unexpected error occurred. Please try again.',
            details: ("TURBOPACK compile-time truthy", 1) ? error.message : "TURBOPACK unreachable"
        }, {
            status: 500
        });
    }
}
async function GET() {
    const apiKey = process.env.GEMINI_API_KEY;
    const isConfigured = !!apiKey;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        service: 'AI Roadmap Generator API',
        version: '1.0.0',
        status: isConfigured ? 'operational' : 'configuration_error',
        configured: isConfigured,
        endpoints: {
            POST: '/api/ai-roadmap - Generate a learning roadmap'
        },
        usage: {
            method: 'POST',
            body: {
                query: 'string (required, max 500 chars)'
            },
            rateLimit: {
                requests: MAX_REQUESTS_PER_WINDOW,
                window: `${RATE_LIMIT_WINDOW / 1000} seconds`
            }
        }
    });
}
async function OPTIONS() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({}, {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type'
        }
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__9aab177a._.js.map