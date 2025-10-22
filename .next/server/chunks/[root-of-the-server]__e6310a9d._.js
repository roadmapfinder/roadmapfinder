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
"[project]/app/api/generate-roadmap/route.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// pages/api/generate-roadmap.js
// Production-ready backend API for AI Roadmap Generator
__turbopack_context__.s({
    "config": (()=>config),
    "default": (()=>handler)
});
async function handler(req, res) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({
            error: 'Method not allowed'
        });
    }
    const { query } = req.body;
    // Validate input
    if (!query || typeof query !== 'string' || query.trim().length === 0) {
        return res.status(400).json({
            error: 'Query is required and must be a non-empty string'
        });
    }
    if (query.length > 2000) {
        return res.status(400).json({
            error: 'Query is too long. Maximum 2000 characters.'
        });
    }
    // Check for API key
    if (!process.env.OPENROUTER_API_KEY) {
        console.error('OPENROUTER_API_KEY is not set');
        return res.status(500).json({
            error: 'Server configuration error'
        });
    }
    const systemPrompt = `You are an AI Roadmap Generator expert that creates detailed, production-level structured learning roadmaps for 2025.

CRITICAL: You MUST respond with ONLY valid JSON. No markdown, no code blocks, no explanations - just pure JSON.

Analyze the user's query to understand:
- Their current skillset and experience level
- Their desired role or career goal
- Any specific technologies or domains mentioned

Generate a comprehensive 2025-ready roadmap with modern frameworks, tools, and best practices.

Return EXACTLY this JSON structure (with real content):

{
  "phases": [
    {
      "id": "phase1",
      "title": "Foundation Phase",
      "subtitle": "Master the Fundamentals",
      "description": "Build a solid foundation with core concepts and essential skills",
      "color": "#8B5CF6",
      "sections": [
        {
          "title": "Core Concepts",
          "items": [
            "Concept 1 with brief description",
            "Concept 2 with brief description",
            "Concept 3 with brief description"
          ]
        },
        {
          "title": "Essential Tools",
          "items": [
            "Tool 1 and why it matters",
            "Tool 2 and its purpose"
          ]
        }
      ]
    },
    {
      "id": "phase2",
      "title": "Intermediate Phase",
      "subtitle": "Deepen Your Knowledge",
      "description": "Advanced concepts and practical applications",
      "color": "#EC4899",
      "sections": [
        {
          "title": "Advanced Topics",
          "items": ["Topic 1", "Topic 2"]
        }
      ]
    },
    {
      "id": "phase3",
      "title": "Advanced Phase",
      "subtitle": "Master Advanced Techniques",
      "description": "Expert-level skills and real-world projects",
      "color": "#F59E0B",
      "sections": [
        {
          "title": "Expert Skills",
          "items": ["Skill 1", "Skill 2"]
        }
      ]
    },
    {
      "id": "phase4",
      "title": "Specialization Phase",
      "subtitle": "Career-Ready Skills",
      "description": "Industry-specific expertise and portfolio building",
      "color": "#10B981",
      "sections": [
        {
          "title": "Specializations",
          "items": ["Area 1", "Area 2"]
        }
      ]
    }
  ],
  "learningPathData": {
    "coreFrameworks": ["Framework 1", "Framework 2", "Framework 3"],
    "essentialTools": ["Tool 1", "Tool 2", "Tool 3"],
    "keyTechnologies": ["Tech 1", "Tech 2", "Tech 3"],
    "recommendedProjects": ["Project 1 - description", "Project 2 - description"],
    "certifications": ["Cert 1", "Cert 2"],
    "learningResources": ["Resource 1", "Resource 2"]
  },
  "timelineData": [
    { "phase": "Foundation Phase", "months": "2-3 months" },
    { "phase": "Intermediate Phase", "months": "3-4 months" },
    { "phase": "Advanced Phase", "months": "4-5 months" },
    { "phase": "Specialization Phase", "months": "3-4 months" }
  ],
  "finalTips": [
    "Build projects while learning - theory alone isn't enough",
    "Join communities and network with professionals in the field",
    "Contribute to open-source projects to gain real-world experience",
    "Create a portfolio showcasing your best work",
    "Stay updated with latest industry trends and technologies",
    "Practice coding daily to build consistency and muscle memory"
  ]
}

IMPORTANT RULES:
1. Use these exact color codes for phases: #8B5CF6, #EC4899, #F59E0B, #10B981
2. Create 3-5 phases based on the learning journey complexity
3. Each phase should have 2-4 sections
4. Each section should have 3-6 items
5. Make content specific to 2025 technologies and best practices
6. Include modern frameworks, AI tools, and current industry standards
7. Timeline should be realistic (total 12-18 months for career transition)
8. Return ONLY the JSON object, no other text`;
    try {
        // Call OpenRouter API
        const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
                'Content-Type': 'application/json',
                'HTTP-Referer': process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
                'X-Title': 'AI Roadmap Generator'
            },
            body: JSON.stringify({
                model: 'anthropic/claude-3.5-sonnet',
                messages: [
                    {
                        role: 'system',
                        content: systemPrompt
                    },
                    {
                        role: 'user',
                        content: `Create a detailed learning roadmap for: ${query}`
                    }
                ],
                temperature: 0.7,
                max_tokens: 4000
            })
        });
        if (!response.ok) {
            const errorData = await response.json().catch(()=>({}));
            console.error('OpenRouter API Error:', errorData);
            return res.status(response.status).json({
                error: 'Failed to generate roadmap from AI service',
                details: errorData.error?.message || 'Unknown error'
            });
        }
        const data = await response.json();
        // Extract content from response
        const content = data.choices?.[0]?.message?.content;
        if (!content) {
            console.error('No content in API response:', data);
            return res.status(500).json({
                error: 'No content received from AI service'
            });
        }
        // Parse JSON (handle potential markdown code blocks)
        let roadmap;
        try {
            // Remove markdown code blocks if present
            const cleanedContent = content.replace(/```json\s*/g, '').replace(/```\s*/g, '').trim();
            roadmap = JSON.parse(cleanedContent);
        } catch (parseError) {
            console.error('JSON Parse Error:', parseError);
            console.error('Content received:', content);
            return res.status(500).json({
                error: 'Failed to parse AI response',
                details: 'The AI returned invalid JSON format'
            });
        }
        // Validate roadmap structure
        if (!roadmap.phases || !Array.isArray(roadmap.phases)) {
            console.error('Invalid roadmap structure:', roadmap);
            return res.status(500).json({
                error: 'Invalid roadmap structure received'
            });
        }
        // Ensure all required fields exist
        const validatedRoadmap = {
            phases: roadmap.phases || [],
            learningPathData: roadmap.learningPathData || {},
            timelineData: roadmap.timelineData || [],
            finalTips: roadmap.finalTips || []
        };
        // Return the generated roadmap
        return res.status(200).json(validatedRoadmap);
    } catch (error) {
        console.error('Error generating roadmap:', error);
        // Return appropriate error response
        if (error.name === 'AbortError') {
            return res.status(408).json({
                error: 'Request timeout'
            });
        }
        return res.status(500).json({
            error: 'Internal server error',
            details: ("TURBOPACK compile-time truthy", 1) ? error.message : ("TURBOPACK unreachable", undefined)
        });
    }
}
const config = {
    api: {
        bodyParser: {
            sizeLimit: '1mb'
        },
        responseLimit: '8mb'
    }
};
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__e6310a9d._.js.map