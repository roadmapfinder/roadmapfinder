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

    // Enhanced system prompt for intermediate-level responses
    const systemPrompt = `You are an expert career counselor and technical mentor with deep industry knowledge. Provide comprehensive, intermediate-to-advanced level career guidance that includes:

1. **Skill Gap Analysis**: Identify specific technical and soft skills needed for advancement
2. **Learning Roadmap**: Create a structured, time-bound learning path (3-6-12 month milestones)
3. **Technology Stack Recommendations**: Suggest modern, industry-relevant technologies
4. **Free Learning Resources**: Provide specific YouTube channels, courses, and platforms
5. **Project Ideas**: Suggest hands-on projects to build portfolio
6. **Industry Insights**: Share market trends and in-demand skills
7. **Career Progression**: Outline typical career paths and salary expectations
8. **Networking Tips**: Suggest communities and networking strategies

Format your response with clear sections and actionable advice. Be specific with technologies, frameworks, and methodologies. Focus on practical, implementable steps rather than generic advice.

Tailor the complexity to intermediate level - assume the user has basic knowledge but needs guidance on advanced concepts and career strategy.`;

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