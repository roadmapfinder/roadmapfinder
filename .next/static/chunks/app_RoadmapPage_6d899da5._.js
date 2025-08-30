(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/app/RoadmapPage/roadmapsData.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "getFeaturedRoadmaps": (()=>getFeaturedRoadmaps),
    "getRoadmapById": (()=>getRoadmapById),
    "getRoadmapsByCategory": (()=>getRoadmapsByCategory),
    "getTrendingRoadmaps": (()=>getTrendingRoadmaps),
    "popularTags": (()=>popularTags),
    "roadmapsData": (()=>roadmapsData),
    "searchRoadmaps": (()=>searchRoadmaps)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/brain.js [app-client] (ecmascript) <export default as Brain>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/database.js [app-client] (ecmascript) <export default as Database>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panels$2d$top$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/panels-top-left.js [app-client] (ecmascript) <export default as Layout>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/smartphone.js [app-client] (ecmascript) <export default as Smartphone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cloud.js [app-client] (ecmascript) <export default as Cloud>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/video.js [app-client] (ecmascript) <export default as Video>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paintbrush$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paintbrush$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/paintbrush.js [app-client] (ecmascript) <export default as Paintbrush>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$blocks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Blocks$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/blocks.js [app-client] (ecmascript) <export default as Blocks>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-grid.js [app-client] (ecmascript) <export default as LayoutGrid>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/server.js [app-client] (ecmascript) <export default as Server>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/code.js [app-client] (ecmascript) <export default as Code>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileCode$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-code.js [app-client] (ecmascript) <export default as FileCode>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/terminal.js [app-client] (ecmascript) <export default as Terminal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/code-xml.js [app-client] (ecmascript) <export default as Code2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$branch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GitBranch$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/git-branch.js [app-client] (ecmascript) <export default as GitBranch>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cpu.js [app-client] (ecmascript) <export default as Cpu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Triangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle.js [app-client] (ecmascript) <export default as Triangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$binary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Binary$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/binary.js [app-client] (ecmascript) <export default as Binary>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$leaf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Leaf$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/leaf.js [app-client] (ecmascript) <export default as Leaf>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Square$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square.js [app-client] (ecmascript) <export default as Square>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PenBox$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-pen.js [app-client] (ecmascript) <export default as PenBox>");
;
;
const roadmapsData = [
    {
        id: "ai",
        title: "AI & ML",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__["Brain"], {
            className: "w-5 h-5 text-white"
        }, void 0, false, {
            fileName: "[project]/app/RoadmapPage/roadmapsData.js",
            lineNumber: 39,
            columnNumber: 11
        }, this),
        link: "/Roadmaps/Aiml",
        bgColor: "from-blue-500 to-indigo-600",
        category: "featured",
        description: "Machine Learning, Deep Learning, Neural Networks"
    },
    {
        id: "web",
        title: "Web Development",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
            className: "w-5 h-5 text-white"
        }, void 0, false, {
            fileName: "[project]/app/RoadmapPage/roadmapsData.js",
            lineNumber: 48,
            columnNumber: 11
        }, this),
        link: "/Roadmaps/Web",
        bgColor: "from-blue-600 to-blue-400",
        category: "featured",
        description: "Full-stack web development fundamentals"
    },
    {
        id: "django",
        title: "Django",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__["Code2"], {
            className: "w-5 h-5 text-white"
        }, void 0, false, {
            fileName: "[project]/app/RoadmapPage/roadmapsData.js",
            lineNumber: 57,
            columnNumber: 11
        }, this),
        link: "/Roadmaps/Django",
        bgColor: "from-green-800 to-green-900",
        category: "featured",
        description: "Backend development with python"
    },
    {
        id: "react",
        title: "React",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
            className: "w-5 h-5 text-white"
        }, void 0, false, {
            fileName: "[project]/app/RoadmapPage/roadmapsData.js",
            lineNumber: 66,
            columnNumber: 11
        }, this),
        link: "/Roadmaps/React",
        bgColor: "from-blue-600 to-blue-400",
        category: "featured",
        description: "React.js library for building user interfaces"
    },
    {
        id: "nextjs",
        title: "Next.js",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Triangle$3e$__["Triangle"], {
            className: "w-5 h-5 text-white"
        }, void 0, false, {
            fileName: "[project]/app/RoadmapPage/roadmapsData.js",
            lineNumber: 75,
            columnNumber: 11
        }, this),
        link: "/Roadmaps/Next",
        bgColor: "from-gray-800 to-black",
        category: "featured",
        description: "Full-stack React framework"
    },
    {
        id: "nestjs",
        title: "Nest.js",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Triangle$3e$__["Triangle"], {
            className: "w-5 h-5 text-white"
        }, void 0, false, {
            fileName: "[project]/app/RoadmapPage/roadmapsData.js",
            lineNumber: 84,
            columnNumber: 11
        }, this),
        link: "/Roadmaps/Nestjs",
        bgColor: "from-pink-600 to-pink-700",
        category: "featured",
        description: "Enterprise standard for node.js backend"
    },
    {
        id: "reactnative",
        title: "React Native",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__["Smartphone"], {
            className: "w-5 h-5 text-white"
        }, void 0, false, {
            fileName: "[project]/app/RoadmapPage/roadmapsData.js",
            lineNumber: 93,
            columnNumber: 11
        }, this),
        link: "/Roadmaps/Reactnative",
        bgColor: "from-blue-500 to-cyan-400",
        category: "featured",
        description: "Cross-platform mobile app development"
    },
    {
        id: "softwareengineer",
        title: "Software Engineer",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Square$3e$__["Square"], {
            className: "w-5 h-5 text-white"
        }, void 0, false, {
            fileName: "[project]/app/RoadmapPage/roadmapsData.js",
            lineNumber: 102,
            columnNumber: 11
        }, this),
        link: "/Roadmaps/Software",
        bgColor: "from-blue-500 to-cyan-400",
        category: "featured",
        description: "Cross-platform mobile app development"
    },
    {
        id: "flutter",
        title: "Flutter",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__["Smartphone"], {
            className: "w-5 h-5 text-white"
        }, void 0, false, {
            fileName: "[project]/app/RoadmapPage/roadmapsData.js",
            lineNumber: 111,
            columnNumber: 11
        }, this),
        link: "/Roadmaps/Flutter",
        bgColor: "from-blue-500 to-blue-700",
        category: "featured",
        description: "Cross-platform mobile app development"
    },
    {
        id: "fullstack",
        title: "Full-Stack",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
            className: "w-5 h-5 text-white"
        }, void 0, false, {
            fileName: "[project]/app/RoadmapPage/roadmapsData.js",
            lineNumber: 120,
            columnNumber: 11
        }, this),
        link: "/Roadmaps/Full-Stack",
        bgColor: "from-blue-500 to-blue-700",
        category: "featured",
        description: "Full-Stack Web development"
    },
    {
        id: "frontend",
        title: "Frontend",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
            className: "w-5 h-5 text-white"
        }, void 0, false, {
            fileName: "[project]/app/RoadmapPage/roadmapsData.js",
            lineNumber: 129,
            columnNumber: 11
        }, this),
        link: "/Roadmaps/Frontend",
        bgColor: "from-blue-500 to-cyan-400",
        category: "featured",
        description: "Frontend development specialization"
    },
    {
        id: "mern",
        title: "Mern Stack",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
            className: "w-5 h-5 text-white"
        }, void 0, false, {
            fileName: "[project]/app/RoadmapPage/roadmapsData.js",
            lineNumber: 138,
            columnNumber: 11
        }, this),
        link: "/Roadmaps/Mern",
        bgColor: "from-blue-600 to-cyan-500",
        category: "featured",
        description: "Mern stack development specialization"
    },
    {
        id: "backend",
        title: "Backend Development",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__["Server"], {
            className: "w-5 h-5 text-white"
        }, void 0, false, {
            fileName: "[project]/app/RoadmapPage/roadmapsData.js",
            lineNumber: 147,
            columnNumber: 11
        }, this),
        link: "/Roadmaps/Backend",
        bgColor: "from-green-600 to-emerald-700",
        category: "featured",
        description: "Server-side development and APIs"
    },
    {
        id: "nodejs",
        title: "Node js",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__["Server"], {
            className: "w-5 h-5 text-white"
        }, void 0, false, {
            fileName: "[project]/app/RoadmapPage/roadmapsData.js",
            lineNumber: 156,
            columnNumber: 11
        }, this),
        link: "/Roadmaps/Nodejs",
        bgColor: "from-green-400 to-emerald-500",
        category: "featured",
        description: "Server-side development and APIs"
    },
    {
        id: "express js",
        title: "Express js",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            className: "w-5 h-5 text-white"
        }, void 0, false, {
            fileName: "[project]/app/RoadmapPage/roadmapsData.js",
            lineNumber: 165,
            columnNumber: 11
        }, this),
        link: "/Roadmaps/Expressjs",
        bgColor: "from-green-400 to-emerald-500",
        category: "featured",
        description: "Server-side development and APIs"
    },
    {
        id: "javascript",
        title: "JavaScript",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"], {
            className: "w-5 h-5 text-white"
        }, void 0, false, {
            fileName: "[project]/app/RoadmapPage/roadmapsData.js",
            lineNumber: 174,
            columnNumber: 11
        }, this),
        link: "/Roadmaps/Javascript",
        bgColor: "from-yellow-400 to-yellow-600",
        category: "featured",
        description: "Modern JavaScript programming"
    },
    {
        id: "typescript",
        title: "TypeScript",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            className: "w-5 h-5 text-white"
        }, void 0, false, {
            fileName: "[project]/app/RoadmapPage/roadmapsData.js",
            lineNumber: 183,
            columnNumber: 11
        }, this),
        link: "/Roadmaps/Typescript",
        bgColor: "from-blue-400 to-blue-600",
        category: "featured",
        description: "Modern Typescript programming"
    },
    {
        id: "python",
        title: "Python",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__["Terminal"], {
            className: "w-5 h-5 text-white"
        }, void 0, false, {
            fileName: "[project]/app/RoadmapPage/roadmapsData.js",
            lineNumber: 192,
            columnNumber: 11
        }, this),
        link: "/Roadmaps/Python",
        bgColor: "from-blue-500 to-green-500",
        category: "trending",
        description: "Python programming language"
    },
    {
        id: "java",
        title: "Java",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileCode$3e$__["FileCode"], {
            className: "w-5 h-5 text-white"
        }, void 0, false, {
            fileName: "[project]/app/RoadmapPage/roadmapsData.js",
            lineNumber: 201,
            columnNumber: 11
        }, this),
        link: "/Roadmaps/Java",
        bgColor: "from-orange-500 to-red-600",
        category: "trending",
        description: "Java programming language"
    },
    {
        id: "java full-stack",
        title: "Java Full-Stack Developer",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileCode$3e$__["FileCode"], {
            className: "w-5 h-5 text-white"
        }, void 0, false, {
            fileName: "[project]/app/RoadmapPage/roadmapsData.js",
            lineNumber: 210,
            columnNumber: 11
        }, this),
        link: "/Roadmaps/JavaFullStack",
        bgColor: "from-orange-400 to-red-300",
        category: "trending",
        description: "Java Full-Stack Development"
    },
    {
        id: "rust",
        title: "Rust",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
            className: "w-5 h-5 text-white"
        }, void 0, false, {
            fileName: "[project]/app/RoadmapPage/roadmapsData.js",
            lineNumber: 219,
            columnNumber: 11
        }, this),
        link: "/Roadmaps/Rust",
        bgColor: "from-orange-600 to-red-700",
        category: "trending",
        description: "Systems programming with Rust"
    },
    {
        id: "php",
        title: "PHP",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"], {
            className: "w-5 h-5 text-white"
        }, void 0, false, {
            fileName: "[project]/app/RoadmapPage/roadmapsData.js",
            lineNumber: 228,
            columnNumber: 11
        }, this),
        link: "/Roadmaps/Php",
        bgColor: "from-purple-600 to-blue-600",
        category: "trending",
        description: "PHP web development"
    },
    {
        id: "sql",
        title: "SQL",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"], {
            className: "w-5 h-5 text-white"
        }, void 0, false, {
            fileName: "[project]/app/RoadmapPage/roadmapsData.js",
            lineNumber: 237,
            columnNumber: 11
        }, this),
        link: "/Roadmaps/Sql",
        bgColor: "from-blue-700 to-indigo-800",
        category: "trending",
        description: "Database management and queries"
    },
    {
        id: "golang",
        title: "Go (Golang)",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$branch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GitBranch$3e$__["GitBranch"], {
            className: "w-5 h-5 text-white"
        }, void 0, false, {
            fileName: "[project]/app/RoadmapPage/roadmapsData.js",
            lineNumber: 246,
            columnNumber: 11
        }, this),
        link: "/Roadmaps/Go",
        bgColor: "from-cyan-500 to-blue-500",
        category: "trending",
        description: "Go programming language"
    },
    {
        id: "swift",
        title: "Swift",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Triangle$3e$__["Triangle"], {
            className: "w-5 h-5 text-white"
        }, void 0, false, {
            fileName: "[project]/app/RoadmapPage/roadmapsData.js",
            lineNumber: 255,
            columnNumber: 11
        }, this),
        link: "/Roadmaps/Swift",
        bgColor: "from-orange-400 to-red-500",
        category: "trending",
        description: "iOS and macOS development"
    },
    {
        id: "cpp",
        title: "C++",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"], {
            className: "w-5 h-5 text-white"
        }, void 0, false, {
            fileName: "[project]/app/RoadmapPage/roadmapsData.js",
            lineNumber: 264,
            columnNumber: 11
        }, this),
        link: "/Roadmaps/Cpp",
        bgColor: "from-blue-800 to-indigo-900",
        category: "trending",
        description: "C++ programming language"
    },
    {
        id: "C",
        title: "C language",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"], {
            className: "w-5 h-5 text-white"
        }, void 0, false, {
            fileName: "[project]/app/RoadmapPage/roadmapsData.js",
            lineNumber: 273,
            columnNumber: 11
        }, this),
        link: "/Roadmaps/C",
        bgColor: "from-blue-800 to-indigo-900",
        category: "trending",
        description: "C programming fundamentals"
    },
    {
        id: "kotlin",
        title: "Kotlin",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$binary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Binary$3e$__["Binary"], {
            className: "w-5 h-5 text-white"
        }, void 0, false, {
            fileName: "[project]/app/RoadmapPage/roadmapsData.js",
            lineNumber: 282,
            columnNumber: 11
        }, this),
        link: "/Roadmaps/Kotlin",
        bgColor: "from-purple-500 to-pink-600",
        category: "trending",
        description: "Kotlin for Android development"
    },
    {
        id: "springboot",
        title: "Springboot",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$leaf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Leaf$3e$__["Leaf"], {
            className: "w-5 h-5 text-white"
        }, void 0, false, {
            fileName: "[project]/app/RoadmapPage/roadmapsData.js",
            lineNumber: 291,
            columnNumber: 11
        }, this),
        link: "/Roadmaps/Springboot",
        bgColor: "from-green-500 to-green-600",
        category: "trending",
        description: "Spring Boot framework"
    },
    {
        id: "data",
        title: "Data Analysis & Science",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"], {
            className: "w-5 h-5 text-white"
        }, void 0, false, {
            fileName: "[project]/app/RoadmapPage/roadmapsData.js",
            lineNumber: 300,
            columnNumber: 11
        }, this),
        link: "/Roadmaps/Data",
        bgColor: "from-green-500 to-green-400",
        category: "trending",
        description: "Data science and analytics"
    },
    {
        id: "database",
        title: "Database Engineering",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"], {
            className: "w-5 h-5 text-white"
        }, void 0, false, {
            fileName: "[project]/app/RoadmapPage/roadmapsData.js",
            lineNumber: 309,
            columnNumber: 11
        }, this),
        link: "/Roadmaps/Database",
        bgColor: "from-green-600 to-green-700",
        category: "trending",
        description: "Database in depth "
    },
    {
        id: "excel",
        title: "Excel",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"], {
            className: "w-5 h-5 text-white"
        }, void 0, false, {
            fileName: "[project]/app/RoadmapPage/roadmapsData.js",
            lineNumber: 318,
            columnNumber: 11
        }, this),
        link: "/Roadmaps/Excel",
        bgColor: "from-green-500 to-green-400",
        category: "trending",
        description: "Excel expert course"
    },
    {
        id: "uiux",
        title: "UI/UX Design",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panels$2d$top$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__["Layout"], {
            className: "w-5 h-5 text-white"
        }, void 0, false, {
            fileName: "[project]/app/RoadmapPage/roadmapsData.js",
            lineNumber: 327,
            columnNumber: 11
        }, this),
        link: "/Roadmaps/UIUX",
        bgColor: "from-purple-500 to-pink-500",
        category: "trending",
        description: "User interface and experience design"
    },
    {
        id: "mobile",
        title: "Mobile App Development",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__["Smartphone"], {
            className: "w-5 h-5 text-white"
        }, void 0, false, {
            fileName: "[project]/app/RoadmapPage/roadmapsData.js",
            lineNumber: 336,
            columnNumber: 11
        }, this),
        link: "/Roadmaps/APP",
        bgColor: "from-orange-500 to-red-500",
        category: "trending",
        description: "Cross-platform mobile development"
    },
    {
        id: "cloud",
        title: "Cloud Computing",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__["Cloud"], {
            className: "w-5 h-5 text-white"
        }, void 0, false, {
            fileName: "[project]/app/RoadmapPage/roadmapsData.js",
            lineNumber: 345,
            columnNumber: 11
        }, this),
        link: "/Roadmaps/Cloud",
        bgColor: "from-blue-400 to-cyan-300",
        category: "trending",
        description: "Cloud platforms and services"
    },
    {
        id: "video",
        title: "Video Editing",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
            className: "w-5 h-5 text-white"
        }, void 0, false, {
            fileName: "[project]/app/RoadmapPage/roadmapsData.js",
            lineNumber: 354,
            columnNumber: 11
        }, this),
        link: "/Roadmaps/Video",
        bgColor: "from-red-500 to-pink-500",
        category: "trending",
        description: "Video editing and production"
    },
    {
        id: "graphic",
        title: "Graphic Design",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paintbrush$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paintbrush$3e$__["Paintbrush"], {
            className: "w-5 h-5 text-white"
        }, void 0, false, {
            fileName: "[project]/app/RoadmapPage/roadmapsData.js",
            lineNumber: 363,
            columnNumber: 11
        }, this),
        link: "/Roadmaps/Graphic",
        bgColor: "from-yellow-400 to-amber-500",
        category: "trending",
        description: "Visual design and graphics"
    },
    {
        id: "blockchain",
        title: "Blockchain Development",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$blocks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Blocks$3e$__["Blocks"], {
            className: "w-5 h-5 text-white"
        }, void 0, false, {
            fileName: "[project]/app/RoadmapPage/roadmapsData.js",
            lineNumber: 372,
            columnNumber: 11
        }, this),
        link: "/Roadmaps/Blockchain",
        bgColor: "from-blue-700 to-indigo-800",
        category: "trending",
        description: "Blockchain and cryptocurrency development"
    },
    {
        id: "system",
        title: "System Design",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
            className: "w-5 h-5 text-white"
        }, void 0, false, {
            fileName: "[project]/app/RoadmapPage/roadmapsData.js",
            lineNumber: 381,
            columnNumber: 11
        }, this),
        link: "/Roadmaps/System",
        bgColor: "from-emerald-500 to-teal-600",
        category: "trending",
        description: "Large-scale system architecture"
    },
    {
        id: "devops",
        title: "DevOps",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__["Server"], {
            className: "w-5 h-5 text-white"
        }, void 0, false, {
            fileName: "[project]/app/RoadmapPage/roadmapsData.js",
            lineNumber: 390,
            columnNumber: 11
        }, this),
        link: "/Roadmaps/Devops",
        bgColor: "from-gray-700 to-gray-900",
        category: "trending",
        description: "DevOps practices and tools"
    },
    {
        id: "dsa",
        title: "DSA",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__["LayoutGrid"], {
            className: "w-5 h-5 text-white"
        }, void 0, false, {
            fileName: "[project]/app/RoadmapPage/roadmapsData.js",
            lineNumber: 399,
            columnNumber: 11
        }, this),
        link: "/Roadmaps/DSA",
        bgColor: "from-gray-700 to-gray-900",
        category: "trending",
        description: "Data Structures and Algorithms"
    },
    {
        id: "cybersecurity",
        title: "Cyber Security",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
            className: "w-5 h-5 text-white"
        }, void 0, false, {
            fileName: "[project]/app/RoadmapPage/roadmapsData.js",
            lineNumber: 408,
            columnNumber: 11
        }, this),
        link: "/Roadmaps/CyberSecurity",
        bgColor: "from-red-600 to-red-800",
        category: "trending",
        description: "Cybersecurity and information security"
    },
    {
        id: "prompt engineering",
        title: "Prompt Engineering",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PenBox$3e$__["PenBox"], {
            className: "w-5 h-5 text-white"
        }, void 0, false, {
            fileName: "[project]/app/RoadmapPage/roadmapsData.js",
            lineNumber: 417,
            columnNumber: 11
        }, this),
        link: "/Roadmaps/Prompt",
        bgColor: "from-red-600 to-red-800",
        category: "trending",
        description: "Prompt Engineering and applications"
    },
    {
        id: "Internet of Things",
        title: "IOT",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"], {
            className: "w-5 h-5 text-white"
        }, void 0, false, {
            fileName: "[project]/app/RoadmapPage/roadmapsData.js",
            lineNumber: 426,
            columnNumber: 11
        }, this),
        link: "/Roadmaps/IOT",
        bgColor: "from-red-600 to-red-800",
        category: "trending",
        description: "IOT development and applications"
    },
    {
        id: "game development",
        title: "Game Development",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            className: "w-5 h-5 text-white"
        }, void 0, false, {
            fileName: "[project]/app/RoadmapPage/roadmapsData.js",
            lineNumber: 435,
            columnNumber: 11
        }, this),
        link: "/Roadmaps/Game",
        bgColor: "from-blue-600 to-blue-900",
        category: "trending",
        description: "Game Development and applications"
    }
];
const popularTags = [
    "AI",
    "Web",
    "JavaScript",
    "Python",
    "Java",
    "React",
    "Next.js",
    "Backend"
];
const getRoadmapsByCategory = (category)=>{
    return roadmapsData.filter((roadmap)=>roadmap.category === category);
};
const getFeaturedRoadmaps = ()=>{
    return roadmapsData.filter((roadmap)=>roadmap.category === "featured");
};
const getTrendingRoadmaps = ()=>{
    return roadmapsData.filter((roadmap)=>roadmap.category === "trending");
};
const searchRoadmaps = (query)=>{
    if (!query.trim()) return roadmapsData;
    return roadmapsData.filter((roadmap)=>roadmap.title.toLowerCase().includes(query.toLowerCase()) || roadmap.description.toLowerCase().includes(query.toLowerCase()));
};
const getRoadmapById = (id)=>{
    return roadmapsData.find((roadmap)=>roadmap.id === id);
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/RoadmapPage/roadmap.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>TechRoadmap)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/code.js [app-client] (ecmascript) <export default as Code>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/database.js [app-client] (ecmascript) <export default as Database>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/palette.js [app-client] (ecmascript) <export default as Palette>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-client] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$RoadmapPage$2f$roadmapsData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/RoadmapPage/roadmapsData.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
// Category definitions with better organization
const categories = {
    programming: {
        title: "Programming Languages",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"], {
            className: "w-5 h-5"
        }, void 0, false, {
            fileName: "[project]/app/RoadmapPage/roadmap.jsx",
            lineNumber: 30,
            columnNumber: 11
        }, this),
        color: "blue",
        description: "Master core programming languages"
    },
    frameworks: {
        title: "Frameworks & Libraries",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
            className: "w-5 h-5"
        }, void 0, false, {
            fileName: "[project]/app/RoadmapPage/roadmap.jsx",
            lineNumber: 36,
            columnNumber: 11
        }, this),
        color: "indigo",
        description: "Modern development frameworks"
    },
    databases: {
        title: "Databases & Backend",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"], {
            className: "w-5 h-5"
        }, void 0, false, {
            fileName: "[project]/app/RoadmapPage/roadmap.jsx",
            lineNumber: 42,
            columnNumber: 11
        }, this),
        color: "green",
        description: "Data management and server technologies"
    },
    design: {
        title: "Design & Creative",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"], {
            className: "w-5 h-5"
        }, void 0, false, {
            fileName: "[project]/app/RoadmapPage/roadmap.jsx",
            lineNumber: 48,
            columnNumber: 11
        }, this),
        color: "purple",
        description: "UI/UX and creative skills"
    },
    specialization: {
        title: "Specialized Fields",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"], {
            className: "w-5 h-5"
        }, void 0, false, {
            fileName: "[project]/app/RoadmapPage/roadmap.jsx",
            lineNumber: 54,
            columnNumber: 11
        }, this),
        color: "orange",
        description: "Specialized technology domains"
    }
};
// Categorize roadmaps based on their content
const categorizeRoadmap = (roadmap)=>{
    const title = roadmap.title.toLowerCase();
    const description = roadmap.description.toLowerCase();
    // Programming Languages
    if ([
        'javascript',
        'python',
        'java',
        'typescript',
        'c++',
        'c language',
        'php',
        'rust',
        'go',
        'swift',
        'kotlin'
    ].some((lang)=>title.includes(lang))) {
        return 'programming';
    }
    // Frameworks & Libraries
    if ([
        'react',
        'next.js',
        'django',
        'nest.js',
        'flutter',
        'springboot',
        'express js'
    ].some((fw)=>title.includes(fw))) {
        return 'frameworks';
    }
    // Databases & Backend
    if ([
        'sql',
        'database',
        'backend',
        'node js',
        'server',
        'devops',
        'cloud'
    ].some((db)=>title.includes(db) || description.includes(db))) {
        return 'databases';
    }
    // Design & Creative
    if ([
        'ui/ux',
        'graphic',
        'video',
        'design'
    ].some((design)=>title.includes(design) || description.includes(design))) {
        return 'design';
    }
    // Specialization (AI, Security, etc.)
    return 'specialization';
};
// Add categories to roadmaps data
const categorizedRoadmaps = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$RoadmapPage$2f$roadmapsData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["roadmapsData"].map((roadmap)=>({
        ...roadmap,
        category: categorizeRoadmap(roadmap)
    }));
// Difficulty and duration mapping (you can customize these)
const getDifficultyInfo = (title)=>{
    const beginnerTechs = [
        'javascript',
        'python',
        'html',
        'css',
        'excel'
    ];
    const advancedTechs = [
        'ai',
        'system design',
        'blockchain',
        'cyber security',
        'c++'
    ];
    if (beginnerTechs.some((tech)=>title.toLowerCase().includes(tech))) {
        return {
            difficulty: 'Beginner',
            duration: '2-3 months'
        };
    }
    if (advancedTechs.some((tech)=>title.toLowerCase().includes(tech))) {
        return {
            difficulty: 'Advanced',
            duration: '6-8 months'
        };
    }
    return {
        difficulty: 'Intermediate',
        duration: '3-5 months'
    };
};
function TechRoadmap() {
    _s();
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [filteredRoadmaps, setFilteredRoadmaps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(categorizedRoadmaps);
    const [hoveredCard, setHoveredCard] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Filter roadmaps based on search and category
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TechRoadmap.useEffect": ()=>{
            let filtered = categorizedRoadmaps;
            // Apply search filter
            if (searchQuery.trim()) {
                filtered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$RoadmapPage$2f$roadmapsData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["searchRoadmaps"])(searchQuery).map({
                    "TechRoadmap.useEffect": (roadmap)=>({
                            ...roadmap,
                            category: categorizeRoadmap(roadmap)
                        })
                }["TechRoadmap.useEffect"]);
            }
            // Apply category filter
            if (selectedCategory !== "all") {
                filtered = filtered.filter({
                    "TechRoadmap.useEffect": (roadmap)=>roadmap.category === selectedCategory
                }["TechRoadmap.useEffect"]);
            }
            setFilteredRoadmaps(filtered);
        }
    }["TechRoadmap.useEffect"], [
        searchQuery,
        selectedCategory
    ]);
    // Handle search tag click
    const handleTagClick = (tag)=>{
        setSearchQuery(tag);
    };
    // Get roadmaps by category
    const getRoadmapsByCategory = (categoryKey)=>{
        return filteredRoadmaps.filter((roadmap)=>roadmap.category === categoryKey);
    };
    // Get featured roadmaps (first few from each category)
    const getFeaturedRoadmaps = ()=>{
        const featured = [];
        Object.keys(categories).forEach((categoryKey)=>{
            const categoryRoadmaps = getRoadmapsByCategory(categoryKey);
            featured.push(...categoryRoadmaps.slice(0, 2));
        });
        return featured;
    };
    const featuredRoadmaps = searchQuery || selectedCategory !== "all" ? filteredRoadmaps : getFeaturedRoadmaps();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 pt-6 pb-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-2xl shadow-sm border border-gray-100 p-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/",
                                        className: "flex items-center text-gray-600 hover:text-blue-600 transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                                className: "w-5 h-5 mr-1"
                                            }, void 0, false, {
                                                fileName: "[project]/app/RoadmapPage/roadmap.jsx",
                                                lineNumber: 166,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-medium",
                                                children: "Back to Home"
                                            }, void 0, false, {
                                                fileName: "[project]/app/RoadmapPage/roadmap.jsx",
                                                lineNumber: 167,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/RoadmapPage/roadmap.jsx",
                                        lineNumber: 165,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center space-x-2 text-sm text-gray-500",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/app/RoadmapPage/roadmap.jsx",
                                                lineNumber: 170,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    categorizedRoadmaps.length,
                                                    " Learning Paths"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/RoadmapPage/roadmap.jsx",
                                                lineNumber: 171,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/RoadmapPage/roadmap.jsx",
                                        lineNumber: 169,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/RoadmapPage/roadmap.jsx",
                                lineNumber: 164,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-4xl font-bold text-gray-900 mb-4",
                                        children: "Tech Learning Roadmaps"
                                    }, void 0, false, {
                                        fileName: "[project]/app/RoadmapPage/roadmap.jsx",
                                        lineNumber: 176,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xl text-gray-600 max-w-2xl mx-auto",
                                        children: "Discover structured learning paths for programming languages, frameworks, and specialized tech skills"
                                    }, void 0, false, {
                                        fileName: "[project]/app/RoadmapPage/roadmap.jsx",
                                        lineNumber: 179,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/RoadmapPage/roadmap.jsx",
                                lineNumber: 175,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/RoadmapPage/roadmap.jsx",
                        lineNumber: 162,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/RoadmapPage/roadmap.jsx",
                    lineNumber: 161,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-2xl shadow-sm border border-gray-100 p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "Search roadmaps...",
                                        value: searchQuery,
                                        onChange: (e)=>setSearchQuery(e.target.value),
                                        className: "w-full px-4 py-4 pl-12 pr-12 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-gray-50"
                                    }, void 0, false, {
                                        fileName: "[project]/app/RoadmapPage/roadmap.jsx",
                                        lineNumber: 191,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        className: "w-5 h-5 text-gray-400 absolute left-4 top-4.5"
                                    }, void 0, false, {
                                        fileName: "[project]/app/RoadmapPage/roadmap.jsx",
                                        lineNumber: 198,
                                        columnNumber: 15
                                    }, this),
                                    searchQuery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setSearchQuery(""),
                                        className: "absolute right-4 top-4.5 text-gray-400 hover:text-gray-600",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/app/RoadmapPage/roadmap.jsx",
                                            lineNumber: 204,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/RoadmapPage/roadmap.jsx",
                                        lineNumber: 200,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/RoadmapPage/roadmap.jsx",
                                lineNumber: 190,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-3 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setSelectedCategory("all"),
                                        className: `px-4 py-2 rounded-lg text-sm font-medium transition-all ${selectedCategory === "all" ? "bg-blue-600 text-white shadow-md" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`,
                                        children: "All Categories"
                                    }, void 0, false, {
                                        fileName: "[project]/app/RoadmapPage/roadmap.jsx",
                                        lineNumber: 211,
                                        columnNumber: 15
                                    }, this),
                                    Object.entries(categories).map(([key, category])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setSelectedCategory(key),
                                            className: `px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center space-x-2 ${selectedCategory === key ? "bg-blue-600 text-white shadow-md" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`,
                                            children: [
                                                category.icon,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: category.title
                                                }, void 0, false, {
                                                    fileName: "[project]/app/RoadmapPage/roadmap.jsx",
                                                    lineNumber: 232,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, key, true, {
                                            fileName: "[project]/app/RoadmapPage/roadmap.jsx",
                                            lineNumber: 222,
                                            columnNumber: 17
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/RoadmapPage/roadmap.jsx",
                                lineNumber: 210,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-gray-500 flex items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                className: "w-4 h-4 mr-1"
                                            }, void 0, false, {
                                                fileName: "[project]/app/RoadmapPage/roadmap.jsx",
                                                lineNumber: 240,
                                                columnNumber: 17
                                            }, this),
                                            "Popular:"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/RoadmapPage/roadmap.jsx",
                                        lineNumber: 239,
                                        columnNumber: 15
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$RoadmapPage$2f$roadmapsData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["popularTags"].map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleTagClick(tag),
                                            className: "px-3 py-1 text-xs rounded-full bg-blue-50 hover:bg-blue-100 text-blue-600 transition-colors border border-blue-200",
                                            children: tag
                                        }, tag, false, {
                                            fileName: "[project]/app/RoadmapPage/roadmap.jsx",
                                            lineNumber: 244,
                                            columnNumber: 17
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/RoadmapPage/roadmap.jsx",
                                lineNumber: 238,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/RoadmapPage/roadmap.jsx",
                        lineNumber: 188,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/RoadmapPage/roadmap.jsx",
                    lineNumber: 187,
                    columnNumber: 9
                }, this),
                searchQuery || selectedCategory !== "all" ? // Search/Filter Results
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between mb-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold text-gray-900",
                                children: [
                                    searchQuery ? `Search Results` : categories[selectedCategory]?.title,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-lg text-gray-500 ml-2",
                                        children: [
                                            "(",
                                            filteredRoadmaps.length,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/RoadmapPage/roadmap.jsx",
                                        lineNumber: 263,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/RoadmapPage/roadmap.jsx",
                                lineNumber: 261,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/RoadmapPage/roadmap.jsx",
                            lineNumber: 260,
                            columnNumber: 13
                        }, this),
                        filteredRoadmaps.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                            children: filteredRoadmaps.map((roadmap)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RoadmapCard, {
                                    roadmap: roadmap,
                                    hoveredCard: hoveredCard,
                                    setHoveredCard: setHoveredCard
                                }, roadmap.id, false, {
                                    fileName: "[project]/app/RoadmapPage/roadmap.jsx",
                                    lineNumber: 270,
                                    columnNumber: 19
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/RoadmapPage/roadmap.jsx",
                            lineNumber: 268,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NoResultsMessage, {
                            onClear: ()=>{
                                setSearchQuery("");
                                setSelectedCategory("all");
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/RoadmapPage/roadmap.jsx",
                            lineNumber: 279,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/RoadmapPage/roadmap.jsx",
                    lineNumber: 259,
                    columnNumber: 11
                }, this) : // Category-wise Display
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between mb-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-bold text-gray-900 flex items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                className: "w-6 h-6 mr-2 text-yellow-500"
                                            }, void 0, false, {
                                                fileName: "[project]/app/RoadmapPage/roadmap.jsx",
                                                lineNumber: 289,
                                                columnNumber: 19
                                            }, this),
                                            "Featured Roadmaps"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/RoadmapPage/roadmap.jsx",
                                        lineNumber: 288,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/RoadmapPage/roadmap.jsx",
                                    lineNumber: 287,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                                    children: featuredRoadmaps.slice(0, 6).map((roadmap)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RoadmapCard, {
                                            roadmap: roadmap,
                                            hoveredCard: hoveredCard,
                                            setHoveredCard: setHoveredCard,
                                            featured: true
                                        }, roadmap.id, false, {
                                            fileName: "[project]/app/RoadmapPage/roadmap.jsx",
                                            lineNumber: 295,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/RoadmapPage/roadmap.jsx",
                                    lineNumber: 293,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/RoadmapPage/roadmap.jsx",
                            lineNumber: 286,
                            columnNumber: 13
                        }, this),
                        Object.entries(categories).map(([categoryKey, categoryInfo])=>{
                            const categoryRoadmaps = getRoadmapsByCategory(categoryKey);
                            if (categoryRoadmaps.length === 0) return null;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-2 rounded-lg bg-blue-50 mr-4",
                                                        children: categoryInfo.icon
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/RoadmapPage/roadmap.jsx",
                                                        lineNumber: 315,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                className: "text-2xl font-bold text-gray-900",
                                                                children: categoryInfo.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/RoadmapPage/roadmap.jsx",
                                                                lineNumber: 319,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-gray-600",
                                                                children: categoryInfo.description
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/RoadmapPage/roadmap.jsx",
                                                                lineNumber: 320,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/RoadmapPage/roadmap.jsx",
                                                        lineNumber: 318,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/RoadmapPage/roadmap.jsx",
                                                lineNumber: 314,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setSelectedCategory(categoryKey),
                                                className: "text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center",
                                                children: [
                                                    "View All ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                        className: "w-4 h-4 ml-1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/RoadmapPage/roadmap.jsx",
                                                        lineNumber: 327,
                                                        columnNumber: 32
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/RoadmapPage/roadmap.jsx",
                                                lineNumber: 323,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/RoadmapPage/roadmap.jsx",
                                        lineNumber: 313,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                                        children: categoryRoadmaps.slice(0, 6).map((roadmap)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RoadmapCard, {
                                                roadmap: roadmap,
                                                hoveredCard: hoveredCard,
                                                setHoveredCard: setHoveredCard
                                            }, roadmap.id, false, {
                                                fileName: "[project]/app/RoadmapPage/roadmap.jsx",
                                                lineNumber: 332,
                                                columnNumber: 23
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/RoadmapPage/roadmap.jsx",
                                        lineNumber: 330,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, categoryKey, true, {
                                fileName: "[project]/app/RoadmapPage/roadmap.jsx",
                                lineNumber: 312,
                                columnNumber: 17
                            }, this);
                        })
                    ]
                }, void 0, true),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-2xl font-bold mb-2",
                            children: "Stay Updated"
                        }, void 0, false, {
                            fileName: "[project]/app/RoadmapPage/roadmap.jsx",
                            lineNumber: 348,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-blue-100 mb-6 max-w-2xl mx-auto",
                            children: "Get notified about new roadmaps, learning resources, and tech updates delivered to your inbox."
                        }, void 0, false, {
                            fileName: "[project]/app/RoadmapPage/roadmap.jsx",
                            lineNumber: 349,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row gap-3 max-w-md mx-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "email",
                                    placeholder: "Enter your email",
                                    className: "flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
                                }, void 0, false, {
                                    fileName: "[project]/app/RoadmapPage/roadmap.jsx",
                                    lineNumber: 353,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/Signup",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap",
                                        children: "Subscribe Now"
                                    }, void 0, false, {
                                        fileName: "[project]/app/RoadmapPage/roadmap.jsx",
                                        lineNumber: 359,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/RoadmapPage/roadmap.jsx",
                                    lineNumber: 358,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/RoadmapPage/roadmap.jsx",
                            lineNumber: 352,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/RoadmapPage/roadmap.jsx",
                    lineNumber: 347,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/RoadmapPage/roadmap.jsx",
            lineNumber: 159,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/RoadmapPage/roadmap.jsx",
        lineNumber: 158,
        columnNumber: 5
    }, this);
}
_s(TechRoadmap, "0SHimP/lqIkSaFda9eGRgWpL0+w=");
_c = TechRoadmap;
// Roadmap Card Component
function RoadmapCard({ roadmap, hoveredCard, setHoveredCard, featured = false }) {
    const { difficulty, duration } = getDifficultyInfo(roadmap.title);
    const isHovered = hoveredCard === roadmap.id;
    const difficultyColors = {
        'Beginner': 'bg-green-100 text-green-800',
        'Intermediate': 'bg-yellow-100 text-yellow-800',
        'Advanced': 'bg-red-100 text-red-800'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: roadmap.link,
        className: "block h-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `bg-white rounded-xl border border-gray-100 hover:border-blue-200 p-6 h-full transition-all duration-300 hover:shadow-lg ${isHovered ? 'transform -translate-y-1' : ''} ${featured ? 'ring-2 ring-blue-100' : ''}`,
            onMouseEnter: ()=>setHoveredCard(roadmap.id),
            onMouseLeave: ()=>setHoveredCard(null),
            children: [
                featured && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between mb-3",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full flex items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                className: "w-3 h-3 mr-1"
                            }, void 0, false, {
                                fileName: "[project]/app/RoadmapPage/roadmap.jsx",
                                lineNumber: 393,
                                columnNumber: 15
                            }, this),
                            "Featured"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/RoadmapPage/roadmap.jsx",
                        lineNumber: 392,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/RoadmapPage/roadmap.jsx",
                    lineNumber: 391,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start space-x-4 mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-3 rounded-lg bg-blue-50 text-blue-600 flex-shrink-0",
                            children: roadmap.icon
                        }, void 0, false, {
                            fileName: "[project]/app/RoadmapPage/roadmap.jsx",
                            lineNumber: 400,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 min-w-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-bold text-gray-900 text-lg mb-1 truncate",
                                    children: roadmap.title
                                }, void 0, false, {
                                    fileName: "[project]/app/RoadmapPage/roadmap.jsx",
                                    lineNumber: 404,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600 text-sm line-clamp-2",
                                    children: roadmap.description
                                }, void 0, false, {
                                    fileName: "[project]/app/RoadmapPage/roadmap.jsx",
                                    lineNumber: 405,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/RoadmapPage/roadmap.jsx",
                            lineNumber: 403,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/RoadmapPage/roadmap.jsx",
                    lineNumber: 399,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between text-xs text-gray-500 mb-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `px-2 py-1 rounded-full text-xs font-medium ${difficultyColors[difficulty]}`,
                                children: difficulty
                            }, void 0, false, {
                                fileName: "[project]/app/RoadmapPage/roadmap.jsx",
                                lineNumber: 411,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                        className: "w-3 h-3 mr-1"
                                    }, void 0, false, {
                                        fileName: "[project]/app/RoadmapPage/roadmap.jsx",
                                        lineNumber: 415,
                                        columnNumber: 15
                                    }, this),
                                    duration
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/RoadmapPage/roadmap.jsx",
                                lineNumber: 414,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/RoadmapPage/roadmap.jsx",
                        lineNumber: 410,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/RoadmapPage/roadmap.jsx",
                    lineNumber: 409,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-blue-600 text-sm font-medium",
                            children: "Start Learning"
                        }, void 0, false, {
                            fileName: "[project]/app/RoadmapPage/roadmap.jsx",
                            lineNumber: 422,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                            className: `w-4 h-4 text-blue-600 transition-transform ${isHovered ? 'translate-x-1' : ''}`
                        }, void 0, false, {
                            fileName: "[project]/app/RoadmapPage/roadmap.jsx",
                            lineNumber: 423,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/RoadmapPage/roadmap.jsx",
                    lineNumber: 421,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/RoadmapPage/roadmap.jsx",
            lineNumber: 383,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/RoadmapPage/roadmap.jsx",
        lineNumber: 382,
        columnNumber: 5
    }, this);
}
_c1 = RoadmapCard;
// No Results Component
function NoResultsMessage({ onClear }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-center py-16",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                    className: "w-10 h-10 text-gray-400"
                }, void 0, false, {
                    fileName: "[project]/app/RoadmapPage/roadmap.jsx",
                    lineNumber: 435,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/RoadmapPage/roadmap.jsx",
                lineNumber: 434,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-xl font-semibold text-gray-900 mb-2",
                children: "No roadmaps found"
            }, void 0, false, {
                fileName: "[project]/app/RoadmapPage/roadmap.jsx",
                lineNumber: 437,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-600 mb-6 max-w-md mx-auto",
                children: "We couldn't find any roadmaps matching your search. Try different keywords or browse our categories."
            }, void 0, false, {
                fileName: "[project]/app/RoadmapPage/roadmap.jsx",
                lineNumber: 438,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onClear,
                className: "bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors",
                children: "Show All Roadmaps"
            }, void 0, false, {
                fileName: "[project]/app/RoadmapPage/roadmap.jsx",
                lineNumber: 441,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/RoadmapPage/roadmap.jsx",
        lineNumber: 433,
        columnNumber: 5
    }, this);
}
_c2 = NoResultsMessage;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "TechRoadmap");
__turbopack_context__.k.register(_c1, "RoadmapCard");
__turbopack_context__.k.register(_c2, "NoResultsMessage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_RoadmapPage_6d899da5._.js.map