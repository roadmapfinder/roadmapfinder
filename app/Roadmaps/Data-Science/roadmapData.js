export const phases = [
  {
    id: 0,
    title: "Foundation",
    subtitle: "Building Strong Fundamentals (0–2 months)",
    description: "Build strong mathematical and programming fundamentals",
    color: "bg-gray-600",
    sections: [
      {
        title: "Programming (Python & SQL)",
        items: [
          "Python basics → Syntax, variables, data types, loops, functions, OOP basics",
          "Essential libraries → NumPy, Pandas, Matplotlib, Seaborn",
          "SQL mastery → CRUD operations, joins, aggregations, window functions",
          "Resources → Python Docs, W3Schools, LeetCode SQL problems",
          "Mini project → Analyze CSV dataset (like Titanic) using Pandas",
          "Database project → Build small SQL database and query data (employee DB)"
        ]
      },
      {
        title: "Mathematics & Statistics",
        items: [
          "Linear Algebra → Vectors, matrices, matrix operations",
          "Probability & Statistics → Descriptive stats, probability distributions",
          "Hypothesis testing → p-values, confidence intervals",
          "Calculus basics → Derivatives for gradient descent understanding",
          "Partial derivatives → Multi-variable optimization",
          "Resources → Khan Academy, StatQuest (YouTube)",
          "Mini project → Statistical analysis of dataset (mean, median, variance, correlations)"
        ]
      },
      {
        title: "Data Visualization",
        items: [
          "Python libraries → Matplotlib, Seaborn, Plotly, Dash",
          "Chart types → Bar charts, line charts, scatter plots, heatmaps",
          "Interactive dashboards → Building engaging visualizations",
          "Resources → Plotly Docs, Seaborn Docs",
          "Color theory → Effective visual communication",
          "Mini project → Interactive dashboard showing COVID-19 data trends"
        ]
      }
    ]
  },
  {
    id: 1,
    title: "Core Data Science Skills",
    subtitle: "Real-world Data Handling (2–5 months)",
    description: "Handle real-world datasets, data cleaning, and analysis",
    color: "bg-blue-500",
    sections: [
      {
        title: "Data Wrangling & Cleaning",
        items: [
          "Missing data handling → Imputation strategies, deletion methods",
          "Duplicate detection → Identification and removal techniques",
          "Feature engineering → Encoding, normalization, scaling",
          "Data transformation → Log transforms, binning, aggregation",
          "Tools mastery → Pandas, NumPy, OpenCV (image preprocessing)",
          "Data validation → Quality checks and consistency verification"
        ]
      },
      {
        title: "Exploratory Data Analysis (EDA)",
        items: [
          "Correlation analysis → Pearson, Spearman correlation coefficients",
          "Outlier detection → Statistical methods, visualization techniques",
          "Distribution analysis → Histograms, box plots, Q-Q plots",
          "Visual storytelling → Using Seaborn/Matplotlib effectively",
          "Pattern recognition → Trend identification, seasonality",
          "Summary statistics → Central tendency, variability measures"
        ]
      },
      {
        title: "Machine Learning Fundamentals",
        items: [
          "Supervised Learning → Linear regression, logistic regression, decision trees",
          "Tree methods → Random forest, gradient boosting basics",
          "Instance-based → k-NN algorithm and applications",
          "Unsupervised Learning → K-means clustering, hierarchical clustering",
          "Dimensionality reduction → PCA, feature selection",
          "Model evaluation → Train-test split, cross-validation, metrics",
          "Performance metrics → Accuracy, precision, recall, F1-score, RMSE"
        ]
      },
      {
        title: "Hands-on Projects",
        items: [
          "Regression project → Predict house prices with feature engineering",
          "Classification project → Titanic survival prediction",
          "Clustering project → Customer segmentation analysis",
          "EDA project → Complete exploratory analysis with insights",
          "End-to-end pipeline → Data loading to model evaluation"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Intermediate & Specialization",
    subtitle: "Industry-Relevant Skills (5–10 months)",
    description: "Get industry-relevant ML & data skills, start building a portfolio",
    color: "bg-green-500",
    sections: [
      {
        title: "Advanced Machine Learning",
        items: [
          "Ensemble Methods → Random Forest, Gradient Boosting deep dive",
          "Advanced boosting → XGBoost, LightGBM, CatBoost optimization",
          "Time Series Forecasting → ARIMA models, Prophet, seasonal decomposition",
          "LSTM basics → Recurrent neural networks for sequences",
          "Recommendation Systems → Collaborative filtering, content-based filtering",
          "Feature importance → SHAP values, permutation importance"
        ]
      },
      {
        title: "Deep Learning Basics",
        items: [
          "Frameworks mastery → TensorFlow, Keras, PyTorch",
          "Neural network concepts → Architecture, activation functions, loss functions",
          "Backpropagation → Understanding gradient computation",
          "Optimization → SGD, Adam, learning rate scheduling",
          "Regularization → Dropout, batch normalization, early stopping",
          "Mini projects → Digit recognition (MNIST), Image classification (CIFAR-10)"
        ]
      },
      {
        title: "Big Data & Cloud Tools",
        items: [
          "Big Data processing → Spark fundamentals, PySpark for large datasets",
          "Cloud platforms → AWS S3, AWS SageMaker, GCP AI Platform",
          "Azure ML → Microsoft cloud ML services",
          "Distributed computing → Cluster management, parallel processing",
          "Data pipelines → ETL processes, workflow management",
          "Scalability → Handling datasets too large for memory"
        ]
      },
      {
        title: "Advanced Projects",
        items: [
          "Time series project → Sales forecasting with multiple models",
          "Computer Vision → Image classification using CNNs",
          "NLP project → Sentiment analysis or text classification",
          "Model deployment → Flask/Django app with ML model",
          "Cloud deployment → Deploy model on AWS/GCP/Azure"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Industry-Ready Skills",
    subtitle: "Production Systems (10–15 months)",
    description: "Learn production-ready tools, MLOps, and portfolio development",
    color: "bg-purple-500",
    sections: [
      {
        title: "Model Deployment & MLOps",
        items: [
          "Deployment frameworks → Flask, FastAPI, Streamlit applications",
          "Containerization → Docker for model packaging",
          "CI/CD pipelines → GitHub Actions, Jenkins for ML",
          "Model monitoring → Prometheus, Grafana for ML metrics",
          "Version control → DVC (Data Version Control), Git for ML",
          "Model registry → MLflow, experiment tracking"
        ]
      },
      {
        title: "Natural Language Processing",
        items: [
          "NLP libraries → NLTK, SpaCy for text processing",
          "Modern NLP → Transformers, HuggingFace ecosystem",
          "Text preprocessing → Tokenization, stemming, lemmatization",
          "Sentiment analysis → Building opinion mining systems",
          "Text summarization → Extractive and abstractive methods",
          "Named entity recognition → Information extraction"
        ]
      },
      {
        title: "Computer Vision",
        items: [
          "OpenCV mastery → Image processing, feature detection",
          "CNN architectures → LeNet, AlexNet, VGG, ResNet",
          "Object detection → YOLO, R-CNN, SSD implementations",
          "Transfer learning → Pre-trained models, fine-tuning",
          "Advanced CV → Detectron2, state-of-the-art models",
          "Image augmentation → Data augmentation techniques"
        ]
      },
      {
        title: "Business Analytics & Skills",
        items: [
          "KPI analysis → Business metrics, performance indicators",
          "Dashboard creation → Power BI, Tableau for stakeholders",
          "A/B testing → Experimental design, statistical significance",
          "Business problem framing → Translating business to ML problems",
          "Stakeholder communication → Presenting technical results",
          "Domain expertise → Understanding business context"
        ]
      },
      {
        title: "Capstone Projects",
        items: [
          "End-to-end ML project → Data collection → Cleaning → Modeling → Deployment",
          "NLP application → Chatbot or advanced text classification system",
          "Computer Vision → Face recognition or object detection system",
          "Recommendation engine → Full-stack recommendation system",
          "Time series forecasting → Production-ready forecasting system"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Portfolio & Job Readiness",
    subtitle: "Career Preparation (Ongoing)",
    description: "Build impressive portfolio and prepare for data science interviews",
    color: "bg-red-500",
    sections: [
      {
        title: "Portfolio Development",
        items: [
          "GitHub portfolio → 5-10 industry-style projects with clear documentation",
          "Project documentation → READMEs, technical reports, methodology",
          "Code quality → Clean, commented, reusable code",
          "Diverse projects → Regression, classification, clustering, NLP, CV",
          "End-to-end demos → Deployed applications with live demos",
          "Impact metrics → Quantified results and business value"
        ]
      },
      {
        title: "Kaggle Competitions",
        items: [
          "Beginner competitions → Titanic, House Prices for learning",
          "Intermediate challenges → Feature engineering competitions",
          "Advanced competitions → NLP, Computer Vision challenges",
          "Ensemble methods → Combining multiple models for better performance",
          "Competition strategies → EDA, feature selection, model stacking",
          "Community engagement → Learning from discussion forums"
        ]
      },
      {
        title: "Interview Preparation",
        items: [
          "Technical interviews → Machine learning concepts, algorithms",
          "Coding challenges → LeetCode Python problems, data manipulation",
          "SQL proficiency → Complex queries, optimization, database design",
          "System design → ML system architecture, scalability considerations",
          "Case studies → Business problem solving, analytical thinking",
          "Mock interviews → Practice with peers, feedback incorporation"
        ]
      },
      {
        title: "Professional Skills",
        items: [
          "Resume optimization → Highlighting projects, quantified achievements",
          "LinkedIn presence → Professional network, thought leadership",
          "Technical writing → Blog posts, Medium articles",
          "Presentation skills → Explaining complex concepts simply",
          "Domain expertise → Industry-specific knowledge development",
          "Continuous learning → Staying updated with latest developments"
        ]
      }
    ]
  }
];
