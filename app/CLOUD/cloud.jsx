"use client";
import { useState } from "react";
import Head from "next/head";

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

  // Toggle section open/close
  const toggleSection = (id) => {
    setOpenSection(openSection === id ? null : id);
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
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
