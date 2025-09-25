// AI/ML Roadmap data structured according to your AI/ML Mastery content
export const phases = [
  {
    id: 1,
    title: "Core Foundations",
    subtitle: "Beginner Level",
    description: "Build strong math, programming, and data fundamentals.",
    color: "bg-blue-500",
    sections: [
      {
        title: "🧮 Mathematics for ML",
        items: [
          "Linear Algebra → Vectors, matrices, eigenvalues, SVD",
          "Probability & Statistics → Bayes theorem, distributions, hypothesis testing",
          "Calculus → Derivatives, gradients, chain rule, optimization basics",
          "Khan Academy Linear Algebra & MIT OCW Statistics courses"
        ]
      },
      {
        title: "💻 Programming & Tools",
        items: [
          "Python (NumPy, Pandas, Matplotlib, Seaborn)",
          "Jupyter Notebook / Google Colab",
          "Git + GitHub version control",
          "Python Official Docs, NumPy, Pandas documentation"
        ]
      },
      {
        title: "🎯 Foundation Projects",
        items: [
          "✅ Basic data cleaning (Titanic dataset)",
          "✅ Visualization dashboard (COVID-19, Stock market trends)",
          "Data manipulation and exploration exercises",
          "Statistical analysis on real-world datasets"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Core Machine Learning",
    subtitle: "Intermediate Level",
    description: "Master ML algorithms & model building.",
    color: "bg-green-500",
    sections: [
      {
        title: "📊 Supervised Learning",
        items: [
          "Regression: Linear, Polynomial, Ridge/Lasso",
          "Classification: Logistic Regression, Decision Trees, Random Forests, SVMs",
          "Evaluation: Confusion matrix, Precision/Recall, ROC-AUC",
          "Model selection and performance metrics"
        ]
      },
      {
        title: "🔍 Unsupervised Learning",
        items: [
          "Clustering (KMeans, DBSCAN, Hierarchical)",
          "Dimensionality Reduction (PCA, t-SNE)",
          "Anomaly detection techniques",
          "Association rule learning"
        ]
      },
      {
        title: "⚡ Model Improvement",
        items: [
          "Cross-validation, Hyperparameter tuning (GridSearchCV, RandomizedSearchCV)",
          "Feature engineering, Regularization",
          "Scikit-learn, XGBoost, LightGBM",
          "Ensemble methods and model stacking"
        ]
      },
      {
        title: "🚀 ML Projects",
        items: [
          "✅ Spam Email Classifier",
          "✅ Customer Segmentation using Clustering",
          "✅ House Price Prediction",
          "End-to-end ML pipeline development"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Deep Learning",
    subtitle: "Advanced Level",
    description: "Learn neural networks and modern DL frameworks.",
    color: "bg-purple-500",
    sections: [
      {
        title: "🧠 Neural Networks Basics",
        items: [
          "Perceptron, Multi-Layer Perceptron (MLP)",
          "Activation functions (ReLU, Sigmoid, Tanh, Softmax)",
          "Backpropagation & optimization (SGD, Adam, RMSProp)",
          "Loss functions and gradient descent variants"
        ]
      },
      {
        title: "🔧 Deep Learning Frameworks",
        items: [
          "TensorFlow ecosystem and Keras API",
          "PyTorch framework and dynamic computation graphs",
          "Model architecture design patterns",
          "GPU acceleration and distributed training"
        ]
      },
      {
        title: "👁️ Computer Vision",
        items: [
          "CNNs (Convolutional Neural Networks)",
          "Transfer Learning (ResNet, VGG, EfficientNet)",
          "Object Detection (YOLO, Faster R-CNN)",
          "Image segmentation and GANs"
        ]
      },
      {
        title: "📝 Natural Language Processing",
        items: [
          "Word Embeddings (Word2Vec, GloVe, FastText)",
          "RNN, LSTM, GRU architectures",
          "Transformers & Attention mechanisms",
          "Text preprocessing and tokenization"
        ]
      },
      {
        title: "🎯 Deep Learning Projects",
        items: [
          "✅ Handwritten Digit Recognition (MNIST)",
          "✅ Image Classifier with Transfer Learning",
          "✅ Sentiment Analysis on Tweets",
          "Multi-modal learning projects"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Modern AI & Industry-Ready Skills",
    subtitle: "Advanced Level",
    description: "Master cutting-edge AI/ML for real-world applications.",
    color: "bg-orange-500",
    sections: [
      {
        title: "🤖 Large Language Models (LLMs)",
        items: [
          "Transformers in detail (BERT, GPT, T5)",
          "Fine-tuning & Prompt Engineering",
          "Hugging Face Transformers library",
          "LLM deployment and optimization"
        ]
      },
      {
        title: "🚀 MLOps & Deployment",
        items: [
          "Model Serving (Flask, FastAPI, Streamlit, Gradio)",
          "Docker, Kubernetes basics for ML",
          "MLflow for experiment tracking",
          "CI/CD for ML models"
        ]
      },
      {
        title: "☁️ Cloud & Big Data",
        items: [
          "AWS/GCP/Azure ML services",
          "Big Data processing (Spark, Hadoop basics)",
          "Distributed training and inference",
          "Auto-scaling and model monitoring"
        ]
      },
      {
        title: "⚖️ Ethics & AI Safety",
        items: [
          "Fairness, Bias detection and mitigation in ML",
          "Responsible AI practices and guidelines",
          "Model interpretability and explainability",
          "Privacy-preserving ML techniques"
        ]
      },
      {
        title: "📈 Industry Projects",
        items: [
          "✅ AI-powered Chatbot with Transformers",
          "✅ Image Captioning System",
          "✅ Model Deployment on AWS/GCP with Docker",
          "Production-ready ML systems"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Specializations",
    subtitle: "Expert Level",
    description: "Master niche domains in AI/ML - Choose one or more paths.",
    color: "bg-red-500",
    sections: [
      {
        title: "👁️ Computer Vision Specialization",
        items: [
          "Advanced object detection and tracking",
          "Medical imaging and diagnostic AI",
          "Generative Adversarial Networks (GANs)",
          "Real-time video processing and analysis"
        ]
      },
      {
        title: "💬 NLP Specialization",
        items: [
          "Advanced chatbots and conversational AI",
          "Question-answering systems",
          "Document summarization and information extraction",
          "Multilingual and cross-lingual NLP"
        ]
      },
      {
        title: "🎨 Generative AI",
        items: [
          "GANs and Variational Autoencoders",
          "Diffusion models and Stable Diffusion",
          "Text-to-image and image-to-image generation",
          "Creative AI applications"
        ]
      },
      {
        title: "🎮 Reinforcement Learning",
        items: [
          "Q-Learning and Deep Q-Networks (DQN)",
          "Policy Gradient Methods (PPO, A3C)",
          "Multi-agent reinforcement learning",
          "RL for robotics and game AI"
        ]
      },
      {
        title: "🔧 AI for Edge/Robotics",
        items: [
          "Model optimization (TensorRT, ONNX)",
          "IoT AI and edge computing",
          "Robotics perception and control",
          "Real-time inference on embedded systems"
        ]
      }
    ]
  }
];

// Additional roadmap content sections
export const capstoneProjects = [
  {
    title: "🏗️ End-to-End ML Pipeline",
    description: "Complete workflow: Data → Training → Deployment → Monitoring",
    color: "border-green-300",
    bgColor: "text-green-600"
  },
  {
    title: "🤖 LLM-Powered AI Assistant",
    description: "Chatbot with LangChain + OpenAI API/HuggingFace",
    color: "border-blue-300",
    bgColor: "text-blue-600"
  },
  {
    title: "👁️ Computer Vision App",
    description: "Real-time Object Detection with YOLO",
    color: "border-purple-300",
    bgColor: "text-purple-600"
  },
  {
    title: "📝 NLP System",
    description: "Document Summarizer/Search Engine",
    color: "border-orange-300",
    bgColor: "text-orange-600"
  }
];

export const resources = [
  {
    title: "🔤 Mathematics",
    color: "border-blue-300",
    bgColor: "text-blue-600",
    items: [
      "• Khan Academy Linear Algebra",
      "• MIT OCW Statistics",
      "• 3Blue1Brown YouTube"
    ]
  },
  {
    title: "🐍 Programming",
    color: "border-green-300",
    bgColor: "text-green-600",
    items: [
      "• Python Official Docs",
      "• NumPy, Pandas, Matplotlib",
      "• Jupyter Notebooks"
    ]
  },
  {
    title: "🧠 Deep Learning",
    color: "border-purple-300",
    bgColor: "text-purple-600",
    items: [
      "• TensorFlow & PyTorch",
      "• Fast.ai Course",
      "• Deep Learning Specialization"
    ]
  },
  {
    title: "☁️ MLOps",
    color: "border-orange-300",
    bgColor: "text-orange-600",
    items: [
      "• Docker & Kubernetes",
      "• MLflow, Weights & Biases",
      "• AWS/GCP/Azure ML"
    ]
  },
  {
    title: "🤖 Advanced AI",
    color: "border-red-300",
    bgColor: "text-red-600",
    items: [
      "• Hugging Face Hub",
      "• Papers with Code",
      "• OpenAI Gymnasium"
    ]
  },
  {
    title: "📖 Research",
    color: "border-indigo-300",
    bgColor: "text-indigo-600",
    items: [
      "• ArXiv papers",
      "• Google Scholar",
      "• AI/ML conferences"
    ]
  }
];

export const timeline = [
  {
    phase: "Phase 1",
    duration: "2-3 months",
    description: "Foundations",
    color: "border-blue-300",
    bgColor: "text-blue-600"
  },
  {
    phase: "Phase 2",
    duration: "3-4 months",
    description: "Core ML",
    color: "border-green-300",
    bgColor: "text-green-600"
  },
  {
    phase: "Phase 3",
    duration: "4-6 months",
    description: "Deep Learning",
    color: "border-purple-300",
    bgColor: "text-purple-600"
  },
  {
    phase: "Phase 4",
    duration: "3-4 months",
    description: "Modern AI",
    color: "border-orange-300",
    bgColor: "text-orange-600"
  },
  {
    phase: "Phase 5",
    duration: "Ongoing",
    description: "Specialization",
    color: "border-red-300",
    bgColor: "text-red-600"
  }
];

export const finalTips = [
  "• Contribute to open-source AI projects (HuggingFace, Scikit-learn, PyTorch)",
  "• Build portfolio projects & showcase on GitHub + LinkedIn",
  "• Write blogs/tutorials to explain your work and share knowledge",
  "• Stay updated via paperswithcode.com, ArXiv, and AI newsletters",
  "• Join AI/ML communities and participate in competitions (Kaggle, DrivenData)",
  "• Attend conferences and workshops to network with professionals"
];