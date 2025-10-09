export const phases = [
  {
    id: 0,
    title: "Setup & Foundations",
    subtitle: "Python Basics & Programming Logic (0-1 month)",
    description: "Get comfortable with Python basics and programming fundamentals",
    color: "bg-green-600",
    sections: [
      {
        title: "Environment Setup & Basics",
        items: [
          "Python Installation → Latest Python 3.12+, virtual environments setup",
          "IDE Configuration → VS Code with Python extension, PyCharm setup",
          "Basic Syntax → Variables, data types, operators, expressions",
          "Control Flow → Conditional statements (if, elif, else), boolean logic"
        ]
      },
      {
        title: "Loops & Functions",
        items: [
          "Loop Structures → for loops, while loops, nested loops, break/continue",
          "Function Basics → Defining functions, parameters, return values",
          "Scope & Variables → Local vs global scope, variable lifetime",
          "Input/Output → print(), input(), basic CLI interaction patterns"
        ]
      },
      {
        title: "Error Handling & Debugging",
        items: [
          "Exception Handling → try/except blocks, specific exception types",
          "Debugging Techniques → print debugging, IDE debugger usage",
          "Error Types → Syntax errors, runtime errors, logical errors",
          "Best Practices → Code organization, commenting, readable code"
        ]
      },
      {
        title: "Foundation Projects",
        items: [
          "Calculator App → CLI-based calculator with basic operations",
          "Number Guessing Game → Random numbers, user input validation",
          "Menu System → Text-based menu navigation, user choices",
          "Basic File Operations → Reading/writing text files, data persistence"
        ]
      }
    ]
  },
  {
    id: 1,
    title: "Intermediate Python",
    subtitle: "OOP & Data Structures (1-3 months)",
    description: "Master object-oriented programming and advanced Python features",
    color: "bg-blue-500",
    sections: [
      {
        title: "Data Structures Mastery",
        items: [
          "Lists & Tuples → List methods, tuple packing/unpacking, immutability",
          "Dictionaries & Sets → Dictionary methods, set operations, data modeling",
          "List Comprehensions → Syntax, filtering, mapping, nested comprehensions",
          "Advanced Iteration → Enumerate, zip, itertools, generator expressions"
        ]
      },
      {
        title: "Object-Oriented Programming",
        items: [
          "Classes & Objects → Class definition, instance creation, attributes",
          "Inheritance → Single/multiple inheritance, method overriding, super()",
          "Encapsulation → Private attributes, property decorators, getters/setters",
          "Polymorphism → Method overloading, duck typing, abstract classes"
        ]
      },
      {
        title: "Modules & Packages",
        items: [
          "Module System → import statements, __name__, module search path",
          "Package Creation → __init__.py, package structure, relative imports",
          "Virtual Environments → venv, pip, requirements.txt, dependency management",
          "Standard Library → os, sys, datetime, json, csv modules"
        ]
      },
      {
        title: "Advanced Features",
        items: [
          "Decorators → Function decorators, class decorators, built-in decorators",
          "Generators → yield keyword, generator functions, memory efficiency",
          "Regular Expressions → re module, pattern matching, text processing",
          "File Handling → JSON, CSV, binary files, context managers"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Data & Automation",
    subtitle: "Python for Data Analysis & Task Automation (3-5 months)",
    description: "Use Python to automate tasks and handle data processing efficiently",
    color: "bg-purple-500",
    sections: [
      {
        title: "Data Handling Libraries",
        items: [
          "Pandas → DataFrames, data cleaning, manipulation, groupby operations",
          "NumPy → Arrays, mathematical operations, linear algebra basics",
          "Data Visualization → matplotlib, seaborn, plotly for charts and graphs",
          "Data Processing → CSV/Excel reading, data transformation, analysis"
        ]
      },
      {
        title: "Web Scraping & APIs",
        items: [
          "Requests Library → HTTP requests, API consumption, authentication",
          "Beautiful Soup → HTML parsing, web scraping, data extraction",
          "Selenium → Browser automation, dynamic content, form submission",
          "JSON Handling → API responses, data serialization, REST APIs"
        ]
      },
      {
        title: "Automation Tools",
        items: [
          "File Automation → openpyxl for Excel, file organization, batch processing",
          "GUI Automation → pyautogui, desktop automation, screen interaction",
          "Email Automation → smtplib, email sending, attachment handling",
          "Task Scheduling → schedule library, cron jobs, automated workflows"
        ]
      },
      {
        title: "Automation Projects",
        items: [
          "Web Scraper → News/job scraping, data collection, storage",
          "Data Analyzer → Excel/CSV processing, statistical analysis, reporting",
          "Email Bot → Automated email campaigns, personalization, scheduling",
          "Social Media Bot → Instagram/Twitter automation, content posting"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Web Development",
    subtitle: "Building Web Applications (5-8 months)",
    description: "Create industry-ready web applications using Python frameworks",
    color: "bg-red-500",
    sections: [
      {
        title: "Web Frameworks",
        items: [
          "Django → Full-stack framework, MVT pattern, admin interface",
          "Flask → Lightweight framework, microservices, API development",
          "FastAPI → Modern API framework, automatic documentation, async support",
          "Template Engines → Jinja2, Django templates, dynamic HTML generation"
        ]
      },
      {
        title: "Database Integration",
        items: [
          "SQL Databases → SQLite, PostgreSQL, MySQL integration",
          "ORM Systems → Django ORM, SQLAlchemy, database migrations",
          "Database Design → Normalization, relationships, indexing strategies",
          "Query Optimization → Efficient queries, N+1 problem, caching"
        ]
      },
      {
        title: "API Development",
        items: [
          "REST APIs → CRUD operations, HTTP methods, status codes",
          "Django REST Framework → Serializers, viewsets, authentication",
          "FastAPI Features → Pydantic models, dependency injection, middleware",
          "API Documentation → Swagger/OpenAPI, endpoint testing, versioning"
        ]
      },
      {
        title: "Authentication & Deployment",
        items: [
          "User Authentication → Login/signup, session management, JWT tokens",
          "Authorization → Role-based access, permissions, security middleware",
          "Deployment → Heroku, AWS EC2, Render, Docker containerization",
          "Production Setup → Environment variables, logging, monitoring"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Advanced Python",
    subtitle: "Modern Python & Testing (8-12 months)",
    description: "Master advanced concepts and professional development practices",
    color: "bg-indigo-500",
    sections: [
      {
        title: "Advanced Programming Concepts",
        items: [
          "Design Patterns → Singleton, Factory, Observer, Strategy patterns",
          "Metaclasses → Class creation, dynamic classes, advanced OOP",
          "Async Programming → asyncio, async/await, concurrent execution",
          "Multi-threading → threading module, multiprocessing, parallel computing"
        ]
      },
      {
        title: "Modern Python Features",
        items: [
          "Type Hints → Static typing, mypy, generic types, protocol classes",
          "Python 3.12 Features → Structural pattern matching, improved error messages",
          "Context Managers → with statements, custom context managers",
          "Iterators & Generators → Advanced iteration patterns, yield from"
        ]
      },
      {
        title: "Testing & Quality",
        items: [
          "Unit Testing → unittest, pytest, test-driven development",
          "Integration Testing → API testing, database testing, mocking",
          "Code Quality → PEP 8, black formatter, linting with flake8",
          "Documentation → Sphinx, docstrings, API documentation"
        ]
      },
      {
        title: "Advanced Projects",
        items: [
          "Multi-threaded Scraper → Concurrent web scraping, performance optimization",
          "Async API → FastAPI with async endpoints, database connections",
          "CLI Tool → argparse, click library, command-line applications",
          "Python Package → setuptools, PyPI publishing, package distribution"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Data Science & AI",
    subtitle: "Machine Learning & AI Specialization (12-18 months)",
    description: "Enter data science and artificial intelligence using Python",
    color: "bg-pink-500",
    sections: [
      {
        title: "Data Science Foundation",
        items: [
          "Advanced Pandas → Multi-indexing, pivot tables, time series analysis",
          "Statistical Analysis → scipy, statistical tests, hypothesis testing",
          "Data Visualization → Advanced plotting, interactive visualizations",
          "Data Preprocessing → Cleaning, normalization, feature engineering"
        ]
      },
      {
        title: "Machine Learning",
        items: [
          "Scikit-learn → Supervised/unsupervised learning, model evaluation",
          "ML Algorithms → Linear regression, classification, clustering, trees",
          "Model Selection → Cross-validation, hyperparameter tuning, pipelines",
          "Feature Engineering → Selection, extraction, dimensionality reduction"
        ]
      },
      {
        title: "Deep Learning & AI",
        items: [
          "Neural Networks → TensorFlow, Keras, PyTorch frameworks",
          "CNN & RNN → Image processing, natural language processing",
          "NLP Libraries → NLTK, spaCy, Hugging Face transformers",
          "Generative AI → GPT integration, prompt engineering, AI applications"
        ]
      },
      {
        title: "ML/AI Projects",
        items: [
          "Predictive Model → Stock price prediction, regression analysis",
          "Sentiment Analysis → Twitter data, text classification, NLP pipeline",
          "AI Chatbot → GPT integration, conversation handling, context management",
          "Image Classifier → CNN implementation, computer vision, deployment"
        ]
      }
    ]
  },
  {
    id: 6,
    title: "DevOps & Industry",
    subtitle: "Production Python & DevOps (12-18 months)",
    description: "Become industry-ready with DevOps practices and cloud deployment",
    color: "bg-teal-500",
    sections: [
      {
        title: "Version Control & Collaboration",
        items: [
          "Git Mastery → Advanced Git workflows, branching strategies, collaboration",
          "GitHub Actions → CI/CD pipelines, automated testing, deployment",
          "Code Review → Pull requests, code quality standards, team workflows",
          "Documentation → Technical writing, API docs, project documentation"
        ]
      },
      {
        title: "Containerization & Cloud",
        items: [
          "Docker → Containerization, Dockerfile, multi-stage builds",
          "Kubernetes → Container orchestration, scaling, service mesh",
          "Cloud Platforms → AWS Lambda, Azure Functions, GCP deployment",
          "Infrastructure → Terraform, infrastructure as code, monitoring"
        ]
      },
      {
        title: "Production Practices",
        items: [
          "Logging & Monitoring → Structured logging, application monitoring",
          "Security → Input validation, authentication, secure coding practices",
          "Performance → Profiling, optimization, caching strategies",
          "Scalability → Load balancing, horizontal scaling, microservices"
        ]
      },
      {
        title: "Enterprise Projects",
        items: [
          "Microservices → FastAPI services, inter-service communication",
          "ETL Pipeline → Data ingestion, transformation, warehouse loading",
          "Monitoring Dashboard → Real-time metrics, alerting, visualization",
          "Cloud Application → Scalable web app with cloud-native features"
        ]
      }
    ]
  }
];
