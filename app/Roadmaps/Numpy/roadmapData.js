// NumPy Mastery Roadmap data structured according to the roadmap content
export const phases = [
  {
    id: 0,
    title: "Prerequisites",
    subtitle: "Phase 0 (3-5 days)",
    description: "Build a solid foundation before diving into NumPy.",
    color: "bg-gray-500",
    sections: [
      {
        title: "🐍 Python Basics",
        items: [
          "Lists, tuples, dictionaries",
          "Loops vs list comprehension",
          "Functions & lambda expressions",
          "Basic understanding of data structures"
        ]
      },
      {
        title: "📐 Basic Math",
        items: [
          "Linear algebra intuition (helpful)",
          "Basic mathematical operations",
          "Understanding of matrices and vectors"
        ]
      }
    ]
  },
  {
    id: 1,
    title: "NumPy Fundamentals",
    subtitle: "Phase 1 (1 week)",
    description: "Stop thinking in Python loops - start thinking in arrays.",
    color: "bg-blue-500",
    sections: [
      {
        title: "⚡ Core Concepts",
        items: [
          "Why NumPy exists (speed, memory, vectorization)",
          "ndarray vs Python list",
          "Creating arrays: array, zeros, ones, arange, linspace",
          "Data types (dtype)",
          "Shape, size, ndim"
        ]
      },
      {
        title: "🎯 Mandatory Skills",
        items: [
          "Indexing & slicing (1D, 2D, nD)",
          "Boolean indexing",
          "Fancy indexing",
          "Views vs copies ⚠️ (critical for bugs)"
        ]
      },
      {
        title: "✅ Practice Tasks",
        items: [
          "Replace loops with vectorized operations",
          "Build a matrix calculator",
          "Slice images as arrays"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Vectorization & Broadcasting",
    subtitle: "Phase 2 (4-5 days)",
    description: "This is NumPy - write zero loops.",
    color: "bg-green-500",
    sections: [
      {
        title: "🚀 Core Topics",
        items: [
          "Universal functions (ufuncs)",
          "Element-wise operations",
          "Broadcasting rules (memorize them)",
          "Aggregations: sum, mean, std, min, max",
          "Axis-based operations"
        ]
      },
      {
        title: "💼 Real Use Cases",
        items: [
          "Feature scaling",
          "Normalization",
          "Distance calculations"
        ]
      },
      {
        title: "🚨 Red Flag",
        items: [
          "If you still use for loops → you're doing it wrong"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Linear Algebra & Math",
    subtitle: "Phase 3 (1 week)",
    description: "Get ready for ML, CV, and finance applications.",
    color: "bg-purple-500",
    sections: [
      {
        title: "🔢 Linear Algebra",
        items: [
          "Dot product vs matrix multiplication",
          "np.dot, @, matmul",
          "Transpose & reshape",
          "Determinant, inverse",
          "Eigenvalues & eigenvectors",
          "Solving linear systems"
        ]
      },
      {
        title: "📊 Math & Statistics",
        items: [
          "Random sampling",
          "Probability distributions",
          "Correlation & covariance",
          "Numerical stability"
        ]
      },
      {
        title: "✅ Practice",
        items: [
          "Implement linear regression from scratch",
          "PCA using NumPy only"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Advanced Array Manipulation",
    subtitle: "Phase 4 (4-5 days)",
    description: "Data engineering level control over arrays.",
    color: "bg-yellow-500",
    sections: [
      {
        title: "🔧 Key Topics",
        items: [
          "Reshaping like a pro",
          "stack, vstack, hstack",
          "split, concatenate",
          "tile, repeat",
          "Memory layout (C vs Fortran order)"
        ]
      },
      {
        title: "🐛 Debug Skills",
        items: [
          "Shape mismatch debugging",
          "Broadcasting error tracing"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Performance Optimization",
    subtitle: "Phase 5 (3-4 days)",
    description: "Industry secret sauce - fast + scalable code.",
    color: "bg-red-500",
    sections: [
      {
        title: "⚡ Performance Topics",
        items: [
          "Vectorization vs loops benchmark",
          "Memory profiling",
          "In-place operations",
          "Avoiding temporary arrays",
          "np.where, np.select",
          "Chunking large arrays"
        ]
      },
      {
        title: "🛠️ Tools",
        items: [
          "timeit",
          "memory_profiler"
        ]
      },
      {
        title: "💡 Industry Reality",
        items: [
          "Most slow ML pipelines die here"
        ]
      }
    ]
  },
  {
    id: 6,
    title: "NumPy with Ecosystem",
    subtitle: "Phase 6 (1 week)",
    description: "Production readiness with real-world integrations.",
    color: "bg-indigo-500",
    sections: [
      {
        title: "🔗 Integrations",
        items: [
          "NumPy + Pandas",
          "NumPy + Matplotlib",
          "NumPy + SciPy",
          "NumPy + OpenCV",
          "NumPy + PyTorch / TensorFlow tensors"
        ]
      },
      {
        title: "📁 File Handling",
        items: [
          "np.load, np.save",
          "np.memmap",
          "CSV / binary data"
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Numerical Computing & Edge Cases",
    subtitle: "Phase 7 (3 days)",
    description: "Senior-level robustness and precision handling.",
    color: "bg-pink-500",
    sections: [
      {
        title: "⚠️ Critical Topics",
        items: [
          "Floating point precision errors",
          "NaN & Inf handling",
          "Masked arrays",
          "Stability tricks (log-sum-exp)",
          "Overflow / underflow"
        ]
      }
    ]
  },
  {
    id: 8,
    title: "Industry-Level Projects",
    subtitle: "Phase 8 (2-3 weeks)",
    description: "No projects = no skill. Build real applications.",
    color: "bg-teal-500",
    sections: [
      {
        title: "✅ Must-Build Projects",
        items: [
          "Image processing engine (filters, convolution)",
          "ML math engine (from scratch)",
          "Time-series analyzer",
          "Financial metrics calculator",
          "Matrix-based recommendation logic"
        ]
      },
      {
        title: "🎯 Success Criteria",
        items: [
          "If you can't explain performance choices → you're not industry-ready"
        ]
      }
    ]
  },
  {
    id: 9,
    title: "Interview & Production Readiness",
    subtitle: "Phase 9",
    description: "Get hired and write production-quality code.",
    color: "bg-orange-500",
    sections: [
      {
        title: "💼 Interview Topics",
        items: [
          "Why NumPy is faster",
          "Broadcasting explanation",
          "Memory views vs copies",
          "Vectorization trade-offs",
          "Shape debugging"
        ]
      },
      {
        title: "🏭 Production Skills",
        items: [
          "Writing readable vectorized code",
          "Documenting assumptions",
          "Unit testing numerical code"
        ]
      },
      {
        title: "✅ Industry-Ready Checklist",
        items: [
          "You avoid loops by default",
          "You understand broadcasting deeply",
          "You can debug shape errors instantly",
          "You write performant, maintainable code",
          "You can explain all your optimization choices"
        ]
      }
    ]
  }
];