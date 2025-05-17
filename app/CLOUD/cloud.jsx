"use client";
import { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/navigation";

// Cloud Computing Engineer Roadmap data structure
const roadmapData = [
  {
    id: 1,
    title: "Computer Science Fundamentals",
    description: "Build a solid foundation with core computing concepts",
    content: {
      whatToLearn: [
        "Operating Systems Concepts",
        "Data Structures & Algorithms",
        "Networking Fundamentals",
        "Linux Administration",
        "Basic Programming Skills",
        "Computer Architecture",
      ],
      bestCourses: {
        english: [
          "Computer Science Fundamentals (MIT OpenCourseWare)",
          "CS50: Introduction to Computer Science (Harvard)",
          "Introduction to Linux (Linux Foundation)",
          "Networking for Web Developers (Udacity)",
        ],
        hindi: [
          "Computer Science Fundamentals Hindi (Great Learning)",
          "Operating Systems Hindi (Sanchit Jain)",
          "Data Structures & Algorithms Hindi (CodeWithHarry)",
          "Networking Hindi Tutorial (Geeky Shows)",
        ],
      },
      toolsToUse: [
        "Linux Terminal",
        "Git & GitHub",
        "VS Code/Vim",
        "Python/JavaScript",
        "Packet Tracer",
      ],
      docsAndWebsites: [
        "Linux Documentation",
        "Stack Overflow",
        "GeeksforGeeks",
        "Networking Tutorials (Cisco)",
        "O'Reilly Books",
      ],
      projectIdeas: [
        "Build a small network with virtual machines",
        "Create shell scripts for system automation",
        "Simple file system implementation",
        "Network traffic analyzer",
      ],
    },
  },
  {
    id: 2,
    title: "Cloud Service Providers",
    description: "Learn major cloud platforms and their core services",
    content: {
      whatToLearn: [
        "AWS Core Services",
        "Microsoft Azure Basics",
        "Google Cloud Platform",
        "Cloud Service Models (IaaS, PaaS, SaaS)",
        "Cloud Deployment Models",
        "Cost Management",
      ],
      bestCourses: {
        english: [
          "AWS Certified Cloud Practitioner (AWS Training)",
          "Microsoft Azure Fundamentals (Microsoft Learn)",
          "Google Cloud Digital Leader Training (Google)",
          "Cloud Computing Concepts (Coursera)",
        ],
        hindi: [
          "AWS Complete Course Hindi (TechWorld)",
          "Azure Tutorial Hindi (CodeWithHarry)",
          "Cloud Computing Fundamentals Hindi (Great Learning)",
          "Google Cloud Platform Hindi (Technical Suneja)",
        ],
      },
      toolsToUse: [
        "AWS Management Console",
        "Azure Portal",
        "Google Cloud Console",
        "Cloud Shell",
        "Billing Calculators",
      ],
      docsAndWebsites: [
        "AWS Documentation",
        "Microsoft Azure Documentation",
        "Google Cloud Documentation",
        "Cloud Comparison Tool",
        "Cloud Credential Council",
      ],
      projectIdeas: [
        "Deploy a static website on cloud storage",
        "Set up virtual machines with auto-scaling",
        "Configure cloud monitoring and alerts",
        "Create a multi-region deployment",
      ],
    },
  },
  {
    id: 3,
    title: "Infrastructure as Code (IaC)",
    description: "Master automation and provisioning of cloud resources",
    content: {
      whatToLearn: [
        "Configuration Management",
        "Infrastructure Provisioning",
        "Terraform",
        "AWS CloudFormation",
        "Azure Resource Manager",
        "Google Cloud Deployment Manager",
      ],
      bestCourses: {
        english: [
          "Terraform: Getting Started (HashiCorp)",
          "AWS CloudFormation Deep Dive (A Cloud Guru)",
          "Infrastructure as Code (Pluralsight)",
          "Ansible for DevOps (Jeff Geerling)",
        ],
        hindi: [
          "Terraform Complete Hindi (TechWorld)",
          "CloudFormation Masterclass Hindi (Cloud Tutorials)",
          "Infrastructure as Code Hindi (AWS India)",
          "Ansible Hindi Tutorial (Great Learning)",
        ],
      },
      toolsToUse: [
        "Terraform",
        "AWS CloudFormation",
        "Ansible",
        "Pulumi",
        "Chef/Puppet",
      ],
      docsAndWebsites: [
        "Terraform Documentation",
        "AWS CloudFormation Guide",
        "Ansible Documentation",
        "IaC Best Practices (ThoughtWorks)",
        "Infrastructure as Code (Martin Fowler)",
      ],
      projectIdeas: [
        "Multi-tier application with Terraform",
        "CI/CD pipeline with CloudFormation",
        "Configuration management with Ansible",
        "Disaster recovery automation",
      ],
    },
  },
  {
    id: 4,
    title: "Containerization & Orchestration",
    description:
      "Learn to package, deploy, and manage containerized applications",
    content: {
      whatToLearn: [
        "Docker Fundamentals",
        "Kubernetes Architecture",
        "Container Networking",
        "Microservices Design",
        "Service Meshes",
        "Container Security",
      ],
      bestCourses: {
        english: [
          "Docker & Kubernetes: The Complete Guide (Udemy)",
          "Certified Kubernetes Administrator (Linux Foundation)",
          "Microservices Architecture (Pluralsight)",
          "Service Mesh with Istio (Red Hat)",
        ],
        hindi: [
          "Docker Complete Course Hindi (CodeWithHarry)",
          "Kubernetes Hindi Tutorials (TechWorld)",
          "Microservices Architecture Hindi (Technical Suneja)",
          "Container Security Hindi (Cloud Tutorials)",
        ],
      },
      toolsToUse: [
        "Docker",
        "Kubernetes",
        "Helm",
        "Istio",
        "Amazon EKS/Azure AKS/GKE",
      ],
      docsAndWebsites: [
        "Docker Documentation",
        "Kubernetes Documentation",
        "Istio Docs",
        "Container Journal",
        "Microservices.io",
      ],
      projectIdeas: [
        "Containerized microservices application",
        "Kubernetes cluster with high availability",
        "Service mesh implementation",
        "CI/CD pipeline for containerized apps",
      ],
    },
  },
  {
    id: 5,
    title: "DevOps & CI/CD",
    description: "Implement continuous integration and delivery pipelines",
    content: {
      whatToLearn: [
        "CI/CD Concepts",
        "Pipeline Design",
        "Code Quality & Testing",
        "Artifact Management",
        "Release Strategies",
        "Monitoring & Feedback Loops",
      ],
      bestCourses: {
        english: [
          "DevOps Engineer Learning Path (LinkedIn Learning)",
          "CI/CD with Jenkins (CloudBees)",
          "GitHub Actions for CI/CD (GitHub)",
          "GitLab CI: Pipelines, CI/CD (Udemy)",
        ],
        hindi: [
          "DevOps Masterclass Hindi (Tech Gun)",
          "Jenkins Complete Course Hindi (Cloud Tutorials)",
          "CI/CD Pipeline Hindi (CodeWithHarry)",
          "GitHub Actions Hindi Tutorial (Technical Suneja)",
        ],
      },
      toolsToUse: [
        "Jenkins",
        "GitHub Actions",
        "GitLab CI",
        "CircleCI",
        "Artifactory/Nexus",
      ],
      docsAndWebsites: [
        "Jenkins Documentation",
        "GitHub Actions Documentation",
        "GitLab CI Documentation",
        "DevOps Roadmap",
        "The DevOps Handbook",
      ],
      projectIdeas: [
        "Multi-stage CI/CD pipeline",
        "Blue-green deployment implementation",
        "Canary release strategy",
        "Automated testing framework",
      ],
    },
  },
  {
    id: 6,
    title: "Cloud Security & Compliance",
    description: "Implement security best practices and compliance frameworks",
    content: {
      whatToLearn: [
        "Identity & Access Management",
        "Network Security",
        "Data Protection",
        "Compliance Frameworks",
        "Security Automation",
        "Threat Detection & Response",
      ],
      bestCourses: {
        english: [
          "AWS Security Specialty (AWS Training)",
          "Azure Security Engineer (Microsoft Learn)",
          "Cloud Security Alliance Training",
          "CCSP: Certified Cloud Security Professional",
        ],
        hindi: [
          "Cloud Security Hindi (Great Learning)",
          "AWS Security Hindi (TechWorld)",
          "Data Protection Hindi (Technical Suneja)",
          "Compliance Frameworks Hindi (Cloud Tutorials)",
        ],
      },
      toolsToUse: [
        "AWS Security Hub/Azure Security Center",
        "Cloud HSM",
        "HashiCorp Vault",
        "SIEM Tools",
        "Security Scanning Tools",
      ],
      docsAndWebsites: [
        "Cloud Security Alliance",
        "NIST Cloud Computing Standards",
        "OWASP Cloud Security",
        "Center for Internet Security",
        "Compliance Frameworks Guide",
      ],
      projectIdeas: [
        "Zero-trust security implementation",
        "Automated compliance scanning",
        "Secret management system",
        "Security incident response plan",
      ],
    },
  },
  {
    id: 7,
    title: "Cloud Architecture & Design",
    description:
      "Design scalable, resilient, and cost-effective cloud solutions",
    content: {
      whatToLearn: [
        "Well-Architected Framework",
        "High Availability Design",
        "Disaster Recovery Planning",
        "Scalability Patterns",
        "Cost Optimization",
        "Performance Efficiency",
      ],
      bestCourses: {
        english: [
          "AWS Solutions Architect (A Cloud Guru)",
          "Azure Solutions Architect (Pluralsight)",
          "Google Professional Cloud Architect (Google)",
          "Cloud Architecture Masterclass (Udemy)",
        ],
        hindi: [
          "Cloud Architecture Hindi (TechWorld)",
          "AWS Solutions Architect Hindi (Cloud Tutorials)",
          "High Availability Design Hindi (Technical Suneja)",
          "Cost Optimization Hindi (Great Learning)",
        ],
      },
      toolsToUse: [
        "AWS Well-Architected Tool",
        "Azure Advisor",
        "Architecture Diagramming Tools",
        "Cost Management Tools",
        "Resilience Testing Tools",
      ],
      docsAndWebsites: [
        "AWS Well-Architected Framework",
        "Azure Architecture Center",
        "Google Cloud Architecture Framework",
        "Cloud Design Patterns",
        "Architecture Decision Records",
      ],
      projectIdeas: [
        "Multi-region disaster recovery solution",
        "Highly available microservices architecture",
        "Serverless event-driven architecture",
        "Cost-optimized cloud migration plan",
      ],
    },
  },
];

export default function Home() {
        const [openSection, setOpenSection] = useState(null);
        const [darkMode, setDarkMode] = useState(false);
        const [downloading, setDownloading] = useState(false);
        const router = useRouter();

        // Toggle section open/close
        const toggleSection = (id) => {
          setOpenSection(openSection === id ? null : id);
        };

        // Toggle dark mode
        const toggleDarkMode = () => {
          setDarkMode(!darkMode);
        };

        // Function to handle the download process
        const handleDownload = async () => {
          // Check if we're in a browser environment (client-side)
          if (typeof window === 'undefined') {
            return;
          }

          // Dynamically import the necessary libraries
          // This helps with Next.js SSR compatibility
          const html2canvas = (await import('html2canvas')).default;
          const { jsPDF } = await import('jspdf');

          setDownloading(true);

          try {
            // Create a temporary div to render the roadmap content for downloading
            const downloadDiv = document.createElement('div');
            downloadDiv.className = "roadmap-download-content";

            // Set styles for better PDF output
            downloadDiv.style.padding = "20px";
            downloadDiv.style.color = "black";
            downloadDiv.style.backgroundColor = "white";
            downloadDiv.style.fontFamily = "Arial, sans-serif";

            // Add title
            const title = document.createElement('h1');
            title.style.textAlign = "center";
            title.style.marginBottom = "20px";
            title.textContent = "Cloud Computing Engineer Roadmap";
            downloadDiv.appendChild(title);

            // Add roadmap content
            roadmapData.forEach(section => {
              const sectionDiv = document.createElement('div');
              sectionDiv.style.marginBottom = "30px";

              // Section header
              const header = document.createElement('h2');
              header.style.backgroundColor = "#f0f0f0";
              header.style.padding = "10px";
              header.style.borderRadius = "5px";
              header.textContent = `${section.id}. ${section.title}`;
              sectionDiv.appendChild(header);

              // Section description
              const desc = document.createElement('p');
              desc.style.marginBottom = "15px";
              desc.style.fontStyle = "italic";
              desc.textContent = section.description;
              sectionDiv.appendChild(desc);

              // What to Learn
              const whatToLearn = document.createElement('div');
              whatToLearn.style.marginBottom = "15px";

              const whatToLearnTitle = document.createElement('h3');
              whatToLearnTitle.textContent = "✅ What to Learn";
              whatToLearn.appendChild(whatToLearnTitle);

              const whatToLearnList = document.createElement('ul');
              section.content.whatToLearn.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                whatToLearnList.appendChild(li);
              });
              whatToLearn.appendChild(whatToLearnList);
              sectionDiv.appendChild(whatToLearn);

              // Best Courses
              const bestCourses = document.createElement('div');
              bestCourses.style.marginBottom = "15px";

              const bestCoursesTitle = document.createElement('h3');
              bestCoursesTitle.textContent = "📚 Best Courses";
              bestCourses.appendChild(bestCoursesTitle);

              // English courses
              const englishTitle = document.createElement('h4');
              englishTitle.textContent = "In English:";
              bestCourses.appendChild(englishTitle);

              const englishList = document.createElement('ul');
              section.content.bestCourses.english.forEach(course => {
                const li = document.createElement('li');
                li.textContent = course;
                englishList.appendChild(li);
              });
              bestCourses.appendChild(englishList);

              // Hindi courses
              const hindiTitle = document.createElement('h4');
              hindiTitle.textContent = "In Hindi:";
              bestCourses.appendChild(hindiTitle);

              const hindiList = document.createElement('ul');
              section.content.bestCourses.hindi.forEach(course => {
                const li = document.createElement('li');
                li.textContent = course;
                hindiList.appendChild(li);
              });
              bestCourses.appendChild(hindiList);
              sectionDiv.appendChild(bestCourses);

              // Tools to Use
              const tools = document.createElement('div');
              tools.style.marginBottom = "15px";

              const toolsTitle = document.createElement('h3');
              toolsTitle.textContent = "🧰 Tools to Use";
              tools.appendChild(toolsTitle);

              const toolsList = document.createElement('ul');
              section.content.toolsToUse.forEach(tool => {
                const li = document.createElement('li');
                li.textContent = tool;
                toolsList.appendChild(li);
              });
              tools.appendChild(toolsList);
              sectionDiv.appendChild(tools);

              // Docs & Websites
              const docs = document.createElement('div');
              docs.style.marginBottom = "15px";

              const docsTitle = document.createElement('h3');
              docsTitle.textContent = "📘 Docs & Websites";
              docs.appendChild(docsTitle);

              const docsList = document.createElement('ul');
              section.content.docsAndWebsites.forEach(doc => {
                const li = document.createElement('li');
                li.textContent = doc;
                docsList.appendChild(li);
              });
              docs.appendChild(docsList);
              sectionDiv.appendChild(docs);

              // Project Ideas
              const projects = document.createElement('div');
              projects.style.marginBottom = "15px";

              const projectsTitle = document.createElement('h3');
              projectsTitle.textContent = "💡 Project Ideas";
              projects.appendChild(projectsTitle);

              const projectsList = document.createElement('ul');
              section.content.projectIdeas.forEach(project => {
                const li = document.createElement('li');
                li.textContent = project;
                projectsList.appendChild(li);
              });
              projects.appendChild(projectsList);
              sectionDiv.appendChild(projects);

              downloadDiv.appendChild(sectionDiv);
            });

            // Temporarily add the div to the document to render it
            document.body.appendChild(downloadDiv);

            // Use html2canvas to create an image of the content
            const canvas = await html2canvas(downloadDiv, {
              scale: 1,
              useCORS: true,
              logging: false,
            });

            // Remove the temporary div
            document.body.removeChild(downloadDiv);

            // Create PDF from the canvas
            const pdf = new jsPDF({
              orientation: 'portrait',
              unit: 'mm',
              format: 'a4',
            });

            // Calculate the required height based on canvas dimensions to fit the page width
            const imgWidth = 210; // A4 width in mm (210mm)
            const imgHeight = canvas.height * imgWidth / canvas.width;

            // Add image to PDF (first page)
            pdf.addImage(
              canvas.toDataURL('image/png'),
              'PNG',
              0,
              0,
              imgWidth,
              imgHeight
            );

            // If the content requires multiple pages
            let heightLeft = imgHeight;
            let position = 0;

            // Subtract the height of the first page
            heightLeft -= 297; // A4 height in mm (297mm)

            // Add subsequent pages if needed
            while (heightLeft > 0) {
              position = heightLeft - imgHeight;
              pdf.addPage();
              pdf.addImage(
                canvas.toDataURL('image/png'),
                'PNG',
                0,
                position,
                imgWidth,
                imgHeight
              );
              heightLeft -= 297;
            }

            // Save the PDF
            pdf.save("Cloud_Computing_Engineer_Roadmap.pdf");

            // Store the downloaded roadmap data to localStorage (for Downloads page)
            localStorage.setItem('downloadedRoadmap', JSON.stringify(roadmapData));

            // Optionally navigate to Downloads page
            // Uncommment if you have a Downloads page
            // router.push('/Downloads');
          } catch (error) {
            console.error("Error generating PDF:", error);
            alert("There was an error generating the PDF. Please try again.");
          } finally {
            setDownloading(false);
          }
        };

        return (
          <div
            className={`min-h-screen ${
              darkMode ? "dark bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
            }`}
          >
            <Head>
              <title>Cloud Computing Engineer Roadmap</title>
              <meta
                name="description"
                content="Complete roadmap for becoming a Cloud Computing Engineer"
              />
              <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* Sticky Navigation Bar */}
            <nav
              className={`sticky top-0 z-10 ${
                darkMode ? "bg-gray-800" : "bg-white"
              } shadow-md px-4 py-4 flex justify-between items-center transition-colors duration-300`}
            >
              <h1 className="text-xl md:text-2xl font-bold">
                Cloud Computing Engineer Roadmap
              </h1>
              <div className="flex items-center gap-4">
                {/* Download Button */}
                <button
                  onClick={handleDownload}
                  disabled={downloading}
                  className={`px-4 py-2 rounded-md flex items-center ${
                    darkMode 
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-blue-500 text-white hover:bg-blue-600"
                  } transition-colors`}
                  aria-label="Download Roadmap"
                >
                  {downloading ? (
                    <span>Generating...</span>
                  ) : (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                      </svg>
                      <span>Download PDF</span>
                    </>
                  )}
                </button>

                {/* Dark Mode Toggle */}
                <button
                  onClick={toggleDarkMode}
                  className={`p-2 rounded-full ${
                    darkMode
                      ? "bg-gray-700 text-yellow-300"
                      : "bg-gray-200 text-gray-700"
                  }`}
                  aria-label="Toggle Dark Mode"
                >
                  {darkMode ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                    </svg>
                  )}
                </button>
              </div>
            </nav>

            <main className="container mx-auto px-4 py-8 max-w-4xl">
              {/* Introduction */}
              <div
                className={`mb-8 p-6 rounded-lg ${
                  darkMode ? "bg-gray-800" : "bg-white"
                } shadow-md transition-colors duration-300`}
              >
                <h2 className="text-xl md:text-2xl font-semibold mb-3">
                  Welcome to the Cloud Computing Engineer Roadmap
                </h2>
                <p className="text-sm md:text-base leading-relaxed">
                  This roadmap will guide you through the essential skills, tools, and
                  resources needed to become a proficient Cloud Computing Engineer.
                  Each section contains curated resources in both English and Hindi to
                  help you master cloud technologies from fundamentals to advanced
                  architecture. Click on any section to expand it and explore its
                  contents.
                </p>

                {/* Mobile Download Button */}
                <div className="mt-4 md:hidden">
                  <button
                    onClick={handleDownload}
                    disabled={downloading}
                    className={`w-full px-4 py-2 rounded-md flex items-center justify-center ${
                      darkMode 
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-blue-500 text-white hover:bg-blue-600"
                    } transition-colors`}
                    aria-label="Download Roadmap"
                  >
                    {downloading ? (
                      <span>Generating...</span>
                    ) : (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                          />
                        </svg>
                        <span>Download Roadmap as PDF</span>
                      </>
                    )}
                  </button>
                </div>
              </div>


        {/* Roadmap Sections */}
        <div className="space-y-4">
          {roadmapData.map((section) => (
            <div
              key={section.id}
              className={`rounded-lg shadow-md overflow-hidden transition-all duration-300 ${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-750"
                  : "bg-white hover:bg-gray-50"
              }`}
            >
              {/* Section Header */}
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full px-6 py-4 flex items-center justify-between focus:outline-none"
                aria-expanded={openSection === section.id}
              >
                <div className="flex items-center">
                  <span
                    className={`flex items-center justify-center w-8 h-8 rounded-full mr-3 ${
                      darkMode ? "bg-blue-600" : "bg-blue-500"
                    } text-white font-medium`}
                  >
                    {section.id}
                  </span>
                  <div className="text-left">
                    <h3 className="font-semibold text-lg">{section.title}</h3>
                    <p
                      className={`text-sm ${
                        darkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {section.description}
                    </p>
                  </div>
                </div>
                <svg
                  className={`w-5 h-5 transform transition-transform duration-300 ${
                    openSection === section.id ? "rotate-180" : "rotate-0"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {/* Section Content */}
              {openSection === section.id && (
                <div
                  className={`px-6 pb-6 pt-2 border-t ${
                    darkMode ? "border-gray-700" : "border-gray-200"
                  } animate-fadeIn`}
                >
                  {/* What to Learn */}
                  <div className="mb-6">
                    <h4 className="flex items-center text-lg font-medium mb-3">
                      <span className="mr-2">✅</span>What to Learn
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {section.content.whatToLearn.map((item, index) => (
                        <li
                          key={index}
                          className={`flex items-center ${
                            darkMode ? "text-gray-300" : "text-gray-700"
                          }`}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Best Courses */}
                  <div className="mb-6">
                    <h4 className="flex items-center text-lg font-medium mb-3">
                      <span className="mr-2">📚</span>Best Courses
                    </h4>

                    <div className="space-y-4">
                      {/* English Courses */}
                      <div>
                        <h5
                          className={`font-medium mb-2 ${
                            darkMode ? "text-gray-200" : "text-gray-800"
                          }`}
                        >
                          In English:
                        </h5>
                        <ul className="space-y-1">
                          {section.content.bestCourses.english.map(
                            (course, index) => (
                              <li
                                key={index}
                                className={`flex items-start ${
                                  darkMode ? "text-gray-300" : "text-gray-700"
                                }`}
                              >
                                <span className="min-w-4 text-blue-500 mr-2">
                                  •
                                </span>
                                {course}
                              </li>
                            )
                          )}
                        </ul>
                      </div>

                      {/* Hindi Courses */}
                      <div>
                        <h5
                          className={`font-medium mb-2 ${
                            darkMode ? "text-gray-200" : "text-gray-800"
                          }`}
                        >
                          In Hindi:
                        </h5>
                        <ul className="space-y-1">
                          {section.content.bestCourses.hindi.map(
                            (course, index) => (
                              <li
                                key={index}
                                className={`flex items-start ${
                                  darkMode ? "text-gray-300" : "text-gray-700"
                                }`}
                              >
                                <span className="min-w-4 text-blue-500 mr-2">
                                  •
                                </span>
                                {course}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Tools to Use */}
                  <div className="mb-6">
                    <h4 className="flex items-center text-lg font-medium mb-3">
                      <span className="mr-2">🧰</span>Tools to Use
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {section.content.toolsToUse.map((tool, index) => (
                        <span
                          key={index}
                          className={`px-3 py-1 rounded-full text-sm ${
                            darkMode
                              ? "bg-gray-700 text-gray-200"
                              : "bg-gray-200 text-gray-800"
                          }`}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Docs & Websites */}
                  <div className="mb-6">
                    <h4 className="flex items-center text-lg font-medium mb-3">
                      <span className="mr-2">📘</span>Docs & Websites
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {section.content.docsAndWebsites.map(
                        (resource, index) => (
                          <li
                            key={index}
                            className={`flex items-center ${
                              darkMode ? "text-gray-300" : "text-gray-700"
                            }`}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></span>
                            {resource}
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  {/* Project Ideas */}
                  <div>
                    <h4 className="flex items-center text-lg font-medium mb-3">
                      <span className="mr-2">💡</span>Project Ideas
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {section.content.projectIdeas.map((project, index) => (
                        <div
                          key={index}
                          className={`p-3 rounded-md ${
                            darkMode
                              ? "bg-gray-700 text-gray-200"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {project}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer
        className={`mt-12 py-8 px-4 ${
          darkMode ? "bg-gray-800 text-gray-300" : "bg-gray-100 text-gray-700"
        }`}
      >
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">
                Cloud Computing Engineer Roadmap
              </h3>
              <p className="text-sm">
                Your comprehensive guide to becoming a professional Cloud
                Computing Engineer
              </p>
            </div>
            <div className="flex flex-col items-center md:items-end">
              <div className="flex space-x-4 mb-2">
                <a href="#" className="hover:text-blue-500 transition-colors">
                  Twitter
                </a>
                <a href="#" className="hover:text-blue-500 transition-colors">
                  GitHub
                </a>
                <a href="#" className="hover:text-blue-500 transition-colors">
                  LinkedIn
                </a>
              </div>
              <p className="text-xs">
                © 2025 Cloud Computing Engineer Roadmap. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
