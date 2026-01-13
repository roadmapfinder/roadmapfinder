export const phases = [
  {
    id: 0,
    title: "Prerequisites",
    subtitle: "Phase 0 (3-5 days)",
    description: "Do NOT skip - weak Python basics will break you later.",
    color: "bg-gray-500",
    sections: [
      {
        title: "🐍 Python Fundamentals",
        items: [
          "Data types: list, dict, tuple, set",
          "Loops & comprehensions",
          "Functions & lambda expressions",
          "Exception handling",
          "File I/O (CSV, JSON basics)"
        ]
      },
      {
        title: "✅ Checkpoint",
        items: [
          "Read a CSV using pure Python",
          "Transform rows into dictionaries",
          "Write cleaned output back to file",
          "⚠️ If this feels hard → Pandas will break you later"
        ]
      }
    ]
  },
  {
    id: 1,
    title: "Core Foundations",
    subtitle: "Phase 1 (1 week)",
    description: "Understanding what Pandas actually is and how it works.",
    color: "bg-blue-500",
    sections: [
      {
        title: "📚 What Pandas Is",
        items: [
          "Pandas = Index + NumPy + labels",
          "Why Pandas ≠ Excel",
          "When Pandas is a bad choice (yes, this matters)"
        ]
      },
      {
        title: "🎯 Core Objects (NON-NEGOTIABLE)",
        items: [
          "Series - Creation, dtype inference, memory layout",
          "DataFrame - Structure and properties",
          "Index - Most people ignore this → big mistake",
          "Understanding memory layout basics"
        ]
      },
      {
        title: "📁 Reading & Writing Data",
        items: [
          "read_csv, read_excel, read_json",
          "Critical parameters: dtype, parse_dates, na_values, chunksize",
          "to_csv, to_parquet, to_excel"
        ]
      },
      {
        title: "✅ Checkpoint",
        items: [
          "Load a dirty CSV",
          "Fix dtypes manually",
          "Export optimized output"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Selection & Indexing",
    subtitle: "Phase 2 (1 week)",
    description: "Skill divider - most people fail Pandas here.",
    color: "bg-green-500",
    sections: [
      {
        title: "🔍 Indexing Rules",
        items: [
          ".loc vs .iloc (absolute clarity required)",
          "Boolean masking",
          "Chained indexing (why it's dangerous)",
          "query() vs boolean masks"
        ]
      },
      {
        title: "💪 Index Mastery",
        items: [
          "Single vs MultiIndex",
          "Resetting vs setting index",
          "Sorting index",
          "Reindexing (power move)"
        ]
      },
      {
        title: "✅ Checkpoint",
        items: [
          "Rebuild a DataFrame using index operations only",
          "Fix SettingWithCopyWarning without Googling"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Data Cleaning & Preparation",
    subtitle: "Phase 3 (1-2 weeks)",
    description: "Real-World Pandas - this is 70% of industry work.",
    color: "bg-purple-500",
    sections: [
      {
        title: "🧹 Missing Data",
        items: [
          "isna, notna",
          "fillna strategies",
          "Forward/backward fill",
          "When NOT to fill missing data"
        ]
      },
      {
        title: "✨ Data Cleaning Patterns",
        items: [
          "String cleaning (str accessor)",
          "Type casting (astype)",
          "DateTime operations (dt)",
          "Categorical data (category dtype)"
        ]
      },
      {
        title: "🔄 Duplicates & Inconsistencies",
        items: [
          "duplicated",
          "Fuzzy matching basics",
          "Normalization strategies"
        ]
      },
      {
        title: "✅ Checkpoint",
        items: [
          "Clean a real messy dataset (government/open data)",
          "Document every assumption you make"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Transformation & Analysis",
    subtitle: "Phase 4 (2 weeks)",
    description: "Master the core analytical operations.",
    color: "bg-yellow-500",
    sections: [
      {
        title: "⚡ Vectorization Mindset",
        items: [
          "Why loops are slow",
          "Broadcasting",
          "apply vs vectorized ops (know the cost)"
        ]
      },
      {
        title: "🎯 GroupBy (CORE INDUSTRY SKILL)",
        items: [
          "Split → Apply → Combine",
          "agg, transform, filter",
          "Named aggregations",
          "Window functions"
        ]
      },
      {
        title: "🔗 Merging & Reshaping",
        items: [
          "merge (inner/left/right/outer)",
          "Join vs merge",
          "concat",
          "pivot, melt, stack, unstack"
        ]
      },
      {
        title: "✅ Checkpoint",
        items: [
          "Build a sales analytics pipeline",
          "Daily → weekly → monthly metrics",
          "Region-wise comparisons",
          "YoY growth calculations"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Time Series & Advanced Ops",
    subtitle: "Phase 5 (1 week)",
    description: "Handle temporal data like a pro.",
    color: "bg-red-500",
    sections: [
      {
        title: "📅 Time Series Mastery",
        items: [
          "DatetimeIndex",
          "Resampling",
          "Rolling windows",
          "Timezone handling (very underrated)"
        ]
      },
      {
        title: "🚀 Performance Tuning",
        items: [
          "Memory profiling",
          "category optimization",
          "copy() vs views",
          "Chunk processing",
          "eval & query"
        ]
      },
      {
        title: "✅ Checkpoint",
        items: [
          "Optimize a dataset from 2GB → <500MB",
          "Prove speed improvement"
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Pandas in Production",
    subtitle: "Phase 6 (1-2 weeks)",
    description: "Industry readiness begins here.",
    color: "bg-indigo-500",
    sections: [
      {
        title: "🔗 Pandas + Ecosystem",
        items: [
          "NumPy integration",
          "Matplotlib / Seaborn",
          "Scikit-learn data pipelines",
          "Parquet + Arrow"
        ]
      },
      {
        title: "✓ Data Validation",
        items: [
          "Schema validation",
          "Assertions",
          "Silent failure prevention"
        ]
      },
      {
        title: "🛡️ Error Handling & Logging",
        items: [
          "Defensive Pandas code",
          "Reproducibility",
          "Deterministic pipelines"
        ]
      },
      {
        title: "✅ Checkpoint",
        items: [
          "Build a reusable Pandas ETL module",
          "Handle bad data without crashing"
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Scaling Beyond Pandas",
    subtitle: "Phase 7 (1 week)",
    description: "Know when to leave Pandas.",
    color: "bg-pink-500",
    sections: [
      {
        title: "⚠️ Limits of Pandas",
        items: [
          "Memory bound",
          "Single-threaded constraints"
        ]
      },
      {
        title: "🚀 Alternatives & Complements",
        items: [
          "Dask",
          "Polars (important in 2026)",
          "DuckDB + Pandas",
          "SQL vs Pandas decision making"
        ]
      },
      {
        title: "✅ Checkpoint",
        items: [
          "Rewrite a Pandas workflow using DuckDB or Polars",
          "Compare speed & memory"
        ]
      }
    ]
  },
  {
    id: 8,
    title: "Industry Projects",
    subtitle: "Phase 8 (Ongoing)",
    description: "MANDATORY - No toy datasets, no Jupyter-only projects.",
    color: "bg-teal-500",
    sections: [
      {
        title: "💼 Project Ideas",
        items: [
          "Log analytics pipeline",
          "Financial transaction analysis",
          "User behavior funnel",
          "Data quality monitoring system"
        ]
      },
      {
        title: "📋 Rules",
        items: [
          "No toy datasets",
          "No Jupyter-only projects",
          "Modular, testable code"
        ]
      }
    ]
  },
  {
    id: 9,
    title: "Industry Ready",
    subtitle: "Final Skill Check",
    description: "If you can do this, you're ready.",
    color: "bg-orange-500",
    sections: [
      {
        title: "✅ Readiness Checklist",
        items: [
          "Debug Pandas warnings confidently",
          "Optimize memory without trial-and-error",
          "Explain performance tradeoffs",
          "Design clean, reusable data pipelines",
          "Decide when Pandas is the wrong tool"
        ]
      }
    ]
  }
];

