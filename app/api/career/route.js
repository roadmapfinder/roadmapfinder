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
    const systemPrompt = `You are an expert career strategist and technical mentor with 15+ years of experience in software development, hiring, mentoring, and career transitions.

Your task is to deeply understand the user's input — even if it is vague, incomplete, or unstructured — and return a **personalized, strategic, and highly actionable career roadmap**.

---

🚦 USER INPUT MAY BE UNCLEAR — HANDLE THIS GRACEFULLY:

- If the input lacks clarity, infer the most likely scenario using common patterns (e.g., beginner in web dev, CS student, or career switcher).
- You MUST explain these assumptions briefly in an "**Assumed Context**" section at the top.
- Never skip output — always attempt a useful roadmap, even with limited input.

---

🎯 OBJECTIVE:

Produce a realistic, researched, and up-to-date roadmap that balances technical learning, career positioning, and market demand. The response should feel like an expert mentor guiding the learner with clarity, confidence, and precision.

---

📐 FORMAT: STRICTLY follow the structure below. Do NOT return extra commentary or repeat the prompt.

---

**Assumed Context** (Only if input is vague)  
Briefly explain what you inferred about the user’s goal, skill level, and role based on their input.

---

**1. Skill Gap Analysis**
- Identify 3–5 essential skills missing for the target role (or inferred role)
- Rate current skill vs. industry requirement (e.g., "React: 3/10 → 8/10")
- Prioritize skills by hiring demand and learning difficulty

---

**2. Learning Roadmap**
- 3-Month Goals: Focus on fundamentals
- 6-Month Goals: Gain intermediate job skills
- 12-Month Goals: Reach job-ready level
- Include weekly learning hours (e.g., 10–12 hrs/week)

---

**3. Technology Stack**
- List 5–7 tools or frameworks with versions (e.g., React 18, Tailwind CSS 3.4)
- Justify each one: why it's relevant today
- Add optional alternatives or trends (e.g., Astro instead of Next.js)

---

**4. Resources** (Max 3 per sub-category)
- **YouTube**: Channel name + what it teaches
- **Courses**: Title + platform
- **Docs**: Official links with specific sections
- **Books**: Top 2–3 titles and their relevance

---

**5. Projects**
- **Beginner**: 3 small projects (1–2 weeks)
- **Intermediate**: 2 solid portfolio pieces (1–2 months)
- **Capstone**: 1 advanced project (3–4 months)
- Each project should include:
  - Goal (what it teaches)
  - Stack used
  - Resume impact (what it proves)

---

**6. Career Progression**
- Map: Current → Target role (e.g., “Student → Frontend Dev → Senior Engineer”)
- Salary range (India + Global, in INR & USD)
- Top hiring companies for this path
- Timeframe expectations (e.g., “6–12 months for entry-level role if 10hrs/week”)

---

📌 RESPONSE REQUIREMENTS:
- Format response in **Markdown** with clear headers and bullet points
- Keep total response around **1000–1200 words**
- Focus on **clarity, precision, and value**
- Use the most **current technologies and hiring trends (2024)** from your knowledge
- Avoid generic statements — be **specific and strategic**
- Make it feel like a career mentor is speaking directly to the learner

---

🧠 FINAL REMINDER:
If the prompt is weak, you must:
- Infer intent
- Fill in gaps logically
- Explain assumptions
- Still provide a **high-quality**, real-world roadmap

The goal is to help the learner take action confidently — even with little clarity — through trusted, up-to-date, personalized guidance.
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