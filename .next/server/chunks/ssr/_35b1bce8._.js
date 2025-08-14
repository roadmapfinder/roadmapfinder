module.exports = {

"[project]/app/Roadmaps/Devops/downloadPdf.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    title.textContent = "Devops Engineer Roadmap";
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
        pdf.save("Devops_Roadmap.pdf");
    } catch (error) {
        console.error("Error generating PDF:", error);
        alert("There was an error generating the PDF. Please try again.");
    } finally{
        setDownloading(false);
    }
};
}}),
"[project]/app/Roadmaps/Devops/roadmapData.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("[{\"id\":1,\"title\":\"Linux Fundamentals\",\"description\":\"Master Linux operating system basics for DevOps\",\"icon\":\"Terminal\",\"content\":{\"whatToLearn\":[\"Linux File System\",\"Command Line Interface\",\"Permissions & Users\",\"Shell Scripting\",\"Package Management\",\"Process Management\"],\"bestCourses\":{\"english\":[\"Linux System Administration (Coursera)\",\"Linux Command Line Basics (Udacity)\",\"Red Hat Enterprise Linux Technical Overview (edX)\",\"The Linux Command Line Bootcamp (Udemy)\"],\"hindi\":[\"Linux Tutorial in Hindi (CodeWithHarry)\",\"Linux Administration Course in Hindi (Great Learning)\",\"Complete Linux Course in Hindi (ApnaCollege)\",\"Shell Scripting in Hindi (TechTFQ)\"]},\"toolsToUse\":[\"Ubuntu/Debian\",\"CentOS/RHEL\",\"Bash Shell\",\"Vim/Nano\",\"SSH\",\"Tmux/Screen\"],\"docsAndWebsites\":[\"Linux Documentation Project\",\"Linux Journey\",\"DigitalOcean Tutorials\",\"Linux Hint\",\"Man Pages\"],\"projectIdeas\":[\"Automated backup script\",\"System monitoring dashboard\",\"User management automation\",\"Custom shell environment setup\"]}},{\"id\":2,\"title\":\"Networking & Security\",\"description\":\"Understand networking concepts and security principles\",\"icon\":\"Shield\",\"content\":{\"whatToLearn\":[\"TCP/IP Fundamentals\",\"DNS, DHCP, HTTP/S\",\"Firewalls & Security Groups\",\"VPN & Encryption\",\"Load Balancing\",\"SSL/TLS & Certificates\"],\"bestCourses\":{\"english\":[\"Computer Networking (Stanford/Coursera)\",\"Networking for Web Developers (Udacity)\",\"AWS Networking Fundamentals (A Cloud Guru)\",\"Practical Networking (Udemy)\"],\"hindi\":[\"Networking Concepts in Hindi (Unacademy)\",\"Computer Networks Hindi (5 Minutes Engineering)\",\"Network Security Hindi (TechGyan)\",\"SSL/TLS Certificate Course Hindi (NetworkTuts)\"]},\"toolsToUse\":[\"Wireshark\",\"nmap\",\"tcpdump\",\"OpenSSL\",\"iptables/UFW\",\"Fail2Ban\"],\"docsAndWebsites\":[\"Cloudflare Learning Center\",\"Networking For DevOps\",\"OWASP Security Practices\",\"SSL Shopper\",\"SecurityHeaders.com\"],\"projectIdeas\":[\"Network traffic analyzer\",\"Setup a secure VPN server\",\"Firewall configuration automation\",\"SSL certificate lifecycle manager\"]}},{\"id\":3,\"title\":\"Source Control Management\",\"description\":\"Master Git and version control workflows\",\"icon\":\"GitBranch\",\"content\":{\"whatToLearn\":[\"Git Basics (add, commit, push)\",\"Branching & Merging Strategies\",\"Pull Requests & Code Reviews\",\"Git Hooks & Advanced Features\",\"GitOps Principles\",\"Monorepo vs Multi-repo\"],\"bestCourses\":{\"english\":[\"Git & GitHub - The Complete Git Guide (Udemy)\",\"Version Control with Git (Atlassian)\",\"How Git Works (Pluralsight)\",\"Advanced Git Techniques (LinkedIn Learning)\"],\"hindi\":[\"Complete Git & GitHub Course Hindi (CodeWithHarry)\",\"Git Tutorial for Beginners Hindi (Thapa Technical)\",\"Git Advanced Concepts in Hindi (ApnaCollege)\",\"GitHub Actions Hindi Course (TechnoGeek)\"]},\"toolsToUse\":[\"Git\",\"GitHub/GitLab/Bitbucket\",\"Git Hooks\",\"GitHub Actions\",\"Husky\",\"GitKraken/Sourcetree\"],\"docsAndWebsites\":[\"Git Documentation\",\"GitHub Guides\",\"Atlassian Git Tutorials\",\"Git Tower Learning Center\",\"Oh Shit, Git!?!\"],\"projectIdeas\":[\"Git workflow automation tool\",\"Custom Git hooks implementation\",\"Create a CI pipeline with GitHub Actions\",\"Team collaboration via GitOps\"]}},{\"id\":4,\"title\":\"Containerization & Orchestration\",\"description\":\"Learn container technologies and orchestration platforms\",\"icon\":\"Container\",\"content\":{\"whatToLearn\":[\"Docker Fundamentals\",\"Docker Compose\",\"Kubernetes Basics\",\"Kubernetes Deployments\",\"Container Security\",\"Service Mesh (Istio)\"],\"bestCourses\":{\"english\":[\"Docker & Kubernetes: The Complete Guide (Udemy)\",\"Introduction to Containers (Linux Foundation)\",\"Kubernetes for Developers (edX)\",\"Docker Mastery (Bret Fisher/Udemy)\"],\"hindi\":[\"Docker Complete Course Hindi (TechWorld with Nana)\",\"Kubernetes for Beginners Hindi (CodeWithDurgesh)\",\"Container Orchestration in Hindi (GreatLearning)\",\"Kubernetes Zero to Hero Hindi (KodeKloud)\"]},\"toolsToUse\":[\"Docker\",\"Kubernetes\",\"Helm\",\"K3s/Kind/Minikube\",\"Podman\",\"Lens/K9s\"],\"docsAndWebsites\":[\"Docker Documentation\",\"Kubernetes.io\",\"Helm Hub\",\"CNCF Landscape\",\"Container Journal\"],\"projectIdeas\":[\"Multi-container app with Docker Compose\",\"Kubernetes cluster setup & deployment\",\"Container image optimization pipeline\",\"Custom Kubernetes operator\"]}},{\"id\":5,\"title\":\"Infrastructure as Code\",\"description\":\"Automate infrastructure provisioning and management\",\"icon\":\"Code\",\"content\":{\"whatToLearn\":[\"Terraform\",\"CloudFormation\",\"Ansible\",\"Puppet/Chef\",\"Packer\",\"Pulumi\"],\"bestCourses\":{\"english\":[\"HashiCorp Terraform Associate Certification (Udemy)\",\"Ansible for DevOps (Jeff Geerling)\",\"AWS CloudFormation Master Class (A Cloud Guru)\",\"Infrastructure as Code (LinkedIn Learning)\"],\"hindi\":[\"Terraform Complete Tutorial Hindi (DevOps Launchpad)\",\"Ansible for Beginners Hindi (TechPrimer)\",\"Infrastructure as Code Hindi (CloudyTuts)\",\"Puppet & Chef Tutorial Hindi (DevOpsShala)\"]},\"toolsToUse\":[\"Terraform\",\"Ansible\",\"AWS CloudFormation\",\"Puppet\",\"Packer\",\"Terragrunt\"],\"docsAndWebsites\":[\"Terraform Documentation\",\"Ansible Documentation\",\"CloudFormation User Guide\",\"Gruntwork Blog\",\"IaC Community\"],\"projectIdeas\":[\"Multi-environment infrastructure with Terraform\",\"Configuration management with Ansible\",\"Golden image pipeline with Packer\",\"Self-healing infrastructure system\"]}},{\"id\":6,\"title\":\"CI/CD & Automation\",\"description\":\"Build automated pipelines for continuous integration and delivery\",\"icon\":\"Workflow\",\"content\":{\"whatToLearn\":[\"CI/CD Principles\",\"Jenkins\",\"GitHub Actions\",\"GitLab CI\",\"ArgoCD\",\"Release Strategies\"],\"bestCourses\":{\"english\":[\"DevOps Project: CI/CD with Jenkins (Udemy)\",\"GitHub Actions - The Complete Guide (Academind)\",\"GitLab CI: Pipelines, CI/CD and DevOps (Udemy)\",\"Implementing a Full CI/CD Pipeline (Pluralsight)\"],\"hindi\":[\"Jenkins Complete Course Hindi (TrainingWithIndustryExperts)\",\"CI/CD Pipeline Tutorial Hindi (TechnoGeek)\",\"GitHub Actions in Hindi (CodeWithHarry)\",\"GitLab CI/CD Hindi (DevOpsTube)\"]},\"toolsToUse\":[\"Jenkins\",\"GitHub Actions\",\"GitLab CI/CD\",\"CircleCI\",\"ArgoCD\",\"Spinnaker\"],\"docsAndWebsites\":[\"Jenkins Documentation\",\"GitHub Actions Documentation\",\"GitLab CI Documentation\",\"CD Foundation\",\"DevOps.com\"],\"projectIdeas\":[\"Complete CI/CD pipeline for web application\",\"Multi-branch pipeline with Jenkins\",\"GitOps workflow with ArgoCD\",\"Automated testing & deployment system\"]}},{\"id\":7,\"title\":\"Cloud Platforms\",\"description\":\"Learn major cloud platforms and services\",\"icon\":\"CloudCog\",\"content\":{\"whatToLearn\":[\"AWS Core Services\",\"Azure Fundamentals\",\"Google Cloud Platform\",\"Cloud Security\",\"Cost Optimization\",\"Multi-Cloud Strategy\"],\"bestCourses\":{\"english\":[\"AWS Certified Solutions Architect (A Cloud Guru)\",\"Microsoft Azure Fundamentals (Microsoft Learn)\",\"Google Cloud Platform Fundamentals (Coursera)\",\"Cloud Computing Specialization (University of Illinois)\"],\"hindi\":[\"AWS Tutorial in Hindi (Simplilearn)\",\"Azure Complete Course Hindi (GreatLearning)\",\"GCP Fundamentals Hindi (ExamPro)\",\"Cloud Computing Basics Hindi (TechnoFunda)\"]},\"toolsToUse\":[\"AWS CLI\",\"Azure CLI\",\"Google Cloud SDK\",\"Terraform\",\"CloudFormation\",\"Cost Explorer\"],\"docsAndWebsites\":[\"AWS Documentation\",\"Microsoft Azure Documentation\",\"Google Cloud Documentation\",\"The Cloud Girl\",\"Last Week in AWS\"],\"projectIdeas\":[\"Serverless application deployment\",\"Auto-scaling architecture\",\"Cloud cost optimization system\",\"Multi-region disaster recovery solution\"]}},{\"id\":8,\"title\":\"Monitoring & Observability\",\"description\":\"Implement robust monitoring, logging, and alerting systems\",\"icon\":\"LineChart\",\"content\":{\"whatToLearn\":[\"Metrics Collection\",\"Logging Strategies\",\"Distributed Tracing\",\"Alerting & On-call\",\"Dashboarding\",\"SLIs, SLOs & SLAs\"],\"bestCourses\":{\"english\":[\"Monitoring and Observability with Prometheus (Udemy)\",\"ELK Stack for Beginners (Pluralsight)\",\"Grafana Fundamentals (Grafana Labs)\",\"Google SRE: Measuring and Managing Reliability (Coursera)\"],\"hindi\":[\"Prometheus & Grafana Tutorial Hindi (TechWorld with Nana)\",\"ELK Stack Complete Course Hindi (TechPrimer)\",\"Cloud Monitoring Hindi (CloudYatra)\",\"DevOps Monitoring Hindi (KodeKloud)\"]},\"toolsToUse\":[\"Prometheus\",\"Grafana\",\"ELK Stack\",\"Loki\",\"Jaeger/Zipkin\",\"Datadog/New Relic\"],\"docsAndWebsites\":[\"Prometheus Documentation\",\"Grafana Documentation\",\"Elastic Documentation\",\"OpenTelemetry\",\"Google SRE Book\"],\"projectIdeas\":[\"Full-stack monitoring solution\",\"Custom alerting system\",\"SLO-based monitoring implementation\",\"Observability as code\"]}}]"));}}),
"[project]/app/Roadmaps/Devops/devops.jsx [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const e = new Error(`Could not parse module '[project]/app/Roadmaps/Devops/devops.jsx'

Expected ',', got '{'`);
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}}),

};

//# sourceMappingURL=_35b1bce8._.js.map