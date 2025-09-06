// app/api/generate-project/route.js
import { NextResponse } from 'next/server';
import {
  fetchProjectRelevantVideos,
  createFallbackSearchLinks,
  generateIntelligentSearchQueries,
  analyzeProject
} from './youtube-service.js';

/**
 * Main POST handler for project generation
 * @param {Request} request - The incoming request object
 * @returns {Promise<NextResponse>} The response with generated project data
 */
export async function POST(request) {
  try {
    const { projectIdea } = await request.json();

    if (!projectIdea || projectIdea.trim().length === 0) {
      return NextResponse.json({ error: 'Project idea is required' }, { status: 400 });
    }

    // Validate API keys
    if (!process.env.GEMINI_API_KEY) {
      console.error('GEMINI_API_KEY is not set');
      return NextResponse.json({ error: 'API configuration error' }, { status: 500 });
    }

    console.log('Making request to Gemini API for project generation...');

    // Generate comprehensive project data using Gemini AI
    const projectData = await generateProjectWithGemini(projectIdea);

    // **INSTANT RESPONSE - Return project data immediately**
    const instantResponse = {
      ...projectData,
      youtubeResources: [], // Start with empty, will be populated asynchronously
      metadata: {
        model: 'gemini-2.0-flash-exp',
        timestamp: new Date().toISOString(),
        tokens_used: projectData.tokens_used || 'N/A',
        youtube_videos_found: 0,
        search_queries_generated: 0,
        project_analysis: analyzeProject(projectIdea, Object.values(projectData.techStack || {}).flat()),
        loading_youtube: true // Indicates YouTube videos are being fetched
      }
    };

    // **NON-BLOCKING YOUTUBE FETCHING** - Fire and forget
    // This runs in the background without blocking the response
    setImmediate(async () => {
      try {
        console.log('Starting background YouTube video fetching...');
        const youtubeResources = await fetchProjectRelevantVideos(projectData, projectIdea);
        console.log(`Background: Fetched ${youtubeResources.length} relevant YouTube videos`);
        
        // In a real app, you'd store this in a database or cache
        // and provide a way for the client to fetch updated data
        // For now, we just log it as the initial response already went out
      } catch (youtubeError) {
        console.error('Background YouTube fetching error:', youtubeError);
      }
    });

    return NextResponse.json(instantResponse);

  } catch (error) {
    console.error('Project generation API error:', error);

    if (error.name === 'AbortError') {
      return NextResponse.json({ error: 'Request timeout. Please try again.' }, { status: 500 });
    }

    return NextResponse.json({
      error: 'Failed to generate project guide',
      details: process.env.NODE_ENV === 'development' ? error.message : 'Please try again later'
    }, { status: 500 });
  }
}

/**
 * Generate project data using Gemini AI
 * @param {string} projectIdea - The project idea description
 * @returns {Promise<Object>} The generated project data
 */
async function generateProjectWithGemini(projectIdea) {
  const prompt = `
You are an elite software architect and project consultant with 15+ years of experience. Analyze this project idea and create a premium, professional-grade project guide that would rival those from top tech consulting firms:

PROJECT IDEA: "${projectIdea}"

Create an enterprise-level breakdown that feels like a $10,000 consulting package, tailored for beginners, intermediate, and advanced developers. Your output should be so comprehensive and actionable that developers feel confident building this project from scratch to production deployment.

PREMIUM REQUIREMENTS:
🏗️ ARCHITECTURE: Design scalable, production-ready architecture
🔄 SKILL PROGRESSION: Structure roadmap for beginner → intermediate → advanced journey
⚡ MODERN STACK: Use cutting-edge 2024-2025 technologies and best practices
🛠️ PRACTICAL FOCUS: Every step must be immediately actionable with real commands
🎯 PRODUCTION-READY: Include deployment, monitoring, security, and optimization
📚 LEARNING PATHS: Multiple approaches based on developer experience level
🔍 DETAILED GUIDANCE: Include file structures, code snippets, and troubleshooting

ENHANCED PROJECT STRUCTURE - Return ONLY valid JSON:

{
  "projectSummary": {
    "name": "Professional Project Name",
    "description": "Comprehensive project description with value proposition",
    "complexity": "Beginner|Intermediate|Advanced",
    "estimatedTime": "2-4 weeks",
    "marketValue": "Commercial viability and use cases",
    "skillsLearned": ["List of skills developers will master"]
  },
  "mindMap": {
    "name": "Project Architecture",
    "children": [
      {
        "name": "Frontend Layer",
        "children": [
          { "name": "UI Components", "details": "Reusable component library" },
          { "name": "State Management", "details": "Global state handling" },
          { "name": "Routing System", "details": "Navigation and page structure" }
        ]
      },
      {
        "name": "Backend Layer",
        "children": [
          { "name": "API Routes", "details": "RESTful endpoints" },
          { "name": "Authentication", "details": "User management system" },
          { "name": "Database Layer", "details": "Data persistence" }
        ]
      },
      {
        "name": "DevOps & Deployment",
        "children": [
          { "name": "CI/CD Pipeline", "details": "Automated deployment" },
          { "name": "Monitoring", "details": "Performance tracking" }
        ]
      }
    ]
  },
  "skillLevelPaths": {
    "beginner": {
      "focus": "Core functionality with guided setup",
      "timeCommitment": "10-15 hours/week for 3-4 weeks",
      "learningOutcome": "Build functional MVP with deployment",
      "prerequisites": ["Basic HTML/CSS", "JavaScript fundamentals"]
    },
    "intermediate": {
      "focus": "Advanced features, optimization, and testing",
      "timeCommitment": "15-20 hours/week for 4-5 weeks", 
      "learningOutcome": "Production-ready app with advanced patterns",
      "prerequisites": ["React experience", "API knowledge", "Git proficiency"]
    },
    "advanced": {
      "focus": "Scalable architecture, microservices, and enterprise patterns",
      "timeCommitment": "20+ hours/week for 5-6 weeks",
      "learningOutcome": "Enterprise-grade system with full DevOps pipeline",
      "prerequisites": ["Full-stack experience", "Database design", "Cloud platforms"]
    }
  },
  "roadmap": [
    {
      "phase": "Phase 1: Foundation & Setup",
      "description": "Environment setup and basic project structure",
      "duration": "2-4 hours",
      "difficulty": "Beginner",
      "skillLevel": "All levels",
      "prerequisites": ["Node.js v18+", "Git", "Code editor"],
      "learningObjectives": ["Project initialization", "Development environment", "Version control setup"],
      "steps": [
        {
          "title": "Environment Preparation",
          "description": "Set up development environment with all necessary tools",
          "commands": [
            "node --version # Verify Node.js 18+",
            "npm --version # Verify npm",
            "git --version # Verify Git"
          ],
          "codeSnippet": {
            "filename": ".nvmrc",
            "language": "text",
            "code": "18.17.0"
          }
        },
        {
          "title": "Project Initialization",
          "description": "Create project structure and initialize configuration",
          "commands": [
            "npx create-next-app@latest my-project --typescript --tailwind --eslint --app",
            "cd my-project",
            "git init",
            "git add .",
            "git commit -m \"Initial project setup\""
          ],
          "fileStructure": [
            "my-project/",
            "├── app/",
            "├── public/",
            "├── package.json",
            "└── README.md"
          ]
        }
      ],
      "troubleshooting": [
        {
          "issue": "Node.js version conflicts",
          "solution": "Use nvm: curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash"
        }
      ],
      "validation": [
        "npm run dev starts without errors",
        "localhost:3000 shows Next.js welcome page",
        "ESLint runs without issues"
      ],
      "nextSteps": ["Proceed to Phase 2 for core development"]
    }
  ],
  "techStack": {
    "frontend": {
      "primary": ["Next.js 14", "React 18", "TypeScript"],
      "styling": ["Tailwind CSS", "Framer Motion", "Radix UI"],
      "state": ["Zustand", "TanStack Query"],
      "forms": ["React Hook Form", "Zod validation"]
    },
    "backend": {
      "runtime": ["Node.js", "Edge Runtime"],
      "framework": ["Next.js API Routes", "tRPC"],
      "database": ["Prisma ORM", "PostgreSQL", "Redis"],
      "auth": ["NextAuth.js", "JWT tokens"]
    },
    "devops": {
      "deployment": ["Vercel", "Railway", "Docker"],
      "monitoring": ["Vercel Analytics", "Sentry"],
      "testing": ["Jest", "Playwright", "Vitest"],
      "cicd": ["GitHub Actions", "Husky hooks"]
    },
    "tools": ["VS Code", "Postman", "Figma", "Git", "Docker Desktop"]
  },
  "packages": {
    "dependencies": [
      "next@14.x",
      "react@18.x",
      "typescript",
      "@prisma/client",
      "next-auth",
      "tailwindcss",
      "framer-motion"
    ],
    "devDependencies": [
      "@types/node",
      "@types/react",
      "eslint",
      "prettier",
      "husky",
      "lint-staged"
    ]
  },
  "quickStart": {
    "description": "Get your development environment running in under 5 minutes",
    "estimatedTime": "3-5 minutes",
    "commands": [
      "git clone <your-repo-url>",
      "cd project-name",
      "npm install",
      "cp .env.example .env.local",
      "npm run dev"
    ],
    "environmentVariables": [
      "DATABASE_URL=postgresql://...",
      "NEXTAUTH_SECRET=your-secret-key",
      "NEXTAUTH_URL=http://localhost:3000"
    ],
    "verificationSteps": [
      "Open http://localhost:3000",
      "Check console for no errors",
      "Verify hot reload works by editing a file"
    ]
  },
  "documentation": [
    {
      "category": "Framework",
      "resources": [
        {
          "title": "Next.js 14 Documentation",
          "url": "https://nextjs.org/docs",
          "description": "Complete Next.js guide with App Router"
        },
        {
          "title": "React 18 Documentation", 
          "url": "https://react.dev",
          "description": "Latest React features and best practices"
        }
      ]
    },
    {
      "category": "Database & Backend",
      "resources": [
        {
          "title": "Prisma Documentation",
          "url": "https://prisma.io/docs",
          "description": "Type-safe database client and ORM"
        }
      ]
    }
  ],
  "deploymentGuide": {
    "platforms": [
      {
        "name": "Vercel",
        "difficulty": "Beginner",
        "steps": [
          "Connect GitHub repository",
          "Configure environment variables",
          "Deploy with one click"
        ],
        "pros": ["Zero configuration", "Automatic HTTPS", "Global CDN"],
        "bestFor": "Frontend-heavy apps with API routes"
      }
    ]
  },
  "advancedFeatures": {
    "performance": ["Code splitting", "Image optimization", "Caching strategies"],
    "security": ["CSRF protection", "Rate limiting", "Input validation"],
    "scaling": ["Database indexing", "Redis caching", "Load balancing"],
    "monitoring": ["Error tracking", "Performance metrics", "User analytics"]
  }
}`;

  // Optimized Gemini API request configuration for speed
  const requestBody = {
    contents: [{
      parts: [{
        text: prompt
      }]
    }],
    generationConfig: {
      temperature: 0.3, // Lower temperature for faster, more focused responses
      topK: 20,         // Reduced for faster processing
      topP: 0.8,        // Reduced for faster processing
      maxOutputTokens: 4096, // Reduced for faster response
      responseMimeType: "text/plain"
    },
    safetySettings: [
      {
        category: "HARM_CATEGORY_HARASSMENT",
        threshold: "BLOCK_MEDIUM_AND_ABOVE"
      },
      {
        category: "HARM_CATEGORY_HATE_SPEECH",
        threshold: "BLOCK_MEDIUM_AND_ABOVE"
      },
      {
        category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
        threshold: "BLOCK_MEDIUM_AND_ABOVE"
      },
      {
        category: "HARM_CATEGORY_DANGEROUS_CONTENT",
        threshold: "BLOCK_MEDIUM_AND_ABOVE"
      }
    ]
  };

  // Make request to Gemini API
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${process.env.GEMINI_API_KEY}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    }
  );

  // Handle API response errors
  if (!response.ok) {
    const errorData = await response.json().catch(() => null);
    console.error('Gemini API error:', response.status, errorData);

    if (response.status === 401) {
      throw new Error('Invalid API key configuration');
    } else if (response.status === 429) {
      throw new Error('API rate limit exceeded. Please try again in a few minutes.');
    } else if (response.status === 403) {
      throw new Error('API quota exceeded or access denied.');
    }

    throw new Error('Failed to connect to Gemini API');
  }

  const data = await response.json();
  console.log('Gemini API response received');

  if (!data.candidates || data.candidates.length === 0) {
    throw new Error('No response from AI model');
  }

  const content = data.candidates[0].content.parts[0].text;

  // Enhanced JSON extraction
  let jsonMatch = content.match(/\{[\s\S]*\}/);
  if (!jsonMatch) {
    const codeBlockMatch = content.match(/```(?:json)?\s*(\{[\s\S]*\})\s*```/);
    if (codeBlockMatch) {
      jsonMatch = [codeBlockMatch[1]];
    }
  }

  if (!jsonMatch) {
    console.error('No JSON found in AI response');
    throw new Error('Invalid response format from AI service');
  }

  let projectData;
  try {
    projectData = JSON.parse(jsonMatch[0]);
  } catch (parseError) {
    console.error('JSON parsing error:', parseError);
    throw new Error('Failed to parse AI response');
  }

  // Validate required fields
  const requiredFields = ['mindMap', 'roadmap', 'techStack', 'packages', 'documentation'];
  for (const field of requiredFields) {
    if (!projectData[field]) {
      projectData[field] = getDefaultValue(field);
    }
  }

  // Add token usage information
  projectData.tokens_used = data.usageMetadata?.totalTokenCount || 'N/A';

  return projectData;
}

/**
 * Helper function for default values when required fields are missing
 * @param {string} field - The field name
 * @returns {*} Default value for the field
 */
function getDefaultValue(field) {
  const defaults = {
    mindMap: { name: "Project", children: [] },
    roadmap: [],
    techStack: {},
    packages: { npm: [], tools: [] },
    documentation: [],
    youtubeResources: [],
    quickStart: {
      description: "Quick setup commands",
      commands: ["npm install", "npm run dev"],
      notes: ["Check the documentation for detailed setup"]
    }
  };
  return defaults[field] || null;
}