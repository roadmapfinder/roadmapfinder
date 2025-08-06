// app/api/generate-project/route.js
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { projectIdea } = await request.json();

    if (!projectIdea || projectIdea.trim().length === 0) {
      return NextResponse.json({ error: 'Project idea is required' }, { status: 400 });
    }

    // Validate API key exists
    if (!process.env.GEMINI_API_KEY) {
      console.error('GEMINI_API_KEY is not set');
      return NextResponse.json({ error: 'API configuration error' }, { status: 500 });
    }

    console.log('Making request to Gemini API for project generation...');

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
      },
      {
        "name": "Major Component 2",
        "children": [
          { "name": "Sub-component 2.1" },
          { "name": "Sub-component 2.2" }
        ]
      }
    ]
  },
  "roadmap": [
    {
      "phase": "Phase Name",
      "description": "What this phase accomplishes",
      "tasks": ["Task 1", "Task 2", "Task 3"]
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
    },
    {
      "title": "PostgreSQL Docs",
      "url": "https://www.postgresql.org/docs/",
      "description": "Official PostgreSQL documentation"
    }
  ],
  "youtubeResources": [
    {
      "title": "Build a Full-Stack App with Next.js 13",
      "channel": "Traversy Media",
      "url": "https://youtube.com/watch?v=example1",
      "description": "Walkthrough of building a full-stack app using modern tech"
    },
    {
      "title": "Complete Guide to Tailwind CSS",
      "channel": "The Net Ninja",
      "url": "https://youtube.com/watch?v=example2",
      "description": "Master Tailwind CSS for frontend development"
    }
  ]
}`;

    // Gemini API request body
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

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      console.error('Gemini API error:', response.status, errorData);

      if (response.status === 401) {
        return NextResponse.json(
          { error: 'Invalid API key configuration' },
          { status: 500 }
        );
      } else if (response.status === 429) {
        return NextResponse.json(
          { error: 'API rate limit exceeded. Please try again in a few minutes.' },
          { status: 500 }
        );
      } else if (response.status === 403) {
        return NextResponse.json(
          { error: 'API quota exceeded or access denied. Please check your Gemini API configuration.' },
          { status: 500 }
        );
      } else if (response.status >= 500) {
        return NextResponse.json(
          { error: 'Gemini API service temporarily unavailable. Please try again later.' },
          { status: 500 }
        );
      }

      return NextResponse.json(
        { error: 'Failed to connect to Gemini API' },
        { status: 500 }
      );
    }

    const data = await response.json();
    console.log('Gemini API response received for project generation');

    if (!data.candidates || data.candidates.length === 0) {
      return NextResponse.json(
        { error: 'No response from AI model' },
        { status: 500 }
      );
    }

    const content = data.candidates[0].content.parts[0].text;

    // Extract JSON from the response - more robust parsing
    let jsonMatch = content.match(/\{[\s\S]*\}/);

    if (!jsonMatch) {
      // Try to find JSON if it's wrapped in markdown code blocks
      const codeBlockMatch = content.match(/```(?:json)?\s*(\{[\s\S]*\})\s*```/);
      if (codeBlockMatch) {
        jsonMatch = [codeBlockMatch[1]];
      }
    }

    if (!jsonMatch) {
      console.error('No JSON found in AI response:', content);
      return NextResponse.json(
        { error: 'Invalid response format from AI service' },
        { status: 500 }
      );
    }

    let projectData;
    try {
      projectData = JSON.parse(jsonMatch[0]);
    } catch (parseError) {
      console.error('JSON parsing error:', parseError);
      console.error('Content that failed to parse:', jsonMatch[0]);
      return NextResponse.json(
        { error: 'Failed to parse AI response' },
        { status: 500 }
      );
    }

    // Validate the response structure
    const requiredFields = ['mindMap', 'roadmap', 'techStack', 'packages', 'documentation', 'youtubeResources'];
    for (const field of requiredFields) {
      if (!projectData[field]) {
        console.warn(`Missing field in response: ${field}`);
        // Set default empty values instead of failing
        projectData[field] = getDefaultValue(field);
      }
    }

    // Enhanced response with metadata
    return NextResponse.json({ 
      ...projectData,
      metadata: {
        model: 'gemini-2.0-flash-exp',
        timestamp: new Date().toISOString(),
        tokens_used: data.usageMetadata?.totalTokenCount || 'N/A'
      }
    });

  } catch (error) {
    console.error('Project generation API error:', error.message);

    // Enhanced error handling
    if (error.name === 'AbortError') {
      return NextResponse.json(
        { error: 'Request timeout. The AI is taking longer than expected. Please try again.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        error: 'Failed to generate project guide',
        details: process.env.NODE_ENV === 'development' ? error.message : 'Please try again later'
      },
      { status: 500 }
    );
  }
}

// Helper function to provide default values for missing fields
function getDefaultValue(field) {
  const defaults = {
    mindMap: { name: "Project", children: [] },
    roadmap: [],
    techStack: {},
    packages: { npm: [], tools: [] },
    documentation: [],
    youtubeResources: []
  };
  return defaults[field] || null;
}