"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { useRouter } from "next/navigation";
import { 
  Sun, 
  Moon, 
  Download, 
  ChevronDown, 
  BookOpen, 
  Code, 
  Database, 
  Server, 
  GitMerge, 
  Layers, 
  PenTool, 
  BookMarked, 
  Loader 
} from "lucide-react";

// System Design Roadmap data structure
const roadmapData = [
  {
    id: 1,
    title: "Introduction",
    description: "Understand the basics of system design and its importance",
    icon: <BookOpen className="w-5 h-5" />,
    content: {
      whatToLearn: [
        "What is System Design?",
        "Importance in interviews & real-world systems",
        "High-level vs Low-level Design",
        "Career Pathways in System Architecture",
        "Technical vs Business Requirements"
      ],
      bestCourses: {
        english: [
          "Introduction to System Design (ByteByteGo)",
          "System Design Fundamentals (Educative.io)",
          "Software Architecture & System Design (Udemy)",
          "Introduction to Software Architecture (Coursera)"
        ],
        hindi: [
          "System Design Basics (Knowledge Gate)",
          "System Design Introduction in Hindi (Code with Arjun)",
          "Software System Design Hindi (Tech Primers)",
          "Introduction to System Design in Hindi (Apna College)"
        ]
      },
      toolsToUse: [
        "Documentation Tools",
        "UML Diagramming",
        "Whiteboarding Software",
        "Architecture Decision Records (ADRs)",
        "Requirement Tracking"
      ],
      docsAndWebsites: [
        "System Design Primer (GitHub)",
        "Martin Fowler's Blog",
        "High Scalability Blog",
        "AWS Architecture Center",
        "Microsoft Azure Architecture Center"
      ],
      projectIdeas: [
        "Personal blog architecture design",
        "E-commerce site system overview",
        "Ride-sharing app high-level design",
        "Document management system architecture"
      ]
    }
  },
  {
    id: 2,
    title: "Prerequisites",
    description: "Master the fundamental concepts needed for system design",
    icon: <Code className="w-5 h-5" />,
    content: {
      whatToLearn: [
        "Computer Networking Basics",
        "Operating Systems Fundamentals",
        "OOP Concepts and Design Principles",
        "DBMS (SQL & NoSQL)",
        "Basic Linux/Unix Commands",
        "Git Version Control"
      ],
      bestCourses: {
        english: [
          "Computer Networks (Stanford CS144)",
          "Operating Systems (Berkeley CS162)",
          "Database Management Systems (CMU)",
          "Object-Oriented Design (University of Alberta)"
        ],
        hindi: [
          "Computer Networks in Hindi (Gate Smashers)",
          "Operating System Hindi Course (Jenny's Lectures)",
          "DBMS Complete Course in Hindi (Knowledge Gate)",
          "OOP Concepts in Hindi (CodeWithHarry)"
        ]
      },
      toolsToUse: [
        "Wireshark",
        "Postman/Insomnia",
        "MongoDB Compass",
        "MySQL Workbench",
        "Docker Basics",
        "Virtual Box/VMware"
      ],
      docsAndWebsites: [
        "GeeksforGeeks",
        "W3Schools",
        "Mozilla Developer Network",
        "Tutorialspoint",
        "Javatpoint"
      ],
      projectIdeas: [
        "Build a network packet analyzer",
        "Create a small database with proper indexing",
        "Implement basic threading and process management",
        "Design a small OOP project with SOLID principles"
      ]
    }
  },
  {
    id: 3,
    title: "Core Concepts",
    description: "Learn essential system design principles and patterns",
    icon: <Database className="w-5 h-5" />,
    content: {
      whatToLearn: [
        "Scalability (Vertical & Horizontal)",
        "Load Balancing Strategies",
        "Caching Mechanisms",
        "Database Sharding",
        "CAP Theorem",
        "Consistency Patterns (Eventual, Strong)",
        "API Design (REST & GraphQL)"
      ],
      bestCourses: {
        english: [
          "Distributed Systems (MIT 6.824)",
          "Web Application & Software Architecture 101 (Educative)",
          "Scalability & System Design (InterviewBit)",
          "Advanced Distributed Systems (Coursera)"
        ],
        hindi: [
          "System Design Core Concepts Hindi (Coding Blocks)",
          "Scalability in Hindi (Scaler Topics)",
          "CAP Theorem & Database Design Hindi (Technical Suneja)",
          "API Design in Hindi (Tutorial Point Hindi)"
        ]
      },
      toolsToUse: [
        "Redis",
        "HAProxy/Nginx",
        "Apache Kafka",
        "Memcached",
        "Cassandra",
        "MongoDB Atlas"
      ],
      docsAndWebsites: [
        "Designing Data-Intensive Applications (Book)",
        "System Design Interview (Alex Xu)",
        "High Scalability",
        "InfoQ",
        "Architecture Notes by AnkitSharma"
      ],
      projectIdeas: [
        "Implement a caching system",
        "Design a sharded database implementation",
        "Build a REST API with proper design",
        "Create a load-balanced web application"
      ]
    }
  },
  {
    id: 4,
    title: "Components",
    description: "Understand key building blocks of modern distributed systems",
    icon: <Server className="w-5 h-5" />,
    content: {
      whatToLearn: [
        "Client-Server Model",
        "Content Delivery Networks (CDN)",
        "Message Queues",
        "Rate Limiting Strategies",
        "Database Indexing",
        "Proxy Servers",
        "Microservices vs Monolith"
      ],
      bestCourses: {
        english: [
          "Microservices Architecture (Udemy)",
          "Message Brokers Deep Dive (Pluralsight)",
          "CDN & Edge Computing (A Cloud Guru)",
          "Database Performance Tuning (Oracle University)"
        ],
        hindi: [
          "Microservices vs Monolith Hindi (Tech Primers)",
          "Message Queue in Hindi (CodeWithHarry)",
          "Database Indexing Hindi (MySirG)",
          "Proxy Servers & Load Balancers Hindi (Learning Simplified)"
        ]
      },
      toolsToUse: [
        "RabbitMQ/Kafka",
        "Nginx/HAProxy",
        "Cloudflare/Akamai",
        "Kong API Gateway",
        "Elasticsearch",
        "Docker & Kubernetes"
      ],
      docsAndWebsites: [
        "Microservices.io",
        "Nginx Blog",
        "AWS Architecture Blog",
        "MongoDB Performance Blog",
        "Kubernetes Documentation"
      ],
      projectIdeas: [
        "Build a microservice with proper communication",
        "Implement a message queue system",
        "Create a proxy server with caching",
        "Design a rate-limited API gateway"
      ]
    }
  },
  {
    id: 5,
    title: "Design Patterns",
    description: "Learn reusable solutions to common system design problems",
    icon: <GitMerge className="w-5 h-5" />,
    content: {
      whatToLearn: [
        "Singleton Pattern",
        "Pub-Sub Pattern",
        "Circuit Breaker Pattern",
        "API Gateway Pattern",
        "Saga Pattern",
        "Bulkhead Pattern",
        "CQRS Pattern"
      ],
      bestCourses: {
        english: [
          "Cloud Design Patterns (Microsoft Learn)",
          "Design Patterns in Modern Systems (Udemy)",
          "Microservice Patterns (LinkedIn Learning)",
          "Enterprise Integration Patterns (Pluralsight)"
        ],
        hindi: [
          "Design Patterns in Hindi (Thapa Technical)",
          "Microservice Patterns Hindi (Code Improve)",
          "Cloud Design Patterns Hindi (Tech Guide)",
          "System Architecture Patterns Hindi (SimpleCoding)"
        ]
      },
      toolsToUse: [
        "Netflix Hystrix",
        "Resilience4j",
        "Apache Camel",
        "Spring Cloud Gateway",
        "Axon Framework",
        "MassTransit"
      ],
      docsAndWebsites: [
        "Refactoring.guru",
        "Microsoft Cloud Design Patterns",
        "Martin Fowler's Blog",
        "Microservices.io Patterns",
        "Enterprise Integration Patterns"
      ],
      projectIdeas: [
        "Implement a circuit breaker for API calls",
        "Create a pub-sub system with proper patterns",
        "Design a saga pattern for distributed transactions",
        "Build an API gateway with proper routing"
      ]
    }
  },
  {
    id: 6,
    title: "Case Studies",
    description: "Analyze real-world system design examples",
    icon: <Layers className="w-5 h-5" />,
    content: {
      whatToLearn: [
        "Design Twitter",
        "Design YouTube",
        "Design WhatsApp",
        "Design Instagram",
        "Design URL Shortener",
        "Design Distributed File Storage",
        "Design Payment Processing System"
      ],
      bestCourses: {
        english: [
          "Grokking the System Design Interview (Educative)",
          "ByteByteGo System Design Cases",
          "System Design Interview - Alex Xu (Book)",
          "High Scalability Case Studies"
        ],
        hindi: [
          "System Design Case Studies Hindi (Coding Blocks)",
          "Popular System Design Questions Hindi (Love Babbar)",
          "Twitter, WhatsApp System Design Hindi (Apna College)",
          "Real World Systems Hindi (Code Improve)"
        ]
      },
      toolsToUse: [
        "Draw.io",
        "Whimsical",
        "Excalidraw",
        "Lucidchart",
        "Miro",
        "Figma (for system diagrams)"
      ],
      docsAndWebsites: [
        "High Scalability Blog",
        "System Design Primer",
        "Engineering Blogs of Tech Companies",
        "Distributed Systems Blog",
        "Instagram Engineering Blog"
      ],
      projectIdeas: [
        "Build a URL shortener service",
        "Create a simple Twitter clone",
        "Design a file sharing system",
        "Implement a notification service"
      ]
    }
  },
  {
    id: 7,
    title: "Tools and Resources",
    description: "Essential tools and learning resources for system design",
    icon: <PenTool className="w-5 h-5" />,
    content: {
      whatToLearn: [
        "System Diagramming Tools",
        "Performance Testing Tools",
        "API Testing & Documentation",
        "Cloud Service Providers",
        "Container Orchestration",
        "Monitoring & Observability"
      ],
      bestCourses: {
        english: [
          "Mastering System Design Tools (Udemy)",
          "AWS Solutions Architect (A Cloud Guru)",
          "Kubernetes Complete Course (KodeKloud)",
          "Terraform & Infrastructure as Code"
        ],
        hindi: [
          "System Design Tools Hindi (CodeWithHarry)",
          "AWS in Hindi (Technical Guruji)",
          "Docker & Kubernetes Hindi (Apna College)",
          "Performance Testing Hindi (Testing Shashtra)"
        ]
      },
      toolsToUse: [
        "AWS/GCP/Azure",
        "Docker & Kubernetes",
        "Terraform/Pulumi",
        "Prometheus & Grafana",
        "JMeter/Locust",
        "ELK Stack"
      ],
      docsAndWebsites: [
        "AWS Documentation",
        "Kubernetes Documentation",
        "Terraform Registry",
        "Docker Hub",
        "Prometheus Documentation"
      ],
      projectIdeas: [
        "Set up Kubernetes cluster with monitoring",
        "Create cloud infrastructure with Terraform",
        "Implement logging with ELK stack",
        "Build a CI/CD pipeline for microservices"
      ]
    }
  },
  {
    id: 8,
    title: "Practice",
    description: "Strengthen your skills with regular practice and assessments",
    icon: <BookMarked className="w-5 h-5" />,
    content: {
      whatToLearn: [
        "Interview Patterns",
        "Communication Skills",
        "Time Management during Interviews",
        "Trade-off Analysis",
        "Requirement Clarification Techniques",
        "Performance Analysis"
      ],
      bestCourses: {
        english: [
          "System Design Mock Interviews (Pramp)",
          "Educative.io System Design Practice",
          "AlgoExpert System Design Questions",
          "LeetCode System Design Problems"
        ],
        hindi: [
          "System Design Interview Preparation Hindi (Bharat Hirwani)",
          "Mock Interview Hindi (Apna College)",
          "System Design Practice Hindi (Coding Minutes)",
          "Interview Questions Hindi (Love Babbar)"
        ]
      },
      toolsToUse: [
        "Pramp",
        "Interviewing.io",
        "LeetCode",
        "HackerRank",
        "System Design Templates",
        "Communication Tools"
      ],
      docsAndWebsites: [
        "LeetCode Discuss System Design Section",
        "Glassdoor Interview Questions",
        "Grokking System Design Interview",
        "Reddit r/cscareerquestions",
        "System Design Interview YouTube Channels"
      ],
      projectIdeas: [
        "Create video explanations of system designs",
        "Build a portfolio of case studies",
        "Contribute to open source distributed systems",
        "Teach system design concepts to others"
      ]
    }
  }
];

export default function Home() {
  const [openSection, setOpenSection] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [activeSection, setActiveSection] = useState(1);
  const router = useRouter();

  // Toggle section open/close
  const toggleSection = (id) => {
    setOpenSection(openSection === id ? null : id);
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Handle smooth scrolling to sections
  const scrollToSection = (id) => {
    const element = document.getElementById(`section-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  // Track scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = roadmapData.map(section => {
        const element = document.getElementById(`section-${section.id}`);
        if (element) {
          const rect = element.getBoundingClientRect();
          return {
            id: section.id,
            top: rect.top,
          };
        }
        return null;
      }).filter(Boolean);

      // Find the section closest to the top of the viewport
      const active = sections.reduce((closest, section) => {
        if (section.top > -100 && section.top < 200) return section;
        if (closest && Math.abs(closest.top) > Math.abs(section.top)) return section;
        return closest;
      }, null);

      if (active && active.id !== activeSection) {
        setActiveSection(active.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

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
      title.textContent = "System Design Roadmap";
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
      pdf.save("System_Design_Roadmap.pdf");

      // Store the downloaded roadmap data to localStorage
      localStorage.setItem('downloadedRoadmap', JSON.stringify(roadmapData));

      // Navigate to Downloads page
      router.push('/Downloads');

      // Store the downloaded roadmap data to local storage if needed
      localStorage.setItem('downloadedRoadmap', JSON.stringify(roadmapData));

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
      } transition-colors duration-300`}
    >
      <Head>
        <title>System Design Roadmap</title>
        <meta
          name="description"
          content="Complete roadmap for mastering System Design concepts and practices"
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
          System Design Roadmap
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
            aria-label="Download Roadmap"
          >
            {downloading ? (
              <>
                <Loader className="w-4 h-4 mr-2 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <Download className="w-4 h-4 mr-2" />
                Download
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
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8 max-w-6xl flex flex-col md:flex-row gap-6">
        {/* Sidebar Navigation (visible on md and above) */}
        <aside className="hidden md:block w-64 sticky self-start top-24 h-full">
          <div className={`p-4 rounded-lg ${darkMode ? "bg-gray-800" : "bg-white"} shadow-md`}>
            <h2 className="text-lg font-semibold mb-4 border-b pb-2">Roadmap Sections</h2>
            <ul className="space-y-2">
              {roadmapData.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-3 py-2 rounded-md flex items-center transition-colors ${
                      activeSection === section.id
                        ? darkMode
                          ? "bg-blue-900 text-white"
                          : "bg-blue-100 text-blue-800"
                        : darkMode
                        ? "hover:bg-gray-700"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <span className="mr-2">{section.icon}</span>
                    <span className="text-sm">{section.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <main className="flex-1">
          {/* Introduction */}
          <div
            className={`mb-8 p-6 rounded-lg ${
              darkMode ? "bg-gray-800" : "bg-white"
            } shadow-md transition-colors duration-300`}
          >
            <h2 className="text-xl md:text-2xl font-semibold mb-3">
              Welcome to the System Design Roadmap
            </h2>
            <p className="text-sm md:text-base leading-relaxed">
              This roadmap will guide you through the essential concepts, tools, and
              resources needed to master System Design. Each section contains curated resources
            
            </p>
        
          </div>

          {/* Roadmap Sections */}
          <div className="space-y-6">
            {roadmapData.map((section) => (
              <div
                id={`section-${section.id}`}
                key={section.id}
                className={`rounded-lg shadow-md overflow-hidden transition-all duration-300 scroll-mt-24 ${
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
                        darkMode ? "bg-blue-600" : "bg-blue-500"
                      } text-white font-medium transition-all`}
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
                  <ChevronDown
                    className={`w-5 h-5 transform transition-transform duration-300 ${
                      openSection === section.id ? "rotate-180" : "rotate-0"
                    }`}
                  />
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
      </div>
                  );
      }
      
