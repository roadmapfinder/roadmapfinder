module.exports = {

"[externals]/module [external] (module, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("module", () => require("module"));

module.exports = mod;
}}),
"[project]/app/CareerGuidance/pdfGenerator.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "downloadQuickSummaryPDF": (()=>downloadQuickSummaryPDF),
    "downloadRoadmapPDF": (()=>downloadRoadmapPDF)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jspdf/dist/jspdf.es.min.js [app-ssr] (ecmascript)");
;
const downloadRoadmapPDF = (sections, fileName = 'Career_Roadmap.pdf')=>{
    try {
        // Create new PDF document
        const doc = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]();
        const pageWidth = doc.internal.pageSize.getWidth();
        const pageHeight = doc.internal.pageSize.getHeight();
        const margin = 20;
        const maxWidth = pageWidth - margin * 2;
        let yPosition = margin;
        // Professional color palette (using RGB values that work well in PDF)
        const colors = {
            primary: [
                41,
                98,
                255
            ],
            secondary: [
                52,
                152,
                219
            ],
            accent: [
                46,
                204,
                113
            ],
            warning: [
                243,
                156,
                18
            ],
            dark: [
                44,
                62,
                80
            ],
            lightGray: [
                236,
                240,
                241
            ],
            mediumGray: [
                149,
                165,
                166
            ],
            text: [
                44,
                62,
                80
            ],
            white: [
                255,
                255,
                255
            ]
        };
        // Text wrapping function with consistent spacing
        const addTextWithWrap = (text, x, y, maxWidth, fontSize = 10, fontStyle = 'normal', color = colors.text)=>{
            doc.setFontSize(fontSize);
            doc.setFont('helvetica', fontStyle);
            doc.setTextColor(color[0], color[1], color[2]);
            const lines = doc.splitTextToSize(text, maxWidth);
            const lineHeight = fontSize * 1.4; // Professional line spacing
            lines.forEach((line, index)=>{
                const currentY = y + index * lineHeight;
                if (currentY > pageHeight - margin - 30) {
                    doc.addPage();
                    return margin + 20;
                }
                doc.text(line, x, currentY);
            });
            return y + lines.length * lineHeight + 5;
        };
        // Clean section header
        const addSectionHeader = (title, color = colors.primary)=>{
            // Check if we need a new page
            if (yPosition > pageHeight - 80) {
                doc.addPage();
                yPosition = margin + 20;
            }
            // Simple colored line above title
            doc.setDrawColor(color[0], color[1], color[2]);
            doc.setLineWidth(3);
            doc.line(margin, yPosition, margin + 60, yPosition);
            yPosition += 8;
            // Clean title text
            doc.setTextColor(color[0], color[1], color[2]);
            doc.setFontSize(16);
            doc.setFont('helvetica', 'bold');
            doc.text(title, margin, yPosition);
            yPosition += 15;
            // Subtle separator line
            doc.setDrawColor(colors.lightGray[0], colors.lightGray[1], colors.lightGray[2]);
            doc.setLineWidth(0.5);
            doc.line(margin, yPosition, pageWidth - margin, yPosition);
            yPosition += 10;
        };
        // Professional document header
        const createHeader = ()=>{
            // Simple header background
            doc.setFillColor(colors.primary[0], colors.primary[1], colors.primary[2]);
            doc.rect(0, 0, pageWidth, 50, 'F');
            // Title
            doc.setTextColor(colors.white[0], colors.white[1], colors.white[2]);
            doc.setFontSize(24);
            doc.setFont('helvetica', 'bold');
            doc.text('CAREER ROADMAP', margin, 25);
            // Subtitle
            doc.setFontSize(12);
            doc.setFont('helvetica', 'normal');
            doc.text('Your Professional Development Guide', margin, 35);
            // Date
            doc.setFontSize(10);
            const currentDate = new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            doc.text(`Generated: ${currentDate}`, margin, 44);
            yPosition = 65;
        };
        // Clean content formatting
        const formatSectionContent = (content, sectionColor = colors.primary)=>{
            if (!content || !content.trim()) return;
            const lines = content.split('\n').filter((line)=>line.trim());
            lines.forEach((line)=>{
                const trimmedLine = line.trim();
                if (!trimmedLine) return;
                // Check if we need a new page
                if (yPosition > pageHeight - 50) {
                    doc.addPage();
                    yPosition = margin + 20;
                }
                // Handle bullet points
                if (trimmedLine.match(/^[-•*→▪]\s/)) {
                    const bulletText = trimmedLine.replace(/^[-•*→▪]\s*/, '');
                    // Simple bullet point with consistent indentation
                    doc.setTextColor(sectionColor[0], sectionColor[1], sectionColor[2]);
                    doc.setFontSize(10);
                    doc.setFont('helvetica', 'normal');
                    doc.text('•', margin + 5, yPosition);
                    yPosition = addTextWithWrap(bulletText, margin + 15, yPosition, maxWidth - 15, 10, 'normal');
                    yPosition += 3;
                } else if (trimmedLine.endsWith(':') || trimmedLine.match(/^\*\*.*\*\*$/)) {
                    // Sub-headers
                    const headerText = trimmedLine.replace(/\*\*/g, '').replace(/:$/, '');
                    yPosition = addTextWithWrap(headerText, margin, yPosition, maxWidth, 12, 'bold', sectionColor);
                    yPosition += 5;
                } else if (trimmedLine.match(/\d+\s*(month|Month|weeks?|days?)/i)) {
                    // Timeline items with clean formatting
                    yPosition = addTextWithWrap(`⏱ ${trimmedLine}`, margin, yPosition, maxWidth, 10, 'bold', colors.accent);
                    yPosition += 5;
                } else {
                    // Regular paragraphs
                    yPosition = addTextWithWrap(trimmedLine, margin, yPosition, maxWidth, 10, 'normal');
                    yPosition += 8;
                }
            });
            yPosition += 10; // Section spacing
        };
        // Section configuration
        const sectionConfigs = [
            {
                key: 'skillGap',
                title: 'Skills Gap Analysis',
                color: colors.primary
            },
            {
                key: 'roadmap',
                title: 'Learning Roadmap',
                color: colors.secondary
            },
            {
                key: 'techStack',
                title: 'Technology Stack',
                color: colors.accent
            },
            {
                key: 'resources',
                title: 'Learning Resources',
                color: colors.warning
            },
            {
                key: 'projects',
                title: 'Recommended Projects',
                color: [
                    155,
                    89,
                    182
                ]
            },
            {
                key: 'insights',
                title: 'Industry Insights',
                color: [
                    231,
                    76,
                    60
                ]
            },
            {
                key: 'progression',
                title: 'Career progression',
                color: colors.accent
            },
            {
                key: 'networking',
                title: 'Networking Strategy',
                color: [
                    230,
                    126,
                    34
                ]
            }
        ];
        // Create header
        createHeader();
        // Process each section
        sectionConfigs.forEach(({ key, title, color })=>{
            const content = sections[key];
            if (content && content.trim()) {
                addSectionHeader(title, color);
                formatSectionContent(content, color);
            }
        });
        // Clean footer
        const addFooter = ()=>{
            const totalPages = doc.internal.getNumberOfPages();
            for(let i = 1; i <= totalPages; i++){
                doc.setPage(i);
                // Simple footer line
                doc.setDrawColor(colors.lightGray[0], colors.lightGray[1], colors.lightGray[2]);
                doc.setLineWidth(0.5);
                doc.line(margin, pageHeight - 25, pageWidth - margin, pageHeight - 25);
                // Footer text
                doc.setFontSize(9);
                doc.setTextColor(colors.mediumGray[0], colors.mediumGray[1], colors.mediumGray[2]);
                doc.setFont('helvetica', 'normal');
                doc.text('AI Career Advisor', margin, pageHeight - 15);
                doc.text(`Page ${i} of ${totalPages}`, pageWidth - margin - 20, pageHeight - 15);
                doc.setFontSize(8);
                doc.text(`Generated on ${new Date().toLocaleDateString()}`, margin, pageHeight - 8);
            }
        };
        // Add footer
        addFooter();
        // Save the PDF
        doc.save(fileName);
        return true;
    } catch (error) {
        console.error('Error generating PDF:', error);
        throw new Error('Failed to generate PDF. Please try again.');
    }
};
const downloadQuickSummaryPDF = (sections, fileName = 'Career_Roadmap_Summary.pdf')=>{
    try {
        const doc = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]();
        const pageWidth = doc.internal.pageSize.getWidth();
        const pageHeight = doc.internal.pageSize.getHeight();
        const margin = 20;
        const maxWidth = pageWidth - margin * 2;
        let yPosition = margin;
        // Colors
        const colors = {
            primary: [
                41,
                98,
                255
            ],
            secondary: [
                52,
                152,
                219
            ],
            accent: [
                46,
                204,
                113
            ],
            warning: [
                243,
                156,
                18
            ],
            white: [
                255,
                255,
                255
            ],
            light: [
                248,
                249,
                250
            ],
            text: [
                44,
                62,
                80
            ],
            mediumGray: [
                149,
                165,
                166
            ]
        };
        // Clean summary header
        const createSummaryHeader = ()=>{
            // Simple header background
            doc.setFillColor(colors.primary[0], colors.primary[1], colors.primary[2]);
            doc.rect(0, 0, pageWidth, 45, 'F');
            // Title
            doc.setTextColor(colors.white[0], colors.white[1], colors.white[2]);
            doc.setFontSize(20);
            doc.setFont('helvetica', 'bold');
            doc.text('CAREER ROADMAP SUMMARY', margin, 20);
            // Subtitle
            doc.setFontSize(11);
            doc.text('Key Highlights of Your Professional Journey', margin, 30);
            // Date
            doc.setFontSize(9);
            doc.text(`Generated: ${new Date().toLocaleDateString()}`, margin, 38);
            yPosition = 55;
        };
        createSummaryHeader();
        // Clean summary section
        const addSummarySection = (title, content, color)=>{
            if (!content || !content.trim()) return;
            // Section title
            doc.setFontSize(14);
            doc.setFont('helvetica', 'bold');
            doc.setTextColor(color[0], color[1], color[2]);
            doc.text(title, margin, yPosition);
            yPosition += 8;
            // Simple underline
            doc.setDrawColor(color[0], color[1], color[2]);
            doc.setLineWidth(1);
            doc.line(margin, yPosition, margin + 40, yPosition);
            yPosition += 8;
            // Content - first 3 key points only
            doc.setTextColor(colors.text[0], colors.text[1], colors.text[2]);
            doc.setFont('helvetica', 'normal');
            doc.setFontSize(10);
            const lines = content.split('\n').slice(0, 3);
            lines.forEach((line)=>{
                const trimmedLine = line.trim().replace(/^[-•*→▪]\s*/, '');
                if (trimmedLine) {
                    const bulletPoint = `• ${trimmedLine}`;
                    const splitLines = doc.splitTextToSize(bulletPoint, maxWidth - 10);
                    splitLines.slice(0, 1).forEach((splitLine)=>{
                        doc.text(splitLine, margin, yPosition);
                        yPosition += 6;
                    });
                }
            });
            yPosition += 10;
        };
        // Add summary sections
        const summaryConfigs = [
            {
                key: 'skillGap',
                title: 'Key Skills to Develop',
                color: colors.primary
            },
            {
                key: 'roadmap',
                title: 'Learning Path',
                color: colors.secondary
            },
            {
                key: 'techStack',
                title: 'Technology Focus',
                color: colors.accent
            },
            {
                key: 'progression',
                title: 'Next Steps',
                color: colors.warning
            }
        ];
        summaryConfigs.forEach(({ key, title, color })=>{
            const content = sections[key];
            if (content && content.trim()) {
                addSummarySection(title, content, color);
            }
        });
        // Call to action
        doc.setDrawColor(colors.warning[0], colors.warning[1], colors.warning[2]);
        doc.setLineWidth(2);
        doc.line(margin, yPosition, pageWidth - margin, yPosition);
        yPosition += 10;
        doc.setTextColor(colors.warning[0], colors.warning[1], colors.warning[2]);
        doc.setFontSize(12);
        doc.setFont('helvetica', 'bold');
        doc.text('Ready to Start Your Journey?', margin, yPosition);
        yPosition += 8;
        doc.setTextColor(colors.text[0], colors.text[1], colors.text[2]);
        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        doc.text('Download the full roadmap PDF for detailed guidance and resources.', margin, yPosition);
        yPosition += 6;
        doc.text('Begin with your first priority skill and track your progress consistently.', margin, yPosition);
        // Simple footer
        doc.setDrawColor(colors.mediumGray[0], colors.mediumGray[1], colors.mediumGray[2]);
        doc.setLineWidth(0.5);
        doc.line(margin, pageHeight - 25, pageWidth - margin, pageHeight - 25);
        doc.setFontSize(8);
        doc.setTextColor(colors.mediumGray[0], colors.mediumGray[1], colors.mediumGray[2]);
        doc.text('AI Career Advisor | Professional Development Platform', margin, pageHeight - 15);
        doc.save(fileName);
        return true;
    } catch (error) {
        console.error('Error generating summary PDF:', error);
        throw new Error('Failed to generate summary PDF. Please try again.');
    }
};
}}),
"[project]/app/CareerGuidance/ResponseDisplay.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ResponseDisplay)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CareerGuidance$2f$pdfGenerator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/CareerGuidance/pdfGenerator.js [app-ssr] (ecmascript)"); // Adjust path as needed
"use client";
;
;
;
function ResponseDisplay({ response = "Sample response content...", responseRef }) {
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDownloading, setIsDownloading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [downloadError, setDownloadError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [downloadSuccess, setDownloadSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [expandedSections, setExpandedSections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const handleCopy = async ()=>{
        try {
            await navigator.clipboard.writeText(response);
            setCopied(true);
            setTimeout(()=>setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };
    const handleShare = async ()=>{
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'My Career Roadmap',
                    text: response
                });
            } catch (err) {
                console.error('Error sharing: ', err);
            }
        } else {
            handleCopy();
        }
    };
    const handleDownloadPDF = async (type = 'full')=>{
        setIsDownloading(true);
        setDownloadError('');
        setDownloadSuccess('');
        try {
            const sections = parseResponse(response);
            if (type === 'summary') {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CareerGuidance$2f$pdfGenerator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["downloadQuickSummaryPDF"])(sections, 'Career_Roadmap_Summary.pdf');
                setDownloadSuccess('Summary PDF downloaded successfully!');
            } else {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CareerGuidance$2f$pdfGenerator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["downloadRoadmapPDF"])(sections, 'Career_Roadmap_Complete.pdf');
                setDownloadSuccess('Complete roadmap PDF downloaded successfully!');
            }
            setTimeout(()=>setDownloadSuccess(''), 3000);
        } catch (error) {
            console.error('PDF download error:', error);
            setDownloadError('Failed to generate PDF. Please try again.');
            setTimeout(()=>setDownloadError(''), 5000);
        } finally{
            setIsDownloading(false);
        }
    };
    const toggleSection = (sectionId)=>{
        setExpandedSections((prev)=>({
                ...prev,
                [sectionId]: !prev[sectionId]
            }));
    };
    // Enhanced parsing with better section detection
    const parseResponse = (text)=>{
        if (!text || typeof text !== 'string') {
            return {
                context: 'This is your assumed context and profile analysis...',
                skillGap: 'Skill gap analysis will appear here...',
                roadmap: 'Your 0-12 month strategic plan...',
                techStack: 'Recommended technology stack for 2025...',
                resources: 'Curated learning resources and materials...',
                projects: 'Real projects to build for your portfolio...',
                career: 'Career progression path and salary insights...',
                mentorship: 'Bonus mentorship tips and guidance...'
            };
        }
        const sections = {
            context: '',
            skillGap: '',
            roadmap: '',
            techStack: '',
            resources: '',
            projects: '',
            career: '',
            mentorship: ''
        };
        const lines = text.split('\n');
        let currentSection = '';
        let content = [];
        // Enhanced section detection patterns
        const sectionPatterns = {
            context: /(?:assumed.*context|current.*profile|profile.*analysis)/i,
            skillGap: /(?:skill.*gap|gap.*analysis|positioning.*analysis)/i,
            roadmap: /(?:strategic.*plan|month.*plan|roadmap|timeline)/i,
            techStack: /(?:tech.*stack|technology.*stack|tools.*frameworks)/i,
            resources: /(?:learning.*resources|curated.*resources|resources)/i,
            projects: /(?:real.*projects|portfolio.*projects|proof.*work)/i,
            career: /(?:career.*track|salary|progression|hiring)/i,
            mentorship: /(?:bonus.*mentorship|mentorship|tips|guidance)/i
        };
        lines.forEach((line)=>{
            const trimmedLine = line.trim();
            if (!trimmedLine) return;
            // Check for section headers
            let foundSection = false;
            for (const [key, pattern] of Object.entries(sectionPatterns)){
                if (pattern.test(trimmedLine) && (trimmedLine.includes('#') || trimmedLine.includes('**') || trimmedLine.match(/^\d+\./))) {
                    if (currentSection && content.length > 0) {
                        sections[currentSection] = content.join('\n');
                    }
                    currentSection = key;
                    content = [];
                    foundSection = true;
                    break;
                }
            }
            if (!foundSection && currentSection) {
                content.push(trimmedLine);
            }
        });
        // Add the last section
        if (currentSection && content.length > 0) {
            sections[currentSection] = content.join('\n');
        }
        return sections;
    };
    const sections = parseResponse(response);
    const roadmapSteps = [
        {
            id: 'context',
            number: '0',
            title: 'Assumed Context',
            icon: '🧩',
            description: 'Current profile analysis and inferred goals',
            content: sections.context,
            color: 'from-blue-500 to-blue-600'
        },
        {
            id: 'skillGap',
            number: '1',
            title: 'Skill Gap Analysis',
            icon: '🔍',
            description: 'Skills assessment and market positioning',
            content: sections.skillGap,
            color: 'from-purple-500 to-purple-600'
        },
        {
            id: 'roadmap',
            number: '2',
            title: 'Strategic 0-12 Month Plan',
            icon: '📅',
            description: 'Timeline and milestones for your journey',
            content: sections.roadmap,
            color: 'from-green-500 to-green-600'
        },
        {
            id: 'techStack',
            number: '3',
            title: 'Tech Stack 2025',
            icon: '🧰',
            description: 'Modern tools and frameworks to master',
            content: sections.techStack,
            color: 'from-orange-500 to-orange-600'
        },
        {
            id: 'resources',
            number: '4',
            title: 'Curated Resources',
            icon: '📚',
            description: 'Best learning materials and courses',
            content: sections.resources,
            color: 'from-indigo-500 to-indigo-600'
        },
        {
            id: 'projects',
            number: '5',
            title: 'Portfolio Projects',
            icon: '💼',
            description: 'Real projects to showcase your skills',
            content: sections.projects,
            color: 'from-teal-500 to-teal-600'
        },
        {
            id: 'career',
            number: '6',
            title: 'Career Track & Salary',
            icon: '🚀',
            description: 'Job market insights and earning potential',
            content: sections.career,
            color: 'from-pink-500 to-pink-600'
        },
        {
            id: 'mentorship',
            number: '7',
            title: 'Bonus Mentorship',
            icon: '🧠',
            description: 'Expert tips and common pitfalls',
            content: sections.mentorship,
            color: 'from-red-500 to-red-600'
        }
    ];
    const formatContent = (content)=>{
        if (!content || typeof content !== 'string') {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "py-4 sm:py-6 text-gray-500 italic text-sm sm:text-base text-center",
                children: "Content will be generated based on your career goals and current skills."
            }, void 0, false, {
                fileName: "[project]/app/CareerGuidance/ResponseDisplay.jsx",
                lineNumber: 223,
                columnNumber: 9
            }, this);
        }
        const lines = content.split('\n').filter((line)=>line.trim());
        return lines.map((line, index)=>{
            const trimmed = line.trim();
            if (!trimmed) return null;
            // Bullet points - mobile-friendly spacing
            if (trimmed.match(/^[-•*→▪]\s/)) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start space-x-2 sm:space-x-3 mb-2 sm:mb-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 sm:mt-3 flex-shrink-0"
                        }, void 0, false, {
                            fileName: "[project]/app/CareerGuidance/ResponseDisplay.jsx",
                            lineNumber: 239,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm sm:text-base text-gray-700 leading-relaxed break-words",
                            children: trimmed.replace(/^[-•*→▪]\s*/, '')
                        }, void 0, false, {
                            fileName: "[project]/app/CareerGuidance/ResponseDisplay.jsx",
                            lineNumber: 240,
                            columnNumber: 13
                        }, this)
                    ]
                }, index, true, {
                    fileName: "[project]/app/CareerGuidance/ResponseDisplay.jsx",
                    lineNumber: 238,
                    columnNumber: 11
                }, this);
            }
            // Sub-headers - responsive typography
            if (trimmed.endsWith(':') || trimmed.match(/^\*\*.*\*\*$/)) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 sm:mt-6 mb-2 sm:mb-3",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "text-base sm:text-lg lg:text-xl font-semibold text-gray-800 break-words",
                        children: trimmed.replace(/\*\*/g, '').replace(/:$/, '')
                    }, void 0, false, {
                        fileName: "[project]/app/CareerGuidance/ResponseDisplay.jsx",
                        lineNumber: 251,
                        columnNumber: 13
                    }, this)
                }, index, false, {
                    fileName: "[project]/app/CareerGuidance/ResponseDisplay.jsx",
                    lineNumber: 250,
                    columnNumber: 11
                }, this);
            }
            // Timeline milestones - mobile-optimized highlighting
            if (trimmed.match(/\d+\s*(month|Month|weeks?|days?)/i)) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-blue-50 border-l-4 border-blue-400 p-3 sm:p-4 mb-3 sm:mb-4 rounded-r-lg",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm sm:text-base text-gray-700 leading-relaxed font-medium break-words",
                        children: trimmed
                    }, void 0, false, {
                        fileName: "[project]/app/CareerGuidance/ResponseDisplay.jsx",
                        lineNumber: 262,
                        columnNumber: 13
                    }, this)
                }, index, false, {
                    fileName: "[project]/app/CareerGuidance/ResponseDisplay.jsx",
                    lineNumber: 261,
                    columnNumber: 11
                }, this);
            }
            // Tables - mobile-friendly formatting
            if (trimmed.includes('|') && trimmed.split('|').length > 2) {
                const cells = trimmed.split('|').map((cell)=>cell.trim()).filter(Boolean);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "overflow-x-auto mb-4 sm:mb-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-full bg-gray-50 rounded-lg p-3 sm:p-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 text-xs sm:text-sm",
                            children: cells.map((cell, cellIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white p-2 sm:p-3 rounded border break-words",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium text-gray-700",
                                        children: cell
                                    }, void 0, false, {
                                        fileName: "[project]/app/CareerGuidance/ResponseDisplay.jsx",
                                        lineNumber: 278,
                                        columnNumber: 21
                                    }, this)
                                }, cellIndex, false, {
                                    fileName: "[project]/app/CareerGuidance/ResponseDisplay.jsx",
                                    lineNumber: 277,
                                    columnNumber: 19
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/CareerGuidance/ResponseDisplay.jsx",
                            lineNumber: 275,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/CareerGuidance/ResponseDisplay.jsx",
                        lineNumber: 274,
                        columnNumber: 13
                    }, this)
                }, index, false, {
                    fileName: "[project]/app/CareerGuidance/ResponseDisplay.jsx",
                    lineNumber: 273,
                    columnNumber: 11
                }, this);
            }
            // Links - touch-friendly
            if (trimmed.includes('http')) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-3 sm:mb-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm sm:text-base text-gray-700 leading-relaxed break-all",
                        children: trimmed.split(' ').map((word, wordIndex)=>{
                            if (word.startsWith('http')) {
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: word,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "text-blue-600 hover:text-blue-800 underline break-all inline-block min-h-[44px] sm:min-h-auto py-1 sm:py-0",
                                    children: word
                                }, wordIndex, false, {
                                    fileName: "[project]/app/CareerGuidance/ResponseDisplay.jsx",
                                    lineNumber: 295,
                                    columnNumber: 21
                                }, this);
                            }
                            return word + ' ';
                        })
                    }, void 0, false, {
                        fileName: "[project]/app/CareerGuidance/ResponseDisplay.jsx",
                        lineNumber: 291,
                        columnNumber: 13
                    }, this)
                }, index, false, {
                    fileName: "[project]/app/CareerGuidance/ResponseDisplay.jsx",
                    lineNumber: 290,
                    columnNumber: 11
                }, this);
            }
            // Regular paragraphs - responsive and readable
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4 break-words",
                children: trimmed
            }, index, false, {
                fileName: "[project]/app/CareerGuidance/ResponseDisplay.jsx",
                lineNumber: 315,
                columnNumber: 9
            }, this);
        }).filter(Boolean);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: responseRef,
        className: "w-full max-w-7xl mx-auto bg-white px-4 sm:px-6 lg:px-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-b border-gray-200 pb-4 sm:pb-6 mb-6 sm:mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-4 sm:gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center sm:text-left",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2",
                                        children: "Your Career Roadmap"
                                    }, void 0, false, {
                                        fileName: "[project]/app/CareerGuidance/ResponseDisplay.jsx",
                                        lineNumber: 328,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm sm:text-base text-gray-600",
                                        children: "Personalized guidance for your professional journey"
                                    }, void 0, false, {
                                        fileName: "[project]/app/CareerGuidance/ResponseDisplay.jsx",
                                        lineNumber: 331,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/CareerGuidance/ResponseDisplay.jsx",
                                lineNumber: 327,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 lg:flex lg:flex-wrap lg:justify-center xl:justify-start",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleDownloadPDF('full'),
                                        disabled: isDownloading,
                                        className: "flex items-center justify-center space-x-1 sm:space-x-2 px-2 sm:px-4 py-2 sm:py-2.5 bg-blue-600 text-white hover:bg-blue-700 disabled:bg-blue-400 rounded-lg transition-colors text-xs sm:text-sm font-medium min-h-[44px] touch-manipulation",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm sm:text-base",
                                                children: "📄"
                                            }, void 0, false, {
                                                fileName: "[project]/app/CareerGuidance/ResponseDisplay.jsx",
                                                lineNumber: 344,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "hidden sm:inline",
                                                children: isDownloading ? 'Generating...' : 'Download PDF'
                                            }, void 0, false, {
                                                fileName: "[project]/app/CareerGuidance/ResponseDisplay.jsx",
                                                lineNumber: 345,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "sm:hidden",
                                                children: "PDF"
                                            }, void 0, false, {
                                                fileName: "[project]/app/CareerGuidance/ResponseDisplay.jsx",
                                                lineNumber: 346,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/CareerGuidance/ResponseDisplay.jsx",
                                        lineNumber: 339,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleDownloadPDF('summary'),
                                        disabled: isDownloading,
                                        className: "flex items-center justify-center space-x-1 sm:space-x-2 px-2 sm:px-4 py-2 sm:py-2.5 bg-green-600 text-white hover:bg-green-700 disabled:bg-green-400 rounded-lg transition-colors text-xs sm:text-sm font-medium min-h-[44px] touch-manipulation",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm sm:text-base",
                                                children: "📋"
                                            }, void 0, false, {
                                                fileName: "[project]/app/CareerGuidance/ResponseDisplay.jsx",
                                                lineNumber: 354,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "hidden sm:inline",
                                                children: isDownloading ? 'Generating...' : 'Summary PDF'
                                            }, void 0, false, {
                                                fileName: "[project]/app/CareerGuidance/ResponseDisplay.jsx",
                                                lineNumber: 355,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "sm:hidden",
                                                children: "Summary"
                                            }, void 0, false, {
                                                fileName: "[project]/app/CareerGuidance/ResponseDisplay.jsx",
                                                lineNumber: 356,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/CareerGuidance/ResponseDisplay.jsx",
                                        lineNumber: 349,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleCopy,
                                        className: "flex items-center justify-center space-x-1 sm:space-x-2 px-2 sm:px-3 py-2 sm:py-2.5 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors text-xs sm:text-sm min-h-[44px] touch-manipulation",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm sm:text-base",
                                                children: copied ? '✓' : '📋'
                                            }, void 0, false, {
                                                fileName: "[project]/app/CareerGuidance/ResponseDisplay.jsx",
                                                lineNumber: 363,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: copied ? 'Copied!' : 'Copy'
                                            }, void 0, false, {
                                                fileName: "[project]/app/CareerGuidance/ResponseDisplay.jsx",
                                                lineNumber: 364,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/CareerGuidance/ResponseDisplay.jsx",
                                        lineNumber: 359,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleShare,
                                        className: "flex items-center justify-center space-x-1 sm:space-x-2 px-2 sm:px-3 py-2 sm:py-2.5 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors text-xs sm:text-sm min-h-[44px] touch-manipulation",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm sm:text-base",
                                                children: "🔗"
                                            }, void 0, false, {
                                                fileName: "[project]/app/CareerGuidance/ResponseDisplay.jsx",
                                                lineNumber: 371,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Share"
                                            }, void 0, false, {
                                                fileName: "[project]/app/CareerGuidance/ResponseDisplay.jsx",
                                                lineNumber: 372,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/CareerGuidance/ResponseDisplay.jsx",
                                        lineNumber: 367,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/CareerGuidance/ResponseDisplay.jsx",
                                lineNumber: 337,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/CareerGuidance/ResponseDisplay.jsx",
                        lineNumber: 326,
                        columnNumber: 9
                    }, this),
                    downloadSuccess && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 p-3 bg-green-50 text-green-800 rounded-lg text-xs sm:text-sm border border-green-200 flex items-center space-x-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-green-600 flex-shrink-0",
                                children: "✓"
                            }, void 0, false, {
                                fileName: "[project]/app/CareerGuidance/ResponseDisplay.jsx",
                                lineNumber: 380,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "break-words",
                                children: downloadSuccess
                            }, void 0, false, {
                                fileName: "[project]/app/CareerGuidance/ResponseDisplay.jsx",
                                lineNumber: 381,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/CareerGuidance/ResponseDisplay.jsx",
                        lineNumber: 379,
                        columnNumber: 11
                    }, this),
                    downloadError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 p-3 bg-red-50 text-red-800 rounded-lg text-xs sm:text-sm border border-red-200 flex items-center space-x-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-red-600 flex-shrink-0",
                                children: "⚠"
                            }, void 0, false, {
                                fileName: "[project]/app/CareerGuidance/ResponseDisplay.jsx",
                                lineNumber: 387,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "break-words",
                                children: downloadError
                            }, void 0, false, {
                                fileName: "[project]/app/CareerGuidance/ResponseDisplay.jsx",
                                lineNumber: 388,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/CareerGuidance/ResponseDisplay.jsx",
                        lineNumber: 386,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/CareerGuidance/ResponseDisplay.jsx",
                lineNumber: 325,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4 sm:space-y-6",
                children: roadmapSteps.map((step, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            index < roadmapSteps.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden sm:block absolute left-6 lg:left-8 top-16 lg:top-20 w-0.5 h-6 lg:h-8 bg-gray-200"
                            }, void 0, false, {
                                fileName: "[project]/app/CareerGuidance/ResponseDisplay.jsx",
                                lineNumber: 399,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white border border-gray-200 rounded-xl sm:rounded-2xl hover:shadow-lg transition-all duration-200 overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start sm:items-center justify-between p-4 sm:p-6 lg:p-8 cursor-pointer hover:bg-gray-50/50 transition-colors touch-manipulation",
                                        onClick: ()=>toggleSection(step.id),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start sm:items-center space-x-3 sm:space-x-4 flex-1 min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-r ${step.color} rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0`,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-white font-bold text-sm sm:text-base lg:text-lg",
                                                            children: step.number
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/CareerGuidance/ResponseDisplay.jsx",
                                                            lineNumber: 410,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/CareerGuidance/ResponseDisplay.jsx",
                                                        lineNumber: 409,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1 min-w-0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                className: "text-base sm:text-lg lg:text-xl xl:text-2xl font-semibold text-gray-900 mb-1 sm:mb-2 leading-tight",
                                                                children: step.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/CareerGuidance/ResponseDisplay.jsx",
                                                                lineNumber: 413,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs sm:text-sm lg:text-base text-gray-600 line-clamp-2 sm:line-clamp-none",
                                                                children: step.description
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/CareerGuidance/ResponseDisplay.jsx",
                                                                lineNumber: 416,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/CareerGuidance/ResponseDisplay.jsx",
                                                        lineNumber: 412,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/CareerGuidance/ResponseDisplay.jsx",
                                                lineNumber: 408,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center space-x-2 sm:space-x-3 flex-shrink-0 ml-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-lg sm:text-xl lg:text-2xl",
                                                        children: step.icon
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/CareerGuidance/ResponseDisplay.jsx",
                                                        lineNumber: 423,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "text-gray-400 hover:text-gray-600 transition-colors p-1 touch-manipulation",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            className: `w-4 h-4 sm:w-5 sm:h-5 transform transition-transform ${expandedSections[step.id] ? 'rotate-180' : ''}`,
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            viewBox: "0 0 24 24",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M19 9l-7 7-7-7"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/CareerGuidance/ResponseDisplay.jsx",
                                                                lineNumber: 431,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/CareerGuidance/ResponseDisplay.jsx",
                                                            lineNumber: 425,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/CareerGuidance/ResponseDisplay.jsx",
                                                        lineNumber: 424,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/CareerGuidance/ResponseDisplay.jsx",
                                                lineNumber: 422,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/CareerGuidance/ResponseDisplay.jsx",
                                        lineNumber: 404,
                                        columnNumber: 15
                                    }, this),
                                    expandedSections[step.id] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border-t border-gray-100",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-4 sm:p-6 lg:p-8",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "prose prose-sm sm:prose lg:prose-lg max-w-none",
                                                children: formatContent(step.content)
                                            }, void 0, false, {
                                                fileName: "[project]/app/CareerGuidance/ResponseDisplay.jsx",
                                                lineNumber: 441,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/CareerGuidance/ResponseDisplay.jsx",
                                            lineNumber: 440,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/CareerGuidance/ResponseDisplay.jsx",
                                        lineNumber: 439,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/CareerGuidance/ResponseDisplay.jsx",
                                lineNumber: 402,
                                columnNumber: 13
                            }, this)
                        ]
                    }, step.id, true, {
                        fileName: "[project]/app/CareerGuidance/ResponseDisplay.jsx",
                        lineNumber: 396,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/CareerGuidance/ResponseDisplay.jsx",
                lineNumber: 394,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-gray-500",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-center sm:text-left",
                            children: "Generated roadmap based on your career goals and current skills"
                        }, void 0, false, {
                            fileName: "[project]/app/CareerGuidance/ResponseDisplay.jsx",
                            lineNumber: 455,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-4 sm:space-x-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex items-center space-x-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "📊"
                                        }, void 0, false, {
                                            fileName: "[project]/app/CareerGuidance/ResponseDisplay.jsx",
                                            lineNumber: 460,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Analysis Complete"
                                        }, void 0, false, {
                                            fileName: "[project]/app/CareerGuidance/ResponseDisplay.jsx",
                                            lineNumber: 461,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/CareerGuidance/ResponseDisplay.jsx",
                                    lineNumber: 459,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex items-center space-x-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "🎯"
                                        }, void 0, false, {
                                            fileName: "[project]/app/CareerGuidance/ResponseDisplay.jsx",
                                            lineNumber: 464,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Personalized"
                                        }, void 0, false, {
                                            fileName: "[project]/app/CareerGuidance/ResponseDisplay.jsx",
                                            lineNumber: 465,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/CareerGuidance/ResponseDisplay.jsx",
                                    lineNumber: 463,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/CareerGuidance/ResponseDisplay.jsx",
                            lineNumber: 458,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/CareerGuidance/ResponseDisplay.jsx",
                    lineNumber: 454,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/CareerGuidance/ResponseDisplay.jsx",
                lineNumber: 453,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/CareerGuidance/ResponseDisplay.jsx",
        lineNumber: 323,
        columnNumber: 5
    }, this);
}
}}),
"[project]/app/CareerGuidance/chatbox.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// /components/Chatbox.jsx (Fully Responsive Enhanced Version)
__turbopack_context__.s({
    "default": (()=>Chatbox)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CareerGuidance$2f$ResponseDisplay$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/CareerGuidance/ResponseDisplay.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)"); // Importing useRouter
"use client";
;
;
;
;
function Chatbox() {
    const [prompt, setPrompt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [response, setResponse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [usageCount, setUsageCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [showUsageWarning, setShowUsageWarning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const textareaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const responseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])(); // Initializing useRouter
    const MAX_USAGE = 3;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Load usage count from session storage
        const stored = sessionStorage?.getItem('career_usage_count');
        if (stored) {
            setUsageCount(parseInt(stored, 10));
        }
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Save usage count to session storage
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        }
    }, [
        usageCount
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (response && responseRef.current) {
            responseRef.current.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }, [
        response
    ]);
    const handleSend = async ()=>{
        if (!prompt.trim()) {
            setError('Please enter your career question or current skills');
            return;
        }
        if (usageCount >= MAX_USAGE) {
            setError('You have reached the maximum usage limit of 3 queries. Please refresh the page to reset.');
            return;
        }
        setLoading(true);
        setResponse('');
        setError('');
        setShowUsageWarning(false);
        try {
            console.log('Sending request to API...');
            const res = await fetch('/api/career', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    prompt: prompt.trim()
                })
            });
            console.log('Response status:', res.status);
            const contentType = res.headers.get('content-type');
            if (!contentType || !contentType.includes('application/json')) {
                const textResponse = await res.text();
                console.error('Non-JSON response:', textResponse);
                if (res.status === 404) {
                    throw new Error('API route not found. Make sure /app/api/career/route.js exists');
                }
                throw new Error(`Server returned HTML instead of JSON. Status: ${res.status}`);
            }
            const data = await res.json();
            if (!res.ok) {
                throw new Error(data.error || `HTTP error! status: ${res.status}`);
            }
            if (data.result) {
                // Encode the response data and redirect to results page
                const encodedResponse = encodeURIComponent(data.result);
                const encodedPrompt = encodeURIComponent(prompt);
                router.push(`/CareerGuidance/results?data=${encodedResponse}&prompt=${encodedPrompt}`);
                setUsageCount((prev)=>prev + 1);
                setPrompt(''); // Clear input after successful response
                // Show usage warning when user has 1 use left
                if (usageCount + 1 >= MAX_USAGE - 1) {
                    setShowUsageWarning(true);
                }
            } else {
                setError('No response received from AI');
            }
        } catch (err) {
            console.error('Error details:', err);
            setError(err.message || 'Error contacting AI backend. Please try again.');
        }
        setLoading(false);
    };
    const handleKeyPress = (e)=>{
        if (e.key === 'Enter' && e.ctrlKey) {
            e.preventDefault();
            handleSend();
        }
    };
    const resetUsage = ()=>{
        setUsageCount(0);
        setError('');
        setResponse('');
        setShowUsageWarning(false);
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        }
    };
    const autoResize = ()=>{
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = 'auto';
            textarea.style.height = Math.min(textarea.scrollHeight, 200) + 'px';
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 overflow-hidden pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                        lineNumber: 144,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -bottom-20 -left-20 sm:-bottom-40 sm:-left-40 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-br from-indigo-400/20 to-cyan-600/20 rounded-full blur-3xl animate-pulse animation-delay-2000"
                    }, void 0, false, {
                        fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                        lineNumber: 145,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                lineNumber: 143,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative bg-white/90 backdrop-blur-xl border-b border-white/20 sticky top-0 z-50 shadow-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-3 sm:space-x-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-5 h-5 sm:w-7 sm:h-7 text-white",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2,
                                                        d: "M13 10V3L4 14h7v7l9-11h-7z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                                                        lineNumber: 157,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                                                    lineNumber: 156,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                                                lineNumber: 155,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-3 h-3 sm:w-4 sm:h-4 bg-green-400 rounded-full border-2 border-white animate-pulse"
                                            }, void 0, false, {
                                                fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                                                lineNumber: 160,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                                        lineNumber: 154,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent",
                                                children: "Career AI Coach"
                                            }, void 0, false, {
                                                fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                                                lineNumber: 163,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs sm:text-sm text-slate-600 font-medium",
                                                children: "Your personalized career guidance companion"
                                            }, void 0, false, {
                                                fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                                                lineNumber: 166,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                                        lineNumber: 162,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                                lineNumber: 153,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between sm:justify-end space-x-4 sm:space-x-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center space-x-2 sm:space-x-3 bg-white/60 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 border border-white/30",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex space-x-1 sm:space-x-1.5",
                                                children: [
                                                    ...Array(MAX_USAGE)
                                                ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ${i < usageCount ? 'bg-gradient-to-r from-blue-500 to-purple-500 shadow-sm' : 'bg-slate-200'}`
                                                    }, i, false, {
                                                        fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                                                        lineNumber: 175,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                                                lineNumber: 173,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs sm:text-sm font-semibold text-slate-700",
                                                children: [
                                                    usageCount,
                                                    "/",
                                                    MAX_USAGE
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                                                lineNumber: 185,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                                        lineNumber: 172,
                                        columnNumber: 15
                                    }, this),
                                    usageCount >= MAX_USAGE && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: resetUsage,
                                        className: "px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105",
                                        children: "Reset"
                                    }, void 0, false, {
                                        fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                                        lineNumber: 191,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                                lineNumber: 171,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                        lineNumber: 151,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                    lineNumber: 150,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                lineNumber: 149,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10",
                children: [
                    showUsageWarning && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-4 sm:p-5 shadow-sm",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start space-x-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center flex-shrink-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-4 h-4 text-white",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"
                                        }, void 0, false, {
                                            fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                                            lineNumber: 210,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                                        lineNumber: 209,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                                    lineNumber: 208,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-base font-semibold text-amber-800 mb-1",
                                            children: "Usage Limit Notice"
                                        }, void 0, false, {
                                            fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                                            lineNumber: 214,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-amber-700 leading-relaxed",
                                            children: usageCount >= MAX_USAGE ? 'You have reached the maximum usage limit. Click Reset to continue exploring your career path.' : `You have ${MAX_USAGE - usageCount} query remaining. Make it count!`
                                        }, void 0, false, {
                                            fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                                            lineNumber: 215,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                                    lineNumber: 213,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                            lineNumber: 207,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                        lineNumber: 206,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center space-x-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-5 h-5 text-white",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                                                    lineNumber: 233,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                                                lineNumber: 232,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                                            lineNumber: 231,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-lg font-semibold text-white",
                                                    children: "Career AI Assistant"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                                                    lineNumber: 237,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-blue-100 text-sm",
                                                    children: "Get personalized career guidance tailored to your goals"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                                                    lineNumber: 238,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                                            lineNumber: 236,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                                    lineNumber: 230,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                                lineNumber: 229,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 sm:p-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-semibold text-gray-800 mb-2",
                                                children: "What's your career goal?"
                                            }, void 0, false, {
                                                fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                                                lineNumber: 246,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-600 text-sm leading-relaxed",
                                                children: "Share your current skills, experience level, and where you want to go. The more specific you are, the better guidance you'll receive."
                                            }, void 0, false, {
                                                fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                                                lineNumber: 249,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                                        lineNumber: 245,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                ref: textareaRef,
                                                value: prompt,
                                                onChange: (e)=>{
                                                    setPrompt(e.target.value);
                                                    autoResize();
                                                },
                                                onKeyPress: handleKeyPress,
                                                placeholder: "Example: I'm a junior developer with 2 years of JavaScript and React experience. I want to become a senior full-stack developer specializing in modern web technologies and leading development teams...",
                                                className: "w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 resize-none min-h-[120px] bg-gray-50 placeholder-gray-500 text-gray-700 text-base leading-relaxed",
                                                style: {
                                                    height: 'auto'
                                                },
                                                disabled: usageCount >= MAX_USAGE
                                            }, void 0, false, {
                                                fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                                                lineNumber: 256,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute bottom-3 right-3 flex items-center space-x-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "hidden sm:block bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-gray-500 border border-gray-200",
                                                        children: "Ctrl+Enter to send"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                                                        lineNumber: 271,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-medium text-gray-500 border border-gray-200",
                                                        children: [
                                                            prompt.length,
                                                            "/2000"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                                                        lineNumber: 274,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                                                lineNumber: 270,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                                        lineNumber: 255,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleSend,
                                            disabled: loading || !prompt.trim() || usageCount >= MAX_USAGE,
                                            className: "w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-4 rounded-xl hover:from-blue-700 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-semibold text-base shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:transform-none",
                                            children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex items-center justify-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "animate-spin -ml-1 mr-3 h-5 w-5 text-white",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        fill: "none",
                                                        viewBox: "0 0 24 24",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                className: "opacity-25",
                                                                cx: "12",
                                                                cy: "12",
                                                                r: "10",
                                                                stroke: "currentColor",
                                                                strokeWidth: "4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                                                                lineNumber: 290,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                className: "opacity-75",
                                                                fill: "currentColor",
                                                                d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                                                                lineNumber: 291,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                                                        lineNumber: 289,
                                                        columnNumber: 21
                                                    }, this),
                                                    "Analyzing your path..."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                                                lineNumber: 288,
                                                columnNumber: 19
                                            }, this) : usageCount >= MAX_USAGE ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "🚫 Usage Limit Reached"
                                            }, void 0, false, {
                                                fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                                                lineNumber: 296,
                                                columnNumber: 19
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "🚀 Generate My Career Roadmap"
                                            }, void 0, false, {
                                                fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                                                lineNumber: 298,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                                            lineNumber: 282,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                                        lineNumber: 281,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                                lineNumber: 244,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                        lineNumber: 227,
                        columnNumber: 9
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 bg-red-50 border border-red-200 rounded-xl p-4 sm:p-5 shadow-sm",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start space-x-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center flex-shrink-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-4 h-4 text-white",
                                        viewBox: "0 0 20 20",
                                        fill: "currentColor",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            fillRule: "evenodd",
                                            d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
                                            clipRule: "evenodd"
                                        }, void 0, false, {
                                            fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                                            lineNumber: 311,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                                        lineNumber: 310,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                                    lineNumber: 309,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-base font-semibold text-red-800 mb-1",
                                            children: "Something went wrong"
                                        }, void 0, false, {
                                            fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                                            lineNumber: 315,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-red-700 leading-relaxed",
                                            children: error
                                        }, void 0, false, {
                                            fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                                            lineNumber: 316,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                                    lineNumber: 314,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                            lineNumber: 308,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                        lineNumber: 307,
                        columnNumber: 11
                    }, this),
                    loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 w-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center justify-center space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"
                                    }, void 0, false, {
                                        fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                                        lineNumber: 327,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-lg font-medium text-gray-800 mb-2",
                                                children: "Analyzing your career path..."
                                            }, void 0, false, {
                                                fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                                                lineNumber: 329,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-600",
                                                children: "Our AI is crafting a personalized roadmap just for you"
                                            }, void 0, false, {
                                                fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                                                lineNumber: 332,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                                        lineNumber: 328,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                                lineNumber: 326,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                            lineNumber: 325,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                        lineNumber: 324,
                        columnNumber: 11
                    }, this),
                    !loading && !error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-xl shadow-sm border border-gray-100 p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-semibold text-gray-800 mb-4",
                                    children: "Need inspiration? Try these examples:"
                                }, void 0, false, {
                                    fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                                    lineNumber: 345,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
                                    children: [
                                        "I want to become a full-stack developer with React and Node.js",
                                        "Help me transition from marketing to data science",
                                        "I'm a beginner, guide me to become an AI/ML engineer",
                                        "I know Python basics, what's next for backend development?"
                                    ].map((example, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                setPrompt(example);
                                                autoResize();
                                            },
                                            className: "text-left p-3 bg-gray-50 hover:bg-blue-50 rounded-lg border border-gray-200 hover:border-blue-200 transition-all duration-200 text-sm text-gray-700 hover:text-blue-700",
                                            disabled: loading || usageCount >= MAX_USAGE,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium",
                                                    children: "💡 "
                                                }, void 0, false, {
                                                    fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                                                    lineNumber: 364,
                                                    columnNumber: 21
                                                }, this),
                                                example
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                                            lineNumber: 355,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                                    lineNumber: 348,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                            lineNumber: 344,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                        lineNumber: 343,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-8 text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-semibold text-gray-800 mb-4",
                                    children: "🌟 What makes our career guidance special?"
                                }, void 0, false, {
                                    fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                                    lineNumber: 376,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col items-center space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-lg",
                                                        children: "🧠"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                                                        lineNumber: 382,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                                                    lineNumber: 381,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium text-gray-700",
                                                    children: "AI-Powered Analysis"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                                                    lineNumber: 384,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                                            lineNumber: 380,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col items-center space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-lg",
                                                        children: "🎯"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                                                        lineNumber: 388,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                                                    lineNumber: 387,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium text-gray-700",
                                                    children: "Personalized Plans"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                                                    lineNumber: 390,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                                            lineNumber: 386,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col items-center space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-lg",
                                                        children: "📚"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                                                        lineNumber: 394,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                                                    lineNumber: 393,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium text-gray-700",
                                                    children: "Learning Resources"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                                                    lineNumber: 396,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                                            lineNumber: 392,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col items-center space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-lg",
                                                        children: "🚀"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                                                        lineNumber: 400,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                                                    lineNumber: 399,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium text-gray-700",
                                                    children: "Career Growth"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                                                    lineNumber: 402,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                                            lineNumber: 398,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                                    lineNumber: 379,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                            lineNumber: 375,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                        lineNumber: 374,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/CareerGuidance/chatbox.jsx",
                lineNumber: 203,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/CareerGuidance/chatbox.jsx",
        lineNumber: 141,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__238c036e._.js.map