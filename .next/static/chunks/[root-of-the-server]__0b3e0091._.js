(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[next]/internal/font/google/sora_35fc7b10.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "className": "sora_35fc7b10-module__cZdXfG__className",
  "variable": "sora_35fc7b10-module__cZdXfG__variable",
});
}}),
"[next]/internal/font/google/sora_35fc7b10.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$sora_35fc7b10$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/sora_35fc7b10.module.css [app-client] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$sora_35fc7b10$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Sora', Arial, sans-serif",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$sora_35fc7b10$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$sora_35fc7b10$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}}),
"[project]/app/layout.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// app/layout.js
__turbopack_context__.s({
    "default": (()=>RootLayout),
    "metadata": (()=>metadata),
    "viewport": (()=>viewport)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$speed$2d$insights$2f$dist$2f$next$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vercel/speed-insights/dist/next/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$analytics$2f$dist$2f$next$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vercel/analytics/dist/next/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$sora_35fc7b10$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/sora_35fc7b10.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const viewport = {
    themeColor: "#ffffff",
    colorScheme: "light",
    width: "device-width",
    initialScale: 1
};
const metadata = {
    title: "RoadmapFinder - Tech Skill Roadmaps",
    description: "Explore RoadmapFinder — your ultimate platform for Tech Skill Roadmaps, curated YouTube Best Courses, and AI Resource Finder. Learn web development, AI, and data science through structured learning paths and top-rated video resources.",
    keywords: "Tech Skill Roadmaps, YouTube Best Courses, AI Resource Finder, roadmapfinder, learn programming, web development roadmap, data science roadmap, AI learning roadmap, best YouTube tech courses, trending developer resources, AI learning tools",
    applicationName: "RoadmapFinder",
    authors: [
        {
            name: "RoadmapFinder",
            url: "https://roadmapfinder.tech"
        }
    ],
    creator: "Sohel Khan",
    publisher: "RoadmapFinder",
    robots: "index, follow",
    alternates: {
        canonical: "https://roadmapfinder.tech"
    },
    openGraph: {
        title: "RoadmapFinder - Tech Skill Roadmaps, YouTube Best Courses & AI Resource Finder",
        description: "Master tech skills with RoadmapFinder: Step-by-step Tech Skill Roadmaps, best YouTube courses, and AI Resource Finder to learn smarter and faster.",
        url: "https://roadmapfinder.tech",
        siteName: "RoadmapFinder",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "https://roadmapfinder.tech/og-image.png",
                width: 1200,
                height: 630,
                alt: "RoadmapFinder - Tech Skill Roadmaps"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "RoadmapFinder - Tech Skill Roadmaps",
        description: "Discover structured Tech Skill Roadmaps, curated YouTube Best Courses, and an AI Resource Finder to accelerate your learning journey with RoadmapFinder.",
        site: "@roadmapfinder",
        creator: "Sohel Khan",
        images: [
            "https://roadmapfinder.tech/og-image.png"
        ]
    },
    metadataBase: new URL("https://roadmapfinder.tech")
};
function RootLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "en",
        className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$sora_35fc7b10$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].variable,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("head", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "google-site-verification",
                        content: "Pcule-Lkxly8lgZaFN0VfX2fsPd3vl7xi-P7b1rMwzs"
                    }, void 0, false, {
                        fileName: "[project]/app/layout.js",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        rel: "icon",
                        href: "/favicon.ico",
                        sizes: "32x32"
                    }, void 0, false, {
                        fileName: "[project]/app/layout.js",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        rel: "icon",
                        href: "/roadmapfinder.svg",
                        type: "image/svg+xml"
                    }, void 0, false, {
                        fileName: "[project]/app/layout.js",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        rel: "apple-touch-icon",
                        href: "/apple-touch-icon.png"
                    }, void 0, false, {
                        fileName: "[project]/app/layout.js",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        rel: "manifest",
                        href: "/manifest.json"
                    }, void 0, false, {
                        fileName: "[project]/app/layout.js",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        rel: "alternate",
                        href: "https://roadmapfinder.tech/RoadmapPage"
                    }, void 0, false, {
                        fileName: "[project]/app/layout.js",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        rel: "alternate",
                        href: "https://roadmapfinder.tech/Courses"
                    }, void 0, false, {
                        fileName: "[project]/app/layout.js",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                        async: true,
                        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1366157018323318",
                        crossorigin: "anonymous"
                    }, void 0, false, {
                        fileName: "[project]/app/layout.js",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                        async: true,
                        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1366157018323318",
                        crossorigin: "anonymous"
                    }, void 0, false, {
                        fileName: "[project]/app/layout.js",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                        type: "application/ld+json",
                        dangerouslySetInnerHTML: {
                            __html: `
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "RoadmapFinder",
            "url": "https://roadmapfinder.tech",
            "description": "RoadmapFinder offers structured Tech Skill Roadmaps, curated YouTube Best Courses, and an AI Resource Finder to help learners master web development, data science, and AI efficiently.",
            "sameAs": [
              "https://roadmapfinder.tech/RoadmapPage",
              "https://roadmapfinder.tech/Courses"
            ],
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://roadmapfinder.tech/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            },
            "publisher": {
              "@type": "Organization",
              "name": "RoadmapFinder Team",
              "url": "https://roadmapfinder.tech",
              "logo": {
                "@type": "ImageObject",
                "url": "https://roadmapfinder.tech/roadmapfinder.svg"
              }
            },
            "mainEntity": [
              {
                "@type": "ItemList",
                "name": "Tech Skill Roadmaps",
                "url": "https://roadmapfinder.tech/RoadmapPage"
              },
              {
                "@type": "ItemList",
                "name": "YouTube Best Courses",
                "url": "https://roadmapfinder.tech/Courses"
              },
              {
                "@type": "Service",
                "name": "AI Resource Finder",
                "url": "https://roadmapfinder.tech"
              }
            ]
          }
        `
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/layout.js",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/layout.js",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
                className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$sora_35fc7b10$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].className} bg-[#F9FAFB] text-gray-900`,
                children: [
                    children,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$analytics$2f$dist$2f$next$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Analytics"], {}, void 0, false, {
                        fileName: "[project]/app/layout.js",
                        lineNumber: 141,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$speed$2d$insights$2f$dist$2f$next$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpeedInsights"], {}, void 0, false, {
                        fileName: "[project]/app/layout.js",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/layout.js",
                lineNumber: 139,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/layout.js",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
_c = RootLayout;
var _c;
__turbopack_context__.k.register(_c, "RootLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=%5Broot-of-the-server%5D__0b3e0091._.js.map