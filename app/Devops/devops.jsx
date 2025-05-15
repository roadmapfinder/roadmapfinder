"use client";
import { useState } from "react";
import { 
  Server, Database, Terminal, Layers, Globe, CloudCog, 
  Shield, GitBranch, Container, LineChart, Workflow, Code
} from "lucide-react";

// DevOps roadmap data structure
const roadmapData = [
  {
    id: 1,
    title: "Linux Fundamentals",
    description: "Master Linux operating system basics for DevOps",
    icon: <Terminal className="h-5 w-5" />,
    content: {
      whatToLearn: [
        "Linux File System",
        "Command Line Interface",
        "Permissions & Users",
        "Shell Scripting",
        "Package Management",
        "Process Management",
      ],
      bestCourses: {
        english: [
          "Linux System Administration (Coursera)",
          "Linux Command Line Basics (Udacity)",
          "Red Hat Enterprise Linux Technical Overview (edX)",
          "The Linux Command Line Bootcamp (Udemy)",
        ],
        hindi: [
          "Linux Tutorial in Hindi (CodeWithHarry)",
          "Linux Administration Course in Hindi (Great Learning)",
          "Complete Linux Course in Hindi (ApnaCollege)",
          "Shell Scripting in Hindi (TechTFQ)",
        ],
      },
      toolsToUse: [
        "Ubuntu/Debian",
        "CentOS/RHEL",
        "Bash Shell",
        "Vim/Nano",
        "SSH",
        "Tmux/Screen",
      ],
      docsAndWebsites: [
        "Linux Documentation Project",
        "Linux Journey",
        "DigitalOcean Tutorials",
        "Linux Hint",
        "Man Pages",
      ],
      projectIdeas: [
        "Automated backup script",
        "System monitoring dashboard",
        "User management automation",
        "Custom shell environment setup",
      ],
    },
  },
  {
    id: 2,
    title: "Networking & Security",
    description: "Understand networking concepts and security principles",
    icon: <Shield className="h-5 w-5" />,
    content: {
      whatToLearn: [
        "TCP/IP Fundamentals",
        "DNS, DHCP, HTTP/S",
        "Firewalls & Security Groups",
        "VPN & Encryption",
        "Load Balancing",
        "SSL/TLS & Certificates",
      ],
      bestCourses: {
        english: [
          "Computer Networking (Stanford/Coursera)",
          "Networking for Web Developers (Udacity)",
          "AWS Networking Fundamentals (A Cloud Guru)",
          "Practical Networking (Udemy)",
        ],
        hindi: [
          "Networking Concepts in Hindi (Unacademy)",
          "Computer Networks Hindi (5 Minutes Engineering)",
          "Network Security Hindi (TechGyan)",
          "SSL/TLS Certificate Course Hindi (NetworkTuts)",
        ],
      },
      toolsToUse: [
        "Wireshark",
        "nmap",
        "tcpdump",
        "OpenSSL",
        "iptables/UFW",
        "Fail2Ban",
      ],
      docsAndWebsites: [
        "Cloudflare Learning Center",
        "Networking For DevOps",
        "OWASP Security Practices",
        "SSL Shopper",
        "SecurityHeaders.com",
      ],
      projectIdeas: [
        "Network traffic analyzer",
        "Setup a secure VPN server",
        "Firewall configuration automation",
        "SSL certificate lifecycle manager",
      ],
    },
  },
  {
    id: 3,
    title: "Source Control Management",
    description: "Master Git and version control workflows",
    icon: <GitBranch className="h-5 w-5" />,
    content: {
      whatToLearn: [
        "Git Basics (add, commit, push)",
        "Branching & Merging Strategies",
        "Pull Requests & Code Reviews",
        "Git Hooks & Advanced Features",
        "GitOps Principles",
        "Monorepo vs Multi-repo",
      ],
      bestCourses: {
        english: [
          "Git & GitHub - The Complete Git Guide (Udemy)",
          "Version Control with Git (Atlassian)",
          "How Git Works (Pluralsight)",
          "Advanced Git Techniques (LinkedIn Learning)",
        ],
        hindi: [
          "Complete Git & GitHub Course Hindi (CodeWithHarry)",
          "Git Tutorial for Beginners Hindi (Thapa Technical)",
          "Git Advanced Concepts in Hindi (ApnaCollege)",
          "GitHub Actions Hindi Course (TechnoGeek)",
        ],
      },
      toolsToUse: [
        "Git",
        "GitHub/GitLab/Bitbucket",
        "Git Hooks",
        "GitHub Actions",
        "Husky",
        "GitKraken/Sourcetree",
      ],
      docsAndWebsites: [
        "Git Documentation",
        "GitHub Guides",
        "Atlassian Git Tutorials",
        "Git Tower Learning Center",
        "Oh Shit, Git!?!",
      ],
      projectIdeas: [
        "Git workflow automation tool",
        "Custom Git hooks implementation",
        "Create a CI pipeline with GitHub Actions",
        "Team collaboration via GitOps",
      ],
    },
  },
  {
    id: 4,
    title: "Containerization & Orchestration",
    description: "Learn container technologies and orchestration platforms",
    icon: <Container className="h-5 w-5" />,
    content: {
      whatToLearn: [
        "Docker Fundamentals",
        "Docker Compose",
        "Kubernetes Basics",
        "Kubernetes Deployments",
        "Container Security",
        "Service Mesh (Istio)",
      ],
      bestCourses: {
        english: [
          "Docker & Kubernetes: The Complete Guide (Udemy)",
          "Introduction to Containers (Linux Foundation)",
          "Kubernetes for Developers (edX)",
          "Docker Mastery (Bret Fisher/Udemy)",
        ],
        hindi: [
          "Docker Complete Course Hindi (TechWorld with Nana)",
          "Kubernetes for Beginners Hindi (CodeWithDurgesh)",
          "Container Orchestration in Hindi (GreatLearning)",
          "Kubernetes Zero to Hero Hindi (KodeKloud)",
        ],
      },
      toolsToUse: [
        "Docker",
        "Kubernetes",
        "Helm",
        "K3s/Kind/Minikube",
        "Podman",
        "Lens/K9s",
      ],
      docsAndWebsites: [
        "Docker Documentation",
        "Kubernetes.io",
        "Helm Hub",
        "CNCF Landscape",
        "Container Journal",
      ],
      projectIdeas: [
        "Multi-container app with Docker Compose",
        "Kubernetes cluster setup & deployment",
        "Container image optimization pipeline",
        "Custom Kubernetes operator",
      ],
    },
  },
  {
    id: 5,
    title: "Infrastructure as Code",
    description: "Automate infrastructure provisioning and management",
    icon: <Code className="h-5 w-5" />,
    content: {
      whatToLearn: [
        "Terraform",
        "CloudFormation",
        "Ansible",
        "Puppet/Chef",
        "Packer",
        "Pulumi",
      ],
      bestCourses: {
        english: [
          "HashiCorp Terraform Associate Certification (Udemy)",
          "Ansible for DevOps (Jeff Geerling)",
          "AWS CloudFormation Master Class (A Cloud Guru)",
          "Infrastructure as Code (LinkedIn Learning)",
        ],
        hindi: [
          "Terraform Complete Tutorial Hindi (DevOps Launchpad)",
          "Ansible for Beginners Hindi (TechPrimer)",
          "Infrastructure as Code Hindi (CloudyTuts)",
          "Puppet & Chef Tutorial Hindi (DevOpsShala)",
        ],
      },
      toolsToUse: [
        "Terraform",
        "Ansible",
        "AWS CloudFormation",
        "Puppet",
        "Packer",
        "Terragrunt",
      ],
      docsAndWebsites: [
        "Terraform Documentation",
        "Ansible Documentation",
        "CloudFormation User Guide",
        "Gruntwork Blog",
        "IaC Community",
      ],
      projectIdeas: [
        "Multi-environment infrastructure with Terraform",
        "Configuration management with Ansible",
        "Golden image pipeline with Packer",
        "Self-healing infrastructure system",
      ],
    },
  },
  {
    id: 6,
    title: "CI/CD & Automation",
    description: "Build automated pipelines for continuous integration and delivery",
    icon: <Workflow className="h-5 w-5" />,
    content: {
      whatToLearn: [
        "CI/CD Principles",
        "Jenkins",
        "GitHub Actions",
        "GitLab CI",
        "ArgoCD",
        "Release Strategies",
      ],
      bestCourses: {
        english: [
          "DevOps Project: CI/CD with Jenkins (Udemy)",
          "GitHub Actions - The Complete Guide (Academind)",
          "GitLab CI: Pipelines, CI/CD and DevOps (Udemy)",
          "Implementing a Full CI/CD Pipeline (Pluralsight)",
        ],
        hindi: [
          "Jenkins Complete Course Hindi (TrainingWithIndustryExperts)",
          "CI/CD Pipeline Tutorial Hindi (TechnoGeek)",
          "GitHub Actions in Hindi (CodeWithHarry)",
          "GitLab CI/CD Hindi (DevOpsTube)",
        ],
      },
      toolsToUse: [
        "Jenkins",
        "GitHub Actions",
        "GitLab CI/CD",
        "CircleCI",
        "ArgoCD",
        "Spinnaker",
      ],
      docsAndWebsites: [
        "Jenkins Documentation",
        "GitHub Actions Documentation",
        "GitLab CI Documentation",
        "CD Foundation",
        "DevOps.com",
      ],
      projectIdeas: [
        "Complete CI/CD pipeline for web application",
        "Multi-branch pipeline with Jenkins",
        "GitOps workflow with ArgoCD",
        "Automated testing & deployment system",
      ],
    },
  },
  {
    id: 7,
    title: "Cloud Platforms",
    description: "Learn major cloud platforms and services",
    icon: <CloudCog className="h-5 w-5" />,
    content: {
      whatToLearn: [
        "AWS Core Services",
        "Azure Fundamentals",
        "Google Cloud Platform",
        "Cloud Security",
        "Cost Optimization",
        "Multi-Cloud Strategy",
      ],
      bestCourses: {
        english: [
          "AWS Certified Solutions Architect (A Cloud Guru)",
          "Microsoft Azure Fundamentals (Microsoft Learn)",
          "Google Cloud Platform Fundamentals (Coursera)",
          "Cloud Computing Specialization (University of Illinois)",
        ],
        hindi: [
          "AWS Tutorial in Hindi (Simplilearn)",
          "Azure Complete Course Hindi (GreatLearning)",
          "GCP Fundamentals Hindi (ExamPro)",
          "Cloud Computing Basics Hindi (TechnoFunda)",
        ],
      },
      toolsToUse: [
        "AWS CLI",
        "Azure CLI",
        "Google Cloud SDK",
        "Terraform",
        "CloudFormation",
        "Cost Explorer",
      ],
      docsAndWebsites: [
        "AWS Documentation",
        "Microsoft Azure Documentation",
        "Google Cloud Documentation",
        "The Cloud Girl",
        "Last Week in AWS",
      ],
      projectIdeas: [
        "Serverless application deployment",
        "Auto-scaling architecture",
        "Cloud cost optimization system",
        "Multi-region disaster recovery solution",
      ],
    },
  },
  {
    id: 8,
    title: "Monitoring & Observability",
    description: "Implement robust monitoring, logging, and alerting systems",
    icon: <LineChart className="h-5 w-5" />,
    content: {
      whatToLearn: [
        "Metrics Collection",
        "Logging Strategies",
        "Distributed Tracing",
        "Alerting & On-call",
        "Dashboarding",
        "SLIs, SLOs & SLAs",
      ],
      bestCourses: {
        english: [
          "Monitoring and Observability with Prometheus (Udemy)",
          "ELK Stack for Beginners (Pluralsight)",
          "Grafana Fundamentals (Grafana Labs)",
          "Google SRE: Measuring and Managing Reliability (Coursera)",
        ],
        hindi: [
          "Prometheus & Grafana Tutorial Hindi (TechWorld with Nana)",
          "ELK Stack Complete Course Hindi (TechPrimer)",
          "Cloud Monitoring Hindi (CloudYatra)",
          "DevOps Monitoring Hindi (KodeKloud)",
        ],
      },
      toolsToUse: [
        "Prometheus",
        "Grafana",
        "ELK Stack",
        "Loki",
        "Jaeger/Zipkin",
        "Datadog/New Relic",
      ],
      docsAndWebsites: [
        "Prometheus Documentation",
        "Grafana Documentation",
        "Elastic Documentation",
        "OpenTelemetry",
        "Google SRE Book",
      ],
      projectIdeas: [
        "Full-stack monitoring solution",
        "Custom alerting system",
        "SLO-based monitoring implementation",
        "Observability as code",
      ],
    },
  },
];

export default function DevOps() {
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
      {/* Sticky Navigation Bar */}
      <nav
        className={`sticky top-0 z-10 ${
          darkMode ? "bg-gray-800" : "bg-white"
        } shadow-md px-4 py-4 flex justify-between items-center transition-colors duration-300`}
      >
        <h1 className="text-xl md:text-2xl font-bold">
          DevOps Engineer Roadmap
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
            Welcome to the DevOps Engineer Roadmap
          </h2>
          <p className="text-sm md:text-base leading-relaxed">
            This roadmap will guide you through the essential skills, tools, and
            resources needed to become a proficient DevOps Engineer. Each section
            contains curated resources in both English and Hindi to help you
            master each stage of the DevOps journey. Click on any
            section to expand it and explore its contents.
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
                    className={`flex items-center justify-center w-10 h-10 rounded-full mr-3 ${
                      darkMode ? "bg-indigo-600" : "bg-indigo-500"
                    } text-white font-medium`}
                  >
                    {section.icon}
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
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mr-2"></span>
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
                                <span className="min-w-4 text-indigo-500 mr-2">
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
                                <span className="min-w-4 text-indigo-500 mr-2">
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
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mr-2"></span>
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
                DevOps Engineer Roadmap
              </h3>
              <p className="text-sm">
                Your comprehensive guide to becoming a DevOps Engineer
              </p>
            </div>
            <div className="flex flex-col items-center md:items-end">
              <div className="flex space-x-4 mb-2">
                <a href="#" className="hover:text-indigo-500 transition-colors">
                  Twitter
                </a>
                <a href="#" className="hover:text-indigo-500 transition-colors">
                  GitHub
                </a>
                <a href="#" className="hover:text-indigo-500 transition-colors">
                  LinkedIn
                </a>
              </div>
              <p className="text-xs">
                © 2025 DevOps Engineer Roadmap. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}