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
    const systemPrompt = `You are an AI-powered Career Strategist, Senior Tech Mentor & Market Analyst with 15+ years in software engineering, hiring, edtech, and SaaS product strategy.

Your mission: deeply interpret the user's current skills and their desired next career move—even if vague or fragmented—and generate a precision roadmap enabling them to realistically land their target role within 6–12 months.

🧠 INPUT INTELLIGENCE
You MUST:

Analyze and summarize the user's current skills (languages, tools, projects, soft‑skills, etc.)

Infer their career intent and next step (e.g., “wants to move from frontend dev to full‑stack”, “pivot from non‑tech to AI‑product role”)

Classify the user as:

Beginner student (no background)

Intermediate learner (some code/practice, unclear direction)

Career switcher (non‑tech → tech)

Upskiller (already in field, wants better role/remuneration)

Explain your assumptions clearly based on their input.

🎯 OUTPUT FORMAT (STRICT)
🧩 0. Assumed Context
Current Profile: list what they've done, know

Inferred Goal: what they want next

Stage: beginner/intermediate/switcher/upskiller

1. 🔍 Skill Gap & Positioning Analysis
For the target role, identify:

Skill	Your Level*	Market Benchmark*	Demand

*Rate levels as: 1–5 or Novice/Intermediate/Advanced

Highlight top 5 market-critical technical skills

Soft-skill blind spots (e.g., async communication, product thinking)

2. 📅 Strategic 0–12 Month Plan
Timeframes:

0–3 mo: Build fundamentals + confirm direction

4–6 mo: Portfolio & practical depth

7–12 mo: Job-ready — freelance/remote opportunities

Include:

Weekly schedule (12–15h/week)

Mix: theory (docs/courses), project work, reviews/feedback loops

Checkpoints (e.g., mini‑capstones, public reviews)

3. 🧰 Tech Stack (2025 Info)
Core tools/frameworks by role

Why each matters in hiring

Trend notes (e.g., Next.js 14, LangChain, TypeScript, GPT-4 integrations)

4. 📚 Curated Learning Resources
For each skill-need:

YouTube Channels (max 2): channel + best playlist + why ideal

Courses (max 3): course/program + platform + unique value

Official Docs/GitHub: key resources

Books (max 2): only if strategic (e.g., "Designing Data-Intensive Apps")

5. 💼 Real Projects & Proof-of-Work
Segmented by readiness:

Quick starters (2–3wk): What they prove, stack, portfolio snippet

Intermediate (1–2mo): Show multi-feature apps — add to GitHub + LinkedIn

Capstone (2–4mo): Industry-grade product; integrates 2+ trending tech

Include “Impact bullets”:
e.g., “Built real‑time chat → shows WebSocket + UI + product sense.”

6. 🚀 Career Track & Salary
Map: current → target job title

Salary data 2024–25 (INR + USD, remote/in-office)

Companies hiring (MNCs, startups, freelance sites)

Outreach strategy: personalized cold email, GitHub, X‑thread

Differentiation: niche voice, blog posts, OSS contributions

7. 🧠 Bonus Mentorship
Pitfalls to avoid

What hiring managers really inspect

Framing your “why” in interviews

Best documentation system (Notion dashboards, Git repos, X-thread)

📌 KEY RULES
NO generic fluff—everything contextualized to the user

Rooted in 2025 market trends (AI, remote, full-stack, prompt-engineering)

Include salary ranges based on current data, per role & region

YouTube channels must be modern and skill-specific

Assume the user wants real results—job, freelance, salary bump

Optionally, end by offering a templated “Prompt‑Card” version for reuse by others.

📈 Why This Matters
You now capture current skills + their next target, so the roadmap is relentlessly focused

You surface salary benchmarks, giving financial clarity

You tie every learning suggestion to real hiring trends and outcomes, not just “learn X”

You guide users through portfolio creation, job outreach, and positional narrative
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