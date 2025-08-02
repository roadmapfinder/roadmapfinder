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
"[project]/app/api/generate-project/route.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// app/api/generate-project/route.js
__turbopack_context__.s({
    "POST": (()=>POST)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
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
        // Validate API key exists
        if (!process.env.OPENROUTER_API_KEY) {
            console.error('OPENROUTER_API_KEY is not set');
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'API configuration error'
            }, {
                status: 500
            });
        }
        const prompt = `
You are an expert project consultant and technical architect. A user has described their project idea: "${projectIdea}"

Please provide a comprehensive project analysis in the following JSON format. Make sure to return ONLY valid JSON without any additional text:

{
  "mindMap": {
    "name": "Project Name",
    "children": [
      {
        "name": "Major Component 1",
        "children": [
          { "name": "Sub-component 1.1" },
          { "name": "Sub-component 1.2" }
        ]
      },
      {
        "name": "Major Component 2",
        "children": [
          { "name": "Sub-component 2.1" },
          { "name": "Sub-component 2.2" }
        ]
      }
    ]
  },
  "roadmap": [
    {
      "phase": "Phase Name",
      "description": "What this phase accomplishes",
      "tasks": ["Task 1", "Task 2", "Task 3"]
    }
  ],
  "techStack": {
    "frontend": ["React", "Next.js"],
    "backend": ["Node.js", "Express"],
    "database": ["PostgreSQL"],
    "deployment": ["Vercel", "Railway"]
  },
  "packages": {
    "npm": ["next", "react", "tailwindcss"],
    "tools": ["VS Code", "Git", "Postman"]
  },
  "documentation": [
    {
      "title": "Next.js Documentation",
      "url": "https://nextjs.org/docs",
      "description": "Complete guide to Next.js"
    }
  ],
  "youtubeResources": [
    {
      "title": "Video Title",
      "channel": "Channel Name",
      "url": "https://youtube.com/watch?v=example",
      "description": "What the video covers"
    }
  ]
}

Make sure the response is practical, modern, and includes current best practices for 2024-2025. Focus on popular, well-maintained technologies and provide realistic development phases. Return ONLY the JSON object, no additional text.
`;
        const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
                'Content-Type': 'application/json',
                'HTTP-Referer': process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
                'X-Title': 'RoadmapFinder Project Helper Bot'
            },
            body: JSON.stringify({
                model: 'anthropic/claude-3.5-sonnet',
                messages: [
                    {
                        role: 'user',
                        content: prompt
                    }
                ],
                temperature: 0.7,
                max_tokens: 4000
            })
        });
        if (!response.ok) {
            const errorText = await response.text();
            console.error(`OpenRouter API error: ${response.status} - ${errorText}`);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: `API request failed: ${response.status}`
            }, {
                status: 500
            });
        }
        const data = await response.json();
        if (!data.choices || !data.choices[0] || !data.choices[0].message) {
            console.error('Invalid response structure from OpenRouter API');
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Invalid response from AI service'
            }, {
                status: 500
            });
        }
        const content = data.choices[0].message.content;
        // Extract JSON from the response - more robust parsing
        let jsonMatch = content.match(/\{[\s\S]*\}/);
        if (!jsonMatch) {
            // Try to find JSON if it's wrapped in markdown code blocks
            const codeBlockMatch = content.match(/```(?:json)?\s*(\{[\s\S]*\})\s*```/);
            if (codeBlockMatch) {
                jsonMatch = [
                    codeBlockMatch[1]
                ];
            }
        }
        if (!jsonMatch) {
            console.error('No JSON found in AI response:', content);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Invalid response format from AI service'
            }, {
                status: 500
            });
        }
        let projectData;
        try {
            projectData = JSON.parse(jsonMatch[0]);
        } catch (parseError) {
            console.error('JSON parsing error:', parseError);
            console.error('Content that failed to parse:', jsonMatch[0]);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Failed to parse AI response'
            }, {
                status: 500
            });
        }
        // Validate the response structure
        const requiredFields = [
            'mindMap',
            'roadmap',
            'techStack',
            'packages',
            'documentation',
            'youtubeResources'
        ];
        for (const field of requiredFields){
            if (!projectData[field]) {
                console.warn(`Missing field in response: ${field}`);
                // Set default empty values instead of failing
                projectData[field] = getDefaultValue(field);
            }
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(projectData);
    } catch (error) {
        console.error('Error generating project:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Failed to generate project guide'
        }, {
            status: 500
        });
    }
}
// Helper function to provide default values for missing fields
function getDefaultValue(field) {
    const defaults = {
        mindMap: {
            name: "Project",
            children: []
        },
        roadmap: [],
        techStack: {},
        packages: {
            npm: [],
            tools: []
        },
        documentation: [],
        youtubeResources: []
    };
    return defaults[field] || null;
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__bd95c762._.js.map