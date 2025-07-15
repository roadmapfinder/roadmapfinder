(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/app/Docs/docs.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("{\"categories\":[{\"id\":\"all\",\"name\":\"All\",\"icon\":\"FileText\"},{\"id\":\"programming\",\"name\":\"Programming Languages\",\"icon\":\"Code\"},{\"id\":\"frameworks\",\"name\":\"Development Frameworks\",\"icon\":\"Database\"},{\"id\":\"app\",\"name\":\"App Development\",\"icon\":\"Smartphone\"},{\"id\":\"vcs\",\"name\":\"Version Control\",\"icon\":\"GitBranch\"},{\"id\":\"dsa\",\"name\":\"DSA\",\"icon\":\"Code\"},{\"id\":\"influencer\",\"name\":\"Influencer Notes\",\"icon\":\"Youtube\"},{\"id\":\"cloud\",\"name\":\"Cloud & DevOps\",\"icon\":\"Cloud\"},{\"id\":\"tools\",\"name\":\"Development Tools\",\"icon\":\"Settings\"}],\"resources\":[{\"id\":\"python\",\"category\":\"programming\",\"name\":\"Python Documentation\",\"logo\":\"py\",\"url\":\"https://docs.python.org/\",\"description\":\"Official Python language documentation with comprehensive guides and references\",\"featured\":true,\"tags\":[\"backend\",\"scripting\",\"data-science\"]},{\"id\":\"javascript\",\"category\":\"programming\",\"name\":\"JavaScript (MDN)\",\"logo\":\"js\",\"url\":\"https://developer.mozilla.org/en-US/docs/Web/JavaScript\",\"description\":\"Mozilla Developer Network's comprehensive JavaScript documentation\",\"featured\":true,\"tags\":[\"frontend\",\"backend\",\"web\"]},{\"id\":\"typescript\",\"category\":\"programming\",\"name\":\"TypeScript Documentation\",\"logo\":\"typescript\",\"url\":\"https://www.typescriptlang.org/docs/\",\"description\":\"Official TypeScript documentation for typed JavaScript development\",\"featured\":true,\"tags\":[\"frontend\",\"backend\",\"typed\"]},{\"id\":\"nodejs\",\"category\":\"programming\",\"name\":\"Node.js Documentation\",\"logo\":\"nodejs\",\"url\":\"https://nodejs.org/en/docs/\",\"description\":\"Official Node.js documentation for server-side JavaScript runtime\",\"featured\":true,\"tags\":[\"backend\",\"runtime\",\"server\"]},{\"id\":\"java\",\"category\":\"programming\",\"name\":\"Java Documentation\",\"logo\":\"java\",\"url\":\"https://docs.oracle.com/javase/\",\"description\":\"Official Java SE documentation from Oracle\",\"tags\":[\"enterprise\",\"backend\",\"oop\"]},{\"id\":\"cpp\",\"category\":\"programming\",\"name\":\"C++ Reference\",\"logo\":\"cpp\",\"url\":\"https://cplusplus.com/\",\"description\":\"Complete C++ language and standard library reference\",\"tags\":[\"systems\",\"performance\",\"low-level\"]},{\"id\":\"php\",\"category\":\"programming\",\"name\":\"php programming\",\"logo\":\"php\",\"url\":\"https://www.php.net/docs.php\",\"description\":\"Complete php language offical documentation \",\"tags\":[\"web apps\",\"performance\",\"backend\"]},{\"id\":\"rust\",\"category\":\"programming\",\"name\":\"Rust Documentation\",\"logo\":\"rust\",\"url\":\"https://doc.rust-lang.org/\",\"description\":\"Official Rust programming language documentation for systems programming\",\"featured\":true,\"tags\":[\"systems\",\"memory-safe\",\"performance\"]},{\"id\":\"golang\",\"category\":\"programming\",\"name\":\"Go Documentation\",\"logo\":\"golang\",\"url\":\"https://golang.org/doc/\",\"description\":\"Official Go programming language documentation for concurrent programming\",\"featured\":true,\"tags\":[\"backend\",\"concurrent\",\"cloud-native\"]},{\"id\":\"react\",\"category\":\"frameworks\",\"name\":\"React Documentation\",\"logo\":\"react\",\"url\":\"https://react.dev/\",\"description\":\"Official React library documentation for building user interfaces\",\"featured\":true,\"tags\":[\"frontend\",\"spa\",\"component-based\"]},{\"id\":\"nextjs\",\"category\":\"frameworks\",\"name\":\"Next.js Documentation\",\"logo\":\"next\",\"url\":\"https://nextjs.org/docs\",\"description\":\"The React framework for production with SSR and static generation\",\"featured\":true,\"tags\":[\"fullstack\",\"ssr\",\"static-site\"]},{\"id\":\"express\",\"category\":\"frameworks\",\"name\":\"Express.js Documentation\",\"logo\":\"express\",\"url\":\"https://expressjs.com/\",\"description\":\"Fast, unopinionated, minimalist web framework for Node.js\",\"tags\":[\"backend\",\"api\",\"middleware\"]},{\"id\":\"django\",\"category\":\"frameworks\",\"name\":\"Django Documentation\",\"logo\":\"django\",\"url\":\"https://docs.djangoproject.com/\",\"description\":\"High-level Python web framework for rapid development\",\"featured\":true,\"tags\":[\"backend\",\"mvc\",\"orm\"]},{\"id\":\"spring-boot\",\"category\":\"frameworks\",\"name\":\"Spring Boot Documentation\",\"logo\":\"spring\",\"url\":\"https://spring.io/projects/spring-boot\",\"description\":\"Java framework for building production-ready applications\",\"featured\":true,\"tags\":[\"java\",\"microservices\",\"enterprise\"]},{\"id\":\"vue\",\"category\":\"frameworks\",\"name\":\"Vue.js Documentation\",\"logo\":\"vue\",\"url\":\"https://vuejs.org/guide/\",\"description\":\"Progressive JavaScript framework for building user interfaces\",\"tags\":[\"frontend\",\"progressive\",\"component-based\"]},{\"id\":\"angular\",\"category\":\"frameworks\",\"name\":\"Angular Documentation\",\"logo\":\"angular\",\"url\":\"https://angular.io/docs\",\"description\":\"Platform for building mobile and desktop web applications\",\"tags\":[\"frontend\",\"typescript\",\"enterprise\"]},{\"id\":\"mongodb\",\"category\":\"frameworks\",\"name\":\"MongoDB Documentation\",\"logo\":\"mongo\",\"url\":\"https://docs.mongodb.com/\",\"description\":\"Official MongoDB NoSQL database documentation\",\"featured\":true,\"tags\":[\"database\",\"nosql\",\"document\"]},{\"id\":\"mysql\",\"category\":\"frameworks\",\"name\":\"MySQL Documentation\",\"logo\":\"sql\",\"url\":\"https://dev.mysql.com/doc/\",\"description\":\"Reference manual for the MySQL relational database\",\"tags\":[\"database\",\"sql\",\"relational\"]},{\"id\":\"postgresql\",\"category\":\"frameworks\",\"name\":\"PostgreSQL Documentation\",\"logo\":\"postgresql\",\"url\":\"https://www.postgresql.org/docs/\",\"description\":\"Advanced open source relational database documentation\",\"featured\":true,\"tags\":[\"database\",\"sql\",\"advanced\"]},{\"id\":\"reactnative\",\"category\":\"app\",\"name\":\"React Native\",\"logo\":\"native\",\"url\":\"https://reactnative.dev/\",\"description\":\"Learn once, write anywhere mobile framework\",\"featured\":true,\"tags\":[\"mobile\",\"cross-platform\",\"react\"]},{\"id\":\"flutter\",\"category\":\"app\",\"name\":\"Flutter Documentation\",\"logo\":\"flutter\",\"url\":\"https://flutter.dev/docs\",\"description\":\"Google's UI toolkit for building natively compiled applications\",\"featured\":true,\"tags\":[\"mobile\",\"cross-platform\",\"dart\"]},{\"id\":\"kotlin\",\"category\":\"app\",\"name\":\"Kotlin Documentation\",\"logo\":\"kotlin\",\"url\":\"https://kotlinlang.org/docs/\",\"description\":\"Modern programming language for Android development\",\"tags\":[\"android\",\"mobile\",\"jvm\"]},{\"id\":\"swift\",\"category\":\"app\",\"name\":\"Swift Documentation\",\"logo\":\"swift\",\"url\":\"https://swift.org/documentation/\",\"description\":\"Apple's programming language for iOS and macOS development\",\"tags\":[\"ios\",\"mobile\",\"apple\"]},{\"id\":\"git\",\"category\":\"vcs\",\"name\":\"Git Documentation\",\"logo\":\"git\",\"url\":\"https://git-scm.com/doc\",\"description\":\"Official documentation for Git version control system\",\"featured\":true,\"tags\":[\"version-control\",\"collaboration\"]},{\"id\":\"github\",\"category\":\"vcs\",\"name\":\"GitHub Docs\",\"logo\":\"github\",\"url\":\"https://docs.github.com/\",\"description\":\"Learn how to use GitHub with comprehensive guides\",\"tags\":[\"git\",\"collaboration\",\"hosting\"]},{\"id\":\"docker\",\"category\":\"cloud\",\"name\":\"Docker Documentation\",\"logo\":\"docker\",\"url\":\"https://docs.docker.com/\",\"description\":\"Official Docker documentation for containerization\",\"featured\":true,\"tags\":[\"containerization\",\"devops\",\"deployment\"]},{\"id\":\"kubernetes\",\"category\":\"cloud\",\"name\":\"Kubernetes Documentation\",\"logo\":\"kubernetes\",\"url\":\"https://kubernetes.io/docs/\",\"description\":\"Production-grade container orchestration system documentation\",\"featured\":true,\"tags\":[\"orchestration\",\"devops\",\"cloud-native\"]},{\"id\":\"aws\",\"category\":\"cloud\",\"name\":\"AWS Documentation\",\"logo\":\"aws\",\"url\":\"https://docs.aws.amazon.com/\",\"description\":\"Amazon Web Services comprehensive cloud documentation\",\"featured\":true,\"tags\":[\"cloud\",\"infrastructure\",\"serverless\"]},{\"id\":\"azure\",\"category\":\"cloud\",\"name\":\"Azure Documentation\",\"logo\":\"azure\",\"url\":\"https://docs.microsoft.com/en-us/azure/\",\"description\":\"Microsoft Azure cloud platform documentation\",\"tags\":[\"cloud\",\"microsoft\",\"enterprise\"]},{\"id\":\"gcp\",\"category\":\"cloud\",\"name\":\"Google Cloud Documentation\",\"logo\":\"gcp\",\"url\":\"https://cloud.google.com/docs\",\"description\":\"Google Cloud Platform comprehensive documentation\",\"tags\":[\"cloud\",\"google\",\"ai-ml\"]},{\"id\":\"vscode\",\"category\":\"tools\",\"name\":\"VS Code Documentation\",\"logo\":\"vscode\",\"url\":\"https://code.visualstudio.com/docs\",\"description\":\"Visual Studio Code editor documentation and guides\",\"tags\":[\"editor\",\"development\",\"extensions\"]},{\"id\":\"webpack\",\"category\":\"tools\",\"name\":\"Webpack Documentation\",\"logo\":\"webpack\",\"url\":\"https://webpack.js.org/concepts/\",\"description\":\"Static module bundler for modern JavaScript applications\",\"tags\":[\"build-tool\",\"bundler\",\"frontend\"]},{\"id\":\"vite\",\"category\":\"tools\",\"name\":\"Vite Documentation\",\"logo\":\"vite\",\"url\":\"https://vitejs.dev/guide/\",\"description\":\"Next generation frontend tooling for faster builds\",\"featured\":true,\"tags\":[\"build-tool\",\"fast\",\"modern\"]},{\"id\":\"geeksforgeeks\",\"category\":\"dsa\",\"name\":\"GeeksforGeeks DSA\",\"logo\":\"geeks\",\"url\":\"https://www.geeksforgeeks.org/data-structures/\",\"description\":\"Comprehensive DSA tutorials and practice problems\",\"featured\":true,\"tags\":[\"algorithms\",\"interview-prep\",\"competitive\"]},{\"id\":\"leetcode\",\"category\":\"dsa\",\"name\":\"LeetCode Explore\",\"logo\":\"leetcode\",\"url\":\"https://leetcode.com/explore/\",\"description\":\"Curated coding interview preparation with structured learning paths\",\"featured\":true,\"tags\":[\"interview-prep\",\"coding-challenges\"]},{\"id\":\"takeuforward\",\"category\":\"dsa\",\"name\":\"Take U Forward DSA\",\"logo\":\"tuf\",\"url\":\"https://takeuforward.org/\",\"description\":\"Striver's DSA playlist with comprehensive algorithm coverage\",\"tags\":[\"youtube\",\"structured-learning\"]},{\"id\":\"chaiaurcode\",\"category\":\"influencer\",\"name\":\"Chai aur Code\",\"logo\":\"chai\",\"url\":\"https://docs.chaicode.com/\",\"description\":\"Hitesh Choudhary's coding tutorials and notes repository\",\"featured\":true,\"tags\":[\"hindi\",\"tutorials\",\"practical\"]},{\"id\":\"codewithharry\",\"category\":\"influencer\",\"name\":\"CodeWithHarry Notes\",\"logo\":\"harry\",\"url\":\"https://codewithharry.com/notes\",\"description\":\"Programming notes and cheat sheets by Harry\",\"tags\":[\"hindi\",\"notes\",\"beginner-friendly\"]},{\"id\":\"w3schools\",\"category\":\"influencer\",\"name\":\"W3Schools\",\"logo\":\"w3\",\"url\":\"https://www.w3schools.com/\",\"description\":\"Web development tutorials and online code editor\",\"tags\":[\"tutorials\",\"interactive\",\"beginner\"]}]}"));}}),
"[project]/app/Icons/cpp.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/cpp.8f66dbb9.png");}}),
"[project]/app/Icons/cpp.png.mjs { IMAGE => \"[project]/app/Icons/cpp.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$cpp$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/app/Icons/cpp.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$cpp$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 96,
    height: 96,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR42gEIAff+AAAAAAAAAAAAAw0RDxBEW1oPQVlbAgwRDwAAAAAAAAAAAAEFBwYNM0I/LoaprmO+5fNgu+TzKH2lrgktQEABBAcGAAsoNDU5qtTgtOP2/9rw+f/Z7/n/nNPw/xmFyeACHDA1AA0wPUFmwePx2vH6/1S76/9Qs+n/dbnp/0WY1fEIIzdBAA0wPUFnwOPx2u34/1GY2/9Nkdr/eLjo/0aX1fEIIzdBAAslMjQ+isjetc3t/tnk9P/X4/P/mrvk/hNitt8BGS00AAIEBgUPITo8L1mWqmCMz/Jah8zyH0uNqwQXNT0AAgUFAAAAAAAAAAAAAwgPDg4nTVcLJUxXAgcODgAAAAAAAAAAARlo7MwVxVEAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/Icons/java.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/java.05275cb1.png");}}),
"[project]/app/Icons/java.png.mjs { IMAGE => \"[project]/app/Icons/java.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$java$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/app/Icons/java.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$java$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 96,
    height: 96,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAw0lEQVR42m2P3QvBYBjFn3fembHZjEn5iHy99qFpWrswt26VyJIUdrFQuODCtbjwR1sulsXpuXt+53QOwJdQcCKGJPxT8ASSgoZbQGMeA/sDZGmQnk30uNXQVcDARd2IomROKq5KzGxTotcsw6epWJwOgTiT5kz7ch5Yh5PTnXqV6mgoSoSEAJuU5ZaymNjO/aUZvp8vWCqTyAghkMsbptbb7zr69thSll6DuHNeqJcjLYIUQcrpalY2+mKGtDFOfZa8AULrFyq87ohNAAAAAElFTkSuQmCC",
    blurWidth: 8,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/Icons/py.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/py.111f0cde.png");}}),
"[project]/app/Icons/py.png.mjs { IMAGE => \"[project]/app/Icons/py.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$py$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/app/Icons/py.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$py$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 94,
    height: 94,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR42gEIAff+AAAAAAAAAAAAJDIzDE+DiDdDd380GCMoCQAAAAAAAAAAAAAAAAAFCAkAR46gR0jK7dRAx/DjN2yKRhoaFQICAgEAABciIwdFiZVCPrTYcCal4K0lp+LwhqiUmci3ZII3MiEPAC5ofTUyt+rjJ6Pa8Daaw+VAkLLgubNgxPTCKuhtUhgzABlRdj8fjtPtbY6Awde8QOLfuTTl8b8j8eWpGNxcQg8qAAobKhQbTnmHm4g8n/S7He/prj2puX8nbW5KED8VEAQFAAABAQAICQgDkWYVU+CkFufYoCXOaUwZPQIBAAAAAAAAAAAAAAAAAAAAIhYHC1s8EjZZPBA2HhUGCgAAAAAAAAAAjVpUrVHlBeIAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/Icons/native.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/native.6d975ede.png");}}),
"[project]/app/Icons/native.png.mjs { IMAGE => \"[project]/app/Icons/native.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$native$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/app/Icons/native.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$native$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 96,
    height: 96,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA7ElEQVR42k1PS2vCQBjckx4U8qiHatKmFyNJ2G2LSUFaDwlpoVFz8h3Ug5oYEIKoGEG9+AC96E92V/Ax8MHAzDfMAIAR4wROsColRv6QGOlderMqdpwTUuCK55yef0IqUvoTT+mNvQTSUDJn/FzEKM3S6Wq3BQezQA336+xsvyY8Xeu1IhRDgUzDc3i9YGqr0w4NFwtyX5jzRvE34wwcIDa9Oq9bhrY8bh8M2xfT/hOJIcokaLHhtqEfBiQ+Gx420J8H+LEToVnqXhKqUO6OXMWd+rgwTH6b+duKOJn5X7ZZ5VNm8VTCY6lXjmhnBFw8US3l9V8AAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/Icons/react.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/react.7f5c7f01.png");}}),
"[project]/app/Icons/react.png.mjs { IMAGE => \"[project]/app/Icons/react.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$react$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/app/Icons/react.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$react$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 96,
    height: 96,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA2UlEQVR42k2PW8sBYRSF39vvC+WccUOhJBNu8DobDGEcIleiHGJQyrhwysihiOIf23uK7HpqtdeqtTchMGoLY/AI9QzD+t2Ip1jhVCaznnzGmcxEbOFoIC1txBRgC0X8jgQXVMx/rU5Dh9NOfndali8PuQSgpsNJGz0S7o1bbLWRF67PQ0ycjxHh9jrAjqfgEaoEmhjYoxkHKteXzNaaBdqHgFIxmHT57VEqne/78vku81gxmnX/sOL3yNRiJaaltWgH7eL42PcLfNNbbWStvoAbAZ3TWBgjem/DAUG1jNKhyAAAAABJRU5ErkJggg==",
    blurWidth: 8,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/Icons/express.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/express.f91a80dc.png");}}),
"[project]/app/Icons/express.png.mjs { IMAGE => \"[project]/app/Icons/express.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$express$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/app/Icons/express.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$express$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 96,
    height: 96,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAuUlEQVR42oVPTQuCQBTcNPxYLV11XT921ZRKDDEIhC4eDKGia9duXbv0/6G30N3hzeENzMx7CM1hAdANwzUxDhVFWUr+dQVmiWjI2mq7f4i8uKQim+KUj5qmOY5Ljra92qGm7d6w1JAgeFY8/YD2It+8KItvkKahQ9t9IGUgnn/2aTgaJuZFWX0J8QbZhJKUDwFl/dpx6ihOrpRFd2xZFRgmSC2RqqqysHGJd4JjKTCSTtCxruvh7Jc/pGkQ+fAZCucAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/Icons/flutter.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/flutter.29ae47be.png");}}),
"[project]/app/Icons/flutter.png.mjs { IMAGE => \"[project]/app/Icons/flutter.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$flutter$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/app/Icons/flutter.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$flutter$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 96,
    height: 96,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAx0lEQVR42m2PTwvBYACH381ef7aiyUwiXJYcpuYTSGnawTJKWE2R5aRWcuIgJ0WRUpKsfAIHX0P5CAvlAzhrDgvzXJ+nfv0A+MBFhahoWW6EBUnEcAIHXzJABzILfcOf70Zc7igohJhNFi6PW0LptlCnE1oS+kgvN9+tTZnURv1IsVqhs3ze4cHdVsBOllOmNxyws4P+d8Ks6VJb5U7XZ0xb7VE3QYBfIEkFydp4C9WjgaSlJkAxzBYB3E8hKaGOMDkRQM/75gs/ji7Qrw6nrgAAAABJRU5ErkJggg==",
    blurWidth: 8,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/Icons/js.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/js.bec13515.png");}}),
"[project]/app/Icons/js.png.mjs { IMAGE => \"[project]/app/Icons/js.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$js$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/app/Icons/js.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$js$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 96,
    height: 96,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAoElEQVR42oWPLwvCUBTFn7BXnTjmNic60C9mFMGixWYyCDaLuGjyD2gxKEtPsWkVQd7HMB45DuENw8LhXn7nF+4VUhZko2ZFzchqmSFjJ7gka089VFWbIWMnaBO8dR1myNhlhNc1xO0YIFl5uJ+Cf2GzcDHs2Rh0bKidnxWelxCjfgmzcRnddhHx1EmF35Hnva/nE0cflpXv3MZuemTemx8v32J3E6Pi8QAAAABJRU5ErkJggg==",
    blurWidth: 8,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/Icons/next.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/next.086e16ff.png");}}),
"[project]/app/Icons/next.png.mjs { IMAGE => \"[project]/app/Icons/next.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$next$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/app/Icons/next.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$next$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 100,
    height: 100,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAS0lEQVR42oXPbQoAEAwG4B3S3TiGlFyN5OMlSgw/nhp7ZSMiEiBBbeTo9aJctF5Pz4sIYTmrPeDAQuIC7bUBPeojkMFzX3yHfK5ZAYuPMhV4b0uUAAAAAElFTkSuQmCC",
    blurWidth: 8,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/Icons/git.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/git.423c0889.png");}}),
"[project]/app/Icons/git.png.mjs { IMAGE => \"[project]/app/Icons/git.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$git$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/app/Icons/git.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$git$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 96,
    height: 96,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAArklEQVR42m2PvQrCMBSFUzQORQiITVOHOLSjBSdRbKt9BF/KXcEn6KCDYMGoAUFBEMTXcRbMtT+0pQcOBM65X+5FKJWm3NebFlhDNXLauLcdGxvpm7FLWjYqTg4Idq6BKaJRd7WfGNFtxi5Q+pMAqcLTZ8G/j5C91sPOMp7SHZC4yrKCgMIzZG/h0ePZowcZpAXAAO4+ZxICMLzzLzK5BNvSTyZLSxaX5XrD4pUzf3gAL7Vmv+nDAAAAAElFTkSuQmCC",
    blurWidth: 8,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/Icons/github.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/github.550e7668.png");}}),
"[project]/app/Icons/github.png.mjs { IMAGE => \"[project]/app/Icons/github.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$github$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/app/Icons/github.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$github$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 100,
    height: 100,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAgUlEQVR42l3PLQ6DQBCG4ZHV9U1qq2tqa1rTVPUQ5ThVDSRcADCguAQIDoAgILFoXuDjJ0zyZHdnJruzZlMc4SARR7ml+EeJVkrlxqahu8YLV3mjUc1CZDjZGmfkCIaDixh3HOSBVLXxmgI+bniiQofvPOQPkZ65aEhv/5OP1u3eejPgGeMpqNTvAAAAAElFTkSuQmCC",
    blurWidth: 8,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/Icons/sql.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/sql.a411485c.png");}}),
"[project]/app/Icons/sql.png.mjs { IMAGE => \"[project]/app/Icons/sql.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$sql$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/app/Icons/sql.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$sql$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 100,
    height: 100,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAc0lEQVR42kXNMQqDQBhE4bG1yxFSCDFlEAxpQgKCKLpiYWHj/W/h+2VE4QN5s+xK0g0DJvxscotNf7yQ6foyt9iUsKHGw2q3dB5oUOBphdtxoMOIHq31brFpxooSdyvdYtPb11X4WOUWm3J8sfjN5P9o+Q4obQ6dj293ZQAAAABJRU5ErkJggg==",
    blurWidth: 8,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/Icons/mongo.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/mongo.a57f2c19.png");}}),
"[project]/app/Icons/mongo.png.mjs { IMAGE => \"[project]/app/Icons/mongo.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$mongo$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/app/Icons/mongo.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$mongo$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 96,
    height: 96,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAxUlEQVR42m2OTwvBcBjHf9t+44dyMEkOykw2bSUl2p8iay1b29negVoOQt6AEzdy4ubusoODN+IVeA1SZiRt8jk+z+d5vl8APuAQJzmjOmK6jIPhGA5+ybFZpb9Ur9pKu2TojBBZBhdE3eHX9lb3zb35EAbCIvIFIpiUx62z9RYMX5rLJxKRia9AxAgkuk3vJRiBIM4kD8YhCmUArKLSrrXRb+bOvLM2N8ECIj1QGlHKsH3oTTvHFJXKg38US4Uax5cb4dkTzPMonGcrr+sAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/Icons/kotlin.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/kotlin.a2663334.png");}}),
"[project]/app/Icons/kotlin.png.mjs { IMAGE => \"[project]/app/Icons/kotlin.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$kotlin$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/app/Icons/kotlin.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$kotlin$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 96,
    height: 96,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR42gEIAff+AB6f//9Ci///cHT3/sZ1f/z8iAb+/4kA//WDAPOISQB/AAas//8knfr+kISj/PCCJf78hgn/9oQB9IdIAH8OCAAMAAWu+/5glrf84HxH/vN+KP/vfhf0hUcFfw0HAAsAAAAAAFmRwfzOdGj+5nNJ/+V2PPmDRRyEDAYBCwAAAAAAAAAAALZeeP7FX2P/xGVZ/pNokPdEOn6ICAYPDAAAAAAAAAAAALhVgf+0W3f+cnGh+0R12P5WZdn1PTeBgwcGDgsAAAAAAKpUlf5bdrH7Fo7a/iaD3v8/dd7/VmXY9T03goIHBhENAFV0v/sIldv+Apfe/xGP3v8pgt7/QXTe/1dj2PM5M3uBsXN9OXXfpqcAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/Icons/leetcode.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/leetcode.9fc6f46f.png");}}),
"[project]/app/Icons/leetcode.png.mjs { IMAGE => \"[project]/app/Icons/leetcode.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$leetcode$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/app/Icons/leetcode.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$leetcode$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 96,
    height: 96,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA7klEQVR42l2OPWvCQACGL/dF9JKmuZKDktZCB+PUVlsiTh0KLQ4d2kJrBx1c/UQdFAcHBydnHURdBUERcRF0c3L1/3gOivqsz8vLA8ARGCkPzEPmBMMwOAdBxeEGXbwF2dRg0DqRUEqvSiaP92qvX7BG9Thv6B7I9tIn5djQcFVea7eC3lRjvOIT1FYkAGOUMHUy1Jh6Ffv7LeaymU4hn+1m0qlWIOA8yzD4bup0yS/Ik+P3h9yX0MdP1E1G3GCUc1MAeaJSgkqXOpldcxz+f9W+B2UxuBPYPkTKkdcySK2dtjarpr3+irBPBAHcuS1HCiY0JB4MDwAAAABJRU5ErkJggg==",
    blurWidth: 8,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/Icons/geeks.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/geeks.46236f15.png");}}),
"[project]/app/Icons/geeks.png.mjs { IMAGE => \"[project]/app/Icons/geeks.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$geeks$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/app/Icons/geeks.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$geeks$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 96,
    height: 96,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAtElEQVR42oWPwQqCQBCGRxPTpIVWyXVV1u0QhIbRITooWIcOFXos6FJ57pCP0gN07Dlz8AGc4YeP77/MAPSNwcxgLEhseVakat0iozNcM4DoNmuCfXjlhV+xnJcs4yXP/QpddJEN0MQuRtyaE0nS5Wv1xSCjo7FdwOKZfPxd+JhuWJW+1z8MMjrsgG29c3gQd3GUNU2cjKZOJk6yRocdKO1Rw4nh6kS3lXagDTI6daBqvV/+Aaa4HeNofzZcAAAAAElFTkSuQmCC",
    blurWidth: 8,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/DocIcons/chai.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/chai.b8a41a72.png");}}),
"[project]/app/DocIcons/chai.png.mjs { IMAGE => \"[project]/app/DocIcons/chai.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$DocIcons$2f$chai$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/app/DocIcons/chai.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$DocIcons$2f$chai$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 295,
    height: 318,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAAuElEQVR42kWMwQ7BQBRF+0Ni0/Af4i/6BxJbG1s+QCQsROzsrKkF0VhJ0yFR2pip0nZadHKZaaSLl3dzzztPS9MUURSBUgrXdeE4jsr812txHON0JDjbe/j2DuxCEDBWQM45bvYWr0EDol/He9jEnVgFlG8fzEcyNfDsVkA6OnxrUUJpe5s5li0dVrsKbz1TnYLKph7CiYFPr4bAHCORMMsyyJGXwWGF0BwhvBIlKDPPcwgh1P5nOV+Ge8kehFczrgAAAABJRU5ErkJggg==",
    blurWidth: 7,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/DocIcons/harry.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/harry.11f54a11.png");}}),
"[project]/app/DocIcons/harry.png.mjs { IMAGE => \"[project]/app/DocIcons/harry.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$DocIcons$2f$harry$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/app/DocIcons/harry.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$DocIcons$2f$harry$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 320,
    height: 321,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABA0lEQVR42jXPu0sCcQDA8d/f1D8QBA2N4hiCPSE0bCpBx6gWBaMlLw2TcHDoQSAWiRFRRg8ypJdQBHFH2iHdnffg7r61uH+Wj3BdD9+1aTfPic6EWUvO89U6xnN0fN9HOHYfR75ga3mSaHCY0OgQ5dUAndttTOMXYf28YL3uUMnFae5lOM3E2F8JcF2M0H56QJifdaznAnIjT/tkl4aU4LE4zV1pgbcB6N1LdGtpOtUcH9ISN6kQ1Y0pLmsHCF1pIR+l6SVjKFIKNRHjPThGaXyESrmA6Bsa8mEZazGOEYliz87xPRGmu55BV1WE67r4polx1UDZzGJl8+j1MzxNw/tv/gFEHsuWYKXesQAAAABJRU5ErkJggg==",
    blurWidth: 8,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/DocIcons/tuf.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/tuf.768604ff.png");}}),
"[project]/app/DocIcons/tuf.png.mjs { IMAGE => \"[project]/app/DocIcons/tuf.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$DocIcons$2f$tuf$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/app/DocIcons/tuf.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$DocIcons$2f$tuf$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 298,
    height: 131,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAh0lEQVR42jXIzQoBUQBA4fuaXsCDWEgpkywQC2o0yaTJQjYsWIjiEcgGt3Gv/DWGuXNmZjGnvs0Ryh5xrdRRA5fXcs1jNkc7Y/yujWx0ENmUtSZ66HH3ppxLVQ6FIreeg3YniPdmx3Ox4rPd47f7XMoW0moRHk/8lUbEUUQGYzBBkPoShz/yEhdtbekrCJxSAAAAAElFTkSuQmCC",
    blurWidth: 8,
    blurHeight: 4
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/DocIcons/w3.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/w3.12465622.png");}}),
"[project]/app/DocIcons/w3.png.mjs { IMAGE => \"[project]/app/DocIcons/w3.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$DocIcons$2f$w3$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/app/DocIcons/w3.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$DocIcons$2f$w3$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 292,
    height: 245,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAAqklEQVR42nWNywqCUBRF/bfoF2rSP/QBfUU0LWjeqIYNKghEemJBDzDMMsy3dr1qBe3ubaA0cB04g3MWewtgBK8Y9ySEnRJcqQ899rEPDf6CwJfkqKiKHVTENkrjJobGDlNLyQX6fqImdVGetFBf9dDYDH63TODM3TNG5hEnYqOvy/iwyQQnjXBgndvgBoVYkH0dZvLIBY26WHoa1t4FM5a0cDWokfNfUcQXZZ7OfZixJqcAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 7
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/Icons/typescript.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/typescript.73c83dd0.png");}}),
"[project]/app/Icons/typescript.png.mjs { IMAGE => \"[project]/app/Icons/typescript.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$typescript$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/app/Icons/typescript.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$typescript$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 512,
    height: 512,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAuElEQVR42o2PTQvBAACG94uUo4jk5KbkhlLKde2Cko8mOYgLLcXBR+SgHBXawUdtS9NsGcpBWg5bfsKLtHahHJ7T89TbS9jIqW5PbfCNtyN+SZP/AleOQ4zZI96UEayKCNV2SLQUeAr8J/AVBTCzK1bHBzKjM1jFQGlygb+8tSaiDQmDtQZ3nkebvWHM3RGoiFYQeQX9pQYvLSA9PGEhG6B6KgjzppfmEa5LcGY5UF0VZOcAR3KuPwFKRKlzDxr80QAAAABJRU5ErkJggg==",
    blurWidth: 8,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/Icons/php.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/php.3d26df44.png");}}),
"[project]/app/Icons/php.png.mjs { IMAGE => \"[project]/app/Icons/php.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$php$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/app/Icons/php.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$php$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 80,
    height: 80,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAsklEQVR42o1OzQqCQBj0Vj5EENQxqEAv+ngdykvRsUvRKYkSxRTNHzZc7JCph6jcU9IT7Avs5voCNvDB8M0wMxz3D9otnu92ev3hQJDYMc5+tSiOZGkx26i+lZdR8MYwLDDj8+laFceyxHlmhiBAxDYTqh0gNbQr1Y8xPds5cfQE1YZKJI6V0kvwolFY0L0KKPCfxDXuiBOqGGWyUoH7KNP4i2/wg71TVi6V7Y7VN49swg8jS19ypWuA7wAAAABJRU5ErkJggg==",
    blurWidth: 8,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/Icons/node.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/node.f91e572e.png");}}),
"[project]/app/Icons/node.png.mjs { IMAGE => \"[project]/app/Icons/node.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$node$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/app/Icons/node.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$node$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 48,
    height: 48,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA7ElEQVR42kWPTWvCQBiE1zZtottNVhNNW0ohhlbBIom2VbOKB425+EmIEUQFJYIfB70Kojf92W4i4hzfZ15mBgBfIQAYCUm4l3NxNz9gEnzcvwV64J6eX4pqWRyRBTSUMvxPktiktIBFteIzwH3JOu7oU1aVU+Hsxw9vZpqolraidn7OUga41CsJa58m/FPMt33rnFjXD/FldYusdJ8y424oJK33Y2cnDkuevGmchJbmBQb2GjET2tlR1P51+HrGEZqaGxsUVkFEiBah34Y4NjxIvqsRolwL0+I+Azc9Ii6C27qNnZzLyEi6zbwAQAon2QP6NWIAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/Icons/rust.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/rust.9fb46e0f.png");}}),
"[project]/app/Icons/rust.png.mjs { IMAGE => \"[project]/app/Icons/rust.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$rust$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/app/Icons/rust.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$rust$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 24,
    height: 24,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAy0lEQVR42o2PvQqCYBiFv6mhqEtoiBqjyLAa2nMKiqCI/jAEIy0qCkxCPiF/oBoi2pNytFq6E0cvwVt48/MKfOHA4TzDew5CUS4eT8Yy2WI6X6hTRMSTLIR0jSnPFhdLUp7ecnf399j2JeXl8eLJoqsMhVTz63KCCd3RFpjmBFpdATr9FQxYGRTNcRE2Pi6BY04Bbm7AcHqAdk8EYX0FNWCIrjYolj9aWHc87fzzsf72ZWx74ub2qNSCF2HJRCqWzRVIyRIR8SSLtPAPi/1LMI4KJi4AAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/Icons/golang.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/golang.ec3beda5.png");}}),
"[project]/app/Icons/golang.png.mjs { IMAGE => \"[project]/app/Icons/golang.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$golang$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/app/Icons/golang.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$golang$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 48,
    height: 48,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA60lEQVR42kXKzYsBcRwG8LntrvZtdl22bcfaPZHkZcI4IBJzmDTehvIvuFEOyN/Cwc3JBYUmeZ8QyoGZKJwUJxcafgc/Tz317fl+EOSah49PVOZw2YyxVNIYT6VlDrcTbMgtUtxEJKotoSCsT/kZf860RispThAQSL6xX6bcFHIcK2b7dTFUafNgg0BpUGlptreNjuciKM32NwqDSgOBmbS4A93pnhouRVB/d3owkVYSAlSt05ONye4GwH3dcAjeMOwrWCx1KG5xpDj+GCrXBujf/88dvDxKvAE7JaeDjNwXZnwRl+f99ekZ/C65EFksnw2oGgAAAABJRU5ErkJggg==",
    blurWidth: 8,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/Icons/django.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/django.487a77a2.png");}}),
"[project]/app/Icons/django.png.mjs { IMAGE => \"[project]/app/Icons/django.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$django$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/app/Icons/django.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$django$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 24,
    height: 24,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA30lEQVR42l2OTQsBURSG7507d3RnRpmPkI+MQT6ysLIQUsoCxYKlnyK/xG+wsVQWxIKVslUGZWPJYmycGaG8m1Pnfc9zXoR+4okmTqipWpzC1tRQjrCLfUwJcbhIE9qKVcwzZnRKVHEN+7BjKiToHbOqeZM7+adYS1yANKdJfQ9eFGGea8nt3IOP+CZCxr8BwgXwG1aOnyBgICyQntzN20SXxtTUFu+Auv0GHIyQ0mdiPXWXGmnbUwhZgN+xknFwX7jCKAikJvbwfZgj6HMVsoGl0w/9iUKnIRAtCA+c0xcOwyuXcOr5EQAAAABJRU5ErkJggg==",
    blurWidth: 8,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/Icons/springboot.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/springboot.cfe70bab.png");}}),
"[project]/app/Icons/springboot.png.mjs { IMAGE => \"[project]/app/Icons/springboot.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$springboot$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/app/Icons/springboot.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$springboot$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 48,
    height: 48,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABDUlEQVR42jVPz0sCYRD92u0YKNQhyi1p91B26SAJXkKhIFYUqdjT0rkO/QFC0CkIwkMXb7W3giIi6BBEZARLFPERK4iggj/QPYjir09FHHcWnOExD97w3gwhVnH8FCesOqTNkKD4Qi7Fve6Qlj3OBX6a423RFxbk2H2AXnzsMsTZ07ZxqkXv5hZn5olrzSnFHgI0/hWGxLcK2t8xJPM3YJSSNW9Q3CJoG/+MMr1wC7VuEdqDOvSGHag2c/2dA69qL1z/HDEURlbjrLQyUG6kWXBvQ8EI8fx5n6bMd/ivvoJhvoHZzsKjfkWXPLOifaQ/4pYvX1Sa0A+Z9nvCkPsjKzJqZPImOmEcQrD4RBwDO3B1bQKLzEsAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/Icons/vue.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/vue.01985d91.png");}}),
"[project]/app/Icons/vue.png.mjs { IMAGE => \"[project]/app/Icons/vue.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$vue$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/app/Icons/vue.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$vue$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 48,
    height: 48,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA00lEQVR42m2MTwvBYBzHn+fxSHbwJw64qK04o104KQ5iOaxopeXisKYctM0Wb4GL89TIO2AX3gGvgXewdzD247LkW59f3z7f+iFMMCERQoNLEcYYgP51mKBSo9zom+KO77T3BZZt5Tm2HfQDuFK9XEeZYjanOOp1stVezYF0aw6lO3TFmV5g+3ys9mqCflp64lz1AeO88gLXgw1B4ok4M9rI9uxo+YC8HttMgmFQOCzPVXXXfBqu9eB4roJ+Q2OUdjXBFLT+IhqLUvQvyVwqnQoIuzfkyjW58t4gUAAAAABJRU5ErkJggg==",
    blurWidth: 8,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/Icons/angular.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/angular.2ea0491c.png");}}),
"[project]/app/Icons/angular.png.mjs { IMAGE => \"[project]/app/Icons/angular.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$angular$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/app/Icons/angular.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$angular$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 48,
    height: 48,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR42gEIAff+AAICAgEVFBQQQTYzQH5YUIx4VVOOPjQ0QhUUFBIDAwMCAEc6N02oW0i8zUoq7NliRv2+VFL9sT097ZhSUsBJPj5QAG1PSHPZPBX83jMJ/+Gbiv/AgoH/tyIi/7cuLvxmS0tyAFI/OlbVQh334Vo4/+Kbjf/Afnr/uEJC/7Y1NfdNPT1VADsxLj3OTSzu5pSA/+Kej//AgoD/unNz/7FAQO05MTE8ACglJCbBZU7c43dc/9kyDf+8JR//uVtb/6lZWdsoJSUmAAgICAdRPjlVrFlEwtI+Hvi6NC/4nFRUwU09PVMICAgHAAAAAAABAQEBHhwbGmxQSnNoT01zHx0dGQEBAQEAAAAAUbhl8RopsxQAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/Icons/postgresql.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/postgresql.c4c04d57.png");}}),
"[project]/app/Icons/postgresql.png.mjs { IMAGE => \"[project]/app/Icons/postgresql.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$postgresql$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/app/Icons/postgresql.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$postgresql$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 24,
    height: 24,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABDUlEQVR42l2MvUsCcRzGf6Sn5WWe9gJxiZhhZD867yIpIyQaLCyioiKIoO6gKUgoKEUHxUG8EwQHURT/BHFwcHVwcBEEcRCd3ATRzUHwqzj5wGd4XngQsaQ+p23XCf3JXWzz8DJqcvLZnavP5NbxbUq+SDrQusUeZXlxyAlihROkDjDieKnGfkSqOhMrog18Fp+GgpQDCsAAxnkY5LXb1iDSGPCP9T3cg7AEZR3oAiXL419GsaxzIkK1crr38Fvbf/ov4mdPFso+0NLb790LcoULgTSUAX9rjYyXPnL5mLdQ++A10KCMjFumVF2gmUhgjSApB37xNc03X2UZoTSjecElDdfp1V2bH6x6ko0B9NJJ6yiNlyEAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/Icons/swift.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/swift.ab6c81c9.png");}}),
"[project]/app/Icons/swift.png.mjs { IMAGE => \"[project]/app/Icons/swift.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$swift$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/app/Icons/swift.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$swift$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 512,
    height: 512,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA0ElEQVR42lWPvY4BYRSGvwvZuQMKm93IZpOtdrMiUxA/IRHip5QoCKJV+BmhoBEdBRfgBiipdC7DzIgIicc330yjODnnvO+TN+eIkV8b2HrAJPLxUBX9VN3Rhn7NEJZjxoKQ/EYaUAxDOaFmW3+3hBLz/9CuQCUFuT9YL6UWUpALOAn9Buw2MDPgeIBe3QMSX5D9hfQPzMdgm3C/wbTrAXEJdGoydgX7LVwvcLbcXXrCOURBzYKbsJhAqwTVDHY0aImhTzNe3vTK1AOnge+t9wQsn64EYh8FLAAAAABJRU5ErkJggg==",
    blurWidth: 8,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/Icons/docker.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/docker.19a68671.png");}}),
"[project]/app/Icons/docker.png.mjs { IMAGE => \"[project]/app/Icons/docker.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$docker$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/app/Icons/docker.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$docker$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 512,
    height: 512,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA9klEQVR42lWPy0sCYRTFvyLoAfVXBK1qV8vKbYtW0rZ9GFnRol1BCa50pTIKCoJuxKUblRlHEUYXvgdHBR+ID/DBzOJbqcf5RAUXBw7ndy/3HjKbL/Zj1Ynh1pbjD99EysQ8yxgjzJz/SLU9k4Bjs4gbaxYHrwmwjDGy3sSjM4+XgIzvsILTjyQu/yQ8OIo8OftM0mdfGS6hCW+qDS7Rgikow5/uwC22KLm2ZqlUH6LRm2yldMcQ5AGMXJGSJ0+Zj5b6UDUNmi5V1VDpjHRYwL09z5O4MjUYuVLNEmmsznyFqrj6z+Did/3kpuadPn3yLtIj827NJXVwtCSqCVkVAAAAAElFTkSuQmCC",
    blurWidth: 8,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/Icons/kubernetes.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/kubernetes.17f81d7b.png");}}),
"[project]/app/Icons/kubernetes.png.mjs { IMAGE => \"[project]/app/Icons/kubernetes.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$kubernetes$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/app/Icons/kubernetes.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$kubernetes$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 48,
    height: 48,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABBElEQVR42i2PPUtCYRzF/+fUNWlpKRx7IRoiSAvNIaIhMvVmZi9YOUjDzatcSWuLosIpCKKpPoFxCwxFnRx7WdS91voe9Vw8cOBwfnDgiCgBkCHPCPzbKWWVnc6RNqDBt76D9EOLxcYXT5rfSD+2MBtLSL9bE/FMTTJnfzJrV7B7c4XkXQm5lyrNpzcZnhgTzER0Fhq/2L+/wOJhCMG9CJK35yzWfzC9GhIsG6e0ah+IX2cRTIWxcLAG/cz8X3jHkpEXGfcHaNodHpXr0C8NxEsGzOcmM+W2jAbmRdhHeLcStF47PK52Wah1ma+04Y3GFOs9GXTBtxnFipVxPLcRFs3tUugPd8hCyMfLts8AAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/Icons/aws.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/aws.6ae03d82.png");}}),
"[project]/app/Icons/aws.png.mjs { IMAGE => \"[project]/app/Icons/aws.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$aws$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/app/Icons/aws.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$aws$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 48,
    height: 48,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA4UlEQVR42oWPP2vCQABHf7G5u8QaouWuV3MmUs8a0xoo9M9QKKGF/gNLaYcOXTq5iChIEHEQxUH8Rn4846KjD97ytgccgjKbM7vQINQ+NQl1TcJKhNkiazprEk5J3MkgTGXQHApV78igMZB+2C1Xo1HB5TfgSg9UrTURnu6oWrzwdDx3hfo4Oav+Zq2PiizeOkV+T63jipV3wkxNWF5qXzwnV+4X0lckvSe8PV6gpQXUOYf3UEc0/UR73ccQjgX6EiGetfG/+sFo+Y10/I6/pInLax/l3U3OgGHmcLTVMPaXG02AHS2X2/9DAAAAAElFTkSuQmCC",
    blurWidth: 8,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/Icons/azure.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/azure.449c80e0.png");}}),
"[project]/app/Icons/azure.png.mjs { IMAGE => \"[project]/app/Icons/azure.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$azure$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/app/Icons/azure.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$azure$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 48,
    height: 48,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA1klEQVR42mWPz4tBcRTF77nfeWoWb9RMkzHNJLykRJQfi1fyIyvK87Lwq/wFFhY2ko29bC1fYWNtTViwY+VPsfX8SOTUp3vrdE/3ED0KAFmskrnQqyAY9mQQSjlMkmx5NlkSUGp5ThlDVgddeKqFS9r9+DceEfp6j1ivwYXljrOzJcmOn6v7/i1z2hhxZjylr4CDM5OpqByOCLWa52SCt66xttjiP5cw/wBsUS9r843QVwfYYn6iD9cfffqc5rTCrnrg1tMc7rRZ7RtQSsXHFjARN95uiBMpoCPdbw1ZmwAAAABJRU5ErkJggg==",
    blurWidth: 8,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/Icons/gcp.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/gcp.cdf60fb1.png");}}),
"[project]/app/Icons/gcp.png.mjs { IMAGE => \"[project]/app/Icons/gcp.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$gcp$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/app/Icons/gcp.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$gcp$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 48,
    height: 48,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABDUlEQVR42j2Pv0sCYRzGv++dZ6+XcRlE8JaJeF0FQRZEY1PC0Ri4FfUX1Fh04GkNGVikUktDRVPbSYMNDYHrBamLP1GcdRS/m74H+sADX77PMzwfAC5BJK65JSbNh1RufvMfjDUV3NEWLwtW4KZc5/Zf/Fo0sK05oSy7aeg0ld577eLdTwcf8xW8PzfwbGstMyMChWPdtf/+Fm1mvkt4ZV7HDDMR+39OYjFM24ezEIETXYj08r52zX5AI57gBbP0dIvlMO1EfaCD4gXPZ1xK9wsb2LKTWP1KDaoHq5j1Q1YRwePs2F0n2t+LO9f48NbtI6WSWyHWpgzahEIUgCwvEKYyQQ1OE5VJwEaQDuYQNDpTAzqyL2IAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/Icons/vscode.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/vscode.73e81af9.png");}}),
"[project]/app/Icons/vscode.png.mjs { IMAGE => \"[project]/app/Icons/vscode.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$vscode$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/app/Icons/vscode.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$vscode$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 48,
    height: 48,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA4UlEQVR42l2PP6tBcRzGv98v53bL6fx0b3e4Usq/DJREmRSFw2IUk3A2FoOBkD9JNpm8AC+AYjAYFDIZeAcWdQbZZCKkk2d9PvV8HoDPfAs8Zw/4v/TWf1SpEYAIQc3Ro+R/GUZLLdZey8bBdqFxB70AZo8D440qmL0ujFX6VJjKrDbb2cbnq1ZMSwA6i4FywwlVFgcqzo7oy+QFMSvZRqfLE/gxGig1mFB5fqD66ojhXF6ISApA73SgWKyCyePCZLdPzY3MOkvFBN4lVS9J4Y9hot1ivb1C8jMaLc85Q++bN4ypQTcK93KDAAAAAElFTkSuQmCC",
    blurWidth: 8,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/Icons/webpack.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/webpack.1c4f07ef.png");}}),
"[project]/app/Icons/webpack.png.mjs { IMAGE => \"[project]/app/Icons/webpack.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$webpack$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/app/Icons/webpack.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$webpack$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 48,
    height: 48,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAvElEQVR42mVPOwrCQBRcCSRFFmKppWZbU2vMYQS9gGhyAAXxh1W0VlGbYCFYCYqNWog2sVIIKrnAlrFZd4OJaB4MPGYGZgaAz/E8z2VzakbNa4ogCFzAgxi9tIwSlVpTHx+d6+T0uFXrbSMloyTTAIRQ7I6s6eCCvdLyTooUfRu/OkNrRjUIJEmKN+bbfXn1JErv4IP9jGNaaCgsHIJaOx/sDw1BhGljz9i4RF+7xPxGiNGS57+SkZna78w3dr5gGZ+xnxkAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/Icons/vite.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/vite.aaf46f3a.png");}}),
"[project]/app/Icons/vite.png.mjs { IMAGE => \"[project]/app/Icons/vite.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$vite$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/app/Icons/vite.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$vite$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 48,
    height: 48,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR42gEIAff+AAIBAgEBAQEACAYCBEAxDC5xVxRaZk8STgYFAgIBAQIBAEIuV0VRP29zUD5LX9ilL874vS33qIJIq1NBbnQzKEdAACwfOzKJarzboH24+e22Qv36vy7/26he/JFvrdgpHTguAAUDBgNWQ3d5nXu9+tWkaf/4vjL/yZt3+lVCcHUEAwUDAAAAAAAYFCMcgGWwyayGqv/hrVX/kHCVyBcSHxsAAAAAAAAAAAACAQIBRDZfXZp4vfS0jJP1RTddXgIBAgEAAAAAAAAAAAAAAAAADwwVEHdenLF+X5u0EAwWEQAAAAAAAAAAAAAAAAAAAAAAAAABADMnRD00J0dAAQABAAAAAAAAAAAAJs9K+MXnZCIAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/Docs/docs.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Docs)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/funnel.js [app-client] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/code.js [app-client] (ecmascript) <export default as Code>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/smartphone.js [app-client] (ecmascript) <export default as Smartphone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$branch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GitBranch$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/git-branch.js [app-client] (ecmascript) <export default as GitBranch>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/database.js [app-client] (ecmascript) <export default as Database>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$youtube$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Youtube$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/youtube.js [app-client] (ecmascript) <export default as Youtube>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bookmark.js [app-client] (ecmascript) <export default as Bookmark>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cloud.js [app-client] (ecmascript) <export default as Cloud>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/tag.js [app-client] (ecmascript) <export default as Tag>");
// Import documentation data
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Docs$2f$docs$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/app/Docs/docs.json (json)");
// Import all icon images
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$cpp$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$Icons$2f$cpp$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/app/Icons/cpp.png.mjs { IMAGE => "[project]/app/Icons/cpp.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$java$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$Icons$2f$java$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/app/Icons/java.png.mjs { IMAGE => "[project]/app/Icons/java.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$py$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$Icons$2f$py$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/app/Icons/py.png.mjs { IMAGE => "[project]/app/Icons/py.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$native$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$Icons$2f$native$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/app/Icons/native.png.mjs { IMAGE => "[project]/app/Icons/native.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$react$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$Icons$2f$react$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/app/Icons/react.png.mjs { IMAGE => "[project]/app/Icons/react.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$express$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$Icons$2f$express$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/app/Icons/express.png.mjs { IMAGE => "[project]/app/Icons/express.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$flutter$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$Icons$2f$flutter$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/app/Icons/flutter.png.mjs { IMAGE => "[project]/app/Icons/flutter.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$js$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$Icons$2f$js$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/app/Icons/js.png.mjs { IMAGE => "[project]/app/Icons/js.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$next$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$Icons$2f$next$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/app/Icons/next.png.mjs { IMAGE => "[project]/app/Icons/next.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$git$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$Icons$2f$git$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/app/Icons/git.png.mjs { IMAGE => "[project]/app/Icons/git.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$github$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$Icons$2f$github$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/app/Icons/github.png.mjs { IMAGE => "[project]/app/Icons/github.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$sql$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$Icons$2f$sql$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/app/Icons/sql.png.mjs { IMAGE => "[project]/app/Icons/sql.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$mongo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$Icons$2f$mongo$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/app/Icons/mongo.png.mjs { IMAGE => "[project]/app/Icons/mongo.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$kotlin$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$Icons$2f$kotlin$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/app/Icons/kotlin.png.mjs { IMAGE => "[project]/app/Icons/kotlin.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$leetcode$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$Icons$2f$leetcode$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/app/Icons/leetcode.png.mjs { IMAGE => "[project]/app/Icons/leetcode.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$geeks$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$Icons$2f$geeks$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/app/Icons/geeks.png.mjs { IMAGE => "[project]/app/Icons/geeks.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$DocIcons$2f$chai$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$DocIcons$2f$chai$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/app/DocIcons/chai.png.mjs { IMAGE => "[project]/app/DocIcons/chai.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$DocIcons$2f$harry$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$DocIcons$2f$harry$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/app/DocIcons/harry.png.mjs { IMAGE => "[project]/app/DocIcons/harry.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$DocIcons$2f$tuf$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$DocIcons$2f$tuf$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/app/DocIcons/tuf.png.mjs { IMAGE => "[project]/app/DocIcons/tuf.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$DocIcons$2f$w3$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$DocIcons$2f$w3$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/app/DocIcons/w3.png.mjs { IMAGE => "[project]/app/DocIcons/w3.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
// Add new technology icons
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$typescript$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$Icons$2f$typescript$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/app/Icons/typescript.png.mjs { IMAGE => "[project]/app/Icons/typescript.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$php$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$Icons$2f$php$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/app/Icons/php.png.mjs { IMAGE => "[project]/app/Icons/php.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$node$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$Icons$2f$node$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/app/Icons/node.png.mjs { IMAGE => "[project]/app/Icons/node.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$rust$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$Icons$2f$rust$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/app/Icons/rust.png.mjs { IMAGE => "[project]/app/Icons/rust.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$golang$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$Icons$2f$golang$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/app/Icons/golang.png.mjs { IMAGE => "[project]/app/Icons/golang.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$django$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$Icons$2f$django$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/app/Icons/django.png.mjs { IMAGE => "[project]/app/Icons/django.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$springboot$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$Icons$2f$springboot$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/app/Icons/springboot.png.mjs { IMAGE => "[project]/app/Icons/springboot.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$vue$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$Icons$2f$vue$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/app/Icons/vue.png.mjs { IMAGE => "[project]/app/Icons/vue.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$angular$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$Icons$2f$angular$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/app/Icons/angular.png.mjs { IMAGE => "[project]/app/Icons/angular.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$postgresql$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$Icons$2f$postgresql$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/app/Icons/postgresql.png.mjs { IMAGE => "[project]/app/Icons/postgresql.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$swift$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$Icons$2f$swift$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/app/Icons/swift.png.mjs { IMAGE => "[project]/app/Icons/swift.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$docker$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$Icons$2f$docker$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/app/Icons/docker.png.mjs { IMAGE => "[project]/app/Icons/docker.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$kubernetes$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$Icons$2f$kubernetes$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/app/Icons/kubernetes.png.mjs { IMAGE => "[project]/app/Icons/kubernetes.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$aws$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$Icons$2f$aws$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/app/Icons/aws.png.mjs { IMAGE => "[project]/app/Icons/aws.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$azure$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$Icons$2f$azure$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/app/Icons/azure.png.mjs { IMAGE => "[project]/app/Icons/azure.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$gcp$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$Icons$2f$gcp$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/app/Icons/gcp.png.mjs { IMAGE => "[project]/app/Icons/gcp.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$vscode$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$Icons$2f$vscode$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/app/Icons/vscode.png.mjs { IMAGE => "[project]/app/Icons/vscode.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$webpack$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$Icons$2f$webpack$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/app/Icons/webpack.png.mjs { IMAGE => "[project]/app/Icons/webpack.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$vite$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$Icons$2f$vite$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/app/Icons/vite.png.mjs { IMAGE => "[project]/app/Icons/vite.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
// Icon mapping for categories
const iconMap = {
    FileText: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
    Code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"],
    Database: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"],
    Smartphone: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__["Smartphone"],
    GitBranch: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$branch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GitBranch$3e$__["GitBranch"],
    Youtube: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$youtube$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Youtube$3e$__["Youtube"],
    Cloud: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__["Cloud"],
    Settings: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"],
    Bookmark: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__["Bookmark"],
    ChevronRight: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"],
    Star: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"]
};
// Logo mapping
const logoMap = {
    py: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$py$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$Icons$2f$py$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
    java: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$java$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$Icons$2f$java$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
    cpp: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$cpp$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$Icons$2f$cpp$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
    js: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$js$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$Icons$2f$js$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
    php: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$php$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$Icons$2f$php$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
    typescript: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$typescript$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$Icons$2f$typescript$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
    nodejs: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$node$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$Icons$2f$node$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
    rust: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$rust$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$Icons$2f$rust$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
    golang: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$golang$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$Icons$2f$golang$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
    react: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$react$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$Icons$2f$react$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
    next: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$next$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$Icons$2f$next$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
    express: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$express$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$Icons$2f$express$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
    django: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$django$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$Icons$2f$django$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
    spring: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$springboot$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$Icons$2f$springboot$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
    vue: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$vue$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$Icons$2f$vue$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
    angular: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$angular$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$Icons$2f$angular$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
    mongo: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$mongo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$Icons$2f$mongo$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
    sql: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$sql$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$Icons$2f$sql$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
    postgresql: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$postgresql$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$Icons$2f$postgresql$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
    native: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$native$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$Icons$2f$native$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
    flutter: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$flutter$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$Icons$2f$flutter$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
    kotlin: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$kotlin$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$Icons$2f$kotlin$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
    swift: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$swift$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$Icons$2f$swift$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
    git: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$git$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$Icons$2f$git$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
    github: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$github$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$Icons$2f$github$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
    docker: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$docker$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$Icons$2f$docker$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
    kubernetes: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$kubernetes$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$Icons$2f$kubernetes$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
    aws: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$aws$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$Icons$2f$aws$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
    azure: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$azure$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$Icons$2f$azure$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
    gcp: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$gcp$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$Icons$2f$gcp$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
    vscode: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$vscode$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$Icons$2f$vscode$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
    webpack: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$webpack$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$Icons$2f$webpack$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
    vite: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$vite$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$Icons$2f$vite$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
    leetcode: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$leetcode$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$Icons$2f$leetcode$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
    geeks: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$geeks$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$Icons$2f$geeks$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
    chai: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$DocIcons$2f$chai$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$DocIcons$2f$chai$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
    harry: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$DocIcons$2f$harry$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$DocIcons$2f$harry$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
    tuf: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$DocIcons$2f$tuf$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$DocIcons$2f$tuf$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
    w3: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$DocIcons$2f$w3$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$DocIcons$2f$w3$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
};
// Custom hooks for better performance
const useDebounce = (value, delay)=>{
    _s();
    const [debouncedValue, setDebouncedValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(value);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDebounce.useEffect": ()=>{
            const handler = setTimeout({
                "useDebounce.useEffect.handler": ()=>{
                    setDebouncedValue(value);
                }
            }["useDebounce.useEffect.handler"], delay);
            return ({
                "useDebounce.useEffect": ()=>{
                    clearTimeout(handler);
                }
            })["useDebounce.useEffect"];
        }
    }["useDebounce.useEffect"], [
        value,
        delay
    ]);
    return debouncedValue;
};
_s(useDebounce, "KDuPAtDOgxm8PU6legVJOb3oOmA=");
const useLocalStorage = (key, initialValue)=>{
    _s1();
    const [storedValue, setStoredValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useLocalStorage.useState": ()=>{
            if ("TURBOPACK compile-time falsy", 0) {
                "TURBOPACK unreachable";
            }
            try {
                const item = window.localStorage.getItem(key);
                return item ? JSON.parse(item) : initialValue;
            } catch (error) {
                console.error(`Error reading localStorage key "${key}":`, error);
                return initialValue;
            }
        }
    }["useLocalStorage.useState"]);
    const setValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useLocalStorage.useCallback[setValue]": (value)=>{
            try {
                const valueToStore = value instanceof Function ? value(storedValue) : value;
                setStoredValue(valueToStore);
                if ("TURBOPACK compile-time truthy", 1) {
                    window.localStorage.setItem(key, JSON.stringify(valueToStore));
                }
            } catch (error) {
                console.error(`Error setting localStorage key "${key}":`, error);
            }
        }
    }["useLocalStorage.useCallback[setValue]"], [
        key,
        storedValue
    ]);
    return [
        storedValue,
        setValue
    ];
};
_s1(useLocalStorage, "/ppVYzzN/zFs9rK6BwJfAD/ugcQ=");
// Performance optimized component
const DocumentationCard = ({ resource, isBookmarked, onToggleBookmark, searchTerm })=>{
    _s2();
    const handleBookmarkClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DocumentationCard.useCallback[handleBookmarkClick]": (e)=>{
            e.preventDefault();
            onToggleBookmark(resource.id);
        }
    }["DocumentationCard.useCallback[handleBookmarkClick]"], [
        resource.id,
        onToggleBookmark
    ]);
    const highlightText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DocumentationCard.useCallback[highlightText]": (text)=>{
            if (!searchTerm) return text;
            const regex = new RegExp(`(${searchTerm.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&')})`, 'gi');
            return text.replace(regex, '<mark class="bg-yellow-200 px-1 rounded">$1</mark>');
        }
    }["DocumentationCard.useCallback[highlightText]"], [
        searchTerm
    ]);
    const IconComponent = iconMap[resource.category] || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"];
    const categoryInfo = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Docs$2f$docs$2e$json__$28$json$29$__["default"].categories.find((c)=>c.id === resource.category);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group hover:border-blue-200",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start gap-4 mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-shrink-0 relative h-16 w-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg overflow-hidden flex items-center justify-center shadow-sm",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: logoMap[resource.logo] || __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Icons$2f$py$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$Icons$2f$py$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                                alt: resource.name,
                                width: 48,
                                height: 48,
                                className: "object-contain transition-transform group-hover:scale-110",
                                loading: "lazy"
                            }, void 0, false, {
                                fileName: "[project]/app/Docs/docs.jsx",
                                lineNumber: 196,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/Docs/docs.jsx",
                            lineNumber: 195,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-grow min-w-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-semibold text-gray-900 truncate mb-1",
                                    children: resource.name
                                }, void 0, false, {
                                    fileName: "[project]/app/Docs/docs.jsx",
                                    lineNumber: 207,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 flex-wrap",
                                    children: [
                                        resource.featured && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-500 to-purple-600 text-white",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                    size: 12,
                                                    className: "mr-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Docs/docs.jsx",
                                                    lineNumber: 215,
                                                    columnNumber: 19
                                                }, this),
                                                "Featured"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/Docs/docs.jsx",
                                            lineNumber: 214,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700",
                                            children: categoryInfo?.name || resource.category
                                        }, void 0, false, {
                                            fileName: "[project]/app/Docs/docs.jsx",
                                            lineNumber: 220,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Docs/docs.jsx",
                                    lineNumber: 212,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/Docs/docs.jsx",
                            lineNumber: 206,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleBookmarkClick,
                            className: `p-2 rounded-full transition-all duration-200 ${isBookmarked ? "bg-blue-50 text-blue-600 hover:bg-blue-100" : "text-gray-400 hover:text-blue-500 hover:bg-blue-50"}`,
                            "aria-label": isBookmarked ? "Remove bookmark" : "Add bookmark",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__["Bookmark"], {
                                size: 18,
                                className: isBookmarked ? "fill-current" : ""
                            }, void 0, false, {
                                fileName: "[project]/app/Docs/docs.jsx",
                                lineNumber: 236,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/Docs/docs.jsx",
                            lineNumber: 227,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Docs/docs.jsx",
                    lineNumber: 194,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-600 mb-4 line-clamp-3 leading-relaxed",
                    dangerouslySetInnerHTML: {
                        __html: highlightText(resource.description)
                    }
                }, void 0, false, {
                    fileName: "[project]/app/Docs/docs.jsx",
                    lineNumber: 244,
                    columnNumber: 9
                }, this),
                resource.tags && resource.tags.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap gap-1 mb-4",
                    children: [
                        resource.tags.slice(0, 3).map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-flex items-center px-2 py-1 rounded text-xs bg-gray-50 text-gray-600 border",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
                                        size: 10,
                                        className: "mr-1"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Docs/docs.jsx",
                                        lineNumber: 259,
                                        columnNumber: 17
                                    }, this),
                                    tag
                                ]
                            }, tag, true, {
                                fileName: "[project]/app/Docs/docs.jsx",
                                lineNumber: 255,
                                columnNumber: 15
                            }, this)),
                        resource.tags.length > 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs text-gray-500 px-2 py-1",
                            children: [
                                "+",
                                resource.tags.length - 3,
                                " more"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/Docs/docs.jsx",
                            lineNumber: 264,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Docs/docs.jsx",
                    lineNumber: 253,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: resource.url,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors group-hover:underline",
                    children: [
                        "Visit Documentation",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                            size: 16,
                            className: "ml-2 transition-transform group-hover:translate-x-1"
                        }, void 0, false, {
                            fileName: "[project]/app/Docs/docs.jsx",
                            lineNumber: 279,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Docs/docs.jsx",
                    lineNumber: 272,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/Docs/docs.jsx",
            lineNumber: 192,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/Docs/docs.jsx",
        lineNumber: 191,
        columnNumber: 5
    }, this);
};
_s2(DocumentationCard, "AWUAqfJ53t+wheMD65fw7q7i81o=");
_c = DocumentationCard;
function Docs() {
    _s3();
    // State management
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [showFilters, setShowFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [bookmarkedDocs, setBookmarkedDocs] = useLocalStorage("bookmarkedDocs", []);
    const [sortBy, setSortBy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("featured");
    // Debounced search
    const debouncedSearch = useDebounce(searchTerm, 300);
    // Memoized filtered and sorted resources
    const filteredResources = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Docs.useMemo[filteredResources]": ()=>{
            let filtered = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Docs$2f$docs$2e$json__$28$json$29$__["default"].resources.filter({
                "Docs.useMemo[filteredResources].filtered": (resource)=>{
                    // Category filter
                    let categoryMatch = true;
                    switch(activeCategory){
                        case "bookmarked":
                            categoryMatch = bookmarkedDocs.includes(resource.id);
                            break;
                        case "featured":
                            categoryMatch = resource.featured;
                            break;
                        case "all":
                            categoryMatch = true;
                            break;
                        default:
                            categoryMatch = resource.category === activeCategory;
                    }
                    // Search filter
                    const searchMatch = !debouncedSearch || resource.name.toLowerCase().includes(debouncedSearch.toLowerCase()) || resource.description.toLowerCase().includes(debouncedSearch.toLowerCase()) || resource.tags && resource.tags.some({
                        "Docs.useMemo[filteredResources].filtered": (tag)=>tag.toLowerCase().includes(debouncedSearch.toLowerCase())
                    }["Docs.useMemo[filteredResources].filtered"]);
                    return categoryMatch && searchMatch;
                }
            }["Docs.useMemo[filteredResources].filtered"]);
            // Sort resources
            filtered.sort({
                "Docs.useMemo[filteredResources]": (a, b)=>{
                    switch(sortBy){
                        case "featured":
                            if (a.featured && !b.featured) return -1;
                            if (!a.featured && b.featured) return 1;
                            return a.name.localeCompare(b.name);
                        case "name":
                            return a.name.localeCompare(b.name);
                        case "category":
                            return a.category.localeCompare(b.category);
                        default:
                            return 0;
                    }
                }
            }["Docs.useMemo[filteredResources]"]);
            return filtered;
        }
    }["Docs.useMemo[filteredResources]"], [
        debouncedSearch,
        activeCategory,
        bookmarkedDocs,
        sortBy
    ]);
    // Memoized categories with icons
    const categoriesWithIcons = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Docs.useMemo[categoriesWithIcons]": ()=>{
            return __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Docs$2f$docs$2e$json__$28$json$29$__["default"].categories.map({
                "Docs.useMemo[categoriesWithIcons]": (category)=>({
                        ...category,
                        icon: iconMap[category.icon] || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"]
                    })
            }["Docs.useMemo[categoriesWithIcons]"]);
        }
    }["Docs.useMemo[categoriesWithIcons]"], []);
    // Event handlers
    const handleCategoryChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Docs.useCallback[handleCategoryChange]": (categoryId)=>{
            setActiveCategory(categoryId);
            if (window.innerWidth < 768) {
                setShowFilters(false);
            }
        }
    }["Docs.useCallback[handleCategoryChange]"], []);
    const handleToggleBookmark = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Docs.useCallback[handleToggleBookmark]": (id)=>{
            setBookmarkedDocs({
                "Docs.useCallback[handleToggleBookmark]": (prev)=>prev.includes(id) ? prev.filter({
                        "Docs.useCallback[handleToggleBookmark]": (docId)=>docId !== id
                    }["Docs.useCallback[handleToggleBookmark]"]) : [
                        ...prev,
                        id
                    ]
            }["Docs.useCallback[handleToggleBookmark]"]);
        }
    }["Docs.useCallback[handleToggleBookmark]"], [
        setBookmarkedDocs
    ]);
    const clearSearch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Docs.useCallback[clearSearch]": ()=>{
            setSearchTerm("");
        }
    }["Docs.useCallback[clearSearch]"], []);
    // Stats
    const stats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Docs.useMemo[stats]": ()=>({
                total: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Docs$2f$docs$2e$json__$28$json$29$__["default"].resources.length,
                featured: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Docs$2f$docs$2e$json__$28$json$29$__["default"].resources.filter({
                    "Docs.useMemo[stats]": (r)=>r.featured
                }["Docs.useMemo[stats]"]).length,
                bookmarked: bookmarkedDocs.length,
                categories: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Docs$2f$docs$2e$json__$28$json$29$__["default"].categories.length - 1
            })
    }["Docs.useMemo[stats]"], [
        bookmarkedDocs.length
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sticky top-0 z-40 bg-white/80 backdrop-blur-lg border-b border-gray-200",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 py-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-5 h-5 mr-2",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M19 12H5M12 19l-7-7 7-7"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Docs/docs.jsx",
                                        lineNumber: 390,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/Docs/docs.jsx",
                                    lineNumber: 389,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-medium",
                                    children: "Back to Home"
                                }, void 0, false, {
                                    fileName: "[project]/app/Docs/docs.jsx",
                                    lineNumber: 392,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/Docs/docs.jsx",
                            lineNumber: 388,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                            size: 16,
                                            className: "mr-2"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Docs/docs.jsx",
                                            lineNumber: 398,
                                            columnNumber: 15
                                        }, this),
                                        "Updated May 2025"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Docs/docs.jsx",
                                    lineNumber: 397,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent",
                                    children: "Developer Documentation Hub"
                                }, void 0, false, {
                                    fileName: "[project]/app/Docs/docs.jsx",
                                    lineNumber: 402,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-center gap-8 text-sm text-gray-600",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-bold text-2xl text-blue-600",
                                                    children: stats.total
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Docs/docs.jsx",
                                                    lineNumber: 411,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: "Resources"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Docs/docs.jsx",
                                                    lineNumber: 412,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/Docs/docs.jsx",
                                            lineNumber: 410,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-bold text-2xl text-purple-600",
                                                    children: stats.featured
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Docs/docs.jsx",
                                                    lineNumber: 415,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: "Featured"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Docs/docs.jsx",
                                                    lineNumber: 416,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/Docs/docs.jsx",
                                            lineNumber: 414,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-bold text-2xl text-green-600",
                                                    children: stats.categories
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Docs/docs.jsx",
                                                    lineNumber: 419,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: "Categories"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Docs/docs.jsx",
                                                    lineNumber: 420,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/Docs/docs.jsx",
                                            lineNumber: 418,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-bold text-2xl text-orange-600",
                                                    children: stats.bookmarked
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Docs/docs.jsx",
                                                    lineNumber: 423,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: "Bookmarked"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Docs/docs.jsx",
                                                    lineNumber: 424,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/Docs/docs.jsx",
                                            lineNumber: 422,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Docs/docs.jsx",
                                    lineNumber: 409,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/Docs/docs.jsx",
                            lineNumber: 396,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col lg:flex-row gap-4 justify-between items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative flex-grow max-w-md",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                className: "h-5 w-5 text-gray-400"
                                            }, void 0, false, {
                                                fileName: "[project]/app/Docs/docs.jsx",
                                                lineNumber: 434,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/Docs/docs.jsx",
                                            lineNumber: 433,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            className: "block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl bg-white/50 backdrop-blur-sm text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all",
                                            placeholder: "Search documentation, technologies...",
                                            value: searchTerm,
                                            onChange: (e)=>setSearchTerm(e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/app/Docs/docs.jsx",
                                            lineNumber: 436,
                                            columnNumber: 15
                                        }, this),
                                        searchTerm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "absolute right-3 top-1/2 transform -translate-y-1/2 p-1 rounded-md hover:bg-gray-100 transition-colors",
                                            onClick: clearSearch,
                                            "aria-label": "Clear search",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                size: 16,
                                                className: "text-gray-500"
                                            }, void 0, false, {
                                                fileName: "[project]/app/Docs/docs.jsx",
                                                lineNumber: 449,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/Docs/docs.jsx",
                                            lineNumber: 444,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Docs/docs.jsx",
                                    lineNumber: 432,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: sortBy,
                                            onChange: (e)=>setSortBy(e.target.value),
                                            className: "px-4 py-2 border border-gray-300 rounded-lg bg-white/50 backdrop-blur-sm text-sm font-medium focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "featured",
                                                    children: "Featured First"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Docs/docs.jsx",
                                                    lineNumber: 462,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "name",
                                                    children: "Name A-Z"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Docs/docs.jsx",
                                                    lineNumber: 463,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "category",
                                                    children: "Category"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Docs/docs.jsx",
                                                    lineNumber: 464,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/Docs/docs.jsx",
                                            lineNumber: 457,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setShowFilters(!showFilters),
                                            className: `p-2 rounded-lg border transition-all ${showFilters ? "bg-blue-100 border-blue-300 text-blue-700" : "bg-white/50 border-gray-300 text-gray-700 hover:bg-gray-50"}`,
                                            "aria-label": "Toggle filters",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                                                size: 20
                                            }, void 0, false, {
                                                fileName: "[project]/app/Docs/docs.jsx",
                                                lineNumber: 477,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/Docs/docs.jsx",
                                            lineNumber: 468,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Docs/docs.jsx",
                                    lineNumber: 455,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/Docs/docs.jsx",
                            lineNumber: 430,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Docs/docs.jsx",
                    lineNumber: 387,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/Docs/docs.jsx",
                lineNumber: 386,
                columnNumber: 7
            }, this),
            showFilters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sticky top-[180px] z-30 bg-white/90 backdrop-blur-lg border-b border-gray-200",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 py-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2",
                        children: [
                            categoriesWithIcons.map((category)=>{
                                const IconComponent = category.icon;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleCategoryChange(category.id),
                                    className: `inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeCategory === category.id ? "bg-blue-600 text-white shadow-lg" : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {
                                            size: 16,
                                            className: "mr-2"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Docs/docs.jsx",
                                            lineNumber: 501,
                                            columnNumber: 21
                                        }, this),
                                        category.name
                                    ]
                                }, category.id, true, {
                                    fileName: "[project]/app/Docs/docs.jsx",
                                    lineNumber: 492,
                                    columnNumber: 19
                                }, this);
                            }),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleCategoryChange("bookmarked"),
                                className: `inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeCategory === "bookmarked" ? "bg-blue-600 text-white shadow-lg" : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__["Bookmark"], {
                                        size: 16,
                                        className: "mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Docs/docs.jsx",
                                        lineNumber: 516,
                                        columnNumber: 17
                                    }, this),
                                    "Bookmarked (",
                                    bookmarkedDocs.length,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/Docs/docs.jsx",
                                lineNumber: 508,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleCategoryChange("featured"),
                                className: `inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeCategory === "featured" ? "bg-blue-600 text-white shadow-lg" : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                        size: 16,
                                        className: "mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Docs/docs.jsx",
                                        lineNumber: 528,
                                        columnNumber: 17
                                    }, this),
                                    "Featured"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/Docs/docs.jsx",
                                lineNumber: 520,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/Docs/docs.jsx",
                        lineNumber: 488,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/Docs/docs.jsx",
                    lineNumber: 487,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/Docs/docs.jsx",
                lineNumber: 486,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "max-w-7xl mx-auto px-4 py-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center mb-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold text-gray-900",
                                    children: [
                                        activeCategory === "all" && "All Documentation",
                                        activeCategory === "bookmarked" && "Bookmarked Resources",
                                        activeCategory === "featured" && "Featured Resources",
                                        activeCategory !== "all" && activeCategory !== "bookmarked" && activeCategory !== "featured" && categoriesWithIcons.find((c)=>c.id === activeCategory)?.name
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Docs/docs.jsx",
                                    lineNumber: 541,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600 mt-1",
                                    children: [
                                        filteredResources.length === 0 ? "No resources found matching your criteria" : `${filteredResources.length} resource${filteredResources.length !== 1 ? 's' : ''} found`,
                                        debouncedSearch && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "ml-2",
                                            children: [
                                                'for "',
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium text-blue-600",
                                                    children: debouncedSearch
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Docs/docs.jsx",
                                                    lineNumber: 555,
                                                    columnNumber: 24
                                                }, this),
                                                '"'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/Docs/docs.jsx",
                                            lineNumber: 554,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Docs/docs.jsx",
                                    lineNumber: 549,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/Docs/docs.jsx",
                            lineNumber: 540,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/Docs/docs.jsx",
                        lineNumber: 539,
                        columnNumber: 9
                    }, this),
                    filteredResources.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",
                        children: filteredResources.map((resource)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DocumentationCard, {
                                resource: resource,
                                isBookmarked: bookmarkedDocs.includes(resource.id),
                                onToggleBookmark: handleToggleBookmark,
                                searchTerm: debouncedSearch
                            }, resource.id, false, {
                                fileName: "[project]/app/Docs/docs.jsx",
                                lineNumber: 566,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/Docs/docs.jsx",
                        lineNumber: 564,
                        columnNumber: 11
                    }, this) : /* Empty state */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gray-100 inline-flex rounded-full p-6 mb-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                    size: 32,
                                    className: "text-gray-400"
                                }, void 0, false, {
                                    fileName: "[project]/app/Docs/docs.jsx",
                                    lineNumber: 579,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/Docs/docs.jsx",
                                lineNumber: 578,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-2xl font-semibold text-gray-900 mb-3",
                                children: "No resources found"
                            }, void 0, false, {
                                fileName: "[project]/app/Docs/docs.jsx",
                                lineNumber: 581,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 max-w-md mx-auto mb-6",
                                children: "Try adjusting your search terms or filters to find what you're looking for."
                            }, void 0, false, {
                                fileName: "[project]/app/Docs/docs.jsx",
                                lineNumber: 584,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-center gap-3",
                                children: [
                                    searchTerm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: clearSearch,
                                        className: "px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium",
                                        children: "Clear Search"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Docs/docs.jsx",
                                        lineNumber: 589,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveCategory("all"),
                                        className: "px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium",
                                        children: "Show All Resources"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Docs/docs.jsx",
                                        lineNumber: 596,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/Docs/docs.jsx",
                                lineNumber: 587,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/Docs/docs.jsx",
                        lineNumber: 577,
                        columnNumber: 11
                    }, this),
                    activeCategory === "all" && !debouncedSearch && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-2xl font-bold text-gray-900 mb-8 text-center",
                                children: "Explore by Category"
                            }, void 0, false, {
                                fileName: "[project]/app/Docs/docs.jsx",
                                lineNumber: 609,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",
                                children: categoriesWithIcons.slice(1).map((category)=>{
                                    const IconComponent = category.icon;
                                    const categoryCount = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Docs$2f$docs$2e$json__$28$json$29$__["default"].resources.filter((r)=>r.category === category.id).length;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleCategoryChange(category.id),
                                        className: "p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all text-center group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-blue-50 rounded-full p-3 inline-flex mb-4 group-hover:bg-blue-100 transition-colors",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {
                                                    size: 24,
                                                    className: "text-blue-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Docs/docs.jsx",
                                                    lineNumber: 624,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/Docs/docs.jsx",
                                                lineNumber: 623,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "font-semibold text-gray-900 mb-1",
                                                children: category.name
                                            }, void 0, false, {
                                                fileName: "[project]/app/Docs/docs.jsx",
                                                lineNumber: 626,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-600",
                                                children: [
                                                    categoryCount,
                                                    " resources"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/Docs/docs.jsx",
                                                lineNumber: 627,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, category.id, true, {
                                        fileName: "[project]/app/Docs/docs.jsx",
                                        lineNumber: 618,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/app/Docs/docs.jsx",
                                lineNumber: 612,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/Docs/docs.jsx",
                        lineNumber: 608,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/Docs/docs.jsx",
                lineNumber: 537,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "border-t border-gray-200 bg-white/50 backdrop-blur-sm mt-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 py-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-center gap-2 text-gray-600 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"], {
                                        size: 20,
                                        className: "text-blue-600"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Docs/docs.jsx",
                                        lineNumber: 641,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold text-gray-900",
                                        children: "Developer Documentation Hub"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Docs/docs.jsx",
                                        lineNumber: 642,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/Docs/docs.jsx",
                                lineNumber: 640,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 text-sm",
                                children: [
                                    "Curated collection of official documentation and trusted resources for developers.",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/app/Docs/docs.jsx",
                                        lineNumber: 646,
                                        columnNumber: 15
                                    }, this),
                                    "Last updated: May 2025 • ",
                                    stats.total,
                                    " total resources"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/Docs/docs.jsx",
                                lineNumber: 644,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/Docs/docs.jsx",
                        lineNumber: 639,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/Docs/docs.jsx",
                    lineNumber: 638,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/Docs/docs.jsx",
                lineNumber: 637,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/Docs/docs.jsx",
        lineNumber: 384,
        columnNumber: 5
    }, this);
}
_s3(Docs, "0u5/kHhXQvYPxeyF4/0jZUI0Y6o=", false, function() {
    return [
        useLocalStorage,
        useDebounce
    ];
});
_c1 = Docs;
var _c, _c1;
__turbopack_context__.k.register(_c, "DocumentationCard");
__turbopack_context__.k.register(_c1, "Docs");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_cc24df42._.js.map