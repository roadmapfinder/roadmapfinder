export const phases = [
  {
    id: 0,
    title: "Mindset & Foundations",
    subtitle: "Stage 0",
    description: "Know why you want to enter AI/ML, set expectations, and pick a learning strategy.",
    color: "bg-gray-500",
    sections: [
      {
        title: "🎯 Goal",
        items: [
          "Decide focus: Research / Prod Engineering / MLOps / Data Science",
          "Create a weekly study plan (Hours / Projects / Resources)",
          "Learn how to learn: spaced repetition, active recall, systematic reading"
        ]
      }
    ]
  },
  {
    id: 1,
    title: "Mathematics",
    subtitle: "Core Fundamentals",
    description: "Build the mathematical base for everything ahead.",
    color: "bg-blue-500",
    sections: [
      {
        title: "⏱️ Duration: 6–8 weeks",
        items: []
      },
      {
        title: "📊 Linear Algebra",
        items: [
          "Vector spaces",
          "Embeddings",
          "SVD",
          "PCA"
        ]
      },
      {
        title: "📈 Calculus",
        items: [
          "Gradients",
          "Derivatives",
          "Optimization"
        ]
      },
      {
        title: "📉 Probability & Statistics",
        items: [
          "Uncertainty",
          "Likelihood",
          "Hypothesis testing"
        ]
      },
      {
        title: "📚 Resources",
        items: [
          "Khan Academy: Linear Algebra & Probability",
          "3Blue1Brown Essence of Calculus series",
          "MIT OCW Math"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Python & Software Fundamentals",
    subtitle: "Core Fundamentals",
    description: "Learn Python deeply and essential development tools.",
    color: "bg-green-500",
    sections: [
      {
        title: "⏱️ Duration: 4–6 weeks",
        items: []
      },
      {
        title: "🐍 Python Must-Know",
        items: [
          "Data types, control flow, OOP, modules",
          "Virtual environments (venv, conda)",
          "Debugging, logging"
        ]
      },
      {
        title: "🛠️ Tools",
        items: [
          "Git & GitHub",
          "Jupyter Notebooks",
          "VS Code"
        ]
      },
      {
        title: "🚀 Projects",
        items: [
          "✅ CLI-based expense tracker",
          "✅ CRUD file system app"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Data Handling",
    subtitle: "Core Fundamentals",
    description: "Master data wrangling, visualization, and SQL.",
    color: "bg-purple-500",
    sections: [
      {
        title: "⏱️ Duration: 4–6 weeks",
        items: []
      },
      {
        title: "📊 Data Wrangling",
        items: [
          "pandas",
          "NumPy"
        ]
      },
      {
        title: "📈 Visualization",
        items: [
          "matplotlib",
          "seaborn"
        ]
      },
      {
        title: "🗄️ SQL",
        items: [
          "Basics to advanced joins"
        ]
      },
      {
        title: "🚀 Mini Projects",
        items: [
          "✅ Data cleaning challenge on open datasets",
          "✅ EDA reports with insights"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Supervised & Unsupervised Learning",
    subtitle: "ML Essentials",
    description: "Core machine learning algorithms and evaluation.",
    color: "bg-orange-500",
    sections: [
      {
        title: "⏱️ Duration: 8–10 weeks",
        items: []
      },
      {
        title: "🤖 Core Algorithms",
        items: [
          "Linear & Logistic Regression",
          "Decision Trees, Random Forests",
          "KNN, SVM",
          "K-Means, PCA"
        ]
      },
      {
        title: "📊 Evaluation",
        items: [
          "Train/Test split, CV, Metrics (accuracy, precision, recall)",
          "Hyperparameter tuning"
        ]
      },
      {
        title: "🛠️ Tools",
        items: [
          "scikit-learn"
        ]
      },
      {
        title: "🚀 Projects",
        items: [
          "✅ Kaggle classification + regression",
          "✅ Clustering for customer segmentation"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Introduction to Deep Learning",
    subtitle: "ML Essentials",
    description: "Neural networks, optimization, and frameworks.",
    color: "bg-red-500",
    sections: [
      {
        title: "⏱️ Duration: 8–12 weeks",
        items: []
      },
      {
        title: "🧠 Fundamentals",
        items: [
          "Neuron intuition",
          "Loss & optimization",
          "Backpropagation"
        ]
      },
      {
        title: "🔧 Framework",
        items: [
          "PyTorch (industry standard)",
          "TensorFlow basics"
        ]
      },
      {
        title: "🎯 Key Models",
        items: [
          "MLPs",
          "Activation functions",
          "Optimizers (SGD, Adam)"
        ]
      },
      {
        title: "🚀 Projects",
        items: [
          "✅ Handwritten Digit Classifier",
          "✅ Simple NLP with embeddings"
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Computer Vision (CV)",
    subtitle: "Advanced ML & DL",
    description: "CNNs, transfer learning, and image processing.",
    color: "bg-indigo-500",
    sections: [
      {
        title: "⏱️ Duration: 6–8 weeks",
        items: []
      },
      {
        title: "👁️ Core Concepts",
        items: [
          "Convolutional Neural Networks (CNNs)",
          "Transfer Learning",
          "Augmentation"
        ]
      },
      {
        title: "🛠️ Tools",
        items: [
          "OpenCV",
          "Torchvision"
        ]
      },
      {
        title: "🚀 Projects",
        items: [
          "✅ Object detection",
          "✅ Semantic segmentation"
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Natural Language Processing (NLP)",
    subtitle: "Advanced ML & DL",
    description: "Transformers, embeddings, and language models.",
    color: "bg-pink-500",
    sections: [
      {
        title: "⏱️ Duration: 8–10 weeks",
        items: []
      },
      {
        title: "📝 Fundamentals",
        items: [
          "Tokenization",
          "Embeddings (Word2Vec, GloVe)",
          "Transformers & Attention"
        ]
      },
      {
        title: "📚 Libraries",
        items: [
          "Hugging Face Transformers",
          "spaCy"
        ]
      },
      {
        title: "🚀 Projects",
        items: [
          "✅ Sentiment analysis",
          "✅ Text summarization",
          "✅ Chatbot using Transformer"
        ]
      }
    ]
  },
  {
    id: 8,
    title: "Time Series & Forecasting",
    subtitle: "Advanced ML & DL",
    description: "Sequential data and prediction models.",
    color: "bg-teal-500",
    sections: [
      {
        title: "⏱️ Duration: 4 weeks",
        items: []
      },
      {
        title: "📊 Core Topics",
        items: [
          "Decomposition",
          "ARIMA",
          "LSTM & Transformers for sequential data"
        ]
      },
      {
        title: "🚀 Projects",
        items: [
          "✅ Stock price prediction",
          "✅ IoT sensor series forecasting"
        ]
      }
    ]
  },
  {
    id: 9,
    title: "Model Optimization & Efficiency",
    subtitle: "Engineering & Scaling",
    description: "Make models faster and smaller.",
    color: "bg-cyan-500",
    sections: [
      {
        title: "⏱️ Duration: 3–4 weeks",
        items: []
      },
      {
        title: "⚡ Techniques",
        items: [
          "Quantization",
          "Pruning",
          "Knowledge distillation"
        ]
      },
      {
        title: "🛠️ Tools",
        items: [
          "ONNX",
          "TensorRT"
        ]
      }
    ]
  },
  {
    id: 10,
    title: "MLOps & Deployment",
    subtitle: "Engineering & Scaling",
    description: "Move from notebooks to production systems.",
    color: "bg-amber-500",
    sections: [
      {
        title: "⏱️ Duration: 8–12 weeks",
        items: []
      },
      {
        title: "🐋 Docker/Containers",
        items: [
          "Docker"
        ]
      },
      {
        title: "📦 Versioning",
        items: [
          "DVC"
        ]
      },
      {
        title: "🔄 Pipelines",
        items: [
          "Airflow"
        ]
      },
      {
        title: "☁️ Cloud Services",
        items: [
          "AWS/GCP/Azure"
        ]
      },
      {
        title: "🚀 Serving",
        items: [
          "FastAPI",
          "Flask",
          "REST APIs",
          "Serverless",
          "Edge devices"
        ]
      },
      {
        title: "🚀 Projects",
        items: [
          "✅ Deploy a CV model as API",
          "✅ CI/CD for model retraining"
        ]
      }
    ]
  },
  {
    id: 11,
    title: "Ethics & Responsible AI",
    subtitle: "Engineering & Scaling",
    description: "Build fair, explainable, and secure AI.",
    color: "bg-emerald-500",
    sections: [
      {
        title: "⏱️ Duration: 2–3 weeks",
        items: []
      },
      {
        title: "⚖️ Core Topics",
        items: [
          "Bias detection",
          "Fairness metrics",
          "Explainability (SHAP, LIME)",
          "Privacy & security fundamentals"
        ]
      }
    ]
  },
  {
    id: 12,
    title: "Real Industry Projects",
    subtitle: "Industry Readiness",
    description: "Solve real problems with real use cases.",
    color: "bg-slate-500",
    sections: [
      {
        title: "🔥 Project Clusters",
        items: [
          "✅ End-to-End ML System (Data ingestion → training → monitoring → deployment)",
          "✅ Recommendation System (Collaborative + content filtering)",
          "✅ Advanced NLP Chatbot",
          "✅ CV System for Manufacturing QC",
          "✅ Forecasting Platform with Alerts",
          "✅ AI Monitoring Dashboard"
        ]
      },
      {
        title: "📌 Open-Source & Research Exposure",
        items: [
          "GitHub contributions",
          "Read ML papers regularly",
          "Use Papers with Code benchmarks"
        ]
      }
    ]
  },
  {
    id: 13,
    title: "Soft Skills & Job Preparation",
    subtitle: "Final Stage",
    description: "Prepare for interviews and professional work.",
    color: "bg-violet-500",
    sections: [
      {
        title: "🧠 Soft Skills",
        items: [
          "Problem breakdown",
          "A/B testing understanding",
          "Documentation"
        ]
      },
      {
        title: "💼 Interview Prep",
        items: [
          "System design",
          "ML case studies",
          "Coding rounds"
        ]
      },
      {
        title: "🎯 Practice Platforms",
        items: [
          "LeetCode",
          "Kaggle",
          "Project portfolios"
        ]
      }
    ]
  },
  {
    id: 14,
    title: "Tech Stack Mastery",
    subtitle: "VERY IMPORTANT",
    description: "Technologies you must master.",
    color: "bg-fuchsia-500",
    sections: [
      {
        title: "🛠️ Must-Know Stack",
        items: [
          "Python",
          "PyTorch",
          "Hugging Face",
          "scikit-learn",
          "SQL",
          "Docker",
          "FastAPI",
          "Cloud: AWS / GCP / Azure",
          "Git + GitHub",
          "CI/CD + MLOps"
        ]
      }
    ]
  },
  {
    id: 15,
    title: "Industry Readiness Milestones",
    subtitle: "Reality Check",
    description: "Know you're ready when you hit these.",
    color: "bg-rose-500",
    sections: [
      {
        title: "🏆 You're Ready When:",
        items: [
          "✔ You've shipped models to production",
          "✔ You maintain & retrain models",
          "✔ You can explain biases & metrics",
          "✔ You understand model debug & optimization",
          "✔ You can lead small teams & projects"
        ]
      },
      {
        title: "📌 Portfolio Checklist",
        items: [
          "✅ 6–8 diverse projects (CV, NLP, TS, Deployment)",
          "✅ Open-source contributions",
          "✅ Blog / Medium / LinkedIn posts",
          "✅ GitHub (clean, documented repos)",
          "✅ Resume + Case studies"
        ]
      }
    ]
  },
  {
    id: 16,
    title: "Timeline & Bonus Tips",
    subtitle: "Planning",
    description: "Suggested timeline and extra guidance.",
    color: "bg-lime-500",
    sections: [
      {
        title: "📆 Suggested Timeline",
        items: [
          "Basics: 4 months",
          "ML & DL: 6 months",
          "Production & Projects: 6 months",
          "Total: ~1–1.5 years",
          "Can be accelerated or extended based on hours available"
        ]
      },
      {
        title: "🔥 Bonus Tips",
        items: [
          "👉 Attend ML meetups + hackathons",
          "👉 Participate in Kaggle competitions",
          "👉 Read major blogs (Distill, DeepMind, OpenAI)",
          "👉 Watch conference talks (NeurIPS, ICML)"
        ]
      }
    ]
  }
];