module.exports = {

"[project]/.next-internal/server/app/api/analyze/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

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
"[project]/app/api/analyze/route.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// /app/api/analyze/route.js
__turbopack_context__.s({
    "POST": (()=>POST)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
async function POST(request) {
    try {
        const { prompt } = await request.json();
        if (!prompt || !prompt.trim()) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Project description is required'
            }, {
                status: 400
            });
        }
        // Check if Gemini API key exists
        if (!process.env.GEMINI_API_KEY) {
            console.error('GEMINI_API_KEY is not set');
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'API key not configured'
            }, {
                status: 500
            });
        }
        console.log('Making request to Gemini API...');
        // Enhanced system prompt for structured project analysis
        const systemPrompt = `You are an expert Software Mentor, Tech Lead & Full-Stack Architect with 10+ years of experience across web development, AI/ML, mobile apps, data science, and emerging technologies.

Your mission:
Analyze the user's project idea thoroughly and provide a comprehensive, actionable breakdown that transforms their concept into a clear development roadmap.

🎯 INPUT ANALYSIS
You MUST:
- Understand the project scope and complexity level
- Identify the project category (Web App, Mobile App, AI/ML, Data Science, API, Desktop App, Game, etc.)
- Determine the user's likely skill level from their description
- Assess time complexity (hours, days, weeks, months)

📋 STRICT OUTPUT FORMAT

## 🔍 Project Analysis & Breakdown

**Project Category:** [Web App/Mobile App/AI-ML/Data Science/API/Desktop/Game/Other]
**Complexity Level:** [Beginner/Intermediate/Advanced]
**Estimated Timeline:** [X hours/days/weeks]
**Key Challenge Areas:** [List 2-3 main technical challenges]

## 🗺️ Step-by-Step Development Roadmap

**Phase 1: Planning & Setup (Days 1-2)**
- [ ] Define core features and user stories
- [ ] Set up development environment
- [ ] Initialize project structure
- [ ] Design database schema (if applicable)

**Phase 2: Core Development (Days 3-X)**
- [ ] [Specific milestone 1]
- [ ] [Specific milestone 2]
- [ ] [Specific milestone 3]
- [ ] [Additional milestones based on project]

**Phase 3: Integration & Testing (Days X-Y)**
- [ ] API integrations
- [ ] Testing implementation
- [ ] Bug fixes and optimization

**Phase 4: Deployment & Launch (Final days)**
- [ ] Production deployment
- [ ] Performance optimization
- [ ] Documentation

## 🧰 Recommended Tech Stack & Tools

**Frontend:**
- Framework: [React/Vue/Angular/Vanilla JS/Flutter/React Native]
- Styling: [Tailwind CSS/CSS Modules/Styled Components]
- State Management: [Redux/Zustand/Context API]

**Backend:**
- Runtime: [Node.js/Python/Java/Go/.NET]
- Framework: [Express/FastAPI/Spring Boot/Gin/ASP.NET]
- Database: [PostgreSQL/MongoDB/Firebase/Supabase]

**Essential NPM/Python Packages:**
1. **[Package Name]** - [Purpose and why it's needed]
   \`npm install [package-name]\` or \`pip install [package-name]\`
2. **[Package Name]** - [Purpose and why it's needed]
3. **[Package Name]** - [Purpose and why it's needed]
4. **[Additional packages as needed]**

**Development Tools:**
- Version Control: Git + GitHub/GitLab
- Code Editor: VS Code with recommended extensions
- Testing: [Jest/Cypress/Pytest/etc.]
- Deployment: [Vercel/Netlify/Heroku/AWS/Docker]

## 📚 Official Documentation & Resources

**Core Technologies:**
1. **[Technology Name]**: [Official docs URL] - [Brief description of what to focus on]
2. **[Technology Name]**: [Official docs URL] - [Brief description]
3. **[Technology Name]**: [Official docs URL] - [Brief description]

**API Documentation:**
- [If applicable, list relevant API docs]

**Learning Resources:**
- [Technology] Official Tutorial: [URL]
- [Technology] Best Practices Guide: [URL]

## 🎥 Recommended YouTube Resources

**Tutorial Videos:**
1. **"[Specific video title related to the project]"** by [Channel Name]
   - Focus: [What this video covers]
   - Duration: [Estimated duration]
   - Best for: [Beginner/Intermediate/Advanced]

2. **"[Another specific video title]"** by [Channel Name]
   - Focus: [What this video covers]
   - Duration: [Estimated duration]
   - Best for: [Skill level]

**YouTube Channels to Follow:**
- [Channel 1]: Great for [specific technology/concept]
- [Channel 2]: Excellent [specific area] tutorials

## 💡 Pro Tips & Best Practices

**Development Tips:**
- Start with a minimal viable product (MVP)
- Use version control from day one
- Write clean, commented code
- Test early and often

**Common Pitfalls to Avoid:**
- [Specific pitfall 1 related to this project type]
- [Specific pitfall 2]
- [Specific pitfall 3]

**Optimization Strategies:**
- [Performance tip 1]
- [Scalability consideration]
- [Security best practice]

## 🚀 Next Steps

1. **Immediate Actions (Today):**
   - Set up development environment
   - Create project repository
   - Install core dependencies

2. **This Week:**
   - Complete Phase 1 planning
   - Start core feature development
   - Set up basic project structure

3. **Future Considerations:**
   - Scalability planning
   - Additional feature roadmap
   - Monetization strategy (if applicable)

---

**📌 KEY REQUIREMENTS:**
- All package names must be real and currently maintained
- All documentation links should be to official sources
- YouTube recommendations should be specific and relevant
- Tech stack should be appropriate for the project complexity
- Timeline should be realistic for the described project
- Include both beginner-friendly and advanced resources when applicable`;
        // Gemini 2.5 API call
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-pro:generateContent?key=${process.env.GEMINI_API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: [
                    {
                        parts: [
                            {
                                text: `${systemPrompt}\n\nUser Request: Please provide comprehensive project analysis and development guidance for: ${prompt.trim()}`
                            }
                        ]
                    }
                ],
                generationConfig: {
                    temperature: 0.7,
                    topP: 0.9,
                    topK: 40,
                    maxOutputTokens: 3000,
                    candidateCount: 1
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
        console.log('Gemini API response received');
        if (!response.ok) {
            const errorData = await response.json();
            console.error('Gemini API error:', errorData);
            if (response.status === 401 || response.status === 403) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: 'Invalid Gemini API key configuration'
                }, {
                    status: 500
                });
            } else if (response.status === 429) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: 'Gemini API rate limit exceeded. Please try again in a few minutes.'
                }, {
                    status: 500
                });
            } else if (response.status === 400) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: 'Invalid request to Gemini API. Please check your input.'
                }, {
                    status: 500
                });
            }
            throw new Error(errorData.error?.message || 'Gemini API request failed');
        }
        const data = await response.json();
        // Handle Gemini response structure
        if (!data.candidates || data.candidates.length === 0 || !data.candidates[0].content) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'No response from Gemini model'
            }, {
                status: 500
            });
        }
        // Check if content was blocked due to safety filters
        if (data.candidates[0].finishReason === 'SAFETY') {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Content was blocked by safety filters. Please try rephrasing your request.'
            }, {
                status: 400
            });
        }
        const aiResponse = data.candidates[0].content.parts[0].text;
        // Enhanced response with metadata
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            result: aiResponse,
            metadata: {
                model: 'gemini-2.5-pro',
                timestamp: new Date().toISOString(),
                tokens_used: data.usageMetadata?.totalTokenCount || 'N/A',
                project_analyzed: prompt.trim().substring(0, 100) + '...',
                finish_reason: data.candidates[0].finishReason || 'STOP'
            }
        });
    } catch (error) {
        console.error('AI API error:', error.message);
        // Enhanced error handling
        if (error.message.includes('fetch')) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Network error. Please check your internet connection and try again.'
            }, {
                status: 500
            });
        } else if (error.message.includes('timeout')) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Request timeout. The AI is taking longer than expected. Please try again.'
            }, {
                status: 500
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Failed to analyze project',
            details: ("TURBOPACK compile-time truthy", 1) ? error.message : ("TURBOPACK unreachable", undefined)
        }, {
            status: 500
        });
    }
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__8df678af._.js.map