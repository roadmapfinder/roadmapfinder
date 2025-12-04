
import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function POST(request) {
  try {
    const { topic, level, duration } = await request.json();

    // Validate input
    if (!topic || topic.trim().length === 0) {
      return NextResponse.json(
        { error: "Topic is required" },
        { status: 400 }
      );
    }

    // Use Gemini 1.5 Pro for best results
    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-pro",
      generationConfig: {
        temperature: 0.7,
        topP: 0.95,
        topK: 40,
        maxOutputTokens: 8192,
      },
    });

    const prompt = `You are an expert tech career advisor and curriculum designer. Generate a comprehensive, industry-ready learning roadmap for "${topic}".

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

    const result = await model.generateContent(prompt);
    const response = await result.response;
    let text = response.text();

    // Clean the response to extract JSON
    text = text.trim();
    
    // Remove markdown code blocks if present
    if (text.startsWith("```json")) {
      text = text.replace(/```json\n?/g, "").replace(/```\n?/g, "");
    } else if (text.startsWith("```")) {
      text = text.replace(/```\n?/g, "");
    }

    // Parse JSON
    let roadmapData;
    try {
      roadmapData = JSON.parse(text);
    } catch (parseError) {
      console.error("JSON Parse Error:", parseError);
      console.error("Raw text:", text);
      return NextResponse.json(
        { error: "Failed to parse AI response. Please try again." },
        { status: 500 }
      );
    }

    // Validate structure
    if (!roadmapData.phases || !Array.isArray(roadmapData.phases)) {
      return NextResponse.json(
        { error: "Invalid roadmap structure received" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      roadmap: roadmapData,
      generatedAt: new Date().toISOString(),
    });

  } catch (error) {
    console.error("API Error:", error);
    
    if (error.message?.includes("API key")) {
      return NextResponse.json(
        { error: "API configuration error. Please check your Gemini API key." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: "Failed to generate roadmap. Please try again." },
      { status: 500 }
    );
  }
}
