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
"[project]/app/api/generate-project/geminiService.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// lib/services/geminiService.js
/**
 * Gemini AI Service
 * Handles all Gemini API interactions for project generation,
 * prompt creation, and response processing
 */ // Generate the comprehensive prompt for Gemini AI
__turbopack_context__.s({
    "callGeminiAPI": (()=>callGeminiAPI),
    "createGeminiRequestBody": (()=>createGeminiRequestBody),
    "generateProjectPrompt": (()=>generateProjectPrompt),
    "generateProjectWithGemini": (()=>generateProjectWithGemini),
    "getDefaultValue": (()=>getDefaultValue),
    "handleGeminiError": (()=>handleGeminiError),
    "processGeminiResponse": (()=>processGeminiResponse),
    "validateAndFillProjectData": (()=>validateAndFillProjectData)
});
function generateProjectPrompt(projectIdea) {
    return `
You are an expert full-stack software architect, AI consultant, and technical project planner.
A user has described their project idea in natural language:

"${projectIdea}"

Your task is to deeply analyze this idea — whether it's a simple utility, a full SaaS platform, an AI-driven application, a blockchain dApp, or a UI/UX design system.
Provide a comprehensive, language-agnostic project breakdown in structured JSON format.

⚠️ You must:

Support all popular tech stacks: JavaScript/TypeScript, Python, Java, Dart/Flutter, Swift, Solidity, R, Rust, Go, etc.

Include recommendations for AI/ML, data analytics, blockchain, and design-oriented projects where relevant

Recommend only modern, well-maintained, and production-ready tools and libraries (2024–2025)

Ensure every step is practical, structured, and developer-actionable

**ENHANCED ROADMAP REQUIREMENTS:**
- Each phase should include detailed terminal commands for package installation
- Provide actual code snippets for setup and configuration
- Include file structure examples
- Add estimated time duration for each phase
- Include prerequisites and dependencies
- Provide troubleshooting tips for common issues
- Add testing commands and validation steps

Return ONLY a valid JSON object (no extra text), using the following format:

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
      }
    ]
  },
  "roadmap": [
    {
      "phase": "Phase 1: Project Setup & Environment",
      "description": "Set up the development environment and project structure",
      "duration": "2-4 hours",
      "difficulty": "Beginner",
      "prerequisites": ["Node.js v18+", "Git", "VS Code"],
      "steps": [
        {
          "title": "Initialize Project",
          "description": "Create project directory and initialize package.json",
          "type": "terminal",
          "commands": [
            "mkdir my-project && cd my-project",
            "npm init -y",
            "git init"
          ]
        },
        {
          "title": "Install Dependencies",
          "description": "Install core packages and development tools",
          "type": "terminal",
          "commands": [
            "npm install next react react-dom",
            "npm install -D tailwindcss postcss autoprefixer"
          ]
        }
      ],
      "troubleshooting": [
        "If Node.js version errors occur, use nvm to switch versions"
      ],
      "validation": [
        "Project starts without errors",
        "localhost:3000 loads successfully"
      ]
    }
  ],
  "techStack": {
    "frontend": ["React", "Next.js", "Tailwind CSS"],
    "backend": ["Node.js", "Express"],
    "database": ["PostgreSQL"],
    "devops": ["Docker", "GitHub Actions"],
    "deployment": ["Vercel", "Railway"]
  },
  "packages": {
    "npm": ["next", "react", "axios", "tailwindcss"],
    "python": [],
    "tools": ["VS Code", "Postman", "Figma", "Git"]
  },
  "documentation": [
    {
      "title": "Next.js Documentation",
      "url": "https://nextjs.org/docs",
      "description": "Official Next.js guide and API docs"
    }
  ],
  "quickStart": {
    "description": "Get started with this project in under 5 minutes",
    "commands": [
      "git clone <repository-url>",
      "npm install",
      "npm run dev"
    ],
    "notes": [
      "Make sure to update environment variables",
      "Visit http://localhost:3000 to see your project"
    ]
  }
}`;
}
function createGeminiRequestBody(prompt) {
    return {
        contents: [
            {
                parts: [
                    {
                        text: prompt
                    }
                ]
            }
        ],
        generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 8192,
            responseMimeType: "text/plain"
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
    };
}
async function callGeminiAPI(requestBody) {
    if (!process.env.GEMINI_API_KEY) {
        throw new Error('GEMINI_API_KEY is not set');
    }
    console.log('Making request to Gemini API for project generation...');
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${process.env.GEMINI_API_KEY}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
    });
    if (!response.ok) {
        const errorData = await response.json().catch(()=>null);
        console.error('Gemini API error:', response.status, errorData);
        if (response.status === 401) {
            throw new Error('Invalid API key configuration');
        } else if (response.status === 429) {
            throw new Error('API rate limit exceeded. Please try again in a few minutes.');
        } else if (response.status === 403) {
            throw new Error('API quota exceeded or access denied.');
        }
        throw new Error('Failed to connect to Gemini API');
    }
    return response.json();
}
function processGeminiResponse(data) {
    console.log('Gemini API response received');
    if (!data.candidates || data.candidates.length === 0) {
        throw new Error('No response from AI model');
    }
    const content = data.candidates[0].content.parts[0].text;
    // Enhanced JSON extraction
    let jsonMatch = content.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
        const codeBlockMatch = content.match(/```(?:json)?\s*(\{[\s\S]*\})\s*```/);
        if (codeBlockMatch) {
            jsonMatch = [
                codeBlockMatch[1]
            ];
        }
    }
    if (!jsonMatch) {
        console.error('No JSON found in AI response');
        throw new Error('Invalid response format from AI service');
    }
    let projectData;
    try {
        projectData = JSON.parse(jsonMatch[0]);
    } catch (parseError) {
        console.error('JSON parsing error:', parseError);
        throw new Error('Failed to parse AI response');
    }
    // Validate and fill required fields
    return validateAndFillProjectData(projectData, data);
}
function validateAndFillProjectData(projectData, geminiResponseData) {
    const requiredFields = [
        'mindMap',
        'roadmap',
        'techStack',
        'packages',
        'documentation'
    ];
    for (const field of requiredFields){
        if (!projectData[field]) {
            projectData[field] = getDefaultValue(field);
        }
    }
    // Add metadata
    projectData.metadata = {
        model: 'gemini-2.0-flash-exp',
        timestamp: new Date().toISOString(),
        tokens_used: geminiResponseData.usageMetadata?.totalTokenCount || 'N/A'
    };
    return projectData;
}
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
        youtubeResources: [],
        quickStart: {
            description: "Quick setup commands",
            commands: [
                "npm install",
                "npm run dev"
            ],
            notes: [
                "Check the documentation for detailed setup"
            ]
        }
    };
    return defaults[field] || null;
}
async function generateProjectWithGemini(projectIdea) {
    // Generate the prompt
    const prompt = generateProjectPrompt(projectIdea);
    // Create request body
    const requestBody = createGeminiRequestBody(prompt);
    // Make API call
    const geminiResponse = await callGeminiAPI(requestBody);
    // Process and validate response
    const projectData = processGeminiResponse(geminiResponse);
    return projectData;
}
function handleGeminiError(error) {
    console.error('Gemini service error:', error);
    if (error.name === 'AbortError') {
        return {
            error: 'Request timeout. Please try again.',
            status: 500
        };
    }
    if (error.message.includes('API key')) {
        return {
            error: 'Invalid API key configuration',
            status: 500
        };
    }
    if (error.message.includes('rate limit')) {
        return {
            error: 'API rate limit exceeded. Please try again in a few minutes.',
            status: 500
        };
    }
    if (error.message.includes('quota')) {
        return {
            error: 'API quota exceeded or access denied.',
            status: 500
        };
    }
    return {
        error: 'Failed to generate project guide',
        details: ("TURBOPACK compile-time truthy", 1) ? error.message : ("TURBOPACK unreachable", undefined),
        status: 500
    };
}
}}),
"[project]/app/api/generate-project/youtubeService.js [app-route] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[project]/app/api/generate-project/route.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// app/api/generate-project/route.js
__turbopack_context__.s({
    "GET": (()=>GET),
    "POST": (()=>POST)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$generate$2d$project$2f$geminiService$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/api/generate-project/geminiService.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$generate$2d$project$2f$youtubeService$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/api/generate-project/youtubeService.js [app-route] (ecmascript)");
;
;
;
async function POST(request) {
    try {
        // Parse and validate request
        const { projectIdea } = await request.json();
        if (!projectIdea || projectIdea.trim().length === 0) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Project idea is required'
            }, {
                status: 400
            });
        }
        console.log('Processing project idea:', projectIdea);
        // Step 1: Generate project structure using Gemini AI
        let projectData;
        try {
            projectData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$generate$2d$project$2f$geminiService$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateProjectWithGemini"])(projectIdea);
            console.log('Project data generated successfully');
        } catch (geminiError) {
            const errorResponse = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$generate$2d$project$2f$geminiService$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["handleGeminiError"])(geminiError);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: errorResponse.error,
                details: errorResponse.details
            }, {
                status: errorResponse.status
            });
        }
        // Step 2: Fetch relevant YouTube videos
        let youtubeResources = [];
        try {
            youtubeResources = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$generate$2d$project$2f$youtubeService$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getProjectVideosWithFallback"])(projectData, projectIdea);
            console.log(`YouTube resources fetched: ${youtubeResources.length} items`);
        } catch (youtubeError) {
            console.error('YouTube service error:', youtubeError);
            // Continue without YouTube resources rather than failing the entire request
            youtubeResources = [];
        }
        // Step 3: Enhanced metadata and analysis
        const projectAnalysis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$generate$2d$project$2f$geminiService$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["analyzeProject"])(projectIdea, Object.values(projectData.techStack || {}).flat());
        // Step 4: Combine everything into final response
        const enhancedResponse = {
            ...projectData,
            youtubeResources,
            metadata: {
                ...projectData.metadata,
                youtube_videos_found: youtubeResources.filter((v)=>!v.isSearchLink).length,
                search_queries_generated: youtubeResources.length > 0 ? 6 : 0,
                project_analysis: projectAnalysis,
                processing_time: Date.now() - new Date(projectData.metadata.timestamp).getTime()
            }
        };
        console.log('Enhanced project response prepared successfully');
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(enhancedResponse);
    } catch (error) {
        console.error('Project generation API error:', error);
        // Generic error handling for unexpected errors
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Failed to generate project guide',
            details: ("TURBOPACK compile-time truthy", 1) ? error.message : ("TURBOPACK unreachable", undefined),
            timestamp: new Date().toISOString()
        }, {
            status: 500
        });
    }
}
async function GET() {
    const apiStatus = {
        status: 'healthy',
        timestamp: new Date().toISOString(),
        services: {
            gemini: process.env.GEMINI_API_KEY ? 'configured' : 'missing_key',
            youtube: process.env.YOUTUBE_API_KEY ? 'configured' : 'missing_key'
        },
        version: '2.0.0'
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(apiStatus);
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__c686b43d._.js.map