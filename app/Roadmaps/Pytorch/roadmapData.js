export const phases = [
  {
    id: 0,
    title: "Prerequisites",
    subtitle: "Foundation Level",
    description: "Master Python and Math fundamentals before diving into PyTorch",
    color: "bg-slate-500",
    sections: [
      {
        title: "Python (Strong Basics)",
        items: [
          "Variables, loops, and functions",
          "Object-oriented programming (classes, objects)",
          "List comprehensions and file handling",
          "Virtual environments (venv/conda)",
          "Pip and requirements.txt management",
          "Solve 50 problems on HackerRank/LeetCode basic level"
        ]
      },
      {
        title: "Math for Deep Learning",
        items: [
          "Linear Algebra: vectors, matrices, dot product",
          "Calculus: derivatives, chain rule",
          "Probability: mean, variance, normal distribution",
          "Optimization: gradient descent basics",
          "Understanding backpropagation conceptually"
        ]
      },
      {
        title: "Machine Learning Basics",
        items: [
          "Train vs test split concepts",
          "Overfitting/underfitting and bias/variance",
          "Loss functions and optimization",
          "Metrics: accuracy, precision, recall, F1",
          "Regularization: L1/L2, dropout",
          "SGD and Adam optimizer basics"
        ]
      },
      {
        title: "Practice Tasks",
        items: [
          "Write 20 small Python programs",
          "Train Logistic Regression with scikit-learn",
          "Train Random Forest with scikit-learn",
          "Complete basic ML projects with sklearn"
        ]
      }
    ]
  },
  {
    id: 1,
    title: "PyTorch Beginner",
    subtitle: "Core Fundamentals",
    description: "Master PyTorch basics, tensors, and build your first neural network",
    color: "bg-blue-500",
    sections: [
      {
        title: "Setup and Environment",
        items: [
          "Install PyTorch (CPU/GPU)",
          "Check CUDA availability",
          "Setup Jupyter and VS Code",
          "Run on Google Colab",
          "Understand torch.device for CPU/GPU handling"
        ]
      },
      {
        title: "Tensors (PyTorch Basics)",
        items: [
          "Tensor creation: zeros, ones, randn",
          "Shapes and dimensions manipulation",
          "Indexing and slicing operations",
          "Tensor operations: +, -, *, matmul",
          "Broadcasting and dtype (float32, int64)",
          "Device handling (cpu/cuda)"
        ]
      },
      {
        title: "Autograd (Backprop Engine)",
        items: [
          "Understanding .requires_grad",
          "Using .backward() and .grad",
          "Gradient accumulation patterns",
          "torch.no_grad() context manager",
          "detach() and computation graph",
          "Build gradient descent to fit a line manually"
        ]
      },
      {
        title: "Build Your First Neural Network",
        items: [
          "torch.nn.Module and forward() function",
          "Layers: Linear, ReLU, Sigmoid",
          "Loss functions: MSE, CrossEntropyLoss",
          "Optimizers: SGD, Adam",
          "Train simple NN on MNIST digits classification"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Deep Learning Workflows",
    subtitle: "Intermediate Level",
    description: "Master data loading, training loops, GPU usage, and debugging",
    color: "bg-purple-500",
    sections: [
      {
        title: "Datasets and DataLoader",
        items: [
          "Custom dataset class implementation",
          "__len__ and __getitem__ methods",
          "DataLoader batching and shuffling",
          "Transformations: normalize, resize, augment",
          "Load datasets and train with DataLoader properly"
        ]
      },
      {
        title: "Training Loop Like a Pro",
        items: [
          "Train/Validation split strategy",
          "model.train() vs model.eval() modes",
          "Logging loss and metrics",
          "Saving best model and checkpoints",
          "Forward pass, loss calculation, backward pass",
          "Optimizer step and scheduler step"
        ]
      },
      {
        title: "GPU Training and Speed Up",
        items: [
          "Moving tensors/model to CUDA",
          "Mixed precision training with torch.cuda.amp",
          "Gradient clipping techniques",
          "Handling out-of-memory errors",
          "Train MNIST/CIFAR10 on GPU with AMP"
        ]
      },
      {
        title: "Debugging Model Problems",
        items: [
          "Fix loss not decreasing issues",
          "Handle overfitting problems",
          "Resolve vanishing gradients",
          "Fix wrong labels and incorrect shapes",
          "Handle exploding gradients",
          "Use torchsummary, TensorBoard, and torchviz"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Computer Vision",
    subtitle: "Industry Required",
    description: "Master CNNs, transfer learning, object detection, and segmentation",
    color: "bg-green-500",
    sections: [
      {
        title: "CNN Fundamentals",
        items: [
          "Convolution operations",
          "Pooling layers",
          "Batch Normalization",
          "Residual blocks concept",
          "Feature extraction vs classifier",
          "Build CNN from scratch for CIFAR10"
        ]
      },
      {
        title: "Transfer Learning",
        items: [
          "Load pretrained models: ResNet, EfficientNet",
          "Freeze layers and fine-tuning strategies",
          "Change classifier head",
          "Train Dog vs Cat classifier using pretrained ResNet",
          "Best practices for transfer learning"
        ]
      },
      {
        title: "Object Detection Basics",
        items: [
          "Bounding boxes and IoU metric",
          "mAP (mean Average Precision) metric",
          "YOLO concept and architecture",
          "Use Ultralytics YOLO or TorchVision detection",
          "Detect helmet/no-helmet or car number plate"
        ]
      },
      {
        title: "Image Segmentation",
        items: [
          "U-Net architecture",
          "Mask R-CNN basics",
          "Pixel-wise classification",
          "Road/lane segmentation project",
          "Medical image segmentation tasks"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "NLP & Transformers",
    subtitle: "Modern Deep Learning",
    description: "Master transformers, HuggingFace, and LLM fine-tuning",
    color: "bg-orange-500",
    sections: [
      {
        title: "NLP Basics",
        items: [
          "Tokenization techniques",
          "Word embeddings",
          "RNN/LSTM basic understanding",
          "Attention mechanism overview",
          "Build spam vs ham text classifier"
        ]
      },
      {
        title: "Transformers with HuggingFace",
        items: [
          "BERT, RoBERTa, DistilBERT models",
          "Fine-tuning pretrained models",
          "Tokenizers and datasets library",
          "Trainer API vs custom training loop",
          "Sentiment analysis model fine-tuning",
          "Resume screening classifier"
        ]
      },
      {
        title: "LLM Fine-tuning (2026 Requirement)",
        items: [
          "LoRA and QLoRA techniques",
          "PEFT (Parameter-Efficient Fine-Tuning)",
          "Quantization basics",
          "Fine-tune small LLM on custom FAQs",
          "Best practices for efficient fine-tuning"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Model Optimization",
    subtitle: "Production Level Skills",
    description: "Improve accuracy and prepare models for deployment",
    color: "bg-red-500",
    sections: [
      {
        title: "Improve Model Accuracy",
        items: [
          "Learning rate schedulers: StepLR, CosineAnnealingLR",
          "Weight decay optimization",
          "Dropout tuning strategies",
          "Early stopping implementation",
          "Data augmentation strategies"
        ]
      },
      {
        title: "Speed and Deployment Ready",
        items: [
          "TorchScript: trace and script modes",
          "ONNX export for cross-platform inference",
          "Quantization: dynamic and static",
          "Model pruning basics",
          "Convert model to ONNX and run faster inference"
        ]
      }
    ]
  },
  {
    id: 6,
    title: "MLOps & Deployment",
    subtitle: "Must for Jobs",
    description: "Master model serving, experiment tracking, and cloud deployment",
    color: "bg-indigo-500",
    sections: [
      {
        title: "Model Serving",
        items: [
          "FastAPI with PyTorch inference",
          "Dockerizing model API",
          "Batch inference pipeline",
          "Build image classifier API with FastAPI",
          "Deploy with Docker containers"
        ]
      },
      {
        title: "Experiment Tracking",
        items: [
          "TensorBoard for visualization",
          "MLflow for experiment management",
          "Weights & Biases (WandB) integration",
          "Track hyperparameters and metrics",
          "Save artifacts, models, and logs"
        ]
      },
      {
        title: "CI/CD for ML",
        items: [
          "GitHub Actions basics",
          "Automated testing for models",
          "Reproducibility best practices",
          "Setup pipeline to auto-train on push",
          "Version control for ML projects"
        ]
      },
      {
        title: "Cloud and Scaling",
        items: [
          "Google Colab and Kaggle GPU usage",
          "AWS/GCP/Azure basics (essentials only)",
          "Using GPUs efficiently",
          "Distributed training basics",
          "Cost optimization strategies"
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Advanced PyTorch",
    subtitle: "Senior Level",
    description: "Custom layers, distributed training, and PyTorch Lightning",
    color: "bg-pink-500",
    sections: [
      {
        title: "Custom Layers and Loss Functions",
        items: [
          "Write custom layers from scratch",
          "Implement custom loss functions",
          "Custom backward pass (advanced)",
          "Best practices for custom components"
        ]
      },
      {
        title: "Distributed Training",
        items: [
          "DataParallel vs DistributedDataParallel (DDP)",
          "Multi-GPU training setup",
          "Gradient accumulation strategies",
          "Scaling training to multiple nodes"
        ]
      },
      {
        title: "PyTorch Lightning",
        items: [
          "Why use Lightning: cleaner code, faster experiments",
          "LightningModule implementation",
          "Trainer configuration",
          "Callbacks and loggers",
          "Best practices built-in"
        ]
      }
    ]
  },
  {
    id: 8,
    title: "Industry Projects",
    subtitle: "Portfolio Building",
    description: "Build real-world projects that recruiters love",
    color: "bg-teal-500",
    sections: [
      {
        title: "Beginner Projects",
        items: [
          "MNIST digit classifier",
          "CIFAR10 CNN classifier",
          "Cat vs Dog transfer learning",
          "Face mask detection system"
        ]
      },
      {
        title: "Intermediate Projects",
        items: [
          "Road sign classifier",
          "Sentiment analysis with BERT",
          "Custom dataset object detection",
          "Text classification with transformers"
        ]
      },
      {
        title: "Advanced Projects (Industry Ready)",
        items: [
          "Object detection using YOLO (custom dataset)",
          "Image segmentation using U-Net",
          "LLM fine-tuning using LoRA (custom Q&A)",
          "End-to-end ML product: train, build API, deploy"
        ]
      },
      {
        title: "Full Stack ML Project",
        items: [
          "Train model on custom dataset",
          "Build REST API with FastAPI",
          "Dockerize the application",
          "Deploy to cloud platform",
          "Add monitoring and logging"
        ]
      }
    ]
  },
  {
    id: 9,
    title: "Job-Ready Skills Checklist",
    subtitle: "Industry Standards",
    description: "Master the essential skills every PyTorch developer must have",
    color: "bg-amber-500",
    sections: [
      {
        title: "Core PyTorch Skills",
        items: [
          "Build training loop from scratch",
          "Use transfer learning effectively",
          "Handle large datasets with DataLoader",
          "Train models on GPU efficiently",
          "Debug deep learning issues systematically"
        ]
      },
      {
        title: "Production Skills",
        items: [
          "Deploy model as REST API (FastAPI)",
          "Use experiment tracking (WandB/MLflow)",
          "Export model to ONNX/TorchScript",
          "Implement proper logging and monitoring",
          "Handle edge cases and errors gracefully"
        ]
      },
      {
        title: "Best Learning Resources (2026)",
        items: [
          "PyTorch Official Tutorials",
          "TorchVision models documentation",
          "HuggingFace Transformers Course",
          "Kaggle competitions for practice",
          "PapersWithCode for implementation inspiration"
        ]
      }
    ]
  },
  {
    id: 10,
    title: "90-Day Fast Track Plan",
    subtitle: "Beginner to Job Ready",
    description: "Structured learning path to become industry-ready in 3 months",
    color: "bg-cyan-500",
    sections: [
      {
        title: "Month 1: PyTorch + Core DL",
        items: [
          "Week 1-2: Tensors, Autograd, nn.Module",
          "Week 3: MNIST project completion",
          "Week 4: CIFAR10 CNN project",
          "Daily practice: 2-3 hours coding",
          "Build strong fundamentals"
        ]
      },
      {
        title: "Month 2: Real Projects + Transfer Learning",
        items: [
          "Week 1-2: Transfer learning projects",
          "Week 3: CNN improvements and optimization",
          "Week 4: Object detection basics",
          "Complete 2-3 intermediate projects",
          "Focus on practical implementation"
        ]
      },
      {
        title: "Month 3: Deployment + NLP + Industry Skills",
        items: [
          "Week 1: FastAPI deployment",
          "Week 2: HuggingFace transformers",
          "Week 3: LLM fine-tuning basics",
          "Week 4: Build 2 strong portfolio projects",
          "Prepare resume and GitHub portfolio"
        ]
      },
      {
        title: "Daily Practice Routine",
        items: [
          "Morning: Theory (1 hour)",
          "Afternoon: Coding practice (2 hours)",
          "Evening: Project work (1-2 hours)",
          "Weekend: Deep dive into complex topics",
          "Maintain GitHub with daily commits"
        ]
      },
      {
        title: "Portfolio Must-Haves",
        items: [
          "3-4 complete projects on GitHub",
          "At least 1 deployed API/web app",
          "Clean, documented code",
          "README with project descriptions",
          "Blog posts explaining your projects"
        ]
      }
    ]
  }
];