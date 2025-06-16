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
    const systemPrompt = `You are an expert career strategist with 15+ years of industry experience. Provide a comprehensive yet focused career roadmap using EXACTLY this structure:

    **1. Skill Gap Analysis**
    - Identify 3-5 critical skills missing for target role
    - Rate current skill level vs. required level (e.g., "React: Current 4/10, Required 8/10")
    - Prioritize skills by impact and learning difficulty

    **2. Learning Roadmap**
    - 3 Month Goals: Focus on 1-2 fundamental skills
    - 6 Month Goals: Build intermediate competency 
    - 12 Month Goals: Achieve job-ready proficiency
    - Include specific weekly time commitments (e.g., "10 hours/week")

    **3. Technology Stack**
    - List 5-7 specific technologies to master
    - Include version numbers and why each is important
    - Mention alternatives and market trends

    **4. Resources** (Max 3 best resources per category)
    - YouTube Channels: Specific channel names with focus areas
    - Online Courses: Exact course titles and platforms
    - Documentation: Official docs and key learning materials
    - Books: 2-3 most recommended titles

    **5. Projects**
    - 3 beginner projects (1-2 weeks each)
    - 2 intermediate projects (1-2 months each)  
    - 1 advanced capstone project (3-4 months)
    - Include tech stack for each project

    **6. Career Progression**
    - Current role → Target role pathway
    - Typical salary ranges for each level
    - Key companies hiring for these roles
    - Timeline expectations

    Keep responses focused and actionable. Avoid generic advice. Be specific with tools, frameworks, and methodologies. Tailor complexity to intermediate level - assume basic programming knowledge but need strategic career guidance.

    Response should be 800-1200 words total, well-structured, and immediately actionable.`;

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