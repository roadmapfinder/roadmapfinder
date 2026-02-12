module.exports = [
"[project]/app/Roadmaps/OS/docs.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/OSDocs.jsx
__turbopack_context__.s([
    "default",
    ()=>OSDocs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-ssr] (ecmascript) <export default as ExternalLink>");
;
;
;
const docsList = [
    {
        title: "Linux Kernel Official Documentation",
        description: "The official and up-to-date Linux kernel documentation covering architecture, subsystems, drivers, and APIs.",
        url: "https://docs.kernel.org/",
        citation: "Linux Kernel Docs"
    },
    {
        title: "Kernel.org (Source & Releases)",
        description: "Central hub for Linux kernel source code, stable releases, changelogs, and additional documentation.",
        url: "https://www.kernel.org/",
        citation: "Linux Kernel Docs"
    },
    {
        title: "Linux Source Repository (GitHub)",
        description: "The official Linux source tree maintained by Linus Torvalds, including the Documentation/ directory.",
        url: "https://github.com/torvalds/linux",
        citation: "GitHub Linux Source"
    },
    {
        title: "The Linux Documentation Project (LDP)",
        description: "A long-standing collection of Linux and Unix HOWTOs, guides, and technical references for system learners.",
        url: "https://www.tldp.org/",
        citation: "The Linux Documentation Project"
    },
    {
        title: "Linux API Reference (man7.org)",
        description: "Comprehensive reference of Linux system calls, C library functions, file formats, and inter-process mechanisms.",
        url: "https://man7.org/linux/man-pages/",
        citation: "man7.org"
    },
    {
        title: "Linux Kernel Labs",
        description: "Hands-on tutorials, labs, and teaching material for learning kernel internals and driver development.",
        url: "https://linux-kernel-labs.github.io/",
        citation: "Linux Kernel Labs"
    },
    {
        title: "xv6 Teaching OS (MIT PDOS)",
        description: "A simple Unix-like teaching operating system used at MIT to understand process management, syscalls, and file systems.",
        url: "https://pdos.csail.mit.edu/6.S081/2023/xv6/book-riscv-rev3.pdf",
        citation: "MIT PDOS xv6"
    },
    {
        title: "xv6 RISC-V Source Repository",
        description: "The official MIT PDOS GitHub repository containing xv6 source code and book content for RISC-V architecture.",
        url: "https://github.com/mit-pdos/xv6-riscv-book",
        citation: "MIT PDOS GitHub"
    },
    {
        title: "Zephyr RTOS Official Docs",
        description: "Modern real-time operating system documentation including getting started guides, APIs, and hardware board support.",
        url: "https://docs.zephyrproject.org/latest/develop/getting_started/index.html",
        citation: "Zephyr Project Docs"
    },
    {
        title: "Zephyr QEMU Board Documentation",
        description: "Official Zephyr documentation for running and emulating Zephyr OS on QEMU-supported virtual boards.",
        url: "https://docs.zephyrproject.org/latest/boards/qemu/index.html",
        citation: "Zephyr Project Docs"
    },
    {
        title: "FreeRTOS Official Documentation",
        description: "Comprehensive documentation and reference manual for FreeRTOS kernel, APIs, and architecture.",
        url: "https://www.freertos.org/Documentation/02-Kernel/07-Books-and-manual/01-RTOS_book",
        citation: "FreeRTOS Docs"
    },
    {
        title: "FreeRTOS Reference Manual (PDF)",
        description: "The official FreeRTOS reference manual detailing kernel configuration, APIs, and task management.",
        url: "https://www.freertos.org/media/2018/FreeRTOS_Reference_Manual_V10.0.0.pdf",
        citation: "FreeRTOS Docs"
    },
    {
        title: "Fuchsia OS Documentation",
        description: "The official Fuchsia developer documentation, including system architecture, kernel (Zircon), and build setup.",
        url: "https://fuchsia.dev/fuchsia-src",
        citation: "Fuchsia Docs"
    },
    {
        title: "Fuchsia OS Reference",
        description: "Detailed API, SDK, and system reference for Fuchsia OS, including tools, tracing, and testing infrastructure.",
        url: "https://fuchsia.dev/reference",
        citation: "Fuchsia Docs"
    },
    {
        title: "POSIX / IEEE Standards (The Open Group)",
        description: "The official POSIX and UNIX specification documentation, defining system interfaces and API standards.",
        url: "https://pubs.opengroup.org/onlinepubs/9699919799/",
        citation: "The Open Group POSIX"
    },
    {
        title: "System V ABI / ELF Specification",
        description: "The official System V Application Binary Interface documentation, defining ELF format and ABI standards.",
        url: "https://refspecs.linuxfoundation.org/elf/",
        citation: "Linux Foundation Refspecs"
    }
];
function OSDocs() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "px-6 py-12 bg-gray-50 min-h-screen",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-3xl font-bold text-gray-900 mb-6",
                    children: "🧠 Official OS & Kernel Documentation"
                }, void 0, false, {
                    fileName: "[project]/app/Roadmaps/OS/docs.jsx",
                    lineNumber: 125,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-600 mb-10",
                    children: "Authoritative documentation sources for learning Operating System engineering — covering Linux kernel, educational OSes like xv6, RTOS projects like Zephyr and FreeRTOS, and open standards like POSIX and ELF."
                }, void 0, false, {
                    fileName: "[project]/app/Roadmaps/OS/docs.jsx",
                    lineNumber: 128,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
                    children: docsList.map((doc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: doc.url,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition transform hover:-translate-y-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold text-gray-900 group-hover:text-blue-600",
                                            children: doc.title
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/OS/docs.jsx",
                                            lineNumber: 146,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                            size: 18,
                                            className: "text-gray-400 group-hover:text-blue-600",
                                            "aria-hidden": "true"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/OS/docs.jsx",
                                            lineNumber: 149,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Roadmaps/OS/docs.jsx",
                                    lineNumber: 145,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-3 text-sm text-gray-600",
                                    children: doc.description
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/OS/docs.jsx",
                                    lineNumber: 156,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-4 text-xs text-indigo-600 font-medium",
                                    children: doc.citation
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/OS/docs.jsx",
                                    lineNumber: 158,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, doc.title, true, {
                            fileName: "[project]/app/Roadmaps/OS/docs.jsx",
                            lineNumber: 138,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/Roadmaps/OS/docs.jsx",
                    lineNumber: 136,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/Roadmaps/OS/docs.jsx",
            lineNumber: 123,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/Roadmaps/OS/docs.jsx",
        lineNumber: 122,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/Roadmaps/OS/projects.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/OSProjects.jsx
__turbopack_context__.s([
    "default",
    ()=>OSProjects
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
const projects = [
    // Phase 1 — Beginner
    {
        id: "phase1-mini-shell",
        level: "Phase 1 — Beginner",
        title: "Mini Shell (Command Interpreter)",
        description: "Build a lightweight shell like bash to execute system commands, handle redirection, pipes, and background processes using fork and exec.",
        url: "https://youtu.be/uSXWTkGDDnM?si=zWO4TaHVGMQeq_jo"
    },
    {
        id: "phase1-scheduler-sim",
        level: "Phase 1 — Beginner",
        title: "CPU Scheduler Simulator",
        description: "Simulate CPU scheduling algorithms such as FCFS, Round Robin, and SJF. Visualize process states and context switching in a console app.",
        url: "https://youtu.be/zFnrUVqtiOY?si=FBwxDxKFXDNhg0l2"
    },
    // Phase 2 — Intermediate
    {
        id: "phase2-malloc-clone",
        level: "Phase 2 — Intermediate",
        title: "Memory Allocator (malloc/free Clone)",
        description: "Implement a custom malloc, calloc, and free using system calls like brk and mmap. Manage heap blocks and reduce fragmentation.",
        url: "https://danluu.com/malloc-tutorial/"
    },
    {
        id: "phase2-file-system",
        level: "Phase 2 — Intermediate",
        title: "Simple File System (User Space)",
        description: "Design a basic file system with inodes and directories. Support file create, delete, read, and write using simulated disk blocks.",
        url: "https://youtu.be/0LtuQhNFFe0?si=X4UUkrxq05vIuQxc"
    },
    {
        id: "phase2-process-monitor",
        level: "Phase 2 — Intermediate",
        title: "Process Monitor (top/htop Clone)",
        description: "Build a live process monitor using data from /proc filesystem. Display CPU, memory, and thread statistics in real time.",
        url: "https://youtu.be/SvQPuOY5qxk?si=TzIVIyhD-CWHUWxJ"
    },
    // Phase 3 — Advanced
    {
        id: "phase3-http-server",
        level: "Phase 3 — Advanced",
        title: "Multi-Threaded HTTP Server",
        description: "Implement a simple HTTP server using sockets and multithreading. Handle GET/POST requests, serve static files, and manage concurrency.",
        url: "https://youtu.be/eTvSgOoc_BE?si=zuBMNLRjJSovUHT3"
    },
    {
        id: "phase3-kernel-module",
        level: "Phase 3 — Advanced",
        title: "Linux Kernel Module (LKM)",
        description: "Develop and load a kernel module that logs messages, exposes data through /proc or sysfs, and handles interrupts safely.",
        url: "https://youtu.be/7w_rFyl6zk0?si=5M3LyQ96I4c_bw_n"
    },
    {
        id: "phase3-toy-os",
        level: "Phase 3 — Advanced",
        title: "Toy Operating System (Bootloader + Kernel)",
        description: "Write a simple x86 OS that boots via GRUB, enters protected mode, and prints to screen. Implement keyboard input and basic task switching.",
        url: "https://youtu.be/FkrpUaGThTQ?si=fIx6ABcBe0KSd7Ya"
    },
    // Phase 4 — Expert
    {
        id: "phase4-hypervisor",
        level: "Phase 4 — Expert",
        title: "Mini Hypervisor or Emulator",
        description: "Build a minimal hypervisor using KVM or QEMU. Manage guest OS state and emulate virtualized CPU and memory operations.",
        url: "https://youtu.be/pUV45923yqQ?si=XaoruVY7i8L2ZflR"
    }
];
function OSProjects() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-gray-50 py-12 min-h-screen",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "mb-8 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl font-extrabold text-gray-900",
                            children: "⚙️ OS Engineering Project Roadmap"
                        }, void 0, false, {
                            fileName: "[project]/app/Roadmaps/OS/projects.jsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2 text-gray-600",
                            children: "Progress from beginner to expert by building real-world Operating System projects. Each project deepens your understanding of processes, memory, file systems, and kernel internals."
                        }, void 0, false, {
                            fileName: "[project]/app/Roadmaps/OS/projects.jsx",
                            lineNumber: 94,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Roadmaps/OS/projects.jsx",
                    lineNumber: 90,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
                    children: projects.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform",
                            "aria-labelledby": `${p.id}-title`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-block text-xs font-medium bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full",
                                    children: p.level
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/OS/projects.jsx",
                                    lineNumber: 107,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    id: `${p.id}-title`,
                                    className: "mt-4 text-lg font-semibold text-gray-900 group-hover:text-indigo-600",
                                    children: p.title
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/OS/projects.jsx",
                                    lineNumber: 110,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-gray-600 text-sm",
                                    children: p.description
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/OS/projects.jsx",
                                    lineNumber: 116,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: p.url,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "mt-4 inline-block text-indigo-600 font-medium hover:underline",
                                    children: "Explore Project ▶"
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/OS/projects.jsx",
                                    lineNumber: 117,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, p.id, true, {
                            fileName: "[project]/app/Roadmaps/OS/projects.jsx",
                            lineNumber: 102,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/Roadmaps/OS/projects.jsx",
                    lineNumber: 100,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                    className: "mt-10 text-sm text-gray-500 text-center",
                    children: "Follow this roadmap to master OS internals — from user-space utilities to kernel modules and virtualization. Each build takes you closer to becoming an industry-ready systems engineer."
                }, void 0, false, {
                    fileName: "[project]/app/Roadmaps/OS/projects.jsx",
                    lineNumber: 129,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/Roadmaps/OS/projects.jsx",
            lineNumber: 89,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/Roadmaps/OS/projects.jsx",
        lineNumber: 88,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/Roadmaps/OS/faq.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/OSFaq.jsx
__turbopack_context__.s([
    "default",
    ()=>OSFaq
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-ssr] (ecmascript) <export default as ChevronUp>");
;
;
;
const faqs = [
    {
        question: "What is an Operating System and why is it important?",
        answer: "An Operating System (OS) is system software that manages computer hardware and software resources, and provides common services for programs. It enables users and applications to interact with hardware efficiently, securely, and abstractly."
    },
    {
        question: "What are the main components of an Operating System?",
        answer: "Core components include the Kernel (manages CPU, memory, and devices), Process Management, Memory Management, File System, I/O System, and User Interface (CLI or GUI)."
    },
    {
        question: "What is the difference between a process and a thread?",
        answer: "A process is an independent program with its own memory space. A thread is a lightweight subunit of a process that shares the same memory. Threads allow concurrent execution within a single process."
    },
    {
        question: "How does the OS handle multitasking?",
        answer: "The OS uses CPU scheduling algorithms like Round Robin, Priority, and Multilevel Queue to allocate CPU time between multiple processes or threads, creating an illusion of parallelism."
    },
    {
        question: "What is virtual memory and how does it work?",
        answer: "Virtual memory allows programs to use more memory than physically available by temporarily storing inactive data on disk (swap space). The OS handles mapping between virtual and physical addresses using page tables."
    },
    {
        question: "What are system calls and why are they used?",
        answer: "System calls are APIs through which user-space applications request services from the kernel, such as file operations, process control, and communication. Examples include fork(), exec(), read(), and write()."
    },
    {
        question: "What is the difference between kernel mode and user mode?",
        answer: "Kernel mode has unrestricted access to system hardware and resources, while user mode is restricted for safety. The OS switches between these modes during system calls and interrupts."
    },
    {
        question: "What is the purpose of device drivers?",
        answer: "Device drivers act as translators between the OS and hardware devices. They provide standardized interfaces so that software can communicate with hardware without knowing hardware-specific details."
    },
    {
        question: "How can I practice OS concepts hands-on?",
        answer: "You can implement mini-projects like a shell, scheduler simulator, memory allocator, or file system. Using Linux, QEMU, and C is highly recommended for practical learning."
    },
    {
        question: "Which programming languages are best for OS development?",
        answer: "C and C++ are the most common for kernel and low-level programming due to direct hardware control. Assembly is used for bootloaders, and Rust is gaining popularity for memory-safe systems programming."
    },
    {
        question: "What is the difference between monolithic and microkernel architectures?",
        answer: "A monolithic kernel includes all OS services (file system, memory, drivers) in a single address space, whereas a microkernel runs minimal core services in kernel space and others as user-space processes, improving modularity and security."
    },
    {
        question: "What are interrupts and how do they work?",
        answer: "Interrupts are signals that inform the CPU an event occurred (e.g., I/O completion). The CPU stops its current task, executes an interrupt handler, then resumes execution, ensuring responsiveness."
    },
    {
        question: "What tools should I learn to debug and analyze OS behavior?",
        answer: "Tools include GDB for debugging, strace/ltrace for system call tracing, top/htop for process monitoring, and perf or ftrace for performance analysis and profiling."
    },
    {
        question: "How do modern OSs handle security?",
        answer: "Security mechanisms include user authentication, permissions, sandboxing, encryption, kernel isolation, and mandatory access control systems like SELinux and AppArmor."
    },
    {
        question: "How can I contribute to open-source OS projects?",
        answer: "You can start by exploring beginner issues in Linux, FreeBSD, or MINIX repositories, reading their contribution guidelines, and engaging with the developer mailing lists or forums."
    }
];
function OSFaq() {
    const [openIndex, setOpenIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const toggleFAQ = (index)=>{
        setOpenIndex(openIndex === index ? null : index);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-gray-50 py-12 min-h-screen",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-3xl font-extrabold text-gray-900 mb-6 text-center",
                    children: "💡 OS Engineering FAQ"
                }, void 0, false, {
                    fileName: "[project]/app/Roadmaps/OS/faq.jsx",
                    lineNumber: 93,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-600 text-center mb-10",
                    children: "Genuine and frequently asked questions every Operating System learner should understand — from basic concepts to advanced kernel-level insights."
                }, void 0, false, {
                    fileName: "[project]/app/Roadmaps/OS/faq.jsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: faqs.map((faq, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>toggleFAQ(index),
                                    className: "flex items-center justify-between w-full text-left p-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-medium text-gray-900",
                                            children: faq.question
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/OS/faq.jsx",
                                            lineNumber: 112,
                                            columnNumber: 17
                                        }, this),
                                        openIndex === index ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                            className: "text-gray-600"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/OS/faq.jsx",
                                            lineNumber: 116,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                            className: "text-gray-600"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/OS/faq.jsx",
                                            lineNumber: 118,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Roadmaps/OS/faq.jsx",
                                    lineNumber: 108,
                                    columnNumber: 15
                                }, this),
                                openIndex === index && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-5 pb-5 text-gray-700 text-sm leading-relaxed",
                                    children: faq.answer
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/OS/faq.jsx",
                                    lineNumber: 123,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/app/Roadmaps/OS/faq.jsx",
                            lineNumber: 104,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/Roadmaps/OS/faq.jsx",
                    lineNumber: 102,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/Roadmaps/OS/faq.jsx",
            lineNumber: 92,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/Roadmaps/OS/faq.jsx",
        lineNumber: 91,
        columnNumber: 5
    }, this);
}
}),
"[externals]/module [external] (module, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("module", () => require("module"));

module.exports = mod;
}),
"[project]/app/Roadmaps/OS/downloadPdf.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "downloadRoadmapPDF",
    ()=>downloadRoadmapPDF
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jspdf/dist/jspdf.es.min.js [app-ssr] (ecmascript)");
;
const downloadRoadmapPDF = async (phases)=>{
    try {
        const pdf = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]({
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4'
        });
        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();
        const margin = 15;
        const contentWidth = pageWidth - margin * 2;
        let yPosition = margin;
        // Color palette
        const colors = {
            primary: [
                37,
                99,
                235
            ],
            secondary: [
                99,
                102,
                241
            ],
            accent: [
                59,
                130,
                246
            ],
            text: [
                17,
                24,
                39
            ],
            textLight: [
                75,
                85,
                99
            ],
            success: [
                34,
                197,
                94
            ],
            warning: [
                249,
                115,
                22
            ],
            background: [
                249,
                250,
                251
            ],
            border: [
                229,
                231,
                235
            ] // Gray-200
        };
        // Helper function to add new page
        const addNewPage = ()=>{
            pdf.addPage();
            yPosition = margin;
        };
        // Helper function to check if we need a new page
        const checkPageBreak = (requiredSpace)=>{
            if (yPosition + requiredSpace > pageHeight - margin) {
                addNewPage();
                return true;
            }
            return false;
        };
        // Helper function to draw a rounded rectangle
        const drawRoundedRect = (x, y, width, height, radius, fillColor, borderColor)=>{
            if (fillColor) {
                pdf.setFillColor(...fillColor);
                pdf.roundedRect(x, y, width, height, radius, radius, 'F');
            }
            if (borderColor) {
                pdf.setDrawColor(...borderColor);
                pdf.setLineWidth(0.5);
                pdf.roundedRect(x, y, width, height, radius, radius, 'S');
            }
        };
        // ============================================
        // COVER PAGE
        // ============================================
        // Gradient background effect (using rectangles)
        for(let i = 0; i < 297; i += 3){
            const alpha = i / 297;
            const blueValue = 235 - Math.floor(alpha * 100);
            pdf.setFillColor(37, 99, blueValue);
            pdf.rect(0, i, 210, 3, 'F');
        }
        // Title
        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(36);
        pdf.setTextColor(255, 255, 255);
        pdf.text('Operating System', pageWidth / 2, 80, {
            align: 'center'
        });
        pdf.setFontSize(42);
        pdf.text('Mastery Roadmap', pageWidth / 2, 95, {
            align: 'center'
        });
        // Subtitle
        pdf.setFontSize(18);
        pdf.setFont('helvetica', 'normal');
        pdf.text('From Beginner to Industry-Ready Professional', pageWidth / 2, 110, {
            align: 'center'
        });
        // Info box
        pdf.setFillColor(255, 255, 255);
        drawRoundedRect(margin + 20, 130, contentWidth - 40, 45, 3, [
            255,
            255,
            255
        ], null);
        pdf.setTextColor(...colors.text);
        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(14);
        pdf.text('📚 Complete Learning Path', pageWidth / 2, 140, {
            align: 'center'
        });
        pdf.setFont('helvetica', 'normal');
        pdf.setFontSize(11);
        pdf.setTextColor(...colors.textLight);
        pdf.text('7 Phases • Step-by-Step Execution Plan • Timeline & Milestones', pageWidth / 2, 150, {
            align: 'center'
        });
        pdf.text('Comprehensive Projects • Industry-Ready Skills', pageWidth / 2, 158, {
            align: 'center'
        });
        pdf.text('Estimated Duration: 12-18 months (Dedicated Learning)', pageWidth / 2, 166, {
            align: 'center'
        });
        // Stats boxes
        const statsY = 190;
        const statBoxWidth = (contentWidth - 20) / 3;
        const stats = [
            {
                icon: '📖',
                value: '7',
                label: 'Phases'
            },
            {
                icon: '🎯',
                value: '25+',
                label: 'Projects'
            },
            {
                icon: '⏱️',
                value: '12-18',
                label: 'Months'
            }
        ];
        stats.forEach((stat, index)=>{
            const x = margin + index * (statBoxWidth + 10);
            drawRoundedRect(x, statsY, statBoxWidth, 30, 2, [
                255,
                255,
                255
            ], colors.border);
            pdf.setFontSize(20);
            pdf.text(stat.icon, x + statBoxWidth / 2, statsY + 10, {
                align: 'center'
            });
            pdf.setFont('helvetica', 'bold');
            pdf.setFontSize(16);
            pdf.setTextColor(...colors.primary);
            pdf.text(stat.value, x + statBoxWidth / 2, statsY + 20, {
                align: 'center'
            });
            pdf.setFont('helvetica', 'normal');
            pdf.setFontSize(9);
            pdf.setTextColor(...colors.textLight);
            pdf.text(stat.label, x + statBoxWidth / 2, statsY + 26, {
                align: 'center'
            });
        });
        // Footer
        pdf.setFontSize(10);
        pdf.setTextColor(255, 255, 255);
        pdf.text('Your comprehensive guide to mastering operating systems', pageWidth / 2, 260, {
            align: 'center'
        });
        pdf.setFontSize(8);
        pdf.text(`Generated on ${new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })}`, pageWidth / 2, 270, {
            align: 'center'
        });
        // ============================================
        // TABLE OF CONTENTS
        // ============================================
        addNewPage();
        yPosition = margin;
        // TOC Header
        pdf.setFillColor(...colors.primary);
        pdf.rect(0, yPosition, pageWidth, 20, 'F');
        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(20);
        pdf.setTextColor(255, 255, 255);
        pdf.text('📋 Table of Contents', pageWidth / 2, yPosition + 13, {
            align: 'center'
        });
        yPosition += 30;
        // TOC Items
        const tocItems = [
            {
                title: 'How to Use This Roadmap',
                page: 3
            },
            {
                title: 'Learning Timeline & Schedule',
                page: 4
            },
            {
                title: 'Phase 0: Foundations of Computer Science',
                page: 5
            },
            {
                title: 'Phase 1: Programming Mastery (C, C++, Rust)',
                page: 7
            },
            {
                title: 'Phase 2: Operating System Fundamentals',
                page: 9
            },
            {
                title: 'Phase 3: Dive Into Kernel Development',
                page: 11
            },
            {
                title: 'Phase 4: Advanced Topics (Modern Systems)',
                page: 13
            },
            {
                title: 'Phase 5: Industry-Ready Skills',
                page: 15
            },
            {
                title: 'Phase 6: Professional & Research Level',
                page: 17
            },
            {
                title: 'Resources & Community',
                page: 19
            }
        ];
        tocItems.forEach((item, index)=>{
            const isPhase = item.title.includes('Phase');
            if (isPhase) {
                pdf.setFont('helvetica', 'bold');
                pdf.setFontSize(12);
                pdf.setTextColor(...colors.primary);
            } else {
                pdf.setFont('helvetica', 'normal');
                pdf.setFontSize(11);
                pdf.setTextColor(...colors.text);
            }
            const dotWidth = contentWidth - 15;
            const dots = '.'.repeat(Math.floor(dotWidth / 2));
            pdf.text(item.title, margin + 5, yPosition);
            pdf.setFont('helvetica', 'normal');
            pdf.setFontSize(10);
            pdf.setTextColor(...colors.textLight);
            pdf.text(dots, margin + 45, yPosition);
            pdf.setFont('helvetica', 'bold');
            pdf.setFontSize(11);
            pdf.setTextColor(...colors.primary);
            pdf.text(item.page.toString(), pageWidth - margin - 5, yPosition, {
                align: 'right'
            });
            yPosition += isPhase ? 10 : 8;
        });
        // ============================================
        // HOW TO USE THIS ROADMAP
        // ============================================
        addNewPage();
        yPosition = margin;
        // Section header
        pdf.setFillColor(...colors.primary);
        pdf.rect(0, yPosition, pageWidth, 15, 'F');
        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(16);
        pdf.setTextColor(255, 255, 255);
        pdf.text('🎯 How to Use This Roadmap', margin, yPosition + 10);
        yPosition += 25;
        // Introduction
        pdf.setFont('helvetica', 'normal');
        pdf.setFontSize(10);
        pdf.setTextColor(...colors.text);
        const introText = 'This roadmap is designed to take you from a complete beginner to an industry-ready operating system developer. Follow the phases sequentially for the best learning experience.';
        const introLines = pdf.splitTextToSize(introText, contentWidth);
        pdf.text(introLines, margin, yPosition);
        yPosition += introLines.length * 6 + 10;
        // Learning approach boxes
        const approaches = [
            {
                title: '📖 Learn',
                description: 'Study concepts through recommended resources, books, and documentation',
                color: colors.primary
            },
            {
                title: '💻 Practice',
                description: 'Complete hands-on projects to reinforce your understanding',
                color: colors.success
            },
            {
                title: '🔄 Review',
                description: 'Revisit difficult concepts and build upon previous knowledge',
                color: colors.warning
            },
            {
                title: '🚀 Build',
                description: 'Create portfolio projects that demonstrate your skills',
                color: colors.secondary
            }
        ];
        approaches.forEach((approach)=>{
            checkPageBreak(30);
            drawRoundedRect(margin, yPosition, contentWidth, 25, 2, [
                ...approach.color,
                20
            ], approach.color);
            pdf.setFont('helvetica', 'bold');
            pdf.setFontSize(12);
            pdf.setTextColor(...approach.color);
            pdf.text(approach.title, margin + 5, yPosition + 8);
            pdf.setFont('helvetica', 'normal');
            pdf.setFontSize(9);
            pdf.setTextColor(...colors.text);
            const descLines = pdf.splitTextToSize(approach.description, contentWidth - 10);
            pdf.text(descLines, margin + 5, yPosition + 15);
            yPosition += 30;
        });
        // Time commitment
        checkPageBreak(40);
        yPosition += 5;
        drawRoundedRect(margin, yPosition, contentWidth, 35, 2, [
            254,
            249,
            195
        ], [
            251,
            191,
            36
        ]);
        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(11);
        pdf.setTextColor(...colors.warning);
        pdf.text('⏰ Time Commitment Recommendation', margin + 5, yPosition + 8);
        pdf.setFont('helvetica', 'normal');
        pdf.setFontSize(9);
        pdf.setTextColor(...colors.text);
        const timeText = [
            '• Full-time learners: 6-8 hours/day → Complete in 12 months',
            '• Part-time learners: 2-3 hours/day → Complete in 18 months',
            '• Weekend warriors: 10-15 hours/week → Complete in 24 months'
        ];
        timeText.forEach((line, index)=>{
            pdf.text(line, margin + 5, yPosition + 16 + index * 5);
        });
        yPosition += 45;
        // Success tips
        checkPageBreak(60);
        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(12);
        pdf.setTextColor(...colors.primary);
        pdf.text('💡 Success Tips', margin, yPosition);
        yPosition += 8;
        const tips = [
            'Don\'t skip phases - each builds on the previous one',
            'Complete ALL practice projects - they\'re essential for understanding',
            'Join OS development communities for support and motivation',
            'Maintain a GitHub repository to track your progress',
            'Review and refactor your code regularly',
            'Read other people\'s kernel code to learn best practices'
        ];
        pdf.setFont('helvetica', 'normal');
        pdf.setFontSize(9);
        pdf.setTextColor(...colors.text);
        tips.forEach((tip)=>{
            checkPageBreak(8);
            pdf.text(`✓ ${tip}`, margin + 3, yPosition);
            yPosition += 6;
        });
        // ============================================
        // LEARNING TIMELINE
        // ============================================
        addNewPage();
        yPosition = margin;
        pdf.setFillColor(...colors.primary);
        pdf.rect(0, yPosition, pageWidth, 15, 'F');
        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(16);
        pdf.setTextColor(255, 255, 255);
        pdf.text('📅 Learning Timeline & Schedule', margin, yPosition + 10);
        yPosition += 25;
        const timeline = [
            {
                phase: 0,
                duration: '2-3 weeks',
                focus: 'Foundation building',
                hours: '40-60 hours'
            },
            {
                phase: 1,
                duration: '6-8 weeks',
                focus: 'Language mastery',
                hours: '120-160 hours'
            },
            {
                phase: 2,
                duration: '8-10 weeks',
                focus: 'OS concepts',
                hours: '160-200 hours'
            },
            {
                phase: 3,
                duration: '10-12 weeks',
                focus: 'Kernel development',
                hours: '200-240 hours'
            },
            {
                phase: 4,
                duration: '8-10 weeks',
                focus: 'Advanced topics',
                hours: '160-200 hours'
            },
            {
                phase: 5,
                duration: '4-6 weeks',
                focus: 'Professional skills',
                hours: '80-120 hours'
            },
            {
                phase: 6,
                duration: 'Ongoing',
                focus: 'Research & contribution',
                hours: 'Variable'
            }
        ];
        timeline.forEach((item, index)=>{
            checkPageBreak(35);
            const phaseColor = [
                colors.primary,
                colors.success,
                [
                    147,
                    51,
                    234
                ],
                [
                    249,
                    115,
                    22
                ],
                [
                    236,
                    72,
                    153
                ],
                [
                    239,
                    68,
                    68
                ],
                colors.secondary
            ][item.phase];
            // Timeline connector
            if (index > 0) {
                pdf.setDrawColor(...colors.border);
                pdf.setLineWidth(1);
                pdf.line(margin + 15, yPosition - 5, margin + 15, yPosition + 5);
            }
            // Phase circle
            pdf.setFillColor(...phaseColor);
            pdf.circle(margin + 15, yPosition + 10, 4, 'F');
            // Content box
            drawRoundedRect(margin + 25, yPosition, contentWidth - 25, 28, 2, [
                ...phaseColor,
                10
            ], phaseColor);
            pdf.setFont('helvetica', 'bold');
            pdf.setFontSize(11);
            pdf.setTextColor(...phaseColor);
            pdf.text(`Phase ${item.phase}: ${item.focus}`, margin + 30, yPosition + 8);
            pdf.setFont('helvetica', 'normal');
            pdf.setFontSize(9);
            pdf.setTextColor(...colors.text);
            pdf.text(`Duration: ${item.duration}`, margin + 30, yPosition + 15);
            pdf.text(`Total Hours: ${item.hours}`, margin + 30, yPosition + 21);
            yPosition += 35;
        });
        // Total time
        yPosition += 5;
        checkPageBreak(25);
        drawRoundedRect(margin, yPosition, contentWidth, 20, 2, colors.primary, null);
        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(12);
        pdf.setTextColor(255, 255, 255);
        pdf.text('Total Estimated Time: 12-18 months (800-1000+ hours)', pageWidth / 2, yPosition + 13, {
            align: 'center'
        });
        // ============================================
        // PHASE DETAILS (All 7 Phases)
        // ============================================
        phases.forEach((phase, phaseIndex)=>{
            addNewPage();
            yPosition = margin;
            // Phase header with color
            const phaseColors = [
                [
                    37,
                    99,
                    235
                ],
                [
                    34,
                    197,
                    94
                ],
                [
                    147,
                    51,
                    234
                ],
                [
                    249,
                    115,
                    22
                ],
                [
                    236,
                    72,
                    153
                ],
                [
                    239,
                    68,
                    68
                ],
                [
                    99,
                    102,
                    241
                ] // indigo
            ];
            const currentPhaseColor = phaseColors[phaseIndex];
            pdf.setFillColor(...currentPhaseColor);
            pdf.rect(0, yPosition, pageWidth, 25, 'F');
            pdf.setFont('helvetica', 'bold');
            pdf.setFontSize(18);
            pdf.setTextColor(255, 255, 255);
            pdf.text(`Phase ${phase.id}: ${phase.title}`, pageWidth / 2, yPosition + 10, {
                align: 'center'
            });
            pdf.setFont('helvetica', 'normal');
            pdf.setFontSize(11);
            pdf.text(phase.description, pageWidth / 2, yPosition + 18, {
                align: 'center'
            });
            yPosition += 35;
            // Duration and focus (specific to each phase)
            const phaseDurations = [
                {
                    weeks: '2-3 weeks',
                    hours: '40-60 hours',
                    focus: 'Build strong CS fundamentals'
                },
                {
                    weeks: '6-8 weeks',
                    hours: '120-160 hours',
                    focus: 'Master system programming languages'
                },
                {
                    weeks: '8-10 weeks',
                    hours: '160-200 hours',
                    focus: 'Understand core OS concepts deeply'
                },
                {
                    weeks: '10-12 weeks',
                    hours: '200-240 hours',
                    focus: 'Work with real kernel code'
                },
                {
                    weeks: '8-10 weeks',
                    hours: '160-200 hours',
                    focus: 'Explore modern OS technologies'
                },
                {
                    weeks: '4-6 weeks',
                    hours: '80-120 hours',
                    focus: 'Build professional portfolio'
                },
                {
                    weeks: 'Ongoing',
                    hours: 'Variable',
                    focus: 'Contribute to open source'
                }
            ];
            const currentDuration = phaseDurations[phaseIndex];
            drawRoundedRect(margin, yPosition, contentWidth, 22, 2, [
                ...currentPhaseColor,
                20
            ], currentPhaseColor);
            pdf.setFont('helvetica', 'bold');
            pdf.setFontSize(10);
            pdf.setTextColor(...currentPhaseColor);
            pdf.text(`⏱️ Duration: ${currentDuration.weeks} (${currentDuration.hours})`, margin + 5, yPosition + 8);
            pdf.setFont('helvetica', 'normal');
            pdf.setFontSize(9);
            pdf.setTextColor(...colors.text);
            pdf.text(`🎯 Focus: ${currentDuration.focus}`, margin + 5, yPosition + 16);
            yPosition += 30;
            // What you'll learn
            checkPageBreak(15);
            pdf.setFont('helvetica', 'bold');
            pdf.setFontSize(11);
            pdf.setTextColor(...colors.primary);
            pdf.text('📚 What You\'ll Learn', margin, yPosition);
            yPosition += 8;
            // Sections
            phase.sections.forEach((section, sectionIndex)=>{
                checkPageBreak(50);
                // Section title
                pdf.setFont('helvetica', 'bold');
                pdf.setFontSize(10);
                pdf.setTextColor(...currentPhaseColor);
                pdf.text(section.title, margin + 3, yPosition);
                yPosition += 7;
                // Section items
                pdf.setFont('helvetica', 'normal');
                pdf.setFontSize(9);
                pdf.setTextColor(...colors.text);
                section.items.forEach((item, itemIndex)=>{
                    const itemText = `${itemIndex + 1}. ${item}`;
                    const itemLines = pdf.splitTextToSize(itemText, contentWidth - 10);
                    checkPageBreak(itemLines.length * 5 + 3);
                    pdf.text(itemLines, margin + 6, yPosition);
                    yPosition += itemLines.length * 5 + 2;
                });
                yPosition += 5;
            });
            // Weekly execution plan
            addNewPage();
            yPosition = margin;
            pdf.setFillColor(...currentPhaseColor);
            pdf.rect(0, yPosition, pageWidth, 12, 'F');
            pdf.setFont('helvetica', 'bold');
            pdf.setFontSize(14);
            pdf.setTextColor(255, 255, 255);
            pdf.text(`📋 Phase ${phase.id} Execution Plan`, margin, yPosition + 8);
            yPosition += 22;
            // Weekly breakdown
            const weekPlans = generateWeeklyPlan(phase, phaseIndex);
            weekPlans.forEach((week, weekIndex)=>{
                checkPageBreak(45);
                drawRoundedRect(margin, yPosition, contentWidth, 8, 1, currentPhaseColor, null);
                pdf.setFont('helvetica', 'bold');
                pdf.setFontSize(10);
                pdf.setTextColor(255, 255, 255);
                pdf.text(`Week ${weekIndex + 1}: ${week.title}`, margin + 3, yPosition + 6);
                yPosition += 12;
                pdf.setFont('helvetica', 'normal');
                pdf.setFontSize(9);
                pdf.setTextColor(...colors.text);
                week.tasks.forEach((task)=>{
                    const taskLines = pdf.splitTextToSize(`• ${task}`, contentWidth - 8);
                    checkPageBreak(taskLines.length * 5);
                    pdf.text(taskLines, margin + 4, yPosition);
                    yPosition += taskLines.length * 5;
                });
                yPosition += 8;
            });
            // Success checklist
            yPosition += 5;
            checkPageBreak(40);
            drawRoundedRect(margin, yPosition, contentWidth, 10, 2, [
                220,
                252,
                231
            ], [
                34,
                197,
                94
            ]);
            pdf.setFont('helvetica', 'bold');
            pdf.setFontSize(11);
            pdf.setTextColor(...colors.success);
            pdf.text(`✅ Phase ${phase.id} Completion Checklist`, margin + 3, yPosition + 7);
            yPosition += 15;
            const checklist = generateChecklist(phase, phaseIndex);
            pdf.setFont('helvetica', 'normal');
            pdf.setFontSize(9);
            pdf.setTextColor(...colors.text);
            checklist.forEach((item)=>{
                checkPageBreak(8);
                pdf.text(`☐ ${item}`, margin + 4, yPosition);
                yPosition += 6;
            });
        });
        // ============================================
        // RESOURCES & COMMUNITY
        // ============================================
        addNewPage();
        yPosition = margin;
        pdf.setFillColor(...colors.primary);
        pdf.rect(0, yPosition, pageWidth, 15, 'F');
        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(16);
        pdf.setTextColor(255, 255, 255);
        pdf.text('📚 Resources & Community', margin, yPosition + 10);
        yPosition += 25;
        // Books
        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(12);
        pdf.setTextColor(...colors.primary);
        pdf.text('📖 Essential Books', margin, yPosition);
        yPosition += 8;
        const books = [
            'Operating System Concepts (Dinosaur Book) - Silberschatz, Galvin, Gagne',
            'Modern Operating Systems - Andrew S. Tanenbaum',
            'Operating Systems: Three Easy Pieces - Remzi H. Arpaci-Dusseau',
            'The Linux Programming Interface - Michael Kerrisk',
            'Linux Kernel Development - Robert Love',
            'Understanding the Linux Kernel - Daniel P. Bovet'
        ];
        pdf.setFont('helvetica', 'normal');
        pdf.setFontSize(9);
        pdf.setTextColor(...colors.text);
        books.forEach((book)=>{
            checkPageBreak(7);
            pdf.text(`• ${book}`, margin + 3, yPosition);
            yPosition += 6;
        });
        yPosition += 8;
        // Online resources
        checkPageBreak(15);
        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(12);
        pdf.setTextColor(...colors.primary);
        pdf.text('🌐 Online Resources', margin, yPosition);
        yPosition += 8;
        const onlineResources = [
            'OSDev Wiki (wiki.osdev.org) - Comprehensive OS development guide',
            'MIT 6.828 Operating System Engineering - Free course materials',
            'Linux Kernel Documentation (kernel.org/doc)',
            'Rust OS Development Tutorial (os.phil-opp.com)',
            'XV6 Source Code - MIT\'s teaching operating system',
            'Linux From Scratch (linuxfromscratch.org)'
        ];
        pdf.setFont('helvetica', 'normal');
        pdf.setFontSize(9);
        pdf.setTextColor(...colors.text);
        onlineResources.forEach((resource)=>{
            checkPageBreak(7);
            const lines = pdf.splitTextToSize(`• ${resource}`, contentWidth - 6);
            pdf.text(lines, margin + 3, yPosition);
            yPosition += lines.length * 5 + 1;
        });
        yPosition += 8;
        // Communities
        checkPageBreak(15);
        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(12);
        pdf.setTextColor(...colors.primary);
        pdf.text('👥 Communities', margin, yPosition);
        yPosition += 8;
        const communities = [
            'r/osdev - Reddit community for OS developers',
            'Linux Kernel Mailing List (LKML)',
            'OSDev Discord Server',
            'Kernel Newbies Mailing List',
            'Stack Overflow - OS Development tag',
            'GitHub - Search for OS projects and contribute'
        ];
        pdf.setFont('helvetica', 'normal');
        pdf.setFontSize(9);
        pdf.setTextColor(...colors.text);
        communities.forEach((community)=>{
            checkPageBreak(7);
            pdf.text(`• ${community}`, margin + 3, yPosition);
            yPosition += 6;
        });
        // ============================================
        // FINAL PAGE - MOTIVATION
        // ============================================
        addNewPage();
        yPosition = 60;
        // Motivational quote box
        drawRoundedRect(margin + 10, yPosition, contentWidth - 20, 50, 3, [
            239,
            246,
            255
        ], colors.primary);
        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(16);
        pdf.setTextColor(...colors.primary);
        pdf.text('🎯 Your Journey Starts Now', pageWidth / 2, yPosition + 15, {
            align: 'center'
        });
        pdf.setFont('helvetica', 'normal');
        pdf.setFontSize(10);
        pdf.setTextColor(...colors.text);
        const motivationText = 'Operating systems are the foundation of modern computing. By mastering OS development, you\'re gaining one of the most valuable and respected skill sets in computer science.';
        const motivationLines = pdf.splitTextToSize(motivationText, contentWidth - 40);
        pdf.text(motivationLines, pageWidth / 2, yPosition + 28, {
            align: 'center'
        });
        yPosition += 65;
        // Success principles
        const principles = [
            {
                icon: '🔥',
                title: 'Consistency Beats Intensity',
                text: 'Daily practice is more valuable than occasional marathon sessions'
            },
            {
                icon: '💪',
                title: 'Embrace the Struggle',
                text: 'Debugging kernel panics makes you a better developer'
            },
            {
                icon: '🤝',
                title: 'Learn in Public',
                text: 'Share your progress, help others, build your network'
            },
            {
                icon: '🚀',
                title: 'Build, Build, Build',
                text: 'Theory is important, but projects create real understanding'
            }
        ];
        principles.forEach((principle, index)=>{
            checkPageBreak(35);
            const boxColor = [
                colors.primary,
                colors.success,
                colors.warning,
                colors.secondary
            ][index % 4];
            drawRoundedRect(margin, yPosition, contentWidth, 28, 2, [
                ...boxColor,
                15
            ], boxColor);
            pdf.setFontSize(16);
            pdf.text(principle.icon, margin + 5, yPosition + 10);
            pdf.setFont('helvetica', 'bold');
            pdf.setFontSize(11);
            pdf.setTextColor(...boxColor);
            pdf.text(principle.title, margin + 15, yPosition + 10);
            pdf.setFont('helvetica', 'normal');
            pdf.setFontSize(9);
            pdf.setTextColor(...colors.text);
            const lines = pdf.splitTextToSize(principle.text, contentWidth - 20);
            pdf.text(lines, margin + 15, yPosition + 18);
            yPosition += 33;
        });
        // Final message
        yPosition += 10;
        checkPageBreak(40);
        pdf.setFillColor(...colors.primary);
        pdf.rect(0, yPosition, pageWidth, 35, 'F');
        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(14);
        pdf.setTextColor(255, 255, 255);
        pdf.text('Good luck on your OS development journey!', pageWidth / 2, yPosition + 12, {
            align: 'center'
        });
        pdf.setFont('helvetica', 'normal');
        pdf.setFontSize(10);
        pdf.text('Remember: Every expert was once a beginner.', pageWidth / 2, yPosition + 22, {
            align: 'center'
        });
        // Add page numbers to all pages except cover
        const pageCount = pdf.internal.getNumberOfPages();
        for(let i = 2; i <= pageCount; i++){
            pdf.setPage(i);
            pdf.setFont('helvetica', 'normal');
            pdf.setFontSize(9);
            pdf.setTextColor(...colors.textLight);
            pdf.text(`Page ${i - 1} of ${pageCount - 1}`, pageWidth / 2, pageHeight - 10, {
                align: 'center'
            });
        }
        // Save the PDF
        const filename = `OS-Mastery-Roadmap-${new Date().toISOString().split('T')[0]}.pdf`;
        pdf.save(filename);
        return {
            success: true,
            filename
        };
    } catch (error) {
        console.error('Error generating PDF:', error);
        return {
            success: false,
            error: error.message
        };
    }
};
// Helper function to generate weekly execution plans
const generateWeeklyPlan = (phase, phaseIndex)=>{
    const weeklyPlans = [
        // Phase 0: Foundations
        [
            {
                title: 'Computer Architecture Basics',
                tasks: [
                    'Study CPU architecture, ALU, registers, and instruction cycle',
                    'Learn number systems: binary, hexadecimal, and conversions',
                    'Practice bitwise operations and understand memory addressing',
                    'Watch video lectures on computer organization'
                ]
            },
            {
                title: 'Compilation & Data Structures',
                tasks: [
                    'Understand the compilation pipeline: preprocessing, compilation, linking',
                    'Review algorithms: sorting, searching, time complexity',
                    'Study data structures: arrays, linked lists, stacks, queues',
                    'Complete coding exercises on data structure implementations'
                ]
            },
            {
                title: 'Projects Week',
                tasks: [
                    'Build a simple virtual CPU simulator in Python or C',
                    'Create a toy assembler that converts pseudo-assembly to bytecode',
                    'Document your projects on GitHub',
                    'Review and consolidate all concepts learned'
                ]
            }
        ],
        // Phase 1: Programming Mastery
        [
            {
                title: 'C Programming Fundamentals',
                tasks: [
                    'Master pointers, pointer arithmetic, and memory layout',
                    'Understand stack vs heap allocation',
                    'Learn structs, unions, and header files',
                    'Practice with simple C programs and debugging'
                ]
            },
            {
                title: 'Advanced C Concepts',
                tasks: [
                    'Study function pointers and callbacks',
                    'Learn about compilation and linking process',
                    'Master file I/O operations',
                    'Understand signal handling and system calls'
                ]
            },
            {
                title: 'C++ Introduction',
                tasks: [
                    'Learn C++ basics: classes, objects, RAII',
                    'Study templates and the Standard Template Library',
                    'Understand std::thread and synchronization',
                    'Practice C++ project structure and build systems'
                ]
            },
            {
                title: 'Rust Basics',
                tasks: [
                    'Install Rust and learn cargo build system',
                    'Understand ownership, borrowing, and lifetimes',
                    'Study pattern matching and error handling',
                    'Complete Rust exercises on common data structures'
                ]
            },
            {
                title: 'Memory Management Deep Dive',
                tasks: [
                    'Implement your own malloc() allocator in C',
                    'Study memory allocation strategies: first-fit, best-fit',
                    'Learn about memory fragmentation and garbage collection',
                    'Profile memory usage in your programs'
                ]
            },
            {
                title: 'Project: Multi-threaded HTTP Server',
                tasks: [
                    'Design and implement a basic HTTP server in C',
                    'Add multi-threading support with pthreads',
                    'Implement proper synchronization and resource management',
                    'Test with concurrent clients and handle edge cases'
                ]
            },
            {
                title: 'Project: Custom Shell',
                tasks: [
                    'Build a command interpreter with fork/exec',
                    'Implement built-in commands and piping',
                    'Add I/O redirection support',
                    'Polish UI and handle errors gracefully'
                ]
            },
            {
                title: 'Review & Portfolio',
                tasks: [
                    'Refactor and document all projects',
                    'Write comprehensive README files',
                    'Create demo videos or screenshots',
                    'Review C, C++, and Rust concepts'
                ]
            }
        ],
        // Phase 2: OS Fundamentals
        [
            {
                title: 'Boot Process & Bootloaders',
                tasks: [
                    'Understand BIOS/UEFI boot sequence',
                    'Study bootloader responsibilities (GRUB)',
                    'Learn about kernel loading and initialization',
                    'Write a simple bootloader in assembly'
                ]
            },
            {
                title: 'Process Management',
                tasks: [
                    'Study process control block (PCB) structure',
                    'Understand context switching mechanisms',
                    'Learn fork(), exec(), wait() system calls',
                    'Implement process state diagrams'
                ]
            },
            {
                title: 'Memory Management Theory',
                tasks: [
                    'Study paging and page tables',
                    'Understand segmentation and virtual memory',
                    'Learn about TLB and memory hierarchy',
                    'Study demand paging and page replacement algorithms'
                ]
            },
            {
                title: 'File Systems',
                tasks: [
                    'Learn inode structure and file organization',
                    'Study FAT32 and ext4 file systems',
                    'Understand journaling and consistency',
                    'Learn about directory structures and metadata'
                ]
            },
            {
                title: 'Concurrency & Synchronization',
                tasks: [
                    'Study race conditions and critical sections',
                    'Learn mutexes, semaphores, and condition variables',
                    'Understand deadlock, livelock, and starvation',
                    'Solve classic synchronization problems'
                ]
            },
            {
                title: 'Scheduling Algorithms',
                tasks: [
                    'Study FCFS, SJF, Round Robin, Priority scheduling',
                    'Understand real-time scheduling',
                    'Implement scheduler simulation',
                    'Compare scheduler performance metrics'
                ]
            },
            {
                title: 'Device Drivers & I/O',
                tasks: [
                    'Learn interrupt handling mechanisms',
                    'Study DMA and I/O ports',
                    'Understand device driver architecture',
                    'Learn about kernel modules'
                ]
            },
            {
                title: 'Networking Stack Basics',
                tasks: [
                    'Study TCP/IP protocol layers',
                    'Understand socket programming',
                    'Learn about NIC drivers and packet processing',
                    'Implement basic network utilities'
                ]
            },
            {
                title: 'Project: Toy OS Kernel',
                tasks: [
                    'Set up development environment with QEMU',
                    'Create bootloader and basic kernel',
                    'Implement VGA text mode output',
                    'Add keyboard input handling'
                ]
            },
            {
                title: 'Project: User-space Filesystem (FUSE)',
                tasks: [
                    'Learn FUSE framework',
                    'Implement basic filesystem operations',
                    'Add support for directories and metadata',
                    'Test with real file operations'
                ]
            }
        ],
        // Phase 3: Kernel Development
        [
            {
                title: 'Linux Kernel Setup',
                tasks: [
                    'Download and compile Linux kernel source',
                    'Set up development environment with debugging tools',
                    'Understand kernel source tree organization',
                    'Learn kernel coding style and conventions'
                ]
            },
            {
                title: 'System Call Interface',
                tasks: [
                    'Study system call mechanism and syscall table',
                    'Learn about kernel/user space transitions',
                    'Trace system calls with strace',
                    'Understand context switching during syscalls'
                ]
            },
            {
                title: 'Process Scheduler (CFS)',
                tasks: [
                    'Study Completely Fair Scheduler implementation',
                    'Understand red-black tree data structure',
                    'Learn about load balancing and CPU affinity',
                    'Analyze scheduler behavior with perf tools'
                ]
            },
            {
                title: 'Virtual Memory Management',
                tasks: [
                    'Study Linux page table implementation',
                    'Understand mmap() and memory mapping',
                    'Learn about slab allocator and kmalloc',
                    'Study demand paging and swap mechanisms'
                ]
            },
            {
                title: 'Device Drivers Deep Dive',
                tasks: [
                    'Differentiate character vs block drivers',
                    'Learn driver registration and probe functions',
                    'Study interrupt handling in drivers',
                    'Understand DMA operations'
                ]
            },
            {
                title: 'Filesystem Internals',
                tasks: [
                    'Study Virtual File System (VFS) layer',
                    'Understand inode, dentry, and superblock structures',
                    'Learn about buffer cache and page cache',
                    'Study ext4 journaling mechanism'
                ]
            },
            {
                title: 'IPC Mechanisms',
                tasks: [
                    'Study pipes and FIFOs implementation',
                    'Learn about signals and signal handling',
                    'Understand shared memory and message queues',
                    'Implement IPC examples'
                ]
            },
            {
                title: 'Project: Kernel Module',
                tasks: [
                    'Write a "Hello World" kernel module',
                    'Learn module initialization and cleanup',
                    'Add module parameters and sysfs entries',
                    'Debug with printk and kernel logs'
                ]
            },
            {
                title: 'Project: Modify System Call',
                tasks: [
                    'Add a new system call to the kernel',
                    'Recompile and test the modified kernel',
                    'Write user-space program to test the new syscall',
                    'Document the syscall interface'
                ]
            },
            {
                title: 'Project: Custom Scheduler',
                tasks: [
                    'Study Linux CFS scheduler code',
                    'Design your custom scheduling policy',
                    'Implement the scheduler in kernel',
                    'Benchmark against default scheduler'
                ]
            },
            {
                title: 'Project: Virtual Device Driver',
                tasks: [
                    'Create a simple character device driver',
                    'Implement open, read, write, close operations',
                    'Add ioctl support for device control',
                    'Test with user-space applications'
                ]
            }
        ],
        // Phase 4: Advanced Topics
        [
            {
                title: 'Virtualization Basics',
                tasks: [
                    'Understand hypervisor types: Type 1 vs Type 2',
                    'Study hardware virtualization (VT-x, AMD-V)',
                    'Learn about QEMU and KVM architecture',
                    'Set up virtual machine development environment'
                ]
            },
            {
                title: 'Container Technologies',
                tasks: [
                    'Study Linux namespaces (PID, network, mount, etc.)',
                    'Learn about cgroups for resource isolation',
                    'Understand container runtimes (Docker, containerd)',
                    'Implement a simple container from scratch'
                ]
            },
            {
                title: 'OS Security',
                tasks: [
                    'Study SELinux and AppArmor',
                    'Learn about capabilities and privilege separation',
                    'Understand sandboxing techniques',
                    'Implement security policies'
                ]
            },
            {
                title: 'Distributed Systems',
                tasks: [
                    'Study distributed OS concepts',
                    'Learn about cloud VM scheduling',
                    'Understand resource orchestration (Kubernetes basics)',
                    'Study consistency and replication'
                ]
            },
            {
                title: 'High-Performance Computing',
                tasks: [
                    'Learn NUMA architecture',
                    'Study kernel bypass I/O techniques',
                    'Understand DPDK for network performance',
                    'Profile and optimize kernel code'
                ]
            },
            {
                title: 'Advanced Networking',
                tasks: [
                    'Study eBPF programming',
                    'Learn XDP for fast packet processing',
                    'Understand kernel networking stack internals',
                    'Implement network monitoring tools'
                ]
            },
            {
                title: 'Project: Mini Hypervisor',
                tasks: [
                    'Build a basic hypervisor using QEMU + KVM',
                    'Implement VM creation and management',
                    'Add device emulation',
                    'Test with guest OS'
                ]
            },
            {
                title: 'Project: eBPF Network Monitor',
                tasks: [
                    'Write eBPF programs for packet filtering',
                    'Implement performance monitoring',
                    'Create user-space control program',
                    'Visualize network statistics'
                ]
            }
        ],
        // Phase 5: Industry-Ready Skills
        [
            {
                title: 'Debugging Tools Mastery',
                tasks: [
                    'Master gdb for kernel debugging',
                    'Learn strace for system call tracing',
                    'Use perf for performance profiling',
                    'Study ftrace for kernel tracing'
                ]
            },
            {
                title: 'Kernel Panic & Crash Dumps',
                tasks: [
                    'Understand kernel oops and panic messages',
                    'Learn to read stack traces',
                    'Use crash dump analysis tools',
                    'Debug live kernel with kgdb'
                ]
            },
            {
                title: 'Build Systems',
                tasks: [
                    'Master Makefiles for kernel builds',
                    'Learn CMake for user-space projects',
                    'Understand kernel build configuration',
                    'Set up continuous integration'
                ]
            },
            {
                title: 'Version Control & Patches',
                tasks: [
                    'Master git for kernel development',
                    'Learn git format-patch for submissions',
                    'Use git bisect for bug hunting',
                    'Understand patch review process'
                ]
            },
            {
                title: 'Portfolio Project: Custom OS Kernel',
                tasks: [
                    'Design your OS architecture',
                    'Implement bootloader and kernel initialization',
                    'Add process management and scheduling',
                    'Create shell interface'
                ]
            },
            {
                title: 'Portfolio Project: Production Kernel Module',
                tasks: [
                    'Choose a useful kernel module to build',
                    'Implement with proper error handling',
                    'Add comprehensive logging and debugging',
                    'Create documentation and tests'
                ]
            }
        ],
        // Phase 6: Professional & Research
        [
            {
                title: 'Advanced Kernel Topics',
                tasks: [
                    'Study kernel tracing and instrumentation',
                    'Learn about RCU and lock-free data structures',
                    'Understand memory consistency models',
                    'Study compiler optimizations for OS code'
                ]
            },
            {
                title: 'Hardware-Software Co-design',
                tasks: [
                    'Learn about custom hardware accelerators',
                    'Study FPGA programming basics',
                    'Understand GPU kernel programming',
                    'Explore specialized OS for accelerators'
                ]
            },
            {
                title: 'Cloud-Native Kernels',
                tasks: [
                    'Study unikernel architecture',
                    'Learn about lightweight VMs (Firecracker)',
                    'Understand serverless computing OS requirements',
                    'Explore library operating systems'
                ]
            },
            {
                title: 'Open Source Contribution',
                tasks: [
                    'Subscribe to Linux Kernel Mailing List',
                    'Find beginner-friendly issues',
                    'Submit your first patch',
                    'Participate in code reviews'
                ]
            },
            {
                title: 'Research & Innovation',
                tasks: [
                    'Read recent OS research papers',
                    'Join OS development communities',
                    'Contribute to experimental OS projects',
                    'Share your knowledge through blog posts'
                ]
            },
            {
                title: 'Ongoing Learning',
                tasks: [
                    'Stay updated with kernel development',
                    'Attend OS conferences and meetups',
                    'Mentor other developers',
                    'Continue building innovative projects'
                ]
            }
        ]
    ];
    return weeklyPlans[phaseIndex] || [];
};
// Helper function to generate completion checklists
const generateChecklist = (phase, phaseIndex)=>{
    const checklists = [
        // Phase 0
        [
            'Understand CPU architecture and instruction cycle',
            'Master binary and hexadecimal number systems',
            'Complete virtual CPU simulator project',
            'Build toy assembler project',
            'Can explain compilation pipeline stages',
            'Comfortable with basic data structures'
        ],
        // Phase 1
        [
            'Write complex programs in C with pointers',
            'Implement custom memory allocator',
            'Build multi-threaded HTTP server',
            'Create functional shell interpreter',
            'Understand C++ RAII and templates',
            'Grasp Rust ownership and borrowing',
            'All projects documented on GitHub'
        ],
        // Phase 2
        [
            'Explain boot process from BIOS to kernel',
            'Understand process lifecycle and scheduling',
            'Grasp virtual memory and paging',
            'Build toy OS kernel with bootloader',
            'Implement filesystem in FUSE',
            'Create scheduler simulation',
            'Build process monitor tool'
        ],
        // Phase 3
        [
            'Successfully compile Linux kernel',
            'Write and load kernel module',
            'Modify and test system call',
            'Understand CFS scheduler internals',
            'Implement custom scheduler policy',
            'Create virtual device driver',
            'Navigate kernel source code confidently'
        ],
        // Phase 4
        [
            'Understand virtualization technologies',
            'Build mini hypervisor with QEMU+KVM',
            'Write functional eBPF programs',
            'Grasp container namespaces and cgroups',
            'Understand OS security mechanisms',
            'Explore distributed OS concepts',
            'Complete at least 2 advanced projects'
        ],
        // Phase 5
        [
            'Master gdb, strace, perf, ftrace',
            'Debug kernel panics confidently',
            'Set up professional build systems',
            'Follow git patch workflow',
            'Complete custom OS kernel project',
            'Build production-ready kernel module',
            'Portfolio ready for job applications'
        ],
        // Phase 6
        [
            'Subscribe to LKML and follow discussions',
            'Submit first patch to open source project',
            'Understand advanced kernel topics',
            'Read and comprehend research papers',
            'Active in OS development community',
            'Continuously learning and contributing',
            'Mentor others in OS development'
        ]
    ];
    return checklists[phaseIndex] || [];
};
const __TURBOPACK__default__export__ = downloadRoadmapPDF;
}),
"[project]/app/Roadmaps/OS/roadmapData.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Operating System Development Roadmap
__turbopack_context__.s([
    "phases",
    ()=>phases
]);
const phases = [
    {
        id: 0,
        title: "Foundations of Computer Science",
        subtitle: "Phase 0",
        description: "Build a solid foundation in computer architecture, algorithms, and low-level concepts.",
        color: "bg-blue-500",
        sections: [
            {
                title: "📘 Core CS Concepts",
                items: [
                    "Computer Architecture: CPU, ALU, registers, instruction cycle, caches, memory hierarchy",
                    "Number Systems & Binary: Binary, Hex, bitwise operations, signed/unsigned integers",
                    "Compilation Pipeline: Source → Preprocessing → Compilation → Linking → Loading",
                    "Algorithms & Data Structures: Arrays, linked lists, stacks, trees, heaps, scheduling queues"
                ]
            },
            {
                title: "🧩 Practice Projects",
                items: [
                    "✅ Implement a simple virtual CPU simulator",
                    "✅ Write a toy assembler that converts pseudo-assembly to bytecode"
                ]
            }
        ]
    },
    {
        id: 1,
        title: "Programming Mastery (C, C++, Rust)",
        subtitle: "Phase 1",
        description: "Master system programming languages essential for OS development.",
        color: "bg-green-500",
        sections: [
            {
                title: "💻 System Languages",
                items: [
                    "C: Pointers, memory layout, stack vs heap, structs, headers, linking",
                    "C++: RAII, templates, std::thread, synchronization primitives",
                    "Rust: Ownership model, borrowing, lifetimes, safe concurrency"
                ]
            },
            {
                title: "🧠 Key Concepts",
                items: [
                    "Manual memory management (malloc, free, smart pointers)",
                    "Function call conventions, stack frames",
                    "Inline assembly and calling syscalls manually",
                    "File I/O, sockets, and signals"
                ]
            },
            {
                title: "🧩 Projects",
                items: [
                    "✅ Write your own malloc() allocator",
                    "✅ Implement a multi-threaded HTTP server in C",
                    "✅ Build a tiny shell (command interpreter)"
                ]
            }
        ]
    },
    {
        id: 2,
        title: "Operating System Fundamentals",
        subtitle: "Phase 2",
        description: "Understand core OS concepts: processes, memory, file systems, and concurrency.",
        color: "bg-purple-500",
        sections: [
            {
                title: "📚 Key OS Modules",
                items: [
                    "Boot Process: BIOS/UEFI, bootloaders (GRUB), kernel loading",
                    "Processes: Process control block (PCB), context switching, fork/exec",
                    "Memory Management: Paging, segmentation, virtual memory, swapping",
                    "File Systems: Inodes, journaling, FAT32, ext4",
                    "Device Drivers: Interrupts, I/O ports, DMA, kernel modules",
                    "Concurrency: Mutexes, semaphores, condition variables, race conditions",
                    "Scheduling: FCFS, SJF, Round Robin, Priority",
                    "Networking Stack: TCP/IP layers, NIC drivers, socket interface"
                ]
            },
            {
                title: "🧩 Projects",
                items: [
                    "✅ Build a toy OS kernel (with a bootloader)",
                    "✅ Write your own scheduler simulation",
                    "✅ Implement a filesystem in user-space (FUSE)",
                    "✅ Create a process monitor (like top)"
                ]
            }
        ]
    },
    {
        id: 3,
        title: "Dive Into Kernel Development",
        subtitle: "Phase 3",
        description: "Deep dive into real kernel code and understand kernel internals.",
        color: "bg-orange-500",
        sections: [
            {
                title: "🧱 Choose a Kernel",
                items: [
                    "Linux (most popular for study & industry)",
                    "XV6 (MIT's teaching OS — simpler for learning)",
                    "Minix / Redox OS (for microkernel exploration)"
                ]
            },
            {
                title: "🔍 Kernel Internals",
                items: [
                    "System Calls: How syscall instruction transfers to kernel mode",
                    "Scheduler: CFS (Completely Fair Scheduler) in Linux",
                    "Virtual Memory: Page tables, TLB, mmap, demand paging",
                    "Device Drivers: char vs block drivers, kernel modules, sysfs",
                    "Filesystem: VFS layer, buffer cache, journaling",
                    "IPC: Pipes, signals, shared memory"
                ]
            },
            {
                title: "🧩 Kernel-Level Projects",
                items: [
                    "✅ Write a Linux kernel module (hello_world.ko)",
                    "✅ Modify a system call",
                    "✅ Implement a custom scheduler policy",
                    "✅ Create a virtual device driver"
                ]
            }
        ]
    },
    {
        id: 4,
        title: "Advanced Topics (Modern Systems)",
        subtitle: "Phase 4",
        description: "Explore virtualization, security, distributed systems, and high-performance computing.",
        color: "bg-pink-500",
        sections: [
            {
                title: "🧠 Advanced Domains",
                items: [
                    "Virtualization: QEMU, KVM, Hypervisors, container namespaces",
                    "OS Security: SELinux, capabilities, sandboxing",
                    "Distributed OS: Cloud VM scheduling, resource orchestration",
                    "High-Performance Computing: NUMA awareness, kernel bypass I/O",
                    "Networking: eBPF, DPDK, kernel networking stack"
                ]
            },
            {
                title: "🧩 Projects",
                items: [
                    "✅ Build a mini hypervisor using QEMU + KVM",
                    "✅ Write an eBPF network monitor",
                    "✅ Contribute to Linux kernel mailing list patches",
                    "✅ Implement a bare-metal OS for ARM board"
                ]
            }
        ]
    },
    {
        id: 5,
        title: "Industry-Ready Skills",
        subtitle: "Phase 5",
        description: "Acquire professional debugging, tooling, and portfolio-building skills.",
        color: "bg-red-500",
        sections: [
            {
                title: "🧠 Core Professional Skills",
                items: [
                    "Debugging with gdb, strace, perf, ftrace",
                    "Kernel panic debugging and stack traces",
                    "Build systems: Make, CMake, Bazel",
                    "Version control & patch workflow (git format-patch, git bisect)",
                    "Writing clean kernel documentation"
                ]
            },
            {
                title: "🧩 Career Project Portfolio",
                items: [
                    "✅ Custom OS kernel (boot to shell)",
                    "✅ Linux kernel module",
                    "✅ File system or scheduler simulation",
                    "✅ Virtualization project (mini hypervisor)",
                    "✅ Driver for virtual hardware device"
                ]
            }
        ]
    },
    {
        id: 6,
        title: "Professional & Research Level",
        subtitle: "Phase 6",
        description: "Engage with cutting-edge research and contribute to open source OS projects.",
        color: "bg-indigo-500",
        sections: [
            {
                title: "📈 Deep Topics",
                items: [
                    "Kernel tracing and instrumentation",
                    "Memory model verification (RCU, lock-free correctness)",
                    "Hardware-software co-design",
                    "Compiler-OS optimization interfaces (LLVM passes)",
                    "OS for accelerators (GPU, FPGA)",
                    "Cloud-native kernels (unikernels, lightweight VMs)"
                ]
            },
            {
                title: "🌍 Open Source Contributions",
                items: [
                    "Submit patches to: Linux kernel, Redox, FreeBSD, or Zephyr",
                    "Join discussions on LKML (Linux Kernel Mailing List)",
                    "Participate in open source OS research projects on GitHub"
                ]
            },
            {
                title: "📚 Additional Resources",
                items: [
                    "Books: Operating System Concepts (Silberschatz), Modern Operating Systems (Tanenbaum)",
                    "Online: OSDev Wiki, Linux Kernel Documentation, MIT 6.828 course",
                    "Practice: Contribute to open source kernels, build your own OS from scratch",
                    "Communities: r/osdev, LKML, kernel newbies mailing list"
                ]
            }
        ]
    }
];
}),
"[project]/app/Roadmaps/OS/page.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/code.js [app-ssr] (ecmascript) <export default as Code>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-ssr] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map.js [app-ssr] (ecmascript) <export default as Map>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/folder-open.js [app-ssr] (ecmascript) <export default as FolderOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$help$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-help.js [app-ssr] (ecmascript) <export default as HelpCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$OS$2f$docs$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Roadmaps/OS/docs.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$OS$2f$projects$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Roadmaps/OS/projects.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$OS$2f$faq$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Roadmaps/OS/faq.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$OS$2f$downloadPdf$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Roadmaps/OS/downloadPdf.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$OS$2f$roadmapData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Roadmaps/OS/roadmapData.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
const OsMasteryRoadmap = ()=>{
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('roadmap');
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDownloading, setIsDownloading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Handle PDF download with loading state
    const handlePDFDownload = async ()=>{
        setIsDownloading(true);
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$OS$2f$downloadPdf$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["downloadRoadmapPDF"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$OS$2f$roadmapData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["phases"]);
            if (result.success) {
                console.log(`PDF downloaded successfully: ${result.filename}`);
            } else {
                console.error('PDF download failed:', result.error);
            }
        } catch (error) {
            console.error('PDF download error:', error);
        } finally{
            setIsDownloading(false);
        }
    };
    const renderContent = ()=>{
        switch(activeTab){
            case 'documentation':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$OS$2f$docs$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/Roadmaps/OS/page.jsx",
                    lineNumber: 35,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            case 'projects':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$OS$2f$projects$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/Roadmaps/OS/page.jsx",
                    lineNumber: 37,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            case 'faq':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$OS$2f$faq$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/Roadmaps/OS/page.jsx",
                    lineNumber: 39,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col space-y-8 md:space-y-12",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$OS$2f$roadmapData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["phases"].map((phase, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        index < __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$OS$2f$roadmapData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["phases"].length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute left-1/2 transform -translate-x-1/2 top-full h-8 md:h-12 w-0.5 md:w-1 bg-gray-300 z-10"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/OS/page.jsx",
                                            lineNumber: 49,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center mb-4 md:mb-6 px-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `inline-block ${phase.color} text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold text-base md:text-lg mb-2`,
                                                            children: [
                                                                "Phase ",
                                                                phase.id,
                                                                ": ",
                                                                phase.title
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/Roadmaps/OS/page.jsx",
                                                            lineNumber: 56,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-600 text-xs md:text-sm",
                                                            children: phase.subtitle
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Roadmaps/OS/page.jsx",
                                                            lineNumber: 59,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-800 font-medium mt-1 text-sm md:text-base",
                                                            children: phase.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Roadmaps/OS/page.jsx",
                                                            lineNumber: 60,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/Roadmaps/OS/page.jsx",
                                                    lineNumber: 55,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-full max-w-6xl px-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6",
                                                        children: phase.sections.map((section, sectionIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "bg-white rounded-lg border-2 border-blue-200 p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "text-blue-600 font-semibold text-base md:text-lg mb-3 md:mb-4",
                                                                        children: section.title
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/Roadmaps/OS/page.jsx",
                                                                        lineNumber: 71,
                                                                        columnNumber: 29
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                                                        className: "space-y-2",
                                                                        children: section.items.map((item, itemIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                className: "text-gray-700 text-xs md:text-sm leading-relaxed",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "font-medium text-gray-900",
                                                                                        children: [
                                                                                            itemIndex + 1,
                                                                                            "."
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/app/Roadmaps/OS/page.jsx",
                                                                                        lineNumber: 77,
                                                                                        columnNumber: 35
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    " ",
                                                                                    item
                                                                                ]
                                                                            }, itemIndex, true, {
                                                                                fileName: "[project]/app/Roadmaps/OS/page.jsx",
                                                                                lineNumber: 76,
                                                                                columnNumber: 33
                                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/Roadmaps/OS/page.jsx",
                                                                        lineNumber: 74,
                                                                        columnNumber: 29
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, sectionIndex, true, {
                                                                fileName: "[project]/app/Roadmaps/OS/page.jsx",
                                                                lineNumber: 67,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Roadmaps/OS/page.jsx",
                                                        lineNumber: 65,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Roadmaps/OS/page.jsx",
                                                    lineNumber: 64,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                index < __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$OS$2f$roadmapData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["phases"].length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-6 md:mt-8 flex items-center space-x-2 md:space-x-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-gray-500 font-medium text-xs md:text-sm transform -rotate-12",
                                                            children: [
                                                                "Phase ",
                                                                phase.id
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/Roadmaps/OS/page.jsx",
                                                            lineNumber: 89,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                            className: "text-gray-400",
                                                            size: 20
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Roadmaps/OS/page.jsx",
                                                            lineNumber: 92,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-gray-500 font-medium text-xs md:text-sm transform rotate-12",
                                                            children: [
                                                                "Phase ",
                                                                phase.id + 1
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/Roadmaps/OS/page.jsx",
                                                            lineNumber: 93,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/Roadmaps/OS/page.jsx",
                                                    lineNumber: 88,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/Roadmaps/OS/page.jsx",
                                            lineNumber: 53,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, phase.id, true, {
                                    fileName: "[project]/app/Roadmaps/OS/page.jsx",
                                    lineNumber: 46,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/app/Roadmaps/OS/page.jsx",
                            lineNumber: 44,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mt-8 md:mt-12 mx-4 p-6 md:p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl md:text-2xl font-bold text-gray-900 mb-4",
                                    children: "🏆 Final Tips to Become Industry-Ready"
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/OS/page.jsx",
                                    lineNumber: 105,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-700 text-base md:text-lg mb-4",
                                    children: "Congratulations! You've completed the OS Mastery Roadmap and are ready to build production-ready full-stack applications."
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/OS/page.jsx",
                                    lineNumber: 108,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/Roadmaps/OS/page.jsx",
                            lineNumber: 104,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Roadmaps/OS/page.jsx",
                    lineNumber: 42,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between mb-6 md:mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-2 md:space-x-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"], {
                                    className: "text-blue-600",
                                    size: 32
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/OS/page.jsx",
                                    lineNumber: 123,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-xl md:text-3xl font-bold text-gray-900",
                                    children: [
                                        "Operating System ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-blue-600",
                                            children: "Mastery Roadmap"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/OS/page.jsx",
                                            lineNumber: 125,
                                            columnNumber: 32
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm md:text-base font-normal text-gray-600 ml-2",
                                            children: "(Beginner → Industry Ready)"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/OS/page.jsx",
                                            lineNumber: 126,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Roadmaps/OS/page.jsx",
                                    lineNumber: 124,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/Roadmaps/OS/page.jsx",
                            lineNumber: 122,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handlePDFDownload,
                            disabled: isDownloading,
                            className: "hidden md:flex bg-blue-500 hover:bg-blue-600 disabled:bg-blue-400 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg items-center space-x-2 transition-colors",
                            children: [
                                isDownloading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                    size: 18,
                                    className: "animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/OS/page.jsx",
                                    lineNumber: 137,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/OS/page.jsx",
                                    lineNumber: 139,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: isDownloading ? 'Generating PDF...' : 'Download PDF'
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/OS/page.jsx",
                                    lineNumber: 141,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/Roadmaps/OS/page.jsx",
                            lineNumber: 131,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setMobileMenuOpen(!mobileMenuOpen),
                            className: "md:hidden bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg transition-colors",
                            children: mobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/app/Roadmaps/OS/page.jsx",
                                lineNumber: 149,
                                columnNumber: 31
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/app/Roadmaps/OS/page.jsx",
                                lineNumber: 149,
                                columnNumber: 49
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/app/Roadmaps/OS/page.jsx",
                            lineNumber: 145,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Roadmaps/OS/page.jsx",
                    lineNumber: 121,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "md:hidden mb-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handlePDFDownload,
                        disabled: isDownloading,
                        className: "w-full bg-blue-500 hover:bg-blue-600 disabled:bg-blue-400 disabled:cursor-not-allowed text-white px-4 py-3 rounded-lg flex items-center justify-center space-x-2 transition-colors",
                        children: [
                            isDownloading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                size: 18,
                                className: "animate-spin"
                            }, void 0, false, {
                                fileName: "[project]/app/Roadmaps/OS/page.jsx",
                                lineNumber: 161,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/app/Roadmaps/OS/page.jsx",
                                lineNumber: 163,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: isDownloading ? 'Generating PDF...' : 'Download PDF'
                            }, void 0, false, {
                                fileName: "[project]/app/Roadmaps/OS/page.jsx",
                                lineNumber: 165,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/Roadmaps/OS/page.jsx",
                        lineNumber: 155,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/app/Roadmaps/OS/page.jsx",
                    lineNumber: 154,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `${mobileMenuOpen ? 'block' : 'hidden'} md:block mb-6 md:mb-8`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-1 bg-white p-1 rounded-lg shadow-sm w-full md:w-fit",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setActiveTab('roadmap');
                                    setMobileMenuOpen(false);
                                },
                                className: `px-4 md:px-6 py-3 md:py-2 rounded-md font-medium transition-colors flex items-center justify-center md:justify-start ${activeTab === 'roadmap' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:text-gray-900'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__["Map"], {
                                        size: 18,
                                        className: "mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Roadmaps/OS/page.jsx",
                                        lineNumber: 183,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Roadmap"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/Roadmaps/OS/page.jsx",
                                lineNumber: 172,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setActiveTab('documentation');
                                    setMobileMenuOpen(false);
                                },
                                className: `px-4 md:px-6 py-3 md:py-2 rounded-md font-medium transition-colors flex items-center justify-center md:justify-start ${activeTab === 'documentation' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:text-gray-900'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                        size: 18,
                                        className: "mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Roadmaps/OS/page.jsx",
                                        lineNumber: 197,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Documentation"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/Roadmaps/OS/page.jsx",
                                lineNumber: 186,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setActiveTab('projects');
                                    setMobileMenuOpen(false);
                                },
                                className: `px-4 md:px-6 py-3 md:py-2 rounded-md font-medium transition-colors flex items-center justify-center md:justify-start ${activeTab === 'projects' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:text-gray-900'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpen$3e$__["FolderOpen"], {
                                        size: 18,
                                        className: "mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Roadmaps/OS/page.jsx",
                                        lineNumber: 211,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Projects"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/Roadmaps/OS/page.jsx",
                                lineNumber: 200,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setActiveTab('faq');
                                    setMobileMenuOpen(false);
                                },
                                className: `px-4 md:px-6 py-3 md:py-2 rounded-md font-medium transition-colors flex items-center justify-center md:justify-start ${activeTab === 'faq' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:text-gray-900'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$help$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__["HelpCircle"], {
                                        size: 18,
                                        className: "mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Roadmaps/OS/page.jsx",
                                        lineNumber: 225,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "FAQ"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/Roadmaps/OS/page.jsx",
                                lineNumber: 214,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/Roadmaps/OS/page.jsx",
                        lineNumber: 171,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/app/Roadmaps/OS/page.jsx",
                    lineNumber: 170,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                renderContent()
            ]
        }, void 0, true, {
            fileName: "[project]/app/Roadmaps/OS/page.jsx",
            lineNumber: 119,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/Roadmaps/OS/page.jsx",
        lineNumber: 118,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = OsMasteryRoadmap;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__a0ba82b7._.js.map