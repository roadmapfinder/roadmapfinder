"use client";
import { useState } from "react";
import Head from "next/head";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { Download, Sun, Moon } from "lucide-react";

// Roadmap data structure
const roadmapData = [
  {
    id: 1,
    title: "Cybersecurity Fundamentals",
    description: "Master the basic concepts and principles of cybersecurity",
    content: {
      whatToLearn: [
        "Security Concepts & Principles",
        "CIA Triad (Confidentiality, Integrity, Availability)",
        "Risk Management Basics",
        "Security Controls",
        "Authentication & Authorization",
        "Basic Cryptography",
      ],
      bestCourses: {
        english: [
          "Introduction to Cyber Security (Coursera)",
          "Cybersecurity Fundamentals (edX)",
          "Complete Cyber Security Course (Udemy)",
          "Cybersecurity Essentials (Cisco)",
        ],
        hindi: [
          "Cybersecurity Foundation Course (Hindi) (Great Learning)",
          "Information Security Basics (Hindi) (Unacademy)",
          "Cyber Suraksha by CDAC (Hindi)",
          "InfoSec Theory in Hindi (CyberShiksha)",
        ],
      },
      toolsToUse: [
        "Password Managers",
        "VPNs",
        "Encrypted Communication Tools",
        "Basic Encryption Tools",
        "Security News Platforms",
      ],
      docsAndWebsites: [
        "NIST Cybersecurity Framework",
        "OWASP Website",
        "Cybrary Free Resources",
        "Krebs on Security",
        "HaveIBeenPwned",
      ],
      projectIdeas: [
        "Personal security assessment",
        "Password policy creator",
        "Security awareness training materials",
        "Simple encryption/decryption tool",
      ],
    },
  },
  {
    id: 2,
    title: "Networking & Operating Systems",
    description: "Build the foundation of networking and OS security concepts",
    content: {
      whatToLearn: [
        "Network Protocols & Architecture",
        "OSI Model & TCP/IP Suite",
        "Routing & Switching Basics",
        "Firewalls & Network Security",
        "Linux & Windows Administration",
        "Permission Models & Access Control",
      ],
      bestCourses: {
        english: [
          "Computer Networking: A Top-Down Approach (Stanford)",
          "Network Security & Database Vulnerabilities (Coursera)",
          "Linux Administration Bootcamp (Udemy)",
          "Windows Server Administration Fundamentals (Microsoft Learn)",
        ],
        hindi: [
          "Computer Networks (Hindi) (NPTEL)",
          "Linux System Administration (Hindi) (Spoken Tutorial)",
          "Network Security in Hindi (CyberSafety)",
          "Windows Security Configuration (Hindi) (TechGyan)",
        ],
      },
      toolsToUse: [
        "Wireshark",
        "Nmap",
        "pfSense",
        "tcpdump",
        "Packet Tracer",
        "VirtualBox/VMware",
      ],
      docsAndWebsites: [
        "Networking for System Administrators",
        "DigitalOcean Tutorials",
        "Linux Journey",
        "Microsoft Documentation",
        "NetworkLessons.com",
      ],
      projectIdeas: [
        "Home network security setup",
        "Network traffic analysis lab",
        "Firewall configuration & testing",
        "Linux server hardening exercise",
      ],
    },
  },
  {
    id: 3,
    title: "Web & Application Security",
    description: "Learn to identify and mitigate web application vulnerabilities",
    content: {
      whatToLearn: [
        "HTTP/HTTPS Protocols",
        "OWASP Top 10 Vulnerabilities",
        "Web Authentication Methods",
        "API Security",
        "Client-side vs Server-side Security",
        "Secure Coding Practices",
      ],
      bestCourses: {
        english: [
          "Web Security Academy (PortSwigger)",
          "Web Application Security (freeCodeCamp)",
          "Secure Coding in Java/Python (Pluralsight)",
          "API Security Fundamentals (Akamai)",
        ],
        hindi: [
          "Web Application Security in Hindi (CyberShiksha)",
          "OWASP Top 10 Hindi Explanation (SecurityTube)",
          "API Security Course in Hindi (CodeKaro)",
          "Secure Coding Hindi (DevSecOps India)",
        ],
      },
      toolsToUse: [
        "Burp Suite",
        "OWASP ZAP",
        "Nikto",
        "Acunetix",
        "SQLmap",
        "ModSecurity",
      ],
      docsAndWebsites: [
        "OWASP Cheat Sheets",
        "Mozilla Web Security Guidelines",
        "HackerOne Hacktivity",
        "PortSwigger Web Academy",
        "SecureFlag",
      ],
      projectIdeas: [
        "Vulnerable web app testing",
        "OWASP Top 10 mitigation demo",
        "Security headers analyzer",
        "Web security scanner implementation",
      ],
    },
  },
  {
    id: 4,
    title: "Ethical Hacking & Penetration Testing",
    description: "Master legal hacking techniques and methodologies",
    content: {
      whatToLearn: [
        "Penetration Testing Methodology",
        "Reconnaissance Techniques",
        "Scanning & Enumeration",
        "Vulnerability Assessment",
        "Exploitation Basics",
        "Post-Exploitation & Reporting",
      ],
      bestCourses: {
        english: [
          "Penetration Testing: A Hands-On Introduction (Coursera)",
          "Learn Ethical Hacking From Scratch (Udemy)",
          "Offensive Security Certified Professional (OSCP)",
          "eLearnSecurity Junior Penetration Tester (eJPT)",
        ],
        hindi: [
          "Ethical Hacking in Hindi (CyberSikhsha)",
          "Penetration Testing Complete Course Hindi (TechHindiGyan)",
          "Kali Linux Mastery in Hindi (InfoSecHindi)",
          "Bug Bounty Hindi Course (BugHunters)",
        ],
      },
      toolsToUse: [
        "Kali Linux",
        "Metasploit Framework",
        "Nessus",
        "BurpSuite Pro",
        "Hydra",
        "Aircrack-ng",
      ],
      docsAndWebsites: [
        "HackTricks",
        "PayloadsAllTheThings",
        "PentesterLab",
        "Vulnhub",
        "Exploit-DB",
      ],
      projectIdeas: [
        "Vulnerable machine exploitation",
        "Network penetration test lab",
        "Web application security assessment",
        "Wireless network security testing",
      ],
    },
  },
  {
    id: 5,
    title: "Red Team & Blue Team Operations",
    description: "Learn offensive and defensive security techniques",
    content: {
      whatToLearn: [
        "Red Team: Advanced Exploitation",
        "Red Team: Social Engineering",
        "Blue Team: Security Monitoring",
        "Blue Team: Incident Response",
        "Threat Hunting",
        "Digital Forensics",
      ],
      bestCourses: {
        english: [
          "Red Team Ops (Pentester Academy)",
          "Blue Team Level 1 (Security Blue Team)",
          "Practical Malware Analysis & Triage (SANS)",
          "Incident Response & Threat Hunting (Cybrary)",
        ],
        hindi: [
          "Red Team Training in Hindi (CyberDefense)",
          "Blue Team Fundamentals Hindi (InfosecPro)",
          "Malware Analysis Hindi (SecurityTraining)",
          "Digital Forensics Hindi Course (ForensicsLab)",
        ],
      },
      toolsToUse: [
        "Cobalt Strike",
        "Mimikatz",
        "ELK Stack",
        "Splunk",
        "Volatility",
        "TheHive & MISP",
      ],
      docsAndWebsites: [
        "MITRE ATT&CK Framework",
        "SANS Reading Room",
        "Red Canary Blog",
        "Blue Team Labs Online",
        "DFIR.Training",
      ],
      projectIdeas: [
        "SOC monitoring lab setup",
        "Threat hunting exercise",
        "Memory forensics challenge",
        "Red team vs blue team simulation",
      ],
    },
  },
  {
    id: 6,
    title: "Cloud & DevSecOps Security",
    description: "Learn to secure cloud platforms and implement DevSecOps",
    content: {
      whatToLearn: [
        "Cloud Security Models",
        "AWS/Azure/GCP Security",
        "Container Security",
        "Infrastructure as Code Security",
        "CI/CD Pipeline Security",
        "Security Automation",
      ],
      bestCourses: {
        english: [
          "AWS Security Specialization (Coursera)",
          "Azure Security Technologies (Microsoft Learn)",
          "DevSecOps: Integrating Security (LinkedIn Learning)",
          "Container Security (A Cloud Guru)",
        ],
        hindi: [
          "Cloud Security Hindi (CloudSeekho)",
          "AWS Security in Hindi (TechCloud)",
          "DevSecOps Hindi Course (DevOpsGuru)",
          "Docker Security Hindi (CloudWarrior)",
        ],
      },
      toolsToUse: [
        "Cloud Security Posture Management Tools",
        "Terraform/CloudFormation",
        "Docker Bench Security",
        "Prowler",
        "Checkov",
        "Aqua Security",
      ],
      docsAndWebsites: [
        "AWS Well-Architected Framework",
        "Azure Security Benchmark",
        "OWASP DevSecOps Guideline",
        "Cloud Security Alliance",
        "DevSecOps Playbook",
      ],
      projectIdeas: [
        "Cloud security posture assessment",
        "IaC security scanning implementation",
        "Secure CI/CD pipeline setup",
        "Container security scanning workflow",
      ],
    },
  },
  {
    id: 7,
    title: "Certifications & Career Paths",
    description: "Essential certifications and specialization paths",
    content: {
      whatToLearn: [
        "Industry-recognized Certifications",
        "Specialization Areas",
        "Career Progression",
        "Continuous Learning",
        "Interview Preparation",
        "Professional Networking",
      ],
      bestCourses: {
        english: [
          "CompTIA Security+ Preparation",
          "Certified Ethical Hacker (CEH) Training",
          "CISSP Training Course",
          "Career Path Planning for Cybersecurity",
        ],
        hindi: [
          "Security+ Certification Hindi Guide",
          "CEH Preparation in Hindi",
          "CISSP Training Hindi",
          "Cybersecurity Career Hindi Guide",
        ],
      },
      toolsToUse: [
        "LinkedIn Learning",
        "Certification Practice Exams",
        "TryHackMe/HackTheBox",
        "GitHub Portfolio",
        "Resume Builders",
      ],
      docsAndWebsites: [
        "Cybersecurity Career Pathway",
        "SANS Certification Roadmap",
        "(ISC)² Certifications",
        "Cybersecurity Career Guide",
        "CyberSeek Career Pathway",
      ],
      projectIdeas: [
        "Professional portfolio development",
        "Certification study group",
        "Home lab documentation",
        "Technical blog launch",
      ],
    },
  },
  {
    id: 8,
    title: "Practical Labs & Platforms",
    description: "Hands-on practice environments and platforms",
    content: {
      whatToLearn: [
        "Vulnerable VM Environments",
        "CTF Competitions",
        "Bug Bounty Programs",
        "Lab Setup & Management",
        "Real-world Scenarios",
        "Documentation Practices",
      ],
      bestCourses: {
        english: [
          "TryHackMe Complete Rooms",
          "HackTheBox Academy Modules",
          "PortSwigger Web Security Academy",
          "PentesterLab Exercises",
        ],
        hindi: [
          "CTF Training in Hindi (HackerSeekho)",
          "Practical Hacking Labs Hindi (SecurityTraining)",
          "Bug Bounty Methodology Hindi (BugSeekho)",
          "Home Lab Setup Guide Hindi (CyberLab)",
        ],
      },
      toolsToUse: [
        "TryHackMe",
        "HackTheBox",
        "VulnHub",
        "DVWA",
        "Juice Shop",
        "CyberDefenders",
      ],
      docsAndWebsites: [
        "CTFTime",
        "HackerOne",
        "BugCrowd",
        "VulnHub",
        "Practical Labs Documentation",
      ],
      projectIdeas: [
        "Personal vulnerable lab setup",
        "CTF challenge creation",
        "Bug bounty methodology documentation",
        "Security challenge writeups",
      ],
    },
  },
];

export default function Home() {
  const [openSection, setOpenSection] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [downloading, setDownloading] = useState(false);

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
      title.textContent = "Cybersecurity Engineer Roadmap";
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
      pdf.save("Cybersecurity_Engineer_Roadmap.pdf");
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
                    <title>Cybersecurity Engineer Roadmap</title>
                    <meta
                      name="description"
                      content="Complete roadmap for becoming a Cybersecurity Engineer"
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
                      Cybersecurity Engineer Roadmap
                    </h1>
                    <div className="flex items-center space-x-3">
                      {/* Download Button */}
                      <button
                        onClick={handleDownload}
                        disabled={downloading}
                        className={`px-4 py-2 rounded-md text-white ${
                          downloading 
                            ? "bg-gray-500 cursor-not-allowed" 
                            : "bg-blue-600 hover:bg-blue-700"
                        } transition-colors flex items-center`}
                      >
                        {downloading ? (
                          <>
                            <svg 
                              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" 
                              xmlns="http://www.w3.org/2000/svg" 
                              fill="none" 
                              viewBox="0 0 24 24"
                            >
                              <circle 
                                className="opacity-25" 
                                cx="12" 
                                cy="12" 
                                r="10" 
                                stroke="currentColor" 
                                strokeWidth="4"
                              ></circle>
                              <path 
                                className="opacity-75" 
                                fill="currentColor" 
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Processing...
                          </>
                        ) : (
                          <>
                            <Download className="w-4 h-4 mr-2" />
                            Download Roadmap
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
                        {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
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
                        Welcome to the Cybersecurity Engineer Roadmap
                      </h2>
                      <p className="text-sm md:text-base leading-relaxed">
                        This roadmap will guide you through the essential skills, tools, and
                        resources needed to become a proficient Cybersecurity Engineer. Each section
                        contains curated resources in both English and Hindi to help you
                        master each stage of your cybersecurity journey. Click on any
                        section to expand it and explore its contents. You can also download the 
                        complete roadmap for offline reference.
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
                                  darkMode ? "bg-green-600" : "bg-green-500"
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
                                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2"></span>
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
                                            <span className="min-w-4 text-green-500 mr-2">
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
                                            <span className="min-w-4 text-green-500 mr-2">
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
                </div>
              );
}