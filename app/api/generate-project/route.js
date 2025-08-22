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

    // **INTELLIGENT YOUTUBE VIDEO FETCHING**
    console.log('Starting intelligent YouTube video analysis and fetching...');
    let youtubeResources = [];

    try {
      youtubeResources = await fetchProjectRelevantVideos(projectData, projectIdea);
      console.log(`Successfully fetched ${youtubeResources.length} relevant YouTube videos`);
    } catch (youtubeError) {
      console.error('YouTube video fetching error:', youtubeError);
      youtubeResources = [];
    }

    // Fallback if no videos found
    if (youtubeResources.length === 0) {
      youtubeResources = await createFallbackSearchLinks(projectData, projectIdea);
    }

    // Enhanced response with metadata
    const enhancedResponse = {
      ...projectData,
      youtubeResources,
      metadata: {
        model: 'gemini-2.0-flash-exp',
        timestamp: new Date().toISOString(),
        tokens_used: projectData.tokens_used || 'N/A',
        youtube_videos_found: youtubeResources.filter(v => !v.isSearchLink).length,
        search_queries_generated: (await generateIntelligentSearchQueries(projectData, projectIdea)).length,
        project_analysis: analyzeProject(projectIdea, Object.values(projectData.techStack || {}).flat())
      }
    };

    return NextResponse.json(enhancedResponse);

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
You are an expert full-stack software architect, AI consultant, and technical project planner.
A user has described their project idea in natural language:

"${projectIdea}"

Your task is to deeply analyze this idea — whether it's a simple utility, a full SaaS platform, an AI-driven application, a blockchain dApp, or a UI/UX design system.
Provide a comprehensive, language-agnostic project breakdown in structured JSON format.

⚠️ You must:

Support all popular tech stacks: JavaScript/TypeScript, Python, Java, Dart/Flutter, Swift, Solidity, R, Rust, Go, etc.

Include recommendations for AI/ML, data analytics, blockchain, and design-oriented projects where relevant

Recommend only modern, well-maintained, and production-ready tools and libraries (2024–2025)

Ensure every step is practical, structured, and developer-actionable

**ENHANCED ROADMAP REQUIREMENTS:**
- Each phase should include detailed terminal commands for package installation
- Provide actual code snippets for setup and configuration
- Include file structure examples
- Add estimated time duration for each phase
- Include prerequisites and dependencies
- Provide troubleshooting tips for common issues
- Add testing commands and validation steps

Return ONLY a valid JSON object (no extra text), using the following format:

{
  "mindMap": {
    "name": "Project Name",
    "children": [
      {
        "name": "Major Component 1",
        "children": [
          { "name": "Sub-component 1.1" },
          { "name": "Sub-component 1.2" }
        ]
      }
    ]
  },
  "roadmap": [
    {
      "phase": "Phase 1: Project Setup & Environment",
      "description": "Set up the development environment and project structure",
      "duration": "2-4 hours",
      "difficulty": "Beginner",
      "prerequisites": ["Node.js v18+", "Git", "VS Code"],
      "steps": [
        {
          "title": "Initialize Project",
          "description": "Create project directory and initialize package.json",
          "type": "terminal",
          "commands": [
            "mkdir my-project && cd my-project",
            "npm init -y",
            "git init"
          ]
        },
        {
          "title": "Install Dependencies",
          "description": "Install core packages and development tools",
          "type": "terminal",
          "commands": [
            "npm install next react react-dom",
            "npm install -D tailwindcss postcss autoprefixer"
          ]
        }
      ],
      "troubleshooting": [
        "If Node.js version errors occur, use nvm to switch versions"
      ],
      "validation": [
        "Project starts without errors",
        "localhost:3000 loads successfully"
      ]
    }
  ],
  "techStack": {
    "frontend": ["React", "Next.js", "Tailwind CSS"],
    "backend": ["Node.js", "Express"],
    "database": ["PostgreSQL"],
    "devops": ["Docker", "GitHub Actions"],
    "deployment": ["Vercel", "Railway"]
  },
  "packages": {
    "npm": ["next", "react", "axios", "tailwindcss"],
    "python": [],
    "tools": ["VS Code", "Postman", "Figma", "Git"]
  },
  "documentation": [
    {
      "title": "Next.js Documentation",
      "url": "https://nextjs.org/docs",
      "description": "Official Next.js guide and API docs"
    }
  ],
  "quickStart": {
    "description": "Get started with this project in under 5 minutes",
    "commands": [
      "git clone <repository-url>",
      "npm install",
      "npm run dev"
    ],
    "notes": [
      "Make sure to update environment variables",
      "Visit http://localhost:3000 to see your project"
    ]
  }
}`;

  // Gemini API request configuration
  const requestBody = {
    contents: [{
      parts: [{
        text: prompt
      }]
    }],
    generationConfig: {
      temperature: 0.7,
      topK: 40,
      topP: 0.95,
      maxOutputTokens: 8192,
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