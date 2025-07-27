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
"[project]/app/api/analyze/route.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ProjectAnalyzerDemo)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-route] (ecmascript)");
;
;
function ProjectAnalyzerDemo() {
    const [prompt, setPrompt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["useState"])('');
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["useState"])(false);
    const [result, setResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["useState"])(null);
    // This simulates your OpenAI API call
    const analyzePrompt = async ()=>{
        if (!prompt.trim()) return;
        setLoading(true);
        try {
            // This would call your /api/analyze endpoint
            const res = await fetch('/api/analyze', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    prompt
                })
            });
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            const data = await res.json();
            setResult(data);
        } catch (error) {
            console.error('Error analyzing:', error);
            alert('Something went wrong. Please try again.');
            // Fallback demo data if API fails
            const demoResult = {
                mindmap: `AI-Generated Analysis for: "${prompt.slice(0, 40)}..."

├── 1. Project Planning Phase
│   ├── Requirement gathering
│   ├── System architecture design
│   └── Technology stack selection
├── 2. Development Setup
│   ├── Environment configuration
│   ├── Project initialization
│   └── Dependency management
├── 3. Core Implementation
│   ├── Frontend development
│   ├── Backend API creation
│   └── Database integration
├── 4. Testing & Quality Assurance
│   ├── Unit testing
│   ├── Integration testing
│   └── User acceptance testing
├── 5. Deployment & Launch
│   ├── Production setup
│   ├── Performance optimization
│   └── Monitoring implementation`,
                tools: [
                    "Frontend Framework (React/Vue/Angular)",
                    "Backend Runtime (Node.js/Python/Java)",
                    "Database (MongoDB/PostgreSQL/MySQL)",
                    "CSS Framework (Tailwind/Bootstrap)",
                    "Version Control (Git)",
                    "Development Tools (VS Code/Postman)"
                ],
                packages: [
                    {
                        name: "React Documentation",
                        link: "https://reactjs.org/docs"
                    },
                    {
                        name: "Node.js Guide",
                        link: "https://nodejs.org/en/docs"
                    },
                    {
                        name: "Express.js",
                        link: "https://expressjs.com/"
                    },
                    {
                        name: "MongoDB Atlas",
                        link: "https://docs.atlas.mongodb.com/"
                    },
                    {
                        name: "Tailwind CSS",
                        link: "https://tailwindcss.com/docs"
                    }
                ],
                videos: [
                    {
                        title: "Full Stack Project Tutorial 2024",
                        link: "https://youtube.com/watch?v=demo1"
                    },
                    {
                        title: "Modern Web Development Guide",
                        link: "https://youtube.com/watch?v=demo2"
                    },
                    {
                        title: "Deployment Best Practices",
                        link: "https://youtube.com/watch?v=demo3"
                    }
                ]
            };
            setResult(demoResult);
        }
        setLoading(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen p-6 bg-gradient-to-br from-white to-gray-100",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-3xl font-bold text-center mb-6",
                    children: "🚀 Project Assignment Analyzer"
                }, void 0, false, {
                    fileName: "[project]/app/api/analyze/route.js",
                    lineNumber: 84,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                    className: "w-full p-4 border rounded-lg shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500",
                    rows: 6,
                    placeholder: "Paste your assignment or project topic, e.g. 'Build an e-commerce website with login & cart...'",
                    value: prompt,
                    onChange: (e)=>setPrompt(e.target.value)
                }, void 0, false, {
                    fileName: "[project]/app/api/analyze/route.js",
                    lineNumber: 86,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "mt-4 bg-black text-white px-6 py-2 rounded hover:bg-gray-800 disabled:opacity-50 transition-colors",
                    onClick: analyzePrompt,
                    disabled: loading || !prompt.trim(),
                    children: loading ? 'Analyzing...' : 'Analyze Project'
                }, void 0, false, {
                    fileName: "[project]/app/api/analyze/route.js",
                    lineNumber: 94,
                    columnNumber: 9
                }, this),
                result && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-10 space-y-8",
                    children: [
                        result.mindmap && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "bg-white p-6 rounded-lg shadow-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-semibold mb-4 flex items-center",
                                    children: "🧠 Mind Map"
                                }, void 0, false, {
                                    fileName: "[project]/app/api/analyze/route.js",
                                    lineNumber: 106,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                    className: "bg-gray-100 p-4 rounded whitespace-pre-wrap font-mono text-sm overflow-x-auto",
                                    children: result.mindmap
                                }, void 0, false, {
                                    fileName: "[project]/app/api/analyze/route.js",
                                    lineNumber: 109,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/api/analyze/route.js",
                            lineNumber: 105,
                            columnNumber: 15
                        }, this),
                        result.tools?.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "bg-white p-6 rounded-lg shadow-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-semibold mb-4 flex items-center",
                                    children: "🛠 Tools & Tech Stack"
                                }, void 0, false, {
                                    fileName: "[project]/app/api/analyze/route.js",
                                    lineNumber: 117,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2",
                                    children: result.tools.map((tool, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-2 h-2 bg-blue-500 rounded-full mr-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/api/analyze/route.js",
                                                    lineNumber: 123,
                                                    columnNumber: 23
                                                }, this),
                                                tool
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/app/api/analyze/route.js",
                                            lineNumber: 122,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/api/analyze/route.js",
                                    lineNumber: 120,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/api/analyze/route.js",
                            lineNumber: 116,
                            columnNumber: 15
                        }, this),
                        result.packages?.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "bg-white p-6 rounded-lg shadow-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-semibold mb-4 flex items-center",
                                    children: "📦 Packages + Docs"
                                }, void 0, false, {
                                    fileName: "[project]/app/api/analyze/route.js",
                                    lineNumber: 133,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2",
                                    children: result.packages.map((pkg, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-2 h-2 bg-green-500 rounded-full mr-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/api/analyze/route.js",
                                                    lineNumber: 139,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: pkg.link,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "text-blue-600 hover:text-blue-800 underline transition-colors",
                                                    children: pkg.name
                                                }, void 0, false, {
                                                    fileName: "[project]/app/api/analyze/route.js",
                                                    lineNumber: 140,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/app/api/analyze/route.js",
                                            lineNumber: 138,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/api/analyze/route.js",
                                    lineNumber: 136,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/api/analyze/route.js",
                            lineNumber: 132,
                            columnNumber: 15
                        }, this),
                        result.videos?.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "bg-white p-6 rounded-lg shadow-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-semibold mb-4 flex items-center",
                                    children: "🎥 YouTube Tutorials"
                                }, void 0, false, {
                                    fileName: "[project]/app/api/analyze/route.js",
                                    lineNumber: 156,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2",
                                    children: result.videos.map((vid, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-2 h-2 bg-red-500 rounded-full mr-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/api/analyze/route.js",
                                                    lineNumber: 162,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: vid.link,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "text-red-600 hover:text-red-800 underline transition-colors",
                                                    children: vid.title
                                                }, void 0, false, {
                                                    fileName: "[project]/app/api/analyze/route.js",
                                                    lineNumber: 163,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/app/api/analyze/route.js",
                                            lineNumber: 161,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/api/analyze/route.js",
                                    lineNumber: 159,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/api/analyze/route.js",
                            lineNumber: 155,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/api/analyze/route.js",
                    lineNumber: 103,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/api/analyze/route.js",
            lineNumber: 83,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/api/analyze/route.js",
        lineNumber: 82,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__3401877b._.js.map