module.exports = {

"[project]/app/Roadmaps/OS/roadmapData.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("[{\"id\":1,\"title\":\"Foundations of Operating Systems (Beginner)\",\"description\":\"Build fundamental understanding of operating systems concepts and components\",\"content\":{\"whatToLearn\":[\"What is an OS and why it exists\",\"Types of OS: Batch, Multi-tasking, Real-time, Distributed, Embedded\",\"OS components: Kernel, Shell, System Programs & Libraries\",\"Kernel types: monolithic, microkernel, hybrid\",\"OS services: Process management, memory, I/O, file systems, security\",\"Boot process: BIOS/UEFI → Bootloader → Kernel → Init → Shell\"],\"bestCourses\":{\"english\":[\"Operating Systems Course (CS6200 - Georgia Tech)\",\"Introduction to Operating Systems (UC Berkeley CS162)\",\"Operating Systems Fundamentals (MIT OpenCourseWare)\",\"Coursera Operating Systems Specialization\"],\"hindi\":[\"Operating System Complete Course Hindi (Gate Smashers)\",\"OS Concepts Hindi (Neso Academy)\",\"Operating System Hindi Tutorial (Knowledge Gate)\",\"Computer Science OS Hindi (Easy Engineering Classes)\"]},\"toolsToUse\":[\"Virtual Machines (VirtualBox, VMware)\",\"Linux Distributions (Ubuntu, Fedora)\",\"System Monitoring Tools (Task Manager, Activity Monitor)\",\"Text Editors and IDEs\",\"Command Line Interfaces\"],\"docsAndWebsites\":[\"Operating System Concepts (Silberschatz - Dinosaur Book)\",\"Modern Operating Systems (Tanenbaum)\",\"Operating Systems: Three Easy Pieces (OSTEP)\",\"MIT Operating Systems Course Materials\",\"GeeksforGeeks Operating Systems\"],\"projectIdeas\":[\"Create OS comparison chart with features\",\"Implement simple shell commands\",\"Boot process documentation project\",\"OS components visualization diagram\"]}},{\"id\":2,\"title\":\"Linux/Unix Basics (Practical OS Entry)\",\"description\":\"Get hands-on experience with Linux systems and command line operations\",\"content\":{\"whatToLearn\":[\"Linux installation and setup (Ubuntu, Fedora, Arch)\",\"Filesystem hierarchy: /bin, /etc, /dev, /proc\",\"Essential commands: ls, cat, ps, kill, chmod, df, du, top\",\"Shell scripting basics: bash, variables, loops, conditionals\",\"Process management: ps, htop, signals, jobs, background tasks\",\"File permissions and ownership concepts\"],\"bestCourses\":{\"english\":[\"Introduction to Linux (Linux Foundation)\",\"Linux Command Line Basics (edX)\",\"Complete Linux Course (Udemy)\",\"Linux for Beginners (Coursera)\"],\"hindi\":[\"Linux Complete Course Hindi (CodeWithHarry)\",\"Linux Fundamentals Hindi (Technical Suneja)\",\"Ubuntu Linux Tutorial Hindi (Great Learning)\",\"Linux Commands Hindi (TechWorld with Nana)\"]},\"toolsToUse\":[\"Linux Distributions (Ubuntu, Fedora, CentOS)\",\"Terminal Emulators\",\"Text Editors (nano, vim, emacs)\",\"Package Managers (apt, yum, dnf)\",\"SSH Clients\"],\"docsAndWebsites\":[\"The Linux Command Line (William Shotts)\",\"Linux Documentation Project\",\"Ubuntu Official Documentation\",\"Arch Linux Wiki\",\"LinuxCommand.org\"],\"projectIdeas\":[\"Create automated system setup script\",\"Build file management utility\",\"Develop system information dashboard\",\"Implement basic shell with custom commands\"]}},{\"id\":3,\"title\":\"Process Management\",\"description\":\"Master process lifecycle, scheduling algorithms, and inter-process communication\",\"content\":{\"whatToLearn\":[\"Process concepts and states: new, ready, running, waiting, terminated\",\"Scheduling algorithms: FCFS, SJF, Round Robin, Priority, Multilevel Queue\",\"Inter-Process Communication: Pipes, Shared Memory, Message Queues, Semaphores\",\"Context switching mechanisms\",\"Threads vs Processes comparison\",\"Multithreading and concurrency concepts\"],\"bestCourses\":{\"english\":[\"Process Management in Operating Systems (Coursera)\",\"Advanced Operating Systems (Georgia Tech)\",\"System Programming (UC Berkeley)\",\"Operating Systems Design (MIT)\"],\"hindi\":[\"Process Management OS Hindi (Gate Smashers)\",\"Scheduling Algorithms Hindi (Neso Academy)\",\"IPC Concepts Hindi (Knowledge Gate)\",\"Threading Concepts Hindi (Easy Engineering)\"]},\"toolsToUse\":[\"Process monitoring tools (ps, top, htop)\",\"System call tracers (strace, ltrace)\",\"Programming languages (C, Java, Python)\",\"Threading libraries (pthreads)\",\"IPC implementation tools\"],\"docsAndWebsites\":[\"Modern Operating Systems (Tanenbaum)\",\"Advanced Programming in UNIX Environment\",\"Linux System Programming (Robert Love)\",\"Operating Systems: Three Easy Pieces\",\"Process Management Documentation\"],\"projectIdeas\":[\"Implement process scheduler simulator\",\"Create IPC communication system\",\"Build multi-threaded application\",\"Develop process monitoring tool\"]}},{\"id\":4,\"title\":\"Memory Management\",\"description\":\"Understand virtual memory, paging, segmentation, and memory optimization techniques\",\"content\":{\"whatToLearn\":[\"Physical vs Virtual memory concepts\",\"Paging and Segmentation mechanisms\",\"Demand paging and Page Replacement Algorithms: FIFO, LRU, Optimal\",\"Thrashing and Working Set concepts\",\"Memory allocation strategies: First-fit, Best-fit, Worst-fit\",\"Stack vs Heap memory management\"],\"bestCourses\":{\"english\":[\"Memory Management in Operating Systems (edX)\",\"Virtual Memory Systems (Stanford)\",\"Advanced Memory Management (Coursera)\",\"System Programming Memory Concepts\"],\"hindi\":[\"Memory Management OS Hindi (Gate Smashers)\",\"Virtual Memory Hindi (Neso Academy)\",\"Paging Concepts Hindi (Knowledge Gate)\",\"Memory Allocation Hindi (Easy Engineering)\"]},\"toolsToUse\":[\"Memory analysis tools (valgrind, top)\",\"System monitoring (/proc/meminfo)\",\"Memory profilers\",\"Programming tools for memory management\",\"Virtual memory simulators\"],\"docsAndWebsites\":[\"Understanding Virtual Memory\",\"Linux Memory Management Documentation\",\"Memory Management Algorithms\",\"Operating System Memory Concepts\",\"Advanced Memory Management Techniques\"],\"projectIdeas\":[\"Memory management simulator\",\"Page replacement algorithm implementation\",\"Memory leak detection tool\",\"Virtual memory usage analyzer\"]}},{\"id\":5,\"title\":\"Synchronization & Concurrency\",\"description\":\"Handle race conditions, deadlocks, and implement synchronization mechanisms\",\"content\":{\"whatToLearn\":[\"Race conditions, Deadlock, and Starvation concepts\",\"Synchronization primitives: Locks, Semaphores, Monitors, Condition variables\",\"Classic problems: Producer-Consumer, Reader-Writer problem\",\"Deadlock detection, prevention, avoidance (Banker's algorithm)\",\"Thread synchronization techniques\",\"Atomic operations and memory barriers\"],\"bestCourses\":{\"english\":[\"Concurrency in Operating Systems (Coursera)\",\"Parallel and Concurrent Programming\",\"Synchronization Mechanisms Course\",\"Advanced Concurrency Concepts\"],\"hindi\":[\"Synchronization OS Hindi (Gate Smashers)\",\"Deadlock Concepts Hindi (Neso Academy)\",\"Concurrency Problems Hindi (Knowledge Gate)\",\"Threading Synchronization Hindi (Easy Engineering)\"]},\"toolsToUse\":[\"Threading libraries (pthreads, Java threads)\",\"Synchronization tools\",\"Deadlock detection tools\",\"Concurrency testing frameworks\",\"Race condition analyzers\"],\"docsAndWebsites\":[\"Concurrency Programming Documentation\",\"Synchronization Algorithms Guide\",\"Deadlock Prevention Strategies\",\"Thread Safety Best Practices\",\"Concurrent Programming Patterns\"],\"projectIdeas\":[\"Implement classic concurrency problems in C/Java/Python\",\"Build deadlock detection system\",\"Create thread pool implementation\",\"Develop synchronization benchmark tool\"]}},{\"id\":6,\"title\":\"File Systems\",\"description\":\"Explore file organization, allocation methods, and disk scheduling algorithms\",\"content\":{\"whatToLearn\":[\"File attributes and access methods (sequential, direct)\",\"File allocation methods: Contiguous, Linked, Indexed\",\"Directory structures: Single-level, Two-level, Tree, DAG\",\"Journaling file systems: ext4, NTFS, XFS, ZFS\",\"File system operations: mounting, unmounting\",\"Disk scheduling algorithms: FCFS, SSTF, SCAN, C-SCAN, LOOK\"],\"bestCourses\":{\"english\":[\"File Systems in Operating Systems (edX)\",\"Storage Systems and File Management\",\"Advanced File System Concepts\",\"Disk Management and Optimization\"],\"hindi\":[\"File System OS Hindi (Gate Smashers)\",\"Disk Scheduling Hindi (Neso Academy)\",\"File Allocation Methods Hindi (Knowledge Gate)\",\"Storage Management Hindi (Easy Engineering)\"]},\"toolsToUse\":[\"Linux file system tools (lsblk, fdisk, mount, df, du, fsck)\",\"Disk partitioning tools\",\"File system analyzers\",\"Disk performance monitoring tools\",\"Storage management utilities\"],\"docsAndWebsites\":[\"Linux File System Documentation\",\"File System Implementation Guide\",\"Disk Scheduling Algorithms\",\"Modern File Systems Overview\",\"Storage System Architecture\"],\"projectIdeas\":[\"File system simulator implementation\",\"Disk scheduling algorithm comparison\",\"File organization utility\",\"Storage performance analyzer\"]}},{\"id\":7,\"title\":\"I/O Systems\",\"description\":\"Master I/O hardware concepts, device drivers, and network programming\",\"content\":{\"whatToLearn\":[\"I/O Hardware basics: controllers, buses, interrupts, DMA\",\"I/O software layers: Device drivers, buffering, spooling\",\"Blocking vs Non-blocking I/O operations\",\"Network I/O fundamentals: sockets, TCP vs UDP\",\"Interrupt handling and DMA operations\",\"Device driver architecture and implementation\"],\"bestCourses\":{\"english\":[\"I/O Systems and Device Management\",\"Network Programming Fundamentals\",\"Device Driver Development\",\"System I/O Optimization\"],\"hindi\":[\"I/O Systems OS Hindi (Gate Smashers)\",\"Device Management Hindi (Neso Academy)\",\"Network Programming Hindi (Knowledge Gate)\",\"I/O Operations Hindi (Easy Engineering)\"]},\"toolsToUse\":[\"Socket programming tools\",\"I/O monitoring utilities (iotop, iostat)\",\"Network analysis tools\",\"Device driver development kits\",\"System call tracers\"],\"docsAndWebsites\":[\"Linux Device Drivers (LDD3)\",\"Network Programming Documentation\",\"I/O Systems Architecture\",\"Socket Programming Guide\",\"Device Driver Development\"],\"projectIdeas\":[\"Socket programming implementation in C/Python\",\"Simple device driver development\",\"I/O performance monitoring tool\",\"Network communication system\"]}},{\"id\":8,\"title\":\"Advanced OS Concepts\",\"description\":\"Explore virtualization, distributed systems, real-time OS, and security concepts\",\"content\":{\"whatToLearn\":[\"Virtualization concepts: VMs vs Containers\",\"Distributed OS and Cloud OS fundamentals\",\"Real-Time Operating Systems (RTOS) principles\",\"Microkernel vs Monolithic architecture debate\",\"OS Security: Authentication, ACLs, SELinux, Sandboxing\",\"Embedded OS: FreeRTOS, Zephyr, VxWorks\"],\"bestCourses\":{\"english\":[\"Advanced Operating Systems (Georgia Tech)\",\"Distributed Systems Concepts\",\"Real-Time Systems Design\",\"Operating System Security\"],\"hindi\":[\"Advanced OS Concepts Hindi (Gate Smashers)\",\"Distributed Systems Hindi (Neso Academy)\",\"RTOS Concepts Hindi (Knowledge Gate)\",\"OS Security Hindi (Easy Engineering)\"]},\"toolsToUse\":[\"Virtualization platforms (VMware, VirtualBox, KVM)\",\"Container technologies (Docker, LXC)\",\"RTOS development environments\",\"Security analysis tools\",\"Distributed system simulators\"],\"docsAndWebsites\":[\"Distributed Systems Documentation\",\"Real-Time Systems Guide\",\"Virtualization Technology Overview\",\"Operating System Security Guide\",\"Embedded Systems Documentation\"],\"projectIdeas\":[\"Virtualization performance comparison\",\"Real-time task scheduler implementation\",\"Distributed system simulation\",\"Security hardening automation tool\"]}},{\"id\":9,\"title\":\"System Programming (Industry Skills)\",\"description\":\"Develop practical system programming skills with C and Linux system calls\",\"content\":{\"whatToLearn\":[\"C Programming on Linux environment\",\"System calls: fork(), exec(), wait(), pipe(), open(), read(), write()\",\"Error handling with errno\",\"File descriptors and I/O operations\",\"Linux Kernel Modules (LKMs) development\",\"Kernel module operations: insmod, rmmod, dmesg\"],\"bestCourses\":{\"english\":[\"Advanced Programming in UNIX Environment\",\"Linux System Programming Course\",\"Kernel Module Development\",\"System Calls and Libraries\"],\"hindi\":[\"System Programming Hindi (CodeWithHarry)\",\"Linux System Calls Hindi (TechWorld)\",\"C Programming Linux Hindi (Great Learning)\",\"Kernel Programming Hindi (Technical Suneja)\"]},\"toolsToUse\":[\"GCC Compiler and development tools\",\"Debugging tools (gdb, strace, perf, ltrace)\",\"Kernel development environment\",\"System call tracers\",\"Performance profiling tools\"],\"docsAndWebsites\":[\"Advanced Programming in UNIX Environment (APUE)\",\"Linux System Programming (Robert Love)\",\"Linux Kernel Development Guide\",\"System Call Documentation\",\"Kernel Module Programming Guide\"],\"projectIdeas\":[\"Simple kernel driver development\",\"System call wrapper library\",\"Process communication framework\",\"Custom file system implementation\"]}},{\"id\":10,\"title\":\"DevOps/Cloud/Security Integration\",\"description\":\"Integrate OS knowledge with modern DevOps practices and cloud technologies\",\"content\":{\"whatToLearn\":[\"Container orchestration with Docker and LXC\",\"Cloud OS management: AWS EC2, GCP Compute, Azure VM\",\"Configuration management: Ansible, Puppet, Chef\",\"OS Security implementation: Firewalls, SELinux, AppArmor\",\"System auditing and log management\",\"OS Hardening following CIS Benchmarks\"],\"bestCourses\":{\"english\":[\"DevOps with Linux (Linux Academy)\",\"Cloud Security and Compliance\",\"Configuration Management Course\",\"Container Security Best Practices\"],\"hindi\":[\"DevOps Linux Integration Hindi (TechWorld)\",\"Cloud Computing OS Hindi (Great Learning)\",\"Linux Security Hindi (Technical Suneja)\",\"Container Technologies Hindi (CodeWithHarry)\"]},\"toolsToUse\":[\"Container platforms (Docker, Kubernetes)\",\"Cloud CLI tools (AWS CLI, Azure CLI, gcloud)\",\"Configuration management tools\",\"Security scanning tools\",\"Monitoring and alerting systems\"],\"docsAndWebsites\":[\"Docker and Container Documentation\",\"Cloud Provider OS Guides\",\"CIS Security Benchmarks\",\"DevOps Integration Best Practices\",\"Container Security Documentation\"],\"projectIdeas\":[\"Containerized application deployment\",\"Cloud infrastructure automation\",\"Security compliance checker\",\"Multi-cloud OS management system\"]}},{\"id\":11,\"title\":\"Specialization Paths\",\"description\":\"Choose your career specialization and focus on specific OS domains\",\"content\":{\"whatToLearn\":[\"System Engineer/SRE: Linux administration, cloud, monitoring\",\"Kernel Developer: Linux kernel internals, drivers, C/Rust programming\",\"Embedded OS Developer: RTOS, C programming, ARM assembly\",\"Cybersecurity/OS Internals: OS exploits, sandboxing, reverse engineering\",\"Performance Engineering: System optimization, benchmarking\",\"Cloud Architecture: OS in cloud environments, orchestration\"],\"bestCourses\":{\"english\":[\"Linux Kernel Internals (Linux Foundation)\",\"Embedded Systems Programming\",\"Cybersecurity Fundamentals\",\"Site Reliability Engineering\"],\"hindi\":[\"Kernel Development Hindi (Advanced Level)\",\"Embedded Programming Hindi (Technical Suneja)\",\"Cybersecurity OS Hindi (Great Learning)\",\"SRE Practices Hindi (TechWorld)\"]},\"toolsToUse\":[\"Specialized development environments\",\"Industry-specific tools and frameworks\",\"Professional monitoring and debugging tools\",\"Security analysis and penetration testing tools\",\"Performance optimization utilities\"],\"docsAndWebsites\":[\"Linux Kernel Development (Robert Love)\",\"Understanding the Linux Kernel\",\"Embedded Systems Documentation\",\"Security Research Publications\",\"SRE Best Practices Documentation\"],\"projectIdeas\":[\"Custom kernel module for specific hardware\",\"Embedded real-time system implementation\",\"Security vulnerability assessment tool\",\"Production monitoring and alerting system\"]}},{\"id\":12,\"title\":\"Practice & Projects\",\"description\":\"Apply knowledge through hands-on projects and coding challenges\",\"content\":{\"whatToLearn\":[\"LeetCode OS and concurrency problems\",\"Build custom mini operating system (like xv6)\",\"Implement classic OS algorithms\",\"Create system utilities and tools\",\"Performance benchmarking and optimization\",\"Open source contribution to OS projects\"],\"bestCourses\":{\"english\":[\"Operating Systems Engineering (MIT 6.828)\",\"xv6 Operating System Implementation\",\"Advanced System Programming Projects\",\"Open Source OS Development\"],\"hindi\":[\"OS Projects Implementation Hindi\",\"System Programming Projects Hindi\",\"Advanced OS Concepts Projects Hindi\",\"Mini OS Development Hindi\"]},\"toolsToUse\":[\"Development environments for OS projects\",\"Version control systems (Git)\",\"Testing and debugging frameworks\",\"Performance measurement tools\",\"Documentation and presentation tools\"],\"docsAndWebsites\":[\"xv6 Operating System Source Code\",\"OS Development Wiki (OSDev.org)\",\"MIT 6.828 Course Materials\",\"Linux Kernel Source Code\",\"Operating Systems Project Ideas\"],\"projectIdeas\":[\"Build mini operating system from scratch\",\"Implement custom scheduler algorithms\",\"Create system monitoring dashboard\",\"Develop kernel-level security module\"]}}]"));}}),
"[project]/app/Roadmaps/OS/downloadPdf.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    title.textContent = "Operating System Roadmap";
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
        pdf.save("OS_Roadmap.pdf");
    } catch (error) {
        console.error("Error generating PDF:", error);
        alert("There was an error generating the PDF. Please try again.");
    } finally{
        setDownloading(false);
    }
};
}}),
"[project]/app/Roadmaps/OS/visualRoadmap.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>OSMasteryRoadmap)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
function OSMasteryRoadmap() {
    const roadmap = [
        {
            title: "OS Foundations",
            subtitle: "Understanding Core Concepts",
            steps: [
                {
                    step: "Step - 1",
                    topic: "What is an Operating System?",
                    category: "Foundation (Mandatory)",
                    details: "OS purpose, types (Batch, Multi-tasking, Real-time, Distributed, Embedded), system architecture overview"
                },
                {
                    step: "Step - 2",
                    topic: "OS Components & Services",
                    category: "System Architecture",
                    details: "Kernel (monolithic, microkernel, hybrid), Shell (CLI/GUI), System Programs, Libraries, boot process"
                },
                {
                    step: "Step - 3",
                    topic: "Linux/Unix Fundamentals",
                    category: "Practical OS Entry",
                    details: "Linux installation, filesystem hierarchy (/bin, /etc, /dev, /proc), essential commands, shell scripting"
                }
            ]
        },
        {
            title: "Core OS Concepts",
            subtitle: "System Internals Mastery",
            steps: [
                {
                    step: "Step - 4",
                    topic: "Process Management",
                    category: "System Processes",
                    details: "Process states, scheduling algorithms (FCFS, SJF, Round Robin), context switching, threads vs processes"
                },
                {
                    step: "Step - 5",
                    topic: "Memory Management",
                    category: "Memory Systems",
                    details: "Virtual memory, paging, segmentation, page replacement algorithms (LRU, FIFO), thrashing, stack vs heap"
                },
                {
                    step: "Step - 6",
                    topic: "Inter-Process Communication",
                    category: "Process Coordination",
                    details: "Pipes, shared memory, message queues, semaphores, signals, synchronization primitives"
                },
                {
                    step: "Step - 7",
                    topic: "Synchronization & Concurrency",
                    category: "Concurrent Systems",
                    details: "Race conditions, deadlocks, locks, monitors, producer-consumer problems, Banker's algorithm"
                }
            ]
        },
        {
            title: "Advanced OS Topics",
            subtitle: "Deep System Understanding",
            steps: [
                {
                    step: "Step - 8",
                    topic: "File Systems",
                    category: "Storage Management",
                    details: "File allocation methods, directory structures, journaling (ext4, NTFS, XFS, ZFS), disk scheduling"
                },
                {
                    step: "Step - 9",
                    topic: "I/O Systems",
                    category: "Input/Output Management",
                    details: "I/O hardware, device drivers, interrupts, DMA, blocking vs non-blocking I/O, network I/O basics"
                },
                {
                    step: "Step - 10",
                    topic: "Virtualization & Containers",
                    category: "Modern OS Concepts",
                    details: "VMs vs Containers, Docker, hypervisors, resource isolation, container orchestration basics"
                },
                {
                    step: "Step - 11",
                    topic: "OS Security",
                    category: "System Security",
                    details: "Authentication, access control lists, SELinux, sandboxing, OS hardening, security auditing"
                }
            ]
        },
        {
            title: "System Programming",
            subtitle: "Hands-on Implementation",
            steps: [
                {
                    step: "Step - 12",
                    topic: "C System Programming",
                    category: "Low-level Programming",
                    details: "System calls (fork, exec, wait), file descriptors, error handling, signal handling, memory management"
                },
                {
                    step: "Step - 13",
                    topic: "Kernel Modules & Drivers",
                    category: "Kernel Development",
                    details: "Loadable kernel modules, device drivers, kernel debugging, /proc filesystem, kernel data structures"
                },
                {
                    step: "Step - 14",
                    topic: "Performance & Debugging",
                    category: "System Optimization",
                    details: "Performance profiling tools (perf, strace, gdb), system monitoring, bottleneck analysis, optimization"
                },
                {
                    step: "Step - 15",
                    topic: "Distributed Systems Basics",
                    category: "Scalable Systems",
                    details: "Distributed OS concepts, cloud OS, microservices, fault tolerance, consistency models, CAP theorem"
                }
            ]
        },
        {
            title: "Industry Applications",
            subtitle: "Production-Ready Skills",
            steps: [
                {
                    step: "Step - 16",
                    topic: "DevOps & Cloud Integration",
                    category: "Infrastructure Management",
                    details: "AWS/GCP/Azure VMs, configuration management (Ansible, Puppet), infrastructure as code, monitoring"
                },
                {
                    step: "Step - 17",
                    topic: "Real-Time & Embedded Systems",
                    category: "Specialized OS",
                    details: "RTOS concepts, FreeRTOS, Zephyr, embedded programming, ARM architecture, interrupt handling"
                },
                {
                    step: "Step - 18",
                    topic: "System Administration",
                    category: "Production Systems",
                    details: "Linux server management, log analysis, backup strategies, disaster recovery, capacity planning"
                },
                {
                    step: "Step - 19",
                    topic: "Advanced Security & Hardening",
                    category: "Enterprise Security",
                    details: "OS exploits, reverse engineering, CIS benchmarks, compliance, incident response, forensics"
                }
            ]
        }
    ];
    const projectSuggestions = [
        {
            level: "OS Foundations",
            project: "Custom Shell Implementation (Bash Clone)"
        },
        {
            level: "Core OS Concepts",
            project: "Multi-threaded Process Scheduler Simulator"
        },
        {
            level: "Advanced OS Topics",
            project: "Simple File System Implementation"
        },
        {
            level: "System Programming",
            project: "Network Server with Custom Protocol"
        },
        {
            level: "Industry Applications",
            project: "Container Runtime from Scratch"
        }
    ];
    const getSectionColor = (idx)=>{
        const colors = [
            'bg-gradient-to-r from-blue-500 to-blue-600',
            'bg-gradient-to-r from-green-500 to-green-600',
            'bg-gradient-to-r from-purple-500 to-purple-600',
            'bg-gradient-to-r from-red-500 to-red-600',
            'bg-gradient-to-r from-orange-500 to-orange-600'
        ];
        return colors[idx] || colors[0];
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "bg-gradient-to-br from-gray-50 via-white to-gray-50 min-h-screen p-4 sm:p-6 font-inter",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4",
                            children: "🖥️ Operating System Mastery Roadmap"
                        }, void 0, false, {
                            fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                            lineNumber: 175,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto",
                            children: "Complete roadmap from OS basics to industry-ready system programming and kernel development"
                        }, void 0, false, {
                            fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                            lineNumber: 178,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-10 flex justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-full px-6 py-3 shadow-lg border border-gray-200",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-medium text-gray-700",
                                    children: "⚡ 19 Essential Steps • 🎯 5 Skill Levels • 🏢 Industry Ready"
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                    lineNumber: 184,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                lineNumber: 183,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                            lineNumber: 182,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                    lineNumber: 174,
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
                                                            fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                                            lineNumber: 199,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-sm font-normal opacity-90 mt-1",
                                                            children: section.subtitle
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                                            lineNumber: 200,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                                    lineNumber: 198,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                                lineNumber: 197,
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
                                                                    fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                                                    lineNumber: 210,
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
                                                                                        stopColor: "#3B82F6"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                                                                        lineNumber: 225,
                                                                                        columnNumber: 33
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                                        offset: "100%",
                                                                                        stopColor: "#8B5CF6"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                                                                        lineNumber: 226,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                                                                lineNumber: 224,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                                                            lineNumber: 223,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                            x1: "0",
                                                                            y1: "12",
                                                                            x2: "70",
                                                                            y2: "12",
                                                                            stroke: `url(#gradient-${sectionIdx}-${stepIdx})`
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                                                            lineNumber: 229,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                                            points: "60,6 70,12 60,18",
                                                                            stroke: `url(#gradient-${sectionIdx}-${stepIdx})`
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                                                            lineNumber: 230,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                                                    lineNumber: 215,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "bg-white rounded-lg px-6 py-4 flex-grow max-w-sm shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 group-hover:scale-105",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-base font-semibold text-gray-800 mb-1",
                                                                            children: item.topic
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                                                            lineNumber: 235,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-xs text-gray-500 mb-2",
                                                                            children: item.category
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                                                            lineNumber: 238,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-xs text-gray-600 leading-relaxed",
                                                                            children: item.details
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                                                            lineNumber: 241,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                                                    lineNumber: 234,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent min-w-[20px]"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                                                    lineNumber: 247,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-8 h-8 rounded-full border-2 border-gray-300 bg-white flex items-center justify-center group-hover:border-blue-500 transition-colors duration-300 flex-shrink-0",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-3 h-3 rounded-full bg-gray-300 group-hover:bg-blue-500 transition-colors duration-300"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                                                        lineNumber: 251,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                                                    lineNumber: 250,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                                            lineNumber: 208,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, stepIdx, false, {
                                                        fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                                        lineNumber: 207,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                                lineNumber: 205,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                        lineNumber: 195,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                    lineNumber: 194,
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
                                                            fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                                            lineNumber: 265,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs sm:text-sm font-normal opacity-90",
                                                            children: section.subtitle
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                                            lineNumber: 266,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                                    lineNumber: 264,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent ml-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                                    lineNumber: 268,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                            lineNumber: 263,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4 sm:space-y-6 ml-4 border-l-2 border-dashed border-gray-300 pl-6 sm:pl-8",
                                            children: section.steps.map((item, stepIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute -left-8 sm:-left-10 top-4 w-4 h-4 rounded-full bg-white border-2 border-gray-300 group-hover:border-blue-500 transition-colors duration-300",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-2 h-2 rounded-full bg-gray-300 group-hover:bg-blue-500 transition-colors duration-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                                                lineNumber: 277,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                                            lineNumber: 276,
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
                                                                            fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                                                            lineNumber: 283,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-xs text-gray-500 bg-blue-50 px-2 py-1 rounded",
                                                                            children: item.category
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                                                            lineNumber: 286,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                                                    lineNumber: 282,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "text-base sm:text-lg font-semibold text-gray-800 mb-2",
                                                                    children: item.topic
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                                                    lineNumber: 291,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm text-gray-600 leading-relaxed",
                                                                    children: item.details
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                                                    lineNumber: 295,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                                            lineNumber: 281,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, stepIdx, true, {
                                                    fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                                    lineNumber: 274,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                            lineNumber: 272,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                    lineNumber: 261,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, sectionIdx, true, {
                            fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                            lineNumber: 192,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                    lineNumber: 190,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "mt-16 sm:mt-20 bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-gray-800",
                            children: "🏗️ Operating System Practice Projects"
                        }, void 0, false, {
                            fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                            lineNumber: 309,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6",
                            children: projectSuggestions.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gradient-to-br from-blue-50 to-purple-50 p-4 sm:p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300 hover:scale-[1.02]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-semibold text-gray-800 mb-2 text-sm sm:text-base",
                                            children: item.level
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                            lineNumber: 315,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs sm:text-sm text-gray-600",
                                            children: item.project
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                            lineNumber: 316,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, idx, true, {
                                    fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                    lineNumber: 314,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                            lineNumber: 312,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                    lineNumber: 308,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 sm:p-8 text-white",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl sm:text-2xl font-bold text-center mb-6",
                            children: "🚀 Essential OS Technologies & Tools"
                        }, void 0, false, {
                            fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                            lineNumber: 324,
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
                                            children: "Operating Systems"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                            lineNumber: 327,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-blue-100",
                                            children: "Linux, Unix, Windows, macOS, FreeBSD"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                            lineNumber: 328,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                    lineNumber: 326,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white/10 rounded-lg p-4 backdrop-blur-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-semibold mb-2",
                                            children: "System Programming"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                            lineNumber: 331,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-blue-100",
                                            children: "C, Rust, Assembly, POSIX APIs, System Calls"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                            lineNumber: 332,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                    lineNumber: 330,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white/10 rounded-lg p-4 backdrop-blur-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-semibold mb-2",
                                            children: "Debugging Tools"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                            lineNumber: 335,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-blue-100",
                                            children: "gdb, strace, perf, valgrind, ltrace"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                            lineNumber: 336,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                    lineNumber: 334,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white/10 rounded-lg p-4 backdrop-blur-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-semibold mb-2",
                                            children: "Virtualization"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                            lineNumber: 339,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-blue-100",
                                            children: "Docker, KVM, VirtualBox, VMware, Xen"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                            lineNumber: 340,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                    lineNumber: 338,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white/10 rounded-lg p-4 backdrop-blur-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-semibold mb-2",
                                            children: "Embedded RTOS"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                            lineNumber: 343,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-blue-100",
                                            children: "FreeRTOS, Zephyr, VxWorks, QNX"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                            lineNumber: 344,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                    lineNumber: 342,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white/10 rounded-lg p-4 backdrop-blur-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-semibold mb-2",
                                            children: "File Systems"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                            lineNumber: 347,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-blue-100",
                                            children: "ext4, XFS, ZFS, NTFS, Btrfs, FUSE"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                            lineNumber: 348,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                    lineNumber: 346,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white/10 rounded-lg p-4 backdrop-blur-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-semibold mb-2",
                                            children: "Cloud & DevOps"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                            lineNumber: 351,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-blue-100",
                                            children: "AWS, GCP, Kubernetes, Ansible, Terraform"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                            lineNumber: 352,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                    lineNumber: 350,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white/10 rounded-lg p-4 backdrop-blur-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-semibold mb-2",
                                            children: "Security Tools"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                            lineNumber: 355,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-blue-100",
                                            children: "SELinux, AppArmor, iptables, Wireshark"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                            lineNumber: 356,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                    lineNumber: 354,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                            lineNumber: 325,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                    lineNumber: 323,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "mt-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 sm:p-8 border border-gray-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800",
                            children: "🎯 Industry-Level OS Projects"
                        }, void 0, false, {
                            fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                            lineNumber: 363,
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
                                            children: "🔧 Custom Operating System Kernel"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                            lineNumber: 366,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-600 mb-3",
                                            children: "Build a minimal OS kernel with process scheduling, memory management, and basic I/O handling."
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                            lineNumber: 367,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded inline-block",
                                            children: "C • Assembly • x86_64 • GRUB"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                            lineNumber: 368,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                    lineNumber: 365,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white p-6 rounded-lg shadow-sm border border-gray-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-semibold text-gray-800 mb-3",
                                            children: "🐳 Container Runtime Implementation"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                            lineNumber: 371,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-600 mb-3",
                                            children: "Create a Docker-like container runtime with namespaces, cgroups, and overlay filesystems."
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                            lineNumber: 372,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-green-600 bg-green-50 px-2 py-1 rounded inline-block",
                                            children: "Go • Linux • Namespaces • Cgroups"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                            lineNumber: 373,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                    lineNumber: 370,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white p-6 rounded-lg shadow-sm border border-gray-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-semibold text-gray-800 mb-3",
                                            children: "📊 System Performance Monitor"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                            lineNumber: 376,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-600 mb-3",
                                            children: "Build comprehensive system monitoring tool with real-time metrics, alerting, and historical analysis."
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                            lineNumber: 377,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-purple-600 bg-purple-50 px-2 py-1 rounded inline-block",
                                            children: "C • /proc • /sys • eBPF • Grafana"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                            lineNumber: 378,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                    lineNumber: 375,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white p-6 rounded-lg shadow-sm border border-gray-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-semibold text-gray-800 mb-3",
                                            children: "🔒 Security Sandbox System"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                            lineNumber: 381,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-600 mb-3",
                                            children: "Implement application sandboxing with seccomp-bpf, capabilities, and mandatory access controls."
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                            lineNumber: 382,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-red-600 bg-red-50 px-2 py-1 rounded inline-block",
                                            children: "C • seccomp • SELinux • ptrace"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                            lineNumber: 383,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                    lineNumber: 380,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                            lineNumber: 364,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                    lineNumber: 362,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "mt-12 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 sm:p-8 border border-green-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800",
                            children: "🏢 Modern OS Development Best Practices (2025)"
                        }, void 0, false, {
                            fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                            lineNumber: 390,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white p-6 rounded-lg shadow-sm border border-green-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-semibold text-green-800 mb-3",
                                            children: "⚡ Performance & Efficiency"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                            lineNumber: 393,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "text-sm text-gray-700 space-y-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: "• Zero-copy I/O operations"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                                    lineNumber: 395,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: "• Lock-free data structures"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                                    lineNumber: 396,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: "• CPU cache optimization"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                                    lineNumber: 397,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: "• Memory-mapped file I/O"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                                    lineNumber: 398,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: "• eBPF for kernel programming"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                                    lineNumber: 399,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                            lineNumber: 394,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                    lineNumber: 392,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white p-6 rounded-lg shadow-sm border border-green-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-semibold text-green-800 mb-3",
                                            children: "🛡️ Security & Isolation"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                            lineNumber: 403,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "text-sm text-gray-700 space-y-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: "• Principle of least privilege"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                                    lineNumber: 405,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: "• Container security (seccomp, AppArmor)"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                                    lineNumber: 406,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: "• Hardware security features"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                                    lineNumber: 407,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: "• Kernel ASLR and CFI"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                                    lineNumber: 408,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: "• Secure boot and TPM integration"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                                    lineNumber: 409,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                            lineNumber: 404,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                    lineNumber: 402,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white p-6 rounded-lg p-4 shadow-sm border border-green-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-semibold text-green-800 mb-3",
                                            children: "🚀 Modern Development"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                            lineNumber: 413,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "text-sm text-gray-700 space-y-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: "• Rust for system programming"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                                    lineNumber: 415,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: "• Cloud-native OS design"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                                    lineNumber: 416,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: "• Microkernel architectures"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                                    lineNumber: 417,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: "• Event-driven I/O (io_uring)"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                                    lineNumber: 418,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: "• Distributed system concepts"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                                    lineNumber: 419,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                            lineNumber: 414,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                    lineNumber: 412,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                            lineNumber: 391,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                    lineNumber: 389,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "mt-12 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 sm:p-8 border border-orange-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800",
                            children: "📚 Essential OS Learning Resources"
                        }, void 0, false, {
                            fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                            lineNumber: 427,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-3 gap-6 text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white p-4 rounded-lg shadow-sm border border-orange-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-semibold text-orange-800 mb-2",
                                            children: "📖 Must-Read Books"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                            lineNumber: 430,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-gray-700",
                                            children: "Operating System Concepts (Silberschatz), Modern Operating Systems (Tanenbaum), Linux Kernel Development (Love)"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                            lineNumber: 431,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                    lineNumber: 429,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white p-4 rounded-lg shadow-sm border border-orange-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-semibold text-orange-800 mb-2",
                                            children: "🎥 Video Resources"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                            lineNumber: 434,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-gray-700",
                                            children: "MIT 6.828, Stanford CS140, UC Berkeley CS162, Gate Smashers OS playlist, CodeVault system programming"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                            lineNumber: 435,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                    lineNumber: 433,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white p-4 rounded-lg shadow-sm border border-orange-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-semibold text-orange-800 mb-2",
                                            children: "💻 Hands-on Practice"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                            lineNumber: 438,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-gray-700",
                                            children: "xv6 OS lab, LeetCode concurrency problems, Linux From Scratch, kernel module development, container runtimes"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                            lineNumber: 439,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                    lineNumber: 437,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                            lineNumber: 428,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                    lineNumber: 426,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "mt-12 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-6 sm:p-8 border border-indigo-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800",
                            children: "🎯 Operating Systems Career Paths"
                        }, void 0, false, {
                            fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                            lineNumber: 446,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white p-4 rounded-lg shadow-sm border border-indigo-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-semibold text-indigo-800 mb-2",
                                            children: "⚙️ System Engineer/SRE"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                            lineNumber: 449,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-gray-700",
                                            children: "Linux administration, cloud infrastructure, monitoring, automation, DevOps practices"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                            lineNumber: 450,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                    lineNumber: 448,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white p-4 rounded-lg shadow-sm border border-indigo-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-semibold text-indigo-800 mb-2",
                                            children: "🔧 Kernel Developer"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                            lineNumber: 453,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-gray-700",
                                            children: "Linux kernel, device drivers, system calls, performance optimization, low-level programming"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                            lineNumber: 454,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                    lineNumber: 452,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white p-4 rounded-lg shadow-sm border border-indigo-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-semibold text-indigo-800 mb-2",
                                            children: "📱 Embedded Systems"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                            lineNumber: 457,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-gray-700",
                                            children: "RTOS development, IoT devices, ARM programming, real-time constraints, hardware interfacing"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                            lineNumber: 458,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                    lineNumber: 456,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white p-4 rounded-lg shadow-sm border border-indigo-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-semibold text-indigo-800 mb-2",
                                            children: "🔒 Security Specialist"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                            lineNumber: 461,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-gray-700",
                                            children: "OS security, exploit development, reverse engineering, malware analysis, forensics"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                            lineNumber: 462,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                                    lineNumber: 460,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                            lineNumber: 447,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                    lineNumber: 445,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mt-12 sm:mt-16 text-gray-600",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm sm:text-base px-4",
                        children: "🌟 Master operating systems from theory to practice! Build solid foundations, implement real projects, and become industry-ready."
                    }, void 0, false, {
                        fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                        lineNumber: 469,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
                    lineNumber: 468,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
            lineNumber: 172,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/Roadmaps/OS/visualRoadmap.jsx",
        lineNumber: 171,
        columnNumber: 5
    }, this);
}
}}),
"[project]/app/Roadmaps/OS/os.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$OS$2f$roadmapData$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/app/Roadmaps/OS/roadmapData.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$OS$2f$downloadPdf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Roadmaps/OS/downloadPdf.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$OS$2f$visualRoadmap$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Roadmaps/OS/visualRoadmap.jsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function Home() {
    const [openSections, setOpenSections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [darkMode, setDarkMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [downloading, setDownloading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isVisualMode, setIsVisualMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false); // New state for roadmap view mode
    // Toggle section open/close - now allows multiple sections to be open
    const toggleSection = (id)=>{
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
    // Toggle between visual and textual roadmap
    const toggleRoadmapView = ()=>{
        setIsVisualMode(!isVisualMode);
    };
    // Handle PDF download
    const handleDownload = async ()=>{
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$OS$2f$downloadPdf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleDownloadPDF"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$OS$2f$roadmapData$2e$json__$28$json$29$__["default"], setDownloading);
    };
    // Handle YouTube redirect
    const handleYouTubeRedirect = ()=>{
        window.open("https://youtu.be/3obEP8eLsCw?si=_rXyfzPY1XCBJGKA", "_blank");
    };
    // Handle AI Guide redirect
    const handleAIGuideRedirect = ()=>{
        window.location.href = "/CareerGuidance";
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `min-h-screen font-sans ${darkMode ? "dark bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white" : "bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed right-4 top-1/2 transform -translate-y-1/2 z-40 flex flex-col gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleYouTubeRedirect,
                        className: `group relative p-3 sm:p-4 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-110 active:scale-95 ${darkMode ? "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600" : "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700"} text-white`,
                        title: "YouTube AI/ML Courses",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-6 h-6 sm:w-7 sm:h-7",
                                viewBox: "0 0 24 24",
                                fill: "currentColor",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/OS/os.jsx",
                                    lineNumber: 78,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/Roadmaps/OS/os.jsx",
                                lineNumber: 73,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `absolute right-full mr-3 top-1/2 transform -translate-y-1/2 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none ${darkMode ? "bg-gray-800 text-white border border-gray-700" : "bg-white text-gray-900 border border-gray-200 shadow-lg"}`,
                                children: [
                                    "YouTube Courses",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-r-0 border-t-4 border-b-4 border-transparent ${darkMode ? "border-l-gray-800" : "border-l-white"}`
                                    }, void 0, false, {
                                        fileName: "[project]/app/Roadmaps/OS/os.jsx",
                                        lineNumber: 90,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/Roadmaps/OS/os.jsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/Roadmaps/OS/os.jsx",
                        lineNumber: 63,
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
                                    fileName: "[project]/app/Roadmaps/OS/os.jsx",
                                    lineNumber: 114,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/Roadmaps/OS/os.jsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `absolute right-full mr-3 top-1/2 transform -translate-y-1/2 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none ${darkMode ? "bg-gray-800 text-white border border-gray-700" : "bg-white text-gray-900 border border-gray-200 shadow-lg"}`,
                                children: [
                                    "AI Career Guide",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-r-0 border-t-4 border-b-4 border-transparent ${darkMode ? "border-l-gray-800" : "border-l-white"}`
                                    }, void 0, false, {
                                        fileName: "[project]/app/Roadmaps/OS/os.jsx",
                                        lineNumber: 131,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/Roadmaps/OS/os.jsx",
                                lineNumber: 123,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/Roadmaps/OS/os.jsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/Roadmaps/OS/os.jsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: `sticky top-0 z-10 backdrop-blur-lg ${darkMode ? "bg-gray-900/90 border-gray-700/50" : "bg-white/90 border-gray-200/50"} border-b shadow-xl px-4 sm:px-6 py-4 sm:py-5 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 transition-all duration-300`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-center sm:text-left",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent",
                                children: "Operating System Engineer"
                            }, void 0, false, {
                                fileName: "[project]/app/Roadmaps/OS/os.jsx",
                                lineNumber: 149,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `ml-2 ${darkMode ? "text-gray-200" : "text-gray-800"}`,
                                children: "Roadmap"
                            }, void 0, false, {
                                fileName: "[project]/app/Roadmaps/OS/os.jsx",
                                lineNumber: 152,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/Roadmaps/OS/os.jsx",
                        lineNumber: 148,
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
                                                    fileName: "[project]/app/Roadmaps/OS/os.jsx",
                                                    lineNumber: 177,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/Roadmaps/OS/os.jsx",
                                                lineNumber: 170,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-medium hidden sm:inline",
                                                children: "Textual"
                                            }, void 0, false, {
                                                fileName: "[project]/app/Roadmaps/OS/os.jsx",
                                                lineNumber: 179,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/Roadmaps/OS/os.jsx",
                                        lineNumber: 161,
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
                                                        fileName: "[project]/app/Roadmaps/OS/os.jsx",
                                                        lineNumber: 198,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        d: "M2.458 12C3.732 7.94 7.523 5 12 5s8.268 2.94 9.542 7c-1.274 4.06-5.064 7-9.542 7s-8.268-2.94-9.542-7z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Roadmaps/OS/os.jsx",
                                                        lineNumber: 199,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/Roadmaps/OS/os.jsx",
                                                lineNumber: 191,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-medium hidden sm:inline",
                                                children: "Visual"
                                            }, void 0, false, {
                                                fileName: "[project]/app/Roadmaps/OS/os.jsx",
                                                lineNumber: 201,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/Roadmaps/OS/os.jsx",
                                        lineNumber: 182,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/Roadmaps/OS/os.jsx",
                                lineNumber: 160,
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
                                                    fileName: "[project]/app/Roadmaps/OS/os.jsx",
                                                    lineNumber: 224,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    className: "opacity-75",
                                                    fill: "currentColor",
                                                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Roadmaps/OS/os.jsx",
                                                    lineNumber: 232,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/Roadmaps/OS/os.jsx",
                                            lineNumber: 218,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-medium hidden sm:inline",
                                            children: "Generating PDF..."
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/OS/os.jsx",
                                            lineNumber: 238,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-medium sm:hidden",
                                            children: "PDF..."
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/OS/os.jsx",
                                            lineNumber: 241,
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
                                                fileName: "[project]/app/Roadmaps/OS/os.jsx",
                                                lineNumber: 251,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/OS/os.jsx",
                                            lineNumber: 245,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-medium hidden sm:inline",
                                            children: "Download PDF"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/OS/os.jsx",
                                            lineNumber: 258,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-medium sm:hidden",
                                            children: "PDF"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Roadmaps/OS/os.jsx",
                                            lineNumber: 261,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/app/Roadmaps/OS/os.jsx",
                                lineNumber: 207,
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
                                        fileName: "[project]/app/Roadmaps/OS/os.jsx",
                                        lineNumber: 281,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/OS/os.jsx",
                                    lineNumber: 276,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-4 h-4 sm:w-5 sm:h-5",
                                    fill: "currentColor",
                                    viewBox: "0 0 20 20",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Roadmaps/OS/os.jsx",
                                        lineNumber: 293,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/OS/os.jsx",
                                    lineNumber: 288,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/Roadmaps/OS/os.jsx",
                                lineNumber: 267,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/Roadmaps/OS/os.jsx",
                        lineNumber: 158,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/Roadmaps/OS/os.jsx",
                lineNumber: 141,
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
                                children: "A comprehensive guide to becoming a Operating System Enginner, step-by-step learning path, courses, tools, and project ideas."
                            }, void 0, false, {
                                fileName: "[project]/app/Roadmaps/OS/os.jsx",
                                lineNumber: 305,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 sm:mt-8 flex justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `h-1 w-16 sm:w-24 rounded-full bg-gradient-to-r from-blue-600 to-purple-600`
                                }, void 0, false, {
                                    fileName: "[project]/app/Roadmaps/OS/os.jsx",
                                    lineNumber: 312,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/Roadmaps/OS/os.jsx",
                                lineNumber: 311,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/Roadmaps/OS/os.jsx",
                        lineNumber: 303,
                        columnNumber: 9
                    }, this),
                    isVisualMode ? /* Visual Roadmap */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "transition-all duration-500 ease-in-out",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$OS$2f$visualRoadmap$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            roadmapData: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$OS$2f$roadmapData$2e$json__$28$json$29$__["default"],
                            darkMode: darkMode
                        }, void 0, false, {
                            fileName: "[project]/app/Roadmaps/OS/os.jsx",
                            lineNumber: 322,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/Roadmaps/OS/os.jsx",
                        lineNumber: 321,
                        columnNumber: 11
                    }, this) : /* Textual Roadmap */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6 sm:space-y-8 transition-all duration-500 ease-in-out",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Roadmaps$2f$OS$2f$roadmapData$2e$json__$28$json$29$__["default"].map((section)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                id: `section-${section.id}`,
                                className: `${darkMode ? "bg-gray-800/50 border-gray-700/50" : "bg-white/70 border-gray-200/50"} backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-xl border overflow-hidden transition-all duration-500 hover:shadow-2xl ${openSections.has(section.id) ? "ring-2 ring-blue-500/20" : ""}`,
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
                                                                fileName: "[project]/app/Roadmaps/OS/os.jsx",
                                                                lineNumber: 351,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-xl sm:text-2xl md:text-3xl font-bold tracking-tight group-hover:text-blue-600 transition-colors truncate",
                                                                children: section.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Roadmaps/OS/os.jsx",
                                                                lineNumber: 354,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/Roadmaps/OS/os.jsx",
                                                        lineNumber: 350,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: `text-sm sm:text-base lg:text-lg font-light leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-600"} ml-9 sm:ml-12 pr-4`,
                                                        children: section.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Roadmaps/OS/os.jsx",
                                                        lineNumber: 358,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/Roadmaps/OS/os.jsx",
                                                lineNumber: 349,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "ml-4 sm:ml-6 transform transition-transform duration-200 group-hover:scale-110 flex-shrink-0",
                                                children: openSections.has(section.id) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                                                        fileName: "[project]/app/Roadmaps/OS/os.jsx",
                                                        lineNumber: 372,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Roadmaps/OS/os.jsx",
                                                    lineNumber: 366,
                                                    columnNumber: 23
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
                                                        fileName: "[project]/app/Roadmaps/OS/os.jsx",
                                                        lineNumber: 386,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Roadmaps/OS/os.jsx",
                                                    lineNumber: 380,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/Roadmaps/OS/os.jsx",
                                                lineNumber: 364,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/Roadmaps/OS/os.jsx",
                                        lineNumber: 343,
                                        columnNumber: 17
                                    }, this),
                                    openSections.has(section.id) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6 lg:pb-8 ${darkMode ? "border-gray-700/50" : "border-gray-200/50"} border-t animate-in slide-in-from-top-2 duration-300`,
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
                                                                        fileName: "[project]/app/Roadmaps/OS/os.jsx",
                                                                        lineNumber: 408,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    "What to Learn"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/Roadmaps/OS/os.jsx",
                                                                lineNumber: 407,
                                                                columnNumber: 25
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
                                                                                fileName: "[project]/app/Roadmaps/OS/os.jsx",
                                                                                lineNumber: 419,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "font-medium",
                                                                                children: item
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/Roadmaps/OS/os.jsx",
                                                                                lineNumber: 422,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, index, true, {
                                                                        fileName: "[project]/app/Roadmaps/OS/os.jsx",
                                                                        lineNumber: 415,
                                                                        columnNumber: 29
                                                                    }, this)) || []
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Roadmaps/OS/os.jsx",
                                                                lineNumber: 413,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/Roadmaps/OS/os.jsx",
                                                        lineNumber: 404,
                                                        columnNumber: 23
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
                                                                        fileName: "[project]/app/Roadmaps/OS/os.jsx",
                                                                        lineNumber: 433,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    "Tools to Use"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/Roadmaps/OS/os.jsx",
                                                                lineNumber: 432,
                                                                columnNumber: 25
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
                                                                                fileName: "[project]/app/Roadmaps/OS/os.jsx",
                                                                                lineNumber: 444,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "font-medium",
                                                                                children: tool
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/Roadmaps/OS/os.jsx",
                                                                                lineNumber: 447,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, index, true, {
                                                                        fileName: "[project]/app/Roadmaps/OS/os.jsx",
                                                                        lineNumber: 440,
                                                                        columnNumber: 29
                                                                    }, this)) || []
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Roadmaps/OS/os.jsx",
                                                                lineNumber: 438,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/Roadmaps/OS/os.jsx",
                                                        lineNumber: 429,
                                                        columnNumber: 23
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
                                                                        fileName: "[project]/app/Roadmaps/OS/os.jsx",
                                                                        lineNumber: 458,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    "Best Courses"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/Roadmaps/OS/os.jsx",
                                                                lineNumber: 457,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-4 sm:space-y-5",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                            className: "font-bold mb-2 sm:mb-3 text-base sm:text-lg",
                                                                            children: "In English:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/Roadmaps/OS/os.jsx",
                                                                            lineNumber: 465,
                                                                            columnNumber: 29
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
                                                                                            fileName: "[project]/app/Roadmaps/OS/os.jsx",
                                                                                            lineNumber: 475,
                                                                                            columnNumber: 37
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "font-medium",
                                                                                            children: course
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/Roadmaps/OS/os.jsx",
                                                                                            lineNumber: 478,
                                                                                            columnNumber: 37
                                                                                        }, this)
                                                                                    ]
                                                                                }, index, true, {
                                                                                    fileName: "[project]/app/Roadmaps/OS/os.jsx",
                                                                                    lineNumber: 471,
                                                                                    columnNumber: 35
                                                                                }, this)) || []
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/Roadmaps/OS/os.jsx",
                                                                            lineNumber: 468,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/Roadmaps/OS/os.jsx",
                                                                    lineNumber: 464,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Roadmaps/OS/os.jsx",
                                                                lineNumber: 463,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/Roadmaps/OS/os.jsx",
                                                        lineNumber: 454,
                                                        columnNumber: 23
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
                                                                        fileName: "[project]/app/Roadmaps/OS/os.jsx",
                                                                        lineNumber: 492,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    "Docs & Websites"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/Roadmaps/OS/os.jsx",
                                                                lineNumber: 491,
                                                                columnNumber: 25
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
                                                                                fileName: "[project]/app/Roadmaps/OS/os.jsx",
                                                                                lineNumber: 503,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "font-medium",
                                                                                children: doc
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/Roadmaps/OS/os.jsx",
                                                                                lineNumber: 506,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, index, true, {
                                                                        fileName: "[project]/app/Roadmaps/OS/os.jsx",
                                                                        lineNumber: 499,
                                                                        columnNumber: 29
                                                                    }, this)) || []
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Roadmaps/OS/os.jsx",
                                                                lineNumber: 497,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/Roadmaps/OS/os.jsx",
                                                        lineNumber: 488,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/Roadmaps/OS/os.jsx",
                                                lineNumber: 402,
                                                columnNumber: 21
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
                                                                fileName: "[project]/app/Roadmaps/OS/os.jsx",
                                                                lineNumber: 516,
                                                                columnNumber: 25
                                                            }, this),
                                                            "Project Ideas"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/Roadmaps/OS/os.jsx",
                                                        lineNumber: 515,
                                                        columnNumber: 23
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
                                                                            fileName: "[project]/app/Roadmaps/OS/os.jsx",
                                                                            lineNumber: 528,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: `${darkMode ? "text-gray-200" : "text-gray-700"} font-medium text-sm sm:text-base leading-relaxed`,
                                                                            children: project
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/Roadmaps/OS/os.jsx",
                                                                            lineNumber: 531,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/Roadmaps/OS/os.jsx",
                                                                    lineNumber: 527,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, index, false, {
                                                                fileName: "[project]/app/Roadmaps/OS/os.jsx",
                                                                lineNumber: 523,
                                                                columnNumber: 27
                                                            }, this)) || []
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Roadmaps/OS/os.jsx",
                                                        lineNumber: 521,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/Roadmaps/OS/os.jsx",
                                                lineNumber: 514,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/Roadmaps/OS/os.jsx",
                                        lineNumber: 399,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, section.id, true, {
                                fileName: "[project]/app/Roadmaps/OS/os.jsx",
                                lineNumber: 331,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/Roadmaps/OS/os.jsx",
                        lineNumber: 329,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/Roadmaps/OS/os.jsx",
                lineNumber: 301,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/Roadmaps/OS/os.jsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=app_Roadmaps_OS_8f22c7fe._.js.map