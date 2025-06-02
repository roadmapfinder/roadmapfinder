"use client";
import { useState } from "react";
import Head from "next/head";

import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

// Roadmap data structure
const roadmapData = [
  {
    id: 1,
    title: "Programming Fundamentals",
    description:
      "Master the essential programming concepts needed for app development",
    content: {
      whatToLearn: [
        "Programming Logic & Algorithms",
        "Variables, Data Types & Operators",
        "Control Structures (if/else, loops)",
        "Functions & Methods",
        "Object-Oriented Programming",
        "Data Structures",
      ],
      bestCourses: {
        english: [
          "CS50's Introduction to Computer Science (Harvard)",
          "Programming Fundamentals (Coursera)",
          "Complete Python Bootcamp (Udemy)",
          "JavaScript Basics (freeCodeCamp)",
        ],
        hindi: [
          "Complete Programming Course in Hindi (CodeWithHarry)",
          "Programming Fundamentals Hindi (Apna College)",
          "DSA in Hindi by Love Babbar (YouTube)",
          "Object-Oriented Programming in Hindi (GeekyShows)",
        ],
      },
      toolsToUse: [
        "Visual Studio Code",
        "GitHub (version control)",
        "CodePen/JSFiddle",
        "HackerRank/LeetCode",
        "Flowcharts & Pseudocode tools",
      ],
      docsAndWebsites: [
        "MDN Web Docs",
        "W3Schools",
        "GeeksforGeeks",
        "Stack Overflow",
        "Dev.to",
        "freeCodeCamp Learn",
      ],
      projectIdeas: [
        "Calculator app",
        "To-do list manager",
        "Quiz application",
        "Weather information app",
      ],
    },
  },
  {
    id: 2,
    title: "Choose Your Development Path",
    description: "Decide which platform and technology stack to specialize in",
    content: {
      whatToLearn: [
        "Native vs Cross-Platform Approaches",
        "Platform-Specific Design Guidelines",
        "Language & Framework Comparisons",
        "Target Audience Considerations",
        "Market Share Analysis",
        "Performance Requirements",
      ],
      bestCourses: {
        english: [
          "Mobile App Development Comparison (Pluralsight)",
          "Choosing the Right Mobile App Architecture (LinkedIn Learning)",
          "Cross-Platform vs Native Development (Udemy)",
          "Mobile Development Career Paths (Coursera)",
        ],
        hindi: [
          "Mobile Development Path Selection Hindi (TechGyan)",
          "Native vs Cross-Platform Hindi (CodeWithHarry)",
          "App Development की पूरी जानकारी (Technical Suneja)",
          "Mobile Development Career Guide Hindi (Apna College)",
        ],
      },
      toolsToUse: [
        "AppAnnie (market research)",
        "Google Play Console",
        "App Store Connect",
        "Platform comparison charts",
        "Project management tools",
      ],
      docsAndWebsites: [
        "Android Developers Portal",
        "Apple Developer Documentation",
        "Flutter Dev",
        "React Native Documentation",
        "Xamarin Documentation",
        "AppBrain Statistics",
      ],
      projectIdeas: [
        "Compare same app built in different frameworks",
        "Create design mockups for multiple platforms",
        "Build a simple app in two different frameworks",
        "Document requirements analysis for target platforms",
      ],
    },
  },
  {
    id: 3,
    title: "Android Development",
    description: "Learn to build native Android applications",
    content: {
      whatToLearn: [
        "Kotlin Programming",
        "Android Studio Environment",
        "Activity Lifecycle",
        "UI Development with XML",
        "Jetpack Compose",
        "Android Material Design",
        "Data Storage & Persistence",
        "API Integration",
      ],
      bestCourses: {
        english: [
          "Android Basics with Compose (Google Developers)",
          "The Complete Android 14 Developer Course (Udemy)",
          "Advanced Android with Kotlin (Udacity)",
          "Android Jetpack Masterclass (Pluralsight)",
        ],
        hindi: [
          "Android Development Complete Course Hindi (CodeWithHarry)",
          "Kotlin & Android Hindi (Apna College)",
          "Android App Development Hindi (Technical Suneja)",
          "Complete Android Masterclass in Hindi (Skill Share)",
        ],
      },
      toolsToUse: [
        "Android Studio",
        "Kotlin Playground",
        "Android Emulator",
        "Firebase Console",
        "Google Play Console",
        "Postman (API testing)",
      ],
      docsAndWebsites: [
        "Android Developers Documentation",
        "Kotlin Lang Documentation",
        "Material Design Guidelines",
        "Google Codelabs",
        "Android Arsenal",
        "Jetpack Compose Documentation",
      ],
      projectIdeas: [
        "News reader app",
        "Social media client",
        "Fitness tracker",
        "Location-based reminder app",
        "E-commerce app prototype",
      ],
    },
  },
  {
    id: 4,
    title: "iOS Development",
    description: "Learn to build native iOS applications",
    content: {
      whatToLearn: [
        "Swift Programming",
        "Xcode Environment",
        "UIKit Framework",
        "SwiftUI Framework",
        "App Lifecycle",
        "Core Data & Persistence",
        "Human Interface Guidelines",
        "App Store Guidelines",
      ],
      bestCourses: {
        english: [
          "iOS & Swift - The Complete iOS App Development Bootcamp (Udemy)",
          "Develop iOS 16 Apps with Swift (Stanford)",
          "SwiftUI Masterclass (Coursera)",
          "Complete iOS Development with UIKit (LinkedIn Learning)",
        ],
        hindi: [
          "iOS App Development in Hindi (Hindi Tech Tutorials)",
          "Swift Programming Language Hindi (Gyaan Guru)",
          "iOS Complete Course Hindi (Technical Suneja)",
          "SwiftUI in Hindi (CodeWithHarry)",
        ],
      },
      toolsToUse: [
        "Xcode",
        "Swift Playgrounds",
        "iOS Simulator",
        "TestFlight",
        "App Store Connect",
        "CocoaPods/Swift Package Manager",
      ],
      docsAndWebsites: [
        "Apple Developer Documentation",
        "Swift.org",
        "Human Interface Guidelines",
        "Ray Wenderlich Tutorials",
        "Hacking with Swift",
        "SwiftUI Documentation",
      ],
      projectIdeas: [
        "Task management app",
        "Recipe finder application",
        "Workout tracker",
        "Budgeting app",
        "Photo filtering application",
      ],
    },
  },
  {
    id: 5,
    title: "React Native Development",
    description: "Build cross-platform mobile apps with JavaScript and React",
    content: {
      whatToLearn: [
        "JavaScript/TypeScript Fundamentals",
        "React Core Concepts",
        "React Native Components",
        "Navigation Libraries",
        "State Management",
        "Native Modules Integration",
        "Cross-Platform Design Patterns",
        "Performance Optimization",
      ],
      bestCourses: {
        english: [
          "The Complete React Native + Hooks Course (Udemy)",
          "React Native: The Practical Guide (Maximilian)",
          "CS50's Mobile App Development with React Native (Harvard)",
          "Building Production-Ready Apps with React Native (Frontend Masters)",
        ],
        hindi: [
          "React Native Complete Course Hindi (CodeWithHarry)",
          "React Native Masterclass Hindi (Thapa Technical)",
          "Mobile App with React Native Hindi (Namaskar Dev)",
          "Zero to Hero: React Native in Hindi (Technical Suneja)",
        ],
      },
      toolsToUse: [
        "VS Code with React Native Extensions",
        "Expo CLI & SDK",
        "React Native CLI",
        "React DevTools",
        "Redux DevTools",
        "Flipper (debugging)",
      ],
      docsAndWebsites: [
        "React Native Documentation",
        "Expo Documentation",
        "React Navigation Docs",
        "Reactiflux Community",
        "React Native Directory",
        "Awesome React Native",
      ],
      projectIdeas: [
        "Social media app clone",
        "Food delivery app UI",
        "Travel companion app",
        "E-learning platform",
        "Marketplace application",
      ],
    },
  },
  {
    id: 6,
    title: "Flutter Development",
    description: "Build cross-platform mobile apps with Dart and Flutter",
    content: {
      whatToLearn: [
        "Dart Programming Language",
        "Flutter Widgets & UI",
        "State Management Solutions",
        "Navigation & Routing",
        "Flutter Animations",
        "Platform Integration",
        "Responsive Design",
        "Flutter DevTools",
      ],
      bestCourses: {
        english: [
          "Flutter & Dart - The Complete Guide (Udemy)",
          "The Complete Flutter Development Bootcamp with Dart (App Brewery)",
          "Flutter Advanced Course - Clean Architecture (Udemy)",
          "Flutter State Management Masterclass (Zero to Mastery)",
        ],
        hindi: [
          "Flutter Complete Course in Hindi (CodeWithHarry)",
          "Flutter & Dart Hindi Masterclass (Thapa Technical)",
          "Flutter App Development Hindi (Technical Suneja)",
          "Flutter Crash Course in Hindi (Apna College)",
        ],
      },
      toolsToUse: [
        "Android Studio / VS Code with Flutter extensions",
        "DartPad",
        "Flutter DevTools",
        "Firebase Console",
        "Codemagic / Bitrise (CI/CD)",
        "Flutter Pub.dev packages",
      ],
      docsAndWebsites: [
        "Flutter.dev Documentation",
        "Dart.dev",
        "Flutter Awesome",
        "Flutter Community Medium",
        "Flutter Gems",
        "Material Design Guidelines",
      ],
      projectIdeas: [
        "Chat application",
        "Music player app",
        "Shopping app with cart functionality",
        "Personal finance tracker",
        "News aggregator application",
      ],
    },
  },
  {
    id: 7,
    title: "Backend & API Integration",
    description: "Learn to connect your apps to server-side resources",
    content: {
      whatToLearn: [
        "RESTful API Concepts",
        "API Authentication Methods",
        "JSON Parsing & Handling",
        "GraphQL Basics",
        "Database Integration",
        "Cloud Services (Firebase, AWS, etc.)",
        "WebSockets for Real-time Features",
        "Error Handling & Offline Support",
      ],
      bestCourses: {
        english: [
          "APIs in Node.js and Express (freeCodeCamp)",
          "Mobile App Backend Development (Udemy)",
          "Firebase for Flutter/React Native (Firebase)",
          "REST API Design, Development & Management (Pluralsight)",
        ],
        hindi: [
          "Complete Backend for Apps in Hindi (CodeWithHarry)",
          "API Development Hindi (Thapa Technical)",
          "Firebase Complete Course Hindi (Technical Suneja)",
          "Mobile Backend as a Service Hindi (Geeky Shows)",
        ],
      },
      toolsToUse: [
        "Postman / Insomnia",
        "Firebase / Supabase",
        "MongoDB Atlas",
        "AWS Amplify / Google Cloud Platform",
        "Swagger / OpenAPI",
        "Ngrok (local API testing)",
      ],
      docsAndWebsites: [
        "Firebase Documentation",
        "AWS Amplify Docs",
        "MongoDB Docs",
        "Supabase Documentation",
        "RESTful API Tutorial",
        "Public APIs Repository",
      ],
      projectIdeas: [
        "Social auth integration app",
        "Real-time database app",
        "API-powered weather app",
        "Cloud storage image gallery",
        "Serverless functions integration",
      ],
    },
  },
  {
    id: 8,
    title: "Testing & Deployment",
    description: "Test your apps thoroughly and prepare them for release",
    content: {
      whatToLearn: [
        "Unit Testing Frameworks",
        "Integration Testing",
        "UI Testing",
        "Test-Driven Development",
        "Continuous Integration/Delivery",
        "App Store & Play Store Submission",
        "App Performance Optimization",
        "Analytics Integration",
      ],
      bestCourses: {
        english: [
          "Mobile App Testing Masterclass (Udemy)",
          "CI/CD for Mobile Apps (LinkedIn Learning)",
          "Automated Testing for Android/iOS (Pluralsight)",
          "App Store & Play Store Optimization (Udemy)",
        ],
        hindi: [
          "Mobile App Testing Course Hindi (CodeWithHarry)",
          "App Publishing Guide Hindi (Thapa Technical)",
          "Testing Mobile Apps Hindi (Technical Suneja)",
          "App Store Submission Hindi (Hindi Tech Tutorials)",
        ],
      },
      toolsToUse: [
        "Jest / XCTest / JUnit",
        "Appium / Detox",
        "Fastlane",
        "GitHub Actions / CircleCI",
        "Firebase Crashlytics",
        "Google Analytics / Firebase Analytics",
      ],
      docsAndWebsites: [
        "Testing Documentation for Android/iOS/React Native/Flutter",
        "Fastlane Docs",
        "App Store Review Guidelines",
        "Google Play Console Help",
        "Firebase Test Lab Documentation",
        "Mobile DevOps Guide",
      ],
      projectIdeas: [
        "Create a complete test suite for an existing app",
        "Set up CI/CD pipeline for a mobile project",
        "Optimize app performance and fix bottlenecks",
        "Prepare a complete app submission package",
        "Implement analytics dashboard",
      ],
    },
  },
  {
    id: 9,
    title: "Portfolio & Career Development",
    description:
      "Showcase your work and prepare for a career in app development",
    content: {
      whatToLearn: [
        "Portfolio Building Strategies",
        "GitHub Profile Optimization",
        "Resume Tailoring for App Development",
        "Interview Preparation",
        "Technical Assessment Preparation",
        "Mobile Development Best Practices",
        "Freelancing Skills",
        "Continued Learning Resources",
      ],
      bestCourses: {
        english: [
          "The Complete App Developer Portfolio Course (Udemy)",
          "Mobile Developer Interview Preparation (Pluralsight)",
          "Freelancing for Developers (LinkedIn Learning)",
          "App Development Career Path (Coursera)",
        ],
        hindi: [
          "App Developer Career Guide Hindi (CodeWithHarry)",
          "App Development Portfolio Hindi (Apna College)",
          "Mobile Developer Interview Hindi (Technical Suneja)",
          "Freelancing as App Developer Hindi (TechGyan)",
        ],
      },
      toolsToUse: [
        "GitHub Pages / GitLab Pages",
        "Portfolio website builders",
        "LinkedIn profile optimizer",
        "Behance / Dribbble (for UI showcase)",
        "Upwork / Fiverr / Freelancer",
        "LeetCode / HackerRank (for interview prep)",
      ],
      docsAndWebsites: [
        "GitHub Readme Templates",
        "Developer Portfolio Examples",
        "Mobile Interview Questions Repository",
        "Remote Jobs Websites",
        "Tech Conference Lists",
        "Developer Communities",
      ],
      projectIdeas: [
        "Create a personal portfolio website/app",
        "Contribute to open-source mobile projects",
        "Build a complex app that demonstrates multiple skills",
        "Create tutorial content/blog",
        "Develop a unique mobile app for a local business",
      ],
    },
  },
];

export default function APP() {
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

  const handleDownload = async () => {
    setDownloading(true);

    try {
      // Create a temporary div to render the roadmap content for downloading
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
      title.textContent = "App Development Roadmap";
      downloadDiv.appendChild(title);

      // Add roadmap content with improved styling
      roadmapData.forEach((section) => {
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
        section.content.whatToLearn.forEach((item) => {
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
        section.content.bestCourses.english.forEach((course) => {
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
        section.content.bestCourses.hindi.forEach((course) => {
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
        section.content.toolsToUse.forEach((tool) => {
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
        section.content.docsAndWebsites.forEach((doc) => {
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
        section.content.projectIdeas.forEach((project) => {
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

      // Temporarily add the div to the document to render it
      document.body.appendChild(downloadDiv);

      // IMPROVED html2canvas settings for better quality
      const canvas = await html2canvas(downloadDiv, {
        scale: 2, // Higher scale for better quality
        useCORS: true,
        logging: false,
        letterRendering: true, // Better text rendering
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
        compress: true, // Compress for smaller file size
        precision: 2
      });

      // Calculate dimensions for better fitting
      const imgWidth = 210; // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      const pageHeight = 297; // A4 height in mm

      let heightLeft = imgHeight;
      let position = 0;

      // Add first page
      pdf.addImage(
        canvas.toDataURL("image/jpeg", 0.95), // Use JPEG with high quality
        "JPEG",
        0,
        0,
        imgWidth,
        imgHeight,
      );
      heightLeft -= pageHeight;

      // Add additional pages if needed
      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(
          canvas.toDataURL("image/jpeg", 0.95),
          "JPEG",
          0,
          position,
          imgWidth,
          imgHeight,
        );
        heightLeft -= pageHeight;
      }

      setTimeout(() => {
        pdf.save("App_Developer_Roadmap.pdf");

        // Store the downloaded roadmap data to localStorage
        const timestamp = Date.now();
        const roadmapKey = `roadmap-${timestamp}`;
        const roadmapDataToSave = {
          id: timestamp,
          title: "App Developer Roadmap",
          date: new Date().toLocaleDateString(),
          category: "App Development",
          pdfPath: URL.createObjectURL(pdf.output('blob')),
          content: roadmapData
        };
        localStorage.setItem(roadmapKey, JSON.stringify(roadmapDataToSave));

        // Navigate to Downloads page if router is available
        // router.push('/Downloads'); // Uncomment if using Next.js router
      }, 10); // 1000ms = 1 second delay

      // Navigate to Downloads page if router is available
      // router.push('/Downloads'); // Uncomment if using Next.js router

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
        <title>App Developer Roadmap</title>
        <meta
          name="description"
          content="Complete roadmap for learning app development for Android, iOS, and cross-platform"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Sticky Navigation Bar */}
      <nav
        className={`sticky top-0 z-10 ${
          darkMode ? "bg-gray-800" : "bg-white"
        } shadow-md px-4 py-4 flex justify-between items-center transition-colors duration-300`}
      >
        <h1 className="text-xl md:text-2xl font-bold">App Developer Roadmap</h1>
        <div className="flex items-center gap-3">
          {/* Download Button */}
          <button
            onClick={handleDownload}
            disabled={downloading}
            className={`px-4 py-2 rounded-md ${
              darkMode
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-blue-500 hover:bg-blue-600"
            } text-white font-medium transition-colors flex items-center gap-2`}
            aria-label="Download Roadmap"
          >
            {downloading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 mr-1"
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 17a1 1 0 001 1h12a1 1 0 001-1v-2a1 1 0 00-2 0v1H5v-1a1 1 0 00-2 0v2zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                Download PDF
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
            Welcome to the App Developer Roadmap
          </h2>
          <p className="text-sm md:text-base leading-relaxed">
            This comprehensive roadmap will guide you through learning app
            development for Android, iOS, and cross-platform frameworks.
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
                            ),
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
                            ),
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
                        ),
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
