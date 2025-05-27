"use client";
import { useState } from "react";
import Head from "next/head";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";


// Roadmap data structure
const roadmapData = [
  {
    id: 1,
    title: "Learn Programming Fundamentals",
    description: "Master Python and programming basics",
    content: {
      whatToLearn: [
        "Python Syntax",
        "Data Structures",
        "Functions & OOP",
        "File Handling",
        "Error Handling",
        "Basic Algorithms",
      ],
      bestCourses: {
        english: [
          "Python for Everybody (Coursera)",
          "CS50's Introduction to Programming (Harvard/edX)",
          "Complete Python Bootcamp (Udemy)",
          "Python Data Structures (Michigan University)",
        ],
        hindi: [
          "Python Tutorial for Beginners (CodeWithHarry)",
          "Complete Python Course in Hindi (ApnaCollege)",
          "Python for AI/ML in Hindi (GreatLearning)",
          "Python Programming Hindi (FreeCodeCamp)",
        ],
      },
      toolsToUse: [
        "VS Code",
        "Jupyter Notebooks",
        "Google Colab",
        "PyCharm",
        "Git & GitHub",
      ],
      docsAndWebsites: [
        "Python.org Documentation",
        "Real Python",
        "W3Schools Python",
        "GeeksforGeeks Python",
        "Stack Overflow",
      ],
      projectIdeas: [
        "Text-based adventure game",
        "Data parser & analyzer",
        "Web scraper",
        "File organization tool",
      ],
    },
  },
  {
    id: 2,
    title: "Mathematics for Machine Learning",
    description: "Build the mathematical foundation required for ML",
    content: {
      whatToLearn: [
        "Linear Algebra",
        "Calculus (Derivatives & Integrals)",
        "Statistics & Probability",
        "Optimization Theory",
        "Information Theory",
        "Discrete Mathematics",
      ],
      bestCourses: {
        english: [
          "Mathematics for Machine Learning (Imperial College/Coursera)",
          "Essence of Linear Algebra (3Blue1Brown)",
          "Statistics and Probability (Khan Academy)",
          "Computational Linear Algebra (fast.ai)",
        ],
        hindi: [
          "Statistics & Probability in Hindi (Khan Academy)",
          "Linear Algebra for ML in Hindi (StudyIQ)",
          "Calculus for ML in Hindi (Unacademy)",
          "Complete Math for Data Science (Hindi) (LearnOHub)",
        ],
      },
      toolsToUse: [
        "NumPy",
        "SciPy",
        "Python Math Libraries",
        "MATLAB/Octave",
        "GeoGebra",
      ],
      docsAndWebsites: [
        "Seeing Theory (Statistics)",
        "Paul's Online Math Notes",
        "Immersive Math (Linear Algebra)",
        "StatQuest with Josh Starmer",
        "Better Explained",
      ],
      projectIdeas: [
        "Linear regression from scratch",
        "Statistical data analysis project",
        "Custom matrix operations library",
        "Data visualization dashboard",
      ],
    },
  },
  {
    id: 3,
    title: "Data Analysis & Visualization",
    description: "Learn to process, clean, analyze and visualize data",
    content: {
      whatToLearn: [
        "Data Cleaning & Preprocessing",
        "Exploratory Data Analysis",
        "Statistical Analysis",
        "Data Visualization Techniques",
        "Feature Engineering",
        "SQL & Database Basics",
      ],
      bestCourses: {
        english: [
          "Data Analysis with Python (FreeCodeCamp)",
          "Data Visualization with Matplotlib & Seaborn (Kaggle)",
          "SQL for Data Science (UC Davis/Coursera)",
          "Feature Engineering for Machine Learning (Udemy)",
        ],
        hindi: [
          "Data Analysis in Hindi (MySirG.com)",
          "Data Visualization Course Hindi (DigitalSikho)",
          "SQL Complete Course in Hindi (TechGyan)",
          "Pandas for Data Analysis Hindi (PyWizards)",
        ],
      },
      toolsToUse: [
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "Plotly",
        "SQL Databases",
      ],
      docsAndWebsites: [
        "Pandas Documentation",
        "Matplotlib Gallery",
        "Seaborn Example Gallery",
        "Kaggle Notebooks",
        "Towards Data Science",
      ],
      projectIdeas: [
        "Exploratory analysis of public datasets",
        "Interactive dashboard with Plotly",
        "COVID-19 data analysis project",
        "Financial data visualization",
      ],
    },
  },
  {
    id: 4,
    title: "Machine Learning Fundamentals",
    description: "Master the core machine learning algorithms and concepts",
    content: {
      whatToLearn: [
        "Supervised Learning",
        "Unsupervised Learning",
        "Model Evaluation",
        "Cross-Validation",
        "Bias-Variance Tradeoff",
        "Ensemble Methods",
      ],
      bestCourses: {
        english: [
          "Machine Learning (Andrew Ng/Coursera)",
          "Machine Learning Crash Course (Google)",
          "Introduction to ML (MIT OpenCourseWare)",
          "Practical Machine Learning (fast.ai)",
        ],
        hindi: [
          "Machine Learning in Hindi (Analytics Vidhya)",
          "Complete ML Course Hindi (GreatLearning)",
          "ML Algorithms in Hindi (MLwithHarsh)",
          "ML for Beginners Hindi (AIBot)",
        ],
      },
      toolsToUse: [
        "Scikit-Learn",
        "XGBoost",
        "LightGBM",
        "Weights & Biases",
        "MLflow",
      ],
      docsAndWebsites: [
        "Scikit-Learn Documentation",
        "ML Mastery Blog",
        "Kaggle Competitions",
        "Papers with Code",
        "Machine Learning Glossary (Google)",
      ],
      projectIdeas: [
        "Customer churn prediction",
        "Housing price prediction",
        "Image classification",
        "Recommender system",
      ],
    },
  },
  {
    id: 5,
    title: "Deep Learning & Neural Networks",
    description: "Understand and implement neural network architectures",
    content: {
      whatToLearn: [
        "Neural Network Basics",
        "CNNs (Convolutional Neural Networks)",
        "RNNs & LSTMs",
        "Transformers",
        "Transfer Learning",
        "Generative Models",
      ],
      bestCourses: {
        english: [
          "Deep Learning Specialization (Andrew Ng/Coursera)",
          "Practical Deep Learning for Coders (fast.ai)",
          "Deep Learning (NYU/Yann LeCun)",
          "MIT 6.S191: Introduction to Deep Learning",
        ],
        hindi: [
          "Deep Learning in Hindi (InterviewBit)",
          "Neural Networks Complete Course Hindi (TechLearner)",
          "CNN & RNN in Hindi (DataTrained)",
          "Deep Learning Fundamentals Hindi (AILearning)",
        ],
      },
      toolsToUse: [
        "TensorFlow",
        "PyTorch",
        "Keras",
        "NVIDIA CUDA",
        "Google Colab/Kaggle (free GPUs)",
      ],
      docsAndWebsites: [
        "TensorFlow Documentation",
        "PyTorch Tutorials",
        "Keras Documentation",
        "Distill.pub",
        "ArXiv Papers",
      ],
      projectIdeas: [
        "Image classification with CNNs",
        "Sentiment analysis with RNNs",
        "Text generation with transformers",
        "Style transfer application",
      ],
    },
  },
  {
    id: 6,
    title: "MLOps & Deployment",
    description: "Learn to deploy and maintain ML systems in production",
    content: {
      whatToLearn: [
        "Model Deployment",
        "CI/CD for ML",
        "Monitoring & Maintenance",
        "Scalability",
        "Containerization",
        "API Development",
      ],
      bestCourses: {
        english: [
          "MLOps Fundamentals (Google Cloud)",
          "Full Stack Deep Learning",
          "Deployment of Machine Learning Models (Udemy)",
          "MLOps Engineering on AWS (AWS Training)",
        ],
        hindi: [
          "MLOps Basic to Advanced Hindi (CloudLearn)",
          "ML Model Deployment in Hindi (CloudxLab)",
          "Docker & Kubernetes for ML Hindi (TechDeploy)",
          "Flask API Development Hindi (CodeKaro)",
        ],
      },
      toolsToUse: [
        "Docker",
        "Kubernetes",
        "Flask/FastAPI",
        "AWS/Azure/GCP",
        "MLflow",
        "Kubeflow",
      ],
      docsAndWebsites: [
        "MLOps Community",
        "Made With ML",
        "Neptune.ai Blog",
        "Kubernetes Documentation",
        "Docker Documentation",
      ],
      projectIdeas: [
        "End-to-end ML system with API",
        "Dockerized ML application",
        "Automated ML pipeline",
        "ML system with monitoring",
      ],
    },
  },
  {
    id: 7,
    title: "Specialized AI Fields",
    description: "Explore specialized domains within AI/ML",
    content: {
      whatToLearn: [
        "Natural Language Processing",
        "Computer Vision",
        "Reinforcement Learning",
        "Generative AI",
        "Time Series Analysis",
        "Recommender Systems",
      ],
      bestCourses: {
        english: [
          "Natural Language Processing (Stanford CS224N)",
          "CS231n: Convolutional Neural Networks for Visual Recognition",
          "Deep Reinforcement Learning (UC Berkeley)",
          "Generative Adversarial Networks (Coursera)",
        ],
        hindi: [
          "NLP in Hindi (AIBrainBox)",
          "Computer Vision Hindi Course (AIGurukul)",
          "Reinforcement Learning Hindi (MLCodes)",
          "Recommender Systems in Hindi (DataLearn)",
        ],
      },
      toolsToUse: [
        "Hugging Face Transformers",
        "OpenCV",
        "OpenAI Gym",
        "Stable Diffusion",
        "Prophet/ARIMA",
        "LangChain",
      ],
      docsAndWebsites: [
        "Hugging Face Documentation",
        "Paperspace Blog",
        "Stable Diffusion Documentation",
        "OpenAI Documentation",
        "OpenCV Tutorials",
      ],
      projectIdeas: [
        "Text summarization system",
        "Object detection application",
        "Reinforcement learning game bot",
        "Generative art project",
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
      title.textContent = "AI/ML Engineer Roadmap";
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

      // Save the PDF
      pdf.save("AI_ML_Engineer_Roadmap.pdf");

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
        <title>AI/ML Engineer Roadmap</title>
        <meta
          name="description"
          content="Complete roadmap for becoming an AI/ML Engineer"
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
          AI/ML Engineer Roadmap
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
                <svg 
                  className="w-4 h-4 mr-2" 
                  fill="currentColor" 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 20 20"
                >
                  <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                </svg>
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
            Welcome to the AI/ML Engineer Roadmap
          </h2>
          <p className="text-sm md:text-base leading-relaxed">
            This roadmap will guide you through the essential skills, tools, and
            resources needed to become a proficient AI/ML Engineer. Each section
            contains curated resources in both English and Hindi to help you
            master each stage of the machine learning journey. Click on any
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
