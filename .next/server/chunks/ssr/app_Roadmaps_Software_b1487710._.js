module.exports = {

"[project]/app/Roadmaps/Software/downloadPdf.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// PDF download utility functions
__turbopack_context__.s({
    "handleDownloadPDF": (()=>handleDownloadPDF)
});
let html2canvas;
let jsPDF;
// Dynamically import libraries only on client side
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
}
// Create styled content for PDF generation
const createDownloadContent = (roadmapData, darkMode)=>{
    const downloadDiv = document.createElement("div");
    downloadDiv.className = "roadmap-download-content";
    // IMPROVED STYLES for better PDF output and readability
    downloadDiv.style.padding = "40px";
    downloadDiv.style.color = "#2c3e50";
    downloadDiv.style.backgroundColor = "white";
    downloadDiv.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
    downloadDiv.style.fontSize = "14px";
    downloadDiv.style.lineHeight = "1.6";
    downloadDiv.style.maxWidth = "800px";
    downloadDiv.style.margin = "0 auto";
    // Add title with better styling
    const title = document.createElement("h1");
    title.style.textAlign = "center";
    title.style.marginBottom = "30px";
    title.style.fontSize = "32px";
    title.style.fontWeight = "700";
    title.style.color = "#2c3e50";
    title.style.borderBottom = "3px solid #3498db";
    title.style.paddingBottom = "15px";
    title.textContent = "Software Engineering Roadmap";
    downloadDiv.appendChild(title);
    // Add roadmap content with improved styling
    roadmapData.forEach((section)=>{
        const sectionDiv = document.createElement("div");
        sectionDiv.style.marginBottom = "40px";
        sectionDiv.style.pageBreakInside = "avoid"; // Prevent breaking inside sections
        // Section header with better design
        const header = document.createElement("h2");
        header.style.backgroundColor = "#ecf0f1";
        header.style.padding = "15px 20px";
        header.style.borderRadius = "8px";
        header.style.borderLeft = "5px solid #3498db";
        header.style.fontSize = "20px";
        header.style.fontWeight = "600";
        header.style.color = "#2c3e50";
        header.style.marginBottom = "20px";
        header.textContent = `${section.id}. ${section.title}`;
        sectionDiv.appendChild(header);
        // Section description with better typography
        const desc = document.createElement("p");
        desc.style.marginBottom = "25px";
        desc.style.fontStyle = "italic";
        desc.style.fontSize = "15px";
        desc.style.color = "#7f8c8d";
        desc.style.lineHeight = "1.7";
        desc.style.padding = "0 10px";
        desc.textContent = section.description;
        sectionDiv.appendChild(desc);
        // What to Learn with improved styling
        const whatToLearn = document.createElement("div");
        whatToLearn.style.marginBottom = "25px";
        const whatToLearnTitle = document.createElement("h3");
        whatToLearnTitle.style.fontSize = "18px";
        whatToLearnTitle.style.fontWeight = "600";
        whatToLearnTitle.style.color = "#27ae60";
        whatToLearnTitle.style.marginBottom = "12px";
        whatToLearnTitle.style.borderBottom = "2px solid #27ae60";
        whatToLearnTitle.style.paddingBottom = "5px";
        whatToLearnTitle.textContent = "✅ What to Learn";
        whatToLearn.appendChild(whatToLearnTitle);
        const whatToLearnList = document.createElement("ul");
        whatToLearnList.style.paddingLeft = "25px";
        whatToLearnList.style.margin = "15px 0";
        section.content.whatToLearn.forEach((item)=>{
            const li = document.createElement("li");
            li.style.marginBottom = "8px";
            li.style.fontSize = "14px";
            li.style.lineHeight = "1.6";
            li.style.color = "#34495e";
            li.textContent = item;
            whatToLearnList.appendChild(li);
        });
        whatToLearn.appendChild(whatToLearnList);
        sectionDiv.appendChild(whatToLearn);
        // Best Courses with better organization
        const bestCourses = document.createElement("div");
        bestCourses.style.marginBottom = "25px";
        const bestCoursesTitle = document.createElement("h3");
        bestCoursesTitle.style.fontSize = "18px";
        bestCoursesTitle.style.fontWeight = "600";
        bestCoursesTitle.style.color = "#3498db";
        bestCoursesTitle.style.marginBottom = "12px";
        bestCoursesTitle.style.borderBottom = "2px solid #3498db";
        bestCoursesTitle.style.paddingBottom = "5px";
        bestCoursesTitle.textContent = "📚 Best Courses";
        bestCourses.appendChild(bestCoursesTitle);
        // English courses
        const englishTitle = document.createElement("h4");
        englishTitle.style.fontSize = "16px";
        englishTitle.style.fontWeight = "500";
        englishTitle.style.color = "#2c3e50";
        englishTitle.style.marginTop = "15px";
        englishTitle.style.marginBottom = "10px";
        englishTitle.textContent = "In English:";
        bestCourses.appendChild(englishTitle);
        const englishList = document.createElement("ul");
        englishList.style.paddingLeft = "25px";
        englishList.style.margin = "10px 0";
        section.content.bestCourses.english.forEach((course)=>{
            const li = document.createElement("li");
            li.style.marginBottom = "6px";
            li.style.fontSize = "13px";
            li.style.lineHeight = "1.5";
            li.style.color = "#34495e";
            li.textContent = course;
            englishList.appendChild(li);
        });
        bestCourses.appendChild(englishList);
        // Hindi courses
        const hindiTitle = document.createElement("h4");
        hindiTitle.style.fontSize = "16px";
        hindiTitle.style.fontWeight = "500";
        hindiTitle.style.color = "#2c3e50";
        hindiTitle.style.marginTop = "15px";
        hindiTitle.style.marginBottom = "10px";
        hindiTitle.textContent = "In Hindi:";
        bestCourses.appendChild(hindiTitle);
        const hindiList = document.createElement("ul");
        hindiList.style.paddingLeft = "25px";
        hindiList.style.margin = "10px 0";
        section.content.bestCourses.hindi.forEach((course)=>{
            const li = document.createElement("li");
            li.style.marginBottom = "6px";
            li.style.fontSize = "13px";
            li.style.lineHeight = "1.5";
            li.style.color = "#34495e";
            li.textContent = course;
            hindiList.appendChild(li);
        });
        bestCourses.appendChild(hindiList);
        sectionDiv.appendChild(bestCourses);
        // Tools to Use with better styling
        const tools = document.createElement("div");
        tools.style.marginBottom = "25px";
        const toolsTitle = document.createElement("h3");
        toolsTitle.style.fontSize = "18px";
        toolsTitle.style.fontWeight = "600";
        toolsTitle.style.color = "#f39c12";
        toolsTitle.style.marginBottom = "12px";
        toolsTitle.style.borderBottom = "2px solid #f39c12";
        toolsTitle.style.paddingBottom = "5px";
        toolsTitle.textContent = "🧰 Tools to Use";
        tools.appendChild(toolsTitle);
        const toolsList = document.createElement("ul");
        toolsList.style.paddingLeft = "25px";
        toolsList.style.margin = "15px 0";
        section.content.toolsToUse.forEach((tool)=>{
            const li = document.createElement("li");
            li.style.marginBottom = "8px";
            li.style.fontSize = "14px";
            li.style.lineHeight = "1.6";
            li.style.color = "#34495e";
            li.textContent = tool;
            toolsList.appendChild(li);
        });
        tools.appendChild(toolsList);
        sectionDiv.appendChild(tools);
        // Docs & Websites with better styling
        const docs = document.createElement("div");
        docs.style.marginBottom = "25px";
        const docsTitle = document.createElement("h3");
        docsTitle.style.fontSize = "18px";
        docsTitle.style.fontWeight = "600";
        docsTitle.style.color = "#e74c3c";
        docsTitle.style.marginBottom = "12px";
        docsTitle.style.borderBottom = "2px solid #e74c3c";
        docsTitle.style.paddingBottom = "5px";
        docsTitle.textContent = "📘 Docs & Websites";
        docs.appendChild(docsTitle);
        const docsList = document.createElement("ul");
        docsList.style.paddingLeft = "25px";
        docsList.style.margin = "15px 0";
        section.content.docsAndWebsites.forEach((doc)=>{
            const li = document.createElement("li");
            li.style.marginBottom = "8px";
            li.style.fontSize = "14px";
            li.style.lineHeight = "1.6";
            li.style.color = "#34495e";
            li.textContent = doc;
            docsList.appendChild(li);
        });
        docs.appendChild(docsList);
        sectionDiv.appendChild(docs);
        // Project Ideas with better styling
        const projects = document.createElement("div");
        projects.style.marginBottom = "25px";
        const projectsTitle = document.createElement("h3");
        projectsTitle.style.fontSize = "18px";
        projectsTitle.style.fontWeight = "600";
        projectsTitle.style.color = "#9b59b6";
        projectsTitle.style.marginBottom = "12px";
        projectsTitle.style.borderBottom = "2px solid #9b59b6";
        projectsTitle.style.paddingBottom = "5px";
        projectsTitle.textContent = "💡 Project Ideas";
        projects.appendChild(projectsTitle);
        const projectsList = document.createElement("ul");
        projectsList.style.paddingLeft = "25px";
        projectsList.style.margin = "15px 0";
        section.content.projectIdeas.forEach((project)=>{
            const li = document.createElement("li");
            li.style.marginBottom = "8px";
            li.style.fontSize = "14px";
            li.style.lineHeight = "1.6";
            li.style.color = "#34495e";
            li.textContent = project;
            projectsList.appendChild(li);
        });
        projects.appendChild(projectsList);
        sectionDiv.appendChild(projects);
        downloadDiv.appendChild(sectionDiv);
    });
    return downloadDiv;
};
const handleDownloadPDF = async (roadmapData, setDownloading)=>{
    if (!html2canvas || !jsPDF) {
        alert("PDF generation libraries are still loading. Please try again in a moment.");
        return;
    }
    setDownloading(true);
    try {
        // Create temporary div with roadmap content
        const downloadDiv = createDownloadContent(roadmapData);
        // Temporarily add the div to the document to render it
        document.body.appendChild(downloadDiv);
        // IMPROVED html2canvas settings for better quality
        const canvas = await html2canvas(downloadDiv, {
            scale: 2,
            useCORS: true,
            logging: false,
            letterRendering: true,
            allowTaint: true,
            backgroundColor: "#ffffff",
            width: downloadDiv.scrollWidth,
            height: downloadDiv.scrollHeight,
            scrollX: 0,
            scrollY: 0
        });
        // Remove the temporary div
        document.body.removeChild(downloadDiv);
        // Create PDF with better settings
        const pdf = new jsPDF({
            orientation: "portrait",
            unit: "mm",
            format: "a4",
            compress: true,
            precision: 2
        });
        // Calculate dimensions for better fitting
        const imgWidth = 210; // A4 width in mm
        const imgHeight = canvas.height * imgWidth / canvas.width;
        const pageHeight = 297; // A4 height in mm
        let heightLeft = imgHeight;
        let position = 0;
        // Add first page
        pdf.addImage(canvas.toDataURL("image/jpeg", 0.95), "JPEG", 0, 0, imgWidth, imgHeight);
        heightLeft -= pageHeight;
        // Add additional pages if needed
        while(heightLeft > 0){
            position = heightLeft - imgHeight;
            pdf.addPage();
            pdf.addImage(canvas.toDataURL("image/jpeg", 0.95), "JPEG", 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
        }
        // Save the PDF
        pdf.save("SoftwareEngineering_Roadmap.pdf");
    } catch (error) {
        console.error("Error generating PDF:", error);
        alert("There was an error generating the PDF. Please try again.");
    } finally{
        setDownloading(false);
    }
};
}}),
"[project]/app/Roadmaps/Software/roadmapData.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("[{\"id\":1,\"title\":\"Foundations: Computer Science & Programming\",\"description\":\"Essential foundation concepts for computer science and programming fundamentals\",\"icon\":\"BookOpen\",\"gradient\":\"from-blue-500 to-indigo-600\",\"content\":{\"whatToLearn\":[\"Programming basics: Variables, loops, functions\",\"Data structures: arrays, linked lists, stacks, queues, trees, graphs\",\"Algorithms: sorting, searching, recursion, Big-O notation\",\"Object-Oriented Programming concepts\",\"Functional programming concepts\",\"Memory management and optimization\",\"Code organization and best practices\",\"Problem-solving methodologies\",\"Code debugging and testing basics\",\"Development environment setup\"],\"toolsToUse\":[\"VS Code\",\"Git + GitHub\",\"JavaScript/Python/Java\",\"Terminal/Command Line\",\"Debugger Tools\",\"Code Linters\",\"Package Managers (npm/pip/maven)\"],\"bestCourses\":{\"english\":[\"freeCodeCamp - JavaScript/Python courses\",\"Coding Temple bootcamps\",\"CS50 Introduction to Computer Science\",\"Coursera - Programming Fundamentals\",\"Udemy - Complete Programming Courses\"],\"hindi\":[\"Apna College Python playlists\",\"Apna College JavaScript playlists\",\"CodeWithHarry - Programming Basics\",\"Thapa Technical - Programming Fundamentals\",\"Love Babbar - DSA Course\"]},\"docsAndWebsites\":[\"MDN Web Docs\",\"Python Documentation\",\"Java Documentation\",\"GeeksforGeeks\",\"W3Schools\"],\"projectIdeas\":[\"CLI To-Do manager\",\"Sorting visualizer (console)\",\"Data-structure widgets using basic UI\",\"Simple calculator\",\"Basic file organizer\",\"Number guessing game\",\"Basic text parser\"],\"practicePlatforms\":[\"HackerRank\",\"LeetCode (Easy)\",\"Codewars\",\"freeCodeCamp\",\"Codecademy\"]}},{\"id\":2,\"title\":\"Data Structures & Algorithms Mastery\",\"description\":\"Master advanced data structures, algorithms, and complexity analysis for technical interviews\",\"icon\":\"Zap\",\"gradient\":\"from-purple-500 to-pink-500\",\"content\":{\"whatToLearn\":[\"Complexity analysis and Big-O notation\",\"Advanced data structures (heaps, tries, segment trees)\",\"Graph algorithms and traversal techniques\",\"Tree algorithms and balanced trees\",\"Dynamic programming patterns\",\"Greedy algorithms and optimization\",\"String algorithms and pattern matching\",\"Sorting and searching algorithms\",\"Mathematical algorithms\",\"Bit manipulation techniques\"],\"toolsToUse\":[\"LeetCode\",\"HackerRank\",\"Local editor + console\",\"Algorithm visualizers\",\"Competitive programming platforms\",\"IDE with debugging support\",\"Time complexity analyzers\"],\"bestCourses\":{\"english\":[\"Algorithm courses on freeCodeCamp\",\"Coding Temple algorithm bootcamps\",\"Coursera - Algorithms Specialization\",\"MIT OpenCourseWare - Algorithms\",\"Udemy - Master the Coding Interview\"],\"hindi\":[\"Love Babbar - DSA Complete Course\",\"Apna College - DSA Placement Course\",\"CodeWithHarry - DSA Tutorial\",\"Striver DSA Sheet\",\"Pepcoding DSA Course\"]},\"docsAndWebsites\":[\"GeeksforGeeks DSA\",\"LeetCode Explore\",\"HackerRank Interview Kit\",\"Algorithm Visualizer\",\"Big-O Cheat Sheet\"],\"projectIdeas\":[\"Solve daily algorithm challenges\",\"Build a mini search engine (rare words + sorting)\",\"Algorithm visualization tool\",\"Competitive programming solutions\",\"Data structure implementation library\",\"Performance comparison tool\",\"Interview preparation tracker\"],\"practicePlatforms\":[\"LeetCode\",\"HackerRank\",\"CodeChef\",\"Codeforces\",\"InterviewBit\",\"Pramp\",\"AlgoExpert\"]}},{\"id\":3,\"title\":\"Core Software Engineering Tools\",\"description\":\"Master essential development tools including version control, CI/CD, and containerization\",\"icon\":\"Settings\",\"gradient\":\"from-green-500 to-teal-500\",\"content\":{\"whatToLearn\":[\"Version control: Git branching, rebasing, pull-requests\",\"CI/CD: GitHub Actions basics, automated testing pipelines\",\"Code review processes and best practices\",\"Issue tracking and project management\",\"Container basics and Docker fundamentals\",\"Package management and dependency handling\",\"Build tools and automation\",\"Code quality tools and linting\",\"Documentation and README best practices\",\"Team collaboration workflows\"],\"toolsToUse\":[\"GitHub\",\"GitHub Actions\",\"Docker (basics)\",\"Jenkins\",\"GitLab CI/CD\",\"ESLint/Prettier\",\"Webpack/Vite\",\"npm/yarn/pnpm\"],\"bestCourses\":{\"english\":[\"GitHub official tutorials\",\"Basic CI/CD workshops\",\"Docker for Developers\",\"Git and GitHub Masterclass\",\"DevOps Fundamentals\"],\"hindi\":[\"CodeWithHarry - Git and GitHub\",\"Thapa Technical - DevOps Basics\",\"Hitesh Choudhary - Git Tutorial\",\"WsCube Tech - CI/CD Hindi\",\"Love Babbar - Development Tools\"]},\"docsAndWebsites\":[\"Git Documentation\",\"GitHub Docs\",\"Docker Documentation\",\"GitHub Actions Marketplace\",\"CI/CD Best Practices\"],\"projectIdeas\":[\"Build a template repo with CI build and test\",\"Dockerize small application\",\"Multi-environment deployment setup\",\"Automated testing pipeline\",\"Code quality automation\",\"Release management system\",\"Development workflow optimization\"],\"practicePlatforms\":[\"GitHub\",\"GitLab\",\"Docker Hub\",\"CircleCI\",\"Travis CI\",\"Azure DevOps\",\"Bitbucket Pipelines\"]}},{\"id\":4,\"title\":\"Web Development + Back-end / APIs\",\"description\":\"Build robust web applications with RESTful and GraphQL APIs, focusing on security and best practices\",\"icon\":\"Globe\",\"gradient\":\"from-orange-500 to-red-500\",\"content\":{\"whatToLearn\":[\"HTTP protocol and REST API design principles\",\"Security fundamentals and best practices\",\"Authentication systems (JWT/OAuth)\",\"Database design and integration\",\"API documentation and testing\",\"Error handling and logging\",\"Performance optimization\",\"GraphQL API development\",\"Rate limiting and API governance\",\"Microservices architecture basics\"],\"toolsToUse\":[\"Express.js\",\"Django\",\"Spring Boot\",\"Postman/Insomnia\",\"MongoDB/PostgreSQL\",\"Redis\",\"JWT libraries\",\"API testing tools\"],\"bestCourses\":{\"english\":[\"TraversyMedia - API development\",\"freeCodeCamp tutorials\",\"Node.js Complete Guide\",\"Django for APIs\",\"Spring Boot Masterclass\"],\"hindi\":[\"Express.js/Node.js series by WsCube Tech\",\"Django series by WsCube Tech\",\"Hitesh Choudhary - Backend Development\",\"Thapa Technical - API Development\",\"CodeWithHarry - Web Development\"]},\"docsAndWebsites\":[\"Express.js Documentation\",\"Django Documentation\",\"Spring Boot Documentation\",\"REST API Design Guide\",\"OAuth 2.0 Specification\"],\"projectIdeas\":[\"RESTful Blog API\",\"User-auth system with JWT\",\"Rate-limited API endpoints\",\"E-commerce backend\",\"Social media API\",\"Real-time chat application\",\"Content management system\"],\"practicePlatforms\":[\"Postman\",\"Thunder Client\",\"Swagger/OpenAPI\",\"RapidAPI\",\"API testing challenges\",\"Backend development challenges\",\"GraphQL playground\"]}},{\"id\":5,\"title\":\"System Design & Architecture\",\"description\":\"Learn scalable system architecture, design patterns, and distributed systems fundamentals\",\"icon\":\"Network\",\"gradient\":\"from-cyan-500 to-blue-500\",\"content\":{\"whatToLearn\":[\"Monolithic vs microservices architecture\",\"Load balancing and traffic distribution\",\"Caching strategies and implementation\",\"Database sharding and replication\",\"Design patterns and architectural principles\",\"Distributed systems basics\",\"Message queues and event-driven architecture\",\"Scalability and performance considerations\",\"System reliability and fault tolerance\",\"API gateway and service mesh concepts\"],\"toolsToUse\":[\"Draw.io\",\"Lucidchart\",\"Redis\",\"Memcached\",\"Apache Kafka\",\"RabbitMQ\",\"Load balancers\",\"System design tools\"],\"bestCourses\":{\"english\":[\"Free system design crash courses (YouTube)\",\"InterViewKickstart system design\",\"Grokking the System Design Interview\",\"System Design Primer\",\"Distributed Systems Course\"],\"hindi\":[\"Tutorials by Thapa Technical\",\"Code with Harry - System Design\",\"Love Babbar - System Design\",\"Hitesh Choudhary - Architecture\",\"System Design Hindi Tutorials\"]},\"docsAndWebsites\":[\"System Design Primer GitHub\",\"High Scalability Blog\",\"AWS Architecture Center\",\"Google Cloud Architecture\",\"System Design Interview Questions\"],\"projectIdeas\":[\"Design user-service microservice\",\"Chat app prototype with queue-based architecture\",\"Scalable URL shortener\",\"Distributed cache implementation\",\"Event-driven e-commerce system\",\"Social media feed system\",\"Real-time analytics platform\"],\"practicePlatforms\":[\"System design mock interviews\",\"LeetCode system design\",\"Pramp system design\",\"InterviewBit system design\",\"System design case studies\",\"Architecture review platforms\",\"Design pattern implementations\"]}},{\"id\":6,\"title\":\"Cloud, DevOps & AI Tools\",\"description\":\"Master cloud services, DevOps practices, and integrate AI tools for enhanced productivity\",\"icon\":\"Cloud\",\"gradient\":\"from-violet-500 to-purple-600\",\"content\":{\"whatToLearn\":[\"Cloud services: AWS/Azure/GCP basics\",\"Serverless functions and architecture\",\"Container orchestration with Kubernetes\",\"Infrastructure as Code (Terraform)\",\"CI/CD pipeline automation\",\"Monitoring and observability\",\"AI coding assistants integration\",\"GitHub Copilot and ChatGPT usage\",\"Cloud security best practices\",\"Cost optimization strategies\"],\"toolsToUse\":[\"AWS/Azure free tier\",\"Docker\",\"Kubernetes\",\"GitHub Actions\",\"Terraform basics\",\"AI coding assistants\",\"GitHub Copilot\",\"Cloud monitoring tools\"],\"bestCourses\":{\"english\":[\"Vercel deployment tutorials\",\"AWS tutorials and certification prep\",\"GitHub Actions comprehensive courses\",\"Kubernetes for Developers\",\"AI-assisted development courses\"],\"hindi\":[\"AWS Hindi tutorials\",\"DevOps Hindi courses\",\"Cloud computing Hindi\",\"Tutorials on using Copilot/GitHub AI\",\"Docker and Kubernetes Hindi\"]},\"docsAndWebsites\":[\"AWS Documentation\",\"Azure Documentation\",\"Google Cloud Documentation\",\"Kubernetes Documentation\",\"GitHub Copilot Documentation\"],\"projectIdeas\":[\"CRUD app deployment on AWS Lambda\",\"Dockerized microservice setup\",\"Kubernetes cluster deployment\",\"CI/CD pipeline with cloud deployment\",\"Serverless API with monitoring\",\"AI-assisted code generation project\",\"Multi-cloud application deployment\"],\"practicePlatforms\":[\"AWS Free Tier\",\"Google Cloud Free Tier\",\"Azure Free Account\",\"GitHub Actions\",\"Docker Hub\",\"Kubernetes Playground\",\"AI coding challenges\"]}},{\"id\":7,\"title\":\"Testing, Monitoring & Production Stability\",\"description\":\"Implement comprehensive testing strategies, monitoring systems, and security practices for production applications\",\"icon\":\"Shield\",\"gradient\":\"from-emerald-500 to-green-600\",\"content\":{\"whatToLearn\":[\"Unit tests and test-driven development\",\"Integration tests and end-to-end testing\",\"Testing strategies and best practices\",\"Application monitoring and observability\",\"Logging and error tracking\",\"Performance monitoring and optimization\",\"Security best practices and implementation\",\"Threat modeling and risk assessment\",\"Incident response and recovery\",\"Production deployment strategies\"],\"toolsToUse\":[\"Jest/Mocha\",\"Selenium/Playwright\",\"Cypress\",\"Prometheus/Grafana\",\"New Relic/DataDog\",\"Sentry\",\"Cloud monitoring tools\",\"Security scanning tools\"],\"bestCourses\":{\"english\":[\"FreeCodeCamp testing tracks\",\"Fireship testing series\",\"Testing JavaScript Applications\",\"Monitoring and Observability Course\",\"Security Testing Fundamentals\"],\"hindi\":[\"Testing Hindi tutorials\",\"Monitoring Hindi courses\",\"Security best practices Hindi\",\"Production deployment Hindi\",\"DevOps security Hindi\"]},\"docsAndWebsites\":[\"Jest Documentation\",\"Cypress Documentation\",\"Prometheus Documentation\",\"OWASP Security Guidelines\",\"Testing Best Practices\"],\"projectIdeas\":[\"Create comprehensive test suite for API endpoints\",\"Set up logging and alerts system\",\"Performance monitoring dashboard\",\"Security audit and penetration testing\",\"Automated testing pipeline\",\"Error tracking and reporting system\",\"Production health monitoring\"],\"practicePlatforms\":[\"Testing frameworks\",\"Security testing platforms\",\"Performance testing tools\",\"Monitoring dashboards\",\"Error tracking services\",\"Security vulnerability scanners\",\"Load testing platforms\"]}},{\"id\":8,\"title\":\"Real-world Projects & Internship Prep\",\"description\":\"Build production-grade applications, contribute to open source, and prepare for technical interviews\",\"icon\":\"Briefcase\",\"gradient\":\"from-rose-500 to-pink-600\",\"content\":{\"whatToLearn\":[\"Production-grade application development\",\"Code review and collaboration skills\",\"Open-source contribution practices\",\"Technical interview preparation\",\"System design interview skills\",\"Behavioral interview preparation\",\"Portfolio development and presentation\",\"Industry best practices and standards\",\"Professional networking strategies\",\"Career development and growth planning\"],\"toolsToUse\":[\"GitHub for portfolio and collaboration\",\"Portfolio website builders\",\"LinkedIn for networking\",\"Interview preparation platforms\",\"Code review tools\",\"Project management tools\",\"Communication and presentation tools\",\"Professional development platforms\"],\"bestCourses\":{\"english\":[\"Portfolio building bootcamps\",\"Interview prep bootcamps\",\"Open source contribution guides\",\"Professional development courses\",\"Career transition programs\"],\"hindi\":[\"Interview preparation Hindi\",\"Portfolio building Hindi\",\"Career guidance Hindi\",\"Industry readiness courses\",\"Professional development Hindi\"]},\"docsAndWebsites\":[\"GitHub Portfolio Guide\",\"Open Source Contribution Guide\",\"Technical Interview Handbook\",\"System Design Interview Guide\",\"Career Development Resources\"],\"projectIdeas\":[\"E-commerce platform backend + admin portal\",\"Team-based full-stack SaaS application\",\"Social media platform with real-time features\",\"Learning management system\",\"Cryptocurrency portfolio tracker\",\"Video streaming platform\",\"IoT data collection and analytics system\",\"Multi-tenant application architecture\",\"Real-time collaborative tools\",\"AI-powered application with ML integration\"],\"practicePlatforms\":[\"GitHub open source projects\",\"Hackathons and coding competitions\",\"LeetCode for technical interviews\",\"HackerRank for skill assessment\",\"Codewars for problem solving\",\"Open source communities\",\"Professional networking events\",\"Technical meetups and conferences\",\"Online coding bootcamps\",\"Interview preparation platforms\"]}}]"));}}),
"[project]/app/Roadmaps/Software/visualRoadmap.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>SoftwareEngineeringRoadmap)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
function SoftwareEngineeringRoadmap() {
    const roadmap = [
        {
            title: "Foundation",
            subtitle: "Core Fundamentals",
            steps: [
                {
                    step: "Step - 1",
                    topic: "Computer Fundamentals",
                    category: "System Basics",
                    details: "CPU, Memory, I/O, OS basics, Number systems (binary, hex), Compilation vs Interpretation"
                },
                {
                    step: "Step - 2",
                    topic: "Mathematics for Engineers",
                    category: "Mathematical Foundation",
                    details: "Discrete Mathematics, Sets, Logic, Graph Theory, Probability & Statistics, Linear Algebra"
                },
                {
                    step: "Step - 3",
                    topic: "Programming Languages",
                    category: "Core Languages",
                    details: "C/C++ (Memory management), Java/C# (OOP, JVM), Python (Scripting), JavaScript (ES6+, Async)"
                },
                {
                    step: "Step - 4",
                    topic: "Data Structures & Algorithms",
                    category: "DSA Mastery",
                    details: "Arrays, Linked Lists, Trees, Graphs, Sorting, Searching, Dynamic Programming, Time/Space Complexity"
                }
            ]
        },
        {
            title: "Intermediate",
            subtitle: "Core CS & Development",
            steps: [
                {
                    step: "Step - 5",
                    topic: "Object-Oriented Programming",
                    category: "Design Principles",
                    details: "Encapsulation, Inheritance, Polymorphism, Abstraction, SOLID Principles, Design Patterns"
                },
                {
                    step: "Step - 6",
                    topic: "Operating Systems & Networks",
                    category: "System Knowledge",
                    details: "Processes, Threads, Memory Management, TCP/IP, HTTP/HTTPS, DNS, REST APIs"
                },
                {
                    step: "Step - 7",
                    topic: "Database Management",
                    category: "Data Persistence",
                    details: "SQL (Joins, Indexing, Transactions), NoSQL (MongoDB, Redis), ACID, Normalization"
                },
                {
                    step: "Step - 8",
                    topic: "Version Control & Collaboration",
                    category: "Team Development",
                    details: "Git/GitHub, Branching, Merging, Code Reviews, Agile/Scrum, CI/CD Pipelines"
                }
            ]
        },
        {
            title: "Advanced",
            subtitle: "Full-Stack Development",
            steps: [
                {
                    step: "Step - 9",
                    topic: "Backend Development",
                    category: "Server-Side Engineering",
                    details: "Node.js/Express, Spring Boot, Django/Flask, REST/GraphQL APIs, Authentication (JWT, OAuth2)"
                },
                {
                    step: "Step - 10",
                    topic: "Frontend Development",
                    category: "Client-Side Engineering",
                    details: "React/Next.js, Angular/Vue.js, HTML/CSS/JS, State Management, Responsive Design"
                },
                {
                    step: "Step - 11",
                    topic: "System Design Principles",
                    category: "Architecture Patterns",
                    details: "Scalability, Load Balancing, Caching, Microservices, Message Queues, Design Patterns"
                },
                {
                    step: "Step - 12",
                    topic: "Testing & Quality Assurance",
                    category: "Quality Engineering",
                    details: "Unit Testing (JUnit, Jest), Integration Testing, E2E (Cypress), TDD, Code Quality"
                }
            ]
        },
        {
            title: "Mastery",
            subtitle: "Enterprise & Leadership",
            steps: [
                {
                    step: "Step - 13",
                    topic: "Cloud & DevOps",
                    category: "Infrastructure & Deployment",
                    details: "AWS/Azure/GCP, Docker, Kubernetes, Terraform, Infrastructure as Code, Monitoring"
                },
                {
                    step: "Step - 14",
                    topic: "Security & Best Practices",
                    category: "Secure Development",
                    details: "OWASP Top 10, XSS/CSRF Prevention, Secure Coding, Authentication, Rate Limiting"
                },
                {
                    step: "Step - 15",
                    topic: "Advanced System Design",
                    category: "Distributed Systems",
                    details: "CAP Theorem, Eventual Consistency, Sharding, Partitioning, High Availability, Fault Tolerance"
                },
                {
                    step: "Step - 16",
                    topic: "Professional Development",
                    category: "Leadership & Communication",
                    details: "Technical Communication, Documentation, Open Source, Project Management, Team Leadership"
                }
            ]
        }
    ];
    const projectSuggestions = [
        {
            level: "Foundation",
            project: "Console-based Task Manager"
        },
        {
            level: "Intermediate",
            project: "Full-Stack Web Application"
        },
        {
            level: "Advanced",
            project: "Distributed E-commerce Platform"
        },
        {
            level: "Mastery",
            project: "Cloud-Native Microservices"
        }
    ];
    const getSectionColor = (idx)=>{
        const colors = [
            'bg-gradient-to-r from-blue-500 to-blue-600',
            'bg-gradient-to-r from-purple-500 to-purple-600',
            'bg-gradient-to-r from-orange-500 to-orange-600',
            'bg-gradient-to-r from-green-500 to-green-600'
        ];
        return colors[idx] || colors[0];
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "bg-gradient-to-br from-purple-50 via-white to-blue-50 min-h-screen p-4 sm:p-6 font-inter",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-10 flex justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-full px-6 py-3 shadow-lg border border-gray-200",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-medium text-gray-700",
                                children: "🚀 16 Essential Steps • 🏗️ 4 Skill Levels • 💼 Enterprise Ready"
                            }, void 0, false, {
                                fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                lineNumber: 151,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                            lineNumber: 150,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                        lineNumber: 149,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                    lineNumber: 148,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-12 sm:space-y-16",
                    children: roadmap.map((section, sectionIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden lg:block",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start space-x-8 max-w-6xl mx-auto",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-shrink-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `px-6 py-4 rounded-lg text-lg font-semibold min-w-[150px] text-center text-white shadow-md ${getSectionColor(sectionIdx)}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "font-bold",
                                                            children: section.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                                            lineNumber: 166,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-sm font-normal opacity-90 mt-1",
                                                            children: section.subtitle
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                                            lineNumber: 167,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                                    lineNumber: 165,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                                lineNumber: 164,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col space-y-6 flex-grow",
                                                children: section.steps.map((item, stepIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "group",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center space-x-6",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-20 text-right text-sm font-medium text-gray-500",
                                                                    children: item.step
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                                                    lineNumber: 177,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    className: "w-16 h-6 transition-all duration-300 group-hover:scale-110 flex-shrink-0",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: "2",
                                                                    viewBox: "0 0 100 24",
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                                                                id: `gradient-${sectionIdx}-${stepIdx}`,
                                                                                x1: "0%",
                                                                                y1: "0%",
                                                                                x2: "100%",
                                                                                y2: "0%",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                                        offset: "0%",
                                                                                        stopColor: "#8B5CF6"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                                                                        lineNumber: 192,
                                                                                        columnNumber: 33
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                                        offset: "100%",
                                                                                        stopColor: "#06B6D4"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                                                                        lineNumber: 193,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                                                                lineNumber: 191,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                                                            lineNumber: 190,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                            x1: "0",
                                                                            y1: "12",
                                                                            x2: "70",
                                                                            y2: "12",
                                                                            stroke: `url(#gradient-${sectionIdx}-${stepIdx})`
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                                                            lineNumber: 196,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                                            points: "60,6 70,12 60,18",
                                                                            stroke: `url(#gradient-${sectionIdx}-${stepIdx})`
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                                                            lineNumber: 197,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                                                    lineNumber: 182,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "bg-white rounded-lg px-6 py-4 flex-grow max-w-sm shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 group-hover:scale-105",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-base font-semibold text-gray-800 mb-1",
                                                                            children: item.topic
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                                                            lineNumber: 202,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-xs text-gray-500 mb-2",
                                                                            children: item.category
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                                                            lineNumber: 205,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-xs text-gray-600 leading-relaxed",
                                                                            children: item.details
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                                                            lineNumber: 208,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                                                    lineNumber: 201,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent min-w-[20px]"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                                                    lineNumber: 214,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-8 h-8 rounded-full border-2 border-gray-300 bg-white flex items-center justify-center group-hover:border-purple-500 transition-colors duration-300 flex-shrink-0",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-3 h-3 rounded-full bg-gray-300 group-hover:bg-purple-500 transition-colors duration-300"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                                                        lineNumber: 218,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                                                    lineNumber: 217,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                                            lineNumber: 175,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, stepIdx, false, {
                                                        fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                                        lineNumber: 174,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                                lineNumber: 172,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                        lineNumber: 162,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                    lineNumber: 161,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "lg:hidden",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center mb-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `px-4 py-3 rounded-lg text-base sm:text-lg font-semibold text-white shadow-md ${getSectionColor(sectionIdx)} flex-shrink-0`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "font-bold",
                                                            children: section.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                                            lineNumber: 232,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs sm:text-sm font-normal opacity-90",
                                                            children: section.subtitle
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                                            lineNumber: 233,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                                    lineNumber: 231,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent ml-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                                    lineNumber: 235,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                            lineNumber: 230,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4 sm:space-y-6 ml-4 border-l-2 border-dashed border-gray-300 pl-6 sm:pl-8",
                                            children: section.steps.map((item, stepIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute -left-8 sm:-left-10 top-4 w-4 h-4 rounded-full bg-white border-2 border-gray-300 group-hover:border-purple-500 transition-colors duration-300",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-2 h-2 rounded-full bg-gray-300 group-hover:bg-purple-500 transition-colors duration-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                                                lineNumber: 244,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                                            lineNumber: 243,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-white rounded-lg p-4 sm:p-6 shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 group-hover:scale-[1.02]",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-start justify-between mb-3",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-xs sm:text-sm font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded",
                                                                            children: item.step
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                                                            lineNumber: 250,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-xs text-gray-500 bg-purple-50 px-2 py-1 rounded",
                                                                            children: item.category
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                                                            lineNumber: 253,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                                                    lineNumber: 249,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "text-base sm:text-lg font-semibold text-gray-800 mb-2",
                                                                    children: item.topic
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                                                    lineNumber: 258,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm text-gray-600 leading-relaxed",
                                                                    children: item.details
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                                                    lineNumber: 262,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                                            lineNumber: 248,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, stepIdx, true, {
                                                    fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                                    lineNumber: 241,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                            lineNumber: 239,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                    lineNumber: 228,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, sectionIdx, true, {
                            fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                            lineNumber: 159,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                    lineNumber: 157,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "mt-16 sm:mt-20 bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-gray-800",
                            children: "🚀 Software Engineering Practice Projects"
                        }, void 0, false, {
                            fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                            lineNumber: 276,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6",
                            children: projectSuggestions.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gradient-to-br from-purple-50 to-blue-50 p-4 sm:p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300 hover:scale-[1.02]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-semibold text-gray-800 mb-2 text-sm sm:text-base",
                                            children: item.level
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                            lineNumber: 282,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs sm:text-sm text-gray-600",
                                            children: item.project
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                            lineNumber: 283,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, idx, true, {
                                    fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                    lineNumber: 281,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                            lineNumber: 279,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                    lineNumber: 275,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "mt-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-6 sm:p-8 text-white",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl sm:text-2xl font-bold text-center mb-6",
                            children: "🛠️ Software Engineering Tech Stack"
                        }, void 0, false, {
                            fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                            lineNumber: 291,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white/10 rounded-lg p-4 backdrop-blur-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-semibold mb-2",
                                            children: "Programming Languages"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                            lineNumber: 294,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-purple-100",
                                            children: "C/C++, Java, Python, JavaScript, TypeScript, Go"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                            lineNumber: 295,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                    lineNumber: 293,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white/10 rounded-lg p-4 backdrop-blur-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-semibold mb-2",
                                            children: "Frontend Frameworks"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                            lineNumber: 298,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-purple-100",
                                            children: "React, Angular, Vue.js, Next.js, Svelte"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                            lineNumber: 299,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                    lineNumber: 297,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white/10 rounded-lg p-4 backdrop-blur-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-semibold mb-2",
                                            children: "Backend Frameworks"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                            lineNumber: 302,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-purple-100",
                                            children: "Node.js, Spring Boot, Django, Flask, Express"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                            lineNumber: 303,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                    lineNumber: 301,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white/10 rounded-lg p-4 backdrop-blur-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-semibold mb-2",
                                            children: "Databases"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                            lineNumber: 306,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-purple-100",
                                            children: "PostgreSQL, MySQL, MongoDB, Redis, Cassandra"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                            lineNumber: 307,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                    lineNumber: 305,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white/10 rounded-lg p-4 backdrop-blur-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-semibold mb-2",
                                            children: "Cloud Platforms"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                            lineNumber: 310,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-purple-100",
                                            children: "AWS, Azure, GCP, Vercel, Netlify"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                            lineNumber: 311,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                    lineNumber: 309,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white/10 rounded-lg p-4 backdrop-blur-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-semibold mb-2",
                                            children: "DevOps Tools"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                            lineNumber: 314,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-purple-100",
                                            children: "Docker, Kubernetes, Jenkins, GitHub Actions"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                            lineNumber: 315,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                    lineNumber: 313,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white/10 rounded-lg p-4 backdrop-blur-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-semibold mb-2",
                                            children: "Testing Tools"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                            lineNumber: 318,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-purple-100",
                                            children: "JUnit, Jest, Cypress, Selenium, Postman"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                            lineNumber: 319,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                    lineNumber: 317,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white/10 rounded-lg p-4 backdrop-blur-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-semibold mb-2",
                                            children: "Version Control"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                            lineNumber: 322,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-purple-100",
                                            children: "Git, GitHub, GitLab, Bitbucket, SVN"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                            lineNumber: 323,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                    lineNumber: 321,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                            lineNumber: 292,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                    lineNumber: 290,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "mt-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 sm:p-8 border border-gray-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800",
                            children: "🎯 Industry-Level Software Projects"
                        }, void 0, false, {
                            fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                            lineNumber: 330,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white p-6 rounded-lg shadow-sm border border-gray-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-semibold text-gray-800 mb-3",
                                            children: "📱 Social Media Platform"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                            lineNumber: 333,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-600 mb-3",
                                            children: "Build a scalable social media platform with real-time messaging, content feeds, and user interactions."
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                            lineNumber: 334,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-purple-600 bg-purple-50 px-2 py-1 rounded inline-block",
                                            children: "React • Node.js • MongoDB • WebSocket"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                            lineNumber: 335,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                    lineNumber: 332,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white p-6 rounded-lg shadow-sm border border-gray-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-semibold text-gray-800 mb-3",
                                            children: "🛒 E-commerce Platform"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                            lineNumber: 338,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-600 mb-3",
                                            children: "Create a full-featured e-commerce platform with payments, inventory, and order management."
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                            lineNumber: 339,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded inline-block",
                                            children: "Microservices • Spring Boot • PostgreSQL"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                            lineNumber: 340,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                    lineNumber: 337,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white p-6 rounded-lg shadow-sm border border-gray-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-semibold text-gray-800 mb-3",
                                            children: "📊 Data Analytics Dashboard"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                            lineNumber: 343,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-600 mb-3",
                                            children: "Design a real-time analytics dashboard with data visualization and business intelligence features."
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                            lineNumber: 344,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-green-600 bg-green-50 px-2 py-1 rounded inline-block",
                                            children: "Python • Django • D3.js • Apache Kafka"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                            lineNumber: 345,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                    lineNumber: 342,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white p-6 rounded-lg shadow-sm border border-gray-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-semibold text-gray-800 mb-3",
                                            children: "🎮 Multiplayer Game Backend"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                            lineNumber: 348,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-600 mb-3",
                                            children: "Build a real-time multiplayer game backend with matchmaking, leaderboards, and chat systems."
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                            lineNumber: 349,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-orange-600 bg-orange-50 px-2 py-1 rounded inline-block",
                                            children: "Go • WebSocket • Redis • Docker"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                            lineNumber: 350,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                    lineNumber: 347,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                            lineNumber: 331,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                    lineNumber: 329,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "mt-12 bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl p-6 sm:p-8 text-white",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl sm:text-2xl font-bold text-center mb-6",
                            children: "💼 Career Roles in Software Engineering"
                        }, void 0, false, {
                            fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                            lineNumber: 357,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white/10 rounded-lg p-3 backdrop-blur-sm",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-semibold",
                                        children: "Software Engineer"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                        lineNumber: 360,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                    lineNumber: 359,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white/10 rounded-lg p-3 backdrop-blur-sm",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-semibold",
                                        children: "Full Stack Developer"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                        lineNumber: 363,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                    lineNumber: 362,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white/10 rounded-lg p-3 backdrop-blur-sm",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-semibold",
                                        children: "Backend Engineer"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                        lineNumber: 366,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                    lineNumber: 365,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white/10 rounded-lg p-3 backdrop-blur-sm",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-semibold",
                                        children: "Frontend Engineer"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                        lineNumber: 369,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                    lineNumber: 368,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white/10 rounded-lg p-3 backdrop-blur-sm",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-semibold",
                                        children: "DevOps Engineer"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                        lineNumber: 372,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                    lineNumber: 371,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white/10 rounded-lg p-3 backdrop-blur-sm",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-semibold",
                                        children: "Solutions Architect"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                        lineNumber: 375,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                    lineNumber: 374,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white/10 rounded-lg p-3 backdrop-blur-sm",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-semibold",
                                        children: "Tech Lead"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                        lineNumber: 378,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                    lineNumber: 377,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white/10 rounded-lg p-3 backdrop-blur-sm",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-semibold",
                                        children: "Engineering Manager"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                        lineNumber: 381,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                    lineNumber: 380,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white/10 rounded-lg p-3 backdrop-blur-sm",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-semibold",
                                        children: "Principal Engineer"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                        lineNumber: 384,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                    lineNumber: 383,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white/10 rounded-lg p-3 backdrop-blur-sm",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-semibold",
                                        children: "Staff Engineer"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                        lineNumber: 387,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                    lineNumber: 386,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white/10 rounded-lg p-3 backdrop-blur-sm",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-semibold",
                                        children: "CTO"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                        lineNumber: 390,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                    lineNumber: 389,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white/10 rounded-lg p-3 backdrop-blur-sm",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-semibold",
                                        children: "Product Engineer"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                        lineNumber: 393,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                                    lineNumber: 392,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                            lineNumber: 358,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                    lineNumber: 356,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mt-12 sm:mt-16 text-gray-600",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm sm:text-base px-4",
                        children: "⚡ Remember: Software Engineering is about solving problems efficiently. Master the fundamentals, build real projects, and never stop learning!"
                    }, void 0, false, {
                        fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                        lineNumber: 400,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
                    lineNumber: 399,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
            lineNumber: 146,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/Roadmaps/Software/visualRoadmap.jsx",
        lineNumber: 145,
        columnNumber: 5
    }, this);
}
}}),
"[project]/app/Roadmaps/Software/software.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$Software$2f$downloadPdf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Roadmaps/Software/downloadPdf.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$Software$2f$roadmapData$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/app/Roadmaps/Software/roadmapData.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$Software$2f$visualRoadmap$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Roadmaps/Software/visualRoadmap.jsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function Home() {
    const [openSection, setOpenSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [openSections, setOpenSections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [darkMode, setDarkMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [downloading, setDownloading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [youtubeDropdownOpen, setYoutubeDropdownOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isVisualMode, setIsVisualMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Create refs for dropdown and sections
    const dropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sectionRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({});
    const toggleSections = (id)=>{
        const newOpenSections = new Set(openSections);
        if (newOpenSections.has(id)) {
            newOpenSections.delete(id);
        } else {
            newOpenSections.add(id);
        }
        setOpenSections(newOpenSections);
    };
    // Toggle dark mode
    const toggleDarkMode = ()=>{
        setDarkMode(!darkMode);
    };
    const toggleRoadmapView = ()=>{
        setIsVisualMode(!isVisualMode);
    };
    // Handle PDF download
    const handleDownload = async ()=>{
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$Software$2f$downloadPdf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleDownloadPDF"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$Software$2f$roadmapData$2e$json__$28$json$29$__["default"], setDownloading);
    };
    // Toggle YouTube dropdown
    const toggleYouTubeDropdown = ()=>{
        setYoutubeDropdownOpen(!youtubeDropdownOpen);
    };
    const youtubeCourses = [
        {
            name: "Web Development",
            icon: "⚛️",
            url: "https://youtu.be/tVzUXW6siu0?si=gEsH12gty2Wca6Rs"
        },
        {
            name: "App Development",
            url: "https://youtu.be/NMOdEHyMXBo?si=XuJlclTzfwLLaNYF",
            icon: "🤖"
        },
        {
            name: "Database",
            url: "https://youtu.be/dl00fOOYLOM?si=bCam3UuAeb5Sq4Vl",
            icon: "🤖"
        },
        {
            name: "System design",
            icon: "🤖",
            url: "https://youtu.be/lFeYU31TnQ8?si=yHCNcIpkw6lNy3uO"
        },
        {
            name: "Deployment",
            icon: "🍎",
            url: "https://youtu.be/gViEtIJ1DCw?si=_jTOPBzvH-8X64OS"
        }
    ];
    // Close dropdown when clicking outside
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleClickOutside = (event)=>{
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setYoutubeDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return ()=>{
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    // Toggle section open/close with smooth scrolling
    const toggleSection = (id)=>{
        if (openSection === id) {
            setOpenSection(null);
        } else {
            setOpenSection(id);
            // Scroll to section after state update
            setTimeout(()=>{
                const element = sectionRefs.current[id];
                if (element) {
                    const navHeight = 80; // Approximate nav height
                    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                    const offsetPosition = elementPosition - navHeight;
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                }
            }, 100);
        }
    };
    // Handle YouTube course redirect
    const handleYouTubeCourseRedirect = (url)=>{
        window.open(url, "_blank");
        setYoutubeDropdownOpen(false);
    };
    // Handle AI Guide redirect
    const handleAIGuideRedirect = ()=>{
        window.location.href = "/CareerGuidance";
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `min-h-screen font-sans ${darkMode ? "dark bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white" : "bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: `sticky top-0 z-10 backdrop-blur-lg ${darkMode ? "bg-gray-900/90 border-gray-700/50" : "bg-white/90 border-gray-200/50"} border-b shadow-xl px-4 sm:px-6 py-4 sm:py-5 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 transition-all duration-300`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-center sm:text-left",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent",
                                children: "Software Engineer"
                            }, void 0, false, {
                                fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                lineNumber: 141,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `ml-2 ${darkMode ? "text-gray-200" : "text-gray-800"}`,
                                children: "Roadmap"
                            }, void 0, false, {
                                fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                lineNumber: 144,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/Roadmaps/Software/software.jsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-2 sm:space-x-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center bg-gray-200 dark:bg-gray-700 rounded-full p-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIsVisualMode(false),
                                        className: `flex items-center px-3 py-1 rounded-full transition-all ${!isVisualMode ? "bg-white dark:bg-gray-900 shadow text-blue-600 dark:text-blue-400" : "text-gray-600 dark:text-gray-300 hover:text-blue-500"}`,
                                        title: "Switch to Textual Roadmap",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-4 h-4 mr-1",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: 2,
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    d: "M4 6h16M4 12h16M4 18h16"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                                    lineNumber: 169,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                                lineNumber: 162,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-medium hidden sm:inline",
                                                children: "Textual"
                                            }, void 0, false, {
                                                fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                                lineNumber: 171,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                        lineNumber: 153,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIsVisualMode(true),
                                        className: `flex items-center px-3 py-1 rounded-full transition-all ${isVisualMode ? "bg-white dark:bg-gray-900 shadow text-purple-600 dark:text-purple-400" : "text-gray-600 dark:text-gray-300 hover:text-purple-500"}`,
                                        title: "Switch to Visual Roadmap",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-4 h-4 mr-1",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: 2,
                                                viewBox: "0 0 24 24",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        cx: "12",
                                                        cy: "12",
                                                        r: "3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                                        lineNumber: 190,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        d: "M2.458 12C3.732 7.94 7.523 5 12 5s8.268 2.94 9.542 7c-1.274 4.06-5.064 7-9.542 7s-8.268-2.94-9.542-7z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                                        lineNumber: 191,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                                lineNumber: 183,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-medium hidden sm:inline",
                                                children: "Visual"
                                            }, void 0, false, {
                                                fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                                lineNumber: 193,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                        lineNumber: 174,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                lineNumber: 152,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleDownload,
                                disabled: downloading,
                                className: `px-3 sm:px-6 py-2 sm:py-3 rounded-xl font-medium text-xs sm:text-sm tracking-wide text-white shadow-lg transform transition-all duration-200 ${downloading ? "bg-gray-500 cursor-not-allowed scale-95" : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:shadow-xl hover:scale-105 active:scale-95"} flex items-center`,
                                children: downloading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "animate-spin -ml-1 mr-2 sm:mr-3 h-3 w-3 sm:h-4 sm:w-4 text-white",
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
                                                    fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                                    lineNumber: 214,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    className: "opacity-75",
                                                    fill: "currentColor",
                                                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                                    lineNumber: 222,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                            lineNumber: 208,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-medium hidden sm:inline",
                                            children: "Generating PDF..."
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                            lineNumber: 228,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-medium sm:hidden",
                                            children: "PDF..."
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                            lineNumber: 231,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                            }, void 0, false, {
                                                fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                                lineNumber: 241,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                            lineNumber: 235,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-medium hidden sm:inline",
                                            children: "Download PDF"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                            lineNumber: 248,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-medium sm:hidden",
                                            children: "PDF"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                            lineNumber: 251,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                lineNumber: 197,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: toggleDarkMode,
                                className: `p-2 sm:p-3 rounded-xl shadow-lg transform transition-all duration-200 hover:scale-105 active:scale-95 ${darkMode ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 hover:from-yellow-300 hover:to-orange-400" : "bg-gradient-to-r from-gray-700 to-gray-800 text-white hover:from-gray-600 hover:to-gray-700"}`,
                                children: darkMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-4 h-4 sm:w-5 sm:h-5",
                                    fill: "currentColor",
                                    viewBox: "0 0 20 20",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        fillRule: "evenodd",
                                        d: "M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",
                                        clipRule: "evenodd"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                        lineNumber: 271,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                    lineNumber: 266,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-4 h-4 sm:w-5 sm:h-5",
                                    fill: "currentColor",
                                    viewBox: "0 0 20 20",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                        lineNumber: 283,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                    lineNumber: 278,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                lineNumber: 257,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/Roadmaps/Software/software.jsx",
                        lineNumber: 150,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/Roadmaps/Software/software.jsx",
                lineNumber: 133,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed right-4 top-1/2 transform -translate-y-1/2 z-40 flex flex-col gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        ref: dropdownRef,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: toggleYouTubeDropdown,
                                className: `group relative p-3 sm:p-4 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-110 active:scale-95 ${darkMode ? "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600" : "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700"} text-white ${youtubeDropdownOpen ? "scale-110 ring-4 ring-red-300/50" : ""}`,
                                title: "YouTube Courses",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: `w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-300 ${youtubeDropdownOpen ? "rotate-12" : ""}`,
                                        viewBox: "0 0 24 24",
                                        fill: "currentColor",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                            lineNumber: 309,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                        lineNumber: 304,
                                        columnNumber: 13
                                    }, this),
                                    !youtubeDropdownOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `absolute right-full mr-3 top-1/2 transform -translate-y-1/2 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none ${darkMode ? "bg-gray-800 text-white border border-gray-700" : "bg-white text-gray-900 border border-gray-200 shadow-lg"}`,
                                        children: [
                                            "YouTube Courses",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-r-0 border-t-4 border-b-4 border-transparent ${darkMode ? "border-l-gray-800" : "border-l-white"}`
                                            }, void 0, false, {
                                                fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                                lineNumber: 322,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                        lineNumber: 314,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                lineNumber: 294,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `absolute right-full mr-3 top-1/2 transform -translate-y-1/2 transition-all duration-300 ease-out ${youtubeDropdownOpen ? "opacity-100 scale-100 translate-x-0" : "opacity-0 scale-95 translate-x-2 pointer-events-none"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} border rounded-xl shadow-2xl backdrop-blur-lg p-2 min-w-[200px]`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "px-3 py-2 border-b border-gray-200 dark:border-gray-700",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-sm font-semibold text-gray-700 dark:text-gray-300",
                                                    children: "Choose Technology"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                                    lineNumber: 348,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                                lineNumber: 347,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "py-1",
                                                children: youtubeCourses.map((course, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleYouTubeCourseRedirect(course.url),
                                                        className: `w-full px-3 py-3 text-left flex items-center gap-3 rounded-lg transition-all duration-200 transform hover:scale-105 ${darkMode ? "hover:bg-gray-700 text-gray-200 hover:text-white" : "hover:bg-gray-50 text-gray-700 hover:text-gray-900"} group`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-lg",
                                                                children: course.icon
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                                                lineNumber: 365,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-medium text-sm flex-1",
                                                                children: course.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                                                lineNumber: 366,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                className: "w-4 h-4 opacity-50 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-200",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                viewBox: "0 0 24 24",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    strokeWidth: 2,
                                                                    d: "M17 8l4 4m0 0l-4 4m4-4H3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                                                    lineNumber: 375,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                                                lineNumber: 369,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, course.name, true, {
                                                        fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                                        lineNumber: 356,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                                lineNumber: 354,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                        lineNumber: 339,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-8 border-r-0 border-t-8 border-b-8 border-transparent ${darkMode ? "border-l-gray-800" : "border-l-white"}`
                                    }, void 0, false, {
                                        fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                        lineNumber: 388,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                lineNumber: 332,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/Roadmaps/Software/software.jsx",
                        lineNumber: 293,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleAIGuideRedirect,
                        className: `group relative p-3 sm:p-4 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-110 active:scale-95 ${darkMode ? "bg-gradient-to-r from-purple-600 to-indigo-700 hover:from-purple-500 hover:to-indigo-600" : "bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700"} text-white`,
                        title: "AI Career Guidance",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-6 h-6 sm:w-7 sm:h-7",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                    lineNumber: 413,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                lineNumber: 407,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `absolute right-full mr-3 top-1/2 transform -translate-y-1/2 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none ${darkMode ? "bg-gray-800 text-white border border-gray-700" : "bg-white text-gray-900 border border-gray-200 shadow-lg"}`,
                                children: [
                                    "AI Career Guide",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-r-0 border-t-4 border-b-4 border-transparent ${darkMode ? "border-l-gray-800" : "border-l-white"}`
                                    }, void 0, false, {
                                        fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                        lineNumber: 430,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                lineNumber: 422,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/Roadmaps/Software/software.jsx",
                        lineNumber: 397,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/Roadmaps/Software/software.jsx",
                lineNumber: 291,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "container mx-auto px-4 sm:px-6 py-8 sm:py-12 max-w-7xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-12 sm:mb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `text-lg sm:text-xl md:text-2xl font-medium leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-600"} max-w-4xl mx-auto px-4`,
                                children: "A comprehensive guide to becoming a Software Engineer with step-by-step learning path, courses, tools, and project ideas."
                            }, void 0, false, {
                                fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                lineNumber: 444,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 sm:mt-8 flex justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `h-1 w-16 sm:w-24 rounded-full bg-gradient-to-r from-blue-600 to-purple-600`
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                    lineNumber: 451,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                lineNumber: 450,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/Roadmaps/Software/software.jsx",
                        lineNumber: 442,
                        columnNumber: 9
                    }, this),
                    isVisualMode ? /* Visual Roadmap */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "transition-all duration-500 ease-in-out",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$Software$2f$visualRoadmap$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            roadmapData: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$Software$2f$roadmapData$2e$json__$28$json$29$__["default"],
                            darkMode: darkMode
                        }, void 0, false, {
                            fileName: "[project]/app/Roadmaps/Software/software.jsx",
                            lineNumber: 460,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/Roadmaps/Software/software.jsx",
                        lineNumber: 459,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6 sm:space-y-8",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$Software$2f$roadmapData$2e$json__$28$json$29$__["default"].map((section)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: (el)=>sectionRefs.current[section.id] = el,
                                className: `${darkMode ? "bg-gray-800/50 border-gray-700/50" : "bg-white/70 border-gray-200/50"} backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-xl border overflow-hidden transition-all duration-500 hover:shadow-2xl ${openSection === section.id ? "ring-2 ring-blue-500/20" : ""}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>toggleSection(section.id),
                                        className: `w-full p-4 sm:p-6 lg:p-8 text-left flex justify-between items-center ${darkMode ? "hover:bg-gray-700/30" : "hover:bg-gray-50/50"} transition-all duration-200 group`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center mb-2 sm:mb-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "inline-flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs sm:text-sm font-bold mr-3 sm:mr-4 flex-shrink-0",
                                                                children: section.id
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                                                lineNumber: 489,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-xl sm:text-2xl md:text-3xl font-bold tracking-tight group-hover:text-blue-600 transition-colors truncate",
                                                                children: section.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                                                lineNumber: 492,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                                        lineNumber: 488,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: `text-sm sm:text-base lg:text-lg font-light leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-600"} ml-9 sm:ml-12 pr-4`,
                                                        children: section.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                                        lineNumber: 496,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                                lineNumber: 487,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "ml-4 sm:ml-6 transform transition-transform duration-200 group-hover:scale-110 flex-shrink-0",
                                                children: openSection === section.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-blue-600",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2.5,
                                                        d: "M5 15l7-7 7 7"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                                        lineNumber: 510,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                                    lineNumber: 504,
                                                    columnNumber: 21
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2.5,
                                                        d: "M19 9l-7 7-7-7"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                                        lineNumber: 524,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                                    lineNumber: 518,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                                lineNumber: 502,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                        lineNumber: 481,
                                        columnNumber: 15
                                    }, this),
                                    openSection === section.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6 lg:pb-8 ${darkMode ? "border-gray-700/50" : "border-gray-200/50"} border-t`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mt-4 sm:mt-6 lg:mt-8",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `p-4 sm:p-6 rounded-lg sm:rounded-xl ${darkMode ? "bg-green-900/20 border-green-500/20" : "bg-green-50/80 border-green-200/50"} border`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-green-600 flex items-center",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xl sm:text-2xl mr-2 sm:mr-3",
                                                                        children: "✅"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                                                        lineNumber: 546,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    "What to Learn"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                                                lineNumber: 545,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                className: "space-y-2 sm:space-y-3",
                                                                children: section.content?.whatToLearn?.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        className: `${darkMode ? "text-gray-200" : "text-gray-700"} flex items-start text-sm sm:text-base leading-relaxed`,
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-green-500 mr-2 sm:mr-3 mt-1 text-base sm:text-lg flex-shrink-0",
                                                                                children: "•"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                                                                lineNumber: 557,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "font-medium",
                                                                                children: item
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                                                                lineNumber: 560,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, index, true, {
                                                                        fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                                                        lineNumber: 553,
                                                                        columnNumber: 27
                                                                    }, this)) || []
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                                                lineNumber: 551,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                                        lineNumber: 542,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `p-4 sm:p-6 rounded-lg sm:rounded-xl ${darkMode ? "bg-orange-900/20 border-orange-500/20" : "bg-orange-50/80 border-orange-200/50"} border`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-orange-600 flex items-center",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xl sm:text-2xl mr-2 sm:mr-3",
                                                                        children: "🧰"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                                                        lineNumber: 571,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    "Tools to Use"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                                                lineNumber: 570,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                className: "space-y-2 sm:space-y-3",
                                                                children: section.content?.toolsToUse?.map((tool, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        className: `${darkMode ? "text-gray-200" : "text-gray-700"} flex items-start text-sm sm:text-base leading-relaxed`,
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-orange-500 mr-2 sm:mr-3 mt-1 text-base sm:text-lg flex-shrink-0",
                                                                                children: "•"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                                                                lineNumber: 582,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "font-medium",
                                                                                children: tool
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                                                                lineNumber: 585,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, index, true, {
                                                                        fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                                                        lineNumber: 578,
                                                                        columnNumber: 27
                                                                    }, this)) || []
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                                                lineNumber: 576,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                                        lineNumber: 567,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `p-4 sm:p-6 rounded-lg sm:rounded-xl ${darkMode ? "bg-blue-900/20 border-blue-500/20" : "bg-blue-50/80 border-blue-200/50"} border`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-blue-600 flex items-center",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xl sm:text-2xl mr-2 sm:mr-3",
                                                                        children: "📚"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                                                        lineNumber: 596,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    "Best Courses"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                                                lineNumber: 595,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-4 sm:space-y-5",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                className: "font-bold mb-2 sm:mb-3 text-base sm:text-lg",
                                                                                children: "In English:"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                                                                lineNumber: 603,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                                className: "space-y-1 sm:space-y-2",
                                                                                children: section.content?.bestCourses?.english?.map((course, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                        className: `text-xs sm:text-sm ${darkMode ? "text-gray-300" : "text-gray-600"} flex items-start leading-relaxed`,
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                className: "text-blue-500 mr-2 sm:mr-3 mt-1 flex-shrink-0",
                                                                                                children: "•"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                                                                                lineNumber: 613,
                                                                                                columnNumber: 35
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                className: "font-medium",
                                                                                                children: course
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                                                                                lineNumber: 616,
                                                                                                columnNumber: 35
                                                                                            }, this)
                                                                                        ]
                                                                                    }, index, true, {
                                                                                        fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                                                                        lineNumber: 609,
                                                                                        columnNumber: 33
                                                                                    }, this)) || []
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                                                                lineNumber: 606,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                                                        lineNumber: 602,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                className: "font-bold mb-2 sm:mb-3 text-base sm:text-lg",
                                                                                children: "In Hindi:"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                                                                lineNumber: 623,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                                className: "space-y-1 sm:space-y-2",
                                                                                children: section.content?.bestCourses?.hindi?.map((course, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                        className: `text-xs sm:text-sm ${darkMode ? "text-gray-300" : "text-gray-600"} flex items-start leading-relaxed`,
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                className: "text-blue-500 mr-2 sm:mr-3 mt-1 flex-shrink-0",
                                                                                                children: "•"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                                                                                lineNumber: 633,
                                                                                                columnNumber: 35
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                className: "font-medium",
                                                                                                children: course
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                                                                                lineNumber: 636,
                                                                                                columnNumber: 35
                                                                                            }, this)
                                                                                        ]
                                                                                    }, index, true, {
                                                                                        fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                                                                        lineNumber: 629,
                                                                                        columnNumber: 33
                                                                                    }, this)) || []
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                                                                lineNumber: 626,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                                                        lineNumber: 622,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                                                lineNumber: 601,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                                        lineNumber: 592,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `p-4 sm:p-6 rounded-lg sm:rounded-xl ${darkMode ? "bg-red-900/20 border-red-500/20" : "bg-red-50/80 border-red-200/50"} border`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-red-600 flex items-center",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xl sm:text-2xl mr-2 sm:mr-3",
                                                                        children: "📘"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                                                        lineNumber: 650,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    "Docs & Websites"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                                                lineNumber: 649,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                className: "space-y-2 sm:space-y-3",
                                                                children: section.content?.docsAndWebsites?.map((doc, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        className: `${darkMode ? "text-gray-200" : "text-gray-700"} flex items-start text-sm sm:text-base leading-relaxed`,
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-red-500 mr-2 sm:mr-3 mt-1 text-base sm:text-lg flex-shrink-0",
                                                                                children: "•"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                                                                lineNumber: 661,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "font-medium",
                                                                                children: doc
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                                                                lineNumber: 664,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, index, true, {
                                                                        fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                                                        lineNumber: 657,
                                                                        columnNumber: 27
                                                                    }, this)) || []
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                                                lineNumber: 655,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                                        lineNumber: 646,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                                lineNumber: 540,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-6 sm:mt-8",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-purple-600 flex items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-2xl sm:text-3xl mr-3 sm:mr-4",
                                                                children: "💡"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                                                lineNumber: 674,
                                                                columnNumber: 23
                                                            }, this),
                                                            "Project Ideas"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                                        lineNumber: 673,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6",
                                                        children: section.content?.projectIdeas?.map((project, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `p-4 sm:p-6 rounded-lg sm:rounded-xl ${darkMode ? "bg-purple-900/20 border-purple-500/20" : "bg-purple-50/80 border-purple-200/50"} border transition-all duration-200 hover:shadow-lg hover:scale-105`,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-start",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-purple-500 mr-3 sm:mr-4 mt-1 text-lg sm:text-xl flex-shrink-0",
                                                                            children: "💡"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                                                            lineNumber: 686,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: `${darkMode ? "text-gray-200" : "text-gray-700"} font-medium text-sm sm:text-base leading-relaxed`,
                                                                            children: project
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                                                            lineNumber: 689,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                                                    lineNumber: 685,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, index, false, {
                                                                fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                                                lineNumber: 681,
                                                                columnNumber: 25
                                                            }, this)) || []
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                                        lineNumber: 679,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                                lineNumber: 672,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                        lineNumber: 537,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, section.id, true, {
                                fileName: "[project]/app/Roadmaps/Software/software.jsx",
                                lineNumber: 469,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/Roadmaps/Software/software.jsx",
                        lineNumber: 467,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/Roadmaps/Software/software.jsx",
                lineNumber: 440,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/Roadmaps/Software/software.jsx",
        lineNumber: 125,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=app_Roadmaps_Software_b1487710._.js.map