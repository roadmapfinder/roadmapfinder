// app/api/search-resources/route.js
import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// YouTube API configuration
const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
const YOUTUBE_SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search';
const YOUTUBE_VIDEOS_URL = 'https://www.googleapis.com/youtube/v3/videos';

/**
 * Calculate video quality score (optimized)
 */
function calculateVideoScore(video) {
  const views = parseInt(video.viewCount || 0);
  const likes = parseInt(video.likeCount || 0);
  const duration = parseDuration(video.duration);

  // Stricter quality filters
  const engagementRate = views > 0 ? likes / views : 0;
  const viewScore = Math.log10(views + 1);
  const engagementScore = engagementRate * 8000;

  // Prefer comprehensive courses (30min-4hr)
  const durationScore = duration >= 30 && duration <= 240 ? 1.5 : 
                       duration >= 10 && duration <= 360 ? 1 : 0.3;

  // Strong recency preference
  const publishDate = new Date(video.publishedAt);
  const monthsOld = (Date.now() - publishDate.getTime()) / (1000 * 60 * 60 * 24 * 30);
  const recencyScore = monthsOld < 12 ? 1.5 : monthsOld < 24 ? 1 : 0.5;

  return (viewScore * 0.25) + (engagementScore * 0.35) + (durationScore * 0.25) + (recencyScore * 0.15);
}

/**
 * Parse ISO 8601 duration to minutes
 */
function parseDuration(duration) {
  const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!match) return 0;
  const hours = parseInt(match[1] || 0);
  const minutes = parseInt(match[2] || 0);
  const seconds = parseInt(match[3] || 0);
  return hours * 60 + minutes + seconds / 60;
}

/**
 * Search YouTube videos - OPTIMIZED for speed and precision
 */
async function searchYouTubeVideos(query, language, formats) {
  try {
    // Build PRECISE search query
    let searchQuery = query;

    // Add language and format specificity
    if (language === 'hindi') {
      searchQuery += ' hindi';
    }

    // Add course-specific keywords for better targeting
    searchQuery += ' complete course tutorial full';

    // Determine search parameters
    const searchParams = new URLSearchParams({
      part: 'snippet',
      q: searchQuery,
      type: 'video',
      maxResults: 8,
      order: formats.latestVideo ? 'date' : 'relevance',
      videoDuration: 'long',
      videoDefinition: 'high',
      relevanceLanguage: language === 'hindi' ? 'hi' : 'en',
      key: YOUTUBE_API_KEY,
    });

    // Parallel fetch for speed
    const searchResponse = await fetch(`${YOUTUBE_SEARCH_URL}?${searchParams}`, {
      signal: AbortSignal.timeout(5000)
    });

    if (!searchResponse.ok) {
      const errorData = await searchResponse.json();
      throw new Error(`YouTube API Error: ${errorData.error?.message || 'Unknown error'}`);
    }

    const searchData = await searchResponse.json();

    if (!searchData.items || searchData.items.length === 0) {
      return [];
    }

    // Get video IDs
    const videoIds = searchData.items.map(item => item.id.videoId).join(',');

    // Fetch detailed video info with timeout
    const videoParams = new URLSearchParams({
      part: 'snippet,contentDetails,statistics',
      id: videoIds,
      key: YOUTUBE_API_KEY,
    });

    const videoResponse = await fetch(`${YOUTUBE_VIDEOS_URL}?${videoParams}`, {
      signal: AbortSignal.timeout(5000)
    });

    if (!videoResponse.ok) {
      throw new Error('Failed to fetch video details');
    }

    const videoData = await videoResponse.json();

    // Format and filter videos
    const videos = videoData.items
      .map(video => ({
        id: video.id,
        title: video.snippet.title,
        description: video.snippet.description,
        thumbnail: video.snippet.thumbnails.high.url,
        channelTitle: video.snippet.channelTitle,
        publishedAt: video.snippet.publishedAt,
        duration: video.contentDetails.duration,
        viewCount: parseInt(video.statistics.viewCount || 0),
        likeCount: parseInt(video.statistics.likeCount || 0),
        commentCount: parseInt(video.statistics.commentCount || 0),
        url: `https://www.youtube.com/watch?v=${video.id}`,
        qualityScore: calculateVideoScore({
          viewCount: video.statistics.viewCount,
          likeCount: video.statistics.likeCount,
          commentCount: video.statistics.commentCount,
          duration: video.contentDetails.duration,
          publishedAt: video.snippet.publishedAt
        })
      }))
      // Filter out low-quality videos
      .filter(video => {
        const duration = parseDuration(video.duration);
        return video.viewCount > 1000 &&
               duration >= 10 &&
               video.qualityScore > 0.5;
      })
      // Sort by quality and take top 2
      .sort((a, b) => b.qualityScore - a.qualityScore)
      .slice(0, 2);

    return videos;
  } catch (error) {
    console.error('Error searching YouTube:', error);
    throw error;
  }
}

/**
 * Generate AI summary - OPTIMIZED for speed
 */
async function generateAISummary(query, videos, language) {
  try {
    const model = genAI.getGenerativeModel({ 
      model: 'gemini-1.5-flash',
      generationConfig: {
        maxOutputTokens: 400,
        temperature: 0.7,
      }
    });

    // Shortened video summaries for faster processing
    const videoSummaries = videos.map((video, idx) => 
      `Video ${idx + 1}: "${video.title}" by ${video.channelTitle}
Views: ${video.viewCount.toLocaleString()} | Duration: ${Math.round(parseDuration(video.duration))} min`
    ).join('\n');

    const prompt = `Analyze these YouTube courses for "${query}":

${videoSummaries}

Provide in ${language === 'hindi' ? 'Hinglish' : 'English'}:
1. Brief overview (2 sentences)
2. Key topics (3-4 points)
3. Learning path suggestion (1 sentence)

Keep it concise and actionable.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error generating AI summary:', error);
    return null;
  }
}

/**
 * Generate course outlines - OPTIMIZED
 */
async function generateCourseOutlines(videos) {
  try {
    const model = genAI.getGenerativeModel({ 
      model: 'gemini-1.5-flash',
      generationConfig: {
        maxOutputTokens: 150,
        temperature: 0.5,
      }
    });

    // Process all videos in parallel for speed
    const outlinePromises = videos.map(async (video) => {
      try {
        const prompt = `Video: "${video.title}"
Description: ${video.description.substring(0, 300)}

List 4-5 main topics covered (comma-separated, concise):`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        return {
          videoId: video.id,
          outline: response.text().trim()
        };
      } catch (error) {
        console.error(`Outline error for ${video.id}:`, error);
        return { videoId: video.id, outline: null };
      }
    });

    const outlines = await Promise.all(outlinePromises);

    // Map outlines
    const outlineMap = {};
    outlines.forEach(item => {
      if (item.outline) {
        outlineMap[item.videoId] = item.outline;
      }
    });

    return outlineMap;
  } catch (error) {
    console.error('Error generating course outlines:', error);
    return {};
  }
}

/**
 * Generate structured documentation from video content
 */
async function generateDocumentation(video, language) {
  try {
    const model = genAI.getGenerativeModel({ 
      model: 'gemini-1.5-pro',
      generationConfig: {
        maxOutputTokens: 3000,
        temperature: 0.4,
      }
    });

    const prompt = `You are creating comprehensive course documentation for: "${video.title}" by ${video.channelTitle}

Video Description: ${video.description}

Create a detailed, well-structured course documentation in ${language === 'hindi' ? 'Hinglish (mix of Hindi and English)' : 'English'} following this EXACT structure:

1. Course Overview (2-3 paragraphs explaining what the course covers and who it's for)
2. Estimated Breakdown of Lessons/Modules (analyze the video description and create 6-10 main lessons/modules with:
   - Lesson number and title
   - 3-5 bullet points of subtopics covered)
3. Benefits (5-7 key learning outcomes)
4. Meta Information (instructor, platform, duration, level, includes)

Make it professional, detailed, and educational. Use proper markdown-style formatting with headers and bullet points.
Focus on extracting real learning content and structure from the video description.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error generating documentation:', error);
    return null;
  }
}

/**
 * Main API handler - OPTIMIZED
 */
export async function POST(request) {
  const startTime = Date.now();

  try {
    const body = await request.json();
    const { query, language, formats } = body;

    // Quick validation
    if (!query?.trim()) {
      return NextResponse.json(
        { error: 'Query is required' },
        { status: 400 }
      );
    }

    // Validate API keys
    if (!YOUTUBE_API_KEY || !process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: 'API keys not configured' },
        { status: 500 }
      );
    }

    console.log(`🔍 Searching: "${query}" (${language})`);

    // Search YouTube (fastest step)
    const videos = await searchYouTubeVideos(query, language, formats);

    if (videos.length === 0) {
      return NextResponse.json({
        videos: [],
        aiSummary: `No quality courses found for "${query}". Try different keywords.`,
        responseTime: `${Date.now() - startTime}ms`
      });
    }

    console.log(`✅ Found ${videos.length} videos in ${Date.now() - startTime}ms`);

    // Check if documentation format is requested
    if (formats.documentation) {
      console.log('📚 Generating documentation...');

      // Generate documentation for all videos in parallel
      const documentationPromises = videos.map(video => 
        generateDocumentation(video, language)
      );

      const documentations = await Promise.all(documentationPromises);

      // Combine videos with their documentation
      const videosWithDocumentation = videos.map((video, index) => ({
        ...video,
        documentation: documentations[index]
      }));

      const responseTime = Date.now() - startTime;
      console.log(`⚡ Documentation generated in: ${responseTime}ms`);

      return NextResponse.json({
        query,
        language,
        videos: videosWithDocumentation,
        hasDocumentation: true,
        totalResults: videos.length,
        responseTime: `${responseTime}ms`
      });
    }

    // Standard flow (without documentation)
    const [aiSummary, courseOutlines] = await Promise.all([
      generateAISummary(query, videos, language),
      generateCourseOutlines(videos)
    ]);

    // Combine data
    const videosWithOutlines = videos.map(video => ({
      ...video,
      courseOutline: courseOutlines[video.id] || null
    }));

    const responseTime = Date.now() - startTime;
    console.log(`⚡ Total response time: ${responseTime}ms`);

    return NextResponse.json({
      query,
      language,
      videos: videosWithOutlines,
      aiSummary,
      hasDocumentation: false,
      totalResults: videos.length,
      responseTime: `${responseTime}ms`
    });

  } catch (error) {
    console.error('❌ API Error:', error);

    if (error.message.includes('YouTube API')) {
      return NextResponse.json(
        { error: 'YouTube API error. Check your API key and quota.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: error.message || 'Unexpected error occurred' },
      { status: 500 }
    );
  }
}

// Health check endpoint
export async function GET() {
  return NextResponse.json({
    status: 'ok',
    message: 'YouTube Course Finder API',
    version: '2.0-optimized',
    endpoints: {
      search: 'POST /api/search-resources'
    }
  });
}