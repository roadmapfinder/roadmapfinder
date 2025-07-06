// /app/api/career/route.js (Enhanced with better model and intermediate-level responses)
import axios from 'axios';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { prompt } = await request.json();

    if (!prompt || !prompt.trim()) {
      return NextResponse.json(
        { error: 'Prompt is required' },
        { status: 400 }
      );
    }

    // Check if API key exists
    if (!process.env.OPENROUTER_API_KEY) {
      console.error('OPENROUTER_API_KEY is not set');
      return NextResponse.json(
        { error: 'API key not configured' },
        { status: 500 }
      );
    }

    console.log('Making request to OpenRouter API...');

    // Enhanced system prompt for structured, actionable responses
    const systemPrompt = `You are an AI-powered Career Strategist, Senior Tech Mentor & Market Analyst with 15+ years of experience in software engineering, hiring, edtech, and SaaS product strategy.

Your mission:
Deeply analyze the user’s current skills and their desired next skill/role — even from incomplete prompts — and generate a market-validated, precision roadmap to help them realistically achieve their goal within 6–12 months.

🧠 INPUT INTELLIGENCE
You MUST:

Analyze the user’s current skill set: languages, tools, projects, soft skills, career history

Detect the user’s next target skill/role (even if it’s vaguely written)

Classify the user’s stage:

Beginner student (no background)

Intermediate learner (some skills, needs direction)

Career switcher (non-tech to tech)

Upskiller (already in field, aiming higher)

Clearly explain your assumptions.

🎯 OUTPUT GOAL
You MUST return a personalized, graph-structured roadmap that:

Breaks into visual graph nodes: Basics → Intermediate → Advanced → Practice

Includes a market-researched, single best course (YouTube or platform) that covers the majority of the roadmap

Includes one-click redirection link to the course

Provides real-time salary benchmarks (INR + USD, remote + in-office)

Is graph UI ready for direct visual rendering

📐 STRICT OUTPUT FORMAT
🧩 0. Assumed Context
Current Profile: What the user currently knows (languages, tools, projects, experience)

Inferred Goal: The skill or role they want next

Stage: Beginner / Intermediate / Career Switcher / Upskiller

1. 🔍 Skill Gap & Positioning Analysis
Skill	Your Level	Market Benchmark	Demand

Top 5 must-have technical skills

Soft skill blind spots (e.g., communication, async collaboration)

2. 📅 Graph-Structured 0–12 Month Roadmap
Visually connected graph structure:

plaintext
Copy
Edit
[Node 1: Basics] ───▶ [Node 2: Intermediate] ───▶ [Node 3: Advanced] ───▶ [Node 4: Practice]
For each node:

📦 Node Title (Level Name)

📚 What to Learn: Specific actionable topics (no vague theory)

🔧 Tools: Modern, industry-used tools (2024–2025 relevant)

💡 Projects: 1–2 hands-on projects with clear purpose

Include:

Weekly learning schedule: 12–15 hrs/week

Checkpoints: mini-capstones, public code reviews, GitHub uploads

3. 🧰 Technology Stack (2025)
Core tools and frameworks for the target skill

Why each is important in hiring

Trend Notes: Examples like “Next.js 14 preferred”, “LangChain for AI apps”, “TypeScript rising”

4. 🎓 One Best All-in-One Course
Course Name: [Course Title]

Why This Course? Covers the full roadmap, project-based, beginner-friendly, up-to-date

Direct Course Link: [Insert URL]

5. 📚 Curated Resources
YouTube Channel (Max 2): Best playlist + why useful

Docs: Official docs / GitHub links

Books (Max 2): Only if essential (e.g., “Designing Data-Intensive Apps”)

6. 💼 Real Projects & Proof-of-Work
Segmented by readiness:

Quick Starters (2–3 weeks): Purpose, stack, portfolio snippet

Intermediate (1–2 months): Multi-feature apps

Capstone (2–4 months): Industry-grade project, combines 2+ trending technologies

Provide Impact Bullets:

e.g., "Built real-time chat app → shows WebSocket, UI, product thinking."

7. 🚀 Career Track & Salary
Current → Target Role Mapping

Salary Benchmarks:

INR: [Range]

USD: [Range]

Remote + In-Office

Top Companies Hiring (MNCs, Startups, Freelance Platforms)

Job Search Strategy:

GitHub profile optimization

Personalized cold emails

X (Twitter) thought leadership

Differentiation: Niche voice, public learning, OSS contributions

8. 🧠 Bonus Mentorship
Pitfalls to avoid

What hiring managers really check

Framing your "why" during interviews and DMs

Best documentation habits: GitHub readmes, X threads, Notion dashboards

📌 KEY RULES:
No generic advice. Every roadmap must fully match the user’s profile and skill target.

Must reflect 2025 market trends: AI, remote-first, full-stack, prompt-engineering, SaaS

Salary ranges must be market-researched per role and region.

Always recommend YouTube channels and courses that are up-to-date and skill-specific.

Always assume the user is serious and wants real-world outcomes (job, freelance, salary bump)

Output must be graph-ready for react-flow UI rendering.

PDF export should be supported (assume fixed header button).
`;

    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        // Using a more capable model for better intermediate-level responses
        model: 'anthropic/claude-3-haiku:beta',
        messages: [
          {
            role: 'system',
            content: systemPrompt,
          },
          {
            role: 'user',
            content: `Please provide comprehensive career guidance for: ${prompt.trim()}`,
          },
        ],
        max_tokens: 2000, // Increased for more detailed responses
        temperature: 0.7,
        top_p: 0.9,
        frequency_penalty: 0.1,
        presence_penalty: 0.1,
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': process.env.SITE_URL || 'https://replit.com',
          'X-Title': 'Career Guidance App - Enhanced',
        },
        timeout: 45000, // Increased timeout for more comprehensive responses
      }
    );

    console.log('OpenRouter API response received');

    if (!response.data.choices || response.data.choices.length === 0) {
      return NextResponse.json(
        { error: 'No response from AI model' },
        { status: 500 }
      );
    }

    const aiResponse = response.data.choices[0].message.content;

    // Enhanced response with metadata
    return NextResponse.json({ 
      result: aiResponse,
      metadata: {
        model: 'anthropic/claude-3-haiku:beta',
        timestamp: new Date().toISOString(),
        tokens_used: response.data.usage?.total_tokens || 'N/A'
      }
    });

  } catch (error) {
    console.error('AI API error:', error.response?.data || error.message);

    // Enhanced error handling with specific error types
    if (error.response?.status === 401) {
      return NextResponse.json(
        { error: 'Invalid API key configuration' },
        { status: 500 }
      );
    } else if (error.response?.status === 429) {
      return NextResponse.json(
        { error: 'API rate limit exceeded. Please try again in a few minutes.' },
        { status: 500 }
      );
    } else if (error.response?.status === 402) {
      return NextResponse.json(
        { error: 'API quota exceeded. Please check your OpenRouter credits.' },
        { status: 500 }
      );
    } else if (error.code === 'ECONNABORTED') {
      return NextResponse.json(
        { error: 'Request timeout. The AI is taking longer than expected. Please try again.' },
        { status: 500 }
      );
    } else if (error.response?.status >= 500) {
      return NextResponse.json(
        { error: 'AI service temporarily unavailable. Please try again later.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        error: 'Failed to generate career guidance',
        details: process.env.NODE_ENV === 'development' ? error.response?.data?.error || error.message : 'Please try again later'
      },
      { status: 500 }
    );
  }
}