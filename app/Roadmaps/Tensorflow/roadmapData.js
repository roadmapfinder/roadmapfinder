
export const phases = [
  {
    id: 0,
    title: "Prerequisites",
    subtitle: "Must-Have Foundation",
    description: "Become strong enough to understand Deep Learning + TensorFlow code confidently",
    color: "bg-red-600",
    sections: [
      {
        title: "Python (Core for ML)",
        items: [
          "Variables, loops, functions → Control flow, data types, function definitions",
          "OOP basics → class, object, inheritance, encapsulation",
          "List/dict comprehension → Efficient data manipulation, Pythonic patterns",
          "pip, virtual environments → Package management, dependency isolation",
          "File handling + JSON → I/O operations, data serialization",
          "Exception handling → try-except blocks, error management",
          "Practice: Build small scripts (calculator, file parser, API fetch)"
        ]
      },
      {
        title: "Math for Deep Learning",
        items: [
          "Linear Algebra → Vectors, matrices, dot product operations",
          "Calculus → Gradients, derivatives, chain rule basics",
          "Probability → Mean, variance, distributions, statistical concepts",
          "Optimization → Gradient descent intuition, loss minimization",
          "Must understand: Why backprop works, learning rate importance",
          "Must understand: Overfitting vs underfitting, model capacity"
        ]
      },
      {
        title: "Data Handling",
        items: [
          "NumPy basics → Arrays, indexing, broadcasting, vectorization",
          "Pandas basics → DataFrames, data manipulation, aggregation",
          "Matplotlib / Seaborn → Data visualization, plotting, charts",
          "Data cleaning → Missing values, outliers, data quality",
          "Scaling / normalization → Feature scaling, standardization techniques",
          "Mini projects: Clean dataset + visualize patterns",
          "Mini projects: Feature scaling + train-test split"
        ]
      }
    ]
  },
  {
    id: 1,
    title: "Deep Learning Fundamentals",
    subtitle: "Before TensorFlow Mastery",
    description: "Understand what you're building, not just coding it",
    color: "bg-yellow-500",
    sections: [
      {
        title: "Core DL Concepts",
        items: [
          "Neurons, layers → Network architecture, activation functions",
          "Activation functions → ReLU, sigmoid, tanh, softmax",
          "Loss functions → MSE, Cross-entropy, loss calculation",
          "Optimizers → SGD, Adam, RMSprop, momentum",
          "Batch size, epochs → Training iteration, convergence",
          "Regularization → Dropout, L2, preventing overfitting",
          "Early stopping → Validation monitoring, training termination",
          "Learning rate scheduling → Adaptive learning, decay strategies",
          "Practice: Implement neural net logic conceptually",
          "Practice: Understand forward & backward pass"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "TensorFlow Basics",
    subtitle: "Your First Real Models",
    description: "Learn TensorFlow the right way (Keras + TensorFlow workflow)",
    color: "bg-orange-500",
    sections: [
      {
        title: "Setup TensorFlow Environment",
        items: [
          "Install TensorFlow → CPU/GPU installation, version management",
          "GPU support → CUDA, cuDNN configuration if needed",
          "Run first training script → Verify installation, test setup"
        ]
      },
      {
        title: "Tensor Basics",
        items: [
          "tf.Tensor → Tensor creation, data types, operations",
          "Shapes, ranks → Tensor dimensions, shape manipulation",
          "tf.cast, tf.reshape → Type conversion, reshaping operations",
          "Tensor operations → add, multiply, matmul, mathematical ops",
          "Broadcasting → Automatic dimension expansion, element-wise ops"
        ]
      },
      {
        title: "Keras API",
        items: [
          "tf.keras.Sequential → Linear model stacking, layer composition",
          "tf.keras.layers.Dense → Fully connected layers, neurons",
          "model.compile() → Loss, optimizer, metrics configuration",
          "model.fit() → Training execution, batch processing",
          "model.evaluate() → Model testing, performance metrics",
          "model.predict() → Inference, prediction generation",
          "Projects: MNIST digit classification",
          "Projects: House price prediction"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Training Real ML Models",
    subtitle: "Industry Patterns",
    description: "Learn real-world training patterns (datasets + pipelines + tuning)",
    color: "bg-blue-500",
    sections: [
      {
        title: "Data Pipeline with tf.data",
        items: [
          "tf.data.Dataset → Dataset creation, from_tensor_slices",
          "Batching, shuffling → Data randomization, batch processing",
          "Prefetching → Performance optimization, pipeline efficiency",
          "Map transformations → Data preprocessing, augmentation",
          "Caching → Memory optimization, training acceleration",
          "Augmentation pipeline → Image/text augmentation strategies",
          "Practice: Create optimized dataset pipeline for images/text"
        ]
      },
      {
        title: "Callbacks",
        items: [
          "ModelCheckpoint → Save best model, checkpoint management",
          "EarlyStopping → Prevent overfitting, training termination",
          "ReduceLROnPlateau → Learning rate adaptation, plateau detection",
          "TensorBoard → Training visualization, metric tracking",
          "Output: Save best model automatically",
          "Output: Monitor accuracy/loss visually using TensorBoard"
        ]
      },
      {
        title: "Model Saving + Loading",
        items: [
          "SavedModel format → TensorFlow serving format, production standard",
          ".keras / .h5 saving → Model serialization formats",
          "Weights vs full model → Save strategies, checkpoint options"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Core Deep Learning",
    subtitle: "CNN, RNN, NLP",
    description: "Become job-ready for real ML projects",
    color: "bg-purple-500",
    sections: [
      {
        title: "Computer Vision (CNN)",
        items: [
          "Conv2D, MaxPooling2D → Convolutional layers, pooling operations",
          "BatchNormalization → Training stabilization, convergence improvement",
          "Dropout → Regularization, overfitting prevention",
          "Image Augmentation → Data augmentation, training robustness",
          "Transfer Learning → MobileNet, ResNet, pre-trained models",
          "Projects: Cats vs Dogs Classifier",
          "Projects: Face Mask Detection",
          "Projects: Plant Disease Classification",
          "Projects: Road Sign Classifier",
          "Industry: Transfer learning + fine-tuning",
          "Industry: Data augmentation + regularization"
        ]
      },
      {
        title: "NLP (Text Models)",
        items: [
          "Tokenization → Text preprocessing, token generation",
          "Embeddings → Word vectors, semantic representation",
          "LSTM / GRU → Recurrent layers, sequence modeling",
          "Text classification → Category prediction, labeling",
          "Sentiment analysis → Opinion mining, polarity detection",
          "Sequence prediction → Next token prediction, generation",
          "Projects: Sentiment Analyzer",
          "Projects: Spam Message Detector",
          "Projects: News Category Classifier",
          "Projects: Next Word Predictor",
          "Advanced: TextVectorization layer",
          "Advanced: Multi-class NLP training"
        ]
      },
      {
        title: "Time-Series Forecasting",
        items: [
          "Sliding window dataset → Time series preparation, windowing",
          "LSTM forecasting → Sequential prediction, temporal modeling",
          "1D CNN for forecasting → Convolution on sequences",
          "Projects: Stock price prediction (basic)",
          "Projects: Weather forecasting model",
          "Projects: Sales forecasting dashboard"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Advanced TensorFlow",
    subtitle: "Industry + Research Skills",
    description: "Become strong enough for real AI engineering roles",
    color: "bg-green-500",
    sections: [
      {
        title: "Custom Training Loops",
        items: [
          "tf.GradientTape → Manual gradient computation, custom training",
          "Manual forward pass → Explicit computation graph, custom logic",
          "Custom loss → Loss function design, specialized objectives",
          "Manual optimization → Optimizer application, weight updates",
          "Use case: Full control over training process",
          "Use case: Research-style models, custom architectures"
        ]
      },
      {
        title: "Custom Layers & Models",
        items: [
          "Subclassing tf.keras.Model → Custom model classes, complex architectures",
          "Custom layer classes → Layer implementation, reusable components",
          "Overriding call() → Forward pass logic, computation definition",
          "Project: Build custom attention layer"
        ]
      },
      {
        title: "Distributed Training",
        items: [
          "tf.distribute.MirroredStrategy → Multi-GPU training, data parallelism",
          "Training on multiple GPUs → Distributed computing, acceleration",
          "Scaling batch size correctly → Batch size adjustment, convergence"
        ]
      },
      {
        title: "Mixed Precision Training",
        items: [
          "Faster training using float16 → Precision reduction, speed improvement",
          "Performance optimization → Memory efficiency, throughput increase"
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Model Optimization",
    subtitle: "Production Ready",
    description: "Deploy models fast & optimized",
    color: "bg-indigo-500",
    sections: [
      {
        title: "TensorFlow Lite (Mobile)",
        items: [
          "Convert model → .tflite format, mobile optimization",
          "Post-training quantization → int8, float16, size reduction",
          "Run inference → Mobile/edge deployment, on-device inference",
          "Projects: Mobile image classifier",
          "Projects: Real-time object detector (lite)"
        ]
      },
      {
        title: "TensorFlow Serving (Backend)",
        items: [
          "Serve SavedModel → TF Serving setup, model hosting",
          "REST API inference → HTTP endpoints, API integration",
          "Versioned model deployment → Model versioning, A/B testing",
          "Project: Deploy model with REST endpoint"
        ]
      },
      {
        title: "TensorRT (High-speed)",
        items: [
          "Optimize inference → NVIDIA GPU acceleration, latency reduction",
          "Conversion and acceleration → TensorRT optimization (advanced)"
        ]
      }
    ]
  },
  {
    id: 7,
    title: "MLOps + Industry Workflow",
    subtitle: "Must for Jobs",
    description: "Become hire-ready like an AI engineer, not just learner",
    color: "bg-pink-500",
    sections: [
      {
        title: "Must-Learn Tools",
        items: [
          "Git + GitHub workflows → Version control, collaboration, CI/CD",
          "Docker → Model packaging, containerization, deployment",
          "FastAPI → Inference APIs, REST endpoints, async support",
          "MLflow / W&B → Experiment tracking, metrics logging, versioning",
          "CI/CD basics → Automated testing, deployment pipelines",
          "Cloud basics → AWS/GCP/Azure, cloud deployment patterns"
        ]
      },
      {
        title: "End-to-End ML API",
        items: [
          "Train + Save model → Model persistence, checkpointing",
          "FastAPI inference → API endpoint creation, request handling",
          "Dockerize → Container creation, dependencies packaging",
          "Deploy to cloud → Cloud hosting, production deployment"
        ]
      },
      {
        title: "MLOps Pipeline",
        items: [
          "Data versioning → Dataset tracking, reproducibility",
          "Training pipeline → Automated training, orchestration",
          "Logging + monitoring → Metrics tracking, performance monitoring"
        ]
      }
    ]
  },
  {
    id: 8,
    title: "Specialization Tracks",
    subtitle: "Choose One",
    description: "Become expert in one direction",
    color: "bg-cyan-500",
    sections: [
      {
        title: "Track 1: Computer Vision Engineer",
        items: [
          "CNN + Transfer Learning → Advanced architectures, fine-tuning",
          "Object detection → YOLO, SSD, detection frameworks",
          "Segmentation → U-Net, semantic/instance segmentation",
          "TF Lite deployment → Mobile CV applications, edge inference"
        ]
      },
      {
        title: "Track 2: NLP Engineer",
        items: [
          "Transformers → BERT, GPT models, attention mechanisms",
          "Fine-tuning using TensorFlow → Model adaptation, domain-specific",
          "Text embeddings → Vector search, semantic similarity"
        ]
      },
      {
        title: "Track 3: Production ML Engineer",
        items: [
          "TF Serving, FastAPI → Production inference, API design",
          "Cloud Deployments → Scalable hosting, infrastructure",
          "Monitoring & scaling → Performance tracking, autoscaling"
        ]
      }
    ]
  },
  {
    id: 9,
    title: "Industry Ready Portfolio",
    subtitle: "Must-Have Projects",
    description: "Build projects that make your portfolio strong",
    color: "bg-teal-500",
    sections: [
      {
        title: "Beginner Portfolio (2-3 Projects)",
        items: [
          "MNIST classifier → Basic neural network, digit recognition",
          "Image classifier → Cats vs dogs, transfer learning basics",
          "NLP sentiment detector → Text classification, sentiment analysis"
        ]
      },
      {
        title: "Intermediate Portfolio (3-4 Projects)",
        items: [
          "Transfer learning CV project → Advanced computer vision, fine-tuning",
          "Time series forecasting → Temporal prediction, LSTM models",
          "Text classification app with API → End-to-end NLP, deployment"
        ]
      },
      {
        title: "Advanced Portfolio (3 Projects)",
        items: [
          "Deployed ML model on cloud → Production deployment, cloud infrastructure",
          "TF Lite mobile model → Mobile application, on-device inference",
          "MLOps pipeline → Docker + tracking, full automation"
        ]
      }
    ]
  },
  {
    id: 10,
    title: "Interview Preparation",
    subtitle: "Expert Level",
    description: "Master interview topics and practical skills",
    color: "bg-rose-500",
    sections: [
      {
        title: "Must Know Topics",
        items: [
          "Overfitting/Underfitting solutions → Regularization, early stopping, data augmentation",
          "BatchNorm vs Dropout → Normalization vs regularization, when to use",
          "Optimizer differences → Adam vs SGD, convergence behavior",
          "Loss functions → Choosing appropriate loss, custom losses",
          "Confusion matrix → Precision, Recall, F1-score, evaluation metrics",
          "Transfer learning + fine tuning → Pre-trained models, adaptation strategies",
          "TF data pipelines → Efficient data loading, preprocessing",
          "Model saving formats → SavedModel, HDF5, checkpoints",
          "Deployment methods → TF Serving, TF Lite, cloud deployment"
        ]
      },
      {
        title: "Practical Interview Tasks",
        items: [
          "Train and evaluate model quickly → Rapid prototyping, debugging",
          "Debug training issues → Loss plateaus, gradient problems, convergence",
          "Improve accuracy → Augmentation, tuning, architecture changes"
        ]
      },
      {
        title: "Final Checklist (Industry Ready)",
        items: [
          "Build models → Image, text, time-series projects",
          "Create optimized tf.data pipeline → Efficient data loading",
          "Use callbacks + tensorboard → Training monitoring, checkpointing",
          "Use transfer learning → Fine-tune pre-trained models",
          "Save + load + deploy → Model persistence, serving",
          "Convert model to TF Lite → Mobile optimization",
          "Create FastAPI endpoint → Inference API, REST services",
          "Dockerize and deploy → Containerization, cloud deployment",
          "Explain model decisions → Interpretability, communication"
        ]
      }
    ]
  }
];