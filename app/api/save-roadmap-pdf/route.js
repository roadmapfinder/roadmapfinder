
import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { roadmapName, roadmapType, fileName, fileSize } = await request.json();

    // Store PDF metadata in a simple JSON structure
    // In a production app, you'd use a database
    const pdfMetadata = {
      id: Date.now().toString(),
      userId,
      roadmapName,
      roadmapType,
      fileName,
      fileSize,
      downloadedAt: new Date().toISOString(),
    };

    // For now, we'll return the metadata
    // In production, save to database
    return NextResponse.json({ 
      success: true, 
      metadata: pdfMetadata 
    });

  } catch (error) {
    console.error('Error saving PDF metadata:', error);
    return NextResponse.json(
      { error: 'Failed to save PDF metadata' },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // In production, fetch from database
    // For now, return from localStorage (client-side)
    return NextResponse.json({ 
      success: true,
      roadmaps: []
    });

  } catch (error) {
    console.error('Error fetching PDFs:', error);
    return NextResponse.json(
      { error: 'Failed to fetch PDFs' },
      { status: 500 }
    );
  }
}
