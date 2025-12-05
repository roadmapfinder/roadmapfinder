// app/api/ai-roadmap/route.js
import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

// ============================================
// CUSTOM ERROR CLASSES
// ============================================
class APIError extends Error {
  constructor(statusCode, message, isOperational = true) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    Object.setPrototypeOf(this, APIError.prototype);
  }
}

class ValidationError extends APIError {
  constructor(message) {
    super(400, message);
  }
}

class ExternalAPIError extends APIError {
  constructor(message) {
    super(502, message);
  }
}

// ============================================
// VALIDATION
// ============================================
function validateInput(data) {
  if (!data.topic || typeof data.topic !== "string") {
    throw new ValidationError("Topic is required and must be a string");
  }

  if (data.topic.trim().length === 0) {
    throw new ValidationError("Topic cannot be empty");
  }

  if (data.topic.length > 200) {
    throw new ValidationError("Topic must be less than 200 characters");
  }

  if (data.level && typeof data.level !== "string") {
    throw new ValidationError("Level must be a string");
  }

  if (data.duration && typeof data.duration !== "string") {
    throw new ValidationError("Duration must be a string");
  }
}

// ============================================
// GEMINI INITIALIZATION
// ============================================
function initializeGemini() {
  // ✅ FIXED: Removed .local - this was the main bug!
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    throw new APIError(
      500,
      "GEMINI_API_KEY is not configured in environment variables"
    );
  }

  return new GoogleGenerativeAI(apiKey);
}

// ============================================
// JSON CLEANING UTILITY
// ============================================
function cleanJSONResponse(text) {
  let cleaned = text.trim();

  // Remove markdown code blocks
  if (cleaned.startsWith("```json")) {
    cleaned = cleaned.replace(/```json\n?/g, "").replace(/```\n?$/g, "");
  } else if (cleaned.startsWith("```")) {
    cleaned = cleaned.replace(/```\n?/g, "");
  }

  // Remove any leading/trailing whitespace again
  cleaned = cleaned.trim();

  return cleaned;
}

// ============================================
// ROADMAP VALIDATION
// ============================================
function validateRoadmapStructure(data) {
  if (!data || typeof data !== "object") {
    throw new ExternalAPIError("Invalid response format from AI");
  }

  if (!data.title || typeof data.title !== "string") {
    throw new ExternalAPIError("Roadmap missing valid title");
  }

  if (!Array.isArray(data.phases)) {
    throw new ExternalAPIError("Roadmap missing phases array");
  }

  if (data.phases.length === 0) {
    throw new ExternalAPIError("Roadmap has no phases");
  }

  // Validate phase structure
  for (const phase of data.phases) {
    if (typeof phase.id !== "number") {
      throw new ExternalAPIError("Phase missing valid id");
    }
    if (!Array.isArray(phase.sections)) {
      throw new ExternalAPIError("Phase missing sections array");
    }
  }

  return true;
}

// ============================================
// PROMPT GENERATOR
// ============================================
function generatePrompt(topic, level, duration) {
  return `You are an expert tech career advisor and curriculum designer. Generate a comprehensive, industry-ready learning roadmap for "${topic}".

CRITICAL REQUIREMENTS:
1. The roadmap must be structured from beginner to industry/expert level
2. Include practical, hands-on projects for each phase
3. Focus on 2025 industry standards and most in-demand skills
4. Be specific with technologies, tools, and frameworks
5. Include time estimates and difficulty levels
6. Output MUST be valid JSON only, no markdown or extra text

USER PREFERENCES:
- Skill Level: ${level || "beginner to advanced"}
- Target Duration: ${duration || "12-24 months"}

OUTPUT FORMAT (STRICT JSON):
{
  "title": "${topic} Mastery Roadmap",
  "subtitle": "2025 Edition - Beginner to Industry Expert",
  "totalDuration": "estimated months",
  "phases": [
    {
      "id": 0,
      "title": "Phase Title",
      "subtitle": "Duration (e.g., 0-3 months)",
      "description": "Brief phase description focusing on outcomes",
      "color": "bg-[color]-500",
      "sections": [
        {
          "title": "Section Title with Emoji",
          "items": [
            "Specific skill/topic with practical context",
            "Another specific item with tools mentioned"
          ]
        }
      ]
    }
  ]
}

CONTENT GUIDELINES:
1. Phase 0: Foundations (prerequisites, basics)
2. Phase 1-2: Core Skills (essential technologies)
3. Phase 3-4: Advanced Topics (production-ready skills)
4. Phase 5+: Specialization & Industry Readiness
5. Each phase should have 3-5 sections
6. Each section should have 3-5 specific items
7. Include project sections with ✅ emoji for hands-on practice
8. Use emojis to make sections visually appealing
9. Colors: bg-gray-500, bg-blue-500, bg-green-500, bg-yellow-500, bg-purple-500, bg-orange-500, bg-red-500, bg-indigo-500
10. Be extremely specific - mention exact tools, frameworks, versions when relevant

EXAMPLE SECTION STRUCTURE:
{
  "title": "🐍 Python Fundamentals",
  "items": [
    "Python 3.11+ syntax, data structures (lists, dicts, sets)",
    "OOP principles: classes, inheritance, polymorphism",
    "File I/O, error handling, decorators",
    "Virtual environments (venv, pip, requirements.txt)"
  ]
}

PROJECTS SECTION EXAMPLE:
{
  "title": "🚀 Foundation Projects",
  "items": [
    "✅ Build a CLI task manager with SQLite database",
    "✅ Create a web scraper using BeautifulSoup + requests",
    "✅ RESTful API with Flask + JWT authentication"
  ]
}

Now generate the complete roadmap for "${topic}". Return ONLY valid JSON, nothing else.`;
}

// ============================================
// MAIN API HANDLER
// ============================================
export async function POST(request) {
  try {
    // Parse request body
    const body = await request.json();

    // Validate input
    validateInput(body);

    const { topic, level, duration } = body;

    // Initialize Gemini
    const genAI = initializeGemini();

    // Configure model
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash-exp",
      generationConfig: {
        temperature: 0.7,
        topP: 0.95,
        topK: 40,
        maxOutputTokens: 8192,
      },
    });

    // Generate prompt
    const prompt = generatePrompt(topic, level, duration);

    // Call Gemini API
    const result = await model.generateContent(prompt);
    const response = await result.response;
    let text = response.text();

    // Clean the response
    const cleanedText = cleanJSONResponse(text);

    // Parse JSON
    let roadmapData;
    try {
      roadmapData = JSON.parse(cleanedText);
    } catch (parseError) {
      console.error("JSON Parse Error:", parseError);
      console.error("Cleaned text:", cleanedText.substring(0, 500));
      throw new ExternalAPIError(
        "AI returned invalid JSON format. Please try again."
      );
    }

    // Validate roadmap structure
    validateRoadmapStructure(roadmapData);

    // Return success response
    return NextResponse.json(
      {
        success: true,
        roadmap: roadmapData,
        generatedAt: new Date().toISOString(),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("API Error:", error);

    // Handle known errors
    if (error instanceof APIError) {
      return NextResponse.json(
        {
          success: false,
          error: error.message,
        },
        { status: error.statusCode }
      );
    }

    // Handle JSON parsing errors from request
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid JSON in request body",
        },
        { status: 400 }
      );
    }

    // Handle Gemini API errors
    if (error.message?.includes("API key")) {
      return NextResponse.json(
        {
          success: false,
          error: "API configuration error. Check your GEMINI_API_KEY.",
        },
        { status: 500 }
      );
    }

    // Generic error handler
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred. Please try again.",
        ...(process.env.NODE_ENV === "development" && {
          details: error.message,
        }),
      },
      { status: 500 }
    );
  }
}

// ============================================
// OPTIONAL: GET HANDLER FOR HEALTH CHECK
// ============================================
export async function GET() {
  return NextResponse.json(
    {
      status: "healthy",
      endpoint: "/api/ai-roadmap",
      method: "POST",
      timestamp: new Date().toISOString(),
    },
    { status: 200 }
  );
}