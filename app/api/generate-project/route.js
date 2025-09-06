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

    // **ENHANCED: Fetch YouTube videos immediately but with quick timeout for instant response**
    let youtubeResources = [];
    
    // Only attempt YouTube fetch if API key is available
    if (process.env.YOUTUBE_API_KEY) {
      try {
        // Very quick YouTube fetch with 1-second timeout to not delay response
        const youtubePromise = fetchProjectRelevantVideos(projectData, projectIdea);
        const timeoutPromise = new Promise((resolve) => setTimeout(() => resolve([]), 1000));
        
        youtubeResources = await Promise.race([youtubePromise, timeoutPromise]);
        console.log(`Fetched ${youtubeResources.length} YouTube videos in time for response`);
      } catch (error) {
        console.log('YouTube fetch failed, using AI-generated placeholders');
        youtubeResources = [];
      }
    } else {
      console.log('YouTube API not configured, using AI-generated video suggestions');
    }

    // **ENHANCED RESPONSE with real YouTube data**
    const enhancedResponse = {
      ...projectData,
      youtubeResources: youtubeResources.length > 0 ? youtubeResources.map(video => ({
        title: video.title || video.snippet?.title || 'Tutorial Video',
        channel: video.channel || video.snippet?.channelTitle || 'Educational Channel',
        url: video.url || `https://youtube.com/watch?v=${video.id}`,
        description: video.description || video.snippet?.description?.slice(0, 150) || 'Educational tutorial video'
      })) : projectData.youtubeResources || [],
      metadata: {
        model: 'gemini-2.0-flash-exp',
        timestamp: new Date().toISOString(),
        youtube_videos_found: youtubeResources.length,
        project_analysis: analyzeProject(projectIdea, Object.values(projectData.techStack || {}).flat())
      }
    };

    // **BACKGROUND ENHANCEMENT** - Continue fetching more videos if initial fetch was incomplete
    if (youtubeResources.length < 5) {
      setImmediate(async () => {
        try {
          console.log('Starting background YouTube video fetching for additional resources...');
          const additionalVideos = await fetchProjectRelevantVideos(projectData, projectIdea);
          console.log(`Background: Fetched ${additionalVideos.length} additional YouTube videos`);
        } catch (error) {
          console.error('Background YouTube fetch error:', error);
        }
      });
    }

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
🎥 LEARNING RESOURCES: Include comprehensive documentation and YouTube tutorial recommendations

CRITICAL: You must include REAL YouTube tutorial resources that match the project. The system will later enhance these with actual video data.

ENHANCED PROJECT STRUCTURE - Return ONLY valid JSON with this exact format:

{
  "projectSummary": {
    "name": "Project Name",
    "description": "Comprehensive description with value proposition",
    "complexity": "Beginner",
    "estimatedTime": "2-4 weeks",
    "skillsLearned": ["React", "Node.js", "Database Design"]
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
  "learningPaths": {
    "beginner": "Core functionality with guided setup - Build functional MVP",
    "intermediate": "Advanced features and optimization - Production-ready app", 
    "advanced": "Scalable architecture and enterprise patterns - Full system"
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
          "title": "Environment Setup",
          "commands": ["node --version", "npm install", "git init"]
        },
        {
          "title": "Project Creation", 
          "commands": ["npx create-next-app@latest project", "cd project", "npm run dev"]
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
    "frontend": ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    "backend": ["Node.js", "PostgreSQL", "Prisma"],
    "deployment": ["Vercel", "Railway"],
    "tools": ["VS Code", "Git", "Postman"]
  },
  "packages": {
    "npm": ["next", "react", "typescript", "tailwindcss", "prisma"]
  },
  "quickStart": {
    "commands": ["npm create next-app project", "cd project", "npm install", "npm run dev"],
    "notes": ["Open localhost:3000", "Edit files to see changes", "Check console for errors"]
  },
  "documentation": [
    {"title": "Next.js Docs", "url": "https://nextjs.org/docs", "description": "Complete Next.js guide and API reference"},
    {"title": "React Docs", "url": "https://react.dev", "description": "Learn React with interactive examples"},
    {"title": "Tailwind CSS", "url": "https://tailwindcss.com/docs", "description": "Utility-first CSS framework documentation"}
  ],
  "deployment": ["Connect to Vercel", "Push to GitHub", "Auto-deploy enabled"],
  "features": ["Authentication", "Database", "Responsive design", "SEO optimization"],
  "youtubeResources": [
    {"title": "Complete Project Tutorial", "channel": "FreeCodeCamp", "url": "https://youtube.com/search?q=project+tutorial", "description": "Full stack development tutorial"},
    {"title": "Hindi Tutorial", "channel": "Code with Harry", "url": "https://youtube.com/search?q=hindi+tutorial", "description": "Step-by-step Hindi explanation"}
  ]
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