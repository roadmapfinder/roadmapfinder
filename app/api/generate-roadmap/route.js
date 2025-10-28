// app/api/generate-roadmap/route.js
// Ultra-optimized version with streaming, aggressive caching, and parallel processing

import { NextResponse } from "next/server";

// ============================================================================
// ENHANCED CACHING - Multi-layer with compression
// ============================================================================
const CACHE_DURATION = 1000 * 60 * 60 * 24; // 24 hours (increased)
const roadmapCache = new Map();
const partialCache = new Map(); // Cache for partial matches

function getCachedRoadmap(query) {
  const normalizedQuery = normalizeQuery(query);

  // Exact match (instant)
  const exact = roadmapCache.get(normalizedQuery);
  if (exact && Date.now() - exact.timestamp < CACHE_DURATION) {
    console.log("⚡ INSTANT: Exact cache hit");
    return exact.data;
  }

  // Fuzzy match (very fast)
  const keywords = extractKeywords(normalizedQuery);
  for (const [key, value] of roadmapCache.entries()) {
    if (Date.now() - value.timestamp < CACHE_DURATION) {
      const similarity = calculateFastSimilarity(keywords, extractKeywords(key));
      if (similarity > 0.85) {
        console.log(`⚡ FAST: Fuzzy cache hit (${Math.round(similarity * 100)}%)`);
        return value.data;
      }
    }
  }

  return null;
}

function normalizeQuery(query) {
  return query.toLowerCase().trim().replace(/\s+/g, ' ');
}

function extractKeywords(text) {
  const stopWords = new Set(['a', 'an', 'the', 'to', 'for', 'in', 'on', 'at', 'i', 'want', 'need', 'become', 'learn']);
  return text
    .toLowerCase()
    .split(/\s+/)
    .filter(w => w.length > 2 && !stopWords.has(w));
}

function calculateFastSimilarity(keywords1, keywords2) {
  const set1 = new Set(keywords1);
  const set2 = new Set(keywords2);
  const intersection = keywords1.filter(w => set2.has(w)).length;
  const union = set1.size + set2.size - intersection;
  return union > 0 ? intersection / union : 0;
}

function cacheRoadmap(query, data) {
  const normalized = normalizeQuery(query);
  roadmapCache.set(normalized, { data, timestamp: Date.now() });

  // Aggressive cleanup - keep only 200 most recent
  if (roadmapCache.size > 200) {
    const sorted = Array.from(roadmapCache.entries())
      .sort((a, b) => b[1].timestamp - a[1].timestamp)
      .slice(0, 150);
    roadmapCache.clear();
    sorted.forEach(([k, v]) => roadmapCache.set(k, v));
  }
}

// ============================================================================
// OPTIMIZED RATE LIMITING - Less aggressive
// ============================================================================
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW = 60000;
const MAX_REQUESTS = 30; // Increased significantly

function checkRateLimit(ip) {
  const now = Date.now();
  const requests = rateLimitMap.get(ip) || [];
  const recent = requests.filter(t => now - t < RATE_LIMIT_WINDOW);

  if (recent.length >= MAX_REQUESTS) return false;

  recent.push(now);
  rateLimitMap.set(ip, recent);

  // Lazy cleanup
  if (Math.random() < 0.1) {
    for (const [key, times] of rateLimitMap.entries()) {
      const valid = times.filter(t => now - t < RATE_LIMIT_WINDOW);
      valid.length ? rateLimitMap.set(key, valid) : rateLimitMap.delete(key);
    }
  }

  return true;
}

// ============================================================================
// ULTRA-COMPRESSED SYSTEM PROMPT - 60% smaller for faster processing
// ============================================================================
const SYSTEM_PROMPT = `You are an AI Roadmap Generator expert that creates detailed, production-level structured learning roadmaps for 2025. Your roadmaps are COMPREHENSIVE and IN-DEPTH, covering every step from absolute beginner to industry-ready professional.

CRITICAL: You MUST respond with ONLY valid JSON. No markdown, no code blocks, no explanations - just pure JSON.

Analyze the user's query to understand:
- Their current skillset and experience level
- Their desired role or career goal
- Any specific technologies or domains mentioned

Generate a comprehensive 2025-ready roadmap with modern frameworks, tools, and best practices that leaves NO gaps in knowledge.

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
      "title": "Core Development Phase",
      "subtitle": "Build Strong Technical Skills",
      "description": "Master core development concepts and start building real applications",
      "color": "bg-blue-600",
      "sections": [
        {
          "title": "Development Skills",
          "items": ["Skill 1", "Skill 2"]
        }
      ]
    },
    {
      "id": 3,
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
      "id": 4,
      "title": "Advanced Development Phase",
      "subtitle": "Master Complex Systems",
      "description": "Expert-level architecture, design patterns, and scalable systems",
      "color": "bg-amber-600",
      "sections": [
        {
          "title": "Expert Skills",
          "items": ["Skill 1", "Skill 2"]
        }
      ]
    },
    {
      "id": 5,
      "title": "Professional Specialization Phase",
      "subtitle": "Industry-Specific Expertise",
      "description": "Real-world production skills, specializations, and career preparation",
      "color": "bg-green-600",
      "sections": [
        {
          "title": "Specializations",
          "items": ["Area 1", "Area 2"]
        }
      ]
    },
    {
      "id": 6,
      "title": "Industry Ready Phase",
      "subtitle": "Production & Career Launch",
      "description": "Deploy production systems, build portfolio, and enter the job market",
      "color": "bg-indigo-600",
      "sections": [
        {
          "title": "Career Preparation",
          "items": ["Item 1", "Item 2"]
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
    ],
    "podcasts": [
      {
        "name": "Podcast Name",
        "url": "Podcast URL",
        "description": "What you'll learn from this podcast",
        "frequency": "Weekly/Daily/Monthly"
      }
    ],
    "newsletters": [
      {
        "name": "Newsletter Name",
        "url": "Newsletter URL",
        "description": "Why subscribe to this newsletter"
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
    { "phase": "Core Development Phase", "months": "3-4 months" },
    { "phase": "Intermediate Phase", "months": "3-4 months" },
    { "phase": "Advanced Development Phase", "months": "4-5 months" },
    { "phase": "Professional Specialization Phase", "months": "3-4 months" },
    { "phase": "Industry Ready Phase", "months": "2-3 months" }
  ],
  "careerPreparation": {
    "resumeBuilding": [
      "How to structure a technical resume",
      "Keywords and ATS optimization",
      "Showcasing projects effectively",
      "Quantifying achievements and impact"
    ],
    "interviewPrep": [
      "Data structures and algorithms practice",
      "System design interview preparation",
      "Behavioral interview questions (STAR method)",
      "Technical screening preparation",
      "Live coding practice",
      "Mock interview platforms"
    ],
    "portfolioGuidance": [
      "Creating a professional portfolio website",
      "GitHub profile optimization",
      "Writing technical blog posts",
      "Contributing to open source",
      "Building case studies for projects"
    ],
    "networkingStrategies": [
      "LinkedIn optimization and networking",
      "Attending tech meetups and conferences",
      "Building a personal brand on Twitter/X",
      "Contributing to tech communities",
      "Finding mentors in the industry"
    ],
    "jobSearchStrategies": [
      "Where to find job opportunities",
      "Cold outreach to companies",
      "Working with recruiters",
      "Freelancing platforms to gain experience",
      "Internship and entry-level opportunities"
    ]
  },
  "industryInsights": {
    "currentTrends": [
      "Latest trends in the field for 2025",
      "Emerging technologies to watch",
      "Skills in high demand"
    ],
    "salaryExpectations": {
      "entryLevel": "Typical entry-level salary range",
      "midLevel": "Mid-level salary expectations",
      "senior": "Senior-level compensation",
      "factors": "Factors affecting salary (location, company size, specialization)"
    },
    "careerPaths": [
      "Potential career progression paths",
      "Specialization opportunities",
      "Transition to management vs staying technical",
      "Freelancing and consulting opportunities"
    ],
    "companyTypes": [
      "Startups vs established companies",
      "FAANG and big tech opportunities",
      "Remote vs on-site considerations",
      "Company culture fit"
    ]
  },
  "finalTips": [
    "Build projects while learning - theory alone isn't enough",
    "Join communities and network with professionals in the field",
    "Contribute to open-source projects to gain real-world experience",
    "Create a portfolio showcasing your best work",
    "Stay updated with latest industry trends and technologies",
    "Practice coding daily to build consistency and muscle memory",
    "Don't skip fundamentals - they are crucial for long-term success",
    "Learn in public - share your journey on social media",
    "Focus on problem-solving skills, not just syntax",
    "Build a learning habit and be consistent over time"
  ]
}

IMPORTANT RULES FOR IN-DEPTH ROADMAPS:

1. **Phases (6-8 phases for complete beginner to industry-ready)**:
   - MUST include 6-8 comprehensive phases covering the full journey
   - Use these exact color codes in order: bg-purple-600, bg-blue-600, bg-pink-600, bg-amber-600, bg-green-600, bg-indigo-600, bg-red-600, bg-teal-600
   - Each phase should have 4-6 sections (more content per phase)
   - Each section should have 5-10 items (detailed, granular steps)
   - Make content specific to 2025 technologies
   - ENSURE PROGRESSIVE DEPTH: Start with absolute basics, gradually increase complexity
   - Cover: Fundamentals → Core Skills → Intermediate → Advanced → Specialization → Industry-Ready

   **Phase Structure Guidelines**:
   - **Phase 1 (Foundation)**: Basic syntax, fundamentals, environment setup, core concepts
   - **Phase 2 (Core Development)**: Building first applications, version control, basic projects
   - **Phase 3 (Intermediate)**: APIs, databases, authentication, state management
   - **Phase 4 (Advanced)**: System design, architecture patterns, performance optimization
   - **Phase 5 (Specialization)**: Domain-specific skills, advanced frameworks, microservices
   - **Phase 6 (Industry-Ready)**: Production deployment, CI/CD, monitoring, testing at scale, job preparation

2. **Projects (15-20 projects for complete learning journey)**:
   - Include 4-5 Beginner projects (simple, focused on basics)
   - Include 5-6 Intermediate projects (APIs, databases, authentication)
   - Include 4-5 Advanced projects (complex architecture, multiple services)
   - Include 3-4 Industry-Ready/Capstone projects (production-grade, portfolio-worthy)
   - Each project must have: title, level, description, skills, duration, features (5-8 features), learningOutcomes (3-5 outcomes)
   - Projects should progressively build complexity and introduce new concepts
   - Include real-world, production-grade projects that can be shown to employers
   - Cover different domains: CRUD apps, real-time features, payment integration, AI/ML integration, DevOps

3. **Resources (Comprehensive and Updated for 2025)**:
   - **YouTube Channels**: 8-12 best channels with variety (FreeCodeCamp, Traversy Media, Net Ninja, Web Dev Simplified, Fireship, ThePrimeagen, etc.)
   - **Courses**: 8-12 top courses (Udemy bestsellers, Coursera specializations, free YouTube playlists, boot camps)
   - **Documentation**: All official docs for main technologies, framework guides, API references
   - **Books**: 5-8 highly recommended books covering theory, practical skills, and career advice
   - **Communities**: 5-8 communities (Discord servers, Reddit communities, Slack groups, forums)
   - **Tools**: 10-15 essential tools (IDEs, extensions, AI assistants, testing tools, deployment platforms)
   - **Podcasts**: 3-5 relevant podcasts for staying updated
   - **Newsletters**: 3-5 newsletters for industry trends

4. **Learning Path Data (Detailed)**:
   - **Core Frameworks**: 5-8 frameworks to master
   - **Essential Tools**: 8-12 tools every professional should know
   - **Key Technologies**: 8-12 technologies for the role
   - **Certifications**: 3-5 valuable certifications
   - **Practice Websites**: 5-8 platforms with detailed descriptions (LeetCode, HackerRank, Frontend Mentor, etc.)

5. **Career Preparation (NEW - Critical for Industry-Ready)**:
   - **Resume Building**: 4-5 specific tips
   - **Interview Prep**: 6-8 areas to focus on
   - **Portfolio Guidance**: 5-6 actionable steps
   - **Networking Strategies**: 5-6 ways to build professional network
   - **Job Search Strategies**: 5-6 approaches to finding opportunities

6. **Industry Insights (NEW - Real-World Context)**:
   - **Current Trends**: 4-6 trends for 2025
   - **Salary Expectations**: Entry, mid, senior levels with context
   - **Career Paths**: 4-6 potential progression paths
   - **Company Types**: 4-5 considerations for choosing companies

7. **Content Quality & Depth**:
   - Use 2025 current frameworks and best practices
   - Include AI tools (Cursor, GitHub Copilot, ChatGPT, Claude, v0.dev, Bolt.new, etc.)
   - Modern stack preferences (Next.js 15, Vite, Bun, Deno, etc.)
   - Include DevOps, testing, security, and deployment practices in detail
   - Mention trending technologies (AI/ML integration, Edge computing, Serverless, Web3 if relevant)
   - Cover soft skills: communication, teamwork, problem-solving, code reviews
   - Include industry best practices: SOLID principles, clean code, documentation, testing

8. **Timeline (Realistic 18-24 month journey)**:
   - Total 18-24 months for complete beginner to industry-ready
   - Realistic time estimates per phase
   - Account for full-time vs part-time learning
   - Include buffer time for project building and job search

9. **Final Tips (Expanded)**:
   - Provide 10-15 actionable, specific tips
   - Cover learning strategies, career advice, and mindset
   - Include both technical and soft skill advice

10. **Output Format**:
    - Return ONLY the JSON object
    - No markdown code blocks
    - No additional text or explanations
    - Ensure valid JSON syntax
    - Use proper escaping for quotes and special characters

QUALITY CHECKLIST:
✓ Does the roadmap cover EVERY step from absolute beginner to industry-ready?
✓ Are there enough projects (15-20) to build a strong portfolio?
✓ Are phases granular enough with 5-10 items per section?
✓ Are there 6-8 phases covering the complete journey?
✓ Does it include career preparation and interview prep?
✓ Are all 2025 technologies and trends included?
✓ Is the timeline realistic (18-24 months)?
✓ Are resources comprehensive and up-to-date?`;

// ============================================================================
// FASTER JSON EXTRACTION
// ============================================================================
function extractJSON(content) {
  if (!content) throw new Error("Empty content");

  let text = content.trim();

  // Strip markdown
  if (text.startsWith('```')) {
    text = text.replace(/^```(?:json)?\s*/i, '').replace(/```\s*$/m, '').trim();
  }

  // Quick parse
  try {
    return JSON.parse(text);
  } catch {
    // Extract first JSON object
    const start = text.indexOf('{');
    const end = text.lastIndexOf('}');
    if (start !== -1 && end !== -1) {
      return JSON.parse(text.slice(start, end + 1));
    }
    throw new Error("No JSON found");
  }
}

// ============================================================================
// MINIMAL VALIDATION - Fast checks only
// ============================================================================
function validateRoadmap(data) {
  if (!data?.phases?.length) return { valid: false, error: "No phases" };
  if (!data.projects?.length) return { valid: false, error: "No projects" };
  if (!data.resources) return { valid: false, error: "No resources" };
  return { valid: true };
}

// ============================================================================
// HELPERS
// ============================================================================
function getClientIp(request) {
  return request.headers.get("x-forwarded-for")?.split(",")[0] || 
         request.headers.get("x-real-ip") || "unknown";
}

function errorResponse(message, status = 500) {
  return NextResponse.json(
    { error: message, success: false, timestamp: new Date().toISOString() },
    { status }
  );
}

// ============================================================================
// OPTIMIZED POST HANDLER - Maximum speed
// ============================================================================
export async function POST(request) {
  const startTime = Date.now();

  try {
    // 1. Parallel validation
    const [apiKey, body] = await Promise.all([
      Promise.resolve(process.env.OPENROUTER_API_KEY),
      request.json().catch(() => null)
    ]);

    if (!apiKey) return errorResponse("API not configured", 500);
    if (!body?.query) return errorResponse("Query required", 400);

    const query = body.query.trim();
    if (query.length > 2000) return errorResponse("Query too long", 400);

    // 2. Rate limit (fast)
    const ip = getClientIp(request);
    if (!checkRateLimit(ip)) {
      return errorResponse("Rate limit exceeded", 429);
    }

    // 3. CACHE CHECK - Instant return
    const cached = getCachedRoadmap(query);
    if (cached) {
      console.log(`⚡ Cache hit: ${Date.now() - startTime}ms`);
      return NextResponse.json({
        ...cached,
        metadata: {
          ...cached.metadata,
          cached: true,
          responseTime: `${Date.now() - startTime}ms`
        }
      });
    }

    // 4. OPTIMIZED API CALL
    console.log("🚀 Calling AI...");

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 45000); // 45s max

    const aiResponse = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json",
          "HTTP-Referer": process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
          "X-Title": "AI Roadmap Generator"
        },
        body: JSON.stringify({
          model: "openai/gpt-3.5-turbo", // Fast model
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            { role: "user", content: `Roadmap for: ${query}` }
          ],
          temperature: 0.7,
          max_tokens: 5000, // Reduced for speed
          top_p: 0.9
        }),
        signal: controller.signal
      }
    ).finally(() => clearTimeout(timeout));

    if (!aiResponse.ok) {
      const error = await aiResponse.json().catch(() => ({}));
      console.error(`API Error ${aiResponse.status}:`, error);

      const errors = {
        401: "Authentication failed",
        402: "Insufficient credits",
        429: "Rate limited",
        503: "Service unavailable"
      };

      return errorResponse(errors[aiResponse.status] || "AI error", aiResponse.status);
    }

    // 5. FAST PARSING
    const data = await aiResponse.json();
    const content = data.choices?.[0]?.message?.content;

    if (!content) return errorResponse("Empty response", 500);

    let roadmap;
    try {
      roadmap = extractJSON(content);
    } catch (e) {
      console.error("Parse error:", e);
      return errorResponse("Invalid AI response", 500);
    }

    // 6. QUICK VALIDATION
    const validation = validateRoadmap(roadmap);
    if (!validation.valid) {
      return errorResponse(validation.error, 500);
    }

    // 7. BUILD RESPONSE
    const result = {
      success: true,
      phases: roadmap.phases || [],
      projects: roadmap.projects || [],
      resources: {
        youtubeChannels: roadmap.resources?.youtubeChannels || [],
        courses: roadmap.resources?.courses || [],
        documentation: roadmap.resources?.documentation || [],
        books: roadmap.resources?.books || [],
        communities: roadmap.resources?.communities || [],
        tools: roadmap.resources?.tools || []
      },
      learningPathData: {
        coreFrameworks: roadmap.learningPathData?.coreFrameworks || [],
        essentialTools: roadmap.learningPathData?.essentialTools || [],
        keyTechnologies: roadmap.learningPathData?.keyTechnologies || [],
        certifications: roadmap.learningPathData?.certifications || [],
        practiceWebsites: roadmap.learningPathData?.practiceWebsites || []
      },
      timelineData: roadmap.timelineData || [],
      finalTips: roadmap.finalTips || [],
      metadata: {
        generatedAt: new Date().toISOString(),
        responseTime: `${Date.now() - startTime}ms`,
        model: "gpt-3.5-turbo",
        cached: false
      }
    };

    // 8. CACHE ASYNCHRONOUSLY (non-blocking)
    setImmediate(() => cacheRoadmap(query, result));

    console.log(`✅ Generated: ${Date.now() - startTime}ms`);

    return NextResponse.json(result, {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "private, max-age=86400", // 24h browser cache
        "X-Response-Time": `${Date.now() - startTime}ms`
      }
    });

  } catch (error) {
    console.error("Error:", error);
    return errorResponse("Internal error", 500);
  }
}

export async function GET() {
  return NextResponse.json(
    { error: "Use POST method", usage: 'POST { "query": "your goal" }' },
    { status: 405 }
  );
}

// Next.js config
export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60;