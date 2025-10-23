// app/api/generate-roadmap/route.js
// Production-ready Next.js 13+ App Router API

import { NextResponse } from 'next/server';

// Rate limiting map (use Redis in production)
const rateLimitMap = new Map();

// Rate limiter helper
function checkRateLimit(identifier, limit = 10, windowMs = 60000) {
  const now = Date.now();
  const userRequests = rateLimitMap.get(identifier) || [];

  // Filter out old requests outside the window
  const recentRequests = userRequests.filter(time => now - time < windowMs);

  if (recentRequests.length >= limit) {
    return false;
  }

  recentRequests.push(now);
  rateLimitMap.set(identifier, recentRequests);

  // Cleanup old entries periodically
  if (Math.random() < 0.01) {
    for (const [key, times] of rateLimitMap.entries()) {
      const validTimes = times.filter(time => now - time < windowMs);
      if (validTimes.length === 0) {
        rateLimitMap.delete(key);
      } else {
        rateLimitMap.set(key, validTimes);
      }
    }
  }

  return true;
}

// System prompt for AI
const SYSTEM_PROMPT = `You are an AI Roadmap Generator expert that creates detailed, production-level structured learning roadmaps for 2025.

CRITICAL: You MUST respond with ONLY valid JSON. No markdown, no code blocks, no explanations - just pure JSON.

Analyze the user's query to understand:
- Their current skillset and experience level
- Their desired role or career goal
- Any specific technologies or domains mentioned

Generate a comprehensive 2025-ready roadmap with modern frameworks, tools, and best practices.

Return EXACTLY this JSON structure (with real content):

{
  "phases": [
    {
      "id": 1,
      "title": "Foundation Phase",
      "subtitle": "Master the Fundamentals",
      "description": "Build a solid foundation with core concepts and essential skills",
      "color": "bg-purple-600",
      "sections": [
        {
          "title": "Core Concepts",
          "items": [
            "Concept 1 with brief description",
            "Concept 2 with brief description",
            "Concept 3 with brief description"
          ]
        },
        {
          "title": "Essential Tools",
          "items": [
            "Tool 1 and why it matters",
            "Tool 2 and its purpose"
          ]
        }
      ]
    },
    {
      "id": 2,
      "title": "Intermediate Phase",
      "subtitle": "Deepen Your Knowledge",
      "description": "Advanced concepts and practical applications",
      "color": "bg-pink-600",
      "sections": [
        {
          "title": "Advanced Topics",
          "items": ["Topic 1", "Topic 2"]
        }
      ]
    },
    {
      "id": 3,
      "title": "Advanced Phase",
      "subtitle": "Master Advanced Techniques",
      "description": "Expert-level skills and real-world projects",
      "color": "bg-amber-600",
      "sections": [
        {
          "title": "Expert Skills",
          "items": ["Skill 1", "Skill 2"]
        }
      ]
    },
    {
      "id": 4,
      "title": "Specialization Phase",
      "subtitle": "Career-Ready Skills",
      "description": "Industry-specific expertise and portfolio building",
      "color": "bg-green-600",
      "sections": [
        {
          "title": "Specializations",
          "items": ["Area 1", "Area 2"]
        }
      ]
    }
  ],
  "projects": [
    {
      "id": 1,
      "title": "Project Name",
      "level": "Beginner",
      "description": "Detailed project description explaining what to build",
      "skills": ["Skill 1", "Skill 2", "Skill 3"],
      "duration": "1-2 weeks",
      "features": [
        "Feature 1 to implement",
        "Feature 2 to implement",
        "Feature 3 to implement"
      ],
      "learningOutcomes": [
        "What you'll learn from this project",
        "Key concepts mastered"
      ]
    }
  ],
  "resources": {
    "youtubeChannels": [
      {
        "name": "Channel Name",
        "url": "https://youtube.com/@channelname",
        "description": "What makes this channel valuable",
        "bestFor": "Beginners/Intermediate/Advanced"
      }
    ],
    "courses": [
      {
        "name": "Course Name",
        "platform": "Udemy/Coursera/YouTube/etc",
        "url": "Course URL",
        "price": "Free/Paid/$XX",
        "description": "Course content overview",
        "level": "Beginner/Intermediate/Advanced"
      }
    ],
    "documentation": [
      {
        "name": "Official Docs",
        "url": "https://docs.example.com",
        "description": "Why this documentation is essential"
      }
    ],
    "books": [
      {
        "title": "Book Title",
        "author": "Author Name",
        "description": "What you'll gain from this book",
        "level": "Beginner/Intermediate/Advanced"
      }
    ],
    "communities": [
      {
        "name": "Community Name",
        "platform": "Discord/Reddit/Forum",
        "url": "Community URL",
        "description": "Why join this community"
      }
    ],
    "tools": [
      {
        "name": "Tool Name",
        "category": "Development/Design/Testing/etc",
        "url": "Tool URL",
        "description": "How this tool helps",
        "pricing": "Free/Freemium/Paid"
      }
    ]
  },
  "learningPathData": {
    "coreFrameworks": ["Framework 1", "Framework 2", "Framework 3"],
    "essentialTools": ["Tool 1", "Tool 2", "Tool 3"],
    "keyTechnologies": ["Tech 1", "Tech 2", "Tech 3"],
    "certifications": ["Cert 1", "Cert 2"],
    "practiceWebsites": ["Website 1 - description", "Website 2 - description"]
  },
  "timelineData": [
    { "phase": "Foundation Phase", "months": "2-3 months" },
    { "phase": "Intermediate Phase", "months": "3-4 months" },
    { "phase": "Advanced Phase", "months": "4-5 months" },
    { "phase": "Specialization Phase", "months": "3-4 months" }
  ],
  "finalTips": [
    "Build projects while learning - theory alone isn't enough",
    "Join communities and network with professionals in the field",
    "Contribute to open-source projects to gain real-world experience",
    "Create a portfolio showcasing your best work",
    "Stay updated with latest industry trends and technologies",
    "Practice coding daily to build consistency and muscle memory"
  ]
}

IMPORTANT RULES:

1. **Phases (3-5 phases)**:
   - Use these exact color codes: bg-purple-600, bg-pink-600, bg-amber-600, bg-green-600
   - Each phase should have 2-4 sections
   - Each section should have 3-6 items
   - Make content specific to 2025 technologies

2. **Projects (9-10 projects)**:
   - Include 3 Beginner projects
   - Include 3-4 Intermediate projects
   - Include 3 Advanced/Industry-Ready projects
   - Each project must have: title, level, description, skills, duration, features, learningOutcomes
   - Projects should progressively build complexity
   - Include real-world, portfolio-worthy projects

3. **Resources**:
   - **YouTube Channels**: 5-8 best channels (include FreeCodeCamp, Traversy Media, Net Ninja, Web Dev Simplified, etc. when relevant)
   - **Courses**: 5-7 top courses (include Udemy bestsellers, Coursera specializations, free YouTube playlists)
   - **Documentation**: Official docs for main technologies
   - **Books**: 3-5 highly recommended books
   - **Communities**: Discord servers, Reddit communities, forums
   - **Tools**: Development tools, IDEs, extensions, AI assistants

4. **Content Quality**:
   - Use 2025 current frameworks and best practices
   - Include AI tools (Cursor, GitHub Copilot, ChatGPT, Claude, etc.)
   - Modern stack preferences (Next.js over CRA, Vite, Bun, etc.)
   - Include DevOps, testing, and deployment practices
   - Mention trending technologies (AI/ML integration, Web3 if relevant, Edge computing, etc.)

5. **Timeline**:
   - Total 12-18 months for career transition
   - Realistic time estimates per phase
   - Account for full-time vs part-time learning

6. **Output Format**:
   - Return ONLY the JSON object
   - No markdown code blocks
   - No additional text or explanations
   - Ensure valid JSON syntax

EXAMPLE PROJECT STRUCTURE:
{
  "id": 1,
  "title": "Personal Portfolio Website",
  "level": "Beginner",
  "description": "Create a responsive portfolio website to showcase your projects and skills using HTML, CSS, and vanilla JavaScript",
  "skills": ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Git"],
  "duration": "1-2 weeks",
  "features": [
    "Responsive navigation bar with smooth scrolling",
    "Hero section with animated introduction",
    "Projects showcase with filtering",
    "Contact form with validation",
    "Dark/Light theme toggle"
  ],
  "learningOutcomes": [
    "Master HTML semantic elements and accessibility",
    "Create responsive layouts with CSS Grid and Flexbox",
    "Implement DOM manipulation and event handling",
    "Deploy website using GitHub Pages or Netlify"
  ]
}

EXAMPLE YOUTUBE CHANNEL STRUCTURE:
{
  "name": "Traversy Media",
  "url": "https://youtube.com/@TraversyMedia",
  "description": "Comprehensive web development tutorials covering modern frameworks, tools, and best practices with project-based learning",
  "bestFor": "Beginner to Intermediate"
}

EXAMPLE COURSE STRUCTURE:
{
  "name": "The Complete 2025 Web Development Bootcamp",
  "platform": "Udemy",
  "url": "https://www.udemy.com/course/the-complete-web-development-bootcamp/",
  "price": "Paid ($15-20 on sale)",
  "description": "Full-stack web development course covering HTML, CSS, JavaScript, React, Node.js, and MongoDB with 60+ hours of content",
  "level": "Beginner to Intermediate"
}`;

// Validate roadmap structure
function validateRoadmap(roadmap) {
  if (!roadmap || typeof roadmap !== 'object') {
    return { valid: false, error: 'Roadmap must be an object' };
  }

  if (!Array.isArray(roadmap.phases)) {
    return { valid: false, error: 'Phases must be an array' };
  }

  if (roadmap.phases.length === 0) {
    return { valid: false, error: 'Roadmap must have at least one phase' };
  }

  for (const phase of roadmap.phases) {
    if (!phase.id || !phase.title || !phase.color) {
      return { valid: false, error: 'Each phase must have id, title, and color' };
    }

    if (!Array.isArray(phase.sections)) {
      return { valid: false, error: 'Each phase must have sections array' };
    }
  }

  return { valid: true };
}

// Main POST handler
export async function POST(request) {
  try {
    // Get client IP for rate limiting
    const forwarded = request.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0] : 'unknown';

    // Rate limiting (10 requests per minute per IP)
    if (!checkRateLimit(ip, 10, 60000)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    // Parse request body with error handling
    let body;
    try {
      body = await request.json();
    } catch (parseError) {
      return NextResponse.json(
        { error: 'Invalid JSON in request body' },
        { status: 400 }
      );
    }

    const { query } = body;

    // Validate input
    if (!query || typeof query !== 'string') {
      return NextResponse.json(
        { error: 'Query is required and must be a string' },
        { status: 400 }
      );
    }

    const trimmedQuery = query.trim();

    if (trimmedQuery.length === 0) {
      return NextResponse.json(
        { error: 'Query cannot be empty' },
        { status: 400 }
      );
    }

    if (trimmedQuery.length > 2000) {
      return NextResponse.json(
        { error: 'Query is too long. Maximum 2000 characters.' },
        { status: 400 }
      );
    }

    // Check for API key
    const apiKey = process.env.OPENROUTER_API_KEY;
    if (!apiKey) {
      console.error('OPENROUTER_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Server configuration error. Please contact support.' },
        { status: 500 }
      );
    }

    // Call OpenRouter API with timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 60000); // 60s timeout

    let aiResponse;
    try {
      aiResponse = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
          'X-Title': 'AI Roadmap Generator'
        },
        body: JSON.stringify({
          model: 'anthropic/claude-3.5-sonnet',
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            { role: 'user', content: `Create a detailed learning roadmap for: ${trimmedQuery}` }
          ],
          temperature: 0.7,
          max_tokens: 4000
        }),
        signal: controller.signal
      });
    } catch (fetchError) {
      clearTimeout(timeoutId);

      if (fetchError.name === 'AbortError') {
        return NextResponse.json(
          { error: 'Request timeout. Please try again.' },
          { status: 408 }
        );
      }

      console.error('OpenRouter API fetch error:', fetchError);
      return NextResponse.json(
        { error: 'Failed to connect to AI service' },
        { status: 503 }
      );
    }

    clearTimeout(timeoutId);

    // Handle API error responses
    if (!aiResponse.ok) {
      let errorData;
      try {
        errorData = await aiResponse.json();
      } catch {
        errorData = { error: 'Unknown error' };
      }

      console.error('OpenRouter API Error:', {
        status: aiResponse.status,
        error: errorData
      });

      // Handle specific error codes
      if (aiResponse.status === 401) {
        return NextResponse.json(
          { error: 'API authentication failed' },
          { status: 500 }
        );
      }

      if (aiResponse.status === 429) {
        return NextResponse.json(
          { error: 'AI service rate limit exceeded. Please try again later.' },
          { status: 429 }
        );
      }

      return NextResponse.json(
        { 
          error: 'Failed to generate roadmap',
          details: errorData.error?.message || 'Unknown error from AI service'
        },
        { status: aiResponse.status }
      );
    }

    // Parse AI response
    let data;
    try {
      data = await aiResponse.json();
    } catch (jsonError) {
      console.error('Failed to parse AI response:', jsonError);
      return NextResponse.json(
        { error: 'Invalid response from AI service' },
        { status: 500 }
      );
    }

    // Extract content
    const content = data.choices?.[0]?.message?.content;

    if (!content) {
      console.error('No content in AI response:', data);
      return NextResponse.json(
        { error: 'No content received from AI service' },
        { status: 500 }
      );
    }

    // Parse JSON content (handle markdown code blocks)
    let roadmap;
    try {
      const cleanedContent = content
        .replace(/```json\s*/g, '')
        .replace(/```\s*/g, '')
        .trim();

      roadmap = JSON.parse(cleanedContent);
    } catch (parseError) {
      console.error('JSON parse error:', parseError);
      console.error('Content received:', content.substring(0, 500));
      return NextResponse.json(
        { error: 'Failed to parse AI response. Please try again.' },
        { status: 500 }
      );
    }

    // Validate roadmap structure
    const validation = validateRoadmap(roadmap);
    if (!validation.valid) {
      console.error('Invalid roadmap structure:', validation.error);
      return NextResponse.json(
        { error: `Invalid roadmap structure: ${validation.error}` },
        { status: 500 }
      );
    }

    // Build validated response with defaults
    const validatedRoadmap = {
      phases: roadmap.phases || [],
      projects: roadmap.projects || [],
      resources: roadmap.resources || {
        youtubeChannels: [],
        courses: [],
        documentation: [],
        books: [],
        communities: [],
        tools: []
      },
      learningPathData: {
        coreFrameworks: roadmap.learningPathData?.coreFrameworks || [],
        essentialTools: roadmap.learningPathData?.essentialTools || [],
        keyTechnologies: roadmap.learningPathData?.keyTechnologies || [],
        certifications: roadmap.learningPathData?.certifications || [],
        practiceWebsites: roadmap.learningPathData?.practiceWebsites || []
      },
      timelineData: roadmap.timelineData || [],
      finalTips: roadmap.finalTips || []
    };

    // Return successful response
    return NextResponse.json(validatedRoadmap, { 
      status: 200,
      headers: {
        'Cache-Control': 'no-store, max-age=0',
      }
    });

  } catch (error) {
    // Catch-all error handler
    console.error('Unexpected error in API route:', error);

    return NextResponse.json(
      { 
        error: 'Internal server error',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}

// Handle other HTTP methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed. Use POST.' },
    { status: 405 }
  );
}

// Export route config
export const runtime = 'nodejs'; // or 'edge' for edge runtime
export const dynamic = 'force-dynamic'; // Disable caching for thi